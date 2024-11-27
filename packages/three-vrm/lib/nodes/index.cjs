/*!
 * @pixiv/three-vrm v3.2.0
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/nodes/index.ts
var nodes_exports = {};
__export(nodes_exports, {
  MToonAnimatedUVNode: () => MToonAnimatedUVNode,
  MToonLightingModel: () => MToonLightingModel,
  MToonNodeMaterial: () => MToonNodeMaterial
});
module.exports = __toCommonJS(nodes_exports);

// ../three-vrm-materials-mtoon/lib/nodes/index.module.js
var THREE = __toESM(require("three"), 1);
var THREE3 = __toESM(require("three/webgpu"), 1);
var THREE2 = __toESM(require("three/webgpu"), 1);
var THREE6 = __toESM(require("three/webgpu"), 1);
var THREE4 = __toESM(require("three/webgpu"), 1);
var THREE5 = __toESM(require("three/webgpu"), 1);
var THREE8 = __toESM(require("three/webgpu"), 1);
var THREE7 = __toESM(require("three/webgpu"), 1);
var threeRevision = parseInt(THREE.REVISION, 10);
if (threeRevision < 167) {
  console.warn(
    `MToonNodeMaterial requires Three.js r167 or higher (You are using r${threeRevision}). This would not work correctly.`
  );
}
var refColor = THREE2.materialReference("color", "color");
var refMap = THREE2.materialReference("map", "texture");
var refNormalMap = THREE2.materialReference("normalMap", "texture");
var refNormalScale = THREE2.materialReference("normalScale", "vec2");
var refEmissive = THREE2.materialReference("emissive", "color");
var refEmissiveIntensity = THREE2.materialReference("emissiveIntensity", "float");
var refEmissiveMap = THREE2.materialReference("emissiveMap", "texture");
var refShadeColorFactor = THREE2.materialReference("shadeColorFactor", "color");
var refShadingShiftFactor = THREE2.materialReference("shadingShiftFactor", "float");
var refShadeMultiplyTexture = THREE2.materialReference("shadeMultiplyTexture", "texture");
var refShadeMultiplyTextureScale = THREE2.materialReference("shadeMultiplyTextureScale", "float");
var refShadingToonyFactor = THREE2.materialReference("shadingToonyFactor", "float");
var refRimLightingMixFactor = THREE2.materialReference("rimLightingMixFactor", "float");
var refRimMultiplyTexture = THREE2.materialReference("rimMultiplyTexture", "texture");
var refMatcapFactor = THREE2.materialReference("matcapFactor", "color");
var refMatcapTexture = THREE2.materialReference("matcapTexture", "texture");
var refParametricRimColorFactor = THREE2.materialReference("parametricRimColorFactor", "color");
var refParametricRimLiftFactor = THREE2.materialReference("parametricRimLiftFactor", "float");
var refParametricRimFresnelPowerFactor = THREE2.materialReference("parametricRimFresnelPowerFactor", "float");
var refOutlineWidthMultiplyTexture = THREE2.materialReference("outlineWidthMultiplyTexture", "texture");
var refOutlineWidthFactor = THREE2.materialReference("outlineWidthFactor", "float");
var refOutlineColorFactor = THREE2.materialReference("outlineColorFactor", "color");
var refOutlineLightingMixFactor = THREE2.materialReference("outlineLightingMixFactor", "float");
var refUVAnimationMaskTexture = THREE2.materialReference("uvAnimationMaskTexture", "texture");
var refUVAnimationScrollXOffset = THREE2.materialReference("uvAnimationScrollXOffset", "float");
var refUVAnimationScrollYOffset = THREE2.materialReference("uvAnimationScrollYOffset", "float");
var refUVAnimationRotationPhase = THREE2.materialReference("uvAnimationRotationPhase", "float");
var MToonAnimatedUVNode = class extends THREE3.TempNode {
  constructor(hasMaskTexture) {
    super("vec2");
    this.hasMaskTexture = hasMaskTexture;
  }
  setup() {
    let uvAnimationMask = 1;
    if (this.hasMaskTexture) {
      uvAnimationMask = THREE3.vec4(refUVAnimationMaskTexture).context({ getUV: () => THREE3.uv() }).r;
    }
    let uv2 = THREE3.uv();
    const phase = refUVAnimationRotationPhase.mul(uvAnimationMask);
    const c = THREE3.cos(phase);
    const s = THREE3.sin(phase);
    uv2 = uv2.sub(THREE3.vec2(0.5, 0.5));
    uv2 = uv2.mul(THREE3.mat2(c, s, s.negate(), c));
    uv2 = uv2.add(THREE3.vec2(0.5, 0.5));
    const scroll = THREE3.vec2(refUVAnimationScrollXOffset, refUVAnimationScrollYOffset).mul(uvAnimationMask);
    uv2 = uv2.add(scroll);
    return uv2.toVar("AnimatedUV");
  }
};
var shadeColor = THREE4.nodeImmutable(THREE4.PropertyNode, "vec3").toVar("ShadeColor");
var shadingShift = THREE4.nodeImmutable(THREE4.PropertyNode, "float").toVar("ShadingShift");
var shadingToony = THREE4.nodeImmutable(THREE4.PropertyNode, "float").toVar("ShadingToony");
var rimLightingMix = THREE4.nodeImmutable(THREE4.PropertyNode, "float").toVar("RimLightingMix");
var rimMultiply = THREE4.nodeImmutable(THREE4.PropertyNode, "vec3").toVar("RimMultiply");
var matcap = THREE4.nodeImmutable(THREE4.PropertyNode, "vec3").toVar("matcap");
var parametricRim = THREE4.nodeImmutable(THREE4.PropertyNode, "vec3").toVar("ParametricRim");
var FnCompat = (jsFunc) => {
  const threeRevision2 = parseInt(THREE5.REVISION, 10);
  if (threeRevision2 >= 168) {
    return THREE5.Fn(jsFunc);
  } else {
    return THREE5.tslFn(jsFunc);
  }
};
var linearstep = FnCompat(
  ({
    a,
    b,
    t
  }) => {
    const top = t.sub(a);
    const bottom = b.sub(a);
    return top.div(bottom).clamp();
  }
);
var getShading = FnCompat(({ dotNL }) => {
  const shadow = 1;
  const feather = THREE6.float(1).sub(shadingToony);
  let shading = dotNL.add(shadingShift);
  shading = linearstep({
    a: feather.negate(),
    b: feather,
    t: shading
  });
  shading = shading.mul(shadow);
  return shading;
});
var getDiffuse = FnCompat(
  ({
    shading,
    lightColor
  }) => {
    const diffuseColor3 = THREE6.mix(shadeColor, THREE6.diffuseColor, shading);
    const col = lightColor.mul(THREE6.BRDF_Lambert({ diffuseColor: diffuseColor3 }));
    return col;
  }
);
var MToonLightingModel = class extends THREE6.LightingModel {
  constructor() {
    super();
  }
  direct({ lightDirection, lightColor, reflectedLight }) {
    const dotNL = THREE6.transformedNormalView.dot(lightDirection).clamp(-1, 1);
    const shading = getShading({
      dotNL
    });
    reflectedLight.directDiffuse.assign(
      reflectedLight.directDiffuse.add(
        getDiffuse({
          shading,
          lightColor
        })
      )
    );
    reflectedLight.directSpecular.assign(
      reflectedLight.directSpecular.add(
        parametricRim.add(matcap).mul(rimMultiply).mul(THREE6.mix(THREE6.vec3(0), THREE6.BRDF_Lambert({ diffuseColor: lightColor }), rimLightingMix))
      )
    );
  }
  indirect(context) {
    this.indirectDiffuse(context);
    this.indirectSpecular(context);
  }
  indirectDiffuse({ irradiance, reflectedLight }) {
    reflectedLight.indirectDiffuse.assign(
      reflectedLight.indirectDiffuse.add(
        irradiance.mul(
          THREE6.BRDF_Lambert({
            diffuseColor: THREE6.diffuseColor
          })
        )
      )
    );
  }
  indirectSpecular({ reflectedLight }) {
    reflectedLight.indirectSpecular.assign(
      reflectedLight.indirectSpecular.add(
        parametricRim.add(matcap).mul(rimMultiply).mul(THREE6.mix(THREE6.vec3(1), THREE6.vec3(0), rimLightingMix))
      )
    );
  }
};
var MToonMaterialOutlineWidthMode = {
  None: "none",
  WorldCoordinates: "worldCoordinates",
  ScreenCoordinates: "screenCoordinates"
};
var mtoonParametricRim = FnCompat(
  ({
    parametricRimLift,
    parametricRimFresnelPower,
    parametricRimColor
  }) => {
    const viewDir = THREE7.modelViewPosition.normalize();
    const dotNV = THREE7.transformedNormalView.dot(viewDir.negate());
    const rim = THREE7.float(1).sub(dotNV).add(parametricRimLift).clamp().pow(parametricRimFresnelPower);
    return rim.mul(parametricRimColor);
  }
);
var MToonNodeMaterial = class extends THREE8.NodeMaterial {
  customProgramCacheKey() {
    let cacheKey = super.customProgramCacheKey();
    cacheKey += `isOutline:${this.isOutline},`;
    return cacheKey;
  }
  /**
   * Readonly boolean that indicates this is a {@link MToonNodeMaterial}.
   */
  get isMToonNodeMaterial() {
    return true;
  }
  constructor(parameters = {}) {
    super();
    if (parameters.transparentWithZWrite) {
      parameters.depthWrite = true;
    }
    delete parameters.transparentWithZWrite;
    delete parameters.giEqualizationFactor;
    delete parameters.v0CompatShade;
    delete parameters.debugMode;
    this.emissiveNode = null;
    this.lights = true;
    this.color = new THREE8.Color(1, 1, 1);
    this.map = null;
    this.emissive = new THREE8.Color(0, 0, 0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.normalMap = null;
    this.normalScale = new THREE8.Vector2(1, 1);
    this.shadeColorFactor = new THREE8.Color(0, 0, 0);
    this.shadeMultiplyTexture = null;
    this.shadingShiftFactor = 0;
    this.shadingShiftTexture = null;
    this.shadingShiftTextureScale = 1;
    this.shadingToonyFactor = 0.9;
    this.rimLightingMixFactor = 1;
    this.rimMultiplyTexture = null;
    this.matcapFactor = new THREE8.Color(1, 1, 1);
    this.matcapTexture = null;
    this.parametricRimColorFactor = new THREE8.Color(0, 0, 0);
    this.parametricRimLiftFactor = 0;
    this.parametricRimFresnelPowerFactor = 5;
    this.outlineWidthMode = MToonMaterialOutlineWidthMode.None;
    this.outlineWidthMultiplyTexture = null;
    this.outlineWidthFactor = 0;
    this.outlineColorFactor = new THREE8.Color(0, 0, 0);
    this.outlineLightingMixFactor = 1;
    this.uvAnimationScrollXSpeedFactor = 0;
    this.uvAnimationScrollYSpeedFactor = 0;
    this.uvAnimationRotationSpeedFactor = 0;
    this.uvAnimationMaskTexture = null;
    this.shadeColorNode = null;
    this.shadingShiftNode = null;
    this.shadingToonyNode = null;
    this.rimLightingMixNode = null;
    this.rimMultiplyNode = null;
    this.matcapNode = null;
    this.parametricRimColorNode = null;
    this.parametricRimLiftNode = null;
    this.parametricRimFresnelPowerNode = null;
    this.uvAnimationScrollXOffset = 0;
    this.uvAnimationScrollYOffset = 0;
    this.uvAnimationRotationPhase = 0;
    this.isOutline = false;
    this._animatedUVNode = null;
    this.setValues(parameters);
  }
  setupLightingModel() {
    return new MToonLightingModel();
  }
  setup(builder) {
    var _a;
    this._animatedUVNode = new MToonAnimatedUVNode(
      (_a = this.uvAnimationMaskTexture && this.uvAnimationMaskTexture.isTexture === true) != null ? _a : false
    );
    super.setup(builder);
  }
  setupDiffuseColor(builder) {
    let tempColorNode = null;
    if (this.colorNode == null) {
      tempColorNode = refColor;
      if (this.map && this.map.isTexture === true) {
        const map = refMap.context({ getUV: () => this._animatedUVNode });
        tempColorNode = tempColorNode.mul(map);
      }
      this.colorNode = tempColorNode;
    }
    if (this.vertexColors === true && builder.geometry.hasAttribute("color")) {
      console.warn(
        "MToonNodeMaterial: MToon ignores vertex colors. Consider using a model without vertex colors instead."
      );
      this.vertexColors = false;
    }
    super.setupDiffuseColor(builder);
    if (parseInt(THREE8.REVISION, 10) < 166) {
      if (this.transparent === false && this.blending === THREE8.NormalBlending && this.alphaToCoverage === false) {
        THREE8.diffuseColor.a.assign(1);
      }
    }
    if (this.colorNode === tempColorNode) {
      this.colorNode = null;
    }
  }
  setupVariants() {
    shadeColor.assign(this._setupShadeColorNode());
    shadingShift.assign(this._setupShadingShiftNode());
    shadingToony.assign(this._setupShadingToonyNode());
    rimLightingMix.assign(this._setupRimLightingMixNode());
    rimMultiply.assign(this._setupRimMultiplyNode());
    matcap.assign(this._setupMatcapNode());
    parametricRim.assign(this._setupParametricRimNode());
  }
  setupNormal(builder) {
    const tempNormalNode = this.normalNode;
    if (this.normalNode == null) {
      this.normalNode = THREE8.materialNormal;
      if (this.normalMap && this.normalMap.isTexture === true) {
        const map = refNormalMap.context({ getUV: () => this._animatedUVNode });
        this.normalNode = THREE8.normalMap(map, refNormalScale);
      }
      if (this.isOutline) {
        this.normalNode = this.normalNode.negate();
      }
    }
    const threeRevision2 = parseInt(THREE8.REVISION, 10);
    if (threeRevision2 >= 168) {
      const ret = this.normalNode;
      this.normalNode = tempNormalNode;
      return ret;
    } else {
      super.setupNormal(builder);
      this.normalNode = tempNormalNode;
      return void 0;
    }
  }
  setupLighting(builder) {
    let tempEmissiveNode = null;
    if (this.emissiveNode == null) {
      tempEmissiveNode = refEmissive.mul(refEmissiveIntensity);
      if (this.emissiveMap && this.emissiveMap.isTexture === true) {
        const map = refEmissiveMap.context({ getUV: () => this._animatedUVNode });
        tempEmissiveNode = tempEmissiveNode.mul(map);
      }
      this.emissiveNode = tempEmissiveNode;
    }
    const ret = super.setupLighting(builder);
    if (this.emissiveNode === tempEmissiveNode) {
      this.emissiveNode = null;
    }
    return ret;
  }
  setupOutput(builder, outputNode) {
    if (this.isOutline && this.outlineWidthMode !== MToonMaterialOutlineWidthMode.None) {
      outputNode = THREE8.vec4(
        THREE8.mix(refOutlineColorFactor, outputNode.xyz.mul(refOutlineColorFactor), refOutlineLightingMixFactor),
        outputNode.w
      );
    }
    return super.setupOutput(builder, outputNode);
  }
  setupPosition(builder) {
    var _a, _b;
    const tempPositionNode = this.positionNode;
    if (this.isOutline && this.outlineWidthMode !== MToonMaterialOutlineWidthMode.None) {
      (_a = this.positionNode) != null ? _a : this.positionNode = THREE8.positionLocal;
      const normalLocal2 = THREE8.normalLocal.normalize();
      let width = refOutlineWidthFactor;
      if (this.outlineWidthMultiplyTexture && this.outlineWidthMultiplyTexture.isTexture === true) {
        const map = refOutlineWidthMultiplyTexture.context({ getUV: () => this._animatedUVNode });
        width = width.mul(map);
      }
      const worldNormalLength = THREE8.length(THREE8.modelNormalMatrix.mul(normalLocal2));
      const outlineOffset = width.mul(worldNormalLength).mul(normalLocal2);
      if (this.outlineWidthMode === MToonMaterialOutlineWidthMode.WorldCoordinates) {
        this.positionNode = this.positionNode.add(outlineOffset);
      } else if (this.outlineWidthMode === MToonMaterialOutlineWidthMode.ScreenCoordinates) {
        const clipScale = THREE8.cameraProjectionMatrix.element(1).element(1);
        this.positionNode = this.positionNode.add(
          outlineOffset.div(clipScale).mul(THREE8.positionView.z.negate())
        );
      }
      (_b = this.positionNode) != null ? _b : this.positionNode = THREE8.positionLocal;
    }
    const ret = super.setupPosition(builder);
    ret.z.add(ret.w.mul(1e-6));
    this.positionNode = tempPositionNode;
    return ret;
  }
  copy(source) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
    this.color.copy(source.color);
    this.map = (_a = source.map) != null ? _a : null;
    this.emissive.copy(source.emissive);
    this.emissiveIntensity = source.emissiveIntensity;
    this.emissiveMap = (_b = source.emissiveMap) != null ? _b : null;
    this.normalMap = (_c = source.normalMap) != null ? _c : null;
    this.normalScale.copy(source.normalScale);
    this.shadeColorFactor.copy(source.shadeColorFactor);
    this.shadeMultiplyTexture = (_d = source.shadeMultiplyTexture) != null ? _d : null;
    this.shadingShiftFactor = source.shadingShiftFactor;
    this.shadingShiftTexture = (_e = source.shadingShiftTexture) != null ? _e : null;
    this.shadingShiftTextureScale = source.shadingShiftTextureScale;
    this.shadingToonyFactor = source.shadingToonyFactor;
    this.rimLightingMixFactor = source.rimLightingMixFactor;
    this.rimMultiplyTexture = (_f = source.rimMultiplyTexture) != null ? _f : null;
    this.matcapFactor.copy(source.matcapFactor);
    this.matcapTexture = (_g = source.matcapTexture) != null ? _g : null;
    this.parametricRimColorFactor.copy(source.parametricRimColorFactor);
    this.parametricRimLiftFactor = source.parametricRimLiftFactor;
    this.parametricRimFresnelPowerFactor = source.parametricRimFresnelPowerFactor;
    this.outlineWidthMode = source.outlineWidthMode;
    this.outlineWidthMultiplyTexture = (_h = source.outlineWidthMultiplyTexture) != null ? _h : null;
    this.outlineWidthFactor = source.outlineWidthFactor;
    this.outlineColorFactor.copy(source.outlineColorFactor);
    this.outlineLightingMixFactor = source.outlineLightingMixFactor;
    this.uvAnimationScrollXSpeedFactor = source.uvAnimationScrollXSpeedFactor;
    this.uvAnimationScrollYSpeedFactor = source.uvAnimationScrollYSpeedFactor;
    this.uvAnimationRotationSpeedFactor = source.uvAnimationRotationSpeedFactor;
    this.uvAnimationMaskTexture = (_i = source.uvAnimationMaskTexture) != null ? _i : null;
    this.shadeColorNode = (_j = source.shadeColorNode) != null ? _j : null;
    this.shadingShiftNode = (_k = source.shadingShiftNode) != null ? _k : null;
    this.shadingToonyNode = (_l = source.shadingToonyNode) != null ? _l : null;
    this.rimLightingMixNode = (_m = source.rimLightingMixNode) != null ? _m : null;
    this.rimMultiplyNode = (_n = source.rimMultiplyNode) != null ? _n : null;
    this.matcapNode = (_o = source.matcapNode) != null ? _o : null;
    this.parametricRimColorNode = (_p = source.parametricRimColorNode) != null ? _p : null;
    this.parametricRimLiftNode = (_q = source.parametricRimLiftNode) != null ? _q : null;
    this.parametricRimFresnelPowerNode = (_r = source.parametricRimFresnelPowerNode) != null ? _r : null;
    this.isOutline = (_s = source.isOutline) != null ? _s : null;
    return super.copy(source);
  }
  update(delta) {
    this.uvAnimationScrollXOffset += delta * this.uvAnimationScrollXSpeedFactor;
    this.uvAnimationScrollYOffset += delta * this.uvAnimationScrollYSpeedFactor;
    this.uvAnimationRotationPhase += delta * this.uvAnimationRotationSpeedFactor;
  }
  _setupShadeColorNode() {
    if (this.shadeColorNode != null) {
      return THREE8.vec3(this.shadeColorNode);
    }
    let shadeColorNode = refShadeColorFactor;
    if (this.shadeMultiplyTexture && this.shadeMultiplyTexture.isTexture === true) {
      const map = refShadeMultiplyTexture.context({ getUV: () => this._animatedUVNode });
      shadeColorNode = shadeColorNode.mul(map);
    }
    return shadeColorNode;
  }
  _setupShadingShiftNode() {
    if (this.shadingShiftNode != null) {
      return THREE8.float(this.shadingShiftNode);
    }
    let shadingShiftNode = refShadingShiftFactor;
    if (this.shadingShiftTexture && this.shadingShiftTexture.isTexture === true) {
      const map = refShadeMultiplyTexture.context({ getUV: () => this._animatedUVNode });
      shadingShiftNode = shadingShiftNode.add(map.mul(refShadeMultiplyTextureScale));
    }
    return shadingShiftNode;
  }
  _setupShadingToonyNode() {
    if (this.shadingToonyNode != null) {
      return THREE8.float(this.shadingToonyNode);
    }
    return refShadingToonyFactor;
  }
  _setupRimLightingMixNode() {
    if (this.rimLightingMixNode != null) {
      return THREE8.float(this.rimLightingMixNode);
    }
    return refRimLightingMixFactor;
  }
  _setupRimMultiplyNode() {
    if (this.rimMultiplyNode != null) {
      return THREE8.vec3(this.rimMultiplyNode);
    }
    if (this.rimMultiplyTexture && this.rimMultiplyTexture.isTexture === true) {
      const map = refRimMultiplyTexture.context({ getUV: () => this._animatedUVNode });
      return map;
    }
    return THREE8.vec3(1);
  }
  _setupMatcapNode() {
    if (this.matcapNode != null) {
      return THREE8.vec3(this.matcapNode);
    }
    if (this.matcapTexture && this.matcapTexture.isTexture === true) {
      const map = refMatcapTexture.context({ getUV: () => THREE8.matcapUV.mul(1, -1).add(0, 1) });
      return map.mul(refMatcapFactor);
    }
    return THREE8.vec3(0);
  }
  _setupParametricRimNode() {
    const parametricRimColor = this.parametricRimColorNode != null ? THREE8.vec3(this.parametricRimColorNode) : refParametricRimColorFactor;
    const parametricRimLift = this.parametricRimLiftNode != null ? THREE8.float(this.parametricRimLiftNode) : refParametricRimLiftFactor;
    const parametricRimFresnelPower = this.parametricRimFresnelPowerNode != null ? THREE8.float(this.parametricRimFresnelPowerNode) : refParametricRimFresnelPowerFactor;
    return mtoonParametricRim({
      parametricRimLift,
      parametricRimFresnelPower,
      parametricRimColor
    });
  }
};
/*!
 * @pixiv/three-vrm-materials-mtoon v3.2.0
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL25vZGVzL2luZGV4LnRzIiwgIi4uLy4uLy4uL3RocmVlLXZybS1tYXRlcmlhbHMtbXRvb24vc3JjL25vZGVzL3dhcm5pbmdJZlByZTE2MS50cyIsICIuLi8uLi8uLi90aHJlZS12cm0tbWF0ZXJpYWxzLW10b29uL3NyYy9ub2Rlcy9NVG9vbkFuaW1hdGVkVVZOb2RlLnRzIiwgIi4uLy4uLy4uL3RocmVlLXZybS1tYXRlcmlhbHMtbXRvb24vc3JjL25vZGVzL21hdGVyaWFsUmVmZXJlbmNlcy50cyIsICIuLi8uLi8uLi90aHJlZS12cm0tbWF0ZXJpYWxzLW10b29uL3NyYy9ub2Rlcy9NVG9vbkxpZ2h0aW5nTW9kZWwudHMiLCAiLi4vLi4vLi4vdGhyZWUtdnJtLW1hdGVyaWFscy1tdG9vbi9zcmMvbm9kZXMvaW1tdXRhYmxlTm9kZXMudHMiLCAiLi4vLi4vLi4vdGhyZWUtdnJtLW1hdGVyaWFscy1tdG9vbi9zcmMvbm9kZXMvdXRpbHMvRm5Db21wYXQudHMiLCAiLi4vLi4vLi4vdGhyZWUtdnJtLW1hdGVyaWFscy1tdG9vbi9zcmMvbm9kZXMvTVRvb25Ob2RlTWF0ZXJpYWwudHMiLCAiLi4vLi4vLi4vdGhyZWUtdnJtLW1hdGVyaWFscy1tdG9vbi9zcmMvTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUudHMiLCAiLi4vLi4vLi4vdGhyZWUtdnJtLW1hdGVyaWFscy1tdG9vbi9zcmMvbm9kZXMvbXRvb25QYXJhbWV0cmljUmltLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICdAcGl4aXYvdGhyZWUtdnJtLW1hdGVyaWFscy1tdG9vbi9ub2Rlcyc7XG4iLCAiLy8gVGhpcyBtb2R1bGUgd2lsbCBiZSBpbXBvcnRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIGB0aHJlZS12cm0tbWF0ZXJpYWxzLW10b29uL25vZGVzYFxuLy8gSWYgdGhlIHZlcnNpb24gb2YgVGhyZWUuanMgaXMgbGVzcyB0aGFuIHIxNjcsIGl0IHdpbGwgd2FybiB0aGF0IGl0IGlzIG5vdCBzdXBwb3J0ZWRcblxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5jb25zdCB0aHJlZVJldmlzaW9uID0gcGFyc2VJbnQoVEhSRUUuUkVWSVNJT04sIDEwKTtcbmlmICh0aHJlZVJldmlzaW9uIDwgMTY3KSB7XG4gIGNvbnNvbGUud2FybihcbiAgICBgTVRvb25Ob2RlTWF0ZXJpYWwgcmVxdWlyZXMgVGhyZWUuanMgcjE2NyBvciBoaWdoZXIgKFlvdSBhcmUgdXNpbmcgciR7dGhyZWVSZXZpc2lvbn0pLiBUaGlzIHdvdWxkIG5vdCB3b3JrIGNvcnJlY3RseS5gLFxuICApO1xufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlL3dlYmdwdSc7XG5pbXBvcnQge1xuICByZWZVVkFuaW1hdGlvbk1hc2tUZXh0dXJlLFxuICByZWZVVkFuaW1hdGlvblJvdGF0aW9uUGhhc2UsXG4gIHJlZlVWQW5pbWF0aW9uU2Nyb2xsWE9mZnNldCxcbiAgcmVmVVZBbmltYXRpb25TY3JvbGxZT2Zmc2V0LFxufSBmcm9tICcuL21hdGVyaWFsUmVmZXJlbmNlcyc7XG5cbmV4cG9ydCBjbGFzcyBNVG9vbkFuaW1hdGVkVVZOb2RlIGV4dGVuZHMgVEhSRUUuVGVtcE5vZGUge1xuICBwdWJsaWMgcmVhZG9ubHkgaGFzTWFza1RleHR1cmU6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGhhc01hc2tUZXh0dXJlOiBib29sZWFuKSB7XG4gICAgc3VwZXIoJ3ZlYzInKTtcblxuICAgIHRoaXMuaGFzTWFza1RleHR1cmUgPSBoYXNNYXNrVGV4dHVyZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cCgpOiBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLlZhck5vZGU+IHtcbiAgICBsZXQgdXZBbmltYXRpb25NYXNrOiBUSFJFRS5Ob2RlUmVwcmVzZW50YXRpb24gPSAxLjA7XG5cbiAgICBpZiAodGhpcy5oYXNNYXNrVGV4dHVyZSkge1xuICAgICAgdXZBbmltYXRpb25NYXNrID0gVEhSRUUudmVjNChyZWZVVkFuaW1hdGlvbk1hc2tUZXh0dXJlKS5jb250ZXh0KHsgZ2V0VVY6ICgpID0+IFRIUkVFLnV2KCkgfSkucjtcbiAgICB9XG5cbiAgICBsZXQgdXY6IFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuU3dpenphYmxlPiA9IFRIUkVFLnV2KCk7XG5cbiAgICAvLyByb3RhdGVcbiAgICBjb25zdCBwaGFzZSA9IHJlZlVWQW5pbWF0aW9uUm90YXRpb25QaGFzZS5tdWwodXZBbmltYXRpb25NYXNrKTtcblxuICAgIC8vIFdPUktBUk9VTkQ6IFRIUkVFLnJvdGF0ZVVWIGNhdXNlcyBhbiBpc3N1ZSB3aXRoIHRoZSBtYXNrIHRleHR1cmVcbiAgICAvLyBXZSBhcmUgZ29pbmcgdG8gc3BpbiB1c2luZyBhIDEwMCUgb3JnYW5pYyBoYW5kbWFkZSByb3RhdGlvbiBtYXRyaXhcbiAgICAvLyB1diA9IFRIUkVFLnJvdGF0ZVVWKHV2LCBwaGFzZSwgVEhSRUUudmVjMigwLjUsIDAuNSkpO1xuXG4gICAgY29uc3QgYyA9IFRIUkVFLmNvcyhwaGFzZSk7XG4gICAgY29uc3QgcyA9IFRIUkVFLnNpbihwaGFzZSk7XG4gICAgdXYgPSB1di5zdWIoVEhSRUUudmVjMigwLjUsIDAuNSkpO1xuICAgIHV2ID0gdXYubXVsKFRIUkVFLm1hdDIoYywgcywgcy5uZWdhdGUoKSwgYykpO1xuICAgIHV2ID0gdXYuYWRkKFRIUkVFLnZlYzIoMC41LCAwLjUpKTtcblxuICAgIC8vIHNjcm9sbFxuICAgIGNvbnN0IHNjcm9sbCA9IFRIUkVFLnZlYzIocmVmVVZBbmltYXRpb25TY3JvbGxYT2Zmc2V0LCByZWZVVkFuaW1hdGlvblNjcm9sbFlPZmZzZXQpLm11bCh1dkFuaW1hdGlvbk1hc2spO1xuICAgIHV2ID0gdXYuYWRkKHNjcm9sbCk7XG5cbiAgICByZXR1cm4gdXYudG9WYXIoJ0FuaW1hdGVkVVYnKTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlL3dlYmdwdSc7XG5cbmV4cG9ydCBjb25zdCByZWZDb2xvciA9IFRIUkVFLm1hdGVyaWFsUmVmZXJlbmNlKCdjb2xvcicsICdjb2xvcicpO1xuZXhwb3J0IGNvbnN0IHJlZk1hcCA9IFRIUkVFLm1hdGVyaWFsUmVmZXJlbmNlKCdtYXAnLCAndGV4dHVyZScpO1xuZXhwb3J0IGNvbnN0IHJlZk5vcm1hbE1hcCA9IFRIUkVFLm1hdGVyaWFsUmVmZXJlbmNlKCdub3JtYWxNYXAnLCAndGV4dHVyZScpO1xuZXhwb3J0IGNvbnN0IHJlZk5vcm1hbFNjYWxlID0gVEhSRUUubWF0ZXJpYWxSZWZlcmVuY2UoJ25vcm1hbFNjYWxlJywgJ3ZlYzInKTtcbmV4cG9ydCBjb25zdCByZWZFbWlzc2l2ZSA9IFRIUkVFLm1hdGVyaWFsUmVmZXJlbmNlKCdlbWlzc2l2ZScsICdjb2xvcicpO1xuZXhwb3J0IGNvbnN0IHJlZkVtaXNzaXZlSW50ZW5zaXR5ID0gVEhSRUUubWF0ZXJpYWxSZWZlcmVuY2UoJ2VtaXNzaXZlSW50ZW5zaXR5JywgJ2Zsb2F0Jyk7XG5leHBvcnQgY29uc3QgcmVmRW1pc3NpdmVNYXAgPSBUSFJFRS5tYXRlcmlhbFJlZmVyZW5jZSgnZW1pc3NpdmVNYXAnLCAndGV4dHVyZScpO1xuXG5leHBvcnQgY29uc3QgcmVmU2hhZGVDb2xvckZhY3RvciA9IFRIUkVFLm1hdGVyaWFsUmVmZXJlbmNlKCdzaGFkZUNvbG9yRmFjdG9yJywgJ2NvbG9yJyk7XG5leHBvcnQgY29uc3QgcmVmU2hhZGluZ1NoaWZ0RmFjdG9yID0gVEhSRUUubWF0ZXJpYWxSZWZlcmVuY2UoJ3NoYWRpbmdTaGlmdEZhY3RvcicsICdmbG9hdCcpO1xuZXhwb3J0IGNvbnN0IHJlZlNoYWRlTXVsdGlwbHlUZXh0dXJlID0gVEhSRUUubWF0ZXJpYWxSZWZlcmVuY2UoJ3NoYWRlTXVsdGlwbHlUZXh0dXJlJywgJ3RleHR1cmUnKTtcbmV4cG9ydCBjb25zdCByZWZTaGFkZU11bHRpcGx5VGV4dHVyZVNjYWxlID0gVEhSRUUubWF0ZXJpYWxSZWZlcmVuY2UoJ3NoYWRlTXVsdGlwbHlUZXh0dXJlU2NhbGUnLCAnZmxvYXQnKTtcbmV4cG9ydCBjb25zdCByZWZTaGFkaW5nVG9vbnlGYWN0b3IgPSBUSFJFRS5tYXRlcmlhbFJlZmVyZW5jZSgnc2hhZGluZ1Rvb255RmFjdG9yJywgJ2Zsb2F0Jyk7XG5leHBvcnQgY29uc3QgcmVmUmltTGlnaHRpbmdNaXhGYWN0b3IgPSBUSFJFRS5tYXRlcmlhbFJlZmVyZW5jZSgncmltTGlnaHRpbmdNaXhGYWN0b3InLCAnZmxvYXQnKTtcbmV4cG9ydCBjb25zdCByZWZSaW1NdWx0aXBseVRleHR1cmUgPSBUSFJFRS5tYXRlcmlhbFJlZmVyZW5jZSgncmltTXVsdGlwbHlUZXh0dXJlJywgJ3RleHR1cmUnKTtcbmV4cG9ydCBjb25zdCByZWZNYXRjYXBGYWN0b3IgPSBUSFJFRS5tYXRlcmlhbFJlZmVyZW5jZSgnbWF0Y2FwRmFjdG9yJywgJ2NvbG9yJyk7XG5leHBvcnQgY29uc3QgcmVmTWF0Y2FwVGV4dHVyZSA9IFRIUkVFLm1hdGVyaWFsUmVmZXJlbmNlKCdtYXRjYXBUZXh0dXJlJywgJ3RleHR1cmUnKTtcbmV4cG9ydCBjb25zdCByZWZQYXJhbWV0cmljUmltQ29sb3JGYWN0b3IgPSBUSFJFRS5tYXRlcmlhbFJlZmVyZW5jZSgncGFyYW1ldHJpY1JpbUNvbG9yRmFjdG9yJywgJ2NvbG9yJyk7XG5leHBvcnQgY29uc3QgcmVmUGFyYW1ldHJpY1JpbUxpZnRGYWN0b3IgPSBUSFJFRS5tYXRlcmlhbFJlZmVyZW5jZSgncGFyYW1ldHJpY1JpbUxpZnRGYWN0b3InLCAnZmxvYXQnKTtcbmV4cG9ydCBjb25zdCByZWZQYXJhbWV0cmljUmltRnJlc25lbFBvd2VyRmFjdG9yID0gVEhSRUUubWF0ZXJpYWxSZWZlcmVuY2UoJ3BhcmFtZXRyaWNSaW1GcmVzbmVsUG93ZXJGYWN0b3InLCAnZmxvYXQnKTtcbmV4cG9ydCBjb25zdCByZWZPdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUgPSBUSFJFRS5tYXRlcmlhbFJlZmVyZW5jZSgnb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlJywgJ3RleHR1cmUnKTtcbmV4cG9ydCBjb25zdCByZWZPdXRsaW5lV2lkdGhGYWN0b3IgPSBUSFJFRS5tYXRlcmlhbFJlZmVyZW5jZSgnb3V0bGluZVdpZHRoRmFjdG9yJywgJ2Zsb2F0Jyk7XG5leHBvcnQgY29uc3QgcmVmT3V0bGluZUNvbG9yRmFjdG9yID0gVEhSRUUubWF0ZXJpYWxSZWZlcmVuY2UoJ291dGxpbmVDb2xvckZhY3RvcicsICdjb2xvcicpO1xuZXhwb3J0IGNvbnN0IHJlZk91dGxpbmVMaWdodGluZ01peEZhY3RvciA9IFRIUkVFLm1hdGVyaWFsUmVmZXJlbmNlKCdvdXRsaW5lTGlnaHRpbmdNaXhGYWN0b3InLCAnZmxvYXQnKTtcbmV4cG9ydCBjb25zdCByZWZVVkFuaW1hdGlvbk1hc2tUZXh0dXJlID0gVEhSRUUubWF0ZXJpYWxSZWZlcmVuY2UoJ3V2QW5pbWF0aW9uTWFza1RleHR1cmUnLCAndGV4dHVyZScpO1xuXG5leHBvcnQgY29uc3QgcmVmVVZBbmltYXRpb25TY3JvbGxYT2Zmc2V0ID0gVEhSRUUubWF0ZXJpYWxSZWZlcmVuY2UoJ3V2QW5pbWF0aW9uU2Nyb2xsWE9mZnNldCcsICdmbG9hdCcpO1xuZXhwb3J0IGNvbnN0IHJlZlVWQW5pbWF0aW9uU2Nyb2xsWU9mZnNldCA9IFRIUkVFLm1hdGVyaWFsUmVmZXJlbmNlKCd1dkFuaW1hdGlvblNjcm9sbFlPZmZzZXQnLCAnZmxvYXQnKTtcbmV4cG9ydCBjb25zdCByZWZVVkFuaW1hdGlvblJvdGF0aW9uUGhhc2UgPSBUSFJFRS5tYXRlcmlhbFJlZmVyZW5jZSgndXZBbmltYXRpb25Sb3RhdGlvblBoYXNlJywgJ2Zsb2F0Jyk7XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUvd2ViZ3B1JztcbmltcG9ydCB7XG4gIG1hdGNhcCxcbiAgcGFyYW1ldHJpY1JpbSxcbiAgcmltTGlnaHRpbmdNaXgsXG4gIHJpbU11bHRpcGx5LFxuICBzaGFkZUNvbG9yLFxuICBzaGFkaW5nU2hpZnQsXG4gIHNoYWRpbmdUb29ueSxcbn0gZnJvbSAnLi9pbW11dGFibGVOb2Rlcyc7XG5pbXBvcnQgeyBGbkNvbXBhdCB9IGZyb20gJy4vdXRpbHMvRm5Db21wYXQnO1xuXG4vLyBUT0RPOiAwJSBjb25maWRlbmNlIGFib3V0IGZ1bmN0aW9uIHR5cGVzLlxuXG5jb25zdCBsaW5lYXJzdGVwID0gRm5Db21wYXQoXG4gICh7XG4gICAgYSxcbiAgICBiLFxuICAgIHQsXG4gIH06IHtcbiAgICBhOiBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+O1xuICAgIGI6IFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT47XG4gICAgdDogVEhSRUUuU2hhZGVyTm9kZU9iamVjdDxUSFJFRS5Ob2RlPjtcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHRvcCA9IHQuc3ViKGEpO1xuICAgIGNvbnN0IGJvdHRvbSA9IGIuc3ViKGEpO1xuICAgIHJldHVybiB0b3AuZGl2KGJvdHRvbSkuY2xhbXAoKTtcbiAgfSxcbik7XG5cbi8qKlxuICogQ29udmVydCBOZG90TCBpbnRvIHRvb24gc2hhZGluZyBmYWN0b3IgdXNpbmcgc2hhZGluZ1NoaWZ0IGFuZCBzaGFkaW5nVG9vbnlcbiAqL1xuY29uc3QgZ2V0U2hhZGluZyA9IEZuQ29tcGF0KCh7IGRvdE5MIH06IHsgZG90Tkw6IFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4gfSkgPT4ge1xuICBjb25zdCBzaGFkb3cgPSAxLjA7IC8vIFRPRE9cblxuICBjb25zdCBmZWF0aGVyID0gVEhSRUUuZmxvYXQoMS4wKS5zdWIoc2hhZGluZ1Rvb255KTtcblxuICBsZXQgc2hhZGluZzogVEhSRUUuU2hhZGVyTm9kZU9iamVjdDxUSFJFRS5Ob2RlPiA9IGRvdE5MLmFkZChzaGFkaW5nU2hpZnQpO1xuICBzaGFkaW5nID0gbGluZWFyc3RlcCh7XG4gICAgYTogZmVhdGhlci5uZWdhdGUoKSxcbiAgICBiOiBmZWF0aGVyLFxuICAgIHQ6IHNoYWRpbmcsXG4gIH0pO1xuICBzaGFkaW5nID0gc2hhZGluZy5tdWwoc2hhZG93KTtcbiAgcmV0dXJuIHNoYWRpbmc7XG59KTtcblxuLyoqXG4gKiBNaXggZGlmZnVzZUNvbG9yIGFuZCBzaGFkZUNvbG9yIHVzaW5nIHNoYWRpbmcgZmFjdG9yIGFuZCBsaWdodCBjb2xvclxuICovXG5jb25zdCBnZXREaWZmdXNlID0gRm5Db21wYXQoXG4gICh7XG4gICAgc2hhZGluZyxcbiAgICBsaWdodENvbG9yLFxuICB9OiB7XG4gICAgc2hhZGluZzogVEhSRUUuU2hhZGVyTm9kZU9iamVjdDxUSFJFRS5Ob2RlPjtcbiAgICBsaWdodENvbG9yOiBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+O1xuICB9KSA9PiB7XG4gICAgY29uc3QgZGlmZnVzZUNvbG9yID0gVEhSRUUubWl4KHNoYWRlQ29sb3IsIFRIUkVFLmRpZmZ1c2VDb2xvciwgc2hhZGluZyk7XG4gICAgY29uc3QgY29sID0gbGlnaHRDb2xvci5tdWwoVEhSRUUuQlJERl9MYW1iZXJ0KHsgZGlmZnVzZUNvbG9yIH0pKTtcblxuICAgIHJldHVybiBjb2w7XG4gIH0sXG4pO1xuXG5leHBvcnQgY2xhc3MgTVRvb25MaWdodGluZ01vZGVsIGV4dGVuZHMgVEhSRUUuTGlnaHRpbmdNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBkaXJlY3QoeyBsaWdodERpcmVjdGlvbiwgbGlnaHRDb2xvciwgcmVmbGVjdGVkTGlnaHQgfTogVEhSRUUuTGlnaHRpbmdNb2RlbERpcmVjdElucHV0KSB7XG4gICAgY29uc3QgZG90TkwgPSBUSFJFRS50cmFuc2Zvcm1lZE5vcm1hbFZpZXcuZG90KGxpZ2h0RGlyZWN0aW9uKS5jbGFtcCgtMS4wLCAxLjApO1xuXG4gICAgLy8gdG9vbiBkaWZmdXNlXG4gICAgY29uc3Qgc2hhZGluZyA9IGdldFNoYWRpbmcoe1xuICAgICAgZG90TkwsXG4gICAgfSk7XG5cbiAgICAvLyBVbmFibGUgdG8gdXNlIGBhZGRBc3NpZ25gIGluIHRoZSBjdXJyZW50IEB0eXBlcy90aHJlZSwgd2UgdXNlIGBhc3NpZ25gIGFuZCBgYWRkYCBpbnN0ZWFkXG4gICAgLy8gVE9ETzogRml4IHRoZSBgYWRkQXNzaWduYCBpc3N1ZSBmcm9tIHRoZSBgQHR5cGVzL3RocmVlYCBzaWRlXG5cbiAgICAocmVmbGVjdGVkTGlnaHQuZGlyZWN0RGlmZnVzZSBhcyBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+KS5hc3NpZ24oXG4gICAgICAocmVmbGVjdGVkTGlnaHQuZGlyZWN0RGlmZnVzZSBhcyBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+KS5hZGQoXG4gICAgICAgIGdldERpZmZ1c2Uoe1xuICAgICAgICAgIHNoYWRpbmcsXG4gICAgICAgICAgbGlnaHRDb2xvcjogbGlnaHRDb2xvciBhcyBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+LFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgKTtcblxuICAgIC8vIHJpbVxuICAgIChyZWZsZWN0ZWRMaWdodC5kaXJlY3RTcGVjdWxhciBhcyBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+KS5hc3NpZ24oXG4gICAgICAocmVmbGVjdGVkTGlnaHQuZGlyZWN0U3BlY3VsYXIgYXMgVEhSRUUuU2hhZGVyTm9kZU9iamVjdDxUSFJFRS5Ob2RlPikuYWRkKFxuICAgICAgICBwYXJhbWV0cmljUmltXG4gICAgICAgICAgLmFkZChtYXRjYXApXG4gICAgICAgICAgLm11bChyaW1NdWx0aXBseSlcbiAgICAgICAgICAubXVsKFRIUkVFLm1peChUSFJFRS52ZWMzKDAuMCksIFRIUkVFLkJSREZfTGFtYmVydCh7IGRpZmZ1c2VDb2xvcjogbGlnaHRDb2xvciB9KSwgcmltTGlnaHRpbmdNaXgpKSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIGluZGlyZWN0KGNvbnRleHQ6IFRIUkVFLkxpZ2h0aW5nTW9kZWxJbmRpcmVjdElucHV0KSB7XG4gICAgdGhpcy5pbmRpcmVjdERpZmZ1c2UoY29udGV4dCk7XG4gICAgdGhpcy5pbmRpcmVjdFNwZWN1bGFyKGNvbnRleHQpO1xuICB9XG5cbiAgaW5kaXJlY3REaWZmdXNlKHsgaXJyYWRpYW5jZSwgcmVmbGVjdGVkTGlnaHQgfTogVEhSRUUuTGlnaHRpbmdNb2RlbEluZGlyZWN0SW5wdXQpIHtcbiAgICAvLyBpbmRpcmVjdCBpcnJhZGlhbmNlXG4gICAgKHJlZmxlY3RlZExpZ2h0LmluZGlyZWN0RGlmZnVzZSBhcyBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+KS5hc3NpZ24oXG4gICAgICAocmVmbGVjdGVkTGlnaHQuaW5kaXJlY3REaWZmdXNlIGFzIFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4pLmFkZChcbiAgICAgICAgKGlycmFkaWFuY2UgYXMgVEhSRUUuU2hhZGVyTm9kZU9iamVjdDxUSFJFRS5Ob2RlPikubXVsKFxuICAgICAgICAgIFRIUkVFLkJSREZfTGFtYmVydCh7XG4gICAgICAgICAgICBkaWZmdXNlQ29sb3I6IFRIUkVFLmRpZmZ1c2VDb2xvcixcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIGluZGlyZWN0U3BlY3VsYXIoeyByZWZsZWN0ZWRMaWdodCB9OiBUSFJFRS5MaWdodGluZ01vZGVsSW5kaXJlY3RJbnB1dCkge1xuICAgIC8vIHJpbVxuICAgIChyZWZsZWN0ZWRMaWdodC5pbmRpcmVjdFNwZWN1bGFyIGFzIFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4pLmFzc2lnbihcbiAgICAgIChyZWZsZWN0ZWRMaWdodC5pbmRpcmVjdFNwZWN1bGFyIGFzIFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4pLmFkZChcbiAgICAgICAgcGFyYW1ldHJpY1JpbVxuICAgICAgICAgIC5hZGQobWF0Y2FwKVxuICAgICAgICAgIC5tdWwocmltTXVsdGlwbHkpXG4gICAgICAgICAgLm11bChUSFJFRS5taXgoVEhSRUUudmVjMygxLjApLCBUSFJFRS52ZWMzKDAuMCksIHJpbUxpZ2h0aW5nTWl4KSksXG4gICAgICApLFxuICAgICk7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZS93ZWJncHUnO1xuXG5leHBvcnQgY29uc3Qgc2hhZGVDb2xvciA9IFRIUkVFLm5vZGVJbW11dGFibGUoVEhSRUUuUHJvcGVydHlOb2RlLCAndmVjMycpLnRvVmFyKCdTaGFkZUNvbG9yJyk7XG5leHBvcnQgY29uc3Qgc2hhZGluZ1NoaWZ0ID0gVEhSRUUubm9kZUltbXV0YWJsZShUSFJFRS5Qcm9wZXJ0eU5vZGUsICdmbG9hdCcpLnRvVmFyKCdTaGFkaW5nU2hpZnQnKTtcbmV4cG9ydCBjb25zdCBzaGFkaW5nVG9vbnkgPSBUSFJFRS5ub2RlSW1tdXRhYmxlKFRIUkVFLlByb3BlcnR5Tm9kZSwgJ2Zsb2F0JykudG9WYXIoJ1NoYWRpbmdUb29ueScpO1xuZXhwb3J0IGNvbnN0IHJpbUxpZ2h0aW5nTWl4ID0gVEhSRUUubm9kZUltbXV0YWJsZShUSFJFRS5Qcm9wZXJ0eU5vZGUsICdmbG9hdCcpLnRvVmFyKCdSaW1MaWdodGluZ01peCcpO1xuZXhwb3J0IGNvbnN0IHJpbU11bHRpcGx5ID0gVEhSRUUubm9kZUltbXV0YWJsZShUSFJFRS5Qcm9wZXJ0eU5vZGUsICd2ZWMzJykudG9WYXIoJ1JpbU11bHRpcGx5Jyk7XG5leHBvcnQgY29uc3QgbWF0Y2FwID0gVEhSRUUubm9kZUltbXV0YWJsZShUSFJFRS5Qcm9wZXJ0eU5vZGUsICd2ZWMzJykudG9WYXIoJ21hdGNhcCcpO1xuZXhwb3J0IGNvbnN0IHBhcmFtZXRyaWNSaW0gPSBUSFJFRS5ub2RlSW1tdXRhYmxlKFRIUkVFLlByb3BlcnR5Tm9kZSwgJ3ZlYzMnKS50b1ZhcignUGFyYW1ldHJpY1JpbScpO1xuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlL3dlYmdwdSc7XG5cbi8qKlxuICogQSBjb21wYXQgZnVuY3Rpb24gZm9yIGBGbigpYCAvIGB0c2xGbigpYC5cbiAqIGB0c2xGbigpYCBoYXMgYmVlbiByZW5hbWVkIHRvIGBGbigpYCBpbiByMTY4LlxuICogV2UgYXJlIGdvaW5nIHRvIHVzZSB0aGlzIGNvbXBhdCBmb3IgYSB3aGlsZS5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvcHVsbC8yOTA2NFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5leHBvcnQgY29uc3QgRm5Db21wYXQ6IHR5cGVvZiBUSFJFRS5GbiA9IChqc0Z1bmM6IGFueSkgPT4ge1xuICAvLyBDT01QQVQgcjE2ODogYHRzbEZuKClgIGhhcyBiZWVuIHJlbmFtZWQgdG8gYEZuKClgXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9wdWxsLzI5MDY0XG4gIGNvbnN0IHRocmVlUmV2aXNpb24gPSBwYXJzZUludChUSFJFRS5SRVZJU0lPTiwgMTApO1xuICBpZiAodGhyZWVSZXZpc2lvbiA+PSAxNjgpIHtcbiAgICByZXR1cm4gVEhSRUUuRm4oanNGdW5jKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFRIUkVFIGFzIGFueSkudHNsRm4oanNGdW5jKTtcbiAgfVxufTtcbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZS93ZWJncHUnO1xuXG5pbXBvcnQgdHlwZSB7IE1Ub29uTWF0ZXJpYWwgfSBmcm9tICcuLi9NVG9vbk1hdGVyaWFsJztcbmltcG9ydCB7IE1Ub29uTGlnaHRpbmdNb2RlbCB9IGZyb20gJy4vTVRvb25MaWdodGluZ01vZGVsJztcbmltcG9ydCB7XG4gIHJpbUxpZ2h0aW5nTWl4LFxuICBtYXRjYXAsXG4gIHNoYWRlQ29sb3IsXG4gIHNoYWRpbmdTaGlmdCxcbiAgc2hhZGluZ1Rvb255LFxuICByaW1NdWx0aXBseSxcbiAgcGFyYW1ldHJpY1JpbSxcbn0gZnJvbSAnLi9pbW11dGFibGVOb2Rlcyc7XG5pbXBvcnQge1xuICByZWZDb2xvcixcbiAgcmVmRW1pc3NpdmUsXG4gIHJlZkVtaXNzaXZlSW50ZW5zaXR5LFxuICByZWZFbWlzc2l2ZU1hcCxcbiAgcmVmTWFwLFxuICByZWZNYXRjYXBGYWN0b3IsXG4gIHJlZk1hdGNhcFRleHR1cmUsXG4gIHJlZk5vcm1hbE1hcCxcbiAgcmVmTm9ybWFsU2NhbGUsXG4gIHJlZk91dGxpbmVDb2xvckZhY3RvcixcbiAgcmVmT3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yLFxuICByZWZPdXRsaW5lV2lkdGhGYWN0b3IsXG4gIHJlZk91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZSxcbiAgcmVmUGFyYW1ldHJpY1JpbUNvbG9yRmFjdG9yLFxuICByZWZQYXJhbWV0cmljUmltRnJlc25lbFBvd2VyRmFjdG9yLFxuICByZWZQYXJhbWV0cmljUmltTGlmdEZhY3RvcixcbiAgcmVmUmltTGlnaHRpbmdNaXhGYWN0b3IsXG4gIHJlZlJpbU11bHRpcGx5VGV4dHVyZSxcbiAgcmVmU2hhZGVDb2xvckZhY3RvcixcbiAgcmVmU2hhZGVNdWx0aXBseVRleHR1cmUsXG4gIHJlZlNoYWRlTXVsdGlwbHlUZXh0dXJlU2NhbGUsXG4gIHJlZlNoYWRpbmdTaGlmdEZhY3RvcixcbiAgcmVmU2hhZGluZ1Rvb255RmFjdG9yLFxufSBmcm9tICcuL21hdGVyaWFsUmVmZXJlbmNlcyc7XG5pbXBvcnQgeyBNVG9vbkFuaW1hdGVkVVZOb2RlIH0gZnJvbSAnLi9NVG9vbkFuaW1hdGVkVVZOb2RlJztcbmltcG9ydCB7IE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlIH0gZnJvbSAnLi4vTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUnO1xuaW1wb3J0IHsgTVRvb25Ob2RlTWF0ZXJpYWxQYXJhbWV0ZXJzIH0gZnJvbSAnLi9NVG9vbk5vZGVNYXRlcmlhbFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgbXRvb25QYXJhbWV0cmljUmltIH0gZnJvbSAnLi9tdG9vblBhcmFtZXRyaWNSaW0nO1xuXG4vKipcbiAqIE1Ub29uIGlzIGEgbWF0ZXJpYWwgc3BlY2lmaWNhdGlvbiB0aGF0IGhhcyB2YXJpb3VzIGZlYXR1cmVzLlxuICogVGhlIHNwZWMgYW5kIGltcGxlbWVudGF0aW9uIGFyZSBvcmlnaW5hbGx5IGZvdW5kZWQgZm9yIFVuaXR5IGVuZ2luZSBhbmQgdGhpcyBpcyBhIHBvcnQgb2YgdGhlIG1hdGVyaWFsLlxuICpcbiAqIFRoaXMgbWF0ZXJpYWwgaXMgYSBOb2RlTWF0ZXJpYWwgdmFyaWFudCBvZiB7QGxpbmsgTVRvb25NYXRlcmlhbH0uXG4gKlxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vU2FudGFyaC9NVG9vblxuICovXG5leHBvcnQgY2xhc3MgTVRvb25Ob2RlTWF0ZXJpYWwgZXh0ZW5kcyBUSFJFRS5Ob2RlTWF0ZXJpYWwge1xuICBwdWJsaWMgZW1pc3NpdmVOb2RlOiBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+IHwgbnVsbDtcblxuICBwdWJsaWMgY29sb3I6IFRIUkVFLkNvbG9yO1xuICBwdWJsaWMgbWFwOiBUSFJFRS5UZXh0dXJlIHwgbnVsbDtcbiAgcHVibGljIGVtaXNzaXZlOiBUSFJFRS5Db2xvcjtcbiAgcHVibGljIGVtaXNzaXZlSW50ZW5zaXR5OiBudW1iZXI7XG4gIHB1YmxpYyBlbWlzc2l2ZU1hcDogVEhSRUUuVGV4dHVyZSB8IG51bGw7XG4gIHB1YmxpYyBub3JtYWxNYXA6IFRIUkVFLlRleHR1cmUgfCBudWxsO1xuICBwdWJsaWMgbm9ybWFsU2NhbGU6IFRIUkVFLlZlY3RvcjI7XG5cbiAgcHVibGljIHNoYWRlQ29sb3JGYWN0b3I6IFRIUkVFLkNvbG9yO1xuICBwdWJsaWMgc2hhZGVNdWx0aXBseVRleHR1cmU6IFRIUkVFLlRleHR1cmUgfCBudWxsO1xuICBwdWJsaWMgc2hhZGluZ1NoaWZ0RmFjdG9yOiBudW1iZXI7XG4gIHB1YmxpYyBzaGFkaW5nU2hpZnRUZXh0dXJlOiBUSFJFRS5UZXh0dXJlIHwgbnVsbDtcbiAgcHVibGljIHNoYWRpbmdTaGlmdFRleHR1cmVTY2FsZTogbnVtYmVyO1xuICBwdWJsaWMgc2hhZGluZ1Rvb255RmFjdG9yOiBudW1iZXI7XG4gIHB1YmxpYyByaW1MaWdodGluZ01peEZhY3RvcjogbnVtYmVyO1xuICBwdWJsaWMgcmltTXVsdGlwbHlUZXh0dXJlOiBUSFJFRS5UZXh0dXJlIHwgbnVsbDtcbiAgcHVibGljIG1hdGNhcEZhY3RvcjogVEhSRUUuQ29sb3I7XG4gIHB1YmxpYyBtYXRjYXBUZXh0dXJlOiBUSFJFRS5UZXh0dXJlIHwgbnVsbDtcbiAgcHVibGljIHBhcmFtZXRyaWNSaW1Db2xvckZhY3RvcjogVEhSRUUuQ29sb3I7XG4gIHB1YmxpYyBwYXJhbWV0cmljUmltTGlmdEZhY3RvcjogbnVtYmVyO1xuICBwdWJsaWMgcGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlckZhY3RvcjogbnVtYmVyO1xuICBwdWJsaWMgb3V0bGluZVdpZHRoTW9kZTogTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGU7XG4gIHB1YmxpYyBvdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmU6IFRIUkVFLlRleHR1cmUgfCBudWxsO1xuICBwdWJsaWMgb3V0bGluZVdpZHRoRmFjdG9yOiBudW1iZXI7XG4gIHB1YmxpYyBvdXRsaW5lQ29sb3JGYWN0b3I6IFRIUkVFLkNvbG9yO1xuICBwdWJsaWMgb3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yOiBudW1iZXI7XG4gIHB1YmxpYyB1dkFuaW1hdGlvblNjcm9sbFhTcGVlZEZhY3RvcjogbnVtYmVyO1xuICBwdWJsaWMgdXZBbmltYXRpb25TY3JvbGxZU3BlZWRGYWN0b3I6IG51bWJlcjtcbiAgcHVibGljIHV2QW5pbWF0aW9uUm90YXRpb25TcGVlZEZhY3RvcjogbnVtYmVyO1xuICBwdWJsaWMgdXZBbmltYXRpb25NYXNrVGV4dHVyZTogVEhSRUUuVGV4dHVyZSB8IG51bGw7XG5cbiAgcHVibGljIHNoYWRlQ29sb3JOb2RlOiBUSFJFRS5Td2l6emFibGUgfCBudWxsO1xuICBwdWJsaWMgc2hhZGluZ1NoaWZ0Tm9kZTogVEhSRUUuTm9kZSB8IG51bGw7XG4gIHB1YmxpYyBzaGFkaW5nVG9vbnlOb2RlOiBUSFJFRS5Ob2RlIHwgbnVsbDtcbiAgcHVibGljIHJpbUxpZ2h0aW5nTWl4Tm9kZTogVEhSRUUuTm9kZSB8IG51bGw7XG4gIHB1YmxpYyByaW1NdWx0aXBseU5vZGU6IFRIUkVFLk5vZGUgfCBudWxsO1xuICBwdWJsaWMgbWF0Y2FwTm9kZTogVEhSRUUuTm9kZSB8IG51bGw7XG4gIHB1YmxpYyBwYXJhbWV0cmljUmltQ29sb3JOb2RlOiBUSFJFRS5Td2l6emFibGUgfCBudWxsO1xuICBwdWJsaWMgcGFyYW1ldHJpY1JpbUxpZnROb2RlOiBUSFJFRS5Ob2RlIHwgbnVsbDtcbiAgcHVibGljIHBhcmFtZXRyaWNSaW1GcmVzbmVsUG93ZXJOb2RlOiBUSFJFRS5Ob2RlIHwgbnVsbDtcblxuICBwdWJsaWMgdXZBbmltYXRpb25TY3JvbGxYT2Zmc2V0OiBudW1iZXI7XG4gIHB1YmxpYyB1dkFuaW1hdGlvblNjcm9sbFlPZmZzZXQ6IG51bWJlcjtcbiAgcHVibGljIHV2QW5pbWF0aW9uUm90YXRpb25QaGFzZTogbnVtYmVyO1xuXG4gIHB1YmxpYyBpc091dGxpbmU6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfYW5pbWF0ZWRVVk5vZGU6IE1Ub29uQW5pbWF0ZWRVVk5vZGUgfCBudWxsO1xuXG4gIHB1YmxpYyBjdXN0b21Qcm9ncmFtQ2FjaGVLZXkoKTogc3RyaW5nIHtcbiAgICBsZXQgY2FjaGVLZXkgPSBzdXBlci5jdXN0b21Qcm9ncmFtQ2FjaGVLZXkoKTtcblxuICAgIGNhY2hlS2V5ICs9IGBpc091dGxpbmU6JHt0aGlzLmlzT3V0bGluZX0sYDtcblxuICAgIHJldHVybiBjYWNoZUtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkb25seSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHRoaXMgaXMgYSB7QGxpbmsgTVRvb25Ob2RlTWF0ZXJpYWx9LlxuICAgKi9cbiAgcHVibGljIGdldCBpc01Ub29uTm9kZU1hdGVyaWFsKCk6IHRydWUge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnM6IE1Ub29uTm9kZU1hdGVyaWFsUGFyYW1ldGVycyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJzLnRyYW5zcGFyZW50V2l0aFpXcml0ZSkge1xuICAgICAgcGFyYW1ldGVycy5kZXB0aFdyaXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgZGVsZXRlIHBhcmFtZXRlcnMudHJhbnNwYXJlbnRXaXRoWldyaXRlO1xuXG4gICAgLy8gYE1Ub29uTWF0ZXJpYWxMb2FkZXJQbHVnaW5gIGFzc2lnbnMgdGhlc2UgcGFyYW1ldGVycyB0byB0aGUgbWF0ZXJpYWxcbiAgICAvLyBIb3dldmVyLCBgTVRvb25Ob2RlTWF0ZXJpYWxgIGRvZXMgbm90IHN1cHBvcnQgdGhlc2UgcGFyYW1ldGVyc1xuICAgIC8vIHNvIHdlIGRlbGV0ZSB0aGVtIGhlcmUgdG8gc3VwcHJlc3Mgd2FybmluZ3NcbiAgICBkZWxldGUgKHBhcmFtZXRlcnMgYXMgYW55KS5naUVxdWFsaXphdGlvbkZhY3RvcjtcbiAgICBkZWxldGUgKHBhcmFtZXRlcnMgYXMgYW55KS52MENvbXBhdFNoYWRlO1xuICAgIGRlbGV0ZSAocGFyYW1ldGVycyBhcyBhbnkpLmRlYnVnTW9kZTtcblxuICAgIHRoaXMuZW1pc3NpdmVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMubGlnaHRzID0gdHJ1ZTtcblxuICAgIHRoaXMuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoMS4wLCAxLjAsIDEuMCk7XG4gICAgdGhpcy5tYXAgPSBudWxsO1xuICAgIHRoaXMuZW1pc3NpdmUgPSBuZXcgVEhSRUUuQ29sb3IoMC4wLCAwLjAsIDAuMCk7XG4gICAgdGhpcy5lbWlzc2l2ZUludGVuc2l0eSA9IDEuMDtcbiAgICB0aGlzLmVtaXNzaXZlTWFwID0gbnVsbDtcbiAgICB0aGlzLm5vcm1hbE1hcCA9IG51bGw7XG4gICAgdGhpcy5ub3JtYWxTY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IyKDEuMCwgMS4wKTtcbiAgICB0aGlzLnNoYWRlQ29sb3JGYWN0b3IgPSBuZXcgVEhSRUUuQ29sb3IoMC4wLCAwLjAsIDAuMCk7XG4gICAgdGhpcy5zaGFkZU11bHRpcGx5VGV4dHVyZSA9IG51bGw7XG4gICAgdGhpcy5zaGFkaW5nU2hpZnRGYWN0b3IgPSAwLjA7XG4gICAgdGhpcy5zaGFkaW5nU2hpZnRUZXh0dXJlID0gbnVsbDtcbiAgICB0aGlzLnNoYWRpbmdTaGlmdFRleHR1cmVTY2FsZSA9IDEuMDtcbiAgICB0aGlzLnNoYWRpbmdUb29ueUZhY3RvciA9IDAuOTtcbiAgICB0aGlzLnJpbUxpZ2h0aW5nTWl4RmFjdG9yID0gMS4wO1xuICAgIHRoaXMucmltTXVsdGlwbHlUZXh0dXJlID0gbnVsbDtcbiAgICB0aGlzLm1hdGNhcEZhY3RvciA9IG5ldyBUSFJFRS5Db2xvcigxLjAsIDEuMCwgMS4wKTtcbiAgICB0aGlzLm1hdGNhcFRleHR1cmUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1ldHJpY1JpbUNvbG9yRmFjdG9yID0gbmV3IFRIUkVFLkNvbG9yKDAuMCwgMC4wLCAwLjApO1xuICAgIHRoaXMucGFyYW1ldHJpY1JpbUxpZnRGYWN0b3IgPSAwLjA7XG4gICAgdGhpcy5wYXJhbWV0cmljUmltRnJlc25lbFBvd2VyRmFjdG9yID0gNS4wO1xuICAgIHRoaXMub3V0bGluZVdpZHRoTW9kZSA9IE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlLk5vbmU7XG4gICAgdGhpcy5vdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUgPSBudWxsO1xuICAgIHRoaXMub3V0bGluZVdpZHRoRmFjdG9yID0gMC4wO1xuICAgIHRoaXMub3V0bGluZUNvbG9yRmFjdG9yID0gbmV3IFRIUkVFLkNvbG9yKDAuMCwgMC4wLCAwLjApO1xuICAgIHRoaXMub3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yID0gMS4wO1xuICAgIHRoaXMudXZBbmltYXRpb25TY3JvbGxYU3BlZWRGYWN0b3IgPSAwLjA7XG4gICAgdGhpcy51dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvciA9IDAuMDtcbiAgICB0aGlzLnV2QW5pbWF0aW9uUm90YXRpb25TcGVlZEZhY3RvciA9IDAuMDtcbiAgICB0aGlzLnV2QW5pbWF0aW9uTWFza1RleHR1cmUgPSBudWxsO1xuXG4gICAgdGhpcy5zaGFkZUNvbG9yTm9kZSA9IG51bGw7XG4gICAgdGhpcy5zaGFkaW5nU2hpZnROb2RlID0gbnVsbDtcbiAgICB0aGlzLnNoYWRpbmdUb29ueU5vZGUgPSBudWxsO1xuICAgIHRoaXMucmltTGlnaHRpbmdNaXhOb2RlID0gbnVsbDtcbiAgICB0aGlzLnJpbU11bHRpcGx5Tm9kZSA9IG51bGw7XG4gICAgdGhpcy5tYXRjYXBOb2RlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtZXRyaWNSaW1Db2xvck5vZGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1ldHJpY1JpbUxpZnROb2RlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtZXRyaWNSaW1GcmVzbmVsUG93ZXJOb2RlID0gbnVsbDtcblxuICAgIHRoaXMudXZBbmltYXRpb25TY3JvbGxYT2Zmc2V0ID0gMC4wO1xuICAgIHRoaXMudXZBbmltYXRpb25TY3JvbGxZT2Zmc2V0ID0gMC4wO1xuICAgIHRoaXMudXZBbmltYXRpb25Sb3RhdGlvblBoYXNlID0gMC4wO1xuXG4gICAgdGhpcy5pc091dGxpbmUgPSBmYWxzZTtcblxuICAgIHRoaXMuX2FuaW1hdGVkVVZOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VmFsdWVzKHBhcmFtZXRlcnMpO1xuICB9XG5cbiAgcHVibGljIHNldHVwTGlnaHRpbmdNb2RlbCgvKmJ1aWxkZXIqLyk6IE1Ub29uTGlnaHRpbmdNb2RlbCB7XG4gICAgcmV0dXJuIG5ldyBNVG9vbkxpZ2h0aW5nTW9kZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cChidWlsZGVyOiBUSFJFRS5Ob2RlQnVpbGRlcik6IHZvaWQge1xuICAgIHRoaXMuX2FuaW1hdGVkVVZOb2RlID0gbmV3IE1Ub29uQW5pbWF0ZWRVVk5vZGUoXG4gICAgICAodGhpcy51dkFuaW1hdGlvbk1hc2tUZXh0dXJlICYmIHRoaXMudXZBbmltYXRpb25NYXNrVGV4dHVyZS5pc1RleHR1cmUgPT09IHRydWUpID8/IGZhbHNlLFxuICAgICk7XG5cbiAgICBzdXBlci5zZXR1cChidWlsZGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cERpZmZ1c2VDb2xvcihidWlsZGVyOiBUSFJFRS5Ob2RlQnVpbGRlcik6IHZvaWQge1xuICAgIC8vIHdlIG11c3QgYXBwbHkgdXYgc2Nyb2xsIHRvIHRoZSBtYXBcbiAgICAvLyB0aGlzLmNvbG9yTm9kZSB3aWxsIGJlIHVzZWQgaW4gc3VwZXIuc2V0dXBEaWZmdXNlQ29sb3IoKSBzbyB3ZSB0ZW1wb3JhcmlseSByZXBsYWNlIGl0XG4gICAgbGV0IHRlbXBDb2xvck5vZGU6IFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4gfCBudWxsID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmNvbG9yTm9kZSA9PSBudWxsKSB7XG4gICAgICB0ZW1wQ29sb3JOb2RlID0gcmVmQ29sb3I7XG5cbiAgICAgIGlmICh0aGlzLm1hcCAmJiB0aGlzLm1hcC5pc1RleHR1cmUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgbWFwID0gcmVmTWFwLmNvbnRleHQoeyBnZXRVVjogKCkgPT4gdGhpcy5fYW5pbWF0ZWRVVk5vZGUgfSk7XG4gICAgICAgIHRlbXBDb2xvck5vZGUgPSB0ZW1wQ29sb3JOb2RlLm11bChtYXApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbG9yTm9kZSA9IHRlbXBDb2xvck5vZGU7XG4gICAgfVxuXG4gICAgLy8gTVRvb24gbXVzdCBpZ25vcmUgdmVydGV4IGNvbG9yIGJ5IHNwZWNcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92cm0tYy92cm0tc3BlY2lmaWNhdGlvbi9ibG9iLzQyYzBhOTBlNmI0YjcxMDM1MjU2OTk3OGYxNDk4MGU5ZmM5NGIyNWQvc3BlY2lmaWNhdGlvbi9WUk1DX21hdGVyaWFsc19tdG9vbi0xLjAvUkVBRE1FLm1kI3ZlcnRleC1jb2xvcnNcbiAgICBpZiAodGhpcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUgJiYgYnVpbGRlci5nZW9tZXRyeS5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ01Ub29uTm9kZU1hdGVyaWFsOiBNVG9vbiBpZ25vcmVzIHZlcnRleCBjb2xvcnMuIENvbnNpZGVyIHVzaW5nIGEgbW9kZWwgd2l0aG91dCB2ZXJ0ZXggY29sb3JzIGluc3RlYWQuJyxcbiAgICAgICk7XG4gICAgICB0aGlzLnZlcnRleENvbG9ycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHRoZSBvcmRpbmFyeSBkaWZmdXNlQ29sb3Igc2V0dXBcbiAgICBzdXBlci5zZXR1cERpZmZ1c2VDb2xvcihidWlsZGVyKTtcblxuICAgIC8vIENPTVBBVDogcHJlLXIxNjZcbiAgICAvLyBTZXQgYWxwaGEgdG8gMSBpZiBpdCBpcyBvcGFxdWVcbiAgICAvLyBBZGRyZXNzZWQgaW4gVGhyZWUuanMgcjE2NiBidXQgd2UgbGVhdmUgaXQgaGVyZSBmb3IgY29tcGF0aWJpbGl0eVxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9wdWxsLzI4NjQ2XG4gICAgaWYgKHBhcnNlSW50KFRIUkVFLlJFVklTSU9OLCAxMCkgPCAxNjYpIHtcbiAgICAgIGlmICh0aGlzLnRyYW5zcGFyZW50ID09PSBmYWxzZSAmJiB0aGlzLmJsZW5kaW5nID09PSBUSFJFRS5Ob3JtYWxCbGVuZGluZyAmJiB0aGlzLmFscGhhVG9Db3ZlcmFnZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgVEhSRUUuZGlmZnVzZUNvbG9yLmEuYXNzaWduKDEuMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV2ZXJ0IHRoZSBjb2xvck5vZGVcbiAgICBpZiAodGhpcy5jb2xvck5vZGUgPT09IHRlbXBDb2xvck5vZGUpIHtcbiAgICAgIHRoaXMuY29sb3JOb2RlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0dXBWYXJpYW50cygpOiB2b2lkIHtcbiAgICBzaGFkZUNvbG9yLmFzc2lnbih0aGlzLl9zZXR1cFNoYWRlQ29sb3JOb2RlKCkpO1xuICAgIHNoYWRpbmdTaGlmdC5hc3NpZ24odGhpcy5fc2V0dXBTaGFkaW5nU2hpZnROb2RlKCkpO1xuICAgIHNoYWRpbmdUb29ueS5hc3NpZ24odGhpcy5fc2V0dXBTaGFkaW5nVG9vbnlOb2RlKCkpO1xuICAgIHJpbUxpZ2h0aW5nTWl4LmFzc2lnbih0aGlzLl9zZXR1cFJpbUxpZ2h0aW5nTWl4Tm9kZSgpKTtcbiAgICByaW1NdWx0aXBseS5hc3NpZ24odGhpcy5fc2V0dXBSaW1NdWx0aXBseU5vZGUoKSk7XG4gICAgbWF0Y2FwLmFzc2lnbih0aGlzLl9zZXR1cE1hdGNhcE5vZGUoKSk7XG4gICAgcGFyYW1ldHJpY1JpbS5hc3NpZ24odGhpcy5fc2V0dXBQYXJhbWV0cmljUmltTm9kZSgpKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cE5vcm1hbChidWlsZGVyOiBUSFJFRS5Ob2RlQnVpbGRlcik6IFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4ge1xuICAgIC8vIHdlIG11c3QgYXBwbHkgdXYgc2Nyb2xsIHRvIHRoZSBub3JtYWxNYXBcbiAgICAvLyB0aGlzLm5vcm1hbE5vZGUgd2lsbCBiZSB1c2VkIGluIHN1cGVyLnNldHVwTm9ybWFsKCkgc28gd2UgdGVtcG9yYXJpbHkgcmVwbGFjZSBpdFxuICAgIGNvbnN0IHRlbXBOb3JtYWxOb2RlID0gdGhpcy5ub3JtYWxOb2RlO1xuXG4gICAgaWYgKHRoaXMubm9ybWFsTm9kZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vcm1hbE5vZGUgPSBUSFJFRS5tYXRlcmlhbE5vcm1hbDtcblxuICAgICAgaWYgKHRoaXMubm9ybWFsTWFwICYmIHRoaXMubm9ybWFsTWFwLmlzVGV4dHVyZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBtYXAgPSByZWZOb3JtYWxNYXAuY29udGV4dCh7IGdldFVWOiAoKSA9PiB0aGlzLl9hbmltYXRlZFVWTm9kZSB9KTtcbiAgICAgICAgdGhpcy5ub3JtYWxOb2RlID0gVEhSRUUubm9ybWFsTWFwKG1hcCwgcmVmTm9ybWFsU2NhbGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc091dGxpbmUpIHtcbiAgICAgICAgLy8gU2VlIGFib3V0IHRoZSB0eXBlIGFzc2VydGlvbjogaHR0cHM6Ly9naXRodWIuY29tL3RocmVlLXR5cGVzL3RocmVlLXRzLXR5cGVzL3B1bGwvMTEyM1xuICAgICAgICB0aGlzLm5vcm1hbE5vZGUgPSAodGhpcy5ub3JtYWxOb2RlIGFzIFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4pLm5lZ2F0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENPTVBBVCByMTY4OiBgc2V0dXBOb3JtYWxgIG5vdyByZXR1cm5zIHRoZSBub3JtYWwgbm9kZVxuICAgIC8vIGluc3RlYWQgb2YgYXNzaWduaW5nIGluc2lkZSB0aGUgYHN1cGVyLnNldHVwTm9ybWFsYFxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9wdWxsLzI5MTM3XG4gICAgY29uc3QgdGhyZWVSZXZpc2lvbiA9IHBhcnNlSW50KFRIUkVFLlJFVklTSU9OLCAxMCk7XG4gICAgaWYgKHRocmVlUmV2aXNpb24gPj0gMTY4KSB7XG4gICAgICBjb25zdCByZXQgPSB0aGlzLm5vcm1hbE5vZGUgYXMgVEhSRUUuU2hhZGVyTm9kZU9iamVjdDxUSFJFRS5Ob2RlPjtcblxuICAgICAgLy8gcmV2ZXJ0IHRoZSBub3JtYWxOb2RlXG4gICAgICB0aGlzLm5vcm1hbE5vZGUgPSB0ZW1wTm9ybWFsTm9kZTtcblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcHJlLXIxNjhcbiAgICAgIC8vIHRoZSBvcmRpbmFyeSBub3JtYWwgc2V0dXBcbiAgICAgIHN1cGVyLnNldHVwTm9ybWFsKGJ1aWxkZXIpO1xuXG4gICAgICAvLyByZXZlcnQgdGhlIG5vcm1hbE5vZGVcbiAgICAgIHRoaXMubm9ybWFsTm9kZSA9IHRlbXBOb3JtYWxOb2RlO1xuXG4gICAgICAvLyB0eXBlIHdvcmthcm91bmQ6IHByZXRlbmQgdG8gcmV0dXJuIGEgdmFsaWQgdmFsdWVcbiAgICAgIC8vIHIxNjcgZG9lc24ndCB1c2UgdGhlIHJldHVybiB2YWx1ZSBhbnl3YXlcbiAgICAgIHJldHVybiB1bmRlZmluZWQgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXR1cExpZ2h0aW5nKGJ1aWxkZXI6IFRIUkVFLk5vZGVCdWlsZGVyKTogVEhSRUUuTm9kZSB7XG4gICAgLy8gd2UgbXVzdCBhcHBseSB1diBzY3JvbGwgdG8gdGhlIGVtaXNzaXZlTWFwXG4gICAgLy8gdGhpcy5lbWlzc2l2ZU5vZGUgd2lsbCBiZSB1c2VkIGluIHN1cGVyLnNldHVwTGlnaHRpbmcoKSBzbyB3ZSB0ZW1wb3JhcmlseSByZXBsYWNlIGl0XG4gICAgbGV0IHRlbXBFbWlzc2l2ZU5vZGU6IFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4gfCBudWxsID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmVtaXNzaXZlTm9kZSA9PSBudWxsKSB7XG4gICAgICB0ZW1wRW1pc3NpdmVOb2RlID0gcmVmRW1pc3NpdmUubXVsKHJlZkVtaXNzaXZlSW50ZW5zaXR5KTtcblxuICAgICAgaWYgKHRoaXMuZW1pc3NpdmVNYXAgJiYgdGhpcy5lbWlzc2l2ZU1hcC5pc1RleHR1cmUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgbWFwID0gcmVmRW1pc3NpdmVNYXAuY29udGV4dCh7IGdldFVWOiAoKSA9PiB0aGlzLl9hbmltYXRlZFVWTm9kZSB9KTtcbiAgICAgICAgdGVtcEVtaXNzaXZlTm9kZSA9IHRlbXBFbWlzc2l2ZU5vZGUubXVsKG1hcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pc3NpdmVOb2RlID0gdGVtcEVtaXNzaXZlTm9kZTtcbiAgICB9XG5cbiAgICAvLyB0aGUgb3JkaW5hcnkgbGlnaHRpbmcgc2V0dXBcbiAgICBjb25zdCByZXQgPSBzdXBlci5zZXR1cExpZ2h0aW5nKGJ1aWxkZXIpO1xuXG4gICAgLy8gcmV2ZXJ0IHRoZSBlbWlzc2l2ZU5vZGVcbiAgICBpZiAodGhpcy5lbWlzc2l2ZU5vZGUgPT09IHRlbXBFbWlzc2l2ZU5vZGUpIHtcbiAgICAgIHRoaXMuZW1pc3NpdmVOb2RlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHVibGljIHNldHVwT3V0cHV0KFxuICAgIGJ1aWxkZXI6IFRIUkVFLk5vZGVCdWlsZGVyLFxuICAgIG91dHB1dE5vZGU6IFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4sXG4gICk6IFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4ge1xuICAgIC8vIG1peCBvciBzZXQgb3V0bGluZSBjb2xvclxuICAgIGlmICh0aGlzLmlzT3V0bGluZSAmJiB0aGlzLm91dGxpbmVXaWR0aE1vZGUgIT09IE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlLk5vbmUpIHtcbiAgICAgIG91dHB1dE5vZGUgPSBUSFJFRS52ZWM0KFxuICAgICAgICBUSFJFRS5taXgocmVmT3V0bGluZUNvbG9yRmFjdG9yLCBvdXRwdXROb2RlLnh5ei5tdWwocmVmT3V0bGluZUNvbG9yRmFjdG9yKSwgcmVmT3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yKSxcbiAgICAgICAgb3V0cHV0Tm9kZS53LFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgb3JkaW5hcnkgb3V0cHV0IHNldHVwXG4gICAgcmV0dXJuIHN1cGVyLnNldHVwT3V0cHV0KGJ1aWxkZXIsIG91dHB1dE5vZGUpIGFzIFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT47XG4gIH1cblxuICBwdWJsaWMgc2V0dXBQb3NpdGlvbihidWlsZGVyOiBUSFJFRS5Ob2RlQnVpbGRlcik6IFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT4ge1xuICAgIC8vIHdlIG11c3QgYXBwbHkgb3V0bGluZSBwb3NpdGlvbiBvZmZzZXRcbiAgICAvLyB0aGlzLnBvc2l0aW9uTm9kZSB3aWxsIGJlIHVzZWQgaW4gc3VwZXIuc2V0dXBQb3NpdGlvbigpIHNvIHdlIHRlbXBvcmFyaWx5IHJlcGxhY2UgaXRcbiAgICBjb25zdCB0ZW1wUG9zaXRpb25Ob2RlID0gdGhpcy5wb3NpdGlvbk5vZGU7XG5cbiAgICBpZiAodGhpcy5pc091dGxpbmUgJiYgdGhpcy5vdXRsaW5lV2lkdGhNb2RlICE9PSBNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZS5Ob25lKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uTm9kZSA/Pz0gVEhSRUUucG9zaXRpb25Mb2NhbDtcblxuICAgICAgY29uc3Qgbm9ybWFsTG9jYWwgPSBUSFJFRS5ub3JtYWxMb2NhbC5ub3JtYWxpemUoKTtcblxuICAgICAgbGV0IHdpZHRoOiBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+ID0gcmVmT3V0bGluZVdpZHRoRmFjdG9yO1xuXG4gICAgICBpZiAodGhpcy5vdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUgJiYgdGhpcy5vdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUuaXNUZXh0dXJlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHJlZk91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZS5jb250ZXh0KHsgZ2V0VVY6ICgpID0+IHRoaXMuX2FuaW1hdGVkVVZOb2RlIH0pO1xuICAgICAgICB3aWR0aCA9IHdpZHRoLm11bChtYXApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3b3JsZE5vcm1hbExlbmd0aCA9IFRIUkVFLmxlbmd0aChUSFJFRS5tb2RlbE5vcm1hbE1hdHJpeC5tdWwobm9ybWFsTG9jYWwpKTtcbiAgICAgIGNvbnN0IG91dGxpbmVPZmZzZXQgPSB3aWR0aC5tdWwod29ybGROb3JtYWxMZW5ndGgpLm11bChub3JtYWxMb2NhbCk7XG5cbiAgICAgIGlmICh0aGlzLm91dGxpbmVXaWR0aE1vZGUgPT09IE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlLldvcmxkQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgLy8gU2VlIGFib3V0IHRoZSB0eXBlIGFzc2VydGlvbjogaHR0cHM6Ly9naXRodWIuY29tL3RocmVlLXR5cGVzL3RocmVlLXRzLXR5cGVzL3B1bGwvMTEyM1xuICAgICAgICB0aGlzLnBvc2l0aW9uTm9kZSA9ICh0aGlzLnBvc2l0aW9uTm9kZSBhcyBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+KS5hZGQob3V0bGluZU9mZnNldCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3V0bGluZVdpZHRoTW9kZSA9PT0gTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUuU2NyZWVuQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29uc3QgY2xpcFNjYWxlID0gVEhSRUUuY2FtZXJhUHJvamVjdGlvbk1hdHJpeC5lbGVtZW50KDEpLmVsZW1lbnQoMSk7XG5cbiAgICAgICAgLy8gU2VlIGFib3V0IHRoZSB0eXBlIGFzc2VydGlvbjogaHR0cHM6Ly9naXRodWIuY29tL3RocmVlLXR5cGVzL3RocmVlLXRzLXR5cGVzL3B1bGwvMTEyM1xuICAgICAgICB0aGlzLnBvc2l0aW9uTm9kZSA9ICh0aGlzLnBvc2l0aW9uTm9kZSBhcyBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+KS5hZGQoXG4gICAgICAgICAgb3V0bGluZU9mZnNldC5kaXYoY2xpcFNjYWxlKS5tdWwoVEhSRUUucG9zaXRpb25WaWV3LnoubmVnYXRlKCkpLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBvc2l0aW9uTm9kZSA/Pz0gVEhSRUUucG9zaXRpb25Mb2NhbDtcbiAgICB9XG5cbiAgICAvLyB0aGUgb3JkaW5hcnkgcG9zaXRpb24gc2V0dXBcbiAgICBjb25zdCByZXQgPSBzdXBlci5zZXR1cFBvc2l0aW9uKGJ1aWxkZXIpIGFzIFRIUkVFLlNoYWRlck5vZGVPYmplY3Q8VEhSRUUuTm9kZT47XG5cbiAgICAvLyBhbnRpIHotZmlnaHRpbmdcbiAgICAvLyBUT0RPOiBXZSBtaWdodCB3YW50IHRvIGFkZHJlc3MgdGhpcyB2aWEgZ2xQb2x5Z29uT2Zmc2V0IGluc3RlYWQ/XG4gICAgcmV0LnouYWRkKHJldC53Lm11bCgxZS02KSk7XG5cbiAgICAvLyByZXZlcnQgdGhlIHBvc2l0aW9uTm9kZVxuICAgIHRoaXMucG9zaXRpb25Ob2RlID0gdGVtcFBvc2l0aW9uTm9kZTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwdWJsaWMgY29weShzb3VyY2U6IE1Ub29uTm9kZU1hdGVyaWFsKTogdGhpcyB7XG4gICAgdGhpcy5jb2xvci5jb3B5KHNvdXJjZS5jb2xvcik7XG4gICAgdGhpcy5tYXAgPSBzb3VyY2UubWFwID8/IG51bGw7XG4gICAgdGhpcy5lbWlzc2l2ZS5jb3B5KHNvdXJjZS5lbWlzc2l2ZSk7XG4gICAgdGhpcy5lbWlzc2l2ZUludGVuc2l0eSA9IHNvdXJjZS5lbWlzc2l2ZUludGVuc2l0eTtcbiAgICB0aGlzLmVtaXNzaXZlTWFwID0gc291cmNlLmVtaXNzaXZlTWFwID8/IG51bGw7XG4gICAgdGhpcy5ub3JtYWxNYXAgPSBzb3VyY2Uubm9ybWFsTWFwID8/IG51bGw7XG4gICAgdGhpcy5ub3JtYWxTY2FsZS5jb3B5KHNvdXJjZS5ub3JtYWxTY2FsZSk7XG5cbiAgICB0aGlzLnNoYWRlQ29sb3JGYWN0b3IuY29weShzb3VyY2Uuc2hhZGVDb2xvckZhY3Rvcik7XG4gICAgdGhpcy5zaGFkZU11bHRpcGx5VGV4dHVyZSA9IHNvdXJjZS5zaGFkZU11bHRpcGx5VGV4dHVyZSA/PyBudWxsO1xuICAgIHRoaXMuc2hhZGluZ1NoaWZ0RmFjdG9yID0gc291cmNlLnNoYWRpbmdTaGlmdEZhY3RvcjtcbiAgICB0aGlzLnNoYWRpbmdTaGlmdFRleHR1cmUgPSBzb3VyY2Uuc2hhZGluZ1NoaWZ0VGV4dHVyZSA/PyBudWxsO1xuICAgIHRoaXMuc2hhZGluZ1NoaWZ0VGV4dHVyZVNjYWxlID0gc291cmNlLnNoYWRpbmdTaGlmdFRleHR1cmVTY2FsZTtcbiAgICB0aGlzLnNoYWRpbmdUb29ueUZhY3RvciA9IHNvdXJjZS5zaGFkaW5nVG9vbnlGYWN0b3I7XG4gICAgdGhpcy5yaW1MaWdodGluZ01peEZhY3RvciA9IHNvdXJjZS5yaW1MaWdodGluZ01peEZhY3RvcjtcbiAgICB0aGlzLnJpbU11bHRpcGx5VGV4dHVyZSA9IHNvdXJjZS5yaW1NdWx0aXBseVRleHR1cmUgPz8gbnVsbDtcbiAgICB0aGlzLm1hdGNhcEZhY3Rvci5jb3B5KHNvdXJjZS5tYXRjYXBGYWN0b3IpO1xuICAgIHRoaXMubWF0Y2FwVGV4dHVyZSA9IHNvdXJjZS5tYXRjYXBUZXh0dXJlID8/IG51bGw7XG4gICAgdGhpcy5wYXJhbWV0cmljUmltQ29sb3JGYWN0b3IuY29weShzb3VyY2UucGFyYW1ldHJpY1JpbUNvbG9yRmFjdG9yKTtcbiAgICB0aGlzLnBhcmFtZXRyaWNSaW1MaWZ0RmFjdG9yID0gc291cmNlLnBhcmFtZXRyaWNSaW1MaWZ0RmFjdG9yO1xuICAgIHRoaXMucGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlckZhY3RvciA9IHNvdXJjZS5wYXJhbWV0cmljUmltRnJlc25lbFBvd2VyRmFjdG9yO1xuICAgIHRoaXMub3V0bGluZVdpZHRoTW9kZSA9IHNvdXJjZS5vdXRsaW5lV2lkdGhNb2RlO1xuICAgIHRoaXMub3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlID0gc291cmNlLm91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZSA/PyBudWxsO1xuICAgIHRoaXMub3V0bGluZVdpZHRoRmFjdG9yID0gc291cmNlLm91dGxpbmVXaWR0aEZhY3RvcjtcbiAgICB0aGlzLm91dGxpbmVDb2xvckZhY3Rvci5jb3B5KHNvdXJjZS5vdXRsaW5lQ29sb3JGYWN0b3IpO1xuICAgIHRoaXMub3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yID0gc291cmNlLm91dGxpbmVMaWdodGluZ01peEZhY3RvcjtcbiAgICB0aGlzLnV2QW5pbWF0aW9uU2Nyb2xsWFNwZWVkRmFjdG9yID0gc291cmNlLnV2QW5pbWF0aW9uU2Nyb2xsWFNwZWVkRmFjdG9yO1xuICAgIHRoaXMudXZBbmltYXRpb25TY3JvbGxZU3BlZWRGYWN0b3IgPSBzb3VyY2UudXZBbmltYXRpb25TY3JvbGxZU3BlZWRGYWN0b3I7XG4gICAgdGhpcy51dkFuaW1hdGlvblJvdGF0aW9uU3BlZWRGYWN0b3IgPSBzb3VyY2UudXZBbmltYXRpb25Sb3RhdGlvblNwZWVkRmFjdG9yO1xuICAgIHRoaXMudXZBbmltYXRpb25NYXNrVGV4dHVyZSA9IHNvdXJjZS51dkFuaW1hdGlvbk1hc2tUZXh0dXJlID8/IG51bGw7XG5cbiAgICB0aGlzLnNoYWRlQ29sb3JOb2RlID0gc291cmNlLnNoYWRlQ29sb3JOb2RlID8/IG51bGw7XG4gICAgdGhpcy5zaGFkaW5nU2hpZnROb2RlID0gc291cmNlLnNoYWRpbmdTaGlmdE5vZGUgPz8gbnVsbDtcbiAgICB0aGlzLnNoYWRpbmdUb29ueU5vZGUgPSBzb3VyY2Uuc2hhZGluZ1Rvb255Tm9kZSA/PyBudWxsO1xuICAgIHRoaXMucmltTGlnaHRpbmdNaXhOb2RlID0gc291cmNlLnJpbUxpZ2h0aW5nTWl4Tm9kZSA/PyBudWxsO1xuICAgIHRoaXMucmltTXVsdGlwbHlOb2RlID0gc291cmNlLnJpbU11bHRpcGx5Tm9kZSA/PyBudWxsO1xuICAgIHRoaXMubWF0Y2FwTm9kZSA9IHNvdXJjZS5tYXRjYXBOb2RlID8/IG51bGw7XG4gICAgdGhpcy5wYXJhbWV0cmljUmltQ29sb3JOb2RlID0gc291cmNlLnBhcmFtZXRyaWNSaW1Db2xvck5vZGUgPz8gbnVsbDtcbiAgICB0aGlzLnBhcmFtZXRyaWNSaW1MaWZ0Tm9kZSA9IHNvdXJjZS5wYXJhbWV0cmljUmltTGlmdE5vZGUgPz8gbnVsbDtcbiAgICB0aGlzLnBhcmFtZXRyaWNSaW1GcmVzbmVsUG93ZXJOb2RlID0gc291cmNlLnBhcmFtZXRyaWNSaW1GcmVzbmVsUG93ZXJOb2RlID8/IG51bGw7XG5cbiAgICB0aGlzLmlzT3V0bGluZSA9IHNvdXJjZS5pc091dGxpbmUgPz8gbnVsbDtcblxuICAgIHJldHVybiBzdXBlci5jb3B5KHNvdXJjZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnV2QW5pbWF0aW9uU2Nyb2xsWE9mZnNldCArPSBkZWx0YSAqIHRoaXMudXZBbmltYXRpb25TY3JvbGxYU3BlZWRGYWN0b3I7XG4gICAgdGhpcy51dkFuaW1hdGlvblNjcm9sbFlPZmZzZXQgKz0gZGVsdGEgKiB0aGlzLnV2QW5pbWF0aW9uU2Nyb2xsWVNwZWVkRmFjdG9yO1xuICAgIHRoaXMudXZBbmltYXRpb25Sb3RhdGlvblBoYXNlICs9IGRlbHRhICogdGhpcy51dkFuaW1hdGlvblJvdGF0aW9uU3BlZWRGYWN0b3I7XG4gIH1cblxuICBwcml2YXRlIF9zZXR1cFNoYWRlQ29sb3JOb2RlKCk6IFRIUkVFLlN3aXp6YWJsZSB7XG4gICAgaWYgKHRoaXMuc2hhZGVDb2xvck5vZGUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFRIUkVFLnZlYzModGhpcy5zaGFkZUNvbG9yTm9kZSk7XG4gICAgfVxuXG4gICAgbGV0IHNoYWRlQ29sb3JOb2RlOiBUSFJFRS5TaGFkZXJOb2RlT2JqZWN0PFRIUkVFLk5vZGU+ID0gcmVmU2hhZGVDb2xvckZhY3RvcjtcblxuICAgIGlmICh0aGlzLnNoYWRlTXVsdGlwbHlUZXh0dXJlICYmIHRoaXMuc2hhZGVNdWx0aXBseVRleHR1cmUuaXNUZXh0dXJlID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBtYXAgPSByZWZTaGFkZU11bHRpcGx5VGV4dHVyZS5jb250ZXh0KHsgZ2V0VVY6ICgpID0+IHRoaXMuX2FuaW1hdGVkVVZOb2RlIH0pO1xuICAgICAgc2hhZGVDb2xvck5vZGUgPSBzaGFkZUNvbG9yTm9kZS5tdWwobWFwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGVDb2xvck5vZGU7XG4gIH1cblxuICBwcml2YXRlIF9zZXR1cFNoYWRpbmdTaGlmdE5vZGUoKTogVEhSRUUuTm9kZSB7XG4gICAgaWYgKHRoaXMuc2hhZGluZ1NoaWZ0Tm9kZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gVEhSRUUuZmxvYXQodGhpcy5zaGFkaW5nU2hpZnROb2RlKTtcbiAgICB9XG5cbiAgICBsZXQgc2hhZGluZ1NoaWZ0Tm9kZTogVEhSRUUuU2hhZGVyTm9kZU9iamVjdDxUSFJFRS5Ob2RlPiA9IHJlZlNoYWRpbmdTaGlmdEZhY3RvcjtcblxuICAgIGlmICh0aGlzLnNoYWRpbmdTaGlmdFRleHR1cmUgJiYgdGhpcy5zaGFkaW5nU2hpZnRUZXh0dXJlLmlzVGV4dHVyZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgbWFwID0gcmVmU2hhZGVNdWx0aXBseVRleHR1cmUuY29udGV4dCh7IGdldFVWOiAoKSA9PiB0aGlzLl9hbmltYXRlZFVWTm9kZSB9KTtcbiAgICAgIHNoYWRpbmdTaGlmdE5vZGUgPSBzaGFkaW5nU2hpZnROb2RlLmFkZChtYXAubXVsKHJlZlNoYWRlTXVsdGlwbHlUZXh0dXJlU2NhbGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGluZ1NoaWZ0Tm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldHVwU2hhZGluZ1Rvb255Tm9kZSgpOiBUSFJFRS5Ob2RlIHtcbiAgICBpZiAodGhpcy5zaGFkaW5nVG9vbnlOb2RlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBUSFJFRS5mbG9hdCh0aGlzLnNoYWRpbmdUb29ueU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZTaGFkaW5nVG9vbnlGYWN0b3I7XG4gIH1cblxuICBwcml2YXRlIF9zZXR1cFJpbUxpZ2h0aW5nTWl4Tm9kZSgpOiBUSFJFRS5Ob2RlIHtcbiAgICBpZiAodGhpcy5yaW1MaWdodGluZ01peE5vZGUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFRIUkVFLmZsb2F0KHRoaXMucmltTGlnaHRpbmdNaXhOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmUmltTGlnaHRpbmdNaXhGYWN0b3I7XG4gIH1cblxuICBwcml2YXRlIF9zZXR1cFJpbU11bHRpcGx5Tm9kZSgpOiBUSFJFRS5Td2l6emFibGUge1xuICAgIGlmICh0aGlzLnJpbU11bHRpcGx5Tm9kZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gVEhSRUUudmVjMyh0aGlzLnJpbU11bHRpcGx5Tm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmltTXVsdGlwbHlUZXh0dXJlICYmIHRoaXMucmltTXVsdGlwbHlUZXh0dXJlLmlzVGV4dHVyZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgbWFwID0gcmVmUmltTXVsdGlwbHlUZXh0dXJlLmNvbnRleHQoeyBnZXRVVjogKCkgPT4gdGhpcy5fYW5pbWF0ZWRVVk5vZGUgfSk7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH1cblxuICAgIHJldHVybiBUSFJFRS52ZWMzKDEuMCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXR1cE1hdGNhcE5vZGUoKTogVEhSRUUuU3dpenphYmxlIHtcbiAgICBpZiAodGhpcy5tYXRjYXBOb2RlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBUSFJFRS52ZWMzKHRoaXMubWF0Y2FwTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWF0Y2FwVGV4dHVyZSAmJiB0aGlzLm1hdGNhcFRleHR1cmUuaXNUZXh0dXJlID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBtYXAgPSByZWZNYXRjYXBUZXh0dXJlLmNvbnRleHQoeyBnZXRVVjogKCkgPT4gVEhSRUUubWF0Y2FwVVYubXVsKDEuMCwgLTEuMCkuYWRkKDAuMCwgMS4wKSB9KTtcbiAgICAgIHJldHVybiBtYXAubXVsKHJlZk1hdGNhcEZhY3Rvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRIUkVFLnZlYzMoMC4wKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldHVwUGFyYW1ldHJpY1JpbU5vZGUoKTogVEhSRUUuU3dpenphYmxlIHtcbiAgICBjb25zdCBwYXJhbWV0cmljUmltQ29sb3IgPVxuICAgICAgdGhpcy5wYXJhbWV0cmljUmltQ29sb3JOb2RlICE9IG51bGwgPyBUSFJFRS52ZWMzKHRoaXMucGFyYW1ldHJpY1JpbUNvbG9yTm9kZSkgOiByZWZQYXJhbWV0cmljUmltQ29sb3JGYWN0b3I7XG5cbiAgICBjb25zdCBwYXJhbWV0cmljUmltTGlmdCA9XG4gICAgICB0aGlzLnBhcmFtZXRyaWNSaW1MaWZ0Tm9kZSAhPSBudWxsID8gVEhSRUUuZmxvYXQodGhpcy5wYXJhbWV0cmljUmltTGlmdE5vZGUpIDogcmVmUGFyYW1ldHJpY1JpbUxpZnRGYWN0b3I7XG5cbiAgICBjb25zdCBwYXJhbWV0cmljUmltRnJlc25lbFBvd2VyID1cbiAgICAgIHRoaXMucGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlck5vZGUgIT0gbnVsbFxuICAgICAgICA/IFRIUkVFLmZsb2F0KHRoaXMucGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlck5vZGUpXG4gICAgICAgIDogcmVmUGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlckZhY3RvcjtcblxuICAgIHJldHVybiBtdG9vblBhcmFtZXRyaWNSaW0oe1xuICAgICAgcGFyYW1ldHJpY1JpbUxpZnQsXG4gICAgICBwYXJhbWV0cmljUmltRnJlc25lbFBvd2VyLFxuICAgICAgcGFyYW1ldHJpY1JpbUNvbG9yLFxuICAgIH0pO1xuICB9XG59XG5cbi8vIFRPRE86IFBhcnQgb2Ygc3R1ZmYgdGhhdCBNVG9vbk1hdGVyaWFsIGRlcGVuZHMgb24gZG9lcyBub3QgZXhpc3QgaW4gdGhyZWUvd2ViZ3B1IChlLmcuIFVuaWZvcm1zTGliKVxuLy8gVEhSRUUuYWRkTm9kZU1hdGVyaWFsKCdNVG9vbk5vZGVNYXRlcmlhbCcsIE1Ub29uTm9kZU1hdGVyaWFsKTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuZXhwb3J0IGNvbnN0IE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlID0ge1xuICBOb25lOiAnbm9uZScsXG4gIFdvcmxkQ29vcmRpbmF0ZXM6ICd3b3JsZENvb3JkaW5hdGVzJyxcbiAgU2NyZWVuQ29vcmRpbmF0ZXM6ICdzY3JlZW5Db29yZGluYXRlcycsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZSA9XG4gICh0eXBlb2YgTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUpW2tleW9mIHR5cGVvZiBNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZV07XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUvd2ViZ3B1JztcbmltcG9ydCB7IEZuQ29tcGF0IH0gZnJvbSAnLi91dGlscy9GbkNvbXBhdCc7XG5cbmV4cG9ydCBjb25zdCBtdG9vblBhcmFtZXRyaWNSaW0gPSBGbkNvbXBhdChcbiAgKHtcbiAgICBwYXJhbWV0cmljUmltTGlmdCxcbiAgICBwYXJhbWV0cmljUmltRnJlc25lbFBvd2VyLFxuICAgIHBhcmFtZXRyaWNSaW1Db2xvcixcbiAgfToge1xuICAgIHBhcmFtZXRyaWNSaW1MaWZ0OiBUSFJFRS5Ob2RlUmVwcmVzZW50YXRpb247XG4gICAgcGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlcjogVEhSRUUuTm9kZVJlcHJlc2VudGF0aW9uO1xuICAgIHBhcmFtZXRyaWNSaW1Db2xvcjogVEhSRUUuTm9kZVJlcHJlc2VudGF0aW9uO1xuICB9KSA9PiB7XG4gICAgY29uc3Qgdmlld0RpciA9IFRIUkVFLm1vZGVsVmlld1Bvc2l0aW9uLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IGRvdE5WID0gVEhSRUUudHJhbnNmb3JtZWROb3JtYWxWaWV3LmRvdCh2aWV3RGlyLm5lZ2F0ZSgpKTtcblxuICAgIGNvbnN0IHJpbSA9IFRIUkVFLmZsb2F0KDEuMCkuc3ViKGRvdE5WKS5hZGQocGFyYW1ldHJpY1JpbUxpZnQpLmNsYW1wKCkucG93KHBhcmFtZXRyaWNSaW1GcmVzbmVsUG93ZXIpO1xuXG4gICAgcmV0dXJuIHJpbS5tdWwocGFyYW1ldHJpY1JpbUNvbG9yKTtcbiAgfSxcbik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNHQSxZQUF1QjtBQ0h2QixhQUF1QjtBQ0F2QixhQUF1QjtBQ0F2QixhQUF1QjtBQ0F2QixhQUF1QjtBQ0F2QixhQUF1QjtBQ0F2QixhQUF1QjtBRUF2QixhQUF1QjtBUkt2QixJQUFNLGdCQUFnQixTQUFlLGdCQUFVLEVBQUU7QUFDakQsSUFBSSxnQkFBZ0IsS0FBSztBQUN2QixVQUFRO0lBQ04sc0VBQXNFLGFBQWE7RUFDckY7QUFDRjtBRVJPLElBQU0sV0FBaUIseUJBQWtCLFNBQVMsT0FBTztBQUN6RCxJQUFNLFNBQWUseUJBQWtCLE9BQU8sU0FBUztBQUN2RCxJQUFNLGVBQXFCLHlCQUFrQixhQUFhLFNBQVM7QUFDbkUsSUFBTSxpQkFBdUIseUJBQWtCLGVBQWUsTUFBTTtBQUNwRSxJQUFNLGNBQW9CLHlCQUFrQixZQUFZLE9BQU87QUFDL0QsSUFBTSx1QkFBNkIseUJBQWtCLHFCQUFxQixPQUFPO0FBQ2pGLElBQU0saUJBQXVCLHlCQUFrQixlQUFlLFNBQVM7QUFFdkUsSUFBTSxzQkFBNEIseUJBQWtCLG9CQUFvQixPQUFPO0FBQy9FLElBQU0sd0JBQThCLHlCQUFrQixzQkFBc0IsT0FBTztBQUNuRixJQUFNLDBCQUFnQyx5QkFBa0Isd0JBQXdCLFNBQVM7QUFDekYsSUFBTSwrQkFBcUMseUJBQWtCLDZCQUE2QixPQUFPO0FBQ2pHLElBQU0sd0JBQThCLHlCQUFrQixzQkFBc0IsT0FBTztBQUNuRixJQUFNLDBC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QUVBLFdBQWEsWUFBSyxDQUFHO0VBQ3ZCO0VBRVEsbUJBQW9DO0FBQzFDLFFBQUksS0FBSyxjQUFjLE1BQU07QUFDM0IsYUFBYSxZQUFLLEtBQUssVUFBVTtJQUNuQztBQUVBLFFBQUksS0FBSyxpQkFBaUIsS0FBSyxjQUFjLGNBQWMsTUFBTTtBQUMvRCxZQUFNLE1BQU0saUJBQWlCLFFBQVEsRUFBRSxPQUFPLE1BQVksZ0JBQVMsSUFBSSxHQUFLLEVBQUksRUFBRSxJQUFJLEdBQUssQ0FBRyxFQUFFLENBQUM7QUFDakcsYUFBTyxJQUFJLElBQUksZUFBZTtJQUNoQztBQUVBLFdBQWEsWUFBSyxDQUFHO0VBQ3ZCO0VBRVEsMEJBQTJDO0FBQ2pELFVBQU0scUJBQ0osS0FBSywwQkFBMEIsT0FBYSxZQUFLLEtBQUssc0JBQXNCLElBQUk7QUFFbEYsVUFBTSxvQkFDSixLQUFLLHlCQUF5QixPQUFhLGFBQU0sS0FBSyxxQkFBcUIsSUFBSTtBQUVqRixVQUFNLDRCQUNKLEtBQUssaUNBQWlDLE9BQzVCLGFBQU0sS0FBSyw2QkFBNkIsSUFDOUM7QUFFTixXQUFPLG1CQUFtQjtNQUN4QjtNQUNBO01BQ0E7SUFDRixDQUFDO0VBQ0g7QUFDRjsiLAogICJuYW1lcyI6IFsidXYiLCAidGhyZWVSZXZpc2lvbiIsICJkaWZmdXNlQ29sb3IiLCAibm9ybWFsTG9jYWwiXQp9Cg==
