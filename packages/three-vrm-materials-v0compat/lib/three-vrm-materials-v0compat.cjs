/*!
 * @pixiv/three-vrm-materials-v0compat v3.0.0-beta.2
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  VRMMaterialsV0CompatPlugin: () => VRMMaterialsV0CompatPlugin
});
module.exports = __toCommonJS(src_exports);

// src/VRMMaterialsV0CompatPlugin.ts
var THREE = __toESM(require("three"), 1);

// src/utils/gammaEOTF.ts
function gammaEOTF(e) {
  return Math.pow(e, 2.2);
}

// src/VRMMaterialsV0CompatPlugin.ts
var VRMMaterialsV0CompatPlugin = class {
  get name() {
    return "VRMMaterialsV0CompatPlugin";
  }
  constructor(parser) {
    var _a;
    this.parser = parser;
    this._renderQueueMapTransparent = /* @__PURE__ */ new Map();
    this._renderQueueMapTransparentZWrite = /* @__PURE__ */ new Map();
    const json = this.parser.json;
    json.extensionsUsed = (_a = json.extensionsUsed) != null ? _a : [];
    if (json.extensionsUsed.indexOf("KHR_texture_transform") === -1) {
      json.extensionsUsed.push("KHR_texture_transform");
    }
  }
  beforeRoot() {
    return __async(this, null, function* () {
      var _a;
      const json = this.parser.json;
      const v0VRMExtension = (_a = json.extensions) == null ? void 0 : _a["VRM"];
      const v0MaterialProperties = v0VRMExtension == null ? void 0 : v0VRMExtension.materialProperties;
      if (!v0MaterialProperties) {
        return;
      }
      this._populateRenderQueueMap(v0MaterialProperties);
      v0MaterialProperties.forEach((materialProperties, materialIndex) => {
        var _a2, _b;
        const materialDef = (_a2 = json.materials) == null ? void 0 : _a2[materialIndex];
        if (materialDef == null) {
          console.warn(
            `VRMMaterialsV0CompatPlugin: Attempt to use materials[${materialIndex}] of glTF but the material doesn't exist`
          );
          return;
        }
        if (materialProperties.shader === "VRM/MToon") {
          const material = this._parseV0MToonProperties(materialProperties, materialDef);
          json.materials[materialIndex] = material;
        } else if ((_b = materialProperties.shader) == null ? void 0 : _b.startsWith("VRM/Unlit")) {
          const material = this._parseV0UnlitProperties(materialProperties, materialDef);
          json.materials[materialIndex] = material;
        } else if (materialProperties.shader === "VRM_USE_GLTFSHADER") {
        } else {
          console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${materialProperties.shader}`);
        }
      });
    });
  }
  _parseV0MToonProperties(materialProperties, schemaMaterial) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa;
    const isTransparent = (_b = (_a = materialProperties.keywordMap) == null ? void 0 : _a["_ALPHABLEND_ON"]) != null ? _b : false;
    const enabledZWrite = ((_c = materialProperties.floatProperties) == null ? void 0 : _c["_ZWrite"]) === 1;
    const transparentWithZWrite = enabledZWrite && isTransparent;
    const renderQueueOffsetNumber = this._v0ParseRenderQueue(materialProperties);
    const isCutoff = (_e = (_d = materialProperties.keywordMap) == null ? void 0 : _d["_ALPHATEST_ON"]) != null ? _e : false;
    const alphaMode = isTransparent ? "BLEND" : isCutoff ? "MASK" : "OPAQUE";
    const alphaCutoff = isCutoff ? (_g = (_f = materialProperties.floatProperties) == null ? void 0 : _f["_Cutoff"]) != null ? _g : 0.5 : void 0;
    const cullMode = (_i = (_h = materialProperties.floatProperties) == null ? void 0 : _h["_CullMode"]) != null ? _i : 2;
    const doubleSided = cullMode === 0;
    const textureTransformExt = this._portTextureTransform(materialProperties);
    const baseColorFactor = ((_k = (_j = materialProperties.vectorProperties) == null ? void 0 : _j["_Color"]) != null ? _k : [1, 1, 1, 1]).map(
      (v, i) => i === 3 ? v : gammaEOTF(v)
      // alpha channel is stored in linear
    );
    const baseColorTextureIndex = (_l = materialProperties.textureProperties) == null ? void 0 : _l["_MainTex"];
    const baseColorTexture = baseColorTextureIndex != null ? {
      index: baseColorTextureIndex,
      extensions: __spreadValues({}, textureTransformExt)
    } : void 0;
    const normalTextureScale = (_n = (_m = materialProperties.floatProperties) == null ? void 0 : _m["_BumpScale"]) != null ? _n : 1;
    const normalTextureIndex = (_o = materialProperties.textureProperties) == null ? void 0 : _o["_BumpMap"];
    const normalTexture = normalTextureIndex != null ? {
      index: normalTextureIndex,
      scale: normalTextureScale,
      extensions: __spreadValues({}, textureTransformExt)
    } : void 0;
    const emissiveFactor = ((_q = (_p = materialProperties.vectorProperties) == null ? void 0 : _p["_EmissionColor"]) != null ? _q : [0, 0, 0, 1]).map(
      gammaEOTF
    );
    const emissiveTextureIndex = (_r = materialProperties.textureProperties) == null ? void 0 : _r["_EmissionMap"];
    const emissiveTexture = emissiveTextureIndex != null ? {
      index: emissiveTextureIndex,
      extensions: __spreadValues({}, textureTransformExt)
    } : void 0;
    const shadeColorFactor = ((_t = (_s = materialProperties.vectorProperties) == null ? void 0 : _s["_ShadeColor"]) != null ? _t : [0.97, 0.81, 0.86, 1]).map(
      gammaEOTF
    );
    const shadeMultiplyTextureIndex = (_u = materialProperties.textureProperties) == null ? void 0 : _u["_ShadeTexture"];
    const shadeMultiplyTexture = shadeMultiplyTextureIndex != null ? {
      index: shadeMultiplyTextureIndex,
      extensions: __spreadValues({}, textureTransformExt)
    } : void 0;
    let shadingShiftFactor = (_w = (_v = materialProperties.floatProperties) == null ? void 0 : _v["_ShadeShift"]) != null ? _w : 0;
    let shadingToonyFactor = (_y = (_x = materialProperties.floatProperties) == null ? void 0 : _x["_ShadeToony"]) != null ? _y : 0.9;
    shadingToonyFactor = THREE.MathUtils.lerp(shadingToonyFactor, 1, 0.5 + 0.5 * shadingShiftFactor);
    shadingShiftFactor = -shadingShiftFactor - (1 - shadingToonyFactor);
    const giIntensityFactor = (_A = (_z = materialProperties.floatProperties) == null ? void 0 : _z["_IndirectLightIntensity"]) != null ? _A : 0.1;
    const giEqualizationFactor = giIntensityFactor ? 1 - giIntensityFactor : void 0;
    const matcapTextureIndex = (_B = materialProperties.textureProperties) == null ? void 0 : _B["_SphereAdd"];
    const matcapFactor = matcapTextureIndex != null ? [1, 1, 1] : void 0;
    const matcapTexture = matcapTextureIndex != null ? {
      index: matcapTextureIndex
    } : void 0;
    const rimLightingMixFactor = (_D = (_C = materialProperties.floatProperties) == null ? void 0 : _C["_RimLightingMix"]) != null ? _D : 0;
    const rimMultiplyTextureIndex = (_E = materialProperties.textureProperties) == null ? void 0 : _E["_RimTexture"];
    const rimMultiplyTexture = rimMultiplyTextureIndex != null ? {
      index: rimMultiplyTextureIndex,
      extensions: __spreadValues({}, textureTransformExt)
    } : void 0;
    const parametricRimColorFactor = ((_G = (_F = materialProperties.vectorProperties) == null ? void 0 : _F["_RimColor"]) != null ? _G : [0, 0, 0, 1]).map(
      gammaEOTF
    );
    const parametricRimFresnelPowerFactor = (_I = (_H = materialProperties.floatProperties) == null ? void 0 : _H["_RimFresnelPower"]) != null ? _I : 1;
    const parametricRimLiftFactor = (_K = (_J = materialProperties.floatProperties) == null ? void 0 : _J["_RimLift"]) != null ? _K : 0;
    const outlineWidthMode = ["none", "worldCoordinates", "screenCoordinates"][(_M = (_L = materialProperties.floatProperties) == null ? void 0 : _L["_OutlineWidthMode"]) != null ? _M : 0];
    let outlineWidthFactor = (_O = (_N = materialProperties.floatProperties) == null ? void 0 : _N["_OutlineWidth"]) != null ? _O : 0;
    outlineWidthFactor = 0.01 * outlineWidthFactor;
    const outlineWidthMultiplyTextureIndex = (_P = materialProperties.textureProperties) == null ? void 0 : _P["_OutlineWidthTexture"];
    const outlineWidthMultiplyTexture = outlineWidthMultiplyTextureIndex != null ? {
      index: outlineWidthMultiplyTextureIndex,
      extensions: __spreadValues({}, textureTransformExt)
    } : void 0;
    const outlineColorFactor = ((_R = (_Q = materialProperties.vectorProperties) == null ? void 0 : _Q["_OutlineColor"]) != null ? _R : [0, 0, 0]).map(
      gammaEOTF
    );
    const outlineColorMode = (_T = (_S = materialProperties.floatProperties) == null ? void 0 : _S["_OutlineColorMode"]) != null ? _T : 0;
    const outlineLightingMixFactor = outlineColorMode === 1 ? (_V = (_U = materialProperties.floatProperties) == null ? void 0 : _U["_OutlineLightingMix"]) != null ? _V : 1 : 0;
    const uvAnimationMaskTextureIndex = (_W = materialProperties.textureProperties) == null ? void 0 : _W["_UvAnimMaskTexture"];
    const uvAnimationMaskTexture = uvAnimationMaskTextureIndex != null ? {
      index: uvAnimationMaskTextureIndex,
      extensions: __spreadValues({}, textureTransformExt)
    } : void 0;
    const uvAnimationScrollXSpeedFactor = (_Y = (_X = materialProperties.floatProperties) == null ? void 0 : _X["_UvAnimScrollX"]) != null ? _Y : 0;
    let uvAnimationScrollYSpeedFactor = (__ = (_Z = materialProperties.floatProperties) == null ? void 0 : _Z["_UvAnimScrollY"]) != null ? __ : 0;
    if (uvAnimationScrollYSpeedFactor != null) {
      uvAnimationScrollYSpeedFactor = -uvAnimationScrollYSpeedFactor;
    }
    const uvAnimationRotationSpeedFactor = (_aa = (_$ = materialProperties.floatProperties) == null ? void 0 : _$["_UvAnimRotation"]) != null ? _aa : 0;
    const mtoonExtension = {
      specVersion: "1.0",
      transparentWithZWrite,
      renderQueueOffsetNumber,
      shadeColorFactor,
      shadeMultiplyTexture,
      shadingShiftFactor,
      shadingToonyFactor,
      giEqualizationFactor,
      matcapFactor,
      matcapTexture,
      rimLightingMixFactor,
      rimMultiplyTexture,
      parametricRimColorFactor,
      parametricRimFresnelPowerFactor,
      parametricRimLiftFactor,
      outlineWidthMode,
      outlineWidthFactor,
      outlineWidthMultiplyTexture,
      outlineColorFactor,
      outlineLightingMixFactor,
      uvAnimationMaskTexture,
      uvAnimationScrollXSpeedFactor,
      uvAnimationScrollYSpeedFactor,
      uvAnimationRotationSpeedFactor
    };
    return __spreadProps(__spreadValues({}, schemaMaterial), {
      pbrMetallicRoughness: {
        baseColorFactor,
        baseColorTexture
      },
      normalTexture,
      emissiveTexture,
      emissiveFactor,
      alphaMode,
      alphaCutoff,
      doubleSided,
      extensions: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        VRMC_materials_mtoon: mtoonExtension
      }
    });
  }
  _parseV0UnlitProperties(materialProperties, schemaMaterial) {
    var _a, _b, _c, _d, _e;
    const isTransparentZWrite = materialProperties.shader === "VRM/UnlitTransparentZWrite";
    const isTransparent = materialProperties.shader === "VRM/UnlitTransparent" || isTransparentZWrite;
    const renderQueueOffsetNumber = this._v0ParseRenderQueue(materialProperties);
    const isCutoff = materialProperties.shader === "VRM/UnlitCutout";
    const alphaMode = isTransparent ? "BLEND" : isCutoff ? "MASK" : "OPAQUE";
    const alphaCutoff = isCutoff ? (_b = (_a = materialProperties.floatProperties) == null ? void 0 : _a["_Cutoff"]) != null ? _b : 0.5 : void 0;
    const textureTransformExt = this._portTextureTransform(materialProperties);
    const baseColorFactor = ((_d = (_c = materialProperties.vectorProperties) == null ? void 0 : _c["_Color"]) != null ? _d : [1, 1, 1, 1]).map(gammaEOTF);
    const baseColorTextureIndex = (_e = materialProperties.textureProperties) == null ? void 0 : _e["_MainTex"];
    const baseColorTexture = baseColorTextureIndex != null ? {
      index: baseColorTextureIndex,
      extensions: __spreadValues({}, textureTransformExt)
    } : void 0;
    const mtoonExtension = {
      specVersion: "1.0",
      transparentWithZWrite: isTransparentZWrite,
      renderQueueOffsetNumber,
      shadeColorFactor: baseColorFactor,
      shadeMultiplyTexture: baseColorTexture
    };
    return __spreadProps(__spreadValues({}, schemaMaterial), {
      pbrMetallicRoughness: {
        baseColorFactor,
        baseColorTexture
      },
      alphaMode,
      alphaCutoff,
      extensions: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        VRMC_materials_mtoon: mtoonExtension
      }
    });
  }
  /**
   * Create a glTF `KHR_texture_transform` extension from v0 texture transform info.
   */
  _portTextureTransform(materialProperties) {
    var _a, _b, _c, _d, _e;
    const textureTransform = (_a = materialProperties.vectorProperties) == null ? void 0 : _a["_MainTex"];
    if (textureTransform == null) {
      return {};
    }
    const offset = [(_b = textureTransform == null ? void 0 : textureTransform[0]) != null ? _b : 0, (_c = textureTransform == null ? void 0 : textureTransform[1]) != null ? _c : 0];
    const scale = [(_d = textureTransform == null ? void 0 : textureTransform[2]) != null ? _d : 1, (_e = textureTransform == null ? void 0 : textureTransform[3]) != null ? _e : 1];
    offset[1] = 1 - scale[1] - offset[1];
    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      KHR_texture_transform: { offset, scale }
    };
  }
  /**
   * Convert v0 render order into v1 render order.
   * This uses a map from v0 render queue to v1 compliant render queue offset which is generated in {@link _populateRenderQueueMap}.
   */
  _v0ParseRenderQueue(materialProperties) {
    var _a, _b, _c;
    const isTransparent = (_b = (_a = materialProperties.keywordMap) == null ? void 0 : _a["_ALPHABLEND_ON"]) != null ? _b : false;
    const enabledZWrite = ((_c = materialProperties.floatProperties) == null ? void 0 : _c["_ZWrite"]) === 1;
    let offset = 0;
    if (isTransparent) {
      const v0Queue = materialProperties.renderQueue;
      if (v0Queue != null) {
        if (enabledZWrite) {
          offset = this._renderQueueMapTransparentZWrite.get(v0Queue);
        } else {
          offset = this._renderQueueMapTransparent.get(v0Queue);
        }
      }
    }
    return offset;
  }
  /**
   * Create a map which maps v0 render queue to v1 compliant render queue offset.
   * This lists up all render queues the model use and creates a map to new render queue offsets in the same order.
   */
  _populateRenderQueueMap(materialPropertiesList) {
    const renderQueuesTransparent = /* @__PURE__ */ new Set();
    const renderQueuesTransparentZWrite = /* @__PURE__ */ new Set();
    materialPropertiesList.forEach((materialProperties) => {
      var _a, _b, _c;
      const isTransparent = (_b = (_a = materialProperties.keywordMap) == null ? void 0 : _a["_ALPHABLEND_ON"]) != null ? _b : false;
      const enabledZWrite = ((_c = materialProperties.floatProperties) == null ? void 0 : _c["_ZWrite"]) === 1;
      if (isTransparent) {
        const v0Queue = materialProperties.renderQueue;
        if (v0Queue != null) {
          if (enabledZWrite) {
            renderQueuesTransparentZWrite.add(v0Queue);
          } else {
            renderQueuesTransparent.add(v0Queue);
          }
        }
      }
    });
    if (renderQueuesTransparent.size > 10) {
      console.warn(
        `VRMMaterialsV0CompatPlugin: This VRM uses ${renderQueuesTransparent.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`
      );
    }
    if (renderQueuesTransparentZWrite.size > 10) {
      console.warn(
        `VRMMaterialsV0CompatPlugin: This VRM uses ${renderQueuesTransparentZWrite.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`
      );
    }
    Array.from(renderQueuesTransparent).sort().forEach((queue, i) => {
      const newQueueOffset = Math.min(Math.max(i - renderQueuesTransparent.size + 1, -9), 0);
      this._renderQueueMapTransparent.set(queue, newQueueOffset);
    });
    Array.from(renderQueuesTransparentZWrite).sort().forEach((queue, i) => {
      const newQueueOffset = Math.min(Math.max(i, 0), 9);
      this._renderQueueMapTransparentZWrite.set(queue, newQueueOffset);
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIiwgIi4uL3NyYy9WUk1NYXRlcmlhbHNWMENvbXBhdFBsdWdpbi50cyIsICIuLi9zcmMvdXRpbHMvZ2FtbWFFT1RGLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgeyBWUk1NYXRlcmlhbHNWMENvbXBhdFBsdWdpbiB9IGZyb20gJy4vVlJNTWF0ZXJpYWxzVjBDb21wYXRQbHVnaW4nO1xuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFZSTSBhcyBWMFZSTSwgTWF0ZXJpYWwgYXMgVjBNYXRlcmlhbCB9IGZyb20gJ0BwaXhpdi90eXBlcy12cm0tMC4wJztcbmltcG9ydCAqIGFzIFYxTVRvb25TY2hlbWEgZnJvbSAnQHBpeGl2L3R5cGVzLXZybWMtbWF0ZXJpYWxzLW10b29uLTEuMCc7XG5pbXBvcnQgdHlwZSB7IEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IGdhbW1hRU9URiB9IGZyb20gJy4vdXRpbHMvZ2FtbWFFT1RGJztcbmltcG9ydCB7IEdMVEYgYXMgR0xURlNjaGVtYSB9IGZyb20gJ0BnbHRmLXRyYW5zZm9ybS9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFZSTU1hdGVyaWFsc1YwQ29tcGF0UGx1Z2luIGltcGxlbWVudHMgR0xURkxvYWRlclBsdWdpbiB7XG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgLyoqXG4gICAqIEEgbWFwIGZyb20gdjAgcmVuZGVyIHF1ZXVlIHRvIHYxIHJlbmRlciBxdWV1ZSBvZmZzZXQsIGZvciBUcmFuc3BhcmVudCBtYXRlcmlhbHMuXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZW5kZXJRdWV1ZU1hcFRyYW5zcGFyZW50OiBNYXA8bnVtYmVyLCBudW1iZXI+O1xuXG4gIC8qKlxuICAgKiBBIG1hcCBmcm9tIHYwIHJlbmRlciBxdWV1ZSB0byB2MSByZW5kZXIgcXVldWUgb2Zmc2V0LCBmb3IgVHJhbnNwYXJlbnRaV3JpdGUgbWF0ZXJpYWxzLlxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfcmVuZGVyUXVldWVNYXBUcmFuc3BhcmVudFpXcml0ZTogTWFwPG51bWJlciwgbnVtYmVyPjtcblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ1ZSTU1hdGVyaWFsc1YwQ29tcGF0UGx1Z2luJztcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICAgIHRoaXMuX3JlbmRlclF1ZXVlTWFwVHJhbnNwYXJlbnQgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fcmVuZGVyUXVldWVNYXBUcmFuc3BhcmVudFpXcml0ZSA9IG5ldyBNYXAoKTtcblxuICAgIC8vIFdPUktBUk9VTkQ6IEFkZCBLSFJfdGV4dHVyZV90cmFuc2Zvcm0gdG8gZXh0ZW5zaW9uc1VzZWRcbiAgICAvLyBJdCBpcyB0b28gbGF0ZSB0byBhZGQgdGhpcyBpbiBiZWZvcmVSb290XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIGpzb24uZXh0ZW5zaW9uc1VzZWQgPSBqc29uLmV4dGVuc2lvbnNVc2VkID8/IFtdO1xuICAgIGlmIChqc29uLmV4dGVuc2lvbnNVc2VkLmluZGV4T2YoJ0tIUl90ZXh0dXJlX3RyYW5zZm9ybScpID09PSAtMSkge1xuICAgICAganNvbi5leHRlbnNpb25zVXNlZC5wdXNoKCdLSFJfdGV4dHVyZV90cmFuc2Zvcm0nKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYmVmb3JlUm9vdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgVjBWUk1cbiAgICBjb25zdCB2MFZSTUV4dGVuc2lvbiA9IGpzb24uZXh0ZW5zaW9ucz8uWydWUk0nXSBhcyBWMFZSTSB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCB2ME1hdGVyaWFsUHJvcGVydGllcyA9IHYwVlJNRXh0ZW5zaW9uPy5tYXRlcmlhbFByb3BlcnRpZXM7XG4gICAgaWYgKCF2ME1hdGVyaWFsUHJvcGVydGllcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHBvcHVsYXRlIHJlbmRlciBxdWV1ZSBtYXBcbiAgICB0aGlzLl9wb3B1bGF0ZVJlbmRlclF1ZXVlTWFwKHYwTWF0ZXJpYWxQcm9wZXJ0aWVzKTtcblxuICAgIC8vIGNvbnZlcnQgVjAgbWF0ZXJpYWwgcHJvcGVydGllcyBpbnRvIFYxIGNvbXBhdGlibGUgZm9ybWF0XG4gICAgdjBNYXRlcmlhbFByb3BlcnRpZXMuZm9yRWFjaCgobWF0ZXJpYWxQcm9wZXJ0aWVzLCBtYXRlcmlhbEluZGV4KSA9PiB7XG4gICAgICBjb25zdCBtYXRlcmlhbERlZiA9IGpzb24ubWF0ZXJpYWxzPy5bbWF0ZXJpYWxJbmRleF07XG5cbiAgICAgIGlmIChtYXRlcmlhbERlZiA9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgVlJNTWF0ZXJpYWxzVjBDb21wYXRQbHVnaW46IEF0dGVtcHQgdG8gdXNlIG1hdGVyaWFsc1ske21hdGVyaWFsSW5kZXh9XSBvZiBnbFRGIGJ1dCB0aGUgbWF0ZXJpYWwgZG9lc24ndCBleGlzdGAsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXIgPT09ICdWUk0vTVRvb24nKSB7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5fcGFyc2VWME1Ub29uUHJvcGVydGllcyhtYXRlcmlhbFByb3BlcnRpZXMsIG1hdGVyaWFsRGVmKTtcbiAgICAgICAganNvbi5tYXRlcmlhbHMhW21hdGVyaWFsSW5kZXhdID0gbWF0ZXJpYWw7XG4gICAgICB9IGVsc2UgaWYgKG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXI/LnN0YXJ0c1dpdGgoJ1ZSTS9VbmxpdCcpKSB7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5fcGFyc2VWMFVubGl0UHJvcGVydGllcyhtYXRlcmlhbFByb3BlcnRpZXMsIG1hdGVyaWFsRGVmKTtcbiAgICAgICAganNvbi5tYXRlcmlhbHMhW21hdGVyaWFsSW5kZXhdID0gbWF0ZXJpYWw7XG4gICAgICB9IGVsc2UgaWYgKG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXIgPT09ICdWUk1fVVNFX0dMVEZTSEFERVInKSB7XG4gICAgICAgIC8vIGBqc29uLm1hdGVyaWFsc1ttYXRlcmlhbEluZGV4XWAgc2hvdWxkIGJlIGFscmVhZHkgdmFsaWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgVlJNTWF0ZXJpYWxzVjBDb21wYXRQbHVnaW46IFVua25vd24gc2hhZGVyOiAke21hdGVyaWFsUHJvcGVydGllcy5zaGFkZXJ9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZVYwTVRvb25Qcm9wZXJ0aWVzKFxuICAgIG1hdGVyaWFsUHJvcGVydGllczogVjBNYXRlcmlhbCxcbiAgICBzY2hlbWFNYXRlcmlhbDogR0xURlNjaGVtYS5JTWF0ZXJpYWwsXG4gICk6IEdMVEZTY2hlbWEuSU1hdGVyaWFsIHtcbiAgICBjb25zdCBpc1RyYW5zcGFyZW50ID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmtleXdvcmRNYXA/LlsnX0FMUEhBQkxFTkRfT04nXSA/PyBmYWxzZTtcbiAgICBjb25zdCBlbmFibGVkWldyaXRlID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfWldyaXRlJ10gPT09IDE7XG4gICAgY29uc3QgdHJhbnNwYXJlbnRXaXRoWldyaXRlID0gZW5hYmxlZFpXcml0ZSAmJiBpc1RyYW5zcGFyZW50O1xuXG4gICAgY29uc3QgcmVuZGVyUXVldWVPZmZzZXROdW1iZXIgPSB0aGlzLl92MFBhcnNlUmVuZGVyUXVldWUobWF0ZXJpYWxQcm9wZXJ0aWVzKTtcblxuICAgIGNvbnN0IGlzQ3V0b2ZmID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmtleXdvcmRNYXA/LlsnX0FMUEhBVEVTVF9PTiddID8/IGZhbHNlO1xuICAgIGNvbnN0IGFscGhhTW9kZSA9IGlzVHJhbnNwYXJlbnQgPyAnQkxFTkQnIDogaXNDdXRvZmYgPyAnTUFTSycgOiAnT1BBUVVFJztcbiAgICBjb25zdCBhbHBoYUN1dG9mZiA9IGlzQ3V0b2ZmID8gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfQ3V0b2ZmJ10gPz8gMC41IDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgY3VsbE1vZGUgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19DdWxsTW9kZSddID8/IDI7IC8vIGVudW0sIHsgT2ZmLCBGcm9udCwgQmFjayB9XG4gICAgY29uc3QgZG91YmxlU2lkZWQgPSBjdWxsTW9kZSA9PT0gMDtcblxuICAgIGNvbnN0IHRleHR1cmVUcmFuc2Zvcm1FeHQgPSB0aGlzLl9wb3J0VGV4dHVyZVRyYW5zZm9ybShtYXRlcmlhbFByb3BlcnRpZXMpO1xuXG4gICAgY29uc3QgYmFzZUNvbG9yRmFjdG9yID0gKG1hdGVyaWFsUHJvcGVydGllcy52ZWN0b3JQcm9wZXJ0aWVzPy5bJ19Db2xvciddID8/IFsxLjAsIDEuMCwgMS4wLCAxLjBdKS5tYXAoXG4gICAgICAodjogbnVtYmVyLCBpOiBudW1iZXIpID0+IChpID09PSAzID8gdiA6IGdhbW1hRU9URih2KSksIC8vIGFscGhhIGNoYW5uZWwgaXMgc3RvcmVkIGluIGxpbmVhclxuICAgICk7XG4gICAgY29uc3QgYmFzZUNvbG9yVGV4dHVyZUluZGV4ID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLnRleHR1cmVQcm9wZXJ0aWVzPy5bJ19NYWluVGV4J107XG4gICAgY29uc3QgYmFzZUNvbG9yVGV4dHVyZSA9XG4gICAgICBiYXNlQ29sb3JUZXh0dXJlSW5kZXggIT0gbnVsbFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGluZGV4OiBiYXNlQ29sb3JUZXh0dXJlSW5kZXgsXG4gICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgIC4uLnRleHR1cmVUcmFuc2Zvcm1FeHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBub3JtYWxUZXh0dXJlU2NhbGUgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19CdW1wU2NhbGUnXSA/PyAxLjA7XG4gICAgY29uc3Qgbm9ybWFsVGV4dHVyZUluZGV4ID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLnRleHR1cmVQcm9wZXJ0aWVzPy5bJ19CdW1wTWFwJ107XG4gICAgY29uc3Qgbm9ybWFsVGV4dHVyZSA9XG4gICAgICBub3JtYWxUZXh0dXJlSW5kZXggIT0gbnVsbFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGluZGV4OiBub3JtYWxUZXh0dXJlSW5kZXgsXG4gICAgICAgICAgICBzY2FsZTogbm9ybWFsVGV4dHVyZVNjYWxlLFxuICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAuLi50ZXh0dXJlVHJhbnNmb3JtRXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgZW1pc3NpdmVGYWN0b3IgPSAobWF0ZXJpYWxQcm9wZXJ0aWVzLnZlY3RvclByb3BlcnRpZXM/LlsnX0VtaXNzaW9uQ29sb3InXSA/PyBbMC4wLCAwLjAsIDAuMCwgMS4wXSkubWFwKFxuICAgICAgZ2FtbWFFT1RGLFxuICAgICk7XG4gICAgY29uc3QgZW1pc3NpdmVUZXh0dXJlSW5kZXggPSBtYXRlcmlhbFByb3BlcnRpZXMudGV4dHVyZVByb3BlcnRpZXM/LlsnX0VtaXNzaW9uTWFwJ107XG4gICAgY29uc3QgZW1pc3NpdmVUZXh0dXJlID1cbiAgICAgIGVtaXNzaXZlVGV4dHVyZUluZGV4ICE9IG51bGxcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpbmRleDogZW1pc3NpdmVUZXh0dXJlSW5kZXgsXG4gICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgIC4uLnRleHR1cmVUcmFuc2Zvcm1FeHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBzaGFkZUNvbG9yRmFjdG9yID0gKG1hdGVyaWFsUHJvcGVydGllcy52ZWN0b3JQcm9wZXJ0aWVzPy5bJ19TaGFkZUNvbG9yJ10gPz8gWzAuOTcsIDAuODEsIDAuODYsIDEuMF0pLm1hcChcbiAgICAgIGdhbW1hRU9URixcbiAgICApO1xuICAgIGNvbnN0IHNoYWRlTXVsdGlwbHlUZXh0dXJlSW5kZXggPSBtYXRlcmlhbFByb3BlcnRpZXMudGV4dHVyZVByb3BlcnRpZXM/LlsnX1NoYWRlVGV4dHVyZSddO1xuICAgIGNvbnN0IHNoYWRlTXVsdGlwbHlUZXh0dXJlID1cbiAgICAgIHNoYWRlTXVsdGlwbHlUZXh0dXJlSW5kZXggIT0gbnVsbFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGluZGV4OiBzaGFkZU11bHRpcGx5VGV4dHVyZUluZGV4LFxuICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAuLi50ZXh0dXJlVHJhbnNmb3JtRXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gLy8gY29udmVydCB2MCBzaGFkZSBzaGlmdCAvIHNoYWRlIHRvb255XG4gICAgbGV0IHNoYWRpbmdTaGlmdEZhY3RvciA9IG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX1NoYWRlU2hpZnQnXSA/PyAwLjA7XG4gICAgbGV0IHNoYWRpbmdUb29ueUZhY3RvciA9IG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX1NoYWRlVG9vbnknXSA/PyAwLjk7XG4gICAgc2hhZGluZ1Rvb255RmFjdG9yID0gVEhSRUUuTWF0aFV0aWxzLmxlcnAoc2hhZGluZ1Rvb255RmFjdG9yLCAxLjAsIDAuNSArIDAuNSAqIHNoYWRpbmdTaGlmdEZhY3Rvcik7XG4gICAgc2hhZGluZ1NoaWZ0RmFjdG9yID0gLXNoYWRpbmdTaGlmdEZhY3RvciAtICgxLjAgLSBzaGFkaW5nVG9vbnlGYWN0b3IpO1xuXG4gICAgY29uc3QgZ2lJbnRlbnNpdHlGYWN0b3IgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19JbmRpcmVjdExpZ2h0SW50ZW5zaXR5J10gPz8gMC4xO1xuICAgIGNvbnN0IGdpRXF1YWxpemF0aW9uRmFjdG9yID0gZ2lJbnRlbnNpdHlGYWN0b3IgPyAxLjAgLSBnaUludGVuc2l0eUZhY3RvciA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IG1hdGNhcFRleHR1cmVJbmRleCA9IG1hdGVyaWFsUHJvcGVydGllcy50ZXh0dXJlUHJvcGVydGllcz8uWydfU3BoZXJlQWRkJ107XG4gICAgY29uc3QgbWF0Y2FwRmFjdG9yID0gbWF0Y2FwVGV4dHVyZUluZGV4ICE9IG51bGwgPyBbMS4wLCAxLjAsIDEuMF0gOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgbWF0Y2FwVGV4dHVyZSA9XG4gICAgICBtYXRjYXBUZXh0dXJlSW5kZXggIT0gbnVsbFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGluZGV4OiBtYXRjYXBUZXh0dXJlSW5kZXgsXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHJpbUxpZ2h0aW5nTWl4RmFjdG9yID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfUmltTGlnaHRpbmdNaXgnXSA/PyAwLjA7XG4gICAgY29uc3QgcmltTXVsdGlwbHlUZXh0dXJlSW5kZXggPSBtYXRlcmlhbFByb3BlcnRpZXMudGV4dHVyZVByb3BlcnRpZXM/LlsnX1JpbVRleHR1cmUnXTtcbiAgICBjb25zdCByaW1NdWx0aXBseVRleHR1cmUgPVxuICAgICAgcmltTXVsdGlwbHlUZXh0dXJlSW5kZXggIT0gbnVsbFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGluZGV4OiByaW1NdWx0aXBseVRleHR1cmVJbmRleCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgLi4udGV4dHVyZVRyYW5zZm9ybUV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHBhcmFtZXRyaWNSaW1Db2xvckZhY3RvciA9IChtYXRlcmlhbFByb3BlcnRpZXMudmVjdG9yUHJvcGVydGllcz8uWydfUmltQ29sb3InXSA/PyBbMC4wLCAwLjAsIDAuMCwgMS4wXSkubWFwKFxuICAgICAgZ2FtbWFFT1RGLFxuICAgICk7XG4gICAgY29uc3QgcGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlckZhY3RvciA9IG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX1JpbUZyZXNuZWxQb3dlciddID8/IDEuMDtcbiAgICBjb25zdCBwYXJhbWV0cmljUmltTGlmdEZhY3RvciA9IG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX1JpbUxpZnQnXSA/PyAwLjA7XG5cbiAgICBjb25zdCBvdXRsaW5lV2lkdGhNb2RlID0gWydub25lJywgJ3dvcmxkQ29vcmRpbmF0ZXMnLCAnc2NyZWVuQ29vcmRpbmF0ZXMnXVtcbiAgICAgIG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX091dGxpbmVXaWR0aE1vZGUnXSA/PyAwXG4gICAgXSBhcyBWMU1Ub29uU2NoZW1hLk1hdGVyaWFsc01Ub29uT3V0bGluZVdpZHRoTW9kZTtcblxuICAgIC8vIC8vIHYwIG91dGxpbmVXaWR0aEZhY3RvciBpcyBpbiBjZW50aW1ldGVyXG4gICAgbGV0IG91dGxpbmVXaWR0aEZhY3RvciA9IG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX091dGxpbmVXaWR0aCddID8/IDAuMDtcbiAgICBvdXRsaW5lV2lkdGhGYWN0b3IgPSAwLjAxICogb3V0bGluZVdpZHRoRmFjdG9yO1xuXG4gICAgY29uc3Qgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlSW5kZXggPSBtYXRlcmlhbFByb3BlcnRpZXMudGV4dHVyZVByb3BlcnRpZXM/LlsnX091dGxpbmVXaWR0aFRleHR1cmUnXTtcbiAgICBjb25zdCBvdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUgPVxuICAgICAgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlSW5kZXggIT0gbnVsbFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGluZGV4OiBvdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmVJbmRleCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgLi4udGV4dHVyZVRyYW5zZm9ybUV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IG91dGxpbmVDb2xvckZhY3RvciA9IChtYXRlcmlhbFByb3BlcnRpZXMudmVjdG9yUHJvcGVydGllcz8uWydfT3V0bGluZUNvbG9yJ10gPz8gWzAuMCwgMC4wLCAwLjBdKS5tYXAoXG4gICAgICBnYW1tYUVPVEYsXG4gICAgKTtcbiAgICBjb25zdCBvdXRsaW5lQ29sb3JNb2RlID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfT3V0bGluZUNvbG9yTW9kZSddID8/IDA7IC8vIGVudW0sIHsgRml4ZWQsIE1peGVkIH1cbiAgICBjb25zdCBvdXRsaW5lTGlnaHRpbmdNaXhGYWN0b3IgPVxuICAgICAgb3V0bGluZUNvbG9yTW9kZSA9PT0gMSA/IG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX091dGxpbmVMaWdodGluZ01peCddID8/IDEuMCA6IDAuMDtcblxuICAgIGNvbnN0IHV2QW5pbWF0aW9uTWFza1RleHR1cmVJbmRleCA9IG1hdGVyaWFsUHJvcGVydGllcy50ZXh0dXJlUHJvcGVydGllcz8uWydfVXZBbmltTWFza1RleHR1cmUnXTtcbiAgICBjb25zdCB1dkFuaW1hdGlvbk1hc2tUZXh0dXJlID1cbiAgICAgIHV2QW5pbWF0aW9uTWFza1RleHR1cmVJbmRleCAhPSBudWxsXG4gICAgICAgID8ge1xuICAgICAgICAgICAgaW5kZXg6IHV2QW5pbWF0aW9uTWFza1RleHR1cmVJbmRleCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgLi4udGV4dHVyZVRyYW5zZm9ybUV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHV2QW5pbWF0aW9uU2Nyb2xsWFNwZWVkRmFjdG9yID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfVXZBbmltU2Nyb2xsWCddID8/IDAuMDtcblxuICAgIC8vIHV2QW5pbWF0aW9uU2Nyb2xsWVNwZWVkRmFjdG9yIHdpbGwgYmUgb3Bwb3NpdGUgYmV0d2VlbiBWMCBhbmQgVjFcbiAgICBsZXQgdXZBbmltYXRpb25TY3JvbGxZU3BlZWRGYWN0b3IgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19VdkFuaW1TY3JvbGxZJ10gPz8gMC4wO1xuICAgIGlmICh1dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvciAhPSBudWxsKSB7XG4gICAgICB1dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvciA9IC11dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvcjtcbiAgICB9XG5cbiAgICBjb25zdCB1dkFuaW1hdGlvblJvdGF0aW9uU3BlZWRGYWN0b3IgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19VdkFuaW1Sb3RhdGlvbiddID8/IDAuMDtcblxuICAgIGNvbnN0IG10b29uRXh0ZW5zaW9uOiBWMU1Ub29uU2NoZW1hLlZSTUNNYXRlcmlhbHNNVG9vbiA9IHtcbiAgICAgIHNwZWNWZXJzaW9uOiAnMS4wJyxcbiAgICAgIHRyYW5zcGFyZW50V2l0aFpXcml0ZSxcbiAgICAgIHJlbmRlclF1ZXVlT2Zmc2V0TnVtYmVyLFxuICAgICAgc2hhZGVDb2xvckZhY3RvcixcbiAgICAgIHNoYWRlTXVsdGlwbHlUZXh0dXJlLFxuICAgICAgc2hhZGluZ1NoaWZ0RmFjdG9yLFxuICAgICAgc2hhZGluZ1Rvb255RmFjdG9yLFxuICAgICAgZ2lFcXVhbGl6YXRpb25GYWN0b3IsXG4gICAgICBtYXRjYXBGYWN0b3IsXG4gICAgICBtYXRjYXBUZXh0dXJlLFxuICAgICAgcmltTGlnaHRpbmdNaXhGYWN0b3IsXG4gICAgICByaW1NdWx0aXBseVRleHR1cmUsXG4gICAgICBwYXJhbWV0cmljUmltQ29sb3JGYWN0b3IsXG4gICAgICBwYXJhbWV0cmljUmltRnJlc25lbFBvd2VyRmFjdG9yLFxuICAgICAgcGFyYW1ldHJpY1JpbUxpZnRGYWN0b3IsXG4gICAgICBvdXRsaW5lV2lkdGhNb2RlLFxuICAgICAgb3V0bGluZVdpZHRoRmFjdG9yLFxuICAgICAgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlLFxuICAgICAgb3V0bGluZUNvbG9yRmFjdG9yLFxuICAgICAgb3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yLFxuICAgICAgdXZBbmltYXRpb25NYXNrVGV4dHVyZSxcbiAgICAgIHV2QW5pbWF0aW9uU2Nyb2xsWFNwZWVkRmFjdG9yLFxuICAgICAgdXZBbmltYXRpb25TY3JvbGxZU3BlZWRGYWN0b3IsXG4gICAgICB1dkFuaW1hdGlvblJvdGF0aW9uU3BlZWRGYWN0b3IsXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zY2hlbWFNYXRlcmlhbCxcblxuICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3M6IHtcbiAgICAgICAgYmFzZUNvbG9yRmFjdG9yLFxuICAgICAgICBiYXNlQ29sb3JUZXh0dXJlLFxuICAgICAgfSxcbiAgICAgIG5vcm1hbFRleHR1cmUsXG4gICAgICBlbWlzc2l2ZVRleHR1cmUsXG4gICAgICBlbWlzc2l2ZUZhY3RvcixcbiAgICAgIGFscGhhTW9kZSxcbiAgICAgIGFscGhhQ3V0b2ZmLFxuICAgICAgZG91YmxlU2lkZWQsXG4gICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgICAgICAgVlJNQ19tYXRlcmlhbHNfbXRvb246IG10b29uRXh0ZW5zaW9uLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VWMFVubGl0UHJvcGVydGllcyhcbiAgICBtYXRlcmlhbFByb3BlcnRpZXM6IFYwTWF0ZXJpYWwsXG4gICAgc2NoZW1hTWF0ZXJpYWw6IEdMVEZTY2hlbWEuSU1hdGVyaWFsLFxuICApOiBHTFRGU2NoZW1hLklNYXRlcmlhbCB7XG4gICAgY29uc3QgaXNUcmFuc3BhcmVudFpXcml0ZSA9IG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXIgPT09ICdWUk0vVW5saXRUcmFuc3BhcmVudFpXcml0ZSc7XG4gICAgY29uc3QgaXNUcmFuc3BhcmVudCA9IG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXIgPT09ICdWUk0vVW5saXRUcmFuc3BhcmVudCcgfHwgaXNUcmFuc3BhcmVudFpXcml0ZTtcblxuICAgIGNvbnN0IHJlbmRlclF1ZXVlT2Zmc2V0TnVtYmVyID0gdGhpcy5fdjBQYXJzZVJlbmRlclF1ZXVlKG1hdGVyaWFsUHJvcGVydGllcyk7XG5cbiAgICBjb25zdCBpc0N1dG9mZiA9IG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXIgPT09ICdWUk0vVW5saXRDdXRvdXQnO1xuICAgIGNvbnN0IGFscGhhTW9kZSA9IGlzVHJhbnNwYXJlbnQgPyAnQkxFTkQnIDogaXNDdXRvZmYgPyAnTUFTSycgOiAnT1BBUVVFJztcbiAgICBjb25zdCBhbHBoYUN1dG9mZiA9IGlzQ3V0b2ZmID8gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfQ3V0b2ZmJ10gPz8gMC41IDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgdGV4dHVyZVRyYW5zZm9ybUV4dCA9IHRoaXMuX3BvcnRUZXh0dXJlVHJhbnNmb3JtKG1hdGVyaWFsUHJvcGVydGllcyk7XG5cbiAgICBjb25zdCBiYXNlQ29sb3JGYWN0b3IgPSAobWF0ZXJpYWxQcm9wZXJ0aWVzLnZlY3RvclByb3BlcnRpZXM/LlsnX0NvbG9yJ10gPz8gWzEuMCwgMS4wLCAxLjAsIDEuMF0pLm1hcChnYW1tYUVPVEYpO1xuICAgIGNvbnN0IGJhc2VDb2xvclRleHR1cmVJbmRleCA9IG1hdGVyaWFsUHJvcGVydGllcy50ZXh0dXJlUHJvcGVydGllcz8uWydfTWFpblRleCddO1xuICAgIGNvbnN0IGJhc2VDb2xvclRleHR1cmUgPVxuICAgICAgYmFzZUNvbG9yVGV4dHVyZUluZGV4ICE9IG51bGxcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpbmRleDogYmFzZUNvbG9yVGV4dHVyZUluZGV4LFxuICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAuLi50ZXh0dXJlVHJhbnNmb3JtRXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gdXNlIG10b29uIGluc3RlYWQgb2YgdW5saXQsIHNpbmNlIHRoZXJlIG1pZ2h0IGJlIFZSTTAuMCBzcGVjaWZpYyBmZWF0dXJlcyB0aGF0IGFyZSBub3Qgc3VwcG9ydGVkIGJ5IGdsdGZcbiAgICBjb25zdCBtdG9vbkV4dGVuc2lvbjogVjFNVG9vblNjaGVtYS5WUk1DTWF0ZXJpYWxzTVRvb24gPSB7XG4gICAgICBzcGVjVmVyc2lvbjogJzEuMCcsXG4gICAgICB0cmFuc3BhcmVudFdpdGhaV3JpdGU6IGlzVHJhbnNwYXJlbnRaV3JpdGUsXG4gICAgICByZW5kZXJRdWV1ZU9mZnNldE51bWJlcixcbiAgICAgIHNoYWRlQ29sb3JGYWN0b3I6IGJhc2VDb2xvckZhY3RvcixcbiAgICAgIHNoYWRlTXVsdGlwbHlUZXh0dXJlOiBiYXNlQ29sb3JUZXh0dXJlLFxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc2NoZW1hTWF0ZXJpYWwsXG5cbiAgICAgIHBick1ldGFsbGljUm91Z2huZXNzOiB7XG4gICAgICAgIGJhc2VDb2xvckZhY3RvcixcbiAgICAgICAgYmFzZUNvbG9yVGV4dHVyZSxcbiAgICAgIH0sXG4gICAgICBhbHBoYU1vZGUsXG4gICAgICBhbHBoYUN1dG9mZixcbiAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICAgICAgICBWUk1DX21hdGVyaWFsc19tdG9vbjogbXRvb25FeHRlbnNpb24sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZ2xURiBgS0hSX3RleHR1cmVfdHJhbnNmb3JtYCBleHRlbnNpb24gZnJvbSB2MCB0ZXh0dXJlIHRyYW5zZm9ybSBpbmZvLlxuICAgKi9cbiAgcHJpdmF0ZSBfcG9ydFRleHR1cmVUcmFuc2Zvcm0obWF0ZXJpYWxQcm9wZXJ0aWVzOiBWME1hdGVyaWFsKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IHRleHR1cmVUcmFuc2Zvcm0gPSBtYXRlcmlhbFByb3BlcnRpZXMudmVjdG9yUHJvcGVydGllcz8uWydfTWFpblRleCddO1xuICAgIGlmICh0ZXh0dXJlVHJhbnNmb3JtID09IG51bGwpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXQgPSBbdGV4dHVyZVRyYW5zZm9ybT8uWzBdID8/IDAuMCwgdGV4dHVyZVRyYW5zZm9ybT8uWzFdID8/IDAuMF07XG4gICAgY29uc3Qgc2NhbGUgPSBbdGV4dHVyZVRyYW5zZm9ybT8uWzJdID8/IDEuMCwgdGV4dHVyZVRyYW5zZm9ybT8uWzNdID8/IDEuMF07XG5cbiAgICBvZmZzZXRbMV0gPSAxLjAgLSBzY2FsZVsxXSAtIG9mZnNldFsxXTtcblxuICAgIHJldHVybiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IHsgb2Zmc2V0LCBzY2FsZSB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB2MCByZW5kZXIgb3JkZXIgaW50byB2MSByZW5kZXIgb3JkZXIuXG4gICAqIFRoaXMgdXNlcyBhIG1hcCBmcm9tIHYwIHJlbmRlciBxdWV1ZSB0byB2MSBjb21wbGlhbnQgcmVuZGVyIHF1ZXVlIG9mZnNldCB3aGljaCBpcyBnZW5lcmF0ZWQgaW4ge0BsaW5rIF9wb3B1bGF0ZVJlbmRlclF1ZXVlTWFwfS5cbiAgICovXG4gIHByaXZhdGUgX3YwUGFyc2VSZW5kZXJRdWV1ZShtYXRlcmlhbFByb3BlcnRpZXM6IFYwTWF0ZXJpYWwpOiBudW1iZXIge1xuICAgIGNvbnN0IGlzVHJhbnNwYXJlbnQgPSBtYXRlcmlhbFByb3BlcnRpZXMua2V5d29yZE1hcD8uWydfQUxQSEFCTEVORF9PTiddID8/IGZhbHNlO1xuICAgIGNvbnN0IGVuYWJsZWRaV3JpdGUgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19aV3JpdGUnXSA9PT0gMTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgaWYgKGlzVHJhbnNwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHYwUXVldWUgPSBtYXRlcmlhbFByb3BlcnRpZXMucmVuZGVyUXVldWU7XG5cbiAgICAgIGlmICh2MFF1ZXVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGVuYWJsZWRaV3JpdGUpIHtcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9yZW5kZXJRdWV1ZU1hcFRyYW5zcGFyZW50WldyaXRlLmdldCh2MFF1ZXVlKSE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fcmVuZGVyUXVldWVNYXBUcmFuc3BhcmVudC5nZXQodjBRdWV1ZSkhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBtYXAgd2hpY2ggbWFwcyB2MCByZW5kZXIgcXVldWUgdG8gdjEgY29tcGxpYW50IHJlbmRlciBxdWV1ZSBvZmZzZXQuXG4gICAqIFRoaXMgbGlzdHMgdXAgYWxsIHJlbmRlciBxdWV1ZXMgdGhlIG1vZGVsIHVzZSBhbmQgY3JlYXRlcyBhIG1hcCB0byBuZXcgcmVuZGVyIHF1ZXVlIG9mZnNldHMgaW4gdGhlIHNhbWUgb3JkZXIuXG4gICAqL1xuICBwcml2YXRlIF9wb3B1bGF0ZVJlbmRlclF1ZXVlTWFwKG1hdGVyaWFsUHJvcGVydGllc0xpc3Q6IFYwTWF0ZXJpYWxbXSkge1xuICAgIC8qKlxuICAgICAqIEEgc2V0IG9mIHVzZWQgcmVuZGVyIHF1ZXVlcyBpbiBUcmFuc3BhcmVudCBtYXRlcmlhbHMuXG4gICAgICovXG4gICAgY29uc3QgcmVuZGVyUXVldWVzVHJhbnNwYXJlbnQgPSBuZXcgU2V0PG51bWJlcj4oKTtcblxuICAgIC8qKlxuICAgICAqIEEgc2V0IG9mIHVzZWQgcmVuZGVyIHF1ZXVlcyBpbiBUcmFuc3BhcmVudFpXcml0ZSBtYXRlcmlhbHMuXG4gICAgICovXG4gICAgY29uc3QgcmVuZGVyUXVldWVzVHJhbnNwYXJlbnRaV3JpdGUgPSBuZXcgU2V0PG51bWJlcj4oKTtcblxuICAgIC8vIHBvcHVsYXRlIHRoZSByZW5kZXIgcXVldWUgc2V0XG4gICAgbWF0ZXJpYWxQcm9wZXJ0aWVzTGlzdC5mb3JFYWNoKChtYXRlcmlhbFByb3BlcnRpZXMpID0+IHtcbiAgICAgIGNvbnN0IGlzVHJhbnNwYXJlbnQgPSBtYXRlcmlhbFByb3BlcnRpZXMua2V5d29yZE1hcD8uWydfQUxQSEFCTEVORF9PTiddID8/IGZhbHNlO1xuICAgICAgY29uc3QgZW5hYmxlZFpXcml0ZSA9IG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX1pXcml0ZSddID09PSAxO1xuXG4gICAgICBpZiAoaXNUcmFuc3BhcmVudCkge1xuICAgICAgICBjb25zdCB2MFF1ZXVlID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLnJlbmRlclF1ZXVlO1xuXG4gICAgICAgIGlmICh2MFF1ZXVlICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoZW5hYmxlZFpXcml0ZSkge1xuICAgICAgICAgICAgcmVuZGVyUXVldWVzVHJhbnNwYXJlbnRaV3JpdGUuYWRkKHYwUXVldWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJRdWV1ZXNUcmFuc3BhcmVudC5hZGQodjBRdWV1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IGEgd2FybmluZyBpZiB0aGUgbW9kZWwgdXNlcyB2MSBpbmNvbXBhdGlibGUgbnVtYmVyIG9mIHJlbmRlciBxdWV1ZXNcbiAgICBpZiAocmVuZGVyUXVldWVzVHJhbnNwYXJlbnQuc2l6ZSA+IDEwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBWUk1NYXRlcmlhbHNWMENvbXBhdFBsdWdpbjogVGhpcyBWUk0gdXNlcyAke3JlbmRlclF1ZXVlc1RyYW5zcGFyZW50LnNpemV9IHJlbmRlciBxdWV1ZXMgZm9yIFRyYW5zcGFyZW50IG1hdGVyaWFscyB3aGlsZSBWUk0gMS4wIG9ubHkgc3VwcG9ydHMgdXAgdG8gMTAgcmVuZGVyIHF1ZXVlcy4gVGhlIG1vZGVsIG1pZ2h0IG5vdCBiZSByZW5kZXJlZCBjb3JyZWN0bHkuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlclF1ZXVlc1RyYW5zcGFyZW50WldyaXRlLnNpemUgPiAxMCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVlJNTWF0ZXJpYWxzVjBDb21wYXRQbHVnaW46IFRoaXMgVlJNIHVzZXMgJHtyZW5kZXJRdWV1ZXNUcmFuc3BhcmVudFpXcml0ZS5zaXplfSByZW5kZXIgcXVldWVzIGZvciBUcmFuc3BhcmVudFpXcml0ZSBtYXRlcmlhbHMgd2hpbGUgVlJNIDEuMCBvbmx5IHN1cHBvcnRzIHVwIHRvIDEwIHJlbmRlciBxdWV1ZXMuIFRoZSBtb2RlbCBtaWdodCBub3QgYmUgcmVuZGVyZWQgY29ycmVjdGx5LmAsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIG1hcCBmcm9tIHYwIHJlbmRlciBxdWV1ZSB0byB2MSByZW5kZXIgcXVldWUgb2Zmc2V0XG4gICAgQXJyYXkuZnJvbShyZW5kZXJRdWV1ZXNUcmFuc3BhcmVudClcbiAgICAgIC5zb3J0KClcbiAgICAgIC5mb3JFYWNoKChxdWV1ZSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdRdWV1ZU9mZnNldCA9IE1hdGgubWluKE1hdGgubWF4KGkgLSByZW5kZXJRdWV1ZXNUcmFuc3BhcmVudC5zaXplICsgMSwgLTkpLCAwKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUXVldWVNYXBUcmFuc3BhcmVudC5zZXQocXVldWUsIG5ld1F1ZXVlT2Zmc2V0KTtcbiAgICAgIH0pO1xuXG4gICAgQXJyYXkuZnJvbShyZW5kZXJRdWV1ZXNUcmFuc3BhcmVudFpXcml0ZSlcbiAgICAgIC5zb3J0KClcbiAgICAgIC5mb3JFYWNoKChxdWV1ZSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdRdWV1ZU9mZnNldCA9IE1hdGgubWluKE1hdGgubWF4KGksIDApLCA5KTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUXVldWVNYXBUcmFuc3BhcmVudFpXcml0ZS5zZXQocXVldWUsIG5ld1F1ZXVlT2Zmc2V0KTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGdhbW1hRU9URihlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3coZSwgMi4yKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLFlBQXVCOzs7QUNBaEIsU0FBUyxVQUFVLEdBQW1CO0FBQzNDLFNBQU8sS0FBSyxJQUFJLEdBQUcsR0FBRztBQUN4Qjs7O0FES08sSUFBTSw2QkFBTixNQUE2RDtBQUFBLEVBYWxFLElBQVcsT0FBZTtBQUN4QixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRU8sWUFBWSxRQUFvQjtBQXhCekM7QUF5QkksU0FBSyxTQUFTO0FBRWQsU0FBSyw2QkFBNkIsb0JBQUksSUFBSTtBQUMxQyxTQUFLLG1DQUFtQyxvQkFBSSxJQUFJO0FBSWhELFVBQU0sT0FBTyxLQUFLLE9BQU87QUFFekIsU0FBSyxrQkFBaUIsVUFBSyxtQkFBTCxZQUF1QixDQUFDO0FBQzlDLFFBQUksS0FBSyxlQUFlLFFBQVEsdUJBQXVCLE1BQU0sSUFBSTtBQUMvRCxXQUFLLGVBQWUsS0FBSyx1QkFBdUI7QUFBQSxJQUNsRDtBQUFBLEVBQ0Y7QUFBQSxFQUVhLGFBQTRCO0FBQUE7QUF4QzNDO0FBeUNJLFlBQU0sT0FBTyxLQUFLLE9BQU87QUFHekIsWUFBTSxrQkFBaUIsVUFBSyxlQUFMLG1CQUFrQjtBQUN6QyxZQUFNLHVCQUF1QixpREFBZ0I7QUFDN0MsVUFBSSxDQUFDLHNCQUFzQjtBQUN6QjtBQUFBLE1BQ0Y7QUFHQSxXQUFLLHdCQUF3QixvQkFBb0I7QUFHakQsMkJBQXFCLFFBQVEsQ0FBQyxvQkFBb0Isa0JBQWtCO0FBdER4RSxZQUFBQSxLQUFBO0FBdURNLGNB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
