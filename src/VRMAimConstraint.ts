import * as THREE from 'three';
import { decomposePosition } from './utils/decomposePosition';
import { decomposeRotation } from './utils/decomposeRotation';
import { setAimQuaternion } from './utils/setAimQuaternion';
import { VRMConstraint } from './VRMConstraint';
import { VRMConstraintSpace } from './VRMConstraintSpace';

const QUAT_IDENTITY = new THREE.Quaternion(0, 0, 0, 1);

const _quatA = new THREE.Quaternion();
const _quatB = new THREE.Quaternion();
const _matA = new THREE.Matrix4();
const _v3UpdatePos = new THREE.Vector3();
const _v3UpdateScale = new THREE.Vector3();
const _v3GetRotationUp = new THREE.Vector3();
const _v3GetRotationPos = new THREE.Vector3();
const _v3GetRotationDir = new THREE.Vector3();
const _v3GetRotationPlaneX = new THREE.Vector3();
const _v3GetRotationPlaneY = new THREE.Vector3();
const _quatGetRotation = new THREE.Quaternion();

export class VRMAimConstraint extends VRMConstraint {
  /**
   * Represents the aim vector used for reference of aim rotation.
   * When set this, the vector will be normalized automatically.
   */
  private _aimVector = new THREE.Vector3(0.0, 0.0, 1.0);
  public get aimVector(): THREE.Vector3 {
    return this._aimVector;
  }
  public set aimVector(value: THREE.Vector3) {
    this._aimVector = value.normalize();
  }

  /**
   * Represents the up vector used for calculation of aim rotation.
   * When set this, the vector will be normalized automatically.
   */
  private _upVector = new THREE.Vector3(0.0, 1.0, 0.0);
  public get upVector(): THREE.Vector3 {
    return this._upVector;
  }
  public set upVector(value: THREE.Vector3) {
    this._upVector = value.normalize();
  }

  private _quatInitAim = new THREE.Quaternion();
  private _quatInvInitAim = new THREE.Quaternion();
  private _quatInitDst = new THREE.Quaternion();

  public setInitState(): void {
    this._quatInitDst.copy(this.object.quaternion);

    this._getAimQuat(this._quatInitAim);
    this._quatInvInitAim.copy(this._quatInitAim).inverse();
  }

  public update(): void {
    if (this.destinationSpace === VRMConstraintSpace.Local) {
      this.object.quaternion.copy(this._quatInitDst);
    } else {
      this._getParentMatrixInModelSpace(_matA);
      decomposeRotation(_matA, _quatA);
      this.object.quaternion.copy(_quatA).inverse();
    }

    this._getAimDiffQuat(_quatB);
    this.object.quaternion.multiply(_quatB);

    if (this.destinationSpace === VRMConstraintSpace.Model) {
      this.object.quaternion.multiply(_quatA);
      this.object.quaternion.multiply(this._quatInitDst);
    }

    this.object.updateMatrix();
  }

  /**
   * Return a quaternion that represents a diff from the initial -> current orientation of the aim direction.
   * It's aware of its {@link sourceSpace} and its {@link weight}.
   * @param target Target quaternion
   */
  private _getAimDiffQuat(target: THREE.Quaternion): typeof target {
    this._getAimQuat(target);
    target.multiply(this._quatInvInitAim);

    target.slerp(QUAT_IDENTITY, 1.0 - this.weight);
    return target;
  }

  /**
   * Return a current orientation of the aim direction.
   * It's aware of its {@link sourceSpace}.
   * @param target Target quaternion
   */
  private _getAimQuat(target: THREE.Quaternion): typeof target {
    return setAimQuaternion(
      target,
      this._getDestinationPosition(_v3GetRotationPos),
      this._getSourcePosition(_v3GetRotationDir),
      this._aimVector,
      this._upVector
    );
  }

  /**
   * Return the current position of the object.
   * It's aware of its {@link sourceSpace}.
   * @param target Target quaternion
   */
  private _getDestinationPosition(target: THREE.Vector3): typeof target {
    target.set(0.0, 0.0, 0.0);

    this._getDestinationMatrix(_matA);
    decomposePosition(_matA, target);

    return target;
  }

  /**
   * Return the current position of the source.
   * It's aware of its {@link sourceSpace}.
   * @param target Target quaternion
   */
  private _getSourcePosition(target: THREE.Vector3): typeof target {
    target.set(0.0, 0.0, 0.0);

    if (this._source) {
      this._getSourceMatrix(_matA);
      decomposePosition(_matA, target);
    }

    return target;
  }
}
