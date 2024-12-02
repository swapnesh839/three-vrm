import * as THREE from 'three';
import { VRMSpringBoneColliderShape } from './VRMSpringBoneColliderShape';

const _v3A = new THREE.Vector3();
const _v3B = new THREE.Vector3();

export class VRMSpringBoneColliderShapeCapsule extends VRMSpringBoneColliderShape {
  public get type(): 'capsule' {
    return 'capsule';
  }

  /**
   * The offset of the capsule head from the origin in local space.
   */
  public offset: THREE.Vector3;

  /**
   * The offset of the capsule tail from the origin in local space.
   */
  public tail: THREE.Vector3;

  /**
   * The radius of the capsule.
   */
  public radius: number;

  /**
   * If true, the collider prevents spring bones from going outside of the capsule instead.
   */
  public inside: boolean;

  public constructor(params?: { radius?: number; offset?: THREE.Vector3; tail?: THREE.Vector3; inside?: boolean }) {
    super();

    this.offset = params?.offset ?? new THREE.Vector3(0.0, 0.0, 0.0);
    this.tail = params?.tail ?? new THREE.Vector3(0.0, 0.0, 0.0);
    this.radius = params?.radius ?? 0.0;
    this.inside = params?.inside ?? false;
  }

  public calculateCollision(
    colliderMatrix: THREE.Matrix4,
    objectPosition: THREE.Vector3,
    objectRadius: number,
    target: THREE.Vector3,
  ): number {
    _v3A.setFromMatrixPosition(colliderMatrix); // transformed head
    _v3B.subVectors(this.tail, this.offset).applyMatrix4(colliderMatrix); // transformed tail
    _v3B.sub(_v3A); // from head to tail
    const lengthSqCapsule = _v3B.lengthSq();

    target.copy(objectPosition).sub(_v3A); // from head to object
    const dot = _v3B.dot(target); // dot product of offsetToTail and offsetToObject

    if (dot <= 0.0) {
      // if object is near from the head
      // do nothing, use the current value directly
    } else if (lengthSqCapsule <= dot) {
      // if object is near from the tail
      target.sub(_v3B); // from tail to object
    } else {
      // if object is between two ends
      _v3B.multiplyScalar(dot / lengthSqCapsule); // from head to the nearest point of the shaft
      target.sub(_v3B); // from the shaft point to object
    }

    const length = target.length();
    const distance = this.inside ? this.radius - objectRadius - length : length - objectRadius - this.radius;

    if (distance < 0) {
      target.multiplyScalar(1 / length); // convert the delta to the direction
      if (this.inside) {
        target.negate(); // if inside, reverse the direction
      }
    }

    return distance;
  }
}
