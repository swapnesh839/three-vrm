import * as THREE from 'three';
import type { VRMSpringBoneColliderShape } from './VRMSpringBoneColliderShape';

/**
 * Represents a collider of a VRM.
 */
export class VRMSpringBoneCollider extends THREE.Object3D {
  /**
   * The shape of the collider.
   */
  public readonly shape: VRMSpringBoneColliderShape;

  /**
   * World space matrix for the collider shape used in collision calculations.
   */
  public readonly colliderMatrix = new THREE.Matrix4();

  public constructor(shape: VRMSpringBoneColliderShape) {
    super();

    this.shape = shape;
  }

  public updateWorldMatrix(updateParents: boolean, updateChildren: boolean): void {
    super.updateWorldMatrix(updateParents, updateChildren);

    updateColliderMatrix(this.colliderMatrix, this.matrixWorld, this.shape.offset);
  }
}

/**
 * Computes the colliderMatrix based on an offset and a world matrix.
 * Equivalent to the following code when matrixWorld is an affine matrix:
 * ```js
 * out.makeTranslation(offset).premultiply(matrixWorld)
 * ```
 *
 * @param colliderMatrix The target matrix to store the result in.
 * @param matrixWorld The world matrix fo the collider object.
 * @param offset Optional offset to the collider shape.
 */
function updateColliderMatrix(colliderMatrix: THREE.Matrix4, matrixWorld: THREE.Matrix4, offset?: THREE.Vector3) {
  const me = matrixWorld.elements;

  colliderMatrix.copy(matrixWorld);

  if (offset) {
    colliderMatrix.elements[12] = me[0] * offset.x + me[4] * offset.y + me[8] * offset.z + me[12];
    colliderMatrix.elements[13] = me[1] * offset.x + me[5] * offset.y + me[9] * offset.z + me[13];
    colliderMatrix.elements[14] = me[2] * offset.x + me[6] * offset.y + me[10] * offset.z + me[14];
  }
}
