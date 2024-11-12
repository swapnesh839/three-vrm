/*!
 * @pixiv/three-vrm-core v3.1.6
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
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
  VRMCore: () => VRMCore,
  VRMCoreLoaderPlugin: () => VRMCoreLoaderPlugin,
  VRMExpression: () => VRMExpression,
  VRMExpressionLoaderPlugin: () => VRMExpressionLoaderPlugin,
  VRMExpressionManager: () => VRMExpressionManager,
  VRMExpressionMaterialColorBind: () => VRMExpressionMaterialColorBind,
  VRMExpressionMaterialColorType: () => VRMExpressionMaterialColorType,
  VRMExpressionMorphTargetBind: () => VRMExpressionMorphTargetBind,
  VRMExpressionOverrideType: () => VRMExpressionOverrideType,
  VRMExpressionPresetName: () => VRMExpressionPresetName,
  VRMExpressionTextureTransformBind: () => VRMExpressionTextureTransformBind,
  VRMFirstPerson: () => VRMFirstPerson,
  VRMFirstPersonLoaderPlugin: () => VRMFirstPersonLoaderPlugin,
  VRMFirstPersonMeshAnnotationType: () => VRMFirstPersonMeshAnnotationType,
  VRMHumanBoneList: () => VRMHumanBoneList,
  VRMHumanBoneName: () => VRMHumanBoneName,
  VRMHumanBoneParentMap: () => VRMHumanBoneParentMap,
  VRMHumanoid: () => VRMHumanoid,
  VRMHumanoidHelper: () => VRMHumanoidHelper,
  VRMHumanoidLoaderPlugin: () => VRMHumanoidLoaderPlugin,
  VRMLookAt: () => VRMLookAt,
  VRMLookAtBoneApplier: () => VRMLookAtBoneApplier,
  VRMLookAtExpressionApplier: () => VRMLookAtExpressionApplier,
  VRMLookAtHelper: () => VRMLookAtHelper,
  VRMLookAtLoaderPlugin: () => VRMLookAtLoaderPlugin,
  VRMLookAtRangeMap: () => VRMLookAtRangeMap,
  VRMLookAtTypeName: () => VRMLookAtTypeName,
  VRMMetaLoaderPlugin: () => VRMMetaLoaderPlugin,
  VRMRequiredHumanBoneName: () => VRMRequiredHumanBoneName
});
module.exports = __toCommonJS(src_exports);

// src/expressions/VRMExpression.ts
var THREE = __toESM(require("three"), 1);
var VRMExpression = class extends THREE.Object3D {
  constructor(expressionName) {
    super();
    /**
     * The current weight of the expression.
     *
     * You usually want to set the weight via {@link VRMExpressionManager.setValue}.
     *
     * It might also be controlled by the Three.js animation system.
     */
    this.weight = 0;
    /**
     * Interpret values greater than 0.5 as 1.0, ortherwise 0.0.
     */
    this.isBinary = false;
    /**
     * Specify how the expression overrides blink expressions.
     */
    this.overrideBlink = "none";
    /**
     * Specify how the expression overrides lookAt expressions.
     */
    this.overrideLookAt = "none";
    /**
     * Specify how the expression overrides mouth expressions.
     */
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

// src/expressions/VRMExpressionLoaderPlugin.ts
var THREE4 = __toESM(require("three"), 1);

// src/utils/gltfExtractPrimitivesFromNode.ts
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
  return __async(this, null, function* () {
    const node = yield gltf.parser.getDependency("node", nodeIndex);
    return extractPrimitivesInternal(gltf, nodeIndex, node);
  });
}
function gltfExtractPrimitivesFromNodes(gltf) {
  return __async(this, null, function* () {
    const nodes = yield gltf.parser.getDependencies("node");
    const map = /* @__PURE__ */ new Map();
    nodes.forEach((node, index) => {
      const result = extractPrimitivesInternal(gltf, index, node);
      if (result != null) {
        map.set(index, result);
      }
    });
    return map;
  });
}

// src/expressions/VRMExpressionPresetName.ts
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

// src/utils/saturate.ts
function saturate(value) {
  return Math.max(Math.min(value, 1), 0);
}

// src/expressions/VRMExpressionManager.ts
var VRMExpressionManager = class _VRMExpressionManager {
  /**
   * Create a new {@link VRMExpressionManager}.
   */
  constructor() {
    /**
     * A set of name or preset name of expressions that will be overridden by {@link VRMExpression.overrideBlink}.
     */
    this.blinkExpressionNames = ["blink", "blinkLeft", "blinkRight"];
    /**
     * A set of name or preset name of expressions that will be overridden by {@link VRMExpression.overrideLookAt}.
     */
    this.lookAtExpressionNames = ["lookLeft", "lookRight", "lookUp", "lookDown"];
    /**
     * A set of name or preset name of expressions that will be overridden by {@link VRMExpression.overrideMouth}.
     */
    this.mouthExpressionNames = ["aa", "ee", "ih", "oh", "ou"];
    /**
     * A set of {@link VRMExpression}.
     * When you want to register expressions, use {@link registerExpression}
     */
    this._expressions = [];
    /**
     * A map from name to expression.
     */
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

// src/expressions/VRMExpressionMaterialColorType.ts
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

// src/expressions/VRMExpressionMaterialColorBind.ts
var THREE2 = __toESM(require("three"), 1);
var _color = new THREE2.Color();
var _VRMExpressionMaterialColorBind = class _VRMExpressionMaterialColorBind {
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
    return (_b = (_a = Object.entries(_VRMExpressionMaterialColorBind._propertyNameMapMap).find(([distinguisher]) => {
      return this.material[distinguisher] === true;
    })) == null ? void 0 : _a[1]) != null ? _b : null;
  }
};
/**
 * Mapping of property names from VRMC/materialColorBinds.type to three.js/Material.
 * The first element stands for color channels, the second element stands for the alpha channel.
 * The second element can be null if the target property doesn't exist.
 */
// TODO: We might want to use the `satisfies` operator once we bump TS to 4.9 or higher
// See: https://github.com/pixiv/three-vrm/pull/1323#discussion_r1374020035
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

// src/expressions/VRMExpressionMorphTargetBind.ts
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

// src/expressions/VRMExpressionTextureTransformBind.ts
var THREE3 = __toESM(require("three"), 1);
var _v2 = new THREE3.Vector2();
var _VRMExpressionTextureTransformBind = class _VRMExpressionTextureTransformBind {
  constructor({
    material,
    scale,
    offset
  }) {
    var _a, _b;
    this.material = material;
    this.scale = scale;
    this.offset = offset;
    const propertyNames = (_a = Object.entries(_VRMExpressionTextureTransformBind._propertyNamesMap).find(
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

// src/expressions/VRMExpressionLoaderPlugin.ts
var POSSIBLE_SPEC_VERSIONS = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
var _VRMExpressionLoaderPlugin = class _VRMExpressionLoaderPlugin {
  get name() {
    return "VRMExpressionLoaderPlugin";
  }
  constructor(parser) {
    this.parser = parser;
  }
  afterRoot(gltf) {
    return __async(this, null, function* () {
      gltf.userData.vrmExpressionManager = yield this._import(gltf);
    });
  }
  /**
   * Import a {@link VRMExpressionManager} from a VRM.
   *
   * @param gltf A parsed result of GLTF taken from GLTFLoader
   */
  _import(gltf) {
    return __async(this, null, function* () {
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
    return __async(this, null, function* () {
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
        Array.from(nameSchemaExpressionMap.entries()).map((_0) => __async(this, [_0], function* ([name, schemaExpression]) {
          var _a2, _b2, _c, _d, _e, _f, _g;
          const expression = new VRMExpression(name);
          gltf.scene.add(expression);
          expression.isBinary = (_a2 = schemaExpression.isBinary) != null ? _a2 : false;
          expression.overrideBlink = (_b2 = schemaExpression.overrideBlink) != null ? _b2 : "none";
          expression.overrideLookAt = (_c = schemaExpression.overrideLookAt) != null ? _c : "none";
          expression.overrideMouth = (_d = schemaExpression.overrideMouth) != null ? _d : "none";
          (_e = schemaExpression.morphTargetBinds) == null ? void 0 : _e.forEach((bind) => __async(this, null, function* () {
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
            (_f = schemaExpression.materialColorBinds) == null ? void 0 : _f.forEach((bind) => __async(this, null, function* () {
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
            (_g = schemaExpression.textureTransformBinds) == null ? void 0 : _g.forEach((bind) => __async(this, null, function* () {
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
    return __async(this, null, function* () {
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
        schemaBlendShapeGroups.map((schemaGroup) => __async(this, null, function* () {
          var _a2;
          const v0PresetName = schemaGroup.presetName;
          const v1PresetName = v0PresetName != null && _VRMExpressionLoaderPlugin.v0v1PresetNameMap[v0PresetName] || null;
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
            schemaGroup.binds.forEach((bind) => __async(this, null, function* () {
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
                nodesUsingMesh.map((nodeIndex) => __async(this, null, function* () {
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
var VRMExpressionLoaderPlugin = _VRMExpressionLoaderPlugin;

// src/expressions/VRMExpressionOverrideType.ts
var VRMExpressionOverrideType = {
  None: "none",
  Block: "block",
  Blend: "blend"
};

// src/firstPerson/VRMFirstPerson.ts
var THREE5 = __toESM(require("three"), 1);
var _VRMFirstPerson = class _VRMFirstPerson {
  /**
   * Create a new VRMFirstPerson object.
   *
   * @param humanoid A {@link VRMHumanoid}
   * @param meshAnnotations A renderer settings. See the description of [[RendererFirstPersonFlags]] for more info
   */
  constructor(humanoid, meshAnnotations) {
    this._firstPersonOnlyLayer = _VRMFirstPerson.DEFAULT_FIRSTPERSON_ONLY_LAYER;
    this._thirdPersonOnlyLayer = _VRMFirstPerson.DEFAULT_THIRDPERSON_ONLY_LAYER;
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
    return new _VRMFirstPerson(this.humanoid, this.meshAnnotations).copy(this);
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
    firstPersonOnlyLayer = _VRMFirstPerson.DEFAULT_FIRSTPERSON_ONLY_LAYER,
    thirdPersonOnlyLayer = _VRMFirstPerson.DEFAULT_THIRDPERSON_ONLY_LAYER
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
/**
 * A default camera layer for `FirstPersonOnly` layer.
 *
 * @see [[getFirstPersonOnlyLayer]]
 */
_VRMFirstPerson.DEFAULT_FIRSTPERSON_ONLY_LAYER = 9;
/**
 * A default camera layer for `ThirdPersonOnly` layer.
 *
 * @see [[getThirdPersonOnlyLayer]]
 */
_VRMFirstPerson.DEFAULT_THIRDPERSON_ONLY_LAYER = 10;
var VRMFirstPerson = _VRMFirstPerson;

// src/firstPerson/VRMFirstPersonLoaderPlugin.ts
var POSSIBLE_SPEC_VERSIONS2 = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
var VRMFirstPersonLoaderPlugin = class {
  get name() {
    return "VRMFirstPersonLoaderPlugin";
  }
  constructor(parser) {
    this.parser = parser;
  }
  afterRoot(gltf) {
    return __async(this, null, function* () {
      const vrmHumanoid = gltf.userData.vrmHumanoid;
      if (vrmHumanoid === null) {
        return;
      } else if (vrmHumanoid === void 0) {
        throw new Error(
          "VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first"
        );
      }
      gltf.userData.vrmFirstPerson = yield this._import(gltf, vrmHumanoid);
    });
  }
  /**
   * Import a {@link VRMFirstPerson} from a VRM.
   *
   * @param gltf A parsed result of GLTF taken from GLTFLoader
   * @param humanoid A {@link VRMHumanoid} instance that represents the VRM
   */
  _import(gltf, humanoid) {
    return __async(this, null, function* () {
      if (humanoid == null) {
        return null;
      }
      const v1Result = yield this._v1Import(gltf, humanoid);
      if (v1Result) {
        return v1Result;
      }
      const v0Result = yield this._v0Import(gltf, humanoid);
      if (v0Result) {
        return v0Result;
      }
      return null;
    });
  }
  _v1Import(gltf, humanoid) {
    return __async(this, null, function* () {
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
      if (!POSSIBLE_SPEC_VERSIONS2.has(specVersion)) {
        console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${specVersion}"`);
        return null;
      }
      const schemaFirstPerson = extension.firstPerson;
      const meshAnnotations = [];
      const nodePrimitivesMap = yield gltfExtractPrimitivesFromNodes(gltf);
      Array.from(nodePrimitivesMap.entries()).forEach(([nodeIndex, primitives]) => {
        var _a2, _b2;
        const annotation = (_a2 = schemaFirstPerson == null ? void 0 : schemaFirstPerson.meshAnnotations) == null ? void 0 : _a2.find((a) => a.node === nodeIndex);
        meshAnnotations.push({
          meshes: primitives,
          type: (_b2 = annotation == null ? void 0 : annotation.type) != null ? _b2 : "auto"
        });
      });
      return new VRMFirstPerson(humanoid, meshAnnotations);
    });
  }
  _v0Import(gltf, humanoid) {
    return __async(this, null, function* () {
      var _a;
      const json = this.parser.json;
      const vrmExt = (_a = json.extensions) == null ? void 0 : _a.VRM;
      if (!vrmExt) {
        return null;
      }
      const schemaFirstPerson = vrmExt.firstPerson;
      if (!schemaFirstPerson) {
        return null;
      }
      const meshAnnotations = [];
      const nodePrimitivesMap = yield gltfExtractPrimitivesFromNodes(gltf);
      Array.from(nodePrimitivesMap.entries()).forEach(([nodeIndex, primitives]) => {
        const schemaNode = json.nodes[nodeIndex];
        const flag = schemaFirstPerson.meshAnnotations ? schemaFirstPerson.meshAnnotations.find((a) => a.mesh === schemaNode.mesh) : void 0;
        meshAnnotations.push({
          meshes: primitives,
          type: this._convertV0FlagToV1Type(flag == null ? void 0 : flag.firstPersonFlag)
        });
      });
      return new VRMFirstPerson(humanoid, meshAnnotations);
    });
  }
  _convertV0FlagToV1Type(flag) {
    if (flag === "FirstPersonOnly") {
      return "firstPersonOnly";
    } else if (flag === "ThirdPersonOnly") {
      return "thirdPersonOnly";
    } else if (flag === "Both") {
      return "both";
    } else {
      return "auto";
    }
  }
};

// src/firstPerson/VRMFirstPersonMeshAnnotationType.ts
var VRMFirstPersonMeshAnnotationType = {
  Auto: "auto",
  Both: "both",
  ThirdPersonOnly: "thirdPersonOnly",
  FirstPersonOnly: "firstPersonOnly"
};

// src/humanoid/helpers/VRMHumanoidHelper.ts
var THREE6 = __toESM(require("three"), 1);
var _v3A = new THREE6.Vector3();
var _v3B = new THREE6.Vector3();
var _quatA = new THREE6.Quaternion();
var VRMHumanoidHelper = class extends THREE6.Group {
  constructor(humanoid) {
    super();
    this.vrmHumanoid = humanoid;
    this._boneAxesMap = /* @__PURE__ */ new Map();
    Object.values(humanoid.humanBones).forEach((bone) => {
      const helper = new THREE6.AxesHelper(1);
      helper.matrixAutoUpdate = false;
      helper.material.depthTest = false;
      helper.material.depthWrite = false;
      this.add(helper);
      this._boneAxesMap.set(bone, helper);
    });
  }
  dispose() {
    Array.from(this._boneAxesMap.values()).forEach((axes) => {
      axes.geometry.dispose();
      axes.material.dispose();
    });
  }
  updateMatrixWorld(force) {
    Array.from(this._boneAxesMap.entries()).forEach(([bone, axes]) => {
      bone.node.updateWorldMatrix(true, false);
      bone.node.matrixWorld.decompose(_v3A, _quatA, _v3B);
      const scale = _v3A.set(0.1, 0.1, 0.1).divide(_v3B);
      axes.matrix.copy(bone.node.matrixWorld).scale(scale);
    });
    super.updateMatrixWorld(force);
  }
};

// src/humanoid/VRMHumanBoneList.ts
var VRMHumanBoneList = [
  "hips",
  "spine",
  "chest",
  "upperChest",
  "neck",
  "head",
  "leftEye",
  "rightEye",
  "jaw",
  "leftUpperLeg",
  "leftLowerLeg",
  "leftFoot",
  "leftToes",
  "rightUpperLeg",
  "rightLowerLeg",
  "rightFoot",
  "rightToes",
  "leftShoulder",
  "leftUpperArm",
  "leftLowerArm",
  "leftHand",
  "rightShoulder",
  "rightUpperArm",
  "rightLowerArm",
  "rightHand",
  "leftThumbMetacarpal",
  "leftThumbProximal",
  "leftThumbDistal",
  "leftIndexProximal",
  "leftIndexIntermediate",
  "leftIndexDistal",
  "leftMiddleProximal",
  "leftMiddleIntermediate",
  "leftMiddleDistal",
  "leftRingProximal",
  "leftRingIntermediate",
  "leftRingDistal",
  "leftLittleProximal",
  "leftLittleIntermediate",
  "leftLittleDistal",
  "rightThumbMetacarpal",
  "rightThumbProximal",
  "rightThumbDistal",
  "rightIndexProximal",
  "rightIndexIntermediate",
  "rightIndexDistal",
  "rightMiddleProximal",
  "rightMiddleIntermediate",
  "rightMiddleDistal",
  "rightRingProximal",
  "rightRingIntermediate",
  "rightRingDistal",
  "rightLittleProximal",
  "rightLittleIntermediate",
  "rightLittleDistal"
];

// src/humanoid/VRMHumanBoneName.ts
var VRMHumanBoneName = {
  Hips: "hips",
  Spine: "spine",
  Chest: "chest",
  UpperChest: "upperChest",
  Neck: "neck",
  Head: "head",
  LeftEye: "leftEye",
  RightEye: "rightEye",
  Jaw: "jaw",
  LeftUpperLeg: "leftUpperLeg",
  LeftLowerLeg: "leftLowerLeg",
  LeftFoot: "leftFoot",
  LeftToes: "leftToes",
  RightUpperLeg: "rightUpperLeg",
  RightLowerLeg: "rightLowerLeg",
  RightFoot: "rightFoot",
  RightToes: "rightToes",
  LeftShoulder: "leftShoulder",
  LeftUpperArm: "leftUpperArm",
  LeftLowerArm: "leftLowerArm",
  LeftHand: "leftHand",
  RightShoulder: "rightShoulder",
  RightUpperArm: "rightUpperArm",
  RightLowerArm: "rightLowerArm",
  RightHand: "rightHand",
  LeftThumbMetacarpal: "leftThumbMetacarpal",
  LeftThumbProximal: "leftThumbProximal",
  LeftThumbDistal: "leftThumbDistal",
  LeftIndexProximal: "leftIndexProximal",
  LeftIndexIntermediate: "leftIndexIntermediate",
  LeftIndexDistal: "leftIndexDistal",
  LeftMiddleProximal: "leftMiddleProximal",
  LeftMiddleIntermediate: "leftMiddleIntermediate",
  LeftMiddleDistal: "leftMiddleDistal",
  LeftRingProximal: "leftRingProximal",
  LeftRingIntermediate: "leftRingIntermediate",
  LeftRingDistal: "leftRingDistal",
  LeftLittleProximal: "leftLittleProximal",
  LeftLittleIntermediate: "leftLittleIntermediate",
  LeftLittleDistal: "leftLittleDistal",
  RightThumbMetacarpal: "rightThumbMetacarpal",
  RightThumbProximal: "rightThumbProximal",
  RightThumbDistal: "rightThumbDistal",
  RightIndexProximal: "rightIndexProximal",
  RightIndexIntermediate: "rightIndexIntermediate",
  RightIndexDistal: "rightIndexDistal",
  RightMiddleProximal: "rightMiddleProximal",
  RightMiddleIntermediate: "rightMiddleIntermediate",
  RightMiddleDistal: "rightMiddleDistal",
  RightRingProximal: "rightRingProximal",
  RightRingIntermediate: "rightRingIntermediate",
  RightRingDistal: "rightRingDistal",
  RightLittleProximal: "rightLittleProximal",
  RightLittleIntermediate: "rightLittleIntermediate",
  RightLittleDistal: "rightLittleDistal"
};

// src/humanoid/VRMHumanBoneParentMap.ts
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

// src/humanoid/VRMRig.ts
var THREE7 = __toESM(require("three"), 1);

// src/utils/quatInvertCompat.ts
function quatInvertCompat(target) {
  if (target.invert) {
    target.invert();
  } else {
    target.inverse();
  }
  return target;
}

// src/humanoid/VRMRig.ts
var _v3A2 = new THREE7.Vector3();
var _quatA2 = new THREE7.Quaternion();
var VRMRig = class {
  /**
   * Create a new {@link VRMHumanoid}.
   * @param humanBones A {@link VRMHumanBones} contains all the bones of the new humanoid
   */
  constructor(humanBones) {
    this.humanBones = humanBones;
    this.restPose = this.getAbsolutePose();
  }
  /**
   * Return the current absolute pose of this humanoid as a {@link VRMPose}.
   * Note that the output result will contain initial state of the VRM and not compatible between different models.
   * You might want to use {@link getPose} instead.
   */
  getAbsolutePose() {
    const pose = {};
    Object.keys(this.humanBones).forEach((vrmBoneNameString) => {
      const vrmBoneName = vrmBoneNameString;
      const node = this.getBoneNode(vrmBoneName);
      if (!node) {
        return;
      }
      _v3A2.copy(node.position);
      _quatA2.copy(node.quaternion);
      pose[vrmBoneName] = {
        position: _v3A2.toArray(),
        rotation: _quatA2.toArray()
      };
    });
    return pose;
  }
  /**
   * Return the current pose of this humanoid as a {@link VRMPose}.
   *
   * Each transform is a local transform relative from rest pose (T-pose).
   */
  getPose() {
    const pose = {};
    Object.keys(this.humanBones).forEach((boneNameString) => {
      const boneName = boneNameString;
      const node = this.getBoneNode(boneName);
      if (!node) {
        return;
      }
      _v3A2.set(0, 0, 0);
      _quatA2.identity();
      const restState = this.restPose[boneName];
      if (restState == null ? void 0 : restState.position) {
        _v3A2.fromArray(restState.position).negate();
      }
      if (restState == null ? void 0 : restState.rotation) {
        quatInvertCompat(_quatA2.fromArray(restState.rotation));
      }
      _v3A2.add(node.position);
      _quatA2.premultiply(node.quaternion);
      pose[boneName] = {
        position: _v3A2.toArray(),
        rotation: _quatA2.toArray()
      };
    });
    return pose;
  }
  /**
   * Let the humanoid do a specified pose.
   *
   * Each transform have to be a local transform relative from rest pose (T-pose).
   * You can pass what you got from {@link getPose}.
   *
   * @param poseObject A [[VRMPose]] that represents a single pose
   */
  setPose(poseObject) {
    Object.entries(poseObject).forEach(([boneNameString, state]) => {
      const boneName = boneNameString;
      const node = this.getBoneNode(boneName);
      if (!node) {
        return;
      }
      const restState = this.restPose[boneName];
      if (!restState) {
        return;
      }
      if (state == null ? void 0 : state.position) {
        node.position.fromArray(state.position);
        if (restState.position) {
          node.position.add(_v3A2.fromArray(restState.position));
        }
      }
      if (state == null ? void 0 : state.rotation) {
        node.quaternion.fromArray(state.rotation);
        if (restState.rotation) {
          node.quaternion.multiply(_quatA2.fromArray(restState.rotation));
        }
      }
    });
  }
  /**
   * Reset the humanoid to its rest pose.
   */
  resetPose() {
    Object.entries(this.restPose).forEach(([boneName, rest]) => {
      const node = this.getBoneNode(boneName);
      if (!node) {
        return;
      }
      if (rest == null ? void 0 : rest.position) {
        node.position.fromArray(rest.position);
      }
      if (rest == null ? void 0 : rest.rotation) {
        node.quaternion.fromArray(rest.rotation);
      }
    });
  }
  /**
   * Return a bone bound to a specified {@link VRMHumanBoneName}, as a {@link VRMHumanBone}.
   *
   * @param name Name of the bone you want
   */
  getBone(name) {
    var _a;
    return (_a = this.humanBones[name]) != null ? _a : void 0;
  }
  /**
   * Return a bone bound to a specified {@link VRMHumanBoneName}, as a `THREE.Object3D`.
   *
   * @param name Name of the bone you want
   */
  getBoneNode(name) {
    var _a, _b;
    return (_b = (_a = this.humanBones[name]) == null ? void 0 : _a.node) != null ? _b : null;
  }
};

// src/humanoid/VRMHumanoidRig.ts
var THREE8 = __toESM(require("three"), 1);
var _v3A3 = new THREE8.Vector3();
var _quatA3 = new THREE8.Quaternion();
var _boneWorldPos = new THREE8.Vector3();
var VRMHumanoidRig = class _VRMHumanoidRig extends VRMRig {
  static _setupTransforms(modelRig) {
    const root = new THREE8.Object3D();
    root.name = "VRMHumanoidRig";
    const boneWorldPositions = {};
    const boneWorldRotations = {};
    const boneRotations = {};
    const parentWorldRotations = {};
    VRMHumanBoneList.forEach((boneName) => {
      var _a;
      const boneNode = modelRig.getBoneNode(boneName);
      if (boneNode) {
        const boneWorldPosition = new THREE8.Vector3();
        const boneWorldRotation = new THREE8.Quaternion();
        boneNode.updateWorldMatrix(true, false);
        boneNode.matrixWorld.decompose(boneWorldPosition, boneWorldRotation, _v3A3);
        boneWorldPositions[boneName] = boneWorldPosition;
        boneWorldRotations[boneName] = boneWorldRotation;
        boneRotations[boneName] = boneNode.quaternion.clone();
        const parentWorldRotation = new THREE8.Quaternion();
        (_a = boneNode.parent) == null ? void 0 : _a.matrixWorld.decompose(_v3A3, parentWorldRotation, _v3A3);
        parentWorldRotations[boneName] = parentWorldRotation;
      }
    });
    const rigBones = {};
    VRMHumanBoneList.forEach((boneName) => {
      var _a;
      const boneNode = modelRig.getBoneNode(boneName);
      if (boneNode) {
        const boneWorldPosition = boneWorldPositions[boneName];
        let currentBoneName = boneName;
        let parentBoneWorldPosition;
        while (parentBoneWorldPosition == null) {
          currentBoneName = VRMHumanBoneParentMap[currentBoneName];
          if (currentBoneName == null) {
            break;
          }
          parentBoneWorldPosition = boneWorldPositions[currentBoneName];
        }
        const rigBoneNode = new THREE8.Object3D();
        rigBoneNode.name = "Normalized_" + boneNode.name;
        const parentRigBoneNode = currentBoneName ? (_a = rigBones[currentBoneName]) == null ? void 0 : _a.node : root;
        parentRigBoneNode.add(rigBoneNode);
        rigBoneNode.position.copy(boneWorldPosition);
        if (parentBoneWorldPosition) {
          rigBoneNode.position.sub(parentBoneWorldPosition);
        }
        rigBones[boneName] = { node: rigBoneNode };
      }
    });
    return {
      rigBones,
      root,
      parentWorldRotations,
      boneRotations
    };
  }
  constructor(humanoid) {
    const { rigBones, root, parentWorldRotations, boneRotations } = _VRMHumanoidRig._setupTransforms(humanoid);
    super(rigBones);
    this.original = humanoid;
    this.root = root;
    this._parentWorldRotations = parentWorldRotations;
    this._boneRotations = boneRotations;
  }
  /**
   * Update this humanoid rig.
   */
  update() {
    VRMHumanBoneList.forEach((boneName) => {
      const boneNode = this.original.getBoneNode(boneName);
      if (boneNode != null) {
        const rigBoneNode = this.getBoneNode(boneName);
        const parentWorldRotation = this._parentWorldRotations[boneName];
        const invParentWorldRotation = _quatA3.copy(parentWorldRotation).invert();
        const boneRotation = this._boneRotations[boneName];
        boneNode.quaternion.copy(rigBoneNode.quaternion).multiply(parentWorldRotation).premultiply(invParentWorldRotation).multiply(boneRotation);
        if (boneName === "hips") {
          const boneWorldPosition = rigBoneNode.getWorldPosition(_boneWorldPos);
          boneNode.parent.updateWorldMatrix(true, false);
          const parentWorldMatrix = boneNode.parent.matrixWorld;
          const localPosition = boneWorldPosition.applyMatrix4(parentWorldMatrix.invert());
          boneNode.position.copy(localPosition);
        }
      }
    });
  }
};

// src/humanoid/VRMHumanoid.ts
var VRMHumanoid = class _VRMHumanoid {
  // TODO: Rename
  /**
   * @deprecated Deprecated. Use either {@link rawRestPose} or {@link normalizedRestPose} instead.
   */
  get restPose() {
    console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead.");
    return this.rawRestPose;
  }
  /**
   * A {@link VRMPose} of its raw human bones that is its default state.
   * Note that it's not compatible with {@link setRawPose} and {@link getRawPose}, since it contains non-relative values of each local transforms.
   */
  get rawRestPose() {
    return this._rawHumanBones.restPose;
  }
  /**
   * A {@link VRMPose} of its normalized human bones that is its default state.
   * Note that it's not compatible with {@link setNormalizedPose} and {@link getNormalizedPose}, since it contains non-relative values of each local transforms.
   */
  get normalizedRestPose() {
    return this._normalizedHumanBones.restPose;
  }
  /**
   * A map from {@link VRMHumanBoneName} to raw {@link VRMHumanBone}s.
   */
  get humanBones() {
    return this._rawHumanBones.humanBones;
  }
  /**
   * A map from {@link VRMHumanBoneName} to raw {@link VRMHumanBone}s.
   */
  get rawHumanBones() {
    return this._rawHumanBones.humanBones;
  }
  /**
   * A map from {@link VRMHumanBoneName} to normalized {@link VRMHumanBone}s.
   */
  get normalizedHumanBones() {
    return this._normalizedHumanBones.humanBones;
  }
  /**
   * The root of normalized {@link VRMHumanBone}s.
   */
  get normalizedHumanBonesRoot() {
    return this._normalizedHumanBones.root;
  }
  /**
   * Create a new {@link VRMHumanoid}.
   * @param humanBones A {@link VRMHumanBones} contains all the bones of the new humanoid
   * @param autoUpdateHumanBones Whether it copies pose from normalizedHumanBones to rawHumanBones on {@link update}. `true` by default.
   */
  constructor(humanBones, options) {
    var _a;
    this.autoUpdateHumanBones = (_a = options == null ? void 0 : options.autoUpdateHumanBones) != null ? _a : true;
    this._rawHumanBones = new VRMRig(humanBones);
    this._normalizedHumanBones = new VRMHumanoidRig(this._rawHumanBones);
  }
  /**
   * Copy the given {@link VRMHumanoid} into this one.
   * @param source The {@link VRMHumanoid} you want to copy
   * @returns this
   */
  copy(source) {
    this.autoUpdateHumanBones = source.autoUpdateHumanBones;
    this._rawHumanBones = new VRMRig(source.humanBones);
    this._normalizedHumanBones = new VRMHumanoidRig(this._rawHumanBones);
    return this;
  }
  /**
   * Returns a clone of this {@link VRMHumanoid}.
   * @returns Copied {@link VRMHumanoid}
   */
  clone() {
    return new _VRMHumanoid(this.humanBones, { autoUpdateHumanBones: this.autoUpdateHumanBones }).copy(this);
  }
  /**
   * @deprecated Deprecated. Use either {@link getRawAbsolutePose} or {@link getNormalizedAbsolutePose} instead.
   */
  getAbsolutePose() {
    console.warn(
      "VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."
    );
    return this.getRawAbsolutePose();
  }
  /**
   * Return the current absolute pose of this raw human bones as a {@link VRMPose}.
   * Note that the output result will contain initial state of the VRM and not compatible between different models.
   * You might want to use {@link getRawPose} instead.
   */
  getRawAbsolutePose() {
    return this._rawHumanBones.getAbsolutePose();
  }
  /**
   * Return the current absolute pose of this normalized human bones as a {@link VRMPose}.
   * Note that the output result will contain initial state of the VRM and not compatible between different models.
   * You might want to use {@link getNormalizedPose} instead.
   */
  getNormalizedAbsolutePose() {
    return this._normalizedHumanBones.getAbsolutePose();
  }
  /**
   * @deprecated Deprecated. Use either {@link getRawPose} or {@link getNormalizedPose} instead.
   */
  getPose() {
    console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead.");
    return this.getRawPose();
  }
  /**
   * Return the current pose of raw human bones as a {@link VRMPose}.
   *
   * Each transform is a local transform relative from rest pose (T-pose).
   */
  getRawPose() {
    return this._rawHumanBones.getPose();
  }
  /**
   * Return the current pose of normalized human bones as a {@link VRMPose}.
   *
   * Each transform is a local transform relative from rest pose (T-pose).
   */
  getNormalizedPose() {
    return this._normalizedHumanBones.getPose();
  }
  /**
   * @deprecated Deprecated. Use either {@link setRawPose} or {@link setNormalizedPose} instead.
   */
  setPose(poseObject) {
    console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead.");
    return this.setRawPose(poseObject);
  }
  /**
   * Let the raw human bones do a specified pose.
   *
   * Each transform have to be a local transform relative from rest pose (T-pose).
   * You can pass what you got from {@link getRawPose}.
   *
   * If you are using {@link autoUpdateHumanBones}, you might want to use {@link setNormalizedPose} instead.
   *
   * @param poseObject A {@link VRMPose} that represents a single pose
   */
  setRawPose(poseObject) {
    return this._rawHumanBones.setPose(poseObject);
  }
  /**
   * Let the normalized human bones do a specified pose.
   *
   * Each transform have to be a local transform relative from rest pose (T-pose).
   * You can pass what you got from {@link getNormalizedPose}.
   *
   * @param poseObject A {@link VRMPose} that represents a single pose
   */
  setNormalizedPose(poseObject) {
    return this._normalizedHumanBones.setPose(poseObject);
  }
  /**
   * @deprecated Deprecated. Use either {@link resetRawPose} or {@link resetNormalizedPose} instead.
   */
  resetPose() {
    console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead.");
    return this.resetRawPose();
  }
  /**
   * Reset the raw humanoid to its rest pose.
   *
   * If you are using {@link autoUpdateHumanBones}, you might want to use {@link resetNormalizedPose} instead.
   */
  resetRawPose() {
    return this._rawHumanBones.resetPose();
  }
  /**
   * Reset the normalized humanoid to its rest pose.
   */
  resetNormalizedPose() {
    return this._normalizedHumanBones.resetPose();
  }
  /**
   * @deprecated Deprecated. Use either {@link getRawBone} or {@link getNormalizedBone} instead.
   */
  getBone(name) {
    console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead.");
    return this.getRawBone(name);
  }
  /**
   * Return a raw {@link VRMHumanBone} bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getRawBone(name) {
    return this._rawHumanBones.getBone(name);
  }
  /**
   * Return a normalized {@link VRMHumanBone} bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getNormalizedBone(name) {
    return this._normalizedHumanBones.getBone(name);
  }
  /**
   * @deprecated Deprecated. Use either {@link getRawBoneNode} or {@link getNormalizedBoneNode} instead.
   */
  getBoneNode(name) {
    console.warn(
      "VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."
    );
    return this.getRawBoneNode(name);
  }
  /**
   * Return a raw bone as a `THREE.Object3D` bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getRawBoneNode(name) {
    return this._rawHumanBones.getBoneNode(name);
  }
  /**
   * Return a normalized bone as a `THREE.Object3D` bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getNormalizedBoneNode(name) {
    return this._normalizedHumanBones.getBoneNode(name);
  }
  /**
   * Update the humanoid component.
   *
   * If {@link autoUpdateHumanBones} is `true`, it transfers the pose of normalized human bones to raw human bones.
   */
  update() {
    if (this.autoUpdateHumanBones) {
      this._normalizedHumanBones.update();
    }
  }
};

// src/humanoid/VRMRequiredHumanBoneName.ts
var VRMRequiredHumanBoneName = {
  Hips: "hips",
  Spine: "spine",
  Head: "head",
  LeftUpperLeg: "leftUpperLeg",
  LeftLowerLeg: "leftLowerLeg",
  LeftFoot: "leftFoot",
  RightUpperLeg: "rightUpperLeg",
  RightLowerLeg: "rightLowerLeg",
  RightFoot: "rightFoot",
  LeftUpperArm: "leftUpperArm",
  LeftLowerArm: "leftLowerArm",
  LeftHand: "leftHand",
  RightUpperArm: "rightUpperArm",
  RightLowerArm: "rightLowerArm",
  RightHand: "rightHand"
};

// src/humanoid/VRMHumanoidLoaderPlugin.ts
var POSSIBLE_SPEC_VERSIONS3 = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
var thumbBoneNameMap = {
  leftThumbProximal: "leftThumbMetacarpal",
  leftThumbIntermediate: "leftThumbProximal",
  rightThumbProximal: "rightThumbMetacarpal",
  rightThumbIntermediate: "rightThumbProximal"
};
var VRMHumanoidLoaderPlugin = class {
  get name() {
    return "VRMHumanoidLoaderPlugin";
  }
  constructor(parser, options) {
    this.parser = parser;
    this.helperRoot = options == null ? void 0 : options.helperRoot;
    this.autoUpdateHumanBones = options == null ? void 0 : options.autoUpdateHumanBones;
  }
  afterRoot(gltf) {
    return __async(this, null, function* () {
      gltf.userData.vrmHumanoid = yield this._import(gltf);
    });
  }
  /**
   * Import a {@link VRMHumanoid} from a VRM.
   *
   * @param gltf A parsed result of GLTF taken from GLTFLoader
   */
  _import(gltf) {
    return __async(this, null, function* () {
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
    return __async(this, null, function* () {
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
      if (!POSSIBLE_SPEC_VERSIONS3.has(specVersion)) {
        console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${specVersion}"`);
        return null;
      }
      const schemaHumanoid = extension.humanoid;
      if (!schemaHumanoid) {
        return null;
      }
      const existsPreviousThumbName = schemaHumanoid.humanBones.leftThumbIntermediate != null || schemaHumanoid.humanBones.rightThumbIntermediate != null;
      const humanBones = {};
      if (schemaHumanoid.humanBones != null) {
        yield Promise.all(
          Object.entries(schemaHumanoid.humanBones).map((_0) => __async(this, [_0], function* ([boneNameString, schemaHumanBone]) {
            let boneName = boneNameString;
            const index = schemaHumanBone.node;
            if (existsPreviousThumbName) {
              const thumbBoneName = thumbBoneNameMap[boneName];
              if (thumbBoneName != null) {
                boneName = thumbBoneName;
              }
            }
            const node = yield this.parser.getDependency("node", index);
            if (node == null) {
              console.warn(`A glTF node bound to the humanoid bone ${boneName} (index = ${index}) does not exist`);
              return;
            }
            humanBones[boneName] = { node };
          }))
        );
      }
      const humanoid = new VRMHumanoid(this._ensureRequiredBonesExist(humanBones), {
        autoUpdateHumanBones: this.autoUpdateHumanBones
      });
      gltf.scene.add(humanoid.normalizedHumanBonesRoot);
      if (this.helperRoot) {
        const helper = new VRMHumanoidHelper(humanoid);
        this.helperRoot.add(helper);
        helper.renderOrder = this.helperRoot.renderOrder;
      }
      return humanoid;
    });
  }
  _v0Import(gltf) {
    return __async(this, null, function* () {
      var _a;
      const json = this.parser.json;
      const vrmExt = (_a = json.extensions) == null ? void 0 : _a.VRM;
      if (!vrmExt) {
        return null;
      }
      const schemaHumanoid = vrmExt.humanoid;
      if (!schemaHumanoid) {
        return null;
      }
      const humanBones = {};
      if (schemaHumanoid.humanBones != null) {
        yield Promise.all(
          schemaHumanoid.humanBones.map((bone) => __async(this, null, function* () {
            const boneName = bone.bone;
            const index = bone.node;
            if (boneName == null || index == null) {
              return;
            }
            const node = yield this.parser.getDependency("node", index);
            if (node == null) {
              console.warn(`A glTF node bound to the humanoid bone ${boneName} (index = ${index}) does not exist`);
              return;
            }
            const thumbBoneName = thumbBoneNameMap[boneName];
            const newBoneName = thumbBoneName != null ? thumbBoneName : boneName;
            if (humanBones[newBoneName] != null) {
              console.warn(
                `Multiple bone entries for ${newBoneName} detected (index = ${index}), ignoring duplicated entries.`
              );
              return;
            }
            humanBones[newBoneName] = { node };
          }))
        );
      }
      const humanoid = new VRMHumanoid(this._ensureRequiredBonesExist(humanBones), {
        autoUpdateHumanBones: this.autoUpdateHumanBones
      });
      gltf.scene.add(humanoid.normalizedHumanBonesRoot);
      if (this.helperRoot) {
        const helper = new VRMHumanoidHelper(humanoid);
        this.helperRoot.add(helper);
        helper.renderOrder = this.helperRoot.renderOrder;
      }
      return humanoid;
    });
  }
  /**
   * Ensure required bones exist in given human bones.
   * @param humanBones Human bones
   * @returns Human bones, no longer partial!
   */
  _ensureRequiredBonesExist(humanBones) {
    const missingRequiredBones = Object.values(VRMRequiredHumanBoneName).filter(
      (requiredBoneName) => humanBones[requiredBoneName] == null
    );
    if (missingRequiredBones.length > 0) {
      throw new Error(
        `VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${missingRequiredBones.join(", ")}`
      );
    }
    return humanBones;
  }
};

// src/lookAt/helpers/VRMLookAtHelper.ts
var THREE11 = __toESM(require("three"), 1);

// src/lookAt/helpers/utils/FanBufferGeometry.ts
var THREE9 = __toESM(require("three"), 1);
var FanBufferGeometry = class extends THREE9.BufferGeometry {
  constructor() {
    super();
    this._currentTheta = 0;
    this._currentRadius = 0;
    this.theta = 0;
    this.radius = 0;
    this._currentTheta = 0;
    this._currentRadius = 0;
    this._attrPos = new THREE9.BufferAttribute(new Float32Array(65 * 3), 3);
    this.setAttribute("position", this._attrPos);
    this._attrIndex = new THREE9.BufferAttribute(new Uint16Array(3 * 63), 1);
    this.setIndex(this._attrIndex);
    this._buildIndex();
    this.update();
  }
  update() {
    let shouldUpdateGeometry = false;
    if (this._currentTheta !== this.theta) {
      this._currentTheta = this.theta;
      shouldUpdateGeometry = true;
    }
    if (this._currentRadius !== this.radius) {
      this._currentRadius = this.radius;
      shouldUpdateGeometry = true;
    }
    if (shouldUpdateGeometry) {
      this._buildPosition();
    }
  }
  _buildPosition() {
    this._attrPos.setXYZ(0, 0, 0, 0);
    for (let i = 0; i < 64; i++) {
      const t = i / 63 * this._currentTheta;
      this._attrPos.setXYZ(i + 1, this._currentRadius * Math.sin(t), 0, this._currentRadius * Math.cos(t));
    }
    this._attrPos.needsUpdate = true;
  }
  _buildIndex() {
    for (let i = 0; i < 63; i++) {
      this._attrIndex.setXYZ(i * 3, 0, i + 1, i + 2);
    }
    this._attrIndex.needsUpdate = true;
  }
};

// src/lookAt/helpers/utils/LineAndSphereBufferGeometry.ts
var THREE10 = __toESM(require("three"), 1);
var LineAndSphereBufferGeometry = class extends THREE10.BufferGeometry {
  constructor() {
    super();
    this.radius = 0;
    this._currentRadius = 0;
    this.tail = new THREE10.Vector3();
    this._currentTail = new THREE10.Vector3();
    this._attrPos = new THREE10.BufferAttribute(new Float32Array(294), 3);
    this.setAttribute("position", this._attrPos);
    this._attrIndex = new THREE10.BufferAttribute(new Uint16Array(194), 1);
    this.setIndex(this._attrIndex);
    this._buildIndex();
    this.update();
  }
  update() {
    let shouldUpdateGeometry = false;
    if (this._currentRadius !== this.radius) {
      this._currentRadius = this.radius;
      shouldUpdateGeometry = true;
    }
    if (!this._currentTail.equals(this.tail)) {
      this._currentTail.copy(this.tail);
      shouldUpdateGeometry = true;
    }
    if (shouldUpdateGeometry) {
      this._buildPosition();
    }
  }
  _buildPosition() {
    for (let i = 0; i < 32; i++) {
      const t = i / 16 * Math.PI;
      this._attrPos.setXYZ(i, Math.cos(t), Math.sin(t), 0);
      this._attrPos.setXYZ(32 + i, 0, Math.cos(t), Math.sin(t));
      this._attrPos.setXYZ(64 + i, Math.sin(t), 0, Math.cos(t));
    }
    this.scale(this._currentRadius, this._currentRadius, this._currentRadius);
    this.translate(this._currentTail.x, this._currentTail.y, this._currentTail.z);
    this._attrPos.setXYZ(96, 0, 0, 0);
    this._attrPos.setXYZ(97, this._currentTail.x, this._currentTail.y, this._currentTail.z);
    this._attrPos.needsUpdate = true;
  }
  _buildIndex() {
    for (let i = 0; i < 32; i++) {
      const i1 = (i + 1) % 32;
      this._attrIndex.setXY(i * 2, i, i1);
      this._attrIndex.setXY(64 + i * 2, 32 + i, 32 + i1);
      this._attrIndex.setXY(128 + i * 2, 64 + i, 64 + i1);
    }
    this._attrIndex.setXY(192, 96, 97);
    this._attrIndex.needsUpdate = true;
  }
};

// src/lookAt/helpers/VRMLookAtHelper.ts
var _quatA4 = new THREE11.Quaternion();
var _quatB = new THREE11.Quaternion();
var _v3A4 = new THREE11.Vector3();
var _v3B2 = new THREE11.Vector3();
var SQRT_2_OVER_2 = Math.sqrt(2) / 2;
var QUAT_XY_CW90 = new THREE11.Quaternion(0, 0, -SQRT_2_OVER_2, SQRT_2_OVER_2);
var VEC3_POSITIVE_Y = new THREE11.Vector3(0, 1, 0);
var VRMLookAtHelper = class extends THREE11.Group {
  constructor(lookAt) {
    super();
    this.matrixAutoUpdate = false;
    this.vrmLookAt = lookAt;
    {
      const geometry = new FanBufferGeometry();
      geometry.radius = 0.5;
      const material = new THREE11.MeshBasicMaterial({
        color: 65280,
        transparent: true,
        opacity: 0.5,
        side: THREE11.DoubleSide,
        depthTest: false,
        depthWrite: false
      });
      this._meshPitch = new THREE11.Mesh(geometry, material);
      this.add(this._meshPitch);
    }
    {
      const geometry = new FanBufferGeometry();
      geometry.radius = 0.5;
      const material = new THREE11.MeshBasicMaterial({
        color: 16711680,
        transparent: true,
        opacity: 0.5,
        side: THREE11.DoubleSide,
        depthTest: false,
        depthWrite: false
      });
      this._meshYaw = new THREE11.Mesh(geometry, material);
      this.add(this._meshYaw);
    }
    {
      const geometry = new LineAndSphereBufferGeometry();
      geometry.radius = 0.1;
      const material = new THREE11.LineBasicMaterial({
        color: 16777215,
        depthTest: false,
        depthWrite: false
      });
      this._lineTarget = new THREE11.LineSegments(geometry, material);
      this._lineTarget.frustumCulled = false;
      this.add(this._lineTarget);
    }
  }
  dispose() {
    this._meshYaw.geometry.dispose();
    this._meshYaw.material.dispose();
    this._meshPitch.geometry.dispose();
    this._meshPitch.material.dispose();
    this._lineTarget.geometry.dispose();
    this._lineTarget.material.dispose();
  }
  updateMatrixWorld(force) {
    const yaw = THREE11.MathUtils.DEG2RAD * this.vrmLookAt.yaw;
    this._meshYaw.geometry.theta = yaw;
    this._meshYaw.geometry.update();
    const pitch = THREE11.MathUtils.DEG2RAD * this.vrmLookAt.pitch;
    this._meshPitch.geometry.theta = pitch;
    this._meshPitch.geometry.update();
    this.vrmLookAt.getLookAtWorldPosition(_v3A4);
    this.vrmLookAt.getLookAtWorldQuaternion(_quatA4);
    _quatA4.multiply(this.vrmLookAt.getFaceFrontQuaternion(_quatB));
    this._meshYaw.position.copy(_v3A4);
    this._meshYaw.quaternion.copy(_quatA4);
    this._meshPitch.position.copy(_v3A4);
    this._meshPitch.quaternion.copy(_quatA4);
    this._meshPitch.quaternion.multiply(_quatB.setFromAxisAngle(VEC3_POSITIVE_Y, yaw));
    this._meshPitch.quaternion.multiply(QUAT_XY_CW90);
    const { target, autoUpdate } = this.vrmLookAt;
    if (target != null && autoUpdate) {
      target.getWorldPosition(_v3B2).sub(_v3A4);
      this._lineTarget.geometry.tail.copy(_v3B2);
      this._lineTarget.geometry.update();
      this._lineTarget.position.copy(_v3A4);
    }
    super.updateMatrixWorld(force);
  }
};

// src/lookAt/VRMLookAt.ts
var THREE13 = __toESM(require("three"), 1);

// src/utils/getWorldQuaternionLite.ts
var THREE12 = __toESM(require("three"), 1);
var _position = new THREE12.Vector3();
var _scale = new THREE12.Vector3();
function getWorldQuaternionLite(object, out) {
  object.matrixWorld.decompose(_position, out, _scale);
  return out;
}

// src/lookAt/utils/calcAzimuthAltitude.ts
function calcAzimuthAltitude(vector) {
  return [Math.atan2(-vector.z, vector.x), Math.atan2(vector.y, Math.sqrt(vector.x * vector.x + vector.z * vector.z))];
}

// src/lookAt/utils/sanitizeAngle.ts
function sanitizeAngle(angle) {
  const roundTurn = Math.round(angle / 2 / Math.PI);
  return angle - 2 * Math.PI * roundTurn;
}

// src/lookAt/VRMLookAt.ts
var VEC3_POSITIVE_Z = new THREE13.Vector3(0, 0, 1);
var _v3A5 = new THREE13.Vector3();
var _v3B3 = new THREE13.Vector3();
var _v3C = new THREE13.Vector3();
var _quatA5 = new THREE13.Quaternion();
var _quatB2 = new THREE13.Quaternion();
var _quatC = new THREE13.Quaternion();
var _quatD = new THREE13.Quaternion();
var _eulerA = new THREE13.Euler();
var _VRMLookAt = class _VRMLookAt {
  /**
   * Create a new {@link VRMLookAt}.
   *
   * @param humanoid A {@link VRMHumanoid}
   * @param applier A {@link VRMLookAtApplier}
   */
  constructor(humanoid, applier) {
    // yaw-pitch-roll
    /**
     * The origin of LookAt. Position offset from the head bone.
     */
    this.offsetFromHeadBone = new THREE13.Vector3();
    /**
     * If this is true, the LookAt will be updated automatically by calling {@link update}, towarding the direction to the {@link target}.
     * `true` by default.
     *
     * See also: {@link target}
     */
    this.autoUpdate = true;
    /**
     * The front direction of the face.
     * Intended to be used for VRM 0.0 compat (VRM 0.0 models are facing Z- instead of Z+).
     * You usually don't want to touch this.
     */
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
    return new _VRMLookAt(this.humanoid, this.applier).copy(this);
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

// src/lookAt/VRMLookAtBoneApplier.ts
var THREE14 = __toESM(require("three"), 1);
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
/**
 * Represent its type of applier.
 */
VRMLookAtBoneApplier.type = "bone";

// src/lookAt/VRMLookAtExpressionApplier.ts
var THREE15 = __toESM(require("three"), 1);
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
/**
 * Represent its type of applier.
 */
VRMLookAtExpressionApplier.type = "expression";

// src/lookAt/VRMLookAtRangeMap.ts
var VRMLookAtRangeMap = class {
  /**
   * Create a new {@link VRMLookAtRangeMap}.
   *
   * @param inputMaxValue The {@link inputMaxValue} of the map
   * @param outputScale The {@link outputScale} of the map
   */
  constructor(inputMaxValue, outputScale) {
    this.inputMaxValue = inputMaxValue;
    this.outputScale = outputScale;
  }
  /**
   * Evaluate an input value and output a mapped value.
   * @param src The input value
   */
  map(src) {
    return this.outputScale * saturate(src / this.inputMaxValue);
  }
};

// src/lookAt/VRMLookAtLoaderPlugin.ts
var POSSIBLE_SPEC_VERSIONS4 = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
var INPUT_MAX_VALUE_MINIMUM = 0.01;
var VRMLookAtLoaderPlugin = class {
  get name() {
    return "VRMLookAtLoaderPlugin";
  }
  constructor(parser, options) {
    this.parser = parser;
    this.helperRoot = options == null ? void 0 : options.helperRoot;
  }
  afterRoot(gltf) {
    return __async(this, null, function* () {
      const vrmHumanoid = gltf.userData.vrmHumanoid;
      if (vrmHumanoid === null) {
        return;
      } else if (vrmHumanoid === void 0) {
        throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");
      }
      const vrmExpressionManager = gltf.userData.vrmExpressionManager;
      if (vrmExpressionManager === null) {
        return;
      } else if (vrmExpressionManager === void 0) {
        throw new Error(
          "VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first"
        );
      }
      gltf.userData.vrmLookAt = yield this._import(gltf, vrmHumanoid, vrmExpressionManager);
    });
  }
  /**
   * Import a {@link VRMLookAt} from a VRM.
   *
   * @param gltf A parsed result of GLTF taken from GLTFLoader
   * @param humanoid A {@link VRMHumanoid} instance that represents the VRM
   * @param expressions A {@link VRMExpressionManager} instance that represents the VRM
   */
  _import(gltf, humanoid, expressions) {
    return __async(this, null, function* () {
      if (humanoid == null || expressions == null) {
        return null;
      }
      const v1Result = yield this._v1Import(gltf, humanoid, expressions);
      if (v1Result) {
        return v1Result;
      }
      const v0Result = yield this._v0Import(gltf, humanoid, expressions);
      if (v0Result) {
        return v0Result;
      }
      return null;
    });
  }
  _v1Import(gltf, humanoid, expressions) {
    return __async(this, null, function* () {
      var _a, _b, _c;
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
      if (!POSSIBLE_SPEC_VERSIONS4.has(specVersion)) {
        console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${specVersion}"`);
        return null;
      }
      const schemaLookAt = extension.lookAt;
      if (!schemaLookAt) {
        return null;
      }
      const defaultOutputScale = schemaLookAt.type === "expression" ? 1 : 10;
      const mapHI = this._v1ImportRangeMap(schemaLookAt.rangeMapHorizontalInner, defaultOutputScale);
      const mapHO = this._v1ImportRangeMap(schemaLookAt.rangeMapHorizontalOuter, defaultOutputScale);
      const mapVD = this._v1ImportRangeMap(schemaLookAt.rangeMapVerticalDown, defaultOutputScale);
      const mapVU = this._v1ImportRangeMap(schemaLookAt.rangeMapVerticalUp, defaultOutputScale);
      let applier;
      if (schemaLookAt.type === "expression") {
        applier = new VRMLookAtExpressionApplier(expressions, mapHI, mapHO, mapVD, mapVU);
      } else {
        applier = new VRMLookAtBoneApplier(humanoid, mapHI, mapHO, mapVD, mapVU);
      }
      const lookAt = this._importLookAt(humanoid, applier);
      lookAt.offsetFromHeadBone.fromArray((_c = schemaLookAt.offsetFromHeadBone) != null ? _c : [0, 0.06, 0]);
      return lookAt;
    });
  }
  _v1ImportRangeMap(schemaRangeMap, defaultOutputScale) {
    var _a, _b;
    let inputMaxValue = (_a = schemaRangeMap == null ? void 0 : schemaRangeMap.inputMaxValue) != null ? _a : 90;
    const outputScale = (_b = schemaRangeMap == null ? void 0 : schemaRangeMap.outputScale) != null ? _b : defaultOutputScale;
    if (inputMaxValue < INPUT_MAX_VALUE_MINIMUM) {
      console.warn(
        "VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"
      );
      inputMaxValue = INPUT_MAX_VALUE_MINIMUM;
    }
    return new VRMLookAtRangeMap(inputMaxValue, outputScale);
  }
  _v0Import(gltf, humanoid, expressions) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d;
      const json = this.parser.json;
      const vrmExt = (_a = json.extensions) == null ? void 0 : _a.VRM;
      if (!vrmExt) {
        return null;
      }
      const schemaFirstPerson = vrmExt.firstPerson;
      if (!schemaFirstPerson) {
        return null;
      }
      const defaultOutputScale = schemaFirstPerson.lookAtTypeName === "BlendShape" ? 1 : 10;
      const mapHI = this._v0ImportDegreeMap(schemaFirstPerson.lookAtHorizontalInner, defaultOutputScale);
      const mapHO = this._v0ImportDegreeMap(schemaFirstPerson.lookAtHorizontalOuter, defaultOutputScale);
      const mapVD = this._v0ImportDegreeMap(schemaFirstPerson.lookAtVerticalDown, defaultOutputScale);
      const mapVU = this._v0ImportDegreeMap(schemaFirstPerson.lookAtVerticalUp, defaultOutputScale);
      let applier;
      if (schemaFirstPerson.lookAtTypeName === "BlendShape") {
        applier = new VRMLookAtExpressionApplier(expressions, mapHI, mapHO, mapVD, mapVU);
      } else {
        applier = new VRMLookAtBoneApplier(humanoid, mapHI, mapHO, mapVD, mapVU);
      }
      const lookAt = this._importLookAt(humanoid, applier);
      if (schemaFirstPerson.firstPersonBoneOffset) {
        lookAt.offsetFromHeadBone.set(
          (_b = schemaFirstPerson.firstPersonBoneOffset.x) != null ? _b : 0,
          (_c = schemaFirstPerson.firstPersonBoneOffset.y) != null ? _c : 0.06,
          -((_d = schemaFirstPerson.firstPersonBoneOffset.z) != null ? _d : 0)
        );
      } else {
        lookAt.offsetFromHeadBone.set(0, 0.06, 0);
      }
      lookAt.faceFront.set(0, 0, -1);
      if (applier instanceof VRMLookAtBoneApplier) {
        applier.faceFront.set(0, 0, -1);
      }
      return lookAt;
    });
  }
  _v0ImportDegreeMap(schemaDegreeMap, defaultOutputScale) {
    var _a, _b;
    const curve = schemaDegreeMap == null ? void 0 : schemaDegreeMap.curve;
    if (JSON.stringify(curve) !== "[0,0,0,1,1,1,1,0]") {
      console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");
    }
    let xRange = (_a = schemaDegreeMap == null ? void 0 : schemaDegreeMap.xRange) != null ? _a : 90;
    const yRange = (_b = schemaDegreeMap == null ? void 0 : schemaDegreeMap.yRange) != null ? _b : defaultOutputScale;
    if (xRange < INPUT_MAX_VALUE_MINIMUM) {
      console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!");
      xRange = INPUT_MAX_VALUE_MINIMUM;
    }
    return new VRMLookAtRangeMap(xRange, yRange);
  }
  _importLookAt(humanoid, applier) {
    const lookAt = new VRMLookAt(humanoid, applier);
    if (this.helperRoot) {
      const helper = new VRMLookAtHelper(lookAt);
      this.helperRoot.add(helper);
      helper.renderOrder = this.helperRoot.renderOrder;
    }
    return lookAt;
  }
};

// src/lookAt/VRMLookAtTypeName.ts
var VRMLookAtTypeName = {
  Bone: "bone",
  Expression: "expression"
};

// src/meta/VRMMetaLoaderPlugin.ts
var THREE16 = __toESM(require("three"), 1);

// src/utils/resolveURL.ts
function resolveURL(url, path) {
  if (typeof url !== "string" || url === "") return "";
  if (/^https?:\/\//i.test(path) && /^\//.test(url)) {
    path = path.replace(/(^https?:\/\/[^/]+).*/i, "$1");
  }
  if (/^(https?:)?\/\//i.test(url)) return url;
  if (/^data:.*,.*$/i.test(url)) return url;
  if (/^blob:.*$/i.test(url)) return url;
  return path + url;
}

// src/meta/VRMMetaLoaderPlugin.ts
var POSSIBLE_SPEC_VERSIONS5 = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
var VRMMetaLoaderPlugin = class {
  get name() {
    return "VRMMetaLoaderPlugin";
  }
  constructor(parser, options) {
    var _a, _b, _c;
    this.parser = parser;
    this.needThumbnailImage = (_a = options == null ? void 0 : options.needThumbnailImage) != null ? _a : false;
    this.acceptLicenseUrls = (_b = options == null ? void 0 : options.acceptLicenseUrls) != null ? _b : ["https://vrm.dev/licenses/1.0/"];
    this.acceptV0Meta = (_c = options == null ? void 0 : options.acceptV0Meta) != null ? _c : true;
  }
  afterRoot(gltf) {
    return __async(this, null, function* () {
      gltf.userData.vrmMeta = yield this._import(gltf);
    });
  }
  _import(gltf) {
    return __async(this, null, function* () {
      const v1Result = yield this._v1Import(gltf);
      if (v1Result != null) {
        return v1Result;
      }
      const v0Result = yield this._v0Import(gltf);
      if (v0Result != null) {
        return v0Result;
      }
      return null;
    });
  }
  _v1Import(gltf) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const json = this.parser.json;
      const isVRMUsed = ((_a = json.extensionsUsed) == null ? void 0 : _a.indexOf("VRMC_vrm")) !== -1;
      if (!isVRMUsed) {
        return null;
      }
      const extension = (_b = json.extensions) == null ? void 0 : _b["VRMC_vrm"];
      if (extension == null) {
        return null;
      }
      const specVersion = extension.specVersion;
      if (!POSSIBLE_SPEC_VERSIONS5.has(specVersion)) {
        console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${specVersion}"`);
        return null;
      }
      const schemaMeta = extension.meta;
      if (!schemaMeta) {
        return null;
      }
      const licenseUrl = schemaMeta.licenseUrl;
      const acceptLicenseUrlsSet = new Set(this.acceptLicenseUrls);
      if (!acceptLicenseUrlsSet.has(licenseUrl)) {
        throw new Error(`VRMMetaLoaderPlugin: The license url "${licenseUrl}" is not accepted`);
      }
      let thumbnailImage = void 0;
      if (this.needThumbnailImage && schemaMeta.thumbnailImage != null) {
        thumbnailImage = (_c = yield this._extractGLTFImage(schemaMeta.thumbnailImage)) != null ? _c : void 0;
      }
      return {
        metaVersion: "1",
        name: schemaMeta.name,
        version: schemaMeta.version,
        authors: schemaMeta.authors,
        copyrightInformation: schemaMeta.copyrightInformation,
        contactInformation: schemaMeta.contactInformation,
        references: schemaMeta.references,
        thirdPartyLicenses: schemaMeta.thirdPartyLicenses,
        thumbnailImage,
        licenseUrl: schemaMeta.licenseUrl,
        avatarPermission: schemaMeta.avatarPermission,
        allowExcessivelyViolentUsage: schemaMeta.allowExcessivelyViolentUsage,
        allowExcessivelySexualUsage: schemaMeta.allowExcessivelySexualUsage,
        commercialUsage: schemaMeta.commercialUsage,
        allowPoliticalOrReligiousUsage: schemaMeta.allowPoliticalOrReligiousUsage,
        allowAntisocialOrHateUsage: schemaMeta.allowAntisocialOrHateUsage,
        creditNotation: schemaMeta.creditNotation,
        allowRedistribution: schemaMeta.allowRedistribution,
        modification: schemaMeta.modification,
        otherLicenseUrl: schemaMeta.otherLicenseUrl
      };
    });
  }
  _v0Import(gltf) {
    return __async(this, null, function* () {
      var _a;
      const json = this.parser.json;
      const vrmExt = (_a = json.extensions) == null ? void 0 : _a.VRM;
      if (!vrmExt) {
        return null;
      }
      const schemaMeta = vrmExt.meta;
      if (!schemaMeta) {
        return null;
      }
      if (!this.acceptV0Meta) {
        throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");
      }
      let texture;
      if (this.needThumbnailImage && schemaMeta.texture != null && schemaMeta.texture !== -1) {
        texture = yield this.parser.getDependency("texture", schemaMeta.texture);
      }
      return {
        metaVersion: "0",
        allowedUserName: schemaMeta.allowedUserName,
        author: schemaMeta.author,
        commercialUssageName: schemaMeta.commercialUssageName,
        contactInformation: schemaMeta.contactInformation,
        licenseName: schemaMeta.licenseName,
        otherLicenseUrl: schemaMeta.otherLicenseUrl,
        otherPermissionUrl: schemaMeta.otherPermissionUrl,
        reference: schemaMeta.reference,
        sexualUssageName: schemaMeta.sexualUssageName,
        texture: texture != null ? texture : void 0,
        title: schemaMeta.title,
        version: schemaMeta.version,
        violentUssageName: schemaMeta.violentUssageName
      };
    });
  }
  _extractGLTFImage(index) {
    return __async(this, null, function* () {
      var _a;
      const json = this.parser.json;
      const source = (_a = json.images) == null ? void 0 : _a[index];
      if (source == null) {
        console.warn(
          `VRMMetaLoaderPlugin: Attempt to use images[${index}] of glTF as a thumbnail but the image doesn't exist`
        );
        return null;
      }
      let sourceURI = source.uri;
      if (source.bufferView != null) {
        const bufferView = yield this.parser.getDependency("bufferView", source.bufferView);
        const blob = new Blob([bufferView], { type: source.mimeType });
        sourceURI = URL.createObjectURL(blob);
      }
      if (sourceURI == null) {
        console.warn(
          `VRMMetaLoaderPlugin: Attempt to use images[${index}] of glTF as a thumbnail but the image couldn't load properly`
        );
        return null;
      }
      const loader = new THREE16.ImageLoader();
      return yield loader.loadAsync(resolveURL(sourceURI, this.parser.options.path)).catch((error) => {
        console.error(error);
        console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image");
        return null;
      });
    });
  }
};

// src/VRMCore.ts
var VRMCore = class {
  /**
   * Create a new VRM instance.
   *
   * @param params [[VRMParameters]] that represents components of the VRM
   */
  constructor(params) {
    this.scene = params.scene;
    this.meta = params.meta;
    this.humanoid = params.humanoid;
    this.expressionManager = params.expressionManager;
    this.firstPerson = params.firstPerson;
    this.lookAt = params.lookAt;
  }
  /**
   * **You need to call this on your update loop.**
   *
   * This function updates every VRM components.
   *
   * @param delta deltaTime
   */
  update(delta) {
    this.humanoid.update();
    if (this.lookAt) {
      this.lookAt.update(delta);
    }
    if (this.expressionManager) {
      this.expressionManager.update();
    }
  }
};

// src/VRMCoreLoaderPlugin.ts
var VRMCoreLoaderPlugin = class {
  get name() {
    return "VRMC_vrm";
  }
  constructor(parser, options) {
    var _a, _b, _c, _d, _e;
    this.parser = parser;
    const helperRoot = options == null ? void 0 : options.helperRoot;
    const autoUpdateHumanBones = options == null ? void 0 : options.autoUpdateHumanBones;
    this.expressionPlugin = (_a = options == null ? void 0 : options.expressionPlugin) != null ? _a : new VRMExpressionLoaderPlugin(parser);
    this.firstPersonPlugin = (_b = options == null ? void 0 : options.firstPersonPlugin) != null ? _b : new VRMFirstPersonLoaderPlugin(parser);
    this.humanoidPlugin = (_c = options == null ? void 0 : options.humanoidPlugin) != null ? _c : new VRMHumanoidLoaderPlugin(parser, { helperRoot, autoUpdateHumanBones });
    this.lookAtPlugin = (_d = options == null ? void 0 : options.lookAtPlugin) != null ? _d : new VRMLookAtLoaderPlugin(parser, { helperRoot });
    this.metaPlugin = (_e = options == null ? void 0 : options.metaPlugin) != null ? _e : new VRMMetaLoaderPlugin(parser);
  }
  afterRoot(gltf) {
    return __async(this, null, function* () {
      yield this.metaPlugin.afterRoot(gltf);
      yield this.humanoidPlugin.afterRoot(gltf);
      yield this.expressionPlugin.afterRoot(gltf);
      yield this.lookAtPlugin.afterRoot(gltf);
      yield this.firstPersonPlugin.afterRoot(gltf);
      const meta = gltf.userData.vrmMeta;
      const humanoid = gltf.userData.vrmHumanoid;
      if (meta && humanoid) {
        const vrmCore = new VRMCore({
          scene: gltf.scene,
          expressionManager: gltf.userData.vrmExpressionManager,
          firstPerson: gltf.userData.vrmFirstPerson,
          humanoid,
          lookAt: gltf.userData.vrmLookAt,
          meta
        });
        gltf.userData.vrmCore = vrmCore;
      }
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIiwgIi4uL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uLnRzIiwgIi4uL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luLnRzIiwgIi4uL3NyYy91dGlscy9nbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZS50cyIsICIuLi9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvblByZXNldE5hbWUudHMiLCAiLi4vc3JjL3V0aWxzL3NhdHVyYXRlLnRzIiwgIi4uL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTWFuYWdlci50cyIsICIuLi9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlLnRzIiwgIi4uL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQudHMiLCAiLi4vc3JjL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25Nb3JwaFRhcmdldEJpbmQudHMiLCAiLi4vc3JjL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZC50cyIsICIuLi9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZS50cyIsICIuLi9zcmMvZmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb24udHMiLCAiLi4vc3JjL2ZpcnN0UGVyc29uL1ZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luLnRzIiwgIi4uL3NyYy9maXJzdFBlcnNvbi9WUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZS50cyIsICIuLi9zcmMvaHVtYW5vaWQvaGVscGVycy9WUk1IdW1hbm9pZEhlbHBlci50cyIsICIuLi9zcmMvaHVtYW5vaWQvVlJNSHVtYW5Cb25lTGlzdC50cyIsICIuLi9zcmMvaHVtYW5vaWQvVlJNSHVtYW5Cb25lTmFtZS50cyIsICIuLi9zcmMvaHVtYW5vaWQvVlJNSHVtYW5Cb25lUGFyZW50TWFwLnRzIiwgIi4uL3NyYy9odW1hbm9pZC9WUk1SaWcudHMiLCAiLi4vc3JjL3V0aWxzL3F1YXRJbnZlcnRDb21wYXQudHMiLCAiLi4vc3JjL2h1bWFub2lkL1ZSTUh1bWFub2lkUmlnLnRzIiwgIi4uL3NyYy9odW1hbm9pZC9WUk1IdW1hbm9pZC50cyIsICIuLi9zcmMvaHVtYW5vaWQvVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lLnRzIiwgIi4uL3NyYy9odW1hbm9pZC9WUk1IdW1hbm9pZExvYWRlclBsdWdpbi50cyIsICIuLi9zcmMvbG9va0F0L2hlbHBlcnMvVlJNTG9va0F0SGVscGVyLnRzIiwgIi4uL3NyYy9sb29rQXQvaGVscGVycy91dGlscy9GYW5CdWZmZXJHZW9tZXRyeS50cyIsICIuLi9zcmMvbG9va0F0L2hlbHBlcnMvdXRpbHMvTGluZUFuZFNwaGVyZUJ1ZmZlckdlb21ldHJ5LnRzIiwgIi4uL3NyYy9sb29rQXQvVlJNTG9va0F0LnRzIiwgIi4uL3NyYy91dGlscy9nZXRXb3JsZFF1YXRlcm5pb25MaXRlLnRzIiwgIi4uL3NyYy9sb29rQXQvdXRpbHMvY2FsY0F6aW11dGhBbHRpdHVkZS50cyIsICIuLi9zcmMvbG9va0F0L3V0aWxzL3Nhbml0aXplQW5nbGUudHMiLCAiLi4vc3JjL2xvb2tBdC9WUk1Mb29rQXRCb25lQXBwbGllci50cyIsICIuLi9zcmMvbG9va0F0L1ZSTUxvb2tBdEV4cHJlc3Npb25BcHBsaWVyLnRzIiwgIi4uL3NyYy9sb29rQXQvVlJNTG9va0F0UmFuZ2VNYXAudHMiLCAiLi4vc3JjL2xvb2tBdC9WUk1Mb29rQXRMb2FkZXJQbHVnaW4udHMiLCAiLi4vc3JjL2xvb2tBdC9WUk1Mb29rQXRUeXBlTmFtZS50cyIsICIuLi9zcmMvbWV0YS9WUk1NZXRhTG9hZGVyUGx1Z2luLnRzIiwgIi4uL3NyYy91dGlscy9yZXNvbHZlVVJMLnRzIiwgIi4uL3NyYy9WUk1Db3JlLnRzIiwgIi4uL3NyYy9WUk1Db3JlTG9hZGVyUGx1Z2luLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb25zJztcbmV4cG9ydCAqIGZyb20gJy4vZmlyc3RQZXJzb24nO1xuZXhwb3J0ICogZnJvbSAnLi9odW1hbm9pZCc7XG5leHBvcnQgKiBmcm9tICcuL2xvb2tBdCc7XG5leHBvcnQgKiBmcm9tICcuL21ldGEnO1xuXG5leHBvcnQgeyBWUk1Db3JlIH0gZnJvbSAnLi9WUk1Db3JlJztcbmV4cG9ydCB7IFZSTUNvcmVMb2FkZXJQbHVnaW4gfSBmcm9tICcuL1ZSTUNvcmVMb2FkZXJQbHVnaW4nO1xuZXhwb3J0IHR5cGUgeyBWUk1Db3JlTG9hZGVyUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vVlJNQ29yZUxvYWRlclBsdWdpbk9wdGlvbnMnO1xuZXhwb3J0IHR5cGUgeyBWUk1Db3JlUGFyYW1ldGVycyB9IGZyb20gJy4vVlJNQ29yZVBhcmFtZXRlcnMnO1xuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb25CaW5kIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uQmluZCc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25PdmVycmlkZVR5cGUgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25PdmVycmlkZVR5cGUnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uTWFuYWdlciB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbk1hbmFnZXInO1xuXG4vLyBhbmltYXRpb25NaXhlciBcdTMwNkVcdTc2RTNcdTg5OTZcdTVCRkVcdThDNjFcdTMwNkZcdTMwMDFTY2VuZSBcdTMwNkVcdTRFMkRcdTMwNkJcdTUxNjVcdTMwNjNcdTMwNjZcdTMwNDRcdTMwOEJcdTVGQzVcdTg5ODFcdTMwNENcdTMwNDJcdTMwOEJcdTMwMDJcbi8vIFx1MzA1RFx1MzA2RVx1MzA1Rlx1MzA4MVx1MzAwMVx1ODg2OFx1NzkzQVx1MzBBQVx1MzBENlx1MzBCOFx1MzBBN1x1MzBBRlx1MzBDOFx1MzA2N1x1MzA2Rlx1MzA2QVx1MzA0NFx1MzA1MVx1MzA4Q1x1MzA2OVx1MzAwMU9iamVjdDNEIFx1MzA5Mlx1N0Q5OVx1NjI3Rlx1MzA1N1x1MzA2NiBTY2VuZSBcdTMwNkJcdTYyOTVcdTUxNjVcdTMwNjdcdTMwNERcdTMwOEJcdTMwODhcdTMwNDZcdTMwNkJcdTMwNTlcdTMwOEJcdTMwMDJcbmV4cG9ydCBjbGFzcyBWUk1FeHByZXNzaW9uIGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGlzIGV4cHJlc3Npb24uXG4gICAqIERpc3Rpbmd1aXNoZWQgd2l0aCBgbmFtZWAgc2luY2UgYG5hbWVgIHdpbGwgYmUgY29uZmxpY3RlZCB3aXRoIE9iamVjdDNELlxuICAgKi9cbiAgcHVibGljIGV4cHJlc3Npb25OYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHdlaWdodCBvZiB0aGUgZXhwcmVzc2lvbi5cbiAgICpcbiAgICogWW91IHVzdWFsbHkgd2FudCB0byBzZXQgdGhlIHdlaWdodCB2aWEge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyLnNldFZhbHVlfS5cbiAgICpcbiAgICogSXQgbWlnaHQgYWxzbyBiZSBjb250cm9sbGVkIGJ5IHRoZSBUaHJlZS5qcyBhbmltYXRpb24gc3lzdGVtLlxuICAgKi9cbiAgcHVibGljIHdlaWdodCA9IDAuMDtcblxuICAvKipcbiAgICogSW50ZXJwcmV0IHZhbHVlcyBncmVhdGVyIHRoYW4gMC41IGFzIDEuMCwgb3J0aGVyd2lzZSAwLjAuXG4gICAqL1xuICBwdWJsaWMgaXNCaW5hcnkgPSBmYWxzZTtcblxuICAvKipcbiAgICogU3BlY2lmeSBob3cgdGhlIGV4cHJlc3Npb24gb3ZlcnJpZGVzIGJsaW5rIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIG92ZXJyaWRlQmxpbms6IFZSTUV4cHJlc3Npb25PdmVycmlkZVR5cGUgPSAnbm9uZSc7XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgaG93IHRoZSBleHByZXNzaW9uIG92ZXJyaWRlcyBsb29rQXQgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgb3ZlcnJpZGVMb29rQXQ6IFZSTUV4cHJlc3Npb25PdmVycmlkZVR5cGUgPSAnbm9uZSc7XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgaG93IHRoZSBleHByZXNzaW9uIG92ZXJyaWRlcyBtb3V0aCBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBvdmVycmlkZU1vdXRoOiBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlID0gJ25vbmUnO1xuXG4gIHByaXZhdGUgX2JpbmRzOiBWUk1FeHByZXNzaW9uQmluZFtdID0gW107XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdHlwZTogc3RyaW5nIHwgJ1ZSTUV4cHJlc3Npb24nO1xuXG4gIC8qKlxuICAgKiBBIHZhbHVlIHJlcHJlc2VudHMgaG93IG11Y2ggaXQgc2hvdWxkIG92ZXJyaWRlIGJsaW5rIGV4cHJlc3Npb25zLlxuICAgKiBgMC4wYCA9PSBubyBvdmVycmlkZSBhdCBhbGwsIGAxLjBgID09IGNvbXBsZXRlbHkgYmxvY2sgdGhlIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIGdldCBvdmVycmlkZUJsaW5rQW1vdW50KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMub3ZlcnJpZGVCbGluayA9PT0gJ2Jsb2NrJykge1xuICAgICAgcmV0dXJuIDAuMCA8IHRoaXMub3V0cHV0V2VpZ2h0ID8gMS4wIDogMC4wO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vdmVycmlkZUJsaW5rID09PSAnYmxlbmQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5vdXRwdXRXZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwLjA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgdmFsdWUgcmVwcmVzZW50cyBob3cgbXVjaCBpdCBzaG91bGQgb3ZlcnJpZGUgbG9va0F0IGV4cHJlc3Npb25zLlxuICAgKiBgMC4wYCA9PSBubyBvdmVycmlkZSBhdCBhbGwsIGAxLjBgID09IGNvbXBsZXRlbHkgYmxvY2sgdGhlIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIGdldCBvdmVycmlkZUxvb2tBdEFtb3VudCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLm92ZXJyaWRlTG9va0F0ID09PSAnYmxvY2snKSB7XG4gICAgICByZXR1cm4gMC4wIDwgdGhpcy5vdXRwdXRXZWlnaHQgPyAxLjAgOiAwLjA7XG4gICAgfSBlbHNlIGlmICh0aGlzLm92ZXJyaWRlTG9va0F0ID09PSAnYmxlbmQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5vdXRwdXRXZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwLjA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgdmFsdWUgcmVwcmVzZW50cyBob3cgbXVjaCBpdCBzaG91bGQgb3ZlcnJpZGUgbW91dGggZXhwcmVzc2lvbnMuXG4gICAqIGAwLjBgID09IG5vIG92ZXJyaWRlIGF0IGFsbCwgYDEuMGAgPT0gY29tcGxldGVseSBibG9jayB0aGUgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG92ZXJyaWRlTW91dGhBbW91bnQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5vdmVycmlkZU1vdXRoID09PSAnYmxvY2snKSB7XG4gICAgICByZXR1cm4gMC4wIDwgdGhpcy5vdXRwdXRXZWlnaHQgPyAxLjAgOiAwLjA7XG4gICAgfSBlbHNlIGlmICh0aGlzLm92ZXJyaWRlTW91dGggPT09ICdibGVuZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm91dHB1dFdlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDAuMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQW4gb3V0cHV0IHdlaWdodCBvZiB0aGlzIGV4cHJlc3Npb24sIGNvbnNpZGVyaW5nIHRoZSB7QGxpbmsgaXNCaW5hcnl9LlxuICAgKi9cbiAgcHVibGljIGdldCBvdXRwdXRXZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5pc0JpbmFyeSkge1xuICAgICAgcmV0dXJuIHRoaXMud2VpZ2h0ID4gMC41ID8gMS4wIDogMC4wO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLndlaWdodDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb25OYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5uYW1lID0gYFZSTUV4cHJlc3Npb25fJHtleHByZXNzaW9uTmFtZX1gO1xuICAgIHRoaXMuZXhwcmVzc2lvbk5hbWUgPSBleHByZXNzaW9uTmFtZTtcblxuICAgIC8vIHRyYXZlcnNlIFx1NjY0Mlx1MzA2RVx1NjU1MVx1NkUwOFx1NjI0Qlx1NkJCNVx1MzA2OFx1MzA1N1x1MzA2NiBPYmplY3QzRCBcdTMwNjdcdTMwNkZcdTMwNkFcdTMwNDRcdTMwNTNcdTMwNjhcdTMwOTJcdTY2MEVcdTc5M0FcdTMwNTdcdTMwNjZcdTMwNEFcdTMwNEZcbiAgICB0aGlzLnR5cGUgPSAnVlJNRXhwcmVzc2lvbic7XG5cbiAgICAvLyBcdTg4NjhcdTc5M0FcdTc2RUVcdTc2ODRcdTMwNkVcdTMwQUFcdTMwRDZcdTMwQjhcdTMwQTdcdTMwQUZcdTMwQzhcdTMwNjdcdTMwNkZcdTMwNkFcdTMwNDRcdTMwNkVcdTMwNjdcdTMwMDFcdThDQTBcdTgzNzdcdThFRkRcdTZFMUJcdTMwNkVcdTMwNUZcdTMwODFcdTMwNkIgdmlzaWJsZSBcdTMwOTIgZmFsc2UgXHUzMDZCXHUzMDU3XHUzMDY2XHUzMDRBXHUzMDRGXHUzMDAyXG4gICAgLy8gXHUzMDUzXHUzMDhDXHUzMDZCXHUzMDg4XHUzMDhBXHUzMDAxXHUzMDUzXHUzMDZFXHUzMEE0XHUzMEYzXHUzMEI5XHUzMEJGXHUzMEYzXHUzMEI5XHUzMDZCXHU1QkZFXHUzMDU5XHUzMDhCXHU2QkNFXHUzMEQ1XHUzMEVDXHUzMEZDXHUzMEUwXHUzMDZFIG1hdHJpeCBcdTgxRUFcdTUyRDVcdThBMDhcdTdCOTdcdTMwOTJcdTc3MDFcdTc1NjVcdTMwNjdcdTMwNERcdTMwOEJcdTMwMDJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRCaW5kKGJpbmQ6IFZSTUV4cHJlc3Npb25CaW5kKTogdm9pZCB7XG4gICAgdGhpcy5fYmluZHMucHVzaChiaW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB3ZWlnaHQgdG8gZXZlcnkgYXNzaWduZWQgYmxlbmQgc2hhcGVzLlxuICAgKiBTaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IGZyYW1lLlxuICAgKi9cbiAgcHVibGljIGFwcGx5V2VpZ2h0KG9wdGlvbnM/OiB7XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIHZhbHVlIHRvIGl0cyB3ZWlnaHQgdG8gYXBwbHkuXG4gICAgICogSW50ZW5kZWQgdG8gYmUgdXNlZCBmb3Igb3ZlcnJpZGluZyBhbiBleHByZXNzaW9uIHdlaWdodCBieSBhbm90aGVyIGV4cHJlc3Npb24uXG4gICAgICogU2VlIGFsc286IHtAbGluayBvdmVycmlkZUJsaW5rfSwge0BsaW5rIG92ZXJyaWRlTG9va0F0fSwge0BsaW5rIG92ZXJyaWRlTW91dGh9XG4gICAgICovXG4gICAgbXVsdGlwbGllcj86IG51bWJlcjtcbiAgfSk6IHZvaWQge1xuICAgIGxldCBhY3R1YWxXZWlnaHQgPSB0aGlzLm91dHB1dFdlaWdodDtcbiAgICBhY3R1YWxXZWlnaHQgKj0gb3B0aW9ucz8ubXVsdGlwbGllciA/PyAxLjA7XG5cbiAgICAvLyBpZiB0aGUgZXhwcmVzc2lvbiBpcyBiaW5hcnksIHRoZSBvdmVycmlkZSB2YWx1ZSBtdXN0IGJlIGFsc28gdHJlYXRlZCBhcyBiaW5hcnlcbiAgICBpZiAodGhpcy5pc0JpbmFyeSAmJiBhY3R1YWxXZWlnaHQgPCAxLjApIHtcbiAgICAgIGFjdHVhbFdlaWdodCA9IDAuMDtcbiAgICB9XG5cbiAgICB0aGlzLl9iaW5kcy5mb3JFYWNoKChiaW5kKSA9PiBiaW5kLmFwcGx5V2VpZ2h0KGFjdHVhbFdlaWdodCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHByZXZpb3VzbHkgYXNzaWduZWQgYmxlbmQgc2hhcGVzLlxuICAgKi9cbiAgcHVibGljIGNsZWFyQXBwbGllZFdlaWdodCgpOiB2b2lkIHtcbiAgICB0aGlzLl9iaW5kcy5mb3JFYWNoKChiaW5kKSA9PiBiaW5kLmNsZWFyQXBwbGllZFdlaWdodCgpKTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlICogYXMgVjBWUk0gZnJvbSAnQHBpeGl2L3R5cGVzLXZybS0wLjAnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMVZSTVNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy12cm0tMS4wJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IEdMVEYsIEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlIH0gZnJvbSAnLi4vdXRpbHMvZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbiB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbic7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uTWFuYWdlciB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHsgdjBFeHByZXNzaW9uTWF0ZXJpYWxDb2xvck1hcCB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JCaW5kJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb25Nb3JwaFRhcmdldEJpbmQgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25Nb3JwaFRhcmdldEJpbmQnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvblByZXNldE5hbWUgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25QcmVzZXROYW1lJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZCB9IGZyb20gJy4vVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kJztcbmltcG9ydCB7IEdMVEYgYXMgR0xURlNjaGVtYSB9IGZyb20gJ0BnbHRmLXRyYW5zZm9ybS9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBzcGVjIHZlcnNpb25zIGl0IHJlY29nbml6ZXMuXG4gKi9cbmNvbnN0IFBPU1NJQkxFX1NQRUNfVkVSU0lPTlMgPSBuZXcgU2V0KFsnMS4wJywgJzEuMC1iZXRhJ10pO1xuXG4vKipcbiAqIEEgcGx1Z2luIG9mIEdMVEZMb2FkZXIgdGhhdCBpbXBvcnRzIGEge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfSBmcm9tIGEgVlJNIGV4dGVuc2lvbiBvZiBhIEdMVEYuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luIGltcGxlbWVudHMgR0xURkxvYWRlclBsdWdpbiB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdjB2MVByZXNldE5hbWVNYXA6IHsgW3YwTmFtZSBpbiBWMFZSTS5CbGVuZFNoYXBlUHJlc2V0TmFtZV0/OiBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSB9ID0ge1xuICAgIGE6ICdhYScsXG4gICAgZTogJ2VlJyxcbiAgICBpOiAnaWgnLFxuICAgIG86ICdvaCcsXG4gICAgdTogJ291JyxcbiAgICBibGluazogJ2JsaW5rJyxcbiAgICBqb3k6ICdoYXBweScsXG4gICAgYW5ncnk6ICdhbmdyeScsXG4gICAgc29ycm93OiAnc2FkJyxcbiAgICBmdW46ICdyZWxheGVkJyxcbiAgICBsb29rdXA6ICdsb29rVXAnLFxuICAgIGxvb2tkb3duOiAnbG9va0Rvd24nLFxuICAgIGxvb2tsZWZ0OiAnbG9va0xlZnQnLFxuICAgIGxvb2tyaWdodDogJ2xvb2tSaWdodCcsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICAgIGJsaW5rX2w6ICdibGlua0xlZnQnLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgICBibGlua19yOiAnYmxpbmtSaWdodCcsXG4gICAgbmV1dHJhbDogJ25ldXRyYWwnLFxuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICByZXR1cm4gJ1ZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4nO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFmdGVyUm9vdChnbHRmOiBHTFRGKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZ2x0Zi51c2VyRGF0YS52cm1FeHByZXNzaW9uTWFuYWdlciA9IGF3YWl0IHRoaXMuX2ltcG9ydChnbHRmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgYSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9IGZyb20gYSBWUk0uXG4gICAqXG4gICAqIEBwYXJhbSBnbHRmIEEgcGFyc2VkIHJlc3VsdCBvZiBHTFRGIHRha2VuIGZyb20gR0xURkxvYWRlclxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfaW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTUV4cHJlc3Npb25NYW5hZ2VyIHwgbnVsbD4ge1xuICAgIGNvbnN0IHYxUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjFJbXBvcnQoZ2x0Zik7XG4gICAgaWYgKHYxUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjFSZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdjBSZXN1bHQgPSBhd2FpdCB0aGlzLl92MEltcG9ydChnbHRmKTtcbiAgICBpZiAodjBSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MFJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YxSW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTUV4cHJlc3Npb25NYW5hZ2VyIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSB2cm1cbiAgICBjb25zdCBpc1ZSTVVzZWQgPSBqc29uLmV4dGVuc2lvbnNVc2VkPy5pbmRleE9mKCdWUk1DX3ZybScpICE9PSAtMTtcbiAgICBpZiAoIWlzVlJNVXNlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ZW5zaW9uID0ganNvbi5leHRlbnNpb25zPy5bJ1ZSTUNfdnJtJ10gYXMgVjFWUk1TY2hlbWEuVlJNQ1ZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIWV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlY1ZlcnNpb24gPSBleHRlbnNpb24uc3BlY1ZlcnNpb247XG4gICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TLmhhcyhzcGVjVmVyc2lvbikpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogVW5rbm93biBWUk1DX3ZybSBzcGVjVmVyc2lvbiBcIiR7c3BlY1ZlcnNpb259XCJgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYUV4cHJlc3Npb25zID0gZXh0ZW5zaW9uLmV4cHJlc3Npb25zO1xuICAgIGlmICghc2NoZW1hRXhwcmVzc2lvbnMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGxpc3QgZXhwcmVzc2lvbnNcbiAgICBjb25zdCBwcmVzZXROYW1lU2V0ID0gbmV3IFNldDxzdHJpbmc+KE9iamVjdC52YWx1ZXMoVlJNRXhwcmVzc2lvblByZXNldE5hbWUpKTtcbiAgICBjb25zdCBuYW1lU2NoZW1hRXhwcmVzc2lvbk1hcCA9IG5ldyBNYXA8c3RyaW5nLCBWMVZSTVNjaGVtYS5FeHByZXNzaW9uPigpO1xuXG4gICAgaWYgKHNjaGVtYUV4cHJlc3Npb25zLnByZXNldCAhPSBudWxsKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhzY2hlbWFFeHByZXNzaW9ucy5wcmVzZXQpLmZvckVhY2goKFtuYW1lLCBzY2hlbWFFeHByZXNzaW9uXSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hRXhwcmVzc2lvbiA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIHR5cGVzY3JpcHRcblxuICAgICAgICBpZiAoIXByZXNldE5hbWVTZXQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiBVbmtub3duIHByZXNldCBuYW1lIFwiJHtuYW1lfVwiIGRldGVjdGVkLiBJZ25vcmluZyB0aGUgZXhwcmVzc2lvbmApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWVTY2hlbWFFeHByZXNzaW9uTWFwLnNldChuYW1lLCBzY2hlbWFFeHByZXNzaW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzY2hlbWFFeHByZXNzaW9ucy5jdXN0b20gIT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmVudHJpZXMoc2NoZW1hRXhwcmVzc2lvbnMuY3VzdG9tKS5mb3JFYWNoKChbbmFtZSwgc2NoZW1hRXhwcmVzc2lvbl0pID0+IHtcbiAgICAgICAgaWYgKHByZXNldE5hbWVTZXQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46IEN1c3RvbSBleHByZXNzaW9uIGNhbm5vdCBoYXZlIHByZXNldCBuYW1lIFwiJHtuYW1lfVwiLiBJZ25vcmluZyB0aGUgZXhwcmVzc2lvbmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lU2NoZW1hRXhwcmVzc2lvbk1hcC5zZXQobmFtZSwgc2NoZW1hRXhwcmVzc2lvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBwcmVwYXJlIG1hbmFnZXJcbiAgICBjb25zdCBtYW5hZ2VyID0gbmV3IFZSTUV4cHJlc3Npb25NYW5hZ2VyKCk7XG5cbiAgICAvLyBsb2FkIGV4cHJlc3Npb25zXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBBcnJheS5mcm9tKG5hbWVTY2hlbWFFeHByZXNzaW9uTWFwLmVudHJpZXMoKSkubWFwKGFzeW5jIChbbmFtZSwgc2NoZW1hRXhwcmVzc2lvbl0pID0+IHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IG5ldyBWUk1FeHByZXNzaW9uKG5hbWUpO1xuICAgICAgICBnbHRmLnNjZW5lLmFkZChleHByZXNzaW9uKTtcblxuICAgICAgICBleHByZXNzaW9uLmlzQmluYXJ5ID0gc2NoZW1hRXhwcmVzc2lvbi5pc0JpbmFyeSA/PyBmYWxzZTtcbiAgICAgICAgZXhwcmVzc2lvbi5vdmVycmlkZUJsaW5rID0gc2NoZW1hRXhwcmVzc2lvbi5vdmVycmlkZUJsaW5rID8/ICdub25lJztcbiAgICAgICAgZXhwcmVzc2lvbi5vdmVycmlkZUxvb2tBdCA9IHNjaGVtYUV4cHJlc3Npb24ub3ZlcnJpZGVMb29rQXQgPz8gJ25vbmUnO1xuICAgICAgICBleHByZXNzaW9uLm92ZXJyaWRlTW91dGggPSBzY2hlbWFFeHByZXNzaW9uLm92ZXJyaWRlTW91dGggPz8gJ25vbmUnO1xuXG4gICAgICAgIHNjaGVtYUV4cHJlc3Npb24ubW9ycGhUYXJnZXRCaW5kcz8uZm9yRWFjaChhc3luYyAoYmluZCkgPT4ge1xuICAgICAgICAgIGlmIChiaW5kLm5vZGUgPT09IHVuZGVmaW5lZCB8fCBiaW5kLmluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwcmltaXRpdmVzID0gKGF3YWl0IGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlKGdsdGYsIGJpbmQubm9kZSkpITtcbiAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldEluZGV4ID0gYmluZC5pbmRleDtcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBtZXNoIGhhcyB0aGUgdGFyZ2V0IG1vcnBoIHRhcmdldFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFwcmltaXRpdmVzLmV2ZXJ5KFxuICAgICAgICAgICAgICAocHJpbWl0aXZlKSA9PlxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJpbWl0aXZlLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcykgJiZcbiAgICAgICAgICAgICAgICBtb3JwaFRhcmdldEluZGV4IDwgcHJpbWl0aXZlLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcy5sZW5ndGgsXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiAke3NjaGVtYUV4cHJlc3Npb24ubmFtZX0gYXR0ZW1wdHMgdG8gaW5kZXggbW9ycGggIyR7bW9ycGhUYXJnZXRJbmRleH0gYnV0IG5vdCBmb3VuZC5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQoXG4gICAgICAgICAgICBuZXcgVlJNRXhwcmVzc2lvbk1vcnBoVGFyZ2V0QmluZCh7XG4gICAgICAgICAgICAgIHByaW1pdGl2ZXMsXG4gICAgICAgICAgICAgIGluZGV4OiBtb3JwaFRhcmdldEluZGV4LFxuICAgICAgICAgICAgICB3ZWlnaHQ6IGJpbmQud2VpZ2h0ID8/IDEuMCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzY2hlbWFFeHByZXNzaW9uLm1hdGVyaWFsQ29sb3JCaW5kcyB8fCBzY2hlbWFFeHByZXNzaW9uLnRleHR1cmVUcmFuc2Zvcm1CaW5kcykge1xuICAgICAgICAgIC8vIGxpc3QgdXAgZXZlcnkgbWF0ZXJpYWwgaW4gYGdsdGYuc2NlbmVgXG4gICAgICAgICAgY29uc3QgZ2x0Zk1hdGVyaWFsczogVEhSRUUuTWF0ZXJpYWxbXSA9IFtdO1xuICAgICAgICAgIGdsdGYuc2NlbmUudHJhdmVyc2UoKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSAob2JqZWN0IGFzIGFueSkubWF0ZXJpYWwgYXMgVEhSRUUuTWF0ZXJpYWwgfCBUSFJFRS5NYXRlcmlhbFtdIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKG1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hdGVyaWFsKSkge1xuICAgICAgICAgICAgICAgIGdsdGZNYXRlcmlhbHMucHVzaCguLi5tYXRlcmlhbCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2x0Zk1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc2NoZW1hRXhwcmVzc2lvbi5tYXRlcmlhbENvbG9yQmluZHM/LmZvckVhY2goYXN5bmMgKGJpbmQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdsdGZNYXRlcmlhbHMuZmlsdGVyKChtYXRlcmlhbCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy5wYXJzZXIuYXNzb2NpYXRpb25zLmdldChtYXRlcmlhbCk/Lm1hdGVyaWFscztcbiAgICAgICAgICAgICAgcmV0dXJuIGJpbmQubWF0ZXJpYWwgPT09IG1hdGVyaWFsSW5kZXg7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XG4gICAgICAgICAgICAgIGV4cHJlc3Npb24uYWRkQmluZChcbiAgICAgICAgICAgICAgICBuZXcgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JCaW5kKHtcbiAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgdHlwZTogYmluZC50eXBlLFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0VmFsdWU6IG5ldyBUSFJFRS5Db2xvcigpLmZyb21BcnJheShiaW5kLnRhcmdldFZhbHVlKSxcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFscGhhOiBiaW5kLnRhcmdldFZhbHVlWzNdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzY2hlbWFFeHByZXNzaW9uLnRleHR1cmVUcmFuc2Zvcm1CaW5kcz8uZm9yRWFjaChhc3luYyAoYmluZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gZ2x0Zk1hdGVyaWFscy5maWx0ZXIoKG1hdGVyaWFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KG1hdGVyaWFsKT8ubWF0ZXJpYWxzO1xuICAgICAgICAgICAgICByZXR1cm4gYmluZC5tYXRlcmlhbCA9PT0gbWF0ZXJpYWxJbmRleDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IHtcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbi5hZGRCaW5kKFxuICAgICAgICAgICAgICAgIG5ldyBWUk1FeHByZXNzaW9uVGV4dHVyZVRyYW5zZm9ybUJpbmQoe1xuICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ6IG5ldyBUSFJFRS5WZWN0b3IyKCkuZnJvbUFycmF5KGJpbmQub2Zmc2V0ID8/IFswLjAsIDAuMF0pLFxuICAgICAgICAgICAgICAgICAgc2NhbGU6IG5ldyBUSFJFRS5WZWN0b3IyKCkuZnJvbUFycmF5KGJpbmQuc2NhbGUgPz8gWzEuMCwgMS4wXSksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hbmFnZXIucmVnaXN0ZXJFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgICAgfSksXG4gICAgKTtcblxuICAgIHJldHVybiBtYW5hZ2VyO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjBJbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNRXhwcmVzc2lvbk1hbmFnZXIgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IHZybUV4dCA9IGpzb24uZXh0ZW5zaW9ucz8uVlJNIGFzIFYwVlJNLlZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIXZybUV4dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hQmxlbmRTaGFwZSA9IHZybUV4dC5ibGVuZFNoYXBlTWFzdGVyO1xuICAgIGlmICghc2NoZW1hQmxlbmRTaGFwZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbWFuYWdlciA9IG5ldyBWUk1FeHByZXNzaW9uTWFuYWdlcigpO1xuXG4gICAgY29uc3Qgc2NoZW1hQmxlbmRTaGFwZUdyb3VwcyA9IHNjaGVtYUJsZW5kU2hhcGUuYmxlbmRTaGFwZUdyb3VwcztcbiAgICBpZiAoIXNjaGVtYUJsZW5kU2hhcGVHcm91cHMpIHtcbiAgICAgIHJldHVybiBtYW5hZ2VyO1xuICAgIH1cblxuICAgIGNvbnN0IGJsZW5kU2hhcGVOYW1lU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHNjaGVtYUJsZW5kU2hhcGVHcm91cHMubWFwKGFzeW5jIChzY2hlbWFHcm91cCkgPT4ge1xuICAgICAgICBjb25zdCB2MFByZXNldE5hbWUgPSBzY2hlbWFHcm91cC5wcmVzZXROYW1lO1xuICAgICAgICBjb25zdCB2MVByZXNldE5hbWUgPVxuICAgICAgICAgICh2MFByZXNldE5hbWUgIT0gbnVsbCAmJiBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luLnYwdjFQcmVzZXROYW1lTWFwW3YwUHJlc2V0TmFtZV0pIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB2MVByZXNldE5hbWUgPz8gc2NoZW1hR3JvdXAubmFtZTtcblxuICAgICAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiBPbmUgb2YgY3VzdG9tIGV4cHJlc3Npb25zIGhhcyBubyBuYW1lLiBJZ25vcmluZyB0aGUgZXhwcmVzc2lvbicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGR1cGxpY2F0aW9uIGNoZWNrXG4gICAgICAgIGlmIChibGVuZFNoYXBlTmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogQW4gZXhwcmVzc2lvbiBwcmVzZXQgJHt2MFByZXNldE5hbWV9IGhhcyBkdXBsaWNhdGVkIGVudHJpZXMuIElnbm9yaW5nIHRoZSBleHByZXNzaW9uYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJsZW5kU2hhcGVOYW1lU2V0LmFkZChuYW1lKTtcblxuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gbmV3IFZSTUV4cHJlc3Npb24obmFtZSk7XG4gICAgICAgIGdsdGYuc2NlbmUuYWRkKGV4cHJlc3Npb24pO1xuXG4gICAgICAgIGV4cHJlc3Npb24uaXNCaW5hcnkgPSBzY2hlbWFHcm91cC5pc0JpbmFyeSA/PyBmYWxzZTtcbiAgICAgICAgLy8gdjAgZG9lc24ndCBoYXZlIGlnbm9yZSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgLy8gQmluZCBtb3JwaFRhcmdldFxuICAgICAgICBpZiAoc2NoZW1hR3JvdXAuYmluZHMpIHtcbiAgICAgICAgICBzY2hlbWFHcm91cC5iaW5kcy5mb3JFYWNoKGFzeW5jIChiaW5kKSA9PiB7XG4gICAgICAgICAgICBpZiAoYmluZC5tZXNoID09PSB1bmRlZmluZWQgfHwgYmluZC5pbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgbm9kZXNVc2luZ01lc2g6IG51bWJlcltdID0gW107XG4gICAgICAgICAgICBqc29uLm5vZGVzPy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChub2RlLm1lc2ggPT09IGJpbmQubWVzaCkge1xuICAgICAgICAgICAgICAgIG5vZGVzVXNpbmdNZXNoLnB1c2goaSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldEluZGV4ID0gYmluZC5pbmRleDtcblxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgIG5vZGVzVXNpbmdNZXNoLm1hcChhc3luYyAobm9kZUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpbWl0aXZlcyA9IChhd2FpdCBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZShnbHRmLCBub2RlSW5kZXgpKSE7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgbWVzaCBoYXMgdGhlIHRhcmdldCBtb3JwaCB0YXJnZXRcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAhcHJpbWl0aXZlcy5ldmVyeShcbiAgICAgICAgICAgICAgICAgICAgKHByaW1pdGl2ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHByaW1pdGl2ZS5tb3JwaFRhcmdldEluZmx1ZW5jZXMpICYmXG4gICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRJbmRleCA8IHByaW1pdGl2ZS5tb3JwaFRhcmdldEluZmx1ZW5jZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICBgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogJHtzY2hlbWFHcm91cC5uYW1lfSBhdHRlbXB0cyB0byBpbmRleCAke21vcnBoVGFyZ2V0SW5kZXh9dGggbW9ycGggYnV0IG5vdCBmb3VuZC5gLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQoXG4gICAgICAgICAgICAgICAgICBuZXcgVlJNRXhwcmVzc2lvbk1vcnBoVGFyZ2V0QmluZCh7XG4gICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZXMsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBtb3JwaFRhcmdldEluZGV4LFxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IDAuMDEgKiAoYmluZC53ZWlnaHQgPz8gMTAwKSwgLy8gbmFycm93aW5nIHRoZSByYW5nZSBmcm9tIFsgMC4wIC0gMTAwLjAgXSB0byBbIDAuMCAtIDEuMCBdXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCaW5kIE1hdGVyaWFsQ29sb3IgYW5kIFRleHR1cmVUcmFuc2Zvcm1cbiAgICAgICAgY29uc3QgbWF0ZXJpYWxWYWx1ZXMgPSBzY2hlbWFHcm91cC5tYXRlcmlhbFZhbHVlcztcbiAgICAgICAgaWYgKG1hdGVyaWFsVmFsdWVzICYmIG1hdGVyaWFsVmFsdWVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIG1hdGVyaWFsVmFsdWVzLmZvckVhY2goKG1hdGVyaWFsVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgbWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbE5hbWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICBtYXRlcmlhbFZhbHVlLnByb3BlcnR5TmFtZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWUudGFyZ2V0VmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBcdTMwQTJcdTMwRDBcdTMwQkZcdTMwRkNcdTMwNkVcdTMwQUFcdTMwRDZcdTMwQjhcdTMwQTdcdTMwQUZcdTMwQzhcdTMwNkJcdThBMkRcdTVCOUFcdTMwNTVcdTMwOENcdTMwNjZcdTMwNDRcdTMwOEJcdTMwREVcdTMwQzZcdTMwRUFcdTMwQTJcdTMwRUJcdTMwNkVcdTUxODVcdTMwNEJcdTMwODlcbiAgICAgICAgICAgICAqIG1hdGVyaWFsVmFsdWVcdTMwNjdcdTYzMDdcdTVCOUFcdTMwNTVcdTMwOENcdTMwNjZcdTMwNDRcdTMwOEJcdTMwREVcdTMwQzZcdTMwRUFcdTMwQTJcdTMwRUJcdTMwOTJcdTk2QzZcdTMwODFcdTMwOEJcdTMwMDJcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBcdTcyNzlcdTVCOUFcdTMwNkJcdTMwNkZcdTU0MERcdTUyNERcdTMwOTJcdTRGN0ZcdTc1MjhcdTMwNTlcdTMwOEJcdTMwMDJcbiAgICAgICAgICAgICAqIFx1MzBBMlx1MzBBNlx1MzBDOFx1MzBFOVx1MzBBNFx1MzBGM1x1NjNDRlx1NzUzQlx1NzUyOFx1MzA2RVx1MzBERVx1MzBDNlx1MzBFQVx1MzBBMlx1MzBFQlx1MzA4Mlx1NTQwQ1x1NjY0Mlx1MzA2Qlx1OTZDNlx1MzA4MVx1MzA4Qlx1MzAwMlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbHM6IFRIUkVFLk1hdGVyaWFsW10gPSBbXTtcbiAgICAgICAgICAgIGdsdGYuc2NlbmUudHJhdmVyc2UoKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoKG9iamVjdCBhcyBhbnkpLm1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsW10gfCBUSFJFRS5NYXRlcmlhbCA9IChvYmplY3QgYXMgYW55KS5tYXRlcmlhbDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRlcmlhbCkpIHtcbiAgICAgICAgICAgICAgICAgIG1hdGVyaWFscy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAuLi5tYXRlcmlhbC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgKG10bCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIChtdGwubmFtZSA9PT0gbWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbE5hbWUhIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG10bC5uYW1lID09PSBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsTmFtZSEgKyAnIChPdXRsaW5lKScpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbHMuaW5kZXhPZihtdGwpID09PSAtMSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRlcmlhbC5uYW1lID09PSBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsTmFtZSAmJiBtYXRlcmlhbHMuaW5kZXhPZihtYXRlcmlhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxQcm9wZXJ0eU5hbWUgPSBtYXRlcmlhbFZhbHVlLnByb3BlcnR5TmFtZTtcbiAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKChtYXRlcmlhbCkgPT4ge1xuICAgICAgICAgICAgICAvLyBUZXh0dXJlVHJhbnNmb3JtQmluZFxuICAgICAgICAgICAgICBpZiAobWF0ZXJpYWxQcm9wZXJ0eU5hbWUgPT09ICdfTWFpblRleF9TVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IyKG1hdGVyaWFsVmFsdWUudGFyZ2V0VmFsdWUhWzBdLCBtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlIVsxXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjIobWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSFbMl0sIG1hdGVyaWFsVmFsdWUudGFyZ2V0VmFsdWUhWzNdKTtcblxuICAgICAgICAgICAgICAgIG9mZnNldC55ID0gMS4wIC0gb2Zmc2V0LnkgLSBzY2FsZS55O1xuXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbi5hZGRCaW5kKFxuICAgICAgICAgICAgICAgICAgbmV3IFZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZCh7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIE1hdGVyaWFsQ29sb3JCaW5kXG4gICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsQ29sb3JUeXBlID0gdjBFeHByZXNzaW9uTWF0ZXJpYWxDb2xvck1hcFttYXRlcmlhbFByb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgIGlmIChtYXRlcmlhbENvbG9yVHlwZSkge1xuICAgICAgICAgICAgICAgIGV4cHJlc3Npb24uYWRkQmluZChcbiAgICAgICAgICAgICAgICAgIG5ldyBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQoe1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogbWF0ZXJpYWxDb2xvclR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoKS5mcm9tQXJyYXkobWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSEpLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRBbHBoYTogbWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSFbM10sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKG1hdGVyaWFsUHJvcGVydHlOYW1lICsgJyBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hbmFnZXIucmVnaXN0ZXJFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgICAgfSksXG4gICAgKTtcblxuICAgIHJldHVybiBtYW5hZ2VyO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IEdMVEYgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IEdMVEYgYXMgR0xURlNjaGVtYSB9IGZyb20gJ0BnbHRmLXRyYW5zZm9ybS9jb3JlJztcblxuZnVuY3Rpb24gZXh0cmFjdFByaW1pdGl2ZXNJbnRlcm5hbChnbHRmOiBHTFRGLCBub2RlSW5kZXg6IG51bWJlciwgbm9kZTogVEhSRUUuT2JqZWN0M0QpOiBUSFJFRS5NZXNoW10gfCBudWxsIHtcbiAgY29uc3QganNvbiA9IGdsdGYucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAvKipcbiAgICogTGV0J3MgbGlzdCB1cCBldmVyeSBwb3NzaWJsZSBwYXR0ZXJucyB0aGF0IHBhcnNlZCBnbHRmIG5vZGVzIHdpdGggYSBtZXNoIGNhbiBoYXZlLCwsXG4gICAqXG4gICAqIFwiKlwiIGluZGljYXRlcyB0aGF0IHRob3NlIG1lc2hlcyBzaG91bGQgYmUgbGlzdGVkIHVwIHVzaW5nIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIGEgc2lnbmxlIHByaW1pdGl2ZSlcbiAgICpcbiAgICogLSBgVEhSRUUuTWVzaGA6IFRoZSBvbmx5IHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAqXG4gICAqXG4gICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKVxuICAgKlxuICAgKiAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIHRoZSBtZXNoXG4gICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKDIpICpcbiAgICpcbiAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpIEFORCAoYSBjaGlsZCB3aXRoIGEgbWVzaCwgYSBzaW5nbGUgcHJpbWl0aXZlKVxuICAgKlxuICAgKiAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIHRoZSBtZXNoXG4gICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKDIpICpcbiAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgYSBNRVNIIE9GIFRIRSBDSElMRFxuICAgKlxuICAgKiAjIyMgQSBub2RlIHdpdGggYSAobWVzaCwgbXVsdGlwbGUgcHJpbWl0aXZlcykgQU5EIChhIGNoaWxkIHdpdGggYSBtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKVxuICAgKlxuICAgKiAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIHRoZSBtZXNoXG4gICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKDIpICpcbiAgICogICAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIGEgTUVTSCBPRiBUSEUgQ0hJTERcbiAgICogICAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCBvZiB0aGUgY2hpbGRcbiAgICogICAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCBvZiB0aGUgY2hpbGQgKDIpXG4gICAqXG4gICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKSBCVVQgdGhlIG5vZGUgaXMgYSBib25lXG4gICAqXG4gICAqIC0gYFRIUkVFLkJvbmVgOiBUaGUgcm9vdCBvZiB0aGUgbm9kZSwgYXMgYSBib25lXG4gICAqICAgLSBgVEhSRUUuR3JvdXBgOiBUaGUgcm9vdCBvZiB0aGUgbWVzaFxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICogICAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgKlxuICAgKiAjIyMgQSBub2RlIHdpdGggYSAobWVzaCwgbXVsdGlwbGUgcHJpbWl0aXZlcykgQU5EIChhIGNoaWxkIHdpdGggYSBtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKSBCVVQgdGhlIG5vZGUgaXMgYSBib25lXG4gICAqXG4gICAqIC0gYFRIUkVFLkJvbmVgOiBUaGUgcm9vdCBvZiB0aGUgbm9kZSwgYXMgYSBib25lXG4gICAqICAgLSBgVEhSRUUuR3JvdXBgOiBUaGUgcm9vdCBvZiB0aGUgbWVzaFxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICogICAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgKiAgIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgYSBNRVNIIE9GIFRIRSBDSElMRFxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoIG9mIHRoZSBjaGlsZFxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoIG9mIHRoZSBjaGlsZCAoMilcbiAgICpcbiAgICogLi4uSSB3aWxsIHRha2UgYSBzdHJhdGVneSB0aGF0IHRyYXZlcnNlcyB0aGUgcm9vdCBvZiB0aGUgbm9kZSBhbmQgdGFrZSBmaXJzdCAocHJpbWl0aXZlQ291bnQpIG1lc2hlcy5cbiAgICovXG5cbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIG5vZGUgaGFzIGEgbWVzaFxuICBjb25zdCBzY2hlbWFOb2RlID0ganNvbi5ub2Rlcz8uW25vZGVJbmRleF07XG4gIGlmIChzY2hlbWFOb2RlID09IG51bGwpIHtcbiAgICBjb25zb2xlLndhcm4oYGV4dHJhY3RQcmltaXRpdmVzSW50ZXJuYWw6IEF0dGVtcHQgdG8gdXNlIG5vZGVzWyR7bm9kZUluZGV4fV0gb2YgZ2xURiBidXQgdGhlIG5vZGUgZG9lc24ndCBleGlzdGApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbWVzaEluZGV4ID0gc2NoZW1hTm9kZS5tZXNoO1xuICBpZiAobWVzaEluZGV4ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEhvdyBtYW55IHByaW1pdGl2ZXMgdGhlIG1lc2ggaGFzP1xuICBjb25zdCBzY2hlbWFNZXNoID0ganNvbi5tZXNoZXM/LlttZXNoSW5kZXhdO1xuICBpZiAoc2NoZW1hTWVzaCA9PSBudWxsKSB7XG4gICAgY29uc29sZS53YXJuKGBleHRyYWN0UHJpbWl0aXZlc0ludGVybmFsOiBBdHRlbXB0IHRvIHVzZSBtZXNoZXNbJHttZXNoSW5kZXh9XSBvZiBnbFRGIGJ1dCB0aGUgbWVzaCBkb2Vzbid0IGV4aXN0YCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBwcmltaXRpdmVDb3VudCA9IHNjaGVtYU1lc2gucHJpbWl0aXZlcy5sZW5ndGg7XG5cbiAgLy8gVHJhdmVyc2UgdGhlIG5vZGUgYW5kIHRha2UgZmlyc3QgKHByaW1pdGl2ZUNvdW50KSBtZXNoZXNcbiAgY29uc3QgcHJpbWl0aXZlczogVEhSRUUuTWVzaFtdID0gW107XG4gIG5vZGUudHJhdmVyc2UoKG9iamVjdCkgPT4ge1xuICAgIGlmIChwcmltaXRpdmVzLmxlbmd0aCA8IHByaW1pdGl2ZUNvdW50KSB7XG4gICAgICBpZiAoKG9iamVjdCBhcyBhbnkpLmlzTWVzaCkge1xuICAgICAgICBwcmltaXRpdmVzLnB1c2gob2JqZWN0IGFzIFRIUkVFLk1lc2gpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZXM7XG59XG5cbi8qKlxuICogRXh0cmFjdCBwcmltaXRpdmVzICggYFRIUkVFLk1lc2hbXWAgKSBvZiBhIG5vZGUgZnJvbSBhIGxvYWRlZCBHTFRGLlxuICogVGhlIG1haW4gcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIGRpc3Rpbmd1aXNoIHByaW1pdGl2ZXMgYW5kIGNoaWxkcmVuIGZyb20gYSBub2RlIHRoYXQgaGFzIGJvdGggbWVzaGVzIGFuZCBjaGlsZHJlbi5cbiAqXG4gKiBJdCB1dGlsaXplcyB0aGUgYmVoYXZpb3IgdGhhdCBHTFRGTG9hZGVyIGFkZHMgbWVzaCBwcmltaXRpdmVzIHRvIHRoZSBub2RlIG9iamVjdCAoIGBUSFJFRS5Hcm91cGAgKSBmaXJzdCB0aGVuIGFkZHMgaXRzIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSBnbHRmIEEgR0xURiBvYmplY3QgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXG4gKiBAcGFyYW0gbm9kZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgbm9kZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGUoZ2x0ZjogR0xURiwgbm9kZUluZGV4OiBudW1iZXIpOiBQcm9taXNlPFRIUkVFLk1lc2hbXSB8IG51bGw+IHtcbiAgY29uc3Qgbm9kZTogVEhSRUUuT2JqZWN0M0QgPSBhd2FpdCBnbHRmLnBhcnNlci5nZXREZXBlbmRlbmN5KCdub2RlJywgbm9kZUluZGV4KTtcbiAgcmV0dXJuIGV4dHJhY3RQcmltaXRpdmVzSW50ZXJuYWwoZ2x0Ziwgbm9kZUluZGV4LCBub2RlKTtcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHByaW1pdGl2ZXMgKCBgVEhSRUUuTWVzaFtdYCApIG9mIG5vZGVzIGZyb20gYSBsb2FkZWQgR0xURi5cbiAqIFNlZSB7QGxpbmsgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGV9IGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogSXQgcmV0dXJucyBhIG1hcCBmcm9tIG5vZGUgaW5kZXggdG8gZXh0cmFjdGlvbiByZXN1bHQuXG4gKiBJZiBhIG5vZGUgZG9lcyBub3QgaGF2ZSBhIG1lc2gsIHRoZSBlbnRyeSBmb3IgdGhlIG5vZGUgd2lsbCBub3QgYmUgcHV0IGluIHRoZSByZXR1cm5pbmcgbWFwLlxuICpcbiAqIEBwYXJhbSBnbHRmIEEgR0xURiBvYmplY3QgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZXMoZ2x0ZjogR0xURik6IFByb21pc2U8TWFwPG51bWJlciwgVEhSRUUuTWVzaFtdPj4ge1xuICBjb25zdCBub2RlczogVEhSRUUuT2JqZWN0M0RbXSA9IGF3YWl0IGdsdGYucGFyc2VyLmdldERlcGVuZGVuY2llcygnbm9kZScpO1xuICBjb25zdCBtYXAgPSBuZXcgTWFwPG51bWJlciwgVEhSRUUuTWVzaFtdPigpO1xuXG4gIG5vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZXh0cmFjdFByaW1pdGl2ZXNJbnRlcm5hbChnbHRmLCBpbmRleCwgbm9kZSk7XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBtYXAuc2V0KGluZGV4LCByZXN1bHQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1hcDtcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuZXhwb3J0IGNvbnN0IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lID0ge1xuICBBYTogJ2FhJyxcbiAgSWg6ICdpaCcsXG4gIE91OiAnb3UnLFxuICBFZTogJ2VlJyxcbiAgT2g6ICdvaCcsXG4gIEJsaW5rOiAnYmxpbmsnLFxuICBIYXBweTogJ2hhcHB5JyxcbiAgQW5ncnk6ICdhbmdyeScsXG4gIFNhZDogJ3NhZCcsXG4gIFJlbGF4ZWQ6ICdyZWxheGVkJyxcbiAgTG9va1VwOiAnbG9va1VwJyxcbiAgU3VycHJpc2VkOiAnc3VycHJpc2VkJyxcbiAgTG9va0Rvd246ICdsb29rRG93bicsXG4gIExvb2tMZWZ0OiAnbG9va0xlZnQnLFxuICBMb29rUmlnaHQ6ICdsb29rUmlnaHQnLFxuICBCbGlua0xlZnQ6ICdibGlua0xlZnQnLFxuICBCbGlua1JpZ2h0OiAnYmxpbmtSaWdodCcsXG4gIE5ldXRyYWw6ICduZXV0cmFsJyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFZSTUV4cHJlc3Npb25QcmVzZXROYW1lID0gKHR5cGVvZiBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSlba2V5b2YgdHlwZW9mIFZSTUV4cHJlc3Npb25QcmVzZXROYW1lXTtcbiIsICIvKipcbiAqIENsYW1wIHRoZSBpbnB1dCB2YWx1ZSB3aXRoaW4gWzAuMCAtIDEuMF0uXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBpbnB1dCB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F0dXJhdGUodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgMS4wKSwgMC4wKTtcbn1cbiIsICJpbXBvcnQgeyBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSB9IGZyb20gJy4vVlJNRXhwcmVzc2lvblByZXNldE5hbWUnO1xuaW1wb3J0IHsgc2F0dXJhdGUgfSBmcm9tICcuLi91dGlscy9zYXR1cmF0ZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb24gfSBmcm9tICcuL1ZSTUV4cHJlc3Npb24nO1xuXG5leHBvcnQgY2xhc3MgVlJNRXhwcmVzc2lvbk1hbmFnZXIge1xuICAvKipcbiAgICogQSBzZXQgb2YgbmFtZSBvciBwcmVzZXQgbmFtZSBvZiBleHByZXNzaW9ucyB0aGF0IHdpbGwgYmUgb3ZlcnJpZGRlbiBieSB7QGxpbmsgVlJNRXhwcmVzc2lvbi5vdmVycmlkZUJsaW5rfS5cbiAgICovXG4gIHB1YmxpYyBibGlua0V4cHJlc3Npb25OYW1lcyA9IFsnYmxpbmsnLCAnYmxpbmtMZWZ0JywgJ2JsaW5rUmlnaHQnXTtcblxuICAvKipcbiAgICogQSBzZXQgb2YgbmFtZSBvciBwcmVzZXQgbmFtZSBvZiBleHByZXNzaW9ucyB0aGF0IHdpbGwgYmUgb3ZlcnJpZGRlbiBieSB7QGxpbmsgVlJNRXhwcmVzc2lvbi5vdmVycmlkZUxvb2tBdH0uXG4gICAqL1xuICBwdWJsaWMgbG9va0F0RXhwcmVzc2lvbk5hbWVzID0gWydsb29rTGVmdCcsICdsb29rUmlnaHQnLCAnbG9va1VwJywgJ2xvb2tEb3duJ107XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIG5hbWUgb3IgcHJlc2V0IG5hbWUgb2YgZXhwcmVzc2lvbnMgdGhhdCB3aWxsIGJlIG92ZXJyaWRkZW4gYnkge0BsaW5rIFZSTUV4cHJlc3Npb24ub3ZlcnJpZGVNb3V0aH0uXG4gICAqL1xuICBwdWJsaWMgbW91dGhFeHByZXNzaW9uTmFtZXMgPSBbJ2FhJywgJ2VlJywgJ2loJywgJ29oJywgJ291J107XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIHtAbGluayBWUk1FeHByZXNzaW9ufS5cbiAgICogV2hlbiB5b3Ugd2FudCB0byByZWdpc3RlciBleHByZXNzaW9ucywgdXNlIHtAbGluayByZWdpc3RlckV4cHJlc3Npb259XG4gICAqL1xuICBwcml2YXRlIF9leHByZXNzaW9uczogVlJNRXhwcmVzc2lvbltdID0gW107XG4gIHB1YmxpYyBnZXQgZXhwcmVzc2lvbnMoKTogVlJNRXhwcmVzc2lvbltdIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwcmVzc2lvbnMuY29uY2F0KCk7XG4gIH1cblxuICAvKipcbiAgICogQSBtYXAgZnJvbSBuYW1lIHRvIGV4cHJlc3Npb24uXG4gICAqL1xuICBwcml2YXRlIF9leHByZXNzaW9uTWFwOiB7IFtuYW1lOiBzdHJpbmddOiBWUk1FeHByZXNzaW9uIH0gPSB7fTtcbiAgcHVibGljIGdldCBleHByZXNzaW9uTWFwKCk6IHsgW25hbWU6IHN0cmluZ106IFZSTUV4cHJlc3Npb24gfSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2V4cHJlc3Npb25NYXApO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWFwIGZyb20gbmFtZSB0byBleHByZXNzaW9uLCBidXQgZXhjbHVkaW5nIGN1c3RvbSBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcHJlc2V0RXhwcmVzc2lvbk1hcCgpOiB7IFtuYW1lIGluIFZSTUV4cHJlc3Npb25QcmVzZXROYW1lXT86IFZSTUV4cHJlc3Npb24gfSB7XG4gICAgY29uc3QgcmVzdWx0OiB7IFtuYW1lIGluIFZSTUV4cHJlc3Npb25QcmVzZXROYW1lXT86IFZSTUV4cHJlc3Npb24gfSA9IHt9O1xuXG4gICAgY29uc3QgcHJlc2V0TmFtZVNldCA9IG5ldyBTZXQ8c3RyaW5nPihPYmplY3QudmFsdWVzKFZSTUV4cHJlc3Npb25QcmVzZXROYW1lKSk7XG5cbiAgICBPYmplY3QuZW50cmllcyh0aGlzLl9leHByZXNzaW9uTWFwKS5mb3JFYWNoKChbbmFtZSwgZXhwcmVzc2lvbl0pID0+IHtcbiAgICAgIGlmIChwcmVzZXROYW1lU2V0LmhhcyhuYW1lKSkge1xuICAgICAgICByZXN1bHRbbmFtZSBhcyBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZV0gPSBleHByZXNzaW9uO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1hcCBmcm9tIG5hbWUgdG8gZXhwcmVzc2lvbiwgYnV0IGV4Y2x1ZGluZyBwcmVzZXQgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGN1c3RvbUV4cHJlc3Npb25NYXAoKTogeyBbbmFtZTogc3RyaW5nXTogVlJNRXhwcmVzc2lvbiB9IHtcbiAgICBjb25zdCByZXN1bHQ6IHsgW25hbWU6IHN0cmluZ106IFZSTUV4cHJlc3Npb24gfSA9IHt9O1xuXG4gICAgY29uc3QgcHJlc2V0TmFtZVNldCA9IG5ldyBTZXQ8c3RyaW5nPihPYmplY3QudmFsdWVzKFZSTUV4cHJlc3Npb25QcmVzZXROYW1lKSk7XG5cbiAgICBPYmplY3QuZW50cmllcyh0aGlzLl9leHByZXNzaW9uTWFwKS5mb3JFYWNoKChbbmFtZSwgZXhwcmVzc2lvbl0pID0+IHtcbiAgICAgIGlmICghcHJlc2V0TmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgcmVzdWx0W25hbWVdID0gZXhwcmVzc2lvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0uXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgdGhlIGdpdmVuIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0gaW50byB0aGlzIG9uZS5cbiAgICogQHBhcmFtIHNvdXJjZSBUaGUge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfSB5b3Ugd2FudCB0byBjb3B5XG4gICAqIEByZXR1cm5zIHRoaXNcbiAgICovXG4gIHB1YmxpYyBjb3B5KHNvdXJjZTogVlJNRXhwcmVzc2lvbk1hbmFnZXIpOiB0aGlzIHtcbiAgICAvLyBmaXJzdCB1bnJlZ2lzdGVyIGFsbCB0aGUgZXhwcmVzc2lvbiBpdCBoYXNcbiAgICBjb25zdCBleHByZXNzaW9ucyA9IHRoaXMuX2V4cHJlc3Npb25zLmNvbmNhdCgpO1xuICAgIGV4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgIHRoaXMudW5yZWdpc3RlckV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgfSk7XG5cbiAgICAvLyB0aGVuIHJlZ2lzdGVyIGFsbCB0aGUgZXhwcmVzc2lvbiBvZiB0aGUgc291cmNlXG4gICAgc291cmNlLl9leHByZXNzaW9ucy5mb3JFYWNoKChleHByZXNzaW9uKSA9PiB7XG4gICAgICB0aGlzLnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICB9KTtcblxuICAgIC8vIGNvcHkgcmVtYWluaW5nIG1lbWJlcnNcbiAgICB0aGlzLmJsaW5rRXhwcmVzc2lvbk5hbWVzID0gc291cmNlLmJsaW5rRXhwcmVzc2lvbk5hbWVzLmNvbmNhdCgpO1xuICAgIHRoaXMubG9va0F0RXhwcmVzc2lvbk5hbWVzID0gc291cmNlLmxvb2tBdEV4cHJlc3Npb25OYW1lcy5jb25jYXQoKTtcbiAgICB0aGlzLm1vdXRoRXhwcmVzc2lvbk5hbWVzID0gc291cmNlLm1vdXRoRXhwcmVzc2lvbk5hbWVzLmNvbmNhdCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNsb25lIG9mIHRoaXMge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfS5cbiAgICogQHJldHVybnMgQ29waWVkIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn1cbiAgICovXG4gIHB1YmxpYyBjbG9uZSgpOiBWUk1FeHByZXNzaW9uTWFuYWdlciB7XG4gICAgcmV0dXJuIG5ldyBWUk1FeHByZXNzaW9uTWFuYWdlcigpLmNvcHkodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgcmVnaXN0ZXJlZCBleHByZXNzaW9uLlxuICAgKiBJZiBpdCBjYW5ub3QgZmluZCBhbiBleHByZXNzaW9uLCBpdCB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvciBwcmVzZXQgbmFtZSBvZiB0aGUgZXhwcmVzc2lvblxuICAgKi9cbiAgcHVibGljIGdldEV4cHJlc3Npb24obmFtZTogVlJNRXhwcmVzc2lvblByZXNldE5hbWUgfCBzdHJpbmcpOiBWUk1FeHByZXNzaW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cHJlc3Npb25NYXBbbmFtZV0gPz8gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBleHByZXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZXhwcmVzc2lvbiB7QGxpbmsgVlJNRXhwcmVzc2lvbn0gdGhhdCBkZXNjcmliZXMgdGhlIGV4cHJlc3Npb25cbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckV4cHJlc3Npb24oZXhwcmVzc2lvbjogVlJNRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMuX2V4cHJlc3Npb25zLnB1c2goZXhwcmVzc2lvbik7XG4gICAgdGhpcy5fZXhwcmVzc2lvbk1hcFtleHByZXNzaW9uLmV4cHJlc3Npb25OYW1lXSA9IGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlciBhbiBleHByZXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZXhwcmVzc2lvbiBUaGUgZXhwcmVzc2lvbiB5b3Ugd2FudCB0byB1bnJlZ2lzdGVyXG4gICAqL1xuICBwdWJsaWMgdW5yZWdpc3RlckV4cHJlc3Npb24oZXhwcmVzc2lvbjogVlJNRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fZXhwcmVzc2lvbnMuaW5kZXhPZihleHByZXNzaW9uKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1ZSTUV4cHJlc3Npb25NYW5hZ2VyOiBUaGUgc3BlY2lmaWVkIGV4cHJlc3Npb25zIGlzIG5vdCByZWdpc3RlcmVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZXhwcmVzc2lvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBkZWxldGUgdGhpcy5fZXhwcmVzc2lvbk1hcFtleHByZXNzaW9uLmV4cHJlc3Npb25OYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgd2VpZ2h0IG9mIHRoZSBzcGVjaWZpZWQgZXhwcmVzc2lvbi5cbiAgICogSWYgaXQgZG9lc24ndCBoYXZlIGFuIGV4cHJlc3Npb24gb2YgZ2l2ZW4gbmFtZSwgaXQgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGV4cHJlc3Npb25cbiAgICovXG4gIHB1YmxpYyBnZXRWYWx1ZShuYW1lOiBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSB8IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24obmFtZSk7XG4gICAgcmV0dXJuIGV4cHJlc3Npb24/LndlaWdodCA/PyBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHdlaWdodCB0byB0aGUgc3BlY2lmaWVkIGV4cHJlc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHdlaWdodCBXZWlnaHRcbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSB8IHN0cmluZywgd2VpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5nZXRFeHByZXNzaW9uKG5hbWUpO1xuICAgIGlmIChleHByZXNzaW9uKSB7XG4gICAgICBleHByZXNzaW9uLndlaWdodCA9IHNhdHVyYXRlKHdlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHdlaWdodHMgb2YgYWxsIGV4cHJlc3Npb25zIHRvIGAwLjBgLlxuICAgKi9cbiAgcHVibGljIHJlc2V0VmFsdWVzKCk6IHZvaWQge1xuICAgIHRoaXMuX2V4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgIGV4cHJlc3Npb24ud2VpZ2h0ID0gMC4wO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHRyYWNrIG5hbWUgb2Ygc3BlY2lmaWVkIGV4cHJlc3Npb24uXG4gICAqIFRoaXMgdHJhY2sgbmFtZSBpcyBuZWVkZWQgdG8gbWFuaXB1bGF0ZSBpdHMgZXhwcmVzc2lvbiB2aWEga2V5ZnJhbWUgYW5pbWF0aW9ucy5cbiAgICpcbiAgICogQGV4YW1wbGUgTWFuaXB1bGF0ZSBhbiBleHByZXNzaW9uIHVzaW5nIGtleWZyYW1lIGFuaW1hdGlvblxuICAgKiBgYGBqc1xuICAgKiBjb25zdCB0cmFja05hbWUgPSB2cm0uZXhwcmVzc2lvbk1hbmFnZXIuZ2V0RXhwcmVzc2lvblRyYWNrTmFtZSggJ2JsaW5rJyApO1xuICAgKiBjb25zdCB0cmFjayA9IG5ldyBUSFJFRS5OdW1iZXJLZXlmcmFtZVRyYWNrKFxuICAgKiAgIG5hbWUsXG4gICAqICAgWyAwLjAsIDAuNSwgMS4wIF0sIC8vIHRpbWVzXG4gICAqICAgWyAwLjAsIDEuMCwgMC4wIF0gLy8gdmFsdWVzXG4gICAqICk7XG4gICAqXG4gICAqIGNvbnN0IGNsaXAgPSBuZXcgVEhSRUUuQW5pbWF0aW9uQ2xpcChcbiAgICogICAnYmxpbmsnLCAvLyBuYW1lXG4gICAqICAgMS4wLCAvLyBkdXJhdGlvblxuICAgKiAgIFsgdHJhY2sgXSAvLyB0cmFja3NcbiAgICogKTtcbiAgICpcbiAgICogY29uc3QgbWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoIHZybS5zY2VuZSApO1xuICAgKiBjb25zdCBhY3Rpb24gPSBtaXhlci5jbGlwQWN0aW9uKCBjbGlwICk7XG4gICAqIGFjdGlvbi5wbGF5KCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBleHByZXNzaW9uXG4gICAqL1xuICBwdWJsaWMgZ2V0RXhwcmVzc2lvblRyYWNrTmFtZShuYW1lOiBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSB8IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24obmFtZSk7XG4gICAgcmV0dXJuIGV4cHJlc3Npb24gPyBgJHtleHByZXNzaW9uLm5hbWV9LndlaWdodGAgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBldmVyeSBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgLy8gc2VlIGhvdyBtdWNoIHdlIHNob3VsZCBvdmVycmlkZSBjZXJ0YWluIGV4cHJlc3Npb25zXG4gICAgY29uc3Qgd2VpZ2h0TXVsdGlwbGllcnMgPSB0aGlzLl9jYWxjdWxhdGVXZWlnaHRNdWx0aXBsaWVycygpO1xuXG4gICAgLy8gcmVzZXQgZXhwcmVzc2lvbiBiaW5kcyBmaXJzdFxuICAgIHRoaXMuX2V4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgIGV4cHJlc3Npb24uY2xlYXJBcHBsaWVkV2VpZ2h0KCk7XG4gICAgfSk7XG5cbiAgICAvLyB0aGVuIGFwcGx5IGJpbmRzXG4gICAgdGhpcy5fZXhwcmVzc2lvbnMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgbGV0IG11bHRpcGxpZXIgPSAxLjA7XG4gICAgICBjb25zdCBuYW1lID0gZXhwcmVzc2lvbi5leHByZXNzaW9uTmFtZTtcblxuICAgICAgaWYgKHRoaXMuYmxpbmtFeHByZXNzaW9uTmFtZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgbXVsdGlwbGllciAqPSB3ZWlnaHRNdWx0aXBsaWVycy5ibGluaztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubG9va0F0RXhwcmVzc2lvbk5hbWVzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgIG11bHRpcGxpZXIgKj0gd2VpZ2h0TXVsdGlwbGllcnMubG9va0F0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tb3V0aEV4cHJlc3Npb25OYW1lcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICBtdWx0aXBsaWVyICo9IHdlaWdodE11bHRpcGxpZXJzLm1vdXRoO1xuICAgICAgfVxuXG4gICAgICBleHByZXNzaW9uLmFwcGx5V2VpZ2h0KHsgbXVsdGlwbGllciB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgc3VtIG9mIG92ZXJyaWRlIGFtb3VudHMgdG8gc2VlIGhvdyBtdWNoIHdlIHNob3VsZCBtdWx0aXBseSB3ZWlnaHRzIG9mIGNlcnRhaW4gZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVXZWlnaHRNdWx0aXBsaWVycygpOiB7XG4gICAgYmxpbms6IG51bWJlcjtcbiAgICBsb29rQXQ6IG51bWJlcjtcbiAgICBtb3V0aDogbnVtYmVyO1xuICB9IHtcbiAgICBsZXQgYmxpbmsgPSAxLjA7XG4gICAgbGV0IGxvb2tBdCA9IDEuMDtcbiAgICBsZXQgbW91dGggPSAxLjA7XG5cbiAgICB0aGlzLl9leHByZXNzaW9ucy5mb3JFYWNoKChleHByZXNzaW9uKSA9PiB7XG4gICAgICBibGluayAtPSBleHByZXNzaW9uLm92ZXJyaWRlQmxpbmtBbW91bnQ7XG4gICAgICBsb29rQXQgLT0gZXhwcmVzc2lvbi5vdmVycmlkZUxvb2tBdEFtb3VudDtcbiAgICAgIG1vdXRoIC09IGV4cHJlc3Npb24ub3ZlcnJpZGVNb3V0aEFtb3VudDtcbiAgICB9KTtcblxuICAgIGJsaW5rID0gTWF0aC5tYXgoMC4wLCBibGluayk7XG4gICAgbG9va0F0ID0gTWF0aC5tYXgoMC4wLCBsb29rQXQpO1xuICAgIG1vdXRoID0gTWF0aC5tYXgoMC4wLCBtb3V0aCk7XG5cbiAgICByZXR1cm4geyBibGluaywgbG9va0F0LCBtb3V0aCB9O1xuICB9XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbmV4cG9ydCBjb25zdCBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUgPSB7XG4gIENvbG9yOiAnY29sb3InLFxuICBFbWlzc2lvbkNvbG9yOiAnZW1pc3Npb25Db2xvcicsXG4gIFNoYWRlQ29sb3I6ICdzaGFkZUNvbG9yJyxcbiAgTWF0Y2FwQ29sb3I6ICdtYXRjYXBDb2xvcicsXG4gIFJpbUNvbG9yOiAncmltQ29sb3InLFxuICBPdXRsaW5lQ29sb3I6ICdvdXRsaW5lQ29sb3InLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlID1cbiAgKHR5cGVvZiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUpW2tleW9mIHR5cGVvZiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGVdO1xuXG5leHBvcnQgY29uc3QgdjBFeHByZXNzaW9uTWF0ZXJpYWxDb2xvck1hcDogeyBba2V5OiBzdHJpbmddOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUgfCB1bmRlZmluZWQgfSA9IHtcbiAgX0NvbG9yOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUuQ29sb3IsXG4gIF9FbWlzc2lvbkNvbG9yOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUuRW1pc3Npb25Db2xvcixcbiAgX1NoYWRlQ29sb3I6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZS5TaGFkZUNvbG9yLFxuICBfUmltQ29sb3I6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZS5SaW1Db2xvcixcbiAgX091dGxpbmVDb2xvcjogVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlLk91dGxpbmVDb2xvcixcbn07XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uQmluZCB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbkJpbmQnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSc7XG5cbmNvbnN0IF9jb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xuXG5pbnRlcmZhY2UgQ29sb3JCaW5kU3RhdGUge1xuICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcbiAgaW5pdGlhbFZhbHVlOiBUSFJFRS5Db2xvcjtcbiAgZGVsdGFWYWx1ZTogVEhSRUUuQ29sb3I7XG59XG5cbmludGVyZmFjZSBBbHBoYUJpbmRTdGF0ZSB7XG4gIHByb3BlcnR5TmFtZTogc3RyaW5nO1xuICBpbml0aWFsVmFsdWU6IG51bWJlcjtcbiAgZGVsdGFWYWx1ZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQmluZFN0YXRlIHtcbiAgY29sb3I6IENvbG9yQmluZFN0YXRlIHwgbnVsbDtcbiAgYWxwaGE6IEFscGhhQmluZFN0YXRlIHwgbnVsbDtcbn1cblxuLyoqXG4gKiBBIGJpbmQgb2YgZXhwcmVzc2lvbiBpbmZsdWVuY2VzIHRvIGEgbWF0ZXJpYWwgY29sb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQgaW1wbGVtZW50cyBWUk1FeHByZXNzaW9uQmluZCB7XG4gIC8qKlxuICAgKiBNYXBwaW5nIG9mIHByb3BlcnR5IG5hbWVzIGZyb20gVlJNQy9tYXRlcmlhbENvbG9yQmluZHMudHlwZSB0byB0aHJlZS5qcy9NYXRlcmlhbC5cbiAgICogVGhlIGZpcnN0IGVsZW1lbnQgc3RhbmRzIGZvciBjb2xvciBjaGFubmVscywgdGhlIHNlY29uZCBlbGVtZW50IHN0YW5kcyBmb3IgdGhlIGFscGhhIGNoYW5uZWwuXG4gICAqIFRoZSBzZWNvbmQgZWxlbWVudCBjYW4gYmUgbnVsbCBpZiB0aGUgdGFyZ2V0IHByb3BlcnR5IGRvZXNuJ3QgZXhpc3QuXG4gICAqL1xuICAvLyBUT0RPOiBXZSBtaWdodCB3YW50IHRvIHVzZSB0aGUgYHNhdGlzZmllc2Agb3BlcmF0b3Igb25jZSB3ZSBidW1wIFRTIHRvIDQuOSBvciBoaWdoZXJcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcGl4aXYvdGhyZWUtdnJtL3B1bGwvMTMyMyNkaXNjdXNzaW9uX3IxMzc0MDIwMDM1XG4gIHByaXZhdGUgc3RhdGljIF9wcm9wZXJ0eU5hbWVNYXBNYXA6IHtcbiAgICBbZGlzdGluZ3Vpc2hlcjogc3RyaW5nXTogeyBbdHlwZSBpbiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGVdPzogcmVhZG9ubHkgW3N0cmluZywgc3RyaW5nIHwgbnVsbF0gfTtcbiAgfSA9IHtcbiAgICBpc01lc2hTdGFuZGFyZE1hdGVyaWFsOiB7XG4gICAgICBjb2xvcjogWydjb2xvcicsICdvcGFjaXR5J10sXG4gICAgICBlbWlzc2lvbkNvbG9yOiBbJ2VtaXNzaXZlJywgbnVsbF0sXG4gICAgfSxcbiAgICBpc01lc2hCYXNpY01hdGVyaWFsOiB7XG4gICAgICBjb2xvcjogWydjb2xvcicsICdvcGFjaXR5J10sXG4gICAgfSxcbiAgICBpc01Ub29uTWF0ZXJpYWw6IHtcbiAgICAgIGNvbG9yOiBbJ2NvbG9yJywgJ29wYWNpdHknXSxcbiAgICAgIGVtaXNzaW9uQ29sb3I6IFsnZW1pc3NpdmUnLCBudWxsXSxcbiAgICAgIG91dGxpbmVDb2xvcjogWydvdXRsaW5lQ29sb3JGYWN0b3InLCBudWxsXSxcbiAgICAgIG1hdGNhcENvbG9yOiBbJ21hdGNhcEZhY3RvcicsIG51bGxdLFxuICAgICAgcmltQ29sb3I6IFsncGFyYW1ldHJpY1JpbUNvbG9yRmFjdG9yJywgbnVsbF0sXG4gICAgICBzaGFkZUNvbG9yOiBbJ3NoYWRlQ29sb3JGYWN0b3InLCBudWxsXSxcbiAgICB9LFxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgdGFyZ2V0IG1hdGVyaWFsLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG1hdGVyaWFsOiBUSFJFRS5NYXRlcmlhbDtcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIHRhcmdldCBwcm9wZXJ0eSBvZiB0aGUgbWF0ZXJpYWwuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdHlwZTogVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlO1xuXG4gIC8qKlxuICAgKiBUaGUgdGFyZ2V0IGNvbG9yLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHRhcmdldFZhbHVlOiBUSFJFRS5Db2xvcjtcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBhbHBoYS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0YXJnZXRBbHBoYTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJdHMgYmluZGluZyBzdGF0ZS5cbiAgICogSWYgaXQgY2Fubm90IGZpbmQgdGhlIHRhcmdldCBwcm9wZXJ0eSBpbiB0aGUgY29uc3RydWN0b3IsIGVhY2ggcHJvcGVydHkgd2lsbCBiZSBudWxsIGluc3RlYWQuXG4gICAqL1xuICBwcml2YXRlIF9zdGF0ZTogQmluZFN0YXRlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih7XG4gICAgbWF0ZXJpYWwsXG4gICAgdHlwZSxcbiAgICB0YXJnZXRWYWx1ZSxcbiAgICB0YXJnZXRBbHBoYSxcbiAgfToge1xuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgbWF0ZXJpYWwuXG4gICAgICovXG4gICAgbWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIHRhcmdldCBwcm9wZXJ0eSBvZiB0aGUgbWF0ZXJpYWwuXG4gICAgICovXG4gICAgdHlwZTogVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBjb2xvci5cbiAgICAgKi9cbiAgICB0YXJnZXRWYWx1ZTogVEhSRUUuQ29sb3I7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IGFscGhhLlxuICAgICAqL1xuICAgIHRhcmdldEFscGhhPzogbnVtYmVyO1xuICB9KSB7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50YXJnZXRWYWx1ZSA9IHRhcmdldFZhbHVlO1xuICAgIHRoaXMudGFyZ2V0QWxwaGEgPSB0YXJnZXRBbHBoYSA/PyAxLjA7XG5cbiAgICAvLyBpbml0IGJpbmQgc3RhdGVcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuX2luaXRDb2xvckJpbmRTdGF0ZSgpO1xuICAgIGNvbnN0IGFscGhhID0gdGhpcy5faW5pdEFscGhhQmluZFN0YXRlKCk7XG4gICAgdGhpcy5fc3RhdGUgPSB7IGNvbG9yLCBhbHBoYSB9O1xuICB9XG5cbiAgcHVibGljIGFwcGx5V2VpZ2h0KHdlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb2xvciwgYWxwaGEgfSA9IHRoaXMuX3N0YXRlO1xuXG4gICAgaWYgKGNvbG9yICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgcHJvcGVydHlOYW1lLCBkZWx0YVZhbHVlIH0gPSBjb2xvcjtcblxuICAgICAgY29uc3QgdGFyZ2V0ID0gKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIFRIUkVFLkNvbG9yO1xuICAgICAgaWYgKHRhcmdldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFyZ2V0LmFkZChfY29sb3IuY29weShkZWx0YVZhbHVlKS5tdWx0aXBseVNjYWxhcih3ZWlnaHQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWxwaGEgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBwcm9wZXJ0eU5hbWUsIGRlbHRhVmFsdWUgfSA9IGFscGhhO1xuXG4gICAgICBjb25zdCB0YXJnZXQgPSAodGhpcy5tYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgbnVtYmVyO1xuICAgICAgaWYgKHRhcmdldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgKCh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBudW1iZXIpICs9IGRlbHRhVmFsdWUgKiB3ZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyQXBwbGllZFdlaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbG9yLCBhbHBoYSB9ID0gdGhpcy5fc3RhdGU7XG5cbiAgICBpZiAoY29sb3IgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBwcm9wZXJ0eU5hbWUsIGluaXRpYWxWYWx1ZSB9ID0gY29sb3I7XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9ICh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBUSFJFRS5Db2xvcjtcbiAgICAgIGlmICh0YXJnZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhcmdldC5jb3B5KGluaXRpYWxWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFscGhhICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgcHJvcGVydHlOYW1lLCBpbml0aWFsVmFsdWUgfSA9IGFscGhhO1xuXG4gICAgICBjb25zdCB0YXJnZXQgPSAodGhpcy5tYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgbnVtYmVyO1xuICAgICAgaWYgKHRhcmdldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgKCh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBudW1iZXIpID0gaW5pdGlhbFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luaXRDb2xvckJpbmRTdGF0ZSgpOiBDb2xvckJpbmRTdGF0ZSB8IG51bGwge1xuICAgIGNvbnN0IHsgbWF0ZXJpYWwsIHR5cGUsIHRhcmdldFZhbHVlIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lTWFwID0gdGhpcy5fZ2V0UHJvcGVydHlOYW1lTWFwKCk7XG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lTWFwPy5bdHlwZV0/LlswXSA/PyBudWxsO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZSA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUcmllZCB0byBhZGQgYSBtYXRlcmlhbCBjb2xvciBiaW5kIHRvIHRoZSBtYXRlcmlhbCAke1xuICAgICAgICAgIG1hdGVyaWFsLm5hbWUgPz8gJyhubyBuYW1lKSdcbiAgICAgICAgfSwgdGhlIHR5cGUgJHt0eXBlfSBidXQgdGhlIG1hdGVyaWFsIG9yIHRoZSB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuYCxcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IChtYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgVEhSRUUuQ29sb3I7XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB0YXJnZXQuY2xvbmUoKTtcblxuICAgIC8vIFx1OENBMFx1MzA2RVx1NTAyNFx1MzA5Mlx1NEZERFx1NjMwMVx1MzA1OVx1MzA4Qlx1MzA1Rlx1MzA4MVx1MzA2QkNvbG9yLnN1Ylx1MzA5Mlx1NEY3Rlx1MzA4Rlx1MzA1QVx1MzA2Qlx1NURFRVx1NTIwNlx1MzA5Mlx1OEEwOFx1N0I5N1x1MzA1OVx1MzA4QlxuICAgIGNvbnN0IGRlbHRhVmFsdWUgPSBuZXcgVEhSRUUuQ29sb3IoXG4gICAgICB0YXJnZXRWYWx1ZS5yIC0gaW5pdGlhbFZhbHVlLnIsXG4gICAgICB0YXJnZXRWYWx1ZS5nIC0gaW5pdGlhbFZhbHVlLmcsXG4gICAgICB0YXJnZXRWYWx1ZS5iIC0gaW5pdGlhbFZhbHVlLmIsXG4gICAgKTtcblxuICAgIHJldHVybiB7IHByb3BlcnR5TmFtZSwgaW5pdGlhbFZhbHVlLCBkZWx0YVZhbHVlIH07XG4gIH1cblxuICBwcml2YXRlIF9pbml0QWxwaGFCaW5kU3RhdGUoKTogQWxwaGFCaW5kU3RhdGUgfCBudWxsIHtcbiAgICBjb25zdCB7IG1hdGVyaWFsLCB0eXBlLCB0YXJnZXRBbHBoYSB9ID0gdGhpcztcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hcCA9IHRoaXMuX2dldFByb3BlcnR5TmFtZU1hcCgpO1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZU1hcD8uW3R5cGVdPy5bMV0gPz8gbnVsbDtcblxuICAgIGlmIChwcm9wZXJ0eU5hbWUgPT0gbnVsbCAmJiB0YXJnZXRBbHBoYSAhPT0gMS4wKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUcmllZCB0byBhZGQgYSBtYXRlcmlhbCBhbHBoYSBiaW5kIHRvIHRoZSBtYXRlcmlhbCAke1xuICAgICAgICAgIG1hdGVyaWFsLm5hbWUgPz8gJyhubyBuYW1lKSdcbiAgICAgICAgfSwgdGhlIHR5cGUgJHt0eXBlfSBidXQgdGhlIG1hdGVyaWFsIG9yIHRoZSB0eXBlIGRvZXMgbm90IHN1cHBvcnQgYWxwaGEuYCxcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5hbWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gKG1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBudW1iZXI7XG5cbiAgICBjb25zdCBkZWx0YVZhbHVlID0gdGFyZ2V0QWxwaGEgLSBpbml0aWFsVmFsdWU7XG5cbiAgICByZXR1cm4geyBwcm9wZXJ0eU5hbWUsIGluaXRpYWxWYWx1ZSwgZGVsdGFWYWx1ZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvcGVydHlOYW1lTWFwKCk6XG4gICAgfCB7IFt0eXBlIGluIFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZV0/OiByZWFkb25seSBbc3RyaW5nLCBzdHJpbmcgfCBudWxsXSB9XG4gICAgfCBudWxsIHtcbiAgICByZXR1cm4gKFxuICAgICAgT2JqZWN0LmVudHJpZXMoVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JCaW5kLl9wcm9wZXJ0eU5hbWVNYXBNYXApLmZpbmQoKFtkaXN0aW5ndWlzaGVyXSkgPT4ge1xuICAgICAgICByZXR1cm4gKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtkaXN0aW5ndWlzaGVyXSA9PT0gdHJ1ZTtcbiAgICAgIH0pPy5bMV0gPz8gbnVsbFxuICAgICk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbkJpbmQgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25CaW5kJztcblxuLyoqXG4gKiBBIGJpbmQgb2Yge0BsaW5rIFZSTUV4cHJlc3Npb259IGluZmx1ZW5jZXMgdG8gbW9ycGggdGFyZ2V0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUV4cHJlc3Npb25Nb3JwaFRhcmdldEJpbmQgaW1wbGVtZW50cyBWUk1FeHByZXNzaW9uQmluZCB7XG4gIC8qKlxuICAgKiBUaGUgbWVzaCBwcmltaXRpdmVzIHRoYXQgYXR0YWNoZWQgdG8gdGFyZ2V0IG1lc2guXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgcHJpbWl0aXZlczogVEhSRUUuTWVzaFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5kZXggb2YgdGhlIG1vcnBoIHRhcmdldCBpbiB0aGUgbWVzaC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBpbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgd2VpZ2h0IHZhbHVlIG9mIHRhcmdldCBtb3JwaCB0YXJnZXQuIFJhbmdpbmcgaW4gWzAuMCAtIDEuMF0uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgd2VpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHtcbiAgICBwcmltaXRpdmVzLFxuICAgIGluZGV4LFxuICAgIHdlaWdodCxcbiAgfToge1xuICAgIC8qKlxuICAgICAqIFRoZSBtZXNoIHByaW1pdGl2ZXMgdGhhdCBhdHRhY2hlZCB0byB0YXJnZXQgbWVzaC5cbiAgICAgKi9cbiAgICBwcmltaXRpdmVzOiBUSFJFRS5NZXNoW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIG1vcnBoIHRhcmdldCBpbiB0aGUgbWVzaC5cbiAgICAgKi9cbiAgICBpbmRleDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdlaWdodCB2YWx1ZSBvZiB0YXJnZXQgbW9ycGggdGFyZ2V0LiBSYW5naW5nIGluIFswLjAgLSAxLjBdLlxuICAgICAqL1xuICAgIHdlaWdodDogbnVtYmVyO1xuICB9KSB7XG4gICAgdGhpcy5wcmltaXRpdmVzID0gcHJpbWl0aXZlcztcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlXZWlnaHQod2VpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMuZm9yRWFjaCgobWVzaCkgPT4ge1xuICAgICAgaWYgKG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzPy5bdGhpcy5pbmRleF0gIT0gbnVsbCkge1xuICAgICAgICBtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t0aGlzLmluZGV4XSArPSB0aGlzLndlaWdodCAqIHdlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFwcGxpZWRXZWlnaHQoKTogdm9pZCB7XG4gICAgdGhpcy5wcmltaXRpdmVzLmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgIGlmIChtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcz8uW3RoaXMuaW5kZXhdICE9IG51bGwpIHtcbiAgICAgICAgbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbdGhpcy5pbmRleF0gPSAwLjA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25CaW5kIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uQmluZCc7XG5cbmNvbnN0IF92MiA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbi8qKlxuICogQSBiaW5kIG9mIGV4cHJlc3Npb24gaW5mbHVlbmNlcyB0byB0ZXh0dXJlIHRyYW5zZm9ybXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1FeHByZXNzaW9uVGV4dHVyZVRyYW5zZm9ybUJpbmQgaW1wbGVtZW50cyBWUk1FeHByZXNzaW9uQmluZCB7XG4gIHByaXZhdGUgc3RhdGljIF9wcm9wZXJ0eU5hbWVzTWFwOiB7IFtkaXN0aW5ndWlzaGVyOiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge1xuICAgIGlzTWVzaFN0YW5kYXJkTWF0ZXJpYWw6IFtcbiAgICAgICdtYXAnLFxuICAgICAgJ2VtaXNzaXZlTWFwJyxcbiAgICAgICdidW1wTWFwJyxcbiAgICAgICdub3JtYWxNYXAnLFxuICAgICAgJ2Rpc3BsYWNlbWVudE1hcCcsXG4gICAgICAncm91Z2huZXNzTWFwJyxcbiAgICAgICdtZXRhbG5lc3NNYXAnLFxuICAgICAgJ2FscGhhTWFwJyxcbiAgICBdLFxuICAgIGlzTWVzaEJhc2ljTWF0ZXJpYWw6IFsnbWFwJywgJ3NwZWN1bGFyTWFwJywgJ2FscGhhTWFwJ10sXG4gICAgaXNNVG9vbk1hdGVyaWFsOiBbXG4gICAgICAnbWFwJyxcbiAgICAgICdub3JtYWxNYXAnLFxuICAgICAgJ2VtaXNzaXZlTWFwJyxcbiAgICAgICdzaGFkZU11bHRpcGx5VGV4dHVyZScsXG4gICAgICAncmltTXVsdGlwbHlUZXh0dXJlJyxcbiAgICAgICdvdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUnLFxuICAgICAgJ3V2QW5pbWF0aW9uTWFza1RleHR1cmUnLFxuICAgIF0sXG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgbWF0ZXJpYWwuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsO1xuXG4gIC8qKlxuICAgKiBUaGUgdXYgc2NhbGUgb2YgdGhlIHRleHR1cmUuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc2NhbGU6IFRIUkVFLlZlY3RvcjI7XG5cbiAgLyoqXG4gICAqIFRoZSB1diBvZmZzZXQgb2YgdGhlIHRleHR1cmUuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgb2Zmc2V0OiBUSFJFRS5WZWN0b3IyO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiB0ZXh0dXJlIG5hbWVzIGFuZCBpdHMgc3RhdGUgdGhhdCBzaG91bGQgYmUgdHJhbnNmb3JtZWQgYnkgdGhpcyBiaW5kLlxuICAgKi9cbiAgcHJpdmF0ZSBfcHJvcGVydGllczoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbml0aWFsT2Zmc2V0OiBUSFJFRS5WZWN0b3IyO1xuICAgIGluaXRpYWxTY2FsZTogVEhSRUUuVmVjdG9yMjtcbiAgICBkZWx0YU9mZnNldDogVEhSRUUuVmVjdG9yMjtcbiAgICBkZWx0YVNjYWxlOiBUSFJFRS5WZWN0b3IyO1xuICB9W107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHtcbiAgICBtYXRlcmlhbCxcbiAgICBzY2FsZSxcbiAgICBvZmZzZXQsXG4gIH06IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IG1hdGVyaWFsLlxuICAgICAqL1xuICAgIG1hdGVyaWFsOiBUSFJFRS5NYXRlcmlhbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1diBzY2FsZSBvZiB0aGUgdGV4dHVyZS5cbiAgICAgKi9cbiAgICBzY2FsZTogVEhSRUUuVmVjdG9yMjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1diBvZmZzZXQgb2YgdGhlIHRleHR1cmUuXG4gICAgICovXG4gICAgb2Zmc2V0OiBUSFJFRS5WZWN0b3IyO1xuICB9KSB7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZW50cmllcyhWUk1FeHByZXNzaW9uVGV4dHVyZVRyYW5zZm9ybUJpbmQuX3Byb3BlcnR5TmFtZXNNYXApLmZpbmQoXG4gICAgICAoW2Rpc3Rpbmd1aXNoZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiAobWF0ZXJpYWwgYXMgYW55KVtkaXN0aW5ndWlzaGVyXSA9PT0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgKT8uWzFdO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZXMgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVHJpZWQgdG8gYWRkIGEgdGV4dHVyZSB0cmFuc2Zvcm0gYmluZCB0byB0aGUgbWF0ZXJpYWwgJHtcbiAgICAgICAgICBtYXRlcmlhbC5uYW1lID8/ICcobm8gbmFtZSknXG4gICAgICAgIH0gYnV0IHRoZSBtYXRlcmlhbCBpcyBub3Qgc3VwcG9ydGVkLmAsXG4gICAgICApO1xuXG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSBbXTtcblxuICAgICAgcHJvcGVydHlOYW1lcy5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9ICgobWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIFRIUkVFLlRleHR1cmUgfCB1bmRlZmluZWQpPy5jbG9uZSgpO1xuICAgICAgICBpZiAoIXRleHR1cmUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIChtYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gPSB0ZXh0dXJlOyAvLyBiZWNhdXNlIHRoZSB0ZXh0dXJlIGlzIGNsb25lZFxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxPZmZzZXQgPSB0ZXh0dXJlLm9mZnNldC5jbG9uZSgpO1xuICAgICAgICBjb25zdCBpbml0aWFsU2NhbGUgPSB0ZXh0dXJlLnJlcGVhdC5jbG9uZSgpO1xuICAgICAgICBjb25zdCBkZWx0YU9mZnNldCA9IG9mZnNldC5jbG9uZSgpLnN1Yihpbml0aWFsT2Zmc2V0KTtcbiAgICAgICAgY29uc3QgZGVsdGFTY2FsZSA9IHNjYWxlLmNsb25lKCkuc3ViKGluaXRpYWxTY2FsZSk7XG5cbiAgICAgICAgdGhpcy5fcHJvcGVydGllcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgaW5pdGlhbE9mZnNldCxcbiAgICAgICAgICBkZWx0YU9mZnNldCxcbiAgICAgICAgICBpbml0aWFsU2NhbGUsXG4gICAgICAgICAgZGVsdGFTY2FsZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXBwbHlXZWlnaHQod2VpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9wcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSAodGhpcy5tYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5Lm5hbWVdIGFzIFRIUkVFLlRleHR1cmU7XG4gICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBUT0RPOiB3ZSBzaG91bGQga2ljayB0aGlzIGF0IGBhZGRNYXRlcmlhbFZhbHVlYFxuXG4gICAgICB0YXJnZXQub2Zmc2V0LmFkZChfdjIuY29weShwcm9wZXJ0eS5kZWx0YU9mZnNldCkubXVsdGlwbHlTY2FsYXIod2VpZ2h0KSk7XG4gICAgICB0YXJnZXQucmVwZWF0LmFkZChfdjIuY29weShwcm9wZXJ0eS5kZWx0YVNjYWxlKS5tdWx0aXBseVNjYWxhcih3ZWlnaHQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFwcGxpZWRXZWlnaHQoKTogdm9pZCB7XG4gICAgdGhpcy5fcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eS5uYW1lXSBhcyBUSFJFRS5UZXh0dXJlO1xuICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gVE9ETzogd2Ugc2hvdWxkIGtpY2sgdGhpcyBhdCBgYWRkTWF0ZXJpYWxWYWx1ZWBcblxuICAgICAgdGFyZ2V0Lm9mZnNldC5jb3B5KHByb3BlcnR5LmluaXRpYWxPZmZzZXQpO1xuICAgICAgdGFyZ2V0LnJlcGVhdC5jb3B5KHByb3BlcnR5LmluaXRpYWxTY2FsZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuZXhwb3J0IGNvbnN0IFZSTUV4cHJlc3Npb25PdmVycmlkZVR5cGUgPSB7XG4gIE5vbmU6ICdub25lJyxcbiAgQmxvY2s6ICdibG9jaycsXG4gIEJsZW5kOiAnYmxlbmQnLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSA9ICh0eXBlb2YgVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSlba2V5b2YgdHlwZW9mIFZSTUV4cHJlc3Npb25PdmVycmlkZVR5cGVdO1xuIiwgImltcG9ydCB0eXBlIHsgVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbiB9IGZyb20gJy4vVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi4vaHVtYW5vaWQnO1xuXG5leHBvcnQgY2xhc3MgVlJNRmlyc3RQZXJzb24ge1xuICAvKipcbiAgICogQSBkZWZhdWx0IGNhbWVyYSBsYXllciBmb3IgYEZpcnN0UGVyc29uT25seWAgbGF5ZXIuXG4gICAqXG4gICAqIEBzZWUgW1tnZXRGaXJzdFBlcnNvbk9ubHlMYXllcl1dXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRklSU1RQRVJTT05fT05MWV9MQVlFUiA9IDk7XG5cbiAgLyoqXG4gICAqIEEgZGVmYXVsdCBjYW1lcmEgbGF5ZXIgZm9yIGBUaGlyZFBlcnNvbk9ubHlgIGxheWVyLlxuICAgKlxuICAgKiBAc2VlIFtbZ2V0VGhpcmRQZXJzb25Pbmx5TGF5ZXJdXVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1RISVJEUEVSU09OX09OTFlfTEFZRVIgPSAxMDtcblxuICAvKipcbiAgICogSXRzIGFzc29jaWF0ZWQge0BsaW5rIFZSTUh1bWFub2lkfS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBodW1hbm9pZDogVlJNSHVtYW5vaWQ7XG4gIHB1YmxpYyBtZXNoQW5ub3RhdGlvbnM6IFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25bXTtcblxuICBwcml2YXRlIF9maXJzdFBlcnNvbk9ubHlMYXllciA9IFZSTUZpcnN0UGVyc29uLkRFRkFVTFRfRklSU1RQRVJTT05fT05MWV9MQVlFUjtcbiAgcHJpdmF0ZSBfdGhpcmRQZXJzb25Pbmx5TGF5ZXIgPSBWUk1GaXJzdFBlcnNvbi5ERUZBVUxUX1RISVJEUEVSU09OX09OTFlfTEFZRVI7XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWRMYXllcnMgPSBmYWxzZTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFZSTUZpcnN0UGVyc29uIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIGh1bWFub2lkIEEge0BsaW5rIFZSTUh1bWFub2lkfVxuICAgKiBAcGFyYW0gbWVzaEFubm90YXRpb25zIEEgcmVuZGVyZXIgc2V0dGluZ3MuIFNlZSB0aGUgZGVzY3JpcHRpb24gb2YgW1tSZW5kZXJlckZpcnN0UGVyc29uRmxhZ3NdXSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoaHVtYW5vaWQ6IFZSTUh1bWFub2lkLCBtZXNoQW5ub3RhdGlvbnM6IFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25bXSkge1xuICAgIHRoaXMuaHVtYW5vaWQgPSBodW1hbm9pZDtcbiAgICB0aGlzLm1lc2hBbm5vdGF0aW9ucyA9IG1lc2hBbm5vdGF0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IHRoZSBnaXZlbiB7QGxpbmsgVlJNRmlyc3RQZXJzb259IGludG8gdGhpcyBvbmUuXG4gICAqIHtAbGluayBodW1hbm9pZH0gbXVzdCBiZSBzYW1lIGFzIHRoZSBzb3VyY2Ugb25lLlxuICAgKiBAcGFyYW0gc291cmNlIFRoZSB7QGxpbmsgVlJNRmlyc3RQZXJzb259IHlvdSB3YW50IHRvIGNvcHlcbiAgICogQHJldHVybnMgdGhpc1xuICAgKi9cbiAgcHVibGljIGNvcHkoc291cmNlOiBWUk1GaXJzdFBlcnNvbik6IHRoaXMge1xuICAgIGlmICh0aGlzLmh1bWFub2lkICE9PSBzb3VyY2UuaHVtYW5vaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVlJNRmlyc3RQZXJzb246IGh1bWFub2lkIG11c3QgYmUgc2FtZSBpbiBvcmRlciB0byBjb3B5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5tZXNoQW5ub3RhdGlvbnMgPSBzb3VyY2UubWVzaEFubm90YXRpb25zLm1hcCgoYW5ub3RhdGlvbikgPT4gKHtcbiAgICAgIG1lc2hlczogYW5ub3RhdGlvbi5tZXNoZXMuY29uY2F0KCksXG4gICAgICB0eXBlOiBhbm5vdGF0aW9uLnR5cGUsXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNsb25lIG9mIHRoaXMge0BsaW5rIFZSTUZpcnN0UGVyc29ufS5cbiAgICogQHJldHVybnMgQ29waWVkIHtAbGluayBWUk1GaXJzdFBlcnNvbn1cbiAgICovXG4gIHB1YmxpYyBjbG9uZSgpOiBWUk1GaXJzdFBlcnNvbiB7XG4gICAgcmV0dXJuIG5ldyBWUk1GaXJzdFBlcnNvbih0aGlzLmh1bWFub2lkLCB0aGlzLm1lc2hBbm5vdGF0aW9ucykuY29weSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNhbWVyYSBsYXllciByZXByZXNlbnRzIGBGaXJzdFBlcnNvbk9ubHlgIGxheWVyLlxuICAgKiBOb3RlIHRoYXQgKip5b3UgbXVzdCBjYWxsIHtAbGluayBzZXR1cH0gZmlyc3QgYmVmb3JlIHlvdSB1c2UgdGhlIGxheWVyIGZlYXR1cmUqKiBvciBpdCBkb2VzIG5vdCB3b3JrIHByb3Blcmx5LlxuICAgKlxuICAgKiBUaGUgdmFsdWUgaXMge0BsaW5rIERFRkFVTFRfRklSU1RQRVJTT05fT05MWV9MQVlFUn0gYnkgZGVmYXVsdCBidXQgeW91IGNhbiBjaGFuZ2UgdGhlIGxheWVyIGJ5IHNwZWNpZnlpbmcgdmlhIHtAbGluayBzZXR1cH0gaWYgeW91IHByZWZlci5cbiAgICpcbiAgICogQHNlZSBodHRwczovL3ZybS5kZXYvZW4vdW5pdnJtL2FwaS91bml2cm1fdXNlX2ZpcnN0cGVyc29uL1xuICAgKiBAc2VlIGh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jYXBpL2VuL2NvcmUvTGF5ZXJzXG4gICAqL1xuICBwdWJsaWMgZ2V0IGZpcnN0UGVyc29uT25seUxheWVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY2FtZXJhIGxheWVyIHJlcHJlc2VudHMgYFRoaXJkUGVyc29uT25seWAgbGF5ZXIuXG4gICAqIE5vdGUgdGhhdCAqKnlvdSBtdXN0IGNhbGwge0BsaW5rIHNldHVwfSBmaXJzdCBiZWZvcmUgeW91IHVzZSB0aGUgbGF5ZXIgZmVhdHVyZSoqIG9yIGl0IGRvZXMgbm90IHdvcmsgcHJvcGVybHkuXG4gICAqXG4gICAqIFRoZSB2YWx1ZSBpcyB7QGxpbmsgREVGQVVMVF9USElSRFBFUlNPTl9PTkxZX0xBWUVSfSBieSBkZWZhdWx0IGJ1dCB5b3UgY2FuIGNoYW5nZSB0aGUgbGF5ZXIgYnkgc3BlY2lmeWluZyB2aWEge0BsaW5rIHNldHVwfSBpZiB5b3UgcHJlZmVyLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vdnJtLmRldi9lbi91bml2cm0vYXBpL3VuaXZybV91c2VfZmlyc3RwZXJzb24vXG4gICAqIEBzZWUgaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzLyNhcGkvZW4vY29yZS9MYXllcnNcbiAgICovXG4gIHB1YmxpYyBnZXQgdGhpcmRQZXJzb25Pbmx5TGF5ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXI7XG4gIH1cblxuICAvKipcbiAgICogSW4gdGhpcyBtZXRob2QsIGl0IGFzc2lnbnMgbGF5ZXJzIGZvciBldmVyeSBtZXNoZXMgYmFzZWQgb24gbWVzaCBhbm5vdGF0aW9ucy5cbiAgICogWW91IG11c3QgY2FsbCB0aGlzIG1ldGhvZCBmaXJzdCBiZWZvcmUgeW91IHVzZSB0aGUgbGF5ZXIgZmVhdHVyZS5cbiAgICpcbiAgICogVGhpcyBpcyBhbiBlcXVpdmFsZW50IG9mIFtWUk1GaXJzdFBlcnNvbi5TZXR1cF0oaHR0cHM6Ly9naXRodWIuY29tL3ZybS1jL1VuaVZSTS9ibG9iLzczYTViZDhmY2RkYWEyYTdhODczNTA5OWE5N2U2M2M5ZGIzZTVlYTAvQXNzZXRzL1ZSTS9SdW50aW1lL0ZpcnN0UGVyc29uL1ZSTUZpcnN0UGVyc29uLmNzI0wyOTUtTDI5OSkgb2YgdGhlIFVuaVZSTS5cbiAgICpcbiAgICogVGhlIGBjYW1lcmFMYXllcmAgcGFyYW1ldGVyIHNwZWNpZmllcyB3aGljaCBsYXllciB3aWxsIGJlIGFzc2lnbmVkIGZvciBgRmlyc3RQZXJzb25Pbmx5YCAvIGBUaGlyZFBlcnNvbk9ubHlgLlxuICAgKiBJbiBVbmlWUk0sIHdlIHNwZWNpZmllZCB0aG9zZSBieSBuYW1pbmcgZWFjaCBkZXNpcmVkIGxheWVyIGFzIGBGSVJTVFBFUlNPTl9PTkxZX0xBWUVSYCAvIGBUSElSRFBFUlNPTl9PTkxZX0xBWUVSYFxuICAgKiBidXQgd2UgYXJlIGdvaW5nIHRvIHNwZWNpZnkgdGhlc2UgbGF5ZXJzIGF0IGhlcmUgc2luY2Ugd2UgYXJlIHVuYWJsZSB0byBuYW1lIGxheWVycyBpbiBUaHJlZS5qcy5cbiAgICpcbiAgICogQHBhcmFtIGNhbWVyYUxheWVyIFNwZWNpZnkgd2hpY2ggbGF5ZXIgd2lsbCBiZSBmb3IgYEZpcnN0UGVyc29uT25seWAgLyBgVGhpcmRQZXJzb25Pbmx5YC5cbiAgICovXG4gIHB1YmxpYyBzZXR1cCh7XG4gICAgZmlyc3RQZXJzb25Pbmx5TGF5ZXIgPSBWUk1GaXJzdFBlcnNvbi5ERUZBVUxUX0ZJUlNUUEVSU09OX09OTFlfTEFZRVIsXG4gICAgdGhpcmRQZXJzb25Pbmx5TGF5ZXIgPSBWUk1GaXJzdFBlcnNvbi5ERUZBVUxUX1RISVJEUEVSU09OX09OTFlfTEFZRVIsXG4gIH0gPSB7fSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZExheWVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllciA9IGZpcnN0UGVyc29uT25seUxheWVyO1xuICAgIHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyID0gdGhpcmRQZXJzb25Pbmx5TGF5ZXI7XG5cbiAgICB0aGlzLm1lc2hBbm5vdGF0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLm1lc2hlcy5mb3JFYWNoKChtZXNoKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdmaXJzdFBlcnNvbk9ubHknKSB7XG4gICAgICAgICAgbWVzaC5sYXllcnMuc2V0KHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyKTtcbiAgICAgICAgICBtZXNoLnRyYXZlcnNlKChjaGlsZCkgPT4gY2hpbGQubGF5ZXJzLnNldCh0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllcikpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ3RoaXJkUGVyc29uT25seScpIHtcbiAgICAgICAgICBtZXNoLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpO1xuICAgICAgICAgIG1lc2gudHJhdmVyc2UoKGNoaWxkKSA9PiBjaGlsZC5sYXllcnMuc2V0KHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnYXV0bycpIHtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVIZWFkbGVzc01vZGVsKG1lc2gpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2luaXRpYWxpemVkTGF5ZXJzID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2V4Y2x1ZGVUcmlhbmdsZXModHJpYW5nbGVzOiBudW1iZXJbXSwgYndzOiBudW1iZXJbXVtdLCBza2luSW5kZXg6IG51bWJlcltdW10sIGV4Y2x1ZGU6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGlmIChid3MgIT0gbnVsbCAmJiBid3MubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlhbmdsZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgY29uc3QgYSA9IHRyaWFuZ2xlc1tpXTtcbiAgICAgICAgY29uc3QgYiA9IHRyaWFuZ2xlc1tpICsgMV07XG4gICAgICAgIGNvbnN0IGMgPSB0cmlhbmdsZXNbaSArIDJdO1xuICAgICAgICBjb25zdCBidzAgPSBid3NbYV07XG4gICAgICAgIGNvbnN0IHNraW4wID0gc2tpbkluZGV4W2FdO1xuXG4gICAgICAgIGlmIChidzBbMF0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjBbMF0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MFsxXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMFsxXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncwWzJdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4wWzJdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzBbM10gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjBbM10pKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBidzEgPSBid3NbYl07XG4gICAgICAgIGNvbnN0IHNraW4xID0gc2tpbkluZGV4W2JdO1xuICAgICAgICBpZiAoYncxWzBdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4xWzBdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzFbMV0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjFbMV0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MVsyXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMVsyXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncxWzNdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4xWzNdKSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgYncyID0gYndzW2NdO1xuICAgICAgICBjb25zdCBza2luMiA9IHNraW5JbmRleFtjXTtcbiAgICAgICAgaWYgKGJ3MlswXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMlswXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncyWzFdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4yWzFdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzJbMl0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjJbMl0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MlszXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMlszXSkpIGNvbnRpbnVlO1xuXG4gICAgICAgIHRyaWFuZ2xlc1tjb3VudCsrXSA9IGE7XG4gICAgICAgIHRyaWFuZ2xlc1tjb3VudCsrXSA9IGI7XG4gICAgICAgIHRyaWFuZ2xlc1tjb3VudCsrXSA9IGM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVyYXNlZE1lc2goc3JjOiBUSFJFRS5Ta2lubmVkTWVzaCwgZXJhc2luZ0JvbmVzSW5kZXg6IG51bWJlcltdKTogVEhSRUUuU2tpbm5lZE1lc2gge1xuICAgIGNvbnN0IGRzdCA9IG5ldyBUSFJFRS5Ta2lubmVkTWVzaChzcmMuZ2VvbWV0cnkuY2xvbmUoKSwgc3JjLm1hdGVyaWFsKTtcbiAgICBkc3QubmFtZSA9IGAke3NyYy5uYW1lfShlcmFzZSlgO1xuICAgIGRzdC5mcnVzdHVtQ3VsbGVkID0gc3JjLmZydXN0dW1DdWxsZWQ7XG4gICAgZHN0LmxheWVycy5zZXQodGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXIpO1xuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBkc3QuZ2VvbWV0cnk7XG5cbiAgICBjb25zdCBza2luSW5kZXhBdHRyID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCdza2luSW5kZXgnKTtcbiAgICBjb25zdCBza2luSW5kZXhBdHRyQXJyYXkgPSBza2luSW5kZXhBdHRyIGluc3RhbmNlb2YgVEhSRUUuR0xCdWZmZXJBdHRyaWJ1dGUgPyBbXSA6IHNraW5JbmRleEF0dHIuYXJyYXk7XG4gICAgY29uc3Qgc2tpbkluZGV4ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2luSW5kZXhBdHRyQXJyYXkubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgIHNraW5JbmRleC5wdXNoKFtcbiAgICAgICAgc2tpbkluZGV4QXR0ckFycmF5W2ldLFxuICAgICAgICBza2luSW5kZXhBdHRyQXJyYXlbaSArIDFdLFxuICAgICAgICBza2luSW5kZXhBdHRyQXJyYXlbaSArIDJdLFxuICAgICAgICBza2luSW5kZXhBdHRyQXJyYXlbaSArIDNdLFxuICAgICAgXSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2tpbldlaWdodEF0dHIgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoJ3NraW5XZWlnaHQnKTtcbiAgICBjb25zdCBza2luV2VpZ2h0QXR0ckFycmF5ID0gc2tpbldlaWdodEF0dHIgaW5zdGFuY2VvZiBUSFJFRS5HTEJ1ZmZlckF0dHJpYnV0ZSA/IFtdIDogc2tpbldlaWdodEF0dHIuYXJyYXk7XG4gICAgY29uc3Qgc2tpbldlaWdodCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbldlaWdodEF0dHJBcnJheS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgc2tpbldlaWdodC5wdXNoKFtcbiAgICAgICAgc2tpbldlaWdodEF0dHJBcnJheVtpXSxcbiAgICAgICAgc2tpbldlaWdodEF0dHJBcnJheVtpICsgMV0sXG4gICAgICAgIHNraW5XZWlnaHRBdHRyQXJyYXlbaSArIDJdLFxuICAgICAgICBza2luV2VpZ2h0QXR0ckFycmF5W2kgKyAzXSxcbiAgICAgIF0pO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2VvbWV0cnkgZG9lc24ndCBoYXZlIGFuIGluZGV4IGJ1ZmZlclwiKTtcbiAgICB9XG4gICAgY29uc3Qgb2xkVHJpYW5nbGVzID0gQXJyYXkuZnJvbShpbmRleC5hcnJheSk7XG5cbiAgICBjb25zdCBjb3VudCA9IHRoaXMuX2V4Y2x1ZGVUcmlhbmdsZXMob2xkVHJpYW5nbGVzLCBza2luV2VpZ2h0LCBza2luSW5kZXgsIGVyYXNpbmdCb25lc0luZGV4KTtcbiAgICBjb25zdCBuZXdUcmlhbmdsZTogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIG5ld1RyaWFuZ2xlW2ldID0gb2xkVHJpYW5nbGVzW2ldO1xuICAgIH1cbiAgICBnZW9tZXRyeS5zZXRJbmRleChuZXdUcmlhbmdsZSk7XG5cbiAgICAvLyBtdG9vbiBtYXRlcmlhbCBpbmNsdWRlcyBvbkJlZm9yZVJlbmRlci4gdGhpcyBpcyB1bnN1cHBvcnRlZCBhdCBTa2lubmVkTWVzaCNjbG9uZVxuICAgIGlmIChzcmMub25CZWZvcmVSZW5kZXIpIHtcbiAgICAgIGRzdC5vbkJlZm9yZVJlbmRlciA9IHNyYy5vbkJlZm9yZVJlbmRlcjtcbiAgICB9XG4gICAgZHN0LmJpbmQobmV3IFRIUkVFLlNrZWxldG9uKHNyYy5za2VsZXRvbi5ib25lcywgc3JjLnNrZWxldG9uLmJvbmVJbnZlcnNlcyksIG5ldyBUSFJFRS5NYXRyaXg0KCkpO1xuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVIZWFkbGVzc01vZGVsRm9yU2tpbm5lZE1lc2gocGFyZW50OiBUSFJFRS5PYmplY3QzRCwgbWVzaDogVEhSRUUuU2tpbm5lZE1lc2gpOiB2b2lkIHtcbiAgICBjb25zdCBlcmFzZUJvbmVJbmRleGVzOiBudW1iZXJbXSA9IFtdO1xuICAgIG1lc2guc2tlbGV0b24uYm9uZXMuZm9yRWFjaCgoYm9uZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc0VyYXNlVGFyZ2V0KGJvbmUpKSBlcmFzZUJvbmVJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgLy8gVW5saWtlIFVuaVZSTSB3ZSBkb24ndCBjb3B5IG1lc2ggaWYgbm8gaW52aXNpYmxlIGJvbmUgd2FzIGZvdW5kXG4gICAgaWYgKCFlcmFzZUJvbmVJbmRleGVzLmxlbmd0aCkge1xuICAgICAgbWVzaC5sYXllcnMuZW5hYmxlKHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKTtcbiAgICAgIG1lc2gubGF5ZXJzLmVuYWJsZSh0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG1lc2gubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcik7XG4gICAgY29uc3QgbmV3TWVzaCA9IHRoaXMuX2NyZWF0ZUVyYXNlZE1lc2gobWVzaCwgZXJhc2VCb25lSW5kZXhlcyk7XG4gICAgcGFyZW50LmFkZChuZXdNZXNoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUhlYWRsZXNzTW9kZWwobm9kZTogVEhSRUUuT2JqZWN0M0QpOiB2b2lkIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAnR3JvdXAnKSB7XG4gICAgICBub2RlLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpO1xuICAgICAgaWYgKHRoaXMuX2lzRXJhc2VUYXJnZXQobm9kZSkpIHtcbiAgICAgICAgbm9kZS50cmF2ZXJzZSgoY2hpbGQpID0+IGNoaWxkLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBwYXJlbnQubmFtZSA9IGBfaGVhZGxlc3NfJHtub2RlLm5hbWV9YDtcbiAgICAgICAgcGFyZW50LmxheWVycy5zZXQodGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXIpO1xuICAgICAgICBub2RlLnBhcmVudCEuYWRkKHBhcmVudCk7XG4gICAgICAgIG5vZGUuY2hpbGRyZW5cbiAgICAgICAgICAuZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQudHlwZSA9PT0gJ1NraW5uZWRNZXNoJylcbiAgICAgICAgICAuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNraW5uZWRNZXNoID0gY2hpbGQgYXMgVEhSRUUuU2tpbm5lZE1lc2g7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVIZWFkbGVzc01vZGVsRm9yU2tpbm5lZE1lc2gocGFyZW50LCBza2lubmVkTWVzaCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICdTa2lubmVkTWVzaCcpIHtcbiAgICAgIGNvbnN0IHNraW5uZWRNZXNoID0gbm9kZSBhcyBUSFJFRS5Ta2lubmVkTWVzaDtcbiAgICAgIHRoaXMuX2NyZWF0ZUhlYWRsZXNzTW9kZWxGb3JTa2lubmVkTWVzaChub2RlLnBhcmVudCEsIHNraW5uZWRNZXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2lzRXJhc2VUYXJnZXQobm9kZSkpIHtcbiAgICAgICAgbm9kZS5sYXllcnMuc2V0KHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKTtcbiAgICAgICAgbm9kZS50cmF2ZXJzZSgoY2hpbGQpID0+IGNoaWxkLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc0VyYXNlVGFyZ2V0KGJvbmU6IFRIUkVFLk9iamVjdDNEKTogYm9vbGVhbiB7XG4gICAgaWYgKGJvbmUgPT09IHRoaXMuaHVtYW5vaWQuZ2V0UmF3Qm9uZU5vZGUoJ2hlYWQnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICghYm9uZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzRXJhc2VUYXJnZXQoYm9uZS5wYXJlbnQpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB0eXBlICogYXMgVjBWUk0gZnJvbSAnQHBpeGl2L3R5cGVzLXZybS0wLjAnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMVZSTVNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy12cm0tMS4wJztcbmltcG9ydCB0eXBlIHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4uL2h1bWFub2lkL1ZSTUh1bWFub2lkJztcbmltcG9ydCB7IGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlcyB9IGZyb20gJy4uL3V0aWxzL2dsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlJztcbmltcG9ydCB7IFZSTUZpcnN0UGVyc29uIH0gZnJvbSAnLi9WUk1GaXJzdFBlcnNvbic7XG5pbXBvcnQgdHlwZSB7IFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb24gfSBmcm9tICcuL1ZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb24nO1xuaW1wb3J0IHR5cGUgeyBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZSB9IGZyb20gJy4vVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvblR5cGUnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIHNwZWMgdmVyc2lvbnMgaXQgcmVjb2duaXplcy5cbiAqL1xuY29uc3QgUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyA9IG5ldyBTZXQoWycxLjAnLCAnMS4wLWJldGEnXSk7XG5cbi8qKlxuICogQSBwbHVnaW4gb2YgR0xURkxvYWRlciB0aGF0IGltcG9ydHMgYSB7QGxpbmsgVlJNRmlyc3RQZXJzb259IGZyb20gYSBWUk0gZXh0ZW5zaW9uIG9mIGEgR0xURi5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luIGltcGxlbWVudHMgR0xURkxvYWRlclBsdWdpbiB7XG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICByZXR1cm4gJ1ZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luJztcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlclJvb3QoZ2x0ZjogR0xURik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHZybUh1bWFub2lkID0gZ2x0Zi51c2VyRGF0YS52cm1IdW1hbm9pZCBhcyBWUk1IdW1hbm9pZCB8IHVuZGVmaW5lZDtcblxuICAgIC8vIGV4cGxpY2l0bHkgZGlzdGluZ3Vpc2ggbnVsbCBhbmQgdW5kZWZpbmVkXG4gICAgLy8gc2luY2UgdnJtSHVtYW5vaWQgbWlnaHQgYmUgbnVsbCBhcyBhIHJlc3VsdFxuICAgIGlmICh2cm1IdW1hbm9pZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodnJtSHVtYW5vaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW46IHZybUh1bWFub2lkIGlzIHVuZGVmaW5lZC4gVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW4gaGF2ZSB0byBiZSB1c2VkIGZpcnN0JyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZ2x0Zi51c2VyRGF0YS52cm1GaXJzdFBlcnNvbiA9IGF3YWl0IHRoaXMuX2ltcG9ydChnbHRmLCB2cm1IdW1hbm9pZCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGEge0BsaW5rIFZSTUZpcnN0UGVyc29ufSBmcm9tIGEgVlJNLlxuICAgKlxuICAgKiBAcGFyYW0gZ2x0ZiBBIHBhcnNlZCByZXN1bHQgb2YgR0xURiB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcbiAgICogQHBhcmFtIGh1bWFub2lkIEEge0BsaW5rIFZSTUh1bWFub2lkfSBpbnN0YW5jZSB0aGF0IHJlcHJlc2VudHMgdGhlIFZSTVxuICAgKi9cblxuICBwcml2YXRlIGFzeW5jIF9pbXBvcnQoZ2x0ZjogR0xURiwgaHVtYW5vaWQ6IFZSTUh1bWFub2lkIHwgbnVsbCk6IFByb21pc2U8VlJNRmlyc3RQZXJzb24gfCBudWxsPiB7XG4gICAgaWYgKGh1bWFub2lkID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHYxUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjFJbXBvcnQoZ2x0ZiwgaHVtYW5vaWQpO1xuICAgIGlmICh2MVJlc3VsdCkge1xuICAgICAgcmV0dXJuIHYxUmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHYwUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjBJbXBvcnQoZ2x0ZiwgaHVtYW5vaWQpO1xuICAgIGlmICh2MFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHYwUmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjFJbXBvcnQoZ2x0ZjogR0xURiwgaHVtYW5vaWQ6IFZSTUh1bWFub2lkKTogUHJvbWlzZTxWUk1GaXJzdFBlcnNvbiB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgaXNWUk1Vc2VkID0ganNvbi5leHRlbnNpb25zVXNlZD8uaW5kZXhPZignVlJNQ192cm0nKSAhPT0gLTE7XG4gICAgaWYgKCFpc1ZSTVVzZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGpzb24uZXh0ZW5zaW9ucz8uWydWUk1DX3ZybSddIGFzIFYxVlJNU2NoZW1hLlZSTUNWUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCFleHRlbnNpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNwZWNWZXJzaW9uID0gZXh0ZW5zaW9uLnNwZWNWZXJzaW9uO1xuICAgIGlmICghUE9TU0lCTEVfU1BFQ19WRVJTSU9OUy5oYXMoc3BlY1ZlcnNpb24pKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luOiBVbmtub3duIFZSTUNfdnJtIHNwZWNWZXJzaW9uIFwiJHtzcGVjVmVyc2lvbn1cImApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hRmlyc3RQZXJzb24gPSBleHRlbnNpb24uZmlyc3RQZXJzb247XG5cbiAgICBjb25zdCBtZXNoQW5ub3RhdGlvbnM6IFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25bXSA9IFtdO1xuICAgIGNvbnN0IG5vZGVQcmltaXRpdmVzTWFwID0gYXdhaXQgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGVzKGdsdGYpO1xuICAgIEFycmF5LmZyb20obm9kZVByaW1pdGl2ZXNNYXAuZW50cmllcygpKS5mb3JFYWNoKChbbm9kZUluZGV4LCBwcmltaXRpdmVzXSkgPT4ge1xuICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IHNjaGVtYUZpcnN0UGVyc29uPy5tZXNoQW5ub3RhdGlvbnM/LmZpbmQoKGEpID0+IGEubm9kZSA9PT0gbm9kZUluZGV4KTtcblxuICAgICAgbWVzaEFubm90YXRpb25zLnB1c2goe1xuICAgICAgICBtZXNoZXM6IHByaW1pdGl2ZXMsXG4gICAgICAgIHR5cGU6IGFubm90YXRpb24/LnR5cGUgPz8gJ2F1dG8nLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IFZSTUZpcnN0UGVyc29uKGh1bWFub2lkLCBtZXNoQW5ub3RhdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjBJbXBvcnQoZ2x0ZjogR0xURiwgaHVtYW5vaWQ6IFZSTUh1bWFub2lkKTogUHJvbWlzZTxWUk1GaXJzdFBlcnNvbiB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgY29uc3QgdnJtRXh0ID0ganNvbi5leHRlbnNpb25zPy5WUk0gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdnJtRXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFGaXJzdFBlcnNvbjogVjBWUk0uRmlyc3RQZXJzb24gfCB1bmRlZmluZWQgPSB2cm1FeHQuZmlyc3RQZXJzb247XG4gICAgaWYgKCFzY2hlbWFGaXJzdFBlcnNvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbWVzaEFubm90YXRpb25zOiBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uW10gPSBbXTtcbiAgICBjb25zdCBub2RlUHJpbWl0aXZlc01hcCA9IGF3YWl0IGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlcyhnbHRmKTtcblxuICAgIEFycmF5LmZyb20obm9kZVByaW1pdGl2ZXNNYXAuZW50cmllcygpKS5mb3JFYWNoKChbbm9kZUluZGV4LCBwcmltaXRpdmVzXSkgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1hTm9kZSA9IGpzb24ubm9kZXMhW25vZGVJbmRleF07XG5cbiAgICAgIGNvbnN0IGZsYWcgPSBzY2hlbWFGaXJzdFBlcnNvbi5tZXNoQW5ub3RhdGlvbnNcbiAgICAgICAgPyBzY2hlbWFGaXJzdFBlcnNvbi5tZXNoQW5ub3RhdGlvbnMuZmluZCgoYSkgPT4gYS5tZXNoID09PSBzY2hlbWFOb2RlLm1lc2gpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBtZXNoQW5ub3RhdGlvbnMucHVzaCh7XG4gICAgICAgIG1lc2hlczogcHJpbWl0aXZlcyxcbiAgICAgICAgdHlwZTogdGhpcy5fY29udmVydFYwRmxhZ1RvVjFUeXBlKGZsYWc/LmZpcnN0UGVyc29uRmxhZyksXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgVlJNRmlyc3RQZXJzb24oaHVtYW5vaWQsIG1lc2hBbm5vdGF0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF9jb252ZXJ0VjBGbGFnVG9WMVR5cGUoZmxhZzogc3RyaW5nIHwgdW5kZWZpbmVkKTogVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvblR5cGUge1xuICAgIGlmIChmbGFnID09PSAnRmlyc3RQZXJzb25Pbmx5Jykge1xuICAgICAgcmV0dXJuICdmaXJzdFBlcnNvbk9ubHknO1xuICAgIH0gZWxzZSBpZiAoZmxhZyA9PT0gJ1RoaXJkUGVyc29uT25seScpIHtcbiAgICAgIHJldHVybiAndGhpcmRQZXJzb25Pbmx5JztcbiAgICB9IGVsc2UgaWYgKGZsYWcgPT09ICdCb3RoJykge1xuICAgICAgcmV0dXJuICdib3RoJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgaXMgJ0F1dG8nIGV2ZW4gaW4gVlJNMFxuICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvVW5pVlJNL2Jsb2IvMDdkOThlMmYxYWJjNTI4ZDM4N2Y4NjBkMjIyNGQwODU1YjBkMGI1OS9Bc3NldHMvVlJNL1J1bnRpbWUvRmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb24uY3MjTDExNy1MMTE5XG4gICAgICByZXR1cm4gJ2F1dG8nO1xuICAgIH1cbiAgfVxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG5leHBvcnQgY29uc3QgVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvblR5cGUgPSB7XG4gIEF1dG86ICdhdXRvJyxcbiAgQm90aDogJ2JvdGgnLFxuICBUaGlyZFBlcnNvbk9ubHk6ICd0aGlyZFBlcnNvbk9ubHknLFxuICBGaXJzdFBlcnNvbk9ubHk6ICdmaXJzdFBlcnNvbk9ubHknLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvblR5cGUgPVxuICAodHlwZW9mIFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25UeXBlKVtrZXlvZiB0eXBlb2YgVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvblR5cGVdO1xuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFZSTUh1bWFuQm9uZSB9IGZyb20gJy4uL1ZSTUh1bWFuQm9uZSc7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4uL1ZSTUh1bWFub2lkJztcblxuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfdjNCID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF9xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbmV4cG9ydCBjbGFzcyBWUk1IdW1hbm9pZEhlbHBlciBleHRlbmRzIFRIUkVFLkdyb3VwIHtcbiAgcHVibGljIHJlYWRvbmx5IHZybUh1bWFub2lkOiBWUk1IdW1hbm9pZDtcbiAgcHJpdmF0ZSBfYm9uZUF4ZXNNYXA6IE1hcDxWUk1IdW1hbkJvbmUsIFRIUkVFLkF4ZXNIZWxwZXI+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbm9pZDogVlJNSHVtYW5vaWQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52cm1IdW1hbm9pZCA9IGh1bWFub2lkO1xuXG4gICAgdGhpcy5fYm9uZUF4ZXNNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICBPYmplY3QudmFsdWVzKGh1bWFub2lkLmh1bWFuQm9uZXMpLmZvckVhY2goKGJvbmUpID0+IHtcbiAgICAgIGNvbnN0IGhlbHBlciA9IG5ldyBUSFJFRS5BeGVzSGVscGVyKDEuMCk7XG5cbiAgICAgIGhlbHBlci5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgIChoZWxwZXIubWF0ZXJpYWwgYXMgVEhSRUUuTWF0ZXJpYWwpLmRlcHRoVGVzdCA9IGZhbHNlO1xuICAgICAgKGhlbHBlci5tYXRlcmlhbCBhcyBUSFJFRS5NYXRlcmlhbCkuZGVwdGhXcml0ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmFkZChoZWxwZXIpO1xuXG4gICAgICB0aGlzLl9ib25lQXhlc01hcC5zZXQoYm9uZSwgaGVscGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xuICAgIEFycmF5LmZyb20odGhpcy5fYm9uZUF4ZXNNYXAudmFsdWVzKCkpLmZvckVhY2goKGF4ZXMpID0+IHtcbiAgICAgIGF4ZXMuZ2VvbWV0cnkuZGlzcG9zZSgpO1xuICAgICAgKGF4ZXMubWF0ZXJpYWwgYXMgVEhSRUUuTWF0ZXJpYWwpLmRpc3Bvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVNYXRyaXhXb3JsZChmb3JjZTogYm9vbGVhbik6IHZvaWQge1xuICAgIEFycmF5LmZyb20odGhpcy5fYm9uZUF4ZXNNYXAuZW50cmllcygpKS5mb3JFYWNoKChbYm9uZSwgYXhlc10pID0+IHtcbiAgICAgIGJvbmUubm9kZS51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7XG5cbiAgICAgIGJvbmUubm9kZS5tYXRyaXhXb3JsZC5kZWNvbXBvc2UoX3YzQSwgX3F1YXRBLCBfdjNCKTtcblxuICAgICAgY29uc3Qgc2NhbGUgPSBfdjNBLnNldCgwLjEsIDAuMSwgMC4xKS5kaXZpZGUoX3YzQik7XG4gICAgICBheGVzLm1hdHJpeC5jb3B5KGJvbmUubm9kZS5tYXRyaXhXb3JsZCkuc2NhbGUoc2NhbGUpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudXBkYXRlTWF0cml4V29ybGQoZm9yY2UpO1xuICB9XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbmltcG9ydCB7IFZSTUh1bWFuQm9uZU5hbWUgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZU5hbWUnO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfS4gRGVwZW5kZW5jeSBhd2FyZS5cbiAqL1xuZXhwb3J0IGNvbnN0IFZSTUh1bWFuQm9uZUxpc3Q6IFZSTUh1bWFuQm9uZU5hbWVbXSA9IFtcbiAgJ2hpcHMnLFxuICAnc3BpbmUnLFxuICAnY2hlc3QnLFxuICAndXBwZXJDaGVzdCcsXG4gICduZWNrJyxcblxuICAnaGVhZCcsXG4gICdsZWZ0RXllJyxcbiAgJ3JpZ2h0RXllJyxcbiAgJ2phdycsXG5cbiAgJ2xlZnRVcHBlckxlZycsXG4gICdsZWZ0TG93ZXJMZWcnLFxuICAnbGVmdEZvb3QnLFxuICAnbGVmdFRvZXMnLFxuXG4gICdyaWdodFVwcGVyTGVnJyxcbiAgJ3JpZ2h0TG93ZXJMZWcnLFxuICAncmlnaHRGb290JyxcbiAgJ3JpZ2h0VG9lcycsXG5cbiAgJ2xlZnRTaG91bGRlcicsXG4gICdsZWZ0VXBwZXJBcm0nLFxuICAnbGVmdExvd2VyQXJtJyxcbiAgJ2xlZnRIYW5kJyxcblxuICAncmlnaHRTaG91bGRlcicsXG4gICdyaWdodFVwcGVyQXJtJyxcbiAgJ3JpZ2h0TG93ZXJBcm0nLFxuICAncmlnaHRIYW5kJyxcblxuICAnbGVmdFRodW1iTWV0YWNhcnBhbCcsXG4gICdsZWZ0VGh1bWJQcm94aW1hbCcsXG4gICdsZWZ0VGh1bWJEaXN0YWwnLFxuICAnbGVmdEluZGV4UHJveGltYWwnLFxuICAnbGVmdEluZGV4SW50ZXJtZWRpYXRlJyxcbiAgJ2xlZnRJbmRleERpc3RhbCcsXG4gICdsZWZ0TWlkZGxlUHJveGltYWwnLFxuICAnbGVmdE1pZGRsZUludGVybWVkaWF0ZScsXG4gICdsZWZ0TWlkZGxlRGlzdGFsJyxcbiAgJ2xlZnRSaW5nUHJveGltYWwnLFxuICAnbGVmdFJpbmdJbnRlcm1lZGlhdGUnLFxuICAnbGVmdFJpbmdEaXN0YWwnLFxuICAnbGVmdExpdHRsZVByb3hpbWFsJyxcbiAgJ2xlZnRMaXR0bGVJbnRlcm1lZGlhdGUnLFxuICAnbGVmdExpdHRsZURpc3RhbCcsXG5cbiAgJ3JpZ2h0VGh1bWJNZXRhY2FycGFsJyxcbiAgJ3JpZ2h0VGh1bWJQcm94aW1hbCcsXG4gICdyaWdodFRodW1iRGlzdGFsJyxcbiAgJ3JpZ2h0SW5kZXhQcm94aW1hbCcsXG4gICdyaWdodEluZGV4SW50ZXJtZWRpYXRlJyxcbiAgJ3JpZ2h0SW5kZXhEaXN0YWwnLFxuICAncmlnaHRNaWRkbGVQcm94aW1hbCcsXG4gICdyaWdodE1pZGRsZUludGVybWVkaWF0ZScsXG4gICdyaWdodE1pZGRsZURpc3RhbCcsXG4gICdyaWdodFJpbmdQcm94aW1hbCcsXG4gICdyaWdodFJpbmdJbnRlcm1lZGlhdGUnLFxuICAncmlnaHRSaW5nRGlzdGFsJyxcbiAgJ3JpZ2h0TGl0dGxlUHJveGltYWwnLFxuICAncmlnaHRMaXR0bGVJbnRlcm1lZGlhdGUnLFxuICAncmlnaHRMaXR0bGVEaXN0YWwnLFxuXTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuLyoqXG4gKiBUaGUgbmFtZXMgb2Yge0BsaW5rIFZSTUh1bWFub2lkfSBib25lIG5hbWVzLlxuICpcbiAqIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3ZybS1jL3ZybS1zcGVjaWZpY2F0aW9uL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vVlJNQ192cm0tMS4wL2h1bWFub2lkLm1kXG4gKi9cbmV4cG9ydCBjb25zdCBWUk1IdW1hbkJvbmVOYW1lID0ge1xuICBIaXBzOiAnaGlwcycsXG4gIFNwaW5lOiAnc3BpbmUnLFxuICBDaGVzdDogJ2NoZXN0JyxcbiAgVXBwZXJDaGVzdDogJ3VwcGVyQ2hlc3QnLFxuICBOZWNrOiAnbmVjaycsXG5cbiAgSGVhZDogJ2hlYWQnLFxuICBMZWZ0RXllOiAnbGVmdEV5ZScsXG4gIFJpZ2h0RXllOiAncmlnaHRFeWUnLFxuICBKYXc6ICdqYXcnLFxuXG4gIExlZnRVcHBlckxlZzogJ2xlZnRVcHBlckxlZycsXG4gIExlZnRMb3dlckxlZzogJ2xlZnRMb3dlckxlZycsXG4gIExlZnRGb290OiAnbGVmdEZvb3QnLFxuICBMZWZ0VG9lczogJ2xlZnRUb2VzJyxcblxuICBSaWdodFVwcGVyTGVnOiAncmlnaHRVcHBlckxlZycsXG4gIFJpZ2h0TG93ZXJMZWc6ICdyaWdodExvd2VyTGVnJyxcbiAgUmlnaHRGb290OiAncmlnaHRGb290JyxcbiAgUmlnaHRUb2VzOiAncmlnaHRUb2VzJyxcblxuICBMZWZ0U2hvdWxkZXI6ICdsZWZ0U2hvdWxkZXInLFxuICBMZWZ0VXBwZXJBcm06ICdsZWZ0VXBwZXJBcm0nLFxuICBMZWZ0TG93ZXJBcm06ICdsZWZ0TG93ZXJBcm0nLFxuICBMZWZ0SGFuZDogJ2xlZnRIYW5kJyxcblxuICBSaWdodFNob3VsZGVyOiAncmlnaHRTaG91bGRlcicsXG4gIFJpZ2h0VXBwZXJBcm06ICdyaWdodFVwcGVyQXJtJyxcbiAgUmlnaHRMb3dlckFybTogJ3JpZ2h0TG93ZXJBcm0nLFxuICBSaWdodEhhbmQ6ICdyaWdodEhhbmQnLFxuXG4gIExlZnRUaHVtYk1ldGFjYXJwYWw6ICdsZWZ0VGh1bWJNZXRhY2FycGFsJyxcbiAgTGVmdFRodW1iUHJveGltYWw6ICdsZWZ0VGh1bWJQcm94aW1hbCcsXG4gIExlZnRUaHVtYkRpc3RhbDogJ2xlZnRUaHVtYkRpc3RhbCcsXG4gIExlZnRJbmRleFByb3hpbWFsOiAnbGVmdEluZGV4UHJveGltYWwnLFxuICBMZWZ0SW5kZXhJbnRlcm1lZGlhdGU6ICdsZWZ0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICBMZWZ0SW5kZXhEaXN0YWw6ICdsZWZ0SW5kZXhEaXN0YWwnLFxuICBMZWZ0TWlkZGxlUHJveGltYWw6ICdsZWZ0TWlkZGxlUHJveGltYWwnLFxuICBMZWZ0TWlkZGxlSW50ZXJtZWRpYXRlOiAnbGVmdE1pZGRsZUludGVybWVkaWF0ZScsXG4gIExlZnRNaWRkbGVEaXN0YWw6ICdsZWZ0TWlkZGxlRGlzdGFsJyxcbiAgTGVmdFJpbmdQcm94aW1hbDogJ2xlZnRSaW5nUHJveGltYWwnLFxuICBMZWZ0UmluZ0ludGVybWVkaWF0ZTogJ2xlZnRSaW5nSW50ZXJtZWRpYXRlJyxcbiAgTGVmdFJpbmdEaXN0YWw6ICdsZWZ0UmluZ0Rpc3RhbCcsXG4gIExlZnRMaXR0bGVQcm94aW1hbDogJ2xlZnRMaXR0bGVQcm94aW1hbCcsXG4gIExlZnRMaXR0bGVJbnRlcm1lZGlhdGU6ICdsZWZ0TGl0dGxlSW50ZXJtZWRpYXRlJyxcbiAgTGVmdExpdHRsZURpc3RhbDogJ2xlZnRMaXR0bGVEaXN0YWwnLFxuXG4gIFJpZ2h0VGh1bWJNZXRhY2FycGFsOiAncmlnaHRUaHVtYk1ldGFjYXJwYWwnLFxuICBSaWdodFRodW1iUHJveGltYWw6ICdyaWdodFRodW1iUHJveGltYWwnLFxuICBSaWdodFRodW1iRGlzdGFsOiAncmlnaHRUaHVtYkRpc3RhbCcsXG4gIFJpZ2h0SW5kZXhQcm94aW1hbDogJ3JpZ2h0SW5kZXhQcm94aW1hbCcsXG4gIFJpZ2h0SW5kZXhJbnRlcm1lZGlhdGU6ICdyaWdodEluZGV4SW50ZXJtZWRpYXRlJyxcbiAgUmlnaHRJbmRleERpc3RhbDogJ3JpZ2h0SW5kZXhEaXN0YWwnLFxuICBSaWdodE1pZGRsZVByb3hpbWFsOiAncmlnaHRNaWRkbGVQcm94aW1hbCcsXG4gIFJpZ2h0TWlkZGxlSW50ZXJtZWRpYXRlOiAncmlnaHRNaWRkbGVJbnRlcm1lZGlhdGUnLFxuICBSaWdodE1pZGRsZURpc3RhbDogJ3JpZ2h0TWlkZGxlRGlzdGFsJyxcbiAgUmlnaHRSaW5nUHJveGltYWw6ICdyaWdodFJpbmdQcm94aW1hbCcsXG4gIFJpZ2h0UmluZ0ludGVybWVkaWF0ZTogJ3JpZ2h0UmluZ0ludGVybWVkaWF0ZScsXG4gIFJpZ2h0UmluZ0Rpc3RhbDogJ3JpZ2h0UmluZ0Rpc3RhbCcsXG4gIFJpZ2h0TGl0dGxlUHJveGltYWw6ICdyaWdodExpdHRsZVByb3hpbWFsJyxcbiAgUmlnaHRMaXR0bGVJbnRlcm1lZGlhdGU6ICdyaWdodExpdHRsZUludGVybWVkaWF0ZScsXG4gIFJpZ2h0TGl0dGxlRGlzdGFsOiAncmlnaHRMaXR0bGVEaXN0YWwnLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVlJNSHVtYW5Cb25lTmFtZSA9ICh0eXBlb2YgVlJNSHVtYW5Cb25lTmFtZSlba2V5b2YgdHlwZW9mIFZSTUh1bWFuQm9uZU5hbWVdO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG5pbXBvcnQgeyBWUk1IdW1hbkJvbmVOYW1lIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVOYW1lJztcblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCBtYXBzIGZyb20ge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9IHRvIGl0cyBwYXJlbnQge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LlxuICpcbiAqIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3ZybS1jL3ZybS1zcGVjaWZpY2F0aW9uL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vVlJNQ192cm0tMS4wL2h1bWFub2lkLm1kXG4gKi9cbmV4cG9ydCBjb25zdCBWUk1IdW1hbkJvbmVQYXJlbnRNYXA6IHsgW2JvbmUgaW4gVlJNSHVtYW5Cb25lTmFtZV06IFZSTUh1bWFuQm9uZU5hbWUgfCBudWxsIH0gPSB7XG4gIGhpcHM6IG51bGwsXG4gIHNwaW5lOiAnaGlwcycsXG4gIGNoZXN0OiAnc3BpbmUnLFxuICB1cHBlckNoZXN0OiAnY2hlc3QnLFxuICBuZWNrOiAndXBwZXJDaGVzdCcsXG5cbiAgaGVhZDogJ25lY2snLFxuICBsZWZ0RXllOiAnaGVhZCcsXG4gIHJpZ2h0RXllOiAnaGVhZCcsXG4gIGphdzogJ2hlYWQnLFxuXG4gIGxlZnRVcHBlckxlZzogJ2hpcHMnLFxuICBsZWZ0TG93ZXJMZWc6ICdsZWZ0VXBwZXJMZWcnLFxuICBsZWZ0Rm9vdDogJ2xlZnRMb3dlckxlZycsXG4gIGxlZnRUb2VzOiAnbGVmdEZvb3QnLFxuXG4gIHJpZ2h0VXBwZXJMZWc6ICdoaXBzJyxcbiAgcmlnaHRMb3dlckxlZzogJ3JpZ2h0VXBwZXJMZWcnLFxuICByaWdodEZvb3Q6ICdyaWdodExvd2VyTGVnJyxcbiAgcmlnaHRUb2VzOiAncmlnaHRGb290JyxcblxuICBsZWZ0U2hvdWxkZXI6ICd1cHBlckNoZXN0JyxcbiAgbGVmdFVwcGVyQXJtOiAnbGVmdFNob3VsZGVyJyxcbiAgbGVmdExvd2VyQXJtOiAnbGVmdFVwcGVyQXJtJyxcbiAgbGVmdEhhbmQ6ICdsZWZ0TG93ZXJBcm0nLFxuXG4gIHJpZ2h0U2hvdWxkZXI6ICd1cHBlckNoZXN0JyxcbiAgcmlnaHRVcHBlckFybTogJ3JpZ2h0U2hvdWxkZXInLFxuICByaWdodExvd2VyQXJtOiAncmlnaHRVcHBlckFybScsXG4gIHJpZ2h0SGFuZDogJ3JpZ2h0TG93ZXJBcm0nLFxuXG4gIGxlZnRUaHVtYk1ldGFjYXJwYWw6ICdsZWZ0SGFuZCcsXG4gIGxlZnRUaHVtYlByb3hpbWFsOiAnbGVmdFRodW1iTWV0YWNhcnBhbCcsXG4gIGxlZnRUaHVtYkRpc3RhbDogJ2xlZnRUaHVtYlByb3hpbWFsJyxcbiAgbGVmdEluZGV4UHJveGltYWw6ICdsZWZ0SGFuZCcsXG4gIGxlZnRJbmRleEludGVybWVkaWF0ZTogJ2xlZnRJbmRleFByb3hpbWFsJyxcbiAgbGVmdEluZGV4RGlzdGFsOiAnbGVmdEluZGV4SW50ZXJtZWRpYXRlJyxcbiAgbGVmdE1pZGRsZVByb3hpbWFsOiAnbGVmdEhhbmQnLFxuICBsZWZ0TWlkZGxlSW50ZXJtZWRpYXRlOiAnbGVmdE1pZGRsZVByb3hpbWFsJyxcbiAgbGVmdE1pZGRsZURpc3RhbDogJ2xlZnRNaWRkbGVJbnRlcm1lZGlhdGUnLFxuICBsZWZ0UmluZ1Byb3hpbWFsOiAnbGVmdEhhbmQnLFxuICBsZWZ0UmluZ0ludGVybWVkaWF0ZTogJ2xlZnRSaW5nUHJveGltYWwnLFxuICBsZWZ0UmluZ0Rpc3RhbDogJ2xlZnRSaW5nSW50ZXJtZWRpYXRlJyxcbiAgbGVmdExpdHRsZVByb3hpbWFsOiAnbGVmdEhhbmQnLFxuICBsZWZ0TGl0dGxlSW50ZXJtZWRpYXRlOiAnbGVmdExpdHRsZVByb3hpbWFsJyxcbiAgbGVmdExpdHRsZURpc3RhbDogJ2xlZnRMaXR0bGVJbnRlcm1lZGlhdGUnLFxuXG4gIHJpZ2h0VGh1bWJNZXRhY2FycGFsOiAncmlnaHRIYW5kJyxcbiAgcmlnaHRUaHVtYlByb3hpbWFsOiAncmlnaHRUaHVtYk1ldGFjYXJwYWwnLFxuICByaWdodFRodW1iRGlzdGFsOiAncmlnaHRUaHVtYlByb3hpbWFsJyxcbiAgcmlnaHRJbmRleFByb3hpbWFsOiAncmlnaHRIYW5kJyxcbiAgcmlnaHRJbmRleEludGVybWVkaWF0ZTogJ3JpZ2h0SW5kZXhQcm94aW1hbCcsXG4gIHJpZ2h0SW5kZXhEaXN0YWw6ICdyaWdodEluZGV4SW50ZXJtZWRpYXRlJyxcbiAgcmlnaHRNaWRkbGVQcm94aW1hbDogJ3JpZ2h0SGFuZCcsXG4gIHJpZ2h0TWlkZGxlSW50ZXJtZWRpYXRlOiAncmlnaHRNaWRkbGVQcm94aW1hbCcsXG4gIHJpZ2h0TWlkZGxlRGlzdGFsOiAncmlnaHRNaWRkbGVJbnRlcm1lZGlhdGUnLFxuICByaWdodFJpbmdQcm94aW1hbDogJ3JpZ2h0SGFuZCcsXG4gIHJpZ2h0UmluZ0ludGVybWVkaWF0ZTogJ3JpZ2h0UmluZ1Byb3hpbWFsJyxcbiAgcmlnaHRSaW5nRGlzdGFsOiAncmlnaHRSaW5nSW50ZXJtZWRpYXRlJyxcbiAgcmlnaHRMaXR0bGVQcm94aW1hbDogJ3JpZ2h0SGFuZCcsXG4gIHJpZ2h0TGl0dGxlSW50ZXJtZWRpYXRlOiAncmlnaHRMaXR0bGVQcm94aW1hbCcsXG4gIHJpZ2h0TGl0dGxlRGlzdGFsOiAncmlnaHRMaXR0bGVJbnRlcm1lZGlhdGUnLFxufTtcbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBxdWF0SW52ZXJ0Q29tcGF0IH0gZnJvbSAnLi4vdXRpbHMvcXVhdEludmVydENvbXBhdCc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFuQm9uZSB9IGZyb20gJy4vVlJNSHVtYW5Cb25lJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lcyB9IGZyb20gJy4vVlJNSHVtYW5Cb25lcyc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFuQm9uZU5hbWUgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZU5hbWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1Qb3NlIH0gZnJvbSAnLi9WUk1Qb3NlJztcblxuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG4vKipcbiAqIEEgY2xhc3MgcmVwcmVzZW50cyB0aGUgUmlnIG9mIGEgVlJNLlxuICovXG5leHBvcnQgY2xhc3MgVlJNUmlnIHtcbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUh1bWFuQm9uZXN9IHRoYXQgY29udGFpbnMgYWxsIHRoZSBodW1hbiBib25lcyBvZiB0aGUgVlJNLlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byBnZXQgdGhlc2UgYm9uZXMgdXNpbmcge0BsaW5rIFZSTUh1bWFub2lkLmdldEJvbmV9LlxuICAgKi9cbiAgcHVibGljIGh1bWFuQm9uZXM6IFZSTUh1bWFuQm9uZXM7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTVBvc2V9IHRoYXQgaXMgaXRzIGRlZmF1bHQgc3RhdGUuXG4gICAqIE5vdGUgdGhhdCBpdCdzIG5vdCBjb21wYXRpYmxlIHdpdGgge0BsaW5rIHNldFBvc2V9IGFuZCB7QGxpbmsgZ2V0UG9zZX0sIHNpbmNlIGl0IGNvbnRhaW5zIG5vbi1yZWxhdGl2ZSB2YWx1ZXMgb2YgZWFjaCBsb2NhbCB0cmFuc2Zvcm1zLlxuICAgKi9cbiAgcHVibGljIHJlc3RQb3NlOiBWUk1Qb3NlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIFZSTUh1bWFub2lkfS5cbiAgICogQHBhcmFtIGh1bWFuQm9uZXMgQSB7QGxpbmsgVlJNSHVtYW5Cb25lc30gY29udGFpbnMgYWxsIHRoZSBib25lcyBvZiB0aGUgbmV3IGh1bWFub2lkXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoaHVtYW5Cb25lczogVlJNSHVtYW5Cb25lcykge1xuICAgIHRoaXMuaHVtYW5Cb25lcyA9IGh1bWFuQm9uZXM7XG5cbiAgICB0aGlzLnJlc3RQb3NlID0gdGhpcy5nZXRBYnNvbHV0ZVBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgYWJzb2x1dGUgcG9zZSBvZiB0aGlzIGh1bWFub2lkIGFzIGEge0BsaW5rIFZSTVBvc2V9LlxuICAgKiBOb3RlIHRoYXQgdGhlIG91dHB1dCByZXN1bHQgd2lsbCBjb250YWluIGluaXRpYWwgc3RhdGUgb2YgdGhlIFZSTSBhbmQgbm90IGNvbXBhdGlibGUgYmV0d2VlbiBkaWZmZXJlbnQgbW9kZWxzLlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byB1c2Uge0BsaW5rIGdldFBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0QWJzb2x1dGVQb3NlKCk6IFZSTVBvc2Uge1xuICAgIGNvbnN0IHBvc2UgPSB7fSBhcyBWUk1Qb3NlO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5odW1hbkJvbmVzKS5mb3JFYWNoKCh2cm1Cb25lTmFtZVN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdnJtQm9uZU5hbWUgPSB2cm1Cb25lTmFtZVN0cmluZyBhcyBWUk1IdW1hbkJvbmVOYW1lO1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Qm9uZU5vZGUodnJtQm9uZU5hbWUpO1xuXG4gICAgICAvLyBJZ25vcmUgd2hlbiB0aGVyZSBhcmUgbm8gYm9uZSBvbiB0aGUgVlJNSHVtYW5vaWRcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgcG9zaXRpb24gLyByb3RhdGlvbiBmcm9tIHRoZSBub2RlXG4gICAgICBfdjNBLmNvcHkobm9kZS5wb3NpdGlvbik7XG4gICAgICBfcXVhdEEuY29weShub2RlLnF1YXRlcm5pb24pO1xuXG4gICAgICAvLyBDb252ZXJ0IHRvIHJhdyBhcnJheXNcbiAgICAgIHBvc2VbdnJtQm9uZU5hbWVdID0ge1xuICAgICAgICBwb3NpdGlvbjogX3YzQS50b0FycmF5KCkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICAgICAgICByb3RhdGlvbjogX3F1YXRBLnRvQXJyYXkoKSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgcG9zZSBvZiB0aGlzIGh1bWFub2lkIGFzIGEge0BsaW5rIFZSTVBvc2V9LlxuICAgKlxuICAgKiBFYWNoIHRyYW5zZm9ybSBpcyBhIGxvY2FsIHRyYW5zZm9ybSByZWxhdGl2ZSBmcm9tIHJlc3QgcG9zZSAoVC1wb3NlKS5cbiAgICovXG4gIHB1YmxpYyBnZXRQb3NlKCk6IFZSTVBvc2Uge1xuICAgIGNvbnN0IHBvc2UgPSB7fSBhcyBWUk1Qb3NlO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5odW1hbkJvbmVzKS5mb3JFYWNoKChib25lTmFtZVN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYm9uZU5hbWUgPSBib25lTmFtZVN0cmluZyBhcyBWUk1IdW1hbkJvbmVOYW1lO1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Qm9uZU5vZGUoYm9uZU5hbWUpO1xuXG4gICAgICAvLyBJZ25vcmUgd2hlbiB0aGVyZSBhcmUgbm8gYm9uZSBvbiB0aGUgVlJNSHVtYW5vaWRcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRha2UgYSBkaWZmIGZyb20gcmVzdFBvc2VcbiAgICAgIF92M0Euc2V0KDAsIDAsIDApO1xuICAgICAgX3F1YXRBLmlkZW50aXR5KCk7XG5cbiAgICAgIGNvbnN0IHJlc3RTdGF0ZSA9IHRoaXMucmVzdFBvc2VbYm9uZU5hbWVdO1xuICAgICAgaWYgKHJlc3RTdGF0ZT8ucG9zaXRpb24pIHtcbiAgICAgICAgX3YzQS5mcm9tQXJyYXkocmVzdFN0YXRlLnBvc2l0aW9uKS5uZWdhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN0U3RhdGU/LnJvdGF0aW9uKSB7XG4gICAgICAgIHF1YXRJbnZlcnRDb21wYXQoX3F1YXRBLmZyb21BcnJheShyZXN0U3RhdGUucm90YXRpb24pKTtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBwb3NpdGlvbiAvIHJvdGF0aW9uIGZyb20gdGhlIG5vZGVcbiAgICAgIF92M0EuYWRkKG5vZGUucG9zaXRpb24pO1xuICAgICAgX3F1YXRBLnByZW11bHRpcGx5KG5vZGUucXVhdGVybmlvbik7XG5cbiAgICAgIC8vIENvbnZlcnQgdG8gcmF3IGFycmF5c1xuICAgICAgcG9zZVtib25lTmFtZV0gPSB7XG4gICAgICAgIHBvc2l0aW9uOiBfdjNBLnRvQXJyYXkoKSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXG4gICAgICAgIHJvdGF0aW9uOiBfcXVhdEEudG9BcnJheSgpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIExldCB0aGUgaHVtYW5vaWQgZG8gYSBzcGVjaWZpZWQgcG9zZS5cbiAgICpcbiAgICogRWFjaCB0cmFuc2Zvcm0gaGF2ZSB0byBiZSBhIGxvY2FsIHRyYW5zZm9ybSByZWxhdGl2ZSBmcm9tIHJlc3QgcG9zZSAoVC1wb3NlKS5cbiAgICogWW91IGNhbiBwYXNzIHdoYXQgeW91IGdvdCBmcm9tIHtAbGluayBnZXRQb3NlfS5cbiAgICpcbiAgICogQHBhcmFtIHBvc2VPYmplY3QgQSBbW1ZSTVBvc2VdXSB0aGF0IHJlcHJlc2VudHMgYSBzaW5nbGUgcG9zZVxuICAgKi9cbiAgcHVibGljIHNldFBvc2UocG9zZU9iamVjdDogVlJNUG9zZSk6IHZvaWQge1xuICAgIE9iamVjdC5lbnRyaWVzKHBvc2VPYmplY3QpLmZvckVhY2goKFtib25lTmFtZVN0cmluZywgc3RhdGVdKSA9PiB7XG4gICAgICBjb25zdCBib25lTmFtZSA9IGJvbmVOYW1lU3RyaW5nIGFzIFZSTUh1bWFuQm9uZU5hbWU7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRCb25lTm9kZShib25lTmFtZSk7XG5cbiAgICAgIC8vIElnbm9yZSB3aGVuIHRoZXJlIGFyZSBubyBib25lIHRoYXQgaXMgZGVmaW5lZCBpbiB0aGUgcG9zZSBvbiB0aGUgVlJNSHVtYW5vaWRcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3RTdGF0ZSA9IHRoaXMucmVzdFBvc2VbYm9uZU5hbWVdO1xuICAgICAgaWYgKCFyZXN0U3RhdGUpIHtcbiAgICAgICAgLy8gSXQncyB2ZXJ5IHVubGlrZWx5LiBQb3NzaWJseSBhIGJ1Z1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IHRoZSBzdGF0ZSB0byB0aGUgYWN0dWFsIGJvbmVcbiAgICAgIGlmIChzdGF0ZT8ucG9zaXRpb24pIHtcbiAgICAgICAgbm9kZS5wb3NpdGlvbi5mcm9tQXJyYXkoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChyZXN0U3RhdGUucG9zaXRpb24pIHtcbiAgICAgICAgICBub2RlLnBvc2l0aW9uLmFkZChfdjNBLmZyb21BcnJheShyZXN0U3RhdGUucG9zaXRpb24pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGU/LnJvdGF0aW9uKSB7XG4gICAgICAgIG5vZGUucXVhdGVybmlvbi5mcm9tQXJyYXkoc3RhdGUucm90YXRpb24pO1xuXG4gICAgICAgIGlmIChyZXN0U3RhdGUucm90YXRpb24pIHtcbiAgICAgICAgICBub2RlLnF1YXRlcm5pb24ubXVsdGlwbHkoX3F1YXRBLmZyb21BcnJheShyZXN0U3RhdGUucm90YXRpb24pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBodW1hbm9pZCB0byBpdHMgcmVzdCBwb3NlLlxuICAgKi9cbiAgcHVibGljIHJlc2V0UG9zZSgpOiB2b2lkIHtcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLnJlc3RQb3NlKS5mb3JFYWNoKChbYm9uZU5hbWUsIHJlc3RdKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRCb25lTm9kZShib25lTmFtZSBhcyBWUk1IdW1hbkJvbmVOYW1lKTtcblxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3Q/LnBvc2l0aW9uKSB7XG4gICAgICAgIG5vZGUucG9zaXRpb24uZnJvbUFycmF5KHJlc3QucG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdD8ucm90YXRpb24pIHtcbiAgICAgICAgbm9kZS5xdWF0ZXJuaW9uLmZyb21BcnJheShyZXN0LnJvdGF0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBib25lIGJvdW5kIHRvIGEgc3BlY2lmaWVkIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfSwgYXMgYSB7QGxpbmsgVlJNSHVtYW5Cb25lfS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgYm9uZSB5b3Ugd2FudFxuICAgKi9cbiAgcHVibGljIGdldEJvbmUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFZSTUh1bWFuQm9uZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuaHVtYW5Cb25lc1tuYW1lXSA/PyB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgYm9uZSBib3VuZCB0byBhIHNwZWNpZmllZCB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0sIGFzIGEgYFRIUkVFLk9iamVjdDNEYC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgYm9uZSB5b3Ugd2FudFxuICAgKi9cbiAgcHVibGljIGdldEJvbmVOb2RlKG5hbWU6IFZSTUh1bWFuQm9uZU5hbWUpOiBUSFJFRS5PYmplY3QzRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmh1bWFuQm9uZXNbbmFtZV0/Lm5vZGUgPz8gbnVsbDtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBBIGNvbXBhdCBmdW5jdGlvbiBmb3IgYFF1YXRlcm5pb24uaW52ZXJ0KClgIC8gYFF1YXRlcm5pb24uaW52ZXJzZSgpYC5cbiAqIGBRdWF0ZXJuaW9uLmludmVydCgpYCBpcyBpbnRyb2R1Y2VkIGluIHIxMjMgYW5kIGBRdWF0ZXJuaW9uLmludmVyc2UoKWAgZW1pdHMgYSB3YXJuaW5nLlxuICogV2UgYXJlIGdvaW5nIHRvIHVzZSB0aGlzIGNvbXBhdCBmb3IgYSB3aGlsZS5cbiAqIEBwYXJhbSB0YXJnZXQgQSB0YXJnZXQgcXVhdGVybmlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVhdEludmVydENvbXBhdDxUIGV4dGVuZHMgVEhSRUUuUXVhdGVybmlvbj4odGFyZ2V0OiBUKTogVCB7XG4gIGlmICgodGFyZ2V0IGFzIGFueSkuaW52ZXJ0KSB7XG4gICAgdGFyZ2V0LmludmVydCgpO1xuICB9IGVsc2Uge1xuICAgICh0YXJnZXQgYXMgYW55KS5pbnZlcnNlKCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFZSTUh1bWFuQm9uZU5hbWUsIFZSTUh1bWFuQm9uZXMgfSBmcm9tICcuJztcbmltcG9ydCB7IFZSTUh1bWFuQm9uZUxpc3QgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZUxpc3QnO1xuaW1wb3J0IHsgVlJNSHVtYW5Cb25lUGFyZW50TWFwIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVQYXJlbnRNYXAnO1xuaW1wb3J0IHsgVlJNUmlnIH0gZnJvbSAnLi9WUk1SaWcnO1xuXG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF9xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfYm9uZVdvcmxkUG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuLyoqXG4gKiBBIGNsYXNzIHJlcHJlc2VudHMgdGhlIG5vcm1hbGl6ZWQgUmlnIG9mIGEgVlJNLlxuICovXG5leHBvcnQgY2xhc3MgVlJNSHVtYW5vaWRSaWcgZXh0ZW5kcyBWUk1SaWcge1xuICBwcm90ZWN0ZWQgc3RhdGljIF9zZXR1cFRyYW5zZm9ybXMobW9kZWxSaWc6IFZSTVJpZyk6IHtcbiAgICByaWdCb25lczogVlJNSHVtYW5Cb25lcztcbiAgICByb290OiBUSFJFRS5PYmplY3QzRDtcbiAgICBwYXJlbnRXb3JsZFJvdGF0aW9uczogeyBbYm9uZU5hbWUgaW4gVlJNSHVtYW5Cb25lTmFtZV0/OiBUSFJFRS5RdWF0ZXJuaW9uIH07XG4gICAgYm9uZVJvdGF0aW9uczogeyBbYm9uZU5hbWUgaW4gVlJNSHVtYW5Cb25lTmFtZV0/OiBUSFJFRS5RdWF0ZXJuaW9uIH07XG4gIH0ge1xuICAgIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290Lm5hbWUgPSAnVlJNSHVtYW5vaWRSaWcnO1xuXG4gICAgLy8gc3RvcmUgYm9uZVdvcmxkUG9zaXRpb25zLCBib25lV29ybGRSb3RhdGlvbnMsIGFuZCBwYXJlbnRXb3JsZFJvdGF0aW9uc1xuICAgIGNvbnN0IGJvbmVXb3JsZFBvc2l0aW9uczogeyBbYm9uZU5hbWUgaW4gVlJNSHVtYW5Cb25lTmFtZV0/OiBUSFJFRS5WZWN0b3IzIH0gPSB7fTtcbiAgICBjb25zdCBib25lV29ybGRSb3RhdGlvbnM6IHsgW2JvbmVOYW1lIGluIFZSTUh1bWFuQm9uZU5hbWVdPzogVEhSRUUuUXVhdGVybmlvbiB9ID0ge307XG4gICAgY29uc3QgYm9uZVJvdGF0aW9uczogeyBbYm9uZU5hbWUgaW4gVlJNSHVtYW5Cb25lTmFtZV0/OiBUSFJFRS5RdWF0ZXJuaW9uIH0gPSB7fTtcbiAgICBjb25zdCBwYXJlbnRXb3JsZFJvdGF0aW9uczogeyBbYm9uZU5hbWUgaW4gVlJNSHVtYW5Cb25lTmFtZV0/OiBUSFJFRS5RdWF0ZXJuaW9uIH0gPSB7fTtcblxuICAgIFZSTUh1bWFuQm9uZUxpc3QuZm9yRWFjaCgoYm9uZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGJvbmVOb2RlID0gbW9kZWxSaWcuZ2V0Qm9uZU5vZGUoYm9uZU5hbWUpO1xuXG4gICAgICBpZiAoYm9uZU5vZGUpIHtcbiAgICAgICAgY29uc3QgYm9uZVdvcmxkUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICBjb25zdCBib25lV29ybGRSb3RhdGlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICAgICAgYm9uZU5vZGUudXBkYXRlV29ybGRNYXRyaXgodHJ1ZSwgZmFsc2UpO1xuICAgICAgICBib25lTm9kZS5tYXRyaXhXb3JsZC5kZWNvbXBvc2UoYm9uZVdvcmxkUG9zaXRpb24sIGJvbmVXb3JsZFJvdGF0aW9uLCBfdjNBKTtcblxuICAgICAgICBib25lV29ybGRQb3NpdGlvbnNbYm9uZU5hbWVdID0gYm9uZVdvcmxkUG9zaXRpb247XG4gICAgICAgIGJvbmVXb3JsZFJvdGF0aW9uc1tib25lTmFtZV0gPSBib25lV29ybGRSb3RhdGlvbjtcbiAgICAgICAgYm9uZVJvdGF0aW9uc1tib25lTmFtZV0gPSBib25lTm9kZS5xdWF0ZXJuaW9uLmNsb25lKCk7XG5cbiAgICAgICAgY29uc3QgcGFyZW50V29ybGRSb3RhdGlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgICAgIGJvbmVOb2RlLnBhcmVudD8ubWF0cml4V29ybGQuZGVjb21wb3NlKF92M0EsIHBhcmVudFdvcmxkUm90YXRpb24sIF92M0EpO1xuICAgICAgICBwYXJlbnRXb3JsZFJvdGF0aW9uc1tib25lTmFtZV0gPSBwYXJlbnRXb3JsZFJvdGF0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYnVpbGQgcmlnIGhpZXJhcmNoeSArIHN0b3JlIHBhcmVudFdvcmxkUm90YXRpb25zXG4gICAgY29uc3QgcmlnQm9uZXM6IFBhcnRpYWw8VlJNSHVtYW5Cb25lcz4gPSB7fTtcbiAgICBWUk1IdW1hbkJvbmVMaXN0LmZvckVhY2goKGJvbmVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBib25lTm9kZSA9IG1vZGVsUmlnLmdldEJvbmVOb2RlKGJvbmVOYW1lKTtcblxuICAgICAgaWYgKGJvbmVOb2RlKSB7XG4gICAgICAgIGNvbnN0IGJvbmVXb3JsZFBvc2l0aW9uID0gYm9uZVdvcmxkUG9zaXRpb25zW2JvbmVOYW1lXSBhcyBUSFJFRS5WZWN0b3IzO1xuXG4gICAgICAgIC8vIHNlZSB0aGUgbmVhcmVzdCBwYXJlbnQgcG9zaXRpb25cbiAgICAgICAgbGV0IGN1cnJlbnRCb25lTmFtZTogVlJNSHVtYW5Cb25lTmFtZSB8IG51bGwgPSBib25lTmFtZTtcbiAgICAgICAgbGV0IHBhcmVudEJvbmVXb3JsZFBvc2l0aW9uOiBUSFJFRS5WZWN0b3IzIHwgdW5kZWZpbmVkO1xuICAgICAgICB3aGlsZSAocGFyZW50Qm9uZVdvcmxkUG9zaXRpb24gPT0gbnVsbCkge1xuICAgICAgICAgIGN1cnJlbnRCb25lTmFtZSA9IFZSTUh1bWFuQm9uZVBhcmVudE1hcFtjdXJyZW50Qm9uZU5hbWVdO1xuICAgICAgICAgIGlmIChjdXJyZW50Qm9uZU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudEJvbmVXb3JsZFBvc2l0aW9uID0gYm9uZVdvcmxkUG9zaXRpb25zW2N1cnJlbnRCb25lTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgdG8gaGllcmFyY2h5XG4gICAgICAgIGNvbnN0IHJpZ0JvbmVOb2RlID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICAgIHJpZ0JvbmVOb2RlLm5hbWUgPSAnTm9ybWFsaXplZF8nICsgYm9uZU5vZGUubmFtZTtcblxuICAgICAgICBjb25zdCBwYXJlbnRSaWdCb25lTm9kZSA9IChjdXJyZW50Qm9uZU5hbWUgPyByaWdCb25lc1tjdXJyZW50Qm9uZU5hbWVdPy5ub2RlIDogcm9vdCkgYXMgVEhSRUUuT2JqZWN0M0Q7XG5cbiAgICAgICAgcGFyZW50UmlnQm9uZU5vZGUuYWRkKHJpZ0JvbmVOb2RlKTtcbiAgICAgICAgcmlnQm9uZU5vZGUucG9zaXRpb24uY29weShib25lV29ybGRQb3NpdGlvbik7XG4gICAgICAgIGlmIChwYXJlbnRCb25lV29ybGRQb3NpdGlvbikge1xuICAgICAgICAgIHJpZ0JvbmVOb2RlLnBvc2l0aW9uLnN1YihwYXJlbnRCb25lV29ybGRQb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByaWdCb25lc1tib25lTmFtZV0gPSB7IG5vZGU6IHJpZ0JvbmVOb2RlIH07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmlnQm9uZXM6IHJpZ0JvbmVzIGFzIFZSTUh1bWFuQm9uZXMsXG4gICAgICByb290LFxuICAgICAgcGFyZW50V29ybGRSb3RhdGlvbnMsXG4gICAgICBib25lUm90YXRpb25zLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgb3JpZ2luYWw6IFZSTVJpZztcbiAgcHVibGljIHJlYWRvbmx5IHJvb3Q6IFRIUkVFLk9iamVjdDNEO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3BhcmVudFdvcmxkUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9ib25lUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoaHVtYW5vaWQ6IFZSTVJpZykge1xuICAgIGNvbnN0IHsgcmlnQm9uZXMsIHJvb3QsIHBhcmVudFdvcmxkUm90YXRpb25zLCBib25lUm90YXRpb25zIH0gPSBWUk1IdW1hbm9pZFJpZy5fc2V0dXBUcmFuc2Zvcm1zKGh1bWFub2lkKTtcblxuICAgIHN1cGVyKHJpZ0JvbmVzKTtcblxuICAgIHRoaXMub3JpZ2luYWwgPSBodW1hbm9pZDtcbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIHRoaXMuX3BhcmVudFdvcmxkUm90YXRpb25zID0gcGFyZW50V29ybGRSb3RhdGlvbnM7XG4gICAgdGhpcy5fYm9uZVJvdGF0aW9ucyA9IGJvbmVSb3RhdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoaXMgaHVtYW5vaWQgcmlnLlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBWUk1IdW1hbkJvbmVMaXN0LmZvckVhY2goKGJvbmVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBib25lTm9kZSA9IHRoaXMub3JpZ2luYWwuZ2V0Qm9uZU5vZGUoYm9uZU5hbWUpO1xuXG4gICAgICBpZiAoYm9uZU5vZGUgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCByaWdCb25lTm9kZSA9IHRoaXMuZ2V0Qm9uZU5vZGUoYm9uZU5hbWUpITtcbiAgICAgICAgY29uc3QgcGFyZW50V29ybGRSb3RhdGlvbiA9IHRoaXMuX3BhcmVudFdvcmxkUm90YXRpb25zW2JvbmVOYW1lXSE7XG4gICAgICAgIGNvbnN0IGludlBhcmVudFdvcmxkUm90YXRpb24gPSBfcXVhdEEuY29weShwYXJlbnRXb3JsZFJvdGF0aW9uKS5pbnZlcnQoKTtcbiAgICAgICAgY29uc3QgYm9uZVJvdGF0aW9uID0gdGhpcy5fYm9uZVJvdGF0aW9uc1tib25lTmFtZV0hO1xuXG4gICAgICAgIGJvbmVOb2RlLnF1YXRlcm5pb25cbiAgICAgICAgICAuY29weShyaWdCb25lTm9kZS5xdWF0ZXJuaW9uKVxuICAgICAgICAgIC5tdWx0aXBseShwYXJlbnRXb3JsZFJvdGF0aW9uKVxuICAgICAgICAgIC5wcmVtdWx0aXBseShpbnZQYXJlbnRXb3JsZFJvdGF0aW9uKVxuICAgICAgICAgIC5tdWx0aXBseShib25lUm90YXRpb24pO1xuXG4gICAgICAgIC8vIE1vdmUgdGhlIG1hc3MgY2VudGVyIG9mIHRoZSBWUk1cbiAgICAgICAgaWYgKGJvbmVOYW1lID09PSAnaGlwcycpIHtcbiAgICAgICAgICBjb25zdCBib25lV29ybGRQb3NpdGlvbiA9IHJpZ0JvbmVOb2RlLmdldFdvcmxkUG9zaXRpb24oX2JvbmVXb3JsZFBvcyk7XG4gICAgICAgICAgYm9uZU5vZGUucGFyZW50IS51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgY29uc3QgcGFyZW50V29ybGRNYXRyaXggPSBib25lTm9kZS5wYXJlbnQhLm1hdHJpeFdvcmxkO1xuICAgICAgICAgIGNvbnN0IGxvY2FsUG9zaXRpb24gPSBib25lV29ybGRQb3NpdGlvbi5hcHBseU1hdHJpeDQocGFyZW50V29ybGRNYXRyaXguaW52ZXJ0KCkpO1xuICAgICAgICAgIGJvbmVOb2RlLnBvc2l0aW9uLmNvcHkobG9jYWxQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmUnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmVzIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVzJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lTmFtZSB9IGZyb20gJy4vVlJNSHVtYW5Cb25lTmFtZSc7XG5pbXBvcnQgdHlwZSB7IFZSTVBvc2UgfSBmcm9tICcuL1ZSTVBvc2UnO1xuaW1wb3J0IHsgVlJNUmlnIH0gZnJvbSAnLi9WUk1SaWcnO1xuaW1wb3J0IHsgVlJNSHVtYW5vaWRSaWcgfSBmcm9tICcuL1ZSTUh1bWFub2lkUmlnJztcblxuLyoqXG4gKiBBIGNsYXNzIHJlcHJlc2VudHMgYSBodW1hbm9pZCBvZiBhIFZSTS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUh1bWFub2lkIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgaXQgY29waWVzIHBvc2UgZnJvbSBub3JtYWxpemVkSHVtYW5Cb25lcyB0byByYXdIdW1hbkJvbmVzIG9uIHtAbGluayB1cGRhdGV9LlxuICAgKiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgcHVibGljIGF1dG9VcGRhdGVIdW1hbkJvbmVzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIHJhdyByaWcgb2YgdGhlIFZSTS5cbiAgICovXG4gIHByaXZhdGUgX3Jhd0h1bWFuQm9uZXM6IFZSTVJpZzsgLy8gVE9ETzogUmVuYW1lXG5cbiAgLyoqXG4gICAqIEEgbm9ybWFsaXplZCByaWcgb2YgdGhlIFZSTS5cbiAgICovXG4gIHByaXZhdGUgX25vcm1hbGl6ZWRIdW1hbkJvbmVzOiBWUk1IdW1hbm9pZFJpZzsgLy8gVE9ETzogUmVuYW1lXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBlaXRoZXIge0BsaW5rIHJhd1Jlc3RQb3NlfSBvciB7QGxpbmsgbm9ybWFsaXplZFJlc3RQb3NlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGdldCByZXN0UG9zZSgpOiBWUk1Qb3NlIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUh1bWFub2lkOiByZXN0UG9zZSBpcyBkZXByZWNhdGVkLiBVc2UgZWl0aGVyIHJhd1Jlc3RQb3NlIG9yIG5vcm1hbGl6ZWRSZXN0UG9zZSBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIHRoaXMucmF3UmVzdFBvc2U7XG4gIH1cblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNUG9zZX0gb2YgaXRzIHJhdyBodW1hbiBib25lcyB0aGF0IGlzIGl0cyBkZWZhdWx0IHN0YXRlLlxuICAgKiBOb3RlIHRoYXQgaXQncyBub3QgY29tcGF0aWJsZSB3aXRoIHtAbGluayBzZXRSYXdQb3NlfSBhbmQge0BsaW5rIGdldFJhd1Bvc2V9LCBzaW5jZSBpdCBjb250YWlucyBub24tcmVsYXRpdmUgdmFsdWVzIG9mIGVhY2ggbG9jYWwgdHJhbnNmb3Jtcy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcmF3UmVzdFBvc2UoKTogVlJNUG9zZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMucmVzdFBvc2U7XG4gIH1cblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNUG9zZX0gb2YgaXRzIG5vcm1hbGl6ZWQgaHVtYW4gYm9uZXMgdGhhdCBpcyBpdHMgZGVmYXVsdCBzdGF0ZS5cbiAgICogTm90ZSB0aGF0IGl0J3Mgbm90IGNvbXBhdGlibGUgd2l0aCB7QGxpbmsgc2V0Tm9ybWFsaXplZFBvc2V9IGFuZCB7QGxpbmsgZ2V0Tm9ybWFsaXplZFBvc2V9LCBzaW5jZSBpdCBjb250YWlucyBub24tcmVsYXRpdmUgdmFsdWVzIG9mIGVhY2ggbG9jYWwgdHJhbnNmb3Jtcy5cbiAgICovXG4gIHB1YmxpYyBnZXQgbm9ybWFsaXplZFJlc3RQb3NlKCk6IFZSTVBvc2Uge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5yZXN0UG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1hcCBmcm9tIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfSB0byByYXcge0BsaW5rIFZSTUh1bWFuQm9uZX1zLlxuICAgKi9cbiAgcHVibGljIGdldCBodW1hbkJvbmVzKCk6IFZSTUh1bWFuQm9uZXMge1xuICAgIC8vIGFuIGFsaWFzIG9mIGByYXdIdW1hbkJvbmVzYFxuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLmh1bWFuQm9uZXM7XG4gIH1cblxuICAvKipcbiAgICogQSBtYXAgZnJvbSB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0gdG8gcmF3IHtAbGluayBWUk1IdW1hbkJvbmV9cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcmF3SHVtYW5Cb25lcygpOiBWUk1IdW1hbkJvbmVzIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5odW1hbkJvbmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWFwIGZyb20ge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9IHRvIG5vcm1hbGl6ZWQge0BsaW5rIFZSTUh1bWFuQm9uZX1zLlxuICAgKi9cbiAgcHVibGljIGdldCBub3JtYWxpemVkSHVtYW5Cb25lcygpOiBWUk1IdW1hbkJvbmVzIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMuaHVtYW5Cb25lcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcm9vdCBvZiBub3JtYWxpemVkIHtAbGluayBWUk1IdW1hbkJvbmV9cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgbm9ybWFsaXplZEh1bWFuQm9uZXNSb290KCk6IFRIUkVFLk9iamVjdDNEIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMucm9vdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIFZSTUh1bWFub2lkfS5cbiAgICogQHBhcmFtIGh1bWFuQm9uZXMgQSB7QGxpbmsgVlJNSHVtYW5Cb25lc30gY29udGFpbnMgYWxsIHRoZSBib25lcyBvZiB0aGUgbmV3IGh1bWFub2lkXG4gICAqIEBwYXJhbSBhdXRvVXBkYXRlSHVtYW5Cb25lcyBXaGV0aGVyIGl0IGNvcGllcyBwb3NlIGZyb20gbm9ybWFsaXplZEh1bWFuQm9uZXMgdG8gcmF3SHVtYW5Cb25lcyBvbiB7QGxpbmsgdXBkYXRlfS4gYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoaHVtYW5Cb25lczogVlJNSHVtYW5Cb25lcywgb3B0aW9ucz86IHsgYXV0b1VwZGF0ZUh1bWFuQm9uZXM/OiBib29sZWFuIH0pIHtcbiAgICB0aGlzLmF1dG9VcGRhdGVIdW1hbkJvbmVzID0gb3B0aW9ucz8uYXV0b1VwZGF0ZUh1bWFuQm9uZXMgPz8gdHJ1ZTtcbiAgICB0aGlzLl9yYXdIdW1hbkJvbmVzID0gbmV3IFZSTVJpZyhodW1hbkJvbmVzKTtcbiAgICB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcyA9IG5ldyBWUk1IdW1hbm9pZFJpZyh0aGlzLl9yYXdIdW1hbkJvbmVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IHRoZSBnaXZlbiB7QGxpbmsgVlJNSHVtYW5vaWR9IGludG8gdGhpcyBvbmUuXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIHtAbGluayBWUk1IdW1hbm9pZH0geW91IHdhbnQgdG8gY29weVxuICAgKiBAcmV0dXJucyB0aGlzXG4gICAqL1xuICBwdWJsaWMgY29weShzb3VyY2U6IFZSTUh1bWFub2lkKTogdGhpcyB7XG4gICAgdGhpcy5hdXRvVXBkYXRlSHVtYW5Cb25lcyA9IHNvdXJjZS5hdXRvVXBkYXRlSHVtYW5Cb25lcztcbiAgICB0aGlzLl9yYXdIdW1hbkJvbmVzID0gbmV3IFZSTVJpZyhzb3VyY2UuaHVtYW5Cb25lcyk7XG4gICAgdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMgPSBuZXcgVlJNSHVtYW5vaWRSaWcodGhpcy5fcmF3SHVtYW5Cb25lcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY2xvbmUgb2YgdGhpcyB7QGxpbmsgVlJNSHVtYW5vaWR9LlxuICAgKiBAcmV0dXJucyBDb3BpZWQge0BsaW5rIFZSTUh1bWFub2lkfVxuICAgKi9cbiAgcHVibGljIGNsb25lKCk6IFZSTUh1bWFub2lkIHtcbiAgICByZXR1cm4gbmV3IFZSTUh1bWFub2lkKHRoaXMuaHVtYW5Cb25lcywgeyBhdXRvVXBkYXRlSHVtYW5Cb25lczogdGhpcy5hdXRvVXBkYXRlSHVtYW5Cb25lcyB9KS5jb3B5KHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBlaXRoZXIge0BsaW5rIGdldFJhd0Fic29sdXRlUG9zZX0gb3Ige0BsaW5rIGdldE5vcm1hbGl6ZWRBYnNvbHV0ZVBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0QWJzb2x1dGVQb3NlKCk6IFZSTVBvc2Uge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdWUk1IdW1hbm9pZDogZ2V0QWJzb2x1dGVQb3NlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIGVpdGhlciBnZXRSYXdBYnNvbHV0ZVBvc2UoKSBvciBnZXROb3JtYWxpemVkQWJzb2x1dGVQb3NlKCkgaW5zdGVhZC4nLFxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRSYXdBYnNvbHV0ZVBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgYWJzb2x1dGUgcG9zZSBvZiB0aGlzIHJhdyBodW1hbiBib25lcyBhcyBhIHtAbGluayBWUk1Qb3NlfS5cbiAgICogTm90ZSB0aGF0IHRoZSBvdXRwdXQgcmVzdWx0IHdpbGwgY29udGFpbiBpbml0aWFsIHN0YXRlIG9mIHRoZSBWUk0gYW5kIG5vdCBjb21wYXRpYmxlIGJldHdlZW4gZGlmZmVyZW50IG1vZGVscy5cbiAgICogWW91IG1pZ2h0IHdhbnQgdG8gdXNlIHtAbGluayBnZXRSYXdQb3NlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGdldFJhd0Fic29sdXRlUG9zZSgpOiBWUk1Qb3NlIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5nZXRBYnNvbHV0ZVBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgYWJzb2x1dGUgcG9zZSBvZiB0aGlzIG5vcm1hbGl6ZWQgaHVtYW4gYm9uZXMgYXMgYSB7QGxpbmsgVlJNUG9zZX0uXG4gICAqIE5vdGUgdGhhdCB0aGUgb3V0cHV0IHJlc3VsdCB3aWxsIGNvbnRhaW4gaW5pdGlhbCBzdGF0ZSBvZiB0aGUgVlJNIGFuZCBub3QgY29tcGF0aWJsZSBiZXR3ZWVuIGRpZmZlcmVudCBtb2RlbHMuXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgZ2V0Tm9ybWFsaXplZFBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0Tm9ybWFsaXplZEFic29sdXRlUG9zZSgpOiBWUk1Qb3NlIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMuZ2V0QWJzb2x1dGVQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGVpdGhlciB7QGxpbmsgZ2V0UmF3UG9zZX0gb3Ige0BsaW5rIGdldE5vcm1hbGl6ZWRQb3NlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGdldFBvc2UoKTogVlJNUG9zZSB7XG4gICAgY29uc29sZS53YXJuKCdWUk1IdW1hbm9pZDogZ2V0UG9zZSgpIGlzIGRlcHJlY2F0ZWQuIFVzZSBlaXRoZXIgZ2V0UmF3UG9zZSgpIG9yIGdldE5vcm1hbGl6ZWRQb3NlKCkgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiB0aGlzLmdldFJhd1Bvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgcG9zZSBvZiByYXcgaHVtYW4gYm9uZXMgYXMgYSB7QGxpbmsgVlJNUG9zZX0uXG4gICAqXG4gICAqIEVhY2ggdHJhbnNmb3JtIGlzIGEgbG9jYWwgdHJhbnNmb3JtIHJlbGF0aXZlIGZyb20gcmVzdCBwb3NlIChULXBvc2UpLlxuICAgKi9cbiAgcHVibGljIGdldFJhd1Bvc2UoKTogVlJNUG9zZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMuZ2V0UG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NlIG9mIG5vcm1hbGl6ZWQgaHVtYW4gYm9uZXMgYXMgYSB7QGxpbmsgVlJNUG9zZX0uXG4gICAqXG4gICAqIEVhY2ggdHJhbnNmb3JtIGlzIGEgbG9jYWwgdHJhbnNmb3JtIHJlbGF0aXZlIGZyb20gcmVzdCBwb3NlIChULXBvc2UpLlxuICAgKi9cbiAgcHVibGljIGdldE5vcm1hbGl6ZWRQb3NlKCk6IFZSTVBvc2Uge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5nZXRQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGVpdGhlciB7QGxpbmsgc2V0UmF3UG9zZX0gb3Ige0BsaW5rIHNldE5vcm1hbGl6ZWRQb3NlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIHNldFBvc2UocG9zZU9iamVjdDogVlJNUG9zZSk6IHZvaWQge1xuICAgIGNvbnNvbGUud2FybignVlJNSHVtYW5vaWQ6IHNldFBvc2UoKSBpcyBkZXByZWNhdGVkLiBVc2UgZWl0aGVyIHNldFJhd1Bvc2UoKSBvciBzZXROb3JtYWxpemVkUG9zZSgpIGluc3RlYWQuJyk7XG5cbiAgICByZXR1cm4gdGhpcy5zZXRSYXdQb3NlKHBvc2VPYmplY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIExldCB0aGUgcmF3IGh1bWFuIGJvbmVzIGRvIGEgc3BlY2lmaWVkIHBvc2UuXG4gICAqXG4gICAqIEVhY2ggdHJhbnNmb3JtIGhhdmUgdG8gYmUgYSBsb2NhbCB0cmFuc2Zvcm0gcmVsYXRpdmUgZnJvbSByZXN0IHBvc2UgKFQtcG9zZSkuXG4gICAqIFlvdSBjYW4gcGFzcyB3aGF0IHlvdSBnb3QgZnJvbSB7QGxpbmsgZ2V0UmF3UG9zZX0uXG4gICAqXG4gICAqIElmIHlvdSBhcmUgdXNpbmcge0BsaW5rIGF1dG9VcGRhdGVIdW1hbkJvbmVzfSwgeW91IG1pZ2h0IHdhbnQgdG8gdXNlIHtAbGluayBzZXROb3JtYWxpemVkUG9zZX0gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHBvc2VPYmplY3QgQSB7QGxpbmsgVlJNUG9zZX0gdGhhdCByZXByZXNlbnRzIGEgc2luZ2xlIHBvc2VcbiAgICovXG4gIHB1YmxpYyBzZXRSYXdQb3NlKHBvc2VPYmplY3Q6IFZSTVBvc2UpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5zZXRQb3NlKHBvc2VPYmplY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIExldCB0aGUgbm9ybWFsaXplZCBodW1hbiBib25lcyBkbyBhIHNwZWNpZmllZCBwb3NlLlxuICAgKlxuICAgKiBFYWNoIHRyYW5zZm9ybSBoYXZlIHRvIGJlIGEgbG9jYWwgdHJhbnNmb3JtIHJlbGF0aXZlIGZyb20gcmVzdCBwb3NlIChULXBvc2UpLlxuICAgKiBZb3UgY2FuIHBhc3Mgd2hhdCB5b3UgZ290IGZyb20ge0BsaW5rIGdldE5vcm1hbGl6ZWRQb3NlfS5cbiAgICpcbiAgICogQHBhcmFtIHBvc2VPYmplY3QgQSB7QGxpbmsgVlJNUG9zZX0gdGhhdCByZXByZXNlbnRzIGEgc2luZ2xlIHBvc2VcbiAgICovXG4gIHB1YmxpYyBzZXROb3JtYWxpemVkUG9zZShwb3NlT2JqZWN0OiBWUk1Qb3NlKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLnNldFBvc2UocG9zZU9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGVpdGhlciB7QGxpbmsgcmVzZXRSYXdQb3NlfSBvciB7QGxpbmsgcmVzZXROb3JtYWxpemVkUG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyByZXNldFBvc2UoKTogdm9pZCB7XG4gICAgY29uc29sZS53YXJuKCdWUk1IdW1hbm9pZDogcmVzZXRQb3NlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIGVpdGhlciByZXNldFJhd1Bvc2UoKSBvciByZXNldE5vcm1hbGl6ZWRQb3NlKCkgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiB0aGlzLnJlc2V0UmF3UG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSByYXcgaHVtYW5vaWQgdG8gaXRzIHJlc3QgcG9zZS5cbiAgICpcbiAgICogSWYgeW91IGFyZSB1c2luZyB7QGxpbmsgYXV0b1VwZGF0ZUh1bWFuQm9uZXN9LCB5b3UgbWlnaHQgd2FudCB0byB1c2Uge0BsaW5rIHJlc2V0Tm9ybWFsaXplZFBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgcmVzZXRSYXdQb3NlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLnJlc2V0UG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBub3JtYWxpemVkIGh1bWFub2lkIHRvIGl0cyByZXN0IHBvc2UuXG4gICAqL1xuICBwdWJsaWMgcmVzZXROb3JtYWxpemVkUG9zZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMucmVzZXRQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGVpdGhlciB7QGxpbmsgZ2V0UmF3Qm9uZX0gb3Ige0BsaW5rIGdldE5vcm1hbGl6ZWRCb25lfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGdldEJvbmUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFZSTUh1bWFuQm9uZSB8IHVuZGVmaW5lZCB7XG4gICAgY29uc29sZS53YXJuKCdWUk1IdW1hbm9pZDogZ2V0Qm9uZSgpIGlzIGRlcHJlY2F0ZWQuIFVzZSBlaXRoZXIgZ2V0UmF3Qm9uZSgpIG9yIGdldE5vcm1hbGl6ZWRCb25lKCkgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiB0aGlzLmdldFJhd0JvbmUobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgcmF3IHtAbGluayBWUk1IdW1hbkJvbmV9IGJvdW5kIHRvIGEgc3BlY2lmaWVkIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgYm9uZSB5b3Ugd2FudFxuICAgKi9cbiAgcHVibGljIGdldFJhd0JvbmUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFZSTUh1bWFuQm9uZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMuZ2V0Qm9uZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBub3JtYWxpemVkIHtAbGluayBWUk1IdW1hbkJvbmV9IGJvdW5kIHRvIGEgc3BlY2lmaWVkIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgYm9uZSB5b3Ugd2FudFxuICAgKi9cbiAgcHVibGljIGdldE5vcm1hbGl6ZWRCb25lKG5hbWU6IFZSTUh1bWFuQm9uZU5hbWUpOiBWUk1IdW1hbkJvbmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5nZXRCb25lKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBlaXRoZXIge0BsaW5rIGdldFJhd0JvbmVOb2RlfSBvciB7QGxpbmsgZ2V0Tm9ybWFsaXplZEJvbmVOb2RlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGdldEJvbmVOb2RlKG5hbWU6IFZSTUh1bWFuQm9uZU5hbWUpOiBUSFJFRS5PYmplY3QzRCB8IG51bGwge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdWUk1IdW1hbm9pZDogZ2V0Qm9uZU5vZGUoKSBpcyBkZXByZWNhdGVkLiBVc2UgZWl0aGVyIGdldFJhd0JvbmVOb2RlKCkgb3IgZ2V0Tm9ybWFsaXplZEJvbmVOb2RlKCkgaW5zdGVhZC4nLFxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRSYXdCb25lTm9kZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSByYXcgYm9uZSBhcyBhIGBUSFJFRS5PYmplY3QzRGAgYm91bmQgdG8gYSBzcGVjaWZpZWQge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XG4gICAqL1xuICBwdWJsaWMgZ2V0UmF3Qm9uZU5vZGUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFRIUkVFLk9iamVjdDNEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMuZ2V0Qm9uZU5vZGUobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbm9ybWFsaXplZCBib25lIGFzIGEgYFRIUkVFLk9iamVjdDNEYCBib3VuZCB0byBhIHNwZWNpZmllZCB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0uXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJvbmUgeW91IHdhbnRcbiAgICovXG4gIHB1YmxpYyBnZXROb3JtYWxpemVkQm9uZU5vZGUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFRIUkVFLk9iamVjdDNEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLmdldEJvbmVOb2RlKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgaHVtYW5vaWQgY29tcG9uZW50LlxuICAgKlxuICAgKiBJZiB7QGxpbmsgYXV0b1VwZGF0ZUh1bWFuQm9uZXN9IGlzIGB0cnVlYCwgaXQgdHJhbnNmZXJzIHRoZSBwb3NlIG9mIG5vcm1hbGl6ZWQgaHVtYW4gYm9uZXMgdG8gcmF3IGh1bWFuIGJvbmVzLlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvVXBkYXRlSHVtYW5Cb25lcykge1xuICAgICAgdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbmV4cG9ydCBjb25zdCBWUk1SZXF1aXJlZEh1bWFuQm9uZU5hbWUgPSB7XG4gIEhpcHM6ICdoaXBzJyxcbiAgU3BpbmU6ICdzcGluZScsXG4gIEhlYWQ6ICdoZWFkJyxcbiAgTGVmdFVwcGVyTGVnOiAnbGVmdFVwcGVyTGVnJyxcbiAgTGVmdExvd2VyTGVnOiAnbGVmdExvd2VyTGVnJyxcbiAgTGVmdEZvb3Q6ICdsZWZ0Rm9vdCcsXG4gIFJpZ2h0VXBwZXJMZWc6ICdyaWdodFVwcGVyTGVnJyxcbiAgUmlnaHRMb3dlckxlZzogJ3JpZ2h0TG93ZXJMZWcnLFxuICBSaWdodEZvb3Q6ICdyaWdodEZvb3QnLFxuICBMZWZ0VXBwZXJBcm06ICdsZWZ0VXBwZXJBcm0nLFxuICBMZWZ0TG93ZXJBcm06ICdsZWZ0TG93ZXJBcm0nLFxuICBMZWZ0SGFuZDogJ2xlZnRIYW5kJyxcbiAgUmlnaHRVcHBlckFybTogJ3JpZ2h0VXBwZXJBcm0nLFxuICBSaWdodExvd2VyQXJtOiAncmlnaHRMb3dlckFybScsXG4gIFJpZ2h0SGFuZDogJ3JpZ2h0SGFuZCcsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWUk1SZXF1aXJlZEh1bWFuQm9uZU5hbWUgPSAodHlwZW9mIFZSTVJlcXVpcmVkSHVtYW5Cb25lTmFtZSlba2V5b2YgdHlwZW9mIFZSTVJlcXVpcmVkSHVtYW5Cb25lTmFtZV07XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSAqIGFzIFYwVlJNIGZyb20gJ0BwaXhpdi90eXBlcy12cm0tMC4wJztcbmltcG9ydCB0eXBlICogYXMgVjFWUk1TY2hlbWEgZnJvbSAnQHBpeGl2L3R5cGVzLXZybWMtdnJtLTEuMCc7XG5pbXBvcnQgdHlwZSB7IEdMVEYsIEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi9WUk1IdW1hbm9pZCc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFuQm9uZXMgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZXMnO1xuaW1wb3J0IHsgVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lIH0gZnJvbSAnLi9WUk1SZXF1aXJlZEh1bWFuQm9uZU5hbWUnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuaW1wb3J0IHsgVlJNSHVtYW5vaWRIZWxwZXIgfSBmcm9tICcuL2hlbHBlcnMvVlJNSHVtYW5vaWRIZWxwZXInO1xuaW1wb3J0IHsgVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9WUk1IdW1hbm9pZExvYWRlclBsdWdpbk9wdGlvbnMnO1xuXG4vKipcbiAqIFBvc3NpYmxlIHNwZWMgdmVyc2lvbnMgaXQgcmVjb2duaXplcy5cbiAqL1xuY29uc3QgUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyA9IG5ldyBTZXQoWycxLjAnLCAnMS4wLWJldGEnXSk7XG5cbi8qKlxuICogQSBtYXAgZnJvbSBvbGQgdGh1bWIgYm9uZSBuYW1lcyB0byBuZXcgdGh1bWIgYm9uZSBuYW1lc1xuICovXG5jb25zdCB0aHVtYkJvbmVOYW1lTWFwOiB7IFtrZXk6IHN0cmluZ106IFYxVlJNU2NoZW1hLkh1bWFub2lkSHVtYW5Cb25lTmFtZSB8IHVuZGVmaW5lZCB9ID0ge1xuICBsZWZ0VGh1bWJQcm94aW1hbDogJ2xlZnRUaHVtYk1ldGFjYXJwYWwnLFxuICBsZWZ0VGh1bWJJbnRlcm1lZGlhdGU6ICdsZWZ0VGh1bWJQcm94aW1hbCcsXG4gIHJpZ2h0VGh1bWJQcm94aW1hbDogJ3JpZ2h0VGh1bWJNZXRhY2FycGFsJyxcbiAgcmlnaHRUaHVtYkludGVybWVkaWF0ZTogJ3JpZ2h0VGh1bWJQcm94aW1hbCcsXG59O1xuXG4vKipcbiAqIEEgcGx1Z2luIG9mIEdMVEZMb2FkZXIgdGhhdCBpbXBvcnRzIGEge0BsaW5rIFZSTUh1bWFub2lkfSBmcm9tIGEgVlJNIGV4dGVuc2lvbiBvZiBhIEdMVEYuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1IdW1hbm9pZExvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICAvKipcbiAgICogU3BlY2lmeSBhbiBPYmplY3QzRCB0byBhZGQge0BsaW5rIFZSTUh1bWFub2lkSGVscGVyfS5cbiAgICogSWYgbm90IHNwZWNpZmllZCwgaGVscGVyIHdpbGwgbm90IGJlIGNyZWF0ZWQuXG4gICAqIElmIGByZW5kZXJPcmRlcmAgaXMgc2V0IHRvIHRoZSByb290LCB0aGUgaGVscGVyIHdpbGwgY29weSB0aGUgc2FtZSBgcmVuZGVyT3JkZXJgIC5cbiAgICovXG4gIHB1YmxpYyBoZWxwZXJSb290PzogVEhSRUUuT2JqZWN0M0Q7XG5cbiAgcHVibGljIGF1dG9VcGRhdGVIdW1hbkJvbmVzPzogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIC8vIFdlIHNob3VsZCB1c2UgdGhlIGV4dGVuc2lvbiBuYW1lIGluc3RlYWQgYnV0IHdlIGhhdmUgbXVsdGlwbGUgcGx1Z2lucyBmb3IgYW4gZXh0ZW5zaW9uLi4uXG4gICAgcmV0dXJuICdWUk1IdW1hbm9pZExvYWRlclBsdWdpbic7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyc2VyOiBHTFRGUGFyc2VyLCBvcHRpb25zPzogVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW5PcHRpb25zKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cbiAgICB0aGlzLmhlbHBlclJvb3QgPSBvcHRpb25zPy5oZWxwZXJSb290O1xuICAgIHRoaXMuYXV0b1VwZGF0ZUh1bWFuQm9uZXMgPSBvcHRpb25zPy5hdXRvVXBkYXRlSHVtYW5Cb25lcztcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlclJvb3QoZ2x0ZjogR0xURik6IFByb21pc2U8dm9pZD4ge1xuICAgIGdsdGYudXNlckRhdGEudnJtSHVtYW5vaWQgPSBhd2FpdCB0aGlzLl9pbXBvcnQoZ2x0Zik7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGEge0BsaW5rIFZSTUh1bWFub2lkfSBmcm9tIGEgVlJNLlxuICAgKlxuICAgKiBAcGFyYW0gZ2x0ZiBBIHBhcnNlZCByZXN1bHQgb2YgR0xURiB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2ltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1IdW1hbm9pZCB8IG51bGw+IHtcbiAgICBjb25zdCB2MVJlc3VsdCA9IGF3YWl0IHRoaXMuX3YxSW1wb3J0KGdsdGYpO1xuICAgIGlmICh2MVJlc3VsdCkge1xuICAgICAgcmV0dXJuIHYxUmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHYwUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjBJbXBvcnQoZ2x0Zik7XG4gICAgaWYgKHYwUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjBSZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MUltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1IdW1hbm9pZCB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgaXNWUk1Vc2VkID0ganNvbi5leHRlbnNpb25zVXNlZD8uaW5kZXhPZignVlJNQ192cm0nKSAhPT0gLTE7XG4gICAgaWYgKCFpc1ZSTVVzZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGpzb24uZXh0ZW5zaW9ucz8uWydWUk1DX3ZybSddIGFzIFYxVlJNU2NoZW1hLlZSTUNWUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCFleHRlbnNpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNwZWNWZXJzaW9uID0gZXh0ZW5zaW9uLnNwZWNWZXJzaW9uO1xuICAgIGlmICghUE9TU0lCTEVfU1BFQ19WRVJTSU9OUy5oYXMoc3BlY1ZlcnNpb24pKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luOiBVbmtub3duIFZSTUNfdnJtIHNwZWNWZXJzaW9uIFwiJHtzcGVjVmVyc2lvbn1cImApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hSHVtYW5vaWQgPSBleHRlbnNpb24uaHVtYW5vaWQ7XG4gICAgaWYgKCFzY2hlbWFIdW1hbm9pZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY29tcGF0OiAxLjAtYmV0YSB0aHVtYiBib25lIG5hbWVzXG4gICAgICpcbiAgICAgKiBgdHJ1ZWAgaWYgYGxlZnRUaHVtYkludGVybWVkaWF0ZWAgb3IgYHJpZ2h0VGh1bWJJbnRlcm1lZGlhdGVgIGV4aXN0c1xuICAgICAqL1xuICAgIGNvbnN0IGV4aXN0c1ByZXZpb3VzVGh1bWJOYW1lID1cbiAgICAgIChzY2hlbWFIdW1hbm9pZC5odW1hbkJvbmVzIGFzIGFueSkubGVmdFRodW1iSW50ZXJtZWRpYXRlICE9IG51bGwgfHxcbiAgICAgIChzY2hlbWFIdW1hbm9pZC5odW1hbkJvbmVzIGFzIGFueSkucmlnaHRUaHVtYkludGVybWVkaWF0ZSAhPSBudWxsO1xuXG4gICAgY29uc3QgaHVtYW5Cb25lczogUGFydGlhbDxWUk1IdW1hbkJvbmVzPiA9IHt9O1xuICAgIGlmIChzY2hlbWFIdW1hbm9pZC5odW1hbkJvbmVzICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBPYmplY3QuZW50cmllcyhzY2hlbWFIdW1hbm9pZC5odW1hbkJvbmVzKS5tYXAoYXN5bmMgKFtib25lTmFtZVN0cmluZywgc2NoZW1hSHVtYW5Cb25lXSkgPT4ge1xuICAgICAgICAgIGxldCBib25lTmFtZSA9IGJvbmVOYW1lU3RyaW5nIGFzIFYxVlJNU2NoZW1hLkh1bWFub2lkSHVtYW5Cb25lTmFtZTtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHNjaGVtYUh1bWFuQm9uZS5ub2RlO1xuXG4gICAgICAgICAgLy8gY29tcGF0OiAxLjAtYmV0YSBwcmV2aW91cyB0aHVtYiBib25lIG5hbWVzXG4gICAgICAgICAgaWYgKGV4aXN0c1ByZXZpb3VzVGh1bWJOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCB0aHVtYkJvbmVOYW1lID0gdGh1bWJCb25lTmFtZU1hcFtib25lTmFtZV07XG4gICAgICAgICAgICBpZiAodGh1bWJCb25lTmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGJvbmVOYW1lID0gdGh1bWJCb25lTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBub2RlID0gYXdhaXQgdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgnbm9kZScsIGluZGV4KTtcblxuICAgICAgICAgIC8vIGlmIHRoZSBzcGVjaWZpZWQgbm9kZSBkb2VzIG5vdCBleGlzdCwgZW1pdCBhIHdhcm5pbmdcbiAgICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEEgZ2xURiBub2RlIGJvdW5kIHRvIHRoZSBodW1hbm9pZCBib25lICR7Ym9uZU5hbWV9IChpbmRleCA9ICR7aW5kZXh9KSBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHNldCB0byB0aGUgYGh1bWFuQm9uZXNgXG4gICAgICAgICAgaHVtYW5Cb25lc1tib25lTmFtZV0gPSB7IG5vZGUgfTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGh1bWFub2lkID0gbmV3IFZSTUh1bWFub2lkKHRoaXMuX2Vuc3VyZVJlcXVpcmVkQm9uZXNFeGlzdChodW1hbkJvbmVzKSwge1xuICAgICAgYXV0b1VwZGF0ZUh1bWFuQm9uZXM6IHRoaXMuYXV0b1VwZGF0ZUh1bWFuQm9uZXMsXG4gICAgfSk7XG4gICAgZ2x0Zi5zY2VuZS5hZGQoaHVtYW5vaWQubm9ybWFsaXplZEh1bWFuQm9uZXNSb290KTtcblxuICAgIGlmICh0aGlzLmhlbHBlclJvb3QpIHtcbiAgICAgIGNvbnN0IGhlbHBlciA9IG5ldyBWUk1IdW1hbm9pZEhlbHBlcihodW1hbm9pZCk7XG4gICAgICB0aGlzLmhlbHBlclJvb3QuYWRkKGhlbHBlcik7XG4gICAgICBoZWxwZXIucmVuZGVyT3JkZXIgPSB0aGlzLmhlbHBlclJvb3QucmVuZGVyT3JkZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh1bWFub2lkO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjBJbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNSHVtYW5vaWQgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIGNvbnN0IHZybUV4dCA9IGpzb24uZXh0ZW5zaW9ucz8uVlJNIGFzIFYwVlJNLlZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIXZybUV4dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hSHVtYW5vaWQ6IFYwVlJNLkh1bWFub2lkIHwgdW5kZWZpbmVkID0gdnJtRXh0Lmh1bWFub2lkO1xuICAgIGlmICghc2NoZW1hSHVtYW5vaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGh1bWFuQm9uZXM6IFBhcnRpYWw8VlJNSHVtYW5Cb25lcz4gPSB7fTtcbiAgICBpZiAoc2NoZW1hSHVtYW5vaWQuaHVtYW5Cb25lcyAhPSBudWxsKSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgc2NoZW1hSHVtYW5vaWQuaHVtYW5Cb25lcy5tYXAoYXN5bmMgKGJvbmUpID0+IHtcbiAgICAgICAgICBjb25zdCBib25lTmFtZSA9IGJvbmUuYm9uZTtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGJvbmUubm9kZTtcblxuICAgICAgICAgIGlmIChib25lTmFtZSA9PSBudWxsIHx8IGluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBub2RlID0gYXdhaXQgdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgnbm9kZScsIGluZGV4KTtcblxuICAgICAgICAgIC8vIGlmIHRoZSBzcGVjaWZpZWQgbm9kZSBkb2VzIG5vdCBleGlzdCwgZW1pdCBhIHdhcm5pbmdcbiAgICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEEgZ2xURiBub2RlIGJvdW5kIHRvIHRoZSBodW1hbm9pZCBib25lICR7Ym9uZU5hbWV9IChpbmRleCA9ICR7aW5kZXh9KSBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG1hcCB0byBuZXcgYm9uZSBuYW1lXG4gICAgICAgICAgY29uc3QgdGh1bWJCb25lTmFtZSA9IHRodW1iQm9uZU5hbWVNYXBbYm9uZU5hbWVdO1xuICAgICAgICAgIGNvbnN0IG5ld0JvbmVOYW1lID0gKHRodW1iQm9uZU5hbWUgPz8gYm9uZU5hbWUpIGFzIFYxVlJNU2NoZW1hLkh1bWFub2lkSHVtYW5Cb25lTmFtZTtcblxuICAgICAgICAgIC8vIHYwIFZSTXMgbWlnaHQgaGF2ZSBhIG11bHRpcGxlIG5vZGVzIGF0dGFjaGVkIHRvIGEgc2luZ2xlIGJvbmUuLi5cbiAgICAgICAgICAvLyBzbyBpZiB0aGVyZSBhbHJlYWR5IGlzIGFuIGVudHJ5IGluIHRoZSBgaHVtYW5Cb25lc2AsIHNob3cgYSB3YXJuaW5nIGFuZCBpZ25vcmUgaXRcbiAgICAgICAgICBpZiAoaHVtYW5Cb25lc1tuZXdCb25lTmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTXVsdGlwbGUgYm9uZSBlbnRyaWVzIGZvciAke25ld0JvbmVOYW1lfSBkZXRlY3RlZCAoaW5kZXggPSAke2luZGV4fSksIGlnbm9yaW5nIGR1cGxpY2F0ZWQgZW50cmllcy5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBzZXQgdG8gdGhlIGBodW1hbkJvbmVzYFxuICAgICAgICAgIGh1bWFuQm9uZXNbbmV3Qm9uZU5hbWVdID0geyBub2RlIH07XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBodW1hbm9pZCA9IG5ldyBWUk1IdW1hbm9pZCh0aGlzLl9lbnN1cmVSZXF1aXJlZEJvbmVzRXhpc3QoaHVtYW5Cb25lcyksIHtcbiAgICAgIGF1dG9VcGRhdGVIdW1hbkJvbmVzOiB0aGlzLmF1dG9VcGRhdGVIdW1hbkJvbmVzLFxuICAgIH0pO1xuICAgIGdsdGYuc2NlbmUuYWRkKGh1bWFub2lkLm5vcm1hbGl6ZWRIdW1hbkJvbmVzUm9vdCk7XG5cbiAgICBpZiAodGhpcy5oZWxwZXJSb290KSB7XG4gICAgICBjb25zdCBoZWxwZXIgPSBuZXcgVlJNSHVtYW5vaWRIZWxwZXIoaHVtYW5vaWQpO1xuICAgICAgdGhpcy5oZWxwZXJSb290LmFkZChoZWxwZXIpO1xuICAgICAgaGVscGVyLnJlbmRlck9yZGVyID0gdGhpcy5oZWxwZXJSb290LnJlbmRlck9yZGVyO1xuICAgIH1cblxuICAgIHJldHVybiBodW1hbm9pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmUgcmVxdWlyZWQgYm9uZXMgZXhpc3QgaW4gZ2l2ZW4gaHVtYW4gYm9uZXMuXG4gICAqIEBwYXJhbSBodW1hbkJvbmVzIEh1bWFuIGJvbmVzXG4gICAqIEByZXR1cm5zIEh1bWFuIGJvbmVzLCBubyBsb25nZXIgcGFydGlhbCFcbiAgICovXG4gIHByaXZhdGUgX2Vuc3VyZVJlcXVpcmVkQm9uZXNFeGlzdChodW1hbkJvbmVzOiBQYXJ0aWFsPFZSTUh1bWFuQm9uZXM+KTogVlJNSHVtYW5Cb25lcyB7XG4gICAgLy8gZW5zdXJlIHJlcXVpcmVkIGJvbmVzIGV4aXN0XG4gICAgY29uc3QgbWlzc2luZ1JlcXVpcmVkQm9uZXMgPSBPYmplY3QudmFsdWVzKFZSTVJlcXVpcmVkSHVtYW5Cb25lTmFtZSkuZmlsdGVyKFxuICAgICAgKHJlcXVpcmVkQm9uZU5hbWUpID0+IGh1bWFuQm9uZXNbcmVxdWlyZWRCb25lTmFtZV0gPT0gbnVsbCxcbiAgICApO1xuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3IgaWYgdGhlcmUgYXJlIG1pc3NpbmcgYm9uZXNcbiAgICBpZiAobWlzc2luZ1JlcXVpcmVkQm9uZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW46IFRoZXNlIGh1bWFub2lkIGJvbmVzIGFyZSByZXF1aXJlZCBidXQgbm90IGV4aXN0OiAke21pc3NpbmdSZXF1aXJlZEJvbmVzLmpvaW4oJywgJyl9YCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh1bWFuQm9uZXMgYXMgVlJNSHVtYW5Cb25lcztcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFZSTUxvb2tBdCB9IGZyb20gJy4uL1ZSTUxvb2tBdCc7XG5pbXBvcnQgeyBGYW5CdWZmZXJHZW9tZXRyeSB9IGZyb20gJy4vdXRpbHMvRmFuQnVmZmVyR2VvbWV0cnknO1xuaW1wb3J0IHsgTGluZUFuZFNwaGVyZUJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi91dGlscy9MaW5lQW5kU3BoZXJlQnVmZmVyR2VvbWV0cnknO1xuXG5jb25zdCBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXRCID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF92M0EgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3YzQiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbmNvbnN0IFNRUlRfMl9PVkVSXzIgPSBNYXRoLnNxcnQoMi4wKSAvIDIuMDtcbmNvbnN0IFFVQVRfWFlfQ1c5MCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKDAsIDAsIC1TUVJUXzJfT1ZFUl8yLCBTUVJUXzJfT1ZFUl8yKTtcbmNvbnN0IFZFQzNfUE9TSVRJVkVfWSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAuMCwgMS4wLCAwLjApO1xuXG5leHBvcnQgY2xhc3MgVlJNTG9va0F0SGVscGVyIGV4dGVuZHMgVEhSRUUuR3JvdXAge1xuICBwdWJsaWMgcmVhZG9ubHkgdnJtTG9va0F0OiBWUk1Mb29rQXQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21lc2hZYXc6IFRIUkVFLk1lc2g8RmFuQnVmZmVyR2VvbWV0cnksIFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWVzaFBpdGNoOiBUSFJFRS5NZXNoPEZhbkJ1ZmZlckdlb21ldHJ5LCBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbD47XG4gIHByaXZhdGUgcmVhZG9ubHkgX2xpbmVUYXJnZXQ6IFRIUkVFLkxpbmVTZWdtZW50czxMaW5lQW5kU3BoZXJlQnVmZmVyR2VvbWV0cnksIFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobG9va0F0OiBWUk1Mb29rQXQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy52cm1Mb29rQXQgPSBsb29rQXQ7XG5cbiAgICB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBGYW5CdWZmZXJHZW9tZXRyeSgpO1xuICAgICAgZ2VvbWV0cnkucmFkaXVzID0gMC41O1xuXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgIGNvbG9yOiAweDAwZmYwMCxcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcbiAgICAgICAgZGVwdGhUZXN0OiBmYWxzZSxcbiAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fbWVzaFBpdGNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIHRoaXMuYWRkKHRoaXMuX21lc2hQaXRjaCk7XG4gICAgfVxuXG4gICAge1xuICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgRmFuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICAgIGdlb21ldHJ5LnJhZGl1cyA9IDAuNTtcblxuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICBjb2xvcjogMHhmZjAwMDAsXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXG4gICAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX21lc2hZYXcgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgdGhpcy5hZGQodGhpcy5fbWVzaFlhdyk7XG4gICAgfVxuXG4gICAge1xuICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgTGluZUFuZFNwaGVyZUJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICBnZW9tZXRyeS5yYWRpdXMgPSAwLjE7XG5cbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHtcbiAgICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9saW5lVGFyZ2V0ID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgdGhpcy5fbGluZVRhcmdldC5mcnVzdHVtQ3VsbGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmFkZCh0aGlzLl9saW5lVGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9tZXNoWWF3Lmdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9tZXNoWWF3Lm1hdGVyaWFsLmRpc3Bvc2UoKTtcblxuICAgIHRoaXMuX21lc2hQaXRjaC5nZW9tZXRyeS5kaXNwb3NlKCk7XG4gICAgdGhpcy5fbWVzaFBpdGNoLm1hdGVyaWFsLmRpc3Bvc2UoKTtcblxuICAgIHRoaXMuX2xpbmVUYXJnZXQuZ2VvbWV0cnkuZGlzcG9zZSgpO1xuICAgIHRoaXMuX2xpbmVUYXJnZXQubWF0ZXJpYWwuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU1hdHJpeFdvcmxkKGZvcmNlOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gdXBkYXRlIGdlb21ldHJpZXNcbiAgICBjb25zdCB5YXcgPSBUSFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMudnJtTG9va0F0LnlhdztcbiAgICB0aGlzLl9tZXNoWWF3Lmdlb21ldHJ5LnRoZXRhID0geWF3O1xuICAgIHRoaXMuX21lc2hZYXcuZ2VvbWV0cnkudXBkYXRlKCk7XG5cbiAgICBjb25zdCBwaXRjaCA9IFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy52cm1Mb29rQXQucGl0Y2g7XG4gICAgdGhpcy5fbWVzaFBpdGNoLmdlb21ldHJ5LnRoZXRhID0gcGl0Y2g7XG4gICAgdGhpcy5fbWVzaFBpdGNoLmdlb21ldHJ5LnVwZGF0ZSgpO1xuXG4gICAgLy8gZ2V0IHdvcmxkIHBvc2l0aW9uIGFuZCBxdWF0ZXJuaW9uXG4gICAgdGhpcy52cm1Mb29rQXQuZ2V0TG9va0F0V29ybGRQb3NpdGlvbihfdjNBKTtcbiAgICB0aGlzLnZybUxvb2tBdC5nZXRMb29rQXRXb3JsZFF1YXRlcm5pb24oX3F1YXRBKTtcblxuICAgIC8vIGNhbGN1bGF0ZSByb3RhdGlvbiB1c2luZyBmYWNlRnJvbnRcbiAgICBfcXVhdEEubXVsdGlwbHkodGhpcy52cm1Mb29rQXQuZ2V0RmFjZUZyb250UXVhdGVybmlvbihfcXVhdEIpKTtcblxuICAgIC8vIHNldCB0cmFuc2Zvcm0gdG8gbWVzaGVzXG4gICAgdGhpcy5fbWVzaFlhdy5wb3NpdGlvbi5jb3B5KF92M0EpO1xuICAgIHRoaXMuX21lc2hZYXcucXVhdGVybmlvbi5jb3B5KF9xdWF0QSk7XG5cbiAgICB0aGlzLl9tZXNoUGl0Y2gucG9zaXRpb24uY29weShfdjNBKTtcbiAgICB0aGlzLl9tZXNoUGl0Y2gucXVhdGVybmlvbi5jb3B5KF9xdWF0QSk7XG4gICAgdGhpcy5fbWVzaFBpdGNoLnF1YXRlcm5pb24ubXVsdGlwbHkoX3F1YXRCLnNldEZyb21BeGlzQW5nbGUoVkVDM19QT1NJVElWRV9ZLCB5YXcpKTtcbiAgICB0aGlzLl9tZXNoUGl0Y2gucXVhdGVybmlvbi5tdWx0aXBseShRVUFUX1hZX0NXOTApO1xuXG4gICAgLy8gdXBkYXRlIHRhcmdldCBsaW5lIGFuZCBzcGhlcmVcbiAgICBjb25zdCB7IHRhcmdldCwgYXV0b1VwZGF0ZSB9ID0gdGhpcy52cm1Mb29rQXQ7XG4gICAgaWYgKHRhcmdldCAhPSBudWxsICYmIGF1dG9VcGRhdGUpIHtcbiAgICAgIHRhcmdldC5nZXRXb3JsZFBvc2l0aW9uKF92M0IpLnN1YihfdjNBKTtcbiAgICAgIHRoaXMuX2xpbmVUYXJnZXQuZ2VvbWV0cnkudGFpbC5jb3B5KF92M0IpO1xuICAgICAgdGhpcy5fbGluZVRhcmdldC5nZW9tZXRyeS51cGRhdGUoKTtcbiAgICAgIHRoaXMuX2xpbmVUYXJnZXQucG9zaXRpb24uY29weShfdjNBKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSB0cmFuc2Zvcm0gdG8gbWVzaGVzXG4gICAgc3VwZXIudXBkYXRlTWF0cml4V29ybGQoZm9yY2UpO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgY2xhc3MgRmFuQnVmZmVyR2VvbWV0cnkgZXh0ZW5kcyBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIHB1YmxpYyB0aGV0YTogbnVtYmVyO1xuICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XG4gIHByaXZhdGUgX2N1cnJlbnRUaGV0YSA9IDA7XG4gIHByaXZhdGUgX2N1cnJlbnRSYWRpdXMgPSAwO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hdHRyUG9zOiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2F0dHJJbmRleDogVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50aGV0YSA9IDAuMDtcbiAgICB0aGlzLnJhZGl1cyA9IDAuMDtcbiAgICB0aGlzLl9jdXJyZW50VGhldGEgPSAwLjA7XG4gICAgdGhpcy5fY3VycmVudFJhZGl1cyA9IDAuMDtcblxuICAgIHRoaXMuX2F0dHJQb3MgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoNjUgKiAzKSwgMyk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgdGhpcy5fYXR0clBvcyk7XG5cbiAgICB0aGlzLl9hdHRySW5kZXggPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBVaW50MTZBcnJheSgzICogNjMpLCAxKTtcbiAgICB0aGlzLnNldEluZGV4KHRoaXMuX2F0dHJJbmRleCk7XG5cbiAgICB0aGlzLl9idWlsZEluZGV4KCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgbGV0IHNob3VsZFVwZGF0ZUdlb21ldHJ5ID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fY3VycmVudFRoZXRhICE9PSB0aGlzLnRoZXRhKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VGhldGEgPSB0aGlzLnRoZXRhO1xuICAgICAgc2hvdWxkVXBkYXRlR2VvbWV0cnkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jdXJyZW50UmFkaXVzICE9PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy5fY3VycmVudFJhZGl1cyA9IHRoaXMucmFkaXVzO1xuICAgICAgc2hvdWxkVXBkYXRlR2VvbWV0cnkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVHZW9tZXRyeSkge1xuICAgICAgdGhpcy5fYnVpbGRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkUG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fYXR0clBvcy5zZXRYWVooMCwgMC4wLCAwLjAsIDAuMCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY0OyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSAoaSAvIDYzLjApICogdGhpcy5fY3VycmVudFRoZXRhO1xuXG4gICAgICB0aGlzLl9hdHRyUG9zLnNldFhZWihpICsgMSwgdGhpcy5fY3VycmVudFJhZGl1cyAqIE1hdGguc2luKHQpLCAwLjAsIHRoaXMuX2N1cnJlbnRSYWRpdXMgKiBNYXRoLmNvcyh0KSk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXR0clBvcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9idWlsZEluZGV4KCk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjM7IGkrKykge1xuICAgICAgdGhpcy5fYXR0ckluZGV4LnNldFhZWihpICogMywgMCwgaSArIDEsIGkgKyAyKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdHRySW5kZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgY2xhc3MgTGluZUFuZFNwaGVyZUJ1ZmZlckdlb21ldHJ5IGV4dGVuZHMgVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XG4gIHB1YmxpYyB0YWlsOiBUSFJFRS5WZWN0b3IzO1xuICBwcml2YXRlIF9jdXJyZW50UmFkaXVzOiBudW1iZXI7XG4gIHByaXZhdGUgX2N1cnJlbnRUYWlsOiBUSFJFRS5WZWN0b3IzO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hdHRyUG9zOiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2F0dHJJbmRleDogVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yYWRpdXMgPSAwLjA7XG4gICAgdGhpcy5fY3VycmVudFJhZGl1cyA9IDAuMDtcblxuICAgIHRoaXMudGFpbCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgdGhpcy5fY3VycmVudFRhaWwgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgdGhpcy5fYXR0clBvcyA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgyOTQpLCAzKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB0aGlzLl9hdHRyUG9zKTtcblxuICAgIHRoaXMuX2F0dHJJbmRleCA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IFVpbnQxNkFycmF5KDE5NCksIDEpO1xuICAgIHRoaXMuc2V0SW5kZXgodGhpcy5fYXR0ckluZGV4KTtcblxuICAgIHRoaXMuX2J1aWxkSW5kZXgoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBsZXQgc2hvdWxkVXBkYXRlR2VvbWV0cnkgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9jdXJyZW50UmFkaXVzICE9PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy5fY3VycmVudFJhZGl1cyA9IHRoaXMucmFkaXVzO1xuICAgICAgc2hvdWxkVXBkYXRlR2VvbWV0cnkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fY3VycmVudFRhaWwuZXF1YWxzKHRoaXMudGFpbCkpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUYWlsLmNvcHkodGhpcy50YWlsKTtcbiAgICAgIHNob3VsZFVwZGF0ZUdlb21ldHJ5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlR2VvbWV0cnkpIHtcbiAgICAgIHRoaXMuX2J1aWxkUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9idWlsZFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkrKykge1xuICAgICAgY29uc3QgdCA9IChpIC8gMTYuMCkgKiBNYXRoLlBJO1xuXG4gICAgICB0aGlzLl9hdHRyUG9zLnNldFhZWihpLCBNYXRoLmNvcyh0KSwgTWF0aC5zaW4odCksIDAuMCk7XG4gICAgICB0aGlzLl9hdHRyUG9zLnNldFhZWigzMiArIGksIDAuMCwgTWF0aC5jb3ModCksIE1hdGguc2luKHQpKTtcbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDY0ICsgaSwgTWF0aC5zaW4odCksIDAuMCwgTWF0aC5jb3ModCkpO1xuICAgIH1cblxuICAgIHRoaXMuc2NhbGUodGhpcy5fY3VycmVudFJhZGl1cywgdGhpcy5fY3VycmVudFJhZGl1cywgdGhpcy5fY3VycmVudFJhZGl1cyk7XG4gICAgdGhpcy50cmFuc2xhdGUodGhpcy5fY3VycmVudFRhaWwueCwgdGhpcy5fY3VycmVudFRhaWwueSwgdGhpcy5fY3VycmVudFRhaWwueik7XG5cbiAgICB0aGlzLl9hdHRyUG9zLnNldFhZWig5NiwgMCwgMCwgMCk7XG4gICAgdGhpcy5fYXR0clBvcy5zZXRYWVooOTcsIHRoaXMuX2N1cnJlbnRUYWlsLngsIHRoaXMuX2N1cnJlbnRUYWlsLnksIHRoaXMuX2N1cnJlbnRUYWlsLnopO1xuXG4gICAgdGhpcy5fYXR0clBvcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9idWlsZEluZGV4KCk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkrKykge1xuICAgICAgY29uc3QgaTEgPSAoaSArIDEpICUgMzI7XG5cbiAgICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWShpICogMiwgaSwgaTEpO1xuICAgICAgdGhpcy5fYXR0ckluZGV4LnNldFhZKDY0ICsgaSAqIDIsIDMyICsgaSwgMzIgKyBpMSk7XG4gICAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoMTI4ICsgaSAqIDIsIDY0ICsgaSwgNjQgKyBpMSk7XG4gICAgfVxuICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSgxOTIsIDk2LCA5Nyk7XG5cbiAgICB0aGlzLl9hdHRySW5kZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuLi9odW1hbm9pZCc7XG5pbXBvcnQgeyBnZXRXb3JsZFF1YXRlcm5pb25MaXRlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZSc7XG5pbXBvcnQgeyBxdWF0SW52ZXJ0Q29tcGF0IH0gZnJvbSAnLi4vdXRpbHMvcXVhdEludmVydENvbXBhdCc7XG5pbXBvcnQgeyBjYWxjQXppbXV0aEFsdGl0dWRlIH0gZnJvbSAnLi91dGlscy9jYWxjQXppbXV0aEFsdGl0dWRlJztcbmltcG9ydCB0eXBlIHsgVlJNTG9va0F0QXBwbGllciB9IGZyb20gJy4vVlJNTG9va0F0QXBwbGllcic7XG5pbXBvcnQgeyBzYW5pdGl6ZUFuZ2xlIH0gZnJvbSAnLi91dGlscy9zYW5pdGl6ZUFuZ2xlJztcblxuY29uc3QgVkVDM19QT1NJVElWRV9aID0gbmV3IFRIUkVFLlZlY3RvcjMoMC4wLCAwLjAsIDEuMCk7XG5cbmNvbnN0IF92M0EgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3YzQiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfdjNDID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF9xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfcXVhdEIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXRDID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9xdWF0RCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfZXVsZXJBID0gbmV3IFRIUkVFLkV1bGVyKCk7XG5cbi8qKlxuICogQSBjbGFzcyBjb250cm9scyBleWUgZ2F6ZSBtb3ZlbWVudHMgb2YgYSBWUk0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1Mb29rQXQge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVVTEVSX09SREVSID0gJ1lYWic7IC8vIHlhdy1waXRjaC1yb2xsXG5cbiAgLyoqXG4gICAqIFRoZSBvcmlnaW4gb2YgTG9va0F0LiBQb3NpdGlvbiBvZmZzZXQgZnJvbSB0aGUgaGVhZCBib25lLlxuICAgKi9cbiAgcHVibGljIG9mZnNldEZyb21IZWFkQm9uZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgLyoqXG4gICAqIEl0cyBhc3NvY2lhdGVkIHtAbGluayBWUk1IdW1hbm9pZH0uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaHVtYW5vaWQ6IFZSTUh1bWFub2lkO1xuXG4gIC8qKlxuICAgKiBUaGUge0BsaW5rIFZSTUxvb2tBdEFwcGxpZXJ9IG9mIHRoZSBMb29rQXQuXG4gICAqL1xuICBwdWJsaWMgYXBwbGllcjogVlJNTG9va0F0QXBwbGllcjtcblxuICAvKipcbiAgICogSWYgdGhpcyBpcyB0cnVlLCB0aGUgTG9va0F0IHdpbGwgYmUgdXBkYXRlZCBhdXRvbWF0aWNhbGx5IGJ5IGNhbGxpbmcge0BsaW5rIHVwZGF0ZX0sIHRvd2FyZGluZyB0aGUgZGlyZWN0aW9uIHRvIHRoZSB7QGxpbmsgdGFyZ2V0fS5cbiAgICogYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAqXG4gICAqIFNlZSBhbHNvOiB7QGxpbmsgdGFyZ2V0fVxuICAgKi9cbiAgcHVibGljIGF1dG9VcGRhdGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgdGFyZ2V0IG9iamVjdCBvZiB0aGUgTG9va0F0LlxuICAgKiBOb3RlIHRoYXQgaXQgZG9lcyBub3QgbWFrZSBhbnkgc2Vuc2UgaWYge0BsaW5rIGF1dG9VcGRhdGV9IGlzIGRpc2FibGVkLlxuICAgKlxuICAgKiBTZWUgYWxzbzoge0BsaW5rIGF1dG9VcGRhdGV9XG4gICAqL1xuICBwdWJsaWMgdGFyZ2V0PzogVEhSRUUuT2JqZWN0M0QgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgZnJvbnQgZGlyZWN0aW9uIG9mIHRoZSBmYWNlLlxuICAgKiBJbnRlbmRlZCB0byBiZSB1c2VkIGZvciBWUk0gMC4wIGNvbXBhdCAoVlJNIDAuMCBtb2RlbHMgYXJlIGZhY2luZyBaLSBpbnN0ZWFkIG9mIForKS5cbiAgICogWW91IHVzdWFsbHkgZG9uJ3Qgd2FudCB0byB0b3VjaCB0aGlzLlxuICAgKi9cbiAgcHVibGljIGZhY2VGcm9udCA9IG5ldyBUSFJFRS5WZWN0b3IzKDAuMCwgMC4wLCAxLjApO1xuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBhbmdsZSBhcm91bmQgWSBheGlzLCBpbiBkZWdyZWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgX3lhdzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBhbmdsZSBhcm91bmQgWSBheGlzLCBpbiBkZWdyZWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHlhdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl95YXc7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgYW5nbGUgYXJvdW5kIFkgYXhpcywgaW4gZGVncmVlLlxuICAgKi9cbiAgcHVibGljIHNldCB5YXcodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3lhdyA9IHZhbHVlO1xuICAgIHRoaXMuX25lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBhbmdsZSBhcm91bmQgWCBheGlzLCBpbiBkZWdyZWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgX3BpdGNoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IGFuZ2xlIGFyb3VuZCBYIGF4aXMsIGluIGRlZ3JlZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgcGl0Y2goKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGl0Y2g7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgYW5nbGUgYXJvdW5kIFggYXhpcywgaW4gZGVncmVlLlxuICAgKi9cbiAgcHVibGljIHNldCBwaXRjaCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGl0Y2ggPSB2YWx1ZTtcbiAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoYXQgYW5nbGVzIG5lZWQgdG8gYmUgYXBwbGllZCB0byBpdHMgW0BsaW5rIGFwcGxpZXJdLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9uZWVkc1VwZGF0ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogV29ybGQgcm90YXRpb24gb2YgdGhlIGhlYWQgaW4gaXRzIHJlc3QgcG9zZS5cbiAgICovXG4gIHByaXZhdGUgX3Jlc3RIZWFkV29ybGRRdWF0ZXJuaW9uOiBUSFJFRS5RdWF0ZXJuaW9uO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIGdldEV1bGVyfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGdldCBldWxlcigpOiBUSFJFRS5FdWxlciB7XG4gICAgY29uc29sZS53YXJuKCdWUk1Mb29rQXQ6IGV1bGVyIGlzIGRlcHJlY2F0ZWQuIHVzZSBnZXRFdWxlcigpIGluc3RlYWQuJyk7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRFdWxlcihuZXcgVEhSRUUuRXVsZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHtAbGluayBWUk1Mb29rQXR9LlxuICAgKlxuICAgKiBAcGFyYW0gaHVtYW5vaWQgQSB7QGxpbmsgVlJNSHVtYW5vaWR9XG4gICAqIEBwYXJhbSBhcHBsaWVyIEEge0BsaW5rIFZSTUxvb2tBdEFwcGxpZXJ9XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoaHVtYW5vaWQ6IFZSTUh1bWFub2lkLCBhcHBsaWVyOiBWUk1Mb29rQXRBcHBsaWVyKSB7XG4gICAgdGhpcy5odW1hbm9pZCA9IGh1bWFub2lkO1xuICAgIHRoaXMuYXBwbGllciA9IGFwcGxpZXI7XG5cbiAgICB0aGlzLl95YXcgPSAwLjA7XG4gICAgdGhpcy5fcGl0Y2ggPSAwLjA7XG4gICAgdGhpcy5fbmVlZHNVcGRhdGUgPSB0cnVlO1xuXG4gICAgdGhpcy5fcmVzdEhlYWRXb3JsZFF1YXRlcm5pb24gPSB0aGlzLmdldExvb2tBdFdvcmxkUXVhdGVybmlvbihuZXcgVEhSRUUuUXVhdGVybmlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaXRzIHlhdy1waXRjaCBhbmdsZXMgYXMgYW4gYEV1bGVyYC5cbiAgICogRG9lcyBOT1QgY29uc2lkZXIge0BsaW5rIGZhY2VGcm9udH07IGl0IHJldHVybnMgYEV1bGVyKDAsIDAsIDA7IFwiWVhaXCIpYCBieSBkZWZhdWx0IHJlZ2FyZGxlc3Mgb2YgdGhlIGZhY2VGcm9udCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IGV1bGVyXG4gICAqL1xuICBwdWJsaWMgZ2V0RXVsZXIodGFyZ2V0OiBUSFJFRS5FdWxlcik6IFRIUkVFLkV1bGVyIHtcbiAgICByZXR1cm4gdGFyZ2V0LnNldChUSFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMuX3BpdGNoLCBUSFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMuX3lhdywgMC4wLCAnWVhaJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29weSB0aGUgZ2l2ZW4ge0BsaW5rIFZSTUxvb2tBdH0gaW50byB0aGlzIG9uZS5cbiAgICoge0BsaW5rIGh1bWFub2lkfSBtdXN0IGJlIHNhbWUgYXMgdGhlIHNvdXJjZSBvbmUuXG4gICAqIHtAbGluayBhcHBsaWVyfSB3aWxsIHJlZmVyZW5jZSB0aGUgc2FtZSBpbnN0YW5jZSBhcyB0aGUgc291cmNlIG9uZS5cbiAgICogQHBhcmFtIHNvdXJjZSBUaGUge0BsaW5rIFZSTUxvb2tBdH0geW91IHdhbnQgdG8gY29weVxuICAgKiBAcmV0dXJucyB0aGlzXG4gICAqL1xuICBwdWJsaWMgY29weShzb3VyY2U6IFZSTUxvb2tBdCk6IHRoaXMge1xuICAgIGlmICh0aGlzLmh1bWFub2lkICE9PSBzb3VyY2UuaHVtYW5vaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVlJNTG9va0F0OiBodW1hbm9pZCBtdXN0IGJlIHNhbWUgaW4gb3JkZXIgdG8gY29weScpO1xuICAgIH1cblxuICAgIHRoaXMub2Zmc2V0RnJvbUhlYWRCb25lLmNvcHkoc291cmNlLm9mZnNldEZyb21IZWFkQm9uZSk7XG4gICAgdGhpcy5hcHBsaWVyID0gc291cmNlLmFwcGxpZXI7XG4gICAgdGhpcy5hdXRvVXBkYXRlID0gc291cmNlLmF1dG9VcGRhdGU7XG4gICAgdGhpcy50YXJnZXQgPSBzb3VyY2UudGFyZ2V0O1xuICAgIHRoaXMuZmFjZUZyb250LmNvcHkoc291cmNlLmZhY2VGcm9udCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY2xvbmUgb2YgdGhpcyB7QGxpbmsgVlJNTG9va0F0fS5cbiAgICogTm90ZSB0aGF0IHtAbGluayBodW1hbm9pZH0gYW5kIHtAbGluayBhcHBsaWVyfSB3aWxsIHJlZmVyZW5jZSB0aGUgc2FtZSBpbnN0YW5jZSBhcyB0aGlzIG9uZS5cbiAgICogQHJldHVybnMgQ29waWVkIHtAbGluayBWUk1Mb29rQXR9XG4gICAqL1xuICBwdWJsaWMgY2xvbmUoKTogVlJNTG9va0F0IHtcbiAgICByZXR1cm4gbmV3IFZSTUxvb2tBdCh0aGlzLmh1bWFub2lkLCB0aGlzLmFwcGxpZXIpLmNvcHkodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGxvb2tBdCBkaXJlY3Rpb24gKHlhdyBhbmQgcGl0Y2gpIHRvIHRoZSBpbml0aWFsIGRpcmVjdGlvbi5cbiAgICovXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLl95YXcgPSAwLjA7XG4gICAgdGhpcy5fcGl0Y2ggPSAwLjA7XG4gICAgdGhpcy5fbmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpdHMgbG9va0F0IHBvc2l0aW9uIGluIHdvcmxkIGNvb3JkaW5hdGUuXG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXQgQSB0YXJnZXQgYFRIUkVFLlZlY3RvcjNgXG4gICAqL1xuICBwdWJsaWMgZ2V0TG9va0F0V29ybGRQb3NpdGlvbih0YXJnZXQ6IFRIUkVFLlZlY3RvcjMpOiBUSFJFRS5WZWN0b3IzIHtcbiAgICBjb25zdCBoZWFkID0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgnaGVhZCcpITtcblxuICAgIHJldHVybiB0YXJnZXQuY29weSh0aGlzLm9mZnNldEZyb21IZWFkQm9uZSkuYXBwbHlNYXRyaXg0KGhlYWQubWF0cml4V29ybGQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpdHMgbG9va0F0IHJvdGF0aW9uIGluIHdvcmxkIGNvb3JkaW5hdGUuXG4gICAqIERvZXMgTk9UIGNvbnNpZGVyIHtAbGluayBmYWNlRnJvbnR9LlxuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0IEEgdGFyZ2V0IGBUSFJFRS5RdWF0ZXJuaW9uYFxuICAgKi9cbiAgcHVibGljIGdldExvb2tBdFdvcmxkUXVhdGVybmlvbih0YXJnZXQ6IFRIUkVFLlF1YXRlcm5pb24pOiBUSFJFRS5RdWF0ZXJuaW9uIHtcbiAgICBjb25zdCBoZWFkID0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgnaGVhZCcpITtcblxuICAgIHJldHVybiBnZXRXb3JsZFF1YXRlcm5pb25MaXRlKGhlYWQsIHRhcmdldCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcXVhdGVybmlvbiB0aGF0IHJvdGF0ZXMgdGhlICtaIHVuaXQgdmVjdG9yIG9mIHRoZSBodW1hbm9pZCBIZWFkIHRvIHRoZSB7QGxpbmsgZmFjZUZyb250fSBkaXJlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXQgQSB0YXJnZXQgYFRIUkVFLlF1YXRlcm5pb25gXG4gICAqL1xuICBwdWJsaWMgZ2V0RmFjZUZyb250UXVhdGVybmlvbih0YXJnZXQ6IFRIUkVFLlF1YXRlcm5pb24pOiBUSFJFRS5RdWF0ZXJuaW9uIHtcbiAgICBpZiAodGhpcy5mYWNlRnJvbnQuZGlzdGFuY2VUb1NxdWFyZWQoVkVDM19QT1NJVElWRV9aKSA8IDAuMDEpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuY29weSh0aGlzLl9yZXN0SGVhZFdvcmxkUXVhdGVybmlvbikuaW52ZXJ0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgW2ZhY2VGcm9udEF6aW11dGgsIGZhY2VGcm9udEFsdGl0dWRlXSA9IGNhbGNBemltdXRoQWx0aXR1ZGUodGhpcy5mYWNlRnJvbnQpO1xuICAgIF9ldWxlckEuc2V0KDAuMCwgMC41ICogTWF0aC5QSSArIGZhY2VGcm9udEF6aW11dGgsIGZhY2VGcm9udEFsdGl0dWRlLCAnWVpYJyk7XG5cbiAgICByZXR1cm4gdGFyZ2V0LnNldEZyb21FdWxlcihfZXVsZXJBKS5wcmVtdWx0aXBseShfcXVhdEQuY29weSh0aGlzLl9yZXN0SGVhZFdvcmxkUXVhdGVybmlvbikuaW52ZXJ0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpdHMgTG9va0F0IGRpcmVjdGlvbiBpbiB3b3JsZCBjb29yZGluYXRlLlxuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0IEEgdGFyZ2V0IGBUSFJFRS5WZWN0b3IzYFxuICAgKi9cbiAgcHVibGljIGdldExvb2tBdFdvcmxkRGlyZWN0aW9uKHRhcmdldDogVEhSRUUuVmVjdG9yMyk6IFRIUkVFLlZlY3RvcjMge1xuICAgIHRoaXMuZ2V0TG9va0F0V29ybGRRdWF0ZXJuaW9uKF9xdWF0Qik7XG4gICAgdGhpcy5nZXRGYWNlRnJvbnRRdWF0ZXJuaW9uKF9xdWF0Qyk7XG5cbiAgICByZXR1cm4gdGFyZ2V0XG4gICAgICAuY29weShWRUMzX1BPU0lUSVZFX1opXG4gICAgICAuYXBwbHlRdWF0ZXJuaW9uKF9xdWF0QilcbiAgICAgIC5hcHBseVF1YXRlcm5pb24oX3F1YXRDKVxuICAgICAgLmFwcGx5RXVsZXIodGhpcy5nZXRFdWxlcihfZXVsZXJBKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGl0cyBsb29rQXQgdGFyZ2V0IHBvc2l0aW9uLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaXRzIHJlc3VsdCB3aWxsIGJlIGluc3RhbnRseSBvdmVyd3JpdHRlbiBpZiB7QGxpbmsgVlJNTG9va0F0SGVhZC5hdXRvVXBkYXRlfSBpcyBlbmFibGVkLlxuICAgKlxuICAgKiBJZiB5b3Ugd2FudCB0byB0cmFjayBhbiBvYmplY3QgY29udGludW91c2x5LCB5b3UgbWlnaHQgd2FudCB0byB1c2Uge0BsaW5rIHRhcmdldH0gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHBvc2l0aW9uIEEgdGFyZ2V0IHBvc2l0aW9uLCBpbiB3b3JsZCBzcGFjZVxuICAgKi9cbiAgcHVibGljIGxvb2tBdChwb3NpdGlvbjogVEhSRUUuVmVjdG9yMyk6IHZvaWQge1xuICAgIC8vIExvb2sgYXQgZGlyZWN0aW9uIGluIGxvY2FsIGNvb3JkaW5hdGVcbiAgICBjb25zdCBoZWFkUm90RGlmZkludiA9IF9xdWF0QVxuICAgICAgLmNvcHkodGhpcy5fcmVzdEhlYWRXb3JsZFF1YXRlcm5pb24pXG4gICAgICAubXVsdGlwbHkocXVhdEludmVydENvbXBhdCh0aGlzLmdldExvb2tBdFdvcmxkUXVhdGVybmlvbihfcXVhdEIpKSk7XG4gICAgY29uc3QgaGVhZFBvcyA9IHRoaXMuZ2V0TG9va0F0V29ybGRQb3NpdGlvbihfdjNCKTtcbiAgICBjb25zdCBsb29rQXREaXIgPSBfdjNDLmNvcHkocG9zaXRpb24pLnN1YihoZWFkUG9zKS5hcHBseVF1YXRlcm5pb24oaGVhZFJvdERpZmZJbnYpLm5vcm1hbGl6ZSgpO1xuXG4gICAgLy8gY2FsY3VsYXRlIGFuZ2xlc1xuICAgIGNvbnN0IFthemltdXRoRnJvbSwgYWx0aXR1ZGVGcm9tXSA9IGNhbGNBemltdXRoQWx0aXR1ZGUodGhpcy5mYWNlRnJvbnQpO1xuICAgIGNvbnN0IFthemltdXRoVG8sIGFsdGl0dWRlVG9dID0gY2FsY0F6aW11dGhBbHRpdHVkZShsb29rQXREaXIpO1xuICAgIGNvbnN0IHlhdyA9IHNhbml0aXplQW5nbGUoYXppbXV0aFRvIC0gYXppbXV0aEZyb20pO1xuICAgIGNvbnN0IHBpdGNoID0gc2FuaXRpemVBbmdsZShhbHRpdHVkZUZyb20gLSBhbHRpdHVkZVRvKTsgLy8gc3Bpbm5pbmcgKDEsIDAsIDApIENDVyBhcm91bmQgWiBheGlzIG1ha2VzIHRoZSB2ZWN0b3IgbG9vayB1cCwgd2hpbGUgc3Bpbm5pbmcgKDAsIDAsIDEpIENDVyBhcm91bmQgWCBheGlzIG1ha2VzIHRoZSB2ZWN0b3IgbG9vayBkb3duXG5cbiAgICAvLyBhcHBseSBhbmdsZXNcbiAgICB0aGlzLl95YXcgPSBUSFJFRS5NYXRoVXRpbHMuUkFEMkRFRyAqIHlhdztcbiAgICB0aGlzLl9waXRjaCA9IFRIUkVFLk1hdGhVdGlscy5SQUQyREVHICogcGl0Y2g7XG5cbiAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBWUk1Mb29rQXRIZWFkLlxuICAgKiBJZiB7QGxpbmsgYXV0b1VwZGF0ZX0gaXMgZW5hYmxlZCwgdGhpcyB3aWxsIG1ha2UgaXQgbG9vayBhdCB0aGUge0BsaW5rIHRhcmdldH0uXG4gICAqXG4gICAqIEBwYXJhbSBkZWx0YSBkZWx0YVRpbWUsIGl0IGlzbid0IHVzZWQgdGhvdWdoLiBZb3UgY2FuIHVzZSB0aGUgcGFyYW1ldGVyIGlmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGluIHlvdXIgb3duIGV4dGVuZGVkIHtAbGluayBWUk1Mb29rQXR9LlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFyZ2V0ICE9IG51bGwgJiYgdGhpcy5hdXRvVXBkYXRlKSB7XG4gICAgICB0aGlzLmxvb2tBdCh0aGlzLnRhcmdldC5nZXRXb3JsZFBvc2l0aW9uKF92M0EpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbmVlZHNVcGRhdGUpIHtcbiAgICAgIHRoaXMuX25lZWRzVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuYXBwbGllci5hcHBseVlhd1BpdGNoKHRoaXMuX3lhdywgdGhpcy5fcGl0Y2gpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuY29uc3QgX3Bvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF9zY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbi8qKlxuICogQSByZXBsYWNlbWVudCBvZiBgT2JqZWN0M0QuZ2V0V29ybGRRdWF0ZXJuaW9uYC5cbiAqIEV4dHJhY3QgdGhlIHdvcmxkIHF1YXRlcm5pb24gb2YgYW4gb2JqZWN0IGZyb20gaXRzIHdvcmxkIHNwYWNlIG1hdHJpeCwgd2l0aG91dCBjYWxsaW5nIGBPYmplY3QzRC51cGRhdGVXb3JsZE1hdHJpeGAuXG4gKiBVc2UgdGhpcyB3aGVuIHlvdSdyZSBzdXJlIHRoYXQgdGhlIHdvcmxkIG1hdHJpeCBpcyB1cC10by1kYXRlLlxuICpcbiAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdFxuICogQHBhcmFtIG91dCBBIHRhcmdldCBxdWF0ZXJuaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXb3JsZFF1YXRlcm5pb25MaXRlKG9iamVjdDogVEhSRUUuT2JqZWN0M0QsIG91dDogVEhSRUUuUXVhdGVybmlvbik6IFRIUkVFLlF1YXRlcm5pb24ge1xuICBvYmplY3QubWF0cml4V29ybGQuZGVjb21wb3NlKF9wb3NpdGlvbiwgb3V0LCBfc2NhbGUpO1xuICByZXR1cm4gb3V0O1xufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBDYWxjdWxhdGUgYXppbXV0aCAvIGFsdGl0dWRlIGFuZ2xlcyBmcm9tIGEgdmVjdG9yLlxuICpcbiAqIFRoaXMgcmV0dXJucyBhIGRpZmZlcmVuY2Ugb2YgYW5nbGVzIGZyb20gKDEsIDAsIDApLlxuICogQXppbXV0aCByZXByZXNlbnRzIGFuIGFuZ2xlIGFyb3VuZCBZIGF4aXMuXG4gKiBBbHRpdHVkZSByZXByZXNlbnRzIGFuIGFuZ2xlIGFyb3VuZCBaIGF4aXMuXG4gKiBJdCBpcyByb3RhdGVkIGluIGludHJpbnNpYyBZLVogb3JkZXIuXG4gKlxuICogQHBhcmFtIHZlY3RvciBUaGUgdmVjdG9yXG4gKiBAcmV0dXJucyBBIHR1cGxlIGNvbnRhaW5zIHR3byBhbmdsZXMsIGBbIGF6aW11dGgsIGFsdGl0dWRlIF1gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjQXppbXV0aEFsdGl0dWRlKHZlY3RvcjogVEhSRUUuVmVjdG9yMyk6IFthemltdXRoOiBudW1iZXIsIGFsdGl0dWRlOiBudW1iZXJdIHtcbiAgcmV0dXJuIFtNYXRoLmF0YW4yKC12ZWN0b3IueiwgdmVjdG9yLngpLCBNYXRoLmF0YW4yKHZlY3Rvci55LCBNYXRoLnNxcnQodmVjdG9yLnggKiB2ZWN0b3IueCArIHZlY3Rvci56ICogdmVjdG9yLnopKV07XG59XG4iLCAiLyoqXG4gKiBNYWtlIHN1cmUgdGhlIGFuZ2xlIGlzIHdpdGhpbiAtUEkgdG8gUEkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBzYW5pdGl6ZUFuZ2xlKDEuNSAqIE1hdGguUEkpIC8vIC0wLjUgKiBQSVxuICogYGBgXG4gKlxuICogQHBhcmFtIGFuZ2xlIEFuIGlucHV0IGFuZ2xlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUFuZ2xlKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCByb3VuZFR1cm4gPSBNYXRoLnJvdW5kKGFuZ2xlIC8gMi4wIC8gTWF0aC5QSSk7XG4gIHJldHVybiBhbmdsZSAtIDIuMCAqIE1hdGguUEkgKiByb3VuZFR1cm47XG59XG4iLCAiaW1wb3J0IHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuLi9odW1hbm9pZCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUxvb2tBdEFwcGxpZXIgfSBmcm9tICcuL1ZSTUxvb2tBdEFwcGxpZXInO1xuaW1wb3J0IHsgVlJNTG9va0F0UmFuZ2VNYXAgfSBmcm9tICcuL1ZSTUxvb2tBdFJhbmdlTWFwJztcbmltcG9ydCB7IGNhbGNBemltdXRoQWx0aXR1ZGUgfSBmcm9tICcuL3V0aWxzL2NhbGNBemltdXRoQWx0aXR1ZGUnO1xuaW1wb3J0IHsgZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZSB9IGZyb20gJy4uL3V0aWxzL2dldFdvcmxkUXVhdGVybmlvbkxpdGUnO1xuXG5jb25zdCBWRUMzX1BPU0lUSVZFX1ogPSBuZXcgVEhSRUUuVmVjdG9yMygwLjAsIDAuMCwgMS4wKTtcblxuY29uc3QgX3F1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9xdWF0QiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfZXVsZXJBID0gbmV3IFRIUkVFLkV1bGVyKDAuMCwgMC4wLCAwLjAsICdZWFonKTtcblxuLyoqXG4gKiBBIGNsYXNzIHRoYXQgYXBwbGllcyBleWUgZ2F6ZSBkaXJlY3Rpb25zIHRvIGEgVlJNLlxuICogSXQgd2lsbCBiZSB1c2VkIGJ5IHtAbGluayBWUk1Mb29rQXR9LlxuICovXG5leHBvcnQgY2xhc3MgVlJNTG9va0F0Qm9uZUFwcGxpZXIgaW1wbGVtZW50cyBWUk1Mb29rQXRBcHBsaWVyIHtcbiAgLyoqXG4gICAqIFJlcHJlc2VudCBpdHMgdHlwZSBvZiBhcHBsaWVyLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ2JvbmUnO1xuXG4gIC8qKlxuICAgKiBJdHMgYXNzb2NpYXRlZCB7QGxpbmsgVlJNSHVtYW5vaWR9LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGh1bWFub2lkOiBWUk1IdW1hbm9pZDtcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IGZvciBob3Jpem9udGFsIGlud2FyZCBtb3ZlbWVudC4gVGhlIGxlZnQgZXllIG1vdmVzIHJpZ2h0LiBUaGUgcmlnaHQgZXllIG1vdmVzIGxlZnQuXG4gICAqL1xuICBwdWJsaWMgcmFuZ2VNYXBIb3Jpem9udGFsSW5uZXI6IFZSTUxvb2tBdFJhbmdlTWFwO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gZm9yIGhvcml6b250YWwgb3V0d2FyZCBtb3ZlbWVudC4gVGhlIGxlZnQgZXllIG1vdmVzIGxlZnQuIFRoZSByaWdodCBleWUgbW92ZXMgcmlnaHQuXG4gICAqL1xuICBwdWJsaWMgcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXI6IFZSTUxvb2tBdFJhbmdlTWFwO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gZm9yIHZlcnRpY2FsIGRvd253YXJkIG1vdmVtZW50LiBCb3RoIGV5ZXMgbW92ZSB1cHdhcmRzLlxuICAgKi9cbiAgcHVibGljIHJhbmdlTWFwVmVydGljYWxEb3duOiBWUk1Mb29rQXRSYW5nZU1hcDtcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IGZvciB2ZXJ0aWNhbCB1cHdhcmQgbW92ZW1lbnQuIEJvdGggZXllcyBtb3ZlIGRvd253YXJkcy5cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcFZlcnRpY2FsVXA6IFZSTUxvb2tBdFJhbmdlTWFwO1xuXG4gIC8qKlxuICAgKiBUaGUgZnJvbnQgZGlyZWN0aW9uIG9mIHRoZSBmYWNlLlxuICAgKiBJbnRlbmRlZCB0byBiZSB1c2VkIGZvciBWUk0gMC4wIGNvbXBhdCAoVlJNIDAuMCBtb2RlbHMgYXJlIGZhY2luZyBaLSBpbnN0ZWFkIG9mIForKS5cbiAgICogWW91IHVzdWFsbHkgZG9uJ3Qgd2FudCB0byB0b3VjaCB0aGlzLlxuICAgKi9cbiAgcHVibGljIGZhY2VGcm9udDogVEhSRUUuVmVjdG9yMztcblxuICAvKipcbiAgICogVGhlIHJlc3QgcXVhdGVybmlvbiBvZiBMZWZ0RXllIGJvbmUuXG4gICAqL1xuICBwcml2YXRlIF9yZXN0UXVhdExlZnRFeWU6IFRIUkVFLlF1YXRlcm5pb247XG5cbiAgLyoqXG4gICAqIFRoZSByZXN0IHF1YXRlcm5pb24gb2YgUmlnaHRFeWUgYm9uZS5cbiAgICovXG4gIHByaXZhdGUgX3Jlc3RRdWF0UmlnaHRFeWU6IFRIUkVFLlF1YXRlcm5pb247XG5cbiAgLyoqXG4gICAqIFRoZSB3b3JsZC1zcGFjZSByZXN0IHF1YXRlcm5pb24gb2YgdGhlIHBhcmVudCBvZiB0aGUgaHVtYW5vaWQgTGVmdEV5ZS5cbiAgICovXG4gIHByaXZhdGUgX3Jlc3RMZWZ0RXllUGFyZW50V29ybGRRdWF0OiBUSFJFRS5RdWF0ZXJuaW9uO1xuXG4gIC8qKlxuICAgKiBUaGUgd29ybGQtc3BhY2UgcmVzdCBxdWF0ZXJuaW9uIG9mIHRoZSBwYXJlbnQgb2YgdGhlIGh1bWFub2lkIFJpZ2h0RXllLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzdFJpZ2h0RXllUGFyZW50V29ybGRRdWF0OiBUSFJFRS5RdWF0ZXJuaW9uO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIFZSTUxvb2tBdEJvbmVBcHBsaWVyfS5cbiAgICpcbiAgICogQHBhcmFtIGh1bWFub2lkIEEge0BsaW5rIFZSTUh1bWFub2lkfVxuICAgKiBAcGFyYW0gcmFuZ2VNYXBIb3Jpem9udGFsSW5uZXIgQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIGlubmVyIHRyYW5zdmVyc2UgZGlyZWN0aW9uXG4gICAqIEBwYXJhbSByYW5nZU1hcEhvcml6b250YWxPdXRlciBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gdXNlZCBmb3Igb3V0ZXIgdHJhbnN2ZXJzZSBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHJhbmdlTWFwVmVydGljYWxEb3duIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSB1c2VkIGZvciBkb3duIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gcmFuZ2VNYXBWZXJ0aWNhbFVwIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSB1c2VkIGZvciB1cCBkaXJlY3Rpb25cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBodW1hbm9pZDogVlJNSHVtYW5vaWQsXG4gICAgcmFuZ2VNYXBIb3Jpem9udGFsSW5uZXI6IFZSTUxvb2tBdFJhbmdlTWFwLFxuICAgIHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyOiBWUk1Mb29rQXRSYW5nZU1hcCxcbiAgICByYW5nZU1hcFZlcnRpY2FsRG93bjogVlJNTG9va0F0UmFuZ2VNYXAsXG4gICAgcmFuZ2VNYXBWZXJ0aWNhbFVwOiBWUk1Mb29rQXRSYW5nZU1hcCxcbiAgKSB7XG4gICAgdGhpcy5odW1hbm9pZCA9IGh1bWFub2lkO1xuXG4gICAgdGhpcy5yYW5nZU1hcEhvcml6b250YWxJbm5lciA9IHJhbmdlTWFwSG9yaXpvbnRhbElubmVyO1xuICAgIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXIgPSByYW5nZU1hcEhvcml6b250YWxPdXRlcjtcbiAgICB0aGlzLnJhbmdlTWFwVmVydGljYWxEb3duID0gcmFuZ2VNYXBWZXJ0aWNhbERvd247XG4gICAgdGhpcy5yYW5nZU1hcFZlcnRpY2FsVXAgPSByYW5nZU1hcFZlcnRpY2FsVXA7XG5cbiAgICB0aGlzLmZhY2VGcm9udCA9IG5ldyBUSFJFRS5WZWN0b3IzKDAuMCwgMC4wLCAxLjApO1xuXG4gICAgLy8gc2V0IHJlc3QgcXVhdGVybmlvbnNcbiAgICB0aGlzLl9yZXN0UXVhdExlZnRFeWUgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgIHRoaXMuX3Jlc3RRdWF0UmlnaHRFeWUgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgIHRoaXMuX3Jlc3RMZWZ0RXllUGFyZW50V29ybGRRdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICB0aGlzLl9yZXN0UmlnaHRFeWVQYXJlbnRXb3JsZFF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG4gICAgY29uc3QgbGVmdEV5ZSA9IHRoaXMuaHVtYW5vaWQuZ2V0UmF3Qm9uZU5vZGUoJ2xlZnRFeWUnKTtcbiAgICBjb25zdCByaWdodEV5ZSA9IHRoaXMuaHVtYW5vaWQuZ2V0UmF3Qm9uZU5vZGUoJ3JpZ2h0RXllJyk7XG5cbiAgICBpZiAobGVmdEV5ZSkge1xuICAgICAgdGhpcy5fcmVzdFF1YXRMZWZ0RXllLmNvcHkobGVmdEV5ZS5xdWF0ZXJuaW9uKTtcbiAgICAgIGdldFdvcmxkUXVhdGVybmlvbkxpdGUobGVmdEV5ZS5wYXJlbnQhLCB0aGlzLl9yZXN0TGVmdEV5ZVBhcmVudFdvcmxkUXVhdCk7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0RXllKSB7XG4gICAgICB0aGlzLl9yZXN0UXVhdFJpZ2h0RXllLmNvcHkocmlnaHRFeWUucXVhdGVybmlvbik7XG4gICAgICBnZXRXb3JsZFF1YXRlcm5pb25MaXRlKHJpZ2h0RXllLnBhcmVudCEsIHRoaXMuX3Jlc3RSaWdodEV5ZVBhcmVudFdvcmxkUXVhdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBpbnB1dCBhbmdsZSB0byBpdHMgYXNzb2NpYXRlZCBWUk0gbW9kZWwuXG4gICAqXG4gICAqIEBwYXJhbSB5YXcgUm90YXRpb24gYXJvdW5kIFkgYXhpcywgaW4gZGVncmVlXG4gICAqIEBwYXJhbSBwaXRjaCBSb3RhdGlvbiBhcm91bmQgWCBheGlzLCBpbiBkZWdyZWVcbiAgICovXG4gIHB1YmxpYyBhcHBseVlhd1BpdGNoKHlhdzogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbGVmdEV5ZSA9IHRoaXMuaHVtYW5vaWQuZ2V0UmF3Qm9uZU5vZGUoJ2xlZnRFeWUnKTtcbiAgICBjb25zdCByaWdodEV5ZSA9IHRoaXMuaHVtYW5vaWQuZ2V0UmF3Qm9uZU5vZGUoJ3JpZ2h0RXllJyk7XG4gICAgY29uc3QgbGVmdEV5ZU5vcm1hbGl6ZWQgPSB0aGlzLmh1bWFub2lkLmdldE5vcm1hbGl6ZWRCb25lTm9kZSgnbGVmdEV5ZScpO1xuICAgIGNvbnN0IHJpZ2h0RXllTm9ybWFsaXplZCA9IHRoaXMuaHVtYW5vaWQuZ2V0Tm9ybWFsaXplZEJvbmVOb2RlKCdyaWdodEV5ZScpO1xuICAgIC8vIGxlZnRcbiAgICBpZiAobGVmdEV5ZSkge1xuICAgICAgaWYgKHBpdGNoIDwgMC4wKSB7XG4gICAgICAgIF9ldWxlckEueCA9IC1USFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbERvd24ubWFwKC1waXRjaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZXVsZXJBLnggPSBUSFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbFVwLm1hcChwaXRjaCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh5YXcgPCAwLjApIHtcbiAgICAgICAgX2V1bGVyQS55ID0gLVRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcEhvcml6b250YWxJbm5lci5tYXAoLXlhdyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZXVsZXJBLnkgPSBUSFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXIubWFwKHlhdyk7XG4gICAgICB9XG5cbiAgICAgIF9xdWF0QS5zZXRGcm9tRXVsZXIoX2V1bGVyQSk7XG4gICAgICB0aGlzLl9nZXRXb3JsZEZhY2VGcm9udFF1YXQoX3F1YXRCKTtcblxuICAgICAgLy8gX3F1YXRCICogX3F1YXRBICogX3F1YXRCXi0xXG4gICAgICAvLyB3aGVyZSBfcXVhdEEgaXMgTG9va0F0IHJvdGF0aW9uXG4gICAgICAvLyBhbmQgX3F1YXRCIGlzIHdvcmxkRmFjZUZyb250UXVhdFxuICAgICAgbGVmdEV5ZU5vcm1hbGl6ZWQhLnF1YXRlcm5pb24uY29weShfcXVhdEIpLm11bHRpcGx5KF9xdWF0QSkubXVsdGlwbHkoX3F1YXRCLmludmVydCgpKTtcblxuICAgICAgX3F1YXRBLmNvcHkodGhpcy5fcmVzdExlZnRFeWVQYXJlbnRXb3JsZFF1YXQpO1xuXG4gICAgICAvLyBfcXVhdEFeLTEgKiBsZWZ0RXllTm9ybWFsaXplZC5xdWF0ZXJuaW9uICogX3F1YXRBICogcmVzdFF1YXRMZWZ0RXllXG4gICAgICAvLyB3aGVyZSBfcXVhdEEgaXMgcmVzdExlZnRFeWVQYXJlbnRXb3JsZFF1YXRcbiAgICAgIGxlZnRFeWUucXVhdGVybmlvblxuICAgICAgICAuY29weShsZWZ0RXllTm9ybWFsaXplZCEucXVhdGVybmlvbilcbiAgICAgICAgLm11bHRpcGx5KF9xdWF0QSlcbiAgICAgICAgLnByZW11bHRpcGx5KF9xdWF0QS5pbnZlcnQoKSlcbiAgICAgICAgLm11bHRpcGx5KHRoaXMuX3Jlc3RRdWF0TGVmdEV5ZSk7XG4gICAgfVxuXG4gICAgLy8gcmlnaHRcbiAgICBpZiAocmlnaHRFeWUpIHtcbiAgICAgIGlmIChwaXRjaCA8IDAuMCkge1xuICAgICAgICBfZXVsZXJBLnggPSAtVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnJhbmdlTWFwVmVydGljYWxEb3duLm1hcCgtcGl0Y2gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2V1bGVyQS54ID0gVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnJhbmdlTWFwVmVydGljYWxVcC5tYXAocGl0Y2gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoeWF3IDwgMC4wKSB7XG4gICAgICAgIF9ldWxlckEueSA9IC1USFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXIubWFwKC15YXcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2V1bGVyQS55ID0gVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbElubmVyLm1hcCh5YXcpO1xuICAgICAgfVxuXG4gICAgICBfcXVhdEEuc2V0RnJvbUV1bGVyKF9ldWxlckEpO1xuICAgICAgdGhpcy5fZ2V0V29ybGRGYWNlRnJvbnRRdWF0KF9xdWF0Qik7XG5cbiAgICAgIC8vIF9xdWF0QiAqIF9xdWF0QSAqIF9xdWF0Ql4tMVxuICAgICAgLy8gd2hlcmUgX3F1YXRBIGlzIExvb2tBdCByb3RhdGlvblxuICAgICAgLy8gYW5kIF9xdWF0QiBpcyB3b3JsZEZhY2VGcm9udFF1YXRcbiAgICAgIHJpZ2h0RXllTm9ybWFsaXplZCEucXVhdGVybmlvbi5jb3B5KF9xdWF0QikubXVsdGlwbHkoX3F1YXRBKS5tdWx0aXBseShfcXVhdEIuaW52ZXJ0KCkpO1xuXG4gICAgICBfcXVhdEEuY29weSh0aGlzLl9yZXN0UmlnaHRFeWVQYXJlbnRXb3JsZFF1YXQpO1xuXG4gICAgICAvLyBfcXVhdEFeLTEgKiByaWdodEV5ZU5vcm1hbGl6ZWQucXVhdGVybmlvbiAqIF9xdWF0QSAqIHJlc3RRdWF0UmlnaHRFeWVcbiAgICAgIC8vIHdoZXJlIF9xdWF0QSBpcyByZXN0UmlnaHRFeWVQYXJlbnRXb3JsZFF1YXRcbiAgICAgIHJpZ2h0RXllLnF1YXRlcm5pb25cbiAgICAgICAgLmNvcHkocmlnaHRFeWVOb3JtYWxpemVkIS5xdWF0ZXJuaW9uKVxuICAgICAgICAubXVsdGlwbHkoX3F1YXRBKVxuICAgICAgICAucHJlbXVsdGlwbHkoX3F1YXRBLmludmVydCgpKVxuICAgICAgICAubXVsdGlwbHkodGhpcy5fcmVzdFF1YXRSaWdodEV5ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgYXBwbHlZYXdQaXRjaH0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBsb29rQXQoZXVsZXI6IFRIUkVFLkV1bGVyKTogdm9pZCB7XG4gICAgY29uc29sZS53YXJuKCdWUk1Mb29rQXRCb25lQXBwbGllcjogbG9va0F0KCkgaXMgZGVwcmVjYXRlZC4gdXNlIGFwcGx5KCkgaW5zdGVhZC4nKTtcblxuICAgIGNvbnN0IHlhdyA9IFRIUkVFLk1hdGhVdGlscy5SQUQyREVHICogZXVsZXIueTtcbiAgICBjb25zdCBwaXRjaCA9IFRIUkVFLk1hdGhVdGlscy5SQUQyREVHICogZXVsZXIueDtcblxuICAgIHRoaXMuYXBwbHlZYXdQaXRjaCh5YXcsIHBpdGNoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBxdWF0ZXJuaW9uIHRoYXQgcm90YXRlcyB0aGUgd29ybGQtc3BhY2UgK1ogdW5pdCB2ZWN0b3IgdG8gdGhlIHtAbGluayBmYWNlRnJvbnR9IGRpcmVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBgVEhSRUUuUXVhdGVybmlvbmBcbiAgICovXG4gIHByaXZhdGUgX2dldFdvcmxkRmFjZUZyb250UXVhdCh0YXJnZXQ6IFRIUkVFLlF1YXRlcm5pb24pOiBUSFJFRS5RdWF0ZXJuaW9uIHtcbiAgICBpZiAodGhpcy5mYWNlRnJvbnQuZGlzdGFuY2VUb1NxdWFyZWQoVkVDM19QT1NJVElWRV9aKSA8IDAuMDEpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuaWRlbnRpdHkoKTtcbiAgICB9XG5cbiAgICBjb25zdCBbZmFjZUZyb250QXppbXV0aCwgZmFjZUZyb250QWx0aXR1ZGVdID0gY2FsY0F6aW11dGhBbHRpdHVkZSh0aGlzLmZhY2VGcm9udCk7XG4gICAgX2V1bGVyQS5zZXQoMC4wLCAwLjUgKiBNYXRoLlBJICsgZmFjZUZyb250QXppbXV0aCwgZmFjZUZyb250QWx0aXR1ZGUsICdZWlgnKTtcblxuICAgIHJldHVybiB0YXJnZXQuc2V0RnJvbUV1bGVyKF9ldWxlckEpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgVlJNRXhwcmVzc2lvbk1hbmFnZXIgfSBmcm9tICcuLi9leHByZXNzaW9ucyc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUxvb2tBdEFwcGxpZXIgfSBmcm9tICcuL1ZSTUxvb2tBdEFwcGxpZXInO1xuaW1wb3J0IHsgVlJNTG9va0F0UmFuZ2VNYXAgfSBmcm9tICcuL1ZSTUxvb2tBdFJhbmdlTWFwJztcblxuLyoqXG4gKiBBIGNsYXNzIHRoYXQgYXBwbGllcyBleWUgZ2F6ZSBkaXJlY3Rpb25zIHRvIGEgVlJNLlxuICogSXQgd2lsbCBiZSB1c2VkIGJ5IHtAbGluayBWUk1Mb29rQXR9LlxuICovXG5leHBvcnQgY2xhc3MgVlJNTG9va0F0RXhwcmVzc2lvbkFwcGxpZXIgaW1wbGVtZW50cyBWUk1Mb29rQXRBcHBsaWVyIHtcbiAgLyoqXG4gICAqIFJlcHJlc2VudCBpdHMgdHlwZSBvZiBhcHBsaWVyLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ2V4cHJlc3Npb24nO1xuXG4gIC8qKlxuICAgKiBJdHMgYXNzb2NpYXRlZCB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGV4cHJlc3Npb25zOiBWUk1FeHByZXNzaW9uTWFuYWdlcjtcblxuICAvKipcbiAgICogSXQgd29uJ3QgYmUgdXNlZCBpbiBleHByZXNzaW9uIGFwcGxpZXIuXG4gICAqIFNlZSBhbHNvOiB7QGxpbmsgcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXJ9XG4gICAqL1xuICBwdWJsaWMgcmFuZ2VNYXBIb3Jpem9udGFsSW5uZXI6IFZSTUxvb2tBdFJhbmdlTWFwO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gZm9yIGhvcml6b250YWwgbW92ZW1lbnQuIEJvdGggZXllcyBtb3ZlIGxlZnQgb3IgcmlnaHQuXG4gICAqL1xuICBwdWJsaWMgcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXI6IFZSTUxvb2tBdFJhbmdlTWFwO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gZm9yIHZlcnRpY2FsIGRvd253YXJkIG1vdmVtZW50LiBCb3RoIGV5ZXMgbW92ZSB1cHdhcmRzLlxuICAgKi9cbiAgcHVibGljIHJhbmdlTWFwVmVydGljYWxEb3duOiBWUk1Mb29rQXRSYW5nZU1hcDtcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IGZvciB2ZXJ0aWNhbCB1cHdhcmQgbW92ZW1lbnQuIEJvdGggZXllcyBtb3ZlIGRvd253YXJkcy5cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcFZlcnRpY2FsVXA6IFZSTUxvb2tBdFJhbmdlTWFwO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIFZSTUxvb2tBdEV4cHJlc3Npb25BcHBsaWVyfS5cbiAgICpcbiAgICogQHBhcmFtIGV4cHJlc3Npb25zIEEge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfVxuICAgKiBAcGFyYW0gcmFuZ2VNYXBIb3Jpem9udGFsSW5uZXIgQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIGlubmVyIHRyYW5zdmVyc2UgZGlyZWN0aW9uXG4gICAqIEBwYXJhbSByYW5nZU1hcEhvcml6b250YWxPdXRlciBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gdXNlZCBmb3Igb3V0ZXIgdHJhbnN2ZXJzZSBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHJhbmdlTWFwVmVydGljYWxEb3duIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSB1c2VkIGZvciBkb3duIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gcmFuZ2VNYXBWZXJ0aWNhbFVwIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSB1c2VkIGZvciB1cCBkaXJlY3Rpb25cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBleHByZXNzaW9uczogVlJNRXhwcmVzc2lvbk1hbmFnZXIsXG4gICAgcmFuZ2VNYXBIb3Jpem9udGFsSW5uZXI6IFZSTUxvb2tBdFJhbmdlTWFwLFxuICAgIHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyOiBWUk1Mb29rQXRSYW5nZU1hcCxcbiAgICByYW5nZU1hcFZlcnRpY2FsRG93bjogVlJNTG9va0F0UmFuZ2VNYXAsXG4gICAgcmFuZ2VNYXBWZXJ0aWNhbFVwOiBWUk1Mb29rQXRSYW5nZU1hcCxcbiAgKSB7XG4gICAgdGhpcy5leHByZXNzaW9ucyA9IGV4cHJlc3Npb25zO1xuXG4gICAgdGhpcy5yYW5nZU1hcEhvcml6b250YWxJbm5lciA9IHJhbmdlTWFwSG9yaXpvbnRhbElubmVyO1xuICAgIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXIgPSByYW5nZU1hcEhvcml6b250YWxPdXRlcjtcbiAgICB0aGlzLnJhbmdlTWFwVmVydGljYWxEb3duID0gcmFuZ2VNYXBWZXJ0aWNhbERvd247XG4gICAgdGhpcy5yYW5nZU1hcFZlcnRpY2FsVXAgPSByYW5nZU1hcFZlcnRpY2FsVXA7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGlucHV0IGFuZ2xlIHRvIGl0cyBhc3NvY2lhdGVkIFZSTSBtb2RlbC5cbiAgICpcbiAgICogQHBhcmFtIHlhdyBSb3RhdGlvbiBhcm91bmQgWSBheGlzLCBpbiBkZWdyZWVcbiAgICogQHBhcmFtIHBpdGNoIFJvdGF0aW9uIGFyb3VuZCBYIGF4aXMsIGluIGRlZ3JlZVxuICAgKi9cbiAgcHVibGljIGFwcGx5WWF3UGl0Y2goeWF3OiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAocGl0Y2ggPCAwLjApIHtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tEb3duJywgMC4wKTtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tVcCcsIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbFVwLm1hcCgtcGl0Y2gpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va1VwJywgMC4wKTtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tEb3duJywgdGhpcy5yYW5nZU1hcFZlcnRpY2FsRG93bi5tYXAocGl0Y2gpKTtcbiAgICB9XG5cbiAgICBpZiAoeWF3IDwgMC4wKSB7XG4gICAgICB0aGlzLmV4cHJlc3Npb25zLnNldFZhbHVlKCdsb29rTGVmdCcsIDAuMCk7XG4gICAgICB0aGlzLmV4cHJlc3Npb25zLnNldFZhbHVlKCdsb29rUmlnaHQnLCB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbE91dGVyLm1hcCgteWF3KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tSaWdodCcsIDAuMCk7XG4gICAgICB0aGlzLmV4cHJlc3Npb25zLnNldFZhbHVlKCdsb29rTGVmdCcsIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXIubWFwKHlhdykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIGFwcGx5WWF3UGl0Y2h9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgbG9va0F0KGV1bGVyOiBUSFJFRS5FdWxlcik6IHZvaWQge1xuICAgIGNvbnNvbGUud2FybignVlJNTG9va0F0Qm9uZUFwcGxpZXI6IGxvb2tBdCgpIGlzIGRlcHJlY2F0ZWQuIHVzZSBhcHBseSgpIGluc3RlYWQuJyk7XG5cbiAgICBjb25zdCB5YXcgPSBUSFJFRS5NYXRoVXRpbHMuUkFEMkRFRyAqIGV1bGVyLnk7XG4gICAgY29uc3QgcGl0Y2ggPSBUSFJFRS5NYXRoVXRpbHMuUkFEMkRFRyAqIGV1bGVyLng7XG5cbiAgICB0aGlzLmFwcGx5WWF3UGl0Y2goeWF3LCBwaXRjaCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBzYXR1cmF0ZSB9IGZyb20gJy4uL3V0aWxzL3NhdHVyYXRlJztcblxuZXhwb3J0IGNsYXNzIFZSTUxvb2tBdFJhbmdlTWFwIHtcbiAgLyoqXG4gICAqIExpbWl0cyB0aGUgbWF4aW11bSBhbmdsZSBvZiB0aGUgaW5wdXQgYW5nbGUgb2YgdGhlIExvb2tBdCB2ZWN0b3IgZnJvbSB0aGUgZnJvbnQgb2YgdGhlIGhlYWQgKHRoZSBwb3NpdGl2ZSB6IGF4aXMpLlxuICAgKi9cbiAgcHVibGljIGlucHV0TWF4VmFsdWU6IG51bWJlcjtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbiBhbmdsZSAoaW4gZGVncmVlcykgZm9yIGJvbmUgdHlwZSBvZiBMb29rQXQgYXBwbGllcnMsIG9yIGEgd2VpZ2h0IGZvciBleHByZXNzaW9uIHR5cGUgb2YgTG9va0F0IGFwcGxpZXJzLlxuICAgKiBUaGUgaW5wdXQgdmFsdWUgd2lsbCB0YWtlIGAxLjBgIHdoZW4gdGhlIGlucHV0IGFuZ2xlIGVxdWFscyAob3IgZ3JlYXRlcikgdG8ge0BsaW5rIGlucHV0TWF4VmFsdWV9LlxuICAgKi9cbiAgcHVibGljIG91dHB1dFNjYWxlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9LlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRNYXhWYWx1ZSBUaGUge0BsaW5rIGlucHV0TWF4VmFsdWV9IG9mIHRoZSBtYXBcbiAgICogQHBhcmFtIG91dHB1dFNjYWxlIFRoZSB7QGxpbmsgb3V0cHV0U2NhbGV9IG9mIHRoZSBtYXBcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpbnB1dE1heFZhbHVlOiBudW1iZXIsIG91dHB1dFNjYWxlOiBudW1iZXIpIHtcbiAgICB0aGlzLmlucHV0TWF4VmFsdWUgPSBpbnB1dE1heFZhbHVlO1xuICAgIHRoaXMub3V0cHV0U2NhbGUgPSBvdXRwdXRTY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBhbiBpbnB1dCB2YWx1ZSBhbmQgb3V0cHV0IGEgbWFwcGVkIHZhbHVlLlxuICAgKiBAcGFyYW0gc3JjIFRoZSBpbnB1dCB2YWx1ZVxuICAgKi9cbiAgcHVibGljIG1hcChzcmM6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0U2NhbGUgKiBzYXR1cmF0ZShzcmMgLyB0aGlzLmlucHV0TWF4VmFsdWUpO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSAqIGFzIFYwVlJNIGZyb20gJ0BwaXhpdi90eXBlcy12cm0tMC4wJztcbmltcG9ydCB0eXBlICogYXMgVjFWUk1TY2hlbWEgZnJvbSAnQHBpeGl2L3R5cGVzLXZybWMtdnJtLTEuMCc7XG5pbXBvcnQgdHlwZSB7IEdMVEYsIEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbk1hbmFnZXIgfSBmcm9tICcuLi9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi4vaHVtYW5vaWQvVlJNSHVtYW5vaWQnO1xuaW1wb3J0IHsgVlJNTG9va0F0SGVscGVyIH0gZnJvbSAnLi9oZWxwZXJzL1ZSTUxvb2tBdEhlbHBlcic7XG5pbXBvcnQgeyBWUk1Mb29rQXQgfSBmcm9tICcuL1ZSTUxvb2tBdCc7XG5pbXBvcnQgdHlwZSB7IFZSTUxvb2tBdEFwcGxpZXIgfSBmcm9tICcuL1ZSTUxvb2tBdEFwcGxpZXInO1xuaW1wb3J0IHsgVlJNTG9va0F0Qm9uZUFwcGxpZXIgfSBmcm9tICcuL1ZSTUxvb2tBdEJvbmVBcHBsaWVyJztcbmltcG9ydCB7IFZSTUxvb2tBdEV4cHJlc3Npb25BcHBsaWVyIH0gZnJvbSAnLi9WUk1Mb29rQXRFeHByZXNzaW9uQXBwbGllcic7XG5pbXBvcnQgdHlwZSB7IFZSTUxvb2tBdExvYWRlclBsdWdpbk9wdGlvbnMgfSBmcm9tICcuL1ZSTUxvb2tBdExvYWRlclBsdWdpbk9wdGlvbnMnO1xuaW1wb3J0IHsgVlJNTG9va0F0UmFuZ2VNYXAgfSBmcm9tICcuL1ZSTUxvb2tBdFJhbmdlTWFwJztcbmltcG9ydCB7IEdMVEYgYXMgR0xURlNjaGVtYSB9IGZyb20gJ0BnbHRmLXRyYW5zZm9ybS9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBzcGVjIHZlcnNpb25zIGl0IHJlY29nbml6ZXMuXG4gKi9cbmNvbnN0IFBPU1NJQkxFX1NQRUNfVkVSU0lPTlMgPSBuZXcgU2V0KFsnMS4wJywgJzEuMC1iZXRhJ10pO1xuXG4vKipcbiAqIFRoZSBtaW5pbXVtIHBlcm1pdHRlZCB2YWx1ZSBmb3Ige0BsaW5rIFYxVlJNU2NoZW1hLkxvb2tBdFJhbmdlTWFwLmlucHV0TWF4VmFsdWV9LlxuICogSWYgdGhlIGdpdmVuIHZhbHVlIGlzIHNtYWxsZXIgdGhhbiB0aGlzLCB0aGUgbG9hZGVyIHNob3dzIGEgd2FybmluZyBhbmQgY2xhbXBzIHVwIHRoZSB2YWx1ZS5cbiAqL1xuY29uc3QgSU5QVVRfTUFYX1ZBTFVFX01JTklNVU0gPSAwLjAxO1xuXG4vKipcbiAqIEEgcGx1Z2luIG9mIEdMVEZMb2FkZXIgdGhhdCBpbXBvcnRzIGEge0BsaW5rIFZSTUxvb2tBdH0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxuICovXG5leHBvcnQgY2xhc3MgVlJNTG9va0F0TG9hZGVyUGx1Z2luIGltcGxlbWVudHMgR0xURkxvYWRlclBsdWdpbiB7XG4gIC8qKlxuICAgKiBTcGVjaWZ5IGFuIE9iamVjdDNEIHRvIGFkZCB7QGxpbmsgVlJNTG9va0F0SGVscGVyfSBzLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCBoZWxwZXIgd2lsbCBub3QgYmUgY3JlYXRlZC5cbiAgICogSWYgYHJlbmRlck9yZGVyYCBpcyBzZXQgdG8gdGhlIHJvb3QsIGhlbHBlcnMgd2lsbCBjb3B5IHRoZSBzYW1lIGByZW5kZXJPcmRlcmAgLlxuICAgKi9cbiAgcHVibGljIGhlbHBlclJvb3Q/OiBUSFJFRS5PYmplY3QzRDtcblxuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIC8vIFdlIHNob3VsZCB1c2UgdGhlIGV4dGVuc2lvbiBuYW1lIGluc3RlYWQgYnV0IHdlIGhhdmUgbXVsdGlwbGUgcGx1Z2lucyBmb3IgYW4gZXh0ZW5zaW9uLi4uXG4gICAgcmV0dXJuICdWUk1Mb29rQXRMb2FkZXJQbHVnaW4nO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlciwgb3B0aW9ucz86IFZSTUxvb2tBdExvYWRlclBsdWdpbk9wdGlvbnMpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICAgIHRoaXMuaGVscGVyUm9vdCA9IG9wdGlvbnM/LmhlbHBlclJvb3Q7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB2cm1IdW1hbm9pZCA9IGdsdGYudXNlckRhdGEudnJtSHVtYW5vaWQgYXMgVlJNSHVtYW5vaWQgfCB1bmRlZmluZWQ7XG5cbiAgICAvLyBleHBsaWNpdGx5IGRpc3Rpbmd1aXNoIG51bGwgYW5kIHVuZGVmaW5lZFxuICAgIC8vIHNpbmNlIHZybUh1bWFub2lkIG1pZ2h0IGJlIG51bGwgYXMgYSByZXN1bHRcbiAgICBpZiAodnJtSHVtYW5vaWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHZybUh1bWFub2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVlJNTG9va0F0TG9hZGVyUGx1Z2luOiB2cm1IdW1hbm9pZCBpcyB1bmRlZmluZWQuIFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luIGhhdmUgdG8gYmUgdXNlZCBmaXJzdCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHZybUV4cHJlc3Npb25NYW5hZ2VyID0gZ2x0Zi51c2VyRGF0YS52cm1FeHByZXNzaW9uTWFuYWdlciBhcyBWUk1FeHByZXNzaW9uTWFuYWdlciB8IHVuZGVmaW5lZDtcblxuICAgIGlmICh2cm1FeHByZXNzaW9uTWFuYWdlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodnJtRXhwcmVzc2lvbk1hbmFnZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVlJNTG9va0F0TG9hZGVyUGx1Z2luOiB2cm1FeHByZXNzaW9uTWFuYWdlciBpcyB1bmRlZmluZWQuIFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4gaGF2ZSB0byBiZSB1c2VkIGZpcnN0JyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZ2x0Zi51c2VyRGF0YS52cm1Mb29rQXQgPSBhd2FpdCB0aGlzLl9pbXBvcnQoZ2x0ZiwgdnJtSHVtYW5vaWQsIHZybUV4cHJlc3Npb25NYW5hZ2VyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgYSB7QGxpbmsgVlJNTG9va0F0fSBmcm9tIGEgVlJNLlxuICAgKlxuICAgKiBAcGFyYW0gZ2x0ZiBBIHBhcnNlZCByZXN1bHQgb2YgR0xURiB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcbiAgICogQHBhcmFtIGh1bWFub2lkIEEge0BsaW5rIFZSTUh1bWFub2lkfSBpbnN0YW5jZSB0aGF0IHJlcHJlc2VudHMgdGhlIFZSTVxuICAgKiBAcGFyYW0gZXhwcmVzc2lvbnMgQSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9IGluc3RhbmNlIHRoYXQgcmVwcmVzZW50cyB0aGUgVlJNXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9pbXBvcnQoXG4gICAgZ2x0ZjogR0xURixcbiAgICBodW1hbm9pZDogVlJNSHVtYW5vaWQgfCBudWxsLFxuICAgIGV4cHJlc3Npb25zOiBWUk1FeHByZXNzaW9uTWFuYWdlciB8IG51bGwsXG4gICk6IFByb21pc2U8VlJNTG9va0F0IHwgbnVsbD4ge1xuICAgIGlmIChodW1hbm9pZCA9PSBudWxsIHx8IGV4cHJlc3Npb25zID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHYxUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjFJbXBvcnQoZ2x0ZiwgaHVtYW5vaWQsIGV4cHJlc3Npb25zKTtcbiAgICBpZiAodjFSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MVJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCB2MFJlc3VsdCA9IGF3YWl0IHRoaXMuX3YwSW1wb3J0KGdsdGYsIGh1bWFub2lkLCBleHByZXNzaW9ucyk7XG4gICAgaWYgKHYwUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjBSZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MUltcG9ydChcbiAgICBnbHRmOiBHTFRGLFxuICAgIGh1bWFub2lkOiBWUk1IdW1hbm9pZCxcbiAgICBleHByZXNzaW9uczogVlJNRXhwcmVzc2lvbk1hbmFnZXIsXG4gICk6IFByb21pc2U8VlJNTG9va0F0IHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSB2cm1cbiAgICBjb25zdCBpc1ZSTVVzZWQgPSBqc29uLmV4dGVuc2lvbnNVc2VkPy5pbmRleE9mKCdWUk1DX3ZybScpICE9PSAtMTtcbiAgICBpZiAoIWlzVlJNVXNlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ZW5zaW9uID0ganNvbi5leHRlbnNpb25zPy5bJ1ZSTUNfdnJtJ10gYXMgVjFWUk1TY2hlbWEuVlJNQ1ZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIWV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlY1ZlcnNpb24gPSBleHRlbnNpb24uc3BlY1ZlcnNpb247XG4gICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TLmhhcyhzcGVjVmVyc2lvbikpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVlJNTG9va0F0TG9hZGVyUGx1Z2luOiBVbmtub3duIFZSTUNfdnJtIHNwZWNWZXJzaW9uIFwiJHtzcGVjVmVyc2lvbn1cImApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hTG9va0F0ID0gZXh0ZW5zaW9uLmxvb2tBdDtcbiAgICBpZiAoIXNjaGVtYUxvb2tBdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdE91dHB1dFNjYWxlID0gc2NoZW1hTG9va0F0LnR5cGUgPT09ICdleHByZXNzaW9uJyA/IDEuMCA6IDEwLjA7XG5cbiAgICBjb25zdCBtYXBISSA9IHRoaXMuX3YxSW1wb3J0UmFuZ2VNYXAoc2NoZW1hTG9va0F0LnJhbmdlTWFwSG9yaXpvbnRhbElubmVyLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuICAgIGNvbnN0IG1hcEhPID0gdGhpcy5fdjFJbXBvcnRSYW5nZU1hcChzY2hlbWFMb29rQXQucmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXIsIGRlZmF1bHRPdXRwdXRTY2FsZSk7XG4gICAgY29uc3QgbWFwVkQgPSB0aGlzLl92MUltcG9ydFJhbmdlTWFwKHNjaGVtYUxvb2tBdC5yYW5nZU1hcFZlcnRpY2FsRG93biwgZGVmYXVsdE91dHB1dFNjYWxlKTtcbiAgICBjb25zdCBtYXBWVSA9IHRoaXMuX3YxSW1wb3J0UmFuZ2VNYXAoc2NoZW1hTG9va0F0LnJhbmdlTWFwVmVydGljYWxVcCwgZGVmYXVsdE91dHB1dFNjYWxlKTtcblxuICAgIGxldCBhcHBsaWVyO1xuXG4gICAgaWYgKHNjaGVtYUxvb2tBdC50eXBlID09PSAnZXhwcmVzc2lvbicpIHtcbiAgICAgIGFwcGxpZXIgPSBuZXcgVlJNTG9va0F0RXhwcmVzc2lvbkFwcGxpZXIoZXhwcmVzc2lvbnMsIG1hcEhJLCBtYXBITywgbWFwVkQsIG1hcFZVKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwbGllciA9IG5ldyBWUk1Mb29rQXRCb25lQXBwbGllcihodW1hbm9pZCwgbWFwSEksIG1hcEhPLCBtYXBWRCwgbWFwVlUpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvb2tBdCA9IHRoaXMuX2ltcG9ydExvb2tBdChodW1hbm9pZCwgYXBwbGllcik7XG5cbiAgICBsb29rQXQub2Zmc2V0RnJvbUhlYWRCb25lLmZyb21BcnJheShzY2hlbWFMb29rQXQub2Zmc2V0RnJvbUhlYWRCb25lID8/IFswLjAsIDAuMDYsIDAuMF0pO1xuXG4gICAgcmV0dXJuIGxvb2tBdDtcbiAgfVxuXG4gIHByaXZhdGUgX3YxSW1wb3J0UmFuZ2VNYXAoXG4gICAgc2NoZW1hUmFuZ2VNYXA6IFYxVlJNU2NoZW1hLkxvb2tBdFJhbmdlTWFwIHwgdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRPdXRwdXRTY2FsZTogbnVtYmVyLFxuICApOiBWUk1Mb29rQXRSYW5nZU1hcCB7XG4gICAgbGV0IGlucHV0TWF4VmFsdWUgPSBzY2hlbWFSYW5nZU1hcD8uaW5wdXRNYXhWYWx1ZSA/PyA5MC4wO1xuICAgIGNvbnN0IG91dHB1dFNjYWxlID0gc2NoZW1hUmFuZ2VNYXA/Lm91dHB1dFNjYWxlID8/IGRlZmF1bHRPdXRwdXRTY2FsZTtcblxuICAgIC8vIEl0IG1pZ2h0IGNhdXNlIE5hTiB3aGVuIGBpbnB1dE1heFZhbHVlYCBpcyB0b28gc21hbGxcbiAgICAvLyB3aGljaCBtYWtlcyB0aGUgbWVzaCBvZiB0aGUgaGVhZCBkaXNhcHBlYXJcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9waXhpdi90aHJlZS12cm0vaXNzdWVzLzEyMDFcbiAgICBpZiAoaW5wdXRNYXhWYWx1ZSA8IElOUFVUX01BWF9WQUxVRV9NSU5JTVVNKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdWUk1Mb29rQXRMb2FkZXJQbHVnaW46IGlucHV0TWF4VmFsdWUgb2YgYSByYW5nZSBtYXAgaXMgdG9vIHNtYWxsLiBDb25zaWRlciByZXZpZXdpbmcgdGhlIHJhbmdlIG1hcCEnLFxuICAgICAgKTtcbiAgICAgIGlucHV0TWF4VmFsdWUgPSBJTlBVVF9NQVhfVkFMVUVfTUlOSU1VTTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFZSTUxvb2tBdFJhbmdlTWFwKGlucHV0TWF4VmFsdWUsIG91dHB1dFNjYWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YwSW1wb3J0KFxuICAgIGdsdGY6IEdMVEYsXG4gICAgaHVtYW5vaWQ6IFZSTUh1bWFub2lkLFxuICAgIGV4cHJlc3Npb25zOiBWUk1FeHByZXNzaW9uTWFuYWdlcixcbiAgKTogUHJvbWlzZTxWUk1Mb29rQXQgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IHZybUV4dCA9IGpzb24uZXh0ZW5zaW9ucz8uVlJNIGFzIFYwVlJNLlZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIXZybUV4dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hRmlyc3RQZXJzb24gPSB2cm1FeHQuZmlyc3RQZXJzb247XG4gICAgaWYgKCFzY2hlbWFGaXJzdFBlcnNvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdE91dHB1dFNjYWxlID0gc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0VHlwZU5hbWUgPT09ICdCbGVuZFNoYXBlJyA/IDEuMCA6IDEwLjA7XG5cbiAgICBjb25zdCBtYXBISSA9IHRoaXMuX3YwSW1wb3J0RGVncmVlTWFwKHNjaGVtYUZpcnN0UGVyc29uLmxvb2tBdEhvcml6b250YWxJbm5lciwgZGVmYXVsdE91dHB1dFNjYWxlKTtcbiAgICBjb25zdCBtYXBITyA9IHRoaXMuX3YwSW1wb3J0RGVncmVlTWFwKHNjaGVtYUZpcnN0UGVyc29uLmxvb2tBdEhvcml6b250YWxPdXRlciwgZGVmYXVsdE91dHB1dFNjYWxlKTtcbiAgICBjb25zdCBtYXBWRCA9IHRoaXMuX3YwSW1wb3J0RGVncmVlTWFwKHNjaGVtYUZpcnN0UGVyc29uLmxvb2tBdFZlcnRpY2FsRG93biwgZGVmYXVsdE91dHB1dFNjYWxlKTtcbiAgICBjb25zdCBtYXBWVSA9IHRoaXMuX3YwSW1wb3J0RGVncmVlTWFwKHNjaGVtYUZpcnN0UGVyc29uLmxvb2tBdFZlcnRpY2FsVXAsIGRlZmF1bHRPdXRwdXRTY2FsZSk7XG5cbiAgICBsZXQgYXBwbGllcjtcblxuICAgIGlmIChzY2hlbWFGaXJzdFBlcnNvbi5sb29rQXRUeXBlTmFtZSA9PT0gJ0JsZW5kU2hhcGUnKSB7XG4gICAgICBhcHBsaWVyID0gbmV3IFZSTUxvb2tBdEV4cHJlc3Npb25BcHBsaWVyKGV4cHJlc3Npb25zLCBtYXBISSwgbWFwSE8sIG1hcFZELCBtYXBWVSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGxpZXIgPSBuZXcgVlJNTG9va0F0Qm9uZUFwcGxpZXIoaHVtYW5vaWQsIG1hcEhJLCBtYXBITywgbWFwVkQsIG1hcFZVKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb29rQXQgPSB0aGlzLl9pbXBvcnRMb29rQXQoaHVtYW5vaWQsIGFwcGxpZXIpO1xuXG4gICAgaWYgKHNjaGVtYUZpcnN0UGVyc29uLmZpcnN0UGVyc29uQm9uZU9mZnNldCkge1xuICAgICAgbG9va0F0Lm9mZnNldEZyb21IZWFkQm9uZS5zZXQoXG4gICAgICAgIHNjaGVtYUZpcnN0UGVyc29uLmZpcnN0UGVyc29uQm9uZU9mZnNldC54ID8/IDAuMCxcbiAgICAgICAgc2NoZW1hRmlyc3RQZXJzb24uZmlyc3RQZXJzb25Cb25lT2Zmc2V0LnkgPz8gMC4wNixcbiAgICAgICAgLShzY2hlbWFGaXJzdFBlcnNvbi5maXJzdFBlcnNvbkJvbmVPZmZzZXQueiA/PyAwLjApLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9va0F0Lm9mZnNldEZyb21IZWFkQm9uZS5zZXQoMC4wLCAwLjA2LCAwLjApO1xuICAgIH1cblxuICAgIC8vIFZSTSAwLjAgYXJlIGZhY2luZyBaLSBpbnN0ZWFkIG9mIForXG4gICAgbG9va0F0LmZhY2VGcm9udC5zZXQoMC4wLCAwLjAsIC0xLjApO1xuXG4gICAgaWYgKGFwcGxpZXIgaW5zdGFuY2VvZiBWUk1Mb29rQXRCb25lQXBwbGllcikge1xuICAgICAgYXBwbGllci5mYWNlRnJvbnQuc2V0KDAuMCwgMC4wLCAtMS4wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9va0F0O1xuICB9XG5cbiAgcHJpdmF0ZSBfdjBJbXBvcnREZWdyZWVNYXAoXG4gICAgc2NoZW1hRGVncmVlTWFwOiBWMFZSTS5GaXJzdFBlcnNvbkRlZ3JlZU1hcCB8IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0T3V0cHV0U2NhbGU6IG51bWJlcixcbiAgKTogVlJNTG9va0F0UmFuZ2VNYXAge1xuICAgIGNvbnN0IGN1cnZlID0gc2NoZW1hRGVncmVlTWFwPy5jdXJ2ZTtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY3VydmUpICE9PSAnWzAsMCwwLDEsMSwxLDEsMF0nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0N1cnZlcyBvZiBMb29rQXREZWdyZWVNYXAgZGVmaW5lZCBpbiBWUk0gMC4wIGFyZSBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuXG4gICAgbGV0IHhSYW5nZSA9IHNjaGVtYURlZ3JlZU1hcD8ueFJhbmdlID8/IDkwLjA7XG4gICAgY29uc3QgeVJhbmdlID0gc2NoZW1hRGVncmVlTWFwPy55UmFuZ2UgPz8gZGVmYXVsdE91dHB1dFNjYWxlO1xuXG4gICAgLy8gSXQgbWlnaHQgY2F1c2UgTmFOIHdoZW4gYHhSYW5nZWAgaXMgdG9vIHNtYWxsXG4gICAgLy8gd2hpY2ggbWFrZXMgdGhlIG1lc2ggb2YgdGhlIGhlYWQgZGlzYXBwZWFyXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcGl4aXYvdGhyZWUtdnJtL2lzc3Vlcy8xMjAxXG4gICAgaWYgKHhSYW5nZSA8IElOUFVUX01BWF9WQUxVRV9NSU5JTVVNKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1ZSTUxvb2tBdExvYWRlclBsdWdpbjogeFJhbmdlIG9mIGEgZGVncmVlIG1hcCBpcyB0b28gc21hbGwuIENvbnNpZGVyIHJldmlld2luZyB0aGUgZGVncmVlIG1hcCEnKTtcbiAgICAgIHhSYW5nZSA9IElOUFVUX01BWF9WQUxVRV9NSU5JTVVNO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVlJNTG9va0F0UmFuZ2VNYXAoeFJhbmdlLCB5UmFuZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW1wb3J0TG9va0F0KGh1bWFub2lkOiBWUk1IdW1hbm9pZCwgYXBwbGllcjogVlJNTG9va0F0QXBwbGllcik6IFZSTUxvb2tBdCB7XG4gICAgY29uc3QgbG9va0F0ID0gbmV3IFZSTUxvb2tBdChodW1hbm9pZCwgYXBwbGllcik7XG5cbiAgICBpZiAodGhpcy5oZWxwZXJSb290KSB7XG4gICAgICBjb25zdCBoZWxwZXIgPSBuZXcgVlJNTG9va0F0SGVscGVyKGxvb2tBdCk7XG4gICAgICB0aGlzLmhlbHBlclJvb3QuYWRkKGhlbHBlcik7XG4gICAgICBoZWxwZXIucmVuZGVyT3JkZXIgPSB0aGlzLmhlbHBlclJvb3QucmVuZGVyT3JkZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvb2tBdDtcbiAgfVxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSB0eXBlIG9mIGFwcGxpZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBWUk1Mb29rQXRUeXBlTmFtZSA9IHtcbiAgQm9uZTogJ2JvbmUnLFxuICBFeHByZXNzaW9uOiAnZXhwcmVzc2lvbicsXG59O1xuXG5leHBvcnQgdHlwZSBWUk1Mb29rQXRUeXBlTmFtZSA9ICh0eXBlb2YgVlJNTG9va0F0VHlwZU5hbWUpW2tleW9mIHR5cGVvZiBWUk1Mb29rQXRUeXBlTmFtZV07XG4iLCAiaW1wb3J0IHR5cGUgeyBHTFRGLCBHTFRGTG9hZGVyUGx1Z2luLCBHTFRGUGFyc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgdHlwZSB7IFZSTTBNZXRhIH0gZnJvbSAnLi9WUk0wTWV0YSc7XG5pbXBvcnQgdHlwZSB7IFZSTTFNZXRhIH0gZnJvbSAnLi9WUk0xTWV0YSc7XG5pbXBvcnQgdHlwZSB7IFZSTU1ldGEgfSBmcm9tICcuL1ZSTU1ldGEnO1xuaW1wb3J0IHR5cGUgeyBWUk1NZXRhTG9hZGVyUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vVlJNTWV0YUxvYWRlclBsdWdpbk9wdGlvbnMnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMFZSTSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtLTAuMCc7XG5pbXBvcnQgdHlwZSAqIGFzIFYxVlJNU2NoZW1hIGZyb20gJ0BwaXhpdi90eXBlcy12cm1jLXZybS0xLjAnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgcmVzb2x2ZVVSTCB9IGZyb20gJy4uL3V0aWxzL3Jlc29sdmVVUkwnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIHNwZWMgdmVyc2lvbnMgaXQgcmVjb2duaXplcy5cbiAqL1xuY29uc3QgUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyA9IG5ldyBTZXQoWycxLjAnLCAnMS4wLWJldGEnXSk7XG5cbi8qKlxuICogQSBwbHVnaW4gb2YgR0xURkxvYWRlciB0aGF0IGltcG9ydHMgYSB7QGxpbmsgVlJNMU1ldGF9IGZyb20gYSBWUk0gZXh0ZW5zaW9uIG9mIGEgR0xURi5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTU1ldGFMb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgcHVibGljIHJlYWRvbmx5IHBhcnNlcjogR0xURlBhcnNlcjtcblxuICAvKipcbiAgICogSWYgYGZhbHNlYCwgaXQgd29uJ3QgbG9hZCBpdHMgdGh1bWJuYWlsIGltYWdlICh7QGxpbmsgVlJNMU1ldGEudGh1bWJuYWlsSW1hZ2V9KS5cbiAgICogYGZhbHNlYCBieSBkZWZhdWx0LlxuICAgKi9cbiAgcHVibGljIG5lZWRUaHVtYm5haWxJbWFnZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBsaXN0IG9mIGxpY2Vuc2UgdXJscy5cbiAgICogVGhpcyBtZXRhIGxvYWRlciB3aWxsIGFjY2VwdCB0aGVzZSBgbGljZW5zZVVybGBzLlxuICAgKiBPdGhlcndpc2UgaXQgd29uJ3QgYmUgbG9hZGVkLlxuICAgKi9cbiAgcHVibGljIGFjY2VwdExpY2Vuc2VVcmxzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogV2hldGhlciBpdCBzaG91bGQgYWNjZXB0IFZSTTAuMCBtZXRhIG9yIG5vdC5cbiAgICogTm90ZSB0aGF0IGl0IG1pZ2h0IGxvYWQge0BsaW5rIFZSTTBNZXRhfSBpbnN0ZWFkIG9mIHtAbGluayBWUk0xTWV0YX0gd2hlbiB0aGlzIGlzIGB0cnVlYC5cbiAgICogYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBwdWJsaWMgYWNjZXB0VjBNZXRhOiBib29sZWFuO1xuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIC8vIFdlIHNob3VsZCB1c2UgdGhlIGV4dGVuc2lvbiBuYW1lIGluc3RlYWQgYnV0IHdlIGhhdmUgbXVsdGlwbGUgcGx1Z2lucyBmb3IgYW4gZXh0ZW5zaW9uLi4uXG4gICAgcmV0dXJuICdWUk1NZXRhTG9hZGVyUGx1Z2luJztcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIsIG9wdGlvbnM/OiBWUk1NZXRhTG9hZGVyUGx1Z2luT3B0aW9ucykge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgdGhpcy5uZWVkVGh1bWJuYWlsSW1hZ2UgPSBvcHRpb25zPy5uZWVkVGh1bWJuYWlsSW1hZ2UgPz8gZmFsc2U7XG4gICAgdGhpcy5hY2NlcHRMaWNlbnNlVXJscyA9IG9wdGlvbnM/LmFjY2VwdExpY2Vuc2VVcmxzID8/IFsnaHR0cHM6Ly92cm0uZGV2L2xpY2Vuc2VzLzEuMC8nXTtcbiAgICB0aGlzLmFjY2VwdFYwTWV0YSA9IG9wdGlvbnM/LmFjY2VwdFYwTWV0YSA/PyB0cnVlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFmdGVyUm9vdChnbHRmOiBHTFRGKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZ2x0Zi51c2VyRGF0YS52cm1NZXRhID0gYXdhaXQgdGhpcy5faW1wb3J0KGdsdGYpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTU1ldGEgfCBudWxsPiB7XG4gICAgY29uc3QgdjFSZXN1bHQgPSBhd2FpdCB0aGlzLl92MUltcG9ydChnbHRmKTtcbiAgICBpZiAodjFSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHYxUmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHYwUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjBJbXBvcnQoZ2x0Zik7XG4gICAgaWYgKHYwUmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB2MFJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YxSW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTTFNZXRhIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSB2cm1cbiAgICBjb25zdCBpc1ZSTVVzZWQgPSBqc29uLmV4dGVuc2lvbnNVc2VkPy5pbmRleE9mKCdWUk1DX3ZybScpICE9PSAtMTtcbiAgICBpZiAoIWlzVlJNVXNlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ZW5zaW9uID0ganNvbi5leHRlbnNpb25zPy5bJ1ZSTUNfdnJtJ10gYXMgVjFWUk1TY2hlbWEuVlJNQ1ZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoZXh0ZW5zaW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNwZWNWZXJzaW9uID0gZXh0ZW5zaW9uLnNwZWNWZXJzaW9uO1xuICAgIGlmICghUE9TU0lCTEVfU1BFQ19WRVJTSU9OUy5oYXMoc3BlY1ZlcnNpb24pKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFZSTU1ldGFMb2FkZXJQbHVnaW46IFVua25vd24gVlJNQ192cm0gc3BlY1ZlcnNpb24gXCIke3NwZWNWZXJzaW9ufVwiYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFNZXRhID0gZXh0ZW5zaW9uLm1ldGE7XG4gICAgaWYgKCFzY2hlbWFNZXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBpZiBhY2NlcHRWME1ldGEgaXMgZmFsc2VcbiAgICBjb25zdCBsaWNlbnNlVXJsID0gc2NoZW1hTWV0YS5saWNlbnNlVXJsO1xuICAgIGNvbnN0IGFjY2VwdExpY2Vuc2VVcmxzU2V0ID0gbmV3IFNldCh0aGlzLmFjY2VwdExpY2Vuc2VVcmxzKTtcbiAgICBpZiAoIWFjY2VwdExpY2Vuc2VVcmxzU2V0LmhhcyhsaWNlbnNlVXJsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBWUk1NZXRhTG9hZGVyUGx1Z2luOiBUaGUgbGljZW5zZSB1cmwgXCIke2xpY2Vuc2VVcmx9XCIgaXMgbm90IGFjY2VwdGVkYCk7XG4gICAgfVxuXG4gICAgbGV0IHRodW1ibmFpbEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLm5lZWRUaHVtYm5haWxJbWFnZSAmJiBzY2hlbWFNZXRhLnRodW1ibmFpbEltYWdlICE9IG51bGwpIHtcbiAgICAgIHRodW1ibmFpbEltYWdlID0gKGF3YWl0IHRoaXMuX2V4dHJhY3RHTFRGSW1hZ2Uoc2NoZW1hTWV0YS50aHVtYm5haWxJbWFnZSkpID8/IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWV0YVZlcnNpb246ICcxJyxcbiAgICAgIG5hbWU6IHNjaGVtYU1ldGEubmFtZSxcbiAgICAgIHZlcnNpb246IHNjaGVtYU1ldGEudmVyc2lvbixcbiAgICAgIGF1dGhvcnM6IHNjaGVtYU1ldGEuYXV0aG9ycyxcbiAgICAgIGNvcHlyaWdodEluZm9ybWF0aW9uOiBzY2hlbWFNZXRhLmNvcHlyaWdodEluZm9ybWF0aW9uLFxuICAgICAgY29udGFjdEluZm9ybWF0aW9uOiBzY2hlbWFNZXRhLmNvbnRhY3RJbmZvcm1hdGlvbixcbiAgICAgIHJlZmVyZW5jZXM6IHNjaGVtYU1ldGEucmVmZXJlbmNlcyxcbiAgICAgIHRoaXJkUGFydHlMaWNlbnNlczogc2NoZW1hTWV0YS50aGlyZFBhcnR5TGljZW5zZXMsXG4gICAgICB0aHVtYm5haWxJbWFnZSxcbiAgICAgIGxpY2Vuc2VVcmw6IHNjaGVtYU1ldGEubGljZW5zZVVybCxcbiAgICAgIGF2YXRhclBlcm1pc3Npb246IHNjaGVtYU1ldGEuYXZhdGFyUGVybWlzc2lvbixcbiAgICAgIGFsbG93RXhjZXNzaXZlbHlWaW9sZW50VXNhZ2U6IHNjaGVtYU1ldGEuYWxsb3dFeGNlc3NpdmVseVZpb2xlbnRVc2FnZSxcbiAgICAgIGFsbG93RXhjZXNzaXZlbHlTZXh1YWxVc2FnZTogc2NoZW1hTWV0YS5hbGxvd0V4Y2Vzc2l2ZWx5U2V4dWFsVXNhZ2UsXG4gICAgICBjb21tZXJjaWFsVXNhZ2U6IHNjaGVtYU1ldGEuY29tbWVyY2lhbFVzYWdlLFxuICAgICAgYWxsb3dQb2xpdGljYWxPclJlbGlnaW91c1VzYWdlOiBzY2hlbWFNZXRhLmFsbG93UG9saXRpY2FsT3JSZWxpZ2lvdXNVc2FnZSxcbiAgICAgIGFsbG93QW50aXNvY2lhbE9ySGF0ZVVzYWdlOiBzY2hlbWFNZXRhLmFsbG93QW50aXNvY2lhbE9ySGF0ZVVzYWdlLFxuICAgICAgY3JlZGl0Tm90YXRpb246IHNjaGVtYU1ldGEuY3JlZGl0Tm90YXRpb24sXG4gICAgICBhbGxvd1JlZGlzdHJpYnV0aW9uOiBzY2hlbWFNZXRhLmFsbG93UmVkaXN0cmlidXRpb24sXG4gICAgICBtb2RpZmljYXRpb246IHNjaGVtYU1ldGEubW9kaWZpY2F0aW9uLFxuICAgICAgb3RoZXJMaWNlbnNlVXJsOiBzY2hlbWFNZXRhLm90aGVyTGljZW5zZVVybCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjBJbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNME1ldGEgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IHZybUV4dCA9IGpzb24uZXh0ZW5zaW9ucz8uVlJNIGFzIFYwVlJNLlZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIXZybUV4dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hTWV0YSA9IHZybUV4dC5tZXRhO1xuICAgIGlmICghc2NoZW1hTWV0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3IgaWYgYWNjZXB0VjBNZXRhIGlzIGZhbHNlXG4gICAgaWYgKCF0aGlzLmFjY2VwdFYwTWV0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWUk1NZXRhTG9hZGVyUGx1Z2luOiBBdHRlbXB0ZWQgdG8gbG9hZCBWUk0wLjAgbWV0YSBidXQgYWNjZXB0VjBNZXRhIGlzIGZhbHNlJyk7XG4gICAgfVxuXG4gICAgLy8gbG9hZCB0aHVtYm5haWwgdGV4dHVyZVxuICAgIGxldCB0ZXh0dXJlOiBUSFJFRS5UZXh0dXJlIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5uZWVkVGh1bWJuYWlsSW1hZ2UgJiYgc2NoZW1hTWV0YS50ZXh0dXJlICE9IG51bGwgJiYgc2NoZW1hTWV0YS50ZXh0dXJlICE9PSAtMSkge1xuICAgICAgdGV4dHVyZSA9IGF3YWl0IHRoaXMucGFyc2VyLmdldERlcGVuZGVuY3koJ3RleHR1cmUnLCBzY2hlbWFNZXRhLnRleHR1cmUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXRhVmVyc2lvbjogJzAnLFxuICAgICAgYWxsb3dlZFVzZXJOYW1lOiBzY2hlbWFNZXRhLmFsbG93ZWRVc2VyTmFtZSxcbiAgICAgIGF1dGhvcjogc2NoZW1hTWV0YS5hdXRob3IsXG4gICAgICBjb21tZXJjaWFsVXNzYWdlTmFtZTogc2NoZW1hTWV0YS5jb21tZXJjaWFsVXNzYWdlTmFtZSxcbiAgICAgIGNvbnRhY3RJbmZvcm1hdGlvbjogc2NoZW1hTWV0YS5jb250YWN0SW5mb3JtYXRpb24sXG4gICAgICBsaWNlbnNlTmFtZTogc2NoZW1hTWV0YS5saWNlbnNlTmFtZSxcbiAgICAgIG90aGVyTGljZW5zZVVybDogc2NoZW1hTWV0YS5vdGhlckxpY2Vuc2VVcmwsXG4gICAgICBvdGhlclBlcm1pc3Npb25Vcmw6IHNjaGVtYU1ldGEub3RoZXJQZXJtaXNzaW9uVXJsLFxuICAgICAgcmVmZXJlbmNlOiBzY2hlbWFNZXRhLnJlZmVyZW5jZSxcbiAgICAgIHNleHVhbFVzc2FnZU5hbWU6IHNjaGVtYU1ldGEuc2V4dWFsVXNzYWdlTmFtZSxcbiAgICAgIHRleHR1cmU6IHRleHR1cmUgPz8gdW5kZWZpbmVkLFxuICAgICAgdGl0bGU6IHNjaGVtYU1ldGEudGl0bGUsXG4gICAgICB2ZXJzaW9uOiBzY2hlbWFNZXRhLnZlcnNpb24sXG4gICAgICB2aW9sZW50VXNzYWdlTmFtZTogc2NoZW1hTWV0YS52aW9sZW50VXNzYWdlTmFtZSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZXh0cmFjdEdMVEZJbWFnZShpbmRleDogbnVtYmVyKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICBjb25zdCBzb3VyY2UgPSBqc29uLmltYWdlcz8uW2luZGV4XTtcblxuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVlJNTWV0YUxvYWRlclBsdWdpbjogQXR0ZW1wdCB0byB1c2UgaW1hZ2VzWyR7aW5kZXh9XSBvZiBnbFRGIGFzIGEgdGh1bWJuYWlsIGJ1dCB0aGUgaW1hZ2UgZG9lc24ndCBleGlzdGAsXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2Jsb2IvcjEyNC9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzI0wyNDY3XG5cbiAgICAvLyBgc291cmNlLnVyaWAgbWlnaHQgYmUgYSByZWZlcmVuY2UgdG8gYSBmaWxlXG4gICAgbGV0IHNvdXJjZVVSSTogc3RyaW5nIHwgdW5kZWZpbmVkID0gc291cmNlLnVyaTtcblxuICAgIC8vIExvYWQgdGhlIGJpbmFyeSBhcyBhIGJsb2JcbiAgICBpZiAoc291cmNlLmJ1ZmZlclZpZXcgIT0gbnVsbCkge1xuICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGF3YWl0IHRoaXMucGFyc2VyLmdldERlcGVuZGVuY3koJ2J1ZmZlclZpZXcnLCBzb3VyY2UuYnVmZmVyVmlldyk7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2J1ZmZlclZpZXddLCB7IHR5cGU6IHNvdXJjZS5taW1lVHlwZSB9KTtcbiAgICAgIHNvdXJjZVVSSSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZVVSSSA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBWUk1NZXRhTG9hZGVyUGx1Z2luOiBBdHRlbXB0IHRvIHVzZSBpbWFnZXNbJHtpbmRleH1dIG9mIGdsVEYgYXMgYSB0aHVtYm5haWwgYnV0IHRoZSBpbWFnZSBjb3VsZG4ndCBsb2FkIHByb3Blcmx5YCxcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcbiAgICByZXR1cm4gYXdhaXQgbG9hZGVyLmxvYWRBc3luYyhyZXNvbHZlVVJMKHNvdXJjZVVSSSwgKHRoaXMucGFyc2VyIGFzIGFueSkub3B0aW9ucy5wYXRoKSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGNvbnNvbGUud2FybignVlJNTWV0YUxvYWRlclBsdWdpbjogRmFpbGVkIHRvIGxvYWQgYSB0aHVtYm5haWwgaW1hZ2UnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9XG59XG4iLCAiLyoqXG4gKiBZb2lua2VkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlVVJMKHVybDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBJbnZhbGlkIFVSTFxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHwgdXJsID09PSAnJykgcmV0dXJuICcnO1xuXG4gIC8vIEhvc3QgUmVsYXRpdmUgVVJMXG4gIGlmICgvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHBhdGgpICYmIC9eXFwvLy50ZXN0KHVybCkpIHtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC8oXmh0dHBzPzpcXC9cXC9bXi9dKykuKi9pLCAnJDEnKTtcbiAgfVxuXG4gIC8vIEFic29sdXRlIFVSTCBodHRwOi8vLGh0dHBzOi8vLC8vXG4gIGlmICgvXihodHRwcz86KT9cXC9cXC8vaS50ZXN0KHVybCkpIHJldHVybiB1cmw7XG5cbiAgLy8gRGF0YSBVUklcbiAgaWYgKC9eZGF0YTouKiwuKiQvaS50ZXN0KHVybCkpIHJldHVybiB1cmw7XG5cbiAgLy8gQmxvYiBVUkxcbiAgaWYgKC9eYmxvYjouKiQvaS50ZXN0KHVybCkpIHJldHVybiB1cmw7XG5cbiAgLy8gUmVsYXRpdmUgVVJMXG4gIHJldHVybiBwYXRoICsgdXJsO1xufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb25NYW5hZ2VyIH0gZnJvbSAnLi9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyBWUk1GaXJzdFBlcnNvbiB9IGZyb20gJy4vZmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb24nO1xuaW1wb3J0IHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuL2h1bWFub2lkL1ZSTUh1bWFub2lkJztcbmltcG9ydCB7IFZSTUxvb2tBdCB9IGZyb20gJy4vbG9va0F0L1ZSTUxvb2tBdCc7XG5pbXBvcnQgeyBWUk1NZXRhIH0gZnJvbSAnLi9tZXRhL1ZSTU1ldGEnO1xuaW1wb3J0IHsgVlJNQ29yZVBhcmFtZXRlcnMgfSBmcm9tICcuL1ZSTUNvcmVQYXJhbWV0ZXJzJztcblxuLyoqXG4gKiBBIGNsYXNzIHRoYXQgcmVwcmVzZW50cyBhIHNpbmdsZSBWUk0gbW9kZWwuXG4gKiBUaGlzIGNsYXNzIG9ubHkgaW5jbHVkZXMgY29yZSBzcGVjIG9mIHRoZSBWUk0gKGBWUk1DX3ZybWApLlxuICovXG5leHBvcnQgY2xhc3MgVlJNQ29yZSB7XG4gIC8qKlxuICAgKiBgVEhSRUUuR3JvdXBgIHRoYXQgY29udGFpbnMgdGhlIGVudGlyZSBWUk0uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc2NlbmU6IFRIUkVFLkdyb3VwO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyBtZXRhIGZpZWxkcyBvZiB0aGUgVlJNLlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byByZWZlciB0aGVzZSBsaWNlbnNlIGZpZWxkcyBiZWZvcmUgdXNlIHlvdXIgVlJNcy5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBtZXRhOiBWUk1NZXRhO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyB7QGxpbmsgVlJNSHVtYW5vaWR9IG9mIHRoZSBWUk0uXG4gICAqIFlvdSBjYW4gY29udHJvbCBlYWNoIGJvbmVzIHVzaW5nIHtAbGluayBWUk1IdW1hbm9pZC5nZXROb3JtYWxpemVkQm9uZU5vZGV9IG9yIHtAbGluayBWUk1IdW1hbm9pZC5nZXRSYXdCb25lTm9kZX0uXG4gICAqXG4gICAqIEBUT0RPIEFkZCBhIGxpbmsgdG8gVlJNIHNwZWNcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBodW1hbm9pZDogVlJNSHVtYW5vaWQ7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0gb2YgdGhlIFZSTS5cbiAgICogWW91IG1pZ2h0IHdhbnQgdG8gY29udHJvbCB0aGVzZSBmYWNpYWwgZXhwcmVzc2lvbnMgdmlhIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlci5zZXRWYWx1ZX0uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgZXhwcmVzc2lvbk1hbmFnZXI/OiBWUk1FeHByZXNzaW9uTWFuYWdlcjtcblxuICAvKipcbiAgICogQ29udGFpbnMge0BsaW5rIFZSTUZpcnN0UGVyc29ufSBvZiB0aGUgVlJNLlxuICAgKiBWUk1GaXJzdFBlcnNvbiBpcyBtb3N0bHkgdXNlZCBmb3IgbWVzaCBjdWxsaW5nIGZvciBmaXJzdCBwZXJzb24gdmlldy5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBmaXJzdFBlcnNvbj86IFZSTUZpcnN0UGVyc29uO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyB7QGxpbmsgVlJNTG9va0F0fSBvZiB0aGUgVlJNLlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byB1c2Uge0BsaW5rIFZSTUxvb2tBdC50YXJnZXR9IHRvIGNvbnRyb2wgdGhlIGV5ZSBkaXJlY3Rpb24gb2YgeW91ciBWUk1zLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGxvb2tBdD86IFZSTUxvb2tBdDtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFZSTSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBbW1ZSTVBhcmFtZXRlcnNdXSB0aGF0IHJlcHJlc2VudHMgY29tcG9uZW50cyBvZiB0aGUgVlJNXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1zOiBWUk1Db3JlUGFyYW1ldGVycykge1xuICAgIHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XG4gICAgdGhpcy5tZXRhID0gcGFyYW1zLm1ldGE7XG4gICAgdGhpcy5odW1hbm9pZCA9IHBhcmFtcy5odW1hbm9pZDtcbiAgICB0aGlzLmV4cHJlc3Npb25NYW5hZ2VyID0gcGFyYW1zLmV4cHJlc3Npb25NYW5hZ2VyO1xuICAgIHRoaXMuZmlyc3RQZXJzb24gPSBwYXJhbXMuZmlyc3RQZXJzb247XG4gICAgdGhpcy5sb29rQXQgPSBwYXJhbXMubG9va0F0O1xuICB9XG5cbiAgLyoqXG4gICAqICoqWW91IG5lZWQgdG8gY2FsbCB0aGlzIG9uIHlvdXIgdXBkYXRlIGxvb3AuKipcbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiB1cGRhdGVzIGV2ZXJ5IFZSTSBjb21wb25lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gZGVsdGEgZGVsdGFUaW1lXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmh1bWFub2lkLnVwZGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMubG9va0F0KSB7XG4gICAgICB0aGlzLmxvb2tBdC51cGRhdGUoZGVsdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV4cHJlc3Npb25NYW5hZ2VyKSB7XG4gICAgICB0aGlzLmV4cHJlc3Npb25NYW5hZ2VyLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IEdMVEYsIEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IFZSTUNvcmVMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9WUk1Db3JlTG9hZGVyUGx1Z2luT3B0aW9ucyc7XG5pbXBvcnQgeyBWUk1Db3JlIH0gZnJvbSAnLi9WUk1Db3JlJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4gfSBmcm9tICcuL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4nO1xuaW1wb3J0IHsgVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW4gfSBmcm9tICcuL2ZpcnN0UGVyc29uL1ZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luJztcbmltcG9ydCB7IFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luIH0gZnJvbSAnLi9odW1hbm9pZC9WUk1IdW1hbm9pZExvYWRlclBsdWdpbic7XG5pbXBvcnQgeyBWUk1NZXRhTG9hZGVyUGx1Z2luIH0gZnJvbSAnLi9tZXRhL1ZSTU1ldGFMb2FkZXJQbHVnaW4nO1xuaW1wb3J0IHsgVlJNTG9va0F0TG9hZGVyUGx1Z2luIH0gZnJvbSAnLi9sb29rQXQvVlJNTG9va0F0TG9hZGVyUGx1Z2luJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuL2h1bWFub2lkJztcbmltcG9ydCB0eXBlIHsgVlJNTWV0YSB9IGZyb20gJy4vbWV0YSc7XG5cbmV4cG9ydCBjbGFzcyBWUk1Db3JlTG9hZGVyUGx1Z2luIGltcGxlbWVudHMgR0xURkxvYWRlclBsdWdpbiB7XG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIC8vIFdlIHNob3VsZCB1c2UgdGhlIGV4dGVuc2lvbiBuYW1lIGluc3RlYWQgYnV0IHdlIGhhdmUgbXVsdGlwbGUgcGx1Z2lucyBmb3IgYW4gZXh0ZW5zaW9uLi4uXG4gICAgcmV0dXJuICdWUk1DX3ZybSc7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIHB1YmxpYyByZWFkb25seSBleHByZXNzaW9uUGx1Z2luOiBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luO1xuICBwdWJsaWMgcmVhZG9ubHkgZmlyc3RQZXJzb25QbHVnaW46IFZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luO1xuICBwdWJsaWMgcmVhZG9ubHkgaHVtYW5vaWRQbHVnaW46IFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luO1xuICBwdWJsaWMgcmVhZG9ubHkgbG9va0F0UGx1Z2luOiBWUk1Mb29rQXRMb2FkZXJQbHVnaW47XG4gIHB1YmxpYyByZWFkb25seSBtZXRhUGx1Z2luOiBWUk1NZXRhTG9hZGVyUGx1Z2luO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIsIG9wdGlvbnM/OiBWUk1Db3JlTG9hZGVyUGx1Z2luT3B0aW9ucykge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgY29uc3QgaGVscGVyUm9vdCA9IG9wdGlvbnM/LmhlbHBlclJvb3Q7XG4gICAgY29uc3QgYXV0b1VwZGF0ZUh1bWFuQm9uZXMgPSBvcHRpb25zPy5hdXRvVXBkYXRlSHVtYW5Cb25lcztcblxuICAgIHRoaXMuZXhwcmVzc2lvblBsdWdpbiA9IG9wdGlvbnM/LmV4cHJlc3Npb25QbHVnaW4gPz8gbmV3IFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4ocGFyc2VyKTtcbiAgICB0aGlzLmZpcnN0UGVyc29uUGx1Z2luID0gb3B0aW9ucz8uZmlyc3RQZXJzb25QbHVnaW4gPz8gbmV3IFZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luKHBhcnNlcik7XG4gICAgdGhpcy5odW1hbm9pZFBsdWdpbiA9XG4gICAgICBvcHRpb25zPy5odW1hbm9pZFBsdWdpbiA/PyBuZXcgVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW4ocGFyc2VyLCB7IGhlbHBlclJvb3QsIGF1dG9VcGRhdGVIdW1hbkJvbmVzIH0pO1xuICAgIHRoaXMubG9va0F0UGx1Z2luID0gb3B0aW9ucz8ubG9va0F0UGx1Z2luID8/IG5ldyBWUk1Mb29rQXRMb2FkZXJQbHVnaW4ocGFyc2VyLCB7IGhlbHBlclJvb3QgfSk7XG4gICAgdGhpcy5tZXRhUGx1Z2luID0gb3B0aW9ucz8ubWV0YVBsdWdpbiA/PyBuZXcgVlJNTWV0YUxvYWRlclBsdWdpbihwYXJzZXIpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFmdGVyUm9vdChnbHRmOiBHTFRGKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5tZXRhUGx1Z2luLmFmdGVyUm9vdChnbHRmKTtcbiAgICBhd2FpdCB0aGlzLmh1bWFub2lkUGx1Z2luLmFmdGVyUm9vdChnbHRmKTtcbiAgICBhd2FpdCB0aGlzLmV4cHJlc3Npb25QbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuICAgIGF3YWl0IHRoaXMubG9va0F0UGx1Z2luLmFmdGVyUm9vdChnbHRmKTtcbiAgICBhd2FpdCB0aGlzLmZpcnN0UGVyc29uUGx1Z2luLmFmdGVyUm9vdChnbHRmKTtcblxuICAgIGNvbnN0IG1ldGEgPSBnbHRmLnVzZXJEYXRhLnZybU1ldGEgYXMgVlJNTWV0YSB8IG51bGw7XG4gICAgY29uc3QgaHVtYW5vaWQgPSBnbHRmLnVzZXJEYXRhLnZybUh1bWFub2lkIGFzIFZSTUh1bWFub2lkIHwgbnVsbDtcblxuICAgIC8vIG1ldGEgYW5kIGh1bWFub2lkIGFyZSByZXF1aXJlZCB0byBiZSBhIFZSTS5cbiAgICAvLyBEb24ndCBjcmVhdGUgVlJNIGlmIHRoZXkgYXJlIG51bGxcbiAgICBpZiAobWV0YSAmJiBodW1hbm9pZCkge1xuICAgICAgY29uc3QgdnJtQ29yZSA9IG5ldyBWUk1Db3JlKHtcbiAgICAgICAgc2NlbmU6IGdsdGYuc2NlbmUsXG4gICAgICAgIGV4cHJlc3Npb25NYW5hZ2VyOiBnbHRmLnVzZXJEYXRhLnZybUV4cHJlc3Npb25NYW5hZ2VyLFxuICAgICAgICBmaXJzdFBlcnNvbjogZ2x0Zi51c2VyRGF0YS52cm1GaXJzdFBlcnNvbixcbiAgICAgICAgaHVtYW5vaWQsXG4gICAgICAgIGxvb2tBdDogZ2x0Zi51c2VyRGF0YS52cm1Mb29rQXQsXG4gICAgICAgIG1ldGEsXG4gICAgICB9KTtcblxuICAgICAgZ2x0Zi51c2VyRGF0YS52cm1Db3JlID0gdnJtQ29yZTtcbiAgICB9XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLFlBQXVCO0FBT2hCLElBQU0sZ0JBQU4sY0FBa0MsZUFBUztBQUFB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QUFJO0FBRWxELFlBQU0sUUFBUSxLQUFLLElBQUksS0FBSyxLQUFLLEdBQUcsRUFBRSxPQUFPLElBQUk7QUFDakQsV0FBSyxPQUFPLEtBQUssS0FBSyxLQUFLLFdBQVcsRUFBRSxNQUFNLEtBQUs7QUFBQSxJQUNyRCxDQUFDO0FBRUQsVUFBTSxrQkFBa0IsS0FBSztBQUFBLEVBQy9CO0FBQ0Y7OztBQzdDTyxJQUFNLG1CQUF1QztBQUFBLEVBQ2xEO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBRUE7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBRUE7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7OztBQy9ETyxJQUFNLG1CQUFtQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQSxFQUVOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLEtBQUs7QUFB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b0JBQW9CLE1BQU07QUFBQSxFQUN6RTtBQUFBLEVBRWEsVUFBVSxNQUEyQjtBQUFBO0FBQ2hELFlBQU0sS0FBSyxXQUFXLFVBQVUsSUFBSTtBQUNwQyxZQUFNLEtBQUssZUFBZSxVQUFVLElBQUk7QUFDeEMsWUFBTSxLQUFLLGlCQUFpQixVQUFVLElBQUk7QUFDMUMsWUFBTSxLQUFLLGFBQWEsVUFBVSxJQUFJO0FBQ3RDLFlBQU0sS0FBSyxrQkFBa0IsVUFBVSxJQUFJO0FBRTNDLFlBQU0sT0FBTyxLQUFLLFNBQVM7QUFDM0IsWUFBTSxXQUFXLEtBQUssU0FBUztBQUkvQixVQUFJLFFBQVEsVUFBVTtBQUNwQixjQUFNLFVBQVUsSUFBSSxRQUFRO0FBQUEsVUFDMUIsT0FBTyxLQUFLO0FBQUEsVUFDWixtQkFBbUIsS0FBSyxTQUFTO0FBQUEsVUFDakMsYUFBYSxLQUFLLFNBQVM7QUFBQSxVQUMzQjtBQUFBLFVBQ0EsUUFBUSxLQUFLLFNBQVM7QUFBQSxVQUN0QjtBQUFBLFFBQ0YsQ0FBQztBQUVELGFBQUssU0FBUyxVQUFVO0FBQUEsTUFDMUI7QUFBQSxJQUNGO0FBQUE7QUFDRjsiLAogICJuYW1lcyI6IFsiVEhSRUUiLCAiVEhSRUUiLCAiVEhSRUUiLCAiX2EiLCAiX2EiLCAiX2IiLCAiVEhSRUUiLCAiUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyIsICJfYSIsICJfYiIsICJUSFJFRSIsICJUSFJFRSIsICJfdjNBIiwgIl9xdWF0QSIsICJUSFJFRSIsICJfdjNBIiwgIl9xdWF0QSIsICJQT1NTSUJMRV9TUEVDX1ZFUlNJT05TIiwgIlRIUkVFIiwgIlRIUkVFIiwgIlRIUkVFIiwgIl9xdWF0QSIsICJfdjNBIiwgIl92M0IiLCAiVEhSRUUiLCAiVEhSRUUiLCAiX3YzQSIsICJfdjNCIiwgIl9xdWF0QSIsICJfcXVhdEIiLCAiVEhSRUUiLCAiVkVDM19QT1NJVElWRV9aIiwgIl9xdWF0QSIsICJfcXVhdEIiLCAiX2V1bGVyQSIsICJUSFJFRSIsICJQT1NTSUJMRV9TUEVDX1ZFUlNJT05TIiwgIlRIUkVFIiwgIlBPU1NJQkxFX1NQRUNfVkVSU0lPTlMiXQp9Cg==
