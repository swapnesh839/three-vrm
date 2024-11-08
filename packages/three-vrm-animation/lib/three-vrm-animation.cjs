/*!
 * @pixiv/three-vrm-animation v3.1.5
 * The implementation of VRM Animation
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-animation is distributed under MIT License
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
  VRMAnimation: () => VRMAnimation,
  VRMAnimationLoaderPlugin: () => VRMAnimationLoaderPlugin,
  VRMLookAtQuaternionProxy: () => VRMLookAtQuaternionProxy,
  createVRMAnimationClip: () => createVRMAnimationClip,
  createVRMAnimationExpressionTracks: () => createVRMAnimationExpressionTracks,
  createVRMAnimationHumanoidTracks: () => createVRMAnimationHumanoidTracks,
  createVRMAnimationLookAtTrack: () => createVRMAnimationLookAtTrack
});
module.exports = __toCommonJS(src_exports);

// src/createVRMAnimationClip.ts
var THREE18 = __toESM(require("three"), 1);

// ../three-vrm-core/lib/three-vrm-core.module.js
var THREE = __toESM(require("three"), 1);
var THREE4 = __toESM(require("three"), 1);
var THREE2 = __toESM(require("three"), 1);
var THREE3 = __toESM(require("three"), 1);
var THREE5 = __toESM(require("three"), 1);
var THREE6 = __toESM(require("three"), 1);
var THREE7 = __toESM(require("three"), 1);
var THREE8 = __toESM(require("three"), 1);
var THREE11 = __toESM(require("three"), 1);
var THREE9 = __toESM(require("three"), 1);
var THREE10 = __toESM(require("three"), 1);
var THREE13 = __toESM(require("three"), 1);
var THREE12 = __toESM(require("three"), 1);
var THREE14 = __toESM(require("three"), 1);
var THREE15 = __toESM(require("three"), 1);
var THREE16 = __toESM(require("three"), 1);
var __async2 = (__this, __arguments, generator) => {
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
var VRMExpression = class extends THREE.Object3D {
  constructor(expressionName) {
    super();
    this.weight = 0;
    this.isBinary = false;
    this.overrideBlink = "none";
    this.overrideLookAt = "none";
    this.overrideMouth = "none";
    this._binds = [];
    this.name = `VRMExpression_${expressionName}`;
    this.expressionName = expressionName;
    this.type = "VRMExpression";
    this.visible = false;
  }
  /**
   * A value represents how much it should override blink expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideBlinkAmount() {
    if (this.overrideBlink === "block") {
      return 0 < this.outputWeight ? 1 : 0;
    } else if (this.overrideBlink === "blend") {
      return this.outputWeight;
    } else {
      return 0;
    }
  }
  /**
   * A value represents how much it should override lookAt expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideLookAtAmount() {
    if (this.overrideLookAt === "block") {
      return 0 < this.outputWeight ? 1 : 0;
    } else if (this.overrideLookAt === "blend") {
      return this.outputWeight;
    } else {
      return 0;
    }
  }
  /**
   * A value represents how much it should override mouth expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideMouthAmount() {
    if (this.overrideMouth === "block") {
      return 0 < this.outputWeight ? 1 : 0;
    } else if (this.overrideMouth === "blend") {
      return this.outputWeight;
    } else {
      return 0;
    }
  }
  /**
   * An output weight of this expression, considering the {@link isBinary}.
   */
  get outputWeight() {
    if (this.isBinary) {
      return this.weight > 0.5 ? 1 : 0;
    }
    return this.weight;
  }
  addBind(bind) {
    this._binds.push(bind);
  }
  /**
   * Apply weight to every assigned blend shapes.
   * Should be called every frame.
   */
  applyWeight(options) {
    var _a;
    let actualWeight = this.outputWeight;
    actualWeight *= (_a = options == null ? void 0 : options.multiplier) != null ? _a : 1;
    if (this.isBinary && actualWeight < 1) {
      actualWeight = 0;
    }
    this._binds.forEach((bind) => bind.applyWeight(actualWeight));
  }
  /**
   * Clear previously assigned blend shapes.
   */
  clearAppliedWeight() {
    this._binds.forEach((bind) => bind.clearAppliedWeight());
  }
};
function extractPrimitivesInternal(gltf, nodeIndex, node) {
  var _a, _b;
  const json = gltf.parser.json;
  const schemaNode = (_a = json.nodes) == null ? void 0 : _a[nodeIndex];
  if (schemaNode == null) {
    console.warn(`extractPrimitivesInternal: Attempt to use nodes[${nodeIndex}] of glTF but the node doesn't exist`);
    return null;
  }
  const meshIndex = schemaNode.mesh;
  if (meshIndex == null) {
    return null;
  }
  const schemaMesh = (_b = json.meshes) == null ? void 0 : _b[meshIndex];
  if (schemaMesh == null) {
    console.warn(`extractPrimitivesInternal: Attempt to use meshes[${meshIndex}] of glTF but the mesh doesn't exist`);
    return null;
  }
  const primitiveCount = schemaMesh.primitives.length;
  const primitives = [];
  node.traverse((object) => {
    if (primitives.length < primitiveCount) {
      if (object.isMesh) {
        primitives.push(object);
      }
    }
  });
  return primitives;
}
function gltfExtractPrimitivesFromNode(gltf, nodeIndex) {
  return __async2(this, null, function* () {
    const node = yield gltf.parser.getDependency("node", nodeIndex);
    return extractPrimitivesInternal(gltf, nodeIndex, node);
  });
}
var VRMExpressionPresetName = {
  Aa: "aa",
  Ih: "ih",
  Ou: "ou",
  Ee: "ee",
  Oh: "oh",
  Blink: "blink",
  Happy: "happy",
  Angry: "angry",
  Sad: "sad",
  Relaxed: "relaxed",
  LookUp: "lookUp",
  Surprised: "surprised",
  LookDown: "lookDown",
  LookLeft: "lookLeft",
  LookRight: "lookRight",
  BlinkLeft: "blinkLeft",
  BlinkRight: "blinkRight",
  Neutral: "neutral"
};
function saturate(value) {
  return Math.max(Math.min(value, 1), 0);
}
var VRMExpressionManager = class _VRMExpressionManager {
  /**
   * Create a new {@link VRMExpressionManager}.
   */
  constructor() {
    this.blinkExpressionNames = ["blink", "blinkLeft", "blinkRight"];
    this.lookAtExpressionNames = ["lookLeft", "lookRight", "lookUp", "lookDown"];
    this.mouthExpressionNames = ["aa", "ee", "ih", "oh", "ou"];
    this._expressions = [];
    this._expressionMap = {};
  }
  get expressions() {
    return this._expressions.concat();
  }
  get expressionMap() {
    return Object.assign({}, this._expressionMap);
  }
  /**
   * A map from name to expression, but excluding custom expressions.
   */
  get presetExpressionMap() {
    const result = {};
    const presetNameSet = new Set(Object.values(VRMExpressionPresetName));
    Object.entries(this._expressionMap).forEach(([name, expression]) => {
      if (presetNameSet.has(name)) {
        result[name] = expression;
      }
    });
    return result;
  }
  /**
   * A map from name to expression, but excluding preset expressions.
   */
  get customExpressionMap() {
    const result = {};
    const presetNameSet = new Set(Object.values(VRMExpressionPresetName));
    Object.entries(this._expressionMap).forEach(([name, expression]) => {
      if (!presetNameSet.has(name)) {
        result[name] = expression;
      }
    });
    return result;
  }
  /**
   * Copy the given {@link VRMExpressionManager} into this one.
   * @param source The {@link VRMExpressionManager} you want to copy
   * @returns this
   */
  copy(source) {
    const expressions = this._expressions.concat();
    expressions.forEach((expression) => {
      this.unregisterExpression(expression);
    });
    source._expressions.forEach((expression) => {
      this.registerExpression(expression);
    });
    this.blinkExpressionNames = source.blinkExpressionNames.concat();
    this.lookAtExpressionNames = source.lookAtExpressionNames.concat();
    this.mouthExpressionNames = source.mouthExpressionNames.concat();
    return this;
  }
  /**
   * Returns a clone of this {@link VRMExpressionManager}.
   * @returns Copied {@link VRMExpressionManager}
   */
  clone() {
    return new _VRMExpressionManager().copy(this);
  }
  /**
   * Return a registered expression.
   * If it cannot find an expression, it will return `null` instead.
   *
   * @param name Name or preset name of the expression
   */
  getExpression(name) {
    var _a;
    return (_a = this._expressionMap[name]) != null ? _a : null;
  }
  /**
   * Register an expression.
   *
   * @param expression {@link VRMExpression} that describes the expression
   */
  registerExpression(expression) {
    this._expressions.push(expression);
    this._expressionMap[expression.expressionName] = expression;
  }
  /**
   * Unregister an expression.
   *
   * @param expression The expression you want to unregister
   */
  unregisterExpression(expression) {
    const index = this._expressions.indexOf(expression);
    if (index === -1) {
      console.warn("VRMExpressionManager: The specified expressions is not registered");
    }
    this._expressions.splice(index, 1);
    delete this._expressionMap[expression.expressionName];
  }
  /**
   * Get the current weight of the specified expression.
   * If it doesn't have an expression of given name, it will return `null` instead.
   *
   * @param name Name of the expression
   */
  getValue(name) {
    var _a;
    const expression = this.getExpression(name);
    return (_a = expression == null ? void 0 : expression.weight) != null ? _a : null;
  }
  /**
   * Set a weight to the specified expression.
   *
   * @param name Name of the expression
   * @param weight Weight
   */
  setValue(name, weight) {
    const expression = this.getExpression(name);
    if (expression) {
      expression.weight = saturate(weight);
    }
  }
  /**
   * Reset weights of all expressions to `0.0`.
   */
  resetValues() {
    this._expressions.forEach((expression) => {
      expression.weight = 0;
    });
  }
  /**
   * Get a track name of specified expression.
   * This track name is needed to manipulate its expression via keyframe animations.
   *
   * @example Manipulate an expression using keyframe animation
   * ```js
   * const trackName = vrm.expressionManager.getExpressionTrackName( 'blink' );
   * const track = new THREE.NumberKeyframeTrack(
   *   name,
   *   [ 0.0, 0.5, 1.0 ], // times
   *   [ 0.0, 1.0, 0.0 ] // values
   * );
   *
   * const clip = new THREE.AnimationClip(
   *   'blink', // name
   *   1.0, // duration
   *   [ track ] // tracks
   * );
   *
   * const mixer = new THREE.AnimationMixer( vrm.scene );
   * const action = mixer.clipAction( clip );
   * action.play();
   * ```
   *
   * @param name Name of the expression
   */
  getExpressionTrackName(name) {
    const expression = this.getExpression(name);
    return expression ? `${expression.name}.weight` : null;
  }
  /**
   * Update every expressions.
   */
  update() {
    const weightMultipliers = this._calculateWeightMultipliers();
    this._expressions.forEach((expression) => {
      expression.clearAppliedWeight();
    });
    this._expressions.forEach((expression) => {
      let multiplier = 1;
      const name = expression.expressionName;
      if (this.blinkExpressionNames.indexOf(name) !== -1) {
        multiplier *= weightMultipliers.blink;
      }
      if (this.lookAtExpressionNames.indexOf(name) !== -1) {
        multiplier *= weightMultipliers.lookAt;
      }
      if (this.mouthExpressionNames.indexOf(name) !== -1) {
        multiplier *= weightMultipliers.mouth;
      }
      expression.applyWeight({ multiplier });
    });
  }
  /**
   * Calculate sum of override amounts to see how much we should multiply weights of certain expressions.
   */
  _calculateWeightMultipliers() {
    let blink = 1;
    let lookAt = 1;
    let mouth = 1;
    this._expressions.forEach((expression) => {
      blink -= expression.overrideBlinkAmount;
      lookAt -= expression.overrideLookAtAmount;
      mouth -= expression.overrideMouthAmount;
    });
    blink = Math.max(0, blink);
    lookAt = Math.max(0, lookAt);
    mouth = Math.max(0, mouth);
    return { blink, lookAt, mouth };
  }
};
var VRMExpressionMaterialColorType = {
  Color: "color",
  EmissionColor: "emissionColor",
  ShadeColor: "shadeColor",
  MatcapColor: "matcapColor",
  RimColor: "rimColor",
  OutlineColor: "outlineColor"
};
var v0ExpressionMaterialColorMap = {
  _Color: VRMExpressionMaterialColorType.Color,
  _EmissionColor: VRMExpressionMaterialColorType.EmissionColor,
  _ShadeColor: VRMExpressionMaterialColorType.ShadeColor,
  _RimColor: VRMExpressionMaterialColorType.RimColor,
  _OutlineColor: VRMExpressionMaterialColorType.OutlineColor
};
var _color = new THREE2.Color();
var _VRMExpressionMaterialColorBind = class _VRMExpressionMaterialColorBind2 {
  constructor({
    material,
    type,
    targetValue,
    targetAlpha
  }) {
    this.material = material;
    this.type = type;
    this.targetValue = targetValue;
    this.targetAlpha = targetAlpha != null ? targetAlpha : 1;
    const color = this._initColorBindState();
    const alpha = this._initAlphaBindState();
    this._state = { color, alpha };
  }
  applyWeight(weight) {
    const { color, alpha } = this._state;
    if (color != null) {
      const { propertyName, deltaValue } = color;
      const target = this.material[propertyName];
      if (target != void 0) {
        target.add(_color.copy(deltaValue).multiplyScalar(weight));
      }
    }
    if (alpha != null) {
      const { propertyName, deltaValue } = alpha;
      const target = this.material[propertyName];
      if (target != void 0) {
        this.material[propertyName] += deltaValue * weight;
      }
    }
  }
  clearAppliedWeight() {
    const { color, alpha } = this._state;
    if (color != null) {
      const { propertyName, initialValue } = color;
      const target = this.material[propertyName];
      if (target != void 0) {
        target.copy(initialValue);
      }
    }
    if (alpha != null) {
      const { propertyName, initialValue } = alpha;
      const target = this.material[propertyName];
      if (target != void 0) {
        this.material[propertyName] = initialValue;
      }
    }
  }
  _initColorBindState() {
    var _a, _b, _c;
    const { material, type, targetValue } = this;
    const propertyNameMap = this._getPropertyNameMap();
    const propertyName = (_b = (_a = propertyNameMap == null ? void 0 : propertyNameMap[type]) == null ? void 0 : _a[0]) != null ? _b : null;
    if (propertyName == null) {
      console.warn(
        `Tried to add a material color bind to the material ${(_c = material.name) != null ? _c : "(no name)"}, the type ${type} but the material or the type is not supported.`
      );
      return null;
    }
    const target = material[propertyName];
    const initialValue = target.clone();
    const deltaValue = new THREE2.Color(
      targetValue.r - initialValue.r,
      targetValue.g - initialValue.g,
      targetValue.b - initialValue.b
    );
    return { propertyName, initialValue, deltaValue };
  }
  _initAlphaBindState() {
    var _a, _b, _c;
    const { material, type, targetAlpha } = this;
    const propertyNameMap = this._getPropertyNameMap();
    const propertyName = (_b = (_a = propertyNameMap == null ? void 0 : propertyNameMap[type]) == null ? void 0 : _a[1]) != null ? _b : null;
    if (propertyName == null && targetAlpha !== 1) {
      console.warn(
        `Tried to add a material alpha bind to the material ${(_c = material.name) != null ? _c : "(no name)"}, the type ${type} but the material or the type does not support alpha.`
      );
      return null;
    }
    if (propertyName == null) {
      return null;
    }
    const initialValue = material[propertyName];
    const deltaValue = targetAlpha - initialValue;
    return { propertyName, initialValue, deltaValue };
  }
  _getPropertyNameMap() {
    var _a, _b;
    return (_b = (_a = Object.entries(_VRMExpressionMaterialColorBind2._propertyNameMapMap).find(([distinguisher]) => {
      return this.material[distinguisher] === true;
    })) == null ? void 0 : _a[1]) != null ? _b : null;
  }
};
_VRMExpressionMaterialColorBind._propertyNameMapMap = {
  isMeshStandardMaterial: {
    color: ["color", "opacity"],
    emissionColor: ["emissive", null]
  },
  isMeshBasicMaterial: {
    color: ["color", "opacity"]
  },
  isMToonMaterial: {
    color: ["color", "opacity"],
    emissionColor: ["emissive", null],
    outlineColor: ["outlineColorFactor", null],
    matcapColor: ["matcapFactor", null],
    rimColor: ["parametricRimColorFactor", null],
    shadeColor: ["shadeColorFactor", null]
  }
};
var VRMExpressionMaterialColorBind = _VRMExpressionMaterialColorBind;
var VRMExpressionMorphTargetBind = class {
  constructor({
    primitives,
    index,
    weight
  }) {
    this.primitives = primitives;
    this.index = index;
    this.weight = weight;
  }
  applyWeight(weight) {
    this.primitives.forEach((mesh) => {
      var _a;
      if (((_a = mesh.morphTargetInfluences) == null ? void 0 : _a[this.index]) != null) {
        mesh.morphTargetInfluences[this.index] += this.weight * weight;
      }
    });
  }
  clearAppliedWeight() {
    this.primitives.forEach((mesh) => {
      var _a;
      if (((_a = mesh.morphTargetInfluences) == null ? void 0 : _a[this.index]) != null) {
        mesh.morphTargetInfluences[this.index] = 0;
      }
    });
  }
};
var _v2 = new THREE3.Vector2();
var _VRMExpressionTextureTransformBind = class _VRMExpressionTextureTransformBind2 {
  constructor({
    material,
    scale,
    offset
  }) {
    var _a, _b;
    this.material = material;
    this.scale = scale;
    this.offset = offset;
    const propertyNames = (_a = Object.entries(_VRMExpressionTextureTransformBind2._propertyNamesMap).find(
      ([distinguisher]) => {
        return material[distinguisher] === true;
      }
    )) == null ? void 0 : _a[1];
    if (propertyNames == null) {
      console.warn(
        `Tried to add a texture transform bind to the material ${(_b = material.name) != null ? _b : "(no name)"} but the material is not supported.`
      );
      this._properties = [];
    } else {
      this._properties = [];
      propertyNames.forEach((propertyName) => {
        var _a2;
        const texture = (_a2 = material[propertyName]) == null ? void 0 : _a2.clone();
        if (!texture) {
          return null;
        }
        material[propertyName] = texture;
        const initialOffset = texture.offset.clone();
        const initialScale = texture.repeat.clone();
        const deltaOffset = offset.clone().sub(initialOffset);
        const deltaScale = scale.clone().sub(initialScale);
        this._properties.push({
          name: propertyName,
          initialOffset,
          deltaOffset,
          initialScale,
          deltaScale
        });
      });
    }
  }
  applyWeight(weight) {
    this._properties.forEach((property) => {
      const target = this.material[property.name];
      if (target === void 0) {
        return;
      }
      target.offset.add(_v2.copy(property.deltaOffset).multiplyScalar(weight));
      target.repeat.add(_v2.copy(property.deltaScale).multiplyScalar(weight));
    });
  }
  clearAppliedWeight() {
    this._properties.forEach((property) => {
      const target = this.material[property.name];
      if (target === void 0) {
        return;
      }
      target.offset.copy(property.initialOffset);
      target.repeat.copy(property.initialScale);
    });
  }
};
_VRMExpressionTextureTransformBind._propertyNamesMap = {
  isMeshStandardMaterial: [
    "map",
    "emissiveMap",
    "bumpMap",
    "normalMap",
    "displacementMap",
    "roughnessMap",
    "metalnessMap",
    "alphaMap"
  ],
  isMeshBasicMaterial: ["map", "specularMap", "alphaMap"],
  isMToonMaterial: [
    "map",
    "normalMap",
    "emissiveMap",
    "shadeMultiplyTexture",
    "rimMultiplyTexture",
    "outlineWidthMultiplyTexture",
    "uvAnimationMaskTexture"
  ]
};
var VRMExpressionTextureTransformBind = _VRMExpressionTextureTransformBind;
var POSSIBLE_SPEC_VERSIONS = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
var _VRMExpressionLoaderPlugin = class _VRMExpressionLoaderPlugin2 {
  get name() {
    return "VRMExpressionLoaderPlugin";
  }
  constructor(parser) {
    this.parser = parser;
  }
  afterRoot(gltf) {
    return __async2(this, null, function* () {
      gltf.userData.vrmExpressionManager = yield this._import(gltf);
    });
  }
  /**
   * Import a {@link VRMExpressionManager} from a VRM.
   *
   * @param gltf A parsed result of GLTF taken from GLTFLoader
   */
  _import(gltf) {
    return __async2(this, null, function* () {
      const v1Result = yield this._v1Import(gltf);
      if (v1Result) {
        return v1Result;
      }
      const v0Result = yield this._v0Import(gltf);
      if (v0Result) {
        return v0Result;
      }
      return null;
    });
  }
  _v1Import(gltf) {
    return __async2(this, null, function* () {
      var _a, _b;
      const json = this.parser.json;
      const isVRMUsed = ((_a = json.extensionsUsed) == null ? void 0 : _a.indexOf("VRMC_vrm")) !== -1;
      if (!isVRMUsed) {
        return null;
      }
      const extension = (_b = json.extensions) == null ? void 0 : _b["VRMC_vrm"];
      if (!extension) {
        return null;
      }
      const specVersion = extension.specVersion;
      if (!POSSIBLE_SPEC_VERSIONS.has(specVersion)) {
        console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${specVersion}"`);
        return null;
      }
      const schemaExpressions = extension.expressions;
      if (!schemaExpressions) {
        return null;
      }
      const presetNameSet = new Set(Object.values(VRMExpressionPresetName));
      const nameSchemaExpressionMap = /* @__PURE__ */ new Map();
      if (schemaExpressions.preset != null) {
        Object.entries(schemaExpressions.preset).forEach(([name, schemaExpression]) => {
          if (schemaExpression == null) {
            return;
          }
          if (!presetNameSet.has(name)) {
            console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${name}" detected. Ignoring the expression`);
            return;
          }
          nameSchemaExpressionMap.set(name, schemaExpression);
        });
      }
      if (schemaExpressions.custom != null) {
        Object.entries(schemaExpressions.custom).forEach(([name, schemaExpression]) => {
          if (presetNameSet.has(name)) {
            console.warn(
              `VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${name}". Ignoring the expression`
            );
            return;
          }
          nameSchemaExpressionMap.set(name, schemaExpression);
        });
      }
      const manager = new VRMExpressionManager();
      yield Promise.all(
        Array.from(nameSchemaExpressionMap.entries()).map((_0) => __async2(this, [_0], function* ([name, schemaExpression]) {
          var _a2, _b2, _c, _d, _e, _f, _g;
          const expression = new VRMExpression(name);
          gltf.scene.add(expression);
          expression.isBinary = (_a2 = schemaExpression.isBinary) != null ? _a2 : false;
          expression.overrideBlink = (_b2 = schemaExpression.overrideBlink) != null ? _b2 : "none";
          expression.overrideLookAt = (_c = schemaExpression.overrideLookAt) != null ? _c : "none";
          expression.overrideMouth = (_d = schemaExpression.overrideMouth) != null ? _d : "none";
          (_e = schemaExpression.morphTargetBinds) == null ? void 0 : _e.forEach((bind) => __async2(this, null, function* () {
            var _a3;
            if (bind.node === void 0 || bind.index === void 0) {
              return;
            }
            const primitives = yield gltfExtractPrimitivesFromNode(gltf, bind.node);
            const morphTargetIndex = bind.index;
            if (!primitives.every(
              (primitive) => Array.isArray(primitive.morphTargetInfluences) && morphTargetIndex < primitive.morphTargetInfluences.length
            )) {
              console.warn(
                `VRMExpressionLoaderPlugin: ${schemaExpression.name} attempts to index morph #${morphTargetIndex} but not found.`
              );
              return;
            }
            expression.addBind(
              new VRMExpressionMorphTargetBind({
                primitives,
                index: morphTargetIndex,
                weight: (_a3 = bind.weight) != null ? _a3 : 1
              })
            );
          }));
          if (schemaExpression.materialColorBinds || schemaExpression.textureTransformBinds) {
            const gltfMaterials = [];
            gltf.scene.traverse((object) => {
              const material = object.material;
              if (material) {
                if (Array.isArray(material)) {
                  gltfMaterials.push(...material);
                } else {
                  gltfMaterials.push(material);
                }
              }
            });
            (_f = schemaExpression.materialColorBinds) == null ? void 0 : _f.forEach((bind) => __async2(this, null, function* () {
              const materials = gltfMaterials.filter((material) => {
                var _a3;
                const materialIndex = (_a3 = this.parser.associations.get(material)) == null ? void 0 : _a3.materials;
                return bind.material === materialIndex;
              });
              materials.forEach((material) => {
                expression.addBind(
                  new VRMExpressionMaterialColorBind({
                    material,
                    type: bind.type,
                    targetValue: new THREE4.Color().fromArray(bind.targetValue),
                    targetAlpha: bind.targetValue[3]
                  })
                );
              });
            }));
            (_g = schemaExpression.textureTransformBinds) == null ? void 0 : _g.forEach((bind) => __async2(this, null, function* () {
              const materials = gltfMaterials.filter((material) => {
                var _a3;
                const materialIndex = (_a3 = this.parser.associations.get(material)) == null ? void 0 : _a3.materials;
                return bind.material === materialIndex;
              });
              materials.forEach((material) => {
                var _a3, _b3;
                expression.addBind(
                  new VRMExpressionTextureTransformBind({
                    material,
                    offset: new THREE4.Vector2().fromArray((_a3 = bind.offset) != null ? _a3 : [0, 0]),
                    scale: new THREE4.Vector2().fromArray((_b3 = bind.scale) != null ? _b3 : [1, 1])
                  })
                );
              });
            }));
          }
          manager.registerExpression(expression);
        }))
      );
      return manager;
    });
  }
  _v0Import(gltf) {
    return __async2(this, null, function* () {
      var _a;
      const json = this.parser.json;
      const vrmExt = (_a = json.extensions) == null ? void 0 : _a.VRM;
      if (!vrmExt) {
        return null;
      }
      const schemaBlendShape = vrmExt.blendShapeMaster;
      if (!schemaBlendShape) {
        return null;
      }
      const manager = new VRMExpressionManager();
      const schemaBlendShapeGroups = schemaBlendShape.blendShapeGroups;
      if (!schemaBlendShapeGroups) {
        return manager;
      }
      const blendShapeNameSet = /* @__PURE__ */ new Set();
      yield Promise.all(
        schemaBlendShapeGroups.map((schemaGroup) => __async2(this, null, function* () {
          var _a2;
          const v0PresetName = schemaGroup.presetName;
          const v1PresetName = v0PresetName != null && _VRMExpressionLoaderPlugin2.v0v1PresetNameMap[v0PresetName] || null;
          const name = v1PresetName != null ? v1PresetName : schemaGroup.name;
          if (name == null) {
            console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");
            return;
          }
          if (blendShapeNameSet.has(name)) {
            console.warn(
              `VRMExpressionLoaderPlugin: An expression preset ${v0PresetName} has duplicated entries. Ignoring the expression`
            );
            return;
          }
          blendShapeNameSet.add(name);
          const expression = new VRMExpression(name);
          gltf.scene.add(expression);
          expression.isBinary = (_a2 = schemaGroup.isBinary) != null ? _a2 : false;
          if (schemaGroup.binds) {
            schemaGroup.binds.forEach((bind) => __async2(this, null, function* () {
              var _a3;
              if (bind.mesh === void 0 || bind.index === void 0) {
                return;
              }
              const nodesUsingMesh = [];
              (_a3 = json.nodes) == null ? void 0 : _a3.forEach((node, i) => {
                if (node.mesh === bind.mesh) {
                  nodesUsingMesh.push(i);
                }
              });
              const morphTargetIndex = bind.index;
              yield Promise.all(
                nodesUsingMesh.map((nodeIndex) => __async2(this, null, function* () {
                  var _a4;
                  const primitives = yield gltfExtractPrimitivesFromNode(gltf, nodeIndex);
                  if (!primitives.every(
                    (primitive) => Array.isArray(primitive.morphTargetInfluences) && morphTargetIndex < primitive.morphTargetInfluences.length
                  )) {
                    console.warn(
                      `VRMExpressionLoaderPlugin: ${schemaGroup.name} attempts to index ${morphTargetIndex}th morph but not found.`
                    );
                    return;
                  }
                  expression.addBind(
                    new VRMExpressionMorphTargetBind({
                      primitives,
                      index: morphTargetIndex,
                      weight: 0.01 * ((_a4 = bind.weight) != null ? _a4 : 100)
                      // narrowing the range from [ 0.0 - 100.0 ] to [ 0.0 - 1.0 ]
                    })
                  );
                }))
              );
            }));
          }
          const materialValues = schemaGroup.materialValues;
          if (materialValues && materialValues.length !== 0) {
            materialValues.forEach((materialValue) => {
              if (materialValue.materialName === void 0 || materialValue.propertyName === void 0 || materialValue.targetValue === void 0) {
                return;
              }
              const materials = [];
              gltf.scene.traverse((object) => {
                if (object.material) {
                  const material = object.material;
                  if (Array.isArray(material)) {
                    materials.push(
                      ...material.filter(
                        (mtl) => (mtl.name === materialValue.materialName || mtl.name === materialValue.materialName + " (Outline)") && materials.indexOf(mtl) === -1
                      )
                    );
                  } else if (material.name === materialValue.materialName && materials.indexOf(material) === -1) {
                    materials.push(material);
                  }
                }
              });
              const materialPropertyName = materialValue.propertyName;
              materials.forEach((material) => {
                if (materialPropertyName === "_MainTex_ST") {
                  const scale = new THREE4.Vector2(materialValue.targetValue[0], materialValue.targetValue[1]);
                  const offset = new THREE4.Vector2(materialValue.targetValue[2], materialValue.targetValue[3]);
                  offset.y = 1 - offset.y - scale.y;
                  expression.addBind(
                    new VRMExpressionTextureTransformBind({
                      material,
                      scale,
                      offset
                    })
                  );
                  return;
                }
                const materialColorType = v0ExpressionMaterialColorMap[materialPropertyName];
                if (materialColorType) {
                  expression.addBind(
                    new VRMExpressionMaterialColorBind({
                      material,
                      type: materialColorType,
                      targetValue: new THREE4.Color().fromArray(materialValue.targetValue),
                      targetAlpha: materialValue.targetValue[3]
                    })
                  );
                  return;
                }
                console.warn(materialPropertyName + " is not supported");
              });
            });
          }
          manager.registerExpression(expression);
        }))
      );
      return manager;
    });
  }
};
_VRMExpressionLoaderPlugin.v0v1PresetNameMap = {
  a: "aa",
  e: "ee",
  i: "ih",
  o: "oh",
  u: "ou",
  blink: "blink",
  joy: "happy",
  angry: "angry",
  sorrow: "sad",
  fun: "relaxed",
  lookup: "lookUp",
  lookdown: "lookDown",
  lookleft: "lookLeft",
  lookright: "lookRight",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  blink_l: "blinkLeft",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  blink_r: "blinkRight",
  neutral: "neutral"
};
var _VRMFirstPerson = class _VRMFirstPerson2 {
  /**
   * Create a new VRMFirstPerson object.
   *
   * @param humanoid A {@link VRMHumanoid}
   * @param meshAnnotations A renderer settings. See the description of [[RendererFirstPersonFlags]] for more info
   */
  constructor(humanoid, meshAnnotations) {
    this._firstPersonOnlyLayer = _VRMFirstPerson2.DEFAULT_FIRSTPERSON_ONLY_LAYER;
    this._thirdPersonOnlyLayer = _VRMFirstPerson2.DEFAULT_THIRDPERSON_ONLY_LAYER;
    this._initializedLayers = false;
    this.humanoid = humanoid;
    this.meshAnnotations = meshAnnotations;
  }
  /**
   * Copy the given {@link VRMFirstPerson} into this one.
   * {@link humanoid} must be same as the source one.
   * @param source The {@link VRMFirstPerson} you want to copy
   * @returns this
   */
  copy(source) {
    if (this.humanoid !== source.humanoid) {
      throw new Error("VRMFirstPerson: humanoid must be same in order to copy");
    }
    this.meshAnnotations = source.meshAnnotations.map((annotation) => ({
      meshes: annotation.meshes.concat(),
      type: annotation.type
    }));
    return this;
  }
  /**
   * Returns a clone of this {@link VRMFirstPerson}.
   * @returns Copied {@link VRMFirstPerson}
   */
  clone() {
    return new _VRMFirstPerson2(this.humanoid, this.meshAnnotations).copy(this);
  }
  /**
   * A camera layer represents `FirstPersonOnly` layer.
   * Note that **you must call {@link setup} first before you use the layer feature** or it does not work properly.
   *
   * The value is {@link DEFAULT_FIRSTPERSON_ONLY_LAYER} by default but you can change the layer by specifying via {@link setup} if you prefer.
   *
   * @see https://vrm.dev/en/univrm/api/univrm_use_firstperson/
   * @see https://threejs.org/docs/#api/en/core/Layers
   */
  get firstPersonOnlyLayer() {
    return this._firstPersonOnlyLayer;
  }
  /**
   * A camera layer represents `ThirdPersonOnly` layer.
   * Note that **you must call {@link setup} first before you use the layer feature** or it does not work properly.
   *
   * The value is {@link DEFAULT_THIRDPERSON_ONLY_LAYER} by default but you can change the layer by specifying via {@link setup} if you prefer.
   *
   * @see https://vrm.dev/en/univrm/api/univrm_use_firstperson/
   * @see https://threejs.org/docs/#api/en/core/Layers
   */
  get thirdPersonOnlyLayer() {
    return this._thirdPersonOnlyLayer;
  }
  /**
   * In this method, it assigns layers for every meshes based on mesh annotations.
   * You must call this method first before you use the layer feature.
   *
   * This is an equivalent of [VRMFirstPerson.Setup](https://github.com/vrm-c/UniVRM/blob/73a5bd8fcddaa2a7a8735099a97e63c9db3e5ea0/Assets/VRM/Runtime/FirstPerson/VRMFirstPerson.cs#L295-L299) of the UniVRM.
   *
   * The `cameraLayer` parameter specifies which layer will be assigned for `FirstPersonOnly` / `ThirdPersonOnly`.
   * In UniVRM, we specified those by naming each desired layer as `FIRSTPERSON_ONLY_LAYER` / `THIRDPERSON_ONLY_LAYER`
   * but we are going to specify these layers at here since we are unable to name layers in Three.js.
   *
   * @param cameraLayer Specify which layer will be for `FirstPersonOnly` / `ThirdPersonOnly`.
   */
  setup({
    firstPersonOnlyLayer = _VRMFirstPerson2.DEFAULT_FIRSTPERSON_ONLY_LAYER,
    thirdPersonOnlyLayer = _VRMFirstPerson2.DEFAULT_THIRDPERSON_ONLY_LAYER
  } = {}) {
    if (this._initializedLayers) {
      return;
    }
    this._firstPersonOnlyLayer = firstPersonOnlyLayer;
    this._thirdPersonOnlyLayer = thirdPersonOnlyLayer;
    this.meshAnnotations.forEach((item) => {
      item.meshes.forEach((mesh) => {
        if (item.type === "firstPersonOnly") {
          mesh.layers.set(this._firstPersonOnlyLayer);
          mesh.traverse((child) => child.layers.set(this._firstPersonOnlyLayer));
        } else if (item.type === "thirdPersonOnly") {
          mesh.layers.set(this._thirdPersonOnlyLayer);
          mesh.traverse((child) => child.layers.set(this._thirdPersonOnlyLayer));
        } else if (item.type === "auto") {
          this._createHeadlessModel(mesh);
        }
      });
    });
    this._initializedLayers = true;
  }
  _excludeTriangles(triangles, bws, skinIndex, exclude) {
    let count = 0;
    if (bws != null && bws.length > 0) {
      for (let i = 0; i < triangles.length; i += 3) {
        const a = triangles[i];
        const b = triangles[i + 1];
        const c = triangles[i + 2];
        const bw0 = bws[a];
        const skin0 = skinIndex[a];
        if (bw0[0] > 0 && exclude.includes(skin0[0])) continue;
        if (bw0[1] > 0 && exclude.includes(skin0[1])) continue;
        if (bw0[2] > 0 && exclude.includes(skin0[2])) continue;
        if (bw0[3] > 0 && exclude.includes(skin0[3])) continue;
        const bw1 = bws[b];
        const skin1 = skinIndex[b];
        if (bw1[0] > 0 && exclude.includes(skin1[0])) continue;
        if (bw1[1] > 0 && exclude.includes(skin1[1])) continue;
        if (bw1[2] > 0 && exclude.includes(skin1[2])) continue;
        if (bw1[3] > 0 && exclude.includes(skin1[3])) continue;
        const bw2 = bws[c];
        const skin2 = skinIndex[c];
        if (bw2[0] > 0 && exclude.includes(skin2[0])) continue;
        if (bw2[1] > 0 && exclude.includes(skin2[1])) continue;
        if (bw2[2] > 0 && exclude.includes(skin2[2])) continue;
        if (bw2[3] > 0 && exclude.includes(skin2[3])) continue;
        triangles[count++] = a;
        triangles[count++] = b;
        triangles[count++] = c;
      }
    }
    return count;
  }
  _createErasedMesh(src, erasingBonesIndex) {
    const dst = new THREE5.SkinnedMesh(src.geometry.clone(), src.material);
    dst.name = `${src.name}(erase)`;
    dst.frustumCulled = src.frustumCulled;
    dst.layers.set(this._firstPersonOnlyLayer);
    const geometry = dst.geometry;
    const skinIndexAttr = geometry.getAttribute("skinIndex");
    const skinIndexAttrArray = skinIndexAttr instanceof THREE5.GLBufferAttribute ? [] : skinIndexAttr.array;
    const skinIndex = [];
    for (let i = 0; i < skinIndexAttrArray.length; i += 4) {
      skinIndex.push([
        skinIndexAttrArray[i],
        skinIndexAttrArray[i + 1],
        skinIndexAttrArray[i + 2],
        skinIndexAttrArray[i + 3]
      ]);
    }
    const skinWeightAttr = geometry.getAttribute("skinWeight");
    const skinWeightAttrArray = skinWeightAttr instanceof THREE5.GLBufferAttribute ? [] : skinWeightAttr.array;
    const skinWeight = [];
    for (let i = 0; i < skinWeightAttrArray.length; i += 4) {
      skinWeight.push([
        skinWeightAttrArray[i],
        skinWeightAttrArray[i + 1],
        skinWeightAttrArray[i + 2],
        skinWeightAttrArray[i + 3]
      ]);
    }
    const index = geometry.getIndex();
    if (!index) {
      throw new Error("The geometry doesn't have an index buffer");
    }
    const oldTriangles = Array.from(index.array);
    const count = this._excludeTriangles(oldTriangles, skinWeight, skinIndex, erasingBonesIndex);
    const newTriangle = [];
    for (let i = 0; i < count; i++) {
      newTriangle[i] = oldTriangles[i];
    }
    geometry.setIndex(newTriangle);
    if (src.onBeforeRender) {
      dst.onBeforeRender = src.onBeforeRender;
    }
    dst.bind(new THREE5.Skeleton(src.skeleton.bones, src.skeleton.boneInverses), new THREE5.Matrix4());
    return dst;
  }
  _createHeadlessModelForSkinnedMesh(parent, mesh) {
    const eraseBoneIndexes = [];
    mesh.skeleton.bones.forEach((bone, index) => {
      if (this._isEraseTarget(bone)) eraseBoneIndexes.push(index);
    });
    if (!eraseBoneIndexes.length) {
      mesh.layers.enable(this._thirdPersonOnlyLayer);
      mesh.layers.enable(this._firstPersonOnlyLayer);
      return;
    }
    mesh.layers.set(this._thirdPersonOnlyLayer);
    const newMesh = this._createErasedMesh(mesh, eraseBoneIndexes);
    parent.add(newMesh);
  }
  _createHeadlessModel(node) {
    if (node.type === "Group") {
      node.layers.set(this._thirdPersonOnlyLayer);
      if (this._isEraseTarget(node)) {
        node.traverse((child) => child.layers.set(this._thirdPersonOnlyLayer));
      } else {
        const parent = new THREE5.Group();
        parent.name = `_headless_${node.name}`;
        parent.layers.set(this._firstPersonOnlyLayer);
        node.parent.add(parent);
        node.children.filter((child) => child.type === "SkinnedMesh").forEach((child) => {
          const skinnedMesh = child;
          this._createHeadlessModelForSkinnedMesh(parent, skinnedMesh);
        });
      }
    } else if (node.type === "SkinnedMesh") {
      const skinnedMesh = node;
      this._createHeadlessModelForSkinnedMesh(node.parent, skinnedMesh);
    } else {
      if (this._isEraseTarget(node)) {
        node.layers.set(this._thirdPersonOnlyLayer);
        node.traverse((child) => child.layers.set(this._thirdPersonOnlyLayer));
      }
    }
  }
  _isEraseTarget(bone) {
    if (bone === this.humanoid.getRawBoneNode("head")) {
      return true;
    } else if (!bone.parent) {
      return false;
    } else {
      return this._isEraseTarget(bone.parent);
    }
  }
};
_VRMFirstPerson.DEFAULT_FIRSTPERSON_ONLY_LAYER = 9;
_VRMFirstPerson.DEFAULT_THIRDPERSON_ONLY_LAYER = 10;
var _v3A = new THREE6.Vector3();
var _v3B = new THREE6.Vector3();
var _quatA = new THREE6.Quaternion();
var VRMHumanBoneParentMap = {
  hips: null,
  spine: "hips",
  chest: "spine",
  upperChest: "chest",
  neck: "upperChest",
  head: "neck",
  leftEye: "head",
  rightEye: "head",
  jaw: "head",
  leftUpperLeg: "hips",
  leftLowerLeg: "leftUpperLeg",
  leftFoot: "leftLowerLeg",
  leftToes: "leftFoot",
  rightUpperLeg: "hips",
  rightLowerLeg: "rightUpperLeg",
  rightFoot: "rightLowerLeg",
  rightToes: "rightFoot",
  leftShoulder: "upperChest",
  leftUpperArm: "leftShoulder",
  leftLowerArm: "leftUpperArm",
  leftHand: "leftLowerArm",
  rightShoulder: "upperChest",
  rightUpperArm: "rightShoulder",
  rightLowerArm: "rightUpperArm",
  rightHand: "rightLowerArm",
  leftThumbMetacarpal: "leftHand",
  leftThumbProximal: "leftThumbMetacarpal",
  leftThumbDistal: "leftThumbProximal",
  leftIndexProximal: "leftHand",
  leftIndexIntermediate: "leftIndexProximal",
  leftIndexDistal: "leftIndexIntermediate",
  leftMiddleProximal: "leftHand",
  leftMiddleIntermediate: "leftMiddleProximal",
  leftMiddleDistal: "leftMiddleIntermediate",
  leftRingProximal: "leftHand",
  leftRingIntermediate: "leftRingProximal",
  leftRingDistal: "leftRingIntermediate",
  leftLittleProximal: "leftHand",
  leftLittleIntermediate: "leftLittleProximal",
  leftLittleDistal: "leftLittleIntermediate",
  rightThumbMetacarpal: "rightHand",
  rightThumbProximal: "rightThumbMetacarpal",
  rightThumbDistal: "rightThumbProximal",
  rightIndexProximal: "rightHand",
  rightIndexIntermediate: "rightIndexProximal",
  rightIndexDistal: "rightIndexIntermediate",
  rightMiddleProximal: "rightHand",
  rightMiddleIntermediate: "rightMiddleProximal",
  rightMiddleDistal: "rightMiddleIntermediate",
  rightRingProximal: "rightHand",
  rightRingIntermediate: "rightRingProximal",
  rightRingDistal: "rightRingIntermediate",
  rightLittleProximal: "rightHand",
  rightLittleIntermediate: "rightLittleProximal",
  rightLittleDistal: "rightLittleIntermediate"
};
function quatInvertCompat(target) {
  if (target.invert) {
    target.invert();
  } else {
    target.inverse();
  }
  return target;
}
var _v3A2 = new THREE7.Vector3();
var _quatA2 = new THREE7.Quaternion();
var _v3A3 = new THREE8.Vector3();
var _quatA3 = new THREE8.Quaternion();
var _boneWorldPos = new THREE8.Vector3();
var _quatA4 = new THREE11.Quaternion();
var _quatB = new THREE11.Quaternion();
var _v3A4 = new THREE11.Vector3();
var _v3B2 = new THREE11.Vector3();
var SQRT_2_OVER_2 = Math.sqrt(2) / 2;
var QUAT_XY_CW90 = new THREE11.Quaternion(0, 0, -SQRT_2_OVER_2, SQRT_2_OVER_2);
var VEC3_POSITIVE_Y = new THREE11.Vector3(0, 1, 0);
var _position = new THREE12.Vector3();
var _scale = new THREE12.Vector3();
function getWorldQuaternionLite(object, out) {
  object.matrixWorld.decompose(_position, out, _scale);
  return out;
}
function calcAzimuthAltitude(vector) {
  return [Math.atan2(-vector.z, vector.x), Math.atan2(vector.y, Math.sqrt(vector.x * vector.x + vector.z * vector.z))];
}
function sanitizeAngle(angle) {
  const roundTurn = Math.round(angle / 2 / Math.PI);
  return angle - 2 * Math.PI * roundTurn;
}
var VEC3_POSITIVE_Z = new THREE13.Vector3(0, 0, 1);
var _v3A5 = new THREE13.Vector3();
var _v3B3 = new THREE13.Vector3();
var _v3C = new THREE13.Vector3();
var _quatA5 = new THREE13.Quaternion();
var _quatB2 = new THREE13.Quaternion();
var _quatC = new THREE13.Quaternion();
var _quatD = new THREE13.Quaternion();
var _eulerA = new THREE13.Euler();
var _VRMLookAt = class _VRMLookAt2 {
  /**
   * Create a new {@link VRMLookAt}.
   *
   * @param humanoid A {@link VRMHumanoid}
   * @param applier A {@link VRMLookAtApplier}
   */
  constructor(humanoid, applier) {
    this.offsetFromHeadBone = new THREE13.Vector3();
    this.autoUpdate = true;
    this.faceFront = new THREE13.Vector3(0, 0, 1);
    this.humanoid = humanoid;
    this.applier = applier;
    this._yaw = 0;
    this._pitch = 0;
    this._needsUpdate = true;
    this._restHeadWorldQuaternion = this.getLookAtWorldQuaternion(new THREE13.Quaternion());
  }
  /**
   * Its current angle around Y axis, in degree.
   */
  get yaw() {
    return this._yaw;
  }
  /**
   * Its current angle around Y axis, in degree.
   */
  set yaw(value) {
    this._yaw = value;
    this._needsUpdate = true;
  }
  /**
   * Its current angle around X axis, in degree.
   */
  get pitch() {
    return this._pitch;
  }
  /**
   * Its current angle around X axis, in degree.
   */
  set pitch(value) {
    this._pitch = value;
    this._needsUpdate = true;
  }
  /**
   * @deprecated Use {@link getEuler} instead.
   */
  get euler() {
    console.warn("VRMLookAt: euler is deprecated. use getEuler() instead.");
    return this.getEuler(new THREE13.Euler());
  }
  /**
   * Get its yaw-pitch angles as an `Euler`.
   * Does NOT consider {@link faceFront}; it returns `Euler(0, 0, 0; "YXZ")` by default regardless of the faceFront value.
   *
   * @param target The target euler
   */
  getEuler(target) {
    return target.set(THREE13.MathUtils.DEG2RAD * this._pitch, THREE13.MathUtils.DEG2RAD * this._yaw, 0, "YXZ");
  }
  /**
   * Copy the given {@link VRMLookAt} into this one.
   * {@link humanoid} must be same as the source one.
   * {@link applier} will reference the same instance as the source one.
   * @param source The {@link VRMLookAt} you want to copy
   * @returns this
   */
  copy(source) {
    if (this.humanoid !== source.humanoid) {
      throw new Error("VRMLookAt: humanoid must be same in order to copy");
    }
    this.offsetFromHeadBone.copy(source.offsetFromHeadBone);
    this.applier = source.applier;
    this.autoUpdate = source.autoUpdate;
    this.target = source.target;
    this.faceFront.copy(source.faceFront);
    return this;
  }
  /**
   * Returns a clone of this {@link VRMLookAt}.
   * Note that {@link humanoid} and {@link applier} will reference the same instance as this one.
   * @returns Copied {@link VRMLookAt}
   */
  clone() {
    return new _VRMLookAt2(this.humanoid, this.applier).copy(this);
  }
  /**
   * Reset the lookAt direction (yaw and pitch) to the initial direction.
   */
  reset() {
    this._yaw = 0;
    this._pitch = 0;
    this._needsUpdate = true;
  }
  /**
   * Get its lookAt position in world coordinate.
   *
   * @param target A target `THREE.Vector3`
   */
  getLookAtWorldPosition(target) {
    const head = this.humanoid.getRawBoneNode("head");
    return target.copy(this.offsetFromHeadBone).applyMatrix4(head.matrixWorld);
  }
  /**
   * Get its lookAt rotation in world coordinate.
   * Does NOT consider {@link faceFront}.
   *
   * @param target A target `THREE.Quaternion`
   */
  getLookAtWorldQuaternion(target) {
    const head = this.humanoid.getRawBoneNode("head");
    return getWorldQuaternionLite(head, target);
  }
  /**
   * Get a quaternion that rotates the +Z unit vector of the humanoid Head to the {@link faceFront} direction.
   *
   * @param target A target `THREE.Quaternion`
   */
  getFaceFrontQuaternion(target) {
    if (this.faceFront.distanceToSquared(VEC3_POSITIVE_Z) < 0.01) {
      return target.copy(this._restHeadWorldQuaternion).invert();
    }
    const [faceFrontAzimuth, faceFrontAltitude] = calcAzimuthAltitude(this.faceFront);
    _eulerA.set(0, 0.5 * Math.PI + faceFrontAzimuth, faceFrontAltitude, "YZX");
    return target.setFromEuler(_eulerA).premultiply(_quatD.copy(this._restHeadWorldQuaternion).invert());
  }
  /**
   * Get its LookAt direction in world coordinate.
   *
   * @param target A target `THREE.Vector3`
   */
  getLookAtWorldDirection(target) {
    this.getLookAtWorldQuaternion(_quatB2);
    this.getFaceFrontQuaternion(_quatC);
    return target.copy(VEC3_POSITIVE_Z).applyQuaternion(_quatB2).applyQuaternion(_quatC).applyEuler(this.getEuler(_eulerA));
  }
  /**
   * Set its lookAt target position.
   *
   * Note that its result will be instantly overwritten if {@link VRMLookAtHead.autoUpdate} is enabled.
   *
   * If you want to track an object continuously, you might want to use {@link target} instead.
   *
   * @param position A target position, in world space
   */
  lookAt(position) {
    const headRotDiffInv = _quatA5.copy(this._restHeadWorldQuaternion).multiply(quatInvertCompat(this.getLookAtWorldQuaternion(_quatB2)));
    const headPos = this.getLookAtWorldPosition(_v3B3);
    const lookAtDir = _v3C.copy(position).sub(headPos).applyQuaternion(headRotDiffInv).normalize();
    const [azimuthFrom, altitudeFrom] = calcAzimuthAltitude(this.faceFront);
    const [azimuthTo, altitudeTo] = calcAzimuthAltitude(lookAtDir);
    const yaw = sanitizeAngle(azimuthTo - azimuthFrom);
    const pitch = sanitizeAngle(altitudeFrom - altitudeTo);
    this._yaw = THREE13.MathUtils.RAD2DEG * yaw;
    this._pitch = THREE13.MathUtils.RAD2DEG * pitch;
    this._needsUpdate = true;
  }
  /**
   * Update the VRMLookAtHead.
   * If {@link autoUpdate} is enabled, this will make it look at the {@link target}.
   *
   * @param delta deltaTime, it isn't used though. You can use the parameter if you want to use this in your own extended {@link VRMLookAt}.
   */
  update(delta) {
    if (this.target != null && this.autoUpdate) {
      this.lookAt(this.target.getWorldPosition(_v3A5));
    }
    if (this._needsUpdate) {
      this._needsUpdate = false;
      this.applier.applyYawPitch(this._yaw, this._pitch);
    }
  }
};
_VRMLookAt.EULER_ORDER = "YXZ";
var VRMLookAt = _VRMLookAt;
var VEC3_POSITIVE_Z2 = new THREE14.Vector3(0, 0, 1);
var _quatA6 = new THREE14.Quaternion();
var _quatB3 = new THREE14.Quaternion();
var _eulerA2 = new THREE14.Euler(0, 0, 0, "YXZ");
var VRMLookAtBoneApplier = class {
  /**
   * Create a new {@link VRMLookAtBoneApplier}.
   *
   * @param humanoid A {@link VRMHumanoid}
   * @param rangeMapHorizontalInner A {@link VRMLookAtRangeMap} used for inner transverse direction
   * @param rangeMapHorizontalOuter A {@link VRMLookAtRangeMap} used for outer transverse direction
   * @param rangeMapVerticalDown A {@link VRMLookAtRangeMap} used for down direction
   * @param rangeMapVerticalUp A {@link VRMLookAtRangeMap} used for up direction
   */
  constructor(humanoid, rangeMapHorizontalInner, rangeMapHorizontalOuter, rangeMapVerticalDown, rangeMapVerticalUp) {
    this.humanoid = humanoid;
    this.rangeMapHorizontalInner = rangeMapHorizontalInner;
    this.rangeMapHorizontalOuter = rangeMapHorizontalOuter;
    this.rangeMapVerticalDown = rangeMapVerticalDown;
    this.rangeMapVerticalUp = rangeMapVerticalUp;
    this.faceFront = new THREE14.Vector3(0, 0, 1);
    this._restQuatLeftEye = new THREE14.Quaternion();
    this._restQuatRightEye = new THREE14.Quaternion();
    this._restLeftEyeParentWorldQuat = new THREE14.Quaternion();
    this._restRightEyeParentWorldQuat = new THREE14.Quaternion();
    const leftEye = this.humanoid.getRawBoneNode("leftEye");
    const rightEye = this.humanoid.getRawBoneNode("rightEye");
    if (leftEye) {
      this._restQuatLeftEye.copy(leftEye.quaternion);
      getWorldQuaternionLite(leftEye.parent, this._restLeftEyeParentWorldQuat);
    }
    if (rightEye) {
      this._restQuatRightEye.copy(rightEye.quaternion);
      getWorldQuaternionLite(rightEye.parent, this._restRightEyeParentWorldQuat);
    }
  }
  /**
   * Apply the input angle to its associated VRM model.
   *
   * @param yaw Rotation around Y axis, in degree
   * @param pitch Rotation around X axis, in degree
   */
  applyYawPitch(yaw, pitch) {
    const leftEye = this.humanoid.getRawBoneNode("leftEye");
    const rightEye = this.humanoid.getRawBoneNode("rightEye");
    const leftEyeNormalized = this.humanoid.getNormalizedBoneNode("leftEye");
    const rightEyeNormalized = this.humanoid.getNormalizedBoneNode("rightEye");
    if (leftEye) {
      if (pitch < 0) {
        _eulerA2.x = -THREE14.MathUtils.DEG2RAD * this.rangeMapVerticalDown.map(-pitch);
      } else {
        _eulerA2.x = THREE14.MathUtils.DEG2RAD * this.rangeMapVerticalUp.map(pitch);
      }
      if (yaw < 0) {
        _eulerA2.y = -THREE14.MathUtils.DEG2RAD * this.rangeMapHorizontalInner.map(-yaw);
      } else {
        _eulerA2.y = THREE14.MathUtils.DEG2RAD * this.rangeMapHorizontalOuter.map(yaw);
      }
      _quatA6.setFromEuler(_eulerA2);
      this._getWorldFaceFrontQuat(_quatB3);
      leftEyeNormalized.quaternion.copy(_quatB3).multiply(_quatA6).multiply(_quatB3.invert());
      _quatA6.copy(this._restLeftEyeParentWorldQuat);
      leftEye.quaternion.copy(leftEyeNormalized.quaternion).multiply(_quatA6).premultiply(_quatA6.invert()).multiply(this._restQuatLeftEye);
    }
    if (rightEye) {
      if (pitch < 0) {
        _eulerA2.x = -THREE14.MathUtils.DEG2RAD * this.rangeMapVerticalDown.map(-pitch);
      } else {
        _eulerA2.x = THREE14.MathUtils.DEG2RAD * this.rangeMapVerticalUp.map(pitch);
      }
      if (yaw < 0) {
        _eulerA2.y = -THREE14.MathUtils.DEG2RAD * this.rangeMapHorizontalOuter.map(-yaw);
      } else {
        _eulerA2.y = THREE14.MathUtils.DEG2RAD * this.rangeMapHorizontalInner.map(yaw);
      }
      _quatA6.setFromEuler(_eulerA2);
      this._getWorldFaceFrontQuat(_quatB3);
      rightEyeNormalized.quaternion.copy(_quatB3).multiply(_quatA6).multiply(_quatB3.invert());
      _quatA6.copy(this._restRightEyeParentWorldQuat);
      rightEye.quaternion.copy(rightEyeNormalized.quaternion).multiply(_quatA6).premultiply(_quatA6.invert()).multiply(this._restQuatRightEye);
    }
  }
  /**
   * @deprecated Use {@link applyYawPitch} instead.
   */
  lookAt(euler) {
    console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");
    const yaw = THREE14.MathUtils.RAD2DEG * euler.y;
    const pitch = THREE14.MathUtils.RAD2DEG * euler.x;
    this.applyYawPitch(yaw, pitch);
  }
  /**
   * Get a quaternion that rotates the world-space +Z unit vector to the {@link faceFront} direction.
   *
   * @param target A target `THREE.Quaternion`
   */
  _getWorldFaceFrontQuat(target) {
    if (this.faceFront.distanceToSquared(VEC3_POSITIVE_Z2) < 0.01) {
      return target.identity();
    }
    const [faceFrontAzimuth, faceFrontAltitude] = calcAzimuthAltitude(this.faceFront);
    _eulerA2.set(0, 0.5 * Math.PI + faceFrontAzimuth, faceFrontAltitude, "YZX");
    return target.setFromEuler(_eulerA2);
  }
};
VRMLookAtBoneApplier.type = "bone";
var VRMLookAtExpressionApplier = class {
  /**
   * Create a new {@link VRMLookAtExpressionApplier}.
   *
   * @param expressions A {@link VRMExpressionManager}
   * @param rangeMapHorizontalInner A {@link VRMLookAtRangeMap} used for inner transverse direction
   * @param rangeMapHorizontalOuter A {@link VRMLookAtRangeMap} used for outer transverse direction
   * @param rangeMapVerticalDown A {@link VRMLookAtRangeMap} used for down direction
   * @param rangeMapVerticalUp A {@link VRMLookAtRangeMap} used for up direction
   */
  constructor(expressions, rangeMapHorizontalInner, rangeMapHorizontalOuter, rangeMapVerticalDown, rangeMapVerticalUp) {
    this.expressions = expressions;
    this.rangeMapHorizontalInner = rangeMapHorizontalInner;
    this.rangeMapHorizontalOuter = rangeMapHorizontalOuter;
    this.rangeMapVerticalDown = rangeMapVerticalDown;
    this.rangeMapVerticalUp = rangeMapVerticalUp;
  }
  /**
   * Apply the input angle to its associated VRM model.
   *
   * @param yaw Rotation around Y axis, in degree
   * @param pitch Rotation around X axis, in degree
   */
  applyYawPitch(yaw, pitch) {
    if (pitch < 0) {
      this.expressions.setValue("lookDown", 0);
      this.expressions.setValue("lookUp", this.rangeMapVerticalUp.map(-pitch));
    } else {
      this.expressions.setValue("lookUp", 0);
      this.expressions.setValue("lookDown", this.rangeMapVerticalDown.map(pitch));
    }
    if (yaw < 0) {
      this.expressions.setValue("lookLeft", 0);
      this.expressions.setValue("lookRight", this.rangeMapHorizontalOuter.map(-yaw));
    } else {
      this.expressions.setValue("lookRight", 0);
      this.expressions.setValue("lookLeft", this.rangeMapHorizontalOuter.map(yaw));
    }
  }
  /**
   * @deprecated Use {@link applyYawPitch} instead.
   */
  lookAt(euler) {
    console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");
    const yaw = THREE15.MathUtils.RAD2DEG * euler.y;
    const pitch = THREE15.MathUtils.RAD2DEG * euler.x;
    this.applyYawPitch(yaw, pitch);
  }
};
VRMLookAtExpressionApplier.type = "expression";

// src/VRMLookAtQuaternionProxy.ts
var THREE17 = __toESM(require("three"), 1);
var RAD2DEG = 180 / Math.PI;
var _eulerA3 = /* @__PURE__ */ new THREE17.Euler();
var VRMLookAtQuaternionProxy = class extends THREE17.Object3D {
  constructor(lookAt) {
    super();
    this.vrmLookAt = lookAt;
    this.type = "VRMLookAtQuaternionProxy";
    const prevRotationOnChangeCallback = this.rotation._onChangeCallback;
    this.rotation._onChange(() => {
      prevRotationOnChangeCallback();
      this._applyToLookAt();
    });
    const prevQuaternionOnChangeCallback = this.quaternion._onChangeCallback;
    this.quaternion._onChange(() => {
      prevQuaternionOnChangeCallback();
      this._applyToLookAt();
    });
  }
  _applyToLookAt() {
    _eulerA3.setFromQuaternion(this.quaternion, VRMLookAt.EULER_ORDER);
    this.vrmLookAt.yaw = RAD2DEG * _eulerA3.y;
    this.vrmLookAt.pitch = RAD2DEG * _eulerA3.x;
  }
};

// src/createVRMAnimationClip.ts
function createVRMAnimationHumanoidTracks(vrmAnimation, humanoid, metaVersion) {
  var _a, _b;
  const translation = /* @__PURE__ */ new Map();
  const rotation = /* @__PURE__ */ new Map();
  for (const [name, origTrack] of vrmAnimation.humanoidTracks.rotation.entries()) {
    const nodeName = (_a = humanoid.getNormalizedBoneNode(name)) == null ? void 0 : _a.name;
    if (nodeName != null) {
      const track = new THREE18.QuaternionKeyframeTrack(
        `${nodeName}.quaternion`,
        origTrack.times,
        origTrack.values.map((v, i) => metaVersion === "0" && i % 2 === 0 ? -v : v)
      );
      rotation.set(name, track);
    }
  }
  for (const [name, origTrack] of vrmAnimation.humanoidTracks.translation.entries()) {
    const nodeName = (_b = humanoid.getNormalizedBoneNode(name)) == null ? void 0 : _b.name;
    if (nodeName != null) {
      const animationY = vrmAnimation.restHipsPosition.y;
      const humanoidY = humanoid.normalizedRestPose.hips.position[1];
      const scale = humanoidY / animationY;
      const track = origTrack.clone();
      track.values = track.values.map((v, i) => (metaVersion === "0" && i % 3 !== 1 ? -v : v) * scale);
      track.name = `${nodeName}.position`;
      translation.set(name, track);
    }
  }
  return { translation, rotation };
}
function createVRMAnimationExpressionTracks(vrmAnimation, expressionManager) {
  const preset = /* @__PURE__ */ new Map();
  const custom = /* @__PURE__ */ new Map();
  for (const [name, origTrack] of vrmAnimation.expressionTracks.preset.entries()) {
    const trackName = expressionManager.getExpressionTrackName(name);
    if (trackName != null) {
      const track = origTrack.clone();
      track.name = trackName;
      preset.set(name, track);
    }
  }
  for (const [name, origTrack] of vrmAnimation.expressionTracks.custom.entries()) {
    const trackName = expressionManager.getExpressionTrackName(name);
    if (trackName != null) {
      const track = origTrack.clone();
      track.name = trackName;
      custom.set(name, track);
    }
  }
  return { preset, custom };
}
function createVRMAnimationLookAtTrack(vrmAnimation, trackName) {
  if (vrmAnimation.lookAtTrack == null) {
    return null;
  }
  const track = vrmAnimation.lookAtTrack.clone();
  track.name = trackName;
  return track;
}
function createVRMAnimationClip(vrmAnimation, vrm) {
  const tracks = [];
  const humanoidTracks = createVRMAnimationHumanoidTracks(vrmAnimation, vrm.humanoid, vrm.meta.metaVersion);
  tracks.push(...humanoidTracks.translation.values());
  tracks.push(...humanoidTracks.rotation.values());
  if (vrm.expressionManager != null) {
    const expressionTracks = createVRMAnimationExpressionTracks(vrmAnimation, vrm.expressionManager);
    tracks.push(...expressionTracks.preset.values());
    tracks.push(...expressionTracks.custom.values());
  }
  if (vrm.lookAt != null) {
    let proxy = vrm.scene.children.find((obj) => obj instanceof VRMLookAtQuaternionProxy);
    if (proxy == null) {
      console.warn(
        "createVRMAnimationClip: VRMLookAtQuaternionProxy is not found. Creating a new one automatically. To suppress this warning, create a VRMLookAtQuaternionProxy manually"
      );
      proxy = new VRMLookAtQuaternionProxy(vrm.lookAt);
      proxy.name = "VRMLookAtQuaternionProxy";
      vrm.scene.add(proxy);
    } else if (proxy.name == null) {
      console.warn(
        "createVRMAnimationClip: VRMLookAtQuaternionProxy is found but its name is not set. Setting the name automatically. To suppress this warning, set the name manually"
      );
      proxy.name = "VRMLookAtQuaternionProxy";
    }
    const track = createVRMAnimationLookAtTrack(vrmAnimation, `${proxy.name}.quaternion`);
    if (track != null) {
      tracks.push(track);
    }
  }
  return new THREE18.AnimationClip("Clip", vrmAnimation.duration, tracks);
}

// src/VRMAnimation.ts
var THREE19 = __toESM(require("three"), 1);
var VRMAnimation = class {
  constructor() {
    this.duration = 0;
    this.restHipsPosition = new THREE19.Vector3();
    this.humanoidTracks = {
      translation: /* @__PURE__ */ new Map(),
      rotation: /* @__PURE__ */ new Map()
    };
    this.expressionTracks = {
      preset: /* @__PURE__ */ new Map(),
      custom: /* @__PURE__ */ new Map()
    };
    this.lookAtTrack = null;
  }
};

// src/VRMAnimationLoaderPlugin.ts
var THREE20 = __toESM(require("three"), 1);

// src/utils/arrayChunk.ts
function arrayChunk(array, every) {
  const N = array.length;
  const ret = [];
  let current = [];
  let remaining = 0;
  for (let i = 0; i < N; i++) {
    const el = array[i];
    if (remaining <= 0) {
      remaining = every;
      current = [];
      ret.push(current);
    }
    current.push(el);
    remaining--;
  }
  return ret;
}

// src/VRMAnimationLoaderPlugin.ts
var MAT4_IDENTITY = /* @__PURE__ */ new THREE20.Matrix4();
var _v3A6 = /* @__PURE__ */ new THREE20.Vector3();
var _quatA7 = /* @__PURE__ */ new THREE20.Quaternion();
var _quatB4 = /* @__PURE__ */ new THREE20.Quaternion();
var _quatC2 = /* @__PURE__ */ new THREE20.Quaternion();
var POSSIBLE_SPEC_VERSIONS2 = /* @__PURE__ */ new Set(["1.0", "1.0-draft"]);
var vrmExpressionPresetNameSet = /* @__PURE__ */ new Set(Object.values(VRMExpressionPresetName));
var VRMAnimationLoaderPlugin = class {
  constructor(parser) {
    this.parser = parser;
  }
  get name() {
    return "VRMC_vrm_animation";
  }
  afterRoot(gltf) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const defGltf = gltf.parser.json;
      const defExtensionsUsed = defGltf.extensionsUsed;
      if (defExtensionsUsed == null || defExtensionsUsed.indexOf(this.name) == -1) {
        return;
      }
      const defExtension = (_a = defGltf.extensions) == null ? void 0 : _a[this.name];
      if (defExtension == null) {
        return;
      }
      const specVersion = defExtension.specVersion;
      if (!POSSIBLE_SPEC_VERSIONS2.has(specVersion)) {
        console.warn(`VRMAnimationLoaderPlugin: Unknown VRMC_vrm_animation spec version: ${specVersion}`);
        return;
      }
      if (specVersion === "1.0-draft") {
        console.warn(
          "VRMAnimationLoaderPlugin: Using a draft spec version: 1.0-draft. Some behaviors may be different. Consider updating the animation file."
        );
      }
      const nodeMap = this._createNodeMap(defExtension);
      const worldMatrixMap = yield this._createBoneWorldMatrixMap(gltf, defExtension);
      const hipsNode = (_c = (_b = defExtension.humanoid) == null ? void 0 : _b.humanBones["hips"]) == null ? void 0 : _c.node;
      const hips = hipsNode != null ? yield gltf.parser.getDependency("node", hipsNode) : null;
      const restHipsPosition = new THREE20.Vector3();
      hips == null ? void 0 : hips.getWorldPosition(restHipsPosition);
      if (restHipsPosition.y < 1e-3) {
        console.warn(
          "VRMAnimationLoaderPlugin: The loaded VRM Animation might violate the VRM T-pose (The y component of the rest hips position is approximately zero or below.)"
        );
      }
      const clips = gltf.animations;
      const animations = clips.map((clip, iAnimation) => {
        const defAnimation = defGltf.animations[iAnimation];
        const animation = this._parseAnimation(clip, defAnimation, nodeMap, worldMatrixMap);
        animation.restHipsPosition = restHipsPosition;
        return animation;
      });
      gltf.userData.vrmAnimations = animations;
    });
  }
  _createNodeMap(defExtension) {
    var _a, _b, _c, _d, _e;
    const humanoidIndexToName = /* @__PURE__ */ new Map();
    const expressionsIndexToName = /* @__PURE__ */ new Map();
    const humanBones = (_a = defExtension.humanoid) == null ? void 0 : _a.humanBones;
    if (humanBones) {
      Object.entries(humanBones).forEach(([name, bone]) => {
        const node = bone == null ? void 0 : bone.node;
        if (node != null) {
          humanoidIndexToName.set(node, name);
        }
      });
    }
    const preset = (_b = defExtension.expressions) == null ? void 0 : _b.preset;
    if (preset) {
      Object.entries(preset).forEach(([name, expression]) => {
        const node = expression == null ? void 0 : expression.node;
        if (node != null) {
          expressionsIndexToName.set(node, name);
        }
      });
    }
    const custom = (_c = defExtension.expressions) == null ? void 0 : _c.custom;
    if (custom) {
      Object.entries(custom).forEach(([name, expression]) => {
        const { node } = expression;
        expressionsIndexToName.set(node, name);
      });
    }
    const lookAtIndex = (_e = (_d = defExtension.lookAt) == null ? void 0 : _d.node) != null ? _e : null;
    return { humanoidIndexToName, expressionsIndexToName, lookAtIndex };
  }
  _createBoneWorldMatrixMap(gltf, defExtension) {
    return __async(this, null, function* () {
      var _a, _b;
      gltf.scene.updateWorldMatrix(false, true);
      const threeNodes = yield gltf.parser.getDependencies("node");
      const worldMatrixMap = /* @__PURE__ */ new Map();
      if (defExtension.humanoid == null) {
        return worldMatrixMap;
      }
      for (const [boneName, humanBone] of Object.entries(defExtension.humanoid.humanBones)) {
        const node = humanBone == null ? void 0 : humanBone.node;
        if (node != null) {
          const threeNode = threeNodes[node];
          worldMatrixMap.set(boneName, threeNode.matrixWorld);
          if (boneName === "hips") {
            worldMatrixMap.set("hipsParent", (_b = (_a = threeNode.parent) == null ? void 0 : _a.matrixWorld) != null ? _b : MAT4_IDENTITY);
          }
        }
      }
      return worldMatrixMap;
    });
  }
  _parseAnimation(animationClip, defAnimation, nodeMap, worldMatrixMap) {
    const tracks = animationClip.tracks;
    const defChannels = defAnimation.channels;
    const result = new VRMAnimation();
    result.duration = animationClip.duration;
    defChannels.forEach((channel, iChannel) => {
      const { node, path } = channel.target;
      const origTrack = tracks[iChannel];
      if (node == null) {
        return;
      }
      const boneName = nodeMap.humanoidIndexToName.get(node);
      if (boneName != null) {
        let parentBoneName = VRMHumanBoneParentMap[boneName];
        while (parentBoneName != null && worldMatrixMap.get(parentBoneName) == null) {
          parentBoneName = VRMHumanBoneParentMap[parentBoneName];
        }
        parentBoneName != null ? parentBoneName : parentBoneName = "hipsParent";
        if (path === "translation") {
          if (boneName !== "hips") {
            console.warn(
              `The loading animation contains a translation track for ${boneName}, which is not permitted in the VRMC_vrm_animation spec. ignoring the track`
            );
          } else {
            const hipsParentWorldMatrix = worldMatrixMap.get("hipsParent");
            const trackValues = arrayChunk(origTrack.values, 3).flatMap(
              (v) => _v3A6.fromArray(v).applyMatrix4(hipsParentWorldMatrix).toArray()
            );
            const track = origTrack.clone();
            track.values = new Float32Array(trackValues);
            result.humanoidTracks.translation.set(boneName, track);
          }
        } else if (path === "rotation") {
          const worldMatrix = worldMatrixMap.get(boneName);
          const parentWorldMatrix = worldMatrixMap.get(parentBoneName);
          worldMatrix.decompose(_v3A6, _quatA7, _v3A6);
          _quatA7.invert();
          parentWorldMatrix.decompose(_v3A6, _quatB4, _v3A6);
          const trackValues = arrayChunk(origTrack.values, 4).flatMap(
            (q) => _quatC2.fromArray(q).premultiply(_quatB4).multiply(_quatA7).toArray()
          );
          const track = origTrack.clone();
          track.values = new Float32Array(trackValues);
          result.humanoidTracks.rotation.set(boneName, track);
        } else {
          throw new Error(`Invalid path "${path}"`);
        }
        return;
      }
      const expressionName = nodeMap.expressionsIndexToName.get(node);
      if (expressionName != null) {
        if (path === "translation") {
          const times = origTrack.times;
          const values = new Float32Array(origTrack.values.length / 3);
          for (let i = 0; i < values.length; i++) {
            values[i] = origTrack.values[3 * i];
          }
          const newTrack = new THREE20.NumberKeyframeTrack(`${expressionName}.weight`, times, values);
          if (vrmExpressionPresetNameSet.has(expressionName)) {
            result.expressionTracks.preset.set(expressionName, newTrack);
          } else {
            result.expressionTracks.custom.set(expressionName, newTrack);
          }
        } else {
          throw new Error(`Invalid path "${path}"`);
        }
        return;
      }
      if (node === nodeMap.lookAtIndex) {
        if (path === "rotation") {
          result.lookAtTrack = origTrack;
        } else {
          throw new Error(`Invalid path "${path}"`);
        }
      }
    });
    return result;
  }
};
/*!
 * @pixiv/three-vrm-core v3.1.5
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIiwgIi4uL3NyYy9jcmVhdGVWUk1BbmltYXRpb25DbGlwLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy91dGlscy9nbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvblByZXNldE5hbWUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL3V0aWxzL3NhdHVyYXRlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTWFuYWdlci50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25Nb3JwaFRhcmdldEJpbmQudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZC50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb24udHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2ZpcnN0UGVyc29uL1ZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9maXJzdFBlcnNvbi9WUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvaGVscGVycy9WUk1IdW1hbm9pZEhlbHBlci50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvVlJNSHVtYW5Cb25lTGlzdC50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvVlJNSHVtYW5Cb25lTmFtZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvVlJNSHVtYW5Cb25lUGFyZW50TWFwLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9WUk1SaWcudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL3V0aWxzL3F1YXRJbnZlcnRDb21wYXQudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2h1bWFub2lkL1ZSTUh1bWFub2lkUmlnLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9WUk1IdW1hbm9pZC50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9WUk1IdW1hbm9pZExvYWRlclBsdWdpbi50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L2hlbHBlcnMvVlJNTG9va0F0SGVscGVyLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvaGVscGVycy91dGlscy9GYW5CdWZmZXJHZW9tZXRyeS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L2hlbHBlcnMvdXRpbHMvTGluZUFuZFNwaGVyZUJ1ZmZlckdlb21ldHJ5LnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvVlJNTG9va0F0LnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy91dGlscy9nZXRXb3JsZFF1YXRlcm5pb25MaXRlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvdXRpbHMvY2FsY0F6aW11dGhBbHRpdHVkZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L3V0aWxzL3Nhbml0aXplQW5nbGUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2xvb2tBdC9WUk1Mb29rQXRCb25lQXBwbGllci50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L1ZSTUxvb2tBdEV4cHJlc3Npb25BcHBsaWVyLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvVlJNTG9va0F0UmFuZ2VNYXAudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2xvb2tBdC9WUk1Mb29rQXRMb2FkZXJQbHVnaW4udHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2xvb2tBdC9WUk1Mb29rQXRUeXBlTmFtZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbWV0YS9WUk1NZXRhTG9hZGVyUGx1Z2luLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy91dGlscy9yZXNvbHZlVVJMLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9WUk1Db3JlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9WUk1Db3JlTG9hZGVyUGx1Z2luLnRzIiwgIi4uL3NyYy9WUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHkudHMiLCAiLi4vc3JjL1ZSTUFuaW1hdGlvbi50cyIsICIuLi9zcmMvVlJNQW5pbWF0aW9uTG9hZGVyUGx1Z2luLnRzIiwgIi4uL3NyYy91dGlscy9hcnJheUNodW5rLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge1xuICBjcmVhdGVWUk1BbmltYXRpb25IdW1hbm9pZFRyYWNrcyxcbiAgY3JlYXRlVlJNQW5pbWF0aW9uRXhwcmVzc2lvblRyYWNrcyxcbiAgY3JlYXRlVlJNQW5pbWF0aW9uTG9va0F0VHJhY2ssXG4gIGNyZWF0ZVZSTUFuaW1hdGlvbkNsaXAsXG59IGZyb20gJy4vY3JlYXRlVlJNQW5pbWF0aW9uQ2xpcCc7XG5leHBvcnQgeyBWUk1BbmltYXRpb24gfSBmcm9tICcuL1ZSTUFuaW1hdGlvbic7XG5leHBvcnQgeyBWUk1BbmltYXRpb25Mb2FkZXJQbHVnaW4gfSBmcm9tICcuL1ZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbic7XG5leHBvcnQgeyBWUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHkgfSBmcm9tICcuL1ZSTUxvb2tBdFF1YXRlcm5pb25Qcm94eSc7XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUge1xuICBWUk1Db3JlLFxuICBWUk1FeHByZXNzaW9uTWFuYWdlcixcbiAgVlJNRXhwcmVzc2lvblByZXNldE5hbWUsXG4gIFZSTUh1bWFuQm9uZU5hbWUsXG4gIFZSTUh1bWFub2lkLFxufSBmcm9tICdAcGl4aXYvdGhyZWUtdnJtLWNvcmUnO1xuaW1wb3J0IHR5cGUgeyBWUk1BbmltYXRpb24gfSBmcm9tICcuL1ZSTUFuaW1hdGlvbic7XG5pbXBvcnQgeyBWUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHkgfSBmcm9tICcuL1ZSTUxvb2tBdFF1YXRlcm5pb25Qcm94eSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWUk1BbmltYXRpb25IdW1hbm9pZFRyYWNrcyhcbiAgdnJtQW5pbWF0aW9uOiBWUk1BbmltYXRpb24sXG4gIGh1bWFub2lkOiBWUk1IdW1hbm9pZCxcbiAgbWV0YVZlcnNpb246ICcwJyB8ICcxJyxcbik6IHtcbiAgdHJhbnNsYXRpb246IE1hcDwnaGlwcycsIFRIUkVFLlZlY3RvcktleWZyYW1lVHJhY2s+O1xuICByb3RhdGlvbjogTWFwPFZSTUh1bWFuQm9uZU5hbWUsIFRIUkVFLlF1YXRlcm5pb25LZXlmcmFtZVRyYWNrPjtcbn0ge1xuICBjb25zdCB0cmFuc2xhdGlvbiA9IG5ldyBNYXA8J2hpcHMnLCBUSFJFRS5WZWN0b3JLZXlmcmFtZVRyYWNrPigpO1xuICBjb25zdCByb3RhdGlvbiA9IG5ldyBNYXA8VlJNSHVtYW5Cb25lTmFtZSwgVEhSRUUuVmVjdG9yS2V5ZnJhbWVUcmFjaz4oKTtcblxuICBmb3IgKGNvbnN0IFtuYW1lLCBvcmlnVHJhY2tdIG9mIHZybUFuaW1hdGlvbi5odW1hbm9pZFRyYWNrcy5yb3RhdGlvbi5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCBub2RlTmFtZSA9IGh1bWFub2lkLmdldE5vcm1hbGl6ZWRCb25lTm9kZShuYW1lKT8ubmFtZTtcblxuICAgIGlmIChub2RlTmFtZSAhPSBudWxsKSB7XG4gICAgICBjb25zdCB0cmFjayA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjayhcbiAgICAgICAgYCR7bm9kZU5hbWV9LnF1YXRlcm5pb25gLFxuICAgICAgICBvcmlnVHJhY2sudGltZXMsXG4gICAgICAgIG9yaWdUcmFjay52YWx1ZXMubWFwKCh2LCBpKSA9PiAobWV0YVZlcnNpb24gPT09ICcwJyAmJiBpICUgMiA9PT0gMCA/IC12IDogdikpLFxuICAgICAgKTtcbiAgICAgIHJvdGF0aW9uLnNldChuYW1lLCB0cmFjayk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBbbmFtZSwgb3JpZ1RyYWNrXSBvZiB2cm1BbmltYXRpb24uaHVtYW5vaWRUcmFja3MudHJhbnNsYXRpb24uZW50cmllcygpKSB7XG4gICAgY29uc3Qgbm9kZU5hbWUgPSBodW1hbm9pZC5nZXROb3JtYWxpemVkQm9uZU5vZGUobmFtZSk/Lm5hbWU7XG5cbiAgICBpZiAobm9kZU5hbWUgIT0gbnVsbCkge1xuICAgICAgY29uc3QgYW5pbWF0aW9uWSA9IHZybUFuaW1hdGlvbi5yZXN0SGlwc1Bvc2l0aW9uLnk7XG4gICAgICBjb25zdCBodW1hbm9pZFkgPSBodW1hbm9pZC5ub3JtYWxpemVkUmVzdFBvc2UuaGlwcyEucG9zaXRpb24hWzFdO1xuICAgICAgY29uc3Qgc2NhbGUgPSBodW1hbm9pZFkgLyBhbmltYXRpb25ZO1xuXG4gICAgICBjb25zdCB0cmFjayA9IG9yaWdUcmFjay5jbG9uZSgpO1xuICAgICAgdHJhY2sudmFsdWVzID0gdHJhY2sudmFsdWVzLm1hcCgodiwgaSkgPT4gKG1ldGFWZXJzaW9uID09PSAnMCcgJiYgaSAlIDMgIT09IDEgPyAtdiA6IHYpICogc2NhbGUpO1xuICAgICAgdHJhY2submFtZSA9IGAke25vZGVOYW1lfS5wb3NpdGlvbmA7XG4gICAgICB0cmFuc2xhdGlvbi5zZXQobmFtZSwgdHJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHRyYW5zbGF0aW9uLCByb3RhdGlvbiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVlJNQW5pbWF0aW9uRXhwcmVzc2lvblRyYWNrcyhcbiAgdnJtQW5pbWF0aW9uOiBWUk1BbmltYXRpb24sXG4gIGV4cHJlc3Npb25NYW5hZ2VyOiBWUk1FeHByZXNzaW9uTWFuYWdlcixcbik6IHtcbiAgcHJlc2V0OiBNYXA8VlJNRXhwcmVzc2lvblByZXNldE5hbWUsIFRIUkVFLk51bWJlcktleWZyYW1lVHJhY2s+O1xuICBjdXN0b206IE1hcDxzdHJpbmcsIFRIUkVFLk51bWJlcktleWZyYW1lVHJhY2s+O1xufSB7XG4gIGNvbnN0IHByZXNldCA9IG5ldyBNYXA8VlJNRXhwcmVzc2lvblByZXNldE5hbWUsIFRIUkVFLk51bWJlcktleWZyYW1lVHJhY2s+KCk7XG4gIGNvbnN0IGN1c3RvbSA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5OdW1iZXJLZXlmcmFtZVRyYWNrPigpO1xuXG4gIGZvciAoY29uc3QgW25hbWUsIG9yaWdUcmFja10gb2YgdnJtQW5pbWF0aW9uLmV4cHJlc3Npb25UcmFja3MucHJlc2V0LmVudHJpZXMoKSkge1xuICAgIGNvbnN0IHRyYWNrTmFtZSA9IGV4cHJlc3Npb25NYW5hZ2VyLmdldEV4cHJlc3Npb25UcmFja05hbWUobmFtZSk7XG5cbiAgICBpZiAodHJhY2tOYW1lICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gb3JpZ1RyYWNrLmNsb25lKCk7XG4gICAgICB0cmFjay5uYW1lID0gdHJhY2tOYW1lO1xuICAgICAgcHJlc2V0LnNldChuYW1lLCB0cmFjayk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBbbmFtZSwgb3JpZ1RyYWNrXSBvZiB2cm1BbmltYXRpb24uZXhwcmVzc2lvblRyYWNrcy5jdXN0b20uZW50cmllcygpKSB7XG4gICAgY29uc3QgdHJhY2tOYW1lID0gZXhwcmVzc2lvbk1hbmFnZXIuZ2V0RXhwcmVzc2lvblRyYWNrTmFtZShuYW1lKTtcblxuICAgIGlmICh0cmFja05hbWUgIT0gbnVsbCkge1xuICAgICAgY29uc3QgdHJhY2sgPSBvcmlnVHJhY2suY2xvbmUoKTtcbiAgICAgIHRyYWNrLm5hbWUgPSB0cmFja05hbWU7XG4gICAgICBjdXN0b20uc2V0KG5hbWUsIHRyYWNrKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBwcmVzZXQsIGN1c3RvbSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVlJNQW5pbWF0aW9uTG9va0F0VHJhY2soXG4gIHZybUFuaW1hdGlvbjogVlJNQW5pbWF0aW9uLFxuICB0cmFja05hbWU6IHN0cmluZyxcbik6IFRIUkVFLktleWZyYW1lVHJhY2sgfCBudWxsIHtcbiAgaWYgKHZybUFuaW1hdGlvbi5sb29rQXRUcmFjayA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB0cmFjayA9IHZybUFuaW1hdGlvbi5sb29rQXRUcmFjay5jbG9uZSgpO1xuICB0cmFjay5uYW1lID0gdHJhY2tOYW1lO1xuICByZXR1cm4gdHJhY2s7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIEFuaW1hdGlvbkNsaXAgb3V0IG9mIHRoZSBnaXZlbiBWUk1BbmltYXRpb24gYW5kIHRoZSBWUk0uXG4gKlxuICogQHBhcmFtIHZybUFuaW1hdGlvbiBBIHtAbGluayBWUk1BbmltYXRpb259LlxuICogQHBhcmFtIHZybSBBIHtAbGluayBWUk1Db3JlfS5cbiAqIEByZXR1cm5zIEFuIEFuaW1hdGlvbkNsaXBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZSTUFuaW1hdGlvbkNsaXAodnJtQW5pbWF0aW9uOiBWUk1BbmltYXRpb24sIHZybTogVlJNQ29yZSk6IFRIUkVFLkFuaW1hdGlvbkNsaXAge1xuICBjb25zdCB0cmFja3M6IFRIUkVFLktleWZyYW1lVHJhY2tbXSA9IFtdO1xuXG4gIGNvbnN0IGh1bWFub2lkVHJhY2tzID0gY3JlYXRlVlJNQW5pbWF0aW9uSHVtYW5vaWRUcmFja3ModnJtQW5pbWF0aW9uLCB2cm0uaHVtYW5vaWQsIHZybS5tZXRhLm1ldGFWZXJzaW9uKTtcbiAgdHJhY2tzLnB1c2goLi4uaHVtYW5vaWRUcmFja3MudHJhbnNsYXRpb24udmFsdWVzKCkpO1xuICB0cmFja3MucHVzaCguLi5odW1hbm9pZFRyYWNrcy5yb3RhdGlvbi52YWx1ZXMoKSk7XG5cbiAgaWYgKHZybS5leHByZXNzaW9uTWFuYWdlciAhPSBudWxsKSB7XG4gICAgY29uc3QgZXhwcmVzc2lvblRyYWNrcyA9IGNyZWF0ZVZSTUFuaW1hdGlvbkV4cHJlc3Npb25UcmFja3ModnJtQW5pbWF0aW9uLCB2cm0uZXhwcmVzc2lvbk1hbmFnZXIpO1xuICAgIHRyYWNrcy5wdXNoKC4uLmV4cHJlc3Npb25UcmFja3MucHJlc2V0LnZhbHVlcygpKTtcbiAgICB0cmFja3MucHVzaCguLi5leHByZXNzaW9uVHJhY2tzLmN1c3RvbS52YWx1ZXMoKSk7XG4gIH1cblxuICBpZiAodnJtLmxvb2tBdCAhPSBudWxsKSB7XG4gICAgLy8gc2VhcmNoIFZSTUxvb2tBdFF1YXRlcm5pb25Qcm94eVxuICAgIGxldCBwcm94eSA9IHZybS5zY2VuZS5jaGlsZHJlbi5maW5kKChvYmopID0+IG9iaiBpbnN0YW5jZW9mIFZSTUxvb2tBdFF1YXRlcm5pb25Qcm94eSk7XG5cbiAgICBpZiAocHJveHkgPT0gbnVsbCkge1xuICAgICAgLy8gaWYgbm90IGZvdW5kLCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdjcmVhdGVWUk1BbmltYXRpb25DbGlwOiBWUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHkgaXMgbm90IGZvdW5kLiBDcmVhdGluZyBhIG5ldyBvbmUgYXV0b21hdGljYWxseS4gVG8gc3VwcHJlc3MgdGhpcyB3YXJuaW5nLCBjcmVhdGUgYSBWUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHkgbWFudWFsbHknLFxuICAgICAgKTtcblxuICAgICAgcHJveHkgPSBuZXcgVlJNTG9va0F0UXVhdGVybmlvblByb3h5KHZybS5sb29rQXQpO1xuICAgICAgcHJveHkubmFtZSA9ICdWUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHknO1xuICAgICAgdnJtLnNjZW5lLmFkZChwcm94eSk7XG4gICAgfSBlbHNlIGlmIChwcm94eS5uYW1lID09IG51bGwpIHtcbiAgICAgIC8vIGlmIGZvdW5kIGJ1dCBuYW1lIGlzIG5vdCBzZXQsIHNldCB0aGUgbmFtZSBhdXRvbWF0aWNhbGx5XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdjcmVhdGVWUk1BbmltYXRpb25DbGlwOiBWUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHkgaXMgZm91bmQgYnV0IGl0cyBuYW1lIGlzIG5vdCBzZXQuIFNldHRpbmcgdGhlIG5hbWUgYXV0b21hdGljYWxseS4gVG8gc3VwcHJlc3MgdGhpcyB3YXJuaW5nLCBzZXQgdGhlIG5hbWUgbWFudWFsbHknLFxuICAgICAgKTtcblxuICAgICAgcHJveHkubmFtZSA9ICdWUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHknO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIHRyYWNrXG4gICAgY29uc3QgdHJhY2sgPSBjcmVhdGVWUk1BbmltYXRpb25Mb29rQXRUcmFjayh2cm1BbmltYXRpb24sIGAke3Byb3h5Lm5hbWV9LnF1YXRlcm5pb25gKTtcbiAgICBpZiAodHJhY2sgIT0gbnVsbCkge1xuICAgICAgdHJhY2tzLnB1c2godHJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVEhSRUUuQW5pbWF0aW9uQ2xpcCgnQ2xpcCcsIHZybUFuaW1hdGlvbi5kdXJhdGlvbiwgdHJhY2tzKTtcbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uQmluZCB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbkJpbmQnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbk1hbmFnZXIgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25NYW5hZ2VyJztcblxuLy8gYW5pbWF0aW9uTWl4ZXIgXHUzMDZFXHU3NkUzXHU4OTk2XHU1QkZFXHU4QzYxXHUzMDZGXHUzMDAxU2NlbmUgXHUzMDZFXHU0RTJEXHUzMDZCXHU1MTY1XHUzMDYzXHUzMDY2XHUzMDQ0XHUzMDhCXHU1RkM1XHU4OTgxXHUzMDRDXHUzMDQyXHUzMDhCXHUzMDAyXG4vLyBcdTMwNURcdTMwNkVcdTMwNUZcdTMwODFcdTMwMDFcdTg4NjhcdTc5M0FcdTMwQUFcdTMwRDZcdTMwQjhcdTMwQTdcdTMwQUZcdTMwQzhcdTMwNjdcdTMwNkZcdTMwNkFcdTMwNDRcdTMwNTFcdTMwOENcdTMwNjlcdTMwMDFPYmplY3QzRCBcdTMwOTJcdTdEOTlcdTYyN0ZcdTMwNTdcdTMwNjYgU2NlbmUgXHUzMDZCXHU2Mjk1XHU1MTY1XHUzMDY3XHUzMDREXHUzMDhCXHUzMDg4XHUzMDQ2XHUzMDZCXHUzMDU5XHUzMDhCXHUzMDAyXG5leHBvcnQgY2xhc3MgVlJNRXhwcmVzc2lvbiBleHRlbmRzIFRIUkVFLk9iamVjdDNEIHtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhpcyBleHByZXNzaW9uLlxuICAgKiBEaXN0aW5ndWlzaGVkIHdpdGggYG5hbWVgIHNpbmNlIGBuYW1lYCB3aWxsIGJlIGNvbmZsaWN0ZWQgd2l0aCBPYmplY3QzRC5cbiAgICovXG4gIHB1YmxpYyBleHByZXNzaW9uTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB3ZWlnaHQgb2YgdGhlIGV4cHJlc3Npb24uXG4gICAqXG4gICAqIFlvdSB1c3VhbGx5IHdhbnQgdG8gc2V0IHRoZSB3ZWlnaHQgdmlhIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlci5zZXRWYWx1ZX0uXG4gICAqXG4gICAqIEl0IG1pZ2h0IGFsc28gYmUgY29udHJvbGxlZCBieSB0aGUgVGhyZWUuanMgYW5pbWF0aW9uIHN5c3RlbS5cbiAgICovXG4gIHB1YmxpYyB3ZWlnaHQgPSAwLjA7XG5cbiAgLyoqXG4gICAqIEludGVycHJldCB2YWx1ZXMgZ3JlYXRlciB0aGFuIDAuNSBhcyAxLjAsIG9ydGhlcndpc2UgMC4wLlxuICAgKi9cbiAgcHVibGljIGlzQmluYXJ5ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgaG93IHRoZSBleHByZXNzaW9uIG92ZXJyaWRlcyBibGluayBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBvdmVycmlkZUJsaW5rOiBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlID0gJ25vbmUnO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGhvdyB0aGUgZXhwcmVzc2lvbiBvdmVycmlkZXMgbG9va0F0IGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIG92ZXJyaWRlTG9va0F0OiBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlID0gJ25vbmUnO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGhvdyB0aGUgZXhwcmVzc2lvbiBvdmVycmlkZXMgbW91dGggZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgb3ZlcnJpZGVNb3V0aDogVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSA9ICdub25lJztcblxuICBwcml2YXRlIF9iaW5kczogVlJNRXhwcmVzc2lvbkJpbmRbXSA9IFtdO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHR5cGU6IHN0cmluZyB8ICdWUk1FeHByZXNzaW9uJztcblxuICAvKipcbiAgICogQSB2YWx1ZSByZXByZXNlbnRzIGhvdyBtdWNoIGl0IHNob3VsZCBvdmVycmlkZSBibGluayBleHByZXNzaW9ucy5cbiAgICogYDAuMGAgPT0gbm8gb3ZlcnJpZGUgYXQgYWxsLCBgMS4wYCA9PSBjb21wbGV0ZWx5IGJsb2NrIHRoZSBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVCbGlua0Ftb3VudCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLm92ZXJyaWRlQmxpbmsgPT09ICdibG9jaycpIHtcbiAgICAgIHJldHVybiAwLjAgPCB0aGlzLm91dHB1dFdlaWdodCA/IDEuMCA6IDAuMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3ZlcnJpZGVCbGluayA9PT0gJ2JsZW5kJykge1xuICAgICAgcmV0dXJuIHRoaXMub3V0cHV0V2VpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMC4wO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHZhbHVlIHJlcHJlc2VudHMgaG93IG11Y2ggaXQgc2hvdWxkIG92ZXJyaWRlIGxvb2tBdCBleHByZXNzaW9ucy5cbiAgICogYDAuMGAgPT0gbm8gb3ZlcnJpZGUgYXQgYWxsLCBgMS4wYCA9PSBjb21wbGV0ZWx5IGJsb2NrIHRoZSBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVMb29rQXRBbW91bnQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5vdmVycmlkZUxvb2tBdCA9PT0gJ2Jsb2NrJykge1xuICAgICAgcmV0dXJuIDAuMCA8IHRoaXMub3V0cHV0V2VpZ2h0ID8gMS4wIDogMC4wO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vdmVycmlkZUxvb2tBdCA9PT0gJ2JsZW5kJykge1xuICAgICAgcmV0dXJuIHRoaXMub3V0cHV0V2VpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMC4wO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHZhbHVlIHJlcHJlc2VudHMgaG93IG11Y2ggaXQgc2hvdWxkIG92ZXJyaWRlIG1vdXRoIGV4cHJlc3Npb25zLlxuICAgKiBgMC4wYCA9PSBubyBvdmVycmlkZSBhdCBhbGwsIGAxLjBgID09IGNvbXBsZXRlbHkgYmxvY2sgdGhlIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIGdldCBvdmVycmlkZU1vdXRoQW1vdW50KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMub3ZlcnJpZGVNb3V0aCA9PT0gJ2Jsb2NrJykge1xuICAgICAgcmV0dXJuIDAuMCA8IHRoaXMub3V0cHV0V2VpZ2h0ID8gMS4wIDogMC4wO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vdmVycmlkZU1vdXRoID09PSAnYmxlbmQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5vdXRwdXRXZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwLjA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFuIG91dHB1dCB3ZWlnaHQgb2YgdGhpcyBleHByZXNzaW9uLCBjb25zaWRlcmluZyB0aGUge0BsaW5rIGlzQmluYXJ5fS5cbiAgICovXG4gIHB1YmxpYyBnZXQgb3V0cHV0V2VpZ2h0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuaXNCaW5hcnkpIHtcbiAgICAgIHJldHVybiB0aGlzLndlaWdodCA+IDAuNSA/IDEuMCA6IDAuMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy53ZWlnaHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uTmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubmFtZSA9IGBWUk1FeHByZXNzaW9uXyR7ZXhwcmVzc2lvbk5hbWV9YDtcbiAgICB0aGlzLmV4cHJlc3Npb25OYW1lID0gZXhwcmVzc2lvbk5hbWU7XG5cbiAgICAvLyB0cmF2ZXJzZSBcdTY2NDJcdTMwNkVcdTY1NTFcdTZFMDhcdTYyNEJcdTZCQjVcdTMwNjhcdTMwNTdcdTMwNjYgT2JqZWN0M0QgXHUzMDY3XHUzMDZGXHUzMDZBXHUzMDQ0XHUzMDUzXHUzMDY4XHUzMDkyXHU2NjBFXHU3OTNBXHUzMDU3XHUzMDY2XHUzMDRBXHUzMDRGXG4gICAgdGhpcy50eXBlID0gJ1ZSTUV4cHJlc3Npb24nO1xuXG4gICAgLy8gXHU4ODY4XHU3OTNBXHU3NkVFXHU3Njg0XHUzMDZFXHUzMEFBXHUzMEQ2XHUzMEI4XHUzMEE3XHUzMEFGXHUzMEM4XHUzMDY3XHUzMDZGXHUzMDZBXHUzMDQ0XHUzMDZFXHUzMDY3XHUzMDAxXHU4Q0EwXHU4Mzc3XHU4RUZEXHU2RTFCXHUzMDZFXHUzMDVGXHUzMDgxXHUzMDZCIHZpc2libGUgXHUzMDkyIGZhbHNlIFx1MzA2Qlx1MzA1N1x1MzA2Nlx1MzA0QVx1MzA0Rlx1MzAwMlxuICAgIC8vIFx1MzA1M1x1MzA4Q1x1MzA2Qlx1MzA4OFx1MzA4QVx1MzAwMVx1MzA1M1x1MzA2RVx1MzBBNFx1MzBGM1x1MzBCOVx1MzBCRlx1MzBGM1x1MzBCOVx1MzA2Qlx1NUJGRVx1MzA1OVx1MzA4Qlx1NkJDRVx1MzBENVx1MzBFQ1x1MzBGQ1x1MzBFMFx1MzA2RSBtYXRyaXggXHU4MUVBXHU1MkQ1XHU4QTA4XHU3Qjk3XHUzMDkyXHU3NzAxXHU3NTY1XHUzMDY3XHUzMDREXHUzMDhCXHUzMDAyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgYWRkQmluZChiaW5kOiBWUk1FeHByZXNzaW9uQmluZCk6IHZvaWQge1xuICAgIHRoaXMuX2JpbmRzLnB1c2goYmluZCk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgd2VpZ2h0IHRvIGV2ZXJ5IGFzc2lnbmVkIGJsZW5kIHNoYXBlcy5cbiAgICogU2hvdWxkIGJlIGNhbGxlZCBldmVyeSBmcmFtZS5cbiAgICovXG4gIHB1YmxpYyBhcHBseVdlaWdodChvcHRpb25zPzoge1xuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2YWx1ZSB0byBpdHMgd2VpZ2h0IHRvIGFwcGx5LlxuICAgICAqIEludGVuZGVkIHRvIGJlIHVzZWQgZm9yIG92ZXJyaWRpbmcgYW4gZXhwcmVzc2lvbiB3ZWlnaHQgYnkgYW5vdGhlciBleHByZXNzaW9uLlxuICAgICAqIFNlZSBhbHNvOiB7QGxpbmsgb3ZlcnJpZGVCbGlua30sIHtAbGluayBvdmVycmlkZUxvb2tBdH0sIHtAbGluayBvdmVycmlkZU1vdXRofVxuICAgICAqL1xuICAgIG11bHRpcGxpZXI/OiBudW1iZXI7XG4gIH0pOiB2b2lkIHtcbiAgICBsZXQgYWN0dWFsV2VpZ2h0ID0gdGhpcy5vdXRwdXRXZWlnaHQ7XG4gICAgYWN0dWFsV2VpZ2h0ICo9IG9wdGlvbnM/Lm11bHRpcGxpZXIgPz8gMS4wO1xuXG4gICAgLy8gaWYgdGhlIGV4cHJlc3Npb24gaXMgYmluYXJ5LCB0aGUgb3ZlcnJpZGUgdmFsdWUgbXVzdCBiZSBhbHNvIHRyZWF0ZWQgYXMgYmluYXJ5XG4gICAgaWYgKHRoaXMuaXNCaW5hcnkgJiYgYWN0dWFsV2VpZ2h0IDwgMS4wKSB7XG4gICAgICBhY3R1YWxXZWlnaHQgPSAwLjA7XG4gICAgfVxuXG4gICAgdGhpcy5fYmluZHMuZm9yRWFjaCgoYmluZCkgPT4gYmluZC5hcHBseVdlaWdodChhY3R1YWxXZWlnaHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBwcmV2aW91c2x5IGFzc2lnbmVkIGJsZW5kIHNoYXBlcy5cbiAgICovXG4gIHB1YmxpYyBjbGVhckFwcGxpZWRXZWlnaHQoKTogdm9pZCB7XG4gICAgdGhpcy5fYmluZHMuZm9yRWFjaCgoYmluZCkgPT4gYmluZC5jbGVhckFwcGxpZWRXZWlnaHQoKSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSAqIGFzIFYwVlJNIGZyb20gJ0BwaXhpdi90eXBlcy12cm0tMC4wJztcbmltcG9ydCB0eXBlICogYXMgVjFWUk1TY2hlbWEgZnJvbSAnQHBpeGl2L3R5cGVzLXZybWMtdnJtLTEuMCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBHTFRGLCBHTFRGTG9hZGVyUGx1Z2luLCBHTFRGUGFyc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgeyBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZSB9IGZyb20gJy4uL3V0aWxzL2dsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb24gfSBmcm9tICcuL1ZSTUV4cHJlc3Npb24nO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbk1hbmFnZXIgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB7IHYwRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JNYXAgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uTW9ycGhUYXJnZXRCaW5kIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uTW9ycGhUYXJnZXRCaW5kJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uUHJlc2V0TmFtZSc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uVGV4dHVyZVRyYW5zZm9ybUJpbmQgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZCc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TID0gbmV3IFNldChbJzEuMCcsICcxLjAtYmV0YSddKTtcblxuLyoqXG4gKiBBIHBsdWdpbiBvZiBHTFRGTG9hZGVyIHRoYXQgaW1wb3J0cyBhIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxuICovXG5leHBvcnQgY2xhc3MgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHYwdjFQcmVzZXROYW1lTWFwOiB7IFt2ME5hbWUgaW4gVjBWUk0uQmxlbmRTaGFwZVByZXNldE5hbWVdPzogVlJNRXhwcmVzc2lvblByZXNldE5hbWUgfSA9IHtcbiAgICBhOiAnYWEnLFxuICAgIGU6ICdlZScsXG4gICAgaTogJ2loJyxcbiAgICBvOiAnb2gnLFxuICAgIHU6ICdvdScsXG4gICAgYmxpbms6ICdibGluaycsXG4gICAgam95OiAnaGFwcHknLFxuICAgIGFuZ3J5OiAnYW5ncnknLFxuICAgIHNvcnJvdzogJ3NhZCcsXG4gICAgZnVuOiAncmVsYXhlZCcsXG4gICAgbG9va3VwOiAnbG9va1VwJyxcbiAgICBsb29rZG93bjogJ2xvb2tEb3duJyxcbiAgICBsb29rbGVmdDogJ2xvb2tMZWZ0JyxcbiAgICBsb29rcmlnaHQ6ICdsb29rUmlnaHQnLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgICBibGlua19sOiAnYmxpbmtMZWZ0JyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gICAgYmxpbmtfcjogJ2JsaW5rUmlnaHQnLFxuICAgIG5ldXRyYWw6ICduZXV0cmFsJyxcbiAgfTtcblxuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIC8vIFdlIHNob3VsZCB1c2UgdGhlIGV4dGVuc2lvbiBuYW1lIGluc3RlYWQgYnV0IHdlIGhhdmUgbXVsdGlwbGUgcGx1Z2lucyBmb3IgYW4gZXh0ZW5zaW9uLi4uXG4gICAgcmV0dXJuICdWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luJztcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlclJvb3QoZ2x0ZjogR0xURik6IFByb21pc2U8dm9pZD4ge1xuICAgIGdsdGYudXNlckRhdGEudnJtRXhwcmVzc2lvbk1hbmFnZXIgPSBhd2FpdCB0aGlzLl9pbXBvcnQoZ2x0Zik7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGEge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfSBmcm9tIGEgVlJNLlxuICAgKlxuICAgKiBAcGFyYW0gZ2x0ZiBBIHBhcnNlZCByZXN1bHQgb2YgR0xURiB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2ltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1FeHByZXNzaW9uTWFuYWdlciB8IG51bGw+IHtcbiAgICBjb25zdCB2MVJlc3VsdCA9IGF3YWl0IHRoaXMuX3YxSW1wb3J0KGdsdGYpO1xuICAgIGlmICh2MVJlc3VsdCkge1xuICAgICAgcmV0dXJuIHYxUmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHYwUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjBJbXBvcnQoZ2x0Zik7XG4gICAgaWYgKHYwUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjBSZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MUltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1FeHByZXNzaW9uTWFuYWdlciB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgaXNWUk1Vc2VkID0ganNvbi5leHRlbnNpb25zVXNlZD8uaW5kZXhPZignVlJNQ192cm0nKSAhPT0gLTE7XG4gICAgaWYgKCFpc1ZSTVVzZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGpzb24uZXh0ZW5zaW9ucz8uWydWUk1DX3ZybSddIGFzIFYxVlJNU2NoZW1hLlZSTUNWUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCFleHRlbnNpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNwZWNWZXJzaW9uID0gZXh0ZW5zaW9uLnNwZWNWZXJzaW9uO1xuICAgIGlmICghUE9TU0lCTEVfU1BFQ19WRVJTSU9OUy5oYXMoc3BlY1ZlcnNpb24pKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46IFVua25vd24gVlJNQ192cm0gc3BlY1ZlcnNpb24gXCIke3NwZWNWZXJzaW9ufVwiYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFFeHByZXNzaW9ucyA9IGV4dGVuc2lvbi5leHByZXNzaW9ucztcbiAgICBpZiAoIXNjaGVtYUV4cHJlc3Npb25zKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBsaXN0IGV4cHJlc3Npb25zXG4gICAgY29uc3QgcHJlc2V0TmFtZVNldCA9IG5ldyBTZXQ8c3RyaW5nPihPYmplY3QudmFsdWVzKFZSTUV4cHJlc3Npb25QcmVzZXROYW1lKSk7XG4gICAgY29uc3QgbmFtZVNjaGVtYUV4cHJlc3Npb25NYXAgPSBuZXcgTWFwPHN0cmluZywgVjFWUk1TY2hlbWEuRXhwcmVzc2lvbj4oKTtcblxuICAgIGlmIChzY2hlbWFFeHByZXNzaW9ucy5wcmVzZXQgIT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmVudHJpZXMoc2NoZW1hRXhwcmVzc2lvbnMucHJlc2V0KS5mb3JFYWNoKChbbmFtZSwgc2NoZW1hRXhwcmVzc2lvbl0pID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYUV4cHJlc3Npb24gPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyB0eXBlc2NyaXB0XG5cbiAgICAgICAgaWYgKCFwcmVzZXROYW1lU2V0LmhhcyhuYW1lKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogVW5rbm93biBwcmVzZXQgbmFtZSBcIiR7bmFtZX1cIiBkZXRlY3RlZC4gSWdub3JpbmcgdGhlIGV4cHJlc3Npb25gKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lU2NoZW1hRXhwcmVzc2lvbk1hcC5zZXQobmFtZSwgc2NoZW1hRXhwcmVzc2lvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hRXhwcmVzc2lvbnMuY3VzdG9tICE9IG51bGwpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYUV4cHJlc3Npb25zLmN1c3RvbSkuZm9yRWFjaCgoW25hbWUsIHNjaGVtYUV4cHJlc3Npb25dKSA9PiB7XG4gICAgICAgIGlmIChwcmVzZXROYW1lU2V0LmhhcyhuYW1lKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiBDdXN0b20gZXhwcmVzc2lvbiBjYW5ub3QgaGF2ZSBwcmVzZXQgbmFtZSBcIiR7bmFtZX1cIi4gSWdub3JpbmcgdGhlIGV4cHJlc3Npb25gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZVNjaGVtYUV4cHJlc3Npb25NYXAuc2V0KG5hbWUsIHNjaGVtYUV4cHJlc3Npb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcHJlcGFyZSBtYW5hZ2VyXG4gICAgY29uc3QgbWFuYWdlciA9IG5ldyBWUk1FeHByZXNzaW9uTWFuYWdlcigpO1xuXG4gICAgLy8gbG9hZCBleHByZXNzaW9uc1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgQXJyYXkuZnJvbShuYW1lU2NoZW1hRXhwcmVzc2lvbk1hcC5lbnRyaWVzKCkpLm1hcChhc3luYyAoW25hbWUsIHNjaGVtYUV4cHJlc3Npb25dKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgVlJNRXhwcmVzc2lvbihuYW1lKTtcbiAgICAgICAgZ2x0Zi5zY2VuZS5hZGQoZXhwcmVzc2lvbik7XG5cbiAgICAgICAgZXhwcmVzc2lvbi5pc0JpbmFyeSA9IHNjaGVtYUV4cHJlc3Npb24uaXNCaW5hcnkgPz8gZmFsc2U7XG4gICAgICAgIGV4cHJlc3Npb24ub3ZlcnJpZGVCbGluayA9IHNjaGVtYUV4cHJlc3Npb24ub3ZlcnJpZGVCbGluayA/PyAnbm9uZSc7XG4gICAgICAgIGV4cHJlc3Npb24ub3ZlcnJpZGVMb29rQXQgPSBzY2hlbWFFeHByZXNzaW9uLm92ZXJyaWRlTG9va0F0ID8/ICdub25lJztcbiAgICAgICAgZXhwcmVzc2lvbi5vdmVycmlkZU1vdXRoID0gc2NoZW1hRXhwcmVzc2lvbi5vdmVycmlkZU1vdXRoID8/ICdub25lJztcblxuICAgICAgICBzY2hlbWFFeHByZXNzaW9uLm1vcnBoVGFyZ2V0QmluZHM/LmZvckVhY2goYXN5bmMgKGJpbmQpID0+IHtcbiAgICAgICAgICBpZiAoYmluZC5ub2RlID09PSB1bmRlZmluZWQgfHwgYmluZC5pbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcHJpbWl0aXZlcyA9IChhd2FpdCBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZShnbHRmLCBiaW5kLm5vZGUpKSE7XG4gICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRJbmRleCA9IGJpbmQuaW5kZXg7XG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgbWVzaCBoYXMgdGhlIHRhcmdldCBtb3JwaCB0YXJnZXRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhcHJpbWl0aXZlcy5ldmVyeShcbiAgICAgICAgICAgICAgKHByaW1pdGl2ZSkgPT5cbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHByaW1pdGl2ZS5tb3JwaFRhcmdldEluZmx1ZW5jZXMpICYmXG4gICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRJbmRleCA8IHByaW1pdGl2ZS5tb3JwaFRhcmdldEluZmx1ZW5jZXMubGVuZ3RoLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogJHtzY2hlbWFFeHByZXNzaW9uLm5hbWV9IGF0dGVtcHRzIHRvIGluZGV4IG1vcnBoICMke21vcnBoVGFyZ2V0SW5kZXh9IGJ1dCBub3QgZm91bmQuYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXhwcmVzc2lvbi5hZGRCaW5kKFxuICAgICAgICAgICAgbmV3IFZSTUV4cHJlc3Npb25Nb3JwaFRhcmdldEJpbmQoe1xuICAgICAgICAgICAgICBwcmltaXRpdmVzLFxuICAgICAgICAgICAgICBpbmRleDogbW9ycGhUYXJnZXRJbmRleCxcbiAgICAgICAgICAgICAgd2VpZ2h0OiBiaW5kLndlaWdodCA/PyAxLjAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2NoZW1hRXhwcmVzc2lvbi5tYXRlcmlhbENvbG9yQmluZHMgfHwgc2NoZW1hRXhwcmVzc2lvbi50ZXh0dXJlVHJhbnNmb3JtQmluZHMpIHtcbiAgICAgICAgICAvLyBsaXN0IHVwIGV2ZXJ5IG1hdGVyaWFsIGluIGBnbHRmLnNjZW5lYFxuICAgICAgICAgIGNvbnN0IGdsdGZNYXRlcmlhbHM6IFRIUkVFLk1hdGVyaWFsW10gPSBbXTtcbiAgICAgICAgICBnbHRmLnNjZW5lLnRyYXZlcnNlKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gKG9iamVjdCBhcyBhbnkpLm1hdGVyaWFsIGFzIFRIUkVFLk1hdGVyaWFsIHwgVEhSRUUuTWF0ZXJpYWxbXSB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRlcmlhbCkpIHtcbiAgICAgICAgICAgICAgICBnbHRmTWF0ZXJpYWxzLnB1c2goLi4ubWF0ZXJpYWwpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdsdGZNYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNjaGVtYUV4cHJlc3Npb24ubWF0ZXJpYWxDb2xvckJpbmRzPy5mb3JFYWNoKGFzeW5jIChiaW5kKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBnbHRmTWF0ZXJpYWxzLmZpbHRlcigobWF0ZXJpYWwpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9IHRoaXMucGFyc2VyLmFzc29jaWF0aW9ucy5nZXQobWF0ZXJpYWwpPy5tYXRlcmlhbHM7XG4gICAgICAgICAgICAgIHJldHVybiBiaW5kLm1hdGVyaWFsID09PSBtYXRlcmlhbEluZGV4O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKChtYXRlcmlhbCkgPT4ge1xuICAgICAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQoXG4gICAgICAgICAgICAgICAgbmV3IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCh7XG4gICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGJpbmQudHlwZSxcbiAgICAgICAgICAgICAgICAgIHRhcmdldFZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoKS5mcm9tQXJyYXkoYmluZC50YXJnZXRWYWx1ZSksXG4gICAgICAgICAgICAgICAgICB0YXJnZXRBbHBoYTogYmluZC50YXJnZXRWYWx1ZVszXSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc2NoZW1hRXhwcmVzc2lvbi50ZXh0dXJlVHJhbnNmb3JtQmluZHM/LmZvckVhY2goYXN5bmMgKGJpbmQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdsdGZNYXRlcmlhbHMuZmlsdGVyKChtYXRlcmlhbCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy5wYXJzZXIuYXNzb2NpYXRpb25zLmdldChtYXRlcmlhbCk/Lm1hdGVyaWFscztcbiAgICAgICAgICAgICAgcmV0dXJuIGJpbmQubWF0ZXJpYWwgPT09IG1hdGVyaWFsSW5kZXg7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XG4gICAgICAgICAgICAgIGV4cHJlc3Npb24uYWRkQmluZChcbiAgICAgICAgICAgICAgICBuZXcgVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kKHtcbiAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBuZXcgVEhSRUUuVmVjdG9yMigpLmZyb21BcnJheShiaW5kLm9mZnNldCA/PyBbMC4wLCAwLjBdKSxcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiBuZXcgVEhSRUUuVmVjdG9yMigpLmZyb21BcnJheShiaW5kLnNjYWxlID8/IFsxLjAsIDEuMF0pLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYW5hZ2VyLnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICByZXR1cm4gbWFuYWdlcjtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YwSW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTUV4cHJlc3Npb25NYW5hZ2VyIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSB2cm1cbiAgICBjb25zdCB2cm1FeHQgPSBqc29uLmV4dGVuc2lvbnM/LlZSTSBhcyBWMFZSTS5WUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCF2cm1FeHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYUJsZW5kU2hhcGUgPSB2cm1FeHQuYmxlbmRTaGFwZU1hc3RlcjtcbiAgICBpZiAoIXNjaGVtYUJsZW5kU2hhcGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG1hbmFnZXIgPSBuZXcgVlJNRXhwcmVzc2lvbk1hbmFnZXIoKTtcblxuICAgIGNvbnN0IHNjaGVtYUJsZW5kU2hhcGVHcm91cHMgPSBzY2hlbWFCbGVuZFNoYXBlLmJsZW5kU2hhcGVHcm91cHM7XG4gICAgaWYgKCFzY2hlbWFCbGVuZFNoYXBlR3JvdXBzKSB7XG4gICAgICByZXR1cm4gbWFuYWdlcjtcbiAgICB9XG5cbiAgICBjb25zdCBibGVuZFNoYXBlTmFtZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBzY2hlbWFCbGVuZFNoYXBlR3JvdXBzLm1hcChhc3luYyAoc2NoZW1hR3JvdXApID0+IHtcbiAgICAgICAgY29uc3QgdjBQcmVzZXROYW1lID0gc2NoZW1hR3JvdXAucHJlc2V0TmFtZTtcbiAgICAgICAgY29uc3QgdjFQcmVzZXROYW1lID1cbiAgICAgICAgICAodjBQcmVzZXROYW1lICE9IG51bGwgJiYgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbi52MHYxUHJlc2V0TmFtZU1hcFt2MFByZXNldE5hbWVdKSB8fCBudWxsO1xuICAgICAgICBjb25zdCBuYW1lID0gdjFQcmVzZXROYW1lID8/IHNjaGVtYUdyb3VwLm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogT25lIG9mIGN1c3RvbSBleHByZXNzaW9ucyBoYXMgbm8gbmFtZS4gSWdub3JpbmcgdGhlIGV4cHJlc3Npb24nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkdXBsaWNhdGlvbiBjaGVja1xuICAgICAgICBpZiAoYmxlbmRTaGFwZU5hbWVTZXQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46IEFuIGV4cHJlc3Npb24gcHJlc2V0ICR7djBQcmVzZXROYW1lfSBoYXMgZHVwbGljYXRlZCBlbnRyaWVzLiBJZ25vcmluZyB0aGUgZXhwcmVzc2lvbmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBibGVuZFNoYXBlTmFtZVNldC5hZGQobmFtZSk7XG5cbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IG5ldyBWUk1FeHByZXNzaW9uKG5hbWUpO1xuICAgICAgICBnbHRmLnNjZW5lLmFkZChleHByZXNzaW9uKTtcblxuICAgICAgICBleHByZXNzaW9uLmlzQmluYXJ5ID0gc2NoZW1hR3JvdXAuaXNCaW5hcnkgPz8gZmFsc2U7XG4gICAgICAgIC8vIHYwIGRvZXNuJ3QgaGF2ZSBpZ25vcmUgcHJvcGVydGllc1xuXG4gICAgICAgIC8vIEJpbmQgbW9ycGhUYXJnZXRcbiAgICAgICAgaWYgKHNjaGVtYUdyb3VwLmJpbmRzKSB7XG4gICAgICAgICAgc2NoZW1hR3JvdXAuYmluZHMuZm9yRWFjaChhc3luYyAoYmluZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJpbmQubWVzaCA9PT0gdW5kZWZpbmVkIHx8IGJpbmQuaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5vZGVzVXNpbmdNZXNoOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICAgICAganNvbi5ub2Rlcz8uZm9yRWFjaCgobm9kZSwgaSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobm9kZS5tZXNoID09PSBiaW5kLm1lc2gpIHtcbiAgICAgICAgICAgICAgICBub2Rlc1VzaW5nTWVzaC5wdXNoKGkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRJbmRleCA9IGJpbmQuaW5kZXg7XG5cbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICBub2Rlc1VzaW5nTWVzaC5tYXAoYXN5bmMgKG5vZGVJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZXMgPSAoYXdhaXQgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGUoZ2x0Ziwgbm9kZUluZGV4KSkhO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIG1lc2ggaGFzIHRoZSB0YXJnZXQgbW9ycGggdGFyZ2V0XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgIXByaW1pdGl2ZXMuZXZlcnkoXG4gICAgICAgICAgICAgICAgICAgIChwcmltaXRpdmUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShwcmltaXRpdmUubW9ycGhUYXJnZXRJbmZsdWVuY2VzKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0SW5kZXggPCBwcmltaXRpdmUubW9ycGhUYXJnZXRJbmZsdWVuY2VzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgYFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46ICR7c2NoZW1hR3JvdXAubmFtZX0gYXR0ZW1wdHMgdG8gaW5kZXggJHttb3JwaFRhcmdldEluZGV4fXRoIG1vcnBoIGJ1dCBub3QgZm91bmQuYCxcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbi5hZGRCaW5kKFxuICAgICAgICAgICAgICAgICAgbmV3IFZSTUV4cHJlc3Npb25Nb3JwaFRhcmdldEJpbmQoe1xuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmVzLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogbW9ycGhUYXJnZXRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAwLjAxICogKGJpbmQud2VpZ2h0ID8/IDEwMCksIC8vIG5hcnJvd2luZyB0aGUgcmFuZ2UgZnJvbSBbIDAuMCAtIDEwMC4wIF0gdG8gWyAwLjAgLSAxLjAgXVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmluZCBNYXRlcmlhbENvbG9yIGFuZCBUZXh0dXJlVHJhbnNmb3JtXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsVmFsdWVzID0gc2NoZW1hR3JvdXAubWF0ZXJpYWxWYWx1ZXM7XG4gICAgICAgIGlmIChtYXRlcmlhbFZhbHVlcyAmJiBtYXRlcmlhbFZhbHVlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBtYXRlcmlhbFZhbHVlcy5mb3JFYWNoKChtYXRlcmlhbFZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxOYW1lID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgbWF0ZXJpYWxWYWx1ZS5wcm9wZXJ0eU5hbWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICBtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogXHUzMEEyXHUzMEQwXHUzMEJGXHUzMEZDXHUzMDZFXHUzMEFBXHUzMEQ2XHUzMEI4XHUzMEE3XHUzMEFGXHUzMEM4XHUzMDZCXHU4QTJEXHU1QjlBXHUzMDU1XHUzMDhDXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMERFXHUzMEM2XHUzMEVBXHUzMEEyXHUzMEVCXHUzMDZFXHU1MTg1XHUzMDRCXHUzMDg5XG4gICAgICAgICAgICAgKiBtYXRlcmlhbFZhbHVlXHUzMDY3XHU2MzA3XHU1QjlBXHUzMDU1XHUzMDhDXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMERFXHUzMEM2XHUzMEVBXHUzMEEyXHUzMEVCXHUzMDkyXHU5NkM2XHUzMDgxXHUzMDhCXHUzMDAyXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogXHU3Mjc5XHU1QjlBXHUzMDZCXHUzMDZGXHU1NDBEXHU1MjREXHUzMDkyXHU0RjdGXHU3NTI4XHUzMDU5XHUzMDhCXHUzMDAyXG4gICAgICAgICAgICAgKiBcdTMwQTJcdTMwQTZcdTMwQzhcdTMwRTlcdTMwQTRcdTMwRjNcdTYzQ0ZcdTc1M0JcdTc1MjhcdTMwNkVcdTMwREVcdTMwQzZcdTMwRUFcdTMwQTJcdTMwRUJcdTMwODJcdTU0MENcdTY2NDJcdTMwNkJcdTk2QzZcdTMwODFcdTMwOEJcdTMwMDJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzOiBUSFJFRS5NYXRlcmlhbFtdID0gW107XG4gICAgICAgICAgICBnbHRmLnNjZW5lLnRyYXZlcnNlKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgaWYgKChvYmplY3QgYXMgYW55KS5tYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsOiBUSFJFRS5NYXRlcmlhbFtdIHwgVEhSRUUuTWF0ZXJpYWwgPSAob2JqZWN0IGFzIGFueSkubWF0ZXJpYWw7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0ZXJpYWwpKSB7XG4gICAgICAgICAgICAgICAgICBtYXRlcmlhbHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgLi4ubWF0ZXJpYWwuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgIChtdGwpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAobXRsLm5hbWUgPT09IG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxOYW1lISB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtdGwubmFtZSA9PT0gbWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbE5hbWUhICsgJyAoT3V0bGluZSknKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLmluZGV4T2YobXRsKSA9PT0gLTEsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0ZXJpYWwubmFtZSA9PT0gbWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbE5hbWUgJiYgbWF0ZXJpYWxzLmluZGV4T2YobWF0ZXJpYWwpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsUHJvcGVydHlOYW1lID0gbWF0ZXJpYWxWYWx1ZS5wcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IHtcbiAgICAgICAgICAgICAgLy8gVGV4dHVyZVRyYW5zZm9ybUJpbmRcbiAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsUHJvcGVydHlOYW1lID09PSAnX01haW5UZXhfU1QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBuZXcgVEhSRUUuVmVjdG9yMihtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlIVswXSwgbWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSFbMV0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IyKG1hdGVyaWFsVmFsdWUudGFyZ2V0VmFsdWUhWzJdLCBtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlIVszXSk7XG5cbiAgICAgICAgICAgICAgICBvZmZzZXQueSA9IDEuMCAtIG9mZnNldC55IC0gc2NhbGUueTtcblxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb24uYWRkQmluZChcbiAgICAgICAgICAgICAgICAgIG5ldyBWUk1FeHByZXNzaW9uVGV4dHVyZVRyYW5zZm9ybUJpbmQoe1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBNYXRlcmlhbENvbG9yQmluZFxuICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbENvbG9yVHlwZSA9IHYwRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JNYXBbbWF0ZXJpYWxQcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICBpZiAobWF0ZXJpYWxDb2xvclR5cGUpIHtcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQoXG4gICAgICAgICAgICAgICAgICBuZXcgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JCaW5kKHtcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IG1hdGVyaWFsQ29sb3JUeXBlLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRWYWx1ZTogbmV3IFRIUkVFLkNvbG9yKCkuZnJvbUFycmF5KG1hdGVyaWFsVmFsdWUudGFyZ2V0VmFsdWUhKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QWxwaGE6IG1hdGVyaWFsVmFsdWUudGFyZ2V0VmFsdWUhWzNdLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihtYXRlcmlhbFByb3BlcnR5TmFtZSArICcgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYW5hZ2VyLnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICByZXR1cm4gbWFuYWdlcjtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBHTFRGIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5cbmZ1bmN0aW9uIGV4dHJhY3RQcmltaXRpdmVzSW50ZXJuYWwoZ2x0ZjogR0xURiwgbm9kZUluZGV4OiBudW1iZXIsIG5vZGU6IFRIUkVFLk9iamVjdDNEKTogVEhSRUUuTWVzaFtdIHwgbnVsbCB7XG4gIGNvbnN0IGpzb24gPSBnbHRmLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgLyoqXG4gICAqIExldCdzIGxpc3QgdXAgZXZlcnkgcG9zc2libGUgcGF0dGVybnMgdGhhdCBwYXJzZWQgZ2x0ZiBub2RlcyB3aXRoIGEgbWVzaCBjYW4gaGF2ZSwsLFxuICAgKlxuICAgKiBcIipcIiBpbmRpY2F0ZXMgdGhhdCB0aG9zZSBtZXNoZXMgc2hvdWxkIGJlIGxpc3RlZCB1cCB1c2luZyB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBhIHNpZ25sZSBwcmltaXRpdmUpXG4gICAqXG4gICAqIC0gYFRIUkVFLk1lc2hgOiBUaGUgb25seSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKlxuICAgKiAjIyMgQSBub2RlIHdpdGggYSAobWVzaCwgbXVsdGlwbGUgcHJpbWl0aXZlcylcbiAgICpcbiAgICogLSBgVEhSRUUuR3JvdXBgOiBUaGUgcm9vdCBvZiB0aGUgbWVzaFxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAqXG4gICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICgyKSAqXG4gICAqXG4gICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKSBBTkQgKGEgY2hpbGQgd2l0aCBhIG1lc2gsIGEgc2luZ2xlIHByaW1pdGl2ZSlcbiAgICpcbiAgICogLSBgVEhSRUUuR3JvdXBgOiBUaGUgcm9vdCBvZiB0aGUgbWVzaFxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAqXG4gICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICgyKSAqXG4gICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIGEgTUVTSCBPRiBUSEUgQ0hJTERcbiAgICpcbiAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpIEFORCAoYSBjaGlsZCB3aXRoIGEgbWVzaCwgbXVsdGlwbGUgcHJpbWl0aXZlcylcbiAgICpcbiAgICogLSBgVEhSRUUuR3JvdXBgOiBUaGUgcm9vdCBvZiB0aGUgbWVzaFxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAqXG4gICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICgyKSAqXG4gICAqICAgLSBgVEhSRUUuR3JvdXBgOiBUaGUgcm9vdCBvZiBhIE1FU0ggT0YgVEhFIENISUxEXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggb2YgdGhlIGNoaWxkXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggb2YgdGhlIGNoaWxkICgyKVxuICAgKlxuICAgKiAjIyMgQSBub2RlIHdpdGggYSAobWVzaCwgbXVsdGlwbGUgcHJpbWl0aXZlcykgQlVUIHRoZSBub2RlIGlzIGEgYm9uZVxuICAgKlxuICAgKiAtIGBUSFJFRS5Cb25lYDogVGhlIHJvb3Qgb2YgdGhlIG5vZGUsIGFzIGEgYm9uZVxuICAgKiAgIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgdGhlIG1lc2hcbiAgICogICAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAqXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKDIpICpcbiAgICpcbiAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpIEFORCAoYSBjaGlsZCB3aXRoIGEgbWVzaCwgbXVsdGlwbGUgcHJpbWl0aXZlcykgQlVUIHRoZSBub2RlIGlzIGEgYm9uZVxuICAgKlxuICAgKiAtIGBUSFJFRS5Cb25lYDogVGhlIHJvb3Qgb2YgdGhlIG5vZGUsIGFzIGEgYm9uZVxuICAgKiAgIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgdGhlIG1lc2hcbiAgICogICAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAqXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKDIpICpcbiAgICogICAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIGEgTUVTSCBPRiBUSEUgQ0hJTERcbiAgICogICAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCBvZiB0aGUgY2hpbGRcbiAgICogICAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCBvZiB0aGUgY2hpbGQgKDIpXG4gICAqXG4gICAqIC4uLkkgd2lsbCB0YWtlIGEgc3RyYXRlZ3kgdGhhdCB0cmF2ZXJzZXMgdGhlIHJvb3Qgb2YgdGhlIG5vZGUgYW5kIHRha2UgZmlyc3QgKHByaW1pdGl2ZUNvdW50KSBtZXNoZXMuXG4gICAqL1xuXG4gIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBub2RlIGhhcyBhIG1lc2hcbiAgY29uc3Qgc2NoZW1hTm9kZSA9IGpzb24ubm9kZXM/Lltub2RlSW5kZXhdO1xuICBpZiAoc2NoZW1hTm9kZSA9PSBudWxsKSB7XG4gICAgY29uc29sZS53YXJuKGBleHRyYWN0UHJpbWl0aXZlc0ludGVybmFsOiBBdHRlbXB0IHRvIHVzZSBub2Rlc1ske25vZGVJbmRleH1dIG9mIGdsVEYgYnV0IHRoZSBub2RlIGRvZXNuJ3QgZXhpc3RgKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1lc2hJbmRleCA9IHNjaGVtYU5vZGUubWVzaDtcbiAgaWYgKG1lc2hJbmRleCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBIb3cgbWFueSBwcmltaXRpdmVzIHRoZSBtZXNoIGhhcz9cbiAgY29uc3Qgc2NoZW1hTWVzaCA9IGpzb24ubWVzaGVzPy5bbWVzaEluZGV4XTtcbiAgaWYgKHNjaGVtYU1lc2ggPT0gbnVsbCkge1xuICAgIGNvbnNvbGUud2FybihgZXh0cmFjdFByaW1pdGl2ZXNJbnRlcm5hbDogQXR0ZW1wdCB0byB1c2UgbWVzaGVzWyR7bWVzaEluZGV4fV0gb2YgZ2xURiBidXQgdGhlIG1lc2ggZG9lc24ndCBleGlzdGApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcHJpbWl0aXZlQ291bnQgPSBzY2hlbWFNZXNoLnByaW1pdGl2ZXMubGVuZ3RoO1xuXG4gIC8vIFRyYXZlcnNlIHRoZSBub2RlIGFuZCB0YWtlIGZpcnN0IChwcmltaXRpdmVDb3VudCkgbWVzaGVzXG4gIGNvbnN0IHByaW1pdGl2ZXM6IFRIUkVFLk1lc2hbXSA9IFtdO1xuICBub2RlLnRyYXZlcnNlKChvYmplY3QpID0+IHtcbiAgICBpZiAocHJpbWl0aXZlcy5sZW5ndGggPCBwcmltaXRpdmVDb3VudCkge1xuICAgICAgaWYgKChvYmplY3QgYXMgYW55KS5pc01lc2gpIHtcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKG9iamVjdCBhcyBUSFJFRS5NZXNoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmltaXRpdmVzO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgcHJpbWl0aXZlcyAoIGBUSFJFRS5NZXNoW11gICkgb2YgYSBub2RlIGZyb20gYSBsb2FkZWQgR0xURi5cbiAqIFRoZSBtYWluIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBkaXN0aW5ndWlzaCBwcmltaXRpdmVzIGFuZCBjaGlsZHJlbiBmcm9tIGEgbm9kZSB0aGF0IGhhcyBib3RoIG1lc2hlcyBhbmQgY2hpbGRyZW4uXG4gKlxuICogSXQgdXRpbGl6ZXMgdGhlIGJlaGF2aW9yIHRoYXQgR0xURkxvYWRlciBhZGRzIG1lc2ggcHJpbWl0aXZlcyB0byB0aGUgbm9kZSBvYmplY3QgKCBgVEhSRUUuR3JvdXBgICkgZmlyc3QgdGhlbiBhZGRzIGl0cyBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gZ2x0ZiBBIEdMVEYgb2JqZWN0IHRha2VuIGZyb20gR0xURkxvYWRlclxuICogQHBhcmFtIG5vZGVJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5vZGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlKGdsdGY6IEdMVEYsIG5vZGVJbmRleDogbnVtYmVyKTogUHJvbWlzZTxUSFJFRS5NZXNoW10gfCBudWxsPiB7XG4gIGNvbnN0IG5vZGU6IFRIUkVFLk9iamVjdDNEID0gYXdhaXQgZ2x0Zi5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgnbm9kZScsIG5vZGVJbmRleCk7XG4gIHJldHVybiBleHRyYWN0UHJpbWl0aXZlc0ludGVybmFsKGdsdGYsIG5vZGVJbmRleCwgbm9kZSk7XG59XG5cbi8qKlxuICogRXh0cmFjdCBwcmltaXRpdmVzICggYFRIUkVFLk1lc2hbXWAgKSBvZiBub2RlcyBmcm9tIGEgbG9hZGVkIEdMVEYuXG4gKiBTZWUge0BsaW5rIGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlfSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEl0IHJldHVybnMgYSBtYXAgZnJvbSBub2RlIGluZGV4IHRvIGV4dHJhY3Rpb24gcmVzdWx0LlxuICogSWYgYSBub2RlIGRvZXMgbm90IGhhdmUgYSBtZXNoLCB0aGUgZW50cnkgZm9yIHRoZSBub2RlIHdpbGwgbm90IGJlIHB1dCBpbiB0aGUgcmV0dXJuaW5nIG1hcC5cbiAqXG4gKiBAcGFyYW0gZ2x0ZiBBIEdMVEYgb2JqZWN0IHRha2VuIGZyb20gR0xURkxvYWRlclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGVzKGdsdGY6IEdMVEYpOiBQcm9taXNlPE1hcDxudW1iZXIsIFRIUkVFLk1lc2hbXT4+IHtcbiAgY29uc3Qgbm9kZXM6IFRIUkVFLk9iamVjdDNEW10gPSBhd2FpdCBnbHRmLnBhcnNlci5nZXREZXBlbmRlbmNpZXMoJ25vZGUnKTtcbiAgY29uc3QgbWFwID0gbmV3IE1hcDxudW1iZXIsIFRIUkVFLk1lc2hbXT4oKTtcblxuICBub2Rlcy5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGV4dHJhY3RQcmltaXRpdmVzSW50ZXJuYWwoZ2x0ZiwgaW5kZXgsIG5vZGUpO1xuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgbWFwLnNldChpbmRleCwgcmVzdWx0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtYXA7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbmV4cG9ydCBjb25zdCBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSA9IHtcbiAgQWE6ICdhYScsXG4gIEloOiAnaWgnLFxuICBPdTogJ291JyxcbiAgRWU6ICdlZScsXG4gIE9oOiAnb2gnLFxuICBCbGluazogJ2JsaW5rJyxcbiAgSGFwcHk6ICdoYXBweScsXG4gIEFuZ3J5OiAnYW5ncnknLFxuICBTYWQ6ICdzYWQnLFxuICBSZWxheGVkOiAncmVsYXhlZCcsXG4gIExvb2tVcDogJ2xvb2tVcCcsXG4gIFN1cnByaXNlZDogJ3N1cnByaXNlZCcsXG4gIExvb2tEb3duOiAnbG9va0Rvd24nLFxuICBMb29rTGVmdDogJ2xvb2tMZWZ0JyxcbiAgTG9va1JpZ2h0OiAnbG9va1JpZ2h0JyxcbiAgQmxpbmtMZWZ0OiAnYmxpbmtMZWZ0JyxcbiAgQmxpbmtSaWdodDogJ2JsaW5rUmlnaHQnLFxuICBOZXV0cmFsOiAnbmV1dHJhbCcsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSA9ICh0eXBlb2YgVlJNRXhwcmVzc2lvblByZXNldE5hbWUpW2tleW9mIHR5cGVvZiBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZV07XG4iLCAiLyoqXG4gKiBDbGFtcCB0aGUgaW5wdXQgdmFsdWUgd2l0aGluIFswLjAgLSAxLjBdLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgaW5wdXQgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdHVyYXRlKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIDEuMCksIDAuMCk7XG59XG4iLCAiaW1wb3J0IHsgVlJNRXhwcmVzc2lvblByZXNldE5hbWUgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25QcmVzZXROYW1lJztcbmltcG9ydCB7IHNhdHVyYXRlIH0gZnJvbSAnLi4vdXRpbHMvc2F0dXJhdGUnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIFZSTUV4cHJlc3Npb25NYW5hZ2VyIHtcbiAgLyoqXG4gICAqIEEgc2V0IG9mIG5hbWUgb3IgcHJlc2V0IG5hbWUgb2YgZXhwcmVzc2lvbnMgdGhhdCB3aWxsIGJlIG92ZXJyaWRkZW4gYnkge0BsaW5rIFZSTUV4cHJlc3Npb24ub3ZlcnJpZGVCbGlua30uXG4gICAqL1xuICBwdWJsaWMgYmxpbmtFeHByZXNzaW9uTmFtZXMgPSBbJ2JsaW5rJywgJ2JsaW5rTGVmdCcsICdibGlua1JpZ2h0J107XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIG5hbWUgb3IgcHJlc2V0IG5hbWUgb2YgZXhwcmVzc2lvbnMgdGhhdCB3aWxsIGJlIG92ZXJyaWRkZW4gYnkge0BsaW5rIFZSTUV4cHJlc3Npb24ub3ZlcnJpZGVMb29rQXR9LlxuICAgKi9cbiAgcHVibGljIGxvb2tBdEV4cHJlc3Npb25OYW1lcyA9IFsnbG9va0xlZnQnLCAnbG9va1JpZ2h0JywgJ2xvb2tVcCcsICdsb29rRG93biddO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBuYW1lIG9yIHByZXNldCBuYW1lIG9mIGV4cHJlc3Npb25zIHRoYXQgd2lsbCBiZSBvdmVycmlkZGVuIGJ5IHtAbGluayBWUk1FeHByZXNzaW9uLm92ZXJyaWRlTW91dGh9LlxuICAgKi9cbiAgcHVibGljIG1vdXRoRXhwcmVzc2lvbk5hbWVzID0gWydhYScsICdlZScsICdpaCcsICdvaCcsICdvdSddO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiB7QGxpbmsgVlJNRXhwcmVzc2lvbn0uXG4gICAqIFdoZW4geW91IHdhbnQgdG8gcmVnaXN0ZXIgZXhwcmVzc2lvbnMsIHVzZSB7QGxpbmsgcmVnaXN0ZXJFeHByZXNzaW9ufVxuICAgKi9cbiAgcHJpdmF0ZSBfZXhwcmVzc2lvbnM6IFZSTUV4cHJlc3Npb25bXSA9IFtdO1xuICBwdWJsaWMgZ2V0IGV4cHJlc3Npb25zKCk6IFZSTUV4cHJlc3Npb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cHJlc3Npb25zLmNvbmNhdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWFwIGZyb20gbmFtZSB0byBleHByZXNzaW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfZXhwcmVzc2lvbk1hcDogeyBbbmFtZTogc3RyaW5nXTogVlJNRXhwcmVzc2lvbiB9ID0ge307XG4gIHB1YmxpYyBnZXQgZXhwcmVzc2lvbk1hcCgpOiB7IFtuYW1lOiBzdHJpbmddOiBWUk1FeHByZXNzaW9uIH0ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9leHByZXNzaW9uTWFwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1hcCBmcm9tIG5hbWUgdG8gZXhwcmVzc2lvbiwgYnV0IGV4Y2x1ZGluZyBjdXN0b20gZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHByZXNldEV4cHJlc3Npb25NYXAoKTogeyBbbmFtZSBpbiBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZV0/OiBWUk1FeHByZXNzaW9uIH0ge1xuICAgIGNvbnN0IHJlc3VsdDogeyBbbmFtZSBpbiBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZV0/OiBWUk1FeHByZXNzaW9uIH0gPSB7fTtcblxuICAgIGNvbnN0IHByZXNldE5hbWVTZXQgPSBuZXcgU2V0PHN0cmluZz4oT2JqZWN0LnZhbHVlcyhWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSkpO1xuXG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5fZXhwcmVzc2lvbk1hcCkuZm9yRWFjaCgoW25hbWUsIGV4cHJlc3Npb25dKSA9PiB7XG4gICAgICBpZiAocHJlc2V0TmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgcmVzdWx0W25hbWUgYXMgVlJNRXhwcmVzc2lvblByZXNldE5hbWVdID0gZXhwcmVzc2lvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQSBtYXAgZnJvbSBuYW1lIHRvIGV4cHJlc3Npb24sIGJ1dCBleGNsdWRpbmcgcHJlc2V0IGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIGdldCBjdXN0b21FeHByZXNzaW9uTWFwKCk6IHsgW25hbWU6IHN0cmluZ106IFZSTUV4cHJlc3Npb24gfSB7XG4gICAgY29uc3QgcmVzdWx0OiB7IFtuYW1lOiBzdHJpbmddOiBWUk1FeHByZXNzaW9uIH0gPSB7fTtcblxuICAgIGNvbnN0IHByZXNldE5hbWVTZXQgPSBuZXcgU2V0PHN0cmluZz4oT2JqZWN0LnZhbHVlcyhWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSkpO1xuXG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5fZXhwcmVzc2lvbk1hcCkuZm9yRWFjaCgoW25hbWUsIGV4cHJlc3Npb25dKSA9PiB7XG4gICAgICBpZiAoIXByZXNldE5hbWVTZXQuaGFzKG5hbWUpKSB7XG4gICAgICAgIHJlc3VsdFtuYW1lXSA9IGV4cHJlc3Npb247XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9LlxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IHRoZSBnaXZlbiB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9IGludG8gdGhpcyBvbmUuXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0geW91IHdhbnQgdG8gY29weVxuICAgKiBAcmV0dXJucyB0aGlzXG4gICAqL1xuICBwdWJsaWMgY29weShzb3VyY2U6IFZSTUV4cHJlc3Npb25NYW5hZ2VyKTogdGhpcyB7XG4gICAgLy8gZmlyc3QgdW5yZWdpc3RlciBhbGwgdGhlIGV4cHJlc3Npb24gaXQgaGFzXG4gICAgY29uc3QgZXhwcmVzc2lvbnMgPSB0aGlzLl9leHByZXNzaW9ucy5jb25jYXQoKTtcbiAgICBleHByZXNzaW9ucy5mb3JFYWNoKChleHByZXNzaW9uKSA9PiB7XG4gICAgICB0aGlzLnVucmVnaXN0ZXJFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgIH0pO1xuXG4gICAgLy8gdGhlbiByZWdpc3RlciBhbGwgdGhlIGV4cHJlc3Npb24gb2YgdGhlIHNvdXJjZVxuICAgIHNvdXJjZS5fZXhwcmVzc2lvbnMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgdGhpcy5yZWdpc3RlckV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgfSk7XG5cbiAgICAvLyBjb3B5IHJlbWFpbmluZyBtZW1iZXJzXG4gICAgdGhpcy5ibGlua0V4cHJlc3Npb25OYW1lcyA9IHNvdXJjZS5ibGlua0V4cHJlc3Npb25OYW1lcy5jb25jYXQoKTtcbiAgICB0aGlzLmxvb2tBdEV4cHJlc3Npb25OYW1lcyA9IHNvdXJjZS5sb29rQXRFeHByZXNzaW9uTmFtZXMuY29uY2F0KCk7XG4gICAgdGhpcy5tb3V0aEV4cHJlc3Npb25OYW1lcyA9IHNvdXJjZS5tb3V0aEV4cHJlc3Npb25OYW1lcy5jb25jYXQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGlzIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0uXG4gICAqIEByZXR1cm5zIENvcGllZCB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9XG4gICAqL1xuICBwdWJsaWMgY2xvbmUoKTogVlJNRXhwcmVzc2lvbk1hbmFnZXIge1xuICAgIHJldHVybiBuZXcgVlJNRXhwcmVzc2lvbk1hbmFnZXIoKS5jb3B5KHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJlZ2lzdGVyZWQgZXhwcmVzc2lvbi5cbiAgICogSWYgaXQgY2Fubm90IGZpbmQgYW4gZXhwcmVzc2lvbiwgaXQgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb3IgcHJlc2V0IG5hbWUgb2YgdGhlIGV4cHJlc3Npb25cbiAgICovXG4gIHB1YmxpYyBnZXRFeHByZXNzaW9uKG5hbWU6IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIHwgc3RyaW5nKTogVlJNRXhwcmVzc2lvbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9leHByZXNzaW9uTWFwW25hbWVdID8/IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZXhwcmVzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIGV4cHJlc3Npb24ge0BsaW5rIFZSTUV4cHJlc3Npb259IHRoYXQgZGVzY3JpYmVzIHRoZSBleHByZXNzaW9uXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJFeHByZXNzaW9uKGV4cHJlc3Npb246IFZSTUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLl9leHByZXNzaW9ucy5wdXNoKGV4cHJlc3Npb24pO1xuICAgIHRoaXMuX2V4cHJlc3Npb25NYXBbZXhwcmVzc2lvbi5leHByZXNzaW9uTmFtZV0gPSBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXIgYW4gZXhwcmVzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIGV4cHJlc3Npb24gVGhlIGV4cHJlc3Npb24geW91IHdhbnQgdG8gdW5yZWdpc3RlclxuICAgKi9cbiAgcHVibGljIHVucmVnaXN0ZXJFeHByZXNzaW9uKGV4cHJlc3Npb246IFZSTUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2V4cHJlc3Npb25zLmluZGV4T2YoZXhwcmVzc2lvbik7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS53YXJuKCdWUk1FeHByZXNzaW9uTWFuYWdlcjogVGhlIHNwZWNpZmllZCBleHByZXNzaW9ucyBpcyBub3QgcmVnaXN0ZXJlZCcpO1xuICAgIH1cblxuICAgIHRoaXMuX2V4cHJlc3Npb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgZGVsZXRlIHRoaXMuX2V4cHJlc3Npb25NYXBbZXhwcmVzc2lvbi5leHByZXNzaW9uTmFtZV07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHdlaWdodCBvZiB0aGUgc3BlY2lmaWVkIGV4cHJlc3Npb24uXG4gICAqIElmIGl0IGRvZXNuJ3QgaGF2ZSBhbiBleHByZXNzaW9uIG9mIGdpdmVuIG5hbWUsIGl0IHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBleHByZXNzaW9uXG4gICAqL1xuICBwdWJsaWMgZ2V0VmFsdWUobmFtZTogVlJNRXhwcmVzc2lvblByZXNldE5hbWUgfCBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5nZXRFeHByZXNzaW9uKG5hbWUpO1xuICAgIHJldHVybiBleHByZXNzaW9uPy53ZWlnaHQgPz8gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSB3ZWlnaHQgdG8gdGhlIHNwZWNpZmllZCBleHByZXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB3ZWlnaHQgV2VpZ2h0XG4gICAqL1xuICBwdWJsaWMgc2V0VmFsdWUobmFtZTogVlJNRXhwcmVzc2lvblByZXNldE5hbWUgfCBzdHJpbmcsIHdlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbihuYW1lKTtcbiAgICBpZiAoZXhwcmVzc2lvbikge1xuICAgICAgZXhwcmVzc2lvbi53ZWlnaHQgPSBzYXR1cmF0ZSh3ZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB3ZWlnaHRzIG9mIGFsbCBleHByZXNzaW9ucyB0byBgMC4wYC5cbiAgICovXG4gIHB1YmxpYyByZXNldFZhbHVlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9leHByZXNzaW9ucy5mb3JFYWNoKChleHByZXNzaW9uKSA9PiB7XG4gICAgICBleHByZXNzaW9uLndlaWdodCA9IDAuMDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSB0cmFjayBuYW1lIG9mIHNwZWNpZmllZCBleHByZXNzaW9uLlxuICAgKiBUaGlzIHRyYWNrIG5hbWUgaXMgbmVlZGVkIHRvIG1hbmlwdWxhdGUgaXRzIGV4cHJlc3Npb24gdmlhIGtleWZyYW1lIGFuaW1hdGlvbnMuXG4gICAqXG4gICAqIEBleGFtcGxlIE1hbmlwdWxhdGUgYW4gZXhwcmVzc2lvbiB1c2luZyBrZXlmcmFtZSBhbmltYXRpb25cbiAgICogYGBganNcbiAgICogY29uc3QgdHJhY2tOYW1lID0gdnJtLmV4cHJlc3Npb25NYW5hZ2VyLmdldEV4cHJlc3Npb25UcmFja05hbWUoICdibGluaycgKTtcbiAgICogY29uc3QgdHJhY2sgPSBuZXcgVEhSRUUuTnVtYmVyS2V5ZnJhbWVUcmFjayhcbiAgICogICBuYW1lLFxuICAgKiAgIFsgMC4wLCAwLjUsIDEuMCBdLCAvLyB0aW1lc1xuICAgKiAgIFsgMC4wLCAxLjAsIDAuMCBdIC8vIHZhbHVlc1xuICAgKiApO1xuICAgKlxuICAgKiBjb25zdCBjbGlwID0gbmV3IFRIUkVFLkFuaW1hdGlvbkNsaXAoXG4gICAqICAgJ2JsaW5rJywgLy8gbmFtZVxuICAgKiAgIDEuMCwgLy8gZHVyYXRpb25cbiAgICogICBbIHRyYWNrIF0gLy8gdHJhY2tzXG4gICAqICk7XG4gICAqXG4gICAqIGNvbnN0IG1peGVyID0gbmV3IFRIUkVFLkFuaW1hdGlvbk1peGVyKCB2cm0uc2NlbmUgKTtcbiAgICogY29uc3QgYWN0aW9uID0gbWl4ZXIuY2xpcEFjdGlvbiggY2xpcCApO1xuICAgKiBhY3Rpb24ucGxheSgpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZXhwcmVzc2lvblxuICAgKi9cbiAgcHVibGljIGdldEV4cHJlc3Npb25UcmFja05hbWUobmFtZTogVlJNRXhwcmVzc2lvblByZXNldE5hbWUgfCBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5nZXRFeHByZXNzaW9uKG5hbWUpO1xuICAgIHJldHVybiBleHByZXNzaW9uID8gYCR7ZXhwcmVzc2lvbi5uYW1lfS53ZWlnaHRgIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZXZlcnkgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIC8vIHNlZSBob3cgbXVjaCB3ZSBzaG91bGQgb3ZlcnJpZGUgY2VydGFpbiBleHByZXNzaW9uc1xuICAgIGNvbnN0IHdlaWdodE11bHRpcGxpZXJzID0gdGhpcy5fY2FsY3VsYXRlV2VpZ2h0TXVsdGlwbGllcnMoKTtcblxuICAgIC8vIHJlc2V0IGV4cHJlc3Npb24gYmluZHMgZmlyc3RcbiAgICB0aGlzLl9leHByZXNzaW9ucy5mb3JFYWNoKChleHByZXNzaW9uKSA9PiB7XG4gICAgICBleHByZXNzaW9uLmNsZWFyQXBwbGllZFdlaWdodCgpO1xuICAgIH0pO1xuXG4gICAgLy8gdGhlbiBhcHBseSBiaW5kc1xuICAgIHRoaXMuX2V4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgIGxldCBtdWx0aXBsaWVyID0gMS4wO1xuICAgICAgY29uc3QgbmFtZSA9IGV4cHJlc3Npb24uZXhwcmVzc2lvbk5hbWU7XG5cbiAgICAgIGlmICh0aGlzLmJsaW5rRXhwcmVzc2lvbk5hbWVzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgIG11bHRpcGxpZXIgKj0gd2VpZ2h0TXVsdGlwbGllcnMuYmxpbms7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxvb2tBdEV4cHJlc3Npb25OYW1lcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICBtdWx0aXBsaWVyICo9IHdlaWdodE11bHRpcGxpZXJzLmxvb2tBdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW91dGhFeHByZXNzaW9uTmFtZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgbXVsdGlwbGllciAqPSB3ZWlnaHRNdWx0aXBsaWVycy5tb3V0aDtcbiAgICAgIH1cblxuICAgICAgZXhwcmVzc2lvbi5hcHBseVdlaWdodCh7IG11bHRpcGxpZXIgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHN1bSBvZiBvdmVycmlkZSBhbW91bnRzIHRvIHNlZSBob3cgbXVjaCB3ZSBzaG91bGQgbXVsdGlwbHkgd2VpZ2h0cyBvZiBjZXJ0YWluIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlV2VpZ2h0TXVsdGlwbGllcnMoKToge1xuICAgIGJsaW5rOiBudW1iZXI7XG4gICAgbG9va0F0OiBudW1iZXI7XG4gICAgbW91dGg6IG51bWJlcjtcbiAgfSB7XG4gICAgbGV0IGJsaW5rID0gMS4wO1xuICAgIGxldCBsb29rQXQgPSAxLjA7XG4gICAgbGV0IG1vdXRoID0gMS4wO1xuXG4gICAgdGhpcy5fZXhwcmVzc2lvbnMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgYmxpbmsgLT0gZXhwcmVzc2lvbi5vdmVycmlkZUJsaW5rQW1vdW50O1xuICAgICAgbG9va0F0IC09IGV4cHJlc3Npb24ub3ZlcnJpZGVMb29rQXRBbW91bnQ7XG4gICAgICBtb3V0aCAtPSBleHByZXNzaW9uLm92ZXJyaWRlTW91dGhBbW91bnQ7XG4gICAgfSk7XG5cbiAgICBibGluayA9IE1hdGgubWF4KDAuMCwgYmxpbmspO1xuICAgIGxvb2tBdCA9IE1hdGgubWF4KDAuMCwgbG9va0F0KTtcbiAgICBtb3V0aCA9IE1hdGgubWF4KDAuMCwgbW91dGgpO1xuXG4gICAgcmV0dXJuIHsgYmxpbmssIGxvb2tBdCwgbW91dGggfTtcbiAgfVxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG5leHBvcnQgY29uc3QgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlID0ge1xuICBDb2xvcjogJ2NvbG9yJyxcbiAgRW1pc3Npb25Db2xvcjogJ2VtaXNzaW9uQ29sb3InLFxuICBTaGFkZUNvbG9yOiAnc2hhZGVDb2xvcicsXG4gIE1hdGNhcENvbG9yOiAnbWF0Y2FwQ29sb3InLFxuICBSaW1Db2xvcjogJ3JpbUNvbG9yJyxcbiAgT3V0bGluZUNvbG9yOiAnb3V0bGluZUNvbG9yJyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSA9XG4gICh0eXBlb2YgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlKVtrZXlvZiB0eXBlb2YgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlXTtcblxuZXhwb3J0IGNvbnN0IHYwRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JNYXA6IHsgW2tleTogc3RyaW5nXTogVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlIHwgdW5kZWZpbmVkIH0gPSB7XG4gIF9Db2xvcjogVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlLkNvbG9yLFxuICBfRW1pc3Npb25Db2xvcjogVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlLkVtaXNzaW9uQ29sb3IsXG4gIF9TaGFkZUNvbG9yOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUuU2hhZGVDb2xvcixcbiAgX1JpbUNvbG9yOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUuUmltQ29sb3IsXG4gIF9PdXRsaW5lQ29sb3I6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZS5PdXRsaW5lQ29sb3IsXG59O1xuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbkJpbmQgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25CaW5kJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUnO1xuXG5jb25zdCBfY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcblxuaW50ZXJmYWNlIENvbG9yQmluZFN0YXRlIHtcbiAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XG4gIGluaXRpYWxWYWx1ZTogVEhSRUUuQ29sb3I7XG4gIGRlbHRhVmFsdWU6IFRIUkVFLkNvbG9yO1xufVxuXG5pbnRlcmZhY2UgQWxwaGFCaW5kU3RhdGUge1xuICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcbiAgaW5pdGlhbFZhbHVlOiBudW1iZXI7XG4gIGRlbHRhVmFsdWU6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEJpbmRTdGF0ZSB7XG4gIGNvbG9yOiBDb2xvckJpbmRTdGF0ZSB8IG51bGw7XG4gIGFscGhhOiBBbHBoYUJpbmRTdGF0ZSB8IG51bGw7XG59XG5cbi8qKlxuICogQSBiaW5kIG9mIGV4cHJlc3Npb24gaW5mbHVlbmNlcyB0byBhIG1hdGVyaWFsIGNvbG9yLlxuICovXG5leHBvcnQgY2xhc3MgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JCaW5kIGltcGxlbWVudHMgVlJNRXhwcmVzc2lvbkJpbmQge1xuICAvKipcbiAgICogTWFwcGluZyBvZiBwcm9wZXJ0eSBuYW1lcyBmcm9tIFZSTUMvbWF0ZXJpYWxDb2xvckJpbmRzLnR5cGUgdG8gdGhyZWUuanMvTWF0ZXJpYWwuXG4gICAqIFRoZSBmaXJzdCBlbGVtZW50IHN0YW5kcyBmb3IgY29sb3IgY2hhbm5lbHMsIHRoZSBzZWNvbmQgZWxlbWVudCBzdGFuZHMgZm9yIHRoZSBhbHBoYSBjaGFubmVsLlxuICAgKiBUaGUgc2Vjb25kIGVsZW1lbnQgY2FuIGJlIG51bGwgaWYgdGhlIHRhcmdldCBwcm9wZXJ0eSBkb2Vzbid0IGV4aXN0LlxuICAgKi9cbiAgLy8gVE9ETzogV2UgbWlnaHQgd2FudCB0byB1c2UgdGhlIGBzYXRpc2ZpZXNgIG9wZXJhdG9yIG9uY2Ugd2UgYnVtcCBUUyB0byA0Ljkgb3IgaGlnaGVyXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3BpeGl2L3RocmVlLXZybS9wdWxsLzEzMjMjZGlzY3Vzc2lvbl9yMTM3NDAyMDAzNVxuICBwcml2YXRlIHN0YXRpYyBfcHJvcGVydHlOYW1lTWFwTWFwOiB7XG4gICAgW2Rpc3Rpbmd1aXNoZXI6IHN0cmluZ106IHsgW3R5cGUgaW4gVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlXT86IHJlYWRvbmx5IFtzdHJpbmcsIHN0cmluZyB8IG51bGxdIH07XG4gIH0gPSB7XG4gICAgaXNNZXNoU3RhbmRhcmRNYXRlcmlhbDoge1xuICAgICAgY29sb3I6IFsnY29sb3InLCAnb3BhY2l0eSddLFxuICAgICAgZW1pc3Npb25Db2xvcjogWydlbWlzc2l2ZScsIG51bGxdLFxuICAgIH0sXG4gICAgaXNNZXNoQmFzaWNNYXRlcmlhbDoge1xuICAgICAgY29sb3I6IFsnY29sb3InLCAnb3BhY2l0eSddLFxuICAgIH0sXG4gICAgaXNNVG9vbk1hdGVyaWFsOiB7XG4gICAgICBjb2xvcjogWydjb2xvcicsICdvcGFjaXR5J10sXG4gICAgICBlbWlzc2lvbkNvbG9yOiBbJ2VtaXNzaXZlJywgbnVsbF0sXG4gICAgICBvdXRsaW5lQ29sb3I6IFsnb3V0bGluZUNvbG9yRmFjdG9yJywgbnVsbF0sXG4gICAgICBtYXRjYXBDb2xvcjogWydtYXRjYXBGYWN0b3InLCBudWxsXSxcbiAgICAgIHJpbUNvbG9yOiBbJ3BhcmFtZXRyaWNSaW1Db2xvckZhY3RvcicsIG51bGxdLFxuICAgICAgc2hhZGVDb2xvcjogWydzaGFkZUNvbG9yRmFjdG9yJywgbnVsbF0sXG4gICAgfSxcbiAgfTtcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBtYXRlcmlhbC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBtYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWw7XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSB0YXJnZXQgcHJvcGVydHkgb2YgdGhlIG1hdGVyaWFsLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHR5cGU6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZTtcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBjb2xvci5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0YXJnZXRWYWx1ZTogVEhSRUUuQ29sb3I7XG5cbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgYWxwaGEuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdGFyZ2V0QWxwaGE6IG51bWJlcjtcblxuICAvKipcbiAgICogSXRzIGJpbmRpbmcgc3RhdGUuXG4gICAqIElmIGl0IGNhbm5vdCBmaW5kIHRoZSB0YXJnZXQgcHJvcGVydHkgaW4gdGhlIGNvbnN0cnVjdG9yLCBlYWNoIHByb3BlcnR5IHdpbGwgYmUgbnVsbCBpbnN0ZWFkLlxuICAgKi9cbiAgcHJpdmF0ZSBfc3RhdGU6IEJpbmRTdGF0ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioe1xuICAgIG1hdGVyaWFsLFxuICAgIHR5cGUsXG4gICAgdGFyZ2V0VmFsdWUsXG4gICAgdGFyZ2V0QWxwaGEsXG4gIH06IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IG1hdGVyaWFsLlxuICAgICAqL1xuICAgIG1hdGVyaWFsOiBUSFJFRS5NYXRlcmlhbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSB0YXJnZXQgcHJvcGVydHkgb2YgdGhlIG1hdGVyaWFsLlxuICAgICAqL1xuICAgIHR5cGU6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgY29sb3IuXG4gICAgICovXG4gICAgdGFyZ2V0VmFsdWU6IFRIUkVFLkNvbG9yO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBhbHBoYS5cbiAgICAgKi9cbiAgICB0YXJnZXRBbHBoYT86IG51bWJlcjtcbiAgfSkge1xuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGFyZ2V0VmFsdWUgPSB0YXJnZXRWYWx1ZTtcbiAgICB0aGlzLnRhcmdldEFscGhhID0gdGFyZ2V0QWxwaGEgPz8gMS4wO1xuXG4gICAgLy8gaW5pdCBiaW5kIHN0YXRlXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLl9pbml0Q29sb3JCaW5kU3RhdGUoKTtcbiAgICBjb25zdCBhbHBoYSA9IHRoaXMuX2luaXRBbHBoYUJpbmRTdGF0ZSgpO1xuICAgIHRoaXMuX3N0YXRlID0geyBjb2xvciwgYWxwaGEgfTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVdlaWdodCh3ZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgY29sb3IsIGFscGhhIH0gPSB0aGlzLl9zdGF0ZTtcblxuICAgIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgICBjb25zdCB7IHByb3BlcnR5TmFtZSwgZGVsdGFWYWx1ZSB9ID0gY29sb3I7XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9ICh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBUSFJFRS5Db2xvcjtcbiAgICAgIGlmICh0YXJnZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhcmdldC5hZGQoX2NvbG9yLmNvcHkoZGVsdGFWYWx1ZSkubXVsdGlwbHlTY2FsYXIod2VpZ2h0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFscGhhICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgcHJvcGVydHlOYW1lLCBkZWx0YVZhbHVlIH0gPSBhbHBoYTtcblxuICAgICAgY29uc3QgdGFyZ2V0ID0gKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIG51bWJlcjtcbiAgICAgIGlmICh0YXJnZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICgodGhpcy5tYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgbnVtYmVyKSArPSBkZWx0YVZhbHVlICogd2VpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFwcGxpZWRXZWlnaHQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb2xvciwgYWxwaGEgfSA9IHRoaXMuX3N0YXRlO1xuXG4gICAgaWYgKGNvbG9yICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgcHJvcGVydHlOYW1lLCBpbml0aWFsVmFsdWUgfSA9IGNvbG9yO1xuXG4gICAgICBjb25zdCB0YXJnZXQgPSAodGhpcy5tYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgVEhSRUUuQ29sb3I7XG4gICAgICBpZiAodGFyZ2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0YXJnZXQuY29weShpbml0aWFsVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbHBoYSAhPSBudWxsKSB7XG4gICAgICBjb25zdCB7IHByb3BlcnR5TmFtZSwgaW5pdGlhbFZhbHVlIH0gPSBhbHBoYTtcblxuICAgICAgY29uc3QgdGFyZ2V0ID0gKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIG51bWJlcjtcbiAgICAgIGlmICh0YXJnZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICgodGhpcy5tYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgbnVtYmVyKSA9IGluaXRpYWxWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbml0Q29sb3JCaW5kU3RhdGUoKTogQ29sb3JCaW5kU3RhdGUgfCBudWxsIHtcbiAgICBjb25zdCB7IG1hdGVyaWFsLCB0eXBlLCB0YXJnZXRWYWx1ZSB9ID0gdGhpcztcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hcCA9IHRoaXMuX2dldFByb3BlcnR5TmFtZU1hcCgpO1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZU1hcD8uW3R5cGVdPy5bMF0gPz8gbnVsbDtcblxuICAgIGlmIChwcm9wZXJ0eU5hbWUgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVHJpZWQgdG8gYWRkIGEgbWF0ZXJpYWwgY29sb3IgYmluZCB0byB0aGUgbWF0ZXJpYWwgJHtcbiAgICAgICAgICBtYXRlcmlhbC5uYW1lID8/ICcobm8gbmFtZSknXG4gICAgICAgIH0sIHRoZSB0eXBlICR7dHlwZX0gYnV0IHRoZSBtYXRlcmlhbCBvciB0aGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLmAsXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSAobWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIFRIUkVFLkNvbG9yO1xuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdGFyZ2V0LmNsb25lKCk7XG5cbiAgICAvLyBcdThDQTBcdTMwNkVcdTUwMjRcdTMwOTJcdTRGRERcdTYzMDFcdTMwNTlcdTMwOEJcdTMwNUZcdTMwODFcdTMwNkJDb2xvci5zdWJcdTMwOTJcdTRGN0ZcdTMwOEZcdTMwNUFcdTMwNkJcdTVERUVcdTUyMDZcdTMwOTJcdThBMDhcdTdCOTdcdTMwNTlcdTMwOEJcbiAgICBjb25zdCBkZWx0YVZhbHVlID0gbmV3IFRIUkVFLkNvbG9yKFxuICAgICAgdGFyZ2V0VmFsdWUuciAtIGluaXRpYWxWYWx1ZS5yLFxuICAgICAgdGFyZ2V0VmFsdWUuZyAtIGluaXRpYWxWYWx1ZS5nLFxuICAgICAgdGFyZ2V0VmFsdWUuYiAtIGluaXRpYWxWYWx1ZS5iLFxuICAgICk7XG5cbiAgICByZXR1cm4geyBwcm9wZXJ0eU5hbWUsIGluaXRpYWxWYWx1ZSwgZGVsdGFWYWx1ZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdEFscGhhQmluZFN0YXRlKCk6IEFscGhhQmluZFN0YXRlIHwgbnVsbCB7XG4gICAgY29uc3QgeyBtYXRlcmlhbCwgdHlwZSwgdGFyZ2V0QWxwaGEgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXAgPSB0aGlzLl9nZXRQcm9wZXJ0eU5hbWVNYXAoKTtcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWVNYXA/Llt0eXBlXT8uWzFdID8/IG51bGw7XG5cbiAgICBpZiAocHJvcGVydHlOYW1lID09IG51bGwgJiYgdGFyZ2V0QWxwaGEgIT09IDEuMCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVHJpZWQgdG8gYWRkIGEgbWF0ZXJpYWwgYWxwaGEgYmluZCB0byB0aGUgbWF0ZXJpYWwgJHtcbiAgICAgICAgICBtYXRlcmlhbC5uYW1lID8/ICcobm8gbmFtZSknXG4gICAgICAgIH0sIHRoZSB0eXBlICR7dHlwZX0gYnV0IHRoZSBtYXRlcmlhbCBvciB0aGUgdHlwZSBkb2VzIG5vdCBzdXBwb3J0IGFscGhhLmAsXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlOYW1lID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IChtYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgbnVtYmVyO1xuXG4gICAgY29uc3QgZGVsdGFWYWx1ZSA9IHRhcmdldEFscGhhIC0gaW5pdGlhbFZhbHVlO1xuXG4gICAgcmV0dXJuIHsgcHJvcGVydHlOYW1lLCBpbml0aWFsVmFsdWUsIGRlbHRhVmFsdWUgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByb3BlcnR5TmFtZU1hcCgpOlxuICAgIHwgeyBbdHlwZSBpbiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGVdPzogcmVhZG9ubHkgW3N0cmluZywgc3RyaW5nIHwgbnVsbF0gfVxuICAgIHwgbnVsbCB7XG4gICAgcmV0dXJuIChcbiAgICAgIE9iamVjdC5lbnRyaWVzKFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZC5fcHJvcGVydHlOYW1lTWFwTWFwKS5maW5kKChbZGlzdGluZ3Vpc2hlcl0pID0+IHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm1hdGVyaWFsIGFzIGFueSlbZGlzdGluZ3Vpc2hlcl0gPT09IHRydWU7XG4gICAgICB9KT8uWzFdID8/IG51bGxcbiAgICApO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25CaW5kIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uQmluZCc7XG5cbi8qKlxuICogQSBiaW5kIG9mIHtAbGluayBWUk1FeHByZXNzaW9ufSBpbmZsdWVuY2VzIHRvIG1vcnBoIHRhcmdldHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1FeHByZXNzaW9uTW9ycGhUYXJnZXRCaW5kIGltcGxlbWVudHMgVlJNRXhwcmVzc2lvbkJpbmQge1xuICAvKipcbiAgICogVGhlIG1lc2ggcHJpbWl0aXZlcyB0aGF0IGF0dGFjaGVkIHRvIHRhcmdldCBtZXNoLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHByaW1pdGl2ZXM6IFRIUkVFLk1lc2hbXTtcblxuICAvKipcbiAgICogVGhlIGluZGV4IG9mIHRoZSBtb3JwaCB0YXJnZXQgaW4gdGhlIG1lc2guXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHdlaWdodCB2YWx1ZSBvZiB0YXJnZXQgbW9ycGggdGFyZ2V0LiBSYW5naW5nIGluIFswLjAgLSAxLjBdLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHdlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih7XG4gICAgcHJpbWl0aXZlcyxcbiAgICBpbmRleCxcbiAgICB3ZWlnaHQsXG4gIH06IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWVzaCBwcmltaXRpdmVzIHRoYXQgYXR0YWNoZWQgdG8gdGFyZ2V0IG1lc2guXG4gICAgICovXG4gICAgcHJpbWl0aXZlczogVEhSRUUuTWVzaFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBtb3JwaCB0YXJnZXQgaW4gdGhlIG1lc2guXG4gICAgICovXG4gICAgaW5kZXg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3ZWlnaHQgdmFsdWUgb2YgdGFyZ2V0IG1vcnBoIHRhcmdldC4gUmFuZ2luZyBpbiBbMC4wIC0gMS4wXS5cbiAgICAgKi9cbiAgICB3ZWlnaHQ6IG51bWJlcjtcbiAgfSkge1xuICAgIHRoaXMucHJpbWl0aXZlcyA9IHByaW1pdGl2ZXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xuICB9XG5cbiAgcHVibGljIGFwcGx5V2VpZ2h0KHdlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wcmltaXRpdmVzLmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgIGlmIChtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcz8uW3RoaXMuaW5kZXhdICE9IG51bGwpIHtcbiAgICAgICAgbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbdGhpcy5pbmRleF0gKz0gdGhpcy53ZWlnaHQgKiB3ZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJBcHBsaWVkV2VpZ2h0KCk6IHZvaWQge1xuICAgIHRoaXMucHJpbWl0aXZlcy5mb3JFYWNoKChtZXNoKSA9PiB7XG4gICAgICBpZiAobWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXM/Llt0aGlzLmluZGV4XSAhPSBudWxsKSB7XG4gICAgICAgIG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzW3RoaXMuaW5kZXhdID0gMC4wO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uQmluZCB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbkJpbmQnO1xuXG5jb25zdCBfdjIgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4vKipcbiAqIEEgYmluZCBvZiBleHByZXNzaW9uIGluZmx1ZW5jZXMgdG8gdGV4dHVyZSB0cmFuc2Zvcm1zLlxuICovXG5leHBvcnQgY2xhc3MgVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kIGltcGxlbWVudHMgVlJNRXhwcmVzc2lvbkJpbmQge1xuICBwcml2YXRlIHN0YXRpYyBfcHJvcGVydHlOYW1lc01hcDogeyBbZGlzdGluZ3Vpc2hlcjogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcbiAgICBpc01lc2hTdGFuZGFyZE1hdGVyaWFsOiBbXG4gICAgICAnbWFwJyxcbiAgICAgICdlbWlzc2l2ZU1hcCcsXG4gICAgICAnYnVtcE1hcCcsXG4gICAgICAnbm9ybWFsTWFwJyxcbiAgICAgICdkaXNwbGFjZW1lbnRNYXAnLFxuICAgICAgJ3JvdWdobmVzc01hcCcsXG4gICAgICAnbWV0YWxuZXNzTWFwJyxcbiAgICAgICdhbHBoYU1hcCcsXG4gICAgXSxcbiAgICBpc01lc2hCYXNpY01hdGVyaWFsOiBbJ21hcCcsICdzcGVjdWxhck1hcCcsICdhbHBoYU1hcCddLFxuICAgIGlzTVRvb25NYXRlcmlhbDogW1xuICAgICAgJ21hcCcsXG4gICAgICAnbm9ybWFsTWFwJyxcbiAgICAgICdlbWlzc2l2ZU1hcCcsXG4gICAgICAnc2hhZGVNdWx0aXBseVRleHR1cmUnLFxuICAgICAgJ3JpbU11bHRpcGx5VGV4dHVyZScsXG4gICAgICAnb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlJyxcbiAgICAgICd1dkFuaW1hdGlvbk1hc2tUZXh0dXJlJyxcbiAgICBdLFxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgdGFyZ2V0IG1hdGVyaWFsLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG1hdGVyaWFsOiBUSFJFRS5NYXRlcmlhbDtcblxuICAvKipcbiAgICogVGhlIHV2IHNjYWxlIG9mIHRoZSB0ZXh0dXJlLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHNjYWxlOiBUSFJFRS5WZWN0b3IyO1xuXG4gIC8qKlxuICAgKiBUaGUgdXYgb2Zmc2V0IG9mIHRoZSB0ZXh0dXJlLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG9mZnNldDogVEhSRUUuVmVjdG9yMjtcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgdGV4dHVyZSBuYW1lcyBhbmQgaXRzIHN0YXRlIHRoYXQgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIGJ5IHRoaXMgYmluZC5cbiAgICovXG4gIHByaXZhdGUgX3Byb3BlcnRpZXM6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaW5pdGlhbE9mZnNldDogVEhSRUUuVmVjdG9yMjtcbiAgICBpbml0aWFsU2NhbGU6IFRIUkVFLlZlY3RvcjI7XG4gICAgZGVsdGFPZmZzZXQ6IFRIUkVFLlZlY3RvcjI7XG4gICAgZGVsdGFTY2FsZTogVEhSRUUuVmVjdG9yMjtcbiAgfVtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih7XG4gICAgbWF0ZXJpYWwsXG4gICAgc2NhbGUsXG4gICAgb2Zmc2V0LFxuICB9OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBtYXRlcmlhbC5cbiAgICAgKi9cbiAgICBtYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXYgc2NhbGUgb2YgdGhlIHRleHR1cmUuXG4gICAgICovXG4gICAgc2NhbGU6IFRIUkVFLlZlY3RvcjI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXYgb2Zmc2V0IG9mIHRoZSB0ZXh0dXJlLlxuICAgICAqL1xuICAgIG9mZnNldDogVEhSRUUuVmVjdG9yMjtcbiAgfSkge1xuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmVudHJpZXMoVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kLl9wcm9wZXJ0eU5hbWVzTWFwKS5maW5kKFxuICAgICAgKFtkaXN0aW5ndWlzaGVyXSkgPT4ge1xuICAgICAgICByZXR1cm4gKG1hdGVyaWFsIGFzIGFueSlbZGlzdGluZ3Vpc2hlcl0gPT09IHRydWU7XG4gICAgICB9LFxuICAgICk/LlsxXTtcblxuICAgIGlmIChwcm9wZXJ0eU5hbWVzID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFRyaWVkIHRvIGFkZCBhIHRleHR1cmUgdHJhbnNmb3JtIGJpbmQgdG8gdGhlIG1hdGVyaWFsICR7XG4gICAgICAgICAgbWF0ZXJpYWwubmFtZSA/PyAnKG5vIG5hbWUpJ1xuICAgICAgICB9IGJ1dCB0aGUgbWF0ZXJpYWwgaXMgbm90IHN1cHBvcnRlZC5gLFxuICAgICAgKTtcblxuICAgICAgdGhpcy5fcHJvcGVydGllcyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzID0gW107XG5cbiAgICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSAoKG1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBUSFJFRS5UZXh0dXJlIHwgdW5kZWZpbmVkKT8uY2xvbmUoKTtcbiAgICAgICAgaWYgKCF0ZXh0dXJlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAobWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdID0gdGV4dHVyZTsgLy8gYmVjYXVzZSB0aGUgdGV4dHVyZSBpcyBjbG9uZWRcblxuICAgICAgICBjb25zdCBpbml0aWFsT2Zmc2V0ID0gdGV4dHVyZS5vZmZzZXQuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbFNjYWxlID0gdGV4dHVyZS5yZXBlYXQuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgZGVsdGFPZmZzZXQgPSBvZmZzZXQuY2xvbmUoKS5zdWIoaW5pdGlhbE9mZnNldCk7XG4gICAgICAgIGNvbnN0IGRlbHRhU2NhbGUgPSBzY2FsZS5jbG9uZSgpLnN1Yihpbml0aWFsU2NhbGUpO1xuXG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIGluaXRpYWxPZmZzZXQsXG4gICAgICAgICAgZGVsdGFPZmZzZXQsXG4gICAgICAgICAgaW5pdGlhbFNjYWxlLFxuICAgICAgICAgIGRlbHRhU2NhbGUsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFwcGx5V2VpZ2h0KHdlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eS5uYW1lXSBhcyBUSFJFRS5UZXh0dXJlO1xuICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gVE9ETzogd2Ugc2hvdWxkIGtpY2sgdGhpcyBhdCBgYWRkTWF0ZXJpYWxWYWx1ZWBcblxuICAgICAgdGFyZ2V0Lm9mZnNldC5hZGQoX3YyLmNvcHkocHJvcGVydHkuZGVsdGFPZmZzZXQpLm11bHRpcGx5U2NhbGFyKHdlaWdodCkpO1xuICAgICAgdGFyZ2V0LnJlcGVhdC5hZGQoX3YyLmNvcHkocHJvcGVydHkuZGVsdGFTY2FsZSkubXVsdGlwbHlTY2FsYXIod2VpZ2h0KSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJBcHBsaWVkV2VpZ2h0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Byb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9ICh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHkubmFtZV0gYXMgVEhSRUUuVGV4dHVyZTtcbiAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFRPRE86IHdlIHNob3VsZCBraWNrIHRoaXMgYXQgYGFkZE1hdGVyaWFsVmFsdWVgXG5cbiAgICAgIHRhcmdldC5vZmZzZXQuY29weShwcm9wZXJ0eS5pbml0aWFsT2Zmc2V0KTtcbiAgICAgIHRhcmdldC5yZXBlYXQuY29weShwcm9wZXJ0eS5pbml0aWFsU2NhbGUpO1xuICAgIH0pO1xuICB9XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbmV4cG9ydCBjb25zdCBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlID0ge1xuICBOb25lOiAnbm9uZScsXG4gIEJsb2NrOiAnYmxvY2snLFxuICBCbGVuZDogJ2JsZW5kJyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFZSTUV4cHJlc3Npb25PdmVycmlkZVR5cGUgPSAodHlwZW9mIFZSTUV4cHJlc3Npb25PdmVycmlkZVR5cGUpW2tleW9mIHR5cGVvZiBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlXTtcbiIsICJpbXBvcnQgdHlwZSB7IFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb24gfSBmcm9tICcuL1ZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb24nO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4uL2h1bWFub2lkJztcblxuZXhwb3J0IGNsYXNzIFZSTUZpcnN0UGVyc29uIHtcbiAgLyoqXG4gICAqIEEgZGVmYXVsdCBjYW1lcmEgbGF5ZXIgZm9yIGBGaXJzdFBlcnNvbk9ubHlgIGxheWVyLlxuICAgKlxuICAgKiBAc2VlIFtbZ2V0Rmlyc3RQZXJzb25Pbmx5TGF5ZXJdXVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0ZJUlNUUEVSU09OX09OTFlfTEFZRVIgPSA5O1xuXG4gIC8qKlxuICAgKiBBIGRlZmF1bHQgY2FtZXJhIGxheWVyIGZvciBgVGhpcmRQZXJzb25Pbmx5YCBsYXllci5cbiAgICpcbiAgICogQHNlZSBbW2dldFRoaXJkUGVyc29uT25seUxheWVyXV1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9USElSRFBFUlNPTl9PTkxZX0xBWUVSID0gMTA7XG5cbiAgLyoqXG4gICAqIEl0cyBhc3NvY2lhdGVkIHtAbGluayBWUk1IdW1hbm9pZH0uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaHVtYW5vaWQ6IFZSTUh1bWFub2lkO1xuICBwdWJsaWMgbWVzaEFubm90YXRpb25zOiBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uW107XG5cbiAgcHJpdmF0ZSBfZmlyc3RQZXJzb25Pbmx5TGF5ZXIgPSBWUk1GaXJzdFBlcnNvbi5ERUZBVUxUX0ZJUlNUUEVSU09OX09OTFlfTEFZRVI7XG4gIHByaXZhdGUgX3RoaXJkUGVyc29uT25seUxheWVyID0gVlJNRmlyc3RQZXJzb24uREVGQVVMVF9USElSRFBFUlNPTl9PTkxZX0xBWUVSO1xuXG4gIHByaXZhdGUgX2luaXRpYWxpemVkTGF5ZXJzID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBWUk1GaXJzdFBlcnNvbiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSBodW1hbm9pZCBBIHtAbGluayBWUk1IdW1hbm9pZH1cbiAgICogQHBhcmFtIG1lc2hBbm5vdGF0aW9ucyBBIHJlbmRlcmVyIHNldHRpbmdzLiBTZWUgdGhlIGRlc2NyaXB0aW9uIG9mIFtbUmVuZGVyZXJGaXJzdFBlcnNvbkZsYWdzXV0gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKGh1bWFub2lkOiBWUk1IdW1hbm9pZCwgbWVzaEFubm90YXRpb25zOiBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uW10pIHtcbiAgICB0aGlzLmh1bWFub2lkID0gaHVtYW5vaWQ7XG4gICAgdGhpcy5tZXNoQW5ub3RhdGlvbnMgPSBtZXNoQW5ub3RhdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ29weSB0aGUgZ2l2ZW4ge0BsaW5rIFZSTUZpcnN0UGVyc29ufSBpbnRvIHRoaXMgb25lLlxuICAgKiB7QGxpbmsgaHVtYW5vaWR9IG11c3QgYmUgc2FtZSBhcyB0aGUgc291cmNlIG9uZS5cbiAgICogQHBhcmFtIHNvdXJjZSBUaGUge0BsaW5rIFZSTUZpcnN0UGVyc29ufSB5b3Ugd2FudCB0byBjb3B5XG4gICAqIEByZXR1cm5zIHRoaXNcbiAgICovXG4gIHB1YmxpYyBjb3B5KHNvdXJjZTogVlJNRmlyc3RQZXJzb24pOiB0aGlzIHtcbiAgICBpZiAodGhpcy5odW1hbm9pZCAhPT0gc291cmNlLmh1bWFub2lkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZSTUZpcnN0UGVyc29uOiBodW1hbm9pZCBtdXN0IGJlIHNhbWUgaW4gb3JkZXIgdG8gY29weScpO1xuICAgIH1cblxuICAgIHRoaXMubWVzaEFubm90YXRpb25zID0gc291cmNlLm1lc2hBbm5vdGF0aW9ucy5tYXAoKGFubm90YXRpb24pID0+ICh7XG4gICAgICBtZXNoZXM6IGFubm90YXRpb24ubWVzaGVzLmNvbmNhdCgpLFxuICAgICAgdHlwZTogYW5ub3RhdGlvbi50eXBlLFxuICAgIH0pKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGlzIHtAbGluayBWUk1GaXJzdFBlcnNvbn0uXG4gICAqIEByZXR1cm5zIENvcGllZCB7QGxpbmsgVlJNRmlyc3RQZXJzb259XG4gICAqL1xuICBwdWJsaWMgY2xvbmUoKTogVlJNRmlyc3RQZXJzb24ge1xuICAgIHJldHVybiBuZXcgVlJNRmlyc3RQZXJzb24odGhpcy5odW1hbm9pZCwgdGhpcy5tZXNoQW5ub3RhdGlvbnMpLmNvcHkodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQSBjYW1lcmEgbGF5ZXIgcmVwcmVzZW50cyBgRmlyc3RQZXJzb25Pbmx5YCBsYXllci5cbiAgICogTm90ZSB0aGF0ICoqeW91IG11c3QgY2FsbCB7QGxpbmsgc2V0dXB9IGZpcnN0IGJlZm9yZSB5b3UgdXNlIHRoZSBsYXllciBmZWF0dXJlKiogb3IgaXQgZG9lcyBub3Qgd29yayBwcm9wZXJseS5cbiAgICpcbiAgICogVGhlIHZhbHVlIGlzIHtAbGluayBERUZBVUxUX0ZJUlNUUEVSU09OX09OTFlfTEFZRVJ9IGJ5IGRlZmF1bHQgYnV0IHlvdSBjYW4gY2hhbmdlIHRoZSBsYXllciBieSBzcGVjaWZ5aW5nIHZpYSB7QGxpbmsgc2V0dXB9IGlmIHlvdSBwcmVmZXIuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly92cm0uZGV2L2VuL3VuaXZybS9hcGkvdW5pdnJtX3VzZV9maXJzdHBlcnNvbi9cbiAgICogQHNlZSBodHRwczovL3RocmVlanMub3JnL2RvY3MvI2FwaS9lbi9jb3JlL0xheWVyc1xuICAgKi9cbiAgcHVibGljIGdldCBmaXJzdFBlcnNvbk9ubHlMYXllcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNhbWVyYSBsYXllciByZXByZXNlbnRzIGBUaGlyZFBlcnNvbk9ubHlgIGxheWVyLlxuICAgKiBOb3RlIHRoYXQgKip5b3UgbXVzdCBjYWxsIHtAbGluayBzZXR1cH0gZmlyc3QgYmVmb3JlIHlvdSB1c2UgdGhlIGxheWVyIGZlYXR1cmUqKiBvciBpdCBkb2VzIG5vdCB3b3JrIHByb3Blcmx5LlxuICAgKlxuICAgKiBUaGUgdmFsdWUgaXMge0BsaW5rIERFRkFVTFRfVEhJUkRQRVJTT05fT05MWV9MQVlFUn0gYnkgZGVmYXVsdCBidXQgeW91IGNhbiBjaGFuZ2UgdGhlIGxheWVyIGJ5IHNwZWNpZnlpbmcgdmlhIHtAbGluayBzZXR1cH0gaWYgeW91IHByZWZlci5cbiAgICpcbiAgICogQHNlZSBodHRwczovL3ZybS5kZXYvZW4vdW5pdnJtL2FwaS91bml2cm1fdXNlX2ZpcnN0cGVyc29uL1xuICAgKiBAc2VlIGh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jYXBpL2VuL2NvcmUvTGF5ZXJzXG4gICAqL1xuICBwdWJsaWMgZ2V0IHRoaXJkUGVyc29uT25seUxheWVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEluIHRoaXMgbWV0aG9kLCBpdCBhc3NpZ25zIGxheWVycyBmb3IgZXZlcnkgbWVzaGVzIGJhc2VkIG9uIG1lc2ggYW5ub3RhdGlvbnMuXG4gICAqIFlvdSBtdXN0IGNhbGwgdGhpcyBtZXRob2QgZmlyc3QgYmVmb3JlIHlvdSB1c2UgdGhlIGxheWVyIGZlYXR1cmUuXG4gICAqXG4gICAqIFRoaXMgaXMgYW4gZXF1aXZhbGVudCBvZiBbVlJNRmlyc3RQZXJzb24uU2V0dXBdKGh0dHBzOi8vZ2l0aHViLmNvbS92cm0tYy9VbmlWUk0vYmxvYi83M2E1YmQ4ZmNkZGFhMmE3YTg3MzUwOTlhOTdlNjNjOWRiM2U1ZWEwL0Fzc2V0cy9WUk0vUnVudGltZS9GaXJzdFBlcnNvbi9WUk1GaXJzdFBlcnNvbi5jcyNMMjk1LUwyOTkpIG9mIHRoZSBVbmlWUk0uXG4gICAqXG4gICAqIFRoZSBgY2FtZXJhTGF5ZXJgIHBhcmFtZXRlciBzcGVjaWZpZXMgd2hpY2ggbGF5ZXIgd2lsbCBiZSBhc3NpZ25lZCBmb3IgYEZpcnN0UGVyc29uT25seWAgLyBgVGhpcmRQZXJzb25Pbmx5YC5cbiAgICogSW4gVW5pVlJNLCB3ZSBzcGVjaWZpZWQgdGhvc2UgYnkgbmFtaW5nIGVhY2ggZGVzaXJlZCBsYXllciBhcyBgRklSU1RQRVJTT05fT05MWV9MQVlFUmAgLyBgVEhJUkRQRVJTT05fT05MWV9MQVlFUmBcbiAgICogYnV0IHdlIGFyZSBnb2luZyB0byBzcGVjaWZ5IHRoZXNlIGxheWVycyBhdCBoZXJlIHNpbmNlIHdlIGFyZSB1bmFibGUgdG8gbmFtZSBsYXllcnMgaW4gVGhyZWUuanMuXG4gICAqXG4gICAqIEBwYXJhbSBjYW1lcmFMYXllciBTcGVjaWZ5IHdoaWNoIGxheWVyIHdpbGwgYmUgZm9yIGBGaXJzdFBlcnNvbk9ubHlgIC8gYFRoaXJkUGVyc29uT25seWAuXG4gICAqL1xuICBwdWJsaWMgc2V0dXAoe1xuICAgIGZpcnN0UGVyc29uT25seUxheWVyID0gVlJNRmlyc3RQZXJzb24uREVGQVVMVF9GSVJTVFBFUlNPTl9PTkxZX0xBWUVSLFxuICAgIHRoaXJkUGVyc29uT25seUxheWVyID0gVlJNRmlyc3RQZXJzb24uREVGQVVMVF9USElSRFBFUlNPTl9PTkxZX0xBWUVSLFxuICB9ID0ge30pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWRMYXllcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXIgPSBmaXJzdFBlcnNvbk9ubHlMYXllcjtcbiAgICB0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllciA9IHRoaXJkUGVyc29uT25seUxheWVyO1xuXG4gICAgdGhpcy5tZXNoQW5ub3RhdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5tZXNoZXMuZm9yRWFjaCgobWVzaCkgPT4ge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZmlyc3RQZXJzb25Pbmx5Jykge1xuICAgICAgICAgIG1lc2gubGF5ZXJzLnNldCh0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllcik7XG4gICAgICAgICAgbWVzaC50cmF2ZXJzZSgoY2hpbGQpID0+IGNoaWxkLmxheWVycy5zZXQodGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICd0aGlyZFBlcnNvbk9ubHknKSB7XG4gICAgICAgICAgbWVzaC5sYXllcnMuc2V0KHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKTtcbiAgICAgICAgICBtZXNoLnRyYXZlcnNlKChjaGlsZCkgPT4gY2hpbGQubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcikpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgdGhpcy5fY3JlYXRlSGVhZGxlc3NNb2RlbChtZXNoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9pbml0aWFsaXplZExheWVycyA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9leGNsdWRlVHJpYW5nbGVzKHRyaWFuZ2xlczogbnVtYmVyW10sIGJ3czogbnVtYmVyW11bXSwgc2tpbkluZGV4OiBudW1iZXJbXVtdLCBleGNsdWRlOiBudW1iZXJbXSk6IG51bWJlciB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBpZiAoYndzICE9IG51bGwgJiYgYndzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpYW5nbGVzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIGNvbnN0IGEgPSB0cmlhbmdsZXNbaV07XG4gICAgICAgIGNvbnN0IGIgPSB0cmlhbmdsZXNbaSArIDFdO1xuICAgICAgICBjb25zdCBjID0gdHJpYW5nbGVzW2kgKyAyXTtcbiAgICAgICAgY29uc3QgYncwID0gYndzW2FdO1xuICAgICAgICBjb25zdCBza2luMCA9IHNraW5JbmRleFthXTtcblxuICAgICAgICBpZiAoYncwWzBdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4wWzBdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzBbMV0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjBbMV0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MFsyXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMFsyXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncwWzNdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4wWzNdKSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgYncxID0gYndzW2JdO1xuICAgICAgICBjb25zdCBza2luMSA9IHNraW5JbmRleFtiXTtcbiAgICAgICAgaWYgKGJ3MVswXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMVswXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncxWzFdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4xWzFdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzFbMl0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjFbMl0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MVszXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMVszXSkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGJ3MiA9IGJ3c1tjXTtcbiAgICAgICAgY29uc3Qgc2tpbjIgPSBza2luSW5kZXhbY107XG4gICAgICAgIGlmIChidzJbMF0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjJbMF0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MlsxXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMlsxXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncyWzJdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4yWzJdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzJbM10gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjJbM10pKSBjb250aW51ZTtcblxuICAgICAgICB0cmlhbmdsZXNbY291bnQrK10gPSBhO1xuICAgICAgICB0cmlhbmdsZXNbY291bnQrK10gPSBiO1xuICAgICAgICB0cmlhbmdsZXNbY291bnQrK10gPSBjO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFcmFzZWRNZXNoKHNyYzogVEhSRUUuU2tpbm5lZE1lc2gsIGVyYXNpbmdCb25lc0luZGV4OiBudW1iZXJbXSk6IFRIUkVFLlNraW5uZWRNZXNoIHtcbiAgICBjb25zdCBkc3QgPSBuZXcgVEhSRUUuU2tpbm5lZE1lc2goc3JjLmdlb21ldHJ5LmNsb25lKCksIHNyYy5tYXRlcmlhbCk7XG4gICAgZHN0Lm5hbWUgPSBgJHtzcmMubmFtZX0oZXJhc2UpYDtcbiAgICBkc3QuZnJ1c3R1bUN1bGxlZCA9IHNyYy5mcnVzdHVtQ3VsbGVkO1xuICAgIGRzdC5sYXllcnMuc2V0KHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyKTtcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gZHN0Lmdlb21ldHJ5O1xuXG4gICAgY29uc3Qgc2tpbkluZGV4QXR0ciA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgnc2tpbkluZGV4Jyk7XG4gICAgY29uc3Qgc2tpbkluZGV4QXR0ckFycmF5ID0gc2tpbkluZGV4QXR0ciBpbnN0YW5jZW9mIFRIUkVFLkdMQnVmZmVyQXR0cmlidXRlID8gW10gOiBza2luSW5kZXhBdHRyLmFycmF5O1xuICAgIGNvbnN0IHNraW5JbmRleCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbkluZGV4QXR0ckFycmF5Lmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICBza2luSW5kZXgucHVzaChbXG4gICAgICAgIHNraW5JbmRleEF0dHJBcnJheVtpXSxcbiAgICAgICAgc2tpbkluZGV4QXR0ckFycmF5W2kgKyAxXSxcbiAgICAgICAgc2tpbkluZGV4QXR0ckFycmF5W2kgKyAyXSxcbiAgICAgICAgc2tpbkluZGV4QXR0ckFycmF5W2kgKyAzXSxcbiAgICAgIF0pO1xuICAgIH1cblxuICAgIGNvbnN0IHNraW5XZWlnaHRBdHRyID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCdza2luV2VpZ2h0Jyk7XG4gICAgY29uc3Qgc2tpbldlaWdodEF0dHJBcnJheSA9IHNraW5XZWlnaHRBdHRyIGluc3RhbmNlb2YgVEhSRUUuR0xCdWZmZXJBdHRyaWJ1dGUgPyBbXSA6IHNraW5XZWlnaHRBdHRyLmFycmF5O1xuICAgIGNvbnN0IHNraW5XZWlnaHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraW5XZWlnaHRBdHRyQXJyYXkubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgIHNraW5XZWlnaHQucHVzaChbXG4gICAgICAgIHNraW5XZWlnaHRBdHRyQXJyYXlbaV0sXG4gICAgICAgIHNraW5XZWlnaHRBdHRyQXJyYXlbaSArIDFdLFxuICAgICAgICBza2luV2VpZ2h0QXR0ckFycmF5W2kgKyAyXSxcbiAgICAgICAgc2tpbldlaWdodEF0dHJBcnJheVtpICsgM10sXG4gICAgICBdKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG4gICAgaWYgKCFpbmRleCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGdlb21ldHJ5IGRvZXNuJ3QgaGF2ZSBhbiBpbmRleCBidWZmZXJcIik7XG4gICAgfVxuICAgIGNvbnN0IG9sZFRyaWFuZ2xlcyA9IEFycmF5LmZyb20oaW5kZXguYXJyYXkpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLl9leGNsdWRlVHJpYW5nbGVzKG9sZFRyaWFuZ2xlcywgc2tpbldlaWdodCwgc2tpbkluZGV4LCBlcmFzaW5nQm9uZXNJbmRleCk7XG4gICAgY29uc3QgbmV3VHJpYW5nbGU6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBuZXdUcmlhbmdsZVtpXSA9IG9sZFRyaWFuZ2xlc1tpXTtcbiAgICB9XG4gICAgZ2VvbWV0cnkuc2V0SW5kZXgobmV3VHJpYW5nbGUpO1xuXG4gICAgLy8gbXRvb24gbWF0ZXJpYWwgaW5jbHVkZXMgb25CZWZvcmVSZW5kZXIuIHRoaXMgaXMgdW5zdXBwb3J0ZWQgYXQgU2tpbm5lZE1lc2gjY2xvbmVcbiAgICBpZiAoc3JjLm9uQmVmb3JlUmVuZGVyKSB7XG4gICAgICBkc3Qub25CZWZvcmVSZW5kZXIgPSBzcmMub25CZWZvcmVSZW5kZXI7XG4gICAgfVxuICAgIGRzdC5iaW5kKG5ldyBUSFJFRS5Ta2VsZXRvbihzcmMuc2tlbGV0b24uYm9uZXMsIHNyYy5za2VsZXRvbi5ib25lSW52ZXJzZXMpLCBuZXcgVEhSRUUuTWF0cml4NCgpKTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlSGVhZGxlc3NNb2RlbEZvclNraW5uZWRNZXNoKHBhcmVudDogVEhSRUUuT2JqZWN0M0QsIG1lc2g6IFRIUkVFLlNraW5uZWRNZXNoKTogdm9pZCB7XG4gICAgY29uc3QgZXJhc2VCb25lSW5kZXhlczogbnVtYmVyW10gPSBbXTtcbiAgICBtZXNoLnNrZWxldG9uLmJvbmVzLmZvckVhY2goKGJvbmUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNFcmFzZVRhcmdldChib25lKSkgZXJhc2VCb25lSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICB9KTtcblxuICAgIC8vIFVubGlrZSBVbmlWUk0gd2UgZG9uJ3QgY29weSBtZXNoIGlmIG5vIGludmlzaWJsZSBib25lIHdhcyBmb3VuZFxuICAgIGlmICghZXJhc2VCb25lSW5kZXhlcy5sZW5ndGgpIHtcbiAgICAgIG1lc2gubGF5ZXJzLmVuYWJsZSh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcik7XG4gICAgICBtZXNoLmxheWVycy5lbmFibGUodGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtZXNoLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpO1xuICAgIGNvbnN0IG5ld01lc2ggPSB0aGlzLl9jcmVhdGVFcmFzZWRNZXNoKG1lc2gsIGVyYXNlQm9uZUluZGV4ZXMpO1xuICAgIHBhcmVudC5hZGQobmV3TWVzaCk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVIZWFkbGVzc01vZGVsKG5vZGU6IFRIUkVFLk9iamVjdDNEKTogdm9pZCB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ0dyb3VwJykge1xuICAgICAgbm9kZS5sYXllcnMuc2V0KHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKTtcbiAgICAgIGlmICh0aGlzLl9pc0VyYXNlVGFyZ2V0KG5vZGUpKSB7XG4gICAgICAgIG5vZGUudHJhdmVyc2UoKGNoaWxkKSA9PiBjaGlsZC5sYXllcnMuc2V0KHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgcGFyZW50Lm5hbWUgPSBgX2hlYWRsZXNzXyR7bm9kZS5uYW1lfWA7XG4gICAgICAgIHBhcmVudC5sYXllcnMuc2V0KHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyKTtcbiAgICAgICAgbm9kZS5wYXJlbnQhLmFkZChwYXJlbnQpO1xuICAgICAgICBub2RlLmNoaWxkcmVuXG4gICAgICAgICAgLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLnR5cGUgPT09ICdTa2lubmVkTWVzaCcpXG4gICAgICAgICAgLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBza2lubmVkTWVzaCA9IGNoaWxkIGFzIFRIUkVFLlNraW5uZWRNZXNoO1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlSGVhZGxlc3NNb2RlbEZvclNraW5uZWRNZXNoKHBhcmVudCwgc2tpbm5lZE1lc2gpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAnU2tpbm5lZE1lc2gnKSB7XG4gICAgICBjb25zdCBza2lubmVkTWVzaCA9IG5vZGUgYXMgVEhSRUUuU2tpbm5lZE1lc2g7XG4gICAgICB0aGlzLl9jcmVhdGVIZWFkbGVzc01vZGVsRm9yU2tpbm5lZE1lc2gobm9kZS5wYXJlbnQhLCBza2lubmVkTWVzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pc0VyYXNlVGFyZ2V0KG5vZGUpKSB7XG4gICAgICAgIG5vZGUubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcik7XG4gICAgICAgIG5vZGUudHJhdmVyc2UoKGNoaWxkKSA9PiBjaGlsZC5sYXllcnMuc2V0KHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNFcmFzZVRhcmdldChib25lOiBUSFJFRS5PYmplY3QzRCk6IGJvb2xlYW4ge1xuICAgIGlmIChib25lID09PSB0aGlzLmh1bWFub2lkLmdldFJhd0JvbmVOb2RlKCdoZWFkJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWJvbmUucGFyZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc0VyYXNlVGFyZ2V0KGJvbmUucGFyZW50KTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSAqIGFzIFYwVlJNIGZyb20gJ0BwaXhpdi90eXBlcy12cm0tMC4wJztcbmltcG9ydCB0eXBlICogYXMgVjFWUk1TY2hlbWEgZnJvbSAnQHBpeGl2L3R5cGVzLXZybWMtdnJtLTEuMCc7XG5pbXBvcnQgdHlwZSB7IEdMVEYsIEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuLi9odW1hbm9pZC9WUk1IdW1hbm9pZCc7XG5pbXBvcnQgeyBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZXMgfSBmcm9tICcuLi91dGlscy9nbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZSc7XG5pbXBvcnQgeyBWUk1GaXJzdFBlcnNvbiB9IGZyb20gJy4vVlJNRmlyc3RQZXJzb24nO1xuaW1wb3J0IHR5cGUgeyBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uIH0gZnJvbSAnLi9WUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uJztcbmltcG9ydCB0eXBlIHsgVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvblR5cGUgfSBmcm9tICcuL1ZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25UeXBlJztcbmltcG9ydCB7IEdMVEYgYXMgR0xURlNjaGVtYSB9IGZyb20gJ0BnbHRmLXRyYW5zZm9ybS9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBzcGVjIHZlcnNpb25zIGl0IHJlY29nbml6ZXMuXG4gKi9cbmNvbnN0IFBPU1NJQkxFX1NQRUNfVkVSU0lPTlMgPSBuZXcgU2V0KFsnMS4wJywgJzEuMC1iZXRhJ10pO1xuXG4vKipcbiAqIEEgcGx1Z2luIG9mIEdMVEZMb2FkZXIgdGhhdCBpbXBvcnRzIGEge0BsaW5rIFZSTUZpcnN0UGVyc29ufSBmcm9tIGEgVlJNIGV4dGVuc2lvbiBvZiBhIEdMVEYuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1GaXJzdFBlcnNvbkxvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIC8vIFdlIHNob3VsZCB1c2UgdGhlIGV4dGVuc2lvbiBuYW1lIGluc3RlYWQgYnV0IHdlIGhhdmUgbXVsdGlwbGUgcGx1Z2lucyBmb3IgYW4gZXh0ZW5zaW9uLi4uXG4gICAgcmV0dXJuICdWUk1GaXJzdFBlcnNvbkxvYWRlclBsdWdpbic7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyc2VyOiBHTFRGUGFyc2VyKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB2cm1IdW1hbm9pZCA9IGdsdGYudXNlckRhdGEudnJtSHVtYW5vaWQgYXMgVlJNSHVtYW5vaWQgfCB1bmRlZmluZWQ7XG5cbiAgICAvLyBleHBsaWNpdGx5IGRpc3Rpbmd1aXNoIG51bGwgYW5kIHVuZGVmaW5lZFxuICAgIC8vIHNpbmNlIHZybUh1bWFub2lkIG1pZ2h0IGJlIG51bGwgYXMgYSByZXN1bHRcbiAgICBpZiAodnJtSHVtYW5vaWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHZybUh1bWFub2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1ZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luOiB2cm1IdW1hbm9pZCBpcyB1bmRlZmluZWQuIFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luIGhhdmUgdG8gYmUgdXNlZCBmaXJzdCcsXG4gICAgICApO1xuICAgIH1cblxuICAgIGdsdGYudXNlckRhdGEudnJtRmlyc3RQZXJzb24gPSBhd2FpdCB0aGlzLl9pbXBvcnQoZ2x0ZiwgdnJtSHVtYW5vaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhIHtAbGluayBWUk1GaXJzdFBlcnNvbn0gZnJvbSBhIFZSTS5cbiAgICpcbiAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXG4gICAqIEBwYXJhbSBodW1hbm9pZCBBIHtAbGluayBWUk1IdW1hbm9pZH0gaW5zdGFuY2UgdGhhdCByZXByZXNlbnRzIHRoZSBWUk1cbiAgICovXG5cbiAgcHJpdmF0ZSBhc3luYyBfaW1wb3J0KGdsdGY6IEdMVEYsIGh1bWFub2lkOiBWUk1IdW1hbm9pZCB8IG51bGwpOiBQcm9taXNlPFZSTUZpcnN0UGVyc29uIHwgbnVsbD4ge1xuICAgIGlmIChodW1hbm9pZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB2MVJlc3VsdCA9IGF3YWl0IHRoaXMuX3YxSW1wb3J0KGdsdGYsIGh1bWFub2lkKTtcbiAgICBpZiAodjFSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MVJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCB2MFJlc3VsdCA9IGF3YWl0IHRoaXMuX3YwSW1wb3J0KGdsdGYsIGh1bWFub2lkKTtcbiAgICBpZiAodjBSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MFJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YxSW1wb3J0KGdsdGY6IEdMVEYsIGh1bWFub2lkOiBWUk1IdW1hbm9pZCk6IFByb21pc2U8VlJNRmlyc3RQZXJzb24gfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IGlzVlJNVXNlZCA9IGpzb24uZXh0ZW5zaW9uc1VzZWQ/LmluZGV4T2YoJ1ZSTUNfdnJtJykgIT09IC0xO1xuICAgIGlmICghaXNWUk1Vc2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbnNpb24gPSBqc29uLmV4dGVuc2lvbnM/LlsnVlJNQ192cm0nXSBhcyBWMVZSTVNjaGVtYS5WUk1DVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVjVmVyc2lvbiA9IGV4dGVuc2lvbi5zcGVjVmVyc2lvbjtcbiAgICBpZiAoIVBPU1NJQkxFX1NQRUNfVkVSU0lPTlMuaGFzKHNwZWNWZXJzaW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKGBWUk1GaXJzdFBlcnNvbkxvYWRlclBsdWdpbjogVW5rbm93biBWUk1DX3ZybSBzcGVjVmVyc2lvbiBcIiR7c3BlY1ZlcnNpb259XCJgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYUZpcnN0UGVyc29uID0gZXh0ZW5zaW9uLmZpcnN0UGVyc29uO1xuICAgIGlmICghc2NoZW1hRmlyc3RQZXJzb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc2hBbm5vdGF0aW9uczogVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbltdID0gW107XG4gICAgY29uc3Qgbm9kZVByaW1pdGl2ZXNNYXAgPSBhd2FpdCBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZXMoZ2x0Zik7XG4gICAgQXJyYXkuZnJvbShub2RlUHJpbWl0aXZlc01hcC5lbnRyaWVzKCkpLmZvckVhY2goKFtub2RlSW5kZXgsIHByaW1pdGl2ZXNdKSA9PiB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uID0gc2NoZW1hRmlyc3RQZXJzb24ubWVzaEFubm90YXRpb25zXG4gICAgICAgID8gc2NoZW1hRmlyc3RQZXJzb24ubWVzaEFubm90YXRpb25zLmZpbmQoKGEpID0+IGEubm9kZSA9PT0gbm9kZUluZGV4KVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgbWVzaEFubm90YXRpb25zLnB1c2goe1xuICAgICAgICBtZXNoZXM6IHByaW1pdGl2ZXMsXG4gICAgICAgIHR5cGU6IGFubm90YXRpb24/LnR5cGUgPz8gJ2JvdGgnLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IFZSTUZpcnN0UGVyc29uKGh1bWFub2lkLCBtZXNoQW5ub3RhdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjBJbXBvcnQoZ2x0ZjogR0xURiwgaHVtYW5vaWQ6IFZSTUh1bWFub2lkKTogUHJvbWlzZTxWUk1GaXJzdFBlcnNvbiB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgY29uc3QgdnJtRXh0ID0ganNvbi5leHRlbnNpb25zPy5WUk0gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdnJtRXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFGaXJzdFBlcnNvbjogVjBWUk0uRmlyc3RQZXJzb24gfCB1bmRlZmluZWQgPSB2cm1FeHQuZmlyc3RQZXJzb247XG4gICAgaWYgKCFzY2hlbWFGaXJzdFBlcnNvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbWVzaEFubm90YXRpb25zOiBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uW10gPSBbXTtcbiAgICBjb25zdCBub2RlUHJpbWl0aXZlc01hcCA9IGF3YWl0IGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlcyhnbHRmKTtcblxuICAgIEFycmF5LmZyb20obm9kZVByaW1pdGl2ZXNNYXAuZW50cmllcygpKS5mb3JFYWNoKChbbm9kZUluZGV4LCBwcmltaXRpdmVzXSkgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1hTm9kZSA9IGpzb24ubm9kZXMhW25vZGVJbmRleF07XG5cbiAgICAgIGNvbnN0IGZsYWcgPSBzY2hlbWFGaXJzdFBlcnNvbi5tZXNoQW5ub3RhdGlvbnNcbiAgICAgICAgPyBzY2hlbWFGaXJzdFBlcnNvbi5tZXNoQW5ub3RhdGlvbnMuZmluZCgoYSkgPT4gYS5tZXNoID09PSBzY2hlbWFOb2RlLm1lc2gpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBtZXNoQW5ub3RhdGlvbnMucHVzaCh7XG4gICAgICAgIG1lc2hlczogcHJpbWl0aXZlcyxcbiAgICAgICAgdHlwZTogdGhpcy5fY29udmVydFYwRmxhZ1RvVjFUeXBlKGZsYWc/LmZpcnN0UGVyc29uRmxhZyksXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgVlJNRmlyc3RQZXJzb24oaHVtYW5vaWQsIG1lc2hBbm5vdGF0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF9jb252ZXJ0VjBGbGFnVG9WMVR5cGUoZmxhZzogc3RyaW5nIHwgdW5kZWZpbmVkKTogVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvblR5cGUge1xuICAgIGlmIChmbGFnID09PSAnRmlyc3RQZXJzb25Pbmx5Jykge1xuICAgICAgcmV0dXJuICdmaXJzdFBlcnNvbk9ubHknO1xuICAgIH0gZWxzZSBpZiAoZmxhZyA9PT0gJ1RoaXJkUGVyc29uT25seScpIHtcbiAgICAgIHJldHVybiAndGhpcmRQZXJzb25Pbmx5JztcbiAgICB9IGVsc2UgaWYgKGZsYWcgPT09ICdBdXRvJykge1xuICAgICAgcmV0dXJuICdhdXRvJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdib3RoJztcbiAgICB9XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuZXhwb3J0IGNvbnN0IFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25UeXBlID0ge1xuICBBdXRvOiAnYXV0bycsXG4gIEJvdGg6ICdib3RoJyxcbiAgVGhpcmRQZXJzb25Pbmx5OiAndGhpcmRQZXJzb25Pbmx5JyxcbiAgRmlyc3RQZXJzb25Pbmx5OiAnZmlyc3RQZXJzb25Pbmx5Jyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25UeXBlID1cbiAgKHR5cGVvZiBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZSlba2V5b2YgdHlwZW9mIFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25UeXBlXTtcbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1IdW1hbkJvbmUgfSBmcm9tICcuLi9WUk1IdW1hbkJvbmUnO1xuaW1wb3J0IHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuLi9WUk1IdW1hbm9pZCc7XG5cbmNvbnN0IF92M0EgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3YzQiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5leHBvcnQgY2xhc3MgVlJNSHVtYW5vaWRIZWxwZXIgZXh0ZW5kcyBUSFJFRS5Hcm91cCB7XG4gIHB1YmxpYyByZWFkb25seSB2cm1IdW1hbm9pZDogVlJNSHVtYW5vaWQ7XG4gIHByaXZhdGUgX2JvbmVBeGVzTWFwOiBNYXA8VlJNSHVtYW5Cb25lLCBUSFJFRS5BeGVzSGVscGVyPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoaHVtYW5vaWQ6IFZSTUh1bWFub2lkKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudnJtSHVtYW5vaWQgPSBodW1hbm9pZDtcblxuICAgIHRoaXMuX2JvbmVBeGVzTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhodW1hbm9pZC5odW1hbkJvbmVzKS5mb3JFYWNoKChib25lKSA9PiB7XG4gICAgICBjb25zdCBoZWxwZXIgPSBuZXcgVEhSRUUuQXhlc0hlbHBlcigxLjApO1xuXG4gICAgICBoZWxwZXIubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAoaGVscGVyLm1hdGVyaWFsIGFzIFRIUkVFLk1hdGVyaWFsKS5kZXB0aFRlc3QgPSBmYWxzZTtcbiAgICAgIChoZWxwZXIubWF0ZXJpYWwgYXMgVEhSRUUuTWF0ZXJpYWwpLmRlcHRoV3JpdGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5hZGQoaGVscGVyKTtcblxuICAgICAgdGhpcy5fYm9uZUF4ZXNNYXAuc2V0KGJvbmUsIGhlbHBlcik7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBBcnJheS5mcm9tKHRoaXMuX2JvbmVBeGVzTWFwLnZhbHVlcygpKS5mb3JFYWNoKChheGVzKSA9PiB7XG4gICAgICBheGVzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgICAgIChheGVzLm1hdGVyaWFsIGFzIFRIUkVFLk1hdGVyaWFsKS5kaXNwb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlTWF0cml4V29ybGQoZm9yY2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBBcnJheS5mcm9tKHRoaXMuX2JvbmVBeGVzTWFwLmVudHJpZXMoKSkuZm9yRWFjaCgoW2JvbmUsIGF4ZXNdKSA9PiB7XG4gICAgICBib25lLm5vZGUudXBkYXRlV29ybGRNYXRyaXgodHJ1ZSwgZmFsc2UpO1xuXG4gICAgICBib25lLm5vZGUubWF0cml4V29ybGQuZGVjb21wb3NlKF92M0EsIF9xdWF0QSwgX3YzQik7XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gX3YzQS5zZXQoMC4xLCAwLjEsIDAuMSkuZGl2aWRlKF92M0IpO1xuICAgICAgYXhlcy5tYXRyaXguY29weShib25lLm5vZGUubWF0cml4V29ybGQpLnNjYWxlKHNjYWxlKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVwZGF0ZU1hdHJpeFdvcmxkKGZvcmNlKTtcbiAgfVxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG5pbXBvcnQgeyBWUk1IdW1hbkJvbmVOYW1lIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVOYW1lJztcblxuLyoqXG4gKiBUaGUgbGlzdCBvZiB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0uIERlcGVuZGVuY3kgYXdhcmUuXG4gKi9cbmV4cG9ydCBjb25zdCBWUk1IdW1hbkJvbmVMaXN0OiBWUk1IdW1hbkJvbmVOYW1lW10gPSBbXG4gICdoaXBzJyxcbiAgJ3NwaW5lJyxcbiAgJ2NoZXN0JyxcbiAgJ3VwcGVyQ2hlc3QnLFxuICAnbmVjaycsXG5cbiAgJ2hlYWQnLFxuICAnbGVmdEV5ZScsXG4gICdyaWdodEV5ZScsXG4gICdqYXcnLFxuXG4gICdsZWZ0VXBwZXJMZWcnLFxuICAnbGVmdExvd2VyTGVnJyxcbiAgJ2xlZnRGb290JyxcbiAgJ2xlZnRUb2VzJyxcblxuICAncmlnaHRVcHBlckxlZycsXG4gICdyaWdodExvd2VyTGVnJyxcbiAgJ3JpZ2h0Rm9vdCcsXG4gICdyaWdodFRvZXMnLFxuXG4gICdsZWZ0U2hvdWxkZXInLFxuICAnbGVmdFVwcGVyQXJtJyxcbiAgJ2xlZnRMb3dlckFybScsXG4gICdsZWZ0SGFuZCcsXG5cbiAgJ3JpZ2h0U2hvdWxkZXInLFxuICAncmlnaHRVcHBlckFybScsXG4gICdyaWdodExvd2VyQXJtJyxcbiAgJ3JpZ2h0SGFuZCcsXG5cbiAgJ2xlZnRUaHVtYk1ldGFjYXJwYWwnLFxuICAnbGVmdFRodW1iUHJveGltYWwnLFxuICAnbGVmdFRodW1iRGlzdGFsJyxcbiAgJ2xlZnRJbmRleFByb3hpbWFsJyxcbiAgJ2xlZnRJbmRleEludGVybWVkaWF0ZScsXG4gICdsZWZ0SW5kZXhEaXN0YWwnLFxuICAnbGVmdE1pZGRsZVByb3hpbWFsJyxcbiAgJ2xlZnRNaWRkbGVJbnRlcm1lZGlhdGUnLFxuICAnbGVmdE1pZGRsZURpc3RhbCcsXG4gICdsZWZ0UmluZ1Byb3hpbWFsJyxcbiAgJ2xlZnRSaW5nSW50ZXJtZWRpYXRlJyxcbiAgJ2xlZnRSaW5nRGlzdGFsJyxcbiAgJ2xlZnRMaXR0bGVQcm94aW1hbCcsXG4gICdsZWZ0TGl0dGxlSW50ZXJtZWRpYXRlJyxcbiAgJ2xlZnRMaXR0bGVEaXN0YWwnLFxuXG4gICdyaWdodFRodW1iTWV0YWNhcnBhbCcsXG4gICdyaWdodFRodW1iUHJveGltYWwnLFxuICAncmlnaHRUaHVtYkRpc3RhbCcsXG4gICdyaWdodEluZGV4UHJveGltYWwnLFxuICAncmlnaHRJbmRleEludGVybWVkaWF0ZScsXG4gICdyaWdodEluZGV4RGlzdGFsJyxcbiAgJ3JpZ2h0TWlkZGxlUHJveGltYWwnLFxuICAncmlnaHRNaWRkbGVJbnRlcm1lZGlhdGUnLFxuICAncmlnaHRNaWRkbGVEaXN0YWwnLFxuICAncmlnaHRSaW5nUHJveGltYWwnLFxuICAncmlnaHRSaW5nSW50ZXJtZWRpYXRlJyxcbiAgJ3JpZ2h0UmluZ0Rpc3RhbCcsXG4gICdyaWdodExpdHRsZVByb3hpbWFsJyxcbiAgJ3JpZ2h0TGl0dGxlSW50ZXJtZWRpYXRlJyxcbiAgJ3JpZ2h0TGl0dGxlRGlzdGFsJyxcbl07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbi8qKlxuICogVGhlIG5hbWVzIG9mIHtAbGluayBWUk1IdW1hbm9pZH0gYm9uZSBuYW1lcy5cbiAqXG4gKiBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS92cm0tYy92cm0tc3BlY2lmaWNhdGlvbi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uL1ZSTUNfdnJtLTEuMC9odW1hbm9pZC5tZFxuICovXG5leHBvcnQgY29uc3QgVlJNSHVtYW5Cb25lTmFtZSA9IHtcbiAgSGlwczogJ2hpcHMnLFxuICBTcGluZTogJ3NwaW5lJyxcbiAgQ2hlc3Q6ICdjaGVzdCcsXG4gIFVwcGVyQ2hlc3Q6ICd1cHBlckNoZXN0JyxcbiAgTmVjazogJ25lY2snLFxuXG4gIEhlYWQ6ICdoZWFkJyxcbiAgTGVmdEV5ZTogJ2xlZnRFeWUnLFxuICBSaWdodEV5ZTogJ3JpZ2h0RXllJyxcbiAgSmF3OiAnamF3JyxcblxuICBMZWZ0VXBwZXJMZWc6ICdsZWZ0VXBwZXJMZWcnLFxuICBMZWZ0TG93ZXJMZWc6ICdsZWZ0TG93ZXJMZWcnLFxuICBMZWZ0Rm9vdDogJ2xlZnRGb290JyxcbiAgTGVmdFRvZXM6ICdsZWZ0VG9lcycsXG5cbiAgUmlnaHRVcHBlckxlZzogJ3JpZ2h0VXBwZXJMZWcnLFxuICBSaWdodExvd2VyTGVnOiAncmlnaHRMb3dlckxlZycsXG4gIFJpZ2h0Rm9vdDogJ3JpZ2h0Rm9vdCcsXG4gIFJpZ2h0VG9lczogJ3JpZ2h0VG9lcycsXG5cbiAgTGVmdFNob3VsZGVyOiAnbGVmdFNob3VsZGVyJyxcbiAgTGVmdFVwcGVyQXJtOiAnbGVmdFVwcGVyQXJtJyxcbiAgTGVmdExvd2VyQXJtOiAnbGVmdExvd2VyQXJtJyxcbiAgTGVmdEhhbmQ6ICdsZWZ0SGFuZCcsXG5cbiAgUmlnaHRTaG91bGRlcjogJ3JpZ2h0U2hvdWxkZXInLFxuICBSaWdodFVwcGVyQXJtOiAncmlnaHRVcHBlckFybScsXG4gIFJpZ2h0TG93ZXJBcm06ICdyaWdodExvd2VyQXJtJyxcbiAgUmlnaHRIYW5kOiAncmlnaHRIYW5kJyxcblxuICBMZWZ0VGh1bWJNZXRhY2FycGFsOiAnbGVmdFRodW1iTWV0YWNhcnBhbCcsXG4gIExlZnRUaHVtYlByb3hpbWFsOiAnbGVmdFRodW1iUHJveGltYWwnLFxuICBMZWZ0VGh1bWJEaXN0YWw6ICdsZWZ0VGh1bWJEaXN0YWwnLFxuICBMZWZ0SW5kZXhQcm94aW1hbDogJ2xlZnRJbmRleFByb3hpbWFsJyxcbiAgTGVmdEluZGV4SW50ZXJtZWRpYXRlOiAnbGVmdEluZGV4SW50ZXJtZWRpYXRlJyxcbiAgTGVmdEluZGV4RGlzdGFsOiAnbGVmdEluZGV4RGlzdGFsJyxcbiAgTGVmdE1pZGRsZVByb3hpbWFsOiAnbGVmdE1pZGRsZVByb3hpbWFsJyxcbiAgTGVmdE1pZGRsZUludGVybWVkaWF0ZTogJ2xlZnRNaWRkbGVJbnRlcm1lZGlhdGUnLFxuICBMZWZ0TWlkZGxlRGlzdGFsOiAnbGVmdE1pZGRsZURpc3RhbCcsXG4gIExlZnRSaW5nUHJveGltYWw6ICdsZWZ0UmluZ1Byb3hpbWFsJyxcbiAgTGVmdFJpbmdJbnRlcm1lZGlhdGU6ICdsZWZ0UmluZ0ludGVybWVkaWF0ZScsXG4gIExlZnRSaW5nRGlzdGFsOiAnbGVmdFJpbmdEaXN0YWwnLFxuICBMZWZ0TGl0dGxlUHJveGltYWw6ICdsZWZ0TGl0dGxlUHJveGltYWwnLFxuICBMZWZ0TGl0dGxlSW50ZXJtZWRpYXRlOiAnbGVmdExpdHRsZUludGVybWVkaWF0ZScsXG4gIExlZnRMaXR0bGVEaXN0YWw6ICdsZWZ0TGl0dGxlRGlzdGFsJyxcblxuICBSaWdodFRodW1iTWV0YWNhcnBhbDogJ3JpZ2h0VGh1bWJNZXRhY2FycGFsJyxcbiAgUmlnaHRUaHVtYlByb3hpbWFsOiAncmlnaHRUaHVtYlByb3hpbWFsJyxcbiAgUmlnaHRUaHVtYkRpc3RhbDogJ3JpZ2h0VGh1bWJEaXN0YWwnLFxuICBSaWdodEluZGV4UHJveGltYWw6ICdyaWdodEluZGV4UHJveGltYWwnLFxuICBSaWdodEluZGV4SW50ZXJtZWRpYXRlOiAncmlnaHRJbmRleEludGVybWVkaWF0ZScsXG4gIFJpZ2h0SW5kZXhEaXN0YWw6ICdyaWdodEluZGV4RGlzdGFsJyxcbiAgUmlnaHRNaWRkbGVQcm94aW1hbDogJ3JpZ2h0TWlkZGxlUHJveGltYWwnLFxuICBSaWdodE1pZGRsZUludGVybWVkaWF0ZTogJ3JpZ2h0TWlkZGxlSW50ZXJtZWRpYXRlJyxcbiAgUmlnaHRNaWRkbGVEaXN0YWw6ICdyaWdodE1pZGRsZURpc3RhbCcsXG4gIFJpZ2h0UmluZ1Byb3hpbWFsOiAncmlnaHRSaW5nUHJveGltYWwnLFxuICBSaWdodFJpbmdJbnRlcm1lZGlhdGU6ICdyaWdodFJpbmdJbnRlcm1lZGlhdGUnLFxuICBSaWdodFJpbmdEaXN0YWw6ICdyaWdodFJpbmdEaXN0YWwnLFxuICBSaWdodExpdHRsZVByb3hpbWFsOiAncmlnaHRMaXR0bGVQcm94aW1hbCcsXG4gIFJpZ2h0TGl0dGxlSW50ZXJtZWRpYXRlOiAncmlnaHRMaXR0bGVJbnRlcm1lZGlhdGUnLFxuICBSaWdodExpdHRsZURpc3RhbDogJ3JpZ2h0TGl0dGxlRGlzdGFsJyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFZSTUh1bWFuQm9uZU5hbWUgPSAodHlwZW9mIFZSTUh1bWFuQm9uZU5hbWUpW2tleW9mIHR5cGVvZiBWUk1IdW1hbkJvbmVOYW1lXTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuaW1wb3J0IHsgVlJNSHVtYW5Cb25lTmFtZSB9IGZyb20gJy4vVlJNSHVtYW5Cb25lTmFtZSc7XG5cbi8qKlxuICogQW4gb2JqZWN0IHRoYXQgbWFwcyBmcm9tIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfSB0byBpdHMgcGFyZW50IHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfS5cbiAqXG4gKiBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS92cm0tYy92cm0tc3BlY2lmaWNhdGlvbi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uL1ZSTUNfdnJtLTEuMC9odW1hbm9pZC5tZFxuICovXG5leHBvcnQgY29uc3QgVlJNSHVtYW5Cb25lUGFyZW50TWFwOiB7IFtib25lIGluIFZSTUh1bWFuQm9uZU5hbWVdOiBWUk1IdW1hbkJvbmVOYW1lIHwgbnVsbCB9ID0ge1xuICBoaXBzOiBudWxsLFxuICBzcGluZTogJ2hpcHMnLFxuICBjaGVzdDogJ3NwaW5lJyxcbiAgdXBwZXJDaGVzdDogJ2NoZXN0JyxcbiAgbmVjazogJ3VwcGVyQ2hlc3QnLFxuXG4gIGhlYWQ6ICduZWNrJyxcbiAgbGVmdEV5ZTogJ2hlYWQnLFxuICByaWdodEV5ZTogJ2hlYWQnLFxuICBqYXc6ICdoZWFkJyxcblxuICBsZWZ0VXBwZXJMZWc6ICdoaXBzJyxcbiAgbGVmdExvd2VyTGVnOiAnbGVmdFVwcGVyTGVnJyxcbiAgbGVmdEZvb3Q6ICdsZWZ0TG93ZXJMZWcnLFxuICBsZWZ0VG9lczogJ2xlZnRGb290JyxcblxuICByaWdodFVwcGVyTGVnOiAnaGlwcycsXG4gIHJpZ2h0TG93ZXJMZWc6ICdyaWdodFVwcGVyTGVnJyxcbiAgcmlnaHRGb290OiAncmlnaHRMb3dlckxlZycsXG4gIHJpZ2h0VG9lczogJ3JpZ2h0Rm9vdCcsXG5cbiAgbGVmdFNob3VsZGVyOiAndXBwZXJDaGVzdCcsXG4gIGxlZnRVcHBlckFybTogJ2xlZnRTaG91bGRlcicsXG4gIGxlZnRMb3dlckFybTogJ2xlZnRVcHBlckFybScsXG4gIGxlZnRIYW5kOiAnbGVmdExvd2VyQXJtJyxcblxuICByaWdodFNob3VsZGVyOiAndXBwZXJDaGVzdCcsXG4gIHJpZ2h0VXBwZXJBcm06ICdyaWdodFNob3VsZGVyJyxcbiAgcmlnaHRMb3dlckFybTogJ3JpZ2h0VXBwZXJBcm0nLFxuICByaWdodEhhbmQ6ICdyaWdodExvd2VyQXJtJyxcblxuICBsZWZ0VGh1bWJNZXRhY2FycGFsOiAnbGVmdEhhbmQnLFxuICBsZWZ0VGh1bWJQcm94aW1hbDogJ2xlZnRUaHVtYk1ldGFjYXJwYWwnLFxuICBsZWZ0VGh1bWJEaXN0YWw6ICdsZWZ0VGh1bWJQcm94aW1hbCcsXG4gIGxlZnRJbmRleFByb3hpbWFsOiAnbGVmdEhhbmQnLFxuICBsZWZ0SW5kZXhJbnRlcm1lZGlhdGU6ICdsZWZ0SW5kZXhQcm94aW1hbCcsXG4gIGxlZnRJbmRleERpc3RhbDogJ2xlZnRJbmRleEludGVybWVkaWF0ZScsXG4gIGxlZnRNaWRkbGVQcm94aW1hbDogJ2xlZnRIYW5kJyxcbiAgbGVmdE1pZGRsZUludGVybWVkaWF0ZTogJ2xlZnRNaWRkbGVQcm94aW1hbCcsXG4gIGxlZnRNaWRkbGVEaXN0YWw6ICdsZWZ0TWlkZGxlSW50ZXJtZWRpYXRlJyxcbiAgbGVmdFJpbmdQcm94aW1hbDogJ2xlZnRIYW5kJyxcbiAgbGVmdFJpbmdJbnRlcm1lZGlhdGU6ICdsZWZ0UmluZ1Byb3hpbWFsJyxcbiAgbGVmdFJpbmdEaXN0YWw6ICdsZWZ0UmluZ0ludGVybWVkaWF0ZScsXG4gIGxlZnRMaXR0bGVQcm94aW1hbDogJ2xlZnRIYW5kJyxcbiAgbGVmdExpdHRsZUludGVybWVkaWF0ZTogJ2xlZnRMaXR0bGVQcm94aW1hbCcsXG4gIGxlZnRMaXR0bGVEaXN0YWw6ICdsZWZ0TGl0dGxlSW50ZXJtZWRpYXRlJyxcblxuICByaWdodFRodW1iTWV0YWNhcnBhbDogJ3JpZ2h0SGFuZCcsXG4gIHJpZ2h0VGh1bWJQcm94aW1hbDogJ3JpZ2h0VGh1bWJNZXRhY2FycGFsJyxcbiAgcmlnaHRUaHVtYkRpc3RhbDogJ3JpZ2h0VGh1bWJQcm94aW1hbCcsXG4gIHJpZ2h0SW5kZXhQcm94aW1hbDogJ3JpZ2h0SGFuZCcsXG4gIHJpZ2h0SW5kZXhJbnRlcm1lZGlhdGU6ICdyaWdodEluZGV4UHJveGltYWwnLFxuICByaWdodEluZGV4RGlzdGFsOiAncmlnaHRJbmRleEludGVybWVkaWF0ZScsXG4gIHJpZ2h0TWlkZGxlUHJveGltYWw6ICdyaWdodEhhbmQnLFxuICByaWdodE1pZGRsZUludGVybWVkaWF0ZTogJ3JpZ2h0TWlkZGxlUHJveGltYWwnLFxuICByaWdodE1pZGRsZURpc3RhbDogJ3JpZ2h0TWlkZGxlSW50ZXJtZWRpYXRlJyxcbiAgcmlnaHRSaW5nUHJveGltYWw6ICdyaWdodEhhbmQnLFxuICByaWdodFJpbmdJbnRlcm1lZGlhdGU6ICdyaWdodFJpbmdQcm94aW1hbCcsXG4gIHJpZ2h0UmluZ0Rpc3RhbDogJ3JpZ2h0UmluZ0ludGVybWVkaWF0ZScsXG4gIHJpZ2h0TGl0dGxlUHJveGltYWw6ICdyaWdodEhhbmQnLFxuICByaWdodExpdHRsZUludGVybWVkaWF0ZTogJ3JpZ2h0TGl0dGxlUHJveGltYWwnLFxuICByaWdodExpdHRsZURpc3RhbDogJ3JpZ2h0TGl0dGxlSW50ZXJtZWRpYXRlJyxcbn07XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgcXVhdEludmVydENvbXBhdCB9IGZyb20gJy4uL3V0aWxzL3F1YXRJbnZlcnRDb21wYXQnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmUgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFuQm9uZXMgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZXMnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmVOYW1lIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVOYW1lJztcbmltcG9ydCB0eXBlIHsgVlJNUG9zZSB9IGZyb20gJy4vVlJNUG9zZSc7XG5cbmNvbnN0IF92M0EgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3F1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuLyoqXG4gKiBBIGNsYXNzIHJlcHJlc2VudHMgdGhlIFJpZyBvZiBhIFZSTS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTVJpZyB7XG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1IdW1hbkJvbmVzfSB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgaHVtYW4gYm9uZXMgb2YgdGhlIFZSTS5cbiAgICogWW91IG1pZ2h0IHdhbnQgdG8gZ2V0IHRoZXNlIGJvbmVzIHVzaW5nIHtAbGluayBWUk1IdW1hbm9pZC5nZXRCb25lfS5cbiAgICovXG4gIHB1YmxpYyBodW1hbkJvbmVzOiBWUk1IdW1hbkJvbmVzO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Qb3NlfSB0aGF0IGlzIGl0cyBkZWZhdWx0IHN0YXRlLlxuICAgKiBOb3RlIHRoYXQgaXQncyBub3QgY29tcGF0aWJsZSB3aXRoIHtAbGluayBzZXRQb3NlfSBhbmQge0BsaW5rIGdldFBvc2V9LCBzaW5jZSBpdCBjb250YWlucyBub24tcmVsYXRpdmUgdmFsdWVzIG9mIGVhY2ggbG9jYWwgdHJhbnNmb3Jtcy5cbiAgICovXG4gIHB1YmxpYyByZXN0UG9zZTogVlJNUG9zZTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHtAbGluayBWUk1IdW1hbm9pZH0uXG4gICAqIEBwYXJhbSBodW1hbkJvbmVzIEEge0BsaW5rIFZSTUh1bWFuQm9uZXN9IGNvbnRhaW5zIGFsbCB0aGUgYm9uZXMgb2YgdGhlIG5ldyBodW1hbm9pZFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKGh1bWFuQm9uZXM6IFZSTUh1bWFuQm9uZXMpIHtcbiAgICB0aGlzLmh1bWFuQm9uZXMgPSBodW1hbkJvbmVzO1xuXG4gICAgdGhpcy5yZXN0UG9zZSA9IHRoaXMuZ2V0QWJzb2x1dGVQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IGFic29sdXRlIHBvc2Ugb2YgdGhpcyBodW1hbm9pZCBhcyBhIHtAbGluayBWUk1Qb3NlfS5cbiAgICogTm90ZSB0aGF0IHRoZSBvdXRwdXQgcmVzdWx0IHdpbGwgY29udGFpbiBpbml0aWFsIHN0YXRlIG9mIHRoZSBWUk0gYW5kIG5vdCBjb21wYXRpYmxlIGJldHdlZW4gZGlmZmVyZW50IG1vZGVscy5cbiAgICogWW91IG1pZ2h0IHdhbnQgdG8gdXNlIHtAbGluayBnZXRQb3NlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGdldEFic29sdXRlUG9zZSgpOiBWUk1Qb3NlIHtcbiAgICBjb25zdCBwb3NlID0ge30gYXMgVlJNUG9zZTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaHVtYW5Cb25lcykuZm9yRWFjaCgodnJtQm9uZU5hbWVTdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHZybUJvbmVOYW1lID0gdnJtQm9uZU5hbWVTdHJpbmcgYXMgVlJNSHVtYW5Cb25lTmFtZTtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldEJvbmVOb2RlKHZybUJvbmVOYW1lKTtcblxuICAgICAgLy8gSWdub3JlIHdoZW4gdGhlcmUgYXJlIG5vIGJvbmUgb24gdGhlIFZSTUh1bWFub2lkXG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgdGhlIHBvc2l0aW9uIC8gcm90YXRpb24gZnJvbSB0aGUgbm9kZVxuICAgICAgX3YzQS5jb3B5KG5vZGUucG9zaXRpb24pO1xuICAgICAgX3F1YXRBLmNvcHkobm9kZS5xdWF0ZXJuaW9uKTtcblxuICAgICAgLy8gQ29udmVydCB0byByYXcgYXJyYXlzXG4gICAgICBwb3NlW3ZybUJvbmVOYW1lXSA9IHtcbiAgICAgICAgcG9zaXRpb246IF92M0EudG9BcnJheSgpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcbiAgICAgICAgcm90YXRpb246IF9xdWF0QS50b0FycmF5KCkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBvc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2Ugb2YgdGhpcyBodW1hbm9pZCBhcyBhIHtAbGluayBWUk1Qb3NlfS5cbiAgICpcbiAgICogRWFjaCB0cmFuc2Zvcm0gaXMgYSBsb2NhbCB0cmFuc2Zvcm0gcmVsYXRpdmUgZnJvbSByZXN0IHBvc2UgKFQtcG9zZSkuXG4gICAqL1xuICBwdWJsaWMgZ2V0UG9zZSgpOiBWUk1Qb3NlIHtcbiAgICBjb25zdCBwb3NlID0ge30gYXMgVlJNUG9zZTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaHVtYW5Cb25lcykuZm9yRWFjaCgoYm9uZU5hbWVTdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGJvbmVOYW1lID0gYm9uZU5hbWVTdHJpbmcgYXMgVlJNSHVtYW5Cb25lTmFtZTtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldEJvbmVOb2RlKGJvbmVOYW1lKTtcblxuICAgICAgLy8gSWdub3JlIHdoZW4gdGhlcmUgYXJlIG5vIGJvbmUgb24gdGhlIFZSTUh1bWFub2lkXG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUYWtlIGEgZGlmZiBmcm9tIHJlc3RQb3NlXG4gICAgICBfdjNBLnNldCgwLCAwLCAwKTtcbiAgICAgIF9xdWF0QS5pZGVudGl0eSgpO1xuXG4gICAgICBjb25zdCByZXN0U3RhdGUgPSB0aGlzLnJlc3RQb3NlW2JvbmVOYW1lXTtcbiAgICAgIGlmIChyZXN0U3RhdGU/LnBvc2l0aW9uKSB7XG4gICAgICAgIF92M0EuZnJvbUFycmF5KHJlc3RTdGF0ZS5wb3NpdGlvbikubmVnYXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdFN0YXRlPy5yb3RhdGlvbikge1xuICAgICAgICBxdWF0SW52ZXJ0Q29tcGF0KF9xdWF0QS5mcm9tQXJyYXkocmVzdFN0YXRlLnJvdGF0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgcG9zaXRpb24gLyByb3RhdGlvbiBmcm9tIHRoZSBub2RlXG4gICAgICBfdjNBLmFkZChub2RlLnBvc2l0aW9uKTtcbiAgICAgIF9xdWF0QS5wcmVtdWx0aXBseShub2RlLnF1YXRlcm5pb24pO1xuXG4gICAgICAvLyBDb252ZXJ0IHRvIHJhdyBhcnJheXNcbiAgICAgIHBvc2VbYm9uZU5hbWVdID0ge1xuICAgICAgICBwb3NpdGlvbjogX3YzQS50b0FycmF5KCkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICAgICAgICByb3RhdGlvbjogX3F1YXRBLnRvQXJyYXkoKSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMZXQgdGhlIGh1bWFub2lkIGRvIGEgc3BlY2lmaWVkIHBvc2UuXG4gICAqXG4gICAqIEVhY2ggdHJhbnNmb3JtIGhhdmUgdG8gYmUgYSBsb2NhbCB0cmFuc2Zvcm0gcmVsYXRpdmUgZnJvbSByZXN0IHBvc2UgKFQtcG9zZSkuXG4gICAqIFlvdSBjYW4gcGFzcyB3aGF0IHlvdSBnb3QgZnJvbSB7QGxpbmsgZ2V0UG9zZX0uXG4gICAqXG4gICAqIEBwYXJhbSBwb3NlT2JqZWN0IEEgW1tWUk1Qb3NlXV0gdGhhdCByZXByZXNlbnRzIGEgc2luZ2xlIHBvc2VcbiAgICovXG4gIHB1YmxpYyBzZXRQb3NlKHBvc2VPYmplY3Q6IFZSTVBvc2UpOiB2b2lkIHtcbiAgICBPYmplY3QuZW50cmllcyhwb3NlT2JqZWN0KS5mb3JFYWNoKChbYm9uZU5hbWVTdHJpbmcsIHN0YXRlXSkgPT4ge1xuICAgICAgY29uc3QgYm9uZU5hbWUgPSBib25lTmFtZVN0cmluZyBhcyBWUk1IdW1hbkJvbmVOYW1lO1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Qm9uZU5vZGUoYm9uZU5hbWUpO1xuXG4gICAgICAvLyBJZ25vcmUgd2hlbiB0aGVyZSBhcmUgbm8gYm9uZSB0aGF0IGlzIGRlZmluZWQgaW4gdGhlIHBvc2Ugb24gdGhlIFZSTUh1bWFub2lkXG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0U3RhdGUgPSB0aGlzLnJlc3RQb3NlW2JvbmVOYW1lXTtcbiAgICAgIGlmICghcmVzdFN0YXRlKSB7XG4gICAgICAgIC8vIEl0J3MgdmVyeSB1bmxpa2VseS4gUG9zc2libHkgYSBidWdcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBseSB0aGUgc3RhdGUgdG8gdGhlIGFjdHVhbCBib25lXG4gICAgICBpZiAoc3RhdGU/LnBvc2l0aW9uKSB7XG4gICAgICAgIG5vZGUucG9zaXRpb24uZnJvbUFycmF5KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgICBpZiAocmVzdFN0YXRlLnBvc2l0aW9uKSB7XG4gICAgICAgICAgbm9kZS5wb3NpdGlvbi5hZGQoX3YzQS5mcm9tQXJyYXkocmVzdFN0YXRlLnBvc2l0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlPy5yb3RhdGlvbikge1xuICAgICAgICBub2RlLnF1YXRlcm5pb24uZnJvbUFycmF5KHN0YXRlLnJvdGF0aW9uKTtcblxuICAgICAgICBpZiAocmVzdFN0YXRlLnJvdGF0aW9uKSB7XG4gICAgICAgICAgbm9kZS5xdWF0ZXJuaW9uLm11bHRpcGx5KF9xdWF0QS5mcm9tQXJyYXkocmVzdFN0YXRlLnJvdGF0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgaHVtYW5vaWQgdG8gaXRzIHJlc3QgcG9zZS5cbiAgICovXG4gIHB1YmxpYyByZXNldFBvc2UoKTogdm9pZCB7XG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5yZXN0UG9zZSkuZm9yRWFjaCgoW2JvbmVOYW1lLCByZXN0XSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Qm9uZU5vZGUoYm9uZU5hbWUgYXMgVlJNSHVtYW5Cb25lTmFtZSk7XG5cbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN0Py5wb3NpdGlvbikge1xuICAgICAgICBub2RlLnBvc2l0aW9uLmZyb21BcnJheShyZXN0LnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3Q/LnJvdGF0aW9uKSB7XG4gICAgICAgIG5vZGUucXVhdGVybmlvbi5mcm9tQXJyYXkocmVzdC5yb3RhdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgYm9uZSBib3VuZCB0byBhIHNwZWNpZmllZCB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0sIGFzIGEge0BsaW5rIFZSTUh1bWFuQm9uZX0uXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJvbmUgeW91IHdhbnRcbiAgICovXG4gIHB1YmxpYyBnZXRCb25lKG5hbWU6IFZSTUh1bWFuQm9uZU5hbWUpOiBWUk1IdW1hbkJvbmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmh1bWFuQm9uZXNbbmFtZV0gPz8gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGJvbmUgYm91bmQgdG8gYSBzcGVjaWZpZWQge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LCBhcyBhIGBUSFJFRS5PYmplY3QzRGAuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJvbmUgeW91IHdhbnRcbiAgICovXG4gIHB1YmxpYyBnZXRCb25lTm9kZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVEhSRUUuT2JqZWN0M0QgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5odW1hbkJvbmVzW25hbWVdPy5ub2RlID8/IG51bGw7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQSBjb21wYXQgZnVuY3Rpb24gZm9yIGBRdWF0ZXJuaW9uLmludmVydCgpYCAvIGBRdWF0ZXJuaW9uLmludmVyc2UoKWAuXG4gKiBgUXVhdGVybmlvbi5pbnZlcnQoKWAgaXMgaW50cm9kdWNlZCBpbiByMTIzIGFuZCBgUXVhdGVybmlvbi5pbnZlcnNlKClgIGVtaXRzIGEgd2FybmluZy5cbiAqIFdlIGFyZSBnb2luZyB0byB1c2UgdGhpcyBjb21wYXQgZm9yIGEgd2hpbGUuXG4gKiBAcGFyYW0gdGFyZ2V0IEEgdGFyZ2V0IHF1YXRlcm5pb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1YXRJbnZlcnRDb21wYXQ8VCBleHRlbmRzIFRIUkVFLlF1YXRlcm5pb24+KHRhcmdldDogVCk6IFQge1xuICBpZiAoKHRhcmdldCBhcyBhbnkpLmludmVydCkge1xuICAgIHRhcmdldC5pbnZlcnQoKTtcbiAgfSBlbHNlIHtcbiAgICAodGFyZ2V0IGFzIGFueSkuaW52ZXJzZSgpO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1IdW1hbkJvbmVOYW1lLCBWUk1IdW1hbkJvbmVzIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBWUk1IdW1hbkJvbmVMaXN0IH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVMaXN0JztcbmltcG9ydCB7IFZSTUh1bWFuQm9uZVBhcmVudE1hcCB9IGZyb20gJy4vVlJNSHVtYW5Cb25lUGFyZW50TWFwJztcbmltcG9ydCB7IFZSTVJpZyB9IGZyb20gJy4vVlJNUmlnJztcblxuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX2JvbmVXb3JsZFBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbi8qKlxuICogQSBjbGFzcyByZXByZXNlbnRzIHRoZSBub3JtYWxpemVkIFJpZyBvZiBhIFZSTS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUh1bWFub2lkUmlnIGV4dGVuZHMgVlJNUmlnIHtcbiAgcHJvdGVjdGVkIHN0YXRpYyBfc2V0dXBUcmFuc2Zvcm1zKG1vZGVsUmlnOiBWUk1SaWcpOiB7XG4gICAgcmlnQm9uZXM6IFZSTUh1bWFuQm9uZXM7XG4gICAgcm9vdDogVEhSRUUuT2JqZWN0M0Q7XG4gICAgcGFyZW50V29ybGRSb3RhdGlvbnM6IHsgW2JvbmVOYW1lIGluIFZSTUh1bWFuQm9uZU5hbWVdPzogVEhSRUUuUXVhdGVybmlvbiB9O1xuICAgIGJvbmVSb3RhdGlvbnM6IHsgW2JvbmVOYW1lIGluIFZSTUh1bWFuQm9uZU5hbWVdPzogVEhSRUUuUXVhdGVybmlvbiB9O1xuICB9IHtcbiAgICBjb25zdCByb290ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdC5uYW1lID0gJ1ZSTUh1bWFub2lkUmlnJztcblxuICAgIC8vIHN0b3JlIGJvbmVXb3JsZFBvc2l0aW9ucywgYm9uZVdvcmxkUm90YXRpb25zLCBhbmQgcGFyZW50V29ybGRSb3RhdGlvbnNcbiAgICBjb25zdCBib25lV29ybGRQb3NpdGlvbnM6IHsgW2JvbmVOYW1lIGluIFZSTUh1bWFuQm9uZU5hbWVdPzogVEhSRUUuVmVjdG9yMyB9ID0ge307XG4gICAgY29uc3QgYm9uZVdvcmxkUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfSA9IHt9O1xuICAgIGNvbnN0IGJvbmVSb3RhdGlvbnM6IHsgW2JvbmVOYW1lIGluIFZSTUh1bWFuQm9uZU5hbWVdPzogVEhSRUUuUXVhdGVybmlvbiB9ID0ge307XG4gICAgY29uc3QgcGFyZW50V29ybGRSb3RhdGlvbnM6IHsgW2JvbmVOYW1lIGluIFZSTUh1bWFuQm9uZU5hbWVdPzogVEhSRUUuUXVhdGVybmlvbiB9ID0ge307XG5cbiAgICBWUk1IdW1hbkJvbmVMaXN0LmZvckVhY2goKGJvbmVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBib25lTm9kZSA9IG1vZGVsUmlnLmdldEJvbmVOb2RlKGJvbmVOYW1lKTtcblxuICAgICAgaWYgKGJvbmVOb2RlKSB7XG4gICAgICAgIGNvbnN0IGJvbmVXb3JsZFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgICAgY29uc3QgYm9uZVdvcmxkUm90YXRpb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG4gICAgICAgIGJvbmVOb2RlLnVwZGF0ZVdvcmxkTWF0cml4KHRydWUsIGZhbHNlKTtcbiAgICAgICAgYm9uZU5vZGUubWF0cml4V29ybGQuZGVjb21wb3NlKGJvbmVXb3JsZFBvc2l0aW9uLCBib25lV29ybGRSb3RhdGlvbiwgX3YzQSk7XG5cbiAgICAgICAgYm9uZVdvcmxkUG9zaXRpb25zW2JvbmVOYW1lXSA9IGJvbmVXb3JsZFBvc2l0aW9uO1xuICAgICAgICBib25lV29ybGRSb3RhdGlvbnNbYm9uZU5hbWVdID0gYm9uZVdvcmxkUm90YXRpb247XG4gICAgICAgIGJvbmVSb3RhdGlvbnNbYm9uZU5hbWVdID0gYm9uZU5vZGUucXVhdGVybmlvbi5jbG9uZSgpO1xuXG4gICAgICAgIGNvbnN0IHBhcmVudFdvcmxkUm90YXRpb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgICAgICBib25lTm9kZS5wYXJlbnQ/Lm1hdHJpeFdvcmxkLmRlY29tcG9zZShfdjNBLCBwYXJlbnRXb3JsZFJvdGF0aW9uLCBfdjNBKTtcbiAgICAgICAgcGFyZW50V29ybGRSb3RhdGlvbnNbYm9uZU5hbWVdID0gcGFyZW50V29ybGRSb3RhdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGJ1aWxkIHJpZyBoaWVyYXJjaHkgKyBzdG9yZSBwYXJlbnRXb3JsZFJvdGF0aW9uc1xuICAgIGNvbnN0IHJpZ0JvbmVzOiBQYXJ0aWFsPFZSTUh1bWFuQm9uZXM+ID0ge307XG4gICAgVlJNSHVtYW5Cb25lTGlzdC5mb3JFYWNoKChib25lTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYm9uZU5vZGUgPSBtb2RlbFJpZy5nZXRCb25lTm9kZShib25lTmFtZSk7XG5cbiAgICAgIGlmIChib25lTm9kZSkge1xuICAgICAgICBjb25zdCBib25lV29ybGRQb3NpdGlvbiA9IGJvbmVXb3JsZFBvc2l0aW9uc1tib25lTmFtZV0gYXMgVEhSRUUuVmVjdG9yMztcblxuICAgICAgICAvLyBzZWUgdGhlIG5lYXJlc3QgcGFyZW50IHBvc2l0aW9uXG4gICAgICAgIGxldCBjdXJyZW50Qm9uZU5hbWU6IFZSTUh1bWFuQm9uZU5hbWUgfCBudWxsID0gYm9uZU5hbWU7XG4gICAgICAgIGxldCBwYXJlbnRCb25lV29ybGRQb3NpdGlvbjogVEhSRUUuVmVjdG9yMyB8IHVuZGVmaW5lZDtcbiAgICAgICAgd2hpbGUgKHBhcmVudEJvbmVXb3JsZFBvc2l0aW9uID09IG51bGwpIHtcbiAgICAgICAgICBjdXJyZW50Qm9uZU5hbWUgPSBWUk1IdW1hbkJvbmVQYXJlbnRNYXBbY3VycmVudEJvbmVOYW1lXTtcbiAgICAgICAgICBpZiAoY3VycmVudEJvbmVOYW1lID09IG51bGwpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnRCb25lV29ybGRQb3NpdGlvbiA9IGJvbmVXb3JsZFBvc2l0aW9uc1tjdXJyZW50Qm9uZU5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHRvIGhpZXJhcmNoeVxuICAgICAgICBjb25zdCByaWdCb25lTm9kZSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgICByaWdCb25lTm9kZS5uYW1lID0gJ05vcm1hbGl6ZWRfJyArIGJvbmVOb2RlLm5hbWU7XG5cbiAgICAgICAgY29uc3QgcGFyZW50UmlnQm9uZU5vZGUgPSAoY3VycmVudEJvbmVOYW1lID8gcmlnQm9uZXNbY3VycmVudEJvbmVOYW1lXT8ubm9kZSA6IHJvb3QpIGFzIFRIUkVFLk9iamVjdDNEO1xuXG4gICAgICAgIHBhcmVudFJpZ0JvbmVOb2RlLmFkZChyaWdCb25lTm9kZSk7XG4gICAgICAgIHJpZ0JvbmVOb2RlLnBvc2l0aW9uLmNvcHkoYm9uZVdvcmxkUG9zaXRpb24pO1xuICAgICAgICBpZiAocGFyZW50Qm9uZVdvcmxkUG9zaXRpb24pIHtcbiAgICAgICAgICByaWdCb25lTm9kZS5wb3NpdGlvbi5zdWIocGFyZW50Qm9uZVdvcmxkUG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmlnQm9uZXNbYm9uZU5hbWVdID0geyBub2RlOiByaWdCb25lTm9kZSB9O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJpZ0JvbmVzOiByaWdCb25lcyBhcyBWUk1IdW1hbkJvbmVzLFxuICAgICAgcm9vdCxcbiAgICAgIHBhcmVudFdvcmxkUm90YXRpb25zLFxuICAgICAgYm9uZVJvdGF0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IG9yaWdpbmFsOiBWUk1SaWc7XG4gIHB1YmxpYyByZWFkb25seSByb290OiBUSFJFRS5PYmplY3QzRDtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9wYXJlbnRXb3JsZFJvdGF0aW9uczogeyBbYm9uZU5hbWUgaW4gVlJNSHVtYW5Cb25lTmFtZV0/OiBUSFJFRS5RdWF0ZXJuaW9uIH07XG4gIHByb3RlY3RlZCByZWFkb25seSBfYm9uZVJvdGF0aW9uczogeyBbYm9uZU5hbWUgaW4gVlJNSHVtYW5Cb25lTmFtZV0/OiBUSFJFRS5RdWF0ZXJuaW9uIH07XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGh1bWFub2lkOiBWUk1SaWcpIHtcbiAgICBjb25zdCB7IHJpZ0JvbmVzLCByb290LCBwYXJlbnRXb3JsZFJvdGF0aW9ucywgYm9uZVJvdGF0aW9ucyB9ID0gVlJNSHVtYW5vaWRSaWcuX3NldHVwVHJhbnNmb3JtcyhodW1hbm9pZCk7XG5cbiAgICBzdXBlcihyaWdCb25lcyk7XG5cbiAgICB0aGlzLm9yaWdpbmFsID0gaHVtYW5vaWQ7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLl9wYXJlbnRXb3JsZFJvdGF0aW9ucyA9IHBhcmVudFdvcmxkUm90YXRpb25zO1xuICAgIHRoaXMuX2JvbmVSb3RhdGlvbnMgPSBib25lUm90YXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGlzIGh1bWFub2lkIHJpZy5cbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgVlJNSHVtYW5Cb25lTGlzdC5mb3JFYWNoKChib25lTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYm9uZU5vZGUgPSB0aGlzLm9yaWdpbmFsLmdldEJvbmVOb2RlKGJvbmVOYW1lKTtcblxuICAgICAgaWYgKGJvbmVOb2RlICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmlnQm9uZU5vZGUgPSB0aGlzLmdldEJvbmVOb2RlKGJvbmVOYW1lKSE7XG4gICAgICAgIGNvbnN0IHBhcmVudFdvcmxkUm90YXRpb24gPSB0aGlzLl9wYXJlbnRXb3JsZFJvdGF0aW9uc1tib25lTmFtZV0hO1xuICAgICAgICBjb25zdCBpbnZQYXJlbnRXb3JsZFJvdGF0aW9uID0gX3F1YXRBLmNvcHkocGFyZW50V29ybGRSb3RhdGlvbikuaW52ZXJ0KCk7XG4gICAgICAgIGNvbnN0IGJvbmVSb3RhdGlvbiA9IHRoaXMuX2JvbmVSb3RhdGlvbnNbYm9uZU5hbWVdITtcblxuICAgICAgICBib25lTm9kZS5xdWF0ZXJuaW9uXG4gICAgICAgICAgLmNvcHkocmlnQm9uZU5vZGUucXVhdGVybmlvbilcbiAgICAgICAgICAubXVsdGlwbHkocGFyZW50V29ybGRSb3RhdGlvbilcbiAgICAgICAgICAucHJlbXVsdGlwbHkoaW52UGFyZW50V29ybGRSb3RhdGlvbilcbiAgICAgICAgICAubXVsdGlwbHkoYm9uZVJvdGF0aW9uKTtcblxuICAgICAgICAvLyBNb3ZlIHRoZSBtYXNzIGNlbnRlciBvZiB0aGUgVlJNXG4gICAgICAgIGlmIChib25lTmFtZSA9PT0gJ2hpcHMnKSB7XG4gICAgICAgICAgY29uc3QgYm9uZVdvcmxkUG9zaXRpb24gPSByaWdCb25lTm9kZS5nZXRXb3JsZFBvc2l0aW9uKF9ib25lV29ybGRQb3MpO1xuICAgICAgICAgIGJvbmVOb2RlLnBhcmVudCEudXBkYXRlV29ybGRNYXRyaXgodHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgIGNvbnN0IHBhcmVudFdvcmxkTWF0cml4ID0gYm9uZU5vZGUucGFyZW50IS5tYXRyaXhXb3JsZDtcbiAgICAgICAgICBjb25zdCBsb2NhbFBvc2l0aW9uID0gYm9uZVdvcmxkUG9zaXRpb24uYXBwbHlNYXRyaXg0KHBhcmVudFdvcmxkTWF0cml4LmludmVydCgpKTtcbiAgICAgICAgICBib25lTm9kZS5wb3NpdGlvbi5jb3B5KGxvY2FsUG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFuQm9uZSB9IGZyb20gJy4vVlJNSHVtYW5Cb25lJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lcyB9IGZyb20gJy4vVlJNSHVtYW5Cb25lcyc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFuQm9uZU5hbWUgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZU5hbWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1Qb3NlIH0gZnJvbSAnLi9WUk1Qb3NlJztcbmltcG9ydCB7IFZSTVJpZyB9IGZyb20gJy4vVlJNUmlnJztcbmltcG9ydCB7IFZSTUh1bWFub2lkUmlnIH0gZnJvbSAnLi9WUk1IdW1hbm9pZFJpZyc7XG5cbi8qKlxuICogQSBjbGFzcyByZXByZXNlbnRzIGEgaHVtYW5vaWQgb2YgYSBWUk0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1IdW1hbm9pZCB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIGl0IGNvcGllcyBwb3NlIGZyb20gbm9ybWFsaXplZEh1bWFuQm9uZXMgdG8gcmF3SHVtYW5Cb25lcyBvbiB7QGxpbmsgdXBkYXRlfS5cbiAgICogYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIHB1YmxpYyBhdXRvVXBkYXRlSHVtYW5Cb25lczogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSByYXcgcmlnIG9mIHRoZSBWUk0uXG4gICAqL1xuICBwcml2YXRlIF9yYXdIdW1hbkJvbmVzOiBWUk1SaWc7IC8vIFRPRE86IFJlbmFtZVxuXG4gIC8qKlxuICAgKiBBIG5vcm1hbGl6ZWQgcmlnIG9mIHRoZSBWUk0uXG4gICAqL1xuICBwcml2YXRlIF9ub3JtYWxpemVkSHVtYW5Cb25lczogVlJNSHVtYW5vaWRSaWc7IC8vIFRPRE86IFJlbmFtZVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayByYXdSZXN0UG9zZX0gb3Ige0BsaW5rIG5vcm1hbGl6ZWRSZXN0UG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXQgcmVzdFBvc2UoKTogVlJNUG9zZSB7XG4gICAgY29uc29sZS53YXJuKCdWUk1IdW1hbm9pZDogcmVzdFBvc2UgaXMgZGVwcmVjYXRlZC4gVXNlIGVpdGhlciByYXdSZXN0UG9zZSBvciBub3JtYWxpemVkUmVzdFBvc2UgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiB0aGlzLnJhd1Jlc3RQb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTVBvc2V9IG9mIGl0cyByYXcgaHVtYW4gYm9uZXMgdGhhdCBpcyBpdHMgZGVmYXVsdCBzdGF0ZS5cbiAgICogTm90ZSB0aGF0IGl0J3Mgbm90IGNvbXBhdGlibGUgd2l0aCB7QGxpbmsgc2V0UmF3UG9zZX0gYW5kIHtAbGluayBnZXRSYXdQb3NlfSwgc2luY2UgaXQgY29udGFpbnMgbm9uLXJlbGF0aXZlIHZhbHVlcyBvZiBlYWNoIGxvY2FsIHRyYW5zZm9ybXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHJhd1Jlc3RQb3NlKCk6IFZSTVBvc2Uge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLnJlc3RQb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTVBvc2V9IG9mIGl0cyBub3JtYWxpemVkIGh1bWFuIGJvbmVzIHRoYXQgaXMgaXRzIGRlZmF1bHQgc3RhdGUuXG4gICAqIE5vdGUgdGhhdCBpdCdzIG5vdCBjb21wYXRpYmxlIHdpdGgge0BsaW5rIHNldE5vcm1hbGl6ZWRQb3NlfSBhbmQge0BsaW5rIGdldE5vcm1hbGl6ZWRQb3NlfSwgc2luY2UgaXQgY29udGFpbnMgbm9uLXJlbGF0aXZlIHZhbHVlcyBvZiBlYWNoIGxvY2FsIHRyYW5zZm9ybXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5vcm1hbGl6ZWRSZXN0UG9zZSgpOiBWUk1Qb3NlIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMucmVzdFBvc2U7XG4gIH1cblxuICAvKipcbiAgICogQSBtYXAgZnJvbSB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0gdG8gcmF3IHtAbGluayBWUk1IdW1hbkJvbmV9cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgaHVtYW5Cb25lcygpOiBWUk1IdW1hbkJvbmVzIHtcbiAgICAvLyBhbiBhbGlhcyBvZiBgcmF3SHVtYW5Cb25lc2BcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5odW1hbkJvbmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWFwIGZyb20ge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9IHRvIHJhdyB7QGxpbmsgVlJNSHVtYW5Cb25lfXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHJhd0h1bWFuQm9uZXMoKTogVlJNSHVtYW5Cb25lcyB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMuaHVtYW5Cb25lcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1hcCBmcm9tIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfSB0byBub3JtYWxpemVkIHtAbGluayBWUk1IdW1hbkJvbmV9cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgbm9ybWFsaXplZEh1bWFuQm9uZXMoKTogVlJNSHVtYW5Cb25lcyB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLmh1bWFuQm9uZXM7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHJvb3Qgb2Ygbm9ybWFsaXplZCB7QGxpbmsgVlJNSHVtYW5Cb25lfXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5vcm1hbGl6ZWRIdW1hbkJvbmVzUm9vdCgpOiBUSFJFRS5PYmplY3QzRCB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLnJvb3Q7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHtAbGluayBWUk1IdW1hbm9pZH0uXG4gICAqIEBwYXJhbSBodW1hbkJvbmVzIEEge0BsaW5rIFZSTUh1bWFuQm9uZXN9IGNvbnRhaW5zIGFsbCB0aGUgYm9uZXMgb2YgdGhlIG5ldyBodW1hbm9pZFxuICAgKiBAcGFyYW0gYXV0b1VwZGF0ZUh1bWFuQm9uZXMgV2hldGhlciBpdCBjb3BpZXMgcG9zZSBmcm9tIG5vcm1hbGl6ZWRIdW1hbkJvbmVzIHRvIHJhd0h1bWFuQm9uZXMgb24ge0BsaW5rIHVwZGF0ZX0uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKGh1bWFuQm9uZXM6IFZSTUh1bWFuQm9uZXMsIG9wdGlvbnM/OiB7IGF1dG9VcGRhdGVIdW1hbkJvbmVzPzogYm9vbGVhbiB9KSB7XG4gICAgdGhpcy5hdXRvVXBkYXRlSHVtYW5Cb25lcyA9IG9wdGlvbnM/LmF1dG9VcGRhdGVIdW1hbkJvbmVzID8/IHRydWU7XG4gICAgdGhpcy5fcmF3SHVtYW5Cb25lcyA9IG5ldyBWUk1SaWcoaHVtYW5Cb25lcyk7XG4gICAgdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMgPSBuZXcgVlJNSHVtYW5vaWRSaWcodGhpcy5fcmF3SHVtYW5Cb25lcyk7XG4gIH1cblxuICAvKipcbiAgICogQ29weSB0aGUgZ2l2ZW4ge0BsaW5rIFZSTUh1bWFub2lkfSBpbnRvIHRoaXMgb25lLlxuICAgKiBAcGFyYW0gc291cmNlIFRoZSB7QGxpbmsgVlJNSHVtYW5vaWR9IHlvdSB3YW50IHRvIGNvcHlcbiAgICogQHJldHVybnMgdGhpc1xuICAgKi9cbiAgcHVibGljIGNvcHkoc291cmNlOiBWUk1IdW1hbm9pZCk6IHRoaXMge1xuICAgIHRoaXMuYXV0b1VwZGF0ZUh1bWFuQm9uZXMgPSBzb3VyY2UuYXV0b1VwZGF0ZUh1bWFuQm9uZXM7XG4gICAgdGhpcy5fcmF3SHVtYW5Cb25lcyA9IG5ldyBWUk1SaWcoc291cmNlLmh1bWFuQm9uZXMpO1xuICAgIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzID0gbmV3IFZSTUh1bWFub2lkUmlnKHRoaXMuX3Jhd0h1bWFuQm9uZXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNsb25lIG9mIHRoaXMge0BsaW5rIFZSTUh1bWFub2lkfS5cbiAgICogQHJldHVybnMgQ29waWVkIHtAbGluayBWUk1IdW1hbm9pZH1cbiAgICovXG4gIHB1YmxpYyBjbG9uZSgpOiBWUk1IdW1hbm9pZCB7XG4gICAgcmV0dXJuIG5ldyBWUk1IdW1hbm9pZCh0aGlzLmh1bWFuQm9uZXMsIHsgYXV0b1VwZGF0ZUh1bWFuQm9uZXM6IHRoaXMuYXV0b1VwZGF0ZUh1bWFuQm9uZXMgfSkuY29weSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayBnZXRSYXdBYnNvbHV0ZVBvc2V9IG9yIHtAbGluayBnZXROb3JtYWxpemVkQWJzb2x1dGVQb3NlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGdldEFic29sdXRlUG9zZSgpOiBWUk1Qb3NlIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnVlJNSHVtYW5vaWQ6IGdldEFic29sdXRlUG9zZSgpIGlzIGRlcHJlY2F0ZWQuIFVzZSBlaXRoZXIgZ2V0UmF3QWJzb2x1dGVQb3NlKCkgb3IgZ2V0Tm9ybWFsaXplZEFic29sdXRlUG9zZSgpIGluc3RlYWQuJyxcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3QWJzb2x1dGVQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IGFic29sdXRlIHBvc2Ugb2YgdGhpcyByYXcgaHVtYW4gYm9uZXMgYXMgYSB7QGxpbmsgVlJNUG9zZX0uXG4gICAqIE5vdGUgdGhhdCB0aGUgb3V0cHV0IHJlc3VsdCB3aWxsIGNvbnRhaW4gaW5pdGlhbCBzdGF0ZSBvZiB0aGUgVlJNIGFuZCBub3QgY29tcGF0aWJsZSBiZXR3ZWVuIGRpZmZlcmVudCBtb2RlbHMuXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgZ2V0UmF3UG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXRSYXdBYnNvbHV0ZVBvc2UoKTogVlJNUG9zZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMuZ2V0QWJzb2x1dGVQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IGFic29sdXRlIHBvc2Ugb2YgdGhpcyBub3JtYWxpemVkIGh1bWFuIGJvbmVzIGFzIGEge0BsaW5rIFZSTVBvc2V9LlxuICAgKiBOb3RlIHRoYXQgdGhlIG91dHB1dCByZXN1bHQgd2lsbCBjb250YWluIGluaXRpYWwgc3RhdGUgb2YgdGhlIFZSTSBhbmQgbm90IGNvbXBhdGlibGUgYmV0d2VlbiBkaWZmZXJlbnQgbW9kZWxzLlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byB1c2Uge0BsaW5rIGdldE5vcm1hbGl6ZWRQb3NlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGdldE5vcm1hbGl6ZWRBYnNvbHV0ZVBvc2UoKTogVlJNUG9zZSB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLmdldEFic29sdXRlUG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBlaXRoZXIge0BsaW5rIGdldFJhd1Bvc2V9IG9yIHtAbGluayBnZXROb3JtYWxpemVkUG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXRQb3NlKCk6IFZSTVBvc2Uge1xuICAgIGNvbnNvbGUud2FybignVlJNSHVtYW5vaWQ6IGdldFBvc2UoKSBpcyBkZXByZWNhdGVkLiBVc2UgZWl0aGVyIGdldFJhd1Bvc2UoKSBvciBnZXROb3JtYWxpemVkUG9zZSgpIGluc3RlYWQuJyk7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRSYXdQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2Ugb2YgcmF3IGh1bWFuIGJvbmVzIGFzIGEge0BsaW5rIFZSTVBvc2V9LlxuICAgKlxuICAgKiBFYWNoIHRyYW5zZm9ybSBpcyBhIGxvY2FsIHRyYW5zZm9ybSByZWxhdGl2ZSBmcm9tIHJlc3QgcG9zZSAoVC1wb3NlKS5cbiAgICovXG4gIHB1YmxpYyBnZXRSYXdQb3NlKCk6IFZSTVBvc2Uge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLmdldFBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgcG9zZSBvZiBub3JtYWxpemVkIGh1bWFuIGJvbmVzIGFzIGEge0BsaW5rIFZSTVBvc2V9LlxuICAgKlxuICAgKiBFYWNoIHRyYW5zZm9ybSBpcyBhIGxvY2FsIHRyYW5zZm9ybSByZWxhdGl2ZSBmcm9tIHJlc3QgcG9zZSAoVC1wb3NlKS5cbiAgICovXG4gIHB1YmxpYyBnZXROb3JtYWxpemVkUG9zZSgpOiBWUk1Qb3NlIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMuZ2V0UG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBlaXRoZXIge0BsaW5rIHNldFJhd1Bvc2V9IG9yIHtAbGluayBzZXROb3JtYWxpemVkUG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBzZXRQb3NlKHBvc2VPYmplY3Q6IFZSTVBvc2UpOiB2b2lkIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUh1bWFub2lkOiBzZXRQb3NlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIGVpdGhlciBzZXRSYXdQb3NlKCkgb3Igc2V0Tm9ybWFsaXplZFBvc2UoKSBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2V0UmF3UG9zZShwb3NlT2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMZXQgdGhlIHJhdyBodW1hbiBib25lcyBkbyBhIHNwZWNpZmllZCBwb3NlLlxuICAgKlxuICAgKiBFYWNoIHRyYW5zZm9ybSBoYXZlIHRvIGJlIGEgbG9jYWwgdHJhbnNmb3JtIHJlbGF0aXZlIGZyb20gcmVzdCBwb3NlIChULXBvc2UpLlxuICAgKiBZb3UgY2FuIHBhc3Mgd2hhdCB5b3UgZ290IGZyb20ge0BsaW5rIGdldFJhd1Bvc2V9LlxuICAgKlxuICAgKiBJZiB5b3UgYXJlIHVzaW5nIHtAbGluayBhdXRvVXBkYXRlSHVtYW5Cb25lc30sIHlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgc2V0Tm9ybWFsaXplZFBvc2V9IGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBwb3NlT2JqZWN0IEEge0BsaW5rIFZSTVBvc2V9IHRoYXQgcmVwcmVzZW50cyBhIHNpbmdsZSBwb3NlXG4gICAqL1xuICBwdWJsaWMgc2V0UmF3UG9zZShwb3NlT2JqZWN0OiBWUk1Qb3NlKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMuc2V0UG9zZShwb3NlT2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMZXQgdGhlIG5vcm1hbGl6ZWQgaHVtYW4gYm9uZXMgZG8gYSBzcGVjaWZpZWQgcG9zZS5cbiAgICpcbiAgICogRWFjaCB0cmFuc2Zvcm0gaGF2ZSB0byBiZSBhIGxvY2FsIHRyYW5zZm9ybSByZWxhdGl2ZSBmcm9tIHJlc3QgcG9zZSAoVC1wb3NlKS5cbiAgICogWW91IGNhbiBwYXNzIHdoYXQgeW91IGdvdCBmcm9tIHtAbGluayBnZXROb3JtYWxpemVkUG9zZX0uXG4gICAqXG4gICAqIEBwYXJhbSBwb3NlT2JqZWN0IEEge0BsaW5rIFZSTVBvc2V9IHRoYXQgcmVwcmVzZW50cyBhIHNpbmdsZSBwb3NlXG4gICAqL1xuICBwdWJsaWMgc2V0Tm9ybWFsaXplZFBvc2UocG9zZU9iamVjdDogVlJNUG9zZSk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5zZXRQb3NlKHBvc2VPYmplY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBlaXRoZXIge0BsaW5rIHJlc2V0UmF3UG9zZX0gb3Ige0BsaW5rIHJlc2V0Tm9ybWFsaXplZFBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgcmVzZXRQb3NlKCk6IHZvaWQge1xuICAgIGNvbnNvbGUud2FybignVlJNSHVtYW5vaWQ6IHJlc2V0UG9zZSgpIGlzIGRlcHJlY2F0ZWQuIFVzZSBlaXRoZXIgcmVzZXRSYXdQb3NlKCkgb3IgcmVzZXROb3JtYWxpemVkUG9zZSgpIGluc3RlYWQuJyk7XG5cbiAgICByZXR1cm4gdGhpcy5yZXNldFJhd1Bvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgcmF3IGh1bWFub2lkIHRvIGl0cyByZXN0IHBvc2UuXG4gICAqXG4gICAqIElmIHlvdSBhcmUgdXNpbmcge0BsaW5rIGF1dG9VcGRhdGVIdW1hbkJvbmVzfSwgeW91IG1pZ2h0IHdhbnQgdG8gdXNlIHtAbGluayByZXNldE5vcm1hbGl6ZWRQb3NlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIHJlc2V0UmF3UG9zZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5yZXNldFBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgbm9ybWFsaXplZCBodW1hbm9pZCB0byBpdHMgcmVzdCBwb3NlLlxuICAgKi9cbiAgcHVibGljIHJlc2V0Tm9ybWFsaXplZFBvc2UoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLnJlc2V0UG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBlaXRoZXIge0BsaW5rIGdldFJhd0JvbmV9IG9yIHtAbGluayBnZXROb3JtYWxpemVkQm9uZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXRCb25lKG5hbWU6IFZSTUh1bWFuQm9uZU5hbWUpOiBWUk1IdW1hbkJvbmUgfCB1bmRlZmluZWQge1xuICAgIGNvbnNvbGUud2FybignVlJNSHVtYW5vaWQ6IGdldEJvbmUoKSBpcyBkZXByZWNhdGVkLiBVc2UgZWl0aGVyIGdldFJhd0JvbmUoKSBvciBnZXROb3JtYWxpemVkQm9uZSgpIGluc3RlYWQuJyk7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRSYXdCb25lKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJhdyB7QGxpbmsgVlJNSHVtYW5Cb25lfSBib3VuZCB0byBhIHNwZWNpZmllZCB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0uXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJvbmUgeW91IHdhbnRcbiAgICovXG4gIHB1YmxpYyBnZXRSYXdCb25lKG5hbWU6IFZSTUh1bWFuQm9uZU5hbWUpOiBWUk1IdW1hbkJvbmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLmdldEJvbmUobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbm9ybWFsaXplZCB7QGxpbmsgVlJNSHVtYW5Cb25lfSBib3VuZCB0byBhIHNwZWNpZmllZCB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0uXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJvbmUgeW91IHdhbnRcbiAgICovXG4gIHB1YmxpYyBnZXROb3JtYWxpemVkQm9uZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVlJNSHVtYW5Cb25lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMuZ2V0Qm9uZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayBnZXRSYXdCb25lTm9kZX0gb3Ige0BsaW5rIGdldE5vcm1hbGl6ZWRCb25lTm9kZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXRCb25lTm9kZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVEhSRUUuT2JqZWN0M0QgfCBudWxsIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnVlJNSHVtYW5vaWQ6IGdldEJvbmVOb2RlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIGVpdGhlciBnZXRSYXdCb25lTm9kZSgpIG9yIGdldE5vcm1hbGl6ZWRCb25lTm9kZSgpIGluc3RlYWQuJyxcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3Qm9uZU5vZGUobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgcmF3IGJvbmUgYXMgYSBgVEhSRUUuT2JqZWN0M0RgIGJvdW5kIHRvIGEgc3BlY2lmaWVkIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgYm9uZSB5b3Ugd2FudFxuICAgKi9cbiAgcHVibGljIGdldFJhd0JvbmVOb2RlKG5hbWU6IFZSTUh1bWFuQm9uZU5hbWUpOiBUSFJFRS5PYmplY3QzRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLmdldEJvbmVOb2RlKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5vcm1hbGl6ZWQgYm9uZSBhcyBhIGBUSFJFRS5PYmplY3QzRGAgYm91bmQgdG8gYSBzcGVjaWZpZWQge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XG4gICAqL1xuICBwdWJsaWMgZ2V0Tm9ybWFsaXplZEJvbmVOb2RlKG5hbWU6IFZSTUh1bWFuQm9uZU5hbWUpOiBUSFJFRS5PYmplY3QzRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5nZXRCb25lTm9kZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGh1bWFub2lkIGNvbXBvbmVudC5cbiAgICpcbiAgICogSWYge0BsaW5rIGF1dG9VcGRhdGVIdW1hbkJvbmVzfSBpcyBgdHJ1ZWAsIGl0IHRyYW5zZmVycyB0aGUgcG9zZSBvZiBub3JtYWxpemVkIGh1bWFuIGJvbmVzIHRvIHJhdyBodW1hbiBib25lcy5cbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b1VwZGF0ZUh1bWFuQm9uZXMpIHtcbiAgICAgIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG5leHBvcnQgY29uc3QgVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lID0ge1xuICBIaXBzOiAnaGlwcycsXG4gIFNwaW5lOiAnc3BpbmUnLFxuICBIZWFkOiAnaGVhZCcsXG4gIExlZnRVcHBlckxlZzogJ2xlZnRVcHBlckxlZycsXG4gIExlZnRMb3dlckxlZzogJ2xlZnRMb3dlckxlZycsXG4gIExlZnRGb290OiAnbGVmdEZvb3QnLFxuICBSaWdodFVwcGVyTGVnOiAncmlnaHRVcHBlckxlZycsXG4gIFJpZ2h0TG93ZXJMZWc6ICdyaWdodExvd2VyTGVnJyxcbiAgUmlnaHRGb290OiAncmlnaHRGb290JyxcbiAgTGVmdFVwcGVyQXJtOiAnbGVmdFVwcGVyQXJtJyxcbiAgTGVmdExvd2VyQXJtOiAnbGVmdExvd2VyQXJtJyxcbiAgTGVmdEhhbmQ6ICdsZWZ0SGFuZCcsXG4gIFJpZ2h0VXBwZXJBcm06ICdyaWdodFVwcGVyQXJtJyxcbiAgUmlnaHRMb3dlckFybTogJ3JpZ2h0TG93ZXJBcm0nLFxuICBSaWdodEhhbmQ6ICdyaWdodEhhbmQnLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lID0gKHR5cGVvZiBWUk1SZXF1aXJlZEh1bWFuQm9uZU5hbWUpW2tleW9mIHR5cGVvZiBWUk1SZXF1aXJlZEh1bWFuQm9uZU5hbWVdO1xuIiwgImltcG9ydCB0eXBlICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMFZSTSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtLTAuMCc7XG5pbXBvcnQgdHlwZSAqIGFzIFYxVlJNU2NoZW1hIGZyb20gJ0BwaXhpdi90eXBlcy12cm1jLXZybS0xLjAnO1xuaW1wb3J0IHR5cGUgeyBHTFRGLCBHTFRGTG9hZGVyUGx1Z2luLCBHTFRGUGFyc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4vVlJNSHVtYW5vaWQnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmVzIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVzJztcbmltcG9ydCB7IFZSTVJlcXVpcmVkSHVtYW5Cb25lTmFtZSB9IGZyb20gJy4vVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lJztcbmltcG9ydCB7IEdMVEYgYXMgR0xURlNjaGVtYSB9IGZyb20gJ0BnbHRmLXRyYW5zZm9ybS9jb3JlJztcbmltcG9ydCB7IFZSTUh1bWFub2lkSGVscGVyIH0gZnJvbSAnLi9oZWxwZXJzL1ZSTUh1bWFub2lkSGVscGVyJztcbmltcG9ydCB7IFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW5PcHRpb25zJztcblxuLyoqXG4gKiBQb3NzaWJsZSBzcGVjIHZlcnNpb25zIGl0IHJlY29nbml6ZXMuXG4gKi9cbmNvbnN0IFBPU1NJQkxFX1NQRUNfVkVSU0lPTlMgPSBuZXcgU2V0KFsnMS4wJywgJzEuMC1iZXRhJ10pO1xuXG4vKipcbiAqIEEgbWFwIGZyb20gb2xkIHRodW1iIGJvbmUgbmFtZXMgdG8gbmV3IHRodW1iIGJvbmUgbmFtZXNcbiAqL1xuY29uc3QgdGh1bWJCb25lTmFtZU1hcDogeyBba2V5OiBzdHJpbmddOiBWMVZSTVNjaGVtYS5IdW1hbm9pZEh1bWFuQm9uZU5hbWUgfCB1bmRlZmluZWQgfSA9IHtcbiAgbGVmdFRodW1iUHJveGltYWw6ICdsZWZ0VGh1bWJNZXRhY2FycGFsJyxcbiAgbGVmdFRodW1iSW50ZXJtZWRpYXRlOiAnbGVmdFRodW1iUHJveGltYWwnLFxuICByaWdodFRodW1iUHJveGltYWw6ICdyaWdodFRodW1iTWV0YWNhcnBhbCcsXG4gIHJpZ2h0VGh1bWJJbnRlcm1lZGlhdGU6ICdyaWdodFRodW1iUHJveGltYWwnLFxufTtcblxuLyoqXG4gKiBBIHBsdWdpbiBvZiBHTFRGTG9hZGVyIHRoYXQgaW1wb3J0cyBhIHtAbGluayBWUk1IdW1hbm9pZH0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxuICovXG5leHBvcnQgY2xhc3MgVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgYW4gT2JqZWN0M0QgdG8gYWRkIHtAbGluayBWUk1IdW1hbm9pZEhlbHBlcn0uXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIGhlbHBlciB3aWxsIG5vdCBiZSBjcmVhdGVkLlxuICAgKiBJZiBgcmVuZGVyT3JkZXJgIGlzIHNldCB0byB0aGUgcm9vdCwgdGhlIGhlbHBlciB3aWxsIGNvcHkgdGhlIHNhbWUgYHJlbmRlck9yZGVyYCAuXG4gICAqL1xuICBwdWJsaWMgaGVscGVyUm9vdD86IFRIUkVFLk9iamVjdDNEO1xuXG4gIHB1YmxpYyBhdXRvVXBkYXRlSHVtYW5Cb25lcz86IGJvb2xlYW47XG5cbiAgcHVibGljIHJlYWRvbmx5IHBhcnNlcjogR0xURlBhcnNlcjtcblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAvLyBXZSBzaG91bGQgdXNlIHRoZSBleHRlbnNpb24gbmFtZSBpbnN0ZWFkIGJ1dCB3ZSBoYXZlIG11bHRpcGxlIHBsdWdpbnMgZm9yIGFuIGV4dGVuc2lvbi4uLlxuICAgIHJldHVybiAnVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW4nO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlciwgb3B0aW9ucz86IFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luT3B0aW9ucykge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgdGhpcy5oZWxwZXJSb290ID0gb3B0aW9ucz8uaGVscGVyUm9vdDtcbiAgICB0aGlzLmF1dG9VcGRhdGVIdW1hbkJvbmVzID0gb3B0aW9ucz8uYXV0b1VwZGF0ZUh1bWFuQm9uZXM7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBnbHRmLnVzZXJEYXRhLnZybUh1bWFub2lkID0gYXdhaXQgdGhpcy5faW1wb3J0KGdsdGYpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhIHtAbGluayBWUk1IdW1hbm9pZH0gZnJvbSBhIFZSTS5cbiAgICpcbiAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9pbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNSHVtYW5vaWQgfCBudWxsPiB7XG4gICAgY29uc3QgdjFSZXN1bHQgPSBhd2FpdCB0aGlzLl92MUltcG9ydChnbHRmKTtcbiAgICBpZiAodjFSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MVJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCB2MFJlc3VsdCA9IGF3YWl0IHRoaXMuX3YwSW1wb3J0KGdsdGYpO1xuICAgIGlmICh2MFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHYwUmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjFJbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNSHVtYW5vaWQgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IGlzVlJNVXNlZCA9IGpzb24uZXh0ZW5zaW9uc1VzZWQ/LmluZGV4T2YoJ1ZSTUNfdnJtJykgIT09IC0xO1xuICAgIGlmICghaXNWUk1Vc2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbnNpb24gPSBqc29uLmV4dGVuc2lvbnM/LlsnVlJNQ192cm0nXSBhcyBWMVZSTVNjaGVtYS5WUk1DVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVjVmVyc2lvbiA9IGV4dGVuc2lvbi5zcGVjVmVyc2lvbjtcbiAgICBpZiAoIVBPU1NJQkxFX1NQRUNfVkVSU0lPTlMuaGFzKHNwZWNWZXJzaW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKGBWUk1IdW1hbm9pZExvYWRlclBsdWdpbjogVW5rbm93biBWUk1DX3ZybSBzcGVjVmVyc2lvbiBcIiR7c3BlY1ZlcnNpb259XCJgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYUh1bWFub2lkID0gZXh0ZW5zaW9uLmh1bWFub2lkO1xuICAgIGlmICghc2NoZW1hSHVtYW5vaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNvbXBhdDogMS4wLWJldGEgdGh1bWIgYm9uZSBuYW1lc1xuICAgICAqXG4gICAgICogYHRydWVgIGlmIGBsZWZ0VGh1bWJJbnRlcm1lZGlhdGVgIG9yIGByaWdodFRodW1iSW50ZXJtZWRpYXRlYCBleGlzdHNcbiAgICAgKi9cbiAgICBjb25zdCBleGlzdHNQcmV2aW91c1RodW1iTmFtZSA9XG4gICAgICAoc2NoZW1hSHVtYW5vaWQuaHVtYW5Cb25lcyBhcyBhbnkpLmxlZnRUaHVtYkludGVybWVkaWF0ZSAhPSBudWxsIHx8XG4gICAgICAoc2NoZW1hSHVtYW5vaWQuaHVtYW5Cb25lcyBhcyBhbnkpLnJpZ2h0VGh1bWJJbnRlcm1lZGlhdGUgIT0gbnVsbDtcblxuICAgIGNvbnN0IGh1bWFuQm9uZXM6IFBhcnRpYWw8VlJNSHVtYW5Cb25lcz4gPSB7fTtcbiAgICBpZiAoc2NoZW1hSHVtYW5vaWQuaHVtYW5Cb25lcyAhPSBudWxsKSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc2NoZW1hSHVtYW5vaWQuaHVtYW5Cb25lcykubWFwKGFzeW5jIChbYm9uZU5hbWVTdHJpbmcsIHNjaGVtYUh1bWFuQm9uZV0pID0+IHtcbiAgICAgICAgICBsZXQgYm9uZU5hbWUgPSBib25lTmFtZVN0cmluZyBhcyBWMVZSTVNjaGVtYS5IdW1hbm9pZEh1bWFuQm9uZU5hbWU7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBzY2hlbWFIdW1hbkJvbmUubm9kZTtcblxuICAgICAgICAgIC8vIGNvbXBhdDogMS4wLWJldGEgcHJldmlvdXMgdGh1bWIgYm9uZSBuYW1lc1xuICAgICAgICAgIGlmIChleGlzdHNQcmV2aW91c1RodW1iTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdGh1bWJCb25lTmFtZSA9IHRodW1iQm9uZU5hbWVNYXBbYm9uZU5hbWVdO1xuICAgICAgICAgICAgaWYgKHRodW1iQm9uZU5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBib25lTmFtZSA9IHRodW1iQm9uZU5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGF3YWl0IHRoaXMucGFyc2VyLmdldERlcGVuZGVuY3koJ25vZGUnLCBpbmRleCk7XG5cbiAgICAgICAgICAvLyBpZiB0aGUgc3BlY2lmaWVkIG5vZGUgZG9lcyBub3QgZXhpc3QsIGVtaXQgYSB3YXJuaW5nXG4gICAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBBIGdsVEYgbm9kZSBib3VuZCB0byB0aGUgaHVtYW5vaWQgYm9uZSAke2JvbmVOYW1lfSAoaW5kZXggPSAke2luZGV4fSkgZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBzZXQgdG8gdGhlIGBodW1hbkJvbmVzYFxuICAgICAgICAgIGh1bWFuQm9uZXNbYm9uZU5hbWVdID0geyBub2RlIH07XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBodW1hbm9pZCA9IG5ldyBWUk1IdW1hbm9pZCh0aGlzLl9lbnN1cmVSZXF1aXJlZEJvbmVzRXhpc3QoaHVtYW5Cb25lcyksIHtcbiAgICAgIGF1dG9VcGRhdGVIdW1hbkJvbmVzOiB0aGlzLmF1dG9VcGRhdGVIdW1hbkJvbmVzLFxuICAgIH0pO1xuICAgIGdsdGYuc2NlbmUuYWRkKGh1bWFub2lkLm5vcm1hbGl6ZWRIdW1hbkJvbmVzUm9vdCk7XG5cbiAgICBpZiAodGhpcy5oZWxwZXJSb290KSB7XG4gICAgICBjb25zdCBoZWxwZXIgPSBuZXcgVlJNSHVtYW5vaWRIZWxwZXIoaHVtYW5vaWQpO1xuICAgICAgdGhpcy5oZWxwZXJSb290LmFkZChoZWxwZXIpO1xuICAgICAgaGVscGVyLnJlbmRlck9yZGVyID0gdGhpcy5oZWxwZXJSb290LnJlbmRlck9yZGVyO1xuICAgIH1cblxuICAgIHJldHVybiBodW1hbm9pZDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YwSW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTUh1bWFub2lkIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICBjb25zdCB2cm1FeHQgPSBqc29uLmV4dGVuc2lvbnM/LlZSTSBhcyBWMFZSTS5WUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCF2cm1FeHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYUh1bWFub2lkOiBWMFZSTS5IdW1hbm9pZCB8IHVuZGVmaW5lZCA9IHZybUV4dC5odW1hbm9pZDtcbiAgICBpZiAoIXNjaGVtYUh1bWFub2lkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBodW1hbkJvbmVzOiBQYXJ0aWFsPFZSTUh1bWFuQm9uZXM+ID0ge307XG4gICAgaWYgKHNjaGVtYUh1bWFub2lkLmh1bWFuQm9uZXMgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHNjaGVtYUh1bWFub2lkLmh1bWFuQm9uZXMubWFwKGFzeW5jIChib25lKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm9uZU5hbWUgPSBib25lLmJvbmU7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBib25lLm5vZGU7XG5cbiAgICAgICAgICBpZiAoYm9uZU5hbWUgPT0gbnVsbCB8fCBpbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGF3YWl0IHRoaXMucGFyc2VyLmdldERlcGVuZGVuY3koJ25vZGUnLCBpbmRleCk7XG5cbiAgICAgICAgICAvLyBpZiB0aGUgc3BlY2lmaWVkIG5vZGUgZG9lcyBub3QgZXhpc3QsIGVtaXQgYSB3YXJuaW5nXG4gICAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBBIGdsVEYgbm9kZSBib3VuZCB0byB0aGUgaHVtYW5vaWQgYm9uZSAke2JvbmVOYW1lfSAoaW5kZXggPSAke2luZGV4fSkgZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBtYXAgdG8gbmV3IGJvbmUgbmFtZVxuICAgICAgICAgIGNvbnN0IHRodW1iQm9uZU5hbWUgPSB0aHVtYkJvbmVOYW1lTWFwW2JvbmVOYW1lXTtcbiAgICAgICAgICBjb25zdCBuZXdCb25lTmFtZSA9ICh0aHVtYkJvbmVOYW1lID8/IGJvbmVOYW1lKSBhcyBWMVZSTVNjaGVtYS5IdW1hbm9pZEh1bWFuQm9uZU5hbWU7XG5cbiAgICAgICAgICAvLyB2MCBWUk1zIG1pZ2h0IGhhdmUgYSBtdWx0aXBsZSBub2RlcyBhdHRhY2hlZCB0byBhIHNpbmdsZSBib25lLi4uXG4gICAgICAgICAgLy8gc28gaWYgdGhlcmUgYWxyZWFkeSBpcyBhbiBlbnRyeSBpbiB0aGUgYGh1bWFuQm9uZXNgLCBzaG93IGEgd2FybmluZyBhbmQgaWdub3JlIGl0XG4gICAgICAgICAgaWYgKGh1bWFuQm9uZXNbbmV3Qm9uZU5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE11bHRpcGxlIGJvbmUgZW50cmllcyBmb3IgJHtuZXdCb25lTmFtZX0gZGV0ZWN0ZWQgKGluZGV4ID0gJHtpbmRleH0pLCBpZ25vcmluZyBkdXBsaWNhdGVkIGVudHJpZXMuYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc2V0IHRvIHRoZSBgaHVtYW5Cb25lc2BcbiAgICAgICAgICBodW1hbkJvbmVzW25ld0JvbmVOYW1lXSA9IHsgbm9kZSB9O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgaHVtYW5vaWQgPSBuZXcgVlJNSHVtYW5vaWQodGhpcy5fZW5zdXJlUmVxdWlyZWRCb25lc0V4aXN0KGh1bWFuQm9uZXMpLCB7XG4gICAgICBhdXRvVXBkYXRlSHVtYW5Cb25lczogdGhpcy5hdXRvVXBkYXRlSHVtYW5Cb25lcyxcbiAgICB9KTtcbiAgICBnbHRmLnNjZW5lLmFkZChodW1hbm9pZC5ub3JtYWxpemVkSHVtYW5Cb25lc1Jvb3QpO1xuXG4gICAgaWYgKHRoaXMuaGVscGVyUm9vdCkge1xuICAgICAgY29uc3QgaGVscGVyID0gbmV3IFZSTUh1bWFub2lkSGVscGVyKGh1bWFub2lkKTtcbiAgICAgIHRoaXMuaGVscGVyUm9vdC5hZGQoaGVscGVyKTtcbiAgICAgIGhlbHBlci5yZW5kZXJPcmRlciA9IHRoaXMuaGVscGVyUm9vdC5yZW5kZXJPcmRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gaHVtYW5vaWQ7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlIHJlcXVpcmVkIGJvbmVzIGV4aXN0IGluIGdpdmVuIGh1bWFuIGJvbmVzLlxuICAgKiBAcGFyYW0gaHVtYW5Cb25lcyBIdW1hbiBib25lc1xuICAgKiBAcmV0dXJucyBIdW1hbiBib25lcywgbm8gbG9uZ2VyIHBhcnRpYWwhXG4gICAqL1xuICBwcml2YXRlIF9lbnN1cmVSZXF1aXJlZEJvbmVzRXhpc3QoaHVtYW5Cb25lczogUGFydGlhbDxWUk1IdW1hbkJvbmVzPik6IFZSTUh1bWFuQm9uZXMge1xuICAgIC8vIGVuc3VyZSByZXF1aXJlZCBib25lcyBleGlzdFxuICAgIGNvbnN0IG1pc3NpbmdSZXF1aXJlZEJvbmVzID0gT2JqZWN0LnZhbHVlcyhWUk1SZXF1aXJlZEh1bWFuQm9uZU5hbWUpLmZpbHRlcihcbiAgICAgIChyZXF1aXJlZEJvbmVOYW1lKSA9PiBodW1hbkJvbmVzW3JlcXVpcmVkQm9uZU5hbWVdID09IG51bGwsXG4gICAgKTtcblxuICAgIC8vIHRocm93IGFuIGVycm9yIGlmIHRoZXJlIGFyZSBtaXNzaW5nIGJvbmVzXG4gICAgaWYgKG1pc3NpbmdSZXF1aXJlZEJvbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luOiBUaGVzZSBodW1hbm9pZCBib25lcyBhcmUgcmVxdWlyZWQgYnV0IG5vdCBleGlzdDogJHttaXNzaW5nUmVxdWlyZWRCb25lcy5qb2luKCcsICcpfWAsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBodW1hbkJvbmVzIGFzIFZSTUh1bWFuQm9uZXM7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1Mb29rQXQgfSBmcm9tICcuLi9WUk1Mb29rQXQnO1xuaW1wb3J0IHsgRmFuQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL3V0aWxzL0ZhbkJ1ZmZlckdlb21ldHJ5JztcbmltcG9ydCB7IExpbmVBbmRTcGhlcmVCdWZmZXJHZW9tZXRyeSB9IGZyb20gJy4vdXRpbHMvTGluZUFuZFNwaGVyZUJ1ZmZlckdlb21ldHJ5JztcblxuY29uc3QgX3F1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9xdWF0QiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF92M0IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5jb25zdCBTUVJUXzJfT1ZFUl8yID0gTWF0aC5zcXJ0KDIuMCkgLyAyLjA7XG5jb25zdCBRVUFUX1hZX0NXOTAgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigwLCAwLCAtU1FSVF8yX09WRVJfMiwgU1FSVF8yX09WRVJfMik7XG5jb25zdCBWRUMzX1BPU0lUSVZFX1kgPSBuZXcgVEhSRUUuVmVjdG9yMygwLjAsIDEuMCwgMC4wKTtcblxuZXhwb3J0IGNsYXNzIFZSTUxvb2tBdEhlbHBlciBleHRlbmRzIFRIUkVFLkdyb3VwIHtcbiAgcHVibGljIHJlYWRvbmx5IHZybUxvb2tBdDogVlJNTG9va0F0O1xuICBwcml2YXRlIHJlYWRvbmx5IF9tZXNoWWF3OiBUSFJFRS5NZXNoPEZhbkJ1ZmZlckdlb21ldHJ5LCBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbD47XG4gIHByaXZhdGUgcmVhZG9ubHkgX21lc2hQaXRjaDogVEhSRUUuTWVzaDxGYW5CdWZmZXJHZW9tZXRyeSwgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWw+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9saW5lVGFyZ2V0OiBUSFJFRS5MaW5lU2VnbWVudHM8TGluZUFuZFNwaGVyZUJ1ZmZlckdlb21ldHJ5LCBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbD47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxvb2tBdDogVlJNTG9va0F0KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcblxuICAgIHRoaXMudnJtTG9va0F0ID0gbG9va0F0O1xuXG4gICAge1xuICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgRmFuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICAgIGdlb21ldHJ5LnJhZGl1cyA9IDAuNTtcblxuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICBjb2xvcjogMHgwMGZmMDAsXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXG4gICAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX21lc2hQaXRjaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICB0aGlzLmFkZCh0aGlzLl9tZXNoUGl0Y2gpO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IEZhbkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICBnZW9tZXRyeS5yYWRpdXMgPSAwLjU7XG5cbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgICAgY29sb3I6IDB4ZmYwMDAwLFxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuICAgICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9tZXNoWWF3ID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIHRoaXMuYWRkKHRoaXMuX21lc2hZYXcpO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IExpbmVBbmRTcGhlcmVCdWZmZXJHZW9tZXRyeSgpO1xuICAgICAgZ2VvbWV0cnkucmFkaXVzID0gMC4xO1xuXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICAgICAgZGVwdGhUZXN0OiBmYWxzZSxcbiAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fbGluZVRhcmdldCA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIHRoaXMuX2xpbmVUYXJnZXQuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5hZGQodGhpcy5fbGluZVRhcmdldCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVzaFlhdy5nZW9tZXRyeS5kaXNwb3NlKCk7XG4gICAgdGhpcy5fbWVzaFlhdy5tYXRlcmlhbC5kaXNwb3NlKCk7XG5cbiAgICB0aGlzLl9tZXNoUGl0Y2guZ2VvbWV0cnkuZGlzcG9zZSgpO1xuICAgIHRoaXMuX21lc2hQaXRjaC5tYXRlcmlhbC5kaXNwb3NlKCk7XG5cbiAgICB0aGlzLl9saW5lVGFyZ2V0Lmdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9saW5lVGFyZ2V0Lm1hdGVyaWFsLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVNYXRyaXhXb3JsZChmb3JjZTogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIHVwZGF0ZSBnZW9tZXRyaWVzXG4gICAgY29uc3QgeWF3ID0gVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnZybUxvb2tBdC55YXc7XG4gICAgdGhpcy5fbWVzaFlhdy5nZW9tZXRyeS50aGV0YSA9IHlhdztcbiAgICB0aGlzLl9tZXNoWWF3Lmdlb21ldHJ5LnVwZGF0ZSgpO1xuXG4gICAgY29uc3QgcGl0Y2ggPSBUSFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMudnJtTG9va0F0LnBpdGNoO1xuICAgIHRoaXMuX21lc2hQaXRjaC5nZW9tZXRyeS50aGV0YSA9IHBpdGNoO1xuICAgIHRoaXMuX21lc2hQaXRjaC5nZW9tZXRyeS51cGRhdGUoKTtcblxuICAgIC8vIGdldCB3b3JsZCBwb3NpdGlvbiBhbmQgcXVhdGVybmlvblxuICAgIHRoaXMudnJtTG9va0F0LmdldExvb2tBdFdvcmxkUG9zaXRpb24oX3YzQSk7XG4gICAgdGhpcy52cm1Mb29rQXQuZ2V0TG9va0F0V29ybGRRdWF0ZXJuaW9uKF9xdWF0QSk7XG5cbiAgICAvLyBjYWxjdWxhdGUgcm90YXRpb24gdXNpbmcgZmFjZUZyb250XG4gICAgX3F1YXRBLm11bHRpcGx5KHRoaXMudnJtTG9va0F0LmdldEZhY2VGcm9udFF1YXRlcm5pb24oX3F1YXRCKSk7XG5cbiAgICAvLyBzZXQgdHJhbnNmb3JtIHRvIG1lc2hlc1xuICAgIHRoaXMuX21lc2hZYXcucG9zaXRpb24uY29weShfdjNBKTtcbiAgICB0aGlzLl9tZXNoWWF3LnF1YXRlcm5pb24uY29weShfcXVhdEEpO1xuXG4gICAgdGhpcy5fbWVzaFBpdGNoLnBvc2l0aW9uLmNvcHkoX3YzQSk7XG4gICAgdGhpcy5fbWVzaFBpdGNoLnF1YXRlcm5pb24uY29weShfcXVhdEEpO1xuICAgIHRoaXMuX21lc2hQaXRjaC5xdWF0ZXJuaW9uLm11bHRpcGx5KF9xdWF0Qi5zZXRGcm9tQXhpc0FuZ2xlKFZFQzNfUE9TSVRJVkVfWSwgeWF3KSk7XG4gICAgdGhpcy5fbWVzaFBpdGNoLnF1YXRlcm5pb24ubXVsdGlwbHkoUVVBVF9YWV9DVzkwKTtcblxuICAgIC8vIHVwZGF0ZSB0YXJnZXQgbGluZSBhbmQgc3BoZXJlXG4gICAgY29uc3QgeyB0YXJnZXQsIGF1dG9VcGRhdGUgfSA9IHRoaXMudnJtTG9va0F0O1xuICAgIGlmICh0YXJnZXQgIT0gbnVsbCAmJiBhdXRvVXBkYXRlKSB7XG4gICAgICB0YXJnZXQuZ2V0V29ybGRQb3NpdGlvbihfdjNCKS5zdWIoX3YzQSk7XG4gICAgICB0aGlzLl9saW5lVGFyZ2V0Lmdlb21ldHJ5LnRhaWwuY29weShfdjNCKTtcbiAgICAgIHRoaXMuX2xpbmVUYXJnZXQuZ2VvbWV0cnkudXBkYXRlKCk7XG4gICAgICB0aGlzLl9saW5lVGFyZ2V0LnBvc2l0aW9uLmNvcHkoX3YzQSk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgdHJhbnNmb3JtIHRvIG1lc2hlc1xuICAgIHN1cGVyLnVwZGF0ZU1hdHJpeFdvcmxkKGZvcmNlKTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGNsYXNzIEZhbkJ1ZmZlckdlb21ldHJ5IGV4dGVuZHMgVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBwdWJsaWMgdGhldGE6IG51bWJlcjtcbiAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuICBwcml2YXRlIF9jdXJyZW50VGhldGEgPSAwO1xuICBwcml2YXRlIF9jdXJyZW50UmFkaXVzID0gMDtcbiAgcHJpdmF0ZSByZWFkb25seSBfYXR0clBvczogVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hdHRySW5kZXg6IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudGhldGEgPSAwLjA7XG4gICAgdGhpcy5yYWRpdXMgPSAwLjA7XG4gICAgdGhpcy5fY3VycmVudFRoZXRhID0gMC4wO1xuICAgIHRoaXMuX2N1cnJlbnRSYWRpdXMgPSAwLjA7XG5cbiAgICB0aGlzLl9hdHRyUG9zID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KDY1ICogMyksIDMpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHRoaXMuX2F0dHJQb3MpO1xuXG4gICAgdGhpcy5fYXR0ckluZGV4ID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDE2QXJyYXkoMyAqIDYzKSwgMSk7XG4gICAgdGhpcy5zZXRJbmRleCh0aGlzLl9hdHRySW5kZXgpO1xuXG4gICAgdGhpcy5fYnVpbGRJbmRleCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUaGV0YSAhPT0gdGhpcy50aGV0YSkge1xuICAgICAgdGhpcy5fY3VycmVudFRoZXRhID0gdGhpcy50aGV0YTtcbiAgICAgIHNob3VsZFVwZGF0ZUdlb21ldHJ5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY3VycmVudFJhZGl1cyAhPT0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRSYWRpdXMgPSB0aGlzLnJhZGl1cztcbiAgICAgIHNob3VsZFVwZGF0ZUdlb21ldHJ5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlR2VvbWV0cnkpIHtcbiAgICAgIHRoaXMuX2J1aWxkUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9idWlsZFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDAsIDAuMCwgMC4wLCAwLjApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gKGkgLyA2My4wKSAqIHRoaXMuX2N1cnJlbnRUaGV0YTtcblxuICAgICAgdGhpcy5fYXR0clBvcy5zZXRYWVooaSArIDEsIHRoaXMuX2N1cnJlbnRSYWRpdXMgKiBNYXRoLnNpbih0KSwgMC4wLCB0aGlzLl9jdXJyZW50UmFkaXVzICogTWF0aC5jb3ModCkpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dHJQb3MubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRJbmRleCgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYzOyBpKyspIHtcbiAgICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWVooaSAqIDMsIDAsIGkgKyAxLCBpICsgMik7XG4gICAgfVxuXG4gICAgdGhpcy5fYXR0ckluZGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGNsYXNzIExpbmVBbmRTcGhlcmVCdWZmZXJHZW9tZXRyeSBleHRlbmRzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuICBwdWJsaWMgdGFpbDogVEhSRUUuVmVjdG9yMztcbiAgcHJpdmF0ZSBfY3VycmVudFJhZGl1czogbnVtYmVyO1xuICBwcml2YXRlIF9jdXJyZW50VGFpbDogVEhSRUUuVmVjdG9yMztcbiAgcHJpdmF0ZSByZWFkb25seSBfYXR0clBvczogVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hdHRySW5kZXg6IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmFkaXVzID0gMC4wO1xuICAgIHRoaXMuX2N1cnJlbnRSYWRpdXMgPSAwLjA7XG5cbiAgICB0aGlzLnRhaWwgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIHRoaXMuX2N1cnJlbnRUYWlsID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgIHRoaXMuX2F0dHJQb3MgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoMjk0KSwgMyk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgdGhpcy5fYXR0clBvcyk7XG5cbiAgICB0aGlzLl9hdHRySW5kZXggPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBVaW50MTZBcnJheSgxOTQpLCAxKTtcbiAgICB0aGlzLnNldEluZGV4KHRoaXMuX2F0dHJJbmRleCk7XG5cbiAgICB0aGlzLl9idWlsZEluZGV4KCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgbGV0IHNob3VsZFVwZGF0ZUdlb21ldHJ5ID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fY3VycmVudFJhZGl1cyAhPT0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRSYWRpdXMgPSB0aGlzLnJhZGl1cztcbiAgICAgIHNob3VsZFVwZGF0ZUdlb21ldHJ5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2N1cnJlbnRUYWlsLmVxdWFscyh0aGlzLnRhaWwpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VGFpbC5jb3B5KHRoaXMudGFpbCk7XG4gICAgICBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFVwZGF0ZUdlb21ldHJ5KSB7XG4gICAgICB0aGlzLl9idWlsZFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSAoaSAvIDE2LjApICogTWF0aC5QSTtcblxuICAgICAgdGhpcy5fYXR0clBvcy5zZXRYWVooaSwgTWF0aC5jb3ModCksIE1hdGguc2luKHQpLCAwLjApO1xuICAgICAgdGhpcy5fYXR0clBvcy5zZXRYWVooMzIgKyBpLCAwLjAsIE1hdGguY29zKHQpLCBNYXRoLnNpbih0KSk7XG4gICAgICB0aGlzLl9hdHRyUG9zLnNldFhZWig2NCArIGksIE1hdGguc2luKHQpLCAwLjAsIE1hdGguY29zKHQpKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlKHRoaXMuX2N1cnJlbnRSYWRpdXMsIHRoaXMuX2N1cnJlbnRSYWRpdXMsIHRoaXMuX2N1cnJlbnRSYWRpdXMpO1xuICAgIHRoaXMudHJhbnNsYXRlKHRoaXMuX2N1cnJlbnRUYWlsLngsIHRoaXMuX2N1cnJlbnRUYWlsLnksIHRoaXMuX2N1cnJlbnRUYWlsLnopO1xuXG4gICAgdGhpcy5fYXR0clBvcy5zZXRYWVooOTYsIDAsIDAsIDApO1xuICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDk3LCB0aGlzLl9jdXJyZW50VGFpbC54LCB0aGlzLl9jdXJyZW50VGFpbC55LCB0aGlzLl9jdXJyZW50VGFpbC56KTtcblxuICAgIHRoaXMuX2F0dHJQb3MubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRJbmRleCgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcbiAgICAgIGNvbnN0IGkxID0gKGkgKyAxKSAlIDMyO1xuXG4gICAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoaSAqIDIsIGksIGkxKTtcbiAgICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSg2NCArIGkgKiAyLCAzMiArIGksIDMyICsgaTEpO1xuICAgICAgdGhpcy5fYXR0ckluZGV4LnNldFhZKDEyOCArIGkgKiAyLCA2NCArIGksIDY0ICsgaTEpO1xuICAgIH1cbiAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoMTkyLCA5NiwgOTcpO1xuXG4gICAgdGhpcy5fYXR0ckluZGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi4vaHVtYW5vaWQnO1xuaW1wb3J0IHsgZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZSB9IGZyb20gJy4uL3V0aWxzL2dldFdvcmxkUXVhdGVybmlvbkxpdGUnO1xuaW1wb3J0IHsgcXVhdEludmVydENvbXBhdCB9IGZyb20gJy4uL3V0aWxzL3F1YXRJbnZlcnRDb21wYXQnO1xuaW1wb3J0IHsgY2FsY0F6aW11dGhBbHRpdHVkZSB9IGZyb20gJy4vdXRpbHMvY2FsY0F6aW11dGhBbHRpdHVkZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUxvb2tBdEFwcGxpZXIgfSBmcm9tICcuL1ZSTUxvb2tBdEFwcGxpZXInO1xuaW1wb3J0IHsgc2FuaXRpemVBbmdsZSB9IGZyb20gJy4vdXRpbHMvc2FuaXRpemVBbmdsZSc7XG5cbmNvbnN0IFZFQzNfUE9TSVRJVkVfWiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAuMCwgMC4wLCAxLjApO1xuXG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF92M0IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3YzQyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXRCID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9xdWF0QyA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfcXVhdEQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX2V1bGVyQSA9IG5ldyBUSFJFRS5FdWxlcigpO1xuXG4vKipcbiAqIEEgY2xhc3MgY29udHJvbHMgZXllIGdhemUgbW92ZW1lbnRzIG9mIGEgVlJNLlxuICovXG5leHBvcnQgY2xhc3MgVlJNTG9va0F0IHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBFVUxFUl9PUkRFUiA9ICdZWFonOyAvLyB5YXctcGl0Y2gtcm9sbFxuXG4gIC8qKlxuICAgKiBUaGUgb3JpZ2luIG9mIExvb2tBdC4gUG9zaXRpb24gb2Zmc2V0IGZyb20gdGhlIGhlYWQgYm9uZS5cbiAgICovXG4gIHB1YmxpYyBvZmZzZXRGcm9tSGVhZEJvbmUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gIC8qKlxuICAgKiBJdHMgYXNzb2NpYXRlZCB7QGxpbmsgVlJNSHVtYW5vaWR9LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGh1bWFub2lkOiBWUk1IdW1hbm9pZDtcblxuICAvKipcbiAgICogVGhlIHtAbGluayBWUk1Mb29rQXRBcHBsaWVyfSBvZiB0aGUgTG9va0F0LlxuICAgKi9cbiAgcHVibGljIGFwcGxpZXI6IFZSTUxvb2tBdEFwcGxpZXI7XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgaXMgdHJ1ZSwgdGhlIExvb2tBdCB3aWxsIGJlIHVwZGF0ZWQgYXV0b21hdGljYWxseSBieSBjYWxsaW5nIHtAbGluayB1cGRhdGV9LCB0b3dhcmRpbmcgdGhlIGRpcmVjdGlvbiB0byB0aGUge0BsaW5rIHRhcmdldH0uXG4gICAqIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgKlxuICAgKiBTZWUgYWxzbzoge0BsaW5rIHRhcmdldH1cbiAgICovXG4gIHB1YmxpYyBhdXRvVXBkYXRlID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBvYmplY3Qgb2YgdGhlIExvb2tBdC5cbiAgICogTm90ZSB0aGF0IGl0IGRvZXMgbm90IG1ha2UgYW55IHNlbnNlIGlmIHtAbGluayBhdXRvVXBkYXRlfSBpcyBkaXNhYmxlZC5cbiAgICpcbiAgICogU2VlIGFsc286IHtAbGluayBhdXRvVXBkYXRlfVxuICAgKi9cbiAgcHVibGljIHRhcmdldD86IFRIUkVFLk9iamVjdDNEIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIGZyb250IGRpcmVjdGlvbiBvZiB0aGUgZmFjZS5cbiAgICogSW50ZW5kZWQgdG8gYmUgdXNlZCBmb3IgVlJNIDAuMCBjb21wYXQgKFZSTSAwLjAgbW9kZWxzIGFyZSBmYWNpbmcgWi0gaW5zdGVhZCBvZiBaKykuXG4gICAqIFlvdSB1c3VhbGx5IGRvbid0IHdhbnQgdG8gdG91Y2ggdGhpcy5cbiAgICovXG4gIHB1YmxpYyBmYWNlRnJvbnQgPSBuZXcgVEhSRUUuVmVjdG9yMygwLjAsIDAuMCwgMS4wKTtcblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgYW5nbGUgYXJvdW5kIFkgYXhpcywgaW4gZGVncmVlLlxuICAgKi9cbiAgcHJvdGVjdGVkIF95YXc6IG51bWJlcjtcblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgYW5nbGUgYXJvdW5kIFkgYXhpcywgaW4gZGVncmVlLlxuICAgKi9cbiAgcHVibGljIGdldCB5YXcoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5feWF3O1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IGFuZ2xlIGFyb3VuZCBZIGF4aXMsIGluIGRlZ3JlZS5cbiAgICovXG4gIHB1YmxpYyBzZXQgeWF3KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl95YXcgPSB2YWx1ZTtcbiAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgYW5nbGUgYXJvdW5kIFggYXhpcywgaW4gZGVncmVlLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9waXRjaDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBhbmdsZSBhcm91bmQgWCBheGlzLCBpbiBkZWdyZWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBpdGNoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BpdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IGFuZ2xlIGFyb3VuZCBYIGF4aXMsIGluIGRlZ3JlZS5cbiAgICovXG4gIHB1YmxpYyBzZXQgcGl0Y2godmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BpdGNoID0gdmFsdWU7XG4gICAgdGhpcy5fbmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGF0IGFuZ2xlcyBuZWVkIHRvIGJlIGFwcGxpZWQgdG8gaXRzIFtAbGluayBhcHBsaWVyXS5cbiAgICovXG4gIHByb3RlY3RlZCBfbmVlZHNVcGRhdGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdvcmxkIHJvdGF0aW9uIG9mIHRoZSBoZWFkIGluIGl0cyByZXN0IHBvc2UuXG4gICAqL1xuICBwcml2YXRlIF9yZXN0SGVhZFdvcmxkUXVhdGVybmlvbjogVEhSRUUuUXVhdGVybmlvbjtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBnZXRFdWxlcn0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXQgZXVsZXIoKTogVEhSRUUuRXVsZXIge1xuICAgIGNvbnNvbGUud2FybignVlJNTG9va0F0OiBldWxlciBpcyBkZXByZWNhdGVkLiB1c2UgZ2V0RXVsZXIoKSBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0RXVsZXIobmV3IFRIUkVFLkV1bGVyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNTG9va0F0fS5cbiAgICpcbiAgICogQHBhcmFtIGh1bWFub2lkIEEge0BsaW5rIFZSTUh1bWFub2lkfVxuICAgKiBAcGFyYW0gYXBwbGllciBBIHtAbGluayBWUk1Mb29rQXRBcHBsaWVyfVxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKGh1bWFub2lkOiBWUk1IdW1hbm9pZCwgYXBwbGllcjogVlJNTG9va0F0QXBwbGllcikge1xuICAgIHRoaXMuaHVtYW5vaWQgPSBodW1hbm9pZDtcbiAgICB0aGlzLmFwcGxpZXIgPSBhcHBsaWVyO1xuXG4gICAgdGhpcy5feWF3ID0gMC4wO1xuICAgIHRoaXMuX3BpdGNoID0gMC4wO1xuICAgIHRoaXMuX25lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIHRoaXMuX3Jlc3RIZWFkV29ybGRRdWF0ZXJuaW9uID0gdGhpcy5nZXRMb29rQXRXb3JsZFF1YXRlcm5pb24obmV3IFRIUkVFLlF1YXRlcm5pb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGl0cyB5YXctcGl0Y2ggYW5nbGVzIGFzIGFuIGBFdWxlcmAuXG4gICAqIERvZXMgTk9UIGNvbnNpZGVyIHtAbGluayBmYWNlRnJvbnR9OyBpdCByZXR1cm5zIGBFdWxlcigwLCAwLCAwOyBcIllYWlwiKWAgYnkgZGVmYXVsdCByZWdhcmRsZXNzIG9mIHRoZSBmYWNlRnJvbnQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBldWxlclxuICAgKi9cbiAgcHVibGljIGdldEV1bGVyKHRhcmdldDogVEhSRUUuRXVsZXIpOiBUSFJFRS5FdWxlciB7XG4gICAgcmV0dXJuIHRhcmdldC5zZXQoVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLl9waXRjaCwgVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLl95YXcsIDAuMCwgJ1lYWicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgdGhlIGdpdmVuIHtAbGluayBWUk1Mb29rQXR9IGludG8gdGhpcyBvbmUuXG4gICAqIHtAbGluayBodW1hbm9pZH0gbXVzdCBiZSBzYW1lIGFzIHRoZSBzb3VyY2Ugb25lLlxuICAgKiB7QGxpbmsgYXBwbGllcn0gd2lsbCByZWZlcmVuY2UgdGhlIHNhbWUgaW5zdGFuY2UgYXMgdGhlIHNvdXJjZSBvbmUuXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIHtAbGluayBWUk1Mb29rQXR9IHlvdSB3YW50IHRvIGNvcHlcbiAgICogQHJldHVybnMgdGhpc1xuICAgKi9cbiAgcHVibGljIGNvcHkoc291cmNlOiBWUk1Mb29rQXQpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5odW1hbm9pZCAhPT0gc291cmNlLmh1bWFub2lkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZSTUxvb2tBdDogaHVtYW5vaWQgbXVzdCBiZSBzYW1lIGluIG9yZGVyIHRvIGNvcHknKTtcbiAgICB9XG5cbiAgICB0aGlzLm9mZnNldEZyb21IZWFkQm9uZS5jb3B5KHNvdXJjZS5vZmZzZXRGcm9tSGVhZEJvbmUpO1xuICAgIHRoaXMuYXBwbGllciA9IHNvdXJjZS5hcHBsaWVyO1xuICAgIHRoaXMuYXV0b1VwZGF0ZSA9IHNvdXJjZS5hdXRvVXBkYXRlO1xuICAgIHRoaXMudGFyZ2V0ID0gc291cmNlLnRhcmdldDtcbiAgICB0aGlzLmZhY2VGcm9udC5jb3B5KHNvdXJjZS5mYWNlRnJvbnQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNsb25lIG9mIHRoaXMge0BsaW5rIFZSTUxvb2tBdH0uXG4gICAqIE5vdGUgdGhhdCB7QGxpbmsgaHVtYW5vaWR9IGFuZCB7QGxpbmsgYXBwbGllcn0gd2lsbCByZWZlcmVuY2UgdGhlIHNhbWUgaW5zdGFuY2UgYXMgdGhpcyBvbmUuXG4gICAqIEByZXR1cm5zIENvcGllZCB7QGxpbmsgVlJNTG9va0F0fVxuICAgKi9cbiAgcHVibGljIGNsb25lKCk6IFZSTUxvb2tBdCB7XG4gICAgcmV0dXJuIG5ldyBWUk1Mb29rQXQodGhpcy5odW1hbm9pZCwgdGhpcy5hcHBsaWVyKS5jb3B5KHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBsb29rQXQgZGlyZWN0aW9uICh5YXcgYW5kIHBpdGNoKSB0byB0aGUgaW5pdGlhbCBkaXJlY3Rpb24uXG4gICAqL1xuICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5feWF3ID0gMC4wO1xuICAgIHRoaXMuX3BpdGNoID0gMC4wO1xuICAgIHRoaXMuX25lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaXRzIGxvb2tBdCBwb3NpdGlvbiBpbiB3b3JsZCBjb29yZGluYXRlLlxuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0IEEgdGFyZ2V0IGBUSFJFRS5WZWN0b3IzYFxuICAgKi9cbiAgcHVibGljIGdldExvb2tBdFdvcmxkUG9zaXRpb24odGFyZ2V0OiBUSFJFRS5WZWN0b3IzKTogVEhSRUUuVmVjdG9yMyB7XG4gICAgY29uc3QgaGVhZCA9IHRoaXMuaHVtYW5vaWQuZ2V0UmF3Qm9uZU5vZGUoJ2hlYWQnKSE7XG5cbiAgICByZXR1cm4gdGFyZ2V0LmNvcHkodGhpcy5vZmZzZXRGcm9tSGVhZEJvbmUpLmFwcGx5TWF0cml4NChoZWFkLm1hdHJpeFdvcmxkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaXRzIGxvb2tBdCByb3RhdGlvbiBpbiB3b3JsZCBjb29yZGluYXRlLlxuICAgKiBEb2VzIE5PVCBjb25zaWRlciB7QGxpbmsgZmFjZUZyb250fS5cbiAgICpcbiAgICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBgVEhSRUUuUXVhdGVybmlvbmBcbiAgICovXG4gIHB1YmxpYyBnZXRMb29rQXRXb3JsZFF1YXRlcm5pb24odGFyZ2V0OiBUSFJFRS5RdWF0ZXJuaW9uKTogVEhSRUUuUXVhdGVybmlvbiB7XG4gICAgY29uc3QgaGVhZCA9IHRoaXMuaHVtYW5vaWQuZ2V0UmF3Qm9uZU5vZGUoJ2hlYWQnKSE7XG5cbiAgICByZXR1cm4gZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZShoZWFkLCB0YXJnZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHF1YXRlcm5pb24gdGhhdCByb3RhdGVzIHRoZSArWiB1bml0IHZlY3RvciBvZiB0aGUgaHVtYW5vaWQgSGVhZCB0byB0aGUge0BsaW5rIGZhY2VGcm9udH0gZGlyZWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0IEEgdGFyZ2V0IGBUSFJFRS5RdWF0ZXJuaW9uYFxuICAgKi9cbiAgcHVibGljIGdldEZhY2VGcm9udFF1YXRlcm5pb24odGFyZ2V0OiBUSFJFRS5RdWF0ZXJuaW9uKTogVEhSRUUuUXVhdGVybmlvbiB7XG4gICAgaWYgKHRoaXMuZmFjZUZyb250LmRpc3RhbmNlVG9TcXVhcmVkKFZFQzNfUE9TSVRJVkVfWikgPCAwLjAxKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNvcHkodGhpcy5fcmVzdEhlYWRXb3JsZFF1YXRlcm5pb24pLmludmVydCgpO1xuICAgIH1cblxuICAgIGNvbnN0IFtmYWNlRnJvbnRBemltdXRoLCBmYWNlRnJvbnRBbHRpdHVkZV0gPSBjYWxjQXppbXV0aEFsdGl0dWRlKHRoaXMuZmFjZUZyb250KTtcbiAgICBfZXVsZXJBLnNldCgwLjAsIDAuNSAqIE1hdGguUEkgKyBmYWNlRnJvbnRBemltdXRoLCBmYWNlRnJvbnRBbHRpdHVkZSwgJ1laWCcpO1xuXG4gICAgcmV0dXJuIHRhcmdldC5zZXRGcm9tRXVsZXIoX2V1bGVyQSkucHJlbXVsdGlwbHkoX3F1YXRELmNvcHkodGhpcy5fcmVzdEhlYWRXb3JsZFF1YXRlcm5pb24pLmludmVydCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaXRzIExvb2tBdCBkaXJlY3Rpb24gaW4gd29ybGQgY29vcmRpbmF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBgVEhSRUUuVmVjdG9yM2BcbiAgICovXG4gIHB1YmxpYyBnZXRMb29rQXRXb3JsZERpcmVjdGlvbih0YXJnZXQ6IFRIUkVFLlZlY3RvcjMpOiBUSFJFRS5WZWN0b3IzIHtcbiAgICB0aGlzLmdldExvb2tBdFdvcmxkUXVhdGVybmlvbihfcXVhdEIpO1xuICAgIHRoaXMuZ2V0RmFjZUZyb250UXVhdGVybmlvbihfcXVhdEMpO1xuXG4gICAgcmV0dXJuIHRhcmdldFxuICAgICAgLmNvcHkoVkVDM19QT1NJVElWRV9aKVxuICAgICAgLmFwcGx5UXVhdGVybmlvbihfcXVhdEIpXG4gICAgICAuYXBwbHlRdWF0ZXJuaW9uKF9xdWF0QylcbiAgICAgIC5hcHBseUV1bGVyKHRoaXMuZ2V0RXVsZXIoX2V1bGVyQSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpdHMgbG9va0F0IHRhcmdldCBwb3NpdGlvbi5cbiAgICpcbiAgICogTm90ZSB0aGF0IGl0cyByZXN1bHQgd2lsbCBiZSBpbnN0YW50bHkgb3ZlcndyaXR0ZW4gaWYge0BsaW5rIFZSTUxvb2tBdEhlYWQuYXV0b1VwZGF0ZX0gaXMgZW5hYmxlZC5cbiAgICpcbiAgICogSWYgeW91IHdhbnQgdG8gdHJhY2sgYW4gb2JqZWN0IGNvbnRpbnVvdXNseSwgeW91IG1pZ2h0IHdhbnQgdG8gdXNlIHtAbGluayB0YXJnZXR9IGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBBIHRhcmdldCBwb3NpdGlvbiwgaW4gd29ybGQgc3BhY2VcbiAgICovXG4gIHB1YmxpYyBsb29rQXQocG9zaXRpb246IFRIUkVFLlZlY3RvcjMpOiB2b2lkIHtcbiAgICAvLyBMb29rIGF0IGRpcmVjdGlvbiBpbiBsb2NhbCBjb29yZGluYXRlXG4gICAgY29uc3QgaGVhZFJvdERpZmZJbnYgPSBfcXVhdEFcbiAgICAgIC5jb3B5KHRoaXMuX3Jlc3RIZWFkV29ybGRRdWF0ZXJuaW9uKVxuICAgICAgLm11bHRpcGx5KHF1YXRJbnZlcnRDb21wYXQodGhpcy5nZXRMb29rQXRXb3JsZFF1YXRlcm5pb24oX3F1YXRCKSkpO1xuICAgIGNvbnN0IGhlYWRQb3MgPSB0aGlzLmdldExvb2tBdFdvcmxkUG9zaXRpb24oX3YzQik7XG4gICAgY29uc3QgbG9va0F0RGlyID0gX3YzQy5jb3B5KHBvc2l0aW9uKS5zdWIoaGVhZFBvcykuYXBwbHlRdWF0ZXJuaW9uKGhlYWRSb3REaWZmSW52KS5ub3JtYWxpemUoKTtcblxuICAgIC8vIGNhbGN1bGF0ZSBhbmdsZXNcbiAgICBjb25zdCBbYXppbXV0aEZyb20sIGFsdGl0dWRlRnJvbV0gPSBjYWxjQXppbXV0aEFsdGl0dWRlKHRoaXMuZmFjZUZyb250KTtcbiAgICBjb25zdCBbYXppbXV0aFRvLCBhbHRpdHVkZVRvXSA9IGNhbGNBemltdXRoQWx0aXR1ZGUobG9va0F0RGlyKTtcbiAgICBjb25zdCB5YXcgPSBzYW5pdGl6ZUFuZ2xlKGF6aW11dGhUbyAtIGF6aW11dGhGcm9tKTtcbiAgICBjb25zdCBwaXRjaCA9IHNhbml0aXplQW5nbGUoYWx0aXR1ZGVGcm9tIC0gYWx0aXR1ZGVUbyk7IC8vIHNwaW5uaW5nICgxLCAwLCAwKSBDQ1cgYXJvdW5kIFogYXhpcyBtYWtlcyB0aGUgdmVjdG9yIGxvb2sgdXAsIHdoaWxlIHNwaW5uaW5nICgwLCAwLCAxKSBDQ1cgYXJvdW5kIFggYXhpcyBtYWtlcyB0aGUgdmVjdG9yIGxvb2sgZG93blxuXG4gICAgLy8gYXBwbHkgYW5nbGVzXG4gICAgdGhpcy5feWF3ID0gVEhSRUUuTWF0aFV0aWxzLlJBRDJERUcgKiB5YXc7XG4gICAgdGhpcy5fcGl0Y2ggPSBUSFJFRS5NYXRoVXRpbHMuUkFEMkRFRyAqIHBpdGNoO1xuXG4gICAgdGhpcy5fbmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgVlJNTG9va0F0SGVhZC5cbiAgICogSWYge0BsaW5rIGF1dG9VcGRhdGV9IGlzIGVuYWJsZWQsIHRoaXMgd2lsbCBtYWtlIGl0IGxvb2sgYXQgdGhlIHtAbGluayB0YXJnZXR9LlxuICAgKlxuICAgKiBAcGFyYW0gZGVsdGEgZGVsdGFUaW1lLCBpdCBpc24ndCB1c2VkIHRob3VnaC4gWW91IGNhbiB1c2UgdGhlIHBhcmFtZXRlciBpZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBpbiB5b3VyIG93biBleHRlbmRlZCB7QGxpbmsgVlJNTG9va0F0fS5cbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhcmdldCAhPSBudWxsICYmIHRoaXMuYXV0b1VwZGF0ZSkge1xuICAgICAgdGhpcy5sb29rQXQodGhpcy50YXJnZXQuZ2V0V29ybGRQb3NpdGlvbihfdjNBKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX25lZWRzVXBkYXRlKSB7XG4gICAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmFwcGxpZXIuYXBwbHlZYXdQaXRjaCh0aGlzLl95YXcsIHRoaXMuX3BpdGNoKTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IF9wb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfc2NhbGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4vKipcbiAqIEEgcmVwbGFjZW1lbnQgb2YgYE9iamVjdDNELmdldFdvcmxkUXVhdGVybmlvbmAuXG4gKiBFeHRyYWN0IHRoZSB3b3JsZCBxdWF0ZXJuaW9uIG9mIGFuIG9iamVjdCBmcm9tIGl0cyB3b3JsZCBzcGFjZSBtYXRyaXgsIHdpdGhvdXQgY2FsbGluZyBgT2JqZWN0M0QudXBkYXRlV29ybGRNYXRyaXhgLlxuICogVXNlIHRoaXMgd2hlbiB5b3UncmUgc3VyZSB0aGF0IHRoZSB3b3JsZCBtYXRyaXggaXMgdXAtdG8tZGF0ZS5cbiAqXG4gKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3RcbiAqIEBwYXJhbSBvdXQgQSB0YXJnZXQgcXVhdGVybmlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZShvYmplY3Q6IFRIUkVFLk9iamVjdDNELCBvdXQ6IFRIUkVFLlF1YXRlcm5pb24pOiBUSFJFRS5RdWF0ZXJuaW9uIHtcbiAgb2JqZWN0Lm1hdHJpeFdvcmxkLmRlY29tcG9zZShfcG9zaXRpb24sIG91dCwgX3NjYWxlKTtcbiAgcmV0dXJuIG91dDtcbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGF6aW11dGggLyBhbHRpdHVkZSBhbmdsZXMgZnJvbSBhIHZlY3Rvci5cbiAqXG4gKiBUaGlzIHJldHVybnMgYSBkaWZmZXJlbmNlIG9mIGFuZ2xlcyBmcm9tICgxLCAwLCAwKS5cbiAqIEF6aW11dGggcmVwcmVzZW50cyBhbiBhbmdsZSBhcm91bmQgWSBheGlzLlxuICogQWx0aXR1ZGUgcmVwcmVzZW50cyBhbiBhbmdsZSBhcm91bmQgWiBheGlzLlxuICogSXQgaXMgcm90YXRlZCBpbiBpbnRyaW5zaWMgWS1aIG9yZGVyLlxuICpcbiAqIEBwYXJhbSB2ZWN0b3IgVGhlIHZlY3RvclxuICogQHJldHVybnMgQSB0dXBsZSBjb250YWlucyB0d28gYW5nbGVzLCBgWyBhemltdXRoLCBhbHRpdHVkZSBdYFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY0F6aW11dGhBbHRpdHVkZSh2ZWN0b3I6IFRIUkVFLlZlY3RvcjMpOiBbYXppbXV0aDogbnVtYmVyLCBhbHRpdHVkZTogbnVtYmVyXSB7XG4gIHJldHVybiBbTWF0aC5hdGFuMigtdmVjdG9yLnosIHZlY3Rvci54KSwgTWF0aC5hdGFuMih2ZWN0b3IueSwgTWF0aC5zcXJ0KHZlY3Rvci54ICogdmVjdG9yLnggKyB2ZWN0b3IueiAqIHZlY3Rvci56KSldO1xufVxuIiwgIi8qKlxuICogTWFrZSBzdXJlIHRoZSBhbmdsZSBpcyB3aXRoaW4gLVBJIHRvIFBJLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogc2FuaXRpemVBbmdsZSgxLjUgKiBNYXRoLlBJKSAvLyAtMC41ICogUElcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBhbmdsZSBBbiBpbnB1dCBhbmdsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVBbmdsZShhbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgcm91bmRUdXJuID0gTWF0aC5yb3VuZChhbmdsZSAvIDIuMCAvIE1hdGguUEkpO1xuICByZXR1cm4gYW5nbGUgLSAyLjAgKiBNYXRoLlBJICogcm91bmRUdXJuO1xufVxuIiwgImltcG9ydCB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi4vaHVtYW5vaWQnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1Mb29rQXRBcHBsaWVyIH0gZnJvbSAnLi9WUk1Mb29rQXRBcHBsaWVyJztcbmltcG9ydCB7IFZSTUxvb2tBdFJhbmdlTWFwIH0gZnJvbSAnLi9WUk1Mb29rQXRSYW5nZU1hcCc7XG5pbXBvcnQgeyBjYWxjQXppbXV0aEFsdGl0dWRlIH0gZnJvbSAnLi91dGlscy9jYWxjQXppbXV0aEFsdGl0dWRlJztcbmltcG9ydCB7IGdldFdvcmxkUXVhdGVybmlvbkxpdGUgfSBmcm9tICcuLi91dGlscy9nZXRXb3JsZFF1YXRlcm5pb25MaXRlJztcblxuY29uc3QgVkVDM19QT1NJVElWRV9aID0gbmV3IFRIUkVFLlZlY3RvcjMoMC4wLCAwLjAsIDEuMCk7XG5cbmNvbnN0IF9xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfcXVhdEIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX2V1bGVyQSA9IG5ldyBUSFJFRS5FdWxlcigwLjAsIDAuMCwgMC4wLCAnWVhaJyk7XG5cbi8qKlxuICogQSBjbGFzcyB0aGF0IGFwcGxpZXMgZXllIGdhemUgZGlyZWN0aW9ucyB0byBhIFZSTS5cbiAqIEl0IHdpbGwgYmUgdXNlZCBieSB7QGxpbmsgVlJNTG9va0F0fS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUxvb2tBdEJvbmVBcHBsaWVyIGltcGxlbWVudHMgVlJNTG9va0F0QXBwbGllciB7XG4gIC8qKlxuICAgKiBSZXByZXNlbnQgaXRzIHR5cGUgb2YgYXBwbGllci5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdib25lJztcblxuICAvKipcbiAgICogSXRzIGFzc29jaWF0ZWQge0BsaW5rIFZSTUh1bWFub2lkfS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBodW1hbm9pZDogVlJNSHVtYW5vaWQ7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgaG9yaXpvbnRhbCBpbndhcmQgbW92ZW1lbnQuIFRoZSBsZWZ0IGV5ZSBtb3ZlcyByaWdodC4gVGhlIHJpZ2h0IGV5ZSBtb3ZlcyBsZWZ0LlxuICAgKi9cbiAgcHVibGljIHJhbmdlTWFwSG9yaXpvbnRhbElubmVyOiBWUk1Mb29rQXRSYW5nZU1hcDtcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IGZvciBob3Jpem9udGFsIG91dHdhcmQgbW92ZW1lbnQuIFRoZSBsZWZ0IGV5ZSBtb3ZlcyBsZWZ0LiBUaGUgcmlnaHQgZXllIG1vdmVzIHJpZ2h0LlxuICAgKi9cbiAgcHVibGljIHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyOiBWUk1Mb29rQXRSYW5nZU1hcDtcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IGZvciB2ZXJ0aWNhbCBkb3dud2FyZCBtb3ZlbWVudC4gQm90aCBleWVzIG1vdmUgdXB3YXJkcy5cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcFZlcnRpY2FsRG93bjogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgdmVydGljYWwgdXB3YXJkIG1vdmVtZW50LiBCb3RoIGV5ZXMgbW92ZSBkb3dud2FyZHMuXG4gICAqL1xuICBwdWJsaWMgcmFuZ2VNYXBWZXJ0aWNhbFVwOiBWUk1Mb29rQXRSYW5nZU1hcDtcblxuICAvKipcbiAgICogVGhlIGZyb250IGRpcmVjdGlvbiBvZiB0aGUgZmFjZS5cbiAgICogSW50ZW5kZWQgdG8gYmUgdXNlZCBmb3IgVlJNIDAuMCBjb21wYXQgKFZSTSAwLjAgbW9kZWxzIGFyZSBmYWNpbmcgWi0gaW5zdGVhZCBvZiBaKykuXG4gICAqIFlvdSB1c3VhbGx5IGRvbid0IHdhbnQgdG8gdG91Y2ggdGhpcy5cbiAgICovXG4gIHB1YmxpYyBmYWNlRnJvbnQ6IFRIUkVFLlZlY3RvcjM7XG5cbiAgLyoqXG4gICAqIFRoZSByZXN0IHF1YXRlcm5pb24gb2YgTGVmdEV5ZSBib25lLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzdFF1YXRMZWZ0RXllOiBUSFJFRS5RdWF0ZXJuaW9uO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzdCBxdWF0ZXJuaW9uIG9mIFJpZ2h0RXllIGJvbmUuXG4gICAqL1xuICBwcml2YXRlIF9yZXN0UXVhdFJpZ2h0RXllOiBUSFJFRS5RdWF0ZXJuaW9uO1xuXG4gIC8qKlxuICAgKiBUaGUgd29ybGQtc3BhY2UgcmVzdCBxdWF0ZXJuaW9uIG9mIHRoZSBwYXJlbnQgb2YgdGhlIGh1bWFub2lkIExlZnRFeWUuXG4gICAqL1xuICBwcml2YXRlIF9yZXN0TGVmdEV5ZVBhcmVudFdvcmxkUXVhdDogVEhSRUUuUXVhdGVybmlvbjtcblxuICAvKipcbiAgICogVGhlIHdvcmxkLXNwYWNlIHJlc3QgcXVhdGVybmlvbiBvZiB0aGUgcGFyZW50IG9mIHRoZSBodW1hbm9pZCBSaWdodEV5ZS5cbiAgICovXG4gIHByaXZhdGUgX3Jlc3RSaWdodEV5ZVBhcmVudFdvcmxkUXVhdDogVEhSRUUuUXVhdGVybmlvbjtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHtAbGluayBWUk1Mb29rQXRCb25lQXBwbGllcn0uXG4gICAqXG4gICAqIEBwYXJhbSBodW1hbm9pZCBBIHtAbGluayBWUk1IdW1hbm9pZH1cbiAgICogQHBhcmFtIHJhbmdlTWFwSG9yaXpvbnRhbElubmVyIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSB1c2VkIGZvciBpbm5lciB0cmFuc3ZlcnNlIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXIgQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIG91dGVyIHRyYW5zdmVyc2UgZGlyZWN0aW9uXG4gICAqIEBwYXJhbSByYW5nZU1hcFZlcnRpY2FsRG93biBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gdXNlZCBmb3IgZG93biBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHJhbmdlTWFwVmVydGljYWxVcCBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gdXNlZCBmb3IgdXAgZGlyZWN0aW9uXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgaHVtYW5vaWQ6IFZSTUh1bWFub2lkLFxuICAgIHJhbmdlTWFwSG9yaXpvbnRhbElubmVyOiBWUk1Mb29rQXRSYW5nZU1hcCxcbiAgICByYW5nZU1hcEhvcml6b250YWxPdXRlcjogVlJNTG9va0F0UmFuZ2VNYXAsXG4gICAgcmFuZ2VNYXBWZXJ0aWNhbERvd246IFZSTUxvb2tBdFJhbmdlTWFwLFxuICAgIHJhbmdlTWFwVmVydGljYWxVcDogVlJNTG9va0F0UmFuZ2VNYXAsXG4gICkge1xuICAgIHRoaXMuaHVtYW5vaWQgPSBodW1hbm9pZDtcblxuICAgIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsSW5uZXIgPSByYW5nZU1hcEhvcml6b250YWxJbm5lcjtcbiAgICB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbE91dGVyID0gcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXI7XG4gICAgdGhpcy5yYW5nZU1hcFZlcnRpY2FsRG93biA9IHJhbmdlTWFwVmVydGljYWxEb3duO1xuICAgIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbFVwID0gcmFuZ2VNYXBWZXJ0aWNhbFVwO1xuXG4gICAgdGhpcy5mYWNlRnJvbnQgPSBuZXcgVEhSRUUuVmVjdG9yMygwLjAsIDAuMCwgMS4wKTtcblxuICAgIC8vIHNldCByZXN0IHF1YXRlcm5pb25zXG4gICAgdGhpcy5fcmVzdFF1YXRMZWZ0RXllID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICB0aGlzLl9yZXN0UXVhdFJpZ2h0RXllID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICB0aGlzLl9yZXN0TGVmdEV5ZVBhcmVudFdvcmxkUXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgdGhpcy5fcmVzdFJpZ2h0RXllUGFyZW50V29ybGRRdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuICAgIGNvbnN0IGxlZnRFeWUgPSB0aGlzLmh1bWFub2lkLmdldFJhd0JvbmVOb2RlKCdsZWZ0RXllJyk7XG4gICAgY29uc3QgcmlnaHRFeWUgPSB0aGlzLmh1bWFub2lkLmdldFJhd0JvbmVOb2RlKCdyaWdodEV5ZScpO1xuXG4gICAgaWYgKGxlZnRFeWUpIHtcbiAgICAgIHRoaXMuX3Jlc3RRdWF0TGVmdEV5ZS5jb3B5KGxlZnRFeWUucXVhdGVybmlvbik7XG4gICAgICBnZXRXb3JsZFF1YXRlcm5pb25MaXRlKGxlZnRFeWUucGFyZW50ISwgdGhpcy5fcmVzdExlZnRFeWVQYXJlbnRXb3JsZFF1YXQpO1xuICAgIH1cblxuICAgIGlmIChyaWdodEV5ZSkge1xuICAgICAgdGhpcy5fcmVzdFF1YXRSaWdodEV5ZS5jb3B5KHJpZ2h0RXllLnF1YXRlcm5pb24pO1xuICAgICAgZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZShyaWdodEV5ZS5wYXJlbnQhLCB0aGlzLl9yZXN0UmlnaHRFeWVQYXJlbnRXb3JsZFF1YXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgaW5wdXQgYW5nbGUgdG8gaXRzIGFzc29jaWF0ZWQgVlJNIG1vZGVsLlxuICAgKlxuICAgKiBAcGFyYW0geWF3IFJvdGF0aW9uIGFyb3VuZCBZIGF4aXMsIGluIGRlZ3JlZVxuICAgKiBAcGFyYW0gcGl0Y2ggUm90YXRpb24gYXJvdW5kIFggYXhpcywgaW4gZGVncmVlXG4gICAqL1xuICBwdWJsaWMgYXBwbHlZYXdQaXRjaCh5YXc6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGxlZnRFeWUgPSB0aGlzLmh1bWFub2lkLmdldFJhd0JvbmVOb2RlKCdsZWZ0RXllJyk7XG4gICAgY29uc3QgcmlnaHRFeWUgPSB0aGlzLmh1bWFub2lkLmdldFJhd0JvbmVOb2RlKCdyaWdodEV5ZScpO1xuICAgIGNvbnN0IGxlZnRFeWVOb3JtYWxpemVkID0gdGhpcy5odW1hbm9pZC5nZXROb3JtYWxpemVkQm9uZU5vZGUoJ2xlZnRFeWUnKTtcbiAgICBjb25zdCByaWdodEV5ZU5vcm1hbGl6ZWQgPSB0aGlzLmh1bWFub2lkLmdldE5vcm1hbGl6ZWRCb25lTm9kZSgncmlnaHRFeWUnKTtcbiAgICAvLyBsZWZ0XG4gICAgaWYgKGxlZnRFeWUpIHtcbiAgICAgIGlmIChwaXRjaCA8IDAuMCkge1xuICAgICAgICBfZXVsZXJBLnggPSAtVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnJhbmdlTWFwVmVydGljYWxEb3duLm1hcCgtcGl0Y2gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2V1bGVyQS54ID0gVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnJhbmdlTWFwVmVydGljYWxVcC5tYXAocGl0Y2gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoeWF3IDwgMC4wKSB7XG4gICAgICAgIF9ldWxlckEueSA9IC1USFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsSW5uZXIubWFwKC15YXcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2V1bGVyQS55ID0gVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbE91dGVyLm1hcCh5YXcpO1xuICAgICAgfVxuXG4gICAgICBfcXVhdEEuc2V0RnJvbUV1bGVyKF9ldWxlckEpO1xuICAgICAgdGhpcy5fZ2V0V29ybGRGYWNlRnJvbnRRdWF0KF9xdWF0Qik7XG5cbiAgICAgIC8vIF9xdWF0QiAqIF9xdWF0QSAqIF9xdWF0Ql4tMVxuICAgICAgLy8gd2hlcmUgX3F1YXRBIGlzIExvb2tBdCByb3RhdGlvblxuICAgICAgLy8gYW5kIF9xdWF0QiBpcyB3b3JsZEZhY2VGcm9udFF1YXRcbiAgICAgIGxlZnRFeWVOb3JtYWxpemVkIS5xdWF0ZXJuaW9uLmNvcHkoX3F1YXRCKS5tdWx0aXBseShfcXVhdEEpLm11bHRpcGx5KF9xdWF0Qi5pbnZlcnQoKSk7XG5cbiAgICAgIF9xdWF0QS5jb3B5KHRoaXMuX3Jlc3RMZWZ0RXllUGFyZW50V29ybGRRdWF0KTtcblxuICAgICAgLy8gX3F1YXRBXi0xICogbGVmdEV5ZU5vcm1hbGl6ZWQucXVhdGVybmlvbiAqIF9xdWF0QSAqIHJlc3RRdWF0TGVmdEV5ZVxuICAgICAgLy8gd2hlcmUgX3F1YXRBIGlzIHJlc3RMZWZ0RXllUGFyZW50V29ybGRRdWF0XG4gICAgICBsZWZ0RXllLnF1YXRlcm5pb25cbiAgICAgICAgLmNvcHkobGVmdEV5ZU5vcm1hbGl6ZWQhLnF1YXRlcm5pb24pXG4gICAgICAgIC5tdWx0aXBseShfcXVhdEEpXG4gICAgICAgIC5wcmVtdWx0aXBseShfcXVhdEEuaW52ZXJ0KCkpXG4gICAgICAgIC5tdWx0aXBseSh0aGlzLl9yZXN0UXVhdExlZnRFeWUpO1xuICAgIH1cblxuICAgIC8vIHJpZ2h0XG4gICAgaWYgKHJpZ2h0RXllKSB7XG4gICAgICBpZiAocGl0Y2ggPCAwLjApIHtcbiAgICAgICAgX2V1bGVyQS54ID0gLVRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcFZlcnRpY2FsRG93bi5tYXAoLXBpdGNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9ldWxlckEueCA9IFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcFZlcnRpY2FsVXAubWFwKHBpdGNoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHlhdyA8IDAuMCkge1xuICAgICAgICBfZXVsZXJBLnkgPSAtVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbE91dGVyLm1hcCgteWF3KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9ldWxlckEueSA9IFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcEhvcml6b250YWxJbm5lci5tYXAoeWF3KTtcbiAgICAgIH1cblxuICAgICAgX3F1YXRBLnNldEZyb21FdWxlcihfZXVsZXJBKTtcbiAgICAgIHRoaXMuX2dldFdvcmxkRmFjZUZyb250UXVhdChfcXVhdEIpO1xuXG4gICAgICAvLyBfcXVhdEIgKiBfcXVhdEEgKiBfcXVhdEJeLTFcbiAgICAgIC8vIHdoZXJlIF9xdWF0QSBpcyBMb29rQXQgcm90YXRpb25cbiAgICAgIC8vIGFuZCBfcXVhdEIgaXMgd29ybGRGYWNlRnJvbnRRdWF0XG4gICAgICByaWdodEV5ZU5vcm1hbGl6ZWQhLnF1YXRlcm5pb24uY29weShfcXVhdEIpLm11bHRpcGx5KF9xdWF0QSkubXVsdGlwbHkoX3F1YXRCLmludmVydCgpKTtcblxuICAgICAgX3F1YXRBLmNvcHkodGhpcy5fcmVzdFJpZ2h0RXllUGFyZW50V29ybGRRdWF0KTtcblxuICAgICAgLy8gX3F1YXRBXi0xICogcmlnaHRFeWVOb3JtYWxpemVkLnF1YXRlcm5pb24gKiBfcXVhdEEgKiByZXN0UXVhdFJpZ2h0RXllXG4gICAgICAvLyB3aGVyZSBfcXVhdEEgaXMgcmVzdFJpZ2h0RXllUGFyZW50V29ybGRRdWF0XG4gICAgICByaWdodEV5ZS5xdWF0ZXJuaW9uXG4gICAgICAgIC5jb3B5KHJpZ2h0RXllTm9ybWFsaXplZCEucXVhdGVybmlvbilcbiAgICAgICAgLm11bHRpcGx5KF9xdWF0QSlcbiAgICAgICAgLnByZW11bHRpcGx5KF9xdWF0QS5pbnZlcnQoKSlcbiAgICAgICAgLm11bHRpcGx5KHRoaXMuX3Jlc3RRdWF0UmlnaHRFeWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIGFwcGx5WWF3UGl0Y2h9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgbG9va0F0KGV1bGVyOiBUSFJFRS5FdWxlcik6IHZvaWQge1xuICAgIGNvbnNvbGUud2FybignVlJNTG9va0F0Qm9uZUFwcGxpZXI6IGxvb2tBdCgpIGlzIGRlcHJlY2F0ZWQuIHVzZSBhcHBseSgpIGluc3RlYWQuJyk7XG5cbiAgICBjb25zdCB5YXcgPSBUSFJFRS5NYXRoVXRpbHMuUkFEMkRFRyAqIGV1bGVyLnk7XG4gICAgY29uc3QgcGl0Y2ggPSBUSFJFRS5NYXRoVXRpbHMuUkFEMkRFRyAqIGV1bGVyLng7XG5cbiAgICB0aGlzLmFwcGx5WWF3UGl0Y2goeWF3LCBwaXRjaCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcXVhdGVybmlvbiB0aGF0IHJvdGF0ZXMgdGhlIHdvcmxkLXNwYWNlICtaIHVuaXQgdmVjdG9yIHRvIHRoZSB7QGxpbmsgZmFjZUZyb250fSBkaXJlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXQgQSB0YXJnZXQgYFRIUkVFLlF1YXRlcm5pb25gXG4gICAqL1xuICBwcml2YXRlIF9nZXRXb3JsZEZhY2VGcm9udFF1YXQodGFyZ2V0OiBUSFJFRS5RdWF0ZXJuaW9uKTogVEhSRUUuUXVhdGVybmlvbiB7XG4gICAgaWYgKHRoaXMuZmFjZUZyb250LmRpc3RhbmNlVG9TcXVhcmVkKFZFQzNfUE9TSVRJVkVfWikgPCAwLjAxKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlkZW50aXR5KCk7XG4gICAgfVxuXG4gICAgY29uc3QgW2ZhY2VGcm9udEF6aW11dGgsIGZhY2VGcm9udEFsdGl0dWRlXSA9IGNhbGNBemltdXRoQWx0aXR1ZGUodGhpcy5mYWNlRnJvbnQpO1xuICAgIF9ldWxlckEuc2V0KDAuMCwgMC41ICogTWF0aC5QSSArIGZhY2VGcm9udEF6aW11dGgsIGZhY2VGcm9udEFsdGl0dWRlLCAnWVpYJyk7XG5cbiAgICByZXR1cm4gdGFyZ2V0LnNldEZyb21FdWxlcihfZXVsZXJBKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFZSTUV4cHJlc3Npb25NYW5hZ2VyIH0gZnJvbSAnLi4vZXhwcmVzc2lvbnMnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1Mb29rQXRBcHBsaWVyIH0gZnJvbSAnLi9WUk1Mb29rQXRBcHBsaWVyJztcbmltcG9ydCB7IFZSTUxvb2tBdFJhbmdlTWFwIH0gZnJvbSAnLi9WUk1Mb29rQXRSYW5nZU1hcCc7XG5cbi8qKlxuICogQSBjbGFzcyB0aGF0IGFwcGxpZXMgZXllIGdhemUgZGlyZWN0aW9ucyB0byBhIFZSTS5cbiAqIEl0IHdpbGwgYmUgdXNlZCBieSB7QGxpbmsgVlJNTG9va0F0fS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUxvb2tBdEV4cHJlc3Npb25BcHBsaWVyIGltcGxlbWVudHMgVlJNTG9va0F0QXBwbGllciB7XG4gIC8qKlxuICAgKiBSZXByZXNlbnQgaXRzIHR5cGUgb2YgYXBwbGllci5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdleHByZXNzaW9uJztcblxuICAvKipcbiAgICogSXRzIGFzc29jaWF0ZWQge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBleHByZXNzaW9uczogVlJNRXhwcmVzc2lvbk1hbmFnZXI7XG5cbiAgLyoqXG4gICAqIEl0IHdvbid0IGJlIHVzZWQgaW4gZXhwcmVzc2lvbiBhcHBsaWVyLlxuICAgKiBTZWUgYWxzbzoge0BsaW5rIHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyfVxuICAgKi9cbiAgcHVibGljIHJhbmdlTWFwSG9yaXpvbnRhbElubmVyOiBWUk1Mb29rQXRSYW5nZU1hcDtcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IGZvciBob3Jpem9udGFsIG1vdmVtZW50LiBCb3RoIGV5ZXMgbW92ZSBsZWZ0IG9yIHJpZ2h0LlxuICAgKi9cbiAgcHVibGljIHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyOiBWUk1Mb29rQXRSYW5nZU1hcDtcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IGZvciB2ZXJ0aWNhbCBkb3dud2FyZCBtb3ZlbWVudC4gQm90aCBleWVzIG1vdmUgdXB3YXJkcy5cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcFZlcnRpY2FsRG93bjogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgdmVydGljYWwgdXB3YXJkIG1vdmVtZW50LiBCb3RoIGV5ZXMgbW92ZSBkb3dud2FyZHMuXG4gICAqL1xuICBwdWJsaWMgcmFuZ2VNYXBWZXJ0aWNhbFVwOiBWUk1Mb29rQXRSYW5nZU1hcDtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHtAbGluayBWUk1Mb29rQXRFeHByZXNzaW9uQXBwbGllcn0uXG4gICAqXG4gICAqIEBwYXJhbSBleHByZXNzaW9ucyBBIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn1cbiAgICogQHBhcmFtIHJhbmdlTWFwSG9yaXpvbnRhbElubmVyIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSB1c2VkIGZvciBpbm5lciB0cmFuc3ZlcnNlIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXIgQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIG91dGVyIHRyYW5zdmVyc2UgZGlyZWN0aW9uXG4gICAqIEBwYXJhbSByYW5nZU1hcFZlcnRpY2FsRG93biBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gdXNlZCBmb3IgZG93biBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHJhbmdlTWFwVmVydGljYWxVcCBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gdXNlZCBmb3IgdXAgZGlyZWN0aW9uXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgZXhwcmVzc2lvbnM6IFZSTUV4cHJlc3Npb25NYW5hZ2VyLFxuICAgIHJhbmdlTWFwSG9yaXpvbnRhbElubmVyOiBWUk1Mb29rQXRSYW5nZU1hcCxcbiAgICByYW5nZU1hcEhvcml6b250YWxPdXRlcjogVlJNTG9va0F0UmFuZ2VNYXAsXG4gICAgcmFuZ2VNYXBWZXJ0aWNhbERvd246IFZSTUxvb2tBdFJhbmdlTWFwLFxuICAgIHJhbmdlTWFwVmVydGljYWxVcDogVlJNTG9va0F0UmFuZ2VNYXAsXG4gICkge1xuICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucztcblxuICAgIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsSW5uZXIgPSByYW5nZU1hcEhvcml6b250YWxJbm5lcjtcbiAgICB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbE91dGVyID0gcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXI7XG4gICAgdGhpcy5yYW5nZU1hcFZlcnRpY2FsRG93biA9IHJhbmdlTWFwVmVydGljYWxEb3duO1xuICAgIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbFVwID0gcmFuZ2VNYXBWZXJ0aWNhbFVwO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBpbnB1dCBhbmdsZSB0byBpdHMgYXNzb2NpYXRlZCBWUk0gbW9kZWwuXG4gICAqXG4gICAqIEBwYXJhbSB5YXcgUm90YXRpb24gYXJvdW5kIFkgYXhpcywgaW4gZGVncmVlXG4gICAqIEBwYXJhbSBwaXRjaCBSb3RhdGlvbiBhcm91bmQgWCBheGlzLCBpbiBkZWdyZWVcbiAgICovXG4gIHB1YmxpYyBhcHBseVlhd1BpdGNoKHlhdzogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHBpdGNoIDwgMC4wKSB7XG4gICAgICB0aGlzLmV4cHJlc3Npb25zLnNldFZhbHVlKCdsb29rRG93bicsIDAuMCk7XG4gICAgICB0aGlzLmV4cHJlc3Npb25zLnNldFZhbHVlKCdsb29rVXAnLCB0aGlzLnJhbmdlTWFwVmVydGljYWxVcC5tYXAoLXBpdGNoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tVcCcsIDAuMCk7XG4gICAgICB0aGlzLmV4cHJlc3Npb25zLnNldFZhbHVlKCdsb29rRG93bicsIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbERvd24ubWFwKHBpdGNoKSk7XG4gICAgfVxuXG4gICAgaWYgKHlhdyA8IDAuMCkge1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va0xlZnQnLCAwLjApO1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va1JpZ2h0JywgdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlci5tYXAoLXlhdykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cHJlc3Npb25zLnNldFZhbHVlKCdsb29rUmlnaHQnLCAwLjApO1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va0xlZnQnLCB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbE91dGVyLm1hcCh5YXcpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBhcHBseVlhd1BpdGNofSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGxvb2tBdChldWxlcjogVEhSRUUuRXVsZXIpOiB2b2lkIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUxvb2tBdEJvbmVBcHBsaWVyOiBsb29rQXQoKSBpcyBkZXByZWNhdGVkLiB1c2UgYXBwbHkoKSBpbnN0ZWFkLicpO1xuXG4gICAgY29uc3QgeWF3ID0gVEhSRUUuTWF0aFV0aWxzLlJBRDJERUcgKiBldWxlci55O1xuICAgIGNvbnN0IHBpdGNoID0gVEhSRUUuTWF0aFV0aWxzLlJBRDJERUcgKiBldWxlci54O1xuXG4gICAgdGhpcy5hcHBseVlhd1BpdGNoKHlhdywgcGl0Y2gpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgc2F0dXJhdGUgfSBmcm9tICcuLi91dGlscy9zYXR1cmF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBWUk1Mb29rQXRSYW5nZU1hcCB7XG4gIC8qKlxuICAgKiBMaW1pdHMgdGhlIG1heGltdW0gYW5nbGUgb2YgdGhlIGlucHV0IGFuZ2xlIG9mIHRoZSBMb29rQXQgdmVjdG9yIGZyb20gdGhlIGZyb250IG9mIHRoZSBoZWFkICh0aGUgcG9zaXRpdmUgeiBheGlzKS5cbiAgICovXG4gIHB1YmxpYyBpbnB1dE1heFZhbHVlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYW4gYW5nbGUgKGluIGRlZ3JlZXMpIGZvciBib25lIHR5cGUgb2YgTG9va0F0IGFwcGxpZXJzLCBvciBhIHdlaWdodCBmb3IgZXhwcmVzc2lvbiB0eXBlIG9mIExvb2tBdCBhcHBsaWVycy5cbiAgICogVGhlIGlucHV0IHZhbHVlIHdpbGwgdGFrZSBgMS4wYCB3aGVuIHRoZSBpbnB1dCBhbmdsZSBlcXVhbHMgKG9yIGdyZWF0ZXIpIHRvIHtAbGluayBpbnB1dE1heFZhbHVlfS5cbiAgICovXG4gIHB1YmxpYyBvdXRwdXRTY2FsZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfS5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0TWF4VmFsdWUgVGhlIHtAbGluayBpbnB1dE1heFZhbHVlfSBvZiB0aGUgbWFwXG4gICAqIEBwYXJhbSBvdXRwdXRTY2FsZSBUaGUge0BsaW5rIG91dHB1dFNjYWxlfSBvZiB0aGUgbWFwXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoaW5wdXRNYXhWYWx1ZTogbnVtYmVyLCBvdXRwdXRTY2FsZTogbnVtYmVyKSB7XG4gICAgdGhpcy5pbnB1dE1heFZhbHVlID0gaW5wdXRNYXhWYWx1ZTtcbiAgICB0aGlzLm91dHB1dFNjYWxlID0gb3V0cHV0U2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgYW4gaW5wdXQgdmFsdWUgYW5kIG91dHB1dCBhIG1hcHBlZCB2YWx1ZS5cbiAgICogQHBhcmFtIHNyYyBUaGUgaW5wdXQgdmFsdWVcbiAgICovXG4gIHB1YmxpYyBtYXAoc3JjOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm91dHB1dFNjYWxlICogc2F0dXJhdGUoc3JjIC8gdGhpcy5pbnB1dE1heFZhbHVlKTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMFZSTSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtLTAuMCc7XG5pbXBvcnQgdHlwZSAqIGFzIFYxVlJNU2NoZW1hIGZyb20gJ0BwaXhpdi90eXBlcy12cm1jLXZybS0xLjAnO1xuaW1wb3J0IHR5cGUgeyBHTFRGLCBHTFRGTG9hZGVyUGx1Z2luLCBHTFRGUGFyc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25NYW5hZ2VyIH0gZnJvbSAnLi4vZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4uL2h1bWFub2lkL1ZSTUh1bWFub2lkJztcbmltcG9ydCB7IFZSTUxvb2tBdEhlbHBlciB9IGZyb20gJy4vaGVscGVycy9WUk1Mb29rQXRIZWxwZXInO1xuaW1wb3J0IHsgVlJNTG9va0F0IH0gZnJvbSAnLi9WUk1Mb29rQXQnO1xuaW1wb3J0IHR5cGUgeyBWUk1Mb29rQXRBcHBsaWVyIH0gZnJvbSAnLi9WUk1Mb29rQXRBcHBsaWVyJztcbmltcG9ydCB7IFZSTUxvb2tBdEJvbmVBcHBsaWVyIH0gZnJvbSAnLi9WUk1Mb29rQXRCb25lQXBwbGllcic7XG5pbXBvcnQgeyBWUk1Mb29rQXRFeHByZXNzaW9uQXBwbGllciB9IGZyb20gJy4vVlJNTG9va0F0RXhwcmVzc2lvbkFwcGxpZXInO1xuaW1wb3J0IHR5cGUgeyBWUk1Mb29rQXRMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9WUk1Mb29rQXRMb2FkZXJQbHVnaW5PcHRpb25zJztcbmltcG9ydCB7IFZSTUxvb2tBdFJhbmdlTWFwIH0gZnJvbSAnLi9WUk1Mb29rQXRSYW5nZU1hcCc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TID0gbmV3IFNldChbJzEuMCcsICcxLjAtYmV0YSddKTtcblxuLyoqXG4gKiBUaGUgbWluaW11bSBwZXJtaXR0ZWQgdmFsdWUgZm9yIHtAbGluayBWMVZSTVNjaGVtYS5Mb29rQXRSYW5nZU1hcC5pbnB1dE1heFZhbHVlfS5cbiAqIElmIHRoZSBnaXZlbiB2YWx1ZSBpcyBzbWFsbGVyIHRoYW4gdGhpcywgdGhlIGxvYWRlciBzaG93cyBhIHdhcm5pbmcgYW5kIGNsYW1wcyB1cCB0aGUgdmFsdWUuXG4gKi9cbmNvbnN0IElOUFVUX01BWF9WQUxVRV9NSU5JTVVNID0gMC4wMTtcblxuLyoqXG4gKiBBIHBsdWdpbiBvZiBHTFRGTG9hZGVyIHRoYXQgaW1wb3J0cyBhIHtAbGluayBWUk1Mb29rQXR9IGZyb20gYSBWUk0gZXh0ZW5zaW9uIG9mIGEgR0xURi5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUxvb2tBdExvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICAvKipcbiAgICogU3BlY2lmeSBhbiBPYmplY3QzRCB0byBhZGQge0BsaW5rIFZSTUxvb2tBdEhlbHBlcn0gcy5cbiAgICogSWYgbm90IHNwZWNpZmllZCwgaGVscGVyIHdpbGwgbm90IGJlIGNyZWF0ZWQuXG4gICAqIElmIGByZW5kZXJPcmRlcmAgaXMgc2V0IHRvIHRoZSByb290LCBoZWxwZXJzIHdpbGwgY29weSB0aGUgc2FtZSBgcmVuZGVyT3JkZXJgIC5cbiAgICovXG4gIHB1YmxpYyBoZWxwZXJSb290PzogVEhSRUUuT2JqZWN0M0Q7XG5cbiAgcHVibGljIHJlYWRvbmx5IHBhcnNlcjogR0xURlBhcnNlcjtcblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAvLyBXZSBzaG91bGQgdXNlIHRoZSBleHRlbnNpb24gbmFtZSBpbnN0ZWFkIGJ1dCB3ZSBoYXZlIG11bHRpcGxlIHBsdWdpbnMgZm9yIGFuIGV4dGVuc2lvbi4uLlxuICAgIHJldHVybiAnVlJNTG9va0F0TG9hZGVyUGx1Z2luJztcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIsIG9wdGlvbnM/OiBWUk1Mb29rQXRMb2FkZXJQbHVnaW5PcHRpb25zKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cbiAgICB0aGlzLmhlbHBlclJvb3QgPSBvcHRpb25zPy5oZWxwZXJSb290O1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFmdGVyUm9vdChnbHRmOiBHTFRGKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdnJtSHVtYW5vaWQgPSBnbHRmLnVzZXJEYXRhLnZybUh1bWFub2lkIGFzIFZSTUh1bWFub2lkIHwgdW5kZWZpbmVkO1xuXG4gICAgLy8gZXhwbGljaXRseSBkaXN0aW5ndWlzaCBudWxsIGFuZCB1bmRlZmluZWRcbiAgICAvLyBzaW5jZSB2cm1IdW1hbm9pZCBtaWdodCBiZSBudWxsIGFzIGEgcmVzdWx0XG4gICAgaWYgKHZybUh1bWFub2lkID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh2cm1IdW1hbm9pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZSTUxvb2tBdExvYWRlclBsdWdpbjogdnJtSHVtYW5vaWQgaXMgdW5kZWZpbmVkLiBWUk1IdW1hbm9pZExvYWRlclBsdWdpbiBoYXZlIHRvIGJlIHVzZWQgZmlyc3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCB2cm1FeHByZXNzaW9uTWFuYWdlciA9IGdsdGYudXNlckRhdGEudnJtRXhwcmVzc2lvbk1hbmFnZXIgYXMgVlJNRXhwcmVzc2lvbk1hbmFnZXIgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAodnJtRXhwcmVzc2lvbk1hbmFnZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHZybUV4cHJlc3Npb25NYW5hZ2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1ZSTUxvb2tBdExvYWRlclBsdWdpbjogdnJtRXhwcmVzc2lvbk1hbmFnZXIgaXMgdW5kZWZpbmVkLiBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luIGhhdmUgdG8gYmUgdXNlZCBmaXJzdCcsXG4gICAgICApO1xuICAgIH1cblxuICAgIGdsdGYudXNlckRhdGEudnJtTG9va0F0ID0gYXdhaXQgdGhpcy5faW1wb3J0KGdsdGYsIHZybUh1bWFub2lkLCB2cm1FeHByZXNzaW9uTWFuYWdlcik7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGEge0BsaW5rIFZSTUxvb2tBdH0gZnJvbSBhIFZSTS5cbiAgICpcbiAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXG4gICAqIEBwYXJhbSBodW1hbm9pZCBBIHtAbGluayBWUk1IdW1hbm9pZH0gaW5zdGFuY2UgdGhhdCByZXByZXNlbnRzIHRoZSBWUk1cbiAgICogQHBhcmFtIGV4cHJlc3Npb25zIEEge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfSBpbnN0YW5jZSB0aGF0IHJlcHJlc2VudHMgdGhlIFZSTVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfaW1wb3J0KFxuICAgIGdsdGY6IEdMVEYsXG4gICAgaHVtYW5vaWQ6IFZSTUh1bWFub2lkIHwgbnVsbCxcbiAgICBleHByZXNzaW9uczogVlJNRXhwcmVzc2lvbk1hbmFnZXIgfCBudWxsLFxuICApOiBQcm9taXNlPFZSTUxvb2tBdCB8IG51bGw+IHtcbiAgICBpZiAoaHVtYW5vaWQgPT0gbnVsbCB8fCBleHByZXNzaW9ucyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB2MVJlc3VsdCA9IGF3YWl0IHRoaXMuX3YxSW1wb3J0KGdsdGYsIGh1bWFub2lkLCBleHByZXNzaW9ucyk7XG4gICAgaWYgKHYxUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjFSZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdjBSZXN1bHQgPSBhd2FpdCB0aGlzLl92MEltcG9ydChnbHRmLCBodW1hbm9pZCwgZXhwcmVzc2lvbnMpO1xuICAgIGlmICh2MFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHYwUmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjFJbXBvcnQoXG4gICAgZ2x0ZjogR0xURixcbiAgICBodW1hbm9pZDogVlJNSHVtYW5vaWQsXG4gICAgZXhwcmVzc2lvbnM6IFZSTUV4cHJlc3Npb25NYW5hZ2VyLFxuICApOiBQcm9taXNlPFZSTUxvb2tBdCB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgaXNWUk1Vc2VkID0ganNvbi5leHRlbnNpb25zVXNlZD8uaW5kZXhPZignVlJNQ192cm0nKSAhPT0gLTE7XG4gICAgaWYgKCFpc1ZSTVVzZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGpzb24uZXh0ZW5zaW9ucz8uWydWUk1DX3ZybSddIGFzIFYxVlJNU2NoZW1hLlZSTUNWUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCFleHRlbnNpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNwZWNWZXJzaW9uID0gZXh0ZW5zaW9uLnNwZWNWZXJzaW9uO1xuICAgIGlmICghUE9TU0lCTEVfU1BFQ19WRVJTSU9OUy5oYXMoc3BlY1ZlcnNpb24pKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFZSTUxvb2tBdExvYWRlclBsdWdpbjogVW5rbm93biBWUk1DX3ZybSBzcGVjVmVyc2lvbiBcIiR7c3BlY1ZlcnNpb259XCJgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYUxvb2tBdCA9IGV4dGVuc2lvbi5sb29rQXQ7XG4gICAgaWYgKCFzY2hlbWFMb29rQXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRPdXRwdXRTY2FsZSA9IHNjaGVtYUxvb2tBdC50eXBlID09PSAnZXhwcmVzc2lvbicgPyAxLjAgOiAxMC4wO1xuXG4gICAgY29uc3QgbWFwSEkgPSB0aGlzLl92MUltcG9ydFJhbmdlTWFwKHNjaGVtYUxvb2tBdC5yYW5nZU1hcEhvcml6b250YWxJbm5lciwgZGVmYXVsdE91dHB1dFNjYWxlKTtcbiAgICBjb25zdCBtYXBITyA9IHRoaXMuX3YxSW1wb3J0UmFuZ2VNYXAoc2NoZW1hTG9va0F0LnJhbmdlTWFwSG9yaXpvbnRhbE91dGVyLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuICAgIGNvbnN0IG1hcFZEID0gdGhpcy5fdjFJbXBvcnRSYW5nZU1hcChzY2hlbWFMb29rQXQucmFuZ2VNYXBWZXJ0aWNhbERvd24sIGRlZmF1bHRPdXRwdXRTY2FsZSk7XG4gICAgY29uc3QgbWFwVlUgPSB0aGlzLl92MUltcG9ydFJhbmdlTWFwKHNjaGVtYUxvb2tBdC5yYW5nZU1hcFZlcnRpY2FsVXAsIGRlZmF1bHRPdXRwdXRTY2FsZSk7XG5cbiAgICBsZXQgYXBwbGllcjtcblxuICAgIGlmIChzY2hlbWFMb29rQXQudHlwZSA9PT0gJ2V4cHJlc3Npb24nKSB7XG4gICAgICBhcHBsaWVyID0gbmV3IFZSTUxvb2tBdEV4cHJlc3Npb25BcHBsaWVyKGV4cHJlc3Npb25zLCBtYXBISSwgbWFwSE8sIG1hcFZELCBtYXBWVSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGxpZXIgPSBuZXcgVlJNTG9va0F0Qm9uZUFwcGxpZXIoaHVtYW5vaWQsIG1hcEhJLCBtYXBITywgbWFwVkQsIG1hcFZVKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb29rQXQgPSB0aGlzLl9pbXBvcnRMb29rQXQoaHVtYW5vaWQsIGFwcGxpZXIpO1xuXG4gICAgbG9va0F0Lm9mZnNldEZyb21IZWFkQm9uZS5mcm9tQXJyYXkoc2NoZW1hTG9va0F0Lm9mZnNldEZyb21IZWFkQm9uZSA/PyBbMC4wLCAwLjA2LCAwLjBdKTtcblxuICAgIHJldHVybiBsb29rQXQ7XG4gIH1cblxuICBwcml2YXRlIF92MUltcG9ydFJhbmdlTWFwKFxuICAgIHNjaGVtYVJhbmdlTWFwOiBWMVZSTVNjaGVtYS5Mb29rQXRSYW5nZU1hcCB8IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0T3V0cHV0U2NhbGU6IG51bWJlcixcbiAgKTogVlJNTG9va0F0UmFuZ2VNYXAge1xuICAgIGxldCBpbnB1dE1heFZhbHVlID0gc2NoZW1hUmFuZ2VNYXA/LmlucHV0TWF4VmFsdWUgPz8gOTAuMDtcbiAgICBjb25zdCBvdXRwdXRTY2FsZSA9IHNjaGVtYVJhbmdlTWFwPy5vdXRwdXRTY2FsZSA/PyBkZWZhdWx0T3V0cHV0U2NhbGU7XG5cbiAgICAvLyBJdCBtaWdodCBjYXVzZSBOYU4gd2hlbiBgaW5wdXRNYXhWYWx1ZWAgaXMgdG9vIHNtYWxsXG4gICAgLy8gd2hpY2ggbWFrZXMgdGhlIG1lc2ggb2YgdGhlIGhlYWQgZGlzYXBwZWFyXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcGl4aXYvdGhyZWUtdnJtL2lzc3Vlcy8xMjAxXG4gICAgaWYgKGlucHV0TWF4VmFsdWUgPCBJTlBVVF9NQVhfVkFMVUVfTUlOSU1VTSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnVlJNTG9va0F0TG9hZGVyUGx1Z2luOiBpbnB1dE1heFZhbHVlIG9mIGEgcmFuZ2UgbWFwIGlzIHRvbyBzbWFsbC4gQ29uc2lkZXIgcmV2aWV3aW5nIHRoZSByYW5nZSBtYXAhJyxcbiAgICAgICk7XG4gICAgICBpbnB1dE1heFZhbHVlID0gSU5QVVRfTUFYX1ZBTFVFX01JTklNVU07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBWUk1Mb29rQXRSYW5nZU1hcChpbnB1dE1heFZhbHVlLCBvdXRwdXRTY2FsZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MEltcG9ydChcbiAgICBnbHRmOiBHTFRGLFxuICAgIGh1bWFub2lkOiBWUk1IdW1hbm9pZCxcbiAgICBleHByZXNzaW9uczogVlJNRXhwcmVzc2lvbk1hbmFnZXIsXG4gICk6IFByb21pc2U8VlJNTG9va0F0IHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSB2cm1cbiAgICBjb25zdCB2cm1FeHQgPSBqc29uLmV4dGVuc2lvbnM/LlZSTSBhcyBWMFZSTS5WUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCF2cm1FeHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYUZpcnN0UGVyc29uID0gdnJtRXh0LmZpcnN0UGVyc29uO1xuICAgIGlmICghc2NoZW1hRmlyc3RQZXJzb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRPdXRwdXRTY2FsZSA9IHNjaGVtYUZpcnN0UGVyc29uLmxvb2tBdFR5cGVOYW1lID09PSAnQmxlbmRTaGFwZScgPyAxLjAgOiAxMC4wO1xuXG4gICAgY29uc3QgbWFwSEkgPSB0aGlzLl92MEltcG9ydERlZ3JlZU1hcChzY2hlbWFGaXJzdFBlcnNvbi5sb29rQXRIb3Jpem9udGFsSW5uZXIsIGRlZmF1bHRPdXRwdXRTY2FsZSk7XG4gICAgY29uc3QgbWFwSE8gPSB0aGlzLl92MEltcG9ydERlZ3JlZU1hcChzY2hlbWFGaXJzdFBlcnNvbi5sb29rQXRIb3Jpem9udGFsT3V0ZXIsIGRlZmF1bHRPdXRwdXRTY2FsZSk7XG4gICAgY29uc3QgbWFwVkQgPSB0aGlzLl92MEltcG9ydERlZ3JlZU1hcChzY2hlbWFGaXJzdFBlcnNvbi5sb29rQXRWZXJ0aWNhbERvd24sIGRlZmF1bHRPdXRwdXRTY2FsZSk7XG4gICAgY29uc3QgbWFwVlUgPSB0aGlzLl92MEltcG9ydERlZ3JlZU1hcChzY2hlbWFGaXJzdFBlcnNvbi5sb29rQXRWZXJ0aWNhbFVwLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuXG4gICAgbGV0IGFwcGxpZXI7XG5cbiAgICBpZiAoc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0VHlwZU5hbWUgPT09ICdCbGVuZFNoYXBlJykge1xuICAgICAgYXBwbGllciA9IG5ldyBWUk1Mb29rQXRFeHByZXNzaW9uQXBwbGllcihleHByZXNzaW9ucywgbWFwSEksIG1hcEhPLCBtYXBWRCwgbWFwVlUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBsaWVyID0gbmV3IFZSTUxvb2tBdEJvbmVBcHBsaWVyKGh1bWFub2lkLCBtYXBISSwgbWFwSE8sIG1hcFZELCBtYXBWVSk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9va0F0ID0gdGhpcy5faW1wb3J0TG9va0F0KGh1bWFub2lkLCBhcHBsaWVyKTtcblxuICAgIGlmIChzY2hlbWFGaXJzdFBlcnNvbi5maXJzdFBlcnNvbkJvbmVPZmZzZXQpIHtcbiAgICAgIGxvb2tBdC5vZmZzZXRGcm9tSGVhZEJvbmUuc2V0KFxuICAgICAgICBzY2hlbWFGaXJzdFBlcnNvbi5maXJzdFBlcnNvbkJvbmVPZmZzZXQueCA/PyAwLjAsXG4gICAgICAgIHNjaGVtYUZpcnN0UGVyc29uLmZpcnN0UGVyc29uQm9uZU9mZnNldC55ID8/IDAuMDYsXG4gICAgICAgIC0oc2NoZW1hRmlyc3RQZXJzb24uZmlyc3RQZXJzb25Cb25lT2Zmc2V0LnogPz8gMC4wKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvb2tBdC5vZmZzZXRGcm9tSGVhZEJvbmUuc2V0KDAuMCwgMC4wNiwgMC4wKTtcbiAgICB9XG5cbiAgICAvLyBWUk0gMC4wIGFyZSBmYWNpbmcgWi0gaW5zdGVhZCBvZiBaK1xuICAgIGxvb2tBdC5mYWNlRnJvbnQuc2V0KDAuMCwgMC4wLCAtMS4wKTtcblxuICAgIGlmIChhcHBsaWVyIGluc3RhbmNlb2YgVlJNTG9va0F0Qm9uZUFwcGxpZXIpIHtcbiAgICAgIGFwcGxpZXIuZmFjZUZyb250LnNldCgwLjAsIDAuMCwgLTEuMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvb2tBdDtcbiAgfVxuXG4gIHByaXZhdGUgX3YwSW1wb3J0RGVncmVlTWFwKFxuICAgIHNjaGVtYURlZ3JlZU1hcDogVjBWUk0uRmlyc3RQZXJzb25EZWdyZWVNYXAgfCB1bmRlZmluZWQsXG4gICAgZGVmYXVsdE91dHB1dFNjYWxlOiBudW1iZXIsXG4gICk6IFZSTUxvb2tBdFJhbmdlTWFwIHtcbiAgICBjb25zdCBjdXJ2ZSA9IHNjaGVtYURlZ3JlZU1hcD8uY3VydmU7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KGN1cnZlKSAhPT0gJ1swLDAsMCwxLDEsMSwxLDBdJykge1xuICAgICAgY29uc29sZS53YXJuKCdDdXJ2ZXMgb2YgTG9va0F0RGVncmVlTWFwIGRlZmluZWQgaW4gVlJNIDAuMCBhcmUgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cblxuICAgIGxldCB4UmFuZ2UgPSBzY2hlbWFEZWdyZWVNYXA/LnhSYW5nZSA/PyA5MC4wO1xuICAgIGNvbnN0IHlSYW5nZSA9IHNjaGVtYURlZ3JlZU1hcD8ueVJhbmdlID8/IGRlZmF1bHRPdXRwdXRTY2FsZTtcblxuICAgIC8vIEl0IG1pZ2h0IGNhdXNlIE5hTiB3aGVuIGB4UmFuZ2VgIGlzIHRvbyBzbWFsbFxuICAgIC8vIHdoaWNoIG1ha2VzIHRoZSBtZXNoIG9mIHRoZSBoZWFkIGRpc2FwcGVhclxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3BpeGl2L3RocmVlLXZybS9pc3N1ZXMvMTIwMVxuICAgIGlmICh4UmFuZ2UgPCBJTlBVVF9NQVhfVkFMVUVfTUlOSU1VTSkge1xuICAgICAgY29uc29sZS53YXJuKCdWUk1Mb29rQXRMb2FkZXJQbHVnaW46IHhSYW5nZSBvZiBhIGRlZ3JlZSBtYXAgaXMgdG9vIHNtYWxsLiBDb25zaWRlciByZXZpZXdpbmcgdGhlIGRlZ3JlZSBtYXAhJyk7XG4gICAgICB4UmFuZ2UgPSBJTlBVVF9NQVhfVkFMVUVfTUlOSU1VTTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFZSTUxvb2tBdFJhbmdlTWFwKHhSYW5nZSwgeVJhbmdlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ltcG9ydExvb2tBdChodW1hbm9pZDogVlJNSHVtYW5vaWQsIGFwcGxpZXI6IFZSTUxvb2tBdEFwcGxpZXIpOiBWUk1Mb29rQXQge1xuICAgIGNvbnN0IGxvb2tBdCA9IG5ldyBWUk1Mb29rQXQoaHVtYW5vaWQsIGFwcGxpZXIpO1xuXG4gICAgaWYgKHRoaXMuaGVscGVyUm9vdCkge1xuICAgICAgY29uc3QgaGVscGVyID0gbmV3IFZSTUxvb2tBdEhlbHBlcihsb29rQXQpO1xuICAgICAgdGhpcy5oZWxwZXJSb290LmFkZChoZWxwZXIpO1xuICAgICAgaGVscGVyLnJlbmRlck9yZGVyID0gdGhpcy5oZWxwZXJSb290LnJlbmRlck9yZGVyO1xuICAgIH1cblxuICAgIHJldHVybiBsb29rQXQ7XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgdHlwZSBvZiBhcHBsaWVyLlxuICovXG5leHBvcnQgY29uc3QgVlJNTG9va0F0VHlwZU5hbWUgPSB7XG4gIEJvbmU6ICdib25lJyxcbiAgRXhwcmVzc2lvbjogJ2V4cHJlc3Npb24nLFxufTtcblxuZXhwb3J0IHR5cGUgVlJNTG9va0F0VHlwZU5hbWUgPSAodHlwZW9mIFZSTUxvb2tBdFR5cGVOYW1lKVtrZXlvZiB0eXBlb2YgVlJNTG9va0F0VHlwZU5hbWVdO1xuIiwgImltcG9ydCB0eXBlIHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHR5cGUgeyBWUk0wTWV0YSB9IGZyb20gJy4vVlJNME1ldGEnO1xuaW1wb3J0IHR5cGUgeyBWUk0xTWV0YSB9IGZyb20gJy4vVlJNMU1ldGEnO1xuaW1wb3J0IHR5cGUgeyBWUk1NZXRhIH0gZnJvbSAnLi9WUk1NZXRhJztcbmltcG9ydCB0eXBlIHsgVlJNTWV0YUxvYWRlclBsdWdpbk9wdGlvbnMgfSBmcm9tICcuL1ZSTU1ldGFMb2FkZXJQbHVnaW5PcHRpb25zJztcbmltcG9ydCB0eXBlICogYXMgVjBWUk0gZnJvbSAnQHBpeGl2L3R5cGVzLXZybS0wLjAnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMVZSTVNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy12cm0tMS4wJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IHJlc29sdmVVUkwgfSBmcm9tICcuLi91dGlscy9yZXNvbHZlVVJMJztcbmltcG9ydCB7IEdMVEYgYXMgR0xURlNjaGVtYSB9IGZyb20gJ0BnbHRmLXRyYW5zZm9ybS9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBzcGVjIHZlcnNpb25zIGl0IHJlY29nbml6ZXMuXG4gKi9cbmNvbnN0IFBPU1NJQkxFX1NQRUNfVkVSU0lPTlMgPSBuZXcgU2V0KFsnMS4wJywgJzEuMC1iZXRhJ10pO1xuXG4vKipcbiAqIEEgcGx1Z2luIG9mIEdMVEZMb2FkZXIgdGhhdCBpbXBvcnRzIGEge0BsaW5rIFZSTTFNZXRhfSBmcm9tIGEgVlJNIGV4dGVuc2lvbiBvZiBhIEdMVEYuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1NZXRhTG9hZGVyUGx1Z2luIGltcGxlbWVudHMgR0xURkxvYWRlclBsdWdpbiB7XG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgLyoqXG4gICAqIElmIGBmYWxzZWAsIGl0IHdvbid0IGxvYWQgaXRzIHRodW1ibmFpbCBpbWFnZSAoe0BsaW5rIFZSTTFNZXRhLnRodW1ibmFpbEltYWdlfSkuXG4gICAqIGBmYWxzZWAgYnkgZGVmYXVsdC5cbiAgICovXG4gIHB1YmxpYyBuZWVkVGh1bWJuYWlsSW1hZ2U6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBsaWNlbnNlIHVybHMuXG4gICAqIFRoaXMgbWV0YSBsb2FkZXIgd2lsbCBhY2NlcHQgdGhlc2UgYGxpY2Vuc2VVcmxgcy5cbiAgICogT3RoZXJ3aXNlIGl0IHdvbid0IGJlIGxvYWRlZC5cbiAgICovXG4gIHB1YmxpYyBhY2NlcHRMaWNlbnNlVXJsczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgaXQgc2hvdWxkIGFjY2VwdCBWUk0wLjAgbWV0YSBvciBub3QuXG4gICAqIE5vdGUgdGhhdCBpdCBtaWdodCBsb2FkIHtAbGluayBWUk0wTWV0YX0gaW5zdGVhZCBvZiB7QGxpbmsgVlJNMU1ldGF9IHdoZW4gdGhpcyBpcyBgdHJ1ZWAuXG4gICAqIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgKi9cbiAgcHVibGljIGFjY2VwdFYwTWV0YTogYm9vbGVhbjtcblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAvLyBXZSBzaG91bGQgdXNlIHRoZSBleHRlbnNpb24gbmFtZSBpbnN0ZWFkIGJ1dCB3ZSBoYXZlIG11bHRpcGxlIHBsdWdpbnMgZm9yIGFuIGV4dGVuc2lvbi4uLlxuICAgIHJldHVybiAnVlJNTWV0YUxvYWRlclBsdWdpbic7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyc2VyOiBHTFRGUGFyc2VyLCBvcHRpb25zPzogVlJNTWV0YUxvYWRlclBsdWdpbk9wdGlvbnMpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICAgIHRoaXMubmVlZFRodW1ibmFpbEltYWdlID0gb3B0aW9ucz8ubmVlZFRodW1ibmFpbEltYWdlID8/IGZhbHNlO1xuICAgIHRoaXMuYWNjZXB0TGljZW5zZVVybHMgPSBvcHRpb25zPy5hY2NlcHRMaWNlbnNlVXJscyA/PyBbJ2h0dHBzOi8vdnJtLmRldi9saWNlbnNlcy8xLjAvJ107XG4gICAgdGhpcy5hY2NlcHRWME1ldGEgPSBvcHRpb25zPy5hY2NlcHRWME1ldGEgPz8gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlclJvb3QoZ2x0ZjogR0xURik6IFByb21pc2U8dm9pZD4ge1xuICAgIGdsdGYudXNlckRhdGEudnJtTWV0YSA9IGF3YWl0IHRoaXMuX2ltcG9ydChnbHRmKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1NZXRhIHwgbnVsbD4ge1xuICAgIGNvbnN0IHYxUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjFJbXBvcnQoZ2x0Zik7XG4gICAgaWYgKHYxUmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB2MVJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCB2MFJlc3VsdCA9IGF3YWl0IHRoaXMuX3YwSW1wb3J0KGdsdGYpO1xuICAgIGlmICh2MFJlc3VsdCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdjBSZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MUltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk0xTWV0YSB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgaXNWUk1Vc2VkID0ganNvbi5leHRlbnNpb25zVXNlZD8uaW5kZXhPZignVlJNQ192cm0nKSAhPT0gLTE7XG4gICAgaWYgKCFpc1ZSTVVzZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGpzb24uZXh0ZW5zaW9ucz8uWydWUk1DX3ZybSddIGFzIFYxVlJNU2NoZW1hLlZSTUNWUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKGV4dGVuc2lvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVjVmVyc2lvbiA9IGV4dGVuc2lvbi5zcGVjVmVyc2lvbjtcbiAgICBpZiAoIVBPU1NJQkxFX1NQRUNfVkVSU0lPTlMuaGFzKHNwZWNWZXJzaW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKGBWUk1NZXRhTG9hZGVyUGx1Z2luOiBVbmtub3duIFZSTUNfdnJtIHNwZWNWZXJzaW9uIFwiJHtzcGVjVmVyc2lvbn1cImApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hTWV0YSA9IGV4dGVuc2lvbi5tZXRhO1xuICAgIGlmICghc2NoZW1hTWV0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3IgaWYgYWNjZXB0VjBNZXRhIGlzIGZhbHNlXG4gICAgY29uc3QgbGljZW5zZVVybCA9IHNjaGVtYU1ldGEubGljZW5zZVVybDtcbiAgICBjb25zdCBhY2NlcHRMaWNlbnNlVXJsc1NldCA9IG5ldyBTZXQodGhpcy5hY2NlcHRMaWNlbnNlVXJscyk7XG4gICAgaWYgKCFhY2NlcHRMaWNlbnNlVXJsc1NldC5oYXMobGljZW5zZVVybCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVlJNTWV0YUxvYWRlclBsdWdpbjogVGhlIGxpY2Vuc2UgdXJsIFwiJHtsaWNlbnNlVXJsfVwiIGlzIG5vdCBhY2NlcHRlZGApO1xuICAgIH1cblxuICAgIGxldCB0aHVtYm5haWxJbWFnZTogSFRNTEltYWdlRWxlbWVudCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5uZWVkVGh1bWJuYWlsSW1hZ2UgJiYgc2NoZW1hTWV0YS50aHVtYm5haWxJbWFnZSAhPSBudWxsKSB7XG4gICAgICB0aHVtYm5haWxJbWFnZSA9IChhd2FpdCB0aGlzLl9leHRyYWN0R0xURkltYWdlKHNjaGVtYU1ldGEudGh1bWJuYWlsSW1hZ2UpKSA/PyB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1ldGFWZXJzaW9uOiAnMScsXG4gICAgICBuYW1lOiBzY2hlbWFNZXRhLm5hbWUsXG4gICAgICB2ZXJzaW9uOiBzY2hlbWFNZXRhLnZlcnNpb24sXG4gICAgICBhdXRob3JzOiBzY2hlbWFNZXRhLmF1dGhvcnMsXG4gICAgICBjb3B5cmlnaHRJbmZvcm1hdGlvbjogc2NoZW1hTWV0YS5jb3B5cmlnaHRJbmZvcm1hdGlvbixcbiAgICAgIGNvbnRhY3RJbmZvcm1hdGlvbjogc2NoZW1hTWV0YS5jb250YWN0SW5mb3JtYXRpb24sXG4gICAgICByZWZlcmVuY2VzOiBzY2hlbWFNZXRhLnJlZmVyZW5jZXMsXG4gICAgICB0aGlyZFBhcnR5TGljZW5zZXM6IHNjaGVtYU1ldGEudGhpcmRQYXJ0eUxpY2Vuc2VzLFxuICAgICAgdGh1bWJuYWlsSW1hZ2UsXG4gICAgICBsaWNlbnNlVXJsOiBzY2hlbWFNZXRhLmxpY2Vuc2VVcmwsXG4gICAgICBhdmF0YXJQZXJtaXNzaW9uOiBzY2hlbWFNZXRhLmF2YXRhclBlcm1pc3Npb24sXG4gICAgICBhbGxvd0V4Y2Vzc2l2ZWx5VmlvbGVudFVzYWdlOiBzY2hlbWFNZXRhLmFsbG93RXhjZXNzaXZlbHlWaW9sZW50VXNhZ2UsXG4gICAgICBhbGxvd0V4Y2Vzc2l2ZWx5U2V4dWFsVXNhZ2U6IHNjaGVtYU1ldGEuYWxsb3dFeGNlc3NpdmVseVNleHVhbFVzYWdlLFxuICAgICAgY29tbWVyY2lhbFVzYWdlOiBzY2hlbWFNZXRhLmNvbW1lcmNpYWxVc2FnZSxcbiAgICAgIGFsbG93UG9saXRpY2FsT3JSZWxpZ2lvdXNVc2FnZTogc2NoZW1hTWV0YS5hbGxvd1BvbGl0aWNhbE9yUmVsaWdpb3VzVXNhZ2UsXG4gICAgICBhbGxvd0FudGlzb2NpYWxPckhhdGVVc2FnZTogc2NoZW1hTWV0YS5hbGxvd0FudGlzb2NpYWxPckhhdGVVc2FnZSxcbiAgICAgIGNyZWRpdE5vdGF0aW9uOiBzY2hlbWFNZXRhLmNyZWRpdE5vdGF0aW9uLFxuICAgICAgYWxsb3dSZWRpc3RyaWJ1dGlvbjogc2NoZW1hTWV0YS5hbGxvd1JlZGlzdHJpYnV0aW9uLFxuICAgICAgbW9kaWZpY2F0aW9uOiBzY2hlbWFNZXRhLm1vZGlmaWNhdGlvbixcbiAgICAgIG90aGVyTGljZW5zZVVybDogc2NoZW1hTWV0YS5vdGhlckxpY2Vuc2VVcmwsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YwSW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTTBNZXRhIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSB2cm1cbiAgICBjb25zdCB2cm1FeHQgPSBqc29uLmV4dGVuc2lvbnM/LlZSTSBhcyBWMFZSTS5WUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCF2cm1FeHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYU1ldGEgPSB2cm1FeHQubWV0YTtcbiAgICBpZiAoIXNjaGVtYU1ldGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHRocm93IGFuIGVycm9yIGlmIGFjY2VwdFYwTWV0YSBpcyBmYWxzZVxuICAgIGlmICghdGhpcy5hY2NlcHRWME1ldGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVlJNTWV0YUxvYWRlclBsdWdpbjogQXR0ZW1wdGVkIHRvIGxvYWQgVlJNMC4wIG1ldGEgYnV0IGFjY2VwdFYwTWV0YSBpcyBmYWxzZScpO1xuICAgIH1cblxuICAgIC8vIGxvYWQgdGh1bWJuYWlsIHRleHR1cmVcbiAgICBsZXQgdGV4dHVyZTogVEhSRUUuVGV4dHVyZSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMubmVlZFRodW1ibmFpbEltYWdlICYmIHNjaGVtYU1ldGEudGV4dHVyZSAhPSBudWxsICYmIHNjaGVtYU1ldGEudGV4dHVyZSAhPT0gLTEpIHtcbiAgICAgIHRleHR1cmUgPSBhd2FpdCB0aGlzLnBhcnNlci5nZXREZXBlbmRlbmN5KCd0ZXh0dXJlJywgc2NoZW1hTWV0YS50ZXh0dXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWV0YVZlcnNpb246ICcwJyxcbiAgICAgIGFsbG93ZWRVc2VyTmFtZTogc2NoZW1hTWV0YS5hbGxvd2VkVXNlck5hbWUsXG4gICAgICBhdXRob3I6IHNjaGVtYU1ldGEuYXV0aG9yLFxuICAgICAgY29tbWVyY2lhbFVzc2FnZU5hbWU6IHNjaGVtYU1ldGEuY29tbWVyY2lhbFVzc2FnZU5hbWUsXG4gICAgICBjb250YWN0SW5mb3JtYXRpb246IHNjaGVtYU1ldGEuY29udGFjdEluZm9ybWF0aW9uLFxuICAgICAgbGljZW5zZU5hbWU6IHNjaGVtYU1ldGEubGljZW5zZU5hbWUsXG4gICAgICBvdGhlckxpY2Vuc2VVcmw6IHNjaGVtYU1ldGEub3RoZXJMaWNlbnNlVXJsLFxuICAgICAgb3RoZXJQZXJtaXNzaW9uVXJsOiBzY2hlbWFNZXRhLm90aGVyUGVybWlzc2lvblVybCxcbiAgICAgIHJlZmVyZW5jZTogc2NoZW1hTWV0YS5yZWZlcmVuY2UsXG4gICAgICBzZXh1YWxVc3NhZ2VOYW1lOiBzY2hlbWFNZXRhLnNleHVhbFVzc2FnZU5hbWUsXG4gICAgICB0ZXh0dXJlOiB0ZXh0dXJlID8/IHVuZGVmaW5lZCxcbiAgICAgIHRpdGxlOiBzY2hlbWFNZXRhLnRpdGxlLFxuICAgICAgdmVyc2lvbjogc2NoZW1hTWV0YS52ZXJzaW9uLFxuICAgICAgdmlvbGVudFVzc2FnZU5hbWU6IHNjaGVtYU1ldGEudmlvbGVudFVzc2FnZU5hbWUsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2V4dHJhY3RHTFRGSW1hZ2UoaW5kZXg6IG51bWJlcik6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudCB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgY29uc3Qgc291cmNlID0ganNvbi5pbWFnZXM/LltpbmRleF07XG5cbiAgICBpZiAoc291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFZSTU1ldGFMb2FkZXJQbHVnaW46IEF0dGVtcHQgdG8gdXNlIGltYWdlc1ske2luZGV4fV0gb2YgZ2xURiBhcyBhIHRodW1ibmFpbCBidXQgdGhlIGltYWdlIGRvZXNuJ3QgZXhpc3RgLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL3IxMjQvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyNMMjQ2N1xuXG4gICAgLy8gYHNvdXJjZS51cmlgIG1pZ2h0IGJlIGEgcmVmZXJlbmNlIHRvIGEgZmlsZVxuICAgIGxldCBzb3VyY2VVUkk6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHNvdXJjZS51cmk7XG5cbiAgICAvLyBMb2FkIHRoZSBiaW5hcnkgYXMgYSBibG9iXG4gICAgaWYgKHNvdXJjZS5idWZmZXJWaWV3ICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBhd2FpdCB0aGlzLnBhcnNlci5nZXREZXBlbmRlbmN5KCdidWZmZXJWaWV3Jywgc291cmNlLmJ1ZmZlclZpZXcpO1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJWaWV3XSwgeyB0eXBlOiBzb3VyY2UubWltZVR5cGUgfSk7XG4gICAgICBzb3VyY2VVUkkgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2VVUkkgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVlJNTWV0YUxvYWRlclBsdWdpbjogQXR0ZW1wdCB0byB1c2UgaW1hZ2VzWyR7aW5kZXh9XSBvZiBnbFRGIGFzIGEgdGh1bWJuYWlsIGJ1dCB0aGUgaW1hZ2UgY291bGRuJ3QgbG9hZCBwcm9wZXJseWAsXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLkltYWdlTG9hZGVyKCk7XG4gICAgcmV0dXJuIGF3YWl0IGxvYWRlci5sb2FkQXN5bmMocmVzb2x2ZVVSTChzb3VyY2VVUkksICh0aGlzLnBhcnNlciBhcyBhbnkpLm9wdGlvbnMucGF0aCkpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBjb25zb2xlLndhcm4oJ1ZSTU1ldGFMb2FkZXJQbHVnaW46IEZhaWxlZCB0byBsb2FkIGEgdGh1bWJuYWlsIGltYWdlJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxufVxuIiwgIi8qKlxuICogWW9pbmtlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmw6IHN0cmluZywgcGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gSW52YWxpZCBVUkxcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnIHx8IHVybCA9PT0gJycpIHJldHVybiAnJztcblxuICAvLyBIb3N0IFJlbGF0aXZlIFVSTFxuICBpZiAoL15odHRwcz86XFwvXFwvL2kudGVzdChwYXRoKSAmJiAvXlxcLy8udGVzdCh1cmwpKSB7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvKF5odHRwcz86XFwvXFwvW14vXSspLiovaSwgJyQxJyk7XG4gIH1cblxuICAvLyBBYnNvbHV0ZSBVUkwgaHR0cDovLyxodHRwczovLywvL1xuICBpZiAoL14oaHR0cHM/Oik/XFwvXFwvL2kudGVzdCh1cmwpKSByZXR1cm4gdXJsO1xuXG4gIC8vIERhdGEgVVJJXG4gIGlmICgvXmRhdGE6LiosLiokL2kudGVzdCh1cmwpKSByZXR1cm4gdXJsO1xuXG4gIC8vIEJsb2IgVVJMXG4gIGlmICgvXmJsb2I6LiokL2kudGVzdCh1cmwpKSByZXR1cm4gdXJsO1xuXG4gIC8vIFJlbGF0aXZlIFVSTFxuICByZXR1cm4gcGF0aCArIHVybDtcbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uTWFuYWdlciB9IGZyb20gJy4vZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHsgVlJNRmlyc3RQZXJzb24gfSBmcm9tICcuL2ZpcnN0UGVyc29uL1ZSTUZpcnN0UGVyc29uJztcbmltcG9ydCB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi9odW1hbm9pZC9WUk1IdW1hbm9pZCc7XG5pbXBvcnQgeyBWUk1Mb29rQXQgfSBmcm9tICcuL2xvb2tBdC9WUk1Mb29rQXQnO1xuaW1wb3J0IHsgVlJNTWV0YSB9IGZyb20gJy4vbWV0YS9WUk1NZXRhJztcbmltcG9ydCB7IFZSTUNvcmVQYXJhbWV0ZXJzIH0gZnJvbSAnLi9WUk1Db3JlUGFyYW1ldGVycyc7XG5cbi8qKlxuICogQSBjbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBzaW5nbGUgVlJNIG1vZGVsLlxuICogVGhpcyBjbGFzcyBvbmx5IGluY2x1ZGVzIGNvcmUgc3BlYyBvZiB0aGUgVlJNIChgVlJNQ192cm1gKS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUNvcmUge1xuICAvKipcbiAgICogYFRIUkVFLkdyb3VwYCB0aGF0IGNvbnRhaW5zIHRoZSBlbnRpcmUgVlJNLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHNjZW5lOiBUSFJFRS5Hcm91cDtcblxuICAvKipcbiAgICogQ29udGFpbnMgbWV0YSBmaWVsZHMgb2YgdGhlIFZSTS5cbiAgICogWW91IG1pZ2h0IHdhbnQgdG8gcmVmZXIgdGhlc2UgbGljZW5zZSBmaWVsZHMgYmVmb3JlIHVzZSB5b3VyIFZSTXMuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbWV0YTogVlJNTWV0YTtcblxuICAvKipcbiAgICogQ29udGFpbnMge0BsaW5rIFZSTUh1bWFub2lkfSBvZiB0aGUgVlJNLlxuICAgKiBZb3UgY2FuIGNvbnRyb2wgZWFjaCBib25lcyB1c2luZyB7QGxpbmsgVlJNSHVtYW5vaWQuZ2V0Tm9ybWFsaXplZEJvbmVOb2RlfSBvciB7QGxpbmsgVlJNSHVtYW5vaWQuZ2V0UmF3Qm9uZU5vZGV9LlxuICAgKlxuICAgKiBAVE9ETyBBZGQgYSBsaW5rIHRvIFZSTSBzcGVjXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaHVtYW5vaWQ6IFZSTUh1bWFub2lkO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9IG9mIHRoZSBWUk0uXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIGNvbnRyb2wgdGhlc2UgZmFjaWFsIGV4cHJlc3Npb25zIHZpYSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXIuc2V0VmFsdWV9LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGV4cHJlc3Npb25NYW5hZ2VyPzogVlJNRXhwcmVzc2lvbk1hbmFnZXI7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIHtAbGluayBWUk1GaXJzdFBlcnNvbn0gb2YgdGhlIFZSTS5cbiAgICogVlJNRmlyc3RQZXJzb24gaXMgbW9zdGx5IHVzZWQgZm9yIG1lc2ggY3VsbGluZyBmb3IgZmlyc3QgcGVyc29uIHZpZXcuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgZmlyc3RQZXJzb24/OiBWUk1GaXJzdFBlcnNvbjtcblxuICAvKipcbiAgICogQ29udGFpbnMge0BsaW5rIFZSTUxvb2tBdH0gb2YgdGhlIFZSTS5cbiAgICogWW91IG1pZ2h0IHdhbnQgdG8gdXNlIHtAbGluayBWUk1Mb29rQXQudGFyZ2V0fSB0byBjb250cm9sIHRoZSBleWUgZGlyZWN0aW9uIG9mIHlvdXIgVlJNcy5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBsb29rQXQ/OiBWUk1Mb29rQXQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBWUk0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMgW1tWUk1QYXJhbWV0ZXJzXV0gdGhhdCByZXByZXNlbnRzIGNvbXBvbmVudHMgb2YgdGhlIFZSTVxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmFtczogVlJNQ29yZVBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnNjZW5lID0gcGFyYW1zLnNjZW5lO1xuICAgIHRoaXMubWV0YSA9IHBhcmFtcy5tZXRhO1xuICAgIHRoaXMuaHVtYW5vaWQgPSBwYXJhbXMuaHVtYW5vaWQ7XG4gICAgdGhpcy5leHByZXNzaW9uTWFuYWdlciA9IHBhcmFtcy5leHByZXNzaW9uTWFuYWdlcjtcbiAgICB0aGlzLmZpcnN0UGVyc29uID0gcGFyYW1zLmZpcnN0UGVyc29uO1xuICAgIHRoaXMubG9va0F0ID0gcGFyYW1zLmxvb2tBdDtcbiAgfVxuXG4gIC8qKlxuICAgKiAqKllvdSBuZWVkIHRvIGNhbGwgdGhpcyBvbiB5b3VyIHVwZGF0ZSBsb29wLioqXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyBldmVyeSBWUk0gY29tcG9uZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGRlbHRhIGRlbHRhVGltZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5odW1hbm9pZC51cGRhdGUoKTtcblxuICAgIGlmICh0aGlzLmxvb2tBdCkge1xuICAgICAgdGhpcy5sb29rQXQudXBkYXRlKGRlbHRhKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5leHByZXNzaW9uTWFuYWdlcikge1xuICAgICAgdGhpcy5leHByZXNzaW9uTWFuYWdlci51cGRhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBHTFRGLCBHTFRGTG9hZGVyUGx1Z2luLCBHTFRGUGFyc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgeyBWUk1Db3JlTG9hZGVyUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vVlJNQ29yZUxvYWRlclBsdWdpbk9wdGlvbnMnO1xuaW1wb3J0IHsgVlJNQ29yZSB9IGZyb20gJy4vVlJNQ29yZSc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luIH0gZnJvbSAnLi9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luJztcbmltcG9ydCB7IFZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luIH0gZnJvbSAnLi9maXJzdFBlcnNvbi9WUk1GaXJzdFBlcnNvbkxvYWRlclBsdWdpbic7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZExvYWRlclBsdWdpbiB9IGZyb20gJy4vaHVtYW5vaWQvVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW4nO1xuaW1wb3J0IHsgVlJNTWV0YUxvYWRlclBsdWdpbiB9IGZyb20gJy4vbWV0YS9WUk1NZXRhTG9hZGVyUGx1Z2luJztcbmltcG9ydCB7IFZSTUxvb2tBdExvYWRlclBsdWdpbiB9IGZyb20gJy4vbG9va0F0L1ZSTUxvb2tBdExvYWRlclBsdWdpbic7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi9odW1hbm9pZCc7XG5pbXBvcnQgdHlwZSB7IFZSTU1ldGEgfSBmcm9tICcuL21ldGEnO1xuXG5leHBvcnQgY2xhc3MgVlJNQ29yZUxvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAvLyBXZSBzaG91bGQgdXNlIHRoZSBleHRlbnNpb24gbmFtZSBpbnN0ZWFkIGJ1dCB3ZSBoYXZlIG11bHRpcGxlIHBsdWdpbnMgZm9yIGFuIGV4dGVuc2lvbi4uLlxuICAgIHJldHVybiAnVlJNQ192cm0nO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IHBhcnNlcjogR0xURlBhcnNlcjtcblxuICBwdWJsaWMgcmVhZG9ubHkgZXhwcmVzc2lvblBsdWdpbjogVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjtcbiAgcHVibGljIHJlYWRvbmx5IGZpcnN0UGVyc29uUGx1Z2luOiBWUk1GaXJzdFBlcnNvbkxvYWRlclBsdWdpbjtcbiAgcHVibGljIHJlYWRvbmx5IGh1bWFub2lkUGx1Z2luOiBWUk1IdW1hbm9pZExvYWRlclBsdWdpbjtcbiAgcHVibGljIHJlYWRvbmx5IGxvb2tBdFBsdWdpbjogVlJNTG9va0F0TG9hZGVyUGx1Z2luO1xuICBwdWJsaWMgcmVhZG9ubHkgbWV0YVBsdWdpbjogVlJNTWV0YUxvYWRlclBsdWdpbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyc2VyOiBHTFRGUGFyc2VyLCBvcHRpb25zPzogVlJNQ29yZUxvYWRlclBsdWdpbk9wdGlvbnMpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICAgIGNvbnN0IGhlbHBlclJvb3QgPSBvcHRpb25zPy5oZWxwZXJSb290O1xuICAgIGNvbnN0IGF1dG9VcGRhdGVIdW1hbkJvbmVzID0gb3B0aW9ucz8uYXV0b1VwZGF0ZUh1bWFuQm9uZXM7XG5cbiAgICB0aGlzLmV4cHJlc3Npb25QbHVnaW4gPSBvcHRpb25zPy5leHByZXNzaW9uUGx1Z2luID8/IG5ldyBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luKHBhcnNlcik7XG4gICAgdGhpcy5maXJzdFBlcnNvblBsdWdpbiA9IG9wdGlvbnM/LmZpcnN0UGVyc29uUGx1Z2luID8/IG5ldyBWUk1GaXJzdFBlcnNvbkxvYWRlclBsdWdpbihwYXJzZXIpO1xuICAgIHRoaXMuaHVtYW5vaWRQbHVnaW4gPVxuICAgICAgb3B0aW9ucz8uaHVtYW5vaWRQbHVnaW4gPz8gbmV3IFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luKHBhcnNlciwgeyBoZWxwZXJSb290LCBhdXRvVXBkYXRlSHVtYW5Cb25lcyB9KTtcbiAgICB0aGlzLmxvb2tBdFBsdWdpbiA9IG9wdGlvbnM/Lmxvb2tBdFBsdWdpbiA/PyBuZXcgVlJNTG9va0F0TG9hZGVyUGx1Z2luKHBhcnNlciwgeyBoZWxwZXJSb290IH0pO1xuICAgIHRoaXMubWV0YVBsdWdpbiA9IG9wdGlvbnM/Lm1ldGFQbHVnaW4gPz8gbmV3IFZSTU1ldGFMb2FkZXJQbHVnaW4ocGFyc2VyKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlclJvb3QoZ2x0ZjogR0xURik6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMubWV0YVBsdWdpbi5hZnRlclJvb3QoZ2x0Zik7XG4gICAgYXdhaXQgdGhpcy5odW1hbm9pZFBsdWdpbi5hZnRlclJvb3QoZ2x0Zik7XG4gICAgYXdhaXQgdGhpcy5leHByZXNzaW9uUGx1Z2luLmFmdGVyUm9vdChnbHRmKTtcbiAgICBhd2FpdCB0aGlzLmxvb2tBdFBsdWdpbi5hZnRlclJvb3QoZ2x0Zik7XG4gICAgYXdhaXQgdGhpcy5maXJzdFBlcnNvblBsdWdpbi5hZnRlclJvb3QoZ2x0Zik7XG5cbiAgICBjb25zdCBtZXRhID0gZ2x0Zi51c2VyRGF0YS52cm1NZXRhIGFzIFZSTU1ldGEgfCBudWxsO1xuICAgIGNvbnN0IGh1bWFub2lkID0gZ2x0Zi51c2VyRGF0YS52cm1IdW1hbm9pZCBhcyBWUk1IdW1hbm9pZCB8IG51bGw7XG5cbiAgICAvLyBtZXRhIGFuZCBodW1hbm9pZCBhcmUgcmVxdWlyZWQgdG8gYmUgYSBWUk0uXG4gICAgLy8gRG9uJ3QgY3JlYXRlIFZSTSBpZiB0aGV5IGFyZSBudWxsXG4gICAgaWYgKG1ldGEgJiYgaHVtYW5vaWQpIHtcbiAgICAgIGNvbnN0IHZybUNvcmUgPSBuZXcgVlJNQ29yZSh7XG4gICAgICAgIHNjZW5lOiBnbHRmLnNjZW5lLFxuICAgICAgICBleHByZXNzaW9uTWFuYWdlcjogZ2x0Zi51c2VyRGF0YS52cm1FeHByZXNzaW9uTWFuYWdlcixcbiAgICAgICAgZmlyc3RQZXJzb246IGdsdGYudXNlckRhdGEudnJtRmlyc3RQZXJzb24sXG4gICAgICAgIGh1bWFub2lkLFxuICAgICAgICBsb29rQXQ6IGdsdGYudXNlckRhdGEudnJtTG9va0F0LFxuICAgICAgICBtZXRhLFxuICAgICAgfSk7XG5cbiAgICAgIGdsdGYudXNlckRhdGEudnJtQ29yZSA9IHZybUNvcmU7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgVlJNTG9va0F0IH0gZnJvbSAnQHBpeGl2L3RocmVlLXZybS1jb3JlJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuY29uc3QgUkFEMkRFRyA9IDE4MCAvIE1hdGguUEk7XG5cbmNvbnN0IF9ldWxlckEgPSAvKkBfX1BVUkVfXyovIG5ldyBUSFJFRS5FdWxlcigpO1xuXG5leHBvcnQgY2xhc3MgVlJNTG9va0F0UXVhdGVybmlvblByb3h5IGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xuICBwdWJsaWMgcmVhZG9ubHkgdnJtTG9va0F0OiBWUk1Mb29rQXQ7XG4gIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSB0eXBlOiBzdHJpbmcgfCAnVlJNTG9va0F0UXVhdGVybmlvblByb3h5JztcblxuICBwdWJsaWMgY29uc3RydWN0b3IobG9va0F0OiBWUk1Mb29rQXQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52cm1Mb29rQXQgPSBsb29rQXQ7XG5cbiAgICB0aGlzLnR5cGUgPSAnVlJNTG9va0F0UXVhdGVybmlvblByb3h5JztcblxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL3IxNTgvc3JjL2NvcmUvT2JqZWN0M0QuanMjTDY1XG4gICAgY29uc3QgcHJldlJvdGF0aW9uT25DaGFuZ2VDYWxsYmFjayA9IHRoaXMucm90YXRpb24uX29uQ2hhbmdlQ2FsbGJhY2s7XG4gICAgdGhpcy5yb3RhdGlvbi5fb25DaGFuZ2UoKCkgPT4ge1xuICAgICAgcHJldlJvdGF0aW9uT25DaGFuZ2VDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fYXBwbHlUb0xvb2tBdCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJldlF1YXRlcm5pb25PbkNoYW5nZUNhbGxiYWNrID0gdGhpcy5xdWF0ZXJuaW9uLl9vbkNoYW5nZUNhbGxiYWNrO1xuICAgIHRoaXMucXVhdGVybmlvbi5fb25DaGFuZ2UoKCkgPT4ge1xuICAgICAgcHJldlF1YXRlcm5pb25PbkNoYW5nZUNhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9hcHBseVRvTG9va0F0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBseVRvTG9va0F0KCk6IHZvaWQge1xuICAgIF9ldWxlckEuc2V0RnJvbVF1YXRlcm5pb24odGhpcy5xdWF0ZXJuaW9uLCBWUk1Mb29rQXQuRVVMRVJfT1JERVIpO1xuXG4gICAgdGhpcy52cm1Mb29rQXQueWF3ID0gUkFEMkRFRyAqIF9ldWxlckEueTtcbiAgICB0aGlzLnZybUxvb2tBdC5waXRjaCA9IFJBRDJERUcgKiBfZXVsZXJBLng7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lLCBWUk1IdW1hbkJvbmVOYW1lIH0gZnJvbSAnQHBpeGl2L3RocmVlLXZybS1jb3JlJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB0eXBlIHsgY3JlYXRlVlJNQW5pbWF0aW9uQ2xpcCB9IGZyb20gJy4vY3JlYXRlVlJNQW5pbWF0aW9uQ2xpcCc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBWUk0gQW5pbWF0aW9uLlxuICogWW91IHByb2JhYmx5IHdhbnQgdG8gY3JlYXRlIGFuIEFuaW1hdGlvbkNsaXAgdXNpbmcge0BsaW5rIGNyZWF0ZVZSTUFuaW1hdGlvbkNsaXB9LlxuICovXG5leHBvcnQgY2xhc3MgVlJNQW5pbWF0aW9uIHtcbiAgcHVibGljIGR1cmF0aW9uOiBudW1iZXI7XG4gIHB1YmxpYyByZXN0SGlwc1Bvc2l0aW9uOiBUSFJFRS5WZWN0b3IzO1xuXG4gIHB1YmxpYyBodW1hbm9pZFRyYWNrczoge1xuICAgIHRyYW5zbGF0aW9uOiBNYXA8J2hpcHMnLCBUSFJFRS5WZWN0b3JLZXlmcmFtZVRyYWNrPjtcbiAgICByb3RhdGlvbjogTWFwPFZSTUh1bWFuQm9uZU5hbWUsIFRIUkVFLlF1YXRlcm5pb25LZXlmcmFtZVRyYWNrPjtcbiAgfTtcbiAgcHVibGljIGV4cHJlc3Npb25UcmFja3M6IHtcbiAgICBwcmVzZXQ6IE1hcDxWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSwgVEhSRUUuTnVtYmVyS2V5ZnJhbWVUcmFjaz47XG4gICAgY3VzdG9tOiBNYXA8c3RyaW5nLCBUSFJFRS5OdW1iZXJLZXlmcmFtZVRyYWNrPjtcbiAgfTtcbiAgcHVibGljIGxvb2tBdFRyYWNrOiBUSFJFRS5RdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjayB8IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZHVyYXRpb24gPSAwLjA7XG4gICAgdGhpcy5yZXN0SGlwc1Bvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgIHRoaXMuaHVtYW5vaWRUcmFja3MgPSB7XG4gICAgICB0cmFuc2xhdGlvbjogbmV3IE1hcCgpLFxuICAgICAgcm90YXRpb246IG5ldyBNYXAoKSxcbiAgICB9O1xuXG4gICAgdGhpcy5leHByZXNzaW9uVHJhY2tzID0ge1xuICAgICAgcHJlc2V0OiBuZXcgTWFwKCksXG4gICAgICBjdXN0b206IG5ldyBNYXAoKSxcbiAgICB9O1xuXG4gICAgdGhpcy5sb29rQXRUcmFjayA9IG51bGw7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBHTFRGLCBHTFRGTG9hZGVyUGx1Z2luLCBHTFRGUGFyc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5pbXBvcnQgeyBWUk1DVlJNQW5pbWF0aW9uIH0gZnJvbSAnQHBpeGl2L3R5cGVzLXZybWMtdnJtLWFuaW1hdGlvbi0xLjAnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmVOYW1lIH0gZnJvbSAnQHBpeGl2L3RocmVlLXZybS1jb3JlJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lLCBWUk1IdW1hbkJvbmVQYXJlbnRNYXAgfSBmcm9tICdAcGl4aXYvdGhyZWUtdnJtLWNvcmUnO1xuaW1wb3J0IHsgVlJNQW5pbWF0aW9uIH0gZnJvbSAnLi9WUk1BbmltYXRpb24nO1xuaW1wb3J0IHsgYXJyYXlDaHVuayB9IGZyb20gJy4vdXRpbHMvYXJyYXlDaHVuayc7XG5cbmNvbnN0IE1BVDRfSURFTlRJVFkgPSAvKkBfX1BVUkVfXyovIG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cbmNvbnN0IF92M0EgPSAvKkBfX1BVUkVfXyovIG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfcXVhdEEgPSAvKkBfX1BVUkVfXyovIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfcXVhdEIgPSAvKkBfX1BVUkVfXyovIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfcXVhdEMgPSAvKkBfX1BVUkVfXyovIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TID0gLypAX19QVVJFX18qLyBuZXcgU2V0KFsnMS4wJywgJzEuMC1kcmFmdCddKTtcblxuY29uc3QgdnJtRXhwcmVzc2lvblByZXNldE5hbWVTZXQ6IFNldDxzdHJpbmc+ID0gLypAX19QVVJFX18qLyBuZXcgU2V0KE9iamVjdC52YWx1ZXMoVlJNRXhwcmVzc2lvblByZXNldE5hbWUpKTtcblxuaW50ZXJmYWNlIFZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbk5vZGVNYXAge1xuICBodW1hbm9pZEluZGV4VG9OYW1lOiBNYXA8bnVtYmVyLCBWUk1IdW1hbkJvbmVOYW1lPjtcbiAgZXhwcmVzc2lvbnNJbmRleFRvTmFtZTogTWFwPG51bWJlciwgc3RyaW5nPjtcbiAgbG9va0F0SW5kZXg6IG51bWJlciB8IG51bGw7XG59XG5cbnR5cGUgVlJNQW5pbWF0aW9uTG9hZGVyUGx1Z2luV29ybGRNYXRyaXhNYXAgPSBNYXA8VlJNSHVtYW5Cb25lTmFtZSB8ICdoaXBzUGFyZW50JywgVEhSRUUuTWF0cml4ND47XG5cbi8qKlxuICogQSBwbHVnaW4gb2YgR0xURkxvYWRlciB0aGF0IGltcG9ydHMge0BsaW5rIFZSTUFuaW1hdGlvbn1zIGZyb20gYSBgVlJNQ192cm1fYW5pbWF0aW9uYCBleHRlbnNpb24gYW5kIGdsdGYgYW5pbWF0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnVlJNQ192cm1fYW5pbWF0aW9uJztcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlclJvb3QoZ2x0ZjogR0xURik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRlZkdsdGYgPSBnbHRmLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG4gICAgY29uc3QgZGVmRXh0ZW5zaW9uc1VzZWQgPSBkZWZHbHRmLmV4dGVuc2lvbnNVc2VkO1xuXG4gICAgaWYgKGRlZkV4dGVuc2lvbnNVc2VkID09IG51bGwgfHwgZGVmRXh0ZW5zaW9uc1VzZWQuaW5kZXhPZih0aGlzLm5hbWUpID09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVmRXh0ZW5zaW9uID0gZGVmR2x0Zi5leHRlbnNpb25zPy5bdGhpcy5uYW1lXSBhcyBWUk1DVlJNQW5pbWF0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKGRlZkV4dGVuc2lvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlY1ZlcnNpb24gPSBkZWZFeHRlbnNpb24uc3BlY1ZlcnNpb247XG4gICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TLmhhcyhzcGVjVmVyc2lvbikpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVlJNQW5pbWF0aW9uTG9hZGVyUGx1Z2luOiBVbmtub3duIFZSTUNfdnJtX2FuaW1hdGlvbiBzcGVjIHZlcnNpb246ICR7c3BlY1ZlcnNpb259YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzcGVjVmVyc2lvbiA9PT0gJzEuMC1kcmFmdCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1ZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbjogVXNpbmcgYSBkcmFmdCBzcGVjIHZlcnNpb246IDEuMC1kcmFmdC4gU29tZSBiZWhhdmlvcnMgbWF5IGJlIGRpZmZlcmVudC4gQ29uc2lkZXIgdXBkYXRpbmcgdGhlIGFuaW1hdGlvbiBmaWxlLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVNYXAgPSB0aGlzLl9jcmVhdGVOb2RlTWFwKGRlZkV4dGVuc2lvbik7XG4gICAgY29uc3Qgd29ybGRNYXRyaXhNYXAgPSBhd2FpdCB0aGlzLl9jcmVhdGVCb25lV29ybGRNYXRyaXhNYXAoZ2x0ZiwgZGVmRXh0ZW5zaW9uKTtcblxuICAgIGNvbnN0IGhpcHNOb2RlID0gZGVmRXh0ZW5zaW9uLmh1bWFub2lkPy5odW1hbkJvbmVzWydoaXBzJ10/Lm5vZGU7XG4gICAgY29uc3QgaGlwcyA9IGhpcHNOb2RlICE9IG51bGwgPyAoKGF3YWl0IGdsdGYucGFyc2VyLmdldERlcGVuZGVuY3koJ25vZGUnLCBoaXBzTm9kZSkpIGFzIFRIUkVFLk9iamVjdDNEKSA6IG51bGw7XG5cbiAgICBjb25zdCByZXN0SGlwc1Bvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICBoaXBzPy5nZXRXb3JsZFBvc2l0aW9uKHJlc3RIaXBzUG9zaXRpb24pO1xuXG4gICAgLy8gSWYgdGhlIHkgY29tcG9uZW50IG9mIHRoZSByZXN0IGhpcHMgcG9zaXRpb24gaXMgYXBwcm94aW1hdGVseSB6ZXJvIG9yIGJlbG93LFxuICAgIC8vIGl0IGlzIGNvbnNpZGVyZWQgdGhhdCB0aGUgYW5pbWF0aW9uIHZpb2xhdGVzIHRoZSBWUk0gVC1wb3NlXG4gICAgaWYgKHJlc3RIaXBzUG9zaXRpb24ueSA8IDFlLTMpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1ZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbjogVGhlIGxvYWRlZCBWUk0gQW5pbWF0aW9uIG1pZ2h0IHZpb2xhdGUgdGhlIFZSTSBULXBvc2UgKFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgcmVzdCBoaXBzIHBvc2l0aW9uIGlzIGFwcHJveGltYXRlbHkgemVybyBvciBiZWxvdy4pJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xpcHMgPSBnbHRmLmFuaW1hdGlvbnM7XG4gICAgY29uc3QgYW5pbWF0aW9uczogVlJNQW5pbWF0aW9uW10gPSBjbGlwcy5tYXAoKGNsaXAsIGlBbmltYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZkFuaW1hdGlvbiA9IGRlZkdsdGYuYW5pbWF0aW9ucyFbaUFuaW1hdGlvbl07XG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuX3BhcnNlQW5pbWF0aW9uKGNsaXAsIGRlZkFuaW1hdGlvbiwgbm9kZU1hcCwgd29ybGRNYXRyaXhNYXApO1xuICAgICAgYW5pbWF0aW9uLnJlc3RIaXBzUG9zaXRpb24gPSByZXN0SGlwc1Bvc2l0aW9uO1xuXG4gICAgICByZXR1cm4gYW5pbWF0aW9uO1xuICAgIH0pO1xuXG4gICAgZ2x0Zi51c2VyRGF0YS52cm1BbmltYXRpb25zID0gYW5pbWF0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZU5vZGVNYXAoZGVmRXh0ZW5zaW9uOiBWUk1DVlJNQW5pbWF0aW9uKTogVlJNQW5pbWF0aW9uTG9hZGVyUGx1Z2luTm9kZU1hcCB7XG4gICAgY29uc3QgaHVtYW5vaWRJbmRleFRvTmFtZTogTWFwPG51bWJlciwgVlJNSHVtYW5Cb25lTmFtZT4gPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZXhwcmVzc2lvbnNJbmRleFRvTmFtZTogTWFwPG51bWJlciwgc3RyaW5nPiA9IG5ldyBNYXAoKTtcblxuICAgIC8vIGh1bWFub2lkXG4gICAgY29uc3QgaHVtYW5Cb25lcyA9IGRlZkV4dGVuc2lvbi5odW1hbm9pZD8uaHVtYW5Cb25lcztcblxuICAgIGlmIChodW1hbkJvbmVzKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhodW1hbkJvbmVzKS5mb3JFYWNoKChbbmFtZSwgYm9uZV0pID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGJvbmU/Lm5vZGU7XG4gICAgICAgIGlmIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICBodW1hbm9pZEluZGV4VG9OYW1lLnNldChub2RlLCBuYW1lIGFzIFZSTUh1bWFuQm9uZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBleHByZXNzaW9uc1xuICAgIGNvbnN0IHByZXNldCA9IGRlZkV4dGVuc2lvbi5leHByZXNzaW9ucz8ucHJlc2V0O1xuXG4gICAgaWYgKHByZXNldCkge1xuICAgICAgT2JqZWN0LmVudHJpZXMocHJlc2V0KS5mb3JFYWNoKChbbmFtZSwgZXhwcmVzc2lvbl0pID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGV4cHJlc3Npb24/Lm5vZGU7XG4gICAgICAgIGlmIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICBleHByZXNzaW9uc0luZGV4VG9OYW1lLnNldChub2RlLCBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tID0gZGVmRXh0ZW5zaW9uLmV4cHJlc3Npb25zPy5jdXN0b207XG5cbiAgICBpZiAoY3VzdG9tKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhjdXN0b20pLmZvckVhY2goKFtuYW1lLCBleHByZXNzaW9uXSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5vZGUgfSA9IGV4cHJlc3Npb247XG4gICAgICAgIGV4cHJlc3Npb25zSW5kZXhUb05hbWUuc2V0KG5vZGUsIG5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbG9va0F0XG4gICAgY29uc3QgbG9va0F0SW5kZXggPSBkZWZFeHRlbnNpb24ubG9va0F0Py5ub2RlID8/IG51bGw7XG5cbiAgICByZXR1cm4geyBodW1hbm9pZEluZGV4VG9OYW1lLCBleHByZXNzaW9uc0luZGV4VG9OYW1lLCBsb29rQXRJbmRleCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY3JlYXRlQm9uZVdvcmxkTWF0cml4TWFwKFxuICAgIGdsdGY6IEdMVEYsXG4gICAgZGVmRXh0ZW5zaW9uOiBWUk1DVlJNQW5pbWF0aW9uLFxuICApOiBQcm9taXNlPFZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbldvcmxkTWF0cml4TWFwPiB7XG4gICAgLy8gdXBkYXRlIHRoZSBlbnRpcmUgaGllcmFyY2h5IGZpcnN0XG4gICAgZ2x0Zi5zY2VuZS51cGRhdGVXb3JsZE1hdHJpeChmYWxzZSwgdHJ1ZSk7XG5cbiAgICBjb25zdCB0aHJlZU5vZGVzID0gKGF3YWl0IGdsdGYucGFyc2VyLmdldERlcGVuZGVuY2llcygnbm9kZScpKSBhcyBUSFJFRS5PYmplY3QzRFtdO1xuXG4gICAgY29uc3Qgd29ybGRNYXRyaXhNYXA6IFZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbldvcmxkTWF0cml4TWFwID0gbmV3IE1hcCgpO1xuXG4gICAgaWYgKGRlZkV4dGVuc2lvbi5odW1hbm9pZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gd29ybGRNYXRyaXhNYXA7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbYm9uZU5hbWUsIGh1bWFuQm9uZV0gb2YgT2JqZWN0LmVudHJpZXMoZGVmRXh0ZW5zaW9uLmh1bWFub2lkLmh1bWFuQm9uZXMpKSB7XG4gICAgICBjb25zdCBub2RlID0gaHVtYW5Cb25lPy5ub2RlO1xuICAgICAgaWYgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0aHJlZU5vZGUgPSB0aHJlZU5vZGVzW25vZGVdO1xuICAgICAgICB3b3JsZE1hdHJpeE1hcC5zZXQoYm9uZU5hbWUgYXMgVlJNSHVtYW5Cb25lTmFtZSwgdGhyZWVOb2RlLm1hdHJpeFdvcmxkKTtcblxuICAgICAgICBpZiAoYm9uZU5hbWUgPT09ICdoaXBzJykge1xuICAgICAgICAgIHdvcmxkTWF0cml4TWFwLnNldCgnaGlwc1BhcmVudCcsIHRocmVlTm9kZS5wYXJlbnQ/Lm1hdHJpeFdvcmxkID8/IE1BVDRfSURFTlRJVFkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmxkTWF0cml4TWFwO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VBbmltYXRpb24oXG4gICAgYW5pbWF0aW9uQ2xpcDogVEhSRUUuQW5pbWF0aW9uQ2xpcCxcbiAgICBkZWZBbmltYXRpb246IEdMVEZTY2hlbWEuSUFuaW1hdGlvbixcbiAgICBub2RlTWFwOiBWUk1BbmltYXRpb25Mb2FkZXJQbHVnaW5Ob2RlTWFwLFxuICAgIHdvcmxkTWF0cml4TWFwOiBWUk1BbmltYXRpb25Mb2FkZXJQbHVnaW5Xb3JsZE1hdHJpeE1hcCxcbiAgKTogVlJNQW5pbWF0aW9uIHtcbiAgICBjb25zdCB0cmFja3MgPSBhbmltYXRpb25DbGlwLnRyYWNrcztcbiAgICBjb25zdCBkZWZDaGFubmVscyA9IGRlZkFuaW1hdGlvbi5jaGFubmVscztcblxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWUk1BbmltYXRpb24oKTtcblxuICAgIHJlc3VsdC5kdXJhdGlvbiA9IGFuaW1hdGlvbkNsaXAuZHVyYXRpb247XG5cbiAgICBkZWZDaGFubmVscy5mb3JFYWNoKChjaGFubmVsLCBpQ2hhbm5lbCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlLCBwYXRoIH0gPSBjaGFubmVsLnRhcmdldDtcbiAgICAgIGNvbnN0IG9yaWdUcmFjayA9IHRyYWNrc1tpQ2hhbm5lbF07XG5cbiAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBodW1hbm9pZFxuICAgICAgY29uc3QgYm9uZU5hbWUgPSBub2RlTWFwLmh1bWFub2lkSW5kZXhUb05hbWUuZ2V0KG5vZGUpO1xuICAgICAgaWYgKGJvbmVOYW1lICE9IG51bGwpIHtcbiAgICAgICAgbGV0IHBhcmVudEJvbmVOYW1lOiBWUk1IdW1hbkJvbmVOYW1lIHwgJ2hpcHNQYXJlbnQnIHwgbnVsbCA9IFZSTUh1bWFuQm9uZVBhcmVudE1hcFtib25lTmFtZV07XG4gICAgICAgIHdoaWxlIChwYXJlbnRCb25lTmFtZSAhPSBudWxsICYmIHdvcmxkTWF0cml4TWFwLmdldChwYXJlbnRCb25lTmFtZSkgPT0gbnVsbCkge1xuICAgICAgICAgIHBhcmVudEJvbmVOYW1lID0gVlJNSHVtYW5Cb25lUGFyZW50TWFwW3BhcmVudEJvbmVOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnRCb25lTmFtZSA/PyAocGFyZW50Qm9uZU5hbWUgPSAnaGlwc1BhcmVudCcpO1xuXG4gICAgICAgIGlmIChwYXRoID09PSAndHJhbnNsYXRpb24nKSB7XG4gICAgICAgICAgaWYgKGJvbmVOYW1lICE9PSAnaGlwcycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYFRoZSBsb2FkaW5nIGFuaW1hdGlvbiBjb250YWlucyBhIHRyYW5zbGF0aW9uIHRyYWNrIGZvciAke2JvbmVOYW1lfSwgd2hpY2ggaXMgbm90IHBlcm1pdHRlZCBpbiB0aGUgVlJNQ192cm1fYW5pbWF0aW9uIHNwZWMuIGlnbm9yaW5nIHRoZSB0cmFja2AsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBoaXBzUGFyZW50V29ybGRNYXRyaXggPSB3b3JsZE1hdHJpeE1hcC5nZXQoJ2hpcHNQYXJlbnQnKSE7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYWNrVmFsdWVzID0gYXJyYXlDaHVuayhvcmlnVHJhY2sudmFsdWVzLCAzKS5mbGF0TWFwKCh2KSA9PlxuICAgICAgICAgICAgICBfdjNBLmZyb21BcnJheSh2KS5hcHBseU1hdHJpeDQoaGlwc1BhcmVudFdvcmxkTWF0cml4KS50b0FycmF5KCksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCB0cmFjayA9IG9yaWdUcmFjay5jbG9uZSgpO1xuICAgICAgICAgICAgdHJhY2sudmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheSh0cmFja1ZhbHVlcyk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5odW1hbm9pZFRyYWNrcy50cmFuc2xhdGlvbi5zZXQoYm9uZU5hbWUsIHRyYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGF0aCA9PT0gJ3JvdGF0aW9uJykge1xuICAgICAgICAgIC8vIGEgID0gcF4tMSAqIGEnICogcCAqIGNcbiAgICAgICAgICAvLyBhJyA9IHAgKiBwXi0xICogYScgKiBwICogYyAqIGNeLTEgKiBwXi0xXG4gICAgICAgICAgLy8gICAgPSBwICogYSAqIGNeLTEgKiBwXi0xXG5cbiAgICAgICAgICBjb25zdCB3b3JsZE1hdHJpeCA9IHdvcmxkTWF0cml4TWFwLmdldChib25lTmFtZSkhO1xuICAgICAgICAgIGNvbnN0IHBhcmVudFdvcmxkTWF0cml4ID0gd29ybGRNYXRyaXhNYXAuZ2V0KHBhcmVudEJvbmVOYW1lKSE7XG5cbiAgICAgICAgICB3b3JsZE1hdHJpeC5kZWNvbXBvc2UoX3YzQSwgX3F1YXRBLCBfdjNBKTtcbiAgICAgICAgICBfcXVhdEEuaW52ZXJ0KCk7XG5cbiAgICAgICAgICBwYXJlbnRXb3JsZE1hdHJpeC5kZWNvbXBvc2UoX3YzQSwgX3F1YXRCLCBfdjNBKTtcblxuICAgICAgICAgIGNvbnN0IHRyYWNrVmFsdWVzID0gYXJyYXlDaHVuayhvcmlnVHJhY2sudmFsdWVzLCA0KS5mbGF0TWFwKChxKSA9PlxuICAgICAgICAgICAgX3F1YXRDXG4gICAgICAgICAgICAgIC5mcm9tQXJyYXkocSBhcyBUSFJFRS5RdWF0ZXJuaW9uVHVwbGUpXG4gICAgICAgICAgICAgIC5wcmVtdWx0aXBseShfcXVhdEIpXG4gICAgICAgICAgICAgIC5tdWx0aXBseShfcXVhdEEpXG4gICAgICAgICAgICAgIC50b0FycmF5KCksXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IHRyYWNrID0gb3JpZ1RyYWNrLmNsb25lKCk7XG4gICAgICAgICAgdHJhY2sudmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheSh0cmFja1ZhbHVlcyk7XG5cbiAgICAgICAgICByZXN1bHQuaHVtYW5vaWRUcmFja3Mucm90YXRpb24uc2V0KGJvbmVOYW1lLCB0cmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHBhdGggXCIke3BhdGh9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGV4cHJlc3Npb25zXG4gICAgICBjb25zdCBleHByZXNzaW9uTmFtZSA9IG5vZGVNYXAuZXhwcmVzc2lvbnNJbmRleFRvTmFtZS5nZXQobm9kZSk7XG4gICAgICBpZiAoZXhwcmVzc2lvbk5hbWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAocGF0aCA9PT0gJ3RyYW5zbGF0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHRpbWVzID0gb3JpZ1RyYWNrLnRpbWVzO1xuICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkob3JpZ1RyYWNrLnZhbHVlcy5sZW5ndGggLyAzKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gb3JpZ1RyYWNrLnZhbHVlc1szICogaV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3VHJhY2sgPSBuZXcgVEhSRUUuTnVtYmVyS2V5ZnJhbWVUcmFjayhgJHtleHByZXNzaW9uTmFtZX0ud2VpZ2h0YCwgdGltZXMgYXMgYW55LCB2YWx1ZXMgYXMgYW55KTtcblxuICAgICAgICAgIGlmICh2cm1FeHByZXNzaW9uUHJlc2V0TmFtZVNldC5oYXMoZXhwcmVzc2lvbk5hbWUpKSB7XG4gICAgICAgICAgICByZXN1bHQuZXhwcmVzc2lvblRyYWNrcy5wcmVzZXQuc2V0KGV4cHJlc3Npb25OYW1lIGFzIFZSTUV4cHJlc3Npb25QcmVzZXROYW1lLCBuZXdUcmFjayk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5leHByZXNzaW9uVHJhY2tzLmN1c3RvbS5zZXQoZXhwcmVzc2lvbk5hbWUsIG5ld1RyYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHBhdGggXCIke3BhdGh9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGxvb2tBdFxuICAgICAgaWYgKG5vZGUgPT09IG5vZGVNYXAubG9va0F0SW5kZXgpIHtcbiAgICAgICAgaWYgKHBhdGggPT09ICdyb3RhdGlvbicpIHtcbiAgICAgICAgICByZXN1bHQubG9va0F0VHJhY2sgPSBvcmlnVHJhY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHBhdGggXCIke3BhdGh9XCJgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwgIi8qKlxuICogYGBganNcbiAqIGFycmF5Q2h1bmsoIFsgMSwgMiwgMywgNCwgNSwgNiBdLCAyIClcbiAqIC8vIHdpbGwgYmVcbiAqIFsgWyAxLCAyIF0sIFsgMywgNCBdLCBbIDUsIDYgXSBdXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5Q2h1bms8VD4oYXJyYXk6IEFycmF5TGlrZTxUPiwgZXZlcnk6IG51bWJlcik6IFRbXVtdIHtcbiAgY29uc3QgTiA9IGFycmF5Lmxlbmd0aDtcblxuICBjb25zdCByZXQ6IFRbXVtdID0gW107XG5cbiAgbGV0IGN1cnJlbnQ6IFRbXSA9IFtdO1xuICBsZXQgcmVtYWluaW5nID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xuICAgIGNvbnN0IGVsID0gYXJyYXlbaV07XG5cbiAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgIHJlbWFpbmluZyA9IGV2ZXJ5O1xuICAgICAgY3VycmVudCA9IFtdO1xuICAgICAgcmV0LnB1c2goY3VycmVudCk7XG4gICAgfVxuXG4gICAgY3VycmVudC5wdXNoKGVsKTtcbiAgICByZW1haW5pbmctLTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsSUFB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QSxVQUN4RixPQUFPO0FBQ0wsbUJBQU8saUJBQWlCLE9BQU8sSUFBSSxnQkFBZ0IsUUFBUTtBQUFBLFVBQzdEO0FBQUEsUUFDRixPQUFPO0FBQ0wsZ0JBQU0sSUFBSSxNQUFNLGlCQUFpQixJQUFJLEdBQUc7QUFBQSxRQUMxQztBQUNBO0FBQUEsTUFDRjtBQUdBLFVBQUksU0FBUyxRQUFRLGFBQWE7QUFDaEMsWUFBSSxTQUFTLFlBQVk7QUFDdkIsaUJBQU8sY0FBYztBQUFBLFFBQ3ZCLE9BQU87QUFDTCxnQkFBTSxJQUFJLE1BQU0saUJBQWlCLElBQUksR0FBRztBQUFBLFFBQzFDO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUVELFdBQU87QUFBQSxFQUNUO0FBQ0Y7IiwKICAibmFtZXMiOiBbIlRIUkVFIiwgIl9fYXN5bmMiLCAiX1ZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCIsICJfVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kIiwgIl9hIiwgIl9WUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luIiwgIl9fYXN5bmMiLCAiX2IiLCAiX1ZSTUZpcnN0UGVyc29uIiwgIl92M0EiLCAiX3F1YXRBIiwgIl92M0EiLCAiX3F1YXRBIiwgIl9xdWF0QSIsICJfdjNBIiwgIl92M0IiLCAiX3YzQSIsICJfdjNCIiwgIl9xdWF0QSIsICJfcXVhdEIiLCAiX1ZSTUxvb2tBdCIsICJWRUMzX1BPU0lUSVZFX1oiLCAiX2V1bGVyQSIsICJUSFJFRSIsICJfZXVsZXJBIiwgIlRIUkVFIiwgIlRIUkVFIiwgIl92M0EiLCAiX3F1YXRBIiwgIl9xdWF0QiIsICJfcXVhdEMiLCAiUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyJdCn0K
