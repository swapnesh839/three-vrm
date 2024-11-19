import * as THREE from 'three';

/**
 * Traverses the given object and combines the skeletons of skinned meshes.
 *
 * Each frame the bone matrices are computed for every skeleton. Combining skeletons
 * reduces the number of calculations needed, improving performance.
 *
 * @param root Root object that will be traversed
 */
export function combineSkeletons(root: THREE.Object3D): void {
  const skinnedMeshes = new Set<THREE.SkinnedMesh>();
  const geometryToSkinnedMesh = new Map<THREE.BufferGeometry, THREE.SkinnedMesh>();

  // Traverse entire tree and collect skinned meshes
  root.traverse((obj) => {
    if (obj.type !== 'SkinnedMesh') {
      return;
    }

    const skinnedMesh = obj as THREE.SkinnedMesh;

    // Check if the geometry has already been encountered
    const previousSkinnedMesh = geometryToSkinnedMesh.get(skinnedMesh.geometry);
    if (previousSkinnedMesh) {
      // Skinned meshes that share their geometry with other skinned meshes can't be processed.
      // The skinnedMeshes already contain previousSkinnedMesh, so remove it now.
      skinnedMeshes.delete(previousSkinnedMesh);
    } else {
      geometryToSkinnedMesh.set(skinnedMesh.geometry, skinnedMesh);
      skinnedMeshes.add(skinnedMesh);
    }
  });

  // Prepare new skeletons for the skinned meshes
  const newSkeletons: Array<{ bones: THREE.Bone[]; boneInverses: THREE.Matrix4[]; meshes: THREE.SkinnedMesh[] }> = [];
  skinnedMeshes.forEach((skinnedMesh) => {
    const skeleton = skinnedMesh.skeleton;

    // Find suitable skeleton
    let newSkeleton = newSkeletons.find((candidate) => skeletonMatches(skeleton, candidate));
    if (!newSkeleton) {
      newSkeleton = { bones: [], boneInverses: [], meshes: [] };
      newSkeletons.push(newSkeleton);
    }

    // Add skinned mesh to the new skeleton
    newSkeleton.meshes.push(skinnedMesh);

    // Determine bone index mapping from skeleton -> newSkeleton
    const boneIndexMap: number[] = skeleton.bones.map((bone) => newSkeleton.bones.indexOf(bone));

    // Update skinIndex attribute
    const geometry = skinnedMesh.geometry;
    const attribute = geometry.getAttribute('skinIndex');
    const weightAttribute = geometry.getAttribute('skinWeight');

    for (let i = 0; i < attribute.count; i++) {
      for (let j = 0; j < attribute.itemSize; j++) {
        // check bone weight
        const weight = weightAttribute.getComponent(i, j);
        if (weight === 0) {
          continue;
        }

        const index = attribute.getComponent(i, j);

        // new skinIndex buffer
        if (boneIndexMap[index] === -1) {
          boneIndexMap[index] = newSkeleton.bones.length;
          newSkeleton.bones.push(skeleton.bones[index]);
          newSkeleton.boneInverses.push(skeleton.boneInverses[index]);
        }

        attribute.setComponent(i, j, boneIndexMap[index]);
      }
    }

    attribute.needsUpdate = true;
  });

  // Bind new skeleton to the meshes
  for (const { bones, boneInverses, meshes } of newSkeletons) {
    const newSkeleton = new THREE.Skeleton(bones, boneInverses);
    meshes.forEach((mesh) => mesh.bind(newSkeleton, new THREE.Matrix4()));
  }
}

/**
 * Checks if a given skeleton matches a candidate skeleton. For the skeletons to match,
 * all bones must either be in the candidate skeleton with the same boneInverse OR
 * not part of the candidate skeleton (as it can be added to it).
 * @param skeleton The skeleton to check.
 * @param candidate The candidate skeleton to match against.
 */
function skeletonMatches(skeleton: THREE.Skeleton, candidate: { bones: THREE.Bone[]; boneInverses: THREE.Matrix4[] }) {
  return skeleton.bones.every((bone, index) => {
    const candidateIndex = candidate.bones.indexOf(bone);
    if (candidateIndex !== -1) {
      return matrixEquals(skeleton.boneInverses[index], candidate.boneInverses[candidateIndex]);
    }
    return true;
  });
}

// https://github.com/mrdoob/three.js/blob/r170/test/unit/src/math/Matrix4.tests.js#L12
function matrixEquals(a: THREE.Matrix4, b: THREE.Matrix4, tolerance?: number) {
  tolerance = tolerance || 0.0001;
  if (a.elements.length != b.elements.length) {
    return false;
  }

  for (let i = 0, il = a.elements.length; i < il; i++) {
    const delta = Math.abs(a.elements[i] - b.elements[i]);
    if (delta > tolerance) {
      return false;
    }
  }

  return true;
}
