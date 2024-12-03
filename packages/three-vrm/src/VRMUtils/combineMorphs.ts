import * as THREE from 'three';
import { VRMCore, VRMExpressionMorphTargetBind } from '@pixiv/three-vrm-core';

/**
 * Traverse an entire tree and collect meshes.
 */
function collectMeshes(scene: THREE.Group): Set<THREE.Mesh> {
  const meshes = new Set<THREE.Mesh>();

  scene.traverse((obj) => {
    if (!(obj as any).isMesh) {
      return;
    }

    const mesh = obj as THREE.Mesh;
    meshes.add(mesh);
  });

  return meshes;
}

function combineMorph(
  positionAttributes: (THREE.BufferAttribute | THREE.InterleavedBufferAttribute)[],
  binds: Iterable<VRMExpressionMorphTargetBind>,
  morphTargetsRelative: boolean,
): THREE.BufferAttribute {
  const newArray = new Float32Array(positionAttributes[0].count * 3);
  let weightSum = 0.0;

  if (morphTargetsRelative) {
    weightSum = 1.0;
  } else {
    for (const bind of binds) {
      weightSum += bind.weight;
    }
  }

  for (const bind of binds) {
    const src = positionAttributes[bind.index];
    const weight = bind.weight / weightSum;

    for (let i = 0; i < src.count; i++) {
      newArray[i * 3 + 0] += src.getX(i) * weight;
      newArray[i * 3 + 1] += src.getY(i) * weight;
      newArray[i * 3 + 2] += src.getZ(i) * weight;
    }
  }

  const newAttribute = new THREE.BufferAttribute(newArray, 3);
  return newAttribute;
}

/**
 * Combine morph targets by VRM expressions.
 *
 * This function prevents crashes caused by the limitation of the number of morph targets, especially on mobile devices.
 *
 * @param vrm The VRM instance
 */
export function combineMorphs(vrm: VRMCore): void {
  const meshes = collectMeshes(vrm.scene);

  // Iterate over all expressions and check which morph targets are used
  const meshBindListMap = new Map<THREE.Mesh, [string, VRMExpressionMorphTargetBind][]>();

  const expressionMap = vrm.expressionManager?.expressionMap;
  if (expressionMap != null) {
    for (const [expressionName, expression] of Object.entries(expressionMap)) {
      const bindsToDeleteSet = new Set<VRMExpressionMorphTargetBind>();
      for (const bind of expression.binds) {
        if (bind instanceof VRMExpressionMorphTargetBind) {
          if (bind.weight !== 0.0) {
            for (const mesh of bind.primitives) {
              const bindList = meshBindListMap.get(mesh) ?? [];
              bindList.push([expressionName, bind]);
              meshBindListMap.set(mesh, bindList);
            }
          }
          bindsToDeleteSet.add(bind);
        }
      }

      for (const bind of bindsToDeleteSet) {
        expression.deleteBind(bind);
      }
    }
  }

  // Combine morphs
  for (const mesh of meshes) {
    const bindList = meshBindListMap.get(mesh);
    if (bindList == null) {
      continue;
    }

    const geometry = mesh.geometry.clone();
    mesh.geometry = geometry;
    const morphTargetsRelative = geometry.morphTargetsRelative;

    const hasPMorph = geometry.morphAttributes.position != null;
    const hasNMorph = geometry.morphAttributes.normal != null;

    const morphAttributes: typeof geometry.morphAttributes = {};
    const morphTargetDictionary: typeof mesh.morphTargetDictionary = {};
    const morphTargetInfluences: typeof mesh.morphTargetInfluences = [];

    if (hasPMorph || hasNMorph) {
      if (hasPMorph) {
        morphAttributes.position = [];
      }
      if (hasNMorph) {
        morphAttributes.normal = [];
      }

      const nameBindSetMap = new Map<string, Set<VRMExpressionMorphTargetBind>>();
      for (const [name, bind] of bindList) {
        let set = nameBindSetMap.get(name);
        if (set == null) {
          set = new Set<VRMExpressionMorphTargetBind>();
          nameBindSetMap.set(name, set);
        }
        set.add(bind);
      }

      let i = 0;
      for (const [name, bindSet] of nameBindSetMap) {
        if (hasPMorph) {
          morphAttributes.position[i] = combineMorph(geometry.morphAttributes.position, bindSet, morphTargetsRelative);
        }
        if (hasNMorph) {
          morphAttributes.normal[i] = combineMorph(geometry.morphAttributes.normal, bindSet, morphTargetsRelative);
        }

        expressionMap?.[name].addBind(
          new VRMExpressionMorphTargetBind({
            index: i,
            weight: 1.0,
            primitives: [mesh],
          }),
        );

        morphTargetDictionary[name] = i;
        morphTargetInfluences.push(0.0);

        i++;
      }
    }

    geometry.morphAttributes = morphAttributes;
    mesh.morphTargetDictionary = morphTargetDictionary;
    mesh.morphTargetInfluences = morphTargetInfluences;
  }
}
