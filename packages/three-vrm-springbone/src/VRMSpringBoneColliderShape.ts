import type * as THREE from 'three';

/**
 * Represents a shape of a collider.
 */
export abstract class VRMSpringBoneColliderShape {
  /**
   * The type of the shape.
   */
  public abstract get type(): string;

  /**
   * The offset to the shape.
   */
  public offset?: THREE.Vector3;

  /**
   * Calculate a distance and a direction from the collider to a target object.
   * It's hit if the distance is negative.
   * The direction will be contained in the given target vector.
   *
   * @param colliderMatrix A matrix represents the transform of the collider
   * @param objectPosition A vector represents the position of the target object
   * @param objectRadius The radius of the object
   * @param target The result direction will be contained in this vector
   */
  public abstract calculateCollision(
    colliderMatrix: THREE.Matrix4,
    objectPosition: THREE.Vector3,
    objectRadius: number,
    target: THREE.Vector3,
  ): number;
}
