import * as THREE from 'three';
import { VRMCore, VRMExpressionMorphTargetBind } from '@pixiv/three-vrm-core';
import { temp } from 'three/webgpu';

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
  geometry: THREE.BufferGeometry,
  binds: Iterable<VRMExpressionMorphTargetBind>,
): [THREE.BufferAttribute, THREE.BufferAttribute] {
  const newPArr = new Float32Array(geometry.attributes.position.count * 3);
  const newNArr = new Float32Array(geometry.attributes.normal.count * 3);
  for (const bind of binds) {
    const srcP = geometry.morphAttributes.position[bind.index];
    for (let i = 0; i < srcP.count; i++) {
      newPArr[i * 3 + 0] += srcP.getX(i) * bind.weight;
      newPArr[i * 3 + 1] += srcP.getY(i) * bind.weight;
      newPArr[i * 3 + 2] += srcP.getZ(i) * bind.weight;
    }

    const srcN = geometry.morphAttributes.normal?.[bind.index];
    if (srcN != null) {
      for (let i = 0; i < srcN.count; i++) {
        newNArr[i * 3 + 0] += srcN.getX(i) * bind.weight;
        newNArr[i * 3 + 1] += srcN.getY(i) * bind.weight;
        newNArr[i * 3 + 2] += srcN.getZ(i) * bind.weight;
      }
    }
  }

  const newP = new THREE.BufferAttribute(newPArr, 3);
  const newN = new THREE.BufferAttribute(newNArr, 3);
  return [newP, newN];
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

    const morphAttributes: typeof geometry.morphAttributes = {
      position: [],
      normal: [],
    };

    const morphTargetDictionary: typeof mesh.morphTargetDictionary = {};
    const morphTargetInfluences: typeof mesh.morphTargetInfluences = [];

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
      const [newP, newN] = combineMorph(geometry, bindSet);
      morphAttributes.position[i] = newP;
      morphAttributes.normal[i] = newN;

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

    geometry.morphAttributes = morphAttributes;
    mesh.morphTargetDictionary = morphTargetDictionary;
    mesh.morphTargetInfluences = morphTargetInfluences;
  }
}
