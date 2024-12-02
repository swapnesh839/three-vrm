import type * as THREE from 'three';

/**
 * Finds the lowest common ancestors of the given objects, if it exists.
 * @param objects The objects to find the lowest common ancestor for.
 */
export function lowestCommonAncestor(objects: Set<THREE.Object3D>): THREE.Object3D | null {
  const sharedAncestors = new Map<THREE.Object3D, number>();
  for (const object of objects) {
    let current: THREE.Object3D | null = object;
    do {
      const newValue = (sharedAncestors.get(current) ?? 0) + 1;
      if (newValue === objects.size) {
        return current;
      }
      sharedAncestors.set(current, newValue);
      current = current.parent;
    } while (current !== null);
  }
  return null;
}
