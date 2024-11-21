import * as THREE from 'three/webgpu';

export const shadeColor = THREE.nodeImmutable(THREE.PropertyNode, 'vec3').toVar('ShadeColor');
export const shadingShift = THREE.nodeImmutable(THREE.PropertyNode, 'float').toVar('ShadingShift');
export const shadingToony = THREE.nodeImmutable(THREE.PropertyNode, 'float').toVar('ShadingToony');
export const rimLightingMix = THREE.nodeImmutable(THREE.PropertyNode, 'float').toVar('RimLightingMix');
export const rimMultiply = THREE.nodeImmutable(THREE.PropertyNode, 'vec3').toVar('RimMultiply');
export const matcap = THREE.nodeImmutable(THREE.PropertyNode, 'vec3').toVar('matcap');
export const parametricRim = THREE.nodeImmutable(THREE.PropertyNode, 'vec3').toVar('ParametricRim');
