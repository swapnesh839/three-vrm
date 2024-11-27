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
  MToonMaterial: () => MToonMaterial,
  MToonMaterialDebugMode: () => MToonMaterialDebugMode,
  MToonMaterialLoaderPlugin: () => MToonMaterialLoaderPlugin,
  MToonMaterialOutlineWidthMode: () => MToonMaterialOutlineWidthMode,
  VRM: () => VRM,
  VRMAimConstraint: () => VRMAimConstraint,
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
  VRMLoaderPlugin: () => VRMLoaderPlugin,
  VRMLookAt: () => VRMLookAt,
  VRMLookAtBoneApplier: () => VRMLookAtBoneApplier,
  VRMLookAtExpressionApplier: () => VRMLookAtExpressionApplier,
  VRMLookAtHelper: () => VRMLookAtHelper,
  VRMLookAtLoaderPlugin: () => VRMLookAtLoaderPlugin,
  VRMLookAtRangeMap: () => VRMLookAtRangeMap,
  VRMLookAtTypeName: () => VRMLookAtTypeName,
  VRMMetaLoaderPlugin: () => VRMMetaLoaderPlugin,
  VRMNodeConstraint: () => VRMNodeConstraint,
  VRMNodeConstraintHelper: () => VRMNodeConstraintHelper,
  VRMNodeConstraintLoaderPlugin: () => VRMNodeConstraintLoaderPlugin,
  VRMNodeConstraintManager: () => VRMNodeConstraintManager,
  VRMRequiredHumanBoneName: () => VRMRequiredHumanBoneName,
  VRMRollConstraint: () => VRMRollConstraint,
  VRMRotationConstraint: () => VRMRotationConstraint,
  VRMSpringBoneCollider: () => VRMSpringBoneCollider,
  VRMSpringBoneColliderHelper: () => VRMSpringBoneColliderHelper,
  VRMSpringBoneColliderShape: () => VRMSpringBoneColliderShape,
  VRMSpringBoneColliderShapeCapsule: () => VRMSpringBoneColliderShapeCapsule,
  VRMSpringBoneColliderShapePlane: () => VRMSpringBoneColliderShapePlane,
  VRMSpringBoneColliderShapeSphere: () => VRMSpringBoneColliderShapeSphere,
  VRMSpringBoneJoint: () => VRMSpringBoneJoint,
  VRMSpringBoneJointHelper: () => VRMSpringBoneJointHelper,
  VRMSpringBoneLoaderPlugin: () => VRMSpringBoneLoaderPlugin,
  VRMSpringBoneManager: () => VRMSpringBoneManager,
  VRMUtils: () => VRMUtils
});
module.exports = __toCommonJS(src_exports);

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
function gltfExtractPrimitivesFromNodes(gltf) {
  return __async2(this, null, function* () {
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
var VRMExpressionLoaderPlugin = _VRMExpressionLoaderPlugin;
var VRMExpressionOverrideType = {
  None: "none",
  Block: "block",
  Blend: "blend"
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
var VRMFirstPerson = _VRMFirstPerson;
var POSSIBLE_SPEC_VERSIONS2 = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
var VRMFirstPersonLoaderPlugin = class {
  get name() {
    return "VRMFirstPersonLoaderPlugin";
  }
  constructor(parser) {
    this.parser = parser;
  }
  afterRoot(gltf) {
    return __async2(this, null, function* () {
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
    return __async2(this, null, function* () {
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
    return __async2(this, null, function* () {
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
var VRMFirstPersonMeshAnnotationType = {
  Auto: "auto",
  Both: "both",
  ThirdPersonOnly: "thirdPersonOnly",
  FirstPersonOnly: "firstPersonOnly"
};
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
    return __async2(this, null, function* () {
      gltf.userData.vrmHumanoid = yield this._import(gltf);
    });
  }
  /**
   * Import a {@link VRMHumanoid} from a VRM.
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
          Object.entries(schemaHumanoid.humanBones).map((_0) => __async2(this, [_0], function* ([boneNameString, schemaHumanBone]) {
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
    return __async2(this, null, function* () {
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
          schemaHumanoid.humanBones.map((bone) => __async2(this, null, function* () {
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
    return __async2(this, null, function* () {
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
    return __async2(this, null, function* () {
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
    return __async2(this, null, function* () {
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
    return __async2(this, null, function* () {
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
var VRMLookAtTypeName = {
  Bone: "bone",
  Expression: "expression"
};
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
    return __async2(this, null, function* () {
      gltf.userData.vrmMeta = yield this._import(gltf);
    });
  }
  _import(gltf) {
    return __async2(this, null, function* () {
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
    return __async2(this, null, function* () {
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
    return __async2(this, null, function* () {
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
    return __async2(this, null, function* () {
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
    return __async2(this, null, function* () {
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

// src/VRM.ts
var VRM = class extends VRMCore {
  /**
   * Create a new VRM instance.
   *
   * @param params [[VRMParameters]] that represents components of the VRM
   */
  constructor(params) {
    super(params);
    this.materials = params.materials;
    this.springBoneManager = params.springBoneManager;
    this.nodeConstraintManager = params.nodeConstraintManager;
  }
  /**
   * **You need to call this on your update loop.**
   *
   * This function updates every VRM components.
   *
   * @param delta deltaTime
   */
  update(delta) {
    super.update(delta);
    if (this.nodeConstraintManager) {
      this.nodeConstraintManager.update();
    }
    if (this.springBoneManager) {
      this.springBoneManager.update(delta);
    }
    if (this.materials) {
      this.materials.forEach((material) => {
        if (material.update) {
          material.update(delta);
        }
      });
    }
  }
};

// ../three-vrm-materials-mtoon/lib/three-vrm-materials-mtoon.module.js
var THREE52 = __toESM(require("three"), 1);
var THREE22 = __toESM(require("three"), 1);
var THREE17 = __toESM(require("three"), 1);
var THREE42 = __toESM(require("three"), 1);
var THREE32 = __toESM(require("three"), 1);
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async3 = (__this, __arguments, generator) => {
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
var colorSpaceEncodingMap = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "": 3e3,
  srgb: 3001
};
function setTextureColorSpace(texture, colorSpace) {
  if (parseInt(THREE17.REVISION, 10) >= 152) {
    texture.colorSpace = colorSpace;
  } else {
    texture.encoding = colorSpaceEncodingMap[colorSpace];
  }
}
var GLTFMToonMaterialParamsAssignHelper = class {
  get pending() {
    return Promise.all(this._pendings);
  }
  constructor(parser, materialParams) {
    this._parser = parser;
    this._materialParams = materialParams;
    this._pendings = [];
  }
  assignPrimitive(key, value) {
    if (value != null) {
      this._materialParams[key] = value;
    }
  }
  assignColor(key, value, convertSRGBToLinear) {
    if (value != null) {
      this._materialParams[key] = new THREE22.Color().fromArray(value);
      if (convertSRGBToLinear) {
        this._materialParams[key].convertSRGBToLinear();
      }
    }
  }
  assignTexture(key, texture, isColorTexture) {
    return __async3(this, null, function* () {
      const promise = (() => __async3(this, null, function* () {
        if (texture != null) {
          yield this._parser.assignTexture(this._materialParams, key, texture);
          if (isColorTexture) {
            setTextureColorSpace(this._materialParams[key], "srgb");
          }
        }
      }))();
      this._pendings.push(promise);
      return promise;
    });
  }
  assignTextureByIndex(key, textureIndex, isColorTexture) {
    return __async3(this, null, function* () {
      return this.assignTexture(key, textureIndex != null ? { index: textureIndex } : void 0, isColorTexture);
    });
  }
};
var mtoon_default = "// #define PHONG\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n  varying vec3 vNormal;\n#endif\n\n#include <common>\n\n// #include <uv_pars_vertex>\n#ifdef MTOON_USE_UV\n  varying vec2 vUv;\n\n  // COMPAT: pre-r151 uses a common uvTransform\n  #if THREE_VRM_THREE_REVISION < 151\n    uniform mat3 uvTransform;\n  #endif\n#endif\n\n// #include <uv2_pars_vertex>\n// COMAPT: pre-r151 uses uv2 for lightMap and aoMap\n#if THREE_VRM_THREE_REVISION < 151\n  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n    attribute vec2 uv2;\n    varying vec2 vUv2;\n    uniform mat3 uv2Transform;\n  #endif\n#endif\n\n// #include <displacementmap_pars_vertex>\n// #include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE\n  uniform sampler2D outlineWidthMultiplyTexture;\n  uniform mat3 outlineWidthMultiplyTextureUvTransform;\n#endif\n\nuniform float outlineWidthFactor;\n\nvoid main() {\n\n  // #include <uv_vertex>\n  #ifdef MTOON_USE_UV\n    // COMPAT: pre-r151 uses a common uvTransform\n    #if THREE_VRM_THREE_REVISION >= 151\n      vUv = uv;\n    #else\n      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n    #endif\n  #endif\n\n  // #include <uv2_vertex>\n  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap\n  #if THREE_VRM_THREE_REVISION < 151\n    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n    #endif\n  #endif\n\n  #include <color_vertex>\n\n  #include <beginnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinbase_vertex>\n  #include <skinnormal_vertex>\n\n  // we need this to compute the outline properly\n  objectNormal = normalize( objectNormal );\n\n  #include <defaultnormal_vertex>\n\n  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n    vNormal = normalize( transformedNormal );\n  #endif\n\n  #include <begin_vertex>\n\n  #include <morphtarget_vertex>\n  #include <skinning_vertex>\n  // #include <displacementmap_vertex>\n  #include <project_vertex>\n  #include <logdepthbuf_vertex>\n  #include <clipping_planes_vertex>\n\n  vViewPosition = - mvPosition.xyz;\n\n  #ifdef OUTLINE\n    float worldNormalLength = length( transformedNormal );\n    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;\n\n    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE\n      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;\n      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;\n      outlineOffset *= outlineTex;\n    #endif\n\n    #ifdef OUTLINE_WIDTH_SCREEN\n      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;\n    #endif\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );\n\n    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic\n  #endif\n\n  #include <worldpos_vertex>\n  // #include <envmap_vertex>\n  #include <shadowmap_vertex>\n  #include <fog_vertex>\n\n}";
var mtoon_default2 = "// #define PHONG\n\nuniform vec3 litFactor;\n\nuniform float opacity;\n\nuniform vec3 shadeColorFactor;\n#ifdef USE_SHADEMULTIPLYTEXTURE\n  uniform sampler2D shadeMultiplyTexture;\n  uniform mat3 shadeMultiplyTextureUvTransform;\n#endif\n\nuniform float shadingShiftFactor;\nuniform float shadingToonyFactor;\n\n#ifdef USE_SHADINGSHIFTTEXTURE\n  uniform sampler2D shadingShiftTexture;\n  uniform mat3 shadingShiftTextureUvTransform;\n  uniform float shadingShiftTextureScale;\n#endif\n\nuniform float giEqualizationFactor;\n\nuniform vec3 parametricRimColorFactor;\n#ifdef USE_RIMMULTIPLYTEXTURE\n  uniform sampler2D rimMultiplyTexture;\n  uniform mat3 rimMultiplyTextureUvTransform;\n#endif\nuniform float rimLightingMixFactor;\nuniform float parametricRimFresnelPowerFactor;\nuniform float parametricRimLiftFactor;\n\n#ifdef USE_MATCAPTEXTURE\n  uniform vec3 matcapFactor;\n  uniform sampler2D matcapTexture;\n  uniform mat3 matcapTextureUvTransform;\n#endif\n\nuniform vec3 emissive;\nuniform float emissiveIntensity;\n\nuniform vec3 outlineColorFactor;\nuniform float outlineLightingMixFactor;\n\n#ifdef USE_UVANIMATIONMASKTEXTURE\n  uniform sampler2D uvAnimationMaskTexture;\n  uniform mat3 uvAnimationMaskTextureUvTransform;\n#endif\n\nuniform float uvAnimationScrollXOffset;\nuniform float uvAnimationScrollYOffset;\nuniform float uvAnimationRotationPhase;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n\n// #include <uv_pars_fragment>\n#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )\n  varying vec2 vUv;\n#endif\n\n// #include <uv2_pars_fragment>\n// COMAPT: pre-r151 uses uv2 for lightMap and aoMap\n#if THREE_VRM_THREE_REVISION < 151\n  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n    varying vec2 vUv2;\n  #endif\n#endif\n\n#include <map_pars_fragment>\n\n#ifdef USE_MAP\n  uniform mat3 mapUvTransform;\n#endif\n\n// #include <alphamap_pars_fragment>\n\n#include <alphatest_pars_fragment>\n\n#include <aomap_pars_fragment>\n// #include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n\n#ifdef USE_EMISSIVEMAP\n  uniform mat3 emissiveMapUvTransform;\n#endif\n\n// #include <envmap_common_pars_fragment>\n// #include <envmap_pars_fragment>\n// #include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n\n// #include <bsdfs>\n// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>\n#if THREE_VRM_THREE_REVISION < 151\n  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n    return RECIPROCAL_PI * diffuseColor;\n  }\n#endif\n\n#include <lights_pars_begin>\n\n#include <normal_pars_fragment>\n\n// #include <lights_phong_pars_fragment>\nvarying vec3 vViewPosition;\n\nstruct MToonMaterial {\n  vec3 diffuseColor;\n  vec3 shadeColor;\n  float shadingShift;\n};\n\nfloat linearstep( float a, float b, float t ) {\n  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );\n}\n\n/**\n * Convert NdotL into toon shading factor using shadingShift and shadingToony\n */\nfloat getShading(\n  const in float dotNL,\n  const in float shadow,\n  const in float shadingShift\n) {\n  float shading = dotNL;\n  shading = shading + shadingShift;\n  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );\n  shading *= shadow;\n  return shading;\n}\n\n/**\n * Mix diffuseColor and shadeColor using shading factor and light color\n */\nvec3 getDiffuse(\n  const in MToonMaterial material,\n  const in float shading,\n  in vec3 lightColor\n) {\n  #ifdef DEBUG_LITSHADERATE\n    return vec3( BRDF_Lambert( shading * lightColor ) );\n  #endif\n\n  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );\n\n  // The \"comment out if you want to PBR absolutely\" line\n  #ifdef V0_COMPAT_SHADE\n    col = min( col, material.diffuseColor );\n  #endif\n\n  return col;\n}\n\n// COMPAT: pre-r156 uses a struct GeometricContext\n#if THREE_VRM_THREE_REVISION >= 157\n  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {\n    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );\n    vec3 irradiance = directLight.color;\n\n    // directSpecular will be used for rim lighting, not an actual specular\n    reflectedLight.directSpecular += irradiance;\n\n    irradiance *= dotNL;\n\n    float shading = getShading( dotNL, shadow, material.shadingShift );\n\n    // toon shaded diffuse\n    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );\n  }\n\n  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {\n    // indirect diffuse will use diffuseColor, no shadeColor involved\n    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n    // directSpecular will be used for rim lighting, not an actual specular\n    reflectedLight.directSpecular += irradiance;\n  }\n#else\n  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {\n    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );\n    vec3 irradiance = directLight.color;\n\n    // directSpecular will be used for rim lighting, not an actual specular\n    reflectedLight.directSpecular += irradiance;\n\n    irradiance *= dotNL;\n\n    float shading = getShading( dotNL, shadow, material.shadingShift );\n\n    // toon shaded diffuse\n    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );\n  }\n\n  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {\n    // indirect diffuse will use diffuseColor, no shadeColor involved\n    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n    // directSpecular will be used for rim lighting, not an actual specular\n    reflectedLight.directSpecular += irradiance;\n  }\n#endif\n\n#define RE_Direct RE_Direct_MToon\n#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon\n#define Material_LightProbeLOD( material ) (0)\n\n#include <shadowmap_pars_fragment>\n// #include <bumpmap_pars_fragment>\n\n// #include <normalmap_pars_fragment>\n#ifdef USE_NORMALMAP\n\n  uniform sampler2D normalMap;\n  uniform mat3 normalMapUvTransform;\n  uniform vec2 normalScale;\n\n#endif\n\n// COMPAT: pre-r151\n// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151\n#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )\n\n  uniform mat3 normalMatrix;\n\n#endif\n\n// COMPAT: pre-r151\n// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )\n\n  // Per-Pixel Tangent Space Normal Mapping\n  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n  // three-vrm specific change: it requires `uv` as an input in order to support uv scrolls\n\n  // Temporary compat against shader change @ Three.js r126, r151\n  #if THREE_VRM_THREE_REVISION >= 151\n\n    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\n      vec3 q0 = dFdx( eye_pos.xyz );\n      vec3 q1 = dFdy( eye_pos.xyz );\n      vec2 st0 = dFdx( uv.st );\n      vec2 st1 = dFdy( uv.st );\n\n      vec3 N = surf_norm;\n\n      vec3 q1perp = cross( q1, N );\n      vec3 q0perp = cross( N, q0 );\n\n      vec3 T = q1perp * st0.x + q0perp * st1.x;\n      vec3 B = q1perp * st0.y + q0perp * st1.y;\n\n      float det = max( dot( T, T ), dot( B, B ) );\n      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\n      return mat3( T * scale, B * scale, N );\n\n    }\n\n  #else\n\n    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\n      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n      vec2 st0 = dFdx( uv.st );\n      vec2 st1 = dFdy( uv.st );\n\n      vec3 N = normalize( surf_norm );\n\n      vec3 q1perp = cross( q1, N );\n      vec3 q0perp = cross( N, q0 );\n\n      vec3 T = q1perp * st0.x + q0perp * st1.x;\n      vec3 B = q1perp * st0.y + q0perp * st1.y;\n\n      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0\n      // TODO: Is this still required? Or shall I make a PR about it?\n      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {\n        return surf_norm;\n      }\n\n      float det = max( dot( T, T ), dot( B, B ) );\n      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\n      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\n    }\n\n  #endif\n\n#endif\n\n// #include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\n// == post correction ==========================================================\nvoid postCorrection() {\n  #include <tonemapping_fragment>\n  #include <colorspace_fragment>\n  #include <fog_fragment>\n  #include <premultiplied_alpha_fragment>\n  #include <dithering_fragment>\n}\n\n// == main procedure ===========================================================\nvoid main() {\n  #include <clipping_planes_fragment>\n\n  vec2 uv = vec2(0.5, 0.5);\n\n  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )\n    uv = vUv;\n\n    float uvAnimMask = 1.0;\n    #ifdef USE_UVANIMATIONMASKTEXTURE\n      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;\n      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;\n    #endif\n\n    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );\n    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );\n    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;\n    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;\n  #endif\n\n  #ifdef DEBUG_UV\n    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )\n      gl_FragColor = vec4( uv, 0.0, 1.0 );\n    #endif\n    return;\n  #endif\n\n  vec4 diffuseColor = vec4( litFactor, opacity );\n  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;\n\n  #include <logdepthbuf_fragment>\n\n  // #include <map_fragment>\n  #ifdef USE_MAP\n    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;\n    vec4 sampledDiffuseColor = texture2D( map, mapUv );\n    #ifdef DECODE_VIDEO_TEXTURE\n      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n    #endif\n    diffuseColor *= sampledDiffuseColor;\n  #endif\n\n  // #include <color_fragment>\n  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )\n    diffuseColor.rgb *= vColor;\n  #endif\n\n  // #include <alphamap_fragment>\n\n  #include <alphatest_fragment>\n\n  // #include <specularmap_fragment>\n\n  // #include <normal_fragment_begin>\n  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;\n\n  #ifdef FLAT_SHADED\n\n    vec3 fdx = dFdx( vViewPosition );\n    vec3 fdy = dFdy( vViewPosition );\n    vec3 normal = normalize( cross( fdx, fdy ) );\n\n  #else\n\n    vec3 normal = normalize( vNormal );\n\n    #ifdef DOUBLE_SIDED\n\n      normal *= faceDirection;\n\n    #endif\n\n  #endif\n\n  #ifdef USE_NORMALMAP\n\n    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;\n\n  #endif\n\n  #ifdef USE_NORMALMAP_TANGENTSPACE\n\n    #ifdef USE_TANGENT\n\n      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\n    #else\n\n      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );\n\n    #endif\n\n    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\n      tbn[0] *= faceDirection;\n      tbn[1] *= faceDirection;\n\n    #endif\n\n  #endif\n\n  #ifdef USE_CLEARCOAT_NORMALMAP\n\n    #ifdef USE_TANGENT\n\n      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\n    #else\n\n      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\n    #endif\n\n    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\n      tbn2[0] *= faceDirection;\n      tbn2[1] *= faceDirection;\n\n    #endif\n\n  #endif\n\n  // non perturbed normal for clearcoat among others\n\n  vec3 nonPerturbedNormal = normal;\n\n  #ifdef OUTLINE\n    normal *= -1.0;\n  #endif\n\n  // #include <normal_fragment_maps>\n\n  // COMPAT: pre-r151\n  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151\n  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )\n\n    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals\n\n    #ifdef FLIP_SIDED\n\n      normal = - normal;\n\n    #endif\n\n    #ifdef DOUBLE_SIDED\n\n      normal = normal * faceDirection;\n\n    #endif\n\n    normal = normalize( normalMatrix * normal );\n\n  // COMPAT: pre-r151\n  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151\n  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )\n\n    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;\n    mapN.xy *= normalScale;\n\n    // COMPAT: pre-r151\n    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )\n\n      normal = normalize( tbn * mapN );\n\n    #else\n\n      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );\n\n    #endif\n\n  #endif\n\n  // #include <emissivemap_fragment>\n  #ifdef USE_EMISSIVEMAP\n    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;\n    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;\n  #endif\n\n  #ifdef DEBUG_NORMAL\n    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );\n    return;\n  #endif\n\n  // -- MToon: lighting --------------------------------------------------------\n  // accumulation\n  // #include <lights_phong_fragment>\n  MToonMaterial material;\n\n  material.diffuseColor = diffuseColor.rgb;\n\n  material.shadeColor = shadeColorFactor;\n  #ifdef USE_SHADEMULTIPLYTEXTURE\n    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;\n    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;\n  #endif\n\n  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )\n    material.shadeColor.rgb *= vColor;\n  #endif\n\n  material.shadingShift = shadingShiftFactor;\n  #ifdef USE_SHADINGSHIFTTEXTURE\n    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;\n    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;\n  #endif\n\n  // #include <lights_fragment_begin>\n\n  // MToon Specific changes:\n  // Since we want to take shadows into account of shading instead of irradiance,\n  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.\n\n  // COMPAT: pre-r156 uses a struct GeometricContext\n  #if THREE_VRM_THREE_REVISION >= 157\n    vec3 geometryPosition = - vViewPosition;\n    vec3 geometryNormal = normal;\n    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n    vec3 geometryClearcoatNormal;\n\n    #ifdef USE_CLEARCOAT\n\n      geometryClearcoatNormal = clearcoatNormal;\n\n    #endif\n  #else\n    GeometricContext geometry;\n\n    geometry.position = - vViewPosition;\n    geometry.normal = normal;\n    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n    #ifdef USE_CLEARCOAT\n\n      geometry.clearcoatNormal = clearcoatNormal;\n\n    #endif\n  #endif\n\n  IncidentLight directLight;\n\n  // since these variables will be used in unrolled loop, we have to define in prior\n  float shadow;\n\n  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n    PointLight pointLight;\n    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n    PointLightShadow pointLightShadow;\n    #endif\n\n    #pragma unroll_loop_start\n    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n      pointLight = pointLights[ i ];\n\n      // COMPAT: pre-r156 uses a struct GeometricContext\n      #if THREE_VRM_THREE_REVISION >= 157\n        getPointLightInfo( pointLight, geometryPosition, directLight );\n      #else\n        getPointLightInfo( pointLight, geometry, directLight );\n      #endif\n\n      shadow = 1.0;\n      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n      pointLightShadow = pointLightShadows[ i ];\n      // COMPAT: pre-r166\n      // r166 introduced shadowIntensity\n      #if THREE_VRM_THREE_REVISION >= 166\n        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n      #else\n        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n      #endif\n      #endif\n\n      // COMPAT: pre-r156 uses a struct GeometricContext\n      #if THREE_VRM_THREE_REVISION >= 157\n        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );\n      #else\n        RE_Direct( directLight, geometry, material, shadow, reflectedLight );\n      #endif\n\n    }\n    #pragma unroll_loop_end\n\n  #endif\n\n  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n    SpotLight spotLight;\n    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n    SpotLightShadow spotLightShadow;\n    #endif\n\n    #pragma unroll_loop_start\n    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n      spotLight = spotLights[ i ];\n\n      // COMPAT: pre-r156 uses a struct GeometricContext\n      #if THREE_VRM_THREE_REVISION >= 157\n        getSpotLightInfo( spotLight, geometryPosition, directLight );\n      #else\n        getSpotLightInfo( spotLight, geometry, directLight );\n      #endif\n\n      shadow = 1.0;\n      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n      spotLightShadow = spotLightShadows[ i ];\n      // COMPAT: pre-r166\n      // r166 introduced shadowIntensity\n      #if THREE_VRM_THREE_REVISION >= 166\n        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n      #else\n        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n      #endif\n      #endif\n\n      // COMPAT: pre-r156 uses a struct GeometricContext\n      #if THREE_VRM_THREE_REVISION >= 157\n        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );\n      #else\n        RE_Direct( directLight, geometry, material, shadow, reflectedLight );\n      #endif\n\n    }\n    #pragma unroll_loop_end\n\n  #endif\n\n  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n    DirectionalLight directionalLight;\n    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n    DirectionalLightShadow directionalLightShadow;\n    #endif\n\n    #pragma unroll_loop_start\n    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n      directionalLight = directionalLights[ i ];\n\n      // COMPAT: pre-r156 uses a struct GeometricContext\n      #if THREE_VRM_THREE_REVISION >= 157\n        getDirectionalLightInfo( directionalLight, directLight );\n      #else\n        getDirectionalLightInfo( directionalLight, geometry, directLight );\n      #endif\n\n      shadow = 1.0;\n      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n      directionalLightShadow = directionalLightShadows[ i ];\n      // COMPAT: pre-r166\n      // r166 introduced shadowIntensity\n      #if THREE_VRM_THREE_REVISION >= 166\n        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n      #else\n        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n      #endif\n      #endif\n\n      // COMPAT: pre-r156 uses a struct GeometricContext\n      #if THREE_VRM_THREE_REVISION >= 157\n        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );\n      #else\n        RE_Direct( directLight, geometry, material, shadow, reflectedLight );\n      #endif\n\n    }\n    #pragma unroll_loop_end\n\n  #endif\n\n  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n  //   RectAreaLight rectAreaLight;\n\n  //   #pragma unroll_loop_start\n  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n  //     rectAreaLight = rectAreaLights[ i ];\n  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n  //   }\n  //   #pragma unroll_loop_end\n\n  // #endif\n\n  #if defined( RE_IndirectDiffuse )\n\n    vec3 iblIrradiance = vec3( 0.0 );\n\n    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n    // COMPAT: pre-r156 uses a struct GeometricContext\n    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES\n    #if THREE_VRM_THREE_REVISION >= 157\n      #if defined( USE_LIGHT_PROBES )\n        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n      #endif\n    #else\n      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n    #endif\n\n    #if ( NUM_HEMI_LIGHTS > 0 )\n\n      #pragma unroll_loop_start\n      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n        // COMPAT: pre-r156 uses a struct GeometricContext\n        #if THREE_VRM_THREE_REVISION >= 157\n          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n        #else\n          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n        #endif\n\n      }\n      #pragma unroll_loop_end\n\n    #endif\n\n  #endif\n\n  // #if defined( RE_IndirectSpecular )\n\n  //   vec3 radiance = vec3( 0.0 );\n  //   vec3 clearcoatRadiance = vec3( 0.0 );\n\n  // #endif\n\n  #include <lights_fragment_maps>\n  #include <lights_fragment_end>\n\n  // modulation\n  #include <aomap_fragment>\n\n  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\n  #ifdef DEBUG_LITSHADERATE\n    gl_FragColor = vec4( col, diffuseColor.a );\n    postCorrection();\n    return;\n  #endif\n\n  // -- MToon: rim lighting -----------------------------------------\n  vec3 viewDir = normalize( vViewPosition );\n\n  #ifndef PHYSICALLY_CORRECT_LIGHTS\n    reflectedLight.directSpecular /= PI;\n  #endif\n  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );\n\n  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );\n\n  #ifdef USE_MATCAPTEXTURE\n    {\n      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );\n      vec3 y = cross( viewDir, x ); // guaranteed to be normalized\n      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );\n      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;\n      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;\n      rim += matcapFactor * matcap;\n    }\n  #endif\n\n  #ifdef USE_RIMMULTIPLYTEXTURE\n    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;\n    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;\n  #endif\n\n  col += rimMix * rim;\n\n  // -- MToon: Emission --------------------------------------------------------\n  col += totalEmissiveRadiance;\n\n  // #include <envmap_fragment>\n\n  // -- Almost done! -----------------------------------------------------------\n  #if defined( OUTLINE )\n    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );\n  #endif\n\n  #ifdef OPAQUE\n    diffuseColor.a = 1.0;\n  #endif\n\n  gl_FragColor = vec4( col, diffuseColor.a );\n  postCorrection();\n}\n";
var MToonMaterialDebugMode = {
  /**
   * Render normally.
   */
  None: "none",
  /**
   * Visualize normals of the surface.
   */
  Normal: "normal",
  /**
   * Visualize lit/shade of the surface.
   */
  LitShadeRate: "litShadeRate",
  /**
   * Visualize UV of the surface.
   */
  UV: "uv"
};
var MToonMaterialOutlineWidthMode = {
  None: "none",
  WorldCoordinates: "worldCoordinates",
  ScreenCoordinates: "screenCoordinates"
};
var encodingColorSpaceMap = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  3e3: "",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  3001: "srgb"
};
function getTextureColorSpace(texture) {
  if (parseInt(THREE32.REVISION, 10) >= 152) {
    return texture.colorSpace;
  } else {
    return encodingColorSpaceMap[texture.encoding];
  }
}
var MToonMaterial = class extends THREE42.ShaderMaterial {
  constructor(parameters = {}) {
    var _a;
    super({ vertexShader: mtoon_default, fragmentShader: mtoon_default2 });
    this.uvAnimationScrollXSpeedFactor = 0;
    this.uvAnimationScrollYSpeedFactor = 0;
    this.uvAnimationRotationSpeedFactor = 0;
    this.fog = true;
    this.normalMapType = THREE42.TangentSpaceNormalMap;
    this._ignoreVertexColor = true;
    this._v0CompatShade = false;
    this._debugMode = MToonMaterialDebugMode.None;
    this._outlineWidthMode = MToonMaterialOutlineWidthMode.None;
    this._isOutline = false;
    if (parameters.transparentWithZWrite) {
      parameters.depthWrite = true;
    }
    delete parameters.transparentWithZWrite;
    parameters.fog = true;
    parameters.lights = true;
    parameters.clipping = true;
    this.uniforms = THREE42.UniformsUtils.merge([
      THREE42.UniformsLib.common,
      // map
      THREE42.UniformsLib.normalmap,
      // normalMap
      THREE42.UniformsLib.emissivemap,
      // emissiveMap
      THREE42.UniformsLib.fog,
      THREE42.UniformsLib.lights,
      {
        litFactor: { value: new THREE42.Color(1, 1, 1) },
        mapUvTransform: { value: new THREE42.Matrix3() },
        colorAlpha: { value: 1 },
        normalMapUvTransform: { value: new THREE42.Matrix3() },
        shadeColorFactor: { value: new THREE42.Color(0, 0, 0) },
        shadeMultiplyTexture: { value: null },
        shadeMultiplyTextureUvTransform: { value: new THREE42.Matrix3() },
        shadingShiftFactor: { value: 0 },
        shadingShiftTexture: { value: null },
        shadingShiftTextureUvTransform: { value: new THREE42.Matrix3() },
        shadingShiftTextureScale: { value: 1 },
        shadingToonyFactor: { value: 0.9 },
        giEqualizationFactor: { value: 0.9 },
        matcapFactor: { value: new THREE42.Color(1, 1, 1) },
        matcapTexture: { value: null },
        matcapTextureUvTransform: { value: new THREE42.Matrix3() },
        parametricRimColorFactor: { value: new THREE42.Color(0, 0, 0) },
        rimMultiplyTexture: { value: null },
        rimMultiplyTextureUvTransform: { value: new THREE42.Matrix3() },
        rimLightingMixFactor: { value: 1 },
        parametricRimFresnelPowerFactor: { value: 5 },
        parametricRimLiftFactor: { value: 0 },
        emissive: { value: new THREE42.Color(0, 0, 0) },
        emissiveIntensity: { value: 1 },
        emissiveMapUvTransform: { value: new THREE42.Matrix3() },
        outlineWidthMultiplyTexture: { value: null },
        outlineWidthMultiplyTextureUvTransform: { value: new THREE42.Matrix3() },
        outlineWidthFactor: { value: 0 },
        outlineColorFactor: { value: new THREE42.Color(0, 0, 0) },
        outlineLightingMixFactor: { value: 1 },
        uvAnimationMaskTexture: { value: null },
        uvAnimationMaskTextureUvTransform: { value: new THREE42.Matrix3() },
        uvAnimationScrollXOffset: { value: 0 },
        uvAnimationScrollYOffset: { value: 0 },
        uvAnimationRotationPhase: { value: 0 }
      },
      (_a = parameters.uniforms) != null ? _a : {}
    ]);
    this.setValues(parameters);
    this._uploadUniformsWorkaround();
    this.customProgramCacheKey = () => [
      ...Object.entries(this._generateDefines()).map(([token, macro]) => `${token}:${macro}`),
      this.matcapTexture ? `matcapTextureColorSpace:${getTextureColorSpace(this.matcapTexture)}` : "",
      this.shadeMultiplyTexture ? `shadeMultiplyTextureColorSpace:${getTextureColorSpace(this.shadeMultiplyTexture)}` : "",
      this.rimMultiplyTexture ? `rimMultiplyTextureColorSpace:${getTextureColorSpace(this.rimMultiplyTexture)}` : ""
    ].join(",");
    this.onBeforeCompile = (shader) => {
      const threeRevision = parseInt(THREE42.REVISION, 10);
      const defines = Object.entries(__spreadValues(__spreadValues({}, this._generateDefines()), this.defines)).filter(([token, macro]) => !!macro).map(([token, macro]) => `#define ${token} ${macro}`).join("\n") + "\n";
      shader.vertexShader = defines + shader.vertexShader;
      shader.fragmentShader = defines + shader.fragmentShader;
      if (threeRevision < 154) {
        shader.fragmentShader = shader.fragmentShader.replace(
          "#include <colorspace_fragment>",
          "#include <encodings_fragment>"
        );
      }
    };
  }
  get color() {
    return this.uniforms.litFactor.value;
  }
  set color(value) {
    this.uniforms.litFactor.value = value;
  }
  get map() {
    return this.uniforms.map.value;
  }
  set map(value) {
    this.uniforms.map.value = value;
  }
  get normalMap() {
    return this.uniforms.normalMap.value;
  }
  set normalMap(value) {
    this.uniforms.normalMap.value = value;
  }
  get normalScale() {
    return this.uniforms.normalScale.value;
  }
  set normalScale(value) {
    this.uniforms.normalScale.value = value;
  }
  get emissive() {
    return this.uniforms.emissive.value;
  }
  set emissive(value) {
    this.uniforms.emissive.value = value;
  }
  get emissiveIntensity() {
    return this.uniforms.emissiveIntensity.value;
  }
  set emissiveIntensity(value) {
    this.uniforms.emissiveIntensity.value = value;
  }
  get emissiveMap() {
    return this.uniforms.emissiveMap.value;
  }
  set emissiveMap(value) {
    this.uniforms.emissiveMap.value = value;
  }
  get shadeColorFactor() {
    return this.uniforms.shadeColorFactor.value;
  }
  set shadeColorFactor(value) {
    this.uniforms.shadeColorFactor.value = value;
  }
  get shadeMultiplyTexture() {
    return this.uniforms.shadeMultiplyTexture.value;
  }
  set shadeMultiplyTexture(value) {
    this.uniforms.shadeMultiplyTexture.value = value;
  }
  get shadingShiftFactor() {
    return this.uniforms.shadingShiftFactor.value;
  }
  set shadingShiftFactor(value) {
    this.uniforms.shadingShiftFactor.value = value;
  }
  get shadingShiftTexture() {
    return this.uniforms.shadingShiftTexture.value;
  }
  set shadingShiftTexture(value) {
    this.uniforms.shadingShiftTexture.value = value;
  }
  get shadingShiftTextureScale() {
    return this.uniforms.shadingShiftTextureScale.value;
  }
  set shadingShiftTextureScale(value) {
    this.uniforms.shadingShiftTextureScale.value = value;
  }
  get shadingToonyFactor() {
    return this.uniforms.shadingToonyFactor.value;
  }
  set shadingToonyFactor(value) {
    this.uniforms.shadingToonyFactor.value = value;
  }
  get giEqualizationFactor() {
    return this.uniforms.giEqualizationFactor.value;
  }
  set giEqualizationFactor(value) {
    this.uniforms.giEqualizationFactor.value = value;
  }
  get matcapFactor() {
    return this.uniforms.matcapFactor.value;
  }
  set matcapFactor(value) {
    this.uniforms.matcapFactor.value = value;
  }
  get matcapTexture() {
    return this.uniforms.matcapTexture.value;
  }
  set matcapTexture(value) {
    this.uniforms.matcapTexture.value = value;
  }
  get parametricRimColorFactor() {
    return this.uniforms.parametricRimColorFactor.value;
  }
  set parametricRimColorFactor(value) {
    this.uniforms.parametricRimColorFactor.value = value;
  }
  get rimMultiplyTexture() {
    return this.uniforms.rimMultiplyTexture.value;
  }
  set rimMultiplyTexture(value) {
    this.uniforms.rimMultiplyTexture.value = value;
  }
  get rimLightingMixFactor() {
    return this.uniforms.rimLightingMixFactor.value;
  }
  set rimLightingMixFactor(value) {
    this.uniforms.rimLightingMixFactor.value = value;
  }
  get parametricRimFresnelPowerFactor() {
    return this.uniforms.parametricRimFresnelPowerFactor.value;
  }
  set parametricRimFresnelPowerFactor(value) {
    this.uniforms.parametricRimFresnelPowerFactor.value = value;
  }
  get parametricRimLiftFactor() {
    return this.uniforms.parametricRimLiftFactor.value;
  }
  set parametricRimLiftFactor(value) {
    this.uniforms.parametricRimLiftFactor.value = value;
  }
  get outlineWidthMultiplyTexture() {
    return this.uniforms.outlineWidthMultiplyTexture.value;
  }
  set outlineWidthMultiplyTexture(value) {
    this.uniforms.outlineWidthMultiplyTexture.value = value;
  }
  get outlineWidthFactor() {
    return this.uniforms.outlineWidthFactor.value;
  }
  set outlineWidthFactor(value) {
    this.uniforms.outlineWidthFactor.value = value;
  }
  get outlineColorFactor() {
    return this.uniforms.outlineColorFactor.value;
  }
  set outlineColorFactor(value) {
    this.uniforms.outlineColorFactor.value = value;
  }
  get outlineLightingMixFactor() {
    return this.uniforms.outlineLightingMixFactor.value;
  }
  set outlineLightingMixFactor(value) {
    this.uniforms.outlineLightingMixFactor.value = value;
  }
  get uvAnimationMaskTexture() {
    return this.uniforms.uvAnimationMaskTexture.value;
  }
  set uvAnimationMaskTexture(value) {
    this.uniforms.uvAnimationMaskTexture.value = value;
  }
  get uvAnimationScrollXOffset() {
    return this.uniforms.uvAnimationScrollXOffset.value;
  }
  set uvAnimationScrollXOffset(value) {
    this.uniforms.uvAnimationScrollXOffset.value = value;
  }
  get uvAnimationScrollYOffset() {
    return this.uniforms.uvAnimationScrollYOffset.value;
  }
  set uvAnimationScrollYOffset(value) {
    this.uniforms.uvAnimationScrollYOffset.value = value;
  }
  get uvAnimationRotationPhase() {
    return this.uniforms.uvAnimationRotationPhase.value;
  }
  set uvAnimationRotationPhase(value) {
    this.uniforms.uvAnimationRotationPhase.value = value;
  }
  /**
   * When this is `true`, vertex colors will be ignored.
   * `true` by default.
   */
  get ignoreVertexColor() {
    return this._ignoreVertexColor;
  }
  set ignoreVertexColor(value) {
    this._ignoreVertexColor = value;
    this.needsUpdate = true;
  }
  /**
   * There is a line of the shader called "comment out if you want to PBR absolutely" in VRM0.0 MToon.
   * When this is true, the material enables the line to make it compatible with the legacy rendering of VRM.
   * Usually not recommended to turn this on.
   * `false` by default.
   */
  get v0CompatShade() {
    return this._v0CompatShade;
  }
  /**
   * There is a line of the shader called "comment out if you want to PBR absolutely" in VRM0.0 MToon.
   * When this is true, the material enables the line to make it compatible with the legacy rendering of VRM.
   * Usually not recommended to turn this on.
   * `false` by default.
   */
  set v0CompatShade(v) {
    this._v0CompatShade = v;
    this.needsUpdate = true;
  }
  /**
   * Debug mode for the material.
   * You can visualize several components for diagnosis using debug mode.
   *
   * See: {@link MToonMaterialDebugMode}
   */
  get debugMode() {
    return this._debugMode;
  }
  /**
   * Debug mode for the material.
   * You can visualize several components for diagnosis using debug mode.
   *
   * See: {@link MToonMaterialDebugMode}
   */
  set debugMode(m) {
    this._debugMode = m;
    this.needsUpdate = true;
  }
  get outlineWidthMode() {
    return this._outlineWidthMode;
  }
  set outlineWidthMode(m) {
    this._outlineWidthMode = m;
    this.needsUpdate = true;
  }
  get isOutline() {
    return this._isOutline;
  }
  set isOutline(b) {
    this._isOutline = b;
    this.needsUpdate = true;
  }
  /**
   * Readonly boolean that indicates this is a [[MToonMaterial]].
   */
  get isMToonMaterial() {
    return true;
  }
  /**
   * Update this material.
   *
   * @param delta deltaTime since last update
   */
  update(delta) {
    this._uploadUniformsWorkaround();
    this._updateUVAnimation(delta);
  }
  copy(source) {
    super.copy(source);
    this.map = source.map;
    this.normalMap = source.normalMap;
    this.emissiveMap = source.emissiveMap;
    this.shadeMultiplyTexture = source.shadeMultiplyTexture;
    this.shadingShiftTexture = source.shadingShiftTexture;
    this.matcapTexture = source.matcapTexture;
    this.rimMultiplyTexture = source.rimMultiplyTexture;
    this.outlineWidthMultiplyTexture = source.outlineWidthMultiplyTexture;
    this.uvAnimationMaskTexture = source.uvAnimationMaskTexture;
    this.normalMapType = source.normalMapType;
    this.uvAnimationScrollXSpeedFactor = source.uvAnimationScrollXSpeedFactor;
    this.uvAnimationScrollYSpeedFactor = source.uvAnimationScrollYSpeedFactor;
    this.uvAnimationRotationSpeedFactor = source.uvAnimationRotationSpeedFactor;
    this.ignoreVertexColor = source.ignoreVertexColor;
    this.v0CompatShade = source.v0CompatShade;
    this.debugMode = source.debugMode;
    this.outlineWidthMode = source.outlineWidthMode;
    this.isOutline = source.isOutline;
    this.needsUpdate = true;
    return this;
  }
  /**
   * Update UV animation state.
   * Intended to be called via {@link update}.
   * @param delta deltaTime
   */
  _updateUVAnimation(delta) {
    this.uniforms.uvAnimationScrollXOffset.value += delta * this.uvAnimationScrollXSpeedFactor;
    this.uniforms.uvAnimationScrollYOffset.value += delta * this.uvAnimationScrollYSpeedFactor;
    this.uniforms.uvAnimationRotationPhase.value += delta * this.uvAnimationRotationSpeedFactor;
    this.uniforms.alphaTest.value = this.alphaTest;
    this.uniformsNeedUpdate = true;
  }
  /**
   * Upload uniforms that need to upload but doesn't automatically because of reasons.
   * Intended to be called via {@link constructor} and {@link update}.
   */
  _uploadUniformsWorkaround() {
    this.uniforms.opacity.value = this.opacity;
    this._updateTextureMatrix(this.uniforms.map, this.uniforms.mapUvTransform);
    this._updateTextureMatrix(this.uniforms.normalMap, this.uniforms.normalMapUvTransform);
    this._updateTextureMatrix(this.uniforms.emissiveMap, this.uniforms.emissiveMapUvTransform);
    this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture, this.uniforms.shadeMultiplyTextureUvTransform);
    this._updateTextureMatrix(this.uniforms.shadingShiftTexture, this.uniforms.shadingShiftTextureUvTransform);
    this._updateTextureMatrix(this.uniforms.matcapTexture, this.uniforms.matcapTextureUvTransform);
    this._updateTextureMatrix(this.uniforms.rimMultiplyTexture, this.uniforms.rimMultiplyTextureUvTransform);
    this._updateTextureMatrix(
      this.uniforms.outlineWidthMultiplyTexture,
      this.uniforms.outlineWidthMultiplyTextureUvTransform
    );
    this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture, this.uniforms.uvAnimationMaskTextureUvTransform);
    this.uniformsNeedUpdate = true;
  }
  /**
   * Returns a map object of preprocessor token and macro of the shader program.
   */
  _generateDefines() {
    const threeRevision = parseInt(THREE42.REVISION, 10);
    const useUvInVert = this.outlineWidthMultiplyTexture !== null;
    const useUvInFrag = this.map !== null || this.normalMap !== null || this.emissiveMap !== null || this.shadeMultiplyTexture !== null || this.shadingShiftTexture !== null || this.rimMultiplyTexture !== null || this.uvAnimationMaskTexture !== null;
    return {
      // Temporary compat against shader change @ Three.js r126
      // See: #21205, #21307, #21299
      THREE_VRM_THREE_REVISION: threeRevision,
      OUTLINE: this._isOutline,
      MTOON_USE_UV: useUvInVert || useUvInFrag,
      // we can't use `USE_UV` , it will be redefined in WebGLProgram.js
      MTOON_UVS_VERTEX_ONLY: useUvInVert && !useUvInFrag,
      V0_COMPAT_SHADE: this._v0CompatShade,
      USE_SHADEMULTIPLYTEXTURE: this.shadeMultiplyTexture !== null,
      USE_SHADINGSHIFTTEXTURE: this.shadingShiftTexture !== null,
      USE_MATCAPTEXTURE: this.matcapTexture !== null,
      USE_RIMMULTIPLYTEXTURE: this.rimMultiplyTexture !== null,
      USE_OUTLINEWIDTHMULTIPLYTEXTURE: this._isOutline && this.outlineWidthMultiplyTexture !== null,
      USE_UVANIMATIONMASKTEXTURE: this.uvAnimationMaskTexture !== null,
      IGNORE_VERTEX_COLOR: this._ignoreVertexColor === true,
      DEBUG_NORMAL: this._debugMode === "normal",
      DEBUG_LITSHADERATE: this._debugMode === "litShadeRate",
      DEBUG_UV: this._debugMode === "uv",
      OUTLINE_WIDTH_SCREEN: this._isOutline && this._outlineWidthMode === MToonMaterialOutlineWidthMode.ScreenCoordinates
    };
  }
  _updateTextureMatrix(src, dst) {
    if (src.value) {
      if (src.value.matrixAutoUpdate) {
        src.value.updateMatrix();
      }
      dst.value.copy(src.value.matrix);
    }
  }
};
var POSSIBLE_SPEC_VERSIONS6 = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
var _MToonMaterialLoaderPlugin = class _MToonMaterialLoaderPlugin2 {
  get name() {
    return _MToonMaterialLoaderPlugin2.EXTENSION_NAME;
  }
  constructor(parser, options = {}) {
    var _a, _b, _c, _d;
    this.parser = parser;
    this.materialType = (_a = options.materialType) != null ? _a : MToonMaterial;
    this.renderOrderOffset = (_b = options.renderOrderOffset) != null ? _b : 0;
    this.v0CompatShade = (_c = options.v0CompatShade) != null ? _c : false;
    this.debugMode = (_d = options.debugMode) != null ? _d : "none";
    this._mToonMaterialSet = /* @__PURE__ */ new Set();
  }
  beforeRoot() {
    return __async3(this, null, function* () {
      this._removeUnlitExtensionIfMToonExists();
    });
  }
  afterRoot(gltf) {
    return __async3(this, null, function* () {
      gltf.userData.vrmMToonMaterials = Array.from(this._mToonMaterialSet);
    });
  }
  getMaterialType(materialIndex) {
    const v1Extension = this._getMToonExtension(materialIndex);
    if (v1Extension) {
      return this.materialType;
    }
    return null;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const extension = this._getMToonExtension(materialIndex);
    if (extension) {
      return this._extendMaterialParams(extension, materialParams);
    }
    return null;
  }
  loadMesh(meshIndex) {
    return __async3(this, null, function* () {
      var _a;
      const parser = this.parser;
      const json = parser.json;
      const meshDef = (_a = json.meshes) == null ? void 0 : _a[meshIndex];
      if (meshDef == null) {
        throw new Error(
          `MToonMaterialLoaderPlugin: Attempt to use meshes[${meshIndex}] of glTF but the mesh doesn't exist`
        );
      }
      const primitivesDef = meshDef.primitives;
      const meshOrGroup = yield parser.loadMesh(meshIndex);
      if (primitivesDef.length === 1) {
        const mesh = meshOrGroup;
        const materialIndex = primitivesDef[0].material;
        if (materialIndex != null) {
          this._setupPrimitive(mesh, materialIndex);
        }
      } else {
        const group = meshOrGroup;
        for (let i = 0; i < primitivesDef.length; i++) {
          const mesh = group.children[i];
          const materialIndex = primitivesDef[i].material;
          if (materialIndex != null) {
            this._setupPrimitive(mesh, materialIndex);
          }
        }
      }
      return meshOrGroup;
    });
  }
  /**
   * Delete use of `KHR_materials_unlit` from its `materials` if the material is using MToon.
   *
   * Since GLTFLoader have so many hardcoded procedure related to `KHR_materials_unlit`
   * we have to delete the extension before we start to parse the glTF.
   */
  _removeUnlitExtensionIfMToonExists() {
    const parser = this.parser;
    const json = parser.json;
    const materialDefs = json.materials;
    materialDefs == null ? void 0 : materialDefs.map((materialDef, iMaterial) => {
      var _a;
      const extension = this._getMToonExtension(iMaterial);
      if (extension && ((_a = materialDef.extensions) == null ? void 0 : _a["KHR_materials_unlit"])) {
        delete materialDef.extensions["KHR_materials_unlit"];
      }
    });
  }
  _getMToonExtension(materialIndex) {
    var _a, _b;
    const parser = this.parser;
    const json = parser.json;
    const materialDef = (_a = json.materials) == null ? void 0 : _a[materialIndex];
    if (materialDef == null) {
      console.warn(
        `MToonMaterialLoaderPlugin: Attempt to use materials[${materialIndex}] of glTF but the material doesn't exist`
      );
      return void 0;
    }
    const extension = (_b = materialDef.extensions) == null ? void 0 : _b[_MToonMaterialLoaderPlugin2.EXTENSION_NAME];
    if (extension == null) {
      return void 0;
    }
    const specVersion = extension.specVersion;
    if (!POSSIBLE_SPEC_VERSIONS6.has(specVersion)) {
      console.warn(
        `MToonMaterialLoaderPlugin: Unknown ${_MToonMaterialLoaderPlugin2.EXTENSION_NAME} specVersion "${specVersion}"`
      );
      return void 0;
    }
    return extension;
  }
  _extendMaterialParams(extension, materialParams) {
    return __async3(this, null, function* () {
      var _a;
      delete materialParams.metalness;
      delete materialParams.roughness;
      const assignHelper = new GLTFMToonMaterialParamsAssignHelper(this.parser, materialParams);
      assignHelper.assignPrimitive("transparentWithZWrite", extension.transparentWithZWrite);
      assignHelper.assignColor("shadeColorFactor", extension.shadeColorFactor);
      assignHelper.assignTexture("shadeMultiplyTexture", extension.shadeMultiplyTexture, true);
      assignHelper.assignPrimitive("shadingShiftFactor", extension.shadingShiftFactor);
      assignHelper.assignTexture("shadingShiftTexture", extension.shadingShiftTexture, true);
      assignHelper.assignPrimitive("shadingShiftTextureScale", (_a = extension.shadingShiftTexture) == null ? void 0 : _a.scale);
      assignHelper.assignPrimitive("shadingToonyFactor", extension.shadingToonyFactor);
      assignHelper.assignPrimitive("giEqualizationFactor", extension.giEqualizationFactor);
      assignHelper.assignColor("matcapFactor", extension.matcapFactor);
      assignHelper.assignTexture("matcapTexture", extension.matcapTexture, true);
      assignHelper.assignColor("parametricRimColorFactor", extension.parametricRimColorFactor);
      assignHelper.assignTexture("rimMultiplyTexture", extension.rimMultiplyTexture, true);
      assignHelper.assignPrimitive("rimLightingMixFactor", extension.rimLightingMixFactor);
      assignHelper.assignPrimitive("parametricRimFresnelPowerFactor", extension.parametricRimFresnelPowerFactor);
      assignHelper.assignPrimitive("parametricRimLiftFactor", extension.parametricRimLiftFactor);
      assignHelper.assignPrimitive("outlineWidthMode", extension.outlineWidthMode);
      assignHelper.assignPrimitive("outlineWidthFactor", extension.outlineWidthFactor);
      assignHelper.assignTexture("outlineWidthMultiplyTexture", extension.outlineWidthMultiplyTexture, false);
      assignHelper.assignColor("outlineColorFactor", extension.outlineColorFactor);
      assignHelper.assignPrimitive("outlineLightingMixFactor", extension.outlineLightingMixFactor);
      assignHelper.assignTexture("uvAnimationMaskTexture", extension.uvAnimationMaskTexture, false);
      assignHelper.assignPrimitive("uvAnimationScrollXSpeedFactor", extension.uvAnimationScrollXSpeedFactor);
      assignHelper.assignPrimitive("uvAnimationScrollYSpeedFactor", extension.uvAnimationScrollYSpeedFactor);
      assignHelper.assignPrimitive("uvAnimationRotationSpeedFactor", extension.uvAnimationRotationSpeedFactor);
      assignHelper.assignPrimitive("v0CompatShade", this.v0CompatShade);
      assignHelper.assignPrimitive("debugMode", this.debugMode);
      yield assignHelper.pending;
    });
  }
  /**
   * This will do two processes that is required to render MToon properly.
   *
   * - Set render order
   * - Generate outline
   *
   * @param mesh A target GLTF primitive
   * @param materialIndex The material index of the primitive
   */
  _setupPrimitive(mesh, materialIndex) {
    const extension = this._getMToonExtension(materialIndex);
    if (extension) {
      const renderOrder = this._parseRenderOrder(extension);
      mesh.renderOrder = renderOrder + this.renderOrderOffset;
      this._generateOutline(mesh);
      this._addToMaterialSet(mesh);
      return;
    }
  }
  /**
   * Check whether the material should generate outline or not.
   * @param surfaceMaterial The material to check
   * @returns True if the material should generate outline
   */
  _shouldGenerateOutline(surfaceMaterial) {
    return typeof surfaceMaterial.outlineWidthMode === "string" && surfaceMaterial.outlineWidthMode !== "none" && typeof surfaceMaterial.outlineWidthFactor === "number" && surfaceMaterial.outlineWidthFactor > 0;
  }
  /**
   * Generate outline for the given mesh, if it needs.
   *
   * @param mesh The target mesh
   */
  _generateOutline(mesh) {
    const surfaceMaterial = mesh.material;
    if (!(surfaceMaterial instanceof THREE52.Material)) {
      return;
    }
    if (!this._shouldGenerateOutline(surfaceMaterial)) {
      return;
    }
    mesh.material = [surfaceMaterial];
    const outlineMaterial = surfaceMaterial.clone();
    outlineMaterial.name += " (Outline)";
    outlineMaterial.isOutline = true;
    outlineMaterial.side = THREE52.BackSide;
    mesh.material.push(outlineMaterial);
    const geometry = mesh.geometry;
    const primitiveVertices = geometry.index ? geometry.index.count : geometry.attributes.position.count / 3;
    geometry.addGroup(0, primitiveVertices, 0);
    geometry.addGroup(0, primitiveVertices, 1);
  }
  _addToMaterialSet(mesh) {
    const materialOrMaterials = mesh.material;
    const materialSet = /* @__PURE__ */ new Set();
    if (Array.isArray(materialOrMaterials)) {
      materialOrMaterials.forEach((material) => materialSet.add(material));
    } else {
      materialSet.add(materialOrMaterials);
    }
    for (const material of materialSet) {
      this._mToonMaterialSet.add(material);
    }
  }
  _parseRenderOrder(extension) {
    var _a;
    const enabledZWrite = extension.transparentWithZWrite;
    return (enabledZWrite ? 0 : 19) + ((_a = extension.renderQueueOffsetNumber) != null ? _a : 0);
  }
};
_MToonMaterialLoaderPlugin.EXTENSION_NAME = "VRMC_materials_mtoon";
var MToonMaterialLoaderPlugin = _MToonMaterialLoaderPlugin;

// ../three-vrm-materials-hdr-emissive-multiplier/lib/three-vrm-materials-hdr-emissive-multiplier.module.js
var __async4 = (__this, __arguments, generator) => {
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
var _VRMMaterialsHDREmissiveMultiplierLoaderPlugin = class _VRMMaterialsHDREmissiveMultiplierLoaderPlugin2 {
  get name() {
    return _VRMMaterialsHDREmissiveMultiplierLoaderPlugin2.EXTENSION_NAME;
  }
  constructor(parser) {
    this.parser = parser;
  }
  extendMaterialParams(materialIndex, materialParams) {
    return __async4(this, null, function* () {
      const extension = this._getHDREmissiveMultiplierExtension(materialIndex);
      if (extension == null) {
        return;
      }
      console.warn(
        "VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead."
      );
      const emissiveMultiplier = extension.emissiveMultiplier;
      materialParams.emissiveIntensity = emissiveMultiplier;
    });
  }
  _getHDREmissiveMultiplierExtension(materialIndex) {
    var _a, _b;
    const parser = this.parser;
    const json = parser.json;
    const materialDef = (_a = json.materials) == null ? void 0 : _a[materialIndex];
    if (materialDef == null) {
      console.warn(
        `VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${materialIndex}] of glTF but the material doesn't exist`
      );
      return void 0;
    }
    const extension = (_b = materialDef.extensions) == null ? void 0 : _b[_VRMMaterialsHDREmissiveMultiplierLoaderPlugin2.EXTENSION_NAME];
    if (extension == null) {
      return void 0;
    }
    return extension;
  }
};
_VRMMaterialsHDREmissiveMultiplierLoaderPlugin.EXTENSION_NAME = "VRMC_materials_hdr_emissiveMultiplier";
var VRMMaterialsHDREmissiveMultiplierLoaderPlugin = _VRMMaterialsHDREmissiveMultiplierLoaderPlugin;

// ../three-vrm-materials-v0compat/lib/three-vrm-materials-v0compat.module.js
var THREE18 = __toESM(require("three"), 1);
var __defProp3 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp3.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async5 = (__this, __arguments, generator) => {
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
function gammaEOTF(e) {
  return Math.pow(e, 2.2);
}
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
    return __async5(this, null, function* () {
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
      extensions: __spreadValues2({}, textureTransformExt)
    } : void 0;
    const normalTextureScale = (_n = (_m = materialProperties.floatProperties) == null ? void 0 : _m["_BumpScale"]) != null ? _n : 1;
    const normalTextureIndex = (_o = materialProperties.textureProperties) == null ? void 0 : _o["_BumpMap"];
    const normalTexture = normalTextureIndex != null ? {
      index: normalTextureIndex,
      scale: normalTextureScale,
      extensions: __spreadValues2({}, textureTransformExt)
    } : void 0;
    const emissiveFactor = ((_q = (_p = materialProperties.vectorProperties) == null ? void 0 : _p["_EmissionColor"]) != null ? _q : [0, 0, 0, 1]).map(
      gammaEOTF
    );
    const emissiveTextureIndex = (_r = materialProperties.textureProperties) == null ? void 0 : _r["_EmissionMap"];
    const emissiveTexture = emissiveTextureIndex != null ? {
      index: emissiveTextureIndex,
      extensions: __spreadValues2({}, textureTransformExt)
    } : void 0;
    const shadeColorFactor = ((_t = (_s = materialProperties.vectorProperties) == null ? void 0 : _s["_ShadeColor"]) != null ? _t : [0.97, 0.81, 0.86, 1]).map(
      gammaEOTF
    );
    const shadeMultiplyTextureIndex = (_u = materialProperties.textureProperties) == null ? void 0 : _u["_ShadeTexture"];
    const shadeMultiplyTexture = shadeMultiplyTextureIndex != null ? {
      index: shadeMultiplyTextureIndex,
      extensions: __spreadValues2({}, textureTransformExt)
    } : void 0;
    let shadingShiftFactor = (_w = (_v = materialProperties.floatProperties) == null ? void 0 : _v["_ShadeShift"]) != null ? _w : 0;
    let shadingToonyFactor = (_y = (_x = materialProperties.floatProperties) == null ? void 0 : _x["_ShadeToony"]) != null ? _y : 0.9;
    shadingToonyFactor = THREE18.MathUtils.lerp(shadingToonyFactor, 1, 0.5 + 0.5 * shadingShiftFactor);
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
      extensions: __spreadValues2({}, textureTransformExt)
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
      extensions: __spreadValues2({}, textureTransformExt)
    } : void 0;
    const outlineColorFactor = ((_R = (_Q = materialProperties.vectorProperties) == null ? void 0 : _Q["_OutlineColor"]) != null ? _R : [0, 0, 0]).map(
      gammaEOTF
    );
    const outlineColorMode = (_T = (_S = materialProperties.floatProperties) == null ? void 0 : _S["_OutlineColorMode"]) != null ? _T : 0;
    const outlineLightingMixFactor = outlineColorMode === 1 ? (_V = (_U = materialProperties.floatProperties) == null ? void 0 : _U["_OutlineLightingMix"]) != null ? _V : 1 : 0;
    const uvAnimationMaskTextureIndex = (_W = materialProperties.textureProperties) == null ? void 0 : _W["_UvAnimMaskTexture"];
    const uvAnimationMaskTexture = uvAnimationMaskTextureIndex != null ? {
      index: uvAnimationMaskTextureIndex,
      extensions: __spreadValues2({}, textureTransformExt)
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
    return __spreadProps(__spreadValues2({}, schemaMaterial), {
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
      extensions: __spreadValues2({}, textureTransformExt)
    } : void 0;
    const mtoonExtension = {
      specVersion: "1.0",
      transparentWithZWrite: isTransparentZWrite,
      renderQueueOffsetNumber,
      shadeColorFactor: baseColorFactor,
      shadeMultiplyTexture: baseColorTexture
    };
    return __spreadProps(__spreadValues2({}, schemaMaterial), {
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
    var _a, _b;
    const isTransparentZWrite = materialProperties.shader === "VRM/UnlitTransparentZWrite";
    const isTransparent = ((_a = materialProperties.keywordMap) == null ? void 0 : _a["_ALPHABLEND_ON"]) != void 0 || materialProperties.shader === "VRM/UnlitTransparent" || isTransparentZWrite;
    const enabledZWrite = ((_b = materialProperties.floatProperties) == null ? void 0 : _b["_ZWrite"]) === 1 || isTransparentZWrite;
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
      var _a, _b;
      const isTransparentZWrite = materialProperties.shader === "VRM/UnlitTransparentZWrite";
      const isTransparent = ((_a = materialProperties.keywordMap) == null ? void 0 : _a["_ALPHABLEND_ON"]) != void 0 || materialProperties.shader === "VRM/UnlitTransparent" || isTransparentZWrite;
      const enabledZWrite = ((_b = materialProperties.floatProperties) == null ? void 0 : _b["_ZWrite"]) === 1 || isTransparentZWrite;
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

// ../three-vrm-node-constraint/lib/three-vrm-node-constraint.module.js
var THREE19 = __toESM(require("three"), 1);
var THREE33 = __toESM(require("three"), 1);
var THREE23 = __toESM(require("three"), 1);
var THREE43 = __toESM(require("three"), 1);
var THREE53 = __toESM(require("three"), 1);
var __async6 = (__this, __arguments, generator) => {
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
var _v3A6 = new THREE19.Vector3();
var VRMNodeConstraintHelper = class extends THREE19.Group {
  constructor(constraint) {
    super();
    this._attrPosition = new THREE19.BufferAttribute(new Float32Array([0, 0, 0, 0, 0, 0]), 3);
    this._attrPosition.setUsage(THREE19.DynamicDrawUsage);
    const geometry = new THREE19.BufferGeometry();
    geometry.setAttribute("position", this._attrPosition);
    const material = new THREE19.LineBasicMaterial({
      color: 16711935,
      depthTest: false,
      depthWrite: false
    });
    this._line = new THREE19.Line(geometry, material);
    this.add(this._line);
    this.constraint = constraint;
  }
  updateMatrixWorld(force) {
    _v3A6.setFromMatrixPosition(this.constraint.destination.matrixWorld);
    this._attrPosition.setXYZ(0, _v3A6.x, _v3A6.y, _v3A6.z);
    if (this.constraint.source) {
      _v3A6.setFromMatrixPosition(this.constraint.source.matrixWorld);
    }
    this._attrPosition.setXYZ(1, _v3A6.x, _v3A6.y, _v3A6.z);
    this._attrPosition.needsUpdate = true;
    super.updateMatrixWorld(force);
  }
};
function decomposePosition(matrix, target) {
  return target.set(matrix.elements[12], matrix.elements[13], matrix.elements[14]);
}
var _v3A22 = new THREE23.Vector3();
var _v3B4 = new THREE23.Vector3();
function decomposeRotation(matrix, target) {
  matrix.decompose(_v3A22, target, _v3B4);
  return target;
}
function quatInvertCompat2(target) {
  if (target.invert) {
    target.invert();
  } else {
    target.inverse();
  }
  return target;
}
var VRMNodeConstraint = class {
  /**
   * @param destination The destination object
   * @param source The source object
   */
  constructor(destination, source) {
    this.destination = destination;
    this.source = source;
    this.weight = 1;
  }
};
var _v3A32 = new THREE33.Vector3();
var _v3B22 = new THREE33.Vector3();
var _v3C2 = new THREE33.Vector3();
var _quatA7 = new THREE33.Quaternion();
var _quatB4 = new THREE33.Quaternion();
var _quatC2 = new THREE33.Quaternion();
var VRMAimConstraint = class extends VRMNodeConstraint {
  /**
   * The aim axis of the constraint.
   */
  get aimAxis() {
    return this._aimAxis;
  }
  /**
   * The aim axis of the constraint.
   */
  set aimAxis(aimAxis) {
    this._aimAxis = aimAxis;
    this._v3AimAxis.set(
      aimAxis === "PositiveX" ? 1 : aimAxis === "NegativeX" ? -1 : 0,
      aimAxis === "PositiveY" ? 1 : aimAxis === "NegativeY" ? -1 : 0,
      aimAxis === "PositiveZ" ? 1 : aimAxis === "NegativeZ" ? -1 : 0
    );
  }
  get dependencies() {
    const set = /* @__PURE__ */ new Set([this.source]);
    if (this.destination.parent) {
      set.add(this.destination.parent);
    }
    return set;
  }
  constructor(destination, source) {
    super(destination, source);
    this._aimAxis = "PositiveX";
    this._v3AimAxis = new THREE33.Vector3(1, 0, 0);
    this._dstRestQuat = new THREE33.Quaternion();
  }
  setInitState() {
    this._dstRestQuat.copy(this.destination.quaternion);
  }
  update() {
    this.destination.updateWorldMatrix(true, false);
    this.source.updateWorldMatrix(true, false);
    const dstParentWorldQuat = _quatA7.identity();
    const invDstParentWorldQuat = _quatB4.identity();
    if (this.destination.parent) {
      decomposeRotation(this.destination.parent.matrixWorld, dstParentWorldQuat);
      quatInvertCompat2(invDstParentWorldQuat.copy(dstParentWorldQuat));
    }
    const a0 = _v3A32.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(dstParentWorldQuat);
    const a1 = decomposePosition(this.source.matrixWorld, _v3B22).sub(decomposePosition(this.destination.matrixWorld, _v3C2)).normalize();
    const targetQuat = _quatC2.setFromUnitVectors(a0, a1).premultiply(invDstParentWorldQuat).multiply(dstParentWorldQuat).multiply(this._dstRestQuat);
    this.destination.quaternion.copy(this._dstRestQuat).slerp(targetQuat, this.weight);
  }
};
function traverseAncestorsFromRoot(object, callback) {
  const ancestors = [object];
  let head = object.parent;
  while (head !== null) {
    ancestors.unshift(head);
    head = head.parent;
  }
  ancestors.forEach((ancestor) => {
    callback(ancestor);
  });
}
var VRMNodeConstraintManager = class {
  constructor() {
    this._constraints = /* @__PURE__ */ new Set();
    this._objectConstraintsMap = /* @__PURE__ */ new Map();
  }
  get constraints() {
    return this._constraints;
  }
  addConstraint(constraint) {
    this._constraints.add(constraint);
    let objectSet = this._objectConstraintsMap.get(constraint.destination);
    if (objectSet == null) {
      objectSet = /* @__PURE__ */ new Set();
      this._objectConstraintsMap.set(constraint.destination, objectSet);
    }
    objectSet.add(constraint);
  }
  deleteConstraint(constraint) {
    this._constraints.delete(constraint);
    const objectSet = this._objectConstraintsMap.get(constraint.destination);
    objectSet.delete(constraint);
  }
  setInitState() {
    const constraintsTried = /* @__PURE__ */ new Set();
    const constraintsDone = /* @__PURE__ */ new Set();
    for (const constraint of this._constraints) {
      this._processConstraint(constraint, constraintsTried, constraintsDone, (constraint2) => constraint2.setInitState());
    }
  }
  update() {
    const constraintsTried = /* @__PURE__ */ new Set();
    const constraintsDone = /* @__PURE__ */ new Set();
    for (const constraint of this._constraints) {
      this._processConstraint(constraint, constraintsTried, constraintsDone, (constraint2) => constraint2.update());
    }
  }
  /**
   * Update a constraint.
   * If there are other constraints that are dependant, it will try to update them recursively.
   * It might throw an error if there are circular dependencies.
   *
   * Intended to be used in {@link update} and {@link _processConstraint} itself recursively.
   *
   * @param constraint A constraint you want to update
   * @param constraintsTried Set of constraints that are already tried to be updated
   * @param constraintsDone Set of constraints that are already up to date
   */
  _processConstraint(constraint, constraintsTried, constraintsDone, callback) {
    if (constraintsDone.has(constraint)) {
      return;
    }
    if (constraintsTried.has(constraint)) {
      throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");
    }
    constraintsTried.add(constraint);
    const depObjects = constraint.dependencies;
    for (const depObject of depObjects) {
      traverseAncestorsFromRoot(depObject, (depObjectAncestor) => {
        const objectSet = this._objectConstraintsMap.get(depObjectAncestor);
        if (objectSet) {
          for (const depConstraint of objectSet) {
            this._processConstraint(depConstraint, constraintsTried, constraintsDone, callback);
          }
        }
      });
    }
    callback(constraint);
    constraintsDone.add(constraint);
  }
};
var _quatA22 = new THREE43.Quaternion();
var _quatB22 = new THREE43.Quaternion();
var VRMRotationConstraint = class extends VRMNodeConstraint {
  get dependencies() {
    return /* @__PURE__ */ new Set([this.source]);
  }
  constructor(destination, source) {
    super(destination, source);
    this._dstRestQuat = new THREE43.Quaternion();
    this._invSrcRestQuat = new THREE43.Quaternion();
  }
  setInitState() {
    this._dstRestQuat.copy(this.destination.quaternion);
    quatInvertCompat2(this._invSrcRestQuat.copy(this.source.quaternion));
  }
  update() {
    const srcDeltaQuat = _quatA22.copy(this._invSrcRestQuat).multiply(this.source.quaternion);
    const targetQuat = _quatB22.copy(this._dstRestQuat).multiply(srcDeltaQuat);
    this.destination.quaternion.copy(this._dstRestQuat).slerp(targetQuat, this.weight);
  }
};
var _v3A42 = new THREE53.Vector3();
var _quatA32 = new THREE53.Quaternion();
var _quatB32 = new THREE53.Quaternion();
var VRMRollConstraint = class extends VRMNodeConstraint {
  /**
   * The roll axis of the constraint.
   */
  get rollAxis() {
    return this._rollAxis;
  }
  /**
   * The roll axis of the constraint.
   */
  set rollAxis(rollAxis) {
    this._rollAxis = rollAxis;
    this._v3RollAxis.set(rollAxis === "X" ? 1 : 0, rollAxis === "Y" ? 1 : 0, rollAxis === "Z" ? 1 : 0);
  }
  get dependencies() {
    return /* @__PURE__ */ new Set([this.source]);
  }
  constructor(destination, source) {
    super(destination, source);
    this._rollAxis = "X";
    this._v3RollAxis = new THREE53.Vector3(1, 0, 0);
    this._dstRestQuat = new THREE53.Quaternion();
    this._invDstRestQuat = new THREE53.Quaternion();
    this._invSrcRestQuatMulDstRestQuat = new THREE53.Quaternion();
  }
  setInitState() {
    this._dstRestQuat.copy(this.destination.quaternion);
    quatInvertCompat2(this._invDstRestQuat.copy(this._dstRestQuat));
    quatInvertCompat2(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat);
  }
  update() {
    const quatDelta = _quatA32.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat);
    const n1 = _v3A42.copy(this._v3RollAxis).applyQuaternion(quatDelta);
    const quatFromTo = _quatB32.setFromUnitVectors(n1, this._v3RollAxis);
    const targetQuat = quatFromTo.premultiply(this._dstRestQuat).multiply(quatDelta);
    this.destination.quaternion.copy(this._dstRestQuat).slerp(targetQuat, this.weight);
  }
};
var POSSIBLE_SPEC_VERSIONS7 = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
var _VRMNodeConstraintLoaderPlugin = class _VRMNodeConstraintLoaderPlugin2 {
  get name() {
    return _VRMNodeConstraintLoaderPlugin2.EXTENSION_NAME;
  }
  constructor(parser, options) {
    this.parser = parser;
    this.helperRoot = options == null ? void 0 : options.helperRoot;
  }
  afterRoot(gltf) {
    return __async6(this, null, function* () {
      gltf.userData.vrmNodeConstraintManager = yield this._import(gltf);
    });
  }
  /**
   * Import constraints from a GLTF and returns a {@link VRMNodeConstraintManager}.
   * It might return `null` instead when it does not need to be created or something go wrong.
   *
   * @param gltf A parsed result of GLTF taken from GLTFLoader
   */
  _import(gltf) {
    return __async6(this, null, function* () {
      var _a;
      const json = this.parser.json;
      const isConstraintsUsed = ((_a = json.extensionsUsed) == null ? void 0 : _a.indexOf(_VRMNodeConstraintLoaderPlugin2.EXTENSION_NAME)) !== -1;
      if (!isConstraintsUsed) {
        return null;
      }
      const manager = new VRMNodeConstraintManager();
      const threeNodes = yield this.parser.getDependencies("node");
      threeNodes.forEach((node, nodeIndex) => {
        var _a2;
        const schemaNode = json.nodes[nodeIndex];
        const extension = (_a2 = schemaNode == null ? void 0 : schemaNode.extensions) == null ? void 0 : _a2[_VRMNodeConstraintLoaderPlugin2.EXTENSION_NAME];
        if (extension == null) {
          return;
        }
        const specVersion = extension.specVersion;
        if (!POSSIBLE_SPEC_VERSIONS7.has(specVersion)) {
          console.warn(
            `VRMNodeConstraintLoaderPlugin: Unknown ${_VRMNodeConstraintLoaderPlugin2.EXTENSION_NAME} specVersion "${specVersion}"`
          );
          return;
        }
        const constraintDef = extension.constraint;
        if (constraintDef.roll != null) {
          const constraint = this._importRollConstraint(node, threeNodes, constraintDef.roll);
          manager.addConstraint(constraint);
        } else if (constraintDef.aim != null) {
          const constraint = this._importAimConstraint(node, threeNodes, constraintDef.aim);
          manager.addConstraint(constraint);
        } else if (constraintDef.rotation != null) {
          const constraint = this._importRotationConstraint(node, threeNodes, constraintDef.rotation);
          manager.addConstraint(constraint);
        }
      });
      gltf.scene.updateMatrixWorld();
      manager.setInitState();
      return manager;
    });
  }
  _importRollConstraint(destination, nodes, rollConstraintDef) {
    const { source: sourceIndex, rollAxis, weight } = rollConstraintDef;
    const source = nodes[sourceIndex];
    const constraint = new VRMRollConstraint(destination, source);
    if (rollAxis != null) {
      constraint.rollAxis = rollAxis;
    }
    if (weight != null) {
      constraint.weight = weight;
    }
    if (this.helperRoot) {
      const helper = new VRMNodeConstraintHelper(constraint);
      this.helperRoot.add(helper);
    }
    return constraint;
  }
  _importAimConstraint(destination, nodes, aimConstraintDef) {
    const { source: sourceIndex, aimAxis, weight } = aimConstraintDef;
    const source = nodes[sourceIndex];
    const constraint = new VRMAimConstraint(destination, source);
    if (aimAxis != null) {
      constraint.aimAxis = aimAxis;
    }
    if (weight != null) {
      constraint.weight = weight;
    }
    if (this.helperRoot) {
      const helper = new VRMNodeConstraintHelper(constraint);
      this.helperRoot.add(helper);
    }
    return constraint;
  }
  _importRotationConstraint(destination, nodes, rotationConstraintDef) {
    const { source: sourceIndex, weight } = rotationConstraintDef;
    const source = nodes[sourceIndex];
    const constraint = new VRMRotationConstraint(destination, source);
    if (weight != null) {
      constraint.weight = weight;
    }
    if (this.helperRoot) {
      const helper = new VRMNodeConstraintHelper(constraint);
      this.helperRoot.add(helper);
    }
    return constraint;
  }
};
_VRMNodeConstraintLoaderPlugin.EXTENSION_NAME = "VRMC_node_constraint";
var VRMNodeConstraintLoaderPlugin = _VRMNodeConstraintLoaderPlugin;

// ../three-vrm-springbone/lib/three-vrm-springbone.module.js
var THREE72 = __toESM(require("three"), 1);
var THREE20 = __toESM(require("three"), 1);
var THREE24 = __toESM(require("three"), 1);
var THREE34 = __toESM(require("three"), 1);
var THREE44 = __toESM(require("three"), 1);
var THREE54 = __toESM(require("three"), 1);
var THREE62 = __toESM(require("three"), 1);
var THREE92 = __toESM(require("three"), 1);
var THREE82 = __toESM(require("three"), 1);
var THREE102 = __toESM(require("three"), 1);
var THREE132 = __toESM(require("three"), 1);
var THREE112 = __toESM(require("three"), 1);
var THREE122 = __toESM(require("three"), 1);
var THREE142 = __toESM(require("three"), 1);
var __async7 = (__this, __arguments, generator) => {
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
var VRMSpringBoneColliderShape = class {
};
var _v3A7 = new THREE20.Vector3();
var _v3B5 = new THREE20.Vector3();
var VRMSpringBoneColliderShapeCapsule = class extends VRMSpringBoneColliderShape {
  get type() {
    return "capsule";
  }
  constructor(params) {
    var _a, _b, _c, _d;
    super();
    this.offset = (_a = params == null ? void 0 : params.offset) != null ? _a : new THREE20.Vector3(0, 0, 0);
    this.tail = (_b = params == null ? void 0 : params.tail) != null ? _b : new THREE20.Vector3(0, 0, 0);
    this.radius = (_c = params == null ? void 0 : params.radius) != null ? _c : 0;
    this.inside = (_d = params == null ? void 0 : params.inside) != null ? _d : false;
  }
  calculateCollision(colliderMatrix, objectPosition, objectRadius, target) {
    _v3A7.copy(this.offset).applyMatrix4(colliderMatrix);
    _v3B5.copy(this.tail).applyMatrix4(colliderMatrix);
    _v3B5.sub(_v3A7);
    const lengthSqCapsule = _v3B5.lengthSq();
    target.copy(objectPosition).sub(_v3A7);
    const dot = _v3B5.dot(target);
    if (dot <= 0) {
    } else if (lengthSqCapsule <= dot) {
      target.sub(_v3B5);
    } else {
      _v3B5.multiplyScalar(dot / lengthSqCapsule);
      target.sub(_v3B5);
    }
    const distance = this.inside ? this.radius - objectRadius - target.length() : target.length() - objectRadius - this.radius;
    target.normalize();
    if (this.inside) {
      target.negate();
    }
    return distance;
  }
};
var _v3A23 = new THREE24.Vector3();
var _mat3A = new THREE24.Matrix3();
var VRMSpringBoneColliderShapePlane = class extends VRMSpringBoneColliderShape {
  get type() {
    return "plane";
  }
  constructor(params) {
    var _a, _b;
    super();
    this.offset = (_a = params == null ? void 0 : params.offset) != null ? _a : new THREE24.Vector3(0, 0, 0);
    this.normal = (_b = params == null ? void 0 : params.normal) != null ? _b : new THREE24.Vector3(0, 0, 1);
  }
  calculateCollision(colliderMatrix, objectPosition, objectRadius, target) {
    target.copy(this.offset).applyMatrix4(colliderMatrix);
    target.negate().add(objectPosition);
    _mat3A.getNormalMatrix(colliderMatrix);
    _v3A23.copy(this.normal).applyNormalMatrix(_mat3A).normalize();
    const distance = target.dot(_v3A23) - objectRadius;
    target.copy(_v3A23);
    return distance;
  }
};
var VRMSpringBoneColliderShapeSphere = class extends VRMSpringBoneColliderShape {
  get type() {
    return "sphere";
  }
  constructor(params) {
    var _a, _b, _c;
    super();
    this.offset = (_a = params == null ? void 0 : params.offset) != null ? _a : new THREE34.Vector3(0, 0, 0);
    this.radius = (_b = params == null ? void 0 : params.radius) != null ? _b : 0;
    this.inside = (_c = params == null ? void 0 : params.inside) != null ? _c : false;
  }
  calculateCollision(colliderMatrix, objectPosition, objectRadius, target) {
    target.copy(this.offset).applyMatrix4(colliderMatrix);
    target.negate().add(objectPosition);
    const distance = this.inside ? this.radius - objectRadius - target.length() : target.length() - objectRadius - this.radius;
    target.normalize();
    if (this.inside) {
      target.negate();
    }
    return distance;
  }
};
var _v3A33 = new THREE44.Vector3();
var ColliderShapeCapsuleBufferGeometry = class extends THREE44.BufferGeometry {
  constructor(shape) {
    super();
    this.worldScale = 1;
    this._currentRadius = 0;
    this._currentOffset = new THREE44.Vector3();
    this._currentTail = new THREE44.Vector3();
    this._shape = shape;
    this._attrPos = new THREE44.BufferAttribute(new Float32Array(396), 3);
    this.setAttribute("position", this._attrPos);
    this._attrIndex = new THREE44.BufferAttribute(new Uint16Array(264), 1);
    this.setIndex(this._attrIndex);
    this._buildIndex();
    this.update();
  }
  update() {
    let shouldUpdateGeometry = false;
    const radius = this._shape.radius / this.worldScale;
    if (this._currentRadius !== radius) {
      this._currentRadius = radius;
      shouldUpdateGeometry = true;
    }
    if (!this._currentOffset.equals(this._shape.offset)) {
      this._currentOffset.copy(this._shape.offset);
      shouldUpdateGeometry = true;
    }
    const tail = _v3A33.copy(this._shape.tail).divideScalar(this.worldScale);
    if (this._currentTail.distanceToSquared(tail) > 1e-10) {
      this._currentTail.copy(tail);
      shouldUpdateGeometry = true;
    }
    if (shouldUpdateGeometry) {
      this._buildPosition();
    }
  }
  _buildPosition() {
    _v3A33.copy(this._currentTail).sub(this._currentOffset);
    const l = _v3A33.length() / this._currentRadius;
    for (let i = 0; i <= 16; i++) {
      const t = i / 16 * Math.PI;
      this._attrPos.setXYZ(i, -Math.sin(t), -Math.cos(t), 0);
      this._attrPos.setXYZ(17 + i, l + Math.sin(t), Math.cos(t), 0);
      this._attrPos.setXYZ(34 + i, -Math.sin(t), 0, -Math.cos(t));
      this._attrPos.setXYZ(51 + i, l + Math.sin(t), 0, Math.cos(t));
    }
    for (let i = 0; i < 32; i++) {
      const t = i / 16 * Math.PI;
      this._attrPos.setXYZ(68 + i, 0, Math.sin(t), Math.cos(t));
      this._attrPos.setXYZ(100 + i, l, Math.sin(t), Math.cos(t));
    }
    const theta = Math.atan2(_v3A33.y, Math.sqrt(_v3A33.x * _v3A33.x + _v3A33.z * _v3A33.z));
    const phi = -Math.atan2(_v3A33.z, _v3A33.x);
    this.rotateZ(theta);
    this.rotateY(phi);
    this.scale(this._currentRadius, this._currentRadius, this._currentRadius);
    this.translate(this._currentOffset.x, this._currentOffset.y, this._currentOffset.z);
    this._attrPos.needsUpdate = true;
  }
  _buildIndex() {
    for (let i = 0; i < 34; i++) {
      const i1 = (i + 1) % 34;
      this._attrIndex.setXY(i * 2, i, i1);
      this._attrIndex.setXY(68 + i * 2, 34 + i, 34 + i1);
    }
    for (let i = 0; i < 32; i++) {
      const i1 = (i + 1) % 32;
      this._attrIndex.setXY(136 + i * 2, 68 + i, 68 + i1);
      this._attrIndex.setXY(200 + i * 2, 100 + i, 100 + i1);
    }
    this._attrIndex.needsUpdate = true;
  }
};
var ColliderShapePlaneBufferGeometry = class extends THREE54.BufferGeometry {
  constructor(shape) {
    super();
    this.worldScale = 1;
    this._currentOffset = new THREE54.Vector3();
    this._currentNormal = new THREE54.Vector3();
    this._shape = shape;
    this._attrPos = new THREE54.BufferAttribute(new Float32Array(6 * 3), 3);
    this.setAttribute("position", this._attrPos);
    this._attrIndex = new THREE54.BufferAttribute(new Uint16Array(10), 1);
    this.setIndex(this._attrIndex);
    this._buildIndex();
    this.update();
  }
  update() {
    let shouldUpdateGeometry = false;
    if (!this._currentOffset.equals(this._shape.offset)) {
      this._currentOffset.copy(this._shape.offset);
      shouldUpdateGeometry = true;
    }
    if (!this._currentNormal.equals(this._shape.normal)) {
      this._currentNormal.copy(this._shape.normal);
      shouldUpdateGeometry = true;
    }
    if (shouldUpdateGeometry) {
      this._buildPosition();
    }
  }
  _buildPosition() {
    this._attrPos.setXYZ(0, -0.5, -0.5, 0);
    this._attrPos.setXYZ(1, 0.5, -0.5, 0);
    this._attrPos.setXYZ(2, 0.5, 0.5, 0);
    this._attrPos.setXYZ(3, -0.5, 0.5, 0);
    this._attrPos.setXYZ(4, 0, 0, 0);
    this._attrPos.setXYZ(5, 0, 0, 0.25);
    this.translate(this._currentOffset.x, this._currentOffset.y, this._currentOffset.z);
    this.lookAt(this._currentNormal);
    this._attrPos.needsUpdate = true;
  }
  _buildIndex() {
    this._attrIndex.setXY(0, 0, 1);
    this._attrIndex.setXY(2, 1, 2);
    this._attrIndex.setXY(4, 2, 3);
    this._attrIndex.setXY(6, 3, 0);
    this._attrIndex.setXY(8, 4, 5);
    this._attrIndex.needsUpdate = true;
  }
};
var ColliderShapeSphereBufferGeometry = class extends THREE62.BufferGeometry {
  constructor(shape) {
    super();
    this.worldScale = 1;
    this._currentRadius = 0;
    this._currentOffset = new THREE62.Vector3();
    this._shape = shape;
    this._attrPos = new THREE62.BufferAttribute(new Float32Array(32 * 3 * 3), 3);
    this.setAttribute("position", this._attrPos);
    this._attrIndex = new THREE62.BufferAttribute(new Uint16Array(64 * 3), 1);
    this.setIndex(this._attrIndex);
    this._buildIndex();
    this.update();
  }
  update() {
    let shouldUpdateGeometry = false;
    const radius = this._shape.radius / this.worldScale;
    if (this._currentRadius !== radius) {
      this._currentRadius = radius;
      shouldUpdateGeometry = true;
    }
    if (!this._currentOffset.equals(this._shape.offset)) {
      this._currentOffset.copy(this._shape.offset);
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
    this.translate(this._currentOffset.x, this._currentOffset.y, this._currentOffset.z);
    this._attrPos.needsUpdate = true;
  }
  _buildIndex() {
    for (let i = 0; i < 32; i++) {
      const i1 = (i + 1) % 32;
      this._attrIndex.setXY(i * 2, i, i1);
      this._attrIndex.setXY(64 + i * 2, 32 + i, 32 + i1);
      this._attrIndex.setXY(128 + i * 2, 64 + i, 64 + i1);
    }
    this._attrIndex.needsUpdate = true;
  }
};
var _v3A43 = new THREE72.Vector3();
var VRMSpringBoneColliderHelper = class extends THREE72.Group {
  constructor(collider) {
    super();
    this.matrixAutoUpdate = false;
    this.collider = collider;
    if (this.collider.shape instanceof VRMSpringBoneColliderShapeSphere) {
      this._geometry = new ColliderShapeSphereBufferGeometry(this.collider.shape);
    } else if (this.collider.shape instanceof VRMSpringBoneColliderShapeCapsule) {
      this._geometry = new ColliderShapeCapsuleBufferGeometry(this.collider.shape);
    } else if (this.collider.shape instanceof VRMSpringBoneColliderShapePlane) {
      this._geometry = new ColliderShapePlaneBufferGeometry(this.collider.shape);
    } else {
      throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");
    }
    const material = new THREE72.LineBasicMaterial({
      color: 16711935,
      depthTest: false,
      depthWrite: false
    });
    this._line = new THREE72.LineSegments(this._geometry, material);
    this.add(this._line);
  }
  dispose() {
    this._geometry.dispose();
  }
  updateMatrixWorld(force) {
    this.collider.updateWorldMatrix(true, false);
    this.matrix.copy(this.collider.matrixWorld);
    const matrixWorldElements = this.matrix.elements;
    this._geometry.worldScale = _v3A43.set(matrixWorldElements[0], matrixWorldElements[1], matrixWorldElements[2]).length();
    this._geometry.update();
    super.updateMatrixWorld(force);
  }
};
var SpringBoneBufferGeometry = class extends THREE82.BufferGeometry {
  constructor(springBone) {
    super();
    this.worldScale = 1;
    this._currentRadius = 0;
    this._currentTail = new THREE82.Vector3();
    this._springBone = springBone;
    this._attrPos = new THREE82.BufferAttribute(new Float32Array(294), 3);
    this.setAttribute("position", this._attrPos);
    this._attrIndex = new THREE82.BufferAttribute(new Uint16Array(194), 1);
    this.setIndex(this._attrIndex);
    this._buildIndex();
    this.update();
  }
  update() {
    let shouldUpdateGeometry = false;
    const radius = this._springBone.settings.hitRadius / this.worldScale;
    if (this._currentRadius !== radius) {
      this._currentRadius = radius;
      shouldUpdateGeometry = true;
    }
    if (!this._currentTail.equals(this._springBone.initialLocalChildPosition)) {
      this._currentTail.copy(this._springBone.initialLocalChildPosition);
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
var _v3A52 = new THREE92.Vector3();
var VRMSpringBoneJointHelper = class extends THREE92.Group {
  constructor(springBone) {
    super();
    this.matrixAutoUpdate = false;
    this.springBone = springBone;
    this._geometry = new SpringBoneBufferGeometry(this.springBone);
    const material = new THREE92.LineBasicMaterial({
      color: 16776960,
      depthTest: false,
      depthWrite: false
    });
    this._line = new THREE92.LineSegments(this._geometry, material);
    this.add(this._line);
  }
  dispose() {
    this._geometry.dispose();
  }
  updateMatrixWorld(force) {
    this.springBone.bone.updateWorldMatrix(true, false);
    this.matrix.copy(this.springBone.bone.matrixWorld);
    const matrixWorldElements = this.matrix.elements;
    this._geometry.worldScale = _v3A52.set(matrixWorldElements[0], matrixWorldElements[1], matrixWorldElements[2]).length();
    this._geometry.update();
    super.updateMatrixWorld(force);
  }
};
var VRMSpringBoneCollider = class extends THREE102.Object3D {
  constructor(shape) {
    super();
    this.shape = shape;
  }
};
var _matA = new THREE112.Matrix4();
function mat4InvertCompat(target) {
  if (target.invert) {
    target.invert();
  } else {
    target.getInverse(_matA.copy(target));
  }
  return target;
}
var Matrix4InverseCache = class {
  constructor(matrix) {
    this._inverseCache = new THREE122.Matrix4();
    this._shouldUpdateInverse = true;
    this.matrix = matrix;
    const handler = {
      set: (obj, prop, newVal) => {
        this._shouldUpdateInverse = true;
        obj[prop] = newVal;
        return true;
      }
    };
    this._originalElements = matrix.elements;
    matrix.elements = new Proxy(matrix.elements, handler);
  }
  /**
   * Inverse of given matrix.
   * Note that it will return its internal private instance.
   * Make sure copying this before mutate this.
   */
  get inverse() {
    if (this._shouldUpdateInverse) {
      mat4InvertCompat(this._inverseCache.copy(this.matrix));
      this._shouldUpdateInverse = false;
    }
    return this._inverseCache;
  }
  revert() {
    this.matrix.elements = this._originalElements;
  }
};
var IDENTITY_MATRIX4 = new THREE132.Matrix4();
var _v3A62 = new THREE132.Vector3();
var _v3B23 = new THREE132.Vector3();
var _v3C3 = new THREE132.Vector3();
var _worldSpacePosition = new THREE132.Vector3();
var _centerSpacePosition = new THREE132.Vector3();
var _nextTail = new THREE132.Vector3();
var _quatA8 = new THREE132.Quaternion();
var _matA2 = new THREE132.Matrix4();
var _matB = new THREE132.Matrix4();
var VRMSpringBoneJoint = class {
  /**
   * Create a new VRMSpringBone.
   *
   * @param bone An Object3D that will be attached to this bone
   * @param child An Object3D that will be used as a tail of this spring bone. It can be null when the spring bone is imported from VRM 0.0
   * @param settings Several parameters related to behavior of the spring bone
   * @param colliderGroups Collider groups that will be collided with this spring bone
   */
  constructor(bone, child, settings = {}, colliderGroups = []) {
    this._currentTail = new THREE132.Vector3();
    this._prevTail = new THREE132.Vector3();
    this._boneAxis = new THREE132.Vector3();
    this._worldSpaceBoneLength = 0;
    this._center = null;
    this._initialLocalMatrix = new THREE132.Matrix4();
    this._initialLocalRotation = new THREE132.Quaternion();
    this._initialLocalChildPosition = new THREE132.Vector3();
    var _a, _b, _c, _d, _e, _f;
    this.bone = bone;
    this.bone.matrixAutoUpdate = false;
    this.child = child;
    this.settings = {
      hitRadius: (_a = settings.hitRadius) != null ? _a : 0,
      stiffness: (_b = settings.stiffness) != null ? _b : 1,
      gravityPower: (_c = settings.gravityPower) != null ? _c : 0,
      gravityDir: (_e = (_d = settings.gravityDir) == null ? void 0 : _d.clone()) != null ? _e : new THREE132.Vector3(0, -1, 0),
      dragForce: (_f = settings.dragForce) != null ? _f : 0.4
    };
    this.colliderGroups = colliderGroups;
  }
  get center() {
    return this._center;
  }
  set center(center) {
    var _a;
    if ((_a = this._center) == null ? void 0 : _a.userData.inverseCacheProxy) {
      this._center.userData.inverseCacheProxy.revert();
      delete this._center.userData.inverseCacheProxy;
    }
    this._center = center;
    if (this._center) {
      if (!this._center.userData.inverseCacheProxy) {
        this._center.userData.inverseCacheProxy = new Matrix4InverseCache(this._center.matrixWorld);
      }
    }
  }
  get initialLocalChildPosition() {
    return this._initialLocalChildPosition;
  }
  /**
   * Returns the world matrix of its parent object.
   * Note that it returns a reference to the matrix. Don't mutate this directly!
   */
  get _parentMatrixWorld() {
    return this.bone.parent ? this.bone.parent.matrixWorld : IDENTITY_MATRIX4;
  }
  /**
   * Set the initial state of this spring bone.
   * You might want to call {@link VRMSpringBoneManager.setInitState} instead.
   */
  setInitState() {
    this._initialLocalMatrix.copy(this.bone.matrix);
    this._initialLocalRotation.copy(this.bone.quaternion);
    if (this.child) {
      this._initialLocalChildPosition.copy(this.child.position);
    } else {
      this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(0.07);
    }
    const matrixWorldToCenter = this._getMatrixWorldToCenter(_matA2);
    this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(matrixWorldToCenter);
    this._prevTail.copy(this._currentTail);
    this._boneAxis.copy(this._initialLocalChildPosition).normalize();
  }
  /**
   * Reset the state of this bone.
   * You might want to call [[VRMSpringBoneManager.reset]] instead.
   */
  reset() {
    this.bone.quaternion.copy(this._initialLocalRotation);
    this.bone.updateMatrix();
    this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld, this.bone.matrix);
    const matrixWorldToCenter = this._getMatrixWorldToCenter(_matA2);
    this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(matrixWorldToCenter);
    this._prevTail.copy(this._currentTail);
  }
  /**
   * Update the state of this bone.
   * You might want to call [[VRMSpringBoneManager.update]] instead.
   *
   * @param delta deltaTime
   */
  update(delta) {
    if (delta <= 0) return;
    this._calcWorldSpaceBoneLength();
    _worldSpacePosition.setFromMatrixPosition(this.bone.matrixWorld);
    let matrixWorldToCenter = this._getMatrixWorldToCenter(_matA2);
    _centerSpacePosition.copy(_worldSpacePosition).applyMatrix4(matrixWorldToCenter);
    const quatWorldToCenter = _quatA8.setFromRotationMatrix(matrixWorldToCenter);
    const centerSpaceParentMatrix = _matB.copy(matrixWorldToCenter).multiply(this._parentMatrixWorld);
    const centerSpaceBoneAxis = _v3B23.copy(this._boneAxis).applyMatrix4(this._initialLocalMatrix).applyMatrix4(centerSpaceParentMatrix).sub(_centerSpacePosition).normalize();
    const centerSpaceGravity = _v3C3.copy(this.settings.gravityDir).applyQuaternion(quatWorldToCenter).normalize();
    const matrixCenterToWorld = this._getMatrixCenterToWorld(_matA2);
    _nextTail.copy(this._currentTail).add(
      _v3A62.copy(this._currentTail).sub(this._prevTail).multiplyScalar(1 - this.settings.dragForce)
    ).add(_v3A62.copy(centerSpaceBoneAxis).multiplyScalar(this.settings.stiffness * delta)).add(_v3A62.copy(centerSpaceGravity).multiplyScalar(this.settings.gravityPower * delta)).applyMatrix4(matrixCenterToWorld);
    _nextTail.sub(_worldSpacePosition).normalize().multiplyScalar(this._worldSpaceBoneLength).add(_worldSpacePosition);
    this._collision(_nextTail);
    matrixWorldToCenter = this._getMatrixWorldToCenter(_matA2);
    this._prevTail.copy(this._currentTail);
    this._currentTail.copy(_v3A62.copy(_nextTail).applyMatrix4(matrixWorldToCenter));
    const worldSpaceInitialMatrixInv = mat4InvertCompat(
      _matA2.copy(this._parentMatrixWorld).multiply(this._initialLocalMatrix)
    );
    const applyRotation = _quatA8.setFromUnitVectors(
      this._boneAxis,
      _v3A62.copy(_nextTail).applyMatrix4(worldSpaceInitialMatrixInv).normalize()
    );
    this.bone.quaternion.copy(this._initialLocalRotation).multiply(applyRotation);
    this.bone.updateMatrix();
    this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld, this.bone.matrix);
  }
  /**
   * Do collision math against every colliders attached to this bone.
   *
   * @param tail The tail you want to process
   */
  _collision(tail) {
    this.colliderGroups.forEach((colliderGroup) => {
      colliderGroup.colliders.forEach((collider) => {
        const dist = collider.shape.calculateCollision(collider.matrixWorld, tail, this.settings.hitRadius, _v3A62);
        if (dist < 0) {
          tail.add(_v3A62.multiplyScalar(-dist));
          tail.sub(_worldSpacePosition).normalize().multiplyScalar(this._worldSpaceBoneLength).add(_worldSpacePosition);
        }
      });
    });
  }
  /**
   * Calculate the {@link _worldSpaceBoneLength}.
   * Intended to be used in {@link update}.
   */
  _calcWorldSpaceBoneLength() {
    _v3A62.setFromMatrixPosition(this.bone.matrixWorld);
    if (this.child) {
      _v3B23.setFromMatrixPosition(this.child.matrixWorld);
    } else {
      _v3B23.copy(this._initialLocalChildPosition);
      _v3B23.applyMatrix4(this.bone.matrixWorld);
    }
    this._worldSpaceBoneLength = _v3A62.sub(_v3B23).length();
  }
  /**
   * Create a matrix that converts center space into world space.
   * @param target Target matrix
   */
  _getMatrixCenterToWorld(target) {
    if (this._center) {
      target.copy(this._center.matrixWorld);
    } else {
      target.identity();
    }
    return target;
  }
  /**
   * Create a matrix that converts world space into center space.
   * @param target Target matrix
   */
  _getMatrixWorldToCenter(target) {
    if (this._center) {
      target.copy(this._center.userData.inverseCacheProxy.inverse);
    } else {
      target.identity();
    }
    return target;
  }
};
function traverseAncestorsFromRoot2(object, callback) {
  const ancestors = [];
  let head = object;
  while (head !== null) {
    ancestors.unshift(head);
    head = head.parent;
  }
  ancestors.forEach((ancestor) => {
    callback(ancestor);
  });
}
function traverseChildrenUntilConditionMet(object, callback) {
  object.children.forEach((child) => {
    const result = callback(child);
    if (!result) {
      traverseChildrenUntilConditionMet(child, callback);
    }
  });
}
var VRMSpringBoneManager = class {
  constructor() {
    this._joints = /* @__PURE__ */ new Set();
    this._hasWarnedCircularDependency = false;
    this._objectSpringBonesMap = /* @__PURE__ */ new Map();
  }
  get joints() {
    return this._joints;
  }
  /**
   * @deprecated Use {@link joints} instead.
   */
  get springBones() {
    console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead.");
    return this._joints;
  }
  get colliderGroups() {
    const set = /* @__PURE__ */ new Set();
    this._joints.forEach((springBone) => {
      springBone.colliderGroups.forEach((colliderGroup) => {
        set.add(colliderGroup);
      });
    });
    return Array.from(set);
  }
  get colliders() {
    const set = /* @__PURE__ */ new Set();
    this.colliderGroups.forEach((colliderGroup) => {
      colliderGroup.colliders.forEach((collider) => {
        set.add(collider);
      });
    });
    return Array.from(set);
  }
  addJoint(joint) {
    this._joints.add(joint);
    let objectSet = this._objectSpringBonesMap.get(joint.bone);
    if (objectSet == null) {
      objectSet = /* @__PURE__ */ new Set();
      this._objectSpringBonesMap.set(joint.bone, objectSet);
    }
    objectSet.add(joint);
  }
  /**
   * @deprecated Use {@link addJoint} instead.
   */
  addSpringBone(joint) {
    console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead.");
    this.addJoint(joint);
  }
  deleteJoint(joint) {
    this._joints.delete(joint);
    const objectSet = this._objectSpringBonesMap.get(joint.bone);
    objectSet.delete(joint);
  }
  /**
   * @deprecated Use {@link deleteJoint} instead.
   */
  deleteSpringBone(joint) {
    console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead.");
    this.deleteJoint(joint);
  }
  setInitState() {
    const springBonesTried = /* @__PURE__ */ new Set();
    const springBonesDone = /* @__PURE__ */ new Set();
    const objectUpdated = /* @__PURE__ */ new Set();
    for (const springBone of this._joints) {
      this._processSpringBone(
        springBone,
        springBonesTried,
        springBonesDone,
        objectUpdated,
        (springBone2) => springBone2.setInitState()
      );
    }
  }
  reset() {
    const springBonesTried = /* @__PURE__ */ new Set();
    const springBonesDone = /* @__PURE__ */ new Set();
    const objectUpdated = /* @__PURE__ */ new Set();
    for (const springBone of this._joints) {
      this._processSpringBone(
        springBone,
        springBonesTried,
        springBonesDone,
        objectUpdated,
        (springBone2) => springBone2.reset()
      );
    }
  }
  update(delta) {
    const springBonesTried = /* @__PURE__ */ new Set();
    const springBonesDone = /* @__PURE__ */ new Set();
    const objectUpdated = /* @__PURE__ */ new Set();
    for (const springBone of this._joints) {
      this._processSpringBone(
        springBone,
        springBonesTried,
        springBonesDone,
        objectUpdated,
        (springBone2) => springBone2.update(delta)
      );
      traverseChildrenUntilConditionMet(springBone.bone, (object) => {
        var _a, _b;
        if (((_b = (_a = this._objectSpringBonesMap.get(object)) == null ? void 0 : _a.size) != null ? _b : 0) > 0) {
          return true;
        }
        object.updateWorldMatrix(false, false);
        return false;
      });
    }
  }
  /**
   * Update a spring bone.
   * If there are other spring bone that are dependant, it will try to update them recursively.
   * It updates matrixWorld of all ancestors and myself.
   * It might log an warning message if there are any circular dependencies.
   *
   * Intended to be used in {@link update} and {@link _processSpringBone} itself recursively.
   *
   * @param springBone A springBone you want to update
   * @param springBonesTried Set of springBones that are already tried to be updated
   * @param springBonesDone Set of springBones that are already up to date
   * @param objectUpdated Set of object3D whose matrixWorld is updated
   */
  _processSpringBone(springBone, springBonesTried, springBonesDone, objectUpdated, callback) {
    if (springBonesDone.has(springBone)) {
      return;
    }
    if (springBonesTried.has(springBone)) {
      if (!this._hasWarnedCircularDependency) {
        console.warn("VRMSpringBoneManager: Circular dependency detected while updating springbones");
        this._hasWarnedCircularDependency = true;
      }
      return;
    }
    springBonesTried.add(springBone);
    const depObjects = this._getDependencies(springBone);
    for (const depObject of depObjects) {
      traverseAncestorsFromRoot2(depObject, (depObjectAncestor) => {
        const objectSet = this._objectSpringBonesMap.get(depObjectAncestor);
        if (objectSet) {
          for (const depSpringBone of objectSet) {
            this._processSpringBone(depSpringBone, springBonesTried, springBonesDone, objectUpdated, callback);
          }
        } else if (!objectUpdated.has(depObjectAncestor)) {
          depObjectAncestor.updateWorldMatrix(false, false);
          objectUpdated.add(depObjectAncestor);
        }
      });
    }
    springBone.bone.updateMatrix();
    springBone.bone.updateWorldMatrix(false, false);
    callback(springBone);
    objectUpdated.add(springBone.bone);
    springBonesDone.add(springBone);
  }
  /**
   * Return a set of objects that are dependant of given spring bone.
   * @param springBone A spring bone
   * @return A set of objects that are dependant of given spring bone
   */
  _getDependencies(springBone) {
    const set = /* @__PURE__ */ new Set();
    const parent = springBone.bone.parent;
    if (parent) {
      set.add(parent);
    }
    springBone.colliderGroups.forEach((colliderGroup) => {
      colliderGroup.colliders.forEach((collider) => {
        set.add(collider);
      });
    });
    return set;
  }
};
var EXTENSION_NAME_EXTENDED_COLLIDER = "VRMC_springBone_extended_collider";
var POSSIBLE_SPEC_VERSIONS8 = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
var POSSIBLE_SPEC_VERSIONS_EXTENDED_COLLIDERS = /* @__PURE__ */ new Set(["1.0"]);
var _VRMSpringBoneLoaderPlugin = class _VRMSpringBoneLoaderPlugin2 {
  get name() {
    return _VRMSpringBoneLoaderPlugin2.EXTENSION_NAME;
  }
  constructor(parser, options) {
    var _a;
    this.parser = parser;
    this.jointHelperRoot = options == null ? void 0 : options.jointHelperRoot;
    this.colliderHelperRoot = options == null ? void 0 : options.colliderHelperRoot;
    this.useExtendedColliders = (_a = options == null ? void 0 : options.useExtendedColliders) != null ? _a : true;
  }
  afterRoot(gltf) {
    return __async7(this, null, function* () {
      gltf.userData.vrmSpringBoneManager = yield this._import(gltf);
    });
  }
  /**
   * Import spring bones from a GLTF and return a {@link VRMSpringBoneManager}.
   * It might return `null` instead when it does not need to be created or something go wrong.
   *
   * @param gltf A parsed result of GLTF taken from GLTFLoader
   */
  _import(gltf) {
    return __async7(this, null, function* () {
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
    return __async7(this, null, function* () {
      var _a, _b, _c, _d, _e;
      const json = gltf.parser.json;
      const isSpringBoneUsed = ((_a = json.extensionsUsed) == null ? void 0 : _a.indexOf(_VRMSpringBoneLoaderPlugin2.EXTENSION_NAME)) !== -1;
      if (!isSpringBoneUsed) {
        return null;
      }
      const manager = new VRMSpringBoneManager();
      const threeNodes = yield gltf.parser.getDependencies("node");
      const extension = (_b = json.extensions) == null ? void 0 : _b[_VRMSpringBoneLoaderPlugin2.EXTENSION_NAME];
      if (!extension) {
        return null;
      }
      const specVersion = extension.specVersion;
      if (!POSSIBLE_SPEC_VERSIONS8.has(specVersion)) {
        console.warn(
          `VRMSpringBoneLoaderPlugin: Unknown ${_VRMSpringBoneLoaderPlugin2.EXTENSION_NAME} specVersion "${specVersion}"`
        );
        return null;
      }
      const colliders = (_c = extension.colliders) == null ? void 0 : _c.map((schemaCollider, iCollider) => {
        var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
        const node = threeNodes[schemaCollider.node];
        const schemaShape = schemaCollider.shape;
        const schemaExCollider = (_a2 = schemaCollider.extensions) == null ? void 0 : _a2[EXTENSION_NAME_EXTENDED_COLLIDER];
        if (this.useExtendedColliders && schemaExCollider != null) {
          const specVersionExCollider = schemaExCollider.specVersion;
          if (!POSSIBLE_SPEC_VERSIONS_EXTENDED_COLLIDERS.has(specVersionExCollider)) {
            console.warn(
              `VRMSpringBoneLoaderPlugin: Unknown ${EXTENSION_NAME_EXTENDED_COLLIDER} specVersion "${specVersionExCollider}". Fallbacking to the ${_VRMSpringBoneLoaderPlugin2.EXTENSION_NAME} definition`
            );
          } else {
            const schemaExShape = schemaExCollider.shape;
            if (schemaExShape.sphere) {
              return this._importSphereCollider(node, {
                offset: new THREE142.Vector3().fromArray((_b2 = schemaExShape.sphere.offset) != null ? _b2 : [0, 0, 0]),
                radius: (_c2 = schemaExShape.sphere.radius) != null ? _c2 : 0,
                inside: (_d2 = schemaExShape.sphere.inside) != null ? _d2 : false
              });
            } else if (schemaExShape.capsule) {
              return this._importCapsuleCollider(node, {
                offset: new THREE142.Vector3().fromArray((_e2 = schemaExShape.capsule.offset) != null ? _e2 : [0, 0, 0]),
                radius: (_f = schemaExShape.capsule.radius) != null ? _f : 0,
                tail: new THREE142.Vector3().fromArray((_g = schemaExShape.capsule.tail) != null ? _g : [0, 0, 0]),
                inside: (_h = schemaExShape.capsule.inside) != null ? _h : false
              });
            } else if (schemaExShape.plane) {
              return this._importPlaneCollider(node, {
                offset: new THREE142.Vector3().fromArray((_i = schemaExShape.plane.offset) != null ? _i : [0, 0, 0]),
                normal: new THREE142.Vector3().fromArray((_j = schemaExShape.plane.normal) != null ? _j : [0, 0, 1])
              });
            }
          }
        }
        if (schemaShape.sphere) {
          return this._importSphereCollider(node, {
            offset: new THREE142.Vector3().fromArray((_k = schemaShape.sphere.offset) != null ? _k : [0, 0, 0]),
            radius: (_l = schemaShape.sphere.radius) != null ? _l : 0,
            inside: false
          });
        } else if (schemaShape.capsule) {
          return this._importCapsuleCollider(node, {
            offset: new THREE142.Vector3().fromArray((_m = schemaShape.capsule.offset) != null ? _m : [0, 0, 0]),
            radius: (_n = schemaShape.capsule.radius) != null ? _n : 0,
            tail: new THREE142.Vector3().fromArray((_o = schemaShape.capsule.tail) != null ? _o : [0, 0, 0]),
            inside: false
          });
        }
        throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${iCollider} has no valid shape`);
      });
      const colliderGroups = (_d = extension.colliderGroups) == null ? void 0 : _d.map(
        (schemaColliderGroup, iColliderGroup) => {
          var _a2;
          const cols = ((_a2 = schemaColliderGroup.colliders) != null ? _a2 : []).map((iCollider) => {
            const col = colliders == null ? void 0 : colliders[iCollider];
            if (col == null) {
              throw new Error(
                `VRMSpringBoneLoaderPlugin: The colliderGroup #${iColliderGroup} attempted to use a collider #${iCollider} but not found`
              );
            }
            return col;
          });
          return {
            colliders: cols,
            name: schemaColliderGroup.name
          };
        }
      );
      (_e = extension.springs) == null ? void 0 : _e.forEach((schemaSpring, iSpring) => {
        var _a2;
        const schemaJoints = schemaSpring.joints;
        const colliderGroupsForSpring = (_a2 = schemaSpring.colliderGroups) == null ? void 0 : _a2.map((iColliderGroup) => {
          const group = colliderGroups == null ? void 0 : colliderGroups[iColliderGroup];
          if (group == null) {
            throw new Error(
              `VRMSpringBoneLoaderPlugin: The spring #${iSpring} attempted to use a colliderGroup ${iColliderGroup} but not found`
            );
          }
          return group;
        });
        const center = schemaSpring.center != null ? threeNodes[schemaSpring.center] : void 0;
        let prevSchemaJoint;
        schemaJoints.forEach((schemaJoint) => {
          if (prevSchemaJoint) {
            const nodeIndex = prevSchemaJoint.node;
            const node = threeNodes[nodeIndex];
            const childIndex = schemaJoint.node;
            const child = threeNodes[childIndex];
            const setting = {
              hitRadius: prevSchemaJoint.hitRadius,
              dragForce: prevSchemaJoint.dragForce,
              gravityPower: prevSchemaJoint.gravityPower,
              stiffness: prevSchemaJoint.stiffness,
              gravityDir: prevSchemaJoint.gravityDir != null ? new THREE142.Vector3().fromArray(prevSchemaJoint.gravityDir) : void 0
            };
            const joint = this._importJoint(node, child, setting, colliderGroupsForSpring);
            if (center) {
              joint.center = center;
            }
            manager.addJoint(joint);
          }
          prevSchemaJoint = schemaJoint;
        });
      });
      manager.setInitState();
      return manager;
    });
  }
  _v0Import(gltf) {
    return __async7(this, null, function* () {
      var _a, _b, _c;
      const json = gltf.parser.json;
      const isVRMUsed = ((_a = json.extensionsUsed) == null ? void 0 : _a.indexOf("VRM")) !== -1;
      if (!isVRMUsed) {
        return null;
      }
      const extension = (_b = json.extensions) == null ? void 0 : _b["VRM"];
      const schemaSecondaryAnimation = extension == null ? void 0 : extension.secondaryAnimation;
      if (!schemaSecondaryAnimation) {
        return null;
      }
      const schemaBoneGroups = schemaSecondaryAnimation == null ? void 0 : schemaSecondaryAnimation.boneGroups;
      if (!schemaBoneGroups) {
        return null;
      }
      const manager = new VRMSpringBoneManager();
      const threeNodes = yield gltf.parser.getDependencies("node");
      const colliderGroups = (_c = schemaSecondaryAnimation.colliderGroups) == null ? void 0 : _c.map(
        (schemaColliderGroup) => {
          var _a2;
          const node = threeNodes[schemaColliderGroup.node];
          const colliders = ((_a2 = schemaColliderGroup.colliders) != null ? _a2 : []).map((schemaCollider, iCollider) => {
            var _a3, _b2, _c2;
            const offset = new THREE142.Vector3(0, 0, 0);
            if (schemaCollider.offset) {
              offset.set(
                (_a3 = schemaCollider.offset.x) != null ? _a3 : 0,
                (_b2 = schemaCollider.offset.y) != null ? _b2 : 0,
                schemaCollider.offset.z ? -schemaCollider.offset.z : 0
                // z is opposite in VRM0.0
              );
            }
            return this._importSphereCollider(node, {
              offset,
              radius: (_c2 = schemaCollider.radius) != null ? _c2 : 0,
              inside: false
            });
          });
          return { colliders };
        }
      );
      schemaBoneGroups == null ? void 0 : schemaBoneGroups.forEach((schemaBoneGroup, iBoneGroup) => {
        const rootIndices = schemaBoneGroup.bones;
        if (!rootIndices) {
          return;
        }
        rootIndices.forEach((rootIndex) => {
          var _a2, _b2, _c2, _d;
          const root = threeNodes[rootIndex];
          const gravityDir = new THREE142.Vector3();
          if (schemaBoneGroup.gravityDir) {
            gravityDir.set(
              (_a2 = schemaBoneGroup.gravityDir.x) != null ? _a2 : 0,
              (_b2 = schemaBoneGroup.gravityDir.y) != null ? _b2 : 0,
              (_c2 = schemaBoneGroup.gravityDir.z) != null ? _c2 : 0
            );
          } else {
            gravityDir.set(0, -1, 0);
          }
          const center = schemaBoneGroup.center != null ? threeNodes[schemaBoneGroup.center] : void 0;
          const setting = {
            hitRadius: schemaBoneGroup.hitRadius,
            dragForce: schemaBoneGroup.dragForce,
            gravityPower: schemaBoneGroup.gravityPower,
            stiffness: schemaBoneGroup.stiffiness,
            gravityDir
          };
          const colliderGroupsForSpring = (_d = schemaBoneGroup.colliderGroups) == null ? void 0 : _d.map((iColliderGroup) => {
            const group = colliderGroups == null ? void 0 : colliderGroups[iColliderGroup];
            if (group == null) {
              throw new Error(
                `VRMSpringBoneLoaderPlugin: The spring #${iBoneGroup} attempted to use a colliderGroup ${iColliderGroup} but not found`
              );
            }
            return group;
          });
          root.traverse((node) => {
            var _a3;
            const child = (_a3 = node.children[0]) != null ? _a3 : null;
            const joint = this._importJoint(node, child, setting, colliderGroupsForSpring);
            if (center) {
              joint.center = center;
            }
            manager.addJoint(joint);
          });
        });
      });
      gltf.scene.updateMatrixWorld();
      manager.setInitState();
      return manager;
    });
  }
  _importJoint(node, child, setting, colliderGroupsForSpring) {
    const springBone = new VRMSpringBoneJoint(node, child, setting, colliderGroupsForSpring);
    if (this.jointHelperRoot) {
      const helper = new VRMSpringBoneJointHelper(springBone);
      this.jointHelperRoot.add(helper);
      helper.renderOrder = this.jointHelperRoot.renderOrder;
    }
    return springBone;
  }
  _importSphereCollider(destination, params) {
    const shape = new VRMSpringBoneColliderShapeSphere(params);
    const collider = new VRMSpringBoneCollider(shape);
    destination.add(collider);
    if (this.colliderHelperRoot) {
      const helper = new VRMSpringBoneColliderHelper(collider);
      this.colliderHelperRoot.add(helper);
      helper.renderOrder = this.colliderHelperRoot.renderOrder;
    }
    return collider;
  }
  _importCapsuleCollider(destination, params) {
    const shape = new VRMSpringBoneColliderShapeCapsule(params);
    const collider = new VRMSpringBoneCollider(shape);
    destination.add(collider);
    if (this.colliderHelperRoot) {
      const helper = new VRMSpringBoneColliderHelper(collider);
      this.colliderHelperRoot.add(helper);
      helper.renderOrder = this.colliderHelperRoot.renderOrder;
    }
    return collider;
  }
  _importPlaneCollider(destination, params) {
    const shape = new VRMSpringBoneColliderShapePlane(params);
    const collider = new VRMSpringBoneCollider(shape);
    destination.add(collider);
    if (this.colliderHelperRoot) {
      const helper = new VRMSpringBoneColliderHelper(collider);
      this.colliderHelperRoot.add(helper);
      helper.renderOrder = this.colliderHelperRoot.renderOrder;
    }
    return collider;
  }
};
_VRMSpringBoneLoaderPlugin.EXTENSION_NAME = "VRMC_springBone";
var VRMSpringBoneLoaderPlugin = _VRMSpringBoneLoaderPlugin;

// src/VRMLoaderPlugin.ts
var VRMLoaderPlugin = class {
  get name() {
    return "VRMLoaderPlugin";
  }
  constructor(parser, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    this.parser = parser;
    const helperRoot = options == null ? void 0 : options.helperRoot;
    const autoUpdateHumanBones = options == null ? void 0 : options.autoUpdateHumanBones;
    this.expressionPlugin = (_a = options == null ? void 0 : options.expressionPlugin) != null ? _a : new VRMExpressionLoaderPlugin(parser);
    this.firstPersonPlugin = (_b = options == null ? void 0 : options.firstPersonPlugin) != null ? _b : new VRMFirstPersonLoaderPlugin(parser);
    this.humanoidPlugin = (_c = options == null ? void 0 : options.humanoidPlugin) != null ? _c : new VRMHumanoidLoaderPlugin(parser, {
      helperRoot,
      autoUpdateHumanBones
    });
    this.lookAtPlugin = (_d = options == null ? void 0 : options.lookAtPlugin) != null ? _d : new VRMLookAtLoaderPlugin(parser, { helperRoot });
    this.metaPlugin = (_e = options == null ? void 0 : options.metaPlugin) != null ? _e : new VRMMetaLoaderPlugin(parser);
    this.mtoonMaterialPlugin = (_f = options == null ? void 0 : options.mtoonMaterialPlugin) != null ? _f : new MToonMaterialLoaderPlugin(parser);
    this.materialsHDREmissiveMultiplierPlugin = (_g = options == null ? void 0 : options.materialsHDREmissiveMultiplierPlugin) != null ? _g : new VRMMaterialsHDREmissiveMultiplierLoaderPlugin(parser);
    this.materialsV0CompatPlugin = (_h = options == null ? void 0 : options.materialsV0CompatPlugin) != null ? _h : new VRMMaterialsV0CompatPlugin(parser);
    this.springBonePlugin = (_i = options == null ? void 0 : options.springBonePlugin) != null ? _i : new VRMSpringBoneLoaderPlugin(parser, {
      colliderHelperRoot: helperRoot,
      jointHelperRoot: helperRoot
    });
    this.nodeConstraintPlugin = (_j = options == null ? void 0 : options.nodeConstraintPlugin) != null ? _j : new VRMNodeConstraintLoaderPlugin(parser, { helperRoot });
  }
  beforeRoot() {
    return __async(this, null, function* () {
      yield this.materialsV0CompatPlugin.beforeRoot();
      yield this.mtoonMaterialPlugin.beforeRoot();
    });
  }
  loadMesh(meshIndex) {
    return __async(this, null, function* () {
      return yield this.mtoonMaterialPlugin.loadMesh(meshIndex);
    });
  }
  getMaterialType(materialIndex) {
    const mtoonType = this.mtoonMaterialPlugin.getMaterialType(materialIndex);
    if (mtoonType != null) {
      return mtoonType;
    }
    return null;
  }
  extendMaterialParams(materialIndex, materialParams) {
    return __async(this, null, function* () {
      yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(materialIndex, materialParams);
      yield this.mtoonMaterialPlugin.extendMaterialParams(materialIndex, materialParams);
    });
  }
  afterRoot(gltf) {
    return __async(this, null, function* () {
      yield this.metaPlugin.afterRoot(gltf);
      yield this.humanoidPlugin.afterRoot(gltf);
      yield this.expressionPlugin.afterRoot(gltf);
      yield this.lookAtPlugin.afterRoot(gltf);
      yield this.firstPersonPlugin.afterRoot(gltf);
      yield this.springBonePlugin.afterRoot(gltf);
      yield this.nodeConstraintPlugin.afterRoot(gltf);
      yield this.mtoonMaterialPlugin.afterRoot(gltf);
      const meta = gltf.userData.vrmMeta;
      const humanoid = gltf.userData.vrmHumanoid;
      if (meta && humanoid) {
        const vrm = new VRM({
          scene: gltf.scene,
          expressionManager: gltf.userData.vrmExpressionManager,
          firstPerson: gltf.userData.vrmFirstPerson,
          humanoid,
          lookAt: gltf.userData.vrmLookAt,
          meta,
          materials: gltf.userData.vrmMToonMaterials,
          springBoneManager: gltf.userData.vrmSpringBoneManager,
          nodeConstraintManager: gltf.userData.vrmNodeConstraintManager
        });
        gltf.userData.vrm = vrm;
      }
    });
  }
};

// src/VRMUtils/combineSkeletons.ts
var THREE21 = __toESM(require("three"), 1);
function combineSkeletons(root) {
  const skinnedMeshes = /* @__PURE__ */ new Set();
  const geometryToSkinnedMesh = /* @__PURE__ */ new Map();
  root.traverse((obj) => {
    if (obj.type !== "SkinnedMesh") {
      return;
    }
    const skinnedMesh = obj;
    const previousSkinnedMesh = geometryToSkinnedMesh.get(skinnedMesh.geometry);
    if (previousSkinnedMesh) {
      skinnedMeshes.delete(previousSkinnedMesh);
    } else {
      geometryToSkinnedMesh.set(skinnedMesh.geometry, skinnedMesh);
      skinnedMeshes.add(skinnedMesh);
    }
  });
  const newSkeletons = [];
  skinnedMeshes.forEach((skinnedMesh) => {
    const skeleton = skinnedMesh.skeleton;
    let newSkeleton = newSkeletons.find((candidate) => skeletonMatches(skeleton, candidate));
    if (!newSkeleton) {
      newSkeleton = { bones: [], boneInverses: [], meshes: [] };
      newSkeletons.push(newSkeleton);
    }
    newSkeleton.meshes.push(skinnedMesh);
    const boneIndexMap = skeleton.bones.map((bone) => newSkeleton.bones.indexOf(bone));
    const geometry = skinnedMesh.geometry;
    const attribute = geometry.getAttribute("skinIndex");
    const weightAttribute = geometry.getAttribute("skinWeight");
    for (let i = 0; i < attribute.count; i++) {
      for (let j = 0; j < attribute.itemSize; j++) {
        const weight = weightAttribute.getComponent(i, j);
        if (weight === 0) {
          continue;
        }
        const index = attribute.getComponent(i, j);
        if (boneIndexMap[index] === -1) {
          boneIndexMap[index] = newSkeleton.bones.length;
          newSkeleton.bones.push(skeleton.bones[index]);
          newSkeleton.boneInverses.push(skeleton.boneInverses[index]);
        }
        attribute.setComponent(i, j, boneIndexMap[index]);
      }
    }
    attribute.needsUpdate = true;
  });
  for (const { bones, boneInverses, meshes } of newSkeletons) {
    const newSkeleton = new THREE21.Skeleton(bones, boneInverses);
    meshes.forEach((mesh) => mesh.bind(newSkeleton, new THREE21.Matrix4()));
  }
}
function skeletonMatches(skeleton, candidate) {
  return skeleton.bones.every((bone, index) => {
    const candidateIndex = candidate.bones.indexOf(bone);
    if (candidateIndex !== -1) {
      return matrixEquals(skeleton.boneInverses[index], candidate.boneInverses[candidateIndex]);
    }
    return true;
  });
}
function matrixEquals(a, b, tolerance) {
  tolerance = tolerance || 1e-4;
  if (a.elements.length != b.elements.length) {
    return false;
  }
  for (let i = 0, il = a.elements.length; i < il; i++) {
    const delta = Math.abs(a.elements[i] - b.elements[i]);
    if (delta > tolerance) {
      return false;
    }
  }
  return true;
}

// src/VRMUtils/deepDispose.ts
function disposeMaterial(material) {
  Object.values(material).forEach((value) => {
    if (value == null ? void 0 : value.isTexture) {
      const texture = value;
      texture.dispose();
    }
  });
  if (material.isShaderMaterial) {
    const uniforms = material.uniforms;
    if (uniforms) {
      Object.values(uniforms).forEach((uniform) => {
        const value = uniform.value;
        if (value == null ? void 0 : value.isTexture) {
          const texture = value;
          texture.dispose();
        }
      });
    }
  }
  material.dispose();
}
function dispose(object3D) {
  const geometry = object3D.geometry;
  if (geometry) {
    geometry.dispose();
  }
  const skeleton = object3D.skeleton;
  if (skeleton) {
    skeleton.dispose();
  }
  const material = object3D.material;
  if (material) {
    if (Array.isArray(material)) {
      material.forEach((material2) => disposeMaterial(material2));
    } else if (material) {
      disposeMaterial(material);
    }
  }
}
function deepDispose(object3D) {
  object3D.traverse(dispose);
}

// src/VRMUtils/removeUnnecessaryJoints.ts
var THREE25 = __toESM(require("three"), 1);
function removeUnnecessaryJoints(root, options) {
  var _a;
  console.warn(
    "VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version."
  );
  const experimentalSameBoneCounts = (_a = options == null ? void 0 : options.experimentalSameBoneCounts) != null ? _a : false;
  const skinnedMeshes = [];
  root.traverse((obj) => {
    if (obj.type !== "SkinnedMesh") {
      return;
    }
    skinnedMeshes.push(obj);
  });
  const bonesList = /* @__PURE__ */ new Map();
  let maxBones = 0;
  for (const mesh of skinnedMeshes) {
    const geometry = mesh.geometry;
    const attribute = geometry.getAttribute("skinIndex");
    const bones = [];
    const boneInverses = [];
    const boneIndexMap = {};
    for (let i = 0; i < attribute.count; i++) {
      for (let j = 0; j < attribute.itemSize; j++) {
        const index = attribute.getComponent(i, j);
        if (boneIndexMap[index] == null) {
          boneIndexMap[index] = bones.length;
          bones.push(mesh.skeleton.bones[index]);
          boneInverses.push(mesh.skeleton.boneInverses[index]);
        }
        attribute.setComponent(i, j, boneIndexMap[index]);
      }
    }
    attribute.needsUpdate = true;
    bonesList.set(mesh, { bones, boneInverses });
    maxBones = Math.max(maxBones, bones.length);
  }
  for (const mesh of skinnedMeshes) {
    const { bones, boneInverses } = bonesList.get(mesh);
    if (experimentalSameBoneCounts) {
      for (let i = bones.length; i < maxBones; i++) {
        bones[i] = bones[0];
        boneInverses[i] = boneInverses[0];
      }
    }
    const skeleton = new THREE25.Skeleton(bones, boneInverses);
    mesh.bind(skeleton, new THREE25.Matrix4());
  }
}

// src/VRMUtils/removeUnnecessaryVertices.ts
var THREE26 = __toESM(require("three"), 1);
var import_three = require("three");
function removeUnnecessaryVertices(root) {
  const geometryMap = /* @__PURE__ */ new Map();
  root.traverse((obj) => {
    var _a, _b, _c, _d;
    if (!obj.isMesh) {
      return;
    }
    const mesh = obj;
    const geometry = mesh.geometry;
    const originalIndex = geometry.index;
    if (originalIndex == null) {
      return;
    }
    const newGeometryAlreadyExisted = geometryMap.get(geometry);
    if (newGeometryAlreadyExisted != null) {
      mesh.geometry = newGeometryAlreadyExisted;
      return;
    }
    const vertexCount = Object.values(geometry.attributes)[0].count;
    const vertexInUse = new Array(vertexCount);
    let verticesUsed = 0;
    const originalIndexArray = originalIndex.array;
    for (let i = 0; i < originalIndexArray.length; i++) {
      const index = originalIndexArray[i];
      if (!vertexInUse[index]) {
        vertexInUse[index] = true;
        verticesUsed++;
      }
    }
    if (verticesUsed === vertexCount) {
      return;
    }
    const originalIndexNewIndexMap = [];
    const newIndexOriginalIndexMap = [];
    let indexHead = 0;
    for (let i = 0; i < vertexInUse.length; i++) {
      if (vertexInUse[i]) {
        const newIndex = indexHead++;
        originalIndexNewIndexMap[i] = newIndex;
        newIndexOriginalIndexMap[newIndex] = i;
      }
    }
    const newGeometry = new THREE26.BufferGeometry();
    newGeometry.name = geometry.name;
    newGeometry.morphTargetsRelative = geometry.morphTargetsRelative;
    geometry.groups.forEach((group) => {
      newGeometry.addGroup(group.start, group.count, group.materialIndex);
    });
    newGeometry.boundingBox = (_b = (_a = geometry.boundingBox) == null ? void 0 : _a.clone()) != null ? _b : null;
    newGeometry.boundingSphere = (_d = (_c = geometry.boundingSphere) == null ? void 0 : _c.clone()) != null ? _d : null;
    newGeometry.setDrawRange(geometry.drawRange.start, geometry.drawRange.count);
    newGeometry.userData = geometry.userData;
    geometryMap.set(geometry, newGeometry);
    {
      const originalIndexArray2 = originalIndex.array;
      const newIndexArray = new originalIndexArray2.constructor(originalIndexArray2.length);
      for (let i = 0; i < originalIndexArray2.length; i++) {
        const originalIndex2 = originalIndexArray2[i];
        const newIndex = originalIndexNewIndexMap[originalIndex2];
        newIndexArray[i] = newIndex;
      }
      newGeometry.setIndex(new import_three.BufferAttribute(newIndexArray, 1, false));
    }
    Object.keys(geometry.attributes).forEach((attributeName) => {
      const originalAttribute = geometry.attributes[attributeName];
      if (originalAttribute.isInterleavedBufferAttribute) {
        throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");
      }
      const originalAttributeArray = originalAttribute.array;
      const { itemSize, normalized } = originalAttribute;
      const newAttributeArray = new originalAttributeArray.constructor(
        newIndexOriginalIndexMap.length * itemSize
      );
      newIndexOriginalIndexMap.forEach((originalIndex2, i) => {
        for (let j = 0; j < itemSize; j++) {
          newAttributeArray[i * itemSize + j] = originalAttributeArray[originalIndex2 * itemSize + j];
        }
      });
      newGeometry.setAttribute(attributeName, new import_three.BufferAttribute(newAttributeArray, itemSize, normalized));
    });
    let isNullMorph = true;
    Object.keys(geometry.morphAttributes).forEach((attributeName) => {
      newGeometry.morphAttributes[attributeName] = [];
      const morphs = geometry.morphAttributes[attributeName];
      for (let iMorph = 0; iMorph < morphs.length; iMorph++) {
        const originalAttribute = morphs[iMorph];
        if (originalAttribute.isInterleavedBufferAttribute) {
          throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");
        }
        const originalAttributeArray = originalAttribute.array;
        const { itemSize, normalized } = originalAttribute;
        const newAttributeArray = new originalAttributeArray.constructor(
          newIndexOriginalIndexMap.length * itemSize
        );
        newIndexOriginalIndexMap.forEach((originalIndex2, i) => {
          for (let j = 0; j < itemSize; j++) {
            newAttributeArray[i * itemSize + j] = originalAttributeArray[originalIndex2 * itemSize + j];
          }
        });
        isNullMorph = isNullMorph && newAttributeArray.every((v) => v === 0);
        newGeometry.morphAttributes[attributeName][iMorph] = new import_three.BufferAttribute(
          newAttributeArray,
          itemSize,
          normalized
        );
      }
    });
    if (isNullMorph) {
      newGeometry.morphAttributes = {};
    }
    mesh.geometry = newGeometry;
  });
  Array.from(geometryMap.keys()).forEach((originalGeometry) => {
    originalGeometry.dispose();
  });
}

// src/VRMUtils/rotateVRM0.ts
function rotateVRM0(vrm) {
  var _a;
  if (((_a = vrm.meta) == null ? void 0 : _a.metaVersion) === "0") {
    vrm.scene.rotation.y = Math.PI;
  }
}

// src/VRMUtils/index.ts
var VRMUtils = class {
  constructor() {
  }
};
VRMUtils.combineSkeletons = combineSkeletons;
VRMUtils.deepDispose = deepDispose;
VRMUtils.removeUnnecessaryJoints = removeUnnecessaryJoints;
VRMUtils.removeUnnecessaryVertices = removeUnnecessaryVertices;
VRMUtils.rotateVRM0 = rotateVRM0;
/*!
 * @pixiv/three-vrm-core v3.2.0
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
/*!
 * @pixiv/three-vrm-materials-mtoon v3.2.0
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
/*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.2.0
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
/*!
 * @pixiv/three-vrm-materials-v0compat v3.2.0
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
/*!
 * @pixiv/three-vrm-node-constraint v3.2.0
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
/*!
 * @pixiv/three-vrm-springbone v3.2.0
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy91dGlscy9nbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvblByZXNldE5hbWUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL3V0aWxzL3NhdHVyYXRlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTWFuYWdlci50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25Nb3JwaFRhcmdldEJpbmQudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZC50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb24udHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2ZpcnN0UGVyc29uL1ZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9maXJzdFBlcnNvbi9WUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvaGVscGVycy9WUk1IdW1hbm9pZEhlbHBlci50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvVlJNSHVtYW5Cb25lTGlzdC50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvVlJNSHVtYW5Cb25lTmFtZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvVlJNSHVtYW5Cb25lUGFyZW50TWFwLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9WUk1SaWcudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL3V0aWxzL3F1YXRJbnZlcnRDb21wYXQudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2h1bWFub2lkL1ZSTUh1bWFub2lkUmlnLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9WUk1IdW1hbm9pZC50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9WUk1IdW1hbm9pZExvYWRlclBsdWdpbi50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L2hlbHBlcnMvVlJNTG9va0F0SGVscGVyLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvaGVscGVycy91dGlscy9GYW5CdWZmZXJHZW9tZXRyeS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L2hlbHBlcnMvdXRpbHMvTGluZUFuZFNwaGVyZUJ1ZmZlckdlb21ldHJ5LnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvVlJNTG9va0F0LnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy91dGlscy9nZXRXb3JsZFF1YXRlcm5pb25MaXRlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvdXRpbHMvY2FsY0F6aW11dGhBbHRpdHVkZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L3V0aWxzL3Nhbml0aXplQW5nbGUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2xvb2tBdC9WUk1Mb29rQXRCb25lQXBwbGllci50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L1ZSTUxvb2tBdEV4cHJlc3Npb25BcHBsaWVyLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvVlJNTG9va0F0UmFuZ2VNYXAudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2xvb2tBdC9WUk1Mb29rQXRMb2FkZXJQbHVnaW4udHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2xvb2tBdC9WUk1Mb29rQXRUeXBlTmFtZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbWV0YS9WUk1NZXRhTG9hZGVyUGx1Z2luLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy91dGlscy9yZXNvbHZlVVJMLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9WUk1Db3JlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9WUk1Db3JlTG9hZGVyUGx1Z2luLnRzIiwgIi4uL3NyYy9WUk0udHMiLCAiLi4vLi4vdGhyZWUtdnJtLW1hdGVyaWFscy1tdG9vbi9zcmMvTVRvb25NYXRlcmlhbExvYWRlclBsdWdpbi50cyIsICIuLi8uLi90aHJlZS12cm0tbWF0ZXJpYWxzLW10b29uL3NyYy9HTFRGTVRvb25NYXRlcmlhbFBhcmFtc0Fzc2lnbkhlbHBlci50cyIsICIuLi8uLi90aHJlZS12cm0tbWF0ZXJpYWxzLW10b29uL3NyYy91dGlscy9zZXRUZXh0dXJlQ29sb3JTcGFjZS50cyIsICIuLi8uLi90aHJlZS12cm0tbWF0ZXJpYWxzLW10b29uL3NyYy9NVG9vbk1hdGVyaWFsLnRzIiwgIi4uLy4uL3RocmVlLXZybS1tYXRlcmlhbHMtbXRvb24vc3JjL3NoYWRlcnMvbXRvb24udmVydCIsICIuLi8uLi90aHJlZS12cm0tbWF0ZXJpYWxzLW10b29uL3NyYy9zaGFkZXJzL210b29uLmZyYWciLCAiLi4vLi4vdGhyZWUtdnJtLW1hdGVyaWFscy1tdG9vbi9zcmMvTVRvb25NYXRlcmlhbERlYnVnTW9kZS50cyIsICIuLi8uLi90aHJlZS12cm0tbWF0ZXJpYWxzLW10b29uL3NyYy9NVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZS50cyIsICIuLi8uLi90aHJlZS12cm0tbWF0ZXJpYWxzLW10b29uL3NyYy91dGlscy9nZXRUZXh0dXJlQ29sb3JTcGFjZS50cyIsICIuLi8uLi90aHJlZS12cm0tbWF0ZXJpYWxzLWhkci1lbWlzc2l2ZS1tdWx0aXBsaWVyL3NyYy9WUk1NYXRlcmlhbHNIRFJFbWlzc2l2ZU11bHRpcGxpZXJMb2FkZXJQbHVnaW4udHMiLCAiLi4vLi4vdGhyZWUtdnJtLW1hdGVyaWFscy12MGNvbXBhdC9zcmMvVlJNTWF0ZXJpYWxzVjBDb21wYXRQbHVnaW4udHMiLCAiLi4vLi4vdGhyZWUtdnJtLW1hdGVyaWFscy12MGNvbXBhdC9zcmMvdXRpbHMvZ2FtbWFFT1RGLnRzIiwgIi4uLy4uL3RocmVlLXZybS1ub2RlLWNvbnN0cmFpbnQvc3JjL2hlbHBlcnMvVlJNTm9kZUNvbnN0cmFpbnRIZWxwZXIudHMiLCAiLi4vLi4vdGhyZWUtdnJtLW5vZGUtY29uc3RyYWludC9zcmMvVlJNQWltQ29uc3RyYWludC50cyIsICIuLi8uLi90aHJlZS12cm0tbm9kZS1jb25zdHJhaW50L3NyYy91dGlscy9kZWNvbXBvc2VQb3NpdGlvbi50cyIsICIuLi8uLi90aHJlZS12cm0tbm9kZS1jb25zdHJhaW50L3NyYy91dGlscy9kZWNvbXBvc2VSb3RhdGlvbi50cyIsICIuLi8uLi90aHJlZS12cm0tbm9kZS1jb25zdHJhaW50L3NyYy91dGlscy9xdWF0SW52ZXJ0Q29tcGF0LnRzIiwgIi4uLy4uL3RocmVlLXZybS1ub2RlLWNvbnN0cmFpbnQvc3JjL1ZSTU5vZGVDb25zdHJhaW50LnRzIiwgIi4uLy4uL3RocmVlLXZybS1ub2RlLWNvbnN0cmFpbnQvc3JjL3V0aWxzL3RyYXZlcnNlQW5jZXN0b3JzRnJvbVJvb3QudHMiLCAiLi4vLi4vdGhyZWUtdnJtLW5vZGUtY29uc3RyYWludC9zcmMvVlJNTm9kZUNvbnN0cmFpbnRNYW5hZ2VyLnRzIiwgIi4uLy4uL3RocmVlLXZybS1ub2RlLWNvbnN0cmFpbnQvc3JjL1ZSTVJvdGF0aW9uQ29uc3RyYWludC50cyIsICIuLi8uLi90aHJlZS12cm0tbm9kZS1jb25zdHJhaW50L3NyYy9WUk1Sb2xsQ29uc3RyYWludC50cyIsICIuLi8uLi90aHJlZS12cm0tbm9kZS1jb25zdHJhaW50L3NyYy9WUk1Ob2RlQ29uc3RyYWludExvYWRlclBsdWdpbi50cyIsICIuLi8uLi90aHJlZS12cm0tc3ByaW5nYm9uZS9zcmMvaGVscGVycy9WUk1TcHJpbmdCb25lQ29sbGlkZXJIZWxwZXIudHMiLCAiLi4vLi4vdGhyZWUtdnJtLXNwcmluZ2JvbmUvc3JjL1ZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlQ2Fwc3VsZS50cyIsICIuLi8uLi90aHJlZS12cm0tc3ByaW5nYm9uZS9zcmMvVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLXNwcmluZ2JvbmUvc3JjL1ZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlUGxhbmUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLXNwcmluZ2JvbmUvc3JjL1ZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlU3BoZXJlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1zcHJpbmdib25lL3NyYy9oZWxwZXJzL3V0aWxzL0NvbGxpZGVyU2hhcGVDYXBzdWxlQnVmZmVyR2VvbWV0cnkudHMiLCAiLi4vLi4vdGhyZWUtdnJtLXNwcmluZ2JvbmUvc3JjL2hlbHBlcnMvdXRpbHMvQ29sbGlkZXJTaGFwZVBsYW5lQnVmZmVyR2VvbWV0cnkudHMiLCAiLi4vLi4vdGhyZWUtdnJtLXNwcmluZ2JvbmUvc3JjL2hlbHBlcnMvdXRpbHMvQ29sbGlkZXJTaGFwZVNwaGVyZUJ1ZmZlckdlb21ldHJ5LnRzIiwgIi4uLy4uL3RocmVlLXZybS1zcHJpbmdib25lL3NyYy9oZWxwZXJzL1ZSTVNwcmluZ0JvbmVKb2ludEhlbHBlci50cyIsICIuLi8uLi90aHJlZS12cm0tc3ByaW5nYm9uZS9zcmMvaGVscGVycy91dGlscy9TcHJpbmdCb25lQnVmZmVyR2VvbWV0cnkudHMiLCAiLi4vLi4vdGhyZWUtdnJtLXNwcmluZ2JvbmUvc3JjL1ZSTVNwcmluZ0JvbmVDb2xsaWRlci50cyIsICIuLi8uLi90aHJlZS12cm0tc3ByaW5nYm9uZS9zcmMvVlJNU3ByaW5nQm9uZUpvaW50LnRzIiwgIi4uLy4uL3RocmVlLXZybS1zcHJpbmdib25lL3NyYy91dGlscy9tYXQ0SW52ZXJ0Q29tcGF0LnRzIiwgIi4uLy4uL3RocmVlLXZybS1zcHJpbmdib25lL3NyYy91dGlscy9NYXRyaXg0SW52ZXJzZUNhY2hlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1zcHJpbmdib25lL3NyYy9WUk1TcHJpbmdCb25lTG9hZGVyUGx1Z2luLnRzIiwgIi4uLy4uL3RocmVlLXZybS1zcHJpbmdib25lL3NyYy91dGlscy90cmF2ZXJzZUFuY2VzdG9yc0Zyb21Sb290LnRzIiwgIi4uLy4uL3RocmVlLXZybS1zcHJpbmdib25lL3NyYy91dGlscy90cmF2ZXJzZUNoaWxkcmVuVW50aWxDb25kaXRpb25NZXQudHMiLCAiLi4vLi4vdGhyZWUtdnJtLXNwcmluZ2JvbmUvc3JjL1ZSTVNwcmluZ0JvbmVNYW5hZ2VyLnRzIiwgIi4uL3NyYy9WUk1Mb2FkZXJQbHVnaW4udHMiLCAiLi4vc3JjL1ZSTVV0aWxzL2NvbWJpbmVTa2VsZXRvbnMudHMiLCAiLi4vc3JjL1ZSTVV0aWxzL2RlZXBEaXNwb3NlLnRzIiwgIi4uL3NyYy9WUk1VdGlscy9yZW1vdmVVbm5lY2Vzc2FyeUpvaW50cy50cyIsICIuLi9zcmMvVlJNVXRpbHMvcmVtb3ZlVW5uZWNlc3NhcnlWZXJ0aWNlcy50cyIsICIuLi9zcmMvVlJNVXRpbHMvcm90YXRlVlJNMC50cyIsICIuLi9zcmMvVlJNVXRpbHMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCB7IFZSTSB9IGZyb20gJy4vVlJNJztcbmV4cG9ydCB7IFZSTUxvYWRlclBsdWdpbiB9IGZyb20gJy4vVlJNTG9hZGVyUGx1Z2luJztcbmV4cG9ydCB0eXBlIHsgVlJNTG9hZGVyUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vVlJNTG9hZGVyUGx1Z2luT3B0aW9ucyc7XG5leHBvcnQgdHlwZSB7IFZSTVBhcmFtZXRlcnMgfSBmcm9tICcuL1ZSTVBhcmFtZXRlcnMnO1xuXG5leHBvcnQgKiBmcm9tICcuL1ZSTVV0aWxzJztcblxuZXhwb3J0ICogZnJvbSAnQHBpeGl2L3RocmVlLXZybS1jb3JlJztcbmV4cG9ydCAqIGZyb20gJ0BwaXhpdi90aHJlZS12cm0tbWF0ZXJpYWxzLW10b29uJztcbmV4cG9ydCAqIGZyb20gJ0BwaXhpdi90aHJlZS12cm0tbm9kZS1jb25zdHJhaW50JztcbmV4cG9ydCAqIGZyb20gJ0BwaXhpdi90aHJlZS12cm0tc3ByaW5nYm9uZSc7XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbkJpbmQgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25CaW5kJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25NYW5hZ2VyIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uTWFuYWdlcic7XG5cbi8vIGFuaW1hdGlvbk1peGVyIFx1MzA2RVx1NzZFM1x1ODk5Nlx1NUJGRVx1OEM2MVx1MzA2Rlx1MzAwMVNjZW5lIFx1MzA2RVx1NEUyRFx1MzA2Qlx1NTE2NVx1MzA2M1x1MzA2Nlx1MzA0NFx1MzA4Qlx1NUZDNVx1ODk4MVx1MzA0Q1x1MzA0Mlx1MzA4Qlx1MzAwMlxuLy8gXHUzMDVEXHUzMDZFXHUzMDVGXHUzMDgxXHUzMDAxXHU4ODY4XHU3OTNBXHUzMEFBXHUzMEQ2XHUzMEI4XHUzMEE3XHUzMEFGXHUzMEM4XHUzMDY3XHUzMDZGXHUzMDZBXHUzMDQ0XHUzMDUxXHUzMDhDXHUzMDY5XHUzMDAxT2JqZWN0M0QgXHUzMDkyXHU3RDk5XHU2MjdGXHUzMDU3XHUzMDY2IFNjZW5lIFx1MzA2Qlx1NjI5NVx1NTE2NVx1MzA2N1x1MzA0RFx1MzA4Qlx1MzA4OFx1MzA0Nlx1MzA2Qlx1MzA1OVx1MzA4Qlx1MzAwMlxuZXhwb3J0IGNsYXNzIFZSTUV4cHJlc3Npb24gZXh0ZW5kcyBUSFJFRS5PYmplY3QzRCB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoaXMgZXhwcmVzc2lvbi5cbiAgICogRGlzdGluZ3Vpc2hlZCB3aXRoIGBuYW1lYCBzaW5jZSBgbmFtZWAgd2lsbCBiZSBjb25mbGljdGVkIHdpdGggT2JqZWN0M0QuXG4gICAqL1xuICBwdWJsaWMgZXhwcmVzc2lvbk5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgd2VpZ2h0IG9mIHRoZSBleHByZXNzaW9uLlxuICAgKlxuICAgKiBZb3UgdXN1YWxseSB3YW50IHRvIHNldCB0aGUgd2VpZ2h0IHZpYSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXIuc2V0VmFsdWV9LlxuICAgKlxuICAgKiBJdCBtaWdodCBhbHNvIGJlIGNvbnRyb2xsZWQgYnkgdGhlIFRocmVlLmpzIGFuaW1hdGlvbiBzeXN0ZW0uXG4gICAqL1xuICBwdWJsaWMgd2VpZ2h0ID0gMC4wO1xuXG4gIC8qKlxuICAgKiBJbnRlcnByZXQgdmFsdWVzIGdyZWF0ZXIgdGhhbiAwLjUgYXMgMS4wLCBvcnRoZXJ3aXNlIDAuMC5cbiAgICovXG4gIHB1YmxpYyBpc0JpbmFyeSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGhvdyB0aGUgZXhwcmVzc2lvbiBvdmVycmlkZXMgYmxpbmsgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgb3ZlcnJpZGVCbGluazogVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSA9ICdub25lJztcblxuICAvKipcbiAgICogU3BlY2lmeSBob3cgdGhlIGV4cHJlc3Npb24gb3ZlcnJpZGVzIGxvb2tBdCBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBvdmVycmlkZUxvb2tBdDogVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSA9ICdub25lJztcblxuICAvKipcbiAgICogU3BlY2lmeSBob3cgdGhlIGV4cHJlc3Npb24gb3ZlcnJpZGVzIG1vdXRoIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIG92ZXJyaWRlTW91dGg6IFZSTUV4cHJlc3Npb25PdmVycmlkZVR5cGUgPSAnbm9uZSc7XG5cbiAgcHJpdmF0ZSBfYmluZHM6IFZSTUV4cHJlc3Npb25CaW5kW10gPSBbXTtcblxuICBvdmVycmlkZSByZWFkb25seSB0eXBlOiBzdHJpbmcgfCAnVlJNRXhwcmVzc2lvbic7XG5cbiAgLyoqXG4gICAqIEEgdmFsdWUgcmVwcmVzZW50cyBob3cgbXVjaCBpdCBzaG91bGQgb3ZlcnJpZGUgYmxpbmsgZXhwcmVzc2lvbnMuXG4gICAqIGAwLjBgID09IG5vIG92ZXJyaWRlIGF0IGFsbCwgYDEuMGAgPT0gY29tcGxldGVseSBibG9jayB0aGUgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG92ZXJyaWRlQmxpbmtBbW91bnQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5vdmVycmlkZUJsaW5rID09PSAnYmxvY2snKSB7XG4gICAgICByZXR1cm4gMC4wIDwgdGhpcy5vdXRwdXRXZWlnaHQgPyAxLjAgOiAwLjA7XG4gICAgfSBlbHNlIGlmICh0aGlzLm92ZXJyaWRlQmxpbmsgPT09ICdibGVuZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm91dHB1dFdlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDAuMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSB2YWx1ZSByZXByZXNlbnRzIGhvdyBtdWNoIGl0IHNob3VsZCBvdmVycmlkZSBsb29rQXQgZXhwcmVzc2lvbnMuXG4gICAqIGAwLjBgID09IG5vIG92ZXJyaWRlIGF0IGFsbCwgYDEuMGAgPT0gY29tcGxldGVseSBibG9jayB0aGUgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG92ZXJyaWRlTG9va0F0QW1vdW50KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMub3ZlcnJpZGVMb29rQXQgPT09ICdibG9jaycpIHtcbiAgICAgIHJldHVybiAwLjAgPCB0aGlzLm91dHB1dFdlaWdodCA/IDEuMCA6IDAuMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3ZlcnJpZGVMb29rQXQgPT09ICdibGVuZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm91dHB1dFdlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDAuMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSB2YWx1ZSByZXByZXNlbnRzIGhvdyBtdWNoIGl0IHNob3VsZCBvdmVycmlkZSBtb3V0aCBleHByZXNzaW9ucy5cbiAgICogYDAuMGAgPT0gbm8gb3ZlcnJpZGUgYXQgYWxsLCBgMS4wYCA9PSBjb21wbGV0ZWx5IGJsb2NrIHRoZSBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVNb3V0aEFtb3VudCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLm92ZXJyaWRlTW91dGggPT09ICdibG9jaycpIHtcbiAgICAgIHJldHVybiAwLjAgPCB0aGlzLm91dHB1dFdlaWdodCA/IDEuMCA6IDAuMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3ZlcnJpZGVNb3V0aCA9PT0gJ2JsZW5kJykge1xuICAgICAgcmV0dXJuIHRoaXMub3V0cHV0V2VpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMC4wO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBvdXRwdXQgd2VpZ2h0IG9mIHRoaXMgZXhwcmVzc2lvbiwgY29uc2lkZXJpbmcgdGhlIHtAbGluayBpc0JpbmFyeX0uXG4gICAqL1xuICBwdWJsaWMgZ2V0IG91dHB1dFdlaWdodCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmlzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gdGhpcy53ZWlnaHQgPiAwLjUgPyAxLjAgOiAwLjA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbk5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm5hbWUgPSBgVlJNRXhwcmVzc2lvbl8ke2V4cHJlc3Npb25OYW1lfWA7XG4gICAgdGhpcy5leHByZXNzaW9uTmFtZSA9IGV4cHJlc3Npb25OYW1lO1xuXG4gICAgLy8gdHJhdmVyc2UgXHU2NjQyXHUzMDZFXHU2NTUxXHU2RTA4XHU2MjRCXHU2QkI1XHUzMDY4XHUzMDU3XHUzMDY2IE9iamVjdDNEIFx1MzA2N1x1MzA2Rlx1MzA2QVx1MzA0NFx1MzA1M1x1MzA2OFx1MzA5Mlx1NjYwRVx1NzkzQVx1MzA1N1x1MzA2Nlx1MzA0QVx1MzA0RlxuICAgIHRoaXMudHlwZSA9ICdWUk1FeHByZXNzaW9uJztcblxuICAgIC8vIFx1ODg2OFx1NzkzQVx1NzZFRVx1NzY4NFx1MzA2RVx1MzBBQVx1MzBENlx1MzBCOFx1MzBBN1x1MzBBRlx1MzBDOFx1MzA2N1x1MzA2Rlx1MzA2QVx1MzA0NFx1MzA2RVx1MzA2N1x1MzAwMVx1OENBMFx1ODM3N1x1OEVGRFx1NkUxQlx1MzA2RVx1MzA1Rlx1MzA4MVx1MzA2QiB2aXNpYmxlIFx1MzA5MiBmYWxzZSBcdTMwNkJcdTMwNTdcdTMwNjZcdTMwNEFcdTMwNEZcdTMwMDJcbiAgICAvLyBcdTMwNTNcdTMwOENcdTMwNkJcdTMwODhcdTMwOEFcdTMwMDFcdTMwNTNcdTMwNkVcdTMwQTRcdTMwRjNcdTMwQjlcdTMwQkZcdTMwRjNcdTMwQjlcdTMwNkJcdTVCRkVcdTMwNTlcdTMwOEJcdTZCQ0VcdTMwRDVcdTMwRUNcdTMwRkNcdTMwRTBcdTMwNkUgbWF0cml4IFx1ODFFQVx1NTJENVx1OEEwOFx1N0I5N1x1MzA5Mlx1NzcwMVx1NzU2NVx1MzA2N1x1MzA0RFx1MzA4Qlx1MzAwMlxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGFkZEJpbmQoYmluZDogVlJNRXhwcmVzc2lvbkJpbmQpOiB2b2lkIHtcbiAgICB0aGlzLl9iaW5kcy5wdXNoKGJpbmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHdlaWdodCB0byBldmVyeSBhc3NpZ25lZCBibGVuZCBzaGFwZXMuXG4gICAqIFNob3VsZCBiZSBjYWxsZWQgZXZlcnkgZnJhbWUuXG4gICAqL1xuICBwdWJsaWMgYXBwbHlXZWlnaHQob3B0aW9ucz86IHtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmFsdWUgdG8gaXRzIHdlaWdodCB0byBhcHBseS5cbiAgICAgKiBJbnRlbmRlZCB0byBiZSB1c2VkIGZvciBvdmVycmlkaW5nIGFuIGV4cHJlc3Npb24gd2VpZ2h0IGJ5IGFub3RoZXIgZXhwcmVzc2lvbi5cbiAgICAgKiBTZWUgYWxzbzoge0BsaW5rIG92ZXJyaWRlQmxpbmt9LCB7QGxpbmsgb3ZlcnJpZGVMb29rQXR9LCB7QGxpbmsgb3ZlcnJpZGVNb3V0aH1cbiAgICAgKi9cbiAgICBtdWx0aXBsaWVyPzogbnVtYmVyO1xuICB9KTogdm9pZCB7XG4gICAgbGV0IGFjdHVhbFdlaWdodCA9IHRoaXMub3V0cHV0V2VpZ2h0O1xuICAgIGFjdHVhbFdlaWdodCAqPSBvcHRpb25zPy5tdWx0aXBsaWVyID8/IDEuMDtcblxuICAgIC8vIGlmIHRoZSBleHByZXNzaW9uIGlzIGJpbmFyeSwgdGhlIG92ZXJyaWRlIHZhbHVlIG11c3QgYmUgYWxzbyB0cmVhdGVkIGFzIGJpbmFyeVxuICAgIGlmICh0aGlzLmlzQmluYXJ5ICYmIGFjdHVhbFdlaWdodCA8IDEuMCkge1xuICAgICAgYWN0dWFsV2VpZ2h0ID0gMC4wO1xuICAgIH1cblxuICAgIHRoaXMuX2JpbmRzLmZvckVhY2goKGJpbmQpID0+IGJpbmQuYXBwbHlXZWlnaHQoYWN0dWFsV2VpZ2h0KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgcHJldmlvdXNseSBhc3NpZ25lZCBibGVuZCBzaGFwZXMuXG4gICAqL1xuICBwdWJsaWMgY2xlYXJBcHBsaWVkV2VpZ2h0KCk6IHZvaWQge1xuICAgIHRoaXMuX2JpbmRzLmZvckVhY2goKGJpbmQpID0+IGJpbmQuY2xlYXJBcHBsaWVkV2VpZ2h0KCkpO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBWMFZSTSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtLTAuMCc7XG5pbXBvcnQgdHlwZSAqIGFzIFYxVlJNU2NoZW1hIGZyb20gJ0BwaXhpdi90eXBlcy12cm1jLXZybS0xLjAnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGUgfSBmcm9tICcuLi91dGlscy9nbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZSc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb25NYW5hZ2VyIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB2MEV4cHJlc3Npb25NYXRlcmlhbENvbG9yTWFwIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JCaW5kIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbk1vcnBoVGFyZ2V0QmluZCB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbk1vcnBoVGFyZ2V0QmluZCc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSB9IGZyb20gJy4vVlJNRXhwcmVzc2lvblByZXNldE5hbWUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uVGV4dHVyZVRyYW5zZm9ybUJpbmQnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIHNwZWMgdmVyc2lvbnMgaXQgcmVjb2duaXplcy5cbiAqL1xuY29uc3QgUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyA9IG5ldyBTZXQoWycxLjAnLCAnMS4wLWJldGEnXSk7XG5cbi8qKlxuICogQSBwbHVnaW4gb2YgR0xURkxvYWRlciB0aGF0IGltcG9ydHMgYSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9IGZyb20gYSBWUk0gZXh0ZW5zaW9uIG9mIGEgR0xURi5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB2MHYxUHJlc2V0TmFtZU1hcDogeyBbdjBOYW1lIGluIFYwVlJNLkJsZW5kU2hhcGVQcmVzZXROYW1lXT86IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIH0gPSB7XG4gICAgYTogJ2FhJyxcbiAgICBlOiAnZWUnLFxuICAgIGk6ICdpaCcsXG4gICAgbzogJ29oJyxcbiAgICB1OiAnb3UnLFxuICAgIGJsaW5rOiAnYmxpbmsnLFxuICAgIGpveTogJ2hhcHB5JyxcbiAgICBhbmdyeTogJ2FuZ3J5JyxcbiAgICBzb3Jyb3c6ICdzYWQnLFxuICAgIGZ1bjogJ3JlbGF4ZWQnLFxuICAgIGxvb2t1cDogJ2xvb2tVcCcsXG4gICAgbG9va2Rvd246ICdsb29rRG93bicsXG4gICAgbG9va2xlZnQ6ICdsb29rTGVmdCcsXG4gICAgbG9va3JpZ2h0OiAnbG9va1JpZ2h0JyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gICAgYmxpbmtfbDogJ2JsaW5rTGVmdCcsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICAgIGJsaW5rX3I6ICdibGlua1JpZ2h0JyxcbiAgICBuZXV0cmFsOiAnbmV1dHJhbCcsXG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IHBhcnNlcjogR0xURlBhcnNlcjtcblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAvLyBXZSBzaG91bGQgdXNlIHRoZSBleHRlbnNpb24gbmFtZSBpbnN0ZWFkIGJ1dCB3ZSBoYXZlIG11bHRpcGxlIHBsdWdpbnMgZm9yIGFuIGV4dGVuc2lvbi4uLlxuICAgIHJldHVybiAnVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbic7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyc2VyOiBHTFRGUGFyc2VyKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBnbHRmLnVzZXJEYXRhLnZybUV4cHJlc3Npb25NYW5hZ2VyID0gYXdhaXQgdGhpcy5faW1wb3J0KGdsdGYpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0gZnJvbSBhIFZSTS5cbiAgICpcbiAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9pbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNRXhwcmVzc2lvbk1hbmFnZXIgfCBudWxsPiB7XG4gICAgY29uc3QgdjFSZXN1bHQgPSBhd2FpdCB0aGlzLl92MUltcG9ydChnbHRmKTtcbiAgICBpZiAodjFSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MVJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCB2MFJlc3VsdCA9IGF3YWl0IHRoaXMuX3YwSW1wb3J0KGdsdGYpO1xuICAgIGlmICh2MFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHYwUmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjFJbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNRXhwcmVzc2lvbk1hbmFnZXIgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IGlzVlJNVXNlZCA9IGpzb24uZXh0ZW5zaW9uc1VzZWQ/LmluZGV4T2YoJ1ZSTUNfdnJtJykgIT09IC0xO1xuICAgIGlmICghaXNWUk1Vc2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbnNpb24gPSBqc29uLmV4dGVuc2lvbnM/LlsnVlJNQ192cm0nXSBhcyBWMVZSTVNjaGVtYS5WUk1DVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVjVmVyc2lvbiA9IGV4dGVuc2lvbi5zcGVjVmVyc2lvbjtcbiAgICBpZiAoIVBPU1NJQkxFX1NQRUNfVkVSU0lPTlMuaGFzKHNwZWNWZXJzaW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiBVbmtub3duIFZSTUNfdnJtIHNwZWNWZXJzaW9uIFwiJHtzcGVjVmVyc2lvbn1cImApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hRXhwcmVzc2lvbnMgPSBleHRlbnNpb24uZXhwcmVzc2lvbnM7XG4gICAgaWYgKCFzY2hlbWFFeHByZXNzaW9ucykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gbGlzdCBleHByZXNzaW9uc1xuICAgIGNvbnN0IHByZXNldE5hbWVTZXQgPSBuZXcgU2V0PHN0cmluZz4oT2JqZWN0LnZhbHVlcyhWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSkpO1xuICAgIGNvbnN0IG5hbWVTY2hlbWFFeHByZXNzaW9uTWFwID0gbmV3IE1hcDxzdHJpbmcsIFYxVlJNU2NoZW1hLkV4cHJlc3Npb24+KCk7XG5cbiAgICBpZiAoc2NoZW1hRXhwcmVzc2lvbnMucHJlc2V0ICE9IG51bGwpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYUV4cHJlc3Npb25zLnByZXNldCkuZm9yRWFjaCgoW25hbWUsIHNjaGVtYUV4cHJlc3Npb25dKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWFFeHByZXNzaW9uID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gdHlwZXNjcmlwdFxuXG4gICAgICAgIGlmICghcHJlc2V0TmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46IFVua25vd24gcHJlc2V0IG5hbWUgXCIke25hbWV9XCIgZGV0ZWN0ZWQuIElnbm9yaW5nIHRoZSBleHByZXNzaW9uYCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZVNjaGVtYUV4cHJlc3Npb25NYXAuc2V0KG5hbWUsIHNjaGVtYUV4cHJlc3Npb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUV4cHJlc3Npb25zLmN1c3RvbSAhPSBudWxsKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhzY2hlbWFFeHByZXNzaW9ucy5jdXN0b20pLmZvckVhY2goKFtuYW1lLCBzY2hlbWFFeHByZXNzaW9uXSkgPT4ge1xuICAgICAgICBpZiAocHJlc2V0TmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogQ3VzdG9tIGV4cHJlc3Npb24gY2Fubm90IGhhdmUgcHJlc2V0IG5hbWUgXCIke25hbWV9XCIuIElnbm9yaW5nIHRoZSBleHByZXNzaW9uYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWVTY2hlbWFFeHByZXNzaW9uTWFwLnNldChuYW1lLCBzY2hlbWFFeHByZXNzaW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHByZXBhcmUgbWFuYWdlclxuICAgIGNvbnN0IG1hbmFnZXIgPSBuZXcgVlJNRXhwcmVzc2lvbk1hbmFnZXIoKTtcblxuICAgIC8vIGxvYWQgZXhwcmVzc2lvbnNcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIEFycmF5LmZyb20obmFtZVNjaGVtYUV4cHJlc3Npb25NYXAuZW50cmllcygpKS5tYXAoYXN5bmMgKFtuYW1lLCBzY2hlbWFFeHByZXNzaW9uXSkgPT4ge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gbmV3IFZSTUV4cHJlc3Npb24obmFtZSk7XG4gICAgICAgIGdsdGYuc2NlbmUuYWRkKGV4cHJlc3Npb24pO1xuXG4gICAgICAgIGV4cHJlc3Npb24uaXNCaW5hcnkgPSBzY2hlbWFFeHByZXNzaW9uLmlzQmluYXJ5ID8/IGZhbHNlO1xuICAgICAgICBleHByZXNzaW9uLm92ZXJyaWRlQmxpbmsgPSBzY2hlbWFFeHByZXNzaW9uLm92ZXJyaWRlQmxpbmsgPz8gJ25vbmUnO1xuICAgICAgICBleHByZXNzaW9uLm92ZXJyaWRlTG9va0F0ID0gc2NoZW1hRXhwcmVzc2lvbi5vdmVycmlkZUxvb2tBdCA/PyAnbm9uZSc7XG4gICAgICAgIGV4cHJlc3Npb24ub3ZlcnJpZGVNb3V0aCA9IHNjaGVtYUV4cHJlc3Npb24ub3ZlcnJpZGVNb3V0aCA/PyAnbm9uZSc7XG5cbiAgICAgICAgc2NoZW1hRXhwcmVzc2lvbi5tb3JwaFRhcmdldEJpbmRzPy5mb3JFYWNoKGFzeW5jIChiaW5kKSA9PiB7XG4gICAgICAgICAgaWYgKGJpbmQubm9kZSA9PT0gdW5kZWZpbmVkIHx8IGJpbmQuaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZXMgPSAoYXdhaXQgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGUoZ2x0ZiwgYmluZC5ub2RlKSkhO1xuICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0SW5kZXggPSBiaW5kLmluZGV4O1xuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIG1lc2ggaGFzIHRoZSB0YXJnZXQgbW9ycGggdGFyZ2V0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXByaW1pdGl2ZXMuZXZlcnkoXG4gICAgICAgICAgICAgIChwcmltaXRpdmUpID0+XG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShwcmltaXRpdmUubW9ycGhUYXJnZXRJbmZsdWVuY2VzKSAmJlxuICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0SW5kZXggPCBwcmltaXRpdmUubW9ycGhUYXJnZXRJbmZsdWVuY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46ICR7c2NoZW1hRXhwcmVzc2lvbi5uYW1lfSBhdHRlbXB0cyB0byBpbmRleCBtb3JwaCAjJHttb3JwaFRhcmdldEluZGV4fSBidXQgbm90IGZvdW5kLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV4cHJlc3Npb24uYWRkQmluZChcbiAgICAgICAgICAgIG5ldyBWUk1FeHByZXNzaW9uTW9ycGhUYXJnZXRCaW5kKHtcbiAgICAgICAgICAgICAgcHJpbWl0aXZlcyxcbiAgICAgICAgICAgICAgaW5kZXg6IG1vcnBoVGFyZ2V0SW5kZXgsXG4gICAgICAgICAgICAgIHdlaWdodDogYmluZC53ZWlnaHQgPz8gMS4wLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNjaGVtYUV4cHJlc3Npb24ubWF0ZXJpYWxDb2xvckJpbmRzIHx8IHNjaGVtYUV4cHJlc3Npb24udGV4dHVyZVRyYW5zZm9ybUJpbmRzKSB7XG4gICAgICAgICAgLy8gbGlzdCB1cCBldmVyeSBtYXRlcmlhbCBpbiBgZ2x0Zi5zY2VuZWBcbiAgICAgICAgICBjb25zdCBnbHRmTWF0ZXJpYWxzOiBUSFJFRS5NYXRlcmlhbFtdID0gW107XG4gICAgICAgICAgZ2x0Zi5zY2VuZS50cmF2ZXJzZSgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IChvYmplY3QgYXMgYW55KS5tYXRlcmlhbCBhcyBUSFJFRS5NYXRlcmlhbCB8IFRIUkVFLk1hdGVyaWFsW10gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAobWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0ZXJpYWwpKSB7XG4gICAgICAgICAgICAgICAgZ2x0Zk1hdGVyaWFscy5wdXNoKC4uLm1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbHRmTWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzY2hlbWFFeHByZXNzaW9uLm1hdGVyaWFsQ29sb3JCaW5kcz8uZm9yRWFjaChhc3luYyAoYmluZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gZ2x0Zk1hdGVyaWFscy5maWx0ZXIoKG1hdGVyaWFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KG1hdGVyaWFsKT8ubWF0ZXJpYWxzO1xuICAgICAgICAgICAgICByZXR1cm4gYmluZC5tYXRlcmlhbCA9PT0gbWF0ZXJpYWxJbmRleDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IHtcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbi5hZGRCaW5kKFxuICAgICAgICAgICAgICAgIG5ldyBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQoe1xuICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBiaW5kLnR5cGUsXG4gICAgICAgICAgICAgICAgICB0YXJnZXRWYWx1ZTogbmV3IFRIUkVFLkNvbG9yKCkuZnJvbUFycmF5KGJpbmQudGFyZ2V0VmFsdWUpLFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0QWxwaGE6IGJpbmQudGFyZ2V0VmFsdWVbM10sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNjaGVtYUV4cHJlc3Npb24udGV4dHVyZVRyYW5zZm9ybUJpbmRzPy5mb3JFYWNoKGFzeW5jIChiaW5kKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBnbHRmTWF0ZXJpYWxzLmZpbHRlcigobWF0ZXJpYWwpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9IHRoaXMucGFyc2VyLmFzc29jaWF0aW9ucy5nZXQobWF0ZXJpYWwpPy5tYXRlcmlhbHM7XG4gICAgICAgICAgICAgIHJldHVybiBiaW5kLm1hdGVyaWFsID09PSBtYXRlcmlhbEluZGV4O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKChtYXRlcmlhbCkgPT4ge1xuICAgICAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQoXG4gICAgICAgICAgICAgICAgbmV3IFZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZCh7XG4gICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgIG9mZnNldDogbmV3IFRIUkVFLlZlY3RvcjIoKS5mcm9tQXJyYXkoYmluZC5vZmZzZXQgPz8gWzAuMCwgMC4wXSksXG4gICAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFRIUkVFLlZlY3RvcjIoKS5mcm9tQXJyYXkoYmluZC5zY2FsZSA/PyBbMS4wLCAxLjBdKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFuYWdlci5yZWdpc3RlckV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MEltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1FeHByZXNzaW9uTWFuYWdlciB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgdnJtRXh0ID0ganNvbi5leHRlbnNpb25zPy5WUk0gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdnJtRXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFCbGVuZFNoYXBlID0gdnJtRXh0LmJsZW5kU2hhcGVNYXN0ZXI7XG4gICAgaWYgKCFzY2hlbWFCbGVuZFNoYXBlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtYW5hZ2VyID0gbmV3IFZSTUV4cHJlc3Npb25NYW5hZ2VyKCk7XG5cbiAgICBjb25zdCBzY2hlbWFCbGVuZFNoYXBlR3JvdXBzID0gc2NoZW1hQmxlbmRTaGFwZS5ibGVuZFNoYXBlR3JvdXBzO1xuICAgIGlmICghc2NoZW1hQmxlbmRTaGFwZUdyb3Vwcykge1xuICAgICAgcmV0dXJuIG1hbmFnZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYmxlbmRTaGFwZU5hbWVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgc2NoZW1hQmxlbmRTaGFwZUdyb3Vwcy5tYXAoYXN5bmMgKHNjaGVtYUdyb3VwKSA9PiB7XG4gICAgICAgIGNvbnN0IHYwUHJlc2V0TmFtZSA9IHNjaGVtYUdyb3VwLnByZXNldE5hbWU7XG4gICAgICAgIGNvbnN0IHYxUHJlc2V0TmFtZSA9XG4gICAgICAgICAgKHYwUHJlc2V0TmFtZSAhPSBudWxsICYmIFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4udjB2MVByZXNldE5hbWVNYXBbdjBQcmVzZXROYW1lXSkgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgbmFtZSA9IHYxUHJlc2V0TmFtZSA/PyBzY2hlbWFHcm91cC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1ZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46IE9uZSBvZiBjdXN0b20gZXhwcmVzc2lvbnMgaGFzIG5vIG5hbWUuIElnbm9yaW5nIHRoZSBleHByZXNzaW9uJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZHVwbGljYXRpb24gY2hlY2tcbiAgICAgICAgaWYgKGJsZW5kU2hhcGVOYW1lU2V0LmhhcyhuYW1lKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiBBbiBleHByZXNzaW9uIHByZXNldCAke3YwUHJlc2V0TmFtZX0gaGFzIGR1cGxpY2F0ZWQgZW50cmllcy4gSWdub3JpbmcgdGhlIGV4cHJlc3Npb25gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYmxlbmRTaGFwZU5hbWVTZXQuYWRkKG5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgVlJNRXhwcmVzc2lvbihuYW1lKTtcbiAgICAgICAgZ2x0Zi5zY2VuZS5hZGQoZXhwcmVzc2lvbik7XG5cbiAgICAgICAgZXhwcmVzc2lvbi5pc0JpbmFyeSA9IHNjaGVtYUdyb3VwLmlzQmluYXJ5ID8/IGZhbHNlO1xuICAgICAgICAvLyB2MCBkb2Vzbid0IGhhdmUgaWdub3JlIHByb3BlcnRpZXNcblxuICAgICAgICAvLyBCaW5kIG1vcnBoVGFyZ2V0XG4gICAgICAgIGlmIChzY2hlbWFHcm91cC5iaW5kcykge1xuICAgICAgICAgIHNjaGVtYUdyb3VwLmJpbmRzLmZvckVhY2goYXN5bmMgKGJpbmQpID0+IHtcbiAgICAgICAgICAgIGlmIChiaW5kLm1lc2ggPT09IHVuZGVmaW5lZCB8fCBiaW5kLmluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBub2Rlc1VzaW5nTWVzaDogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgICAgIGpzb24ubm9kZXM/LmZvckVhY2goKG5vZGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubWVzaCA9PT0gYmluZC5tZXNoKSB7XG4gICAgICAgICAgICAgICAgbm9kZXNVc2luZ01lc2gucHVzaChpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0SW5kZXggPSBiaW5kLmluZGV4O1xuXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgbm9kZXNVc2luZ01lc2gubWFwKGFzeW5jIChub2RlSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmltaXRpdmVzID0gKGF3YWl0IGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlKGdsdGYsIG5vZGVJbmRleCkpITtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBtZXNoIGhhcyB0aGUgdGFyZ2V0IG1vcnBoIHRhcmdldFxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICFwcmltaXRpdmVzLmV2ZXJ5KFxuICAgICAgICAgICAgICAgICAgICAocHJpbWl0aXZlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJpbWl0aXZlLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcykgJiZcbiAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldEluZGV4IDwgcHJpbWl0aXZlLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiAke3NjaGVtYUdyb3VwLm5hbWV9IGF0dGVtcHRzIHRvIGluZGV4ICR7bW9ycGhUYXJnZXRJbmRleH10aCBtb3JwaCBidXQgbm90IGZvdW5kLmAsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb24uYWRkQmluZChcbiAgICAgICAgICAgICAgICAgIG5ldyBWUk1FeHByZXNzaW9uTW9ycGhUYXJnZXRCaW5kKHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlcyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG1vcnBoVGFyZ2V0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogMC4wMSAqIChiaW5kLndlaWdodCA/PyAxMDApLCAvLyBuYXJyb3dpbmcgdGhlIHJhbmdlIGZyb20gWyAwLjAgLSAxMDAuMCBdIHRvIFsgMC4wIC0gMS4wIF1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJpbmQgTWF0ZXJpYWxDb2xvciBhbmQgVGV4dHVyZVRyYW5zZm9ybVxuICAgICAgICBjb25zdCBtYXRlcmlhbFZhbHVlcyA9IHNjaGVtYUdyb3VwLm1hdGVyaWFsVmFsdWVzO1xuICAgICAgICBpZiAobWF0ZXJpYWxWYWx1ZXMgJiYgbWF0ZXJpYWxWYWx1ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgbWF0ZXJpYWxWYWx1ZXMuZm9yRWFjaCgobWF0ZXJpYWxWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsTmFtZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWUucHJvcGVydHlOYW1lID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgbWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFx1MzBBMlx1MzBEMFx1MzBCRlx1MzBGQ1x1MzA2RVx1MzBBQVx1MzBENlx1MzBCOFx1MzBBN1x1MzBBRlx1MzBDOFx1MzA2Qlx1OEEyRFx1NUI5QVx1MzA1NVx1MzA4Q1x1MzA2Nlx1MzA0NFx1MzA4Qlx1MzBERVx1MzBDNlx1MzBFQVx1MzBBMlx1MzBFQlx1MzA2RVx1NTE4NVx1MzA0Qlx1MzA4OVxuICAgICAgICAgICAgICogbWF0ZXJpYWxWYWx1ZVx1MzA2N1x1NjMwN1x1NUI5QVx1MzA1NVx1MzA4Q1x1MzA2Nlx1MzA0NFx1MzA4Qlx1MzBERVx1MzBDNlx1MzBFQVx1MzBBMlx1MzBFQlx1MzA5Mlx1OTZDNlx1MzA4MVx1MzA4Qlx1MzAwMlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIFx1NzI3OVx1NUI5QVx1MzA2Qlx1MzA2Rlx1NTQwRFx1NTI0RFx1MzA5Mlx1NEY3Rlx1NzUyOFx1MzA1OVx1MzA4Qlx1MzAwMlxuICAgICAgICAgICAgICogXHUzMEEyXHUzMEE2XHUzMEM4XHUzMEU5XHUzMEE0XHUzMEYzXHU2M0NGXHU3NTNCXHU3NTI4XHUzMDZFXHUzMERFXHUzMEM2XHUzMEVBXHUzMEEyXHUzMEVCXHUzMDgyXHU1NDBDXHU2NjQyXHUzMDZCXHU5NkM2XHUzMDgxXHUzMDhCXHUzMDAyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsczogVEhSRUUuTWF0ZXJpYWxbXSA9IFtdO1xuICAgICAgICAgICAgZ2x0Zi5zY2VuZS50cmF2ZXJzZSgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGlmICgob2JqZWN0IGFzIGFueSkubWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWxbXSB8IFRIUkVFLk1hdGVyaWFsID0gKG9iamVjdCBhcyBhbnkpLm1hdGVyaWFsO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hdGVyaWFsKSkge1xuICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIC4uLm1hdGVyaWFsLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAobXRsKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgKG10bC5uYW1lID09PSBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsTmFtZSEgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXRsLm5hbWUgPT09IG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxOYW1lISArICcgKE91dGxpbmUpJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFscy5pbmRleE9mKG10bCkgPT09IC0xLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGVyaWFsLm5hbWUgPT09IG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxOYW1lICYmIG1hdGVyaWFscy5pbmRleE9mKG1hdGVyaWFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIG1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbFByb3BlcnR5TmFtZSA9IG1hdGVyaWFsVmFsdWUucHJvcGVydHlOYW1lO1xuICAgICAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XG4gICAgICAgICAgICAgIC8vIFRleHR1cmVUcmFuc2Zvcm1CaW5kXG4gICAgICAgICAgICAgIGlmIChtYXRlcmlhbFByb3BlcnR5TmFtZSA9PT0gJ19NYWluVGV4X1NUJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IFRIUkVFLlZlY3RvcjIobWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSFbMF0sIG1hdGVyaWFsVmFsdWUudGFyZ2V0VmFsdWUhWzFdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMihtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlIVsyXSwgbWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSFbM10pO1xuXG4gICAgICAgICAgICAgICAgb2Zmc2V0LnkgPSAxLjAgLSBvZmZzZXQueSAtIHNjYWxlLnk7XG5cbiAgICAgICAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQoXG4gICAgICAgICAgICAgICAgICBuZXcgVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kKHtcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gTWF0ZXJpYWxDb2xvckJpbmRcbiAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxDb2xvclR5cGUgPSB2MEV4cHJlc3Npb25NYXRlcmlhbENvbG9yTWFwW21hdGVyaWFsUHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsQ29sb3JUeXBlKSB7XG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbi5hZGRCaW5kKFxuICAgICAgICAgICAgICAgICAgbmV3IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCh7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBtYXRlcmlhbENvbG9yVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmFsdWU6IG5ldyBUSFJFRS5Db2xvcigpLmZyb21BcnJheShtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlISksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEFscGhhOiBtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlIVszXSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4obWF0ZXJpYWxQcm9wZXJ0eU5hbWUgKyAnIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFuYWdlci5yZWdpc3RlckV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgR0xURiB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuXG5mdW5jdGlvbiBleHRyYWN0UHJpbWl0aXZlc0ludGVybmFsKGdsdGY6IEdMVEYsIG5vZGVJbmRleDogbnVtYmVyLCBub2RlOiBUSFJFRS5PYmplY3QzRCk6IFRIUkVFLk1lc2hbXSB8IG51bGwge1xuICBjb25zdCBqc29uID0gZ2x0Zi5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gIC8qKlxuICAgKiBMZXQncyBsaXN0IHVwIGV2ZXJ5IHBvc3NpYmxlIHBhdHRlcm5zIHRoYXQgcGFyc2VkIGdsdGYgbm9kZXMgd2l0aCBhIG1lc2ggY2FuIGhhdmUsLCxcbiAgICpcbiAgICogXCIqXCIgaW5kaWNhdGVzIHRoYXQgdGhvc2UgbWVzaGVzIHNob3VsZCBiZSBsaXN0ZWQgdXAgdXNpbmcgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiAjIyMgQSBub2RlIHdpdGggYSAobWVzaCwgYSBzaWdubGUgcHJpbWl0aXZlKVxuICAgKlxuICAgKiAtIGBUSFJFRS5NZXNoYDogVGhlIG9ubHkgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICpcbiAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpXG4gICAqXG4gICAqIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgdGhlIG1lc2hcbiAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgKlxuICAgKiAjIyMgQSBub2RlIHdpdGggYSAobWVzaCwgbXVsdGlwbGUgcHJpbWl0aXZlcykgQU5EIChhIGNoaWxkIHdpdGggYSBtZXNoLCBhIHNpbmdsZSBwcmltaXRpdmUpXG4gICAqXG4gICAqIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgdGhlIG1lc2hcbiAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiBhIE1FU0ggT0YgVEhFIENISUxEXG4gICAqXG4gICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKSBBTkQgKGEgY2hpbGQgd2l0aCBhIG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpXG4gICAqXG4gICAqIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgdGhlIG1lc2hcbiAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgKiAgIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgYSBNRVNIIE9GIFRIRSBDSElMRFxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoIG9mIHRoZSBjaGlsZFxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoIG9mIHRoZSBjaGlsZCAoMilcbiAgICpcbiAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpIEJVVCB0aGUgbm9kZSBpcyBhIGJvbmVcbiAgICpcbiAgICogLSBgVEhSRUUuQm9uZWA6IFRoZSByb290IG9mIHRoZSBub2RlLCBhcyBhIGJvbmVcbiAgICogICAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIHRoZSBtZXNoXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICgyKSAqXG4gICAqXG4gICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKSBBTkQgKGEgY2hpbGQgd2l0aCBhIG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpIEJVVCB0aGUgbm9kZSBpcyBhIGJvbmVcbiAgICpcbiAgICogLSBgVEhSRUUuQm9uZWA6IFRoZSByb290IG9mIHRoZSBub2RlLCBhcyBhIGJvbmVcbiAgICogICAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIHRoZSBtZXNoXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICgyKSAqXG4gICAqICAgLSBgVEhSRUUuR3JvdXBgOiBUaGUgcm9vdCBvZiBhIE1FU0ggT0YgVEhFIENISUxEXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggb2YgdGhlIGNoaWxkXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggb2YgdGhlIGNoaWxkICgyKVxuICAgKlxuICAgKiAuLi5JIHdpbGwgdGFrZSBhIHN0cmF0ZWd5IHRoYXQgdHJhdmVyc2VzIHRoZSByb290IG9mIHRoZSBub2RlIGFuZCB0YWtlIGZpcnN0IChwcmltaXRpdmVDb3VudCkgbWVzaGVzLlxuICAgKi9cblxuICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgbm9kZSBoYXMgYSBtZXNoXG4gIGNvbnN0IHNjaGVtYU5vZGUgPSBqc29uLm5vZGVzPy5bbm9kZUluZGV4XTtcbiAgaWYgKHNjaGVtYU5vZGUgPT0gbnVsbCkge1xuICAgIGNvbnNvbGUud2FybihgZXh0cmFjdFByaW1pdGl2ZXNJbnRlcm5hbDogQXR0ZW1wdCB0byB1c2Ugbm9kZXNbJHtub2RlSW5kZXh9XSBvZiBnbFRGIGJ1dCB0aGUgbm9kZSBkb2Vzbid0IGV4aXN0YCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBtZXNoSW5kZXggPSBzY2hlbWFOb2RlLm1lc2g7XG4gIGlmIChtZXNoSW5kZXggPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gSG93IG1hbnkgcHJpbWl0aXZlcyB0aGUgbWVzaCBoYXM/XG4gIGNvbnN0IHNjaGVtYU1lc2ggPSBqc29uLm1lc2hlcz8uW21lc2hJbmRleF07XG4gIGlmIChzY2hlbWFNZXNoID09IG51bGwpIHtcbiAgICBjb25zb2xlLndhcm4oYGV4dHJhY3RQcmltaXRpdmVzSW50ZXJuYWw6IEF0dGVtcHQgdG8gdXNlIG1lc2hlc1ske21lc2hJbmRleH1dIG9mIGdsVEYgYnV0IHRoZSBtZXNoIGRvZXNuJ3QgZXhpc3RgKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHByaW1pdGl2ZUNvdW50ID0gc2NoZW1hTWVzaC5wcmltaXRpdmVzLmxlbmd0aDtcblxuICAvLyBUcmF2ZXJzZSB0aGUgbm9kZSBhbmQgdGFrZSBmaXJzdCAocHJpbWl0aXZlQ291bnQpIG1lc2hlc1xuICBjb25zdCBwcmltaXRpdmVzOiBUSFJFRS5NZXNoW10gPSBbXTtcbiAgbm9kZS50cmF2ZXJzZSgob2JqZWN0KSA9PiB7XG4gICAgaWYgKHByaW1pdGl2ZXMubGVuZ3RoIDwgcHJpbWl0aXZlQ291bnQpIHtcbiAgICAgIGlmICgob2JqZWN0IGFzIGFueSkuaXNNZXNoKSB7XG4gICAgICAgIHByaW1pdGl2ZXMucHVzaChvYmplY3QgYXMgVEhSRUUuTWVzaCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJpbWl0aXZlcztcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHByaW1pdGl2ZXMgKCBgVEhSRUUuTWVzaFtdYCApIG9mIGEgbm9kZSBmcm9tIGEgbG9hZGVkIEdMVEYuXG4gKiBUaGUgbWFpbiBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gZGlzdGluZ3Vpc2ggcHJpbWl0aXZlcyBhbmQgY2hpbGRyZW4gZnJvbSBhIG5vZGUgdGhhdCBoYXMgYm90aCBtZXNoZXMgYW5kIGNoaWxkcmVuLlxuICpcbiAqIEl0IHV0aWxpemVzIHRoZSBiZWhhdmlvciB0aGF0IEdMVEZMb2FkZXIgYWRkcyBtZXNoIHByaW1pdGl2ZXMgdG8gdGhlIG5vZGUgb2JqZWN0ICggYFRIUkVFLkdyb3VwYCApIGZpcnN0IHRoZW4gYWRkcyBpdHMgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIGdsdGYgQSBHTFRGIG9iamVjdCB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcbiAqIEBwYXJhbSBub2RlSW5kZXggVGhlIGluZGV4IG9mIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZShnbHRmOiBHTFRGLCBub2RlSW5kZXg6IG51bWJlcik6IFByb21pc2U8VEhSRUUuTWVzaFtdIHwgbnVsbD4ge1xuICBjb25zdCBub2RlOiBUSFJFRS5PYmplY3QzRCA9IGF3YWl0IGdsdGYucGFyc2VyLmdldERlcGVuZGVuY3koJ25vZGUnLCBub2RlSW5kZXgpO1xuICByZXR1cm4gZXh0cmFjdFByaW1pdGl2ZXNJbnRlcm5hbChnbHRmLCBub2RlSW5kZXgsIG5vZGUpO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgcHJpbWl0aXZlcyAoIGBUSFJFRS5NZXNoW11gICkgb2Ygbm9kZXMgZnJvbSBhIGxvYWRlZCBHTFRGLlxuICogU2VlIHtAbGluayBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZX0gZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBJdCByZXR1cm5zIGEgbWFwIGZyb20gbm9kZSBpbmRleCB0byBleHRyYWN0aW9uIHJlc3VsdC5cbiAqIElmIGEgbm9kZSBkb2VzIG5vdCBoYXZlIGEgbWVzaCwgdGhlIGVudHJ5IGZvciB0aGUgbm9kZSB3aWxsIG5vdCBiZSBwdXQgaW4gdGhlIHJldHVybmluZyBtYXAuXG4gKlxuICogQHBhcmFtIGdsdGYgQSBHTFRGIG9iamVjdCB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlcyhnbHRmOiBHTFRGKTogUHJvbWlzZTxNYXA8bnVtYmVyLCBUSFJFRS5NZXNoW10+PiB7XG4gIGNvbnN0IG5vZGVzOiBUSFJFRS5PYmplY3QzRFtdID0gYXdhaXQgZ2x0Zi5wYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCdub2RlJyk7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXA8bnVtYmVyLCBUSFJFRS5NZXNoW10+KCk7XG5cbiAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBleHRyYWN0UHJpbWl0aXZlc0ludGVybmFsKGdsdGYsIGluZGV4LCBub2RlKTtcbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIG1hcC5zZXQoaW5kZXgsIHJlc3VsdCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWFwO1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG5leHBvcnQgY29uc3QgVlJNRXhwcmVzc2lvblByZXNldE5hbWUgPSB7XG4gIEFhOiAnYWEnLFxuICBJaDogJ2loJyxcbiAgT3U6ICdvdScsXG4gIEVlOiAnZWUnLFxuICBPaDogJ29oJyxcbiAgQmxpbms6ICdibGluaycsXG4gIEhhcHB5OiAnaGFwcHknLFxuICBBbmdyeTogJ2FuZ3J5JyxcbiAgU2FkOiAnc2FkJyxcbiAgUmVsYXhlZDogJ3JlbGF4ZWQnLFxuICBMb29rVXA6ICdsb29rVXAnLFxuICBTdXJwcmlzZWQ6ICdzdXJwcmlzZWQnLFxuICBMb29rRG93bjogJ2xvb2tEb3duJyxcbiAgTG9va0xlZnQ6ICdsb29rTGVmdCcsXG4gIExvb2tSaWdodDogJ2xvb2tSaWdodCcsXG4gIEJsaW5rTGVmdDogJ2JsaW5rTGVmdCcsXG4gIEJsaW5rUmlnaHQ6ICdibGlua1JpZ2h0JyxcbiAgTmV1dHJhbDogJ25ldXRyYWwnLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVlJNRXhwcmVzc2lvblByZXNldE5hbWUgPSAodHlwZW9mIFZSTUV4cHJlc3Npb25QcmVzZXROYW1lKVtrZXlvZiB0eXBlb2YgVlJNRXhwcmVzc2lvblByZXNldE5hbWVdO1xuIiwgIi8qKlxuICogQ2xhbXAgdGhlIGlucHV0IHZhbHVlIHdpdGhpbiBbMC4wIC0gMS4wXS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIGlucHV0IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXR1cmF0ZSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCAxLjApLCAwLjApO1xufVxuIiwgImltcG9ydCB7IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uUHJlc2V0TmFtZSc7XG5pbXBvcnQgeyBzYXR1cmF0ZSB9IGZyb20gJy4uL3V0aWxzL3NhdHVyYXRlJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbiB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbic7XG5cbmV4cG9ydCBjbGFzcyBWUk1FeHByZXNzaW9uTWFuYWdlciB7XG4gIC8qKlxuICAgKiBBIHNldCBvZiBuYW1lIG9yIHByZXNldCBuYW1lIG9mIGV4cHJlc3Npb25zIHRoYXQgd2lsbCBiZSBvdmVycmlkZGVuIGJ5IHtAbGluayBWUk1FeHByZXNzaW9uLm92ZXJyaWRlQmxpbmt9LlxuICAgKi9cbiAgcHVibGljIGJsaW5rRXhwcmVzc2lvbk5hbWVzID0gWydibGluaycsICdibGlua0xlZnQnLCAnYmxpbmtSaWdodCddO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBuYW1lIG9yIHByZXNldCBuYW1lIG9mIGV4cHJlc3Npb25zIHRoYXQgd2lsbCBiZSBvdmVycmlkZGVuIGJ5IHtAbGluayBWUk1FeHByZXNzaW9uLm92ZXJyaWRlTG9va0F0fS5cbiAgICovXG4gIHB1YmxpYyBsb29rQXRFeHByZXNzaW9uTmFtZXMgPSBbJ2xvb2tMZWZ0JywgJ2xvb2tSaWdodCcsICdsb29rVXAnLCAnbG9va0Rvd24nXTtcblxuICAvKipcbiAgICogQSBzZXQgb2YgbmFtZSBvciBwcmVzZXQgbmFtZSBvZiBleHByZXNzaW9ucyB0aGF0IHdpbGwgYmUgb3ZlcnJpZGRlbiBieSB7QGxpbmsgVlJNRXhwcmVzc2lvbi5vdmVycmlkZU1vdXRofS5cbiAgICovXG4gIHB1YmxpYyBtb3V0aEV4cHJlc3Npb25OYW1lcyA9IFsnYWEnLCAnZWUnLCAnaWgnLCAnb2gnLCAnb3UnXTtcblxuICAvKipcbiAgICogQSBzZXQgb2Yge0BsaW5rIFZSTUV4cHJlc3Npb259LlxuICAgKiBXaGVuIHlvdSB3YW50IHRvIHJlZ2lzdGVyIGV4cHJlc3Npb25zLCB1c2Uge0BsaW5rIHJlZ2lzdGVyRXhwcmVzc2lvbn1cbiAgICovXG4gIHByaXZhdGUgX2V4cHJlc3Npb25zOiBWUk1FeHByZXNzaW9uW10gPSBbXTtcbiAgcHVibGljIGdldCBleHByZXNzaW9ucygpOiBWUk1FeHByZXNzaW9uW10ge1xuICAgIHJldHVybiB0aGlzLl9leHByZXNzaW9ucy5jb25jYXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1hcCBmcm9tIG5hbWUgdG8gZXhwcmVzc2lvbi5cbiAgICovXG4gIHByaXZhdGUgX2V4cHJlc3Npb25NYXA6IHsgW25hbWU6IHN0cmluZ106IFZSTUV4cHJlc3Npb24gfSA9IHt9O1xuICBwdWJsaWMgZ2V0IGV4cHJlc3Npb25NYXAoKTogeyBbbmFtZTogc3RyaW5nXTogVlJNRXhwcmVzc2lvbiB9IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZXhwcmVzc2lvbk1hcCk7XG4gIH1cblxuICAvKipcbiAgICogQSBtYXAgZnJvbSBuYW1lIHRvIGV4cHJlc3Npb24sIGJ1dCBleGNsdWRpbmcgY3VzdG9tIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIGdldCBwcmVzZXRFeHByZXNzaW9uTWFwKCk6IHsgW25hbWUgaW4gVlJNRXhwcmVzc2lvblByZXNldE5hbWVdPzogVlJNRXhwcmVzc2lvbiB9IHtcbiAgICBjb25zdCByZXN1bHQ6IHsgW25hbWUgaW4gVlJNRXhwcmVzc2lvblByZXNldE5hbWVdPzogVlJNRXhwcmVzc2lvbiB9ID0ge307XG5cbiAgICBjb25zdCBwcmVzZXROYW1lU2V0ID0gbmV3IFNldDxzdHJpbmc+KE9iamVjdC52YWx1ZXMoVlJNRXhwcmVzc2lvblByZXNldE5hbWUpKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuX2V4cHJlc3Npb25NYXApLmZvckVhY2goKFtuYW1lLCBleHByZXNzaW9uXSkgPT4ge1xuICAgICAgaWYgKHByZXNldE5hbWVTZXQuaGFzKG5hbWUpKSB7XG4gICAgICAgIHJlc3VsdFtuYW1lIGFzIFZSTUV4cHJlc3Npb25QcmVzZXROYW1lXSA9IGV4cHJlc3Npb247XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWFwIGZyb20gbmFtZSB0byBleHByZXNzaW9uLCBidXQgZXhjbHVkaW5nIHByZXNldCBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgY3VzdG9tRXhwcmVzc2lvbk1hcCgpOiB7IFtuYW1lOiBzdHJpbmddOiBWUk1FeHByZXNzaW9uIH0ge1xuICAgIGNvbnN0IHJlc3VsdDogeyBbbmFtZTogc3RyaW5nXTogVlJNRXhwcmVzc2lvbiB9ID0ge307XG5cbiAgICBjb25zdCBwcmVzZXROYW1lU2V0ID0gbmV3IFNldDxzdHJpbmc+KE9iamVjdC52YWx1ZXMoVlJNRXhwcmVzc2lvblByZXNldE5hbWUpKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuX2V4cHJlc3Npb25NYXApLmZvckVhY2goKFtuYW1lLCBleHByZXNzaW9uXSkgPT4ge1xuICAgICAgaWYgKCFwcmVzZXROYW1lU2V0LmhhcyhuYW1lKSkge1xuICAgICAgICByZXN1bHRbbmFtZV0gPSBleHByZXNzaW9uO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfS5cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cblxuICAvKipcbiAgICogQ29weSB0aGUgZ2l2ZW4ge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfSBpbnRvIHRoaXMgb25lLlxuICAgKiBAcGFyYW0gc291cmNlIFRoZSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9IHlvdSB3YW50IHRvIGNvcHlcbiAgICogQHJldHVybnMgdGhpc1xuICAgKi9cbiAgcHVibGljIGNvcHkoc291cmNlOiBWUk1FeHByZXNzaW9uTWFuYWdlcik6IHRoaXMge1xuICAgIC8vIGZpcnN0IHVucmVnaXN0ZXIgYWxsIHRoZSBleHByZXNzaW9uIGl0IGhhc1xuICAgIGNvbnN0IGV4cHJlc3Npb25zID0gdGhpcy5fZXhwcmVzc2lvbnMuY29uY2F0KCk7XG4gICAgZXhwcmVzc2lvbnMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICB9KTtcblxuICAgIC8vIHRoZW4gcmVnaXN0ZXIgYWxsIHRoZSBleHByZXNzaW9uIG9mIHRoZSBzb3VyY2VcbiAgICBzb3VyY2UuX2V4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgIHRoaXMucmVnaXN0ZXJFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgIH0pO1xuXG4gICAgLy8gY29weSByZW1haW5pbmcgbWVtYmVyc1xuICAgIHRoaXMuYmxpbmtFeHByZXNzaW9uTmFtZXMgPSBzb3VyY2UuYmxpbmtFeHByZXNzaW9uTmFtZXMuY29uY2F0KCk7XG4gICAgdGhpcy5sb29rQXRFeHByZXNzaW9uTmFtZXMgPSBzb3VyY2UubG9va0F0RXhwcmVzc2lvbk5hbWVzLmNvbmNhdCgpO1xuICAgIHRoaXMubW91dGhFeHByZXNzaW9uTmFtZXMgPSBzb3VyY2UubW91dGhFeHByZXNzaW9uTmFtZXMuY29uY2F0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY2xvbmUgb2YgdGhpcyB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9LlxuICAgKiBAcmV0dXJucyBDb3BpZWQge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfVxuICAgKi9cbiAgcHVibGljIGNsb25lKCk6IFZSTUV4cHJlc3Npb25NYW5hZ2VyIHtcbiAgICByZXR1cm4gbmV3IFZSTUV4cHJlc3Npb25NYW5hZ2VyKCkuY29weSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSByZWdpc3RlcmVkIGV4cHJlc3Npb24uXG4gICAqIElmIGl0IGNhbm5vdCBmaW5kIGFuIGV4cHJlc3Npb24sIGl0IHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9yIHByZXNldCBuYW1lIG9mIHRoZSBleHByZXNzaW9uXG4gICAqL1xuICBwdWJsaWMgZ2V0RXhwcmVzc2lvbihuYW1lOiBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSB8IHN0cmluZyk6IFZSTUV4cHJlc3Npb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwcmVzc2lvbk1hcFtuYW1lXSA/PyBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIGV4cHJlc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSBleHByZXNzaW9uIHtAbGluayBWUk1FeHByZXNzaW9ufSB0aGF0IGRlc2NyaWJlcyB0aGUgZXhwcmVzc2lvblxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uOiBWUk1FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy5fZXhwcmVzc2lvbnMucHVzaChleHByZXNzaW9uKTtcbiAgICB0aGlzLl9leHByZXNzaW9uTWFwW2V4cHJlc3Npb24uZXhwcmVzc2lvbk5hbWVdID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGFuIGV4cHJlc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSBleHByZXNzaW9uIFRoZSBleHByZXNzaW9uIHlvdSB3YW50IHRvIHVucmVnaXN0ZXJcbiAgICovXG4gIHB1YmxpYyB1bnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uOiBWUk1FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9leHByZXNzaW9ucy5pbmRleE9mKGV4cHJlc3Npb24pO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2FybignVlJNRXhwcmVzc2lvbk1hbmFnZXI6IFRoZSBzcGVjaWZpZWQgZXhwcmVzc2lvbnMgaXMgbm90IHJlZ2lzdGVyZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9leHByZXNzaW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGRlbGV0ZSB0aGlzLl9leHByZXNzaW9uTWFwW2V4cHJlc3Npb24uZXhwcmVzc2lvbk5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB3ZWlnaHQgb2YgdGhlIHNwZWNpZmllZCBleHByZXNzaW9uLlxuICAgKiBJZiBpdCBkb2Vzbid0IGhhdmUgYW4gZXhwcmVzc2lvbiBvZiBnaXZlbiBuYW1lLCBpdCB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZXhwcmVzc2lvblxuICAgKi9cbiAgcHVibGljIGdldFZhbHVlKG5hbWU6IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIHwgc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbihuYW1lKTtcbiAgICByZXR1cm4gZXhwcmVzc2lvbj8ud2VpZ2h0ID8/IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgd2VpZ2h0IHRvIHRoZSBzcGVjaWZpZWQgZXhwcmVzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZXhwcmVzc2lvblxuICAgKiBAcGFyYW0gd2VpZ2h0IFdlaWdodFxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlKG5hbWU6IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIHwgc3RyaW5nLCB3ZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24obmFtZSk7XG4gICAgaWYgKGV4cHJlc3Npb24pIHtcbiAgICAgIGV4cHJlc3Npb24ud2VpZ2h0ID0gc2F0dXJhdGUod2VpZ2h0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgd2VpZ2h0cyBvZiBhbGwgZXhwcmVzc2lvbnMgdG8gYDAuMGAuXG4gICAqL1xuICBwdWJsaWMgcmVzZXRWYWx1ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fZXhwcmVzc2lvbnMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgZXhwcmVzc2lvbi53ZWlnaHQgPSAwLjA7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgdHJhY2sgbmFtZSBvZiBzcGVjaWZpZWQgZXhwcmVzc2lvbi5cbiAgICogVGhpcyB0cmFjayBuYW1lIGlzIG5lZWRlZCB0byBtYW5pcHVsYXRlIGl0cyBleHByZXNzaW9uIHZpYSBrZXlmcmFtZSBhbmltYXRpb25zLlxuICAgKlxuICAgKiBAZXhhbXBsZSBNYW5pcHVsYXRlIGFuIGV4cHJlc3Npb24gdXNpbmcga2V5ZnJhbWUgYW5pbWF0aW9uXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IHRyYWNrTmFtZSA9IHZybS5leHByZXNzaW9uTWFuYWdlci5nZXRFeHByZXNzaW9uVHJhY2tOYW1lKCAnYmxpbmsnICk7XG4gICAqIGNvbnN0IHRyYWNrID0gbmV3IFRIUkVFLk51bWJlcktleWZyYW1lVHJhY2soXG4gICAqICAgbmFtZSxcbiAgICogICBbIDAuMCwgMC41LCAxLjAgXSwgLy8gdGltZXNcbiAgICogICBbIDAuMCwgMS4wLCAwLjAgXSAvLyB2YWx1ZXNcbiAgICogKTtcbiAgICpcbiAgICogY29uc3QgY2xpcCA9IG5ldyBUSFJFRS5BbmltYXRpb25DbGlwKFxuICAgKiAgICdibGluaycsIC8vIG5hbWVcbiAgICogICAxLjAsIC8vIGR1cmF0aW9uXG4gICAqICAgWyB0cmFjayBdIC8vIHRyYWNrc1xuICAgKiApO1xuICAgKlxuICAgKiBjb25zdCBtaXhlciA9IG5ldyBUSFJFRS5BbmltYXRpb25NaXhlciggdnJtLnNjZW5lICk7XG4gICAqIGNvbnN0IGFjdGlvbiA9IG1peGVyLmNsaXBBY3Rpb24oIGNsaXAgKTtcbiAgICogYWN0aW9uLnBsYXkoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGV4cHJlc3Npb25cbiAgICovXG4gIHB1YmxpYyBnZXRFeHByZXNzaW9uVHJhY2tOYW1lKG5hbWU6IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIHwgc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbihuYW1lKTtcbiAgICByZXR1cm4gZXhwcmVzc2lvbiA/IGAke2V4cHJlc3Npb24ubmFtZX0ud2VpZ2h0YCA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGV2ZXJ5IGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAvLyBzZWUgaG93IG11Y2ggd2Ugc2hvdWxkIG92ZXJyaWRlIGNlcnRhaW4gZXhwcmVzc2lvbnNcbiAgICBjb25zdCB3ZWlnaHRNdWx0aXBsaWVycyA9IHRoaXMuX2NhbGN1bGF0ZVdlaWdodE11bHRpcGxpZXJzKCk7XG5cbiAgICAvLyByZXNldCBleHByZXNzaW9uIGJpbmRzIGZpcnN0XG4gICAgdGhpcy5fZXhwcmVzc2lvbnMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgZXhwcmVzc2lvbi5jbGVhckFwcGxpZWRXZWlnaHQoKTtcbiAgICB9KTtcblxuICAgIC8vIHRoZW4gYXBwbHkgYmluZHNcbiAgICB0aGlzLl9leHByZXNzaW9ucy5mb3JFYWNoKChleHByZXNzaW9uKSA9PiB7XG4gICAgICBsZXQgbXVsdGlwbGllciA9IDEuMDtcbiAgICAgIGNvbnN0IG5hbWUgPSBleHByZXNzaW9uLmV4cHJlc3Npb25OYW1lO1xuXG4gICAgICBpZiAodGhpcy5ibGlua0V4cHJlc3Npb25OYW1lcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICBtdWx0aXBsaWVyICo9IHdlaWdodE11bHRpcGxpZXJzLmJsaW5rO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sb29rQXRFeHByZXNzaW9uTmFtZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgbXVsdGlwbGllciAqPSB3ZWlnaHRNdWx0aXBsaWVycy5sb29rQXQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1vdXRoRXhwcmVzc2lvbk5hbWVzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgIG11bHRpcGxpZXIgKj0gd2VpZ2h0TXVsdGlwbGllcnMubW91dGg7XG4gICAgICB9XG5cbiAgICAgIGV4cHJlc3Npb24uYXBwbHlXZWlnaHQoeyBtdWx0aXBsaWVyIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBzdW0gb2Ygb3ZlcnJpZGUgYW1vdW50cyB0byBzZWUgaG93IG11Y2ggd2Ugc2hvdWxkIG11bHRpcGx5IHdlaWdodHMgb2YgY2VydGFpbiBleHByZXNzaW9ucy5cbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdlaWdodE11bHRpcGxpZXJzKCk6IHtcbiAgICBibGluazogbnVtYmVyO1xuICAgIGxvb2tBdDogbnVtYmVyO1xuICAgIG1vdXRoOiBudW1iZXI7XG4gIH0ge1xuICAgIGxldCBibGluayA9IDEuMDtcbiAgICBsZXQgbG9va0F0ID0gMS4wO1xuICAgIGxldCBtb3V0aCA9IDEuMDtcblxuICAgIHRoaXMuX2V4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgIGJsaW5rIC09IGV4cHJlc3Npb24ub3ZlcnJpZGVCbGlua0Ftb3VudDtcbiAgICAgIGxvb2tBdCAtPSBleHByZXNzaW9uLm92ZXJyaWRlTG9va0F0QW1vdW50O1xuICAgICAgbW91dGggLT0gZXhwcmVzc2lvbi5vdmVycmlkZU1vdXRoQW1vdW50O1xuICAgIH0pO1xuXG4gICAgYmxpbmsgPSBNYXRoLm1heCgwLjAsIGJsaW5rKTtcbiAgICBsb29rQXQgPSBNYXRoLm1heCgwLjAsIGxvb2tBdCk7XG4gICAgbW91dGggPSBNYXRoLm1heCgwLjAsIG1vdXRoKTtcblxuICAgIHJldHVybiB7IGJsaW5rLCBsb29rQXQsIG1vdXRoIH07XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuZXhwb3J0IGNvbnN0IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSA9IHtcbiAgQ29sb3I6ICdjb2xvcicsXG4gIEVtaXNzaW9uQ29sb3I6ICdlbWlzc2lvbkNvbG9yJyxcbiAgU2hhZGVDb2xvcjogJ3NoYWRlQ29sb3InLFxuICBNYXRjYXBDb2xvcjogJ21hdGNhcENvbG9yJyxcbiAgUmltQ29sb3I6ICdyaW1Db2xvcicsXG4gIE91dGxpbmVDb2xvcjogJ291dGxpbmVDb2xvcicsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUgPVxuICAodHlwZW9mIFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSlba2V5b2YgdHlwZW9mIFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZV07XG5cbmV4cG9ydCBjb25zdCB2MEV4cHJlc3Npb25NYXRlcmlhbENvbG9yTWFwOiB7IFtrZXk6IHN0cmluZ106IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSB8IHVuZGVmaW5lZCB9ID0ge1xuICBfQ29sb3I6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZS5Db2xvcixcbiAgX0VtaXNzaW9uQ29sb3I6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZS5FbWlzc2lvbkNvbG9yLFxuICBfU2hhZGVDb2xvcjogVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlLlNoYWRlQ29sb3IsXG4gIF9SaW1Db2xvcjogVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlLlJpbUNvbG9yLFxuICBfT3V0bGluZUNvbG9yOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUuT3V0bGluZUNvbG9yLFxufTtcbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25CaW5kIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uQmluZCc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlJztcblxuY29uc3QgX2NvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCk7XG5cbmludGVyZmFjZSBDb2xvckJpbmRTdGF0ZSB7XG4gIHByb3BlcnR5TmFtZTogc3RyaW5nO1xuICBpbml0aWFsVmFsdWU6IFRIUkVFLkNvbG9yO1xuICBkZWx0YVZhbHVlOiBUSFJFRS5Db2xvcjtcbn1cblxuaW50ZXJmYWNlIEFscGhhQmluZFN0YXRlIHtcbiAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XG4gIGluaXRpYWxWYWx1ZTogbnVtYmVyO1xuICBkZWx0YVZhbHVlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBCaW5kU3RhdGUge1xuICBjb2xvcjogQ29sb3JCaW5kU3RhdGUgfCBudWxsO1xuICBhbHBoYTogQWxwaGFCaW5kU3RhdGUgfCBudWxsO1xufVxuXG4vKipcbiAqIEEgYmluZCBvZiBleHByZXNzaW9uIGluZmx1ZW5jZXMgdG8gYSBtYXRlcmlhbCBjb2xvci5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCBpbXBsZW1lbnRzIFZSTUV4cHJlc3Npb25CaW5kIHtcbiAgLyoqXG4gICAqIE1hcHBpbmcgb2YgcHJvcGVydHkgbmFtZXMgZnJvbSBWUk1DL21hdGVyaWFsQ29sb3JCaW5kcy50eXBlIHRvIHRocmVlLmpzL01hdGVyaWFsLlxuICAgKiBUaGUgZmlyc3QgZWxlbWVudCBzdGFuZHMgZm9yIGNvbG9yIGNoYW5uZWxzLCB0aGUgc2Vjb25kIGVsZW1lbnQgc3RhbmRzIGZvciB0aGUgYWxwaGEgY2hhbm5lbC5cbiAgICogVGhlIHNlY29uZCBlbGVtZW50IGNhbiBiZSBudWxsIGlmIHRoZSB0YXJnZXQgcHJvcGVydHkgZG9lc24ndCBleGlzdC5cbiAgICovXG4gIC8vIFRPRE86IFdlIG1pZ2h0IHdhbnQgdG8gdXNlIHRoZSBgc2F0aXNmaWVzYCBvcGVyYXRvciBvbmNlIHdlIGJ1bXAgVFMgdG8gNC45IG9yIGhpZ2hlclxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9waXhpdi90aHJlZS12cm0vcHVsbC8xMzIzI2Rpc2N1c3Npb25fcjEzNzQwMjAwMzVcbiAgcHJpdmF0ZSBzdGF0aWMgX3Byb3BlcnR5TmFtZU1hcE1hcDoge1xuICAgIFtkaXN0aW5ndWlzaGVyOiBzdHJpbmddOiB7IFt0eXBlIGluIFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZV0/OiByZWFkb25seSBbc3RyaW5nLCBzdHJpbmcgfCBudWxsXSB9O1xuICB9ID0ge1xuICAgIGlzTWVzaFN0YW5kYXJkTWF0ZXJpYWw6IHtcbiAgICAgIGNvbG9yOiBbJ2NvbG9yJywgJ29wYWNpdHknXSxcbiAgICAgIGVtaXNzaW9uQ29sb3I6IFsnZW1pc3NpdmUnLCBudWxsXSxcbiAgICB9LFxuICAgIGlzTWVzaEJhc2ljTWF0ZXJpYWw6IHtcbiAgICAgIGNvbG9yOiBbJ2NvbG9yJywgJ29wYWNpdHknXSxcbiAgICB9LFxuICAgIGlzTVRvb25NYXRlcmlhbDoge1xuICAgICAgY29sb3I6IFsnY29sb3InLCAnb3BhY2l0eSddLFxuICAgICAgZW1pc3Npb25Db2xvcjogWydlbWlzc2l2ZScsIG51bGxdLFxuICAgICAgb3V0bGluZUNvbG9yOiBbJ291dGxpbmVDb2xvckZhY3RvcicsIG51bGxdLFxuICAgICAgbWF0Y2FwQ29sb3I6IFsnbWF0Y2FwRmFjdG9yJywgbnVsbF0sXG4gICAgICByaW1Db2xvcjogWydwYXJhbWV0cmljUmltQ29sb3JGYWN0b3InLCBudWxsXSxcbiAgICAgIHNoYWRlQ29sb3I6IFsnc2hhZGVDb2xvckZhY3RvcicsIG51bGxdLFxuICAgIH0sXG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgbWF0ZXJpYWwuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgdGFyZ2V0IHByb3BlcnR5IG9mIHRoZSBtYXRlcmlhbC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0eXBlOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGU7XG5cbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgY29sb3IuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdGFyZ2V0VmFsdWU6IFRIUkVFLkNvbG9yO1xuXG4gIC8qKlxuICAgKiBUaGUgdGFyZ2V0IGFscGhhLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHRhcmdldEFscGhhOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEl0cyBiaW5kaW5nIHN0YXRlLlxuICAgKiBJZiBpdCBjYW5ub3QgZmluZCB0aGUgdGFyZ2V0IHByb3BlcnR5IGluIHRoZSBjb25zdHJ1Y3RvciwgZWFjaCBwcm9wZXJ0eSB3aWxsIGJlIG51bGwgaW5zdGVhZC5cbiAgICovXG4gIHByaXZhdGUgX3N0YXRlOiBCaW5kU3RhdGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHtcbiAgICBtYXRlcmlhbCxcbiAgICB0eXBlLFxuICAgIHRhcmdldFZhbHVlLFxuICAgIHRhcmdldEFscGhhLFxuICB9OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBtYXRlcmlhbC5cbiAgICAgKi9cbiAgICBtYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgdGFyZ2V0IHByb3BlcnR5IG9mIHRoZSBtYXRlcmlhbC5cbiAgICAgKi9cbiAgICB0eXBlOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IGNvbG9yLlxuICAgICAqL1xuICAgIHRhcmdldFZhbHVlOiBUSFJFRS5Db2xvcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgYWxwaGEuXG4gICAgICovXG4gICAgdGFyZ2V0QWxwaGE/OiBudW1iZXI7XG4gIH0pIHtcbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRhcmdldFZhbHVlID0gdGFyZ2V0VmFsdWU7XG4gICAgdGhpcy50YXJnZXRBbHBoYSA9IHRhcmdldEFscGhhID8/IDEuMDtcblxuICAgIC8vIGluaXQgYmluZCBzdGF0ZVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5faW5pdENvbG9yQmluZFN0YXRlKCk7XG4gICAgY29uc3QgYWxwaGEgPSB0aGlzLl9pbml0QWxwaGFCaW5kU3RhdGUoKTtcbiAgICB0aGlzLl9zdGF0ZSA9IHsgY29sb3IsIGFscGhhIH07XG4gIH1cblxuICBwdWJsaWMgYXBwbHlXZWlnaHQod2VpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbG9yLCBhbHBoYSB9ID0gdGhpcy5fc3RhdGU7XG5cbiAgICBpZiAoY29sb3IgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBwcm9wZXJ0eU5hbWUsIGRlbHRhVmFsdWUgfSA9IGNvbG9yO1xuXG4gICAgICBjb25zdCB0YXJnZXQgPSAodGhpcy5tYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgVEhSRUUuQ29sb3I7XG4gICAgICBpZiAodGFyZ2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0YXJnZXQuYWRkKF9jb2xvci5jb3B5KGRlbHRhVmFsdWUpLm11bHRpcGx5U2NhbGFyKHdlaWdodCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbHBoYSAhPSBudWxsKSB7XG4gICAgICBjb25zdCB7IHByb3BlcnR5TmFtZSwgZGVsdGFWYWx1ZSB9ID0gYWxwaGE7XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9ICh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBudW1iZXI7XG4gICAgICBpZiAodGFyZ2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAoKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIG51bWJlcikgKz0gZGVsdGFWYWx1ZSAqIHdlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXJBcHBsaWVkV2VpZ2h0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29sb3IsIGFscGhhIH0gPSB0aGlzLl9zdGF0ZTtcblxuICAgIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgICBjb25zdCB7IHByb3BlcnR5TmFtZSwgaW5pdGlhbFZhbHVlIH0gPSBjb2xvcjtcblxuICAgICAgY29uc3QgdGFyZ2V0ID0gKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIFRIUkVFLkNvbG9yO1xuICAgICAgaWYgKHRhcmdldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFyZ2V0LmNvcHkoaW5pdGlhbFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWxwaGEgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBwcm9wZXJ0eU5hbWUsIGluaXRpYWxWYWx1ZSB9ID0gYWxwaGE7XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9ICh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBudW1iZXI7XG4gICAgICBpZiAodGFyZ2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAoKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIG51bWJlcikgPSBpbml0aWFsVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdENvbG9yQmluZFN0YXRlKCk6IENvbG9yQmluZFN0YXRlIHwgbnVsbCB7XG4gICAgY29uc3QgeyBtYXRlcmlhbCwgdHlwZSwgdGFyZ2V0VmFsdWUgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXAgPSB0aGlzLl9nZXRQcm9wZXJ0eU5hbWVNYXAoKTtcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWVNYXA/Llt0eXBlXT8uWzBdID8/IG51bGw7XG5cbiAgICBpZiAocHJvcGVydHlOYW1lID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFRyaWVkIHRvIGFkZCBhIG1hdGVyaWFsIGNvbG9yIGJpbmQgdG8gdGhlIG1hdGVyaWFsICR7XG4gICAgICAgICAgbWF0ZXJpYWwubmFtZSA/PyAnKG5vIG5hbWUpJ1xuICAgICAgICB9LCB0aGUgdHlwZSAke3R5cGV9IGJ1dCB0aGUgbWF0ZXJpYWwgb3IgdGhlIHR5cGUgaXMgbm90IHN1cHBvcnRlZC5gLFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gKG1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBUSFJFRS5Db2xvcjtcblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRhcmdldC5jbG9uZSgpO1xuXG4gICAgLy8gXHU4Q0EwXHUzMDZFXHU1MDI0XHUzMDkyXHU0RkREXHU2MzAxXHUzMDU5XHUzMDhCXHUzMDVGXHUzMDgxXHUzMDZCQ29sb3Iuc3ViXHUzMDkyXHU0RjdGXHUzMDhGXHUzMDVBXHUzMDZCXHU1REVFXHU1MjA2XHUzMDkyXHU4QTA4XHU3Qjk3XHUzMDU5XHUzMDhCXG4gICAgY29uc3QgZGVsdGFWYWx1ZSA9IG5ldyBUSFJFRS5Db2xvcihcbiAgICAgIHRhcmdldFZhbHVlLnIgLSBpbml0aWFsVmFsdWUucixcbiAgICAgIHRhcmdldFZhbHVlLmcgLSBpbml0aWFsVmFsdWUuZyxcbiAgICAgIHRhcmdldFZhbHVlLmIgLSBpbml0aWFsVmFsdWUuYixcbiAgICApO1xuXG4gICAgcmV0dXJuIHsgcHJvcGVydHlOYW1lLCBpbml0aWFsVmFsdWUsIGRlbHRhVmFsdWUgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRBbHBoYUJpbmRTdGF0ZSgpOiBBbHBoYUJpbmRTdGF0ZSB8IG51bGwge1xuICAgIGNvbnN0IHsgbWF0ZXJpYWwsIHR5cGUsIHRhcmdldEFscGhhIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lTWFwID0gdGhpcy5fZ2V0UHJvcGVydHlOYW1lTWFwKCk7XG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lTWFwPy5bdHlwZV0/LlsxXSA/PyBudWxsO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZSA9PSBudWxsICYmIHRhcmdldEFscGhhICE9PSAxLjApIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFRyaWVkIHRvIGFkZCBhIG1hdGVyaWFsIGFscGhhIGJpbmQgdG8gdGhlIG1hdGVyaWFsICR7XG4gICAgICAgICAgbWF0ZXJpYWwubmFtZSA/PyAnKG5vIG5hbWUpJ1xuICAgICAgICB9LCB0aGUgdHlwZSAke3R5cGV9IGJ1dCB0aGUgbWF0ZXJpYWwgb3IgdGhlIHR5cGUgZG9lcyBub3Qgc3VwcG9ydCBhbHBoYS5gLFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5TmFtZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSAobWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIG51bWJlcjtcblxuICAgIGNvbnN0IGRlbHRhVmFsdWUgPSB0YXJnZXRBbHBoYSAtIGluaXRpYWxWYWx1ZTtcblxuICAgIHJldHVybiB7IHByb3BlcnR5TmFtZSwgaW5pdGlhbFZhbHVlLCBkZWx0YVZhbHVlIH07XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9wZXJ0eU5hbWVNYXAoKTpcbiAgICB8IHsgW3R5cGUgaW4gVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlXT86IHJlYWRvbmx5IFtzdHJpbmcsIHN0cmluZyB8IG51bGxdIH1cbiAgICB8IG51bGwge1xuICAgIHJldHVybiAoXG4gICAgICBPYmplY3QuZW50cmllcyhWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQuX3Byb3BlcnR5TmFtZU1hcE1hcCkuZmluZCgoW2Rpc3Rpbmd1aXNoZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiAodGhpcy5tYXRlcmlhbCBhcyBhbnkpW2Rpc3Rpbmd1aXNoZXJdID09PSB0cnVlO1xuICAgICAgfSk/LlsxXSA/PyBudWxsXG4gICAgKTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uQmluZCB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbkJpbmQnO1xuXG4vKipcbiAqIEEgYmluZCBvZiB7QGxpbmsgVlJNRXhwcmVzc2lvbn0gaW5mbHVlbmNlcyB0byBtb3JwaCB0YXJnZXRzLlxuICovXG5leHBvcnQgY2xhc3MgVlJNRXhwcmVzc2lvbk1vcnBoVGFyZ2V0QmluZCBpbXBsZW1lbnRzIFZSTUV4cHJlc3Npb25CaW5kIHtcbiAgLyoqXG4gICAqIFRoZSBtZXNoIHByaW1pdGl2ZXMgdGhhdCBhdHRhY2hlZCB0byB0YXJnZXQgbWVzaC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBwcmltaXRpdmVzOiBUSFJFRS5NZXNoW107XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleCBvZiB0aGUgbW9ycGggdGFyZ2V0IGluIHRoZSBtZXNoLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWlnaHQgdmFsdWUgb2YgdGFyZ2V0IG1vcnBoIHRhcmdldC4gUmFuZ2luZyBpbiBbMC4wIC0gMS4wXS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB3ZWlnaHQ6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioe1xuICAgIHByaW1pdGl2ZXMsXG4gICAgaW5kZXgsXG4gICAgd2VpZ2h0LFxuICB9OiB7XG4gICAgLyoqXG4gICAgICogVGhlIG1lc2ggcHJpbWl0aXZlcyB0aGF0IGF0dGFjaGVkIHRvIHRhcmdldCBtZXNoLlxuICAgICAqL1xuICAgIHByaW1pdGl2ZXM6IFRIUkVFLk1lc2hbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgbW9ycGggdGFyZ2V0IGluIHRoZSBtZXNoLlxuICAgICAqL1xuICAgIGluZGV4OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2VpZ2h0IHZhbHVlIG9mIHRhcmdldCBtb3JwaCB0YXJnZXQuIFJhbmdpbmcgaW4gWzAuMCAtIDEuMF0uXG4gICAgICovXG4gICAgd2VpZ2h0OiBudW1iZXI7XG4gIH0pIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMgPSBwcmltaXRpdmVzO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVdlaWdodCh3ZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucHJpbWl0aXZlcy5mb3JFYWNoKChtZXNoKSA9PiB7XG4gICAgICBpZiAobWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXM/Llt0aGlzLmluZGV4XSAhPSBudWxsKSB7XG4gICAgICAgIG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzW3RoaXMuaW5kZXhdICs9IHRoaXMud2VpZ2h0ICogd2VpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQXBwbGllZFdlaWdodCgpOiB2b2lkIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMuZm9yRWFjaCgobWVzaCkgPT4ge1xuICAgICAgaWYgKG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzPy5bdGhpcy5pbmRleF0gIT0gbnVsbCkge1xuICAgICAgICBtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t0aGlzLmluZGV4XSA9IDAuMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbkJpbmQgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25CaW5kJztcblxuY29uc3QgX3YyID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuLyoqXG4gKiBBIGJpbmQgb2YgZXhwcmVzc2lvbiBpbmZsdWVuY2VzIHRvIHRleHR1cmUgdHJhbnNmb3Jtcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZCBpbXBsZW1lbnRzIFZSTUV4cHJlc3Npb25CaW5kIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX3Byb3BlcnR5TmFtZXNNYXA6IHsgW2Rpc3Rpbmd1aXNoZXI6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XG4gICAgaXNNZXNoU3RhbmRhcmRNYXRlcmlhbDogW1xuICAgICAgJ21hcCcsXG4gICAgICAnZW1pc3NpdmVNYXAnLFxuICAgICAgJ2J1bXBNYXAnLFxuICAgICAgJ25vcm1hbE1hcCcsXG4gICAgICAnZGlzcGxhY2VtZW50TWFwJyxcbiAgICAgICdyb3VnaG5lc3NNYXAnLFxuICAgICAgJ21ldGFsbmVzc01hcCcsXG4gICAgICAnYWxwaGFNYXAnLFxuICAgIF0sXG4gICAgaXNNZXNoQmFzaWNNYXRlcmlhbDogWydtYXAnLCAnc3BlY3VsYXJNYXAnLCAnYWxwaGFNYXAnXSxcbiAgICBpc01Ub29uTWF0ZXJpYWw6IFtcbiAgICAgICdtYXAnLFxuICAgICAgJ25vcm1hbE1hcCcsXG4gICAgICAnZW1pc3NpdmVNYXAnLFxuICAgICAgJ3NoYWRlTXVsdGlwbHlUZXh0dXJlJyxcbiAgICAgICdyaW1NdWx0aXBseVRleHR1cmUnLFxuICAgICAgJ291dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZScsXG4gICAgICAndXZBbmltYXRpb25NYXNrVGV4dHVyZScsXG4gICAgXSxcbiAgfTtcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBtYXRlcmlhbC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBtYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWw7XG5cbiAgLyoqXG4gICAqIFRoZSB1diBzY2FsZSBvZiB0aGUgdGV4dHVyZS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzY2FsZTogVEhSRUUuVmVjdG9yMjtcblxuICAvKipcbiAgICogVGhlIHV2IG9mZnNldCBvZiB0aGUgdGV4dHVyZS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBvZmZzZXQ6IFRIUkVFLlZlY3RvcjI7XG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHRleHR1cmUgbmFtZXMgYW5kIGl0cyBzdGF0ZSB0aGF0IHNob3VsZCBiZSB0cmFuc2Zvcm1lZCBieSB0aGlzIGJpbmQuXG4gICAqL1xuICBwcml2YXRlIF9wcm9wZXJ0aWVzOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGluaXRpYWxPZmZzZXQ6IFRIUkVFLlZlY3RvcjI7XG4gICAgaW5pdGlhbFNjYWxlOiBUSFJFRS5WZWN0b3IyO1xuICAgIGRlbHRhT2Zmc2V0OiBUSFJFRS5WZWN0b3IyO1xuICAgIGRlbHRhU2NhbGU6IFRIUkVFLlZlY3RvcjI7XG4gIH1bXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioe1xuICAgIG1hdGVyaWFsLFxuICAgIHNjYWxlLFxuICAgIG9mZnNldCxcbiAgfToge1xuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgbWF0ZXJpYWwuXG4gICAgICovXG4gICAgbWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHV2IHNjYWxlIG9mIHRoZSB0ZXh0dXJlLlxuICAgICAqL1xuICAgIHNjYWxlOiBUSFJFRS5WZWN0b3IyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHV2IG9mZnNldCBvZiB0aGUgdGV4dHVyZS5cbiAgICAgKi9cbiAgICBvZmZzZXQ6IFRIUkVFLlZlY3RvcjI7XG4gIH0pIHtcbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5lbnRyaWVzKFZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZC5fcHJvcGVydHlOYW1lc01hcCkuZmluZChcbiAgICAgIChbZGlzdGluZ3Vpc2hlcl0pID0+IHtcbiAgICAgICAgcmV0dXJuIChtYXRlcmlhbCBhcyBhbnkpW2Rpc3Rpbmd1aXNoZXJdID09PSB0cnVlO1xuICAgICAgfSxcbiAgICApPy5bMV07XG5cbiAgICBpZiAocHJvcGVydHlOYW1lcyA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUcmllZCB0byBhZGQgYSB0ZXh0dXJlIHRyYW5zZm9ybSBiaW5kIHRvIHRoZSBtYXRlcmlhbCAke1xuICAgICAgICAgIG1hdGVyaWFsLm5hbWUgPz8gJyhubyBuYW1lKSdcbiAgICAgICAgfSBidXQgdGhlIG1hdGVyaWFsIGlzIG5vdCBzdXBwb3J0ZWQuYCxcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcHJvcGVydGllcyA9IFtdO1xuXG4gICAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gKChtYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgVEhSRUUuVGV4dHVyZSB8IHVuZGVmaW5lZCk/LmNsb25lKCk7XG4gICAgICAgIGlmICghdGV4dHVyZSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgKG1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSA9IHRleHR1cmU7IC8vIGJlY2F1c2UgdGhlIHRleHR1cmUgaXMgY2xvbmVkXG5cbiAgICAgICAgY29uc3QgaW5pdGlhbE9mZnNldCA9IHRleHR1cmUub2Zmc2V0LmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGluaXRpYWxTY2FsZSA9IHRleHR1cmUucmVwZWF0LmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGRlbHRhT2Zmc2V0ID0gb2Zmc2V0LmNsb25lKCkuc3ViKGluaXRpYWxPZmZzZXQpO1xuICAgICAgICBjb25zdCBkZWx0YVNjYWxlID0gc2NhbGUuY2xvbmUoKS5zdWIoaW5pdGlhbFNjYWxlKTtcblxuICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICBpbml0aWFsT2Zmc2V0LFxuICAgICAgICAgIGRlbHRhT2Zmc2V0LFxuICAgICAgICAgIGluaXRpYWxTY2FsZSxcbiAgICAgICAgICBkZWx0YVNjYWxlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhcHBseVdlaWdodCh3ZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3Byb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9ICh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHkubmFtZV0gYXMgVEhSRUUuVGV4dHVyZTtcbiAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFRPRE86IHdlIHNob3VsZCBraWNrIHRoaXMgYXQgYGFkZE1hdGVyaWFsVmFsdWVgXG5cbiAgICAgIHRhcmdldC5vZmZzZXQuYWRkKF92Mi5jb3B5KHByb3BlcnR5LmRlbHRhT2Zmc2V0KS5tdWx0aXBseVNjYWxhcih3ZWlnaHQpKTtcbiAgICAgIHRhcmdldC5yZXBlYXQuYWRkKF92Mi5jb3B5KHByb3BlcnR5LmRlbHRhU2NhbGUpLm11bHRpcGx5U2NhbGFyKHdlaWdodCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQXBwbGllZFdlaWdodCgpOiB2b2lkIHtcbiAgICB0aGlzLl9wcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSAodGhpcy5tYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5Lm5hbWVdIGFzIFRIUkVFLlRleHR1cmU7XG4gICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBUT0RPOiB3ZSBzaG91bGQga2ljayB0aGlzIGF0IGBhZGRNYXRlcmlhbFZhbHVlYFxuXG4gICAgICB0YXJnZXQub2Zmc2V0LmNvcHkocHJvcGVydHkuaW5pdGlhbE9mZnNldCk7XG4gICAgICB0YXJnZXQucmVwZWF0LmNvcHkocHJvcGVydHkuaW5pdGlhbFNjYWxlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG5leHBvcnQgY29uc3QgVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSA9IHtcbiAgTm9uZTogJ25vbmUnLFxuICBCbG9jazogJ2Jsb2NrJyxcbiAgQmxlbmQ6ICdibGVuZCcsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlID0gKHR5cGVvZiBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlKVtrZXlvZiB0eXBlb2YgVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZV07XG4iLCAiaW1wb3J0IHR5cGUgeyBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uIH0gZnJvbSAnLi9WUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuLi9odW1hbm9pZCc7XG5cbmV4cG9ydCBjbGFzcyBWUk1GaXJzdFBlcnNvbiB7XG4gIC8qKlxuICAgKiBBIGRlZmF1bHQgY2FtZXJhIGxheWVyIGZvciBgRmlyc3RQZXJzb25Pbmx5YCBsYXllci5cbiAgICpcbiAgICogQHNlZSBbW2dldEZpcnN0UGVyc29uT25seUxheWVyXV1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9GSVJTVFBFUlNPTl9PTkxZX0xBWUVSID0gOTtcblxuICAvKipcbiAgICogQSBkZWZhdWx0IGNhbWVyYSBsYXllciBmb3IgYFRoaXJkUGVyc29uT25seWAgbGF5ZXIuXG4gICAqXG4gICAqIEBzZWUgW1tnZXRUaGlyZFBlcnNvbk9ubHlMYXllcl1dXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfVEhJUkRQRVJTT05fT05MWV9MQVlFUiA9IDEwO1xuXG4gIC8qKlxuICAgKiBJdHMgYXNzb2NpYXRlZCB7QGxpbmsgVlJNSHVtYW5vaWR9LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGh1bWFub2lkOiBWUk1IdW1hbm9pZDtcbiAgcHVibGljIG1lc2hBbm5vdGF0aW9uczogVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbltdO1xuXG4gIHByaXZhdGUgX2ZpcnN0UGVyc29uT25seUxheWVyID0gVlJNRmlyc3RQZXJzb24uREVGQVVMVF9GSVJTVFBFUlNPTl9PTkxZX0xBWUVSO1xuICBwcml2YXRlIF90aGlyZFBlcnNvbk9ubHlMYXllciA9IFZSTUZpcnN0UGVyc29uLkRFRkFVTFRfVEhJUkRQRVJTT05fT05MWV9MQVlFUjtcblxuICBwcml2YXRlIF9pbml0aWFsaXplZExheWVycyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgVlJNRmlyc3RQZXJzb24gb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gaHVtYW5vaWQgQSB7QGxpbmsgVlJNSHVtYW5vaWR9XG4gICAqIEBwYXJhbSBtZXNoQW5ub3RhdGlvbnMgQSByZW5kZXJlciBzZXR0aW5ncy4gU2VlIHRoZSBkZXNjcmlwdGlvbiBvZiBbW1JlbmRlcmVyRmlyc3RQZXJzb25GbGFnc11dIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbm9pZDogVlJNSHVtYW5vaWQsIG1lc2hBbm5vdGF0aW9uczogVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbltdKSB7XG4gICAgdGhpcy5odW1hbm9pZCA9IGh1bWFub2lkO1xuICAgIHRoaXMubWVzaEFubm90YXRpb25zID0gbWVzaEFubm90YXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgdGhlIGdpdmVuIHtAbGluayBWUk1GaXJzdFBlcnNvbn0gaW50byB0aGlzIG9uZS5cbiAgICoge0BsaW5rIGh1bWFub2lkfSBtdXN0IGJlIHNhbWUgYXMgdGhlIHNvdXJjZSBvbmUuXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIHtAbGluayBWUk1GaXJzdFBlcnNvbn0geW91IHdhbnQgdG8gY29weVxuICAgKiBAcmV0dXJucyB0aGlzXG4gICAqL1xuICBwdWJsaWMgY29weShzb3VyY2U6IFZSTUZpcnN0UGVyc29uKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuaHVtYW5vaWQgIT09IHNvdXJjZS5odW1hbm9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWUk1GaXJzdFBlcnNvbjogaHVtYW5vaWQgbXVzdCBiZSBzYW1lIGluIG9yZGVyIHRvIGNvcHknKTtcbiAgICB9XG5cbiAgICB0aGlzLm1lc2hBbm5vdGF0aW9ucyA9IHNvdXJjZS5tZXNoQW5ub3RhdGlvbnMubWFwKChhbm5vdGF0aW9uKSA9PiAoe1xuICAgICAgbWVzaGVzOiBhbm5vdGF0aW9uLm1lc2hlcy5jb25jYXQoKSxcbiAgICAgIHR5cGU6IGFubm90YXRpb24udHlwZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY2xvbmUgb2YgdGhpcyB7QGxpbmsgVlJNRmlyc3RQZXJzb259LlxuICAgKiBAcmV0dXJucyBDb3BpZWQge0BsaW5rIFZSTUZpcnN0UGVyc29ufVxuICAgKi9cbiAgcHVibGljIGNsb25lKCk6IFZSTUZpcnN0UGVyc29uIHtcbiAgICByZXR1cm4gbmV3IFZSTUZpcnN0UGVyc29uKHRoaXMuaHVtYW5vaWQsIHRoaXMubWVzaEFubm90YXRpb25zKS5jb3B5KHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY2FtZXJhIGxheWVyIHJlcHJlc2VudHMgYEZpcnN0UGVyc29uT25seWAgbGF5ZXIuXG4gICAqIE5vdGUgdGhhdCAqKnlvdSBtdXN0IGNhbGwge0BsaW5rIHNldHVwfSBmaXJzdCBiZWZvcmUgeW91IHVzZSB0aGUgbGF5ZXIgZmVhdHVyZSoqIG9yIGl0IGRvZXMgbm90IHdvcmsgcHJvcGVybHkuXG4gICAqXG4gICAqIFRoZSB2YWx1ZSBpcyB7QGxpbmsgREVGQVVMVF9GSVJTVFBFUlNPTl9PTkxZX0xBWUVSfSBieSBkZWZhdWx0IGJ1dCB5b3UgY2FuIGNoYW5nZSB0aGUgbGF5ZXIgYnkgc3BlY2lmeWluZyB2aWEge0BsaW5rIHNldHVwfSBpZiB5b3UgcHJlZmVyLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vdnJtLmRldi9lbi91bml2cm0vYXBpL3VuaXZybV91c2VfZmlyc3RwZXJzb24vXG4gICAqIEBzZWUgaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzLyNhcGkvZW4vY29yZS9MYXllcnNcbiAgICovXG4gIHB1YmxpYyBnZXQgZmlyc3RQZXJzb25Pbmx5TGF5ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXI7XG4gIH1cblxuICAvKipcbiAgICogQSBjYW1lcmEgbGF5ZXIgcmVwcmVzZW50cyBgVGhpcmRQZXJzb25Pbmx5YCBsYXllci5cbiAgICogTm90ZSB0aGF0ICoqeW91IG11c3QgY2FsbCB7QGxpbmsgc2V0dXB9IGZpcnN0IGJlZm9yZSB5b3UgdXNlIHRoZSBsYXllciBmZWF0dXJlKiogb3IgaXQgZG9lcyBub3Qgd29yayBwcm9wZXJseS5cbiAgICpcbiAgICogVGhlIHZhbHVlIGlzIHtAbGluayBERUZBVUxUX1RISVJEUEVSU09OX09OTFlfTEFZRVJ9IGJ5IGRlZmF1bHQgYnV0IHlvdSBjYW4gY2hhbmdlIHRoZSBsYXllciBieSBzcGVjaWZ5aW5nIHZpYSB7QGxpbmsgc2V0dXB9IGlmIHlvdSBwcmVmZXIuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly92cm0uZGV2L2VuL3VuaXZybS9hcGkvdW5pdnJtX3VzZV9maXJzdHBlcnNvbi9cbiAgICogQHNlZSBodHRwczovL3RocmVlanMub3JnL2RvY3MvI2FwaS9lbi9jb3JlL0xheWVyc1xuICAgKi9cbiAgcHVibGljIGdldCB0aGlyZFBlcnNvbk9ubHlMYXllcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiB0aGlzIG1ldGhvZCwgaXQgYXNzaWducyBsYXllcnMgZm9yIGV2ZXJ5IG1lc2hlcyBiYXNlZCBvbiBtZXNoIGFubm90YXRpb25zLlxuICAgKiBZb3UgbXVzdCBjYWxsIHRoaXMgbWV0aG9kIGZpcnN0IGJlZm9yZSB5b3UgdXNlIHRoZSBsYXllciBmZWF0dXJlLlxuICAgKlxuICAgKiBUaGlzIGlzIGFuIGVxdWl2YWxlbnQgb2YgW1ZSTUZpcnN0UGVyc29uLlNldHVwXShodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvVW5pVlJNL2Jsb2IvNzNhNWJkOGZjZGRhYTJhN2E4NzM1MDk5YTk3ZTYzYzlkYjNlNWVhMC9Bc3NldHMvVlJNL1J1bnRpbWUvRmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb24uY3MjTDI5NS1MMjk5KSBvZiB0aGUgVW5pVlJNLlxuICAgKlxuICAgKiBUaGUgYGNhbWVyYUxheWVyYCBwYXJhbWV0ZXIgc3BlY2lmaWVzIHdoaWNoIGxheWVyIHdpbGwgYmUgYXNzaWduZWQgZm9yIGBGaXJzdFBlcnNvbk9ubHlgIC8gYFRoaXJkUGVyc29uT25seWAuXG4gICAqIEluIFVuaVZSTSwgd2Ugc3BlY2lmaWVkIHRob3NlIGJ5IG5hbWluZyBlYWNoIGRlc2lyZWQgbGF5ZXIgYXMgYEZJUlNUUEVSU09OX09OTFlfTEFZRVJgIC8gYFRISVJEUEVSU09OX09OTFlfTEFZRVJgXG4gICAqIGJ1dCB3ZSBhcmUgZ29pbmcgdG8gc3BlY2lmeSB0aGVzZSBsYXllcnMgYXQgaGVyZSBzaW5jZSB3ZSBhcmUgdW5hYmxlIHRvIG5hbWUgbGF5ZXJzIGluIFRocmVlLmpzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FtZXJhTGF5ZXIgU3BlY2lmeSB3aGljaCBsYXllciB3aWxsIGJlIGZvciBgRmlyc3RQZXJzb25Pbmx5YCAvIGBUaGlyZFBlcnNvbk9ubHlgLlxuICAgKi9cbiAgcHVibGljIHNldHVwKHtcbiAgICBmaXJzdFBlcnNvbk9ubHlMYXllciA9IFZSTUZpcnN0UGVyc29uLkRFRkFVTFRfRklSU1RQRVJTT05fT05MWV9MQVlFUixcbiAgICB0aGlyZFBlcnNvbk9ubHlMYXllciA9IFZSTUZpcnN0UGVyc29uLkRFRkFVTFRfVEhJUkRQRVJTT05fT05MWV9MQVlFUixcbiAgfSA9IHt9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkTGF5ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyID0gZmlyc3RQZXJzb25Pbmx5TGF5ZXI7XG4gICAgdGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIgPSB0aGlyZFBlcnNvbk9ubHlMYXllcjtcblxuICAgIHRoaXMubWVzaEFubm90YXRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0ubWVzaGVzLmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2ZpcnN0UGVyc29uT25seScpIHtcbiAgICAgICAgICBtZXNoLmxheWVycy5zZXQodGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXIpO1xuICAgICAgICAgIG1lc2gudHJhdmVyc2UoKGNoaWxkKSA9PiBjaGlsZC5sYXllcnMuc2V0KHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAndGhpcmRQZXJzb25Pbmx5Jykge1xuICAgICAgICAgIG1lc2gubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcik7XG4gICAgICAgICAgbWVzaC50cmF2ZXJzZSgoY2hpbGQpID0+IGNoaWxkLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdhdXRvJykge1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZUhlYWRsZXNzTW9kZWwobWVzaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5faW5pdGlhbGl6ZWRMYXllcnMgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXhjbHVkZVRyaWFuZ2xlcyh0cmlhbmdsZXM6IG51bWJlcltdLCBid3M6IG51bWJlcltdW10sIHNraW5JbmRleDogbnVtYmVyW11bXSwgZXhjbHVkZTogbnVtYmVyW10pOiBudW1iZXIge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgaWYgKGJ3cyAhPSBudWxsICYmIGJ3cy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWFuZ2xlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICBjb25zdCBhID0gdHJpYW5nbGVzW2ldO1xuICAgICAgICBjb25zdCBiID0gdHJpYW5nbGVzW2kgKyAxXTtcbiAgICAgICAgY29uc3QgYyA9IHRyaWFuZ2xlc1tpICsgMl07XG4gICAgICAgIGNvbnN0IGJ3MCA9IGJ3c1thXTtcbiAgICAgICAgY29uc3Qgc2tpbjAgPSBza2luSW5kZXhbYV07XG5cbiAgICAgICAgaWYgKGJ3MFswXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMFswXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncwWzFdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4wWzFdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzBbMl0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjBbMl0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MFszXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMFszXSkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGJ3MSA9IGJ3c1tiXTtcbiAgICAgICAgY29uc3Qgc2tpbjEgPSBza2luSW5kZXhbYl07XG4gICAgICAgIGlmIChidzFbMF0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjFbMF0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MVsxXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMVsxXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncxWzJdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4xWzJdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzFbM10gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjFbM10pKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBidzIgPSBid3NbY107XG4gICAgICAgIGNvbnN0IHNraW4yID0gc2tpbkluZGV4W2NdO1xuICAgICAgICBpZiAoYncyWzBdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4yWzBdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzJbMV0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjJbMV0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MlsyXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMlsyXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncyWzNdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4yWzNdKSkgY29udGludWU7XG5cbiAgICAgICAgdHJpYW5nbGVzW2NvdW50KytdID0gYTtcbiAgICAgICAgdHJpYW5nbGVzW2NvdW50KytdID0gYjtcbiAgICAgICAgdHJpYW5nbGVzW2NvdW50KytdID0gYztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRXJhc2VkTWVzaChzcmM6IFRIUkVFLlNraW5uZWRNZXNoLCBlcmFzaW5nQm9uZXNJbmRleDogbnVtYmVyW10pOiBUSFJFRS5Ta2lubmVkTWVzaCB7XG4gICAgY29uc3QgZHN0ID0gbmV3IFRIUkVFLlNraW5uZWRNZXNoKHNyYy5nZW9tZXRyeS5jbG9uZSgpLCBzcmMubWF0ZXJpYWwpO1xuICAgIGRzdC5uYW1lID0gYCR7c3JjLm5hbWV9KGVyYXNlKWA7XG4gICAgZHN0LmZydXN0dW1DdWxsZWQgPSBzcmMuZnJ1c3R1bUN1bGxlZDtcbiAgICBkc3QubGF5ZXJzLnNldCh0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllcik7XG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IGRzdC5nZW9tZXRyeTtcblxuICAgIGNvbnN0IHNraW5JbmRleEF0dHIgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoJ3NraW5JbmRleCcpO1xuICAgIGNvbnN0IHNraW5JbmRleEF0dHJBcnJheSA9IHNraW5JbmRleEF0dHIgaW5zdGFuY2VvZiBUSFJFRS5HTEJ1ZmZlckF0dHJpYnV0ZSA/IFtdIDogc2tpbkluZGV4QXR0ci5hcnJheTtcbiAgICBjb25zdCBza2luSW5kZXggPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraW5JbmRleEF0dHJBcnJheS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgc2tpbkluZGV4LnB1c2goW1xuICAgICAgICBza2luSW5kZXhBdHRyQXJyYXlbaV0sXG4gICAgICAgIHNraW5JbmRleEF0dHJBcnJheVtpICsgMV0sXG4gICAgICAgIHNraW5JbmRleEF0dHJBcnJheVtpICsgMl0sXG4gICAgICAgIHNraW5JbmRleEF0dHJBcnJheVtpICsgM10sXG4gICAgICBdKTtcbiAgICB9XG5cbiAgICBjb25zdCBza2luV2VpZ2h0QXR0ciA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgnc2tpbldlaWdodCcpO1xuICAgIGNvbnN0IHNraW5XZWlnaHRBdHRyQXJyYXkgPSBza2luV2VpZ2h0QXR0ciBpbnN0YW5jZW9mIFRIUkVFLkdMQnVmZmVyQXR0cmlidXRlID8gW10gOiBza2luV2VpZ2h0QXR0ci5hcnJheTtcbiAgICBjb25zdCBza2luV2VpZ2h0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2luV2VpZ2h0QXR0ckFycmF5Lmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICBza2luV2VpZ2h0LnB1c2goW1xuICAgICAgICBza2luV2VpZ2h0QXR0ckFycmF5W2ldLFxuICAgICAgICBza2luV2VpZ2h0QXR0ckFycmF5W2kgKyAxXSxcbiAgICAgICAgc2tpbldlaWdodEF0dHJBcnJheVtpICsgMl0sXG4gICAgICAgIHNraW5XZWlnaHRBdHRyQXJyYXlbaSArIDNdLFxuICAgICAgXSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xuICAgIGlmICghaW5kZXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBnZW9tZXRyeSBkb2Vzbid0IGhhdmUgYW4gaW5kZXggYnVmZmVyXCIpO1xuICAgIH1cbiAgICBjb25zdCBvbGRUcmlhbmdsZXMgPSBBcnJheS5mcm9tKGluZGV4LmFycmF5KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5fZXhjbHVkZVRyaWFuZ2xlcyhvbGRUcmlhbmdsZXMsIHNraW5XZWlnaHQsIHNraW5JbmRleCwgZXJhc2luZ0JvbmVzSW5kZXgpO1xuICAgIGNvbnN0IG5ld1RyaWFuZ2xlOiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbmV3VHJpYW5nbGVbaV0gPSBvbGRUcmlhbmdsZXNbaV07XG4gICAgfVxuICAgIGdlb21ldHJ5LnNldEluZGV4KG5ld1RyaWFuZ2xlKTtcblxuICAgIC8vIG10b29uIG1hdGVyaWFsIGluY2x1ZGVzIG9uQmVmb3JlUmVuZGVyLiB0aGlzIGlzIHVuc3VwcG9ydGVkIGF0IFNraW5uZWRNZXNoI2Nsb25lXG4gICAgaWYgKHNyYy5vbkJlZm9yZVJlbmRlcikge1xuICAgICAgZHN0Lm9uQmVmb3JlUmVuZGVyID0gc3JjLm9uQmVmb3JlUmVuZGVyO1xuICAgIH1cbiAgICBkc3QuYmluZChuZXcgVEhSRUUuU2tlbGV0b24oc3JjLnNrZWxldG9uLmJvbmVzLCBzcmMuc2tlbGV0b24uYm9uZUludmVyc2VzKSwgbmV3IFRIUkVFLk1hdHJpeDQoKSk7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUhlYWRsZXNzTW9kZWxGb3JTa2lubmVkTWVzaChwYXJlbnQ6IFRIUkVFLk9iamVjdDNELCBtZXNoOiBUSFJFRS5Ta2lubmVkTWVzaCk6IHZvaWQge1xuICAgIGNvbnN0IGVyYXNlQm9uZUluZGV4ZXM6IG51bWJlcltdID0gW107XG4gICAgbWVzaC5za2VsZXRvbi5ib25lcy5mb3JFYWNoKChib25lLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzRXJhc2VUYXJnZXQoYm9uZSkpIGVyYXNlQm9uZUluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgfSk7XG5cbiAgICAvLyBVbmxpa2UgVW5pVlJNIHdlIGRvbid0IGNvcHkgbWVzaCBpZiBubyBpbnZpc2libGUgYm9uZSB3YXMgZm91bmRcbiAgICBpZiAoIWVyYXNlQm9uZUluZGV4ZXMubGVuZ3RoKSB7XG4gICAgICBtZXNoLmxheWVycy5lbmFibGUodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpO1xuICAgICAgbWVzaC5sYXllcnMuZW5hYmxlKHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbWVzaC5sYXllcnMuc2V0KHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKTtcbiAgICBjb25zdCBuZXdNZXNoID0gdGhpcy5fY3JlYXRlRXJhc2VkTWVzaChtZXNoLCBlcmFzZUJvbmVJbmRleGVzKTtcbiAgICBwYXJlbnQuYWRkKG5ld01lc2gpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlSGVhZGxlc3NNb2RlbChub2RlOiBUSFJFRS5PYmplY3QzRCk6IHZvaWQge1xuICAgIGlmIChub2RlLnR5cGUgPT09ICdHcm91cCcpIHtcbiAgICAgIG5vZGUubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcik7XG4gICAgICBpZiAodGhpcy5faXNFcmFzZVRhcmdldChub2RlKSkge1xuICAgICAgICBub2RlLnRyYXZlcnNlKChjaGlsZCkgPT4gY2hpbGQubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIHBhcmVudC5uYW1lID0gYF9oZWFkbGVzc18ke25vZGUubmFtZX1gO1xuICAgICAgICBwYXJlbnQubGF5ZXJzLnNldCh0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllcik7XG4gICAgICAgIG5vZGUucGFyZW50IS5hZGQocGFyZW50KTtcbiAgICAgICAgbm9kZS5jaGlsZHJlblxuICAgICAgICAgIC5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZC50eXBlID09PSAnU2tpbm5lZE1lc2gnKVxuICAgICAgICAgIC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2tpbm5lZE1lc2ggPSBjaGlsZCBhcyBUSFJFRS5Ta2lubmVkTWVzaDtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUhlYWRsZXNzTW9kZWxGb3JTa2lubmVkTWVzaChwYXJlbnQsIHNraW5uZWRNZXNoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ1NraW5uZWRNZXNoJykge1xuICAgICAgY29uc3Qgc2tpbm5lZE1lc2ggPSBub2RlIGFzIFRIUkVFLlNraW5uZWRNZXNoO1xuICAgICAgdGhpcy5fY3JlYXRlSGVhZGxlc3NNb2RlbEZvclNraW5uZWRNZXNoKG5vZGUucGFyZW50ISwgc2tpbm5lZE1lc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5faXNFcmFzZVRhcmdldChub2RlKSkge1xuICAgICAgICBub2RlLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpO1xuICAgICAgICBub2RlLnRyYXZlcnNlKChjaGlsZCkgPT4gY2hpbGQubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzRXJhc2VUYXJnZXQoYm9uZTogVEhSRUUuT2JqZWN0M0QpOiBib29sZWFuIHtcbiAgICBpZiAoYm9uZSA9PT0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgnaGVhZCcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFib25lLnBhcmVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNFcmFzZVRhcmdldChib25lLnBhcmVudCk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBWMFZSTSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtLTAuMCc7XG5pbXBvcnQgdHlwZSAqIGFzIFYxVlJNU2NoZW1hIGZyb20gJ0BwaXhpdi90eXBlcy12cm1jLXZybS0xLjAnO1xuaW1wb3J0IHR5cGUgeyBHTFRGLCBHTFRGTG9hZGVyUGx1Z2luLCBHTFRGUGFyc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi4vaHVtYW5vaWQvVlJNSHVtYW5vaWQnO1xuaW1wb3J0IHsgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGVzIH0gZnJvbSAnLi4vdXRpbHMvZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGUnO1xuaW1wb3J0IHsgVlJNRmlyc3RQZXJzb24gfSBmcm9tICcuL1ZSTUZpcnN0UGVyc29uJztcbmltcG9ydCB0eXBlIHsgVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbiB9IGZyb20gJy4vVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbic7XG5pbXBvcnQgdHlwZSB7IFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25UeXBlIH0gZnJvbSAnLi9WUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZSc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TID0gbmV3IFNldChbJzEuMCcsICcxLjAtYmV0YSddKTtcblxuLyoqXG4gKiBBIHBsdWdpbiBvZiBHTFRGTG9hZGVyIHRoYXQgaW1wb3J0cyBhIHtAbGluayBWUk1GaXJzdFBlcnNvbn0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxuICovXG5leHBvcnQgY2xhc3MgVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgcHVibGljIHJlYWRvbmx5IHBhcnNlcjogR0xURlBhcnNlcjtcblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAvLyBXZSBzaG91bGQgdXNlIHRoZSBleHRlbnNpb24gbmFtZSBpbnN0ZWFkIGJ1dCB3ZSBoYXZlIG11bHRpcGxlIHBsdWdpbnMgZm9yIGFuIGV4dGVuc2lvbi4uLlxuICAgIHJldHVybiAnVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW4nO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFmdGVyUm9vdChnbHRmOiBHTFRGKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdnJtSHVtYW5vaWQgPSBnbHRmLnVzZXJEYXRhLnZybUh1bWFub2lkIGFzIFZSTUh1bWFub2lkIHwgdW5kZWZpbmVkO1xuXG4gICAgLy8gZXhwbGljaXRseSBkaXN0aW5ndWlzaCBudWxsIGFuZCB1bmRlZmluZWRcbiAgICAvLyBzaW5jZSB2cm1IdW1hbm9pZCBtaWdodCBiZSBudWxsIGFzIGEgcmVzdWx0XG4gICAgaWYgKHZybUh1bWFub2lkID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh2cm1IdW1hbm9pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdWUk1GaXJzdFBlcnNvbkxvYWRlclBsdWdpbjogdnJtSHVtYW5vaWQgaXMgdW5kZWZpbmVkLiBWUk1IdW1hbm9pZExvYWRlclBsdWdpbiBoYXZlIHRvIGJlIHVzZWQgZmlyc3QnLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBnbHRmLnVzZXJEYXRhLnZybUZpcnN0UGVyc29uID0gYXdhaXQgdGhpcy5faW1wb3J0KGdsdGYsIHZybUh1bWFub2lkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgYSB7QGxpbmsgVlJNRmlyc3RQZXJzb259IGZyb20gYSBWUk0uXG4gICAqXG4gICAqIEBwYXJhbSBnbHRmIEEgcGFyc2VkIHJlc3VsdCBvZiBHTFRGIHRha2VuIGZyb20gR0xURkxvYWRlclxuICAgKiBAcGFyYW0gaHVtYW5vaWQgQSB7QGxpbmsgVlJNSHVtYW5vaWR9IGluc3RhbmNlIHRoYXQgcmVwcmVzZW50cyB0aGUgVlJNXG4gICAqL1xuXG4gIHByaXZhdGUgYXN5bmMgX2ltcG9ydChnbHRmOiBHTFRGLCBodW1hbm9pZDogVlJNSHVtYW5vaWQgfCBudWxsKTogUHJvbWlzZTxWUk1GaXJzdFBlcnNvbiB8IG51bGw+IHtcbiAgICBpZiAoaHVtYW5vaWQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdjFSZXN1bHQgPSBhd2FpdCB0aGlzLl92MUltcG9ydChnbHRmLCBodW1hbm9pZCk7XG4gICAgaWYgKHYxUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjFSZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdjBSZXN1bHQgPSBhd2FpdCB0aGlzLl92MEltcG9ydChnbHRmLCBodW1hbm9pZCk7XG4gICAgaWYgKHYwUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjBSZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MUltcG9ydChnbHRmOiBHTFRGLCBodW1hbm9pZDogVlJNSHVtYW5vaWQpOiBQcm9taXNlPFZSTUZpcnN0UGVyc29uIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSB2cm1cbiAgICBjb25zdCBpc1ZSTVVzZWQgPSBqc29uLmV4dGVuc2lvbnNVc2VkPy5pbmRleE9mKCdWUk1DX3ZybScpICE9PSAtMTtcbiAgICBpZiAoIWlzVlJNVXNlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ZW5zaW9uID0ganNvbi5leHRlbnNpb25zPy5bJ1ZSTUNfdnJtJ10gYXMgVjFWUk1TY2hlbWEuVlJNQ1ZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIWV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlY1ZlcnNpb24gPSBleHRlbnNpb24uc3BlY1ZlcnNpb247XG4gICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TLmhhcyhzcGVjVmVyc2lvbikpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW46IFVua25vd24gVlJNQ192cm0gc3BlY1ZlcnNpb24gXCIke3NwZWNWZXJzaW9ufVwiYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFGaXJzdFBlcnNvbiA9IGV4dGVuc2lvbi5maXJzdFBlcnNvbjtcblxuICAgIGNvbnN0IG1lc2hBbm5vdGF0aW9uczogVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbltdID0gW107XG4gICAgY29uc3Qgbm9kZVByaW1pdGl2ZXNNYXAgPSBhd2FpdCBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZXMoZ2x0Zik7XG4gICAgQXJyYXkuZnJvbShub2RlUHJpbWl0aXZlc01hcC5lbnRyaWVzKCkpLmZvckVhY2goKFtub2RlSW5kZXgsIHByaW1pdGl2ZXNdKSA9PiB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uID0gc2NoZW1hRmlyc3RQZXJzb24/Lm1lc2hBbm5vdGF0aW9ucz8uZmluZCgoYSkgPT4gYS5ub2RlID09PSBub2RlSW5kZXgpO1xuXG4gICAgICBtZXNoQW5ub3RhdGlvbnMucHVzaCh7XG4gICAgICAgIG1lc2hlczogcHJpbWl0aXZlcyxcbiAgICAgICAgdHlwZTogYW5ub3RhdGlvbj8udHlwZSA/PyAnYXV0bycsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgVlJNRmlyc3RQZXJzb24oaHVtYW5vaWQsIG1lc2hBbm5vdGF0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MEltcG9ydChnbHRmOiBHTFRGLCBodW1hbm9pZDogVlJNSHVtYW5vaWQpOiBQcm9taXNlPFZSTUZpcnN0UGVyc29uIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICBjb25zdCB2cm1FeHQgPSBqc29uLmV4dGVuc2lvbnM/LlZSTSBhcyBWMFZSTS5WUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCF2cm1FeHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYUZpcnN0UGVyc29uOiBWMFZSTS5GaXJzdFBlcnNvbiB8IHVuZGVmaW5lZCA9IHZybUV4dC5maXJzdFBlcnNvbjtcbiAgICBpZiAoIXNjaGVtYUZpcnN0UGVyc29uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNoQW5ub3RhdGlvbnM6IFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25bXSA9IFtdO1xuICAgIGNvbnN0IG5vZGVQcmltaXRpdmVzTWFwID0gYXdhaXQgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGVzKGdsdGYpO1xuXG4gICAgQXJyYXkuZnJvbShub2RlUHJpbWl0aXZlc01hcC5lbnRyaWVzKCkpLmZvckVhY2goKFtub2RlSW5kZXgsIHByaW1pdGl2ZXNdKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWFOb2RlID0ganNvbi5ub2RlcyFbbm9kZUluZGV4XTtcblxuICAgICAgY29uc3QgZmxhZyA9IHNjaGVtYUZpcnN0UGVyc29uLm1lc2hBbm5vdGF0aW9uc1xuICAgICAgICA/IHNjaGVtYUZpcnN0UGVyc29uLm1lc2hBbm5vdGF0aW9ucy5maW5kKChhKSA9PiBhLm1lc2ggPT09IHNjaGVtYU5vZGUubWVzaClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgIG1lc2hBbm5vdGF0aW9ucy5wdXNoKHtcbiAgICAgICAgbWVzaGVzOiBwcmltaXRpdmVzLFxuICAgICAgICB0eXBlOiB0aGlzLl9jb252ZXJ0VjBGbGFnVG9WMVR5cGUoZmxhZz8uZmlyc3RQZXJzb25GbGFnKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBWUk1GaXJzdFBlcnNvbihodW1hbm9pZCwgbWVzaEFubm90YXRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnZlcnRWMEZsYWdUb1YxVHlwZShmbGFnOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZSB7XG4gICAgaWYgKGZsYWcgPT09ICdGaXJzdFBlcnNvbk9ubHknKSB7XG4gICAgICByZXR1cm4gJ2ZpcnN0UGVyc29uT25seSc7XG4gICAgfSBlbHNlIGlmIChmbGFnID09PSAnVGhpcmRQZXJzb25Pbmx5Jykge1xuICAgICAgcmV0dXJuICd0aGlyZFBlcnNvbk9ubHknO1xuICAgIH0gZWxzZSBpZiAoZmxhZyA9PT0gJ0JvdGgnKSB7XG4gICAgICByZXR1cm4gJ2JvdGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAnQXV0bycgZXZlbiBpbiBWUk0wXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92cm0tYy9VbmlWUk0vYmxvYi8wN2Q5OGUyZjFhYmM1MjhkMzg3Zjg2MGQyMjI0ZDA4NTViMGQwYjU5L0Fzc2V0cy9WUk0vUnVudGltZS9GaXJzdFBlcnNvbi9WUk1GaXJzdFBlcnNvbi5jcyNMMTE3LUwxMTlcbiAgICAgIHJldHVybiAnYXV0byc7XG4gICAgfVxuICB9XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbmV4cG9ydCBjb25zdCBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZSA9IHtcbiAgQXV0bzogJ2F1dG8nLFxuICBCb3RoOiAnYm90aCcsXG4gIFRoaXJkUGVyc29uT25seTogJ3RoaXJkUGVyc29uT25seScsXG4gIEZpcnN0UGVyc29uT25seTogJ2ZpcnN0UGVyc29uT25seScsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZSA9XG4gICh0eXBlb2YgVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvblR5cGUpW2tleW9mIHR5cGVvZiBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZV07XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNSHVtYW5Cb25lIH0gZnJvbSAnLi4vVlJNSHVtYW5Cb25lJztcbmltcG9ydCB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi4vVlJNSHVtYW5vaWQnO1xuXG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF92M0IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3F1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuZXhwb3J0IGNsYXNzIFZSTUh1bWFub2lkSGVscGVyIGV4dGVuZHMgVEhSRUUuR3JvdXAge1xuICBwdWJsaWMgcmVhZG9ubHkgdnJtSHVtYW5vaWQ6IFZSTUh1bWFub2lkO1xuICBwcml2YXRlIF9ib25lQXhlc01hcDogTWFwPFZSTUh1bWFuQm9uZSwgVEhSRUUuQXhlc0hlbHBlcj47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGh1bWFub2lkOiBWUk1IdW1hbm9pZCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZybUh1bWFub2lkID0gaHVtYW5vaWQ7XG5cbiAgICB0aGlzLl9ib25lQXhlc01hcCA9IG5ldyBNYXAoKTtcblxuICAgIE9iamVjdC52YWx1ZXMoaHVtYW5vaWQuaHVtYW5Cb25lcykuZm9yRWFjaCgoYm9uZSkgPT4ge1xuICAgICAgY29uc3QgaGVscGVyID0gbmV3IFRIUkVFLkF4ZXNIZWxwZXIoMS4wKTtcblxuICAgICAgaGVscGVyLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcblxuICAgICAgKGhlbHBlci5tYXRlcmlhbCBhcyBUSFJFRS5NYXRlcmlhbCkuZGVwdGhUZXN0ID0gZmFsc2U7XG4gICAgICAoaGVscGVyLm1hdGVyaWFsIGFzIFRIUkVFLk1hdGVyaWFsKS5kZXB0aFdyaXRlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuYWRkKGhlbHBlcik7XG5cbiAgICAgIHRoaXMuX2JvbmVBeGVzTWFwLnNldChib25lLCBoZWxwZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLl9ib25lQXhlc01hcC52YWx1ZXMoKSkuZm9yRWFjaCgoYXhlcykgPT4ge1xuICAgICAgYXhlcy5nZW9tZXRyeS5kaXNwb3NlKCk7XG4gICAgICAoYXhlcy5tYXRlcmlhbCBhcyBUSFJFRS5NYXRlcmlhbCkuZGlzcG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU1hdHJpeFdvcmxkKGZvcmNlOiBib29sZWFuKTogdm9pZCB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLl9ib25lQXhlc01hcC5lbnRyaWVzKCkpLmZvckVhY2goKFtib25lLCBheGVzXSkgPT4ge1xuICAgICAgYm9uZS5ub2RlLnVwZGF0ZVdvcmxkTWF0cml4KHRydWUsIGZhbHNlKTtcblxuICAgICAgYm9uZS5ub2RlLm1hdHJpeFdvcmxkLmRlY29tcG9zZShfdjNBLCBfcXVhdEEsIF92M0IpO1xuXG4gICAgICBjb25zdCBzY2FsZSA9IF92M0Euc2V0KDAuMSwgMC4xLCAwLjEpLmRpdmlkZShfdjNCKTtcbiAgICAgIGF4ZXMubWF0cml4LmNvcHkoYm9uZS5ub2RlLm1hdHJpeFdvcmxkKS5zY2FsZShzY2FsZSk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51cGRhdGVNYXRyaXhXb3JsZChmb3JjZSk7XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuaW1wb3J0IHsgVlJNSHVtYW5Cb25lTmFtZSB9IGZyb20gJy4vVlJNSHVtYW5Cb25lTmFtZSc7XG5cbi8qKlxuICogVGhlIGxpc3Qgb2Yge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LiBEZXBlbmRlbmN5IGF3YXJlLlxuICovXG5leHBvcnQgY29uc3QgVlJNSHVtYW5Cb25lTGlzdDogVlJNSHVtYW5Cb25lTmFtZVtdID0gW1xuICAnaGlwcycsXG4gICdzcGluZScsXG4gICdjaGVzdCcsXG4gICd1cHBlckNoZXN0JyxcbiAgJ25lY2snLFxuXG4gICdoZWFkJyxcbiAgJ2xlZnRFeWUnLFxuICAncmlnaHRFeWUnLFxuICAnamF3JyxcblxuICAnbGVmdFVwcGVyTGVnJyxcbiAgJ2xlZnRMb3dlckxlZycsXG4gICdsZWZ0Rm9vdCcsXG4gICdsZWZ0VG9lcycsXG5cbiAgJ3JpZ2h0VXBwZXJMZWcnLFxuICAncmlnaHRMb3dlckxlZycsXG4gICdyaWdodEZvb3QnLFxuICAncmlnaHRUb2VzJyxcblxuICAnbGVmdFNob3VsZGVyJyxcbiAgJ2xlZnRVcHBlckFybScsXG4gICdsZWZ0TG93ZXJBcm0nLFxuICAnbGVmdEhhbmQnLFxuXG4gICdyaWdodFNob3VsZGVyJyxcbiAgJ3JpZ2h0VXBwZXJBcm0nLFxuICAncmlnaHRMb3dlckFybScsXG4gICdyaWdodEhhbmQnLFxuXG4gICdsZWZ0VGh1bWJNZXRhY2FycGFsJyxcbiAgJ2xlZnRUaHVtYlByb3hpbWFsJyxcbiAgJ2xlZnRUaHVtYkRpc3RhbCcsXG4gICdsZWZ0SW5kZXhQcm94aW1hbCcsXG4gICdsZWZ0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICAnbGVmdEluZGV4RGlzdGFsJyxcbiAgJ2xlZnRNaWRkbGVQcm94aW1hbCcsXG4gICdsZWZ0TWlkZGxlSW50ZXJtZWRpYXRlJyxcbiAgJ2xlZnRNaWRkbGVEaXN0YWwnLFxuICAnbGVmdFJpbmdQcm94aW1hbCcsXG4gICdsZWZ0UmluZ0ludGVybWVkaWF0ZScsXG4gICdsZWZ0UmluZ0Rpc3RhbCcsXG4gICdsZWZ0TGl0dGxlUHJveGltYWwnLFxuICAnbGVmdExpdHRsZUludGVybWVkaWF0ZScsXG4gICdsZWZ0TGl0dGxlRGlzdGFsJyxcblxuICAncmlnaHRUaHVtYk1ldGFjYXJwYWwnLFxuICAncmlnaHRUaHVtYlByb3hpbWFsJyxcbiAgJ3JpZ2h0VGh1bWJEaXN0YWwnLFxuICAncmlnaHRJbmRleFByb3hpbWFsJyxcbiAgJ3JpZ2h0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICAncmlnaHRJbmRleERpc3RhbCcsXG4gICdyaWdodE1pZGRsZVByb3hpbWFsJyxcbiAgJ3JpZ2h0TWlkZGxlSW50ZXJtZWRpYXRlJyxcbiAgJ3JpZ2h0TWlkZGxlRGlzdGFsJyxcbiAgJ3JpZ2h0UmluZ1Byb3hpbWFsJyxcbiAgJ3JpZ2h0UmluZ0ludGVybWVkaWF0ZScsXG4gICdyaWdodFJpbmdEaXN0YWwnLFxuICAncmlnaHRMaXR0bGVQcm94aW1hbCcsXG4gICdyaWdodExpdHRsZUludGVybWVkaWF0ZScsXG4gICdyaWdodExpdHRsZURpc3RhbCcsXG5dO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG4vKipcbiAqIFRoZSBuYW1lcyBvZiB7QGxpbmsgVlJNSHVtYW5vaWR9IGJvbmUgbmFtZXMuXG4gKlxuICogUmVmOiBodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvdnJtLXNwZWNpZmljYXRpb24vYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi9WUk1DX3ZybS0xLjAvaHVtYW5vaWQubWRcbiAqL1xuZXhwb3J0IGNvbnN0IFZSTUh1bWFuQm9uZU5hbWUgPSB7XG4gIEhpcHM6ICdoaXBzJyxcbiAgU3BpbmU6ICdzcGluZScsXG4gIENoZXN0OiAnY2hlc3QnLFxuICBVcHBlckNoZXN0OiAndXBwZXJDaGVzdCcsXG4gIE5lY2s6ICduZWNrJyxcblxuICBIZWFkOiAnaGVhZCcsXG4gIExlZnRFeWU6ICdsZWZ0RXllJyxcbiAgUmlnaHRFeWU6ICdyaWdodEV5ZScsXG4gIEphdzogJ2phdycsXG5cbiAgTGVmdFVwcGVyTGVnOiAnbGVmdFVwcGVyTGVnJyxcbiAgTGVmdExvd2VyTGVnOiAnbGVmdExvd2VyTGVnJyxcbiAgTGVmdEZvb3Q6ICdsZWZ0Rm9vdCcsXG4gIExlZnRUb2VzOiAnbGVmdFRvZXMnLFxuXG4gIFJpZ2h0VXBwZXJMZWc6ICdyaWdodFVwcGVyTGVnJyxcbiAgUmlnaHRMb3dlckxlZzogJ3JpZ2h0TG93ZXJMZWcnLFxuICBSaWdodEZvb3Q6ICdyaWdodEZvb3QnLFxuICBSaWdodFRvZXM6ICdyaWdodFRvZXMnLFxuXG4gIExlZnRTaG91bGRlcjogJ2xlZnRTaG91bGRlcicsXG4gIExlZnRVcHBlckFybTogJ2xlZnRVcHBlckFybScsXG4gIExlZnRMb3dlckFybTogJ2xlZnRMb3dlckFybScsXG4gIExlZnRIYW5kOiAnbGVmdEhhbmQnLFxuXG4gIFJpZ2h0U2hvdWxkZXI6ICdyaWdodFNob3VsZGVyJyxcbiAgUmlnaHRVcHBlckFybTogJ3JpZ2h0VXBwZXJBcm0nLFxuICBSaWdodExvd2VyQXJtOiAncmlnaHRMb3dlckFybScsXG4gIFJpZ2h0SGFuZDogJ3JpZ2h0SGFuZCcsXG5cbiAgTGVmdFRodW1iTWV0YWNhcnBhbDogJ2xlZnRUaHVtYk1ldGFjYXJwYWwnLFxuICBMZWZ0VGh1bWJQcm94aW1hbDogJ2xlZnRUaHVtYlByb3hpbWFsJyxcbiAgTGVmdFRodW1iRGlzdGFsOiAnbGVmdFRodW1iRGlzdGFsJyxcbiAgTGVmdEluZGV4UHJveGltYWw6ICdsZWZ0SW5kZXhQcm94aW1hbCcsXG4gIExlZnRJbmRleEludGVybWVkaWF0ZTogJ2xlZnRJbmRleEludGVybWVkaWF0ZScsXG4gIExlZnRJbmRleERpc3RhbDogJ2xlZnRJbmRleERpc3RhbCcsXG4gIExlZnRNaWRkbGVQcm94aW1hbDogJ2xlZnRNaWRkbGVQcm94aW1hbCcsXG4gIExlZnRNaWRkbGVJbnRlcm1lZGlhdGU6ICdsZWZ0TWlkZGxlSW50ZXJtZWRpYXRlJyxcbiAgTGVmdE1pZGRsZURpc3RhbDogJ2xlZnRNaWRkbGVEaXN0YWwnLFxuICBMZWZ0UmluZ1Byb3hpbWFsOiAnbGVmdFJpbmdQcm94aW1hbCcsXG4gIExlZnRSaW5nSW50ZXJtZWRpYXRlOiAnbGVmdFJpbmdJbnRlcm1lZGlhdGUnLFxuICBMZWZ0UmluZ0Rpc3RhbDogJ2xlZnRSaW5nRGlzdGFsJyxcbiAgTGVmdExpdHRsZVByb3hpbWFsOiAnbGVmdExpdHRsZVByb3hpbWFsJyxcbiAgTGVmdExpdHRsZUludGVybWVkaWF0ZTogJ2xlZnRMaXR0bGVJbnRlcm1lZGlhdGUnLFxuICBMZWZ0TGl0dGxlRGlzdGFsOiAnbGVmdExpdHRsZURpc3RhbCcsXG5cbiAgUmlnaHRUaHVtYk1ldGFjYXJwYWw6ICdyaWdodFRodW1iTWV0YWNhcnBhbCcsXG4gIFJpZ2h0VGh1bWJQcm94aW1hbDogJ3JpZ2h0VGh1bWJQcm94aW1hbCcsXG4gIFJpZ2h0VGh1bWJEaXN0YWw6ICdyaWdodFRodW1iRGlzdGFsJyxcbiAgUmlnaHRJbmRleFByb3hpbWFsOiAncmlnaHRJbmRleFByb3hpbWFsJyxcbiAgUmlnaHRJbmRleEludGVybWVkaWF0ZTogJ3JpZ2h0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICBSaWdodEluZGV4RGlzdGFsOiAncmlnaHRJbmRleERpc3RhbCcsXG4gIFJpZ2h0TWlkZGxlUHJveGltYWw6ICdyaWdodE1pZGRsZVByb3hpbWFsJyxcbiAgUmlnaHRNaWRkbGVJbnRlcm1lZGlhdGU6ICdyaWdodE1pZGRsZUludGVybWVkaWF0ZScsXG4gIFJpZ2h0TWlkZGxlRGlzdGFsOiAncmlnaHRNaWRkbGVEaXN0YWwnLFxuICBSaWdodFJpbmdQcm94aW1hbDogJ3JpZ2h0UmluZ1Byb3hpbWFsJyxcbiAgUmlnaHRSaW5nSW50ZXJtZWRpYXRlOiAncmlnaHRSaW5nSW50ZXJtZWRpYXRlJyxcbiAgUmlnaHRSaW5nRGlzdGFsOiAncmlnaHRSaW5nRGlzdGFsJyxcbiAgUmlnaHRMaXR0bGVQcm94aW1hbDogJ3JpZ2h0TGl0dGxlUHJveGltYWwnLFxuICBSaWdodExpdHRsZUludGVybWVkaWF0ZTogJ3JpZ2h0TGl0dGxlSW50ZXJtZWRpYXRlJyxcbiAgUmlnaHRMaXR0bGVEaXN0YWw6ICdyaWdodExpdHRsZURpc3RhbCcsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWUk1IdW1hbkJvbmVOYW1lID0gKHR5cGVvZiBWUk1IdW1hbkJvbmVOYW1lKVtrZXlvZiB0eXBlb2YgVlJNSHVtYW5Cb25lTmFtZV07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbmltcG9ydCB7IFZSTUh1bWFuQm9uZU5hbWUgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZU5hbWUnO1xuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IG1hcHMgZnJvbSB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0gdG8gaXRzIHBhcmVudCB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0uXG4gKlxuICogUmVmOiBodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvdnJtLXNwZWNpZmljYXRpb24vYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi9WUk1DX3ZybS0xLjAvaHVtYW5vaWQubWRcbiAqL1xuZXhwb3J0IGNvbnN0IFZSTUh1bWFuQm9uZVBhcmVudE1hcDogeyBbYm9uZSBpbiBWUk1IdW1hbkJvbmVOYW1lXTogVlJNSHVtYW5Cb25lTmFtZSB8IG51bGwgfSA9IHtcbiAgaGlwczogbnVsbCxcbiAgc3BpbmU6ICdoaXBzJyxcbiAgY2hlc3Q6ICdzcGluZScsXG4gIHVwcGVyQ2hlc3Q6ICdjaGVzdCcsXG4gIG5lY2s6ICd1cHBlckNoZXN0JyxcblxuICBoZWFkOiAnbmVjaycsXG4gIGxlZnRFeWU6ICdoZWFkJyxcbiAgcmlnaHRFeWU6ICdoZWFkJyxcbiAgamF3OiAnaGVhZCcsXG5cbiAgbGVmdFVwcGVyTGVnOiAnaGlwcycsXG4gIGxlZnRMb3dlckxlZzogJ2xlZnRVcHBlckxlZycsXG4gIGxlZnRGb290OiAnbGVmdExvd2VyTGVnJyxcbiAgbGVmdFRvZXM6ICdsZWZ0Rm9vdCcsXG5cbiAgcmlnaHRVcHBlckxlZzogJ2hpcHMnLFxuICByaWdodExvd2VyTGVnOiAncmlnaHRVcHBlckxlZycsXG4gIHJpZ2h0Rm9vdDogJ3JpZ2h0TG93ZXJMZWcnLFxuICByaWdodFRvZXM6ICdyaWdodEZvb3QnLFxuXG4gIGxlZnRTaG91bGRlcjogJ3VwcGVyQ2hlc3QnLFxuICBsZWZ0VXBwZXJBcm06ICdsZWZ0U2hvdWxkZXInLFxuICBsZWZ0TG93ZXJBcm06ICdsZWZ0VXBwZXJBcm0nLFxuICBsZWZ0SGFuZDogJ2xlZnRMb3dlckFybScsXG5cbiAgcmlnaHRTaG91bGRlcjogJ3VwcGVyQ2hlc3QnLFxuICByaWdodFVwcGVyQXJtOiAncmlnaHRTaG91bGRlcicsXG4gIHJpZ2h0TG93ZXJBcm06ICdyaWdodFVwcGVyQXJtJyxcbiAgcmlnaHRIYW5kOiAncmlnaHRMb3dlckFybScsXG5cbiAgbGVmdFRodW1iTWV0YWNhcnBhbDogJ2xlZnRIYW5kJyxcbiAgbGVmdFRodW1iUHJveGltYWw6ICdsZWZ0VGh1bWJNZXRhY2FycGFsJyxcbiAgbGVmdFRodW1iRGlzdGFsOiAnbGVmdFRodW1iUHJveGltYWwnLFxuICBsZWZ0SW5kZXhQcm94aW1hbDogJ2xlZnRIYW5kJyxcbiAgbGVmdEluZGV4SW50ZXJtZWRpYXRlOiAnbGVmdEluZGV4UHJveGltYWwnLFxuICBsZWZ0SW5kZXhEaXN0YWw6ICdsZWZ0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICBsZWZ0TWlkZGxlUHJveGltYWw6ICdsZWZ0SGFuZCcsXG4gIGxlZnRNaWRkbGVJbnRlcm1lZGlhdGU6ICdsZWZ0TWlkZGxlUHJveGltYWwnLFxuICBsZWZ0TWlkZGxlRGlzdGFsOiAnbGVmdE1pZGRsZUludGVybWVkaWF0ZScsXG4gIGxlZnRSaW5nUHJveGltYWw6ICdsZWZ0SGFuZCcsXG4gIGxlZnRSaW5nSW50ZXJtZWRpYXRlOiAnbGVmdFJpbmdQcm94aW1hbCcsXG4gIGxlZnRSaW5nRGlzdGFsOiAnbGVmdFJpbmdJbnRlcm1lZGlhdGUnLFxuICBsZWZ0TGl0dGxlUHJveGltYWw6ICdsZWZ0SGFuZCcsXG4gIGxlZnRMaXR0bGVJbnRlcm1lZGlhdGU6ICdsZWZ0TGl0dGxlUHJveGltYWwnLFxuICBsZWZ0TGl0dGxlRGlzdGFsOiAnbGVmdExpdHRsZUludGVybWVkaWF0ZScsXG5cbiAgcmlnaHRUaHVtYk1ldGFjYXJwYWw6ICdyaWdodEhhbmQnLFxuICByaWdodFRodW1iUHJveGltYWw6ICdyaWdodFRodW1iTWV0YWNhcnBhbCcsXG4gIHJpZ2h0VGh1bWJEaXN0YWw6ICdyaWdodFRodW1iUHJveGltYWwnLFxuICByaWdodEluZGV4UHJveGltYWw6ICdyaWdodEhhbmQnLFxuICByaWdodEluZGV4SW50ZXJtZWRpYXRlOiAncmlnaHRJbmRleFByb3hpbWFsJyxcbiAgcmlnaHRJbmRleERpc3RhbDogJ3JpZ2h0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICByaWdodE1pZGRsZVByb3hpbWFsOiAncmlnaHRIYW5kJyxcbiAgcmlnaHRNaWRkbGVJbnRlcm1lZGlhdGU6ICdyaWdodE1pZGRsZVByb3hpbWFsJyxcbiAgcmlnaHRNaWRkbGVEaXN0YWw6ICdyaWdodE1pZGRsZUludGVybWVkaWF0ZScsXG4gIHJpZ2h0UmluZ1Byb3hpbWFsOiAncmlnaHRIYW5kJyxcbiAgcmlnaHRSaW5nSW50ZXJtZWRpYXRlOiAncmlnaHRSaW5nUHJveGltYWwnLFxuICByaWdodFJpbmdEaXN0YWw6ICdyaWdodFJpbmdJbnRlcm1lZGlhdGUnLFxuICByaWdodExpdHRsZVByb3hpbWFsOiAncmlnaHRIYW5kJyxcbiAgcmlnaHRMaXR0bGVJbnRlcm1lZGlhdGU6ICdyaWdodExpdHRsZVByb3hpbWFsJyxcbiAgcmlnaHRMaXR0bGVEaXN0YWw6ICdyaWdodExpdHRsZUludGVybWVkaWF0ZScsXG59O1xuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IHF1YXRJbnZlcnRDb21wYXQgfSBmcm9tICcuLi91dGlscy9xdWF0SW52ZXJ0Q29tcGF0JztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmUnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmVzIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVzJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lTmFtZSB9IGZyb20gJy4vVlJNSHVtYW5Cb25lTmFtZSc7XG5pbXBvcnQgdHlwZSB7IFZSTVBvc2UgfSBmcm9tICcuL1ZSTVBvc2UnO1xuXG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF9xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbi8qKlxuICogQSBjbGFzcyByZXByZXNlbnRzIHRoZSBSaWcgb2YgYSBWUk0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1SaWcge1xuICAvKipcbiAgICogQSB7QGxpbmsgVlJNSHVtYW5Cb25lc30gdGhhdCBjb250YWlucyBhbGwgdGhlIGh1bWFuIGJvbmVzIG9mIHRoZSBWUk0uXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIGdldCB0aGVzZSBib25lcyB1c2luZyB7QGxpbmsgVlJNSHVtYW5vaWQuZ2V0Qm9uZX0uXG4gICAqL1xuICBwdWJsaWMgaHVtYW5Cb25lczogVlJNSHVtYW5Cb25lcztcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNUG9zZX0gdGhhdCBpcyBpdHMgZGVmYXVsdCBzdGF0ZS5cbiAgICogTm90ZSB0aGF0IGl0J3Mgbm90IGNvbXBhdGlibGUgd2l0aCB7QGxpbmsgc2V0UG9zZX0gYW5kIHtAbGluayBnZXRQb3NlfSwgc2luY2UgaXQgY29udGFpbnMgbm9uLXJlbGF0aXZlIHZhbHVlcyBvZiBlYWNoIGxvY2FsIHRyYW5zZm9ybXMuXG4gICAqL1xuICBwdWJsaWMgcmVzdFBvc2U6IFZSTVBvc2U7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNSHVtYW5vaWR9LlxuICAgKiBAcGFyYW0gaHVtYW5Cb25lcyBBIHtAbGluayBWUk1IdW1hbkJvbmVzfSBjb250YWlucyBhbGwgdGhlIGJvbmVzIG9mIHRoZSBuZXcgaHVtYW5vaWRcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbkJvbmVzOiBWUk1IdW1hbkJvbmVzKSB7XG4gICAgdGhpcy5odW1hbkJvbmVzID0gaHVtYW5Cb25lcztcblxuICAgIHRoaXMucmVzdFBvc2UgPSB0aGlzLmdldEFic29sdXRlUG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBhYnNvbHV0ZSBwb3NlIG9mIHRoaXMgaHVtYW5vaWQgYXMgYSB7QGxpbmsgVlJNUG9zZX0uXG4gICAqIE5vdGUgdGhhdCB0aGUgb3V0cHV0IHJlc3VsdCB3aWxsIGNvbnRhaW4gaW5pdGlhbCBzdGF0ZSBvZiB0aGUgVlJNIGFuZCBub3QgY29tcGF0aWJsZSBiZXR3ZWVuIGRpZmZlcmVudCBtb2RlbHMuXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgZ2V0UG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXRBYnNvbHV0ZVBvc2UoKTogVlJNUG9zZSB7XG4gICAgY29uc3QgcG9zZSA9IHt9IGFzIFZSTVBvc2U7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmh1bWFuQm9uZXMpLmZvckVhY2goKHZybUJvbmVOYW1lU3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB2cm1Cb25lTmFtZSA9IHZybUJvbmVOYW1lU3RyaW5nIGFzIFZSTUh1bWFuQm9uZU5hbWU7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRCb25lTm9kZSh2cm1Cb25lTmFtZSk7XG5cbiAgICAgIC8vIElnbm9yZSB3aGVuIHRoZXJlIGFyZSBubyBib25lIG9uIHRoZSBWUk1IdW1hbm9pZFxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBwb3NpdGlvbiAvIHJvdGF0aW9uIGZyb20gdGhlIG5vZGVcbiAgICAgIF92M0EuY29weShub2RlLnBvc2l0aW9uKTtcbiAgICAgIF9xdWF0QS5jb3B5KG5vZGUucXVhdGVybmlvbik7XG5cbiAgICAgIC8vIENvbnZlcnQgdG8gcmF3IGFycmF5c1xuICAgICAgcG9zZVt2cm1Cb25lTmFtZV0gPSB7XG4gICAgICAgIHBvc2l0aW9uOiBfdjNBLnRvQXJyYXkoKSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXG4gICAgICAgIHJvdGF0aW9uOiBfcXVhdEEudG9BcnJheSgpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NlIG9mIHRoaXMgaHVtYW5vaWQgYXMgYSB7QGxpbmsgVlJNUG9zZX0uXG4gICAqXG4gICAqIEVhY2ggdHJhbnNmb3JtIGlzIGEgbG9jYWwgdHJhbnNmb3JtIHJlbGF0aXZlIGZyb20gcmVzdCBwb3NlIChULXBvc2UpLlxuICAgKi9cbiAgcHVibGljIGdldFBvc2UoKTogVlJNUG9zZSB7XG4gICAgY29uc3QgcG9zZSA9IHt9IGFzIFZSTVBvc2U7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmh1bWFuQm9uZXMpLmZvckVhY2goKGJvbmVOYW1lU3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBib25lTmFtZSA9IGJvbmVOYW1lU3RyaW5nIGFzIFZSTUh1bWFuQm9uZU5hbWU7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRCb25lTm9kZShib25lTmFtZSk7XG5cbiAgICAgIC8vIElnbm9yZSB3aGVuIHRoZXJlIGFyZSBubyBib25lIG9uIHRoZSBWUk1IdW1hbm9pZFxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGFrZSBhIGRpZmYgZnJvbSByZXN0UG9zZVxuICAgICAgX3YzQS5zZXQoMCwgMCwgMCk7XG4gICAgICBfcXVhdEEuaWRlbnRpdHkoKTtcblxuICAgICAgY29uc3QgcmVzdFN0YXRlID0gdGhpcy5yZXN0UG9zZVtib25lTmFtZV07XG4gICAgICBpZiAocmVzdFN0YXRlPy5wb3NpdGlvbikge1xuICAgICAgICBfdjNBLmZyb21BcnJheShyZXN0U3RhdGUucG9zaXRpb24pLm5lZ2F0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3RTdGF0ZT8ucm90YXRpb24pIHtcbiAgICAgICAgcXVhdEludmVydENvbXBhdChfcXVhdEEuZnJvbUFycmF5KHJlc3RTdGF0ZS5yb3RhdGlvbikpO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgdGhlIHBvc2l0aW9uIC8gcm90YXRpb24gZnJvbSB0aGUgbm9kZVxuICAgICAgX3YzQS5hZGQobm9kZS5wb3NpdGlvbik7XG4gICAgICBfcXVhdEEucHJlbXVsdGlwbHkobm9kZS5xdWF0ZXJuaW9uKTtcblxuICAgICAgLy8gQ29udmVydCB0byByYXcgYXJyYXlzXG4gICAgICBwb3NlW2JvbmVOYW1lXSA9IHtcbiAgICAgICAgcG9zaXRpb246IF92M0EudG9BcnJheSgpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcbiAgICAgICAgcm90YXRpb246IF9xdWF0QS50b0FycmF5KCkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBvc2U7XG4gIH1cblxuICAvKipcbiAgICogTGV0IHRoZSBodW1hbm9pZCBkbyBhIHNwZWNpZmllZCBwb3NlLlxuICAgKlxuICAgKiBFYWNoIHRyYW5zZm9ybSBoYXZlIHRvIGJlIGEgbG9jYWwgdHJhbnNmb3JtIHJlbGF0aXZlIGZyb20gcmVzdCBwb3NlIChULXBvc2UpLlxuICAgKiBZb3UgY2FuIHBhc3Mgd2hhdCB5b3UgZ290IGZyb20ge0BsaW5rIGdldFBvc2V9LlxuICAgKlxuICAgKiBAcGFyYW0gcG9zZU9iamVjdCBBIFtbVlJNUG9zZV1dIHRoYXQgcmVwcmVzZW50cyBhIHNpbmdsZSBwb3NlXG4gICAqL1xuICBwdWJsaWMgc2V0UG9zZShwb3NlT2JqZWN0OiBWUk1Qb3NlKTogdm9pZCB7XG4gICAgT2JqZWN0LmVudHJpZXMocG9zZU9iamVjdCkuZm9yRWFjaCgoW2JvbmVOYW1lU3RyaW5nLCBzdGF0ZV0pID0+IHtcbiAgICAgIGNvbnN0IGJvbmVOYW1lID0gYm9uZU5hbWVTdHJpbmcgYXMgVlJNSHVtYW5Cb25lTmFtZTtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldEJvbmVOb2RlKGJvbmVOYW1lKTtcblxuICAgICAgLy8gSWdub3JlIHdoZW4gdGhlcmUgYXJlIG5vIGJvbmUgdGhhdCBpcyBkZWZpbmVkIGluIHRoZSBwb3NlIG9uIHRoZSBWUk1IdW1hbm9pZFxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdFN0YXRlID0gdGhpcy5yZXN0UG9zZVtib25lTmFtZV07XG4gICAgICBpZiAoIXJlc3RTdGF0ZSkge1xuICAgICAgICAvLyBJdCdzIHZlcnkgdW5saWtlbHkuIFBvc3NpYmx5IGEgYnVnXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwbHkgdGhlIHN0YXRlIHRvIHRoZSBhY3R1YWwgYm9uZVxuICAgICAgaWYgKHN0YXRlPy5wb3NpdGlvbikge1xuICAgICAgICBub2RlLnBvc2l0aW9uLmZyb21BcnJheShzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKHJlc3RTdGF0ZS5wb3NpdGlvbikge1xuICAgICAgICAgIG5vZGUucG9zaXRpb24uYWRkKF92M0EuZnJvbUFycmF5KHJlc3RTdGF0ZS5wb3NpdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZT8ucm90YXRpb24pIHtcbiAgICAgICAgbm9kZS5xdWF0ZXJuaW9uLmZyb21BcnJheShzdGF0ZS5yb3RhdGlvbik7XG5cbiAgICAgICAgaWYgKHJlc3RTdGF0ZS5yb3RhdGlvbikge1xuICAgICAgICAgIG5vZGUucXVhdGVybmlvbi5tdWx0aXBseShfcXVhdEEuZnJvbUFycmF5KHJlc3RTdGF0ZS5yb3RhdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGh1bWFub2lkIHRvIGl0cyByZXN0IHBvc2UuXG4gICAqL1xuICBwdWJsaWMgcmVzZXRQb3NlKCk6IHZvaWQge1xuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucmVzdFBvc2UpLmZvckVhY2goKFtib25lTmFtZSwgcmVzdF0pID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldEJvbmVOb2RlKGJvbmVOYW1lIGFzIFZSTUh1bWFuQm9uZU5hbWUpO1xuXG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdD8ucG9zaXRpb24pIHtcbiAgICAgICAgbm9kZS5wb3NpdGlvbi5mcm9tQXJyYXkocmVzdC5wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN0Py5yb3RhdGlvbikge1xuICAgICAgICBub2RlLnF1YXRlcm5pb24uZnJvbUFycmF5KHJlc3Qucm90YXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGJvbmUgYm91bmQgdG8gYSBzcGVjaWZpZWQge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LCBhcyBhIHtAbGluayBWUk1IdW1hbkJvbmV9LlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XG4gICAqL1xuICBwdWJsaWMgZ2V0Qm9uZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVlJNSHVtYW5Cb25lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5odW1hbkJvbmVzW25hbWVdID8/IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBib25lIGJvdW5kIHRvIGEgc3BlY2lmaWVkIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfSwgYXMgYSBgVEhSRUUuT2JqZWN0M0RgLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XG4gICAqL1xuICBwdWJsaWMgZ2V0Qm9uZU5vZGUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFRIUkVFLk9iamVjdDNEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaHVtYW5Cb25lc1tuYW1lXT8ubm9kZSA/PyBudWxsO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEEgY29tcGF0IGZ1bmN0aW9uIGZvciBgUXVhdGVybmlvbi5pbnZlcnQoKWAgLyBgUXVhdGVybmlvbi5pbnZlcnNlKClgLlxuICogYFF1YXRlcm5pb24uaW52ZXJ0KClgIGlzIGludHJvZHVjZWQgaW4gcjEyMyBhbmQgYFF1YXRlcm5pb24uaW52ZXJzZSgpYCBlbWl0cyBhIHdhcm5pbmcuXG4gKiBXZSBhcmUgZ29pbmcgdG8gdXNlIHRoaXMgY29tcGF0IGZvciBhIHdoaWxlLlxuICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBxdWF0ZXJuaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWF0SW52ZXJ0Q29tcGF0PFQgZXh0ZW5kcyBUSFJFRS5RdWF0ZXJuaW9uPih0YXJnZXQ6IFQpOiBUIHtcbiAgaWYgKCh0YXJnZXQgYXMgYW55KS5pbnZlcnQpIHtcbiAgICB0YXJnZXQuaW52ZXJ0KCk7XG4gIH0gZWxzZSB7XG4gICAgKHRhcmdldCBhcyBhbnkpLmludmVyc2UoKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNSHVtYW5Cb25lTmFtZSwgVlJNSHVtYW5Cb25lcyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgVlJNSHVtYW5Cb25lTGlzdCB9IGZyb20gJy4vVlJNSHVtYW5Cb25lTGlzdCc7XG5pbXBvcnQgeyBWUk1IdW1hbkJvbmVQYXJlbnRNYXAgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZVBhcmVudE1hcCc7XG5pbXBvcnQgeyBWUk1SaWcgfSBmcm9tICcuL1ZSTVJpZyc7XG5cbmNvbnN0IF92M0EgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3F1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9ib25lV29ybGRQb3MgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4vKipcbiAqIEEgY2xhc3MgcmVwcmVzZW50cyB0aGUgbm9ybWFsaXplZCBSaWcgb2YgYSBWUk0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1IdW1hbm9pZFJpZyBleHRlbmRzIFZSTVJpZyB7XG4gIHByb3RlY3RlZCBzdGF0aWMgX3NldHVwVHJhbnNmb3Jtcyhtb2RlbFJpZzogVlJNUmlnKToge1xuICAgIHJpZ0JvbmVzOiBWUk1IdW1hbkJvbmVzO1xuICAgIHJvb3Q6IFRIUkVFLk9iamVjdDNEO1xuICAgIHBhcmVudFdvcmxkUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfTtcbiAgICBib25lUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfTtcbiAgfSB7XG4gICAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3QubmFtZSA9ICdWUk1IdW1hbm9pZFJpZyc7XG5cbiAgICAvLyBzdG9yZSBib25lV29ybGRQb3NpdGlvbnMsIGJvbmVXb3JsZFJvdGF0aW9ucywgYW5kIHBhcmVudFdvcmxkUm90YXRpb25zXG4gICAgY29uc3QgYm9uZVdvcmxkUG9zaXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlZlY3RvcjMgfSA9IHt9O1xuICAgIGNvbnN0IGJvbmVXb3JsZFJvdGF0aW9uczogeyBbYm9uZU5hbWUgaW4gVlJNSHVtYW5Cb25lTmFtZV0/OiBUSFJFRS5RdWF0ZXJuaW9uIH0gPSB7fTtcbiAgICBjb25zdCBib25lUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfSA9IHt9O1xuICAgIGNvbnN0IHBhcmVudFdvcmxkUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfSA9IHt9O1xuXG4gICAgVlJNSHVtYW5Cb25lTGlzdC5mb3JFYWNoKChib25lTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYm9uZU5vZGUgPSBtb2RlbFJpZy5nZXRCb25lTm9kZShib25lTmFtZSk7XG5cbiAgICAgIGlmIChib25lTm9kZSkge1xuICAgICAgICBjb25zdCBib25lV29ybGRQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIGNvbnN0IGJvbmVXb3JsZFJvdGF0aW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuICAgICAgICBib25lTm9kZS51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7XG4gICAgICAgIGJvbmVOb2RlLm1hdHJpeFdvcmxkLmRlY29tcG9zZShib25lV29ybGRQb3NpdGlvbiwgYm9uZVdvcmxkUm90YXRpb24sIF92M0EpO1xuXG4gICAgICAgIGJvbmVXb3JsZFBvc2l0aW9uc1tib25lTmFtZV0gPSBib25lV29ybGRQb3NpdGlvbjtcbiAgICAgICAgYm9uZVdvcmxkUm90YXRpb25zW2JvbmVOYW1lXSA9IGJvbmVXb3JsZFJvdGF0aW9uO1xuICAgICAgICBib25lUm90YXRpb25zW2JvbmVOYW1lXSA9IGJvbmVOb2RlLnF1YXRlcm5pb24uY2xvbmUoKTtcblxuICAgICAgICBjb25zdCBwYXJlbnRXb3JsZFJvdGF0aW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICAgICAgYm9uZU5vZGUucGFyZW50Py5tYXRyaXhXb3JsZC5kZWNvbXBvc2UoX3YzQSwgcGFyZW50V29ybGRSb3RhdGlvbiwgX3YzQSk7XG4gICAgICAgIHBhcmVudFdvcmxkUm90YXRpb25zW2JvbmVOYW1lXSA9IHBhcmVudFdvcmxkUm90YXRpb247XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBidWlsZCByaWcgaGllcmFyY2h5ICsgc3RvcmUgcGFyZW50V29ybGRSb3RhdGlvbnNcbiAgICBjb25zdCByaWdCb25lczogUGFydGlhbDxWUk1IdW1hbkJvbmVzPiA9IHt9O1xuICAgIFZSTUh1bWFuQm9uZUxpc3QuZm9yRWFjaCgoYm9uZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGJvbmVOb2RlID0gbW9kZWxSaWcuZ2V0Qm9uZU5vZGUoYm9uZU5hbWUpO1xuXG4gICAgICBpZiAoYm9uZU5vZGUpIHtcbiAgICAgICAgY29uc3QgYm9uZVdvcmxkUG9zaXRpb24gPSBib25lV29ybGRQb3NpdGlvbnNbYm9uZU5hbWVdIGFzIFRIUkVFLlZlY3RvcjM7XG5cbiAgICAgICAgLy8gc2VlIHRoZSBuZWFyZXN0IHBhcmVudCBwb3NpdGlvblxuICAgICAgICBsZXQgY3VycmVudEJvbmVOYW1lOiBWUk1IdW1hbkJvbmVOYW1lIHwgbnVsbCA9IGJvbmVOYW1lO1xuICAgICAgICBsZXQgcGFyZW50Qm9uZVdvcmxkUG9zaXRpb246IFRIUkVFLlZlY3RvcjMgfCB1bmRlZmluZWQ7XG4gICAgICAgIHdoaWxlIChwYXJlbnRCb25lV29ybGRQb3NpdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgY3VycmVudEJvbmVOYW1lID0gVlJNSHVtYW5Cb25lUGFyZW50TWFwW2N1cnJlbnRCb25lTmFtZV07XG4gICAgICAgICAgaWYgKGN1cnJlbnRCb25lTmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50Qm9uZVdvcmxkUG9zaXRpb24gPSBib25lV29ybGRQb3NpdGlvbnNbY3VycmVudEJvbmVOYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCB0byBoaWVyYXJjaHlcbiAgICAgICAgY29uc3QgcmlnQm9uZU5vZGUgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgICAgcmlnQm9uZU5vZGUubmFtZSA9ICdOb3JtYWxpemVkXycgKyBib25lTm9kZS5uYW1lO1xuXG4gICAgICAgIGNvbnN0IHBhcmVudFJpZ0JvbmVOb2RlID0gKGN1cnJlbnRCb25lTmFtZSA/IHJpZ0JvbmVzW2N1cnJlbnRCb25lTmFtZV0/Lm5vZGUgOiByb290KSBhcyBUSFJFRS5PYmplY3QzRDtcblxuICAgICAgICBwYXJlbnRSaWdCb25lTm9kZS5hZGQocmlnQm9uZU5vZGUpO1xuICAgICAgICByaWdCb25lTm9kZS5wb3NpdGlvbi5jb3B5KGJvbmVXb3JsZFBvc2l0aW9uKTtcbiAgICAgICAgaWYgKHBhcmVudEJvbmVXb3JsZFBvc2l0aW9uKSB7XG4gICAgICAgICAgcmlnQm9uZU5vZGUucG9zaXRpb24uc3ViKHBhcmVudEJvbmVXb3JsZFBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJpZ0JvbmVzW2JvbmVOYW1lXSA9IHsgbm9kZTogcmlnQm9uZU5vZGUgfTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICByaWdCb25lczogcmlnQm9uZXMgYXMgVlJNSHVtYW5Cb25lcyxcbiAgICAgIHJvb3QsXG4gICAgICBwYXJlbnRXb3JsZFJvdGF0aW9ucyxcbiAgICAgIGJvbmVSb3RhdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkb25seSBvcmlnaW5hbDogVlJNUmlnO1xuICBwdWJsaWMgcmVhZG9ubHkgcm9vdDogVEhSRUUuT2JqZWN0M0Q7XG4gIHByb3RlY3RlZCByZWFkb25seSBfcGFyZW50V29ybGRSb3RhdGlvbnM6IHsgW2JvbmVOYW1lIGluIFZSTUh1bWFuQm9uZU5hbWVdPzogVEhSRUUuUXVhdGVybmlvbiB9O1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2JvbmVSb3RhdGlvbnM6IHsgW2JvbmVOYW1lIGluIFZSTUh1bWFuQm9uZU5hbWVdPzogVEhSRUUuUXVhdGVybmlvbiB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbm9pZDogVlJNUmlnKSB7XG4gICAgY29uc3QgeyByaWdCb25lcywgcm9vdCwgcGFyZW50V29ybGRSb3RhdGlvbnMsIGJvbmVSb3RhdGlvbnMgfSA9IFZSTUh1bWFub2lkUmlnLl9zZXR1cFRyYW5zZm9ybXMoaHVtYW5vaWQpO1xuXG4gICAgc3VwZXIocmlnQm9uZXMpO1xuXG4gICAgdGhpcy5vcmlnaW5hbCA9IGh1bWFub2lkO1xuICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgdGhpcy5fcGFyZW50V29ybGRSb3RhdGlvbnMgPSBwYXJlbnRXb3JsZFJvdGF0aW9ucztcbiAgICB0aGlzLl9ib25lUm90YXRpb25zID0gYm9uZVJvdGF0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhpcyBodW1hbm9pZCByaWcuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIFZSTUh1bWFuQm9uZUxpc3QuZm9yRWFjaCgoYm9uZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGJvbmVOb2RlID0gdGhpcy5vcmlnaW5hbC5nZXRCb25lTm9kZShib25lTmFtZSk7XG5cbiAgICAgIGlmIChib25lTm9kZSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJpZ0JvbmVOb2RlID0gdGhpcy5nZXRCb25lTm9kZShib25lTmFtZSkhO1xuICAgICAgICBjb25zdCBwYXJlbnRXb3JsZFJvdGF0aW9uID0gdGhpcy5fcGFyZW50V29ybGRSb3RhdGlvbnNbYm9uZU5hbWVdITtcbiAgICAgICAgY29uc3QgaW52UGFyZW50V29ybGRSb3RhdGlvbiA9IF9xdWF0QS5jb3B5KHBhcmVudFdvcmxkUm90YXRpb24pLmludmVydCgpO1xuICAgICAgICBjb25zdCBib25lUm90YXRpb24gPSB0aGlzLl9ib25lUm90YXRpb25zW2JvbmVOYW1lXSE7XG5cbiAgICAgICAgYm9uZU5vZGUucXVhdGVybmlvblxuICAgICAgICAgIC5jb3B5KHJpZ0JvbmVOb2RlLnF1YXRlcm5pb24pXG4gICAgICAgICAgLm11bHRpcGx5KHBhcmVudFdvcmxkUm90YXRpb24pXG4gICAgICAgICAgLnByZW11bHRpcGx5KGludlBhcmVudFdvcmxkUm90YXRpb24pXG4gICAgICAgICAgLm11bHRpcGx5KGJvbmVSb3RhdGlvbik7XG5cbiAgICAgICAgLy8gTW92ZSB0aGUgbWFzcyBjZW50ZXIgb2YgdGhlIFZSTVxuICAgICAgICBpZiAoYm9uZU5hbWUgPT09ICdoaXBzJykge1xuICAgICAgICAgIGNvbnN0IGJvbmVXb3JsZFBvc2l0aW9uID0gcmlnQm9uZU5vZGUuZ2V0V29ybGRQb3NpdGlvbihfYm9uZVdvcmxkUG9zKTtcbiAgICAgICAgICBib25lTm9kZS5wYXJlbnQhLnVwZGF0ZVdvcmxkTWF0cml4KHRydWUsIGZhbHNlKTtcbiAgICAgICAgICBjb25zdCBwYXJlbnRXb3JsZE1hdHJpeCA9IGJvbmVOb2RlLnBhcmVudCEubWF0cml4V29ybGQ7XG4gICAgICAgICAgY29uc3QgbG9jYWxQb3NpdGlvbiA9IGJvbmVXb3JsZFBvc2l0aW9uLmFwcGx5TWF0cml4NChwYXJlbnRXb3JsZE1hdHJpeC5pbnZlcnQoKSk7XG4gICAgICAgICAgYm9uZU5vZGUucG9zaXRpb24uY29weShsb2NhbFBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmUgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFuQm9uZXMgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZXMnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmVOYW1lIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVOYW1lJztcbmltcG9ydCB0eXBlIHsgVlJNUG9zZSB9IGZyb20gJy4vVlJNUG9zZSc7XG5pbXBvcnQgeyBWUk1SaWcgfSBmcm9tICcuL1ZSTVJpZyc7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZFJpZyB9IGZyb20gJy4vVlJNSHVtYW5vaWRSaWcnO1xuXG4vKipcbiAqIEEgY2xhc3MgcmVwcmVzZW50cyBhIGh1bWFub2lkIG9mIGEgVlJNLlxuICovXG5leHBvcnQgY2xhc3MgVlJNSHVtYW5vaWQge1xuICAvKipcbiAgICogV2hldGhlciBpdCBjb3BpZXMgcG9zZSBmcm9tIG5vcm1hbGl6ZWRIdW1hbkJvbmVzIHRvIHJhd0h1bWFuQm9uZXMgb24ge0BsaW5rIHVwZGF0ZX0uXG4gICAqIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBwdWJsaWMgYXV0b1VwZGF0ZUh1bWFuQm9uZXM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgcmF3IHJpZyBvZiB0aGUgVlJNLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmF3SHVtYW5Cb25lczogVlJNUmlnOyAvLyBUT0RPOiBSZW5hbWVcblxuICAvKipcbiAgICogQSBub3JtYWxpemVkIHJpZyBvZiB0aGUgVlJNLlxuICAgKi9cbiAgcHJpdmF0ZSBfbm9ybWFsaXplZEh1bWFuQm9uZXM6IFZSTUh1bWFub2lkUmlnOyAvLyBUT0RPOiBSZW5hbWVcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGVpdGhlciB7QGxpbmsgcmF3UmVzdFBvc2V9IG9yIHtAbGluayBub3JtYWxpemVkUmVzdFBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHJlc3RQb3NlKCk6IFZSTVBvc2Uge1xuICAgIGNvbnNvbGUud2FybignVlJNSHVtYW5vaWQ6IHJlc3RQb3NlIGlzIGRlcHJlY2F0ZWQuIFVzZSBlaXRoZXIgcmF3UmVzdFBvc2Ugb3Igbm9ybWFsaXplZFJlc3RQb3NlIGluc3RlYWQuJyk7XG5cbiAgICByZXR1cm4gdGhpcy5yYXdSZXN0UG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Qb3NlfSBvZiBpdHMgcmF3IGh1bWFuIGJvbmVzIHRoYXQgaXMgaXRzIGRlZmF1bHQgc3RhdGUuXG4gICAqIE5vdGUgdGhhdCBpdCdzIG5vdCBjb21wYXRpYmxlIHdpdGgge0BsaW5rIHNldFJhd1Bvc2V9IGFuZCB7QGxpbmsgZ2V0UmF3UG9zZX0sIHNpbmNlIGl0IGNvbnRhaW5zIG5vbi1yZWxhdGl2ZSB2YWx1ZXMgb2YgZWFjaCBsb2NhbCB0cmFuc2Zvcm1zLlxuICAgKi9cbiAgcHVibGljIGdldCByYXdSZXN0UG9zZSgpOiBWUk1Qb3NlIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5yZXN0UG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Qb3NlfSBvZiBpdHMgbm9ybWFsaXplZCBodW1hbiBib25lcyB0aGF0IGlzIGl0cyBkZWZhdWx0IHN0YXRlLlxuICAgKiBOb3RlIHRoYXQgaXQncyBub3QgY29tcGF0aWJsZSB3aXRoIHtAbGluayBzZXROb3JtYWxpemVkUG9zZX0gYW5kIHtAbGluayBnZXROb3JtYWxpemVkUG9zZX0sIHNpbmNlIGl0IGNvbnRhaW5zIG5vbi1yZWxhdGl2ZSB2YWx1ZXMgb2YgZWFjaCBsb2NhbCB0cmFuc2Zvcm1zLlxuICAgKi9cbiAgcHVibGljIGdldCBub3JtYWxpemVkUmVzdFBvc2UoKTogVlJNUG9zZSB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLnJlc3RQb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWFwIGZyb20ge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9IHRvIHJhdyB7QGxpbmsgVlJNSHVtYW5Cb25lfXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGh1bWFuQm9uZXMoKTogVlJNSHVtYW5Cb25lcyB7XG4gICAgLy8gYW4gYWxpYXMgb2YgYHJhd0h1bWFuQm9uZXNgXG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMuaHVtYW5Cb25lcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1hcCBmcm9tIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfSB0byByYXcge0BsaW5rIFZSTUh1bWFuQm9uZX1zLlxuICAgKi9cbiAgcHVibGljIGdldCByYXdIdW1hbkJvbmVzKCk6IFZSTUh1bWFuQm9uZXMge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLmh1bWFuQm9uZXM7XG4gIH1cblxuICAvKipcbiAgICogQSBtYXAgZnJvbSB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0gdG8gbm9ybWFsaXplZCB7QGxpbmsgVlJNSHVtYW5Cb25lfXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5vcm1hbGl6ZWRIdW1hbkJvbmVzKCk6IFZSTUh1bWFuQm9uZXMge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5odW1hbkJvbmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSByb290IG9mIG5vcm1hbGl6ZWQge0BsaW5rIFZSTUh1bWFuQm9uZX1zLlxuICAgKi9cbiAgcHVibGljIGdldCBub3JtYWxpemVkSHVtYW5Cb25lc1Jvb3QoKTogVEhSRUUuT2JqZWN0M0Qge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5yb290O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNSHVtYW5vaWR9LlxuICAgKiBAcGFyYW0gaHVtYW5Cb25lcyBBIHtAbGluayBWUk1IdW1hbkJvbmVzfSBjb250YWlucyBhbGwgdGhlIGJvbmVzIG9mIHRoZSBuZXcgaHVtYW5vaWRcbiAgICogQHBhcmFtIGF1dG9VcGRhdGVIdW1hbkJvbmVzIFdoZXRoZXIgaXQgY29waWVzIHBvc2UgZnJvbSBub3JtYWxpemVkSHVtYW5Cb25lcyB0byByYXdIdW1hbkJvbmVzIG9uIHtAbGluayB1cGRhdGV9LiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbkJvbmVzOiBWUk1IdW1hbkJvbmVzLCBvcHRpb25zPzogeyBhdXRvVXBkYXRlSHVtYW5Cb25lcz86IGJvb2xlYW4gfSkge1xuICAgIHRoaXMuYXV0b1VwZGF0ZUh1bWFuQm9uZXMgPSBvcHRpb25zPy5hdXRvVXBkYXRlSHVtYW5Cb25lcyA/PyB0cnVlO1xuICAgIHRoaXMuX3Jhd0h1bWFuQm9uZXMgPSBuZXcgVlJNUmlnKGh1bWFuQm9uZXMpO1xuICAgIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzID0gbmV3IFZSTUh1bWFub2lkUmlnKHRoaXMuX3Jhd0h1bWFuQm9uZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgdGhlIGdpdmVuIHtAbGluayBWUk1IdW1hbm9pZH0gaW50byB0aGlzIG9uZS5cbiAgICogQHBhcmFtIHNvdXJjZSBUaGUge0BsaW5rIFZSTUh1bWFub2lkfSB5b3Ugd2FudCB0byBjb3B5XG4gICAqIEByZXR1cm5zIHRoaXNcbiAgICovXG4gIHB1YmxpYyBjb3B5KHNvdXJjZTogVlJNSHVtYW5vaWQpOiB0aGlzIHtcbiAgICB0aGlzLmF1dG9VcGRhdGVIdW1hbkJvbmVzID0gc291cmNlLmF1dG9VcGRhdGVIdW1hbkJvbmVzO1xuICAgIHRoaXMuX3Jhd0h1bWFuQm9uZXMgPSBuZXcgVlJNUmlnKHNvdXJjZS5odW1hbkJvbmVzKTtcbiAgICB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcyA9IG5ldyBWUk1IdW1hbm9pZFJpZyh0aGlzLl9yYXdIdW1hbkJvbmVzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGlzIHtAbGluayBWUk1IdW1hbm9pZH0uXG4gICAqIEByZXR1cm5zIENvcGllZCB7QGxpbmsgVlJNSHVtYW5vaWR9XG4gICAqL1xuICBwdWJsaWMgY2xvbmUoKTogVlJNSHVtYW5vaWQge1xuICAgIHJldHVybiBuZXcgVlJNSHVtYW5vaWQodGhpcy5odW1hbkJvbmVzLCB7IGF1dG9VcGRhdGVIdW1hbkJvbmVzOiB0aGlzLmF1dG9VcGRhdGVIdW1hbkJvbmVzIH0pLmNvcHkodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGVpdGhlciB7QGxpbmsgZ2V0UmF3QWJzb2x1dGVQb3NlfSBvciB7QGxpbmsgZ2V0Tm9ybWFsaXplZEFic29sdXRlUG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXRBYnNvbHV0ZVBvc2UoKTogVlJNUG9zZSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1ZSTUh1bWFub2lkOiBnZXRBYnNvbHV0ZVBvc2UoKSBpcyBkZXByZWNhdGVkLiBVc2UgZWl0aGVyIGdldFJhd0Fic29sdXRlUG9zZSgpIG9yIGdldE5vcm1hbGl6ZWRBYnNvbHV0ZVBvc2UoKSBpbnN0ZWFkLicsXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmdldFJhd0Fic29sdXRlUG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBhYnNvbHV0ZSBwb3NlIG9mIHRoaXMgcmF3IGh1bWFuIGJvbmVzIGFzIGEge0BsaW5rIFZSTVBvc2V9LlxuICAgKiBOb3RlIHRoYXQgdGhlIG91dHB1dCByZXN1bHQgd2lsbCBjb250YWluIGluaXRpYWwgc3RhdGUgb2YgdGhlIFZSTSBhbmQgbm90IGNvbXBhdGlibGUgYmV0d2VlbiBkaWZmZXJlbnQgbW9kZWxzLlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byB1c2Uge0BsaW5rIGdldFJhd1Bvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0UmF3QWJzb2x1dGVQb3NlKCk6IFZSTVBvc2Uge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLmdldEFic29sdXRlUG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBhYnNvbHV0ZSBwb3NlIG9mIHRoaXMgbm9ybWFsaXplZCBodW1hbiBib25lcyBhcyBhIHtAbGluayBWUk1Qb3NlfS5cbiAgICogTm90ZSB0aGF0IHRoZSBvdXRwdXQgcmVzdWx0IHdpbGwgY29udGFpbiBpbml0aWFsIHN0YXRlIG9mIHRoZSBWUk0gYW5kIG5vdCBjb21wYXRpYmxlIGJldHdlZW4gZGlmZmVyZW50IG1vZGVscy5cbiAgICogWW91IG1pZ2h0IHdhbnQgdG8gdXNlIHtAbGluayBnZXROb3JtYWxpemVkUG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXROb3JtYWxpemVkQWJzb2x1dGVQb3NlKCk6IFZSTVBvc2Uge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5nZXRBYnNvbHV0ZVBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayBnZXRSYXdQb3NlfSBvciB7QGxpbmsgZ2V0Tm9ybWFsaXplZFBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0UG9zZSgpOiBWUk1Qb3NlIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUh1bWFub2lkOiBnZXRQb3NlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIGVpdGhlciBnZXRSYXdQb3NlKCkgb3IgZ2V0Tm9ybWFsaXplZFBvc2UoKSBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3UG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NlIG9mIHJhdyBodW1hbiBib25lcyBhcyBhIHtAbGluayBWUk1Qb3NlfS5cbiAgICpcbiAgICogRWFjaCB0cmFuc2Zvcm0gaXMgYSBsb2NhbCB0cmFuc2Zvcm0gcmVsYXRpdmUgZnJvbSByZXN0IHBvc2UgKFQtcG9zZSkuXG4gICAqL1xuICBwdWJsaWMgZ2V0UmF3UG9zZSgpOiBWUk1Qb3NlIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5nZXRQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2Ugb2Ygbm9ybWFsaXplZCBodW1hbiBib25lcyBhcyBhIHtAbGluayBWUk1Qb3NlfS5cbiAgICpcbiAgICogRWFjaCB0cmFuc2Zvcm0gaXMgYSBsb2NhbCB0cmFuc2Zvcm0gcmVsYXRpdmUgZnJvbSByZXN0IHBvc2UgKFQtcG9zZSkuXG4gICAqL1xuICBwdWJsaWMgZ2V0Tm9ybWFsaXplZFBvc2UoKTogVlJNUG9zZSB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLmdldFBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayBzZXRSYXdQb3NlfSBvciB7QGxpbmsgc2V0Tm9ybWFsaXplZFBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgc2V0UG9zZShwb3NlT2JqZWN0OiBWUk1Qb3NlKTogdm9pZCB7XG4gICAgY29uc29sZS53YXJuKCdWUk1IdW1hbm9pZDogc2V0UG9zZSgpIGlzIGRlcHJlY2F0ZWQuIFVzZSBlaXRoZXIgc2V0UmF3UG9zZSgpIG9yIHNldE5vcm1hbGl6ZWRQb3NlKCkgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiB0aGlzLnNldFJhd1Bvc2UocG9zZU9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogTGV0IHRoZSByYXcgaHVtYW4gYm9uZXMgZG8gYSBzcGVjaWZpZWQgcG9zZS5cbiAgICpcbiAgICogRWFjaCB0cmFuc2Zvcm0gaGF2ZSB0byBiZSBhIGxvY2FsIHRyYW5zZm9ybSByZWxhdGl2ZSBmcm9tIHJlc3QgcG9zZSAoVC1wb3NlKS5cbiAgICogWW91IGNhbiBwYXNzIHdoYXQgeW91IGdvdCBmcm9tIHtAbGluayBnZXRSYXdQb3NlfS5cbiAgICpcbiAgICogSWYgeW91IGFyZSB1c2luZyB7QGxpbmsgYXV0b1VwZGF0ZUh1bWFuQm9uZXN9LCB5b3UgbWlnaHQgd2FudCB0byB1c2Uge0BsaW5rIHNldE5vcm1hbGl6ZWRQb3NlfSBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gcG9zZU9iamVjdCBBIHtAbGluayBWUk1Qb3NlfSB0aGF0IHJlcHJlc2VudHMgYSBzaW5nbGUgcG9zZVxuICAgKi9cbiAgcHVibGljIHNldFJhd1Bvc2UocG9zZU9iamVjdDogVlJNUG9zZSk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLnNldFBvc2UocG9zZU9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogTGV0IHRoZSBub3JtYWxpemVkIGh1bWFuIGJvbmVzIGRvIGEgc3BlY2lmaWVkIHBvc2UuXG4gICAqXG4gICAqIEVhY2ggdHJhbnNmb3JtIGhhdmUgdG8gYmUgYSBsb2NhbCB0cmFuc2Zvcm0gcmVsYXRpdmUgZnJvbSByZXN0IHBvc2UgKFQtcG9zZSkuXG4gICAqIFlvdSBjYW4gcGFzcyB3aGF0IHlvdSBnb3QgZnJvbSB7QGxpbmsgZ2V0Tm9ybWFsaXplZFBvc2V9LlxuICAgKlxuICAgKiBAcGFyYW0gcG9zZU9iamVjdCBBIHtAbGluayBWUk1Qb3NlfSB0aGF0IHJlcHJlc2VudHMgYSBzaW5nbGUgcG9zZVxuICAgKi9cbiAgcHVibGljIHNldE5vcm1hbGl6ZWRQb3NlKHBvc2VPYmplY3Q6IFZSTVBvc2UpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMuc2V0UG9zZShwb3NlT2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayByZXNldFJhd1Bvc2V9IG9yIHtAbGluayByZXNldE5vcm1hbGl6ZWRQb3NlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIHJlc2V0UG9zZSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUh1bWFub2lkOiByZXNldFBvc2UoKSBpcyBkZXByZWNhdGVkLiBVc2UgZWl0aGVyIHJlc2V0UmF3UG9zZSgpIG9yIHJlc2V0Tm9ybWFsaXplZFBvc2UoKSBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVzZXRSYXdQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHJhdyBodW1hbm9pZCB0byBpdHMgcmVzdCBwb3NlLlxuICAgKlxuICAgKiBJZiB5b3UgYXJlIHVzaW5nIHtAbGluayBhdXRvVXBkYXRlSHVtYW5Cb25lc30sIHlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgcmVzZXROb3JtYWxpemVkUG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyByZXNldFJhd1Bvc2UoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMucmVzZXRQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIG5vcm1hbGl6ZWQgaHVtYW5vaWQgdG8gaXRzIHJlc3QgcG9zZS5cbiAgICovXG4gIHB1YmxpYyByZXNldE5vcm1hbGl6ZWRQb3NlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5yZXNldFBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayBnZXRSYXdCb25lfSBvciB7QGxpbmsgZ2V0Tm9ybWFsaXplZEJvbmV9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0Qm9uZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVlJNSHVtYW5Cb25lIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUh1bWFub2lkOiBnZXRCb25lKCkgaXMgZGVwcmVjYXRlZC4gVXNlIGVpdGhlciBnZXRSYXdCb25lKCkgb3IgZ2V0Tm9ybWFsaXplZEJvbmUoKSBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3Qm9uZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSByYXcge0BsaW5rIFZSTUh1bWFuQm9uZX0gYm91bmQgdG8gYSBzcGVjaWZpZWQge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XG4gICAqL1xuICBwdWJsaWMgZ2V0UmF3Qm9uZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVlJNSHVtYW5Cb25lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5nZXRCb25lKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5vcm1hbGl6ZWQge0BsaW5rIFZSTUh1bWFuQm9uZX0gYm91bmQgdG8gYSBzcGVjaWZpZWQge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XG4gICAqL1xuICBwdWJsaWMgZ2V0Tm9ybWFsaXplZEJvbmUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFZSTUh1bWFuQm9uZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLmdldEJvbmUobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGVpdGhlciB7QGxpbmsgZ2V0UmF3Qm9uZU5vZGV9IG9yIHtAbGluayBnZXROb3JtYWxpemVkQm9uZU5vZGV9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0Qm9uZU5vZGUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFRIUkVFLk9iamVjdDNEIHwgbnVsbCB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1ZSTUh1bWFub2lkOiBnZXRCb25lTm9kZSgpIGlzIGRlcHJlY2F0ZWQuIFVzZSBlaXRoZXIgZ2V0UmF3Qm9uZU5vZGUoKSBvciBnZXROb3JtYWxpemVkQm9uZU5vZGUoKSBpbnN0ZWFkLicsXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmdldFJhd0JvbmVOb2RlKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJhdyBib25lIGFzIGEgYFRIUkVFLk9iamVjdDNEYCBib3VuZCB0byBhIHNwZWNpZmllZCB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0uXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJvbmUgeW91IHdhbnRcbiAgICovXG4gIHB1YmxpYyBnZXRSYXdCb25lTm9kZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVEhSRUUuT2JqZWN0M0QgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5nZXRCb25lTm9kZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBub3JtYWxpemVkIGJvbmUgYXMgYSBgVEhSRUUuT2JqZWN0M0RgIGJvdW5kIHRvIGEgc3BlY2lmaWVkIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgYm9uZSB5b3Ugd2FudFxuICAgKi9cbiAgcHVibGljIGdldE5vcm1hbGl6ZWRCb25lTm9kZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVEhSRUUuT2JqZWN0M0QgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMuZ2V0Qm9uZU5vZGUobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBodW1hbm9pZCBjb21wb25lbnQuXG4gICAqXG4gICAqIElmIHtAbGluayBhdXRvVXBkYXRlSHVtYW5Cb25lc30gaXMgYHRydWVgLCBpdCB0cmFuc2ZlcnMgdGhlIHBvc2Ugb2Ygbm9ybWFsaXplZCBodW1hbiBib25lcyB0byByYXcgaHVtYW4gYm9uZXMuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9VcGRhdGVIdW1hbkJvbmVzKSB7XG4gICAgICB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuZXhwb3J0IGNvbnN0IFZSTVJlcXVpcmVkSHVtYW5Cb25lTmFtZSA9IHtcbiAgSGlwczogJ2hpcHMnLFxuICBTcGluZTogJ3NwaW5lJyxcbiAgSGVhZDogJ2hlYWQnLFxuICBMZWZ0VXBwZXJMZWc6ICdsZWZ0VXBwZXJMZWcnLFxuICBMZWZ0TG93ZXJMZWc6ICdsZWZ0TG93ZXJMZWcnLFxuICBMZWZ0Rm9vdDogJ2xlZnRGb290JyxcbiAgUmlnaHRVcHBlckxlZzogJ3JpZ2h0VXBwZXJMZWcnLFxuICBSaWdodExvd2VyTGVnOiAncmlnaHRMb3dlckxlZycsXG4gIFJpZ2h0Rm9vdDogJ3JpZ2h0Rm9vdCcsXG4gIExlZnRVcHBlckFybTogJ2xlZnRVcHBlckFybScsXG4gIExlZnRMb3dlckFybTogJ2xlZnRMb3dlckFybScsXG4gIExlZnRIYW5kOiAnbGVmdEhhbmQnLFxuICBSaWdodFVwcGVyQXJtOiAncmlnaHRVcHBlckFybScsXG4gIFJpZ2h0TG93ZXJBcm06ICdyaWdodExvd2VyQXJtJyxcbiAgUmlnaHRIYW5kOiAncmlnaHRIYW5kJyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFZSTVJlcXVpcmVkSHVtYW5Cb25lTmFtZSA9ICh0eXBlb2YgVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lKVtrZXlvZiB0eXBlb2YgVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lXTtcbiIsICJpbXBvcnQgdHlwZSAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlICogYXMgVjBWUk0gZnJvbSAnQHBpeGl2L3R5cGVzLXZybS0wLjAnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMVZSTVNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy12cm0tMS4wJztcbmltcG9ydCB0eXBlIHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuL1ZSTUh1bWFub2lkJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lcyB9IGZyb20gJy4vVlJNSHVtYW5Cb25lcyc7XG5pbXBvcnQgeyBWUk1SZXF1aXJlZEh1bWFuQm9uZU5hbWUgfSBmcm9tICcuL1ZSTVJlcXVpcmVkSHVtYW5Cb25lTmFtZSc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZEhlbHBlciB9IGZyb20gJy4vaGVscGVycy9WUk1IdW1hbm9pZEhlbHBlcic7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZExvYWRlclBsdWdpbk9wdGlvbnMgfSBmcm9tICcuL1ZSTUh1bWFub2lkTG9hZGVyUGx1Z2luT3B0aW9ucyc7XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TID0gbmV3IFNldChbJzEuMCcsICcxLjAtYmV0YSddKTtcblxuLyoqXG4gKiBBIG1hcCBmcm9tIG9sZCB0aHVtYiBib25lIG5hbWVzIHRvIG5ldyB0aHVtYiBib25lIG5hbWVzXG4gKi9cbmNvbnN0IHRodW1iQm9uZU5hbWVNYXA6IHsgW2tleTogc3RyaW5nXTogVjFWUk1TY2hlbWEuSHVtYW5vaWRIdW1hbkJvbmVOYW1lIHwgdW5kZWZpbmVkIH0gPSB7XG4gIGxlZnRUaHVtYlByb3hpbWFsOiAnbGVmdFRodW1iTWV0YWNhcnBhbCcsXG4gIGxlZnRUaHVtYkludGVybWVkaWF0ZTogJ2xlZnRUaHVtYlByb3hpbWFsJyxcbiAgcmlnaHRUaHVtYlByb3hpbWFsOiAncmlnaHRUaHVtYk1ldGFjYXJwYWwnLFxuICByaWdodFRodW1iSW50ZXJtZWRpYXRlOiAncmlnaHRUaHVtYlByb3hpbWFsJyxcbn07XG5cbi8qKlxuICogQSBwbHVnaW4gb2YgR0xURkxvYWRlciB0aGF0IGltcG9ydHMgYSB7QGxpbmsgVlJNSHVtYW5vaWR9IGZyb20gYSBWUk0gZXh0ZW5zaW9uIG9mIGEgR0xURi5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luIGltcGxlbWVudHMgR0xURkxvYWRlclBsdWdpbiB7XG4gIC8qKlxuICAgKiBTcGVjaWZ5IGFuIE9iamVjdDNEIHRvIGFkZCB7QGxpbmsgVlJNSHVtYW5vaWRIZWxwZXJ9LlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCBoZWxwZXIgd2lsbCBub3QgYmUgY3JlYXRlZC5cbiAgICogSWYgYHJlbmRlck9yZGVyYCBpcyBzZXQgdG8gdGhlIHJvb3QsIHRoZSBoZWxwZXIgd2lsbCBjb3B5IHRoZSBzYW1lIGByZW5kZXJPcmRlcmAgLlxuICAgKi9cbiAgcHVibGljIGhlbHBlclJvb3Q/OiBUSFJFRS5PYmplY3QzRDtcblxuICBwdWJsaWMgYXV0b1VwZGF0ZUh1bWFuQm9uZXM/OiBib29sZWFuO1xuXG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICByZXR1cm4gJ1ZSTUh1bWFub2lkTG9hZGVyUGx1Z2luJztcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIsIG9wdGlvbnM/OiBWUk1IdW1hbm9pZExvYWRlclBsdWdpbk9wdGlvbnMpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICAgIHRoaXMuaGVscGVyUm9vdCA9IG9wdGlvbnM/LmhlbHBlclJvb3Q7XG4gICAgdGhpcy5hdXRvVXBkYXRlSHVtYW5Cb25lcyA9IG9wdGlvbnM/LmF1dG9VcGRhdGVIdW1hbkJvbmVzO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFmdGVyUm9vdChnbHRmOiBHTFRGKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZ2x0Zi51c2VyRGF0YS52cm1IdW1hbm9pZCA9IGF3YWl0IHRoaXMuX2ltcG9ydChnbHRmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgYSB7QGxpbmsgVlJNSHVtYW5vaWR9IGZyb20gYSBWUk0uXG4gICAqXG4gICAqIEBwYXJhbSBnbHRmIEEgcGFyc2VkIHJlc3VsdCBvZiBHTFRGIHRha2VuIGZyb20gR0xURkxvYWRlclxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfaW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTUh1bWFub2lkIHwgbnVsbD4ge1xuICAgIGNvbnN0IHYxUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjFJbXBvcnQoZ2x0Zik7XG4gICAgaWYgKHYxUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjFSZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdjBSZXN1bHQgPSBhd2FpdCB0aGlzLl92MEltcG9ydChnbHRmKTtcbiAgICBpZiAodjBSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MFJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YxSW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTUh1bWFub2lkIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSB2cm1cbiAgICBjb25zdCBpc1ZSTVVzZWQgPSBqc29uLmV4dGVuc2lvbnNVc2VkPy5pbmRleE9mKCdWUk1DX3ZybScpICE9PSAtMTtcbiAgICBpZiAoIWlzVlJNVXNlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ZW5zaW9uID0ganNvbi5leHRlbnNpb25zPy5bJ1ZSTUNfdnJtJ10gYXMgVjFWUk1TY2hlbWEuVlJNQ1ZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIWV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlY1ZlcnNpb24gPSBleHRlbnNpb24uc3BlY1ZlcnNpb247XG4gICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TLmhhcyhzcGVjVmVyc2lvbikpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW46IFVua25vd24gVlJNQ192cm0gc3BlY1ZlcnNpb24gXCIke3NwZWNWZXJzaW9ufVwiYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFIdW1hbm9pZCA9IGV4dGVuc2lvbi5odW1hbm9pZDtcbiAgICBpZiAoIXNjaGVtYUh1bWFub2lkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb21wYXQ6IDEuMC1iZXRhIHRodW1iIGJvbmUgbmFtZXNcbiAgICAgKlxuICAgICAqIGB0cnVlYCBpZiBgbGVmdFRodW1iSW50ZXJtZWRpYXRlYCBvciBgcmlnaHRUaHVtYkludGVybWVkaWF0ZWAgZXhpc3RzXG4gICAgICovXG4gICAgY29uc3QgZXhpc3RzUHJldmlvdXNUaHVtYk5hbWUgPVxuICAgICAgKHNjaGVtYUh1bWFub2lkLmh1bWFuQm9uZXMgYXMgYW55KS5sZWZ0VGh1bWJJbnRlcm1lZGlhdGUgIT0gbnVsbCB8fFxuICAgICAgKHNjaGVtYUh1bWFub2lkLmh1bWFuQm9uZXMgYXMgYW55KS5yaWdodFRodW1iSW50ZXJtZWRpYXRlICE9IG51bGw7XG5cbiAgICBjb25zdCBodW1hbkJvbmVzOiBQYXJ0aWFsPFZSTUh1bWFuQm9uZXM+ID0ge307XG4gICAgaWYgKHNjaGVtYUh1bWFub2lkLmh1bWFuQm9uZXMgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYUh1bWFub2lkLmh1bWFuQm9uZXMpLm1hcChhc3luYyAoW2JvbmVOYW1lU3RyaW5nLCBzY2hlbWFIdW1hbkJvbmVdKSA9PiB7XG4gICAgICAgICAgbGV0IGJvbmVOYW1lID0gYm9uZU5hbWVTdHJpbmcgYXMgVjFWUk1TY2hlbWEuSHVtYW5vaWRIdW1hbkJvbmVOYW1lO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2NoZW1hSHVtYW5Cb25lLm5vZGU7XG5cbiAgICAgICAgICAvLyBjb21wYXQ6IDEuMC1iZXRhIHByZXZpb3VzIHRodW1iIGJvbmUgbmFtZXNcbiAgICAgICAgICBpZiAoZXhpc3RzUHJldmlvdXNUaHVtYk5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRodW1iQm9uZU5hbWUgPSB0aHVtYkJvbmVOYW1lTWFwW2JvbmVOYW1lXTtcbiAgICAgICAgICAgIGlmICh0aHVtYkJvbmVOYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgYm9uZU5hbWUgPSB0aHVtYkJvbmVOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBhd2FpdCB0aGlzLnBhcnNlci5nZXREZXBlbmRlbmN5KCdub2RlJywgaW5kZXgpO1xuXG4gICAgICAgICAgLy8gaWYgdGhlIHNwZWNpZmllZCBub2RlIGRvZXMgbm90IGV4aXN0LCBlbWl0IGEgd2FybmluZ1xuICAgICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQSBnbFRGIG5vZGUgYm91bmQgdG8gdGhlIGh1bWFub2lkIGJvbmUgJHtib25lTmFtZX0gKGluZGV4ID0gJHtpbmRleH0pIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc2V0IHRvIHRoZSBgaHVtYW5Cb25lc2BcbiAgICAgICAgICBodW1hbkJvbmVzW2JvbmVOYW1lXSA9IHsgbm9kZSB9O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgaHVtYW5vaWQgPSBuZXcgVlJNSHVtYW5vaWQodGhpcy5fZW5zdXJlUmVxdWlyZWRCb25lc0V4aXN0KGh1bWFuQm9uZXMpLCB7XG4gICAgICBhdXRvVXBkYXRlSHVtYW5Cb25lczogdGhpcy5hdXRvVXBkYXRlSHVtYW5Cb25lcyxcbiAgICB9KTtcbiAgICBnbHRmLnNjZW5lLmFkZChodW1hbm9pZC5ub3JtYWxpemVkSHVtYW5Cb25lc1Jvb3QpO1xuXG4gICAgaWYgKHRoaXMuaGVscGVyUm9vdCkge1xuICAgICAgY29uc3QgaGVscGVyID0gbmV3IFZSTUh1bWFub2lkSGVscGVyKGh1bWFub2lkKTtcbiAgICAgIHRoaXMuaGVscGVyUm9vdC5hZGQoaGVscGVyKTtcbiAgICAgIGhlbHBlci5yZW5kZXJPcmRlciA9IHRoaXMuaGVscGVyUm9vdC5yZW5kZXJPcmRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gaHVtYW5vaWQ7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MEltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1IdW1hbm9pZCB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgY29uc3QgdnJtRXh0ID0ganNvbi5leHRlbnNpb25zPy5WUk0gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdnJtRXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFIdW1hbm9pZDogVjBWUk0uSHVtYW5vaWQgfCB1bmRlZmluZWQgPSB2cm1FeHQuaHVtYW5vaWQ7XG4gICAgaWYgKCFzY2hlbWFIdW1hbm9pZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgaHVtYW5Cb25lczogUGFydGlhbDxWUk1IdW1hbkJvbmVzPiA9IHt9O1xuICAgIGlmIChzY2hlbWFIdW1hbm9pZC5odW1hbkJvbmVzICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBzY2hlbWFIdW1hbm9pZC5odW1hbkJvbmVzLm1hcChhc3luYyAoYm9uZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJvbmVOYW1lID0gYm9uZS5ib25lO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gYm9uZS5ub2RlO1xuXG4gICAgICAgICAgaWYgKGJvbmVOYW1lID09IG51bGwgfHwgaW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBhd2FpdCB0aGlzLnBhcnNlci5nZXREZXBlbmRlbmN5KCdub2RlJywgaW5kZXgpO1xuXG4gICAgICAgICAgLy8gaWYgdGhlIHNwZWNpZmllZCBub2RlIGRvZXMgbm90IGV4aXN0LCBlbWl0IGEgd2FybmluZ1xuICAgICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQSBnbFRGIG5vZGUgYm91bmQgdG8gdGhlIGh1bWFub2lkIGJvbmUgJHtib25lTmFtZX0gKGluZGV4ID0gJHtpbmRleH0pIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbWFwIHRvIG5ldyBib25lIG5hbWVcbiAgICAgICAgICBjb25zdCB0aHVtYkJvbmVOYW1lID0gdGh1bWJCb25lTmFtZU1hcFtib25lTmFtZV07XG4gICAgICAgICAgY29uc3QgbmV3Qm9uZU5hbWUgPSAodGh1bWJCb25lTmFtZSA/PyBib25lTmFtZSkgYXMgVjFWUk1TY2hlbWEuSHVtYW5vaWRIdW1hbkJvbmVOYW1lO1xuXG4gICAgICAgICAgLy8gdjAgVlJNcyBtaWdodCBoYXZlIGEgbXVsdGlwbGUgbm9kZXMgYXR0YWNoZWQgdG8gYSBzaW5nbGUgYm9uZS4uLlxuICAgICAgICAgIC8vIHNvIGlmIHRoZXJlIGFscmVhZHkgaXMgYW4gZW50cnkgaW4gdGhlIGBodW1hbkJvbmVzYCwgc2hvdyBhIHdhcm5pbmcgYW5kIGlnbm9yZSBpdFxuICAgICAgICAgIGlmIChodW1hbkJvbmVzW25ld0JvbmVOYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNdWx0aXBsZSBib25lIGVudHJpZXMgZm9yICR7bmV3Qm9uZU5hbWV9IGRldGVjdGVkIChpbmRleCA9ICR7aW5kZXh9KSwgaWdub3JpbmcgZHVwbGljYXRlZCBlbnRyaWVzLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHNldCB0byB0aGUgYGh1bWFuQm9uZXNgXG4gICAgICAgICAgaHVtYW5Cb25lc1tuZXdCb25lTmFtZV0gPSB7IG5vZGUgfTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGh1bWFub2lkID0gbmV3IFZSTUh1bWFub2lkKHRoaXMuX2Vuc3VyZVJlcXVpcmVkQm9uZXNFeGlzdChodW1hbkJvbmVzKSwge1xuICAgICAgYXV0b1VwZGF0ZUh1bWFuQm9uZXM6IHRoaXMuYXV0b1VwZGF0ZUh1bWFuQm9uZXMsXG4gICAgfSk7XG4gICAgZ2x0Zi5zY2VuZS5hZGQoaHVtYW5vaWQubm9ybWFsaXplZEh1bWFuQm9uZXNSb290KTtcblxuICAgIGlmICh0aGlzLmhlbHBlclJvb3QpIHtcbiAgICAgIGNvbnN0IGhlbHBlciA9IG5ldyBWUk1IdW1hbm9pZEhlbHBlcihodW1hbm9pZCk7XG4gICAgICB0aGlzLmhlbHBlclJvb3QuYWRkKGhlbHBlcik7XG4gICAgICBoZWxwZXIucmVuZGVyT3JkZXIgPSB0aGlzLmhlbHBlclJvb3QucmVuZGVyT3JkZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh1bWFub2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZSByZXF1aXJlZCBib25lcyBleGlzdCBpbiBnaXZlbiBodW1hbiBib25lcy5cbiAgICogQHBhcmFtIGh1bWFuQm9uZXMgSHVtYW4gYm9uZXNcbiAgICogQHJldHVybnMgSHVtYW4gYm9uZXMsIG5vIGxvbmdlciBwYXJ0aWFsIVxuICAgKi9cbiAgcHJpdmF0ZSBfZW5zdXJlUmVxdWlyZWRCb25lc0V4aXN0KGh1bWFuQm9uZXM6IFBhcnRpYWw8VlJNSHVtYW5Cb25lcz4pOiBWUk1IdW1hbkJvbmVzIHtcbiAgICAvLyBlbnN1cmUgcmVxdWlyZWQgYm9uZXMgZXhpc3RcbiAgICBjb25zdCBtaXNzaW5nUmVxdWlyZWRCb25lcyA9IE9iamVjdC52YWx1ZXMoVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lKS5maWx0ZXIoXG4gICAgICAocmVxdWlyZWRCb25lTmFtZSkgPT4gaHVtYW5Cb25lc1tyZXF1aXJlZEJvbmVOYW1lXSA9PSBudWxsLFxuICAgICk7XG5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBhcmUgbWlzc2luZyBib25lc1xuICAgIGlmIChtaXNzaW5nUmVxdWlyZWRCb25lcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBWUk1IdW1hbm9pZExvYWRlclBsdWdpbjogVGhlc2UgaHVtYW5vaWQgYm9uZXMgYXJlIHJlcXVpcmVkIGJ1dCBub3QgZXhpc3Q6ICR7bWlzc2luZ1JlcXVpcmVkQm9uZXMuam9pbignLCAnKX1gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHVtYW5Cb25lcyBhcyBWUk1IdW1hbkJvbmVzO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNTG9va0F0IH0gZnJvbSAnLi4vVlJNTG9va0F0JztcbmltcG9ydCB7IEZhbkJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi91dGlscy9GYW5CdWZmZXJHZW9tZXRyeSc7XG5pbXBvcnQgeyBMaW5lQW5kU3BoZXJlQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL3V0aWxzL0xpbmVBbmRTcGhlcmVCdWZmZXJHZW9tZXRyeSc7XG5cbmNvbnN0IF9xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfcXVhdEIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfdjNCID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuY29uc3QgU1FSVF8yX09WRVJfMiA9IE1hdGguc3FydCgyLjApIC8gMi4wO1xuY29uc3QgUVVBVF9YWV9DVzkwID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oMCwgMCwgLVNRUlRfMl9PVkVSXzIsIFNRUlRfMl9PVkVSXzIpO1xuY29uc3QgVkVDM19QT1NJVElWRV9ZID0gbmV3IFRIUkVFLlZlY3RvcjMoMC4wLCAxLjAsIDAuMCk7XG5cbmV4cG9ydCBjbGFzcyBWUk1Mb29rQXRIZWxwZXIgZXh0ZW5kcyBUSFJFRS5Hcm91cCB7XG4gIHB1YmxpYyByZWFkb25seSB2cm1Mb29rQXQ6IFZSTUxvb2tBdDtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWVzaFlhdzogVEhSRUUuTWVzaDxGYW5CdWZmZXJHZW9tZXRyeSwgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWw+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9tZXNoUGl0Y2g6IFRIUkVFLk1lc2g8RmFuQnVmZmVyR2VvbWV0cnksIFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfbGluZVRhcmdldDogVEhSRUUuTGluZVNlZ21lbnRzPExpbmVBbmRTcGhlcmVCdWZmZXJHZW9tZXRyeSwgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWw+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihsb29rQXQ6IFZSTUxvb2tBdCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG5cbiAgICB0aGlzLnZybUxvb2tBdCA9IGxvb2tBdDtcblxuICAgIHtcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IEZhbkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICBnZW9tZXRyeS5yYWRpdXMgPSAwLjU7XG5cbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgICAgY29sb3I6IDB4MDBmZjAwLFxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuICAgICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9tZXNoUGl0Y2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgdGhpcy5hZGQodGhpcy5fbWVzaFBpdGNoKTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBGYW5CdWZmZXJHZW9tZXRyeSgpO1xuICAgICAgZ2VvbWV0cnkucmFkaXVzID0gMC41O1xuXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgIGNvbG9yOiAweGZmMDAwMCxcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcbiAgICAgICAgZGVwdGhUZXN0OiBmYWxzZSxcbiAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fbWVzaFlhdyA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICB0aGlzLmFkZCh0aGlzLl9tZXNoWWF3KTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBMaW5lQW5kU3BoZXJlQnVmZmVyR2VvbWV0cnkoKTtcbiAgICAgIGdlb21ldHJ5LnJhZGl1cyA9IDAuMTtcblxuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2xpbmVUYXJnZXQgPSBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICB0aGlzLl9saW5lVGFyZ2V0LmZydXN0dW1DdWxsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWRkKHRoaXMuX2xpbmVUYXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX21lc2hZYXcuZ2VvbWV0cnkuZGlzcG9zZSgpO1xuICAgIHRoaXMuX21lc2hZYXcubWF0ZXJpYWwuZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5fbWVzaFBpdGNoLmdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9tZXNoUGl0Y2gubWF0ZXJpYWwuZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5fbGluZVRhcmdldC5nZW9tZXRyeS5kaXNwb3NlKCk7XG4gICAgdGhpcy5fbGluZVRhcmdldC5tYXRlcmlhbC5kaXNwb3NlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlTWF0cml4V29ybGQoZm9yY2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyB1cGRhdGUgZ2VvbWV0cmllc1xuICAgIGNvbnN0IHlhdyA9IFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy52cm1Mb29rQXQueWF3O1xuICAgIHRoaXMuX21lc2hZYXcuZ2VvbWV0cnkudGhldGEgPSB5YXc7XG4gICAgdGhpcy5fbWVzaFlhdy5nZW9tZXRyeS51cGRhdGUoKTtcblxuICAgIGNvbnN0IHBpdGNoID0gVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnZybUxvb2tBdC5waXRjaDtcbiAgICB0aGlzLl9tZXNoUGl0Y2guZ2VvbWV0cnkudGhldGEgPSBwaXRjaDtcbiAgICB0aGlzLl9tZXNoUGl0Y2guZ2VvbWV0cnkudXBkYXRlKCk7XG5cbiAgICAvLyBnZXQgd29ybGQgcG9zaXRpb24gYW5kIHF1YXRlcm5pb25cbiAgICB0aGlzLnZybUxvb2tBdC5nZXRMb29rQXRXb3JsZFBvc2l0aW9uKF92M0EpO1xuICAgIHRoaXMudnJtTG9va0F0LmdldExvb2tBdFdvcmxkUXVhdGVybmlvbihfcXVhdEEpO1xuXG4gICAgLy8gY2FsY3VsYXRlIHJvdGF0aW9uIHVzaW5nIGZhY2VGcm9udFxuICAgIF9xdWF0QS5tdWx0aXBseSh0aGlzLnZybUxvb2tBdC5nZXRGYWNlRnJvbnRRdWF0ZXJuaW9uKF9xdWF0QikpO1xuXG4gICAgLy8gc2V0IHRyYW5zZm9ybSB0byBtZXNoZXNcbiAgICB0aGlzLl9tZXNoWWF3LnBvc2l0aW9uLmNvcHkoX3YzQSk7XG4gICAgdGhpcy5fbWVzaFlhdy5xdWF0ZXJuaW9uLmNvcHkoX3F1YXRBKTtcblxuICAgIHRoaXMuX21lc2hQaXRjaC5wb3NpdGlvbi5jb3B5KF92M0EpO1xuICAgIHRoaXMuX21lc2hQaXRjaC5xdWF0ZXJuaW9uLmNvcHkoX3F1YXRBKTtcbiAgICB0aGlzLl9tZXNoUGl0Y2gucXVhdGVybmlvbi5tdWx0aXBseShfcXVhdEIuc2V0RnJvbUF4aXNBbmdsZShWRUMzX1BPU0lUSVZFX1ksIHlhdykpO1xuICAgIHRoaXMuX21lc2hQaXRjaC5xdWF0ZXJuaW9uLm11bHRpcGx5KFFVQVRfWFlfQ1c5MCk7XG5cbiAgICAvLyB1cGRhdGUgdGFyZ2V0IGxpbmUgYW5kIHNwaGVyZVxuICAgIGNvbnN0IHsgdGFyZ2V0LCBhdXRvVXBkYXRlIH0gPSB0aGlzLnZybUxvb2tBdDtcbiAgICBpZiAodGFyZ2V0ICE9IG51bGwgJiYgYXV0b1VwZGF0ZSkge1xuICAgICAgdGFyZ2V0LmdldFdvcmxkUG9zaXRpb24oX3YzQikuc3ViKF92M0EpO1xuICAgICAgdGhpcy5fbGluZVRhcmdldC5nZW9tZXRyeS50YWlsLmNvcHkoX3YzQik7XG4gICAgICB0aGlzLl9saW5lVGFyZ2V0Lmdlb21ldHJ5LnVwZGF0ZSgpO1xuICAgICAgdGhpcy5fbGluZVRhcmdldC5wb3NpdGlvbi5jb3B5KF92M0EpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHRyYW5zZm9ybSB0byBtZXNoZXNcbiAgICBzdXBlci51cGRhdGVNYXRyaXhXb3JsZChmb3JjZSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBjbGFzcyBGYW5CdWZmZXJHZW9tZXRyeSBleHRlbmRzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcHVibGljIHRoZXRhOiBudW1iZXI7XG4gIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY3VycmVudFRoZXRhID0gMDtcbiAgcHJpdmF0ZSBfY3VycmVudFJhZGl1cyA9IDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2F0dHJQb3M6IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYXR0ckluZGV4OiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRoZXRhID0gMC4wO1xuICAgIHRoaXMucmFkaXVzID0gMC4wO1xuICAgIHRoaXMuX2N1cnJlbnRUaGV0YSA9IDAuMDtcbiAgICB0aGlzLl9jdXJyZW50UmFkaXVzID0gMC4wO1xuXG4gICAgdGhpcy5fYXR0clBvcyA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSg2NSAqIDMpLCAzKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB0aGlzLl9hdHRyUG9zKTtcblxuICAgIHRoaXMuX2F0dHJJbmRleCA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IFVpbnQxNkFycmF5KDMgKiA2MyksIDEpO1xuICAgIHRoaXMuc2V0SW5kZXgodGhpcy5fYXR0ckluZGV4KTtcblxuICAgIHRoaXMuX2J1aWxkSW5kZXgoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBsZXQgc2hvdWxkVXBkYXRlR2VvbWV0cnkgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9jdXJyZW50VGhldGEgIT09IHRoaXMudGhldGEpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUaGV0YSA9IHRoaXMudGhldGE7XG4gICAgICBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRSYWRpdXMgIT09IHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UmFkaXVzID0gdGhpcy5yYWRpdXM7XG4gICAgICBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFVwZGF0ZUdlb21ldHJ5KSB7XG4gICAgICB0aGlzLl9idWlsZFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRQb3NpdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9hdHRyUG9zLnNldFhZWigwLCAwLjAsIDAuMCwgMC4wKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuICAgICAgY29uc3QgdCA9IChpIC8gNjMuMCkgKiB0aGlzLl9jdXJyZW50VGhldGE7XG5cbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKGkgKyAxLCB0aGlzLl9jdXJyZW50UmFkaXVzICogTWF0aC5zaW4odCksIDAuMCwgdGhpcy5fY3VycmVudFJhZGl1cyAqIE1hdGguY29zKHQpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdHRyUG9zLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkSW5kZXgoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MzsgaSsrKSB7XG4gICAgICB0aGlzLl9hdHRySW5kZXguc2V0WFlaKGkgKiAzLCAwLCBpICsgMSwgaSArIDIpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dHJJbmRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBjbGFzcyBMaW5lQW5kU3BoZXJlQnVmZmVyR2VvbWV0cnkgZXh0ZW5kcyBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcbiAgcHVibGljIHRhaWw6IFRIUkVFLlZlY3RvcjM7XG4gIHByaXZhdGUgX2N1cnJlbnRSYWRpdXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY3VycmVudFRhaWw6IFRIUkVFLlZlY3RvcjM7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2F0dHJQb3M6IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYXR0ckluZGV4OiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJhZGl1cyA9IDAuMDtcbiAgICB0aGlzLl9jdXJyZW50UmFkaXVzID0gMC4wO1xuXG4gICAgdGhpcy50YWlsID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICB0aGlzLl9jdXJyZW50VGFpbCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICB0aGlzLl9hdHRyUG9zID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KDI5NCksIDMpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHRoaXMuX2F0dHJQb3MpO1xuXG4gICAgdGhpcy5fYXR0ckluZGV4ID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDE2QXJyYXkoMTk0KSwgMSk7XG4gICAgdGhpcy5zZXRJbmRleCh0aGlzLl9hdHRySW5kZXgpO1xuXG4gICAgdGhpcy5fYnVpbGRJbmRleCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRSYWRpdXMgIT09IHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UmFkaXVzID0gdGhpcy5yYWRpdXM7XG4gICAgICBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9jdXJyZW50VGFpbC5lcXVhbHModGhpcy50YWlsKSkge1xuICAgICAgdGhpcy5fY3VycmVudFRhaWwuY29weSh0aGlzLnRhaWwpO1xuICAgICAgc2hvdWxkVXBkYXRlR2VvbWV0cnkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVHZW9tZXRyeSkge1xuICAgICAgdGhpcy5fYnVpbGRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkUG9zaXRpb24oKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gKGkgLyAxNi4wKSAqIE1hdGguUEk7XG5cbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKGksIE1hdGguY29zKHQpLCBNYXRoLnNpbih0KSwgMC4wKTtcbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDMyICsgaSwgMC4wLCBNYXRoLmNvcyh0KSwgTWF0aC5zaW4odCkpO1xuICAgICAgdGhpcy5fYXR0clBvcy5zZXRYWVooNjQgKyBpLCBNYXRoLnNpbih0KSwgMC4wLCBNYXRoLmNvcyh0KSk7XG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZSh0aGlzLl9jdXJyZW50UmFkaXVzLCB0aGlzLl9jdXJyZW50UmFkaXVzLCB0aGlzLl9jdXJyZW50UmFkaXVzKTtcbiAgICB0aGlzLnRyYW5zbGF0ZSh0aGlzLl9jdXJyZW50VGFpbC54LCB0aGlzLl9jdXJyZW50VGFpbC55LCB0aGlzLl9jdXJyZW50VGFpbC56KTtcblxuICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDk2LCAwLCAwLCAwKTtcbiAgICB0aGlzLl9hdHRyUG9zLnNldFhZWig5NywgdGhpcy5fY3VycmVudFRhaWwueCwgdGhpcy5fY3VycmVudFRhaWwueSwgdGhpcy5fY3VycmVudFRhaWwueik7XG5cbiAgICB0aGlzLl9hdHRyUG9zLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkSW5kZXgoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XG4gICAgICBjb25zdCBpMSA9IChpICsgMSkgJSAzMjtcblxuICAgICAgdGhpcy5fYXR0ckluZGV4LnNldFhZKGkgKiAyLCBpLCBpMSk7XG4gICAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoNjQgKyBpICogMiwgMzIgKyBpLCAzMiArIGkxKTtcbiAgICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSgxMjggKyBpICogMiwgNjQgKyBpLCA2NCArIGkxKTtcbiAgICB9XG4gICAgdGhpcy5fYXR0ckluZGV4LnNldFhZKDE5MiwgOTYsIDk3KTtcblxuICAgIHRoaXMuX2F0dHJJbmRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4uL2h1bWFub2lkJztcbmltcG9ydCB7IGdldFdvcmxkUXVhdGVybmlvbkxpdGUgfSBmcm9tICcuLi91dGlscy9nZXRXb3JsZFF1YXRlcm5pb25MaXRlJztcbmltcG9ydCB7IHF1YXRJbnZlcnRDb21wYXQgfSBmcm9tICcuLi91dGlscy9xdWF0SW52ZXJ0Q29tcGF0JztcbmltcG9ydCB7IGNhbGNBemltdXRoQWx0aXR1ZGUgfSBmcm9tICcuL3V0aWxzL2NhbGNBemltdXRoQWx0aXR1ZGUnO1xuaW1wb3J0IHR5cGUgeyBWUk1Mb29rQXRBcHBsaWVyIH0gZnJvbSAnLi9WUk1Mb29rQXRBcHBsaWVyJztcbmltcG9ydCB7IHNhbml0aXplQW5nbGUgfSBmcm9tICcuL3V0aWxzL3Nhbml0aXplQW5nbGUnO1xuXG5jb25zdCBWRUMzX1BPU0lUSVZFX1ogPSBuZXcgVEhSRUUuVmVjdG9yMygwLjAsIDAuMCwgMS4wKTtcblxuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfdjNCID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF92M0MgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3F1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9xdWF0QiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfcXVhdEMgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXREID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9ldWxlckEgPSBuZXcgVEhSRUUuRXVsZXIoKTtcblxuLyoqXG4gKiBBIGNsYXNzIGNvbnRyb2xzIGV5ZSBnYXplIG1vdmVtZW50cyBvZiBhIFZSTS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUxvb2tBdCB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVVMRVJfT1JERVIgPSAnWVhaJzsgLy8geWF3LXBpdGNoLXJvbGxcblxuICAvKipcbiAgICogVGhlIG9yaWdpbiBvZiBMb29rQXQuIFBvc2l0aW9uIG9mZnNldCBmcm9tIHRoZSBoZWFkIGJvbmUuXG4gICAqL1xuICBwdWJsaWMgb2Zmc2V0RnJvbUhlYWRCb25lID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAvKipcbiAgICogSXRzIGFzc29jaWF0ZWQge0BsaW5rIFZSTUh1bWFub2lkfS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBodW1hbm9pZDogVlJNSHVtYW5vaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgVlJNTG9va0F0QXBwbGllcn0gb2YgdGhlIExvb2tBdC5cbiAgICovXG4gIHB1YmxpYyBhcHBsaWVyOiBWUk1Mb29rQXRBcHBsaWVyO1xuXG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIHRydWUsIHRoZSBMb29rQXQgd2lsbCBiZSB1cGRhdGVkIGF1dG9tYXRpY2FsbHkgYnkgY2FsbGluZyB7QGxpbmsgdXBkYXRlfSwgdG93YXJkaW5nIHRoZSBkaXJlY3Rpb24gdG8gdGhlIHtAbGluayB0YXJnZXR9LlxuICAgKiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICpcbiAgICogU2VlIGFsc286IHtAbGluayB0YXJnZXR9XG4gICAqL1xuICBwdWJsaWMgYXV0b1VwZGF0ZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgb2JqZWN0IG9mIHRoZSBMb29rQXQuXG4gICAqIE5vdGUgdGhhdCBpdCBkb2VzIG5vdCBtYWtlIGFueSBzZW5zZSBpZiB7QGxpbmsgYXV0b1VwZGF0ZX0gaXMgZGlzYWJsZWQuXG4gICAqXG4gICAqIFNlZSBhbHNvOiB7QGxpbmsgYXV0b1VwZGF0ZX1cbiAgICovXG4gIHB1YmxpYyB0YXJnZXQ/OiBUSFJFRS5PYmplY3QzRCB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBmcm9udCBkaXJlY3Rpb24gb2YgdGhlIGZhY2UuXG4gICAqIEludGVuZGVkIHRvIGJlIHVzZWQgZm9yIFZSTSAwLjAgY29tcGF0IChWUk0gMC4wIG1vZGVscyBhcmUgZmFjaW5nIFotIGluc3RlYWQgb2YgWispLlxuICAgKiBZb3UgdXN1YWxseSBkb24ndCB3YW50IHRvIHRvdWNoIHRoaXMuXG4gICAqL1xuICBwdWJsaWMgZmFjZUZyb250ID0gbmV3IFRIUkVFLlZlY3RvcjMoMC4wLCAwLjAsIDEuMCk7XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IGFuZ2xlIGFyb3VuZCBZIGF4aXMsIGluIGRlZ3JlZS5cbiAgICovXG4gIHByb3RlY3RlZCBfeWF3OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IGFuZ2xlIGFyb3VuZCBZIGF4aXMsIGluIGRlZ3JlZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgeWF3KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3lhdztcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBhbmdsZSBhcm91bmQgWSBheGlzLCBpbiBkZWdyZWUuXG4gICAqL1xuICBwdWJsaWMgc2V0IHlhdyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5feWF3ID0gdmFsdWU7XG4gICAgdGhpcy5fbmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IGFuZ2xlIGFyb3VuZCBYIGF4aXMsIGluIGRlZ3JlZS5cbiAgICovXG4gIHByb3RlY3RlZCBfcGl0Y2g6IG51bWJlcjtcblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgYW5nbGUgYXJvdW5kIFggYXhpcywgaW4gZGVncmVlLlxuICAgKi9cbiAgcHVibGljIGdldCBwaXRjaCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9waXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBhbmdsZSBhcm91bmQgWCBheGlzLCBpbiBkZWdyZWUuXG4gICAqL1xuICBwdWJsaWMgc2V0IHBpdGNoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9waXRjaCA9IHZhbHVlO1xuICAgIHRoaXMuX25lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhhdCBhbmdsZXMgbmVlZCB0byBiZSBhcHBsaWVkIHRvIGl0cyBbQGxpbmsgYXBwbGllcl0uXG4gICAqL1xuICBwcm90ZWN0ZWQgX25lZWRzVXBkYXRlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXb3JsZCByb3RhdGlvbiBvZiB0aGUgaGVhZCBpbiBpdHMgcmVzdCBwb3NlLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzdEhlYWRXb3JsZFF1YXRlcm5pb246IFRIUkVFLlF1YXRlcm5pb247XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgZ2V0RXVsZXJ9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGV1bGVyKCk6IFRIUkVFLkV1bGVyIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUxvb2tBdDogZXVsZXIgaXMgZGVwcmVjYXRlZC4gdXNlIGdldEV1bGVyKCkgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiB0aGlzLmdldEV1bGVyKG5ldyBUSFJFRS5FdWxlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIFZSTUxvb2tBdH0uXG4gICAqXG4gICAqIEBwYXJhbSBodW1hbm9pZCBBIHtAbGluayBWUk1IdW1hbm9pZH1cbiAgICogQHBhcmFtIGFwcGxpZXIgQSB7QGxpbmsgVlJNTG9va0F0QXBwbGllcn1cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbm9pZDogVlJNSHVtYW5vaWQsIGFwcGxpZXI6IFZSTUxvb2tBdEFwcGxpZXIpIHtcbiAgICB0aGlzLmh1bWFub2lkID0gaHVtYW5vaWQ7XG4gICAgdGhpcy5hcHBsaWVyID0gYXBwbGllcjtcblxuICAgIHRoaXMuX3lhdyA9IDAuMDtcbiAgICB0aGlzLl9waXRjaCA9IDAuMDtcbiAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICB0aGlzLl9yZXN0SGVhZFdvcmxkUXVhdGVybmlvbiA9IHRoaXMuZ2V0TG9va0F0V29ybGRRdWF0ZXJuaW9uKG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpdHMgeWF3LXBpdGNoIGFuZ2xlcyBhcyBhbiBgRXVsZXJgLlxuICAgKiBEb2VzIE5PVCBjb25zaWRlciB7QGxpbmsgZmFjZUZyb250fTsgaXQgcmV0dXJucyBgRXVsZXIoMCwgMCwgMDsgXCJZWFpcIilgIGJ5IGRlZmF1bHQgcmVnYXJkbGVzcyBvZiB0aGUgZmFjZUZyb250IHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgZXVsZXJcbiAgICovXG4gIHB1YmxpYyBnZXRFdWxlcih0YXJnZXQ6IFRIUkVFLkV1bGVyKTogVEhSRUUuRXVsZXIge1xuICAgIHJldHVybiB0YXJnZXQuc2V0KFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5fcGl0Y2gsIFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5feWF3LCAwLjAsICdZWFonKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IHRoZSBnaXZlbiB7QGxpbmsgVlJNTG9va0F0fSBpbnRvIHRoaXMgb25lLlxuICAgKiB7QGxpbmsgaHVtYW5vaWR9IG11c3QgYmUgc2FtZSBhcyB0aGUgc291cmNlIG9uZS5cbiAgICoge0BsaW5rIGFwcGxpZXJ9IHdpbGwgcmVmZXJlbmNlIHRoZSBzYW1lIGluc3RhbmNlIGFzIHRoZSBzb3VyY2Ugb25lLlxuICAgKiBAcGFyYW0gc291cmNlIFRoZSB7QGxpbmsgVlJNTG9va0F0fSB5b3Ugd2FudCB0byBjb3B5XG4gICAqIEByZXR1cm5zIHRoaXNcbiAgICovXG4gIHB1YmxpYyBjb3B5KHNvdXJjZTogVlJNTG9va0F0KTogdGhpcyB7XG4gICAgaWYgKHRoaXMuaHVtYW5vaWQgIT09IHNvdXJjZS5odW1hbm9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWUk1Mb29rQXQ6IGh1bWFub2lkIG11c3QgYmUgc2FtZSBpbiBvcmRlciB0byBjb3B5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5vZmZzZXRGcm9tSGVhZEJvbmUuY29weShzb3VyY2Uub2Zmc2V0RnJvbUhlYWRCb25lKTtcbiAgICB0aGlzLmFwcGxpZXIgPSBzb3VyY2UuYXBwbGllcjtcbiAgICB0aGlzLmF1dG9VcGRhdGUgPSBzb3VyY2UuYXV0b1VwZGF0ZTtcbiAgICB0aGlzLnRhcmdldCA9IHNvdXJjZS50YXJnZXQ7XG4gICAgdGhpcy5mYWNlRnJvbnQuY29weShzb3VyY2UuZmFjZUZyb250KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGlzIHtAbGluayBWUk1Mb29rQXR9LlxuICAgKiBOb3RlIHRoYXQge0BsaW5rIGh1bWFub2lkfSBhbmQge0BsaW5rIGFwcGxpZXJ9IHdpbGwgcmVmZXJlbmNlIHRoZSBzYW1lIGluc3RhbmNlIGFzIHRoaXMgb25lLlxuICAgKiBAcmV0dXJucyBDb3BpZWQge0BsaW5rIFZSTUxvb2tBdH1cbiAgICovXG4gIHB1YmxpYyBjbG9uZSgpOiBWUk1Mb29rQXQge1xuICAgIHJldHVybiBuZXcgVlJNTG9va0F0KHRoaXMuaHVtYW5vaWQsIHRoaXMuYXBwbGllcikuY29weSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgbG9va0F0IGRpcmVjdGlvbiAoeWF3IGFuZCBwaXRjaCkgdG8gdGhlIGluaXRpYWwgZGlyZWN0aW9uLlxuICAgKi9cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuX3lhdyA9IDAuMDtcbiAgICB0aGlzLl9waXRjaCA9IDAuMDtcbiAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGl0cyBsb29rQXQgcG9zaXRpb24gaW4gd29ybGQgY29vcmRpbmF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBgVEhSRUUuVmVjdG9yM2BcbiAgICovXG4gIHB1YmxpYyBnZXRMb29rQXRXb3JsZFBvc2l0aW9uKHRhcmdldDogVEhSRUUuVmVjdG9yMyk6IFRIUkVFLlZlY3RvcjMge1xuICAgIGNvbnN0IGhlYWQgPSB0aGlzLmh1bWFub2lkLmdldFJhd0JvbmVOb2RlKCdoZWFkJykhO1xuXG4gICAgcmV0dXJuIHRhcmdldC5jb3B5KHRoaXMub2Zmc2V0RnJvbUhlYWRCb25lKS5hcHBseU1hdHJpeDQoaGVhZC5tYXRyaXhXb3JsZCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGl0cyBsb29rQXQgcm90YXRpb24gaW4gd29ybGQgY29vcmRpbmF0ZS5cbiAgICogRG9lcyBOT1QgY29uc2lkZXIge0BsaW5rIGZhY2VGcm9udH0uXG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXQgQSB0YXJnZXQgYFRIUkVFLlF1YXRlcm5pb25gXG4gICAqL1xuICBwdWJsaWMgZ2V0TG9va0F0V29ybGRRdWF0ZXJuaW9uKHRhcmdldDogVEhSRUUuUXVhdGVybmlvbik6IFRIUkVFLlF1YXRlcm5pb24ge1xuICAgIGNvbnN0IGhlYWQgPSB0aGlzLmh1bWFub2lkLmdldFJhd0JvbmVOb2RlKCdoZWFkJykhO1xuXG4gICAgcmV0dXJuIGdldFdvcmxkUXVhdGVybmlvbkxpdGUoaGVhZCwgdGFyZ2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBxdWF0ZXJuaW9uIHRoYXQgcm90YXRlcyB0aGUgK1ogdW5pdCB2ZWN0b3Igb2YgdGhlIGh1bWFub2lkIEhlYWQgdG8gdGhlIHtAbGluayBmYWNlRnJvbnR9IGRpcmVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBgVEhSRUUuUXVhdGVybmlvbmBcbiAgICovXG4gIHB1YmxpYyBnZXRGYWNlRnJvbnRRdWF0ZXJuaW9uKHRhcmdldDogVEhSRUUuUXVhdGVybmlvbik6IFRIUkVFLlF1YXRlcm5pb24ge1xuICAgIGlmICh0aGlzLmZhY2VGcm9udC5kaXN0YW5jZVRvU3F1YXJlZChWRUMzX1BPU0lUSVZFX1opIDwgMC4wMSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5jb3B5KHRoaXMuX3Jlc3RIZWFkV29ybGRRdWF0ZXJuaW9uKS5pbnZlcnQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBbZmFjZUZyb250QXppbXV0aCwgZmFjZUZyb250QWx0aXR1ZGVdID0gY2FsY0F6aW11dGhBbHRpdHVkZSh0aGlzLmZhY2VGcm9udCk7XG4gICAgX2V1bGVyQS5zZXQoMC4wLCAwLjUgKiBNYXRoLlBJICsgZmFjZUZyb250QXppbXV0aCwgZmFjZUZyb250QWx0aXR1ZGUsICdZWlgnKTtcblxuICAgIHJldHVybiB0YXJnZXQuc2V0RnJvbUV1bGVyKF9ldWxlckEpLnByZW11bHRpcGx5KF9xdWF0RC5jb3B5KHRoaXMuX3Jlc3RIZWFkV29ybGRRdWF0ZXJuaW9uKS5pbnZlcnQoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGl0cyBMb29rQXQgZGlyZWN0aW9uIGluIHdvcmxkIGNvb3JkaW5hdGUuXG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXQgQSB0YXJnZXQgYFRIUkVFLlZlY3RvcjNgXG4gICAqL1xuICBwdWJsaWMgZ2V0TG9va0F0V29ybGREaXJlY3Rpb24odGFyZ2V0OiBUSFJFRS5WZWN0b3IzKTogVEhSRUUuVmVjdG9yMyB7XG4gICAgdGhpcy5nZXRMb29rQXRXb3JsZFF1YXRlcm5pb24oX3F1YXRCKTtcbiAgICB0aGlzLmdldEZhY2VGcm9udFF1YXRlcm5pb24oX3F1YXRDKTtcblxuICAgIHJldHVybiB0YXJnZXRcbiAgICAgIC5jb3B5KFZFQzNfUE9TSVRJVkVfWilcbiAgICAgIC5hcHBseVF1YXRlcm5pb24oX3F1YXRCKVxuICAgICAgLmFwcGx5UXVhdGVybmlvbihfcXVhdEMpXG4gICAgICAuYXBwbHlFdWxlcih0aGlzLmdldEV1bGVyKF9ldWxlckEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgaXRzIGxvb2tBdCB0YXJnZXQgcG9zaXRpb24uXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpdHMgcmVzdWx0IHdpbGwgYmUgaW5zdGFudGx5IG92ZXJ3cml0dGVuIGlmIHtAbGluayBWUk1Mb29rQXRIZWFkLmF1dG9VcGRhdGV9IGlzIGVuYWJsZWQuXG4gICAqXG4gICAqIElmIHlvdSB3YW50IHRvIHRyYWNrIGFuIG9iamVjdCBjb250aW51b3VzbHksIHlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgdGFyZ2V0fSBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gcG9zaXRpb24gQSB0YXJnZXQgcG9zaXRpb24sIGluIHdvcmxkIHNwYWNlXG4gICAqL1xuICBwdWJsaWMgbG9va0F0KHBvc2l0aW9uOiBUSFJFRS5WZWN0b3IzKTogdm9pZCB7XG4gICAgLy8gTG9vayBhdCBkaXJlY3Rpb24gaW4gbG9jYWwgY29vcmRpbmF0ZVxuICAgIGNvbnN0IGhlYWRSb3REaWZmSW52ID0gX3F1YXRBXG4gICAgICAuY29weSh0aGlzLl9yZXN0SGVhZFdvcmxkUXVhdGVybmlvbilcbiAgICAgIC5tdWx0aXBseShxdWF0SW52ZXJ0Q29tcGF0KHRoaXMuZ2V0TG9va0F0V29ybGRRdWF0ZXJuaW9uKF9xdWF0QikpKTtcbiAgICBjb25zdCBoZWFkUG9zID0gdGhpcy5nZXRMb29rQXRXb3JsZFBvc2l0aW9uKF92M0IpO1xuICAgIGNvbnN0IGxvb2tBdERpciA9IF92M0MuY29weShwb3NpdGlvbikuc3ViKGhlYWRQb3MpLmFwcGx5UXVhdGVybmlvbihoZWFkUm90RGlmZkludikubm9ybWFsaXplKCk7XG5cbiAgICAvLyBjYWxjdWxhdGUgYW5nbGVzXG4gICAgY29uc3QgW2F6aW11dGhGcm9tLCBhbHRpdHVkZUZyb21dID0gY2FsY0F6aW11dGhBbHRpdHVkZSh0aGlzLmZhY2VGcm9udCk7XG4gICAgY29uc3QgW2F6aW11dGhUbywgYWx0aXR1ZGVUb10gPSBjYWxjQXppbXV0aEFsdGl0dWRlKGxvb2tBdERpcik7XG4gICAgY29uc3QgeWF3ID0gc2FuaXRpemVBbmdsZShhemltdXRoVG8gLSBhemltdXRoRnJvbSk7XG4gICAgY29uc3QgcGl0Y2ggPSBzYW5pdGl6ZUFuZ2xlKGFsdGl0dWRlRnJvbSAtIGFsdGl0dWRlVG8pOyAvLyBzcGlubmluZyAoMSwgMCwgMCkgQ0NXIGFyb3VuZCBaIGF4aXMgbWFrZXMgdGhlIHZlY3RvciBsb29rIHVwLCB3aGlsZSBzcGlubmluZyAoMCwgMCwgMSkgQ0NXIGFyb3VuZCBYIGF4aXMgbWFrZXMgdGhlIHZlY3RvciBsb29rIGRvd25cblxuICAgIC8vIGFwcGx5IGFuZ2xlc1xuICAgIHRoaXMuX3lhdyA9IFRIUkVFLk1hdGhVdGlscy5SQUQyREVHICogeWF3O1xuICAgIHRoaXMuX3BpdGNoID0gVEhSRUUuTWF0aFV0aWxzLlJBRDJERUcgKiBwaXRjaDtcblxuICAgIHRoaXMuX25lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIFZSTUxvb2tBdEhlYWQuXG4gICAqIElmIHtAbGluayBhdXRvVXBkYXRlfSBpcyBlbmFibGVkLCB0aGlzIHdpbGwgbWFrZSBpdCBsb29rIGF0IHRoZSB7QGxpbmsgdGFyZ2V0fS5cbiAgICpcbiAgICogQHBhcmFtIGRlbHRhIGRlbHRhVGltZSwgaXQgaXNuJ3QgdXNlZCB0aG91Z2guIFlvdSBjYW4gdXNlIHRoZSBwYXJhbWV0ZXIgaWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgaW4geW91ciBvd24gZXh0ZW5kZWQge0BsaW5rIFZSTUxvb2tBdH0uXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YXJnZXQgIT0gbnVsbCAmJiB0aGlzLmF1dG9VcGRhdGUpIHtcbiAgICAgIHRoaXMubG9va0F0KHRoaXMudGFyZ2V0LmdldFdvcmxkUG9zaXRpb24oX3YzQSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9uZWVkc1VwZGF0ZSkge1xuICAgICAgdGhpcy5fbmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5hcHBsaWVyLmFwcGx5WWF3UGl0Y2godGhpcy5feWF3LCB0aGlzLl9waXRjaCk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5jb25zdCBfcG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3NjYWxlID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuLyoqXG4gKiBBIHJlcGxhY2VtZW50IG9mIGBPYmplY3QzRC5nZXRXb3JsZFF1YXRlcm5pb25gLlxuICogRXh0cmFjdCB0aGUgd29ybGQgcXVhdGVybmlvbiBvZiBhbiBvYmplY3QgZnJvbSBpdHMgd29ybGQgc3BhY2UgbWF0cml4LCB3aXRob3V0IGNhbGxpbmcgYE9iamVjdDNELnVwZGF0ZVdvcmxkTWF0cml4YC5cbiAqIFVzZSB0aGlzIHdoZW4geW91J3JlIHN1cmUgdGhhdCB0aGUgd29ybGQgbWF0cml4IGlzIHVwLXRvLWRhdGUuXG4gKlxuICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0XG4gKiBAcGFyYW0gb3V0IEEgdGFyZ2V0IHF1YXRlcm5pb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcmxkUXVhdGVybmlvbkxpdGUob2JqZWN0OiBUSFJFRS5PYmplY3QzRCwgb3V0OiBUSFJFRS5RdWF0ZXJuaW9uKTogVEhSRUUuUXVhdGVybmlvbiB7XG4gIG9iamVjdC5tYXRyaXhXb3JsZC5kZWNvbXBvc2UoX3Bvc2l0aW9uLCBvdXQsIF9zY2FsZSk7XG4gIHJldHVybiBvdXQ7XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBhemltdXRoIC8gYWx0aXR1ZGUgYW5nbGVzIGZyb20gYSB2ZWN0b3IuXG4gKlxuICogVGhpcyByZXR1cm5zIGEgZGlmZmVyZW5jZSBvZiBhbmdsZXMgZnJvbSAoMSwgMCwgMCkuXG4gKiBBemltdXRoIHJlcHJlc2VudHMgYW4gYW5nbGUgYXJvdW5kIFkgYXhpcy5cbiAqIEFsdGl0dWRlIHJlcHJlc2VudHMgYW4gYW5nbGUgYXJvdW5kIFogYXhpcy5cbiAqIEl0IGlzIHJvdGF0ZWQgaW4gaW50cmluc2ljIFktWiBvcmRlci5cbiAqXG4gKiBAcGFyYW0gdmVjdG9yIFRoZSB2ZWN0b3JcbiAqIEByZXR1cm5zIEEgdHVwbGUgY29udGFpbnMgdHdvIGFuZ2xlcywgYFsgYXppbXV0aCwgYWx0aXR1ZGUgXWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNBemltdXRoQWx0aXR1ZGUodmVjdG9yOiBUSFJFRS5WZWN0b3IzKTogW2F6aW11dGg6IG51bWJlciwgYWx0aXR1ZGU6IG51bWJlcl0ge1xuICByZXR1cm4gW01hdGguYXRhbjIoLXZlY3Rvci56LCB2ZWN0b3IueCksIE1hdGguYXRhbjIodmVjdG9yLnksIE1hdGguc3FydCh2ZWN0b3IueCAqIHZlY3Rvci54ICsgdmVjdG9yLnogKiB2ZWN0b3IueikpXTtcbn1cbiIsICIvKipcbiAqIE1ha2Ugc3VyZSB0aGUgYW5nbGUgaXMgd2l0aGluIC1QSSB0byBQSS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIHNhbml0aXplQW5nbGUoMS41ICogTWF0aC5QSSkgLy8gLTAuNSAqIFBJXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gYW5nbGUgQW4gaW5wdXQgYW5nbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplQW5nbGUoYW5nbGU6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHJvdW5kVHVybiA9IE1hdGgucm91bmQoYW5nbGUgLyAyLjAgLyBNYXRoLlBJKTtcbiAgcmV0dXJuIGFuZ2xlIC0gMi4wICogTWF0aC5QSSAqIHJvdW5kVHVybjtcbn1cbiIsICJpbXBvcnQgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4uL2h1bWFub2lkJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNTG9va0F0QXBwbGllciB9IGZyb20gJy4vVlJNTG9va0F0QXBwbGllcic7XG5pbXBvcnQgeyBWUk1Mb29rQXRSYW5nZU1hcCB9IGZyb20gJy4vVlJNTG9va0F0UmFuZ2VNYXAnO1xuaW1wb3J0IHsgY2FsY0F6aW11dGhBbHRpdHVkZSB9IGZyb20gJy4vdXRpbHMvY2FsY0F6aW11dGhBbHRpdHVkZSc7XG5pbXBvcnQgeyBnZXRXb3JsZFF1YXRlcm5pb25MaXRlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZSc7XG5cbmNvbnN0IFZFQzNfUE9TSVRJVkVfWiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAuMCwgMC4wLCAxLjApO1xuXG5jb25zdCBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXRCID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9ldWxlckEgPSBuZXcgVEhSRUUuRXVsZXIoMC4wLCAwLjAsIDAuMCwgJ1lYWicpO1xuXG4vKipcbiAqIEEgY2xhc3MgdGhhdCBhcHBsaWVzIGV5ZSBnYXplIGRpcmVjdGlvbnMgdG8gYSBWUk0uXG4gKiBJdCB3aWxsIGJlIHVzZWQgYnkge0BsaW5rIFZSTUxvb2tBdH0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1Mb29rQXRCb25lQXBwbGllciBpbXBsZW1lbnRzIFZSTUxvb2tBdEFwcGxpZXIge1xuICAvKipcbiAgICogUmVwcmVzZW50IGl0cyB0eXBlIG9mIGFwcGxpZXIuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnYm9uZSc7XG5cbiAgLyoqXG4gICAqIEl0cyBhc3NvY2lhdGVkIHtAbGluayBWUk1IdW1hbm9pZH0uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaHVtYW5vaWQ6IFZSTUh1bWFub2lkO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gZm9yIGhvcml6b250YWwgaW53YXJkIG1vdmVtZW50LiBUaGUgbGVmdCBleWUgbW92ZXMgcmlnaHQuIFRoZSByaWdodCBleWUgbW92ZXMgbGVmdC5cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcEhvcml6b250YWxJbm5lcjogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgaG9yaXpvbnRhbCBvdXR3YXJkIG1vdmVtZW50LiBUaGUgbGVmdCBleWUgbW92ZXMgbGVmdC4gVGhlIHJpZ2h0IGV5ZSBtb3ZlcyByaWdodC5cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcEhvcml6b250YWxPdXRlcjogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgdmVydGljYWwgZG93bndhcmQgbW92ZW1lbnQuIEJvdGggZXllcyBtb3ZlIHVwd2FyZHMuXG4gICAqL1xuICBwdWJsaWMgcmFuZ2VNYXBWZXJ0aWNhbERvd246IFZSTUxvb2tBdFJhbmdlTWFwO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gZm9yIHZlcnRpY2FsIHVwd2FyZCBtb3ZlbWVudC4gQm90aCBleWVzIG1vdmUgZG93bndhcmRzLlxuICAgKi9cbiAgcHVibGljIHJhbmdlTWFwVmVydGljYWxVcDogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIFRoZSBmcm9udCBkaXJlY3Rpb24gb2YgdGhlIGZhY2UuXG4gICAqIEludGVuZGVkIHRvIGJlIHVzZWQgZm9yIFZSTSAwLjAgY29tcGF0IChWUk0gMC4wIG1vZGVscyBhcmUgZmFjaW5nIFotIGluc3RlYWQgb2YgWispLlxuICAgKiBZb3UgdXN1YWxseSBkb24ndCB3YW50IHRvIHRvdWNoIHRoaXMuXG4gICAqL1xuICBwdWJsaWMgZmFjZUZyb250OiBUSFJFRS5WZWN0b3IzO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzdCBxdWF0ZXJuaW9uIG9mIExlZnRFeWUgYm9uZS5cbiAgICovXG4gIHByaXZhdGUgX3Jlc3RRdWF0TGVmdEV5ZTogVEhSRUUuUXVhdGVybmlvbjtcblxuICAvKipcbiAgICogVGhlIHJlc3QgcXVhdGVybmlvbiBvZiBSaWdodEV5ZSBib25lLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzdFF1YXRSaWdodEV5ZTogVEhSRUUuUXVhdGVybmlvbjtcblxuICAvKipcbiAgICogVGhlIHdvcmxkLXNwYWNlIHJlc3QgcXVhdGVybmlvbiBvZiB0aGUgcGFyZW50IG9mIHRoZSBodW1hbm9pZCBMZWZ0RXllLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzdExlZnRFeWVQYXJlbnRXb3JsZFF1YXQ6IFRIUkVFLlF1YXRlcm5pb247XG5cbiAgLyoqXG4gICAqIFRoZSB3b3JsZC1zcGFjZSByZXN0IHF1YXRlcm5pb24gb2YgdGhlIHBhcmVudCBvZiB0aGUgaHVtYW5vaWQgUmlnaHRFeWUuXG4gICAqL1xuICBwcml2YXRlIF9yZXN0UmlnaHRFeWVQYXJlbnRXb3JsZFF1YXQ6IFRIUkVFLlF1YXRlcm5pb247XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNTG9va0F0Qm9uZUFwcGxpZXJ9LlxuICAgKlxuICAgKiBAcGFyYW0gaHVtYW5vaWQgQSB7QGxpbmsgVlJNSHVtYW5vaWR9XG4gICAqIEBwYXJhbSByYW5nZU1hcEhvcml6b250YWxJbm5lciBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gdXNlZCBmb3IgaW5uZXIgdHJhbnN2ZXJzZSBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSB1c2VkIGZvciBvdXRlciB0cmFuc3ZlcnNlIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gcmFuZ2VNYXBWZXJ0aWNhbERvd24gQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIGRvd24gZGlyZWN0aW9uXG4gICAqIEBwYXJhbSByYW5nZU1hcFZlcnRpY2FsVXAgQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIHVwIGRpcmVjdGlvblxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGh1bWFub2lkOiBWUk1IdW1hbm9pZCxcbiAgICByYW5nZU1hcEhvcml6b250YWxJbm5lcjogVlJNTG9va0F0UmFuZ2VNYXAsXG4gICAgcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXI6IFZSTUxvb2tBdFJhbmdlTWFwLFxuICAgIHJhbmdlTWFwVmVydGljYWxEb3duOiBWUk1Mb29rQXRSYW5nZU1hcCxcbiAgICByYW5nZU1hcFZlcnRpY2FsVXA6IFZSTUxvb2tBdFJhbmdlTWFwLFxuICApIHtcbiAgICB0aGlzLmh1bWFub2lkID0gaHVtYW5vaWQ7XG5cbiAgICB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbElubmVyID0gcmFuZ2VNYXBIb3Jpem9udGFsSW5uZXI7XG4gICAgdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlciA9IHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyO1xuICAgIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbERvd24gPSByYW5nZU1hcFZlcnRpY2FsRG93bjtcbiAgICB0aGlzLnJhbmdlTWFwVmVydGljYWxVcCA9IHJhbmdlTWFwVmVydGljYWxVcDtcblxuICAgIHRoaXMuZmFjZUZyb250ID0gbmV3IFRIUkVFLlZlY3RvcjMoMC4wLCAwLjAsIDEuMCk7XG5cbiAgICAvLyBzZXQgcmVzdCBxdWF0ZXJuaW9uc1xuICAgIHRoaXMuX3Jlc3RRdWF0TGVmdEV5ZSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgdGhpcy5fcmVzdFF1YXRSaWdodEV5ZSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgdGhpcy5fcmVzdExlZnRFeWVQYXJlbnRXb3JsZFF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgIHRoaXMuX3Jlc3RSaWdodEV5ZVBhcmVudFdvcmxkUXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICBjb25zdCBsZWZ0RXllID0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgnbGVmdEV5ZScpO1xuICAgIGNvbnN0IHJpZ2h0RXllID0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgncmlnaHRFeWUnKTtcblxuICAgIGlmIChsZWZ0RXllKSB7XG4gICAgICB0aGlzLl9yZXN0UXVhdExlZnRFeWUuY29weShsZWZ0RXllLnF1YXRlcm5pb24pO1xuICAgICAgZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZShsZWZ0RXllLnBhcmVudCEsIHRoaXMuX3Jlc3RMZWZ0RXllUGFyZW50V29ybGRRdWF0KTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRFeWUpIHtcbiAgICAgIHRoaXMuX3Jlc3RRdWF0UmlnaHRFeWUuY29weShyaWdodEV5ZS5xdWF0ZXJuaW9uKTtcbiAgICAgIGdldFdvcmxkUXVhdGVybmlvbkxpdGUocmlnaHRFeWUucGFyZW50ISwgdGhpcy5fcmVzdFJpZ2h0RXllUGFyZW50V29ybGRRdWF0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGlucHV0IGFuZ2xlIHRvIGl0cyBhc3NvY2lhdGVkIFZSTSBtb2RlbC5cbiAgICpcbiAgICogQHBhcmFtIHlhdyBSb3RhdGlvbiBhcm91bmQgWSBheGlzLCBpbiBkZWdyZWVcbiAgICogQHBhcmFtIHBpdGNoIFJvdGF0aW9uIGFyb3VuZCBYIGF4aXMsIGluIGRlZ3JlZVxuICAgKi9cbiAgcHVibGljIGFwcGx5WWF3UGl0Y2goeWF3OiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBsZWZ0RXllID0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgnbGVmdEV5ZScpO1xuICAgIGNvbnN0IHJpZ2h0RXllID0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgncmlnaHRFeWUnKTtcbiAgICBjb25zdCBsZWZ0RXllTm9ybWFsaXplZCA9IHRoaXMuaHVtYW5vaWQuZ2V0Tm9ybWFsaXplZEJvbmVOb2RlKCdsZWZ0RXllJyk7XG4gICAgY29uc3QgcmlnaHRFeWVOb3JtYWxpemVkID0gdGhpcy5odW1hbm9pZC5nZXROb3JtYWxpemVkQm9uZU5vZGUoJ3JpZ2h0RXllJyk7XG4gICAgLy8gbGVmdFxuICAgIGlmIChsZWZ0RXllKSB7XG4gICAgICBpZiAocGl0Y2ggPCAwLjApIHtcbiAgICAgICAgX2V1bGVyQS54ID0gLVRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcFZlcnRpY2FsRG93bi5tYXAoLXBpdGNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9ldWxlckEueCA9IFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcFZlcnRpY2FsVXAubWFwKHBpdGNoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHlhdyA8IDAuMCkge1xuICAgICAgICBfZXVsZXJBLnkgPSAtVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbElubmVyLm1hcCgteWF3KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9ldWxlckEueSA9IFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlci5tYXAoeWF3KTtcbiAgICAgIH1cblxuICAgICAgX3F1YXRBLnNldEZyb21FdWxlcihfZXVsZXJBKTtcbiAgICAgIHRoaXMuX2dldFdvcmxkRmFjZUZyb250UXVhdChfcXVhdEIpO1xuXG4gICAgICAvLyBfcXVhdEIgKiBfcXVhdEEgKiBfcXVhdEJeLTFcbiAgICAgIC8vIHdoZXJlIF9xdWF0QSBpcyBMb29rQXQgcm90YXRpb25cbiAgICAgIC8vIGFuZCBfcXVhdEIgaXMgd29ybGRGYWNlRnJvbnRRdWF0XG4gICAgICBsZWZ0RXllTm9ybWFsaXplZCEucXVhdGVybmlvbi5jb3B5KF9xdWF0QikubXVsdGlwbHkoX3F1YXRBKS5tdWx0aXBseShfcXVhdEIuaW52ZXJ0KCkpO1xuXG4gICAgICBfcXVhdEEuY29weSh0aGlzLl9yZXN0TGVmdEV5ZVBhcmVudFdvcmxkUXVhdCk7XG5cbiAgICAgIC8vIF9xdWF0QV4tMSAqIGxlZnRFeWVOb3JtYWxpemVkLnF1YXRlcm5pb24gKiBfcXVhdEEgKiByZXN0UXVhdExlZnRFeWVcbiAgICAgIC8vIHdoZXJlIF9xdWF0QSBpcyByZXN0TGVmdEV5ZVBhcmVudFdvcmxkUXVhdFxuICAgICAgbGVmdEV5ZS5xdWF0ZXJuaW9uXG4gICAgICAgIC5jb3B5KGxlZnRFeWVOb3JtYWxpemVkIS5xdWF0ZXJuaW9uKVxuICAgICAgICAubXVsdGlwbHkoX3F1YXRBKVxuICAgICAgICAucHJlbXVsdGlwbHkoX3F1YXRBLmludmVydCgpKVxuICAgICAgICAubXVsdGlwbHkodGhpcy5fcmVzdFF1YXRMZWZ0RXllKTtcbiAgICB9XG5cbiAgICAvLyByaWdodFxuICAgIGlmIChyaWdodEV5ZSkge1xuICAgICAgaWYgKHBpdGNoIDwgMC4wKSB7XG4gICAgICAgIF9ldWxlckEueCA9IC1USFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbERvd24ubWFwKC1waXRjaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZXVsZXJBLnggPSBUSFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbFVwLm1hcChwaXRjaCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh5YXcgPCAwLjApIHtcbiAgICAgICAgX2V1bGVyQS55ID0gLVRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlci5tYXAoLXlhdyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZXVsZXJBLnkgPSBUSFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsSW5uZXIubWFwKHlhdyk7XG4gICAgICB9XG5cbiAgICAgIF9xdWF0QS5zZXRGcm9tRXVsZXIoX2V1bGVyQSk7XG4gICAgICB0aGlzLl9nZXRXb3JsZEZhY2VGcm9udFF1YXQoX3F1YXRCKTtcblxuICAgICAgLy8gX3F1YXRCICogX3F1YXRBICogX3F1YXRCXi0xXG4gICAgICAvLyB3aGVyZSBfcXVhdEEgaXMgTG9va0F0IHJvdGF0aW9uXG4gICAgICAvLyBhbmQgX3F1YXRCIGlzIHdvcmxkRmFjZUZyb250UXVhdFxuICAgICAgcmlnaHRFeWVOb3JtYWxpemVkIS5xdWF0ZXJuaW9uLmNvcHkoX3F1YXRCKS5tdWx0aXBseShfcXVhdEEpLm11bHRpcGx5KF9xdWF0Qi5pbnZlcnQoKSk7XG5cbiAgICAgIF9xdWF0QS5jb3B5KHRoaXMuX3Jlc3RSaWdodEV5ZVBhcmVudFdvcmxkUXVhdCk7XG5cbiAgICAgIC8vIF9xdWF0QV4tMSAqIHJpZ2h0RXllTm9ybWFsaXplZC5xdWF0ZXJuaW9uICogX3F1YXRBICogcmVzdFF1YXRSaWdodEV5ZVxuICAgICAgLy8gd2hlcmUgX3F1YXRBIGlzIHJlc3RSaWdodEV5ZVBhcmVudFdvcmxkUXVhdFxuICAgICAgcmlnaHRFeWUucXVhdGVybmlvblxuICAgICAgICAuY29weShyaWdodEV5ZU5vcm1hbGl6ZWQhLnF1YXRlcm5pb24pXG4gICAgICAgIC5tdWx0aXBseShfcXVhdEEpXG4gICAgICAgIC5wcmVtdWx0aXBseShfcXVhdEEuaW52ZXJ0KCkpXG4gICAgICAgIC5tdWx0aXBseSh0aGlzLl9yZXN0UXVhdFJpZ2h0RXllKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBhcHBseVlhd1BpdGNofSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGxvb2tBdChldWxlcjogVEhSRUUuRXVsZXIpOiB2b2lkIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUxvb2tBdEJvbmVBcHBsaWVyOiBsb29rQXQoKSBpcyBkZXByZWNhdGVkLiB1c2UgYXBwbHkoKSBpbnN0ZWFkLicpO1xuXG4gICAgY29uc3QgeWF3ID0gVEhSRUUuTWF0aFV0aWxzLlJBRDJERUcgKiBldWxlci55O1xuICAgIGNvbnN0IHBpdGNoID0gVEhSRUUuTWF0aFV0aWxzLlJBRDJERUcgKiBldWxlci54O1xuXG4gICAgdGhpcy5hcHBseVlhd1BpdGNoKHlhdywgcGl0Y2gpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHF1YXRlcm5pb24gdGhhdCByb3RhdGVzIHRoZSB3b3JsZC1zcGFjZSArWiB1bml0IHZlY3RvciB0byB0aGUge0BsaW5rIGZhY2VGcm9udH0gZGlyZWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0IEEgdGFyZ2V0IGBUSFJFRS5RdWF0ZXJuaW9uYFxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0V29ybGRGYWNlRnJvbnRRdWF0KHRhcmdldDogVEhSRUUuUXVhdGVybmlvbik6IFRIUkVFLlF1YXRlcm5pb24ge1xuICAgIGlmICh0aGlzLmZhY2VGcm9udC5kaXN0YW5jZVRvU3F1YXJlZChWRUMzX1BPU0lUSVZFX1opIDwgMC4wMSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5pZGVudGl0eSgpO1xuICAgIH1cblxuICAgIGNvbnN0IFtmYWNlRnJvbnRBemltdXRoLCBmYWNlRnJvbnRBbHRpdHVkZV0gPSBjYWxjQXppbXV0aEFsdGl0dWRlKHRoaXMuZmFjZUZyb250KTtcbiAgICBfZXVsZXJBLnNldCgwLjAsIDAuNSAqIE1hdGguUEkgKyBmYWNlRnJvbnRBemltdXRoLCBmYWNlRnJvbnRBbHRpdHVkZSwgJ1laWCcpO1xuXG4gICAgcmV0dXJuIHRhcmdldC5zZXRGcm9tRXVsZXIoX2V1bGVyQSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBWUk1FeHByZXNzaW9uTWFuYWdlciB9IGZyb20gJy4uL2V4cHJlc3Npb25zJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNTG9va0F0QXBwbGllciB9IGZyb20gJy4vVlJNTG9va0F0QXBwbGllcic7XG5pbXBvcnQgeyBWUk1Mb29rQXRSYW5nZU1hcCB9IGZyb20gJy4vVlJNTG9va0F0UmFuZ2VNYXAnO1xuXG4vKipcbiAqIEEgY2xhc3MgdGhhdCBhcHBsaWVzIGV5ZSBnYXplIGRpcmVjdGlvbnMgdG8gYSBWUk0uXG4gKiBJdCB3aWxsIGJlIHVzZWQgYnkge0BsaW5rIFZSTUxvb2tBdH0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1Mb29rQXRFeHByZXNzaW9uQXBwbGllciBpbXBsZW1lbnRzIFZSTUxvb2tBdEFwcGxpZXIge1xuICAvKipcbiAgICogUmVwcmVzZW50IGl0cyB0eXBlIG9mIGFwcGxpZXIuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnZXhwcmVzc2lvbic7XG5cbiAgLyoqXG4gICAqIEl0cyBhc3NvY2lhdGVkIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgZXhwcmVzc2lvbnM6IFZSTUV4cHJlc3Npb25NYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBJdCB3b24ndCBiZSB1c2VkIGluIGV4cHJlc3Npb24gYXBwbGllci5cbiAgICogU2VlIGFsc286IHtAbGluayByYW5nZU1hcEhvcml6b250YWxPdXRlcn1cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcEhvcml6b250YWxJbm5lcjogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgaG9yaXpvbnRhbCBtb3ZlbWVudC4gQm90aCBleWVzIG1vdmUgbGVmdCBvciByaWdodC5cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcEhvcml6b250YWxPdXRlcjogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgdmVydGljYWwgZG93bndhcmQgbW92ZW1lbnQuIEJvdGggZXllcyBtb3ZlIHVwd2FyZHMuXG4gICAqL1xuICBwdWJsaWMgcmFuZ2VNYXBWZXJ0aWNhbERvd246IFZSTUxvb2tBdFJhbmdlTWFwO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gZm9yIHZlcnRpY2FsIHVwd2FyZCBtb3ZlbWVudC4gQm90aCBleWVzIG1vdmUgZG93bndhcmRzLlxuICAgKi9cbiAgcHVibGljIHJhbmdlTWFwVmVydGljYWxVcDogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNTG9va0F0RXhwcmVzc2lvbkFwcGxpZXJ9LlxuICAgKlxuICAgKiBAcGFyYW0gZXhwcmVzc2lvbnMgQSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9XG4gICAqIEBwYXJhbSByYW5nZU1hcEhvcml6b250YWxJbm5lciBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gdXNlZCBmb3IgaW5uZXIgdHJhbnN2ZXJzZSBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSB1c2VkIGZvciBvdXRlciB0cmFuc3ZlcnNlIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gcmFuZ2VNYXBWZXJ0aWNhbERvd24gQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIGRvd24gZGlyZWN0aW9uXG4gICAqIEBwYXJhbSByYW5nZU1hcFZlcnRpY2FsVXAgQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIHVwIGRpcmVjdGlvblxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGV4cHJlc3Npb25zOiBWUk1FeHByZXNzaW9uTWFuYWdlcixcbiAgICByYW5nZU1hcEhvcml6b250YWxJbm5lcjogVlJNTG9va0F0UmFuZ2VNYXAsXG4gICAgcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXI6IFZSTUxvb2tBdFJhbmdlTWFwLFxuICAgIHJhbmdlTWFwVmVydGljYWxEb3duOiBWUk1Mb29rQXRSYW5nZU1hcCxcbiAgICByYW5nZU1hcFZlcnRpY2FsVXA6IFZSTUxvb2tBdFJhbmdlTWFwLFxuICApIHtcbiAgICB0aGlzLmV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnM7XG5cbiAgICB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbElubmVyID0gcmFuZ2VNYXBIb3Jpem9udGFsSW5uZXI7XG4gICAgdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlciA9IHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyO1xuICAgIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbERvd24gPSByYW5nZU1hcFZlcnRpY2FsRG93bjtcbiAgICB0aGlzLnJhbmdlTWFwVmVydGljYWxVcCA9IHJhbmdlTWFwVmVydGljYWxVcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgaW5wdXQgYW5nbGUgdG8gaXRzIGFzc29jaWF0ZWQgVlJNIG1vZGVsLlxuICAgKlxuICAgKiBAcGFyYW0geWF3IFJvdGF0aW9uIGFyb3VuZCBZIGF4aXMsIGluIGRlZ3JlZVxuICAgKiBAcGFyYW0gcGl0Y2ggUm90YXRpb24gYXJvdW5kIFggYXhpcywgaW4gZGVncmVlXG4gICAqL1xuICBwdWJsaWMgYXBwbHlZYXdQaXRjaCh5YXc6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChwaXRjaCA8IDAuMCkge1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va0Rvd24nLCAwLjApO1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va1VwJywgdGhpcy5yYW5nZU1hcFZlcnRpY2FsVXAubWFwKC1waXRjaCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cHJlc3Npb25zLnNldFZhbHVlKCdsb29rVXAnLCAwLjApO1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va0Rvd24nLCB0aGlzLnJhbmdlTWFwVmVydGljYWxEb3duLm1hcChwaXRjaCkpO1xuICAgIH1cblxuICAgIGlmICh5YXcgPCAwLjApIHtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tMZWZ0JywgMC4wKTtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tSaWdodCcsIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXIubWFwKC15YXcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va1JpZ2h0JywgMC4wKTtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tMZWZ0JywgdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlci5tYXAoeWF3KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgYXBwbHlZYXdQaXRjaH0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBsb29rQXQoZXVsZXI6IFRIUkVFLkV1bGVyKTogdm9pZCB7XG4gICAgY29uc29sZS53YXJuKCdWUk1Mb29rQXRCb25lQXBwbGllcjogbG9va0F0KCkgaXMgZGVwcmVjYXRlZC4gdXNlIGFwcGx5KCkgaW5zdGVhZC4nKTtcblxuICAgIGNvbnN0IHlhdyA9IFRIUkVFLk1hdGhVdGlscy5SQUQyREVHICogZXVsZXIueTtcbiAgICBjb25zdCBwaXRjaCA9IFRIUkVFLk1hdGhVdGlscy5SQUQyREVHICogZXVsZXIueDtcblxuICAgIHRoaXMuYXBwbHlZYXdQaXRjaCh5YXcsIHBpdGNoKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IHNhdHVyYXRlIH0gZnJvbSAnLi4vdXRpbHMvc2F0dXJhdGUnO1xuXG5leHBvcnQgY2xhc3MgVlJNTG9va0F0UmFuZ2VNYXAge1xuICAvKipcbiAgICogTGltaXRzIHRoZSBtYXhpbXVtIGFuZ2xlIG9mIHRoZSBpbnB1dCBhbmdsZSBvZiB0aGUgTG9va0F0IHZlY3RvciBmcm9tIHRoZSBmcm9udCBvZiB0aGUgaGVhZCAodGhlIHBvc2l0aXZlIHogYXhpcykuXG4gICAqL1xuICBwdWJsaWMgaW5wdXRNYXhWYWx1ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGFuIGFuZ2xlIChpbiBkZWdyZWVzKSBmb3IgYm9uZSB0eXBlIG9mIExvb2tBdCBhcHBsaWVycywgb3IgYSB3ZWlnaHQgZm9yIGV4cHJlc3Npb24gdHlwZSBvZiBMb29rQXQgYXBwbGllcnMuXG4gICAqIFRoZSBpbnB1dCB2YWx1ZSB3aWxsIHRha2UgYDEuMGAgd2hlbiB0aGUgaW5wdXQgYW5nbGUgZXF1YWxzIChvciBncmVhdGVyKSB0byB7QGxpbmsgaW5wdXRNYXhWYWx1ZX0uXG4gICAqL1xuICBwdWJsaWMgb3V0cHV0U2NhbGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0uXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dE1heFZhbHVlIFRoZSB7QGxpbmsgaW5wdXRNYXhWYWx1ZX0gb2YgdGhlIG1hcFxuICAgKiBAcGFyYW0gb3V0cHV0U2NhbGUgVGhlIHtAbGluayBvdXRwdXRTY2FsZX0gb2YgdGhlIG1hcFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKGlucHV0TWF4VmFsdWU6IG51bWJlciwgb3V0cHV0U2NhbGU6IG51bWJlcikge1xuICAgIHRoaXMuaW5wdXRNYXhWYWx1ZSA9IGlucHV0TWF4VmFsdWU7XG4gICAgdGhpcy5vdXRwdXRTY2FsZSA9IG91dHB1dFNjYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIGFuIGlucHV0IHZhbHVlIGFuZCBvdXRwdXQgYSBtYXBwZWQgdmFsdWUuXG4gICAqIEBwYXJhbSBzcmMgVGhlIGlucHV0IHZhbHVlXG4gICAqL1xuICBwdWJsaWMgbWFwKHNyYzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXRTY2FsZSAqIHNhdHVyYXRlKHNyYyAvIHRoaXMuaW5wdXRNYXhWYWx1ZSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlICogYXMgVjBWUk0gZnJvbSAnQHBpeGl2L3R5cGVzLXZybS0wLjAnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMVZSTVNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy12cm0tMS4wJztcbmltcG9ydCB0eXBlIHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uTWFuYWdlciB9IGZyb20gJy4uL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuLi9odW1hbm9pZC9WUk1IdW1hbm9pZCc7XG5pbXBvcnQgeyBWUk1Mb29rQXRIZWxwZXIgfSBmcm9tICcuL2hlbHBlcnMvVlJNTG9va0F0SGVscGVyJztcbmltcG9ydCB7IFZSTUxvb2tBdCB9IGZyb20gJy4vVlJNTG9va0F0JztcbmltcG9ydCB0eXBlIHsgVlJNTG9va0F0QXBwbGllciB9IGZyb20gJy4vVlJNTG9va0F0QXBwbGllcic7XG5pbXBvcnQgeyBWUk1Mb29rQXRCb25lQXBwbGllciB9IGZyb20gJy4vVlJNTG9va0F0Qm9uZUFwcGxpZXInO1xuaW1wb3J0IHsgVlJNTG9va0F0RXhwcmVzc2lvbkFwcGxpZXIgfSBmcm9tICcuL1ZSTUxvb2tBdEV4cHJlc3Npb25BcHBsaWVyJztcbmltcG9ydCB0eXBlIHsgVlJNTG9va0F0TG9hZGVyUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vVlJNTG9va0F0TG9hZGVyUGx1Z2luT3B0aW9ucyc7XG5pbXBvcnQgeyBWUk1Mb29rQXRSYW5nZU1hcCB9IGZyb20gJy4vVlJNTG9va0F0UmFuZ2VNYXAnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIHNwZWMgdmVyc2lvbnMgaXQgcmVjb2duaXplcy5cbiAqL1xuY29uc3QgUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyA9IG5ldyBTZXQoWycxLjAnLCAnMS4wLWJldGEnXSk7XG5cbi8qKlxuICogVGhlIG1pbmltdW0gcGVybWl0dGVkIHZhbHVlIGZvciB7QGxpbmsgVjFWUk1TY2hlbWEuTG9va0F0UmFuZ2VNYXAuaW5wdXRNYXhWYWx1ZX0uXG4gKiBJZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgc21hbGxlciB0aGFuIHRoaXMsIHRoZSBsb2FkZXIgc2hvd3MgYSB3YXJuaW5nIGFuZCBjbGFtcHMgdXAgdGhlIHZhbHVlLlxuICovXG5jb25zdCBJTlBVVF9NQVhfVkFMVUVfTUlOSU1VTSA9IDAuMDE7XG5cbi8qKlxuICogQSBwbHVnaW4gb2YgR0xURkxvYWRlciB0aGF0IGltcG9ydHMgYSB7QGxpbmsgVlJNTG9va0F0fSBmcm9tIGEgVlJNIGV4dGVuc2lvbiBvZiBhIEdMVEYuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1Mb29rQXRMb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgYW4gT2JqZWN0M0QgdG8gYWRkIHtAbGluayBWUk1Mb29rQXRIZWxwZXJ9IHMuXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIGhlbHBlciB3aWxsIG5vdCBiZSBjcmVhdGVkLlxuICAgKiBJZiBgcmVuZGVyT3JkZXJgIGlzIHNldCB0byB0aGUgcm9vdCwgaGVscGVycyB3aWxsIGNvcHkgdGhlIHNhbWUgYHJlbmRlck9yZGVyYCAuXG4gICAqL1xuICBwdWJsaWMgaGVscGVyUm9vdD86IFRIUkVFLk9iamVjdDNEO1xuXG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICByZXR1cm4gJ1ZSTUxvb2tBdExvYWRlclBsdWdpbic7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyc2VyOiBHTFRGUGFyc2VyLCBvcHRpb25zPzogVlJNTG9va0F0TG9hZGVyUGx1Z2luT3B0aW9ucykge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgdGhpcy5oZWxwZXJSb290ID0gb3B0aW9ucz8uaGVscGVyUm9vdDtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlclJvb3QoZ2x0ZjogR0xURik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHZybUh1bWFub2lkID0gZ2x0Zi51c2VyRGF0YS52cm1IdW1hbm9pZCBhcyBWUk1IdW1hbm9pZCB8IHVuZGVmaW5lZDtcblxuICAgIC8vIGV4cGxpY2l0bHkgZGlzdGluZ3Vpc2ggbnVsbCBhbmQgdW5kZWZpbmVkXG4gICAgLy8gc2luY2UgdnJtSHVtYW5vaWQgbWlnaHQgYmUgbnVsbCBhcyBhIHJlc3VsdFxuICAgIGlmICh2cm1IdW1hbm9pZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodnJtSHVtYW5vaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWUk1Mb29rQXRMb2FkZXJQbHVnaW46IHZybUh1bWFub2lkIGlzIHVuZGVmaW5lZC4gVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW4gaGF2ZSB0byBiZSB1c2VkIGZpcnN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgdnJtRXhwcmVzc2lvbk1hbmFnZXIgPSBnbHRmLnVzZXJEYXRhLnZybUV4cHJlc3Npb25NYW5hZ2VyIGFzIFZSTUV4cHJlc3Npb25NYW5hZ2VyIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKHZybUV4cHJlc3Npb25NYW5hZ2VyID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh2cm1FeHByZXNzaW9uTWFuYWdlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdWUk1Mb29rQXRMb2FkZXJQbHVnaW46IHZybUV4cHJlc3Npb25NYW5hZ2VyIGlzIHVuZGVmaW5lZC4gVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbiBoYXZlIHRvIGJlIHVzZWQgZmlyc3QnLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBnbHRmLnVzZXJEYXRhLnZybUxvb2tBdCA9IGF3YWl0IHRoaXMuX2ltcG9ydChnbHRmLCB2cm1IdW1hbm9pZCwgdnJtRXhwcmVzc2lvbk1hbmFnZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhIHtAbGluayBWUk1Mb29rQXR9IGZyb20gYSBWUk0uXG4gICAqXG4gICAqIEBwYXJhbSBnbHRmIEEgcGFyc2VkIHJlc3VsdCBvZiBHTFRGIHRha2VuIGZyb20gR0xURkxvYWRlclxuICAgKiBAcGFyYW0gaHVtYW5vaWQgQSB7QGxpbmsgVlJNSHVtYW5vaWR9IGluc3RhbmNlIHRoYXQgcmVwcmVzZW50cyB0aGUgVlJNXG4gICAqIEBwYXJhbSBleHByZXNzaW9ucyBBIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0gaW5zdGFuY2UgdGhhdCByZXByZXNlbnRzIHRoZSBWUk1cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2ltcG9ydChcbiAgICBnbHRmOiBHTFRGLFxuICAgIGh1bWFub2lkOiBWUk1IdW1hbm9pZCB8IG51bGwsXG4gICAgZXhwcmVzc2lvbnM6IFZSTUV4cHJlc3Npb25NYW5hZ2VyIHwgbnVsbCxcbiAgKTogUHJvbWlzZTxWUk1Mb29rQXQgfCBudWxsPiB7XG4gICAgaWYgKGh1bWFub2lkID09IG51bGwgfHwgZXhwcmVzc2lvbnMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdjFSZXN1bHQgPSBhd2FpdCB0aGlzLl92MUltcG9ydChnbHRmLCBodW1hbm9pZCwgZXhwcmVzc2lvbnMpO1xuICAgIGlmICh2MVJlc3VsdCkge1xuICAgICAgcmV0dXJuIHYxUmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHYwUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjBJbXBvcnQoZ2x0ZiwgaHVtYW5vaWQsIGV4cHJlc3Npb25zKTtcbiAgICBpZiAodjBSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MFJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YxSW1wb3J0KFxuICAgIGdsdGY6IEdMVEYsXG4gICAgaHVtYW5vaWQ6IFZSTUh1bWFub2lkLFxuICAgIGV4cHJlc3Npb25zOiBWUk1FeHByZXNzaW9uTWFuYWdlcixcbiAgKTogUHJvbWlzZTxWUk1Mb29rQXQgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IGlzVlJNVXNlZCA9IGpzb24uZXh0ZW5zaW9uc1VzZWQ/LmluZGV4T2YoJ1ZSTUNfdnJtJykgIT09IC0xO1xuICAgIGlmICghaXNWUk1Vc2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbnNpb24gPSBqc29uLmV4dGVuc2lvbnM/LlsnVlJNQ192cm0nXSBhcyBWMVZSTVNjaGVtYS5WUk1DVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVjVmVyc2lvbiA9IGV4dGVuc2lvbi5zcGVjVmVyc2lvbjtcbiAgICBpZiAoIVBPU1NJQkxFX1NQRUNfVkVSU0lPTlMuaGFzKHNwZWNWZXJzaW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKGBWUk1Mb29rQXRMb2FkZXJQbHVnaW46IFVua25vd24gVlJNQ192cm0gc3BlY1ZlcnNpb24gXCIke3NwZWNWZXJzaW9ufVwiYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFMb29rQXQgPSBleHRlbnNpb24ubG9va0F0O1xuICAgIGlmICghc2NoZW1hTG9va0F0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0T3V0cHV0U2NhbGUgPSBzY2hlbWFMb29rQXQudHlwZSA9PT0gJ2V4cHJlc3Npb24nID8gMS4wIDogMTAuMDtcblxuICAgIGNvbnN0IG1hcEhJID0gdGhpcy5fdjFJbXBvcnRSYW5nZU1hcChzY2hlbWFMb29rQXQucmFuZ2VNYXBIb3Jpem9udGFsSW5uZXIsIGRlZmF1bHRPdXRwdXRTY2FsZSk7XG4gICAgY29uc3QgbWFwSE8gPSB0aGlzLl92MUltcG9ydFJhbmdlTWFwKHNjaGVtYUxvb2tBdC5yYW5nZU1hcEhvcml6b250YWxPdXRlciwgZGVmYXVsdE91dHB1dFNjYWxlKTtcbiAgICBjb25zdCBtYXBWRCA9IHRoaXMuX3YxSW1wb3J0UmFuZ2VNYXAoc2NoZW1hTG9va0F0LnJhbmdlTWFwVmVydGljYWxEb3duLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuICAgIGNvbnN0IG1hcFZVID0gdGhpcy5fdjFJbXBvcnRSYW5nZU1hcChzY2hlbWFMb29rQXQucmFuZ2VNYXBWZXJ0aWNhbFVwLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuXG4gICAgbGV0IGFwcGxpZXI7XG5cbiAgICBpZiAoc2NoZW1hTG9va0F0LnR5cGUgPT09ICdleHByZXNzaW9uJykge1xuICAgICAgYXBwbGllciA9IG5ldyBWUk1Mb29rQXRFeHByZXNzaW9uQXBwbGllcihleHByZXNzaW9ucywgbWFwSEksIG1hcEhPLCBtYXBWRCwgbWFwVlUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBsaWVyID0gbmV3IFZSTUxvb2tBdEJvbmVBcHBsaWVyKGh1bWFub2lkLCBtYXBISSwgbWFwSE8sIG1hcFZELCBtYXBWVSk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9va0F0ID0gdGhpcy5faW1wb3J0TG9va0F0KGh1bWFub2lkLCBhcHBsaWVyKTtcblxuICAgIGxvb2tBdC5vZmZzZXRGcm9tSGVhZEJvbmUuZnJvbUFycmF5KHNjaGVtYUxvb2tBdC5vZmZzZXRGcm9tSGVhZEJvbmUgPz8gWzAuMCwgMC4wNiwgMC4wXSk7XG5cbiAgICByZXR1cm4gbG9va0F0O1xuICB9XG5cbiAgcHJpdmF0ZSBfdjFJbXBvcnRSYW5nZU1hcChcbiAgICBzY2hlbWFSYW5nZU1hcDogVjFWUk1TY2hlbWEuTG9va0F0UmFuZ2VNYXAgfCB1bmRlZmluZWQsXG4gICAgZGVmYXVsdE91dHB1dFNjYWxlOiBudW1iZXIsXG4gICk6IFZSTUxvb2tBdFJhbmdlTWFwIHtcbiAgICBsZXQgaW5wdXRNYXhWYWx1ZSA9IHNjaGVtYVJhbmdlTWFwPy5pbnB1dE1heFZhbHVlID8/IDkwLjA7XG4gICAgY29uc3Qgb3V0cHV0U2NhbGUgPSBzY2hlbWFSYW5nZU1hcD8ub3V0cHV0U2NhbGUgPz8gZGVmYXVsdE91dHB1dFNjYWxlO1xuXG4gICAgLy8gSXQgbWlnaHQgY2F1c2UgTmFOIHdoZW4gYGlucHV0TWF4VmFsdWVgIGlzIHRvbyBzbWFsbFxuICAgIC8vIHdoaWNoIG1ha2VzIHRoZSBtZXNoIG9mIHRoZSBoZWFkIGRpc2FwcGVhclxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3BpeGl2L3RocmVlLXZybS9pc3N1ZXMvMTIwMVxuICAgIGlmIChpbnB1dE1heFZhbHVlIDwgSU5QVVRfTUFYX1ZBTFVFX01JTklNVU0pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1ZSTUxvb2tBdExvYWRlclBsdWdpbjogaW5wdXRNYXhWYWx1ZSBvZiBhIHJhbmdlIG1hcCBpcyB0b28gc21hbGwuIENvbnNpZGVyIHJldmlld2luZyB0aGUgcmFuZ2UgbWFwIScsXG4gICAgICApO1xuICAgICAgaW5wdXRNYXhWYWx1ZSA9IElOUFVUX01BWF9WQUxVRV9NSU5JTVVNO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVlJNTG9va0F0UmFuZ2VNYXAoaW5wdXRNYXhWYWx1ZSwgb3V0cHV0U2NhbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjBJbXBvcnQoXG4gICAgZ2x0ZjogR0xURixcbiAgICBodW1hbm9pZDogVlJNSHVtYW5vaWQsXG4gICAgZXhwcmVzc2lvbnM6IFZSTUV4cHJlc3Npb25NYW5hZ2VyLFxuICApOiBQcm9taXNlPFZSTUxvb2tBdCB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgdnJtRXh0ID0ganNvbi5leHRlbnNpb25zPy5WUk0gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdnJtRXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFGaXJzdFBlcnNvbiA9IHZybUV4dC5maXJzdFBlcnNvbjtcbiAgICBpZiAoIXNjaGVtYUZpcnN0UGVyc29uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0T3V0cHV0U2NhbGUgPSBzY2hlbWFGaXJzdFBlcnNvbi5sb29rQXRUeXBlTmFtZSA9PT0gJ0JsZW5kU2hhcGUnID8gMS4wIDogMTAuMDtcblxuICAgIGNvbnN0IG1hcEhJID0gdGhpcy5fdjBJbXBvcnREZWdyZWVNYXAoc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0SG9yaXpvbnRhbElubmVyLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuICAgIGNvbnN0IG1hcEhPID0gdGhpcy5fdjBJbXBvcnREZWdyZWVNYXAoc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0SG9yaXpvbnRhbE91dGVyLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuICAgIGNvbnN0IG1hcFZEID0gdGhpcy5fdjBJbXBvcnREZWdyZWVNYXAoc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0VmVydGljYWxEb3duLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuICAgIGNvbnN0IG1hcFZVID0gdGhpcy5fdjBJbXBvcnREZWdyZWVNYXAoc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0VmVydGljYWxVcCwgZGVmYXVsdE91dHB1dFNjYWxlKTtcblxuICAgIGxldCBhcHBsaWVyO1xuXG4gICAgaWYgKHNjaGVtYUZpcnN0UGVyc29uLmxvb2tBdFR5cGVOYW1lID09PSAnQmxlbmRTaGFwZScpIHtcbiAgICAgIGFwcGxpZXIgPSBuZXcgVlJNTG9va0F0RXhwcmVzc2lvbkFwcGxpZXIoZXhwcmVzc2lvbnMsIG1hcEhJLCBtYXBITywgbWFwVkQsIG1hcFZVKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwbGllciA9IG5ldyBWUk1Mb29rQXRCb25lQXBwbGllcihodW1hbm9pZCwgbWFwSEksIG1hcEhPLCBtYXBWRCwgbWFwVlUpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvb2tBdCA9IHRoaXMuX2ltcG9ydExvb2tBdChodW1hbm9pZCwgYXBwbGllcik7XG5cbiAgICBpZiAoc2NoZW1hRmlyc3RQZXJzb24uZmlyc3RQZXJzb25Cb25lT2Zmc2V0KSB7XG4gICAgICBsb29rQXQub2Zmc2V0RnJvbUhlYWRCb25lLnNldChcbiAgICAgICAgc2NoZW1hRmlyc3RQZXJzb24uZmlyc3RQZXJzb25Cb25lT2Zmc2V0LnggPz8gMC4wLFxuICAgICAgICBzY2hlbWFGaXJzdFBlcnNvbi5maXJzdFBlcnNvbkJvbmVPZmZzZXQueSA/PyAwLjA2LFxuICAgICAgICAtKHNjaGVtYUZpcnN0UGVyc29uLmZpcnN0UGVyc29uQm9uZU9mZnNldC56ID8/IDAuMCksXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb29rQXQub2Zmc2V0RnJvbUhlYWRCb25lLnNldCgwLjAsIDAuMDYsIDAuMCk7XG4gICAgfVxuXG4gICAgLy8gVlJNIDAuMCBhcmUgZmFjaW5nIFotIGluc3RlYWQgb2YgWitcbiAgICBsb29rQXQuZmFjZUZyb250LnNldCgwLjAsIDAuMCwgLTEuMCk7XG5cbiAgICBpZiAoYXBwbGllciBpbnN0YW5jZW9mIFZSTUxvb2tBdEJvbmVBcHBsaWVyKSB7XG4gICAgICBhcHBsaWVyLmZhY2VGcm9udC5zZXQoMC4wLCAwLjAsIC0xLjApO1xuICAgIH1cblxuICAgIHJldHVybiBsb29rQXQ7XG4gIH1cblxuICBwcml2YXRlIF92MEltcG9ydERlZ3JlZU1hcChcbiAgICBzY2hlbWFEZWdyZWVNYXA6IFYwVlJNLkZpcnN0UGVyc29uRGVncmVlTWFwIHwgdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRPdXRwdXRTY2FsZTogbnVtYmVyLFxuICApOiBWUk1Mb29rQXRSYW5nZU1hcCB7XG4gICAgY29uc3QgY3VydmUgPSBzY2hlbWFEZWdyZWVNYXA/LmN1cnZlO1xuICAgIGlmIChKU09OLnN0cmluZ2lmeShjdXJ2ZSkgIT09ICdbMCwwLDAsMSwxLDEsMSwwXScpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ3VydmVzIG9mIExvb2tBdERlZ3JlZU1hcCBkZWZpbmVkIGluIFZSTSAwLjAgYXJlIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG5cbiAgICBsZXQgeFJhbmdlID0gc2NoZW1hRGVncmVlTWFwPy54UmFuZ2UgPz8gOTAuMDtcbiAgICBjb25zdCB5UmFuZ2UgPSBzY2hlbWFEZWdyZWVNYXA/LnlSYW5nZSA/PyBkZWZhdWx0T3V0cHV0U2NhbGU7XG5cbiAgICAvLyBJdCBtaWdodCBjYXVzZSBOYU4gd2hlbiBgeFJhbmdlYCBpcyB0b28gc21hbGxcbiAgICAvLyB3aGljaCBtYWtlcyB0aGUgbWVzaCBvZiB0aGUgaGVhZCBkaXNhcHBlYXJcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9waXhpdi90aHJlZS12cm0vaXNzdWVzLzEyMDFcbiAgICBpZiAoeFJhbmdlIDwgSU5QVVRfTUFYX1ZBTFVFX01JTklNVU0pIHtcbiAgICAgIGNvbnNvbGUud2FybignVlJNTG9va0F0TG9hZGVyUGx1Z2luOiB4UmFuZ2Ugb2YgYSBkZWdyZWUgbWFwIGlzIHRvbyBzbWFsbC4gQ29uc2lkZXIgcmV2aWV3aW5nIHRoZSBkZWdyZWUgbWFwIScpO1xuICAgICAgeFJhbmdlID0gSU5QVVRfTUFYX1ZBTFVFX01JTklNVU07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBWUk1Mb29rQXRSYW5nZU1hcCh4UmFuZ2UsIHlSYW5nZSk7XG4gIH1cblxuICBwcml2YXRlIF9pbXBvcnRMb29rQXQoaHVtYW5vaWQ6IFZSTUh1bWFub2lkLCBhcHBsaWVyOiBWUk1Mb29rQXRBcHBsaWVyKTogVlJNTG9va0F0IHtcbiAgICBjb25zdCBsb29rQXQgPSBuZXcgVlJNTG9va0F0KGh1bWFub2lkLCBhcHBsaWVyKTtcblxuICAgIGlmICh0aGlzLmhlbHBlclJvb3QpIHtcbiAgICAgIGNvbnN0IGhlbHBlciA9IG5ldyBWUk1Mb29rQXRIZWxwZXIobG9va0F0KTtcbiAgICAgIHRoaXMuaGVscGVyUm9vdC5hZGQoaGVscGVyKTtcbiAgICAgIGhlbHBlci5yZW5kZXJPcmRlciA9IHRoaXMuaGVscGVyUm9vdC5yZW5kZXJPcmRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9va0F0O1xuICB9XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHR5cGUgb2YgYXBwbGllci5cbiAqL1xuZXhwb3J0IGNvbnN0IFZSTUxvb2tBdFR5cGVOYW1lID0ge1xuICBCb25lOiAnYm9uZScsXG4gIEV4cHJlc3Npb246ICdleHByZXNzaW9uJyxcbn07XG5cbmV4cG9ydCB0eXBlIFZSTUxvb2tBdFR5cGVOYW1lID0gKHR5cGVvZiBWUk1Mb29rQXRUeXBlTmFtZSlba2V5b2YgdHlwZW9mIFZSTUxvb2tBdFR5cGVOYW1lXTtcbiIsICJpbXBvcnQgdHlwZSB7IEdMVEYsIEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB0eXBlIHsgVlJNME1ldGEgfSBmcm9tICcuL1ZSTTBNZXRhJztcbmltcG9ydCB0eXBlIHsgVlJNMU1ldGEgfSBmcm9tICcuL1ZSTTFNZXRhJztcbmltcG9ydCB0eXBlIHsgVlJNTWV0YSB9IGZyb20gJy4vVlJNTWV0YSc7XG5pbXBvcnQgdHlwZSB7IFZSTU1ldGFMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9WUk1NZXRhTG9hZGVyUGx1Z2luT3B0aW9ucyc7XG5pbXBvcnQgdHlwZSAqIGFzIFYwVlJNIGZyb20gJ0BwaXhpdi90eXBlcy12cm0tMC4wJztcbmltcG9ydCB0eXBlICogYXMgVjFWUk1TY2hlbWEgZnJvbSAnQHBpeGl2L3R5cGVzLXZybWMtdnJtLTEuMCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyByZXNvbHZlVVJMIH0gZnJvbSAnLi4vdXRpbHMvcmVzb2x2ZVVSTCc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TID0gbmV3IFNldChbJzEuMCcsICcxLjAtYmV0YSddKTtcblxuLyoqXG4gKiBBIHBsdWdpbiBvZiBHTFRGTG9hZGVyIHRoYXQgaW1wb3J0cyBhIHtAbGluayBWUk0xTWV0YX0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxuICovXG5leHBvcnQgY2xhc3MgVlJNTWV0YUxvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIC8qKlxuICAgKiBJZiBgZmFsc2VgLCBpdCB3b24ndCBsb2FkIGl0cyB0aHVtYm5haWwgaW1hZ2UgKHtAbGluayBWUk0xTWV0YS50aHVtYm5haWxJbWFnZX0pLlxuICAgKiBgZmFsc2VgIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBwdWJsaWMgbmVlZFRodW1ibmFpbEltYWdlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgbGljZW5zZSB1cmxzLlxuICAgKiBUaGlzIG1ldGEgbG9hZGVyIHdpbGwgYWNjZXB0IHRoZXNlIGBsaWNlbnNlVXJsYHMuXG4gICAqIE90aGVyd2lzZSBpdCB3b24ndCBiZSBsb2FkZWQuXG4gICAqL1xuICBwdWJsaWMgYWNjZXB0TGljZW5zZVVybHM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGl0IHNob3VsZCBhY2NlcHQgVlJNMC4wIG1ldGEgb3Igbm90LlxuICAgKiBOb3RlIHRoYXQgaXQgbWlnaHQgbG9hZCB7QGxpbmsgVlJNME1ldGF9IGluc3RlYWQgb2Yge0BsaW5rIFZSTTFNZXRhfSB3aGVuIHRoaXMgaXMgYHRydWVgLlxuICAgKiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICovXG4gIHB1YmxpYyBhY2NlcHRWME1ldGE6IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICByZXR1cm4gJ1ZSTU1ldGFMb2FkZXJQbHVnaW4nO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlciwgb3B0aW9ucz86IFZSTU1ldGFMb2FkZXJQbHVnaW5PcHRpb25zKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cbiAgICB0aGlzLm5lZWRUaHVtYm5haWxJbWFnZSA9IG9wdGlvbnM/Lm5lZWRUaHVtYm5haWxJbWFnZSA/PyBmYWxzZTtcbiAgICB0aGlzLmFjY2VwdExpY2Vuc2VVcmxzID0gb3B0aW9ucz8uYWNjZXB0TGljZW5zZVVybHMgPz8gWydodHRwczovL3ZybS5kZXYvbGljZW5zZXMvMS4wLyddO1xuICAgIHRoaXMuYWNjZXB0VjBNZXRhID0gb3B0aW9ucz8uYWNjZXB0VjBNZXRhID8/IHRydWU7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBnbHRmLnVzZXJEYXRhLnZybU1ldGEgPSBhd2FpdCB0aGlzLl9pbXBvcnQoZ2x0Zik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9pbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNTWV0YSB8IG51bGw+IHtcbiAgICBjb25zdCB2MVJlc3VsdCA9IGF3YWl0IHRoaXMuX3YxSW1wb3J0KGdsdGYpO1xuICAgIGlmICh2MVJlc3VsdCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdjFSZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdjBSZXN1bHQgPSBhd2FpdCB0aGlzLl92MEltcG9ydChnbHRmKTtcbiAgICBpZiAodjBSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHYwUmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjFJbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNMU1ldGEgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IGlzVlJNVXNlZCA9IGpzb24uZXh0ZW5zaW9uc1VzZWQ/LmluZGV4T2YoJ1ZSTUNfdnJtJykgIT09IC0xO1xuICAgIGlmICghaXNWUk1Vc2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbnNpb24gPSBqc29uLmV4dGVuc2lvbnM/LlsnVlJNQ192cm0nXSBhcyBWMVZSTVNjaGVtYS5WUk1DVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmIChleHRlbnNpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlY1ZlcnNpb24gPSBleHRlbnNpb24uc3BlY1ZlcnNpb247XG4gICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TLmhhcyhzcGVjVmVyc2lvbikpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVlJNTWV0YUxvYWRlclBsdWdpbjogVW5rbm93biBWUk1DX3ZybSBzcGVjVmVyc2lvbiBcIiR7c3BlY1ZlcnNpb259XCJgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYU1ldGEgPSBleHRlbnNpb24ubWV0YTtcbiAgICBpZiAoIXNjaGVtYU1ldGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHRocm93IGFuIGVycm9yIGlmIGFjY2VwdFYwTWV0YSBpcyBmYWxzZVxuICAgIGNvbnN0IGxpY2Vuc2VVcmwgPSBzY2hlbWFNZXRhLmxpY2Vuc2VVcmw7XG4gICAgY29uc3QgYWNjZXB0TGljZW5zZVVybHNTZXQgPSBuZXcgU2V0KHRoaXMuYWNjZXB0TGljZW5zZVVybHMpO1xuICAgIGlmICghYWNjZXB0TGljZW5zZVVybHNTZXQuaGFzKGxpY2Vuc2VVcmwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFZSTU1ldGFMb2FkZXJQbHVnaW46IFRoZSBsaWNlbnNlIHVybCBcIiR7bGljZW5zZVVybH1cIiBpcyBub3QgYWNjZXB0ZWRgKTtcbiAgICB9XG5cbiAgICBsZXQgdGh1bWJuYWlsSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMubmVlZFRodW1ibmFpbEltYWdlICYmIHNjaGVtYU1ldGEudGh1bWJuYWlsSW1hZ2UgIT0gbnVsbCkge1xuICAgICAgdGh1bWJuYWlsSW1hZ2UgPSAoYXdhaXQgdGhpcy5fZXh0cmFjdEdMVEZJbWFnZShzY2hlbWFNZXRhLnRodW1ibmFpbEltYWdlKSkgPz8gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXRhVmVyc2lvbjogJzEnLFxuICAgICAgbmFtZTogc2NoZW1hTWV0YS5uYW1lLFxuICAgICAgdmVyc2lvbjogc2NoZW1hTWV0YS52ZXJzaW9uLFxuICAgICAgYXV0aG9yczogc2NoZW1hTWV0YS5hdXRob3JzLFxuICAgICAgY29weXJpZ2h0SW5mb3JtYXRpb246IHNjaGVtYU1ldGEuY29weXJpZ2h0SW5mb3JtYXRpb24sXG4gICAgICBjb250YWN0SW5mb3JtYXRpb246IHNjaGVtYU1ldGEuY29udGFjdEluZm9ybWF0aW9uLFxuICAgICAgcmVmZXJlbmNlczogc2NoZW1hTWV0YS5yZWZlcmVuY2VzLFxuICAgICAgdGhpcmRQYXJ0eUxpY2Vuc2VzOiBzY2hlbWFNZXRhLnRoaXJkUGFydHlMaWNlbnNlcyxcbiAgICAgIHRodW1ibmFpbEltYWdlLFxuICAgICAgbGljZW5zZVVybDogc2NoZW1hTWV0YS5saWNlbnNlVXJsLFxuICAgICAgYXZhdGFyUGVybWlzc2lvbjogc2NoZW1hTWV0YS5hdmF0YXJQZXJtaXNzaW9uLFxuICAgICAgYWxsb3dFeGNlc3NpdmVseVZpb2xlbnRVc2FnZTogc2NoZW1hTWV0YS5hbGxvd0V4Y2Vzc2l2ZWx5VmlvbGVudFVzYWdlLFxuICAgICAgYWxsb3dFeGNlc3NpdmVseVNleHVhbFVzYWdlOiBzY2hlbWFNZXRhLmFsbG93RXhjZXNzaXZlbHlTZXh1YWxVc2FnZSxcbiAgICAgIGNvbW1lcmNpYWxVc2FnZTogc2NoZW1hTWV0YS5jb21tZXJjaWFsVXNhZ2UsXG4gICAgICBhbGxvd1BvbGl0aWNhbE9yUmVsaWdpb3VzVXNhZ2U6IHNjaGVtYU1ldGEuYWxsb3dQb2xpdGljYWxPclJlbGlnaW91c1VzYWdlLFxuICAgICAgYWxsb3dBbnRpc29jaWFsT3JIYXRlVXNhZ2U6IHNjaGVtYU1ldGEuYWxsb3dBbnRpc29jaWFsT3JIYXRlVXNhZ2UsXG4gICAgICBjcmVkaXROb3RhdGlvbjogc2NoZW1hTWV0YS5jcmVkaXROb3RhdGlvbixcbiAgICAgIGFsbG93UmVkaXN0cmlidXRpb246IHNjaGVtYU1ldGEuYWxsb3dSZWRpc3RyaWJ1dGlvbixcbiAgICAgIG1vZGlmaWNhdGlvbjogc2NoZW1hTWV0YS5tb2RpZmljYXRpb24sXG4gICAgICBvdGhlckxpY2Vuc2VVcmw6IHNjaGVtYU1ldGEub3RoZXJMaWNlbnNlVXJsLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MEltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk0wTWV0YSB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgdnJtRXh0ID0ganNvbi5leHRlbnNpb25zPy5WUk0gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdnJtRXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFNZXRhID0gdnJtRXh0Lm1ldGE7XG4gICAgaWYgKCFzY2hlbWFNZXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBpZiBhY2NlcHRWME1ldGEgaXMgZmFsc2VcbiAgICBpZiAoIXRoaXMuYWNjZXB0VjBNZXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZSTU1ldGFMb2FkZXJQbHVnaW46IEF0dGVtcHRlZCB0byBsb2FkIFZSTTAuMCBtZXRhIGJ1dCBhY2NlcHRWME1ldGEgaXMgZmFsc2UnKTtcbiAgICB9XG5cbiAgICAvLyBsb2FkIHRodW1ibmFpbCB0ZXh0dXJlXG4gICAgbGV0IHRleHR1cmU6IFRIUkVFLlRleHR1cmUgfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLm5lZWRUaHVtYm5haWxJbWFnZSAmJiBzY2hlbWFNZXRhLnRleHR1cmUgIT0gbnVsbCAmJiBzY2hlbWFNZXRhLnRleHR1cmUgIT09IC0xKSB7XG4gICAgICB0ZXh0dXJlID0gYXdhaXQgdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgndGV4dHVyZScsIHNjaGVtYU1ldGEudGV4dHVyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1ldGFWZXJzaW9uOiAnMCcsXG4gICAgICBhbGxvd2VkVXNlck5hbWU6IHNjaGVtYU1ldGEuYWxsb3dlZFVzZXJOYW1lLFxuICAgICAgYXV0aG9yOiBzY2hlbWFNZXRhLmF1dGhvcixcbiAgICAgIGNvbW1lcmNpYWxVc3NhZ2VOYW1lOiBzY2hlbWFNZXRhLmNvbW1lcmNpYWxVc3NhZ2VOYW1lLFxuICAgICAgY29udGFjdEluZm9ybWF0aW9uOiBzY2hlbWFNZXRhLmNvbnRhY3RJbmZvcm1hdGlvbixcbiAgICAgIGxpY2Vuc2VOYW1lOiBzY2hlbWFNZXRhLmxpY2Vuc2VOYW1lLFxuICAgICAgb3RoZXJMaWNlbnNlVXJsOiBzY2hlbWFNZXRhLm90aGVyTGljZW5zZVVybCxcbiAgICAgIG90aGVyUGVybWlzc2lvblVybDogc2NoZW1hTWV0YS5vdGhlclBlcm1pc3Npb25VcmwsXG4gICAgICByZWZlcmVuY2U6IHNjaGVtYU1ldGEucmVmZXJlbmNlLFxuICAgICAgc2V4dWFsVXNzYWdlTmFtZTogc2NoZW1hTWV0YS5zZXh1YWxVc3NhZ2VOYW1lLFxuICAgICAgdGV4dHVyZTogdGV4dHVyZSA/PyB1bmRlZmluZWQsXG4gICAgICB0aXRsZTogc2NoZW1hTWV0YS50aXRsZSxcbiAgICAgIHZlcnNpb246IHNjaGVtYU1ldGEudmVyc2lvbixcbiAgICAgIHZpb2xlbnRVc3NhZ2VOYW1lOiBzY2hlbWFNZXRhLnZpb2xlbnRVc3NhZ2VOYW1lLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9leHRyYWN0R0xURkltYWdlKGluZGV4OiBudW1iZXIpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIGNvbnN0IHNvdXJjZSA9IGpzb24uaW1hZ2VzPy5baW5kZXhdO1xuXG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBWUk1NZXRhTG9hZGVyUGx1Z2luOiBBdHRlbXB0IHRvIHVzZSBpbWFnZXNbJHtpbmRleH1dIG9mIGdsVEYgYXMgYSB0aHVtYm5haWwgYnV0IHRoZSBpbWFnZSBkb2Vzbid0IGV4aXN0YCxcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9yMTI0L2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMjTDI0NjdcblxuICAgIC8vIGBzb3VyY2UudXJpYCBtaWdodCBiZSBhIHJlZmVyZW5jZSB0byBhIGZpbGVcbiAgICBsZXQgc291cmNlVVJJOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBzb3VyY2UudXJpO1xuXG4gICAgLy8gTG9hZCB0aGUgYmluYXJ5IGFzIGEgYmxvYlxuICAgIGlmIChzb3VyY2UuYnVmZmVyVmlldyAhPSBudWxsKSB7XG4gICAgICBjb25zdCBidWZmZXJWaWV3ID0gYXdhaXQgdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgnYnVmZmVyVmlldycsIHNvdXJjZS5idWZmZXJWaWV3KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyVmlld10sIHsgdHlwZTogc291cmNlLm1pbWVUeXBlIH0pO1xuICAgICAgc291cmNlVVJJID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlVVJJID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFZSTU1ldGFMb2FkZXJQbHVnaW46IEF0dGVtcHQgdG8gdXNlIGltYWdlc1ske2luZGV4fV0gb2YgZ2xURiBhcyBhIHRodW1ibmFpbCBidXQgdGhlIGltYWdlIGNvdWxkbid0IGxvYWQgcHJvcGVybHlgLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5JbWFnZUxvYWRlcigpO1xuICAgIHJldHVybiBhd2FpdCBsb2FkZXIubG9hZEFzeW5jKHJlc29sdmVVUkwoc291cmNlVVJJLCAodGhpcy5wYXJzZXIgYXMgYW55KS5vcHRpb25zLnBhdGgpKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgY29uc29sZS53YXJuKCdWUk1NZXRhTG9hZGVyUGx1Z2luOiBGYWlsZWQgdG8gbG9hZCBhIHRodW1ibmFpbCBpbWFnZScpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH1cbn1cbiIsICIvKipcbiAqIFlvaW5rZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsOiBzdHJpbmcsIHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIEludmFsaWQgVVJMXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyB8fCB1cmwgPT09ICcnKSByZXR1cm4gJyc7XG5cbiAgLy8gSG9zdCBSZWxhdGl2ZSBVUkxcbiAgaWYgKC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QocGF0aCkgJiYgL15cXC8vLnRlc3QodXJsKSkge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoLyheaHR0cHM/OlxcL1xcL1teL10rKS4qL2ksICckMScpO1xuICB9XG5cbiAgLy8gQWJzb2x1dGUgVVJMIGh0dHA6Ly8saHR0cHM6Ly8sLy9cbiAgaWYgKC9eKGh0dHBzPzopP1xcL1xcLy9pLnRlc3QodXJsKSkgcmV0dXJuIHVybDtcblxuICAvLyBEYXRhIFVSSVxuICBpZiAoL15kYXRhOi4qLC4qJC9pLnRlc3QodXJsKSkgcmV0dXJuIHVybDtcblxuICAvLyBCbG9iIFVSTFxuICBpZiAoL15ibG9iOi4qJC9pLnRlc3QodXJsKSkgcmV0dXJuIHVybDtcblxuICAvLyBSZWxhdGl2ZSBVUkxcbiAgcmV0dXJuIHBhdGggKyB1cmw7XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbk1hbmFnZXIgfSBmcm9tICcuL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB7IFZSTUZpcnN0UGVyc29uIH0gZnJvbSAnLi9maXJzdFBlcnNvbi9WUk1GaXJzdFBlcnNvbic7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4vaHVtYW5vaWQvVlJNSHVtYW5vaWQnO1xuaW1wb3J0IHsgVlJNTG9va0F0IH0gZnJvbSAnLi9sb29rQXQvVlJNTG9va0F0JztcbmltcG9ydCB7IFZSTU1ldGEgfSBmcm9tICcuL21ldGEvVlJNTWV0YSc7XG5pbXBvcnQgeyBWUk1Db3JlUGFyYW1ldGVycyB9IGZyb20gJy4vVlJNQ29yZVBhcmFtZXRlcnMnO1xuXG4vKipcbiAqIEEgY2xhc3MgdGhhdCByZXByZXNlbnRzIGEgc2luZ2xlIFZSTSBtb2RlbC5cbiAqIFRoaXMgY2xhc3Mgb25seSBpbmNsdWRlcyBjb3JlIHNwZWMgb2YgdGhlIFZSTSAoYFZSTUNfdnJtYCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1Db3JlIHtcbiAgLyoqXG4gICAqIGBUSFJFRS5Hcm91cGAgdGhhdCBjb250YWlucyB0aGUgZW50aXJlIFZSTS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzY2VuZTogVEhSRUUuR3JvdXA7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIG1ldGEgZmllbGRzIG9mIHRoZSBWUk0uXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIHJlZmVyIHRoZXNlIGxpY2Vuc2UgZmllbGRzIGJlZm9yZSB1c2UgeW91ciBWUk1zLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG1ldGE6IFZSTU1ldGE7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIHtAbGluayBWUk1IdW1hbm9pZH0gb2YgdGhlIFZSTS5cbiAgICogWW91IGNhbiBjb250cm9sIGVhY2ggYm9uZXMgdXNpbmcge0BsaW5rIFZSTUh1bWFub2lkLmdldE5vcm1hbGl6ZWRCb25lTm9kZX0gb3Ige0BsaW5rIFZSTUh1bWFub2lkLmdldFJhd0JvbmVOb2RlfS5cbiAgICpcbiAgICogQFRPRE8gQWRkIGEgbGluayB0byBWUk0gc3BlY1xuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGh1bWFub2lkOiBWUk1IdW1hbm9pZDtcblxuICAvKipcbiAgICogQ29udGFpbnMge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfSBvZiB0aGUgVlJNLlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byBjb250cm9sIHRoZXNlIGZhY2lhbCBleHByZXNzaW9ucyB2aWEge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyLnNldFZhbHVlfS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBleHByZXNzaW9uTWFuYWdlcj86IFZSTUV4cHJlc3Npb25NYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyB7QGxpbmsgVlJNRmlyc3RQZXJzb259IG9mIHRoZSBWUk0uXG4gICAqIFZSTUZpcnN0UGVyc29uIGlzIG1vc3RseSB1c2VkIGZvciBtZXNoIGN1bGxpbmcgZm9yIGZpcnN0IHBlcnNvbiB2aWV3LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGZpcnN0UGVyc29uPzogVlJNRmlyc3RQZXJzb247XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIHtAbGluayBWUk1Mb29rQXR9IG9mIHRoZSBWUk0uXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgVlJNTG9va0F0LnRhcmdldH0gdG8gY29udHJvbCB0aGUgZXllIGRpcmVjdGlvbiBvZiB5b3VyIFZSTXMuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbG9va0F0PzogVlJNTG9va0F0O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgVlJNIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIFtbVlJNUGFyYW1ldGVyc11dIHRoYXQgcmVwcmVzZW50cyBjb21wb25lbnRzIG9mIHRoZSBWUk1cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJhbXM6IFZSTUNvcmVQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zY2VuZSA9IHBhcmFtcy5zY2VuZTtcbiAgICB0aGlzLm1ldGEgPSBwYXJhbXMubWV0YTtcbiAgICB0aGlzLmh1bWFub2lkID0gcGFyYW1zLmh1bWFub2lkO1xuICAgIHRoaXMuZXhwcmVzc2lvbk1hbmFnZXIgPSBwYXJhbXMuZXhwcmVzc2lvbk1hbmFnZXI7XG4gICAgdGhpcy5maXJzdFBlcnNvbiA9IHBhcmFtcy5maXJzdFBlcnNvbjtcbiAgICB0aGlzLmxvb2tBdCA9IHBhcmFtcy5sb29rQXQ7XG4gIH1cblxuICAvKipcbiAgICogKipZb3UgbmVlZCB0byBjYWxsIHRoaXMgb24geW91ciB1cGRhdGUgbG9vcC4qKlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgZXZlcnkgVlJNIGNvbXBvbmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBkZWx0YSBkZWx0YVRpbWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaHVtYW5vaWQudXBkYXRlKCk7XG5cbiAgICBpZiAodGhpcy5sb29rQXQpIHtcbiAgICAgIHRoaXMubG9va0F0LnVwZGF0ZShkZWx0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXhwcmVzc2lvbk1hbmFnZXIpIHtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbk1hbmFnZXIudXBkYXRlKCk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgVlJNQ29yZUxvYWRlclBsdWdpbk9wdGlvbnMgfSBmcm9tICcuL1ZSTUNvcmVMb2FkZXJQbHVnaW5PcHRpb25zJztcbmltcG9ydCB7IFZSTUNvcmUgfSBmcm9tICcuL1ZSTUNvcmUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbiB9IGZyb20gJy4vZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbic7XG5pbXBvcnQgeyBWUk1GaXJzdFBlcnNvbkxvYWRlclBsdWdpbiB9IGZyb20gJy4vZmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW4nO1xuaW1wb3J0IHsgVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW4gfSBmcm9tICcuL2h1bWFub2lkL1ZSTUh1bWFub2lkTG9hZGVyUGx1Z2luJztcbmltcG9ydCB7IFZSTU1ldGFMb2FkZXJQbHVnaW4gfSBmcm9tICcuL21ldGEvVlJNTWV0YUxvYWRlclBsdWdpbic7XG5pbXBvcnQgeyBWUk1Mb29rQXRMb2FkZXJQbHVnaW4gfSBmcm9tICcuL2xvb2tBdC9WUk1Mb29rQXRMb2FkZXJQbHVnaW4nO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4vaHVtYW5vaWQnO1xuaW1wb3J0IHR5cGUgeyBWUk1NZXRhIH0gZnJvbSAnLi9tZXRhJztcblxuZXhwb3J0IGNsYXNzIFZSTUNvcmVMb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICByZXR1cm4gJ1ZSTUNfdnJtJztcbiAgfVxuXG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgcHVibGljIHJlYWRvbmx5IGV4cHJlc3Npb25QbHVnaW46IFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW47XG4gIHB1YmxpYyByZWFkb25seSBmaXJzdFBlcnNvblBsdWdpbjogVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW47XG4gIHB1YmxpYyByZWFkb25seSBodW1hbm9pZFBsdWdpbjogVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW47XG4gIHB1YmxpYyByZWFkb25seSBsb29rQXRQbHVnaW46IFZSTUxvb2tBdExvYWRlclBsdWdpbjtcbiAgcHVibGljIHJlYWRvbmx5IG1ldGFQbHVnaW46IFZSTU1ldGFMb2FkZXJQbHVnaW47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlciwgb3B0aW9ucz86IFZSTUNvcmVMb2FkZXJQbHVnaW5PcHRpb25zKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cbiAgICBjb25zdCBoZWxwZXJSb290ID0gb3B0aW9ucz8uaGVscGVyUm9vdDtcbiAgICBjb25zdCBhdXRvVXBkYXRlSHVtYW5Cb25lcyA9IG9wdGlvbnM/LmF1dG9VcGRhdGVIdW1hbkJvbmVzO1xuXG4gICAgdGhpcy5leHByZXNzaW9uUGx1Z2luID0gb3B0aW9ucz8uZXhwcmVzc2lvblBsdWdpbiA/PyBuZXcgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbihwYXJzZXIpO1xuICAgIHRoaXMuZmlyc3RQZXJzb25QbHVnaW4gPSBvcHRpb25zPy5maXJzdFBlcnNvblBsdWdpbiA/PyBuZXcgVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW4ocGFyc2VyKTtcbiAgICB0aGlzLmh1bWFub2lkUGx1Z2luID1cbiAgICAgIG9wdGlvbnM/Lmh1bWFub2lkUGx1Z2luID8/IG5ldyBWUk1IdW1hbm9pZExvYWRlclBsdWdpbihwYXJzZXIsIHsgaGVscGVyUm9vdCwgYXV0b1VwZGF0ZUh1bWFuQm9uZXMgfSk7XG4gICAgdGhpcy5sb29rQXRQbHVnaW4gPSBvcHRpb25zPy5sb29rQXRQbHVnaW4gPz8gbmV3IFZSTUxvb2tBdExvYWRlclBsdWdpbihwYXJzZXIsIHsgaGVscGVyUm9vdCB9KTtcbiAgICB0aGlzLm1ldGFQbHVnaW4gPSBvcHRpb25zPy5tZXRhUGx1Z2luID8/IG5ldyBWUk1NZXRhTG9hZGVyUGx1Z2luKHBhcnNlcik7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLm1ldGFQbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuICAgIGF3YWl0IHRoaXMuaHVtYW5vaWRQbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuICAgIGF3YWl0IHRoaXMuZXhwcmVzc2lvblBsdWdpbi5hZnRlclJvb3QoZ2x0Zik7XG4gICAgYXdhaXQgdGhpcy5sb29rQXRQbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuICAgIGF3YWl0IHRoaXMuZmlyc3RQZXJzb25QbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuXG4gICAgY29uc3QgbWV0YSA9IGdsdGYudXNlckRhdGEudnJtTWV0YSBhcyBWUk1NZXRhIHwgbnVsbDtcbiAgICBjb25zdCBodW1hbm9pZCA9IGdsdGYudXNlckRhdGEudnJtSHVtYW5vaWQgYXMgVlJNSHVtYW5vaWQgfCBudWxsO1xuXG4gICAgLy8gbWV0YSBhbmQgaHVtYW5vaWQgYXJlIHJlcXVpcmVkIHRvIGJlIGEgVlJNLlxuICAgIC8vIERvbid0IGNyZWF0ZSBWUk0gaWYgdGhleSBhcmUgbnVsbFxuICAgIGlmIChtZXRhICYmIGh1bWFub2lkKSB7XG4gICAgICBjb25zdCB2cm1Db3JlID0gbmV3IFZSTUNvcmUoe1xuICAgICAgICBzY2VuZTogZ2x0Zi5zY2VuZSxcbiAgICAgICAgZXhwcmVzc2lvbk1hbmFnZXI6IGdsdGYudXNlckRhdGEudnJtRXhwcmVzc2lvbk1hbmFnZXIsXG4gICAgICAgIGZpcnN0UGVyc29uOiBnbHRmLnVzZXJEYXRhLnZybUZpcnN0UGVyc29uLFxuICAgICAgICBodW1hbm9pZCxcbiAgICAgICAgbG9va0F0OiBnbHRmLnVzZXJEYXRhLnZybUxvb2tBdCxcbiAgICAgICAgbWV0YSxcbiAgICAgIH0pO1xuXG4gICAgICBnbHRmLnVzZXJEYXRhLnZybUNvcmUgPSB2cm1Db3JlO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFZSTUNvcmUgfSBmcm9tICdAcGl4aXYvdGhyZWUtdnJtLWNvcmUnO1xuaW1wb3J0IHsgVlJNTm9kZUNvbnN0cmFpbnRNYW5hZ2VyIH0gZnJvbSAnQHBpeGl2L3RocmVlLXZybS1ub2RlLWNvbnN0cmFpbnQnO1xuaW1wb3J0IHsgVlJNU3ByaW5nQm9uZU1hbmFnZXIgfSBmcm9tICdAcGl4aXYvdGhyZWUtdnJtLXNwcmluZ2JvbmUnO1xuaW1wb3J0IHsgVlJNUGFyYW1ldGVycyB9IGZyb20gJy4vVlJNUGFyYW1ldGVycyc7XG5cbi8qKlxuICogQSBjbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBzaW5nbGUgVlJNIG1vZGVsLlxuICovXG5leHBvcnQgY2xhc3MgVlJNIGV4dGVuZHMgVlJNQ29yZSB7XG4gIC8qKlxuICAgKiBDb250YWlucyBtYXRlcmlhbHMgb2YgdGhlIFZSTS5cbiAgICogYHVwZGF0ZWAgbWV0aG9kIG9mIHRoZXNlIG1hdGVyaWFscyB3aWxsIGJlIGNhbGxlZCB2aWEgaXRzIHtAbGluayBWUk0udXBkYXRlfSBtZXRob2QuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbWF0ZXJpYWxzPzogVEhSRUUuTWF0ZXJpYWxbXTtcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNU3ByaW5nQm9uZU1hbmFnZXJ9IG1hbmlwdWxhdGVzIGFsbCBzcHJpbmcgYm9uZXMgYXR0YWNoZWQgb24gdGhlIFZSTS5cbiAgICogVXN1YWxseSB5b3UgZG9uJ3QgaGF2ZSB0byBjYXJlIGFib3V0IHRoaXMgcHJvcGVydHkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc3ByaW5nQm9uZU1hbmFnZXI/OiBWUk1TcHJpbmdCb25lTWFuYWdlcjtcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNTm9kZUNvbnN0cmFpbnRNYW5hZ2VyfSBtYW5pcHVsYXRlcyBhbGwgY29uc3RyYWludHMgYXR0YWNoZWQgb24gdGhlIFZSTS5cbiAgICogVXN1YWxseSB5b3UgZG9uJ3QgaGF2ZSB0byBjYXJlIGFib3V0IHRoaXMgcHJvcGVydHkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbm9kZUNvbnN0cmFpbnRNYW5hZ2VyPzogVlJNTm9kZUNvbnN0cmFpbnRNYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgVlJNIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIFtbVlJNUGFyYW1ldGVyc11dIHRoYXQgcmVwcmVzZW50cyBjb21wb25lbnRzIG9mIHRoZSBWUk1cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJhbXM6IFZSTVBhcmFtZXRlcnMpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuXG4gICAgdGhpcy5tYXRlcmlhbHMgPSBwYXJhbXMubWF0ZXJpYWxzO1xuICAgIHRoaXMuc3ByaW5nQm9uZU1hbmFnZXIgPSBwYXJhbXMuc3ByaW5nQm9uZU1hbmFnZXI7XG4gICAgdGhpcy5ub2RlQ29uc3RyYWludE1hbmFnZXIgPSBwYXJhbXMubm9kZUNvbnN0cmFpbnRNYW5hZ2VyO1xuICB9XG5cbiAgLyoqXG4gICAqICoqWW91IG5lZWQgdG8gY2FsbCB0aGlzIG9uIHlvdXIgdXBkYXRlIGxvb3AuKipcbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiB1cGRhdGVzIGV2ZXJ5IFZSTSBjb21wb25lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gZGVsdGEgZGVsdGFUaW1lXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xuXG4gICAgaWYgKHRoaXMubm9kZUNvbnN0cmFpbnRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLm5vZGVDb25zdHJhaW50TWFuYWdlci51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zcHJpbmdCb25lTWFuYWdlcikge1xuICAgICAgdGhpcy5zcHJpbmdCb25lTWFuYWdlci51cGRhdGUoZGVsdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1hdGVyaWFscykge1xuICAgICAgdGhpcy5tYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWw6IGFueSkgPT4ge1xuICAgICAgICBpZiAobWF0ZXJpYWwudXBkYXRlKSB7XG4gICAgICAgICAgbWF0ZXJpYWwudXBkYXRlKGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0ICogYXMgVjFNVG9vblNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy1tYXRlcmlhbHMtbXRvb24tMS4wJztcbmltcG9ydCB0eXBlIHsgR0xURiwgR0xURkxvYWRlciwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHR5cGUgeyBNVG9vbk1hdGVyaWFsUGFyYW1ldGVycyB9IGZyb20gJy4vTVRvb25NYXRlcmlhbFBhcmFtZXRlcnMnO1xuaW1wb3J0IHR5cGUgeyBNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZSB9IGZyb20gJy4vTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUnO1xuaW1wb3J0IHsgR0xURk1Ub29uTWF0ZXJpYWxQYXJhbXNBc3NpZ25IZWxwZXIgfSBmcm9tICcuL0dMVEZNVG9vbk1hdGVyaWFsUGFyYW1zQXNzaWduSGVscGVyJztcbmltcG9ydCB0eXBlIHsgTVRvb25NYXRlcmlhbExvYWRlclBsdWdpbk9wdGlvbnMgfSBmcm9tICcuL01Ub29uTWF0ZXJpYWxMb2FkZXJQbHVnaW5PcHRpb25zJztcbmltcG9ydCB0eXBlIHsgTVRvb25NYXRlcmlhbERlYnVnTW9kZSB9IGZyb20gJy4vTVRvb25NYXRlcmlhbERlYnVnTW9kZSc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5pbXBvcnQgeyBNVG9vbk1hdGVyaWFsIH0gZnJvbSAnLi9NVG9vbk1hdGVyaWFsJztcbmltcG9ydCB0eXBlIHsgTVRvb25Ob2RlTWF0ZXJpYWwgfSBmcm9tICcuL25vZGVzL01Ub29uTm9kZU1hdGVyaWFsJztcblxuLyoqXG4gKiBQb3NzaWJsZSBzcGVjIHZlcnNpb25zIGl0IHJlY29nbml6ZXMuXG4gKi9cbmNvbnN0IFBPU1NJQkxFX1NQRUNfVkVSU0lPTlMgPSBuZXcgU2V0KFsnMS4wJywgJzEuMC1iZXRhJ10pO1xuXG4vKipcbiAqIEEgbG9hZGVyIHBsdWdpbiBvZiB7QGxpbmsgR0xURkxvYWRlcn0gZm9yIHRoZSBleHRlbnNpb24gYFZSTUNfbWF0ZXJpYWxzX210b29uYC5cbiAqXG4gKiBUaGlzIHBsdWdpbiBpcyBmb3IgdXNlcyB3aXRoIFdlYkdMUmVuZGVyZXIgYnkgZGVmYXVsdC5cbiAqIFRvIHVzZSBNVG9vbiBpbiBXZWJHUFVSZW5kZXJlciwgc2V0IHtAbGluayBtYXRlcmlhbFR5cGV9IHRvIHtAbGluayBNVG9vbk5vZGVNYXRlcmlhbH0uXG4gKlxuICogQGV4YW1wbGUgdG8gdXNlIHdpdGggV2ViR1BVUmVuZGVyZXJcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBNVG9vbk1hdGVyaWFsTG9hZGVyUGx1Z2luIH0gZnJvbSAnQHBpeGl2L3RocmVlLXZybS1tYXRlcmlhbHMtbXRvb24nO1xuICogaW1wb3J0IHsgTVRvb25Ob2RlTWF0ZXJpYWwgfSBmcm9tICdAcGl4aXYvdGhyZWUtdnJtLW1hdGVyaWFscy1tdG9vbi9ub2Rlcyc7XG4gKlxuICogLy8gLi4uXG4gKlxuICogLy8gUmVnaXN0ZXIgYSBNVG9vbk1hdGVyaWFsTG9hZGVyUGx1Z2luIHdpdGggTVRvb25Ob2RlTWF0ZXJpYWxcbiAqIGxvYWRlci5yZWdpc3RlcigocGFyc2VyKSA9PiB7XG4gKlxuICogICAvLyBjcmVhdGUgYSBXZWJHUFUgY29tcGF0aWJsZSBNVG9vbk1hdGVyaWFsTG9hZGVyUGx1Z2luXG4gKiAgIHJldHVybiBuZXcgTVRvb25NYXRlcmlhbExvYWRlclBsdWdpbihwYXJzZXIsIHtcbiAqXG4gKiAgICAgLy8gc2V0IHRoZSBtYXRlcmlhbCB0eXBlIHRvIE1Ub29uTm9kZU1hdGVyaWFsXG4gKiAgICAgbWF0ZXJpYWxUeXBlOiBNVG9vbk5vZGVNYXRlcmlhbCxcbiAqXG4gKiAgIH0pO1xuICpcbiAqIH0pO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBNVG9vbk1hdGVyaWFsTG9hZGVyUGx1Z2luIGltcGxlbWVudHMgR0xURkxvYWRlclBsdWdpbiB7XG4gIHB1YmxpYyBzdGF0aWMgRVhURU5TSU9OX05BTUUgPSAnVlJNQ19tYXRlcmlhbHNfbXRvb24nO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgbWF0ZXJpYWwgdGhhdCB0aGlzIHBsdWdpbiB3aWxsIGdlbmVyYXRlLlxuICAgKlxuICAgKiBJZiB5b3UgYXJlIHVzaW5nIHRoaXMgcGx1Z2luIHdpdGggV2ViR1BVLCBzZXQgdGhpcyB0byB7QGxpbmsgTVRvb25Ob2RlTWF0ZXJpYWx9LlxuICAgKlxuICAgKiBAZGVmYXVsdCBNVG9vbk1hdGVyaWFsXG4gICAqL1xuICBwdWJsaWMgbWF0ZXJpYWxUeXBlOiB0eXBlb2YgVEhSRUUuTWF0ZXJpYWw7XG5cbiAgLyoqXG4gICAqIFRoaXMgdmFsdWUgd2lsbCBiZSBhZGRlZCB0byBgcmVuZGVyT3JkZXJgIG9mIGV2ZXJ5IG1lc2hlcyB3aG8gaGF2ZSBNYXRlcmlhbHNNVG9vbi5cbiAgICogVGhlIGZpbmFsIHJlbmRlck9yZGVyIHdpbGwgYmUgc3VtIG9mIHRoaXMgYHJlbmRlck9yZGVyT2Zmc2V0YCBhbmQgYHJlbmRlclF1ZXVlT2Zmc2V0TnVtYmVyYCBmb3IgZWFjaCBtYXRlcmlhbHMuXG4gICAqXG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIHB1YmxpYyByZW5kZXJPcmRlck9mZnNldDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGVyZSBpcyBhIGxpbmUgb2YgdGhlIHNoYWRlciBjYWxsZWQgXCJjb21tZW50IG91dCBpZiB5b3Ugd2FudCB0byBQQlIgYWJzb2x1dGVseVwiIGluIFZSTTAuMCBNVG9vbi5cbiAgICogV2hlbiB0aGlzIGlzIHRydWUsIHRoZSBtYXRlcmlhbCBlbmFibGVzIHRoZSBsaW5lIHRvIG1ha2UgaXQgY29tcGF0aWJsZSB3aXRoIHRoZSBsZWdhY3kgcmVuZGVyaW5nIG9mIFZSTS5cbiAgICogVXN1YWxseSBub3QgcmVjb21tZW5kZWQgdG8gdHVybiB0aGlzIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcHVibGljIHYwQ29tcGF0U2hhZGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlYnVnIG1vZGUgZm9yIHRoZSBtYXRlcmlhbC5cbiAgICogWW91IGNhbiB2aXN1YWxpemUgc2V2ZXJhbCBjb21wb25lbnRzIGZvciBkaWFnbm9zaXMgdXNpbmcgZGVidWcgbW9kZS5cbiAgICpcbiAgICogU2VlOiB7QGxpbmsgTVRvb25NYXRlcmlhbERlYnVnTW9kZX1cbiAgICpcbiAgICogQGRlZmF1bHQgJ25vbmUnXG4gICAqL1xuICBwdWJsaWMgZGVidWdNb2RlOiBNVG9vbk1hdGVyaWFsRGVidWdNb2RlO1xuXG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgLyoqXG4gICAqIExvYWRlZCBtYXRlcmlhbHMgd2lsbCBiZSBzdG9yZWQgaW4gdGhpcyBzZXQuXG4gICAqIFdpbGwgYmUgdHJhbnNmZXJyZWQgaW50byBgZ2x0Zi51c2VyRGF0YS52cm1NVG9vbk1hdGVyaWFsc2AgaW4ge0BsaW5rIGFmdGVyUm9vdH0uXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9tVG9vbk1hdGVyaWFsU2V0OiBTZXQ8VEhSRUUuTWF0ZXJpYWw+O1xuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBNVG9vbk1hdGVyaWFsTG9hZGVyUGx1Z2luLkVYVEVOU0lPTl9OQU1FO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlciwgb3B0aW9uczogTVRvb25NYXRlcmlhbExvYWRlclBsdWdpbk9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgdGhpcy5tYXRlcmlhbFR5cGUgPSBvcHRpb25zLm1hdGVyaWFsVHlwZSA/PyBNVG9vbk1hdGVyaWFsO1xuICAgIHRoaXMucmVuZGVyT3JkZXJPZmZzZXQgPSBvcHRpb25zLnJlbmRlck9yZGVyT2Zmc2V0ID8/IDA7XG4gICAgdGhpcy52MENvbXBhdFNoYWRlID0gb3B0aW9ucy52MENvbXBhdFNoYWRlID8/IGZhbHNlO1xuICAgIHRoaXMuZGVidWdNb2RlID0gb3B0aW9ucy5kZWJ1Z01vZGUgPz8gJ25vbmUnO1xuXG4gICAgdGhpcy5fbVRvb25NYXRlcmlhbFNldCA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBiZWZvcmVSb290KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3JlbW92ZVVubGl0RXh0ZW5zaW9uSWZNVG9vbkV4aXN0cygpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFmdGVyUm9vdChnbHRmOiBHTFRGKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZ2x0Zi51c2VyRGF0YS52cm1NVG9vbk1hdGVyaWFscyA9IEFycmF5LmZyb20odGhpcy5fbVRvb25NYXRlcmlhbFNldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWF0ZXJpYWxUeXBlKG1hdGVyaWFsSW5kZXg6IG51bWJlcik6IHR5cGVvZiBUSFJFRS5NYXRlcmlhbCB8IG51bGwge1xuICAgIGNvbnN0IHYxRXh0ZW5zaW9uID0gdGhpcy5fZ2V0TVRvb25FeHRlbnNpb24obWF0ZXJpYWxJbmRleCk7XG4gICAgaWYgKHYxRXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXRlcmlhbFR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgZXh0ZW5kTWF0ZXJpYWxQYXJhbXMobWF0ZXJpYWxJbmRleDogbnVtYmVyLCBtYXRlcmlhbFBhcmFtczogTVRvb25NYXRlcmlhbFBhcmFtZXRlcnMpOiBQcm9taXNlPGFueT4gfCBudWxsIHtcbiAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9nZXRNVG9vbkV4dGVuc2lvbihtYXRlcmlhbEluZGV4KTtcbiAgICBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoZXh0ZW5zaW9uLCBtYXRlcmlhbFBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgbG9hZE1lc2gobWVzaEluZGV4OiBudW1iZXIpOiBQcm9taXNlPFRIUkVFLkdyb3VwIHwgVEhSRUUuTWVzaCB8IFRIUkVFLlNraW5uZWRNZXNoPiB7XG4gICAgY29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG4gICAgY29uc3QganNvbiA9IHBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICBjb25zdCBtZXNoRGVmID0ganNvbi5tZXNoZXM/LlttZXNoSW5kZXhdO1xuXG4gICAgaWYgKG1lc2hEZWYgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTVRvb25NYXRlcmlhbExvYWRlclBsdWdpbjogQXR0ZW1wdCB0byB1c2UgbWVzaGVzWyR7bWVzaEluZGV4fV0gb2YgZ2xURiBidXQgdGhlIG1lc2ggZG9lc24ndCBleGlzdGAsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZXNEZWYgPSBtZXNoRGVmLnByaW1pdGl2ZXM7XG5cbiAgICBjb25zdCBtZXNoT3JHcm91cCA9IGF3YWl0IHBhcnNlci5sb2FkTWVzaChtZXNoSW5kZXgpO1xuXG4gICAgaWYgKHByaW1pdGl2ZXNEZWYubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBtZXNoID0gbWVzaE9yR3JvdXAgYXMgVEhSRUUuTWVzaDtcbiAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSBwcmltaXRpdmVzRGVmWzBdLm1hdGVyaWFsO1xuXG4gICAgICBpZiAobWF0ZXJpYWxJbmRleCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3NldHVwUHJpbWl0aXZlKG1lc2gsIG1hdGVyaWFsSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBncm91cCA9IG1lc2hPckdyb3VwIGFzIFRIUkVFLkdyb3VwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmltaXRpdmVzRGVmLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lc2ggPSBncm91cC5jaGlsZHJlbltpXSBhcyBUSFJFRS5NZXNoO1xuICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gcHJpbWl0aXZlc0RlZltpXS5tYXRlcmlhbDtcblxuICAgICAgICBpZiAobWF0ZXJpYWxJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fc2V0dXBQcmltaXRpdmUobWVzaCwgbWF0ZXJpYWxJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzaE9yR3JvdXA7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHVzZSBvZiBgS0hSX21hdGVyaWFsc191bmxpdGAgZnJvbSBpdHMgYG1hdGVyaWFsc2AgaWYgdGhlIG1hdGVyaWFsIGlzIHVzaW5nIE1Ub29uLlxuICAgKlxuICAgKiBTaW5jZSBHTFRGTG9hZGVyIGhhdmUgc28gbWFueSBoYXJkY29kZWQgcHJvY2VkdXJlIHJlbGF0ZWQgdG8gYEtIUl9tYXRlcmlhbHNfdW5saXRgXG4gICAqIHdlIGhhdmUgdG8gZGVsZXRlIHRoZSBleHRlbnNpb24gYmVmb3JlIHdlIHN0YXJ0IHRvIHBhcnNlIHRoZSBnbFRGLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlVW5saXRFeHRlbnNpb25JZk1Ub29uRXhpc3RzKCk6IHZvaWQge1xuICAgIGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuICAgIGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgY29uc3QgbWF0ZXJpYWxEZWZzID0ganNvbi5tYXRlcmlhbHM7XG4gICAgbWF0ZXJpYWxEZWZzPy5tYXAoKG1hdGVyaWFsRGVmLCBpTWF0ZXJpYWwpID0+IHtcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2dldE1Ub29uRXh0ZW5zaW9uKGlNYXRlcmlhbCk7XG5cbiAgICAgIGlmIChleHRlbnNpb24gJiYgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucz8uWydLSFJfbWF0ZXJpYWxzX3VubGl0J10pIHtcbiAgICAgICAgZGVsZXRlIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbJ0tIUl9tYXRlcmlhbHNfdW5saXQnXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0TVRvb25FeHRlbnNpb24obWF0ZXJpYWxJbmRleDogbnVtYmVyKTogVjFNVG9vblNjaGVtYS5WUk1DTWF0ZXJpYWxzTVRvb24gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuICAgIGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgY29uc3QgbWF0ZXJpYWxEZWYgPSBqc29uLm1hdGVyaWFscz8uW21hdGVyaWFsSW5kZXhdO1xuXG4gICAgaWYgKG1hdGVyaWFsRGVmID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE1Ub29uTWF0ZXJpYWxMb2FkZXJQbHVnaW46IEF0dGVtcHQgdG8gdXNlIG1hdGVyaWFsc1ske21hdGVyaWFsSW5kZXh9XSBvZiBnbFRGIGJ1dCB0aGUgbWF0ZXJpYWwgZG9lc24ndCBleGlzdGAsXG4gICAgICApO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zPy5bTVRvb25NYXRlcmlhbExvYWRlclBsdWdpbi5FWFRFTlNJT05fTkFNRV0gYXNcbiAgICAgIHwgVjFNVG9vblNjaGVtYS5WUk1DTWF0ZXJpYWxzTVRvb25cbiAgICAgIHwgdW5kZWZpbmVkO1xuICAgIGlmIChleHRlbnNpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVjVmVyc2lvbiA9IGV4dGVuc2lvbi5zcGVjVmVyc2lvbjtcbiAgICBpZiAoIVBPU1NJQkxFX1NQRUNfVkVSU0lPTlMuaGFzKHNwZWNWZXJzaW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTVRvb25NYXRlcmlhbExvYWRlclBsdWdpbjogVW5rbm93biAke01Ub29uTWF0ZXJpYWxMb2FkZXJQbHVnaW4uRVhURU5TSU9OX05BTUV9IHNwZWNWZXJzaW9uIFwiJHtzcGVjVmVyc2lvbn1cImAsXG4gICAgICApO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZXh0ZW5zaW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoXG4gICAgZXh0ZW5zaW9uOiBWMU1Ub29uU2NoZW1hLlZSTUNNYXRlcmlhbHNNVG9vbixcbiAgICBtYXRlcmlhbFBhcmFtczogTVRvb25NYXRlcmlhbFBhcmFtZXRlcnMsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIFJlbW92aW5nIG1hdGVyaWFsIHBhcmFtcyB0aGF0IGlzIG5vdCByZXF1aXJlZCB0byBzdXByZXNzIHdhcm5pbmdzLlxuICAgIGRlbGV0ZSAobWF0ZXJpYWxQYXJhbXMgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWxQYXJhbWV0ZXJzKS5tZXRhbG5lc3M7XG4gICAgZGVsZXRlIChtYXRlcmlhbFBhcmFtcyBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbFBhcmFtZXRlcnMpLnJvdWdobmVzcztcblxuICAgIGNvbnN0IGFzc2lnbkhlbHBlciA9IG5ldyBHTFRGTVRvb25NYXRlcmlhbFBhcmFtc0Fzc2lnbkhlbHBlcih0aGlzLnBhcnNlciwgbWF0ZXJpYWxQYXJhbXMpO1xuXG4gICAgYXNzaWduSGVscGVyLmFzc2lnblByaW1pdGl2ZSgndHJhbnNwYXJlbnRXaXRoWldyaXRlJywgZXh0ZW5zaW9uLnRyYW5zcGFyZW50V2l0aFpXcml0ZSk7XG4gICAgYXNzaWduSGVscGVyLmFzc2lnbkNvbG9yKCdzaGFkZUNvbG9yRmFjdG9yJywgZXh0ZW5zaW9uLnNoYWRlQ29sb3JGYWN0b3IpO1xuICAgIGFzc2lnbkhlbHBlci5hc3NpZ25UZXh0dXJlKCdzaGFkZU11bHRpcGx5VGV4dHVyZScsIGV4dGVuc2lvbi5zaGFkZU11bHRpcGx5VGV4dHVyZSwgdHJ1ZSk7XG4gICAgYXNzaWduSGVscGVyLmFzc2lnblByaW1pdGl2ZSgnc2hhZGluZ1NoaWZ0RmFjdG9yJywgZXh0ZW5zaW9uLnNoYWRpbmdTaGlmdEZhY3Rvcik7XG4gICAgYXNzaWduSGVscGVyLmFzc2lnblRleHR1cmUoJ3NoYWRpbmdTaGlmdFRleHR1cmUnLCBleHRlbnNpb24uc2hhZGluZ1NoaWZ0VGV4dHVyZSwgdHJ1ZSk7XG4gICAgYXNzaWduSGVscGVyLmFzc2lnblByaW1pdGl2ZSgnc2hhZGluZ1NoaWZ0VGV4dHVyZVNjYWxlJywgZXh0ZW5zaW9uLnNoYWRpbmdTaGlmdFRleHR1cmU/LnNjYWxlKTtcbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduUHJpbWl0aXZlKCdzaGFkaW5nVG9vbnlGYWN0b3InLCBleHRlbnNpb24uc2hhZGluZ1Rvb255RmFjdG9yKTtcbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduUHJpbWl0aXZlKCdnaUVxdWFsaXphdGlvbkZhY3RvcicsIGV4dGVuc2lvbi5naUVxdWFsaXphdGlvbkZhY3Rvcik7XG4gICAgYXNzaWduSGVscGVyLmFzc2lnbkNvbG9yKCdtYXRjYXBGYWN0b3InLCBleHRlbnNpb24ubWF0Y2FwRmFjdG9yKTtcbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduVGV4dHVyZSgnbWF0Y2FwVGV4dHVyZScsIGV4dGVuc2lvbi5tYXRjYXBUZXh0dXJlLCB0cnVlKTtcbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduQ29sb3IoJ3BhcmFtZXRyaWNSaW1Db2xvckZhY3RvcicsIGV4dGVuc2lvbi5wYXJhbWV0cmljUmltQ29sb3JGYWN0b3IpO1xuICAgIGFzc2lnbkhlbHBlci5hc3NpZ25UZXh0dXJlKCdyaW1NdWx0aXBseVRleHR1cmUnLCBleHRlbnNpb24ucmltTXVsdGlwbHlUZXh0dXJlLCB0cnVlKTtcbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduUHJpbWl0aXZlKCdyaW1MaWdodGluZ01peEZhY3RvcicsIGV4dGVuc2lvbi5yaW1MaWdodGluZ01peEZhY3Rvcik7XG4gICAgYXNzaWduSGVscGVyLmFzc2lnblByaW1pdGl2ZSgncGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlckZhY3RvcicsIGV4dGVuc2lvbi5wYXJhbWV0cmljUmltRnJlc25lbFBvd2VyRmFjdG9yKTtcbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduUHJpbWl0aXZlKCdwYXJhbWV0cmljUmltTGlmdEZhY3RvcicsIGV4dGVuc2lvbi5wYXJhbWV0cmljUmltTGlmdEZhY3Rvcik7XG4gICAgYXNzaWduSGVscGVyLmFzc2lnblByaW1pdGl2ZSgnb3V0bGluZVdpZHRoTW9kZScsIGV4dGVuc2lvbi5vdXRsaW5lV2lkdGhNb2RlIGFzIE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlKTtcbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduUHJpbWl0aXZlKCdvdXRsaW5lV2lkdGhGYWN0b3InLCBleHRlbnNpb24ub3V0bGluZVdpZHRoRmFjdG9yKTtcbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduVGV4dHVyZSgnb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlJywgZXh0ZW5zaW9uLm91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZSwgZmFsc2UpO1xuICAgIGFzc2lnbkhlbHBlci5hc3NpZ25Db2xvcignb3V0bGluZUNvbG9yRmFjdG9yJywgZXh0ZW5zaW9uLm91dGxpbmVDb2xvckZhY3Rvcik7XG4gICAgYXNzaWduSGVscGVyLmFzc2lnblByaW1pdGl2ZSgnb3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yJywgZXh0ZW5zaW9uLm91dGxpbmVMaWdodGluZ01peEZhY3Rvcik7XG4gICAgYXNzaWduSGVscGVyLmFzc2lnblRleHR1cmUoJ3V2QW5pbWF0aW9uTWFza1RleHR1cmUnLCBleHRlbnNpb24udXZBbmltYXRpb25NYXNrVGV4dHVyZSwgZmFsc2UpO1xuICAgIGFzc2lnbkhlbHBlci5hc3NpZ25QcmltaXRpdmUoJ3V2QW5pbWF0aW9uU2Nyb2xsWFNwZWVkRmFjdG9yJywgZXh0ZW5zaW9uLnV2QW5pbWF0aW9uU2Nyb2xsWFNwZWVkRmFjdG9yKTtcbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduUHJpbWl0aXZlKCd1dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvcicsIGV4dGVuc2lvbi51dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3Rvcik7XG4gICAgYXNzaWduSGVscGVyLmFzc2lnblByaW1pdGl2ZSgndXZBbmltYXRpb25Sb3RhdGlvblNwZWVkRmFjdG9yJywgZXh0ZW5zaW9uLnV2QW5pbWF0aW9uUm90YXRpb25TcGVlZEZhY3Rvcik7XG5cbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduUHJpbWl0aXZlKCd2MENvbXBhdFNoYWRlJywgdGhpcy52MENvbXBhdFNoYWRlKTtcbiAgICBhc3NpZ25IZWxwZXIuYXNzaWduUHJpbWl0aXZlKCdkZWJ1Z01vZGUnLCB0aGlzLmRlYnVnTW9kZSk7XG5cbiAgICBhd2FpdCBhc3NpZ25IZWxwZXIucGVuZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgZG8gdHdvIHByb2Nlc3NlcyB0aGF0IGlzIHJlcXVpcmVkIHRvIHJlbmRlciBNVG9vbiBwcm9wZXJseS5cbiAgICpcbiAgICogLSBTZXQgcmVuZGVyIG9yZGVyXG4gICAqIC0gR2VuZXJhdGUgb3V0bGluZVxuICAgKlxuICAgKiBAcGFyYW0gbWVzaCBBIHRhcmdldCBHTFRGIHByaW1pdGl2ZVxuICAgKiBAcGFyYW0gbWF0ZXJpYWxJbmRleCBUaGUgbWF0ZXJpYWwgaW5kZXggb2YgdGhlIHByaW1pdGl2ZVxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0dXBQcmltaXRpdmUobWVzaDogVEhSRUUuTWVzaCwgbWF0ZXJpYWxJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZ2V0TVRvb25FeHRlbnNpb24obWF0ZXJpYWxJbmRleCk7XG4gICAgaWYgKGV4dGVuc2lvbikge1xuICAgICAgY29uc3QgcmVuZGVyT3JkZXIgPSB0aGlzLl9wYXJzZVJlbmRlck9yZGVyKGV4dGVuc2lvbik7XG4gICAgICBtZXNoLnJlbmRlck9yZGVyID0gcmVuZGVyT3JkZXIgKyB0aGlzLnJlbmRlck9yZGVyT2Zmc2V0O1xuXG4gICAgICB0aGlzLl9nZW5lcmF0ZU91dGxpbmUobWVzaCk7XG5cbiAgICAgIHRoaXMuX2FkZFRvTWF0ZXJpYWxTZXQobWVzaCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgbWF0ZXJpYWwgc2hvdWxkIGdlbmVyYXRlIG91dGxpbmUgb3Igbm90LlxuICAgKiBAcGFyYW0gc3VyZmFjZU1hdGVyaWFsIFRoZSBtYXRlcmlhbCB0byBjaGVja1xuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBtYXRlcmlhbCBzaG91bGQgZ2VuZXJhdGUgb3V0bGluZVxuICAgKi9cbiAgcHJpdmF0ZSBfc2hvdWxkR2VuZXJhdGVPdXRsaW5lKHN1cmZhY2VNYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWwpOiBib29sZWFuIHtcbiAgICAvLyB3ZSBtaWdodCByZWNlaXZlIE1Ub29uTm9kZU1hdGVyaWFsIGFzIHdlbGwgYXMgTVRvb25NYXRlcmlhbFxuICAgIC8vIHNvIHdlJ3JlIGdvbm5hIGR1Y2sgdHlwZSB0byBjaGVjayBpZiBpdCdzIGNvbXBhdGlibGUgd2l0aCBNVG9vbiB0eXBlIG91dGxpbmVzXG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiAoc3VyZmFjZU1hdGVyaWFsIGFzIGFueSkub3V0bGluZVdpZHRoTW9kZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgIChzdXJmYWNlTWF0ZXJpYWwgYXMgYW55KS5vdXRsaW5lV2lkdGhNb2RlICE9PSAnbm9uZScgJiZcbiAgICAgIHR5cGVvZiAoc3VyZmFjZU1hdGVyaWFsIGFzIGFueSkub3V0bGluZVdpZHRoRmFjdG9yID09PSAnbnVtYmVyJyAmJlxuICAgICAgKHN1cmZhY2VNYXRlcmlhbCBhcyBhbnkpLm91dGxpbmVXaWR0aEZhY3RvciA+IDAuMFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgb3V0bGluZSBmb3IgdGhlIGdpdmVuIG1lc2gsIGlmIGl0IG5lZWRzLlxuICAgKlxuICAgKiBAcGFyYW0gbWVzaCBUaGUgdGFyZ2V0IG1lc2hcbiAgICovXG4gIHByaXZhdGUgX2dlbmVyYXRlT3V0bGluZShtZXNoOiBUSFJFRS5NZXNoKTogdm9pZCB7XG4gICAgLy8gT0ssIGl0J3MgdGhlIGhhY2t5IHBhcnQuXG4gICAgLy8gV2UgYXJlIGdvaW5nIHRvIGR1cGxpY2F0ZSB0aGUgTVRvb25NYXRlcmlhbCBmb3Igb3V0bGluZSB1c2UuXG4gICAgLy8gVGhlbiB3ZSBhcmUgZ29pbmcgdG8gY3JlYXRlIHR3byBnZW9tZXRyeSBncm91cHMgYW5kIHJlZmVyIHNhbWUgYnVmZmVyIGJ1dCBkaWZmZXJlbnQgbWF0ZXJpYWwuXG4gICAgLy8gSXQncyBob3cgd2UgZHJhdyB0d28gbWF0ZXJpYWxzIGF0IG9uY2UgdXNpbmcgYSBzaW5nbGUgbWVzaC5cblxuICAgIC8vIG1ha2Ugc3VyZSB0aGUgbWF0ZXJpYWwgaXMgc2luZ2xlXG4gICAgY29uc3Qgc3VyZmFjZU1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbDtcbiAgICBpZiAoIShzdXJmYWNlTWF0ZXJpYWwgaW5zdGFuY2VvZiBUSFJFRS5NYXRlcmlhbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3Nob3VsZEdlbmVyYXRlT3V0bGluZShzdXJmYWNlTWF0ZXJpYWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gbWFrZSBpdHMgbWF0ZXJpYWwgYW4gYXJyYXlcbiAgICBtZXNoLm1hdGVyaWFsID0gW3N1cmZhY2VNYXRlcmlhbF07IC8vIG1lc2gubWF0ZXJpYWwgaXMgZ3VhcmFudGVlZCB0byBiZSBhIE1hdGVyaWFsIGluIEdMVEZMb2FkZXJcblxuICAgIC8vIGR1cGxpY2F0ZSB0aGUgbWF0ZXJpYWwgZm9yIG91dGxpbmUgdXNlXG4gICAgY29uc3Qgb3V0bGluZU1hdGVyaWFsID0gc3VyZmFjZU1hdGVyaWFsLmNsb25lKCk7XG4gICAgb3V0bGluZU1hdGVyaWFsLm5hbWUgKz0gJyAoT3V0bGluZSknO1xuICAgIChvdXRsaW5lTWF0ZXJpYWwgYXMgYW55KS5pc091dGxpbmUgPSB0cnVlO1xuICAgIG91dGxpbmVNYXRlcmlhbC5zaWRlID0gVEhSRUUuQmFja1NpZGU7XG4gICAgbWVzaC5tYXRlcmlhbC5wdXNoKG91dGxpbmVNYXRlcmlhbCk7XG5cbiAgICAvLyBtYWtlIHR3byBnZW9tZXRyeSBncm91cHMgb3V0IG9mIGEgc2FtZSBidWZmZXJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG1lc2guZ2VvbWV0cnk7IC8vIG1lc2guZ2VvbWV0cnkgaXMgZ3VhcmFudGVlZCB0byBiZSBhIEJ1ZmZlckdlb21ldHJ5IGluIEdMVEZMb2FkZXJcbiAgICBjb25zdCBwcmltaXRpdmVWZXJ0aWNlcyA9IGdlb21ldHJ5LmluZGV4ID8gZ2VvbWV0cnkuaW5kZXguY291bnQgOiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50IC8gMztcbiAgICBnZW9tZXRyeS5hZGRHcm91cCgwLCBwcmltaXRpdmVWZXJ0aWNlcywgMCk7XG4gICAgZ2VvbWV0cnkuYWRkR3JvdXAoMCwgcHJpbWl0aXZlVmVydGljZXMsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVG9NYXRlcmlhbFNldChtZXNoOiBUSFJFRS5NZXNoKTogdm9pZCB7XG4gICAgY29uc3QgbWF0ZXJpYWxPck1hdGVyaWFscyA9IG1lc2gubWF0ZXJpYWw7XG4gICAgY29uc3QgbWF0ZXJpYWxTZXQgPSBuZXcgU2V0PFRIUkVFLk1hdGVyaWFsPigpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWF0ZXJpYWxPck1hdGVyaWFscykpIHtcbiAgICAgIG1hdGVyaWFsT3JNYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IG1hdGVyaWFsU2V0LmFkZChtYXRlcmlhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXRlcmlhbFNldC5hZGQobWF0ZXJpYWxPck1hdGVyaWFscyk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBtYXRlcmlhbCBvZiBtYXRlcmlhbFNldCkge1xuICAgICAgdGhpcy5fbVRvb25NYXRlcmlhbFNldC5hZGQobWF0ZXJpYWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlUmVuZGVyT3JkZXIoZXh0ZW5zaW9uOiBWMU1Ub29uU2NoZW1hLlZSTUNNYXRlcmlhbHNNVG9vbik6IG51bWJlciB7XG4gICAgLy8gdHJhbnNwYXJlbnRXaXRoWldyaXRlIHJhbmdlcyBmcm9tIDAgdG8gKzlcbiAgICAvLyBtZXJlIHRyYW5zcGFyZW50IHJhbmdlcyBmcm9tIC05IHRvIDBcbiAgICBjb25zdCBlbmFibGVkWldyaXRlID0gZXh0ZW5zaW9uLnRyYW5zcGFyZW50V2l0aFpXcml0ZTtcbiAgICByZXR1cm4gKGVuYWJsZWRaV3JpdGUgPyAwIDogMTkpICsgKGV4dGVuc2lvbi5yZW5kZXJRdWV1ZU9mZnNldE51bWJlciA/PyAwKTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IE1Ub29uTWF0ZXJpYWxQYXJhbWV0ZXJzIH0gZnJvbSAnLi9NVG9vbk1hdGVyaWFsUGFyYW1ldGVycyc7XG5pbXBvcnQgeyBzZXRUZXh0dXJlQ29sb3JTcGFjZSB9IGZyb20gJy4vdXRpbHMvc2V0VGV4dHVyZUNvbG9yU3BhY2UnO1xuXG4vKipcbiAqIE1hdGVyaWFsUGFyYW1ldGVycyBoYXRlcyBgdW5kZWZpbmVkYC4gVGhpcyBoZWxwZXIgYXV0b21hdGljYWxseSByZWplY3RzIGFzc2lnbiBvZiB0aGVzZSBgdW5kZWZpbmVkYC5cbiAqIEl0IGFsc28gaGFuZGxlcyBhc3luY2hyb25vdXMgcHJvY2VzcyBvZiB0ZXh0dXJlcy5cbiAqIE1ha2Ugc3VyZSBhd2FpdCBmb3Ige0BsaW5rIEdMVEZNVG9vbk1hdGVyaWFsUGFyYW1zQXNzaWduSGVscGVyLnBlbmRpbmd9LlxuICovXG5leHBvcnQgY2xhc3MgR0xURk1Ub29uTWF0ZXJpYWxQYXJhbXNBc3NpZ25IZWxwZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IF9wYXJzZXI6IEdMVEZQYXJzZXI7XG4gIHByaXZhdGUgX21hdGVyaWFsUGFyYW1zOiBNVG9vbk1hdGVyaWFsUGFyYW1ldGVycztcbiAgcHJpdmF0ZSBfcGVuZGluZ3M6IFByb21pc2U8YW55PltdO1xuXG4gIHB1YmxpYyBnZXQgcGVuZGluZygpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fcGVuZGluZ3MpO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlciwgbWF0ZXJpYWxQYXJhbXM6IE1Ub29uTWF0ZXJpYWxQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fcGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMuX21hdGVyaWFsUGFyYW1zID0gbWF0ZXJpYWxQYXJhbXM7XG4gICAgdGhpcy5fcGVuZGluZ3MgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBhc3NpZ25QcmltaXRpdmU8VCBleHRlbmRzIGtleW9mIE1Ub29uTWF0ZXJpYWxQYXJhbWV0ZXJzPihrZXk6IFQsIHZhbHVlOiBNVG9vbk1hdGVyaWFsUGFyYW1ldGVyc1tUXSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9tYXRlcmlhbFBhcmFtc1trZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzc2lnbkNvbG9yPFQgZXh0ZW5kcyBrZXlvZiBNVG9vbk1hdGVyaWFsUGFyYW1ldGVycz4oXG4gICAga2V5OiBULFxuICAgIHZhbHVlOiBudW1iZXJbXSB8IHVuZGVmaW5lZCxcbiAgICBjb252ZXJ0U1JHQlRvTGluZWFyPzogYm9vbGVhbixcbiAgKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX21hdGVyaWFsUGFyYW1zW2tleV0gPSBuZXcgVEhSRUUuQ29sb3IoKS5mcm9tQXJyYXkodmFsdWUpO1xuXG4gICAgICBpZiAoY29udmVydFNSR0JUb0xpbmVhcikge1xuICAgICAgICB0aGlzLl9tYXRlcmlhbFBhcmFtc1trZXldLmNvbnZlcnRTUkdCVG9MaW5lYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYXNzaWduVGV4dHVyZTxUIGV4dGVuZHMga2V5b2YgTVRvb25NYXRlcmlhbFBhcmFtZXRlcnM+KFxuICAgIGtleTogVCxcbiAgICB0ZXh0dXJlOiB7IGluZGV4OiBudW1iZXIgfSB8IHVuZGVmaW5lZCxcbiAgICBpc0NvbG9yVGV4dHVyZTogYm9vbGVhbixcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAodGV4dHVyZSAhPSBudWxsKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3BhcnNlci5hc3NpZ25UZXh0dXJlKHRoaXMuX21hdGVyaWFsUGFyYW1zLCBrZXksIHRleHR1cmUpO1xuXG4gICAgICAgIGlmIChpc0NvbG9yVGV4dHVyZSkge1xuICAgICAgICAgIHNldFRleHR1cmVDb2xvclNwYWNlKHRoaXMuX21hdGVyaWFsUGFyYW1zW2tleV0sICdzcmdiJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgdGhpcy5fcGVuZGluZ3MucHVzaChwcm9taXNlKTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFzc2lnblRleHR1cmVCeUluZGV4PFQgZXh0ZW5kcyBrZXlvZiBNVG9vbk1hdGVyaWFsUGFyYW1ldGVycz4oXG4gICAga2V5OiBULFxuICAgIHRleHR1cmVJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICAgIGlzQ29sb3JUZXh0dXJlOiBib29sZWFuLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25UZXh0dXJlKGtleSwgdGV4dHVyZUluZGV4ICE9IG51bGwgPyB7IGluZGV4OiB0ZXh0dXJlSW5kZXggfSA6IHVuZGVmaW5lZCwgaXNDb2xvclRleHR1cmUpO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5jb25zdCBjb2xvclNwYWNlRW5jb2RpbmdNYXA6IFJlY29yZDwnJyB8ICdzcmdiJywgYW55PiA9IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICAnJzogMzAwMCxcbiAgc3JnYjogMzAwMSxcbn07XG5cbi8qKlxuICogQSBjb21wYXQgZnVuY3Rpb24gdG8gc2V0IHRleHR1cmUgY29sb3Igc3BhY2UuXG4gKlxuICogQ09NUEFUOiBwcmUtcjE1MlxuICogU3RhcnRpbmcgZnJvbSBUaHJlZS5qcyByMTUyLCBgdGV4dHVyZS5lbmNvZGluZ2AgaXMgcmVuYW1lZCB0byBgdGV4dHVyZS5jb2xvclNwYWNlYC5cbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBoYW5kbGUgdGhlIGNvbWFwdC5cbiAqXG4gKiBAcGFyYW0gdGV4dHVyZSBUaGUgdGV4dHVyZSB5b3Ugd2FudCB0byBzZXQgdGhlIGNvbG9yIHNwYWNlIHRvXG4gKiBAcGFyYW0gY29sb3JTcGFjZSBUaGUgY29sb3Igc3BhY2UgeW91IHdhbnQgdG8gc2V0IHRvIHRoZSB0ZXh0dXJlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRUZXh0dXJlQ29sb3JTcGFjZSh0ZXh0dXJlOiBUSFJFRS5UZXh0dXJlLCBjb2xvclNwYWNlOiAnJyB8ICdzcmdiJyk6IHZvaWQge1xuICBpZiAocGFyc2VJbnQoVEhSRUUuUkVWSVNJT04sIDEwKSA+PSAxNTIpIHtcbiAgICB0ZXh0dXJlLmNvbG9yU3BhY2UgPSBjb2xvclNwYWNlO1xuICB9IGVsc2Uge1xuICAgICh0ZXh0dXJlIGFzIGFueSkuZW5jb2RpbmcgPSBjb2xvclNwYWNlRW5jb2RpbmdNYXBbY29sb3JTcGFjZV07XG4gIH1cbn1cbiIsICIvKiB0c2xpbnQ6ZGlzYWJsZTptZW1iZXItb3JkZXJpbmcgKi9cblxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHZlcnRleFNoYWRlciBmcm9tICcuL3NoYWRlcnMvbXRvb24udmVydCc7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXIgZnJvbSAnLi9zaGFkZXJzL210b29uLmZyYWcnO1xuaW1wb3J0IHsgTVRvb25NYXRlcmlhbERlYnVnTW9kZSB9IGZyb20gJy4vTVRvb25NYXRlcmlhbERlYnVnTW9kZSc7XG5pbXBvcnQgeyBNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZSB9IGZyb20gJy4vTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUnO1xuaW1wb3J0IHR5cGUgeyBNVG9vbk1hdGVyaWFsUGFyYW1ldGVycyB9IGZyb20gJy4vTVRvb25NYXRlcmlhbFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgZ2V0VGV4dHVyZUNvbG9yU3BhY2UgfSBmcm9tICcuL3V0aWxzL2dldFRleHR1cmVDb2xvclNwYWNlJztcblxuLyoqXG4gKiBNVG9vbiBpcyBhIG1hdGVyaWFsIHNwZWNpZmljYXRpb24gdGhhdCBoYXMgdmFyaW91cyBmZWF0dXJlcy5cbiAqIFRoZSBzcGVjIGFuZCBpbXBsZW1lbnRhdGlvbiBhcmUgb3JpZ2luYWxseSBmb3VuZGVkIGZvciBVbml0eSBlbmdpbmUgYW5kIHRoaXMgaXMgYSBwb3J0IG9mIHRoZSBtYXRlcmlhbC5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9TYW50YXJoL01Ub29uXG4gKi9cbmV4cG9ydCBjbGFzcyBNVG9vbk1hdGVyaWFsIGV4dGVuZHMgVEhSRUUuU2hhZGVyTWF0ZXJpYWwge1xuICBwdWJsaWMgdW5pZm9ybXM6IHtcbiAgICBsaXRGYWN0b3I6IFRIUkVFLklVbmlmb3JtPFRIUkVFLkNvbG9yPjtcbiAgICBhbHBoYVRlc3Q6IFRIUkVFLklVbmlmb3JtPG51bWJlcj47XG4gICAgb3BhY2l0eTogVEhSRUUuSVVuaWZvcm08bnVtYmVyPjtcbiAgICBtYXA6IFRIUkVFLklVbmlmb3JtPFRIUkVFLlRleHR1cmUgfCBudWxsPjtcbiAgICBtYXBVdlRyYW5zZm9ybTogVEhSRUUuSVVuaWZvcm08VEhSRUUuTWF0cml4Mz47XG4gICAgbm9ybWFsTWFwOiBUSFJFRS5JVW5pZm9ybTxUSFJFRS5UZXh0dXJlIHwgbnVsbD47XG4gICAgbm9ybWFsTWFwVXZUcmFuc2Zvcm06IFRIUkVFLklVbmlmb3JtPFRIUkVFLk1hdHJpeDM+O1xuICAgIG5vcm1hbFNjYWxlOiBUSFJFRS5JVW5pZm9ybTxUSFJFRS5WZWN0b3IyPjtcbiAgICBlbWlzc2l2ZTogVEhSRUUuSVVuaWZvcm08VEhSRUUuQ29sb3I+O1xuICAgIGVtaXNzaXZlSW50ZW5zaXR5OiBUSFJFRS5JVW5pZm9ybTxudW1iZXI+O1xuICAgIGVtaXNzaXZlTWFwOiBUSFJFRS5JVW5pZm9ybTxUSFJFRS5UZXh0dXJlIHwgbnVsbD47XG4gICAgZW1pc3NpdmVNYXBVdlRyYW5zZm9ybTogVEhSRUUuSVVuaWZvcm08VEhSRUUuTWF0cml4Mz47XG4gICAgc2hhZGVDb2xvckZhY3RvcjogVEhSRUUuSVVuaWZvcm08VEhSRUUuQ29sb3I+O1xuICAgIHNoYWRlTXVsdGlwbHlUZXh0dXJlOiBUSFJFRS5JVW5pZm9ybTxUSFJFRS5UZXh0dXJlIHwgbnVsbD47XG4gICAgc2hhZGVNdWx0aXBseVRleHR1cmVVdlRyYW5zZm9ybTogVEhSRUUuSVVuaWZvcm08VEhSRUUuTWF0cml4Mz47XG4gICAgc2hhZGluZ1NoaWZ0RmFjdG9yOiBUSFJFRS5JVW5pZm9ybTxudW1iZXI+O1xuICAgIHNoYWRpbmdTaGlmdFRleHR1cmU6IFRIUkVFLklVbmlmb3JtPFRIUkVFLlRleHR1cmUgfCBudWxsPjtcbiAgICBzaGFkaW5nU2hpZnRUZXh0dXJlVXZUcmFuc2Zvcm06IFRIUkVFLklVbmlmb3JtPFRIUkVFLk1hdHJpeDM+O1xuICAgIHNoYWRpbmdTaGlmdFRleHR1cmVTY2FsZTogVEhSRUUuSVVuaWZvcm08bnVtYmVyPjtcbiAgICBzaGFkaW5nVG9vbnlGYWN0b3I6IFRIUkVFLklVbmlmb3JtPG51bWJlcj47XG4gICAgZ2lFcXVhbGl6YXRpb25GYWN0b3I6IFRIUkVFLklVbmlmb3JtPG51bWJlcj47XG4gICAgbWF0Y2FwRmFjdG9yOiBUSFJFRS5JVW5pZm9ybTxUSFJFRS5Db2xvcj47XG4gICAgbWF0Y2FwVGV4dHVyZTogVEhSRUUuSVVuaWZvcm08VEhSRUUuVGV4dHVyZSB8IG51bGw+O1xuICAgIG1hdGNhcFRleHR1cmVVdlRyYW5zZm9ybTogVEhSRUUuSVVuaWZvcm08VEhSRUUuTWF0cml4Mz47XG4gICAgcGFyYW1ldHJpY1JpbUNvbG9yRmFjdG9yOiBUSFJFRS5JVW5pZm9ybTxUSFJFRS5Db2xvcj47XG4gICAgcmltTXVsdGlwbHlUZXh0dXJlOiBUSFJFRS5JVW5pZm9ybTxUSFJFRS5UZXh0dXJlIHwgbnVsbD47XG4gICAgcmltTXVsdGlwbHlUZXh0dXJlVXZUcmFuc2Zvcm06IFRIUkVFLklVbmlmb3JtPFRIUkVFLk1hdHJpeDM+O1xuICAgIHJpbUxpZ2h0aW5nTWl4RmFjdG9yOiBUSFJFRS5JVW5pZm9ybTxudW1iZXI+O1xuICAgIHBhcmFtZXRyaWNSaW1GcmVzbmVsUG93ZXJGYWN0b3I6IFRIUkVFLklVbmlmb3JtPG51bWJlcj47XG4gICAgcGFyYW1ldHJpY1JpbUxpZnRGYWN0b3I6IFRIUkVFLklVbmlmb3JtPG51bWJlcj47XG4gICAgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlOiBUSFJFRS5JVW5pZm9ybTxUSFJFRS5UZXh0dXJlIHwgbnVsbD47XG4gICAgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlVXZUcmFuc2Zvcm06IFRIUkVFLklVbmlmb3JtPFRIUkVFLk1hdHJpeDM+O1xuICAgIG91dGxpbmVXaWR0aEZhY3RvcjogVEhSRUUuSVVuaWZvcm08bnVtYmVyPjtcbiAgICBvdXRsaW5lQ29sb3JGYWN0b3I6IFRIUkVFLklVbmlmb3JtPFRIUkVFLkNvbG9yPjtcbiAgICBvdXRsaW5lTGlnaHRpbmdNaXhGYWN0b3I6IFRIUkVFLklVbmlmb3JtPG51bWJlcj47XG4gICAgdXZBbmltYXRpb25NYXNrVGV4dHVyZTogVEhSRUUuSVVuaWZvcm08VEhSRUUuVGV4dHVyZSB8IG51bGw+O1xuICAgIHV2QW5pbWF0aW9uTWFza1RleHR1cmVVdlRyYW5zZm9ybTogVEhSRUUuSVVuaWZvcm08VEhSRUUuTWF0cml4Mz47XG4gICAgdXZBbmltYXRpb25TY3JvbGxYT2Zmc2V0OiBUSFJFRS5JVW5pZm9ybTxudW1iZXI+O1xuICAgIHV2QW5pbWF0aW9uU2Nyb2xsWU9mZnNldDogVEhSRUUuSVVuaWZvcm08bnVtYmVyPjtcbiAgICB1dkFuaW1hdGlvblJvdGF0aW9uUGhhc2U6IFRIUkVFLklVbmlmb3JtPG51bWJlcj47XG4gIH07XG5cbiAgcHVibGljIGdldCBjb2xvcigpOiBUSFJFRS5Db2xvciB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybXMubGl0RmFjdG9yLnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgY29sb3IodmFsdWU6IFRIUkVFLkNvbG9yKSB7XG4gICAgdGhpcy51bmlmb3Jtcy5saXRGYWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWFwKCk6IFRIUkVFLlRleHR1cmUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy5tYXAudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBtYXAodmFsdWU6IFRIUkVFLlRleHR1cmUgfCBudWxsKSB7XG4gICAgdGhpcy51bmlmb3Jtcy5tYXAudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbm9ybWFsTWFwKCk6IFRIUkVFLlRleHR1cmUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy5ub3JtYWxNYXAudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBub3JtYWxNYXAodmFsdWU6IFRIUkVFLlRleHR1cmUgfCBudWxsKSB7XG4gICAgdGhpcy51bmlmb3Jtcy5ub3JtYWxNYXAudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbm9ybWFsU2NhbGUoKTogVEhSRUUuVmVjdG9yMiB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybXMubm9ybWFsU2NhbGUudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBub3JtYWxTY2FsZSh2YWx1ZTogVEhSRUUuVmVjdG9yMikge1xuICAgIHRoaXMudW5pZm9ybXMubm9ybWFsU2NhbGUudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW1pc3NpdmUoKTogVEhSRUUuQ29sb3Ige1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLmVtaXNzaXZlLnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgZW1pc3NpdmUodmFsdWU6IFRIUkVFLkNvbG9yKSB7XG4gICAgdGhpcy51bmlmb3Jtcy5lbWlzc2l2ZS52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBlbWlzc2l2ZUludGVuc2l0eSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLmVtaXNzaXZlSW50ZW5zaXR5LnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgZW1pc3NpdmVJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudW5pZm9ybXMuZW1pc3NpdmVJbnRlbnNpdHkudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW1pc3NpdmVNYXAoKTogVEhSRUUuVGV4dHVyZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLmVtaXNzaXZlTWFwLnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgZW1pc3NpdmVNYXAodmFsdWU6IFRIUkVFLlRleHR1cmUgfCBudWxsKSB7XG4gICAgdGhpcy51bmlmb3Jtcy5lbWlzc2l2ZU1hcC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGFkZUNvbG9yRmFjdG9yKCk6IFRIUkVFLkNvbG9yIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy5zaGFkZUNvbG9yRmFjdG9yLnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgc2hhZGVDb2xvckZhY3Rvcih2YWx1ZTogVEhSRUUuQ29sb3IpIHtcbiAgICB0aGlzLnVuaWZvcm1zLnNoYWRlQ29sb3JGYWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hhZGVNdWx0aXBseVRleHR1cmUoKTogVEhSRUUuVGV4dHVyZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLnNoYWRlTXVsdGlwbHlUZXh0dXJlLnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgc2hhZGVNdWx0aXBseVRleHR1cmUodmFsdWU6IFRIUkVFLlRleHR1cmUgfCBudWxsKSB7XG4gICAgdGhpcy51bmlmb3Jtcy5zaGFkZU11bHRpcGx5VGV4dHVyZS52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGFkaW5nU2hpZnRGYWN0b3IoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy5zaGFkaW5nU2hpZnRGYWN0b3IudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBzaGFkaW5nU2hpZnRGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudW5pZm9ybXMuc2hhZGluZ1NoaWZ0RmFjdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoYWRpbmdTaGlmdFRleHR1cmUoKTogVEhSRUUuVGV4dHVyZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLnNoYWRpbmdTaGlmdFRleHR1cmUudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBzaGFkaW5nU2hpZnRUZXh0dXJlKHZhbHVlOiBUSFJFRS5UZXh0dXJlIHwgbnVsbCkge1xuICAgIHRoaXMudW5pZm9ybXMuc2hhZGluZ1NoaWZ0VGV4dHVyZS52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGFkaW5nU2hpZnRUZXh0dXJlU2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy5zaGFkaW5nU2hpZnRUZXh0dXJlU2NhbGUudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBzaGFkaW5nU2hpZnRUZXh0dXJlU2NhbGUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudW5pZm9ybXMuc2hhZGluZ1NoaWZ0VGV4dHVyZVNjYWxlLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoYWRpbmdUb29ueUZhY3RvcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLnNoYWRpbmdUb29ueUZhY3Rvci52YWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0IHNoYWRpbmdUb29ueUZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy51bmlmb3Jtcy5zaGFkaW5nVG9vbnlGYWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ2lFcXVhbGl6YXRpb25GYWN0b3IoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy5naUVxdWFsaXphdGlvbkZhY3Rvci52YWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0IGdpRXF1YWxpemF0aW9uRmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnVuaWZvcm1zLmdpRXF1YWxpemF0aW9uRmFjdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hdGNhcEZhY3RvcigpOiBUSFJFRS5Db2xvciB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybXMubWF0Y2FwRmFjdG9yLnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF0Y2FwRmFjdG9yKHZhbHVlOiBUSFJFRS5Db2xvcikge1xuICAgIHRoaXMudW5pZm9ybXMubWF0Y2FwRmFjdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hdGNhcFRleHR1cmUoKTogVEhSRUUuVGV4dHVyZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLm1hdGNhcFRleHR1cmUudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBtYXRjYXBUZXh0dXJlKHZhbHVlOiBUSFJFRS5UZXh0dXJlIHwgbnVsbCkge1xuICAgIHRoaXMudW5pZm9ybXMubWF0Y2FwVGV4dHVyZS52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJhbWV0cmljUmltQ29sb3JGYWN0b3IoKTogVEhSRUUuQ29sb3Ige1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLnBhcmFtZXRyaWNSaW1Db2xvckZhY3Rvci52YWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcmFtZXRyaWNSaW1Db2xvckZhY3Rvcih2YWx1ZTogVEhSRUUuQ29sb3IpIHtcbiAgICB0aGlzLnVuaWZvcm1zLnBhcmFtZXRyaWNSaW1Db2xvckZhY3Rvci52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCByaW1NdWx0aXBseVRleHR1cmUoKTogVEhSRUUuVGV4dHVyZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLnJpbU11bHRpcGx5VGV4dHVyZS52YWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0IHJpbU11bHRpcGx5VGV4dHVyZSh2YWx1ZTogVEhSRUUuVGV4dHVyZSB8IG51bGwpIHtcbiAgICB0aGlzLnVuaWZvcm1zLnJpbU11bHRpcGx5VGV4dHVyZS52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCByaW1MaWdodGluZ01peEZhY3RvcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLnJpbUxpZ2h0aW5nTWl4RmFjdG9yLnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgcmltTGlnaHRpbmdNaXhGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudW5pZm9ybXMucmltTGlnaHRpbmdNaXhGYWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlckZhY3RvcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLnBhcmFtZXRyaWNSaW1GcmVzbmVsUG93ZXJGYWN0b3IudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBwYXJhbWV0cmljUmltRnJlc25lbFBvd2VyRmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnVuaWZvcm1zLnBhcmFtZXRyaWNSaW1GcmVzbmVsUG93ZXJGYWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFyYW1ldHJpY1JpbUxpZnRGYWN0b3IoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy5wYXJhbWV0cmljUmltTGlmdEZhY3Rvci52YWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcmFtZXRyaWNSaW1MaWZ0RmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnVuaWZvcm1zLnBhcmFtZXRyaWNSaW1MaWZ0RmFjdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZSgpOiBUSFJFRS5UZXh0dXJlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybXMub3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlLnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlKHZhbHVlOiBUSFJFRS5UZXh0dXJlIHwgbnVsbCkge1xuICAgIHRoaXMudW5pZm9ybXMub3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG91dGxpbmVXaWR0aEZhY3RvcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLm91dGxpbmVXaWR0aEZhY3Rvci52YWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0IG91dGxpbmVXaWR0aEZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy51bmlmb3Jtcy5vdXRsaW5lV2lkdGhGYWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb3V0bGluZUNvbG9yRmFjdG9yKCk6IFRIUkVFLkNvbG9yIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy5vdXRsaW5lQ29sb3JGYWN0b3IudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBvdXRsaW5lQ29sb3JGYWN0b3IodmFsdWU6IFRIUkVFLkNvbG9yKSB7XG4gICAgdGhpcy51bmlmb3Jtcy5vdXRsaW5lQ29sb3JGYWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybXMub3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yLnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgb3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnVuaWZvcm1zLm91dGxpbmVMaWdodGluZ01peEZhY3Rvci52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCB1dkFuaW1hdGlvbk1hc2tUZXh0dXJlKCk6IFRIUkVFLlRleHR1cmUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy51dkFuaW1hdGlvbk1hc2tUZXh0dXJlLnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgdXZBbmltYXRpb25NYXNrVGV4dHVyZSh2YWx1ZTogVEhSRUUuVGV4dHVyZSB8IG51bGwpIHtcbiAgICB0aGlzLnVuaWZvcm1zLnV2QW5pbWF0aW9uTWFza1RleHR1cmUudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdXZBbmltYXRpb25TY3JvbGxYT2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybXMudXZBbmltYXRpb25TY3JvbGxYT2Zmc2V0LnZhbHVlO1xuICB9XG4gIHB1YmxpYyBzZXQgdXZBbmltYXRpb25TY3JvbGxYT2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnVuaWZvcm1zLnV2QW5pbWF0aW9uU2Nyb2xsWE9mZnNldC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCB1dkFuaW1hdGlvblNjcm9sbFlPZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy51dkFuaW1hdGlvblNjcm9sbFlPZmZzZXQudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCB1dkFuaW1hdGlvblNjcm9sbFlPZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudW5pZm9ybXMudXZBbmltYXRpb25TY3JvbGxZT2Zmc2V0LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHV2QW5pbWF0aW9uUm90YXRpb25QaGFzZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLnV2QW5pbWF0aW9uUm90YXRpb25QaGFzZS52YWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0IHV2QW5pbWF0aW9uUm90YXRpb25QaGFzZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy51bmlmb3Jtcy51dkFuaW1hdGlvblJvdGF0aW9uUGhhc2UudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyB1dkFuaW1hdGlvblNjcm9sbFhTcGVlZEZhY3RvciA9IDAuMDtcbiAgcHVibGljIHV2QW5pbWF0aW9uU2Nyb2xsWVNwZWVkRmFjdG9yID0gMC4wO1xuICBwdWJsaWMgdXZBbmltYXRpb25Sb3RhdGlvblNwZWVkRmFjdG9yID0gMC4wO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBtYXRlcmlhbCBpcyBhZmZlY3RlZCBieSBmb2cuXG4gICAqIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgKi9cbiAgcHVibGljIGZvZyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdpbGwgYmUgcmVhZCBpbiBXZWJHTFByb2dyYW1zXG4gICAqXG4gICAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iLzRmNTIzNmFjM2Q2ZjQxZDkwNGFhNTg0MDFiNDA1NTRlOGZiZGNiMTUvc3JjL3JlbmRlcmVycy93ZWJnbC9XZWJHTFByb2dyYW1zLmpzI0wxOTAtTDE5MVxuICAgKi9cbiAgcHVibGljIG5vcm1hbE1hcFR5cGUgPSBUSFJFRS5UYW5nZW50U3BhY2VOb3JtYWxNYXA7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhpcyBpcyBgdHJ1ZWAsIHZlcnRleCBjb2xvcnMgd2lsbCBiZSBpZ25vcmVkLlxuICAgKiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICovXG4gIHByaXZhdGUgX2lnbm9yZVZlcnRleENvbG9yID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hlbiB0aGlzIGlzIGB0cnVlYCwgdmVydGV4IGNvbG9ycyB3aWxsIGJlIGlnbm9yZWQuXG4gICAqIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgKi9cbiAgcHVibGljIGdldCBpZ25vcmVWZXJ0ZXhDb2xvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faWdub3JlVmVydGV4Q29sb3I7XG4gIH1cbiAgcHVibGljIHNldCBpZ25vcmVWZXJ0ZXhDb2xvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lnbm9yZVZlcnRleENvbG9yID0gdmFsdWU7XG5cbiAgICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3YwQ29tcGF0U2hhZGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlcmUgaXMgYSBsaW5lIG9mIHRoZSBzaGFkZXIgY2FsbGVkIFwiY29tbWVudCBvdXQgaWYgeW91IHdhbnQgdG8gUEJSIGFic29sdXRlbHlcIiBpbiBWUk0wLjAgTVRvb24uXG4gICAqIFdoZW4gdGhpcyBpcyB0cnVlLCB0aGUgbWF0ZXJpYWwgZW5hYmxlcyB0aGUgbGluZSB0byBtYWtlIGl0IGNvbXBhdGlibGUgd2l0aCB0aGUgbGVnYWN5IHJlbmRlcmluZyBvZiBWUk0uXG4gICAqIFVzdWFsbHkgbm90IHJlY29tbWVuZGVkIHRvIHR1cm4gdGhpcyBvbi5cbiAgICogYGZhbHNlYCBieSBkZWZhdWx0LlxuICAgKi9cbiAgZ2V0IHYwQ29tcGF0U2hhZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3YwQ29tcGF0U2hhZGU7XG4gIH1cblxuICAvKipcbiAgICogVGhlcmUgaXMgYSBsaW5lIG9mIHRoZSBzaGFkZXIgY2FsbGVkIFwiY29tbWVudCBvdXQgaWYgeW91IHdhbnQgdG8gUEJSIGFic29sdXRlbHlcIiBpbiBWUk0wLjAgTVRvb24uXG4gICAqIFdoZW4gdGhpcyBpcyB0cnVlLCB0aGUgbWF0ZXJpYWwgZW5hYmxlcyB0aGUgbGluZSB0byBtYWtlIGl0IGNvbXBhdGlibGUgd2l0aCB0aGUgbGVnYWN5IHJlbmRlcmluZyBvZiBWUk0uXG4gICAqIFVzdWFsbHkgbm90IHJlY29tbWVuZGVkIHRvIHR1cm4gdGhpcyBvbi5cbiAgICogYGZhbHNlYCBieSBkZWZhdWx0LlxuICAgKi9cbiAgc2V0IHYwQ29tcGF0U2hhZGUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3YwQ29tcGF0U2hhZGUgPSB2O1xuXG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9kZWJ1Z01vZGU6IE1Ub29uTWF0ZXJpYWxEZWJ1Z01vZGUgPSBNVG9vbk1hdGVyaWFsRGVidWdNb2RlLk5vbmU7XG5cbiAgLyoqXG4gICAqIERlYnVnIG1vZGUgZm9yIHRoZSBtYXRlcmlhbC5cbiAgICogWW91IGNhbiB2aXN1YWxpemUgc2V2ZXJhbCBjb21wb25lbnRzIGZvciBkaWFnbm9zaXMgdXNpbmcgZGVidWcgbW9kZS5cbiAgICpcbiAgICogU2VlOiB7QGxpbmsgTVRvb25NYXRlcmlhbERlYnVnTW9kZX1cbiAgICovXG4gIGdldCBkZWJ1Z01vZGUoKTogTVRvb25NYXRlcmlhbERlYnVnTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlYnVnTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWJ1ZyBtb2RlIGZvciB0aGUgbWF0ZXJpYWwuXG4gICAqIFlvdSBjYW4gdmlzdWFsaXplIHNldmVyYWwgY29tcG9uZW50cyBmb3IgZGlhZ25vc2lzIHVzaW5nIGRlYnVnIG1vZGUuXG4gICAqXG4gICAqIFNlZToge0BsaW5rIE1Ub29uTWF0ZXJpYWxEZWJ1Z01vZGV9XG4gICAqL1xuICBzZXQgZGVidWdNb2RlKG06IE1Ub29uTWF0ZXJpYWxEZWJ1Z01vZGUpIHtcbiAgICB0aGlzLl9kZWJ1Z01vZGUgPSBtO1xuXG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9vdXRsaW5lV2lkdGhNb2RlOiBNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZSA9IE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlLk5vbmU7XG5cbiAgZ2V0IG91dGxpbmVXaWR0aE1vZGUoKTogTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUge1xuICAgIHJldHVybiB0aGlzLl9vdXRsaW5lV2lkdGhNb2RlO1xuICB9XG4gIHNldCBvdXRsaW5lV2lkdGhNb2RlKG06IE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlKSB7XG4gICAgdGhpcy5fb3V0bGluZVdpZHRoTW9kZSA9IG07XG5cbiAgICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzT3V0bGluZSA9IGZhbHNlO1xuXG4gIGdldCBpc091dGxpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3V0bGluZTtcbiAgfVxuICBzZXQgaXNPdXRsaW5lKGI6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc091dGxpbmUgPSBiO1xuXG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVhZG9ubHkgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB0aGlzIGlzIGEgW1tNVG9vbk1hdGVyaWFsXV0uXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlzTVRvb25NYXRlcmlhbCgpOiB0cnVlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnM6IE1Ub29uTWF0ZXJpYWxQYXJhbWV0ZXJzID0ge30pIHtcbiAgICBzdXBlcih7IHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIgfSk7XG5cbiAgICAvLyBvdmVycmlkZSBkZXB0aFdyaXRlIHdpdGggdHJhbnNwYXJlbnRXaXRoWldyaXRlXG4gICAgaWYgKHBhcmFtZXRlcnMudHJhbnNwYXJlbnRXaXRoWldyaXRlKSB7XG4gICAgICBwYXJhbWV0ZXJzLmRlcHRoV3JpdGUgPSB0cnVlO1xuICAgIH1cbiAgICBkZWxldGUgcGFyYW1ldGVycy50cmFuc3BhcmVudFdpdGhaV3JpdGU7XG5cbiAgICAvLyA9PSBlbmFibGluZyBidW5jaCBvZiBzdHVmZiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBwYXJhbWV0ZXJzLmZvZyA9IHRydWU7XG4gICAgcGFyYW1ldGVycy5saWdodHMgPSB0cnVlO1xuICAgIHBhcmFtZXRlcnMuY2xpcHBpbmcgPSB0cnVlO1xuXG4gICAgLy8gPT0gdW5pZm9ybXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgdGhpcy51bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMubWVyZ2UoW1xuICAgICAgVEhSRUUuVW5pZm9ybXNMaWIuY29tbW9uLCAvLyBtYXBcbiAgICAgIFRIUkVFLlVuaWZvcm1zTGliLm5vcm1hbG1hcCwgLy8gbm9ybWFsTWFwXG4gICAgICBUSFJFRS5Vbmlmb3Jtc0xpYi5lbWlzc2l2ZW1hcCwgLy8gZW1pc3NpdmVNYXBcbiAgICAgIFRIUkVFLlVuaWZvcm1zTGliLmZvZyxcbiAgICAgIFRIUkVFLlVuaWZvcm1zTGliLmxpZ2h0cyxcbiAgICAgIHtcbiAgICAgICAgbGl0RmFjdG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMS4wLCAxLjAsIDEuMCkgfSxcbiAgICAgICAgbWFwVXZUcmFuc2Zvcm06IHsgdmFsdWU6IG5ldyBUSFJFRS5NYXRyaXgzKCkgfSxcbiAgICAgICAgY29sb3JBbHBoYTogeyB2YWx1ZTogMS4wIH0sXG4gICAgICAgIG5vcm1hbE1hcFV2VHJhbnNmb3JtOiB7IHZhbHVlOiBuZXcgVEhSRUUuTWF0cml4MygpIH0sXG4gICAgICAgIHNoYWRlQ29sb3JGYWN0b3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLjAsIDAuMCwgMC4wKSB9LFxuICAgICAgICBzaGFkZU11bHRpcGx5VGV4dHVyZTogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICBzaGFkZU11bHRpcGx5VGV4dHVyZVV2VHJhbnNmb3JtOiB7IHZhbHVlOiBuZXcgVEhSRUUuTWF0cml4MygpIH0sXG4gICAgICAgIHNoYWRpbmdTaGlmdEZhY3RvcjogeyB2YWx1ZTogMC4wIH0sXG4gICAgICAgIHNoYWRpbmdTaGlmdFRleHR1cmU6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgc2hhZGluZ1NoaWZ0VGV4dHVyZVV2VHJhbnNmb3JtOiB7IHZhbHVlOiBuZXcgVEhSRUUuTWF0cml4MygpIH0sXG4gICAgICAgIHNoYWRpbmdTaGlmdFRleHR1cmVTY2FsZTogeyB2YWx1ZTogMS4wIH0sXG4gICAgICAgIHNoYWRpbmdUb29ueUZhY3RvcjogeyB2YWx1ZTogMC45IH0sXG4gICAgICAgIGdpRXF1YWxpemF0aW9uRmFjdG9yOiB7IHZhbHVlOiAwLjkgfSxcbiAgICAgICAgbWF0Y2FwRmFjdG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMS4wLCAxLjAsIDEuMCkgfSxcbiAgICAgICAgbWF0Y2FwVGV4dHVyZTogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICBtYXRjYXBUZXh0dXJlVXZUcmFuc2Zvcm06IHsgdmFsdWU6IG5ldyBUSFJFRS5NYXRyaXgzKCkgfSxcbiAgICAgICAgcGFyYW1ldHJpY1JpbUNvbG9yRmFjdG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMC4wLCAwLjAsIDAuMCkgfSxcbiAgICAgICAgcmltTXVsdGlwbHlUZXh0dXJlOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgIHJpbU11bHRpcGx5VGV4dHVyZVV2VHJhbnNmb3JtOiB7IHZhbHVlOiBuZXcgVEhSRUUuTWF0cml4MygpIH0sXG4gICAgICAgIHJpbUxpZ2h0aW5nTWl4RmFjdG9yOiB7IHZhbHVlOiAxLjAgfSxcbiAgICAgICAgcGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlckZhY3RvcjogeyB2YWx1ZTogNS4wIH0sXG4gICAgICAgIHBhcmFtZXRyaWNSaW1MaWZ0RmFjdG9yOiB7IHZhbHVlOiAwLjAgfSxcbiAgICAgICAgZW1pc3NpdmU6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLjAsIDAuMCwgMC4wKSB9LFxuICAgICAgICBlbWlzc2l2ZUludGVuc2l0eTogeyB2YWx1ZTogMS4wIH0sXG4gICAgICAgIGVtaXNzaXZlTWFwVXZUcmFuc2Zvcm06IHsgdmFsdWU6IG5ldyBUSFJFRS5NYXRyaXgzKCkgfSxcbiAgICAgICAgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgIG91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZVV2VHJhbnNmb3JtOiB7IHZhbHVlOiBuZXcgVEhSRUUuTWF0cml4MygpIH0sXG4gICAgICAgIG91dGxpbmVXaWR0aEZhY3RvcjogeyB2YWx1ZTogMC4wIH0sXG4gICAgICAgIG91dGxpbmVDb2xvckZhY3RvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDAuMCwgMC4wLCAwLjApIH0sXG4gICAgICAgIG91dGxpbmVMaWdodGluZ01peEZhY3RvcjogeyB2YWx1ZTogMS4wIH0sXG4gICAgICAgIHV2QW5pbWF0aW9uTWFza1RleHR1cmU6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgdXZBbmltYXRpb25NYXNrVGV4dHVyZVV2VHJhbnNmb3JtOiB7IHZhbHVlOiBuZXcgVEhSRUUuTWF0cml4MygpIH0sXG4gICAgICAgIHV2QW5pbWF0aW9uU2Nyb2xsWE9mZnNldDogeyB2YWx1ZTogMC4wIH0sXG4gICAgICAgIHV2QW5pbWF0aW9uU2Nyb2xsWU9mZnNldDogeyB2YWx1ZTogMC4wIH0sXG4gICAgICAgIHV2QW5pbWF0aW9uUm90YXRpb25QaGFzZTogeyB2YWx1ZTogMC4wIH0sXG4gICAgICB9LFxuICAgICAgcGFyYW1ldGVycy51bmlmb3JtcyA/PyB7fSxcbiAgICBdKSBhcyB0eXBlb2YgTVRvb25NYXRlcmlhbC5wcm90b3R5cGUudW5pZm9ybXM7XG5cbiAgICAvLyA9PSBmaW5hbGx5IGNvbXBpbGUgdGhlIHNoYWRlciBwcm9ncmFtID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB0aGlzLnNldFZhbHVlcyhwYXJhbWV0ZXJzKTtcblxuICAgIC8vID09IHVwbG9hZCB1bmlmb3JtcyB0aGF0IG5lZWQgdG8gdXBsb2FkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHRoaXMuX3VwbG9hZFVuaWZvcm1zV29ya2Fyb3VuZCgpO1xuXG4gICAgLy8gPT0gdXBkYXRlIHNoYWRlciBzdHVmZiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgdGhpcy5jdXN0b21Qcm9ncmFtQ2FjaGVLZXkgPSAoKSA9PlxuICAgICAgW1xuICAgICAgICAuLi5PYmplY3QuZW50cmllcyh0aGlzLl9nZW5lcmF0ZURlZmluZXMoKSkubWFwKChbdG9rZW4sIG1hY3JvXSkgPT4gYCR7dG9rZW59OiR7bWFjcm99YCksXG4gICAgICAgIHRoaXMubWF0Y2FwVGV4dHVyZSA/IGBtYXRjYXBUZXh0dXJlQ29sb3JTcGFjZToke2dldFRleHR1cmVDb2xvclNwYWNlKHRoaXMubWF0Y2FwVGV4dHVyZSl9YCA6ICcnLFxuICAgICAgICB0aGlzLnNoYWRlTXVsdGlwbHlUZXh0dXJlXG4gICAgICAgICAgPyBgc2hhZGVNdWx0aXBseVRleHR1cmVDb2xvclNwYWNlOiR7Z2V0VGV4dHVyZUNvbG9yU3BhY2UodGhpcy5zaGFkZU11bHRpcGx5VGV4dHVyZSl9YFxuICAgICAgICAgIDogJycsXG4gICAgICAgIHRoaXMucmltTXVsdGlwbHlUZXh0dXJlID8gYHJpbU11bHRpcGx5VGV4dHVyZUNvbG9yU3BhY2U6JHtnZXRUZXh0dXJlQ29sb3JTcGFjZSh0aGlzLnJpbU11bHRpcGx5VGV4dHVyZSl9YCA6ICcnLFxuICAgICAgXS5qb2luKCcsJyk7XG5cbiAgICB0aGlzLm9uQmVmb3JlQ29tcGlsZSA9IChzaGFkZXIpID0+IHtcbiAgICAgIGNvbnN0IHRocmVlUmV2aXNpb24gPSBwYXJzZUludChUSFJFRS5SRVZJU0lPTiwgMTApO1xuXG4gICAgICBjb25zdCBkZWZpbmVzID1cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoeyAuLi50aGlzLl9nZW5lcmF0ZURlZmluZXMoKSwgLi4udGhpcy5kZWZpbmVzIH0pXG4gICAgICAgICAgLmZpbHRlcigoW3Rva2VuLCBtYWNyb10pID0+ICEhbWFjcm8pXG4gICAgICAgICAgLm1hcCgoW3Rva2VuLCBtYWNyb10pID0+IGAjZGVmaW5lICR7dG9rZW59ICR7bWFjcm99YClcbiAgICAgICAgICAuam9pbignXFxuJykgKyAnXFxuJztcblxuICAgICAgLy8gLS0gZ2VuZXJhdGUgc2hhZGVyIGNvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgc2hhZGVyLnZlcnRleFNoYWRlciA9IGRlZmluZXMgKyBzaGFkZXIudmVydGV4U2hhZGVyO1xuICAgICAgc2hhZGVyLmZyYWdtZW50U2hhZGVyID0gZGVmaW5lcyArIHNoYWRlci5mcmFnbWVudFNoYWRlcjtcblxuICAgICAgLy8gLS0gY29tcGF0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAvLyBDT01QQVQ6IHByZS1yMTU0XG4gICAgICAvLyBUaHJlZS5qcyByMTU0IHJlbmFtZXMgdGhlIHNoYWRlciBjaHVuayA8Y29sb3JzcGFjZV9mcmFnbWVudD4gdG8gPGVuY29kaW5nc19mcmFnbWVudD5cbiAgICAgIGlmICh0aHJlZVJldmlzaW9uIDwgMTU0KSB7XG4gICAgICAgIHNoYWRlci5mcmFnbWVudFNoYWRlciA9IHNoYWRlci5mcmFnbWVudFNoYWRlci5yZXBsYWNlKFxuICAgICAgICAgICcjaW5jbHVkZSA8Y29sb3JzcGFjZV9mcmFnbWVudD4nLFxuICAgICAgICAgICcjaW5jbHVkZSA8ZW5jb2RpbmdzX2ZyYWdtZW50PicsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhpcyBtYXRlcmlhbC5cbiAgICpcbiAgICogQHBhcmFtIGRlbHRhIGRlbHRhVGltZSBzaW5jZSBsYXN0IHVwZGF0ZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fdXBsb2FkVW5pZm9ybXNXb3JrYXJvdW5kKCk7XG4gICAgdGhpcy5fdXBkYXRlVVZBbmltYXRpb24oZGVsdGEpO1xuICB9XG5cbiAgcHVibGljIGNvcHkoc291cmNlOiB0aGlzKTogdGhpcyB7XG4gICAgc3VwZXIuY29weShzb3VyY2UpO1xuICAgIC8vIHVuaWZvcm1zIGFyZSBhbHJlYWR5IGNvcGllZCBhdCB0aGlzIG1vbWVudFxuXG4gICAgLy8gQmVnaW5uaW5nIGZyb20gcjEzMywgdW5pZm9ybSB0ZXh0dXJlcyB3aWxsIGJlIGNsb25lZCBpbnN0ZWFkIG9mIHJlZmVyZW5jZVxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL2E4ODEzYmUwNGE4NDliZDE1NWY3Y2Y2ZjFiMjNkOGVlMmUwZmI0OGIvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyNMMzA0N1xuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL2E4ODEzYmUwNGE4NDliZDE1NWY3Y2Y2ZjFiMjNkOGVlMmUwZmI0OGIvc3JjL3JlbmRlcmVycy9zaGFkZXJzL1VuaWZvcm1zVXRpbHMuanMjTDIyXG4gICAgLy8gVGhpcyB3aWxsIGxlYXZlIHRoZWlyIGAudmVyc2lvbmAgdG8gYmUgYDBgXG4gICAgLy8gYW5kIHRoZXNlIHRleHR1cmVzIHdvbid0IGJlIHVwbG9hZGVkIHRvIEdQVVxuICAgIC8vIFdlIGFyZSBnb2luZyB0byB3b3JrYXJvdW5kIHRoaXMgaW4gaGVyZVxuICAgIC8vIEkndmUgb3BlbmVkIGFuIGlzc3VlIGZvciB0aGlzOiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8yMjcxOFxuICAgIHRoaXMubWFwID0gc291cmNlLm1hcDtcbiAgICB0aGlzLm5vcm1hbE1hcCA9IHNvdXJjZS5ub3JtYWxNYXA7XG4gICAgdGhpcy5lbWlzc2l2ZU1hcCA9IHNvdXJjZS5lbWlzc2l2ZU1hcDtcbiAgICB0aGlzLnNoYWRlTXVsdGlwbHlUZXh0dXJlID0gc291cmNlLnNoYWRlTXVsdGlwbHlUZXh0dXJlO1xuICAgIHRoaXMuc2hhZGluZ1NoaWZ0VGV4dHVyZSA9IHNvdXJjZS5zaGFkaW5nU2hpZnRUZXh0dXJlO1xuICAgIHRoaXMubWF0Y2FwVGV4dHVyZSA9IHNvdXJjZS5tYXRjYXBUZXh0dXJlO1xuICAgIHRoaXMucmltTXVsdGlwbHlUZXh0dXJlID0gc291cmNlLnJpbU11bHRpcGx5VGV4dHVyZTtcbiAgICB0aGlzLm91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZSA9IHNvdXJjZS5vdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmU7XG4gICAgdGhpcy51dkFuaW1hdGlvbk1hc2tUZXh0dXJlID0gc291cmNlLnV2QW5pbWF0aW9uTWFza1RleHR1cmU7XG5cbiAgICAvLyA9PSBjb3B5IG1lbWJlcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB0aGlzLm5vcm1hbE1hcFR5cGUgPSBzb3VyY2Uubm9ybWFsTWFwVHlwZTtcblxuICAgIHRoaXMudXZBbmltYXRpb25TY3JvbGxYU3BlZWRGYWN0b3IgPSBzb3VyY2UudXZBbmltYXRpb25TY3JvbGxYU3BlZWRGYWN0b3I7XG4gICAgdGhpcy51dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvciA9IHNvdXJjZS51dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvcjtcbiAgICB0aGlzLnV2QW5pbWF0aW9uUm90YXRpb25TcGVlZEZhY3RvciA9IHNvdXJjZS51dkFuaW1hdGlvblJvdGF0aW9uU3BlZWRGYWN0b3I7XG5cbiAgICB0aGlzLmlnbm9yZVZlcnRleENvbG9yID0gc291cmNlLmlnbm9yZVZlcnRleENvbG9yO1xuXG4gICAgdGhpcy52MENvbXBhdFNoYWRlID0gc291cmNlLnYwQ29tcGF0U2hhZGU7XG4gICAgdGhpcy5kZWJ1Z01vZGUgPSBzb3VyY2UuZGVidWdNb2RlO1xuICAgIHRoaXMub3V0bGluZVdpZHRoTW9kZSA9IHNvdXJjZS5vdXRsaW5lV2lkdGhNb2RlO1xuXG4gICAgdGhpcy5pc091dGxpbmUgPSBzb3VyY2UuaXNPdXRsaW5lO1xuXG4gICAgLy8gPT0gdXBkYXRlIHNoYWRlciBzdHVmZiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgVVYgYW5pbWF0aW9uIHN0YXRlLlxuICAgKiBJbnRlbmRlZCB0byBiZSBjYWxsZWQgdmlhIHtAbGluayB1cGRhdGV9LlxuICAgKiBAcGFyYW0gZGVsdGEgZGVsdGFUaW1lXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGVVVkFuaW1hdGlvbihkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy51bmlmb3Jtcy51dkFuaW1hdGlvblNjcm9sbFhPZmZzZXQudmFsdWUgKz0gZGVsdGEgKiB0aGlzLnV2QW5pbWF0aW9uU2Nyb2xsWFNwZWVkRmFjdG9yO1xuICAgIHRoaXMudW5pZm9ybXMudXZBbmltYXRpb25TY3JvbGxZT2Zmc2V0LnZhbHVlICs9IGRlbHRhICogdGhpcy51dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvcjtcbiAgICB0aGlzLnVuaWZvcm1zLnV2QW5pbWF0aW9uUm90YXRpb25QaGFzZS52YWx1ZSArPSBkZWx0YSAqIHRoaXMudXZBbmltYXRpb25Sb3RhdGlvblNwZWVkRmFjdG9yO1xuICAgIHRoaXMudW5pZm9ybXMuYWxwaGFUZXN0LnZhbHVlID0gdGhpcy5hbHBoYVRlc3Q7XG5cbiAgICB0aGlzLnVuaWZvcm1zTmVlZFVwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVXBsb2FkIHVuaWZvcm1zIHRoYXQgbmVlZCB0byB1cGxvYWQgYnV0IGRvZXNuJ3QgYXV0b21hdGljYWxseSBiZWNhdXNlIG9mIHJlYXNvbnMuXG4gICAqIEludGVuZGVkIHRvIGJlIGNhbGxlZCB2aWEge0BsaW5rIGNvbnN0cnVjdG9yfSBhbmQge0BsaW5rIHVwZGF0ZX0uXG4gICAqL1xuICBwcml2YXRlIF91cGxvYWRVbmlmb3Jtc1dvcmthcm91bmQoKTogdm9pZCB7XG4gICAgLy8gd29ya2Fyb3VuZDogc2luY2Ugb3BhY2l0eSBpcyBkZWZpbmVkIGFzIGEgcHJvcGVydHkgaW4gVEhSRUUuTWF0ZXJpYWxcbiAgICAvLyBhbmQgY2Fubm90IGJlIG92ZXJyaWRkZW4gYXMgYW4gYWNjZXNzb3IsXG4gICAgLy8gV2UgYXJlIGdvaW5nIHRvIHVwZGF0ZSBvcGFjaXR5IGhlcmVcbiAgICB0aGlzLnVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSB0aGlzLm9wYWNpdHk7XG5cbiAgICAvLyB3b3JrYXJvdW5kOiB0ZXh0dXJlIHRyYW5zZm9ybXMgYXJlIG5vdCB1cGRhdGVkIGF1dG9tYXRpY2FsbHlcbiAgICB0aGlzLl91cGRhdGVUZXh0dXJlTWF0cml4KHRoaXMudW5pZm9ybXMubWFwLCB0aGlzLnVuaWZvcm1zLm1hcFV2VHJhbnNmb3JtKTtcbiAgICB0aGlzLl91cGRhdGVUZXh0dXJlTWF0cml4KHRoaXMudW5pZm9ybXMubm9ybWFsTWFwLCB0aGlzLnVuaWZvcm1zLm5vcm1hbE1hcFV2VHJhbnNmb3JtKTtcbiAgICB0aGlzLl91cGRhdGVUZXh0dXJlTWF0cml4KHRoaXMudW5pZm9ybXMuZW1pc3NpdmVNYXAsIHRoaXMudW5pZm9ybXMuZW1pc3NpdmVNYXBVdlRyYW5zZm9ybSk7XG4gICAgdGhpcy5fdXBkYXRlVGV4dHVyZU1hdHJpeCh0aGlzLnVuaWZvcm1zLnNoYWRlTXVsdGlwbHlUZXh0dXJlLCB0aGlzLnVuaWZvcm1zLnNoYWRlTXVsdGlwbHlUZXh0dXJlVXZUcmFuc2Zvcm0pO1xuICAgIHRoaXMuX3VwZGF0ZVRleHR1cmVNYXRyaXgodGhpcy51bmlmb3Jtcy5zaGFkaW5nU2hpZnRUZXh0dXJlLCB0aGlzLnVuaWZvcm1zLnNoYWRpbmdTaGlmdFRleHR1cmVVdlRyYW5zZm9ybSk7XG4gICAgdGhpcy5fdXBkYXRlVGV4dHVyZU1hdHJpeCh0aGlzLnVuaWZvcm1zLm1hdGNhcFRleHR1cmUsIHRoaXMudW5pZm9ybXMubWF0Y2FwVGV4dHVyZVV2VHJhbnNmb3JtKTtcbiAgICB0aGlzLl91cGRhdGVUZXh0dXJlTWF0cml4KHRoaXMudW5pZm9ybXMucmltTXVsdGlwbHlUZXh0dXJlLCB0aGlzLnVuaWZvcm1zLnJpbU11bHRpcGx5VGV4dHVyZVV2VHJhbnNmb3JtKTtcbiAgICB0aGlzLl91cGRhdGVUZXh0dXJlTWF0cml4KFxuICAgICAgdGhpcy51bmlmb3Jtcy5vdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUsXG4gICAgICB0aGlzLnVuaWZvcm1zLm91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZVV2VHJhbnNmb3JtLFxuICAgICk7XG4gICAgdGhpcy5fdXBkYXRlVGV4dHVyZU1hdHJpeCh0aGlzLnVuaWZvcm1zLnV2QW5pbWF0aW9uTWFza1RleHR1cmUsIHRoaXMudW5pZm9ybXMudXZBbmltYXRpb25NYXNrVGV4dHVyZVV2VHJhbnNmb3JtKTtcblxuICAgIHRoaXMudW5pZm9ybXNOZWVkVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbWFwIG9iamVjdCBvZiBwcmVwcm9jZXNzb3IgdG9rZW4gYW5kIG1hY3JvIG9mIHRoZSBzaGFkZXIgcHJvZ3JhbS5cbiAgICovXG4gIHByaXZhdGUgX2dlbmVyYXRlRGVmaW5lcygpOiB7IFt0b2tlbjogc3RyaW5nXTogYm9vbGVhbiB8IG51bWJlciB8IHN0cmluZyB9IHtcbiAgICBjb25zdCB0aHJlZVJldmlzaW9uID0gcGFyc2VJbnQoVEhSRUUuUkVWSVNJT04sIDEwKTtcblxuICAgIGNvbnN0IHVzZVV2SW5WZXJ0ID0gdGhpcy5vdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUgIT09IG51bGw7XG4gICAgY29uc3QgdXNlVXZJbkZyYWcgPVxuICAgICAgdGhpcy5tYXAgIT09IG51bGwgfHxcbiAgICAgIHRoaXMubm9ybWFsTWFwICE9PSBudWxsIHx8XG4gICAgICB0aGlzLmVtaXNzaXZlTWFwICE9PSBudWxsIHx8XG4gICAgICB0aGlzLnNoYWRlTXVsdGlwbHlUZXh0dXJlICE9PSBudWxsIHx8XG4gICAgICB0aGlzLnNoYWRpbmdTaGlmdFRleHR1cmUgIT09IG51bGwgfHxcbiAgICAgIHRoaXMucmltTXVsdGlwbHlUZXh0dXJlICE9PSBudWxsIHx8XG4gICAgICB0aGlzLnV2QW5pbWF0aW9uTWFza1RleHR1cmUgIT09IG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gVGVtcG9yYXJ5IGNvbXBhdCBhZ2FpbnN0IHNoYWRlciBjaGFuZ2UgQCBUaHJlZS5qcyByMTI2XG4gICAgICAvLyBTZWU6ICMyMTIwNSwgIzIxMzA3LCAjMjEyOTlcbiAgICAgIFRIUkVFX1ZSTV9USFJFRV9SRVZJU0lPTjogdGhyZWVSZXZpc2lvbixcblxuICAgICAgT1VUTElORTogdGhpcy5faXNPdXRsaW5lLFxuICAgICAgTVRPT05fVVNFX1VWOiB1c2VVdkluVmVydCB8fCB1c2VVdkluRnJhZywgLy8gd2UgY2FuJ3QgdXNlIGBVU0VfVVZgICwgaXQgd2lsbCBiZSByZWRlZmluZWQgaW4gV2ViR0xQcm9ncmFtLmpzXG4gICAgICBNVE9PTl9VVlNfVkVSVEVYX09OTFk6IHVzZVV2SW5WZXJ0ICYmICF1c2VVdkluRnJhZyxcbiAgICAgIFYwX0NPTVBBVF9TSEFERTogdGhpcy5fdjBDb21wYXRTaGFkZSxcbiAgICAgIFVTRV9TSEFERU1VTFRJUExZVEVYVFVSRTogdGhpcy5zaGFkZU11bHRpcGx5VGV4dHVyZSAhPT0gbnVsbCxcbiAgICAgIFVTRV9TSEFESU5HU0hJRlRURVhUVVJFOiB0aGlzLnNoYWRpbmdTaGlmdFRleHR1cmUgIT09IG51bGwsXG4gICAgICBVU0VfTUFUQ0FQVEVYVFVSRTogdGhpcy5tYXRjYXBUZXh0dXJlICE9PSBudWxsLFxuICAgICAgVVNFX1JJTU1VTFRJUExZVEVYVFVSRTogdGhpcy5yaW1NdWx0aXBseVRleHR1cmUgIT09IG51bGwsXG4gICAgICBVU0VfT1VUTElORVdJRFRITVVMVElQTFlURVhUVVJFOiB0aGlzLl9pc091dGxpbmUgJiYgdGhpcy5vdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUgIT09IG51bGwsXG4gICAgICBVU0VfVVZBTklNQVRJT05NQVNLVEVYVFVSRTogdGhpcy51dkFuaW1hdGlvbk1hc2tUZXh0dXJlICE9PSBudWxsLFxuICAgICAgSUdOT1JFX1ZFUlRFWF9DT0xPUjogdGhpcy5faWdub3JlVmVydGV4Q29sb3IgPT09IHRydWUsXG4gICAgICBERUJVR19OT1JNQUw6IHRoaXMuX2RlYnVnTW9kZSA9PT0gJ25vcm1hbCcsXG4gICAgICBERUJVR19MSVRTSEFERVJBVEU6IHRoaXMuX2RlYnVnTW9kZSA9PT0gJ2xpdFNoYWRlUmF0ZScsXG4gICAgICBERUJVR19VVjogdGhpcy5fZGVidWdNb2RlID09PSAndXYnLFxuICAgICAgT1VUTElORV9XSURUSF9TQ1JFRU46XG4gICAgICAgIHRoaXMuX2lzT3V0bGluZSAmJiB0aGlzLl9vdXRsaW5lV2lkdGhNb2RlID09PSBNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZS5TY3JlZW5Db29yZGluYXRlcyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVGV4dHVyZU1hdHJpeChzcmM6IFRIUkVFLklVbmlmb3JtPFRIUkVFLlRleHR1cmUgfCBudWxsPiwgZHN0OiBUSFJFRS5JVW5pZm9ybTxUSFJFRS5NYXRyaXgzPik6IHZvaWQge1xuICAgIGlmIChzcmMudmFsdWUpIHtcbiAgICAgIGlmIChzcmMudmFsdWUubWF0cml4QXV0b1VwZGF0ZSkge1xuICAgICAgICBzcmMudmFsdWUudXBkYXRlTWF0cml4KCk7XG4gICAgICB9XG5cbiAgICAgIGRzdC52YWx1ZS5jb3B5KHNyYy52YWx1ZS5tYXRyaXgpO1xuICAgIH1cbiAgfVxufVxuIiwgIi8vICNkZWZpbmUgUEhPTkdcblxudmFyeWluZyB2ZWMzIHZWaWV3UG9zaXRpb247XG5cbiNpZm5kZWYgRkxBVF9TSEFERURcbiAgdmFyeWluZyB2ZWMzIHZOb3JtYWw7XG4jZW5kaWZcblxuI2luY2x1ZGUgPGNvbW1vbj5cblxuLy8gI2luY2x1ZGUgPHV2X3BhcnNfdmVydGV4PlxuI2lmZGVmIE1UT09OX1VTRV9VVlxuICB2YXJ5aW5nIHZlYzIgdlV2O1xuXG4gIC8vIENPTVBBVDogcHJlLXIxNTEgdXNlcyBhIGNvbW1vbiB1dlRyYW5zZm9ybVxuICAjaWYgVEhSRUVfVlJNX1RIUkVFX1JFVklTSU9OIDwgMTUxXG4gICAgdW5pZm9ybSBtYXQzIHV2VHJhbnNmb3JtO1xuICAjZW5kaWZcbiNlbmRpZlxuXG4vLyAjaW5jbHVkZSA8dXYyX3BhcnNfdmVydGV4PlxuLy8gQ09NQVBUOiBwcmUtcjE1MSB1c2VzIHV2MiBmb3IgbGlnaHRNYXAgYW5kIGFvTWFwXG4jaWYgVEhSRUVfVlJNX1RIUkVFX1JFVklTSU9OIDwgMTUxXG4gICNpZiBkZWZpbmVkKCBVU0VfTElHSFRNQVAgKSB8fCBkZWZpbmVkKCBVU0VfQU9NQVAgKVxuICAgIGF0dHJpYnV0ZSB2ZWMyIHV2MjtcbiAgICB2YXJ5aW5nIHZlYzIgdlV2MjtcbiAgICB1bmlmb3JtIG1hdDMgdXYyVHJhbnNmb3JtO1xuICAjZW5kaWZcbiNlbmRpZlxuXG4vLyAjaW5jbHVkZSA8ZGlzcGxhY2VtZW50bWFwX3BhcnNfdmVydGV4PlxuLy8gI2luY2x1ZGUgPGVudm1hcF9wYXJzX3ZlcnRleD5cbiNpbmNsdWRlIDxjb2xvcl9wYXJzX3ZlcnRleD5cbiNpbmNsdWRlIDxmb2dfcGFyc192ZXJ0ZXg+XG4jaW5jbHVkZSA8bW9ycGh0YXJnZXRfcGFyc192ZXJ0ZXg+XG4jaW5jbHVkZSA8c2tpbm5pbmdfcGFyc192ZXJ0ZXg+XG4jaW5jbHVkZSA8c2hhZG93bWFwX3BhcnNfdmVydGV4PlxuI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX3BhcnNfdmVydGV4PlxuI2luY2x1ZGUgPGNsaXBwaW5nX3BsYW5lc19wYXJzX3ZlcnRleD5cblxuI2lmZGVmIFVTRV9PVVRMSU5FV0lEVEhNVUxUSVBMWVRFWFRVUkVcbiAgdW5pZm9ybSBzYW1wbGVyMkQgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlO1xuICB1bmlmb3JtIG1hdDMgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlVXZUcmFuc2Zvcm07XG4jZW5kaWZcblxudW5pZm9ybSBmbG9hdCBvdXRsaW5lV2lkdGhGYWN0b3I7XG5cbnZvaWQgbWFpbigpIHtcblxuICAvLyAjaW5jbHVkZSA8dXZfdmVydGV4PlxuICAjaWZkZWYgTVRPT05fVVNFX1VWXG4gICAgLy8gQ09NUEFUOiBwcmUtcjE1MSB1c2VzIGEgY29tbW9uIHV2VHJhbnNmb3JtXG4gICAgI2lmIFRIUkVFX1ZSTV9USFJFRV9SRVZJU0lPTiA+PSAxNTFcbiAgICAgIHZVdiA9IHV2O1xuICAgICNlbHNlXG4gICAgICB2VXYgPSAoIHV2VHJhbnNmb3JtICogdmVjMyggdXYsIDEgKSApLnh5O1xuICAgICNlbmRpZlxuICAjZW5kaWZcblxuICAvLyAjaW5jbHVkZSA8dXYyX3ZlcnRleD5cbiAgLy8gQ09NQVBUOiBwcmUtcjE1MSB1c2VzIHV2MiBmb3IgbGlnaHRNYXAgYW5kIGFvTWFwXG4gICNpZiBUSFJFRV9WUk1fVEhSRUVfUkVWSVNJT04gPCAxNTFcbiAgICAjaWYgZGVmaW5lZCggVVNFX0xJR0hUTUFQICkgfHwgZGVmaW5lZCggVVNFX0FPTUFQIClcbiAgICAgIHZVdjIgPSAoIHV2MlRyYW5zZm9ybSAqIHZlYzMoIHV2MiwgMSApICkueHk7XG4gICAgI2VuZGlmXG4gICNlbmRpZlxuXG4gICNpbmNsdWRlIDxjb2xvcl92ZXJ0ZXg+XG5cbiAgI2luY2x1ZGUgPGJlZ2lubm9ybWFsX3ZlcnRleD5cbiAgI2luY2x1ZGUgPG1vcnBobm9ybWFsX3ZlcnRleD5cbiAgI2luY2x1ZGUgPHNraW5iYXNlX3ZlcnRleD5cbiAgI2luY2x1ZGUgPHNraW5ub3JtYWxfdmVydGV4PlxuXG4gIC8vIHdlIG5lZWQgdGhpcyB0byBjb21wdXRlIHRoZSBvdXRsaW5lIHByb3Blcmx5XG4gIG9iamVjdE5vcm1hbCA9IG5vcm1hbGl6ZSggb2JqZWN0Tm9ybWFsICk7XG5cbiAgI2luY2x1ZGUgPGRlZmF1bHRub3JtYWxfdmVydGV4PlxuXG4gICNpZm5kZWYgRkxBVF9TSEFERUQgLy8gTm9ybWFsIGNvbXB1dGVkIHdpdGggZGVyaXZhdGl2ZXMgd2hlbiBGTEFUX1NIQURFRFxuICAgIHZOb3JtYWwgPSBub3JtYWxpemUoIHRyYW5zZm9ybWVkTm9ybWFsICk7XG4gICNlbmRpZlxuXG4gICNpbmNsdWRlIDxiZWdpbl92ZXJ0ZXg+XG5cbiAgI2luY2x1ZGUgPG1vcnBodGFyZ2V0X3ZlcnRleD5cbiAgI2luY2x1ZGUgPHNraW5uaW5nX3ZlcnRleD5cbiAgLy8gI2luY2x1ZGUgPGRpc3BsYWNlbWVudG1hcF92ZXJ0ZXg+XG4gICNpbmNsdWRlIDxwcm9qZWN0X3ZlcnRleD5cbiAgI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX3ZlcnRleD5cbiAgI2luY2x1ZGUgPGNsaXBwaW5nX3BsYW5lc192ZXJ0ZXg+XG5cbiAgdlZpZXdQb3NpdGlvbiA9IC0gbXZQb3NpdGlvbi54eXo7XG5cbiAgI2lmZGVmIE9VVExJTkVcbiAgICBmbG9hdCB3b3JsZE5vcm1hbExlbmd0aCA9IGxlbmd0aCggdHJhbnNmb3JtZWROb3JtYWwgKTtcbiAgICB2ZWMzIG91dGxpbmVPZmZzZXQgPSBvdXRsaW5lV2lkdGhGYWN0b3IgKiB3b3JsZE5vcm1hbExlbmd0aCAqIG9iamVjdE5vcm1hbDtcblxuICAgICNpZmRlZiBVU0VfT1VUTElORVdJRFRITVVMVElQTFlURVhUVVJFXG4gICAgICB2ZWMyIG91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZVV2ID0gKCBvdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmVVdlRyYW5zZm9ybSAqIHZlYzMoIHZVdiwgMSApICkueHk7XG4gICAgICBmbG9hdCBvdXRsaW5lVGV4ID0gdGV4dHVyZTJEKCBvdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUsIG91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZVV2ICkuZztcbiAgICAgIG91dGxpbmVPZmZzZXQgKj0gb3V0bGluZVRleDtcbiAgICAjZW5kaWZcblxuICAgICNpZmRlZiBPVVRMSU5FX1dJRFRIX1NDUkVFTlxuICAgICAgb3V0bGluZU9mZnNldCAqPSB2Vmlld1Bvc2l0aW9uLnogLyBwcm9qZWN0aW9uTWF0cml4WyAxIF0ueTtcbiAgICAjZW5kaWZcblxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIG91dGxpbmVPZmZzZXQgKyB0cmFuc2Zvcm1lZCwgMS4wICk7XG5cbiAgICBnbF9Qb3NpdGlvbi56ICs9IDFFLTYgKiBnbF9Qb3NpdGlvbi53OyAvLyBhbnRpLWFydGlmYWN0IG1hZ2ljXG4gICNlbmRpZlxuXG4gICNpbmNsdWRlIDx3b3JsZHBvc192ZXJ0ZXg+XG4gIC8vICNpbmNsdWRlIDxlbnZtYXBfdmVydGV4PlxuICAjaW5jbHVkZSA8c2hhZG93bWFwX3ZlcnRleD5cbiAgI2luY2x1ZGUgPGZvZ192ZXJ0ZXg+XG5cbn0iLCAiLy8gI2RlZmluZSBQSE9OR1xuXG51bmlmb3JtIHZlYzMgbGl0RmFjdG9yO1xuXG51bmlmb3JtIGZsb2F0IG9wYWNpdHk7XG5cbnVuaWZvcm0gdmVjMyBzaGFkZUNvbG9yRmFjdG9yO1xuI2lmZGVmIFVTRV9TSEFERU1VTFRJUExZVEVYVFVSRVxuICB1bmlmb3JtIHNhbXBsZXIyRCBzaGFkZU11bHRpcGx5VGV4dHVyZTtcbiAgdW5pZm9ybSBtYXQzIHNoYWRlTXVsdGlwbHlUZXh0dXJlVXZUcmFuc2Zvcm07XG4jZW5kaWZcblxudW5pZm9ybSBmbG9hdCBzaGFkaW5nU2hpZnRGYWN0b3I7XG51bmlmb3JtIGZsb2F0IHNoYWRpbmdUb29ueUZhY3RvcjtcblxuI2lmZGVmIFVTRV9TSEFESU5HU0hJRlRURVhUVVJFXG4gIHVuaWZvcm0gc2FtcGxlcjJEIHNoYWRpbmdTaGlmdFRleHR1cmU7XG4gIHVuaWZvcm0gbWF0MyBzaGFkaW5nU2hpZnRUZXh0dXJlVXZUcmFuc2Zvcm07XG4gIHVuaWZvcm0gZmxvYXQgc2hhZGluZ1NoaWZ0VGV4dHVyZVNjYWxlO1xuI2VuZGlmXG5cbnVuaWZvcm0gZmxvYXQgZ2lFcXVhbGl6YXRpb25GYWN0b3I7XG5cbnVuaWZvcm0gdmVjMyBwYXJhbWV0cmljUmltQ29sb3JGYWN0b3I7XG4jaWZkZWYgVVNFX1JJTU1VTFRJUExZVEVYVFVSRVxuICB1bmlmb3JtIHNhbXBsZXIyRCByaW1NdWx0aXBseVRleHR1cmU7XG4gIHVuaWZvcm0gbWF0MyByaW1NdWx0aXBseVRleHR1cmVVdlRyYW5zZm9ybTtcbiNlbmRpZlxudW5pZm9ybSBmbG9hdCByaW1MaWdodGluZ01peEZhY3RvcjtcbnVuaWZvcm0gZmxvYXQgcGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlckZhY3RvcjtcbnVuaWZvcm0gZmxvYXQgcGFyYW1ldHJpY1JpbUxpZnRGYWN0b3I7XG5cbiNpZmRlZiBVU0VfTUFUQ0FQVEVYVFVSRVxuICB1bmlmb3JtIHZlYzMgbWF0Y2FwRmFjdG9yO1xuICB1bmlmb3JtIHNhbXBsZXIyRCBtYXRjYXBUZXh0dXJlO1xuICB1bmlmb3JtIG1hdDMgbWF0Y2FwVGV4dHVyZVV2VHJhbnNmb3JtO1xuI2VuZGlmXG5cbnVuaWZvcm0gdmVjMyBlbWlzc2l2ZTtcbnVuaWZvcm0gZmxvYXQgZW1pc3NpdmVJbnRlbnNpdHk7XG5cbnVuaWZvcm0gdmVjMyBvdXRsaW5lQ29sb3JGYWN0b3I7XG51bmlmb3JtIGZsb2F0IG91dGxpbmVMaWdodGluZ01peEZhY3RvcjtcblxuI2lmZGVmIFVTRV9VVkFOSU1BVElPTk1BU0tURVhUVVJFXG4gIHVuaWZvcm0gc2FtcGxlcjJEIHV2QW5pbWF0aW9uTWFza1RleHR1cmU7XG4gIHVuaWZvcm0gbWF0MyB1dkFuaW1hdGlvbk1hc2tUZXh0dXJlVXZUcmFuc2Zvcm07XG4jZW5kaWZcblxudW5pZm9ybSBmbG9hdCB1dkFuaW1hdGlvblNjcm9sbFhPZmZzZXQ7XG51bmlmb3JtIGZsb2F0IHV2QW5pbWF0aW9uU2Nyb2xsWU9mZnNldDtcbnVuaWZvcm0gZmxvYXQgdXZBbmltYXRpb25Sb3RhdGlvblBoYXNlO1xuXG4jaW5jbHVkZSA8Y29tbW9uPlxuI2luY2x1ZGUgPHBhY2tpbmc+XG4jaW5jbHVkZSA8ZGl0aGVyaW5nX3BhcnNfZnJhZ21lbnQ+XG4jaW5jbHVkZSA8Y29sb3JfcGFyc19mcmFnbWVudD5cblxuLy8gI2luY2x1ZGUgPHV2X3BhcnNfZnJhZ21lbnQ+XG4jaWYgKCBkZWZpbmVkKCBNVE9PTl9VU0VfVVYgKSAmJiAhZGVmaW5lZCggTVRPT05fVVZTX1ZFUlRFWF9PTkxZICkgKVxuICB2YXJ5aW5nIHZlYzIgdlV2O1xuI2VuZGlmXG5cbi8vICNpbmNsdWRlIDx1djJfcGFyc19mcmFnbWVudD5cbi8vIENPTUFQVDogcHJlLXIxNTEgdXNlcyB1djIgZm9yIGxpZ2h0TWFwIGFuZCBhb01hcFxuI2lmIFRIUkVFX1ZSTV9USFJFRV9SRVZJU0lPTiA8IDE1MVxuICAjaWYgZGVmaW5lZCggVVNFX0xJR0hUTUFQICkgfHwgZGVmaW5lZCggVVNFX0FPTUFQIClcbiAgICB2YXJ5aW5nIHZlYzIgdlV2MjtcbiAgI2VuZGlmXG4jZW5kaWZcblxuI2luY2x1ZGUgPG1hcF9wYXJzX2ZyYWdtZW50PlxuXG4jaWZkZWYgVVNFX01BUFxuICB1bmlmb3JtIG1hdDMgbWFwVXZUcmFuc2Zvcm07XG4jZW5kaWZcblxuLy8gI2luY2x1ZGUgPGFscGhhbWFwX3BhcnNfZnJhZ21lbnQ+XG5cbiNpbmNsdWRlIDxhbHBoYXRlc3RfcGFyc19mcmFnbWVudD5cblxuI2luY2x1ZGUgPGFvbWFwX3BhcnNfZnJhZ21lbnQ+XG4vLyAjaW5jbHVkZSA8bGlnaHRtYXBfcGFyc19mcmFnbWVudD5cbiNpbmNsdWRlIDxlbWlzc2l2ZW1hcF9wYXJzX2ZyYWdtZW50PlxuXG4jaWZkZWYgVVNFX0VNSVNTSVZFTUFQXG4gIHVuaWZvcm0gbWF0MyBlbWlzc2l2ZU1hcFV2VHJhbnNmb3JtO1xuI2VuZGlmXG5cbi8vICNpbmNsdWRlIDxlbnZtYXBfY29tbW9uX3BhcnNfZnJhZ21lbnQ+XG4vLyAjaW5jbHVkZSA8ZW52bWFwX3BhcnNfZnJhZ21lbnQ+XG4vLyAjaW5jbHVkZSA8Y3ViZV91dl9yZWZsZWN0aW9uX2ZyYWdtZW50PlxuI2luY2x1ZGUgPGZvZ19wYXJzX2ZyYWdtZW50PlxuXG4vLyAjaW5jbHVkZSA8YnNkZnM+XG4vLyBDT01QQVQ6IHByZS1yMTUxIGRvZXNuJ3QgaGF2ZSBCUkRGX0xhbWJlcnQgaW4gPGNvbW1vbj5cbiNpZiBUSFJFRV9WUk1fVEhSRUVfUkVWSVNJT04gPCAxNTFcbiAgdmVjMyBCUkRGX0xhbWJlcnQoIGNvbnN0IGluIHZlYzMgZGlmZnVzZUNvbG9yICkge1xuICAgIHJldHVybiBSRUNJUFJPQ0FMX1BJICogZGlmZnVzZUNvbG9yO1xuICB9XG4jZW5kaWZcblxuI2luY2x1ZGUgPGxpZ2h0c19wYXJzX2JlZ2luPlxuXG4jaW5jbHVkZSA8bm9ybWFsX3BhcnNfZnJhZ21lbnQ+XG5cbi8vICNpbmNsdWRlIDxsaWdodHNfcGhvbmdfcGFyc19mcmFnbWVudD5cbnZhcnlpbmcgdmVjMyB2Vmlld1Bvc2l0aW9uO1xuXG5zdHJ1Y3QgTVRvb25NYXRlcmlhbCB7XG4gIHZlYzMgZGlmZnVzZUNvbG9yO1xuICB2ZWMzIHNoYWRlQ29sb3I7XG4gIGZsb2F0IHNoYWRpbmdTaGlmdDtcbn07XG5cbmZsb2F0IGxpbmVhcnN0ZXAoIGZsb2F0IGEsIGZsb2F0IGIsIGZsb2F0IHQgKSB7XG4gIHJldHVybiBjbGFtcCggKCB0IC0gYSApIC8gKCBiIC0gYSApLCAwLjAsIDEuMCApO1xufVxuXG4vKipcbiAqIENvbnZlcnQgTmRvdEwgaW50byB0b29uIHNoYWRpbmcgZmFjdG9yIHVzaW5nIHNoYWRpbmdTaGlmdCBhbmQgc2hhZGluZ1Rvb255XG4gKi9cbmZsb2F0IGdldFNoYWRpbmcoXG4gIGNvbnN0IGluIGZsb2F0IGRvdE5MLFxuICBjb25zdCBpbiBmbG9hdCBzaGFkb3csXG4gIGNvbnN0IGluIGZsb2F0IHNoYWRpbmdTaGlmdFxuKSB7XG4gIGZsb2F0IHNoYWRpbmcgPSBkb3ROTDtcbiAgc2hhZGluZyA9IHNoYWRpbmcgKyBzaGFkaW5nU2hpZnQ7XG4gIHNoYWRpbmcgPSBsaW5lYXJzdGVwKCAtMS4wICsgc2hhZGluZ1Rvb255RmFjdG9yLCAxLjAgLSBzaGFkaW5nVG9vbnlGYWN0b3IsIHNoYWRpbmcgKTtcbiAgc2hhZGluZyAqPSBzaGFkb3c7XG4gIHJldHVybiBzaGFkaW5nO1xufVxuXG4vKipcbiAqIE1peCBkaWZmdXNlQ29sb3IgYW5kIHNoYWRlQ29sb3IgdXNpbmcgc2hhZGluZyBmYWN0b3IgYW5kIGxpZ2h0IGNvbG9yXG4gKi9cbnZlYzMgZ2V0RGlmZnVzZShcbiAgY29uc3QgaW4gTVRvb25NYXRlcmlhbCBtYXRlcmlhbCxcbiAgY29uc3QgaW4gZmxvYXQgc2hhZGluZyxcbiAgaW4gdmVjMyBsaWdodENvbG9yXG4pIHtcbiAgI2lmZGVmIERFQlVHX0xJVFNIQURFUkFURVxuICAgIHJldHVybiB2ZWMzKCBCUkRGX0xhbWJlcnQoIHNoYWRpbmcgKiBsaWdodENvbG9yICkgKTtcbiAgI2VuZGlmXG5cbiAgdmVjMyBjb2wgPSBsaWdodENvbG9yICogQlJERl9MYW1iZXJ0KCBtaXgoIG1hdGVyaWFsLnNoYWRlQ29sb3IsIG1hdGVyaWFsLmRpZmZ1c2VDb2xvciwgc2hhZGluZyApICk7XG5cbiAgLy8gVGhlIFwiY29tbWVudCBvdXQgaWYgeW91IHdhbnQgdG8gUEJSIGFic29sdXRlbHlcIiBsaW5lXG4gICNpZmRlZiBWMF9DT01QQVRfU0hBREVcbiAgICBjb2wgPSBtaW4oIGNvbCwgbWF0ZXJpYWwuZGlmZnVzZUNvbG9yICk7XG4gICNlbmRpZlxuXG4gIHJldHVybiBjb2w7XG59XG5cbi8vIENPTVBBVDogcHJlLXIxNTYgdXNlcyBhIHN0cnVjdCBHZW9tZXRyaWNDb250ZXh0XG4jaWYgVEhSRUVfVlJNX1RIUkVFX1JFVklTSU9OID49IDE1N1xuICB2b2lkIFJFX0RpcmVjdF9NVG9vbiggY29uc3QgaW4gSW5jaWRlbnRMaWdodCBkaXJlY3RMaWdodCwgY29uc3QgaW4gdmVjMyBnZW9tZXRyeVBvc2l0aW9uLCBjb25zdCBpbiB2ZWMzIGdlb21ldHJ5Tm9ybWFsLCBjb25zdCBpbiB2ZWMzIGdlb21ldHJ5Vmlld0RpciwgY29uc3QgaW4gdmVjMyBnZW9tZXRyeUNsZWFyY29hdE5vcm1hbCwgY29uc3QgaW4gTVRvb25NYXRlcmlhbCBtYXRlcmlhbCwgY29uc3QgaW4gZmxvYXQgc2hhZG93LCBpbm91dCBSZWZsZWN0ZWRMaWdodCByZWZsZWN0ZWRMaWdodCApIHtcbiAgICBmbG9hdCBkb3ROTCA9IGNsYW1wKCBkb3QoIGdlb21ldHJ5Tm9ybWFsLCBkaXJlY3RMaWdodC5kaXJlY3Rpb24gKSwgLTEuMCwgMS4wICk7XG4gICAgdmVjMyBpcnJhZGlhbmNlID0gZGlyZWN0TGlnaHQuY29sb3I7XG5cbiAgICAvLyBkaXJlY3RTcGVjdWxhciB3aWxsIGJlIHVzZWQgZm9yIHJpbSBsaWdodGluZywgbm90IGFuIGFjdHVhbCBzcGVjdWxhclxuICAgIHJlZmxlY3RlZExpZ2h0LmRpcmVjdFNwZWN1bGFyICs9IGlycmFkaWFuY2U7XG5cbiAgICBpcnJhZGlhbmNlICo9IGRvdE5MO1xuXG4gICAgZmxvYXQgc2hhZGluZyA9IGdldFNoYWRpbmcoIGRvdE5MLCBzaGFkb3csIG1hdGVyaWFsLnNoYWRpbmdTaGlmdCApO1xuXG4gICAgLy8gdG9vbiBzaGFkZWQgZGlmZnVzZVxuICAgIHJlZmxlY3RlZExpZ2h0LmRpcmVjdERpZmZ1c2UgKz0gZ2V0RGlmZnVzZSggbWF0ZXJpYWwsIHNoYWRpbmcsIGRpcmVjdExpZ2h0LmNvbG9yICk7XG4gIH1cblxuICB2b2lkIFJFX0luZGlyZWN0RGlmZnVzZV9NVG9vbiggY29uc3QgaW4gdmVjMyBpcnJhZGlhbmNlLCBjb25zdCBpbiB2ZWMzIGdlb21ldHJ5UG9zaXRpb24sIGNvbnN0IGluIHZlYzMgZ2VvbWV0cnlOb3JtYWwsIGNvbnN0IGluIHZlYzMgZ2VvbWV0cnlWaWV3RGlyLCBjb25zdCBpbiB2ZWMzIGdlb21ldHJ5Q2xlYXJjb2F0Tm9ybWFsLCBjb25zdCBpbiBNVG9vbk1hdGVyaWFsIG1hdGVyaWFsLCBpbm91dCBSZWZsZWN0ZWRMaWdodCByZWZsZWN0ZWRMaWdodCApIHtcbiAgICAvLyBpbmRpcmVjdCBkaWZmdXNlIHdpbGwgdXNlIGRpZmZ1c2VDb2xvciwgbm8gc2hhZGVDb2xvciBpbnZvbHZlZFxuICAgIHJlZmxlY3RlZExpZ2h0LmluZGlyZWN0RGlmZnVzZSArPSBpcnJhZGlhbmNlICogQlJERl9MYW1iZXJ0KCBtYXRlcmlhbC5kaWZmdXNlQ29sb3IgKTtcblxuICAgIC8vIGRpcmVjdFNwZWN1bGFyIHdpbGwgYmUgdXNlZCBmb3IgcmltIGxpZ2h0aW5nLCBub3QgYW4gYWN0dWFsIHNwZWN1bGFyXG4gICAgcmVmbGVjdGVkTGlnaHQuZGlyZWN0U3BlY3VsYXIgKz0gaXJyYWRpYW5jZTtcbiAgfVxuI2Vsc2VcbiAgdm9pZCBSRV9EaXJlY3RfTVRvb24oIGNvbnN0IGluIEluY2lkZW50TGlnaHQgZGlyZWN0TGlnaHQsIGNvbnN0IGluIEdlb21ldHJpY0NvbnRleHQgZ2VvbWV0cnksIGNvbnN0IGluIE1Ub29uTWF0ZXJpYWwgbWF0ZXJpYWwsIGNvbnN0IGluIGZsb2F0IHNoYWRvdywgaW5vdXQgUmVmbGVjdGVkTGlnaHQgcmVmbGVjdGVkTGlnaHQgKSB7XG4gICAgZmxvYXQgZG90TkwgPSBjbGFtcCggZG90KCBnZW9tZXRyeS5ub3JtYWwsIGRpcmVjdExpZ2h0LmRpcmVjdGlvbiApLCAtMS4wLCAxLjAgKTtcbiAgICB2ZWMzIGlycmFkaWFuY2UgPSBkaXJlY3RMaWdodC5jb2xvcjtcblxuICAgIC8vIGRpcmVjdFNwZWN1bGFyIHdpbGwgYmUgdXNlZCBmb3IgcmltIGxpZ2h0aW5nLCBub3QgYW4gYWN0dWFsIHNwZWN1bGFyXG4gICAgcmVmbGVjdGVkTGlnaHQuZGlyZWN0U3BlY3VsYXIgKz0gaXJyYWRpYW5jZTtcblxuICAgIGlycmFkaWFuY2UgKj0gZG90Tkw7XG5cbiAgICBmbG9hdCBzaGFkaW5nID0gZ2V0U2hhZGluZyggZG90TkwsIHNoYWRvdywgbWF0ZXJpYWwuc2hhZGluZ1NoaWZ0ICk7XG5cbiAgICAvLyB0b29uIHNoYWRlZCBkaWZmdXNlXG4gICAgcmVmbGVjdGVkTGlnaHQuZGlyZWN0RGlmZnVzZSArPSBnZXREaWZmdXNlKCBtYXRlcmlhbCwgc2hhZGluZywgZGlyZWN0TGlnaHQuY29sb3IgKTtcbiAgfVxuXG4gIHZvaWQgUkVfSW5kaXJlY3REaWZmdXNlX01Ub29uKCBjb25zdCBpbiB2ZWMzIGlycmFkaWFuY2UsIGNvbnN0IGluIEdlb21ldHJpY0NvbnRleHQgZ2VvbWV0cnksIGNvbnN0IGluIE1Ub29uTWF0ZXJpYWwgbWF0ZXJpYWwsIGlub3V0IFJlZmxlY3RlZExpZ2h0IHJlZmxlY3RlZExpZ2h0ICkge1xuICAgIC8vIGluZGlyZWN0IGRpZmZ1c2Ugd2lsbCB1c2UgZGlmZnVzZUNvbG9yLCBubyBzaGFkZUNvbG9yIGludm9sdmVkXG4gICAgcmVmbGVjdGVkTGlnaHQuaW5kaXJlY3REaWZmdXNlICs9IGlycmFkaWFuY2UgKiBCUkRGX0xhbWJlcnQoIG1hdGVyaWFsLmRpZmZ1c2VDb2xvciApO1xuXG4gICAgLy8gZGlyZWN0U3BlY3VsYXIgd2lsbCBiZSB1c2VkIGZvciByaW0gbGlnaHRpbmcsIG5vdCBhbiBhY3R1YWwgc3BlY3VsYXJcbiAgICByZWZsZWN0ZWRMaWdodC5kaXJlY3RTcGVjdWxhciArPSBpcnJhZGlhbmNlO1xuICB9XG4jZW5kaWZcblxuI2RlZmluZSBSRV9EaXJlY3QgUkVfRGlyZWN0X01Ub29uXG4jZGVmaW5lIFJFX0luZGlyZWN0RGlmZnVzZSBSRV9JbmRpcmVjdERpZmZ1c2VfTVRvb25cbiNkZWZpbmUgTWF0ZXJpYWxfTGlnaHRQcm9iZUxPRCggbWF0ZXJpYWwgKSAoMClcblxuI2luY2x1ZGUgPHNoYWRvd21hcF9wYXJzX2ZyYWdtZW50PlxuLy8gI2luY2x1ZGUgPGJ1bXBtYXBfcGFyc19mcmFnbWVudD5cblxuLy8gI2luY2x1ZGUgPG5vcm1hbG1hcF9wYXJzX2ZyYWdtZW50PlxuI2lmZGVmIFVTRV9OT1JNQUxNQVBcblxuICB1bmlmb3JtIHNhbXBsZXIyRCBub3JtYWxNYXA7XG4gIHVuaWZvcm0gbWF0MyBub3JtYWxNYXBVdlRyYW5zZm9ybTtcbiAgdW5pZm9ybSB2ZWMyIG5vcm1hbFNjYWxlO1xuXG4jZW5kaWZcblxuLy8gQ09NUEFUOiBwcmUtcjE1MVxuLy8gVVNFX05PUk1BTE1BUF9PQkpFQ1RTUEFDRSB1c2VkIHRvIGJlIE9CSkVDVFNQQUNFX05PUk1BTE1BUCBpbiBwcmUtcjE1MVxuI2lmIGRlZmluZWQoIFVTRV9OT1JNQUxNQVBfT0JKRUNUU1BBQ0UgKSB8fCBkZWZpbmVkKCBPQkpFQ1RTUEFDRV9OT1JNQUxNQVAgKVxuXG4gIHVuaWZvcm0gbWF0MyBub3JtYWxNYXRyaXg7XG5cbiNlbmRpZlxuXG4vLyBDT01QQVQ6IHByZS1yMTUxXG4vLyBVU0VfTk9STUFMTUFQX1RBTkdFTlRTUEFDRSB1c2VkIHRvIGJlIFRBTkdFTlRTUEFDRV9OT1JNQUxNQVAgaW4gcHJlLXIxNTFcbiNpZiAhIGRlZmluZWQgKCBVU0VfVEFOR0VOVCApICYmICggZGVmaW5lZCAoIFVTRV9OT1JNQUxNQVBfVEFOR0VOVFNQQUNFICkgfHwgZGVmaW5lZCAoIFRBTkdFTlRTUEFDRV9OT1JNQUxNQVAgKSApXG5cbiAgLy8gUGVyLVBpeGVsIFRhbmdlbnQgU3BhY2UgTm9ybWFsIE1hcHBpbmdcbiAgLy8gaHR0cDovL2hhY2tzb2ZsaWZlLmJsb2dzcG90LmNoLzIwMDkvMTEvcGVyLXBpeGVsLXRhbmdlbnQtc3BhY2Utbm9ybWFsLW1hcHBpbmcuaHRtbFxuXG4gIC8vIHRocmVlLXZybSBzcGVjaWZpYyBjaGFuZ2U6IGl0IHJlcXVpcmVzIGB1dmAgYXMgYW4gaW5wdXQgaW4gb3JkZXIgdG8gc3VwcG9ydCB1diBzY3JvbGxzXG5cbiAgLy8gVGVtcG9yYXJ5IGNvbXBhdCBhZ2FpbnN0IHNoYWRlciBjaGFuZ2UgQCBUaHJlZS5qcyByMTI2LCByMTUxXG4gICNpZiBUSFJFRV9WUk1fVEhSRUVfUkVWSVNJT04gPj0gMTUxXG5cbiAgICBtYXQzIGdldFRhbmdlbnRGcmFtZSggdmVjMyBleWVfcG9zLCB2ZWMzIHN1cmZfbm9ybSwgdmVjMiB1diApIHtcblxuICAgICAgdmVjMyBxMCA9IGRGZHgoIGV5ZV9wb3MueHl6ICk7XG4gICAgICB2ZWMzIHExID0gZEZkeSggZXllX3Bvcy54eXogKTtcbiAgICAgIHZlYzIgc3QwID0gZEZkeCggdXYuc3QgKTtcbiAgICAgIHZlYzIgc3QxID0gZEZkeSggdXYuc3QgKTtcblxuICAgICAgdmVjMyBOID0gc3VyZl9ub3JtO1xuXG4gICAgICB2ZWMzIHExcGVycCA9IGNyb3NzKCBxMSwgTiApO1xuICAgICAgdmVjMyBxMHBlcnAgPSBjcm9zcyggTiwgcTAgKTtcblxuICAgICAgdmVjMyBUID0gcTFwZXJwICogc3QwLnggKyBxMHBlcnAgKiBzdDEueDtcbiAgICAgIHZlYzMgQiA9IHExcGVycCAqIHN0MC55ICsgcTBwZXJwICogc3QxLnk7XG5cbiAgICAgIGZsb2F0IGRldCA9IG1heCggZG90KCBULCBUICksIGRvdCggQiwgQiApICk7XG4gICAgICBmbG9hdCBzY2FsZSA9ICggZGV0ID09IDAuMCApID8gMC4wIDogaW52ZXJzZXNxcnQoIGRldCApO1xuXG4gICAgICByZXR1cm4gbWF0MyggVCAqIHNjYWxlLCBCICogc2NhbGUsIE4gKTtcblxuICAgIH1cblxuICAjZWxzZVxuXG4gICAgdmVjMyBwZXJ0dXJiTm9ybWFsMkFyYiggdmVjMiB1diwgdmVjMyBleWVfcG9zLCB2ZWMzIHN1cmZfbm9ybSwgdmVjMyBtYXBOLCBmbG9hdCBmYWNlRGlyZWN0aW9uICkge1xuXG4gICAgICB2ZWMzIHEwID0gdmVjMyggZEZkeCggZXllX3Bvcy54ICksIGRGZHgoIGV5ZV9wb3MueSApLCBkRmR4KCBleWVfcG9zLnogKSApO1xuICAgICAgdmVjMyBxMSA9IHZlYzMoIGRGZHkoIGV5ZV9wb3MueCApLCBkRmR5KCBleWVfcG9zLnkgKSwgZEZkeSggZXllX3Bvcy56ICkgKTtcbiAgICAgIHZlYzIgc3QwID0gZEZkeCggdXYuc3QgKTtcbiAgICAgIHZlYzIgc3QxID0gZEZkeSggdXYuc3QgKTtcblxuICAgICAgdmVjMyBOID0gbm9ybWFsaXplKCBzdXJmX25vcm0gKTtcblxuICAgICAgdmVjMyBxMXBlcnAgPSBjcm9zcyggcTEsIE4gKTtcbiAgICAgIHZlYzMgcTBwZXJwID0gY3Jvc3MoIE4sIHEwICk7XG5cbiAgICAgIHZlYzMgVCA9IHExcGVycCAqIHN0MC54ICsgcTBwZXJwICogc3QxLng7XG4gICAgICB2ZWMzIEIgPSBxMXBlcnAgKiBzdDAueSArIHEwcGVycCAqIHN0MS55O1xuXG4gICAgICAvLyB0aHJlZS12cm0gc3BlY2lmaWMgY2hhbmdlOiBXb3JrYXJvdW5kIGZvciB0aGUgaXNzdWUgdGhhdCBoYXBwZW5zIHdoZW4gZGVsdGEgb2YgdXYgPSAwLjBcbiAgICAgIC8vIFRPRE86IElzIHRoaXMgc3RpbGwgcmVxdWlyZWQ/IE9yIHNoYWxsIEkgbWFrZSBhIFBSIGFib3V0IGl0P1xuICAgICAgaWYgKCBsZW5ndGgoIFQgKSA9PSAwLjAgfHwgbGVuZ3RoKCBCICkgPT0gMC4wICkge1xuICAgICAgICByZXR1cm4gc3VyZl9ub3JtO1xuICAgICAgfVxuXG4gICAgICBmbG9hdCBkZXQgPSBtYXgoIGRvdCggVCwgVCApLCBkb3QoIEIsIEIgKSApO1xuICAgICAgZmxvYXQgc2NhbGUgPSAoIGRldCA9PSAwLjAgKSA/IDAuMCA6IGZhY2VEaXJlY3Rpb24gKiBpbnZlcnNlc3FydCggZGV0ICk7XG5cbiAgICAgIHJldHVybiBub3JtYWxpemUoIFQgKiAoIG1hcE4ueCAqIHNjYWxlICkgKyBCICogKCBtYXBOLnkgKiBzY2FsZSApICsgTiAqIG1hcE4ueiApO1xuXG4gICAgfVxuXG4gICNlbmRpZlxuXG4jZW5kaWZcblxuLy8gI2luY2x1ZGUgPHNwZWN1bGFybWFwX3BhcnNfZnJhZ21lbnQ+XG4jaW5jbHVkZSA8bG9nZGVwdGhidWZfcGFyc19mcmFnbWVudD5cbiNpbmNsdWRlIDxjbGlwcGluZ19wbGFuZXNfcGFyc19mcmFnbWVudD5cblxuLy8gPT0gcG9zdCBjb3JyZWN0aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZvaWQgcG9zdENvcnJlY3Rpb24oKSB7XG4gICNpbmNsdWRlIDx0b25lbWFwcGluZ19mcmFnbWVudD5cbiAgI2luY2x1ZGUgPGNvbG9yc3BhY2VfZnJhZ21lbnQ+XG4gICNpbmNsdWRlIDxmb2dfZnJhZ21lbnQ+XG4gICNpbmNsdWRlIDxwcmVtdWx0aXBsaWVkX2FscGhhX2ZyYWdtZW50PlxuICAjaW5jbHVkZSA8ZGl0aGVyaW5nX2ZyYWdtZW50PlxufVxuXG4vLyA9PSBtYWluIHByb2NlZHVyZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudm9pZCBtYWluKCkge1xuICAjaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX2ZyYWdtZW50PlxuXG4gIHZlYzIgdXYgPSB2ZWMyKDAuNSwgMC41KTtcblxuICAjaWYgKCBkZWZpbmVkKCBNVE9PTl9VU0VfVVYgKSAmJiAhZGVmaW5lZCggTVRPT05fVVZTX1ZFUlRFWF9PTkxZICkgKVxuICAgIHV2ID0gdlV2O1xuXG4gICAgZmxvYXQgdXZBbmltTWFzayA9IDEuMDtcbiAgICAjaWZkZWYgVVNFX1VWQU5JTUFUSU9OTUFTS1RFWFRVUkVcbiAgICAgIHZlYzIgdXZBbmltYXRpb25NYXNrVGV4dHVyZVV2ID0gKCB1dkFuaW1hdGlvbk1hc2tUZXh0dXJlVXZUcmFuc2Zvcm0gKiB2ZWMzKCB1diwgMSApICkueHk7XG4gICAgICB1dkFuaW1NYXNrID0gdGV4dHVyZTJEKCB1dkFuaW1hdGlvbk1hc2tUZXh0dXJlLCB1dkFuaW1hdGlvbk1hc2tUZXh0dXJlVXYgKS5iO1xuICAgICNlbmRpZlxuXG4gICAgZmxvYXQgdXZSb3RDb3MgPSBjb3MoIHV2QW5pbWF0aW9uUm90YXRpb25QaGFzZSAqIHV2QW5pbU1hc2sgKTtcbiAgICBmbG9hdCB1dlJvdFNpbiA9IHNpbiggdXZBbmltYXRpb25Sb3RhdGlvblBoYXNlICogdXZBbmltTWFzayApO1xuICAgIHV2ID0gbWF0MiggdXZSb3RDb3MsIC11dlJvdFNpbiwgdXZSb3RTaW4sIHV2Um90Q29zICkgKiAoIHV2IC0gMC41ICkgKyAwLjU7XG4gICAgdXYgPSB1diArIHZlYzIoIHV2QW5pbWF0aW9uU2Nyb2xsWE9mZnNldCwgdXZBbmltYXRpb25TY3JvbGxZT2Zmc2V0ICkgKiB1dkFuaW1NYXNrO1xuICAjZW5kaWZcblxuICAjaWZkZWYgREVCVUdfVVZcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCAwLjAsIDAuMCwgMC4wLCAxLjAgKTtcbiAgICAjaWYgKCBkZWZpbmVkKCBNVE9PTl9VU0VfVVYgKSAmJiAhZGVmaW5lZCggTVRPT05fVVZTX1ZFUlRFWF9PTkxZICkgKVxuICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggdXYsIDAuMCwgMS4wICk7XG4gICAgI2VuZGlmXG4gICAgcmV0dXJuO1xuICAjZW5kaWZcblxuICB2ZWM0IGRpZmZ1c2VDb2xvciA9IHZlYzQoIGxpdEZhY3Rvciwgb3BhY2l0eSApO1xuICBSZWZsZWN0ZWRMaWdodCByZWZsZWN0ZWRMaWdodCA9IFJlZmxlY3RlZExpZ2h0KCB2ZWMzKCAwLjAgKSwgdmVjMyggMC4wICksIHZlYzMoIDAuMCApLCB2ZWMzKCAwLjAgKSApO1xuICB2ZWMzIHRvdGFsRW1pc3NpdmVSYWRpYW5jZSA9IGVtaXNzaXZlICogZW1pc3NpdmVJbnRlbnNpdHk7XG5cbiAgI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX2ZyYWdtZW50PlxuXG4gIC8vICNpbmNsdWRlIDxtYXBfZnJhZ21lbnQ+XG4gICNpZmRlZiBVU0VfTUFQXG4gICAgdmVjMiBtYXBVdiA9ICggbWFwVXZUcmFuc2Zvcm0gKiB2ZWMzKCB1diwgMSApICkueHk7XG4gICAgdmVjNCBzYW1wbGVkRGlmZnVzZUNvbG9yID0gdGV4dHVyZTJEKCBtYXAsIG1hcFV2ICk7XG4gICAgI2lmZGVmIERFQ09ERV9WSURFT19URVhUVVJFXG4gICAgICBzYW1wbGVkRGlmZnVzZUNvbG9yID0gdmVjNCggbWl4KCBwb3coIHNhbXBsZWREaWZmdXNlQ29sb3IucmdiICogMC45NDc4NjcyOTg2ICsgdmVjMyggMC4wNTIxMzI3MDE0ICksIHZlYzMoIDIuNCApICksIHNhbXBsZWREaWZmdXNlQ29sb3IucmdiICogMC4wNzczOTkzODA4LCB2ZWMzKCBsZXNzVGhhbkVxdWFsKCBzYW1wbGVkRGlmZnVzZUNvbG9yLnJnYiwgdmVjMyggMC4wNDA0NSApICkgKSApLCBzYW1wbGVkRGlmZnVzZUNvbG9yLncgKTtcbiAgICAjZW5kaWZcbiAgICBkaWZmdXNlQ29sb3IgKj0gc2FtcGxlZERpZmZ1c2VDb2xvcjtcbiAgI2VuZGlmXG5cbiAgLy8gI2luY2x1ZGUgPGNvbG9yX2ZyYWdtZW50PlxuICAjaWYgKCBkZWZpbmVkKCBVU0VfQ09MT1IgKSAmJiAhZGVmaW5lZCggSUdOT1JFX1ZFUlRFWF9DT0xPUiApIClcbiAgICBkaWZmdXNlQ29sb3IucmdiICo9IHZDb2xvcjtcbiAgI2VuZGlmXG5cbiAgLy8gI2luY2x1ZGUgPGFscGhhbWFwX2ZyYWdtZW50PlxuXG4gICNpbmNsdWRlIDxhbHBoYXRlc3RfZnJhZ21lbnQ+XG5cbiAgLy8gI2luY2x1ZGUgPHNwZWN1bGFybWFwX2ZyYWdtZW50PlxuXG4gIC8vICNpbmNsdWRlIDxub3JtYWxfZnJhZ21lbnRfYmVnaW4+XG4gIGZsb2F0IGZhY2VEaXJlY3Rpb24gPSBnbF9Gcm9udEZhY2luZyA/IDEuMCA6IC0xLjA7XG5cbiAgI2lmZGVmIEZMQVRfU0hBREVEXG5cbiAgICB2ZWMzIGZkeCA9IGRGZHgoIHZWaWV3UG9zaXRpb24gKTtcbiAgICB2ZWMzIGZkeSA9IGRGZHkoIHZWaWV3UG9zaXRpb24gKTtcbiAgICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSggY3Jvc3MoIGZkeCwgZmR5ICkgKTtcblxuICAjZWxzZVxuXG4gICAgdmVjMyBub3JtYWwgPSBub3JtYWxpemUoIHZOb3JtYWwgKTtcblxuICAgICNpZmRlZiBET1VCTEVfU0lERURcblxuICAgICAgbm9ybWFsICo9IGZhY2VEaXJlY3Rpb247XG5cbiAgICAjZW5kaWZcblxuICAjZW5kaWZcblxuICAjaWZkZWYgVVNFX05PUk1BTE1BUFxuXG4gICAgdmVjMiBub3JtYWxNYXBVdiA9ICggbm9ybWFsTWFwVXZUcmFuc2Zvcm0gKiB2ZWMzKCB1diwgMSApICkueHk7XG5cbiAgI2VuZGlmXG5cbiAgI2lmZGVmIFVTRV9OT1JNQUxNQVBfVEFOR0VOVFNQQUNFXG5cbiAgICAjaWZkZWYgVVNFX1RBTkdFTlRcblxuICAgICAgbWF0MyB0Ym4gPSBtYXQzKCBub3JtYWxpemUoIHZUYW5nZW50ICksIG5vcm1hbGl6ZSggdkJpdGFuZ2VudCApLCBub3JtYWwgKTtcblxuICAgICNlbHNlXG5cbiAgICAgIG1hdDMgdGJuID0gZ2V0VGFuZ2VudEZyYW1lKCAtIHZWaWV3UG9zaXRpb24sIG5vcm1hbCwgbm9ybWFsTWFwVXYgKTtcblxuICAgICNlbmRpZlxuXG4gICAgI2lmIGRlZmluZWQoIERPVUJMRV9TSURFRCApICYmICEgZGVmaW5lZCggRkxBVF9TSEFERUQgKVxuXG4gICAgICB0Ym5bMF0gKj0gZmFjZURpcmVjdGlvbjtcbiAgICAgIHRiblsxXSAqPSBmYWNlRGlyZWN0aW9uO1xuXG4gICAgI2VuZGlmXG5cbiAgI2VuZGlmXG5cbiAgI2lmZGVmIFVTRV9DTEVBUkNPQVRfTk9STUFMTUFQXG5cbiAgICAjaWZkZWYgVVNFX1RBTkdFTlRcblxuICAgICAgbWF0MyB0Ym4yID0gbWF0Myggbm9ybWFsaXplKCB2VGFuZ2VudCApLCBub3JtYWxpemUoIHZCaXRhbmdlbnQgKSwgbm9ybWFsICk7XG5cbiAgICAjZWxzZVxuXG4gICAgICBtYXQzIHRibjIgPSBnZXRUYW5nZW50RnJhbWUoIC0gdlZpZXdQb3NpdGlvbiwgbm9ybWFsLCB2Q2xlYXJjb2F0Tm9ybWFsTWFwVXYgKTtcblxuICAgICNlbmRpZlxuXG4gICAgI2lmIGRlZmluZWQoIERPVUJMRV9TSURFRCApICYmICEgZGVmaW5lZCggRkxBVF9TSEFERUQgKVxuXG4gICAgICB0Ym4yWzBdICo9IGZhY2VEaXJlY3Rpb247XG4gICAgICB0Ym4yWzFdICo9IGZhY2VEaXJlY3Rpb247XG5cbiAgICAjZW5kaWZcblxuICAjZW5kaWZcblxuICAvLyBub24gcGVydHVyYmVkIG5vcm1hbCBmb3IgY2xlYXJjb2F0IGFtb25nIG90aGVyc1xuXG4gIHZlYzMgbm9uUGVydHVyYmVkTm9ybWFsID0gbm9ybWFsO1xuXG4gICNpZmRlZiBPVVRMSU5FXG4gICAgbm9ybWFsICo9IC0xLjA7XG4gICNlbmRpZlxuXG4gIC8vICNpbmNsdWRlIDxub3JtYWxfZnJhZ21lbnRfbWFwcz5cblxuICAvLyBDT01QQVQ6IHByZS1yMTUxXG4gIC8vIFVTRV9OT1JNQUxNQVBfT0JKRUNUU1BBQ0UgdXNlZCB0byBiZSBPQkpFQ1RTUEFDRV9OT1JNQUxNQVAgaW4gcHJlLXIxNTFcbiAgI2lmIGRlZmluZWQoIFVTRV9OT1JNQUxNQVBfT0JKRUNUU1BBQ0UgKSB8fCBkZWZpbmVkKCBPQkpFQ1RTUEFDRV9OT1JNQUxNQVAgKVxuXG4gICAgbm9ybWFsID0gdGV4dHVyZTJEKCBub3JtYWxNYXAsIG5vcm1hbE1hcFV2ICkueHl6ICogMi4wIC0gMS4wOyAvLyBvdmVycmlkZXMgYm90aCBmbGF0U2hhZGluZyBhbmQgYXR0cmlidXRlIG5vcm1hbHNcblxuICAgICNpZmRlZiBGTElQX1NJREVEXG5cbiAgICAgIG5vcm1hbCA9IC0gbm9ybWFsO1xuXG4gICAgI2VuZGlmXG5cbiAgICAjaWZkZWYgRE9VQkxFX1NJREVEXG5cbiAgICAgIG5vcm1hbCA9IG5vcm1hbCAqIGZhY2VEaXJlY3Rpb247XG5cbiAgICAjZW5kaWZcblxuICAgIG5vcm1hbCA9IG5vcm1hbGl6ZSggbm9ybWFsTWF0cml4ICogbm9ybWFsICk7XG5cbiAgLy8gQ09NUEFUOiBwcmUtcjE1MVxuICAvLyBVU0VfTk9STUFMTUFQX1RBTkdFTlRTUEFDRSB1c2VkIHRvIGJlIFRBTkdFTlRTUEFDRV9OT1JNQUxNQVAgaW4gcHJlLXIxNTFcbiAgI2VsaWYgZGVmaW5lZCggVVNFX05PUk1BTE1BUF9UQU5HRU5UU1BBQ0UgKSB8fCBkZWZpbmVkKCBUQU5HRU5UU1BBQ0VfTk9STUFMTUFQIClcblxuICAgIHZlYzMgbWFwTiA9IHRleHR1cmUyRCggbm9ybWFsTWFwLCBub3JtYWxNYXBVdiApLnh5eiAqIDIuMCAtIDEuMDtcbiAgICBtYXBOLnh5ICo9IG5vcm1hbFNjYWxlO1xuXG4gICAgLy8gQ09NUEFUOiBwcmUtcjE1MVxuICAgICNpZiBUSFJFRV9WUk1fVEhSRUVfUkVWSVNJT04gPj0gMTUxIHx8IGRlZmluZWQoIFVTRV9UQU5HRU5UIClcblxuICAgICAgbm9ybWFsID0gbm9ybWFsaXplKCB0Ym4gKiBtYXBOICk7XG5cbiAgICAjZWxzZVxuXG4gICAgICBub3JtYWwgPSBwZXJ0dXJiTm9ybWFsMkFyYiggdXYsIC12Vmlld1Bvc2l0aW9uLCBub3JtYWwsIG1hcE4sIGZhY2VEaXJlY3Rpb24gKTtcblxuICAgICNlbmRpZlxuXG4gICNlbmRpZlxuXG4gIC8vICNpbmNsdWRlIDxlbWlzc2l2ZW1hcF9mcmFnbWVudD5cbiAgI2lmZGVmIFVTRV9FTUlTU0lWRU1BUFxuICAgIHZlYzIgZW1pc3NpdmVNYXBVdiA9ICggZW1pc3NpdmVNYXBVdlRyYW5zZm9ybSAqIHZlYzMoIHV2LCAxICkgKS54eTtcbiAgICB0b3RhbEVtaXNzaXZlUmFkaWFuY2UgKj0gdGV4dHVyZTJEKCBlbWlzc2l2ZU1hcCwgZW1pc3NpdmVNYXBVdiApLnJnYjtcbiAgI2VuZGlmXG5cbiAgI2lmZGVmIERFQlVHX05PUk1BTFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoIDAuNSArIDAuNSAqIG5vcm1hbCwgMS4wICk7XG4gICAgcmV0dXJuO1xuICAjZW5kaWZcblxuICAvLyAtLSBNVG9vbjogbGlnaHRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gYWNjdW11bGF0aW9uXG4gIC8vICNpbmNsdWRlIDxsaWdodHNfcGhvbmdfZnJhZ21lbnQ+XG4gIE1Ub29uTWF0ZXJpYWwgbWF0ZXJpYWw7XG5cbiAgbWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gZGlmZnVzZUNvbG9yLnJnYjtcblxuICBtYXRlcmlhbC5zaGFkZUNvbG9yID0gc2hhZGVDb2xvckZhY3RvcjtcbiAgI2lmZGVmIFVTRV9TSEFERU1VTFRJUExZVEVYVFVSRVxuICAgIHZlYzIgc2hhZGVNdWx0aXBseVRleHR1cmVVdiA9ICggc2hhZGVNdWx0aXBseVRleHR1cmVVdlRyYW5zZm9ybSAqIHZlYzMoIHV2LCAxICkgKS54eTtcbiAgICBtYXRlcmlhbC5zaGFkZUNvbG9yICo9IHRleHR1cmUyRCggc2hhZGVNdWx0aXBseVRleHR1cmUsIHNoYWRlTXVsdGlwbHlUZXh0dXJlVXYgKS5yZ2I7XG4gICNlbmRpZlxuXG4gICNpZiAoIGRlZmluZWQoIFVTRV9DT0xPUiApICYmICFkZWZpbmVkKCBJR05PUkVfVkVSVEVYX0NPTE9SICkgKVxuICAgIG1hdGVyaWFsLnNoYWRlQ29sb3IucmdiICo9IHZDb2xvcjtcbiAgI2VuZGlmXG5cbiAgbWF0ZXJpYWwuc2hhZGluZ1NoaWZ0ID0gc2hhZGluZ1NoaWZ0RmFjdG9yO1xuICAjaWZkZWYgVVNFX1NIQURJTkdTSElGVFRFWFRVUkVcbiAgICB2ZWMyIHNoYWRpbmdTaGlmdFRleHR1cmVVdiA9ICggc2hhZGluZ1NoaWZ0VGV4dHVyZVV2VHJhbnNmb3JtICogdmVjMyggdXYsIDEgKSApLnh5O1xuICAgIG1hdGVyaWFsLnNoYWRpbmdTaGlmdCArPSB0ZXh0dXJlMkQoIHNoYWRpbmdTaGlmdFRleHR1cmUsIHNoYWRpbmdTaGlmdFRleHR1cmVVdiApLnIgKiBzaGFkaW5nU2hpZnRUZXh0dXJlU2NhbGU7XG4gICNlbmRpZlxuXG4gIC8vICNpbmNsdWRlIDxsaWdodHNfZnJhZ21lbnRfYmVnaW4+XG5cbiAgLy8gTVRvb24gU3BlY2lmaWMgY2hhbmdlczpcbiAgLy8gU2luY2Ugd2Ugd2FudCB0byB0YWtlIHNoYWRvd3MgaW50byBhY2NvdW50IG9mIHNoYWRpbmcgaW5zdGVhZCBvZiBpcnJhZGlhbmNlLFxuICAvLyB3ZSBoYWQgdG8gbW9kaWZ5IHRoZSBjb2RlcyB0aGF0IG11bHRpcGxpZXMgdGhlIHJlc3VsdHMgb2Ygc2hhZG93bWFwIGludG8gY29sb3Igb2YgZGlyZWN0IGxpZ2h0cy5cblxuICAvLyBDT01QQVQ6IHByZS1yMTU2IHVzZXMgYSBzdHJ1Y3QgR2VvbWV0cmljQ29udGV4dFxuICAjaWYgVEhSRUVfVlJNX1RIUkVFX1JFVklTSU9OID49IDE1N1xuICAgIHZlYzMgZ2VvbWV0cnlQb3NpdGlvbiA9IC0gdlZpZXdQb3NpdGlvbjtcbiAgICB2ZWMzIGdlb21ldHJ5Tm9ybWFsID0gbm9ybWFsO1xuICAgIHZlYzMgZ2VvbWV0cnlWaWV3RGlyID0gKCBpc09ydGhvZ3JhcGhpYyApID8gdmVjMyggMCwgMCwgMSApIDogbm9ybWFsaXplKCB2Vmlld1Bvc2l0aW9uICk7XG5cbiAgICB2ZWMzIGdlb21ldHJ5Q2xlYXJjb2F0Tm9ybWFsO1xuXG4gICAgI2lmZGVmIFVTRV9DTEVBUkNPQVRcblxuICAgICAgZ2VvbWV0cnlDbGVhcmNvYXROb3JtYWwgPSBjbGVhcmNvYXROb3JtYWw7XG5cbiAgICAjZW5kaWZcbiAgI2Vsc2VcbiAgICBHZW9tZXRyaWNDb250ZXh0IGdlb21ldHJ5O1xuXG4gICAgZ2VvbWV0cnkucG9zaXRpb24gPSAtIHZWaWV3UG9zaXRpb247XG4gICAgZ2VvbWV0cnkubm9ybWFsID0gbm9ybWFsO1xuICAgIGdlb21ldHJ5LnZpZXdEaXIgPSAoIGlzT3J0aG9ncmFwaGljICkgPyB2ZWMzKCAwLCAwLCAxICkgOiBub3JtYWxpemUoIHZWaWV3UG9zaXRpb24gKTtcblxuICAgICNpZmRlZiBVU0VfQ0xFQVJDT0FUXG5cbiAgICAgIGdlb21ldHJ5LmNsZWFyY29hdE5vcm1hbCA9IGNsZWFyY29hdE5vcm1hbDtcblxuICAgICNlbmRpZlxuICAjZW5kaWZcblxuICBJbmNpZGVudExpZ2h0IGRpcmVjdExpZ2h0O1xuXG4gIC8vIHNpbmNlIHRoZXNlIHZhcmlhYmxlcyB3aWxsIGJlIHVzZWQgaW4gdW5yb2xsZWQgbG9vcCwgd2UgaGF2ZSB0byBkZWZpbmUgaW4gcHJpb3JcbiAgZmxvYXQgc2hhZG93O1xuXG4gICNpZiAoIE5VTV9QT0lOVF9MSUdIVFMgPiAwICkgJiYgZGVmaW5lZCggUkVfRGlyZWN0IClcblxuICAgIFBvaW50TGlnaHQgcG9pbnRMaWdodDtcbiAgICAjaWYgZGVmaW5lZCggVVNFX1NIQURPV01BUCApICYmIE5VTV9QT0lOVF9MSUdIVF9TSEFET1dTID4gMFxuICAgIFBvaW50TGlnaHRTaGFkb3cgcG9pbnRMaWdodFNoYWRvdztcbiAgICAjZW5kaWZcblxuICAgICNwcmFnbWEgdW5yb2xsX2xvb3Bfc3RhcnRcbiAgICBmb3IgKCBpbnQgaSA9IDA7IGkgPCBOVU1fUE9JTlRfTElHSFRTOyBpICsrICkge1xuXG4gICAgICBwb2ludExpZ2h0ID0gcG9pbnRMaWdodHNbIGkgXTtcblxuICAgICAgLy8gQ09NUEFUOiBwcmUtcjE1NiB1c2VzIGEgc3RydWN0IEdlb21ldHJpY0NvbnRleHRcbiAgICAgICNpZiBUSFJFRV9WUk1fVEhSRUVfUkVWSVNJT04gPj0gMTU3XG4gICAgICAgIGdldFBvaW50TGlnaHRJbmZvKCBwb2ludExpZ2h0LCBnZW9tZXRyeVBvc2l0aW9uLCBkaXJlY3RMaWdodCApO1xuICAgICAgI2Vsc2VcbiAgICAgICAgZ2V0UG9pbnRMaWdodEluZm8oIHBvaW50TGlnaHQsIGdlb21ldHJ5LCBkaXJlY3RMaWdodCApO1xuICAgICAgI2VuZGlmXG5cbiAgICAgIHNoYWRvdyA9IDEuMDtcbiAgICAgICNpZiBkZWZpbmVkKCBVU0VfU0hBRE9XTUFQICkgJiYgKCBVTlJPTExFRF9MT09QX0lOREVYIDwgTlVNX1BPSU5UX0xJR0hUX1NIQURPV1MgKVxuICAgICAgcG9pbnRMaWdodFNoYWRvdyA9IHBvaW50TGlnaHRTaGFkb3dzWyBpIF07XG4gICAgICAvLyBDT01QQVQ6IHByZS1yMTY2XG4gICAgICAvLyByMTY2IGludHJvZHVjZWQgc2hhZG93SW50ZW5zaXR5XG4gICAgICAjaWYgVEhSRUVfVlJNX1RIUkVFX1JFVklTSU9OID49IDE2NlxuICAgICAgICBzaGFkb3cgPSBhbGwoIGJ2ZWMyKCBkaXJlY3RMaWdodC52aXNpYmxlLCByZWNlaXZlU2hhZG93ICkgKSA/IGdldFBvaW50U2hhZG93KCBwb2ludFNoYWRvd01hcFsgaSBdLCBwb2ludExpZ2h0U2hhZG93LnNoYWRvd01hcFNpemUsIHBvaW50TGlnaHRTaGFkb3cuc2hhZG93SW50ZW5zaXR5LCBwb2ludExpZ2h0U2hhZG93LnNoYWRvd0JpYXMsIHBvaW50TGlnaHRTaGFkb3cuc2hhZG93UmFkaXVzLCB2UG9pbnRTaGFkb3dDb29yZFsgaSBdLCBwb2ludExpZ2h0U2hhZG93LnNoYWRvd0NhbWVyYU5lYXIsIHBvaW50TGlnaHRTaGFkb3cuc2hhZG93Q2FtZXJhRmFyICkgOiAxLjA7XG4gICAgICAjZWxzZVxuICAgICAgICBzaGFkb3cgPSBhbGwoIGJ2ZWMyKCBkaXJlY3RMaWdodC52aXNpYmxlLCByZWNlaXZlU2hhZG93ICkgKSA/IGdldFBvaW50U2hhZG93KCBwb2ludFNoYWRvd01hcFsgaSBdLCBwb2ludExpZ2h0U2hhZG93LnNoYWRvd01hcFNpemUsIHBvaW50TGlnaHRTaGFkb3cuc2hhZG93QmlhcywgcG9pbnRMaWdodFNoYWRvdy5zaGFkb3dSYWRpdXMsIHZQb2ludFNoYWRvd0Nvb3JkWyBpIF0sIHBvaW50TGlnaHRTaGFkb3cuc2hhZG93Q2FtZXJhTmVhciwgcG9pbnRMaWdodFNoYWRvdy5zaGFkb3dDYW1lcmFGYXIgKSA6IDEuMDtcbiAgICAgICNlbmRpZlxuICAgICAgI2VuZGlmXG5cbiAgICAgIC8vIENPTVBBVDogcHJlLXIxNTYgdXNlcyBhIHN0cnVjdCBHZW9tZXRyaWNDb250ZXh0XG4gICAgICAjaWYgVEhSRUVfVlJNX1RIUkVFX1JFVklTSU9OID49IDE1N1xuICAgICAgICBSRV9EaXJlY3QoIGRpcmVjdExpZ2h0LCBnZW9tZXRyeVBvc2l0aW9uLCBnZW9tZXRyeU5vcm1hbCwgZ2VvbWV0cnlWaWV3RGlyLCBnZW9tZXRyeUNsZWFyY29hdE5vcm1hbCwgbWF0ZXJpYWwsIHNoYWRvdywgcmVmbGVjdGVkTGlnaHQgKTtcbiAgICAgICNlbHNlXG4gICAgICAgIFJFX0RpcmVjdCggZGlyZWN0TGlnaHQsIGdlb21ldHJ5LCBtYXRlcmlhbCwgc2hhZG93LCByZWZsZWN0ZWRMaWdodCApO1xuICAgICAgI2VuZGlmXG5cbiAgICB9XG4gICAgI3ByYWdtYSB1bnJvbGxfbG9vcF9lbmRcblxuICAjZW5kaWZcblxuICAjaWYgKCBOVU1fU1BPVF9MSUdIVFMgPiAwICkgJiYgZGVmaW5lZCggUkVfRGlyZWN0IClcblxuICAgIFNwb3RMaWdodCBzcG90TGlnaHQ7XG4gICAgI2lmIGRlZmluZWQoIFVTRV9TSEFET1dNQVAgKSAmJiBOVU1fU1BPVF9MSUdIVF9TSEFET1dTID4gMFxuICAgIFNwb3RMaWdodFNoYWRvdyBzcG90TGlnaHRTaGFkb3c7XG4gICAgI2VuZGlmXG5cbiAgICAjcHJhZ21hIHVucm9sbF9sb29wX3N0YXJ0XG4gICAgZm9yICggaW50IGkgPSAwOyBpIDwgTlVNX1NQT1RfTElHSFRTOyBpICsrICkge1xuXG4gICAgICBzcG90TGlnaHQgPSBzcG90TGlnaHRzWyBpIF07XG5cbiAgICAgIC8vIENPTVBBVDogcHJlLXIxNTYgdXNlcyBhIHN0cnVjdCBHZW9tZXRyaWNDb250ZXh0XG4gICAgICAjaWYgVEhSRUVfVlJNX1RIUkVFX1JFVklTSU9OID49IDE1N1xuICAgICAgICBnZXRTcG90TGlnaHRJbmZvKCBzcG90TGlnaHQsIGdlb21ldHJ5UG9zaXRpb24sIGRpcmVjdExpZ2h0ICk7XG4gICAgICAjZWxzZVxuICAgICAgICBnZXRTcG90TGlnaHRJbmZvKCBzcG90TGlnaHQsIGdlb21ldHJ5LCBkaXJlY3RMaWdodCApO1xuICAgICAgI2VuZGlmXG5cbiAgICAgIHNoYWRvdyA9IDEuMDtcbiAgICAgICNpZiBkZWZpbmVkKCBVU0VfU0hBRE9XTUFQICkgJiYgKCBVTlJPTExFRF9MT09QX0lOREVYIDwgTlVNX1NQT1RfTElHSFRfU0hBRE9XUyApXG4gICAgICBzcG90TGlnaHRTaGFkb3cgPSBzcG90TGlnaHRTaGFkb3dzWyBpIF07XG4gICAgICAvLyBDT01QQVQ6IHByZS1yMTY2XG4gICAgICAvLyByMTY2IGludHJvZHVjZWQgc2hhZG93SW50ZW5zaXR5XG4gICAgICAjaWYgVEhSRUVfVlJNX1RIUkVFX1JFVklTSU9OID49IDE2NlxuICAgICAgICBzaGFkb3cgPSBhbGwoIGJ2ZWMyKCBkaXJlY3RMaWdodC52aXNpYmxlLCByZWNlaXZlU2hhZG93ICkgKSA/IGdldFNoYWRvdyggc3BvdFNoYWRvd01hcFsgaSBdLCBzcG90TGlnaHRTaGFkb3cuc2hhZG93TWFwU2l6ZSwgc3BvdExpZ2h0U2hhZG93LnNoYWRvd0ludGVuc2l0eSwgc3BvdExpZ2h0U2hhZG93LnNoYWRvd0JpYXMsIHNwb3RMaWdodFNoYWRvdy5zaGFkb3dSYWRpdXMsIHZTcG90U2hhZG93Q29vcmRbIGkgXSApIDogMS4wO1xuICAgICAgI2Vsc2VcbiAgICAgICAgc2hhZG93ID0gYWxsKCBidmVjMiggZGlyZWN0TGlnaHQudmlzaWJsZSwgcmVjZWl2ZVNoYWRvdyApICkgPyBnZXRTaGFkb3coIHNwb3RTaGFkb3dNYXBbIGkgXSwgc3BvdExpZ2h0U2hhZG93LnNoYWRvd01hcFNpemUsIHNwb3RMaWdodFNoYWRvdy5zaGFkb3dCaWFzLCBzcG90TGlnaHRTaGFkb3cuc2hhZG93UmFkaXVzLCB2U3BvdFNoYWRvd0Nvb3JkWyBpIF0gKSA6IDEuMDtcbiAgICAgICNlbmRpZlxuICAgICAgI2VuZGlmXG5cbiAgICAgIC8vIENPTVBBVDogcHJlLXIxNTYgdXNlcyBhIHN0cnVjdCBHZW9tZXRyaWNDb250ZXh0XG4gICAgICAjaWYgVEhSRUVfVlJNX1RIUkVFX1JFVklTSU9OID49IDE1N1xuICAgICAgICBSRV9EaXJlY3QoIGRpcmVjdExpZ2h0LCBnZW9tZXRyeVBvc2l0aW9uLCBnZW9tZXRyeU5vcm1hbCwgZ2VvbWV0cnlWaWV3RGlyLCBnZW9tZXRyeUNsZWFyY29hdE5vcm1hbCwgbWF0ZXJpYWwsIHNoYWRvdywgcmVmbGVjdGVkTGlnaHQgKTtcbiAgICAgICNlbHNlXG4gICAgICAgIFJFX0RpcmVjdCggZGlyZWN0TGlnaHQsIGdlb21ldHJ5LCBtYXRlcmlhbCwgc2hhZG93LCByZWZsZWN0ZWRMaWdodCApO1xuICAgICAgI2VuZGlmXG5cbiAgICB9XG4gICAgI3ByYWdtYSB1bnJvbGxfbG9vcF9lbmRcblxuICAjZW5kaWZcblxuICAjaWYgKCBOVU1fRElSX0xJR0hUUyA+IDAgKSAmJiBkZWZpbmVkKCBSRV9EaXJlY3QgKVxuXG4gICAgRGlyZWN0aW9uYWxMaWdodCBkaXJlY3Rpb25hbExpZ2h0O1xuICAgICNpZiBkZWZpbmVkKCBVU0VfU0hBRE9XTUFQICkgJiYgTlVNX0RJUl9MSUdIVF9TSEFET1dTID4gMFxuICAgIERpcmVjdGlvbmFsTGlnaHRTaGFkb3cgZGlyZWN0aW9uYWxMaWdodFNoYWRvdztcbiAgICAjZW5kaWZcblxuICAgICNwcmFnbWEgdW5yb2xsX2xvb3Bfc3RhcnRcbiAgICBmb3IgKCBpbnQgaSA9IDA7IGkgPCBOVU1fRElSX0xJR0hUUzsgaSArKyApIHtcblxuICAgICAgZGlyZWN0aW9uYWxMaWdodCA9IGRpcmVjdGlvbmFsTGlnaHRzWyBpIF07XG5cbiAgICAgIC8vIENPTVBBVDogcHJlLXIxNTYgdXNlcyBhIHN0cnVjdCBHZW9tZXRyaWNDb250ZXh0XG4gICAgICAjaWYgVEhSRUVfVlJNX1RIUkVFX1JFVklTSU9OID49IDE1N1xuICAgICAgICBnZXREaXJlY3Rpb25hbExpZ2h0SW5mbyggZGlyZWN0aW9uYWxMaWdodCwgZGlyZWN0TGlnaHQgKTtcbiAgICAgICNlbHNlXG4gICAgICAgIGdldERpcmVjdGlvbmFsTGlnaHRJbmZvKCBkaXJlY3Rpb25hbExpZ2h0LCBnZW9tZXRyeSwgZGlyZWN0TGlnaHQgKTtcbiAgICAgICNlbmRpZlxuXG4gICAgICBzaGFkb3cgPSAxLjA7XG4gICAgICAjaWYgZGVmaW5lZCggVVNFX1NIQURPV01BUCApICYmICggVU5ST0xMRURfTE9PUF9JTkRFWCA8IE5VTV9ESVJfTElHSFRfU0hBRE9XUyApXG4gICAgICBkaXJlY3Rpb25hbExpZ2h0U2hhZG93ID0gZGlyZWN0aW9uYWxMaWdodFNoYWRvd3NbIGkgXTtcbiAgICAgIC8vIENPTVBBVDogcHJlLXIxNjZcbiAgICAgIC8vIHIxNjYgaW50cm9kdWNlZCBzaGFkb3dJbnRlbnNpdHlcbiAgICAgICNpZiBUSFJFRV9WUk1fVEhSRUVfUkVWSVNJT04gPj0gMTY2XG4gICAgICAgIHNoYWRvdyA9IGFsbCggYnZlYzIoIGRpcmVjdExpZ2h0LnZpc2libGUsIHJlY2VpdmVTaGFkb3cgKSApID8gZ2V0U2hhZG93KCBkaXJlY3Rpb25hbFNoYWRvd01hcFsgaSBdLCBkaXJlY3Rpb25hbExpZ2h0U2hhZG93LnNoYWRvd01hcFNpemUsIGRpcmVjdGlvbmFsTGlnaHRTaGFkb3cuc2hhZG93SW50ZW5zaXR5LCBkaXJlY3Rpb25hbExpZ2h0U2hhZG93LnNoYWRvd0JpYXMsIGRpcmVjdGlvbmFsTGlnaHRTaGFkb3cuc2hhZG93UmFkaXVzLCB2RGlyZWN0aW9uYWxTaGFkb3dDb29yZFsgaSBdICkgOiAxLjA7XG4gICAgICAjZWxzZVxuICAgICAgICBzaGFkb3cgPSBhbGwoIGJ2ZWMyKCBkaXJlY3RMaWdodC52aXNpYmxlLCByZWNlaXZlU2hhZG93ICkgKSA/IGdldFNoYWRvdyggZGlyZWN0aW9uYWxTaGFkb3dNYXBbIGkgXSwgZGlyZWN0aW9uYWxMaWdodFNoYWRvdy5zaGFkb3dNYXBTaXplLCBkaXJlY3Rpb25hbExpZ2h0U2hhZG93LnNoYWRvd0JpYXMsIGRpcmVjdGlvbmFsTGlnaHRTaGFkb3cuc2hhZG93UmFkaXVzLCB2RGlyZWN0aW9uYWxTaGFkb3dDb29yZFsgaSBdICkgOiAxLjA7XG4gICAgICAjZW5kaWZcbiAgICAgICNlbmRpZlxuXG4gICAgICAvLyBDT01QQVQ6IHByZS1yMTU2IHVzZXMgYSBzdHJ1Y3QgR2VvbWV0cmljQ29udGV4dFxuICAgICAgI2lmIFRIUkVFX1ZSTV9USFJFRV9SRVZJU0lPTiA+PSAxNTdcbiAgICAgICAgUkVfRGlyZWN0KCBkaXJlY3RMaWdodCwgZ2VvbWV0cnlQb3NpdGlvbiwgZ2VvbWV0cnlOb3JtYWwsIGdlb21ldHJ5Vmlld0RpciwgZ2VvbWV0cnlDbGVhcmNvYXROb3JtYWwsIG1hdGVyaWFsLCBzaGFkb3csIHJlZmxlY3RlZExpZ2h0ICk7XG4gICAgICAjZWxzZVxuICAgICAgICBSRV9EaXJlY3QoIGRpcmVjdExpZ2h0LCBnZW9tZXRyeSwgbWF0ZXJpYWwsIHNoYWRvdywgcmVmbGVjdGVkTGlnaHQgKTtcbiAgICAgICNlbmRpZlxuXG4gICAgfVxuICAgICNwcmFnbWEgdW5yb2xsX2xvb3BfZW5kXG5cbiAgI2VuZGlmXG5cbiAgLy8gI2lmICggTlVNX1JFQ1RfQVJFQV9MSUdIVFMgPiAwICkgJiYgZGVmaW5lZCggUkVfRGlyZWN0X1JlY3RBcmVhIClcblxuICAvLyAgIFJlY3RBcmVhTGlnaHQgcmVjdEFyZWFMaWdodDtcblxuICAvLyAgICNwcmFnbWEgdW5yb2xsX2xvb3Bfc3RhcnRcbiAgLy8gICBmb3IgKCBpbnQgaSA9IDA7IGkgPCBOVU1fUkVDVF9BUkVBX0xJR0hUUzsgaSArKyApIHtcblxuICAvLyAgICAgcmVjdEFyZWFMaWdodCA9IHJlY3RBcmVhTGlnaHRzWyBpIF07XG4gIC8vICAgICBSRV9EaXJlY3RfUmVjdEFyZWEoIHJlY3RBcmVhTGlnaHQsIGdlb21ldHJ5LCBtYXRlcmlhbCwgcmVmbGVjdGVkTGlnaHQgKTtcblxuICAvLyAgIH1cbiAgLy8gICAjcHJhZ21hIHVucm9sbF9sb29wX2VuZFxuXG4gIC8vICNlbmRpZlxuXG4gICNpZiBkZWZpbmVkKCBSRV9JbmRpcmVjdERpZmZ1c2UgKVxuXG4gICAgdmVjMyBpYmxJcnJhZGlhbmNlID0gdmVjMyggMC4wICk7XG5cbiAgICB2ZWMzIGlycmFkaWFuY2UgPSBnZXRBbWJpZW50TGlnaHRJcnJhZGlhbmNlKCBhbWJpZW50TGlnaHRDb2xvciApO1xuXG4gICAgLy8gQ09NUEFUOiBwcmUtcjE1NiB1c2VzIGEgc3RydWN0IEdlb21ldHJpY0NvbnRleHRcbiAgICAvLyBDT01QQVQ6IHByZS1yMTU2IGRvZXNuJ3QgaGF2ZSBhIGRlZmluZSBVU0VfTElHSFRfUFJPQkVTXG4gICAgI2lmIFRIUkVFX1ZSTV9USFJFRV9SRVZJU0lPTiA+PSAxNTdcbiAgICAgICNpZiBkZWZpbmVkKCBVU0VfTElHSFRfUFJPQkVTIClcbiAgICAgICAgaXJyYWRpYW5jZSArPSBnZXRMaWdodFByb2JlSXJyYWRpYW5jZSggbGlnaHRQcm9iZSwgZ2VvbWV0cnlOb3JtYWwgKTtcbiAgICAgICNlbmRpZlxuICAgICNlbHNlXG4gICAgICBpcnJhZGlhbmNlICs9IGdldExpZ2h0UHJvYmVJcnJhZGlhbmNlKCBsaWdodFByb2JlLCBnZW9tZXRyeS5ub3JtYWwgKTtcbiAgICAjZW5kaWZcblxuICAgICNpZiAoIE5VTV9IRU1JX0xJR0hUUyA+IDAgKVxuXG4gICAgICAjcHJhZ21hIHVucm9sbF9sb29wX3N0YXJ0XG4gICAgICBmb3IgKCBpbnQgaSA9IDA7IGkgPCBOVU1fSEVNSV9MSUdIVFM7IGkgKysgKSB7XG5cbiAgICAgICAgLy8gQ09NUEFUOiBwcmUtcjE1NiB1c2VzIGEgc3RydWN0IEdlb21ldHJpY0NvbnRleHRcbiAgICAgICAgI2lmIFRIUkVFX1ZSTV9USFJFRV9SRVZJU0lPTiA+PSAxNTdcbiAgICAgICAgICBpcnJhZGlhbmNlICs9IGdldEhlbWlzcGhlcmVMaWdodElycmFkaWFuY2UoIGhlbWlzcGhlcmVMaWdodHNbIGkgXSwgZ2VvbWV0cnlOb3JtYWwgKTtcbiAgICAgICAgI2Vsc2VcbiAgICAgICAgICBpcnJhZGlhbmNlICs9IGdldEhlbWlzcGhlcmVMaWdodElycmFkaWFuY2UoIGhlbWlzcGhlcmVMaWdodHNbIGkgXSwgZ2VvbWV0cnkubm9ybWFsICk7XG4gICAgICAgICNlbmRpZlxuXG4gICAgICB9XG4gICAgICAjcHJhZ21hIHVucm9sbF9sb29wX2VuZFxuXG4gICAgI2VuZGlmXG5cbiAgI2VuZGlmXG5cbiAgLy8gI2lmIGRlZmluZWQoIFJFX0luZGlyZWN0U3BlY3VsYXIgKVxuXG4gIC8vICAgdmVjMyByYWRpYW5jZSA9IHZlYzMoIDAuMCApO1xuICAvLyAgIHZlYzMgY2xlYXJjb2F0UmFkaWFuY2UgPSB2ZWMzKCAwLjAgKTtcblxuICAvLyAjZW5kaWZcblxuICAjaW5jbHVkZSA8bGlnaHRzX2ZyYWdtZW50X21hcHM+XG4gICNpbmNsdWRlIDxsaWdodHNfZnJhZ21lbnRfZW5kPlxuXG4gIC8vIG1vZHVsYXRpb25cbiAgI2luY2x1ZGUgPGFvbWFwX2ZyYWdtZW50PlxuXG4gIHZlYzMgY29sID0gcmVmbGVjdGVkTGlnaHQuZGlyZWN0RGlmZnVzZSArIHJlZmxlY3RlZExpZ2h0LmluZGlyZWN0RGlmZnVzZTtcblxuICAjaWZkZWYgREVCVUdfTElUU0hBREVSQVRFXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggY29sLCBkaWZmdXNlQ29sb3IuYSApO1xuICAgIHBvc3RDb3JyZWN0aW9uKCk7XG4gICAgcmV0dXJuO1xuICAjZW5kaWZcblxuICAvLyAtLSBNVG9vbjogcmltIGxpZ2h0aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZlYzMgdmlld0RpciA9IG5vcm1hbGl6ZSggdlZpZXdQb3NpdGlvbiApO1xuXG4gICNpZm5kZWYgUEhZU0lDQUxMWV9DT1JSRUNUX0xJR0hUU1xuICAgIHJlZmxlY3RlZExpZ2h0LmRpcmVjdFNwZWN1bGFyIC89IFBJO1xuICAjZW5kaWZcbiAgdmVjMyByaW1NaXggPSBtaXgoIHZlYzMoIDEuMCApLCByZWZsZWN0ZWRMaWdodC5kaXJlY3RTcGVjdWxhciwgMS4wICk7XG5cbiAgdmVjMyByaW0gPSBwYXJhbWV0cmljUmltQ29sb3JGYWN0b3IgKiBwb3coIHNhdHVyYXRlKCAxLjAgLSBkb3QoIHZpZXdEaXIsIG5vcm1hbCApICsgcGFyYW1ldHJpY1JpbUxpZnRGYWN0b3IgKSwgcGFyYW1ldHJpY1JpbUZyZXNuZWxQb3dlckZhY3RvciApO1xuXG4gICNpZmRlZiBVU0VfTUFUQ0FQVEVYVFVSRVxuICAgIHtcbiAgICAgIHZlYzMgeCA9IG5vcm1hbGl6ZSggdmVjMyggdmlld0Rpci56LCAwLjAsIC12aWV3RGlyLnggKSApO1xuICAgICAgdmVjMyB5ID0gY3Jvc3MoIHZpZXdEaXIsIHggKTsgLy8gZ3VhcmFudGVlZCB0byBiZSBub3JtYWxpemVkXG4gICAgICB2ZWMyIHNwaGVyZVV2ID0gMC41ICsgMC41ICogdmVjMiggZG90KCB4LCBub3JtYWwgKSwgLWRvdCggeSwgbm9ybWFsICkgKTtcbiAgICAgIHNwaGVyZVV2ID0gKCBtYXRjYXBUZXh0dXJlVXZUcmFuc2Zvcm0gKiB2ZWMzKCBzcGhlcmVVdiwgMSApICkueHk7XG4gICAgICB2ZWMzIG1hdGNhcCA9IHRleHR1cmUyRCggbWF0Y2FwVGV4dHVyZSwgc3BoZXJlVXYgKS5yZ2I7XG4gICAgICByaW0gKz0gbWF0Y2FwRmFjdG9yICogbWF0Y2FwO1xuICAgIH1cbiAgI2VuZGlmXG5cbiAgI2lmZGVmIFVTRV9SSU1NVUxUSVBMWVRFWFRVUkVcbiAgICB2ZWMyIHJpbU11bHRpcGx5VGV4dHVyZVV2ID0gKCByaW1NdWx0aXBseVRleHR1cmVVdlRyYW5zZm9ybSAqIHZlYzMoIHV2LCAxICkgKS54eTtcbiAgICByaW0gKj0gdGV4dHVyZTJEKCByaW1NdWx0aXBseVRleHR1cmUsIHJpbU11bHRpcGx5VGV4dHVyZVV2ICkucmdiO1xuICAjZW5kaWZcblxuICBjb2wgKz0gcmltTWl4ICogcmltO1xuXG4gIC8vIC0tIE1Ub29uOiBFbWlzc2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb2wgKz0gdG90YWxFbWlzc2l2ZVJhZGlhbmNlO1xuXG4gIC8vICNpbmNsdWRlIDxlbnZtYXBfZnJhZ21lbnQ+XG5cbiAgLy8gLS0gQWxtb3N0IGRvbmUhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICNpZiBkZWZpbmVkKCBPVVRMSU5FIClcbiAgICBjb2wgPSBvdXRsaW5lQ29sb3JGYWN0b3IucmdiICogbWl4KCB2ZWMzKCAxLjAgKSwgY29sLCBvdXRsaW5lTGlnaHRpbmdNaXhGYWN0b3IgKTtcbiAgI2VuZGlmXG5cbiAgI2lmZGVmIE9QQVFVRVxuICAgIGRpZmZ1c2VDb2xvci5hID0gMS4wO1xuICAjZW5kaWZcblxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCBjb2wsIGRpZmZ1c2VDb2xvci5hICk7XG4gIHBvc3RDb3JyZWN0aW9uKCk7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbi8qKlxuICogU3BlY2lmaWVycyBvZiBkZWJ1ZyBtb2RlIG9mIHtAbGluayBNVG9vbk1hdGVyaWFsfS5cbiAqXG4gKiBTZWU6IHtAbGluayBNVG9vbk1hdGVyaWFsLmRlYnVnTW9kZX1cbiAqL1xuZXhwb3J0IGNvbnN0IE1Ub29uTWF0ZXJpYWxEZWJ1Z01vZGUgPSB7XG4gIC8qKlxuICAgKiBSZW5kZXIgbm9ybWFsbHkuXG4gICAqL1xuICBOb25lOiAnbm9uZScsXG5cbiAgLyoqXG4gICAqIFZpc3VhbGl6ZSBub3JtYWxzIG9mIHRoZSBzdXJmYWNlLlxuICAgKi9cbiAgTm9ybWFsOiAnbm9ybWFsJyxcblxuICAvKipcbiAgICogVmlzdWFsaXplIGxpdC9zaGFkZSBvZiB0aGUgc3VyZmFjZS5cbiAgICovXG4gIExpdFNoYWRlUmF0ZTogJ2xpdFNoYWRlUmF0ZScsXG5cbiAgLyoqXG4gICAqIFZpc3VhbGl6ZSBVViBvZiB0aGUgc3VyZmFjZS5cbiAgICovXG4gIFVWOiAndXYnLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTVRvb25NYXRlcmlhbERlYnVnTW9kZSA9ICh0eXBlb2YgTVRvb25NYXRlcmlhbERlYnVnTW9kZSlba2V5b2YgdHlwZW9mIE1Ub29uTWF0ZXJpYWxEZWJ1Z01vZGVdO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG5leHBvcnQgY29uc3QgTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUgPSB7XG4gIE5vbmU6ICdub25lJyxcbiAgV29ybGRDb29yZGluYXRlczogJ3dvcmxkQ29vcmRpbmF0ZXMnLFxuICBTY3JlZW5Db29yZGluYXRlczogJ3NjcmVlbkNvb3JkaW5hdGVzJyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlID1cbiAgKHR5cGVvZiBNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZSlba2V5b2YgdHlwZW9mIE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlXTtcbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IGVuY29kaW5nQ29sb3JTcGFjZU1hcDogUmVjb3JkPGFueSwgJycgfCAnc3JnYic+ID0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gIDMwMDA6ICcnLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gIDMwMDE6ICdzcmdiJyxcbn07XG5cbi8qKlxuICogQSBjb21wYXQgZnVuY3Rpb24gdG8gZ2V0IHRleHR1cmUgY29sb3Igc3BhY2UuXG4gKlxuICogQ09NUEFUOiBwcmUtcjE1MlxuICogU3RhcnRpbmcgZnJvbSBUaHJlZS5qcyByMTUyLCBgdGV4dHVyZS5lbmNvZGluZ2AgaXMgcmVuYW1lZCB0byBgdGV4dHVyZS5jb2xvclNwYWNlYC5cbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBoYW5kbGUgdGhlIGNvbWFwdC5cbiAqXG4gKiBAcGFyYW0gdGV4dHVyZSBUaGUgdGV4dHVyZSB5b3Ugd2FudCB0byBnZXQgdGhlIGNvbG9yIHNwYWNlIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHR1cmVDb2xvclNwYWNlKHRleHR1cmU6IFRIUkVFLlRleHR1cmUpOiAnJyB8ICdzcmdiJyB7XG4gIGlmIChwYXJzZUludChUSFJFRS5SRVZJU0lPTiwgMTApID49IDE1Mikge1xuICAgIHJldHVybiB0ZXh0dXJlLmNvbG9yU3BhY2UgYXMgJycgfCAnc3JnYic7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVuY29kaW5nQ29sb3JTcGFjZU1hcFsodGV4dHVyZSBhcyBhbnkpLmVuY29kaW5nXTtcbiAgfVxufVxuIiwgImltcG9ydCB7IEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCAqIGFzIEhEUkVtaXNzaXZlTXVsdGlwbGllclNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy1tYXRlcmlhbHMtaGRyLWVtaXNzaXZlLW11bHRpcGxpZXItMS4wJztcbmltcG9ydCB7IEdMVEYgYXMgR0xURlNjaGVtYSB9IGZyb20gJ0BnbHRmLXRyYW5zZm9ybS9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFZSTU1hdGVyaWFsc0hEUkVtaXNzaXZlTXVsdGlwbGllckxvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICBwdWJsaWMgc3RhdGljIEVYVEVOU0lPTl9OQU1FID0gJ1ZSTUNfbWF0ZXJpYWxzX2hkcl9lbWlzc2l2ZU11bHRpcGxpZXInIGFzIGNvbnN0O1xuXG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFZSTU1hdGVyaWFsc0hEUkVtaXNzaXZlTXVsdGlwbGllckxvYWRlclBsdWdpbi5FWFRFTlNJT05fTkFNRTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBleHRlbmRNYXRlcmlhbFBhcmFtcyhtYXRlcmlhbEluZGV4OiBudW1iZXIsIG1hdGVyaWFsUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZ2V0SERSRW1pc3NpdmVNdWx0aXBsaWVyRXh0ZW5zaW9uKG1hdGVyaWFsSW5kZXgpO1xuICAgIGlmIChleHRlbnNpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoaXMgZXh0ZW5zaW9uIGlzIGFyY2hpdmVkLiBFbWl0IHdhcm5pbmdcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92cm0tYy92cm0tc3BlY2lmaWNhdGlvbi9wdWxsLzM3NVxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdWUk1NYXRlcmlhbHNIRFJFbWlzc2l2ZU11bHRpcGxpZXJMb2FkZXJQbHVnaW46IGBWUk1DX21hdGVyaWFsc19oZHJfZW1pc3NpdmVNdWx0aXBsaWVyYCBpcyBhcmNoaXZlZC4gVXNlIGBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoYCBpbnN0ZWFkLicsXG4gICAgKTtcblxuICAgIGNvbnN0IGVtaXNzaXZlTXVsdGlwbGllciA9IGV4dGVuc2lvbi5lbWlzc2l2ZU11bHRpcGxpZXI7XG4gICAgbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmVJbnRlbnNpdHkgPSBlbWlzc2l2ZU11bHRpcGxpZXI7XG4gIH1cblxuICBwcml2YXRlIF9nZXRIRFJFbWlzc2l2ZU11bHRpcGxpZXJFeHRlbnNpb24oXG4gICAgbWF0ZXJpYWxJbmRleDogbnVtYmVyLFxuICApOiBIRFJFbWlzc2l2ZU11bHRpcGxpZXJTY2hlbWEuVlJNQ01hdGVyaWFsc0hEUkVtaXNzaXZlTXVsdGlwbGllciB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG4gICAgY29uc3QganNvbiA9IHBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICBjb25zdCBtYXRlcmlhbERlZiA9IGpzb24ubWF0ZXJpYWxzPy5bbWF0ZXJpYWxJbmRleF07XG5cbiAgICBpZiAobWF0ZXJpYWxEZWYgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVlJNTWF0ZXJpYWxzSERSRW1pc3NpdmVNdWx0aXBsaWVyTG9hZGVyUGx1Z2luOiBBdHRlbXB0IHRvIHVzZSBtYXRlcmlhbHNbJHttYXRlcmlhbEluZGV4fV0gb2YgZ2xURiBidXQgdGhlIG1hdGVyaWFsIGRvZXNuJ3QgZXhpc3RgLFxuICAgICAgKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucz8uW1ZSTU1hdGVyaWFsc0hEUkVtaXNzaXZlTXVsdGlwbGllckxvYWRlclBsdWdpbi5FWFRFTlNJT05fTkFNRV0gYXNcbiAgICAgIHwgSERSRW1pc3NpdmVNdWx0aXBsaWVyU2NoZW1hLlZSTUNNYXRlcmlhbHNIRFJFbWlzc2l2ZU11bHRpcGxpZXJcbiAgICAgIHwgdW5kZWZpbmVkO1xuICAgIGlmIChleHRlbnNpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZXh0ZW5zaW9uO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNIGFzIFYwVlJNLCBNYXRlcmlhbCBhcyBWME1hdGVyaWFsIH0gZnJvbSAnQHBpeGl2L3R5cGVzLXZybS0wLjAnO1xuaW1wb3J0ICogYXMgVjFNVG9vblNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy1tYXRlcmlhbHMtbXRvb24tMS4wJztcbmltcG9ydCB0eXBlIHsgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgZ2FtbWFFT1RGIH0gZnJvbSAnLi91dGlscy9nYW1tYUVPVEYnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgVlJNTWF0ZXJpYWxzVjBDb21wYXRQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgcHVibGljIHJlYWRvbmx5IHBhcnNlcjogR0xURlBhcnNlcjtcblxuICAvKipcbiAgICogQSBtYXAgZnJvbSB2MCByZW5kZXIgcXVldWUgdG8gdjEgcmVuZGVyIHF1ZXVlIG9mZnNldCwgZm9yIFRyYW5zcGFyZW50IG1hdGVyaWFscy5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlbmRlclF1ZXVlTWFwVHJhbnNwYXJlbnQ6IE1hcDxudW1iZXIsIG51bWJlcj47XG5cbiAgLyoqXG4gICAqIEEgbWFwIGZyb20gdjAgcmVuZGVyIHF1ZXVlIHRvIHYxIHJlbmRlciBxdWV1ZSBvZmZzZXQsIGZvciBUcmFuc3BhcmVudFpXcml0ZSBtYXRlcmlhbHMuXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZW5kZXJRdWV1ZU1hcFRyYW5zcGFyZW50WldyaXRlOiBNYXA8bnVtYmVyLCBudW1iZXI+O1xuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnVlJNTWF0ZXJpYWxzVjBDb21wYXRQbHVnaW4nO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgdGhpcy5fcmVuZGVyUXVldWVNYXBUcmFuc3BhcmVudCA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLl9yZW5kZXJRdWV1ZU1hcFRyYW5zcGFyZW50WldyaXRlID0gbmV3IE1hcCgpO1xuXG4gICAgLy8gV09SS0FST1VORDogQWRkIEtIUl90ZXh0dXJlX3RyYW5zZm9ybSB0byBleHRlbnNpb25zVXNlZFxuICAgIC8vIEl0IGlzIHRvbyBsYXRlIHRvIGFkZCB0aGlzIGluIGJlZm9yZVJvb3RcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAganNvbi5leHRlbnNpb25zVXNlZCA9IGpzb24uZXh0ZW5zaW9uc1VzZWQgPz8gW107XG4gICAgaWYgKGpzb24uZXh0ZW5zaW9uc1VzZWQuaW5kZXhPZignS0hSX3RleHR1cmVfdHJhbnNmb3JtJykgPT09IC0xKSB7XG4gICAgICBqc29uLmV4dGVuc2lvbnNVc2VkLnB1c2goJ0tIUl90ZXh0dXJlX3RyYW5zZm9ybScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBiZWZvcmVSb290KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSBWMFZSTVxuICAgIGNvbnN0IHYwVlJNRXh0ZW5zaW9uID0ganNvbi5leHRlbnNpb25zPy5bJ1ZSTSddIGFzIFYwVlJNIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IHYwTWF0ZXJpYWxQcm9wZXJ0aWVzID0gdjBWUk1FeHRlbnNpb24/Lm1hdGVyaWFsUHJvcGVydGllcztcbiAgICBpZiAoIXYwTWF0ZXJpYWxQcm9wZXJ0aWVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gcG9wdWxhdGUgcmVuZGVyIHF1ZXVlIG1hcFxuICAgIHRoaXMuX3BvcHVsYXRlUmVuZGVyUXVldWVNYXAodjBNYXRlcmlhbFByb3BlcnRpZXMpO1xuXG4gICAgLy8gY29udmVydCBWMCBtYXRlcmlhbCBwcm9wZXJ0aWVzIGludG8gVjEgY29tcGF0aWJsZSBmb3JtYXRcbiAgICB2ME1hdGVyaWFsUHJvcGVydGllcy5mb3JFYWNoKChtYXRlcmlhbFByb3BlcnRpZXMsIG1hdGVyaWFsSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG1hdGVyaWFsRGVmID0ganNvbi5tYXRlcmlhbHM/LlttYXRlcmlhbEluZGV4XTtcblxuICAgICAgaWYgKG1hdGVyaWFsRGVmID09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBWUk1NYXRlcmlhbHNWMENvbXBhdFBsdWdpbjogQXR0ZW1wdCB0byB1c2UgbWF0ZXJpYWxzWyR7bWF0ZXJpYWxJbmRleH1dIG9mIGdsVEYgYnV0IHRoZSBtYXRlcmlhbCBkb2Vzbid0IGV4aXN0YCxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0ZXJpYWxQcm9wZXJ0aWVzLnNoYWRlciA9PT0gJ1ZSTS9NVG9vbicpIHtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLl9wYXJzZVYwTVRvb25Qcm9wZXJ0aWVzKG1hdGVyaWFsUHJvcGVydGllcywgbWF0ZXJpYWxEZWYpO1xuICAgICAgICBqc29uLm1hdGVyaWFscyFbbWF0ZXJpYWxJbmRleF0gPSBtYXRlcmlhbDtcbiAgICAgIH0gZWxzZSBpZiAobWF0ZXJpYWxQcm9wZXJ0aWVzLnNoYWRlcj8uc3RhcnRzV2l0aCgnVlJNL1VubGl0JykpIHtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLl9wYXJzZVYwVW5saXRQcm9wZXJ0aWVzKG1hdGVyaWFsUHJvcGVydGllcywgbWF0ZXJpYWxEZWYpO1xuICAgICAgICBqc29uLm1hdGVyaWFscyFbbWF0ZXJpYWxJbmRleF0gPSBtYXRlcmlhbDtcbiAgICAgIH0gZWxzZSBpZiAobWF0ZXJpYWxQcm9wZXJ0aWVzLnNoYWRlciA9PT0gJ1ZSTV9VU0VfR0xURlNIQURFUicpIHtcbiAgICAgICAgLy8gYGpzb24ubWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdYCBzaG91bGQgYmUgYWxyZWFkeSB2YWxpZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBWUk1NYXRlcmlhbHNWMENvbXBhdFBsdWdpbjogVW5rbm93biBzaGFkZXI6ICR7bWF0ZXJpYWxQcm9wZXJ0aWVzLnNoYWRlcn1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlVjBNVG9vblByb3BlcnRpZXMoXG4gICAgbWF0ZXJpYWxQcm9wZXJ0aWVzOiBWME1hdGVyaWFsLFxuICAgIHNjaGVtYU1hdGVyaWFsOiBHTFRGU2NoZW1hLklNYXRlcmlhbCxcbiAgKTogR0xURlNjaGVtYS5JTWF0ZXJpYWwge1xuICAgIGNvbnN0IGlzVHJhbnNwYXJlbnQgPSBtYXRlcmlhbFByb3BlcnRpZXMua2V5d29yZE1hcD8uWydfQUxQSEFCTEVORF9PTiddID8/IGZhbHNlO1xuICAgIGNvbnN0IGVuYWJsZWRaV3JpdGUgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19aV3JpdGUnXSA9PT0gMTtcbiAgICBjb25zdCB0cmFuc3BhcmVudFdpdGhaV3JpdGUgPSBlbmFibGVkWldyaXRlICYmIGlzVHJhbnNwYXJlbnQ7XG5cbiAgICBjb25zdCByZW5kZXJRdWV1ZU9mZnNldE51bWJlciA9IHRoaXMuX3YwUGFyc2VSZW5kZXJRdWV1ZShtYXRlcmlhbFByb3BlcnRpZXMpO1xuXG4gICAgY29uc3QgaXNDdXRvZmYgPSBtYXRlcmlhbFByb3BlcnRpZXMua2V5d29yZE1hcD8uWydfQUxQSEFURVNUX09OJ10gPz8gZmFsc2U7XG4gICAgY29uc3QgYWxwaGFNb2RlID0gaXNUcmFuc3BhcmVudCA/ICdCTEVORCcgOiBpc0N1dG9mZiA/ICdNQVNLJyA6ICdPUEFRVUUnO1xuICAgIGNvbnN0IGFscGhhQ3V0b2ZmID0gaXNDdXRvZmYgPyAobWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfQ3V0b2ZmJ10gPz8gMC41KSA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGN1bGxNb2RlID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfQ3VsbE1vZGUnXSA/PyAyOyAvLyBlbnVtLCB7IE9mZiwgRnJvbnQsIEJhY2sgfVxuICAgIGNvbnN0IGRvdWJsZVNpZGVkID0gY3VsbE1vZGUgPT09IDA7XG5cbiAgICBjb25zdCB0ZXh0dXJlVHJhbnNmb3JtRXh0ID0gdGhpcy5fcG9ydFRleHR1cmVUcmFuc2Zvcm0obWF0ZXJpYWxQcm9wZXJ0aWVzKTtcblxuICAgIGNvbnN0IGJhc2VDb2xvckZhY3RvciA9IChtYXRlcmlhbFByb3BlcnRpZXMudmVjdG9yUHJvcGVydGllcz8uWydfQ29sb3InXSA/PyBbMS4wLCAxLjAsIDEuMCwgMS4wXSkubWFwKFxuICAgICAgKHY6IG51bWJlciwgaTogbnVtYmVyKSA9PiAoaSA9PT0gMyA/IHYgOiBnYW1tYUVPVEYodikpLCAvLyBhbHBoYSBjaGFubmVsIGlzIHN0b3JlZCBpbiBsaW5lYXJcbiAgICApO1xuICAgIGNvbnN0IGJhc2VDb2xvclRleHR1cmVJbmRleCA9IG1hdGVyaWFsUHJvcGVydGllcy50ZXh0dXJlUHJvcGVydGllcz8uWydfTWFpblRleCddO1xuICAgIGNvbnN0IGJhc2VDb2xvclRleHR1cmUgPVxuICAgICAgYmFzZUNvbG9yVGV4dHVyZUluZGV4ICE9IG51bGxcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpbmRleDogYmFzZUNvbG9yVGV4dHVyZUluZGV4LFxuICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAuLi50ZXh0dXJlVHJhbnNmb3JtRXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3Qgbm9ybWFsVGV4dHVyZVNjYWxlID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfQnVtcFNjYWxlJ10gPz8gMS4wO1xuICAgIGNvbnN0IG5vcm1hbFRleHR1cmVJbmRleCA9IG1hdGVyaWFsUHJvcGVydGllcy50ZXh0dXJlUHJvcGVydGllcz8uWydfQnVtcE1hcCddO1xuICAgIGNvbnN0IG5vcm1hbFRleHR1cmUgPVxuICAgICAgbm9ybWFsVGV4dHVyZUluZGV4ICE9IG51bGxcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpbmRleDogbm9ybWFsVGV4dHVyZUluZGV4LFxuICAgICAgICAgICAgc2NhbGU6IG5vcm1hbFRleHR1cmVTY2FsZSxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgLi4udGV4dHVyZVRyYW5zZm9ybUV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGVtaXNzaXZlRmFjdG9yID0gKG1hdGVyaWFsUHJvcGVydGllcy52ZWN0b3JQcm9wZXJ0aWVzPy5bJ19FbWlzc2lvbkNvbG9yJ10gPz8gWzAuMCwgMC4wLCAwLjAsIDEuMF0pLm1hcChcbiAgICAgIGdhbW1hRU9URixcbiAgICApO1xuICAgIGNvbnN0IGVtaXNzaXZlVGV4dHVyZUluZGV4ID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLnRleHR1cmVQcm9wZXJ0aWVzPy5bJ19FbWlzc2lvbk1hcCddO1xuICAgIGNvbnN0IGVtaXNzaXZlVGV4dHVyZSA9XG4gICAgICBlbWlzc2l2ZVRleHR1cmVJbmRleCAhPSBudWxsXG4gICAgICAgID8ge1xuICAgICAgICAgICAgaW5kZXg6IGVtaXNzaXZlVGV4dHVyZUluZGV4LFxuICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAuLi50ZXh0dXJlVHJhbnNmb3JtRXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3Qgc2hhZGVDb2xvckZhY3RvciA9IChtYXRlcmlhbFByb3BlcnRpZXMudmVjdG9yUHJvcGVydGllcz8uWydfU2hhZGVDb2xvciddID8/IFswLjk3LCAwLjgxLCAwLjg2LCAxLjBdKS5tYXAoXG4gICAgICBnYW1tYUVPVEYsXG4gICAgKTtcbiAgICBjb25zdCBzaGFkZU11bHRpcGx5VGV4dHVyZUluZGV4ID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLnRleHR1cmVQcm9wZXJ0aWVzPy5bJ19TaGFkZVRleHR1cmUnXTtcbiAgICBjb25zdCBzaGFkZU11bHRpcGx5VGV4dHVyZSA9XG4gICAgICBzaGFkZU11bHRpcGx5VGV4dHVyZUluZGV4ICE9IG51bGxcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpbmRleDogc2hhZGVNdWx0aXBseVRleHR1cmVJbmRleCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgLi4udGV4dHVyZVRyYW5zZm9ybUV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIC8vIC8vIGNvbnZlcnQgdjAgc2hhZGUgc2hpZnQgLyBzaGFkZSB0b29ueVxuICAgIGxldCBzaGFkaW5nU2hpZnRGYWN0b3IgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19TaGFkZVNoaWZ0J10gPz8gMC4wO1xuICAgIGxldCBzaGFkaW5nVG9vbnlGYWN0b3IgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19TaGFkZVRvb255J10gPz8gMC45O1xuICAgIHNoYWRpbmdUb29ueUZhY3RvciA9IFRIUkVFLk1hdGhVdGlscy5sZXJwKHNoYWRpbmdUb29ueUZhY3RvciwgMS4wLCAwLjUgKyAwLjUgKiBzaGFkaW5nU2hpZnRGYWN0b3IpO1xuICAgIHNoYWRpbmdTaGlmdEZhY3RvciA9IC1zaGFkaW5nU2hpZnRGYWN0b3IgLSAoMS4wIC0gc2hhZGluZ1Rvb255RmFjdG9yKTtcblxuICAgIGNvbnN0IGdpSW50ZW5zaXR5RmFjdG9yID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfSW5kaXJlY3RMaWdodEludGVuc2l0eSddID8/IDAuMTtcbiAgICBjb25zdCBnaUVxdWFsaXphdGlvbkZhY3RvciA9IGdpSW50ZW5zaXR5RmFjdG9yID8gMS4wIC0gZ2lJbnRlbnNpdHlGYWN0b3IgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBtYXRjYXBUZXh0dXJlSW5kZXggPSBtYXRlcmlhbFByb3BlcnRpZXMudGV4dHVyZVByb3BlcnRpZXM/LlsnX1NwaGVyZUFkZCddO1xuICAgIGNvbnN0IG1hdGNhcEZhY3RvciA9IG1hdGNhcFRleHR1cmVJbmRleCAhPSBudWxsID8gWzEuMCwgMS4wLCAxLjBdIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IG1hdGNhcFRleHR1cmUgPVxuICAgICAgbWF0Y2FwVGV4dHVyZUluZGV4ICE9IG51bGxcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpbmRleDogbWF0Y2FwVGV4dHVyZUluZGV4LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCByaW1MaWdodGluZ01peEZhY3RvciA9IG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX1JpbUxpZ2h0aW5nTWl4J10gPz8gMC4wO1xuICAgIGNvbnN0IHJpbU11bHRpcGx5VGV4dHVyZUluZGV4ID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLnRleHR1cmVQcm9wZXJ0aWVzPy5bJ19SaW1UZXh0dXJlJ107XG4gICAgY29uc3QgcmltTXVsdGlwbHlUZXh0dXJlID1cbiAgICAgIHJpbU11bHRpcGx5VGV4dHVyZUluZGV4ICE9IG51bGxcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpbmRleDogcmltTXVsdGlwbHlUZXh0dXJlSW5kZXgsXG4gICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgIC4uLnRleHR1cmVUcmFuc2Zvcm1FeHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBwYXJhbWV0cmljUmltQ29sb3JGYWN0b3IgPSAobWF0ZXJpYWxQcm9wZXJ0aWVzLnZlY3RvclByb3BlcnRpZXM/LlsnX1JpbUNvbG9yJ10gPz8gWzAuMCwgMC4wLCAwLjAsIDEuMF0pLm1hcChcbiAgICAgIGdhbW1hRU9URixcbiAgICApO1xuICAgIGNvbnN0IHBhcmFtZXRyaWNSaW1GcmVzbmVsUG93ZXJGYWN0b3IgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19SaW1GcmVzbmVsUG93ZXInXSA/PyAxLjA7XG4gICAgY29uc3QgcGFyYW1ldHJpY1JpbUxpZnRGYWN0b3IgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19SaW1MaWZ0J10gPz8gMC4wO1xuXG4gICAgY29uc3Qgb3V0bGluZVdpZHRoTW9kZSA9IFsnbm9uZScsICd3b3JsZENvb3JkaW5hdGVzJywgJ3NjcmVlbkNvb3JkaW5hdGVzJ11bXG4gICAgICBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19PdXRsaW5lV2lkdGhNb2RlJ10gPz8gMFxuICAgIF0gYXMgVjFNVG9vblNjaGVtYS5NYXRlcmlhbHNNVG9vbk91dGxpbmVXaWR0aE1vZGU7XG5cbiAgICAvLyAvLyB2MCBvdXRsaW5lV2lkdGhGYWN0b3IgaXMgaW4gY2VudGltZXRlclxuICAgIGxldCBvdXRsaW5lV2lkdGhGYWN0b3IgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19PdXRsaW5lV2lkdGgnXSA/PyAwLjA7XG4gICAgb3V0bGluZVdpZHRoRmFjdG9yID0gMC4wMSAqIG91dGxpbmVXaWR0aEZhY3RvcjtcblxuICAgIGNvbnN0IG91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZUluZGV4ID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLnRleHR1cmVQcm9wZXJ0aWVzPy5bJ19PdXRsaW5lV2lkdGhUZXh0dXJlJ107XG4gICAgY29uc3Qgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlID1cbiAgICAgIG91dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZUluZGV4ICE9IG51bGxcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpbmRleDogb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlSW5kZXgsXG4gICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgIC4uLnRleHR1cmVUcmFuc2Zvcm1FeHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBvdXRsaW5lQ29sb3JGYWN0b3IgPSAobWF0ZXJpYWxQcm9wZXJ0aWVzLnZlY3RvclByb3BlcnRpZXM/LlsnX091dGxpbmVDb2xvciddID8/IFswLjAsIDAuMCwgMC4wXSkubWFwKFxuICAgICAgZ2FtbWFFT1RGLFxuICAgICk7XG4gICAgY29uc3Qgb3V0bGluZUNvbG9yTW9kZSA9IG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX091dGxpbmVDb2xvck1vZGUnXSA/PyAwOyAvLyBlbnVtLCB7IEZpeGVkLCBNaXhlZCB9XG4gICAgY29uc3Qgb3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yID1cbiAgICAgIG91dGxpbmVDb2xvck1vZGUgPT09IDEgPyAobWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfT3V0bGluZUxpZ2h0aW5nTWl4J10gPz8gMS4wKSA6IDAuMDtcblxuICAgIGNvbnN0IHV2QW5pbWF0aW9uTWFza1RleHR1cmVJbmRleCA9IG1hdGVyaWFsUHJvcGVydGllcy50ZXh0dXJlUHJvcGVydGllcz8uWydfVXZBbmltTWFza1RleHR1cmUnXTtcbiAgICBjb25zdCB1dkFuaW1hdGlvbk1hc2tUZXh0dXJlID1cbiAgICAgIHV2QW5pbWF0aW9uTWFza1RleHR1cmVJbmRleCAhPSBudWxsXG4gICAgICAgID8ge1xuICAgICAgICAgICAgaW5kZXg6IHV2QW5pbWF0aW9uTWFza1RleHR1cmVJbmRleCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgLi4udGV4dHVyZVRyYW5zZm9ybUV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHV2QW5pbWF0aW9uU2Nyb2xsWFNwZWVkRmFjdG9yID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfVXZBbmltU2Nyb2xsWCddID8/IDAuMDtcblxuICAgIC8vIHV2QW5pbWF0aW9uU2Nyb2xsWVNwZWVkRmFjdG9yIHdpbGwgYmUgb3Bwb3NpdGUgYmV0d2VlbiBWMCBhbmQgVjFcbiAgICBsZXQgdXZBbmltYXRpb25TY3JvbGxZU3BlZWRGYWN0b3IgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19VdkFuaW1TY3JvbGxZJ10gPz8gMC4wO1xuICAgIGlmICh1dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvciAhPSBudWxsKSB7XG4gICAgICB1dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvciA9IC11dkFuaW1hdGlvblNjcm9sbFlTcGVlZEZhY3RvcjtcbiAgICB9XG5cbiAgICBjb25zdCB1dkFuaW1hdGlvblJvdGF0aW9uU3BlZWRGYWN0b3IgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19VdkFuaW1Sb3RhdGlvbiddID8/IDAuMDtcblxuICAgIGNvbnN0IG10b29uRXh0ZW5zaW9uOiBWMU1Ub29uU2NoZW1hLlZSTUNNYXRlcmlhbHNNVG9vbiA9IHtcbiAgICAgIHNwZWNWZXJzaW9uOiAnMS4wJyxcbiAgICAgIHRyYW5zcGFyZW50V2l0aFpXcml0ZSxcbiAgICAgIHJlbmRlclF1ZXVlT2Zmc2V0TnVtYmVyLFxuICAgICAgc2hhZGVDb2xvckZhY3RvcixcbiAgICAgIHNoYWRlTXVsdGlwbHlUZXh0dXJlLFxuICAgICAgc2hhZGluZ1NoaWZ0RmFjdG9yLFxuICAgICAgc2hhZGluZ1Rvb255RmFjdG9yLFxuICAgICAgZ2lFcXVhbGl6YXRpb25GYWN0b3IsXG4gICAgICBtYXRjYXBGYWN0b3IsXG4gICAgICBtYXRjYXBUZXh0dXJlLFxuICAgICAgcmltTGlnaHRpbmdNaXhGYWN0b3IsXG4gICAgICByaW1NdWx0aXBseVRleHR1cmUsXG4gICAgICBwYXJhbWV0cmljUmltQ29sb3JGYWN0b3IsXG4gICAgICBwYXJhbWV0cmljUmltRnJlc25lbFBvd2VyRmFjdG9yLFxuICAgICAgcGFyYW1ldHJpY1JpbUxpZnRGYWN0b3IsXG4gICAgICBvdXRsaW5lV2lkdGhNb2RlLFxuICAgICAgb3V0bGluZVdpZHRoRmFjdG9yLFxuICAgICAgb3V0bGluZVdpZHRoTXVsdGlwbHlUZXh0dXJlLFxuICAgICAgb3V0bGluZUNvbG9yRmFjdG9yLFxuICAgICAgb3V0bGluZUxpZ2h0aW5nTWl4RmFjdG9yLFxuICAgICAgdXZBbmltYXRpb25NYXNrVGV4dHVyZSxcbiAgICAgIHV2QW5pbWF0aW9uU2Nyb2xsWFNwZWVkRmFjdG9yLFxuICAgICAgdXZBbmltYXRpb25TY3JvbGxZU3BlZWRGYWN0b3IsXG4gICAgICB1dkFuaW1hdGlvblJvdGF0aW9uU3BlZWRGYWN0b3IsXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zY2hlbWFNYXRlcmlhbCxcblxuICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3M6IHtcbiAgICAgICAgYmFzZUNvbG9yRmFjdG9yLFxuICAgICAgICBiYXNlQ29sb3JUZXh0dXJlLFxuICAgICAgfSxcbiAgICAgIG5vcm1hbFRleHR1cmUsXG4gICAgICBlbWlzc2l2ZVRleHR1cmUsXG4gICAgICBlbWlzc2l2ZUZhY3RvcixcbiAgICAgIGFscGhhTW9kZSxcbiAgICAgIGFscGhhQ3V0b2ZmLFxuICAgICAgZG91YmxlU2lkZWQsXG4gICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgICAgICAgVlJNQ19tYXRlcmlhbHNfbXRvb246IG10b29uRXh0ZW5zaW9uLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VWMFVubGl0UHJvcGVydGllcyhcbiAgICBtYXRlcmlhbFByb3BlcnRpZXM6IFYwTWF0ZXJpYWwsXG4gICAgc2NoZW1hTWF0ZXJpYWw6IEdMVEZTY2hlbWEuSU1hdGVyaWFsLFxuICApOiBHTFRGU2NoZW1hLklNYXRlcmlhbCB7XG4gICAgY29uc3QgaXNUcmFuc3BhcmVudFpXcml0ZSA9IG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXIgPT09ICdWUk0vVW5saXRUcmFuc3BhcmVudFpXcml0ZSc7XG4gICAgY29uc3QgaXNUcmFuc3BhcmVudCA9IG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXIgPT09ICdWUk0vVW5saXRUcmFuc3BhcmVudCcgfHwgaXNUcmFuc3BhcmVudFpXcml0ZTtcblxuICAgIGNvbnN0IHJlbmRlclF1ZXVlT2Zmc2V0TnVtYmVyID0gdGhpcy5fdjBQYXJzZVJlbmRlclF1ZXVlKG1hdGVyaWFsUHJvcGVydGllcyk7XG5cbiAgICBjb25zdCBpc0N1dG9mZiA9IG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXIgPT09ICdWUk0vVW5saXRDdXRvdXQnO1xuICAgIGNvbnN0IGFscGhhTW9kZSA9IGlzVHJhbnNwYXJlbnQgPyAnQkxFTkQnIDogaXNDdXRvZmYgPyAnTUFTSycgOiAnT1BBUVVFJztcbiAgICBjb25zdCBhbHBoYUN1dG9mZiA9IGlzQ3V0b2ZmID8gKG1hdGVyaWFsUHJvcGVydGllcy5mbG9hdFByb3BlcnRpZXM/LlsnX0N1dG9mZiddID8/IDAuNSkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCB0ZXh0dXJlVHJhbnNmb3JtRXh0ID0gdGhpcy5fcG9ydFRleHR1cmVUcmFuc2Zvcm0obWF0ZXJpYWxQcm9wZXJ0aWVzKTtcblxuICAgIGNvbnN0IGJhc2VDb2xvckZhY3RvciA9IChtYXRlcmlhbFByb3BlcnRpZXMudmVjdG9yUHJvcGVydGllcz8uWydfQ29sb3InXSA/PyBbMS4wLCAxLjAsIDEuMCwgMS4wXSkubWFwKGdhbW1hRU9URik7XG4gICAgY29uc3QgYmFzZUNvbG9yVGV4dHVyZUluZGV4ID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLnRleHR1cmVQcm9wZXJ0aWVzPy5bJ19NYWluVGV4J107XG4gICAgY29uc3QgYmFzZUNvbG9yVGV4dHVyZSA9XG4gICAgICBiYXNlQ29sb3JUZXh0dXJlSW5kZXggIT0gbnVsbFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGluZGV4OiBiYXNlQ29sb3JUZXh0dXJlSW5kZXgsXG4gICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgIC4uLnRleHR1cmVUcmFuc2Zvcm1FeHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyB1c2UgbXRvb24gaW5zdGVhZCBvZiB1bmxpdCwgc2luY2UgdGhlcmUgbWlnaHQgYmUgVlJNMC4wIHNwZWNpZmljIGZlYXR1cmVzIHRoYXQgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgZ2x0ZlxuICAgIGNvbnN0IG10b29uRXh0ZW5zaW9uOiBWMU1Ub29uU2NoZW1hLlZSTUNNYXRlcmlhbHNNVG9vbiA9IHtcbiAgICAgIHNwZWNWZXJzaW9uOiAnMS4wJyxcbiAgICAgIHRyYW5zcGFyZW50V2l0aFpXcml0ZTogaXNUcmFuc3BhcmVudFpXcml0ZSxcbiAgICAgIHJlbmRlclF1ZXVlT2Zmc2V0TnVtYmVyLFxuICAgICAgc2hhZGVDb2xvckZhY3RvcjogYmFzZUNvbG9yRmFjdG9yLFxuICAgICAgc2hhZGVNdWx0aXBseVRleHR1cmU6IGJhc2VDb2xvclRleHR1cmUsXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zY2hlbWFNYXRlcmlhbCxcblxuICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3M6IHtcbiAgICAgICAgYmFzZUNvbG9yRmFjdG9yLFxuICAgICAgICBiYXNlQ29sb3JUZXh0dXJlLFxuICAgICAgfSxcbiAgICAgIGFscGhhTW9kZSxcbiAgICAgIGFscGhhQ3V0b2ZmLFxuICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gICAgICAgIFZSTUNfbWF0ZXJpYWxzX210b29uOiBtdG9vbkV4dGVuc2lvbixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBnbFRGIGBLSFJfdGV4dHVyZV90cmFuc2Zvcm1gIGV4dGVuc2lvbiBmcm9tIHYwIHRleHR1cmUgdHJhbnNmb3JtIGluZm8uXG4gICAqL1xuICBwcml2YXRlIF9wb3J0VGV4dHVyZVRyYW5zZm9ybShtYXRlcmlhbFByb3BlcnRpZXM6IFYwTWF0ZXJpYWwpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgdGV4dHVyZVRyYW5zZm9ybSA9IG1hdGVyaWFsUHJvcGVydGllcy52ZWN0b3JQcm9wZXJ0aWVzPy5bJ19NYWluVGV4J107XG4gICAgaWYgKHRleHR1cmVUcmFuc2Zvcm0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldCA9IFt0ZXh0dXJlVHJhbnNmb3JtPy5bMF0gPz8gMC4wLCB0ZXh0dXJlVHJhbnNmb3JtPy5bMV0gPz8gMC4wXTtcbiAgICBjb25zdCBzY2FsZSA9IFt0ZXh0dXJlVHJhbnNmb3JtPy5bMl0gPz8gMS4wLCB0ZXh0dXJlVHJhbnNmb3JtPy5bM10gPz8gMS4wXTtcblxuICAgIG9mZnNldFsxXSA9IDEuMCAtIHNjYWxlWzFdIC0gb2Zmc2V0WzFdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogeyBvZmZzZXQsIHNjYWxlIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHYwIHJlbmRlciBvcmRlciBpbnRvIHYxIHJlbmRlciBvcmRlci5cbiAgICogVGhpcyB1c2VzIGEgbWFwIGZyb20gdjAgcmVuZGVyIHF1ZXVlIHRvIHYxIGNvbXBsaWFudCByZW5kZXIgcXVldWUgb2Zmc2V0IHdoaWNoIGlzIGdlbmVyYXRlZCBpbiB7QGxpbmsgX3BvcHVsYXRlUmVuZGVyUXVldWVNYXB9LlxuICAgKi9cbiAgcHJpdmF0ZSBfdjBQYXJzZVJlbmRlclF1ZXVlKG1hdGVyaWFsUHJvcGVydGllczogVjBNYXRlcmlhbCk6IG51bWJlciB7XG4gICAgY29uc3QgaXNUcmFuc3BhcmVudFpXcml0ZSA9IG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXIgPT09ICdWUk0vVW5saXRUcmFuc3BhcmVudFpXcml0ZSc7XG4gICAgY29uc3QgaXNUcmFuc3BhcmVudCA9XG4gICAgICBtYXRlcmlhbFByb3BlcnRpZXMua2V5d29yZE1hcD8uWydfQUxQSEFCTEVORF9PTiddICE9IHVuZGVmaW5lZCB8fFxuICAgICAgbWF0ZXJpYWxQcm9wZXJ0aWVzLnNoYWRlciA9PT0gJ1ZSTS9VbmxpdFRyYW5zcGFyZW50JyB8fFxuICAgICAgaXNUcmFuc3BhcmVudFpXcml0ZTtcbiAgICBjb25zdCBlbmFibGVkWldyaXRlID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLmZsb2F0UHJvcGVydGllcz8uWydfWldyaXRlJ10gPT09IDEgfHwgaXNUcmFuc3BhcmVudFpXcml0ZTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgaWYgKGlzVHJhbnNwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHYwUXVldWUgPSBtYXRlcmlhbFByb3BlcnRpZXMucmVuZGVyUXVldWU7XG5cbiAgICAgIGlmICh2MFF1ZXVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGVuYWJsZWRaV3JpdGUpIHtcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9yZW5kZXJRdWV1ZU1hcFRyYW5zcGFyZW50WldyaXRlLmdldCh2MFF1ZXVlKSE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fcmVuZGVyUXVldWVNYXBUcmFuc3BhcmVudC5nZXQodjBRdWV1ZSkhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBtYXAgd2hpY2ggbWFwcyB2MCByZW5kZXIgcXVldWUgdG8gdjEgY29tcGxpYW50IHJlbmRlciBxdWV1ZSBvZmZzZXQuXG4gICAqIFRoaXMgbGlzdHMgdXAgYWxsIHJlbmRlciBxdWV1ZXMgdGhlIG1vZGVsIHVzZSBhbmQgY3JlYXRlcyBhIG1hcCB0byBuZXcgcmVuZGVyIHF1ZXVlIG9mZnNldHMgaW4gdGhlIHNhbWUgb3JkZXIuXG4gICAqL1xuICBwcml2YXRlIF9wb3B1bGF0ZVJlbmRlclF1ZXVlTWFwKG1hdGVyaWFsUHJvcGVydGllc0xpc3Q6IFYwTWF0ZXJpYWxbXSkge1xuICAgIC8qKlxuICAgICAqIEEgc2V0IG9mIHVzZWQgcmVuZGVyIHF1ZXVlcyBpbiBUcmFuc3BhcmVudCBtYXRlcmlhbHMuXG4gICAgICovXG4gICAgY29uc3QgcmVuZGVyUXVldWVzVHJhbnNwYXJlbnQgPSBuZXcgU2V0PG51bWJlcj4oKTtcblxuICAgIC8qKlxuICAgICAqIEEgc2V0IG9mIHVzZWQgcmVuZGVyIHF1ZXVlcyBpbiBUcmFuc3BhcmVudFpXcml0ZSBtYXRlcmlhbHMuXG4gICAgICovXG4gICAgY29uc3QgcmVuZGVyUXVldWVzVHJhbnNwYXJlbnRaV3JpdGUgPSBuZXcgU2V0PG51bWJlcj4oKTtcblxuICAgIC8vIHBvcHVsYXRlIHRoZSByZW5kZXIgcXVldWUgc2V0XG4gICAgbWF0ZXJpYWxQcm9wZXJ0aWVzTGlzdC5mb3JFYWNoKChtYXRlcmlhbFByb3BlcnRpZXMpID0+IHtcbiAgICAgIGNvbnN0IGlzVHJhbnNwYXJlbnRaV3JpdGUgPSBtYXRlcmlhbFByb3BlcnRpZXMuc2hhZGVyID09PSAnVlJNL1VubGl0VHJhbnNwYXJlbnRaV3JpdGUnO1xuICAgICAgY29uc3QgaXNUcmFuc3BhcmVudCA9XG4gICAgICAgIG1hdGVyaWFsUHJvcGVydGllcy5rZXl3b3JkTWFwPy5bJ19BTFBIQUJMRU5EX09OJ10gIT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG1hdGVyaWFsUHJvcGVydGllcy5zaGFkZXIgPT09ICdWUk0vVW5saXRUcmFuc3BhcmVudCcgfHxcbiAgICAgICAgaXNUcmFuc3BhcmVudFpXcml0ZTtcbiAgICAgIGNvbnN0IGVuYWJsZWRaV3JpdGUgPSBtYXRlcmlhbFByb3BlcnRpZXMuZmxvYXRQcm9wZXJ0aWVzPy5bJ19aV3JpdGUnXSA9PT0gMSB8fCBpc1RyYW5zcGFyZW50WldyaXRlO1xuXG4gICAgICBpZiAoaXNUcmFuc3BhcmVudCkge1xuICAgICAgICBjb25zdCB2MFF1ZXVlID0gbWF0ZXJpYWxQcm9wZXJ0aWVzLnJlbmRlclF1ZXVlO1xuXG4gICAgICAgIGlmICh2MFF1ZXVlICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoZW5hYmxlZFpXcml0ZSkge1xuICAgICAgICAgICAgcmVuZGVyUXVldWVzVHJhbnNwYXJlbnRaV3JpdGUuYWRkKHYwUXVldWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJRdWV1ZXNUcmFuc3BhcmVudC5hZGQodjBRdWV1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IGEgd2FybmluZyBpZiB0aGUgbW9kZWwgdXNlcyB2MSBpbmNvbXBhdGlibGUgbnVtYmVyIG9mIHJlbmRlciBxdWV1ZXNcbiAgICBpZiAocmVuZGVyUXVldWVzVHJhbnNwYXJlbnQuc2l6ZSA+IDEwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBWUk1NYXRlcmlhbHNWMENvbXBhdFBsdWdpbjogVGhpcyBWUk0gdXNlcyAke3JlbmRlclF1ZXVlc1RyYW5zcGFyZW50LnNpemV9IHJlbmRlciBxdWV1ZXMgZm9yIFRyYW5zcGFyZW50IG1hdGVyaWFscyB3aGlsZSBWUk0gMS4wIG9ubHkgc3VwcG9ydHMgdXAgdG8gMTAgcmVuZGVyIHF1ZXVlcy4gVGhlIG1vZGVsIG1pZ2h0IG5vdCBiZSByZW5kZXJlZCBjb3JyZWN0bHkuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlclF1ZXVlc1RyYW5zcGFyZW50WldyaXRlLnNpemUgPiAxMCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVlJNTWF0ZXJpYWxzVjBDb21wYXRQbHVnaW46IFRoaXMgVlJNIHVzZXMgJHtyZW5kZXJRdWV1ZXNUcmFuc3BhcmVudFpXcml0ZS5zaXplfSByZW5kZXIgcXVldWVzIGZvciBUcmFuc3BhcmVudFpXcml0ZSBtYXRlcmlhbHMgd2hpbGUgVlJNIDEuMCBvbmx5IHN1cHBvcnRzIHVwIHRvIDEwIHJlbmRlciBxdWV1ZXMuIFRoZSBtb2RlbCBtaWdodCBub3QgYmUgcmVuZGVyZWQgY29ycmVjdGx5LmAsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIG1hcCBmcm9tIHYwIHJlbmRlciBxdWV1ZSB0byB2MSByZW5kZXIgcXVldWUgb2Zmc2V0XG4gICAgQXJyYXkuZnJvbShyZW5kZXJRdWV1ZXNUcmFuc3BhcmVudClcbiAgICAgIC5zb3J0KClcbiAgICAgIC5mb3JFYWNoKChxdWV1ZSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdRdWV1ZU9mZnNldCA9IE1hdGgubWluKE1hdGgubWF4KGkgLSByZW5kZXJRdWV1ZXNUcmFuc3BhcmVudC5zaXplICsgMSwgLTkpLCAwKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUXVldWVNYXBUcmFuc3BhcmVudC5zZXQocXVldWUsIG5ld1F1ZXVlT2Zmc2V0KTtcbiAgICAgIH0pO1xuXG4gICAgQXJyYXkuZnJvbShyZW5kZXJRdWV1ZXNUcmFuc3BhcmVudFpXcml0ZSlcbiAgICAgIC5zb3J0KClcbiAgICAgIC5mb3JFYWNoKChxdWV1ZSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdRdWV1ZU9mZnNldCA9IE1hdGgubWluKE1hdGgubWF4KGksIDApLCA5KTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUXVldWVNYXBUcmFuc3BhcmVudFpXcml0ZS5zZXQocXVldWUsIG5ld1F1ZXVlT2Zmc2V0KTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGdhbW1hRU9URihlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3coZSwgMi4yKTtcbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1Ob2RlQ29uc3RyYWludCB9IGZyb20gJy4uL1ZSTU5vZGVDb25zdHJhaW50JztcblxuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbmV4cG9ydCBjbGFzcyBWUk1Ob2RlQ29uc3RyYWludEhlbHBlciBleHRlbmRzIFRIUkVFLkdyb3VwIHtcbiAgcHVibGljIHJlYWRvbmx5IGNvbnN0cmFpbnQ6IFZSTU5vZGVDb25zdHJhaW50O1xuICBwcml2YXRlIF9saW5lOiBUSFJFRS5MaW5lO1xuICBwcml2YXRlIF9hdHRyUG9zaXRpb246IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoY29uc3RyYWludDogVlJNTm9kZUNvbnN0cmFpbnQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fYXR0clBvc2l0aW9uID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwLCAwLCAwLCAwXSksIDMpO1xuICAgIHRoaXMuX2F0dHJQb3NpdGlvbi5zZXRVc2FnZShUSFJFRS5EeW5hbWljRHJhd1VzYWdlKTtcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHRoaXMuX2F0dHJQb3NpdGlvbik7XG5cbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHhmZjAwZmYsXG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9saW5lID0gbmV3IFRIUkVFLkxpbmUoZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICB0aGlzLmFkZCh0aGlzLl9saW5lKTtcblxuICAgIHRoaXMuY29uc3RyYWludCA9IGNvbnN0cmFpbnQ7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlTWF0cml4V29ybGQoZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgX3YzQS5zZXRGcm9tTWF0cml4UG9zaXRpb24odGhpcy5jb25zdHJhaW50LmRlc3RpbmF0aW9uLm1hdHJpeFdvcmxkKTtcbiAgICB0aGlzLl9hdHRyUG9zaXRpb24uc2V0WFlaKDAsIF92M0EueCwgX3YzQS55LCBfdjNBLnopO1xuXG4gICAgaWYgKHRoaXMuY29uc3RyYWludC5zb3VyY2UpIHtcbiAgICAgIF92M0Euc2V0RnJvbU1hdHJpeFBvc2l0aW9uKHRoaXMuY29uc3RyYWludC5zb3VyY2UubWF0cml4V29ybGQpO1xuICAgIH1cbiAgICB0aGlzLl9hdHRyUG9zaXRpb24uc2V0WFlaKDEsIF92M0EueCwgX3YzQS55LCBfdjNBLnopO1xuXG4gICAgdGhpcy5fYXR0clBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIHN1cGVyLnVwZGF0ZU1hdHJpeFdvcmxkKGZvcmNlKTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGRlY29tcG9zZVBvc2l0aW9uIH0gZnJvbSAnLi91dGlscy9kZWNvbXBvc2VQb3NpdGlvbic7XG5pbXBvcnQgeyBkZWNvbXBvc2VSb3RhdGlvbiB9IGZyb20gJy4vdXRpbHMvZGVjb21wb3NlUm90YXRpb24nO1xuaW1wb3J0IHsgcXVhdEludmVydENvbXBhdCB9IGZyb20gJy4vdXRpbHMvcXVhdEludmVydENvbXBhdCc7XG5pbXBvcnQgeyBWUk1Ob2RlQ29uc3RyYWludCB9IGZyb20gJy4vVlJNTm9kZUNvbnN0cmFpbnQnO1xuXG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF92M0IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3YzQyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXRCID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9xdWF0QyA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbi8qKlxuICogQSBjb25zdHJhaW50IHRoYXQgbWFrZXMgaXQgbG9vayBhdCBhIHNvdXJjZSBvYmplY3QuXG4gKlxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvdnJtLXNwZWNpZmljYXRpb24vdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi9WUk1DX25vZGVfY29uc3RyYWludC0xLjBfYmV0YSNyb2xsLWNvbnN0cmFpbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUFpbUNvbnN0cmFpbnQgZXh0ZW5kcyBWUk1Ob2RlQ29uc3RyYWludCB7XG4gIC8qKlxuICAgKiBUaGUgYWltIGF4aXMgb2YgdGhlIGNvbnN0cmFpbnQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGFpbUF4aXMoKTogJ1Bvc2l0aXZlWCcgfCAnTmVnYXRpdmVYJyB8ICdQb3NpdGl2ZVknIHwgJ05lZ2F0aXZlWScgfCAnUG9zaXRpdmVaJyB8ICdOZWdhdGl2ZVonIHtcbiAgICByZXR1cm4gdGhpcy5fYWltQXhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYWltIGF4aXMgb2YgdGhlIGNvbnN0cmFpbnQuXG4gICAqL1xuICBwdWJsaWMgc2V0IGFpbUF4aXMoYWltQXhpczogJ1Bvc2l0aXZlWCcgfCAnTmVnYXRpdmVYJyB8ICdQb3NpdGl2ZVknIHwgJ05lZ2F0aXZlWScgfCAnUG9zaXRpdmVaJyB8ICdOZWdhdGl2ZVonKSB7XG4gICAgdGhpcy5fYWltQXhpcyA9IGFpbUF4aXM7XG4gICAgdGhpcy5fdjNBaW1BeGlzLnNldChcbiAgICAgIGFpbUF4aXMgPT09ICdQb3NpdGl2ZVgnID8gMS4wIDogYWltQXhpcyA9PT0gJ05lZ2F0aXZlWCcgPyAtMS4wIDogMC4wLFxuICAgICAgYWltQXhpcyA9PT0gJ1Bvc2l0aXZlWScgPyAxLjAgOiBhaW1BeGlzID09PSAnTmVnYXRpdmVZJyA/IC0xLjAgOiAwLjAsXG4gICAgICBhaW1BeGlzID09PSAnUG9zaXRpdmVaJyA/IDEuMCA6IGFpbUF4aXMgPT09ICdOZWdhdGl2ZVonID8gLTEuMCA6IDAuMCxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhaW0gYXhpcyBvZiB0aGUgY29uc3RyYWludC5cbiAgICovXG4gIHByaXZhdGUgX2FpbUF4aXM6ICdQb3NpdGl2ZVgnIHwgJ05lZ2F0aXZlWCcgfCAnUG9zaXRpdmVZJyB8ICdOZWdhdGl2ZVknIHwgJ1Bvc2l0aXZlWicgfCAnTmVnYXRpdmVaJztcblxuICAvKipcbiAgICogVGhlIHtAbGluayBfYWltQXhpc30gYnV0IGluIGFuIGFjdHVhbCBWZWN0b3IzIGZvcm0uXG4gICAqL1xuICBwcml2YXRlIF92M0FpbUF4aXM6IFRIUkVFLlZlY3RvcjM7XG5cbiAgLyoqXG4gICAqIFRoZSByZXN0IHF1YXRlcm5pb24gb2YgdGhlIHtAbGluayBkZXN0aW5hdGlvbn0uXG4gICAqL1xuICBwcml2YXRlIF9kc3RSZXN0UXVhdDogVEhSRUUuUXVhdGVybmlvbjtcblxuICBwdWJsaWMgZ2V0IGRlcGVuZGVuY2llcygpOiBTZXQ8VEhSRUUuT2JqZWN0M0Q+IHtcbiAgICBjb25zdCBzZXQgPSBuZXcgU2V0PFRIUkVFLk9iamVjdDNEPihbdGhpcy5zb3VyY2VdKTtcblxuICAgIGlmICh0aGlzLmRlc3RpbmF0aW9uLnBhcmVudCkge1xuICAgICAgc2V0LmFkZCh0aGlzLmRlc3RpbmF0aW9uLnBhcmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogVEhSRUUuT2JqZWN0M0QsIHNvdXJjZTogVEhSRUUuT2JqZWN0M0QpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbiwgc291cmNlKTtcblxuICAgIHRoaXMuX2FpbUF4aXMgPSAnUG9zaXRpdmVYJztcbiAgICB0aGlzLl92M0FpbUF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKTtcblxuICAgIHRoaXMuX2RzdFJlc3RRdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbml0U3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZHN0UmVzdFF1YXQuY29weSh0aGlzLmRlc3RpbmF0aW9uLnF1YXRlcm5pb24pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAvLyB1cGRhdGUgd29ybGQgbWF0cml4IG9mIGRlc3RpbmF0aW9uIGFuZCBzb3VyY2UgbWFudWFsbHlcbiAgICB0aGlzLmRlc3RpbmF0aW9uLnVwZGF0ZVdvcmxkTWF0cml4KHRydWUsIGZhbHNlKTtcbiAgICB0aGlzLnNvdXJjZS51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7XG5cbiAgICAvLyBnZXQgd29ybGQgcXVhdGVybmlvbiBvZiB0aGUgcGFyZW50IG9mIHRoZSBkZXN0aW5hdGlvblxuICAgIGNvbnN0IGRzdFBhcmVudFdvcmxkUXVhdCA9IF9xdWF0QS5pZGVudGl0eSgpO1xuICAgIGNvbnN0IGludkRzdFBhcmVudFdvcmxkUXVhdCA9IF9xdWF0Qi5pZGVudGl0eSgpO1xuICAgIGlmICh0aGlzLmRlc3RpbmF0aW9uLnBhcmVudCkge1xuICAgICAgZGVjb21wb3NlUm90YXRpb24odGhpcy5kZXN0aW5hdGlvbi5wYXJlbnQubWF0cml4V29ybGQsIGRzdFBhcmVudFdvcmxkUXVhdCk7XG4gICAgICBxdWF0SW52ZXJ0Q29tcGF0KGludkRzdFBhcmVudFdvcmxkUXVhdC5jb3B5KGRzdFBhcmVudFdvcmxkUXVhdCkpO1xuICAgIH1cblxuICAgIC8vIGNhbGN1bGF0ZSBmcm9tLXRvIHZlY3RvcnMgaW4gd29ybGQgY29vcmRcbiAgICBjb25zdCBhMCA9IF92M0EuY29weSh0aGlzLl92M0FpbUF4aXMpLmFwcGx5UXVhdGVybmlvbih0aGlzLl9kc3RSZXN0UXVhdCkuYXBwbHlRdWF0ZXJuaW9uKGRzdFBhcmVudFdvcmxkUXVhdCk7XG4gICAgY29uc3QgYTEgPSBkZWNvbXBvc2VQb3NpdGlvbih0aGlzLnNvdXJjZS5tYXRyaXhXb3JsZCwgX3YzQilcbiAgICAgIC5zdWIoZGVjb21wb3NlUG9zaXRpb24odGhpcy5kZXN0aW5hdGlvbi5tYXRyaXhXb3JsZCwgX3YzQykpXG4gICAgICAubm9ybWFsaXplKCk7XG5cbiAgICAvLyBjcmVhdGUgYSBmcm9tLXRvIHF1YXRlcm5pb24sIGNvbnZlcnQgdG8gZGVzdGluYXRpb24gbG9jYWwgY29vcmQsIHRoZW4gbXVsdGlwbHkgcmVzdCBxdWF0ZXJuaW9uXG4gICAgY29uc3QgdGFyZ2V0UXVhdCA9IF9xdWF0Q1xuICAgICAgLnNldEZyb21Vbml0VmVjdG9ycyhhMCwgYTEpXG4gICAgICAucHJlbXVsdGlwbHkoaW52RHN0UGFyZW50V29ybGRRdWF0KVxuICAgICAgLm11bHRpcGx5KGRzdFBhcmVudFdvcmxkUXVhdClcbiAgICAgIC5tdWx0aXBseSh0aGlzLl9kc3RSZXN0UXVhdCk7XG5cbiAgICAvLyBibGVuZCB3aXRoIHRoZSByZXN0IHF1YXRlcm5pb24gdXNpbmcgd2VpZ2h0XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5xdWF0ZXJuaW9uLmNvcHkodGhpcy5fZHN0UmVzdFF1YXQpLnNsZXJwKHRhcmdldFF1YXQsIHRoaXMud2VpZ2h0KTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29tcG9zZVBvc2l0aW9uPFQgZXh0ZW5kcyBUSFJFRS5WZWN0b3IzPihtYXRyaXg6IFRIUkVFLk1hdHJpeDQsIHRhcmdldDogVCk6IFQge1xuICByZXR1cm4gdGFyZ2V0LnNldChtYXRyaXguZWxlbWVudHNbMTJdLCBtYXRyaXguZWxlbWVudHNbMTNdLCBtYXRyaXguZWxlbWVudHNbMTRdKTtcbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IF92M0EgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3YzQiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvbXBvc2VSb3RhdGlvbjxUIGV4dGVuZHMgVEhSRUUuUXVhdGVybmlvbj4obWF0cml4OiBUSFJFRS5NYXRyaXg0LCB0YXJnZXQ6IFQpOiBUIHtcbiAgbWF0cml4LmRlY29tcG9zZShfdjNBLCB0YXJnZXQsIF92M0IpO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBBIGNvbXBhdCBmdW5jdGlvbiBmb3IgYFF1YXRlcm5pb24uaW52ZXJ0KClgIC8gYFF1YXRlcm5pb24uaW52ZXJzZSgpYC5cbiAqIGBRdWF0ZXJuaW9uLmludmVydCgpYCBpcyBpbnRyb2R1Y2VkIGluIHIxMjMgYW5kIGBRdWF0ZXJuaW9uLmludmVyc2UoKWAgZW1pdHMgYSB3YXJuaW5nLlxuICogV2UgYXJlIGdvaW5nIHRvIHVzZSB0aGlzIGNvbXBhdCBmb3IgYSB3aGlsZS5cbiAqIEBwYXJhbSB0YXJnZXQgQSB0YXJnZXQgcXVhdGVybmlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVhdEludmVydENvbXBhdDxUIGV4dGVuZHMgVEhSRUUuUXVhdGVybmlvbj4odGFyZ2V0OiBUKTogVCB7XG4gIGlmICgodGFyZ2V0IGFzIGFueSkuaW52ZXJ0KSB7XG4gICAgdGFyZ2V0LmludmVydCgpO1xuICB9IGVsc2Uge1xuICAgICh0YXJnZXQgYXMgYW55KS5pbnZlcnNlKCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBBIGJhc2UgY2xhc3Mgb2YgVlJNIGNvbnN0cmFpbnQgY2xhc3Nlcy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZSTU5vZGVDb25zdHJhaW50IHtcbiAgLyoqXG4gICAqIFRoZSBvYmplY3QgYmVpbmcgY29uc3RyYWluZWQgYnkgdGhlIHtAbGluayBzb3VyY2V9LlxuICAgKi9cbiAgcHVibGljIGRlc3RpbmF0aW9uOiBUSFJFRS5PYmplY3QzRDtcblxuICAvKipcbiAgICogVGhlIG9iamVjdCBjb25zdHJhaW5zIHRoZSB7QGxpbmsgZGVzdGluYXRpb259LlxuICAgKi9cbiAgcHVibGljIHNvdXJjZTogVEhSRUUuT2JqZWN0M0Q7XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWlnaHQgb2YgdGhlIGNvbnN0cmFpbnQuXG4gICAqL1xuICBwdWJsaWMgd2VpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIGFic3RyYWN0IGdldCBkZXBlbmRlbmNpZXMoKTogU2V0PFRIUkVFLk9iamVjdDNEPjtcblxuICAvKipcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkZXN0aW5hdGlvbiBvYmplY3RcbiAgICogQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBUSFJFRS5PYmplY3QzRCwgc291cmNlOiBUSFJFRS5PYmplY3QzRCkge1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblxuICAgIHRoaXMud2VpZ2h0ID0gMS4wO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb25zdHJhaW50LlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IHNldEluaXRTdGF0ZSgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgYW5kIGFwcGx5IHRoZSBjb25zdHJhaW50LlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IHVwZGF0ZSgpOiB2b2lkO1xufVxuIiwgImltcG9ydCB0eXBlICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIFRyYXZlcnNlIGFuY2VzdG9ycyBvZiBnaXZlbiBvYmplY3QgYW5kIGNhbGwgZ2l2ZW4gY2FsbGJhY2sgZnJvbSByb290IHNpZGUuXG4gKiBJdCB3aWxsIGluY2x1ZGUgdGhlIGdpdmVuIG9iamVjdCBpdHNlbGYuXG4gKlxuICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0IHlvdSB3YW50IHRvIHRyYXZlcnNlXG4gKiBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGwgYmFjayBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGFuY2VzdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2VBbmNlc3RvcnNGcm9tUm9vdChvYmplY3Q6IFRIUkVFLk9iamVjdDNELCBjYWxsYmFjazogKG9iamVjdDogVEhSRUUuT2JqZWN0M0QpID0+IHZvaWQpOiB2b2lkIHtcbiAgY29uc3QgYW5jZXN0b3JzOiBUSFJFRS5PYmplY3QzRFtdID0gW29iamVjdF07XG5cbiAgbGV0IGhlYWQ6IFRIUkVFLk9iamVjdDNEIHwgbnVsbCA9IG9iamVjdC5wYXJlbnQ7XG4gIHdoaWxlIChoZWFkICE9PSBudWxsKSB7XG4gICAgYW5jZXN0b3JzLnVuc2hpZnQoaGVhZCk7XG4gICAgaGVhZCA9IGhlYWQucGFyZW50O1xuICB9XG5cbiAgYW5jZXN0b3JzLmZvckVhY2goKGFuY2VzdG9yKSA9PiB7XG4gICAgY2FsbGJhY2soYW5jZXN0b3IpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNTm9kZUNvbnN0cmFpbnQgfSBmcm9tICcuL1ZSTU5vZGVDb25zdHJhaW50JztcbmltcG9ydCB7IHRyYXZlcnNlQW5jZXN0b3JzRnJvbVJvb3QgfSBmcm9tICcuL3V0aWxzL3RyYXZlcnNlQW5jZXN0b3JzRnJvbVJvb3QnO1xuXG5leHBvcnQgY2xhc3MgVlJNTm9kZUNvbnN0cmFpbnRNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfY29uc3RyYWludHMgPSBuZXcgU2V0PFZSTU5vZGVDb25zdHJhaW50PigpO1xuICBwdWJsaWMgZ2V0IGNvbnN0cmFpbnRzKCk6IFNldDxWUk1Ob2RlQ29uc3RyYWludD4ge1xuICAgIHJldHVybiB0aGlzLl9jb25zdHJhaW50cztcbiAgfVxuXG4gIHByaXZhdGUgX29iamVjdENvbnN0cmFpbnRzTWFwID0gbmV3IE1hcDxUSFJFRS5PYmplY3QzRCwgU2V0PFZSTU5vZGVDb25zdHJhaW50Pj4oKTtcblxuICBwdWJsaWMgYWRkQ29uc3RyYWludChjb25zdHJhaW50OiBWUk1Ob2RlQ29uc3RyYWludCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnN0cmFpbnRzLmFkZChjb25zdHJhaW50KTtcblxuICAgIGxldCBvYmplY3RTZXQgPSB0aGlzLl9vYmplY3RDb25zdHJhaW50c01hcC5nZXQoY29uc3RyYWludC5kZXN0aW5hdGlvbik7XG4gICAgaWYgKG9iamVjdFNldCA9PSBudWxsKSB7XG4gICAgICBvYmplY3RTZXQgPSBuZXcgU2V0PFZSTU5vZGVDb25zdHJhaW50PigpO1xuICAgICAgdGhpcy5fb2JqZWN0Q29uc3RyYWludHNNYXAuc2V0KGNvbnN0cmFpbnQuZGVzdGluYXRpb24sIG9iamVjdFNldCk7XG4gICAgfVxuICAgIG9iamVjdFNldC5hZGQoY29uc3RyYWludCk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlQ29uc3RyYWludChjb25zdHJhaW50OiBWUk1Ob2RlQ29uc3RyYWludCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnN0cmFpbnRzLmRlbGV0ZShjb25zdHJhaW50KTtcblxuICAgIGNvbnN0IG9iamVjdFNldCA9IHRoaXMuX29iamVjdENvbnN0cmFpbnRzTWFwLmdldChjb25zdHJhaW50LmRlc3RpbmF0aW9uKSE7XG4gICAgb2JqZWN0U2V0LmRlbGV0ZShjb25zdHJhaW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbml0U3RhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgY29uc3RyYWludHNUcmllZCA9IG5ldyBTZXQ8VlJNTm9kZUNvbnN0cmFpbnQ+KCk7XG4gICAgY29uc3QgY29uc3RyYWludHNEb25lID0gbmV3IFNldDxWUk1Ob2RlQ29uc3RyYWludD4oKTtcblxuICAgIGZvciAoY29uc3QgY29uc3RyYWludCBvZiB0aGlzLl9jb25zdHJhaW50cykge1xuICAgICAgdGhpcy5fcHJvY2Vzc0NvbnN0cmFpbnQoY29uc3RyYWludCwgY29uc3RyYWludHNUcmllZCwgY29uc3RyYWludHNEb25lLCAoY29uc3RyYWludCkgPT4gY29uc3RyYWludC5zZXRJbml0U3RhdGUoKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjb25zdHJhaW50c1RyaWVkID0gbmV3IFNldDxWUk1Ob2RlQ29uc3RyYWludD4oKTtcbiAgICBjb25zdCBjb25zdHJhaW50c0RvbmUgPSBuZXcgU2V0PFZSTU5vZGVDb25zdHJhaW50PigpO1xuXG4gICAgZm9yIChjb25zdCBjb25zdHJhaW50IG9mIHRoaXMuX2NvbnN0cmFpbnRzKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzQ29uc3RyYWludChjb25zdHJhaW50LCBjb25zdHJhaW50c1RyaWVkLCBjb25zdHJhaW50c0RvbmUsIChjb25zdHJhaW50KSA9PiBjb25zdHJhaW50LnVwZGF0ZSgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGEgY29uc3RyYWludC5cbiAgICogSWYgdGhlcmUgYXJlIG90aGVyIGNvbnN0cmFpbnRzIHRoYXQgYXJlIGRlcGVuZGFudCwgaXQgd2lsbCB0cnkgdG8gdXBkYXRlIHRoZW0gcmVjdXJzaXZlbHkuXG4gICAqIEl0IG1pZ2h0IHRocm93IGFuIGVycm9yIGlmIHRoZXJlIGFyZSBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG4gICAqXG4gICAqIEludGVuZGVkIHRvIGJlIHVzZWQgaW4ge0BsaW5rIHVwZGF0ZX0gYW5kIHtAbGluayBfcHJvY2Vzc0NvbnN0cmFpbnR9IGl0c2VsZiByZWN1cnNpdmVseS5cbiAgICpcbiAgICogQHBhcmFtIGNvbnN0cmFpbnQgQSBjb25zdHJhaW50IHlvdSB3YW50IHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0gY29uc3RyYWludHNUcmllZCBTZXQgb2YgY29uc3RyYWludHMgdGhhdCBhcmUgYWxyZWFkeSB0cmllZCB0byBiZSB1cGRhdGVkXG4gICAqIEBwYXJhbSBjb25zdHJhaW50c0RvbmUgU2V0IG9mIGNvbnN0cmFpbnRzIHRoYXQgYXJlIGFscmVhZHkgdXAgdG8gZGF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfcHJvY2Vzc0NvbnN0cmFpbnQoXG4gICAgY29uc3RyYWludDogVlJNTm9kZUNvbnN0cmFpbnQsXG4gICAgY29uc3RyYWludHNUcmllZDogU2V0PFZSTU5vZGVDb25zdHJhaW50PixcbiAgICBjb25zdHJhaW50c0RvbmU6IFNldDxWUk1Ob2RlQ29uc3RyYWludD4sXG4gICAgY2FsbGJhY2s6IChjb25zdHJhaW50OiBWUk1Ob2RlQ29uc3RyYWludCkgPT4gdm9pZCxcbiAgKTogdm9pZCB7XG4gICAgaWYgKGNvbnN0cmFpbnRzRG9uZS5oYXMoY29uc3RyYWludCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29uc3RyYWludHNUcmllZC5oYXMoY29uc3RyYWludCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVlJNTm9kZUNvbnN0cmFpbnRNYW5hZ2VyOiBDaXJjdWxhciBkZXBlbmRlbmN5IGRldGVjdGVkIHdoaWxlIHVwZGF0aW5nIGNvbnN0cmFpbnRzJyk7XG4gICAgfVxuICAgIGNvbnN0cmFpbnRzVHJpZWQuYWRkKGNvbnN0cmFpbnQpO1xuXG4gICAgY29uc3QgZGVwT2JqZWN0cyA9IGNvbnN0cmFpbnQuZGVwZW5kZW5jaWVzO1xuICAgIGZvciAoY29uc3QgZGVwT2JqZWN0IG9mIGRlcE9iamVjdHMpIHtcbiAgICAgIHRyYXZlcnNlQW5jZXN0b3JzRnJvbVJvb3QoZGVwT2JqZWN0LCAoZGVwT2JqZWN0QW5jZXN0b3IpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0U2V0ID0gdGhpcy5fb2JqZWN0Q29uc3RyYWludHNNYXAuZ2V0KGRlcE9iamVjdEFuY2VzdG9yKTtcbiAgICAgICAgaWYgKG9iamVjdFNldCkge1xuICAgICAgICAgIGZvciAoY29uc3QgZGVwQ29uc3RyYWludCBvZiBvYmplY3RTZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NDb25zdHJhaW50KGRlcENvbnN0cmFpbnQsIGNvbnN0cmFpbnRzVHJpZWQsIGNvbnN0cmFpbnRzRG9uZSwgY2FsbGJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2soY29uc3RyYWludCk7XG5cbiAgICBjb25zdHJhaW50c0RvbmUuYWRkKGNvbnN0cmFpbnQpO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgcXVhdEludmVydENvbXBhdCB9IGZyb20gJy4vdXRpbHMvcXVhdEludmVydENvbXBhdCc7XG5pbXBvcnQgeyBWUk1Ob2RlQ29uc3RyYWludCB9IGZyb20gJy4vVlJNTm9kZUNvbnN0cmFpbnQnO1xuXG5jb25zdCBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXRCID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuLyoqXG4gKiBBIGNvbnN0cmFpbnQgdGhhdCB0cmFuc2ZlcnMgYSByb3RhdGlvbiBhcm91bmQgb25lIGF4aXMgb2YgYSBzb3VyY2UuXG4gKlxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvdnJtLXNwZWNpZmljYXRpb24vdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi9WUk1DX25vZGVfY29uc3RyYWludC0xLjBfYmV0YSNyb2xsLWNvbnN0cmFpbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFZSTVJvdGF0aW9uQ29uc3RyYWludCBleHRlbmRzIFZSTU5vZGVDb25zdHJhaW50IHtcbiAgLyoqXG4gICAqIFRoZSByZXN0IHF1YXRlcm5pb24gb2YgdGhlIHtAbGluayBkZXN0aW5hdGlvbn0uXG4gICAqL1xuICBwcml2YXRlIF9kc3RSZXN0UXVhdDogVEhSRUUuUXVhdGVybmlvbjtcblxuICAvKipcbiAgICogVGhlIGludmVyc2Ugb2YgdGhlIHJlc3QgcXVhdGVybmlvbiBvZiB0aGUge0BsaW5rIHNvdXJjZX0uXG4gICAqL1xuICBwcml2YXRlIF9pbnZTcmNSZXN0UXVhdDogVEhSRUUuUXVhdGVybmlvbjtcblxuICBwdWJsaWMgZ2V0IGRlcGVuZGVuY2llcygpOiBTZXQ8VEhSRUUuT2JqZWN0M0Q+IHtcbiAgICByZXR1cm4gbmV3IFNldChbdGhpcy5zb3VyY2VdKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogVEhSRUUuT2JqZWN0M0QsIHNvdXJjZTogVEhSRUUuT2JqZWN0M0QpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbiwgc291cmNlKTtcblxuICAgIHRoaXMuX2RzdFJlc3RRdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICB0aGlzLl9pbnZTcmNSZXN0UXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0SW5pdFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX2RzdFJlc3RRdWF0LmNvcHkodGhpcy5kZXN0aW5hdGlvbi5xdWF0ZXJuaW9uKTtcbiAgICBxdWF0SW52ZXJ0Q29tcGF0KHRoaXMuX2ludlNyY1Jlc3RRdWF0LmNvcHkodGhpcy5zb3VyY2UucXVhdGVybmlvbikpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGRlbHRhIHJvdGF0aW9uIGZyb20gdGhlIHJlc3QgYWJvdXQgdGhlIHNvdXJjZVxuICAgIGNvbnN0IHNyY0RlbHRhUXVhdCA9IF9xdWF0QS5jb3B5KHRoaXMuX2ludlNyY1Jlc3RRdWF0KS5tdWx0aXBseSh0aGlzLnNvdXJjZS5xdWF0ZXJuaW9uKTtcblxuICAgIC8vIG11bHRpcGx5IHRoZSBkZWx0YSB0byB0aGUgcmVzdCBvZiB0aGUgZGVzdGluYXRpb25cbiAgICBjb25zdCB0YXJnZXRRdWF0ID0gX3F1YXRCLmNvcHkodGhpcy5fZHN0UmVzdFF1YXQpLm11bHRpcGx5KHNyY0RlbHRhUXVhdCk7XG5cbiAgICAvLyBibGVuZCB3aXRoIHRoZSByZXN0IHF1YXRlcm5pb24gdXNpbmcgd2VpZ2h0XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5xdWF0ZXJuaW9uLmNvcHkodGhpcy5fZHN0UmVzdFF1YXQpLnNsZXJwKHRhcmdldFF1YXQsIHRoaXMud2VpZ2h0KTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IHF1YXRJbnZlcnRDb21wYXQgfSBmcm9tICcuL3V0aWxzL3F1YXRJbnZlcnRDb21wYXQnO1xuaW1wb3J0IHsgVlJNTm9kZUNvbnN0cmFpbnQgfSBmcm9tICcuL1ZSTU5vZGVDb25zdHJhaW50JztcblxuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXRCID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuLyoqXG4gKiBBIGNvbnN0cmFpbnQgdGhhdCB0cmFuc2ZlcnMgYSByb3RhdGlvbiBhcm91bmQgb25lIGF4aXMgb2YgYSBzb3VyY2UuXG4gKlxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvdnJtLXNwZWNpZmljYXRpb24vdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi9WUk1DX25vZGVfY29uc3RyYWludC0xLjBfYmV0YSNyb2xsLWNvbnN0cmFpbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFZSTVJvbGxDb25zdHJhaW50IGV4dGVuZHMgVlJNTm9kZUNvbnN0cmFpbnQge1xuICAvKipcbiAgICogVGhlIHJvbGwgYXhpcyBvZiB0aGUgY29uc3RyYWludC5cbiAgICovXG4gIHB1YmxpYyBnZXQgcm9sbEF4aXMoKTogJ1gnIHwgJ1knIHwgJ1onIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sbEF4aXM7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHJvbGwgYXhpcyBvZiB0aGUgY29uc3RyYWludC5cbiAgICovXG4gIHB1YmxpYyBzZXQgcm9sbEF4aXMocm9sbEF4aXM6ICdYJyB8ICdZJyB8ICdaJykge1xuICAgIHRoaXMuX3JvbGxBeGlzID0gcm9sbEF4aXM7XG4gICAgdGhpcy5fdjNSb2xsQXhpcy5zZXQocm9sbEF4aXMgPT09ICdYJyA/IDEuMCA6IDAuMCwgcm9sbEF4aXMgPT09ICdZJyA/IDEuMCA6IDAuMCwgcm9sbEF4aXMgPT09ICdaJyA/IDEuMCA6IDAuMCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHJvbGwgYXhpcyBvZiB0aGUgY29uc3RyYWludC5cbiAgICovXG4gIHByaXZhdGUgX3JvbGxBeGlzOiAnWCcgfCAnWScgfCAnWic7XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgX3JvbGxBeGlzfSBidXQgaW4gYW4gYWN0dWFsIFZlY3RvcjMgZm9ybS5cbiAgICovXG4gIHByaXZhdGUgX3YzUm9sbEF4aXM6IFRIUkVFLlZlY3RvcjM7XG5cbiAgLyoqXG4gICAqIFRoZSByZXN0IHF1YXRlcm5pb24gb2YgdGhlIHtAbGluayBkZXN0aW5hdGlvbn0uXG4gICAqL1xuICBwcml2YXRlIF9kc3RSZXN0UXVhdDogVEhSRUUuUXVhdGVybmlvbjtcblxuICAvKipcbiAgICogVGhlIGludmVyc2Ugb2YgdGhlIHJlc3QgcXVhdGVybmlvbiBvZiB0aGUge0BsaW5rIGRlc3RpbmF0aW9ufS5cbiAgICovXG4gIHByaXZhdGUgX2ludkRzdFJlc3RRdWF0OiBUSFJFRS5RdWF0ZXJuaW9uO1xuXG4gIC8qKlxuICAgKiBgc3JjUmVzdFF1YXQuaW52ZXJ0KCkgKiBkc3RSZXN0UXVhdGAuXG4gICAqL1xuICBwcml2YXRlIF9pbnZTcmNSZXN0UXVhdE11bERzdFJlc3RRdWF0OiBUSFJFRS5RdWF0ZXJuaW9uO1xuXG4gIHB1YmxpYyBnZXQgZGVwZW5kZW5jaWVzKCk6IFNldDxUSFJFRS5PYmplY3QzRD4ge1xuICAgIHJldHVybiBuZXcgU2V0KFt0aGlzLnNvdXJjZV0pO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBUSFJFRS5PYmplY3QzRCwgc291cmNlOiBUSFJFRS5PYmplY3QzRCkge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuXG4gICAgdGhpcy5fcm9sbEF4aXMgPSAnWCc7XG4gICAgdGhpcy5fdjNSb2xsQXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApO1xuXG4gICAgdGhpcy5fZHN0UmVzdFF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgIHRoaXMuX2ludkRzdFJlc3RRdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICB0aGlzLl9pbnZTcmNSZXN0UXVhdE11bERzdFJlc3RRdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbml0U3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZHN0UmVzdFF1YXQuY29weSh0aGlzLmRlc3RpbmF0aW9uLnF1YXRlcm5pb24pO1xuICAgIHF1YXRJbnZlcnRDb21wYXQodGhpcy5faW52RHN0UmVzdFF1YXQuY29weSh0aGlzLl9kc3RSZXN0UXVhdCkpO1xuICAgIHF1YXRJbnZlcnRDb21wYXQodGhpcy5faW52U3JjUmVzdFF1YXRNdWxEc3RSZXN0UXVhdC5jb3B5KHRoaXMuc291cmNlLnF1YXRlcm5pb24pKS5tdWx0aXBseSh0aGlzLl9kc3RSZXN0UXVhdCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGVsdGEgcm90YXRpb24gZnJvbSB0aGUgcmVzdCBhYm91dCB0aGUgc291cmNlLCB0aGVuIGNvbnZlcnQgdG8gdGhlIGRlc3RpbmF0aW9uIGxvY2FsIGNvb3JkXG4gICAgLyoqXG4gICAgICogV2hhdCB0aGUgcXVhdERlbHRhIGlzIGludGVuZGVkIHRvIGJlOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCBxdWF0U3JjRGVsdGEgPSBfcXVhdEFcbiAgICAgKiAgIC5jb3B5KCB0aGlzLl9pbnZTcmNSZXN0UXVhdCApXG4gICAgICogICAubXVsdGlwbHkoIHRoaXMuc291cmNlLnF1YXRlcm5pb24gKTtcbiAgICAgKiBjb25zdCBxdWF0U3JjRGVsdGFJblBhcmVudCA9IF9xdWF0QlxuICAgICAqICAgLmNvcHkoIHRoaXMuX3NyY1Jlc3RRdWF0IClcbiAgICAgKiAgIC5tdWx0aXBseSggcXVhdFNyY0RlbHRhIClcbiAgICAgKiAgIC5tdWx0aXBseSggdGhpcy5faW52U3JjUmVzdFF1YXQgKTtcbiAgICAgKiBjb25zdCBxdWF0U3JjRGVsdGFJbkRzdCA9IF9xdWF0QVxuICAgICAqICAgLmNvcHkoIHRoaXMuX2ludkRzdFJlc3RRdWF0IClcbiAgICAgKiAgIC5tdWx0aXBseSggcXVhdFNyY0RlbHRhSW5QYXJlbnQgKVxuICAgICAqICAgLm11bHRpcGx5KCB0aGlzLl9kc3RSZXN0UXVhdCApO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGNvbnN0IHF1YXREZWx0YSA9IF9xdWF0QVxuICAgICAgLmNvcHkodGhpcy5faW52RHN0UmVzdFF1YXQpXG4gICAgICAubXVsdGlwbHkodGhpcy5zb3VyY2UucXVhdGVybmlvbilcbiAgICAgIC5tdWx0aXBseSh0aGlzLl9pbnZTcmNSZXN0UXVhdE11bERzdFJlc3RRdWF0KTtcblxuICAgIC8vIGNyZWF0ZSBhIGZyb20tdG8gcXVhdGVybmlvblxuICAgIGNvbnN0IG4xID0gX3YzQS5jb3B5KHRoaXMuX3YzUm9sbEF4aXMpLmFwcGx5UXVhdGVybmlvbihxdWF0RGVsdGEpO1xuXG4gICAgLyoqXG4gICAgICogV2hhdCB0aGUgcXVhdEZyb21UbyBpcyBpbnRlbmRlZCB0byBiZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3QgcXVhdEZyb21UbyA9IF9xdWF0Qi5zZXRGcm9tVW5pdFZlY3RvcnMoIHRoaXMuX3YzUm9sbEF4aXMsIG4xICkuaW52ZXJzZSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGNvbnN0IHF1YXRGcm9tVG8gPSBfcXVhdEIuc2V0RnJvbVVuaXRWZWN0b3JzKG4xLCB0aGlzLl92M1JvbGxBeGlzKTtcblxuICAgIC8vIHF1YXRGcm9tVG8gKiBxdWF0RGVsdGEgPT0gcm9sbCBleHRyYWN0ZWQgZnJvbSBxdWF0RGVsdGFcbiAgICBjb25zdCB0YXJnZXRRdWF0ID0gcXVhdEZyb21Uby5wcmVtdWx0aXBseSh0aGlzLl9kc3RSZXN0UXVhdCkubXVsdGlwbHkocXVhdERlbHRhKTtcblxuICAgIC8vIGJsZW5kIHdpdGggdGhlIHJlc3QgcXVhdGVybmlvbiB1c2luZyB3ZWlnaHRcbiAgICB0aGlzLmRlc3RpbmF0aW9uLnF1YXRlcm5pb24uY29weSh0aGlzLl9kc3RSZXN0UXVhdCkuc2xlcnAodGFyZ2V0UXVhdCwgdGhpcy53ZWlnaHQpO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBDb25zdHJhaW50U2NoZW1hIGZyb20gJ0BwaXhpdi90eXBlcy12cm1jLW5vZGUtY29uc3RyYWludC0xLjAnO1xuaW1wb3J0IHR5cGUgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IEdMVEYsIEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IFZSTU5vZGVDb25zdHJhaW50SGVscGVyIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB0eXBlIHsgVlJNTm9kZUNvbnN0cmFpbnRMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9WUk1Ob2RlQ29uc3RyYWludExvYWRlclBsdWdpbk9wdGlvbnMnO1xuaW1wb3J0IHsgVlJNTm9kZUNvbnN0cmFpbnRNYW5hZ2VyIH0gZnJvbSAnLi9WUk1Ob2RlQ29uc3RyYWludE1hbmFnZXInO1xuaW1wb3J0IHsgVlJNUm90YXRpb25Db25zdHJhaW50IH0gZnJvbSAnLi9WUk1Sb3RhdGlvbkNvbnN0cmFpbnQnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuaW1wb3J0IHsgVlJNQWltQ29uc3RyYWludCB9IGZyb20gJy4vVlJNQWltQ29uc3RyYWludCc7XG5pbXBvcnQgeyBWUk1Sb2xsQ29uc3RyYWludCB9IGZyb20gJy4vVlJNUm9sbENvbnN0cmFpbnQnO1xuXG4vKipcbiAqIFBvc3NpYmxlIHNwZWMgdmVyc2lvbnMgaXQgcmVjb2duaXplcy5cbiAqL1xuY29uc3QgUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyA9IG5ldyBTZXQoWycxLjAnLCAnMS4wLWJldGEnXSk7XG5cbmV4cG9ydCBjbGFzcyBWUk1Ob2RlQ29uc3RyYWludExvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVYVEVOU0lPTl9OQU1FID0gJ1ZSTUNfbm9kZV9jb25zdHJhaW50JztcblxuICAvKipcbiAgICogU3BlY2lmeSBhbiBPYmplY3QzRCB0byBhZGQge0BsaW5rIFZSTU5vZGVDb25zdHJhaW50SGVscGVyfSBzLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCBoZWxwZXIgd2lsbCBub3QgYmUgY3JlYXRlZC5cbiAgICogSWYgYHJlbmRlck9yZGVyYCBpcyBzZXQgdG8gdGhlIHJvb3QsIGhlbHBlcnMgd2lsbCBjb3B5IHRoZSBzYW1lIGByZW5kZXJPcmRlcmAgLlxuICAgKi9cbiAgcHVibGljIGhlbHBlclJvb3Q/OiBUSFJFRS5PYmplY3QzRDtcblxuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWUk1Ob2RlQ29uc3RyYWludExvYWRlclBsdWdpbi5FWFRFTlNJT05fTkFNRTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIsIG9wdGlvbnM/OiBWUk1Ob2RlQ29uc3RyYWludExvYWRlclBsdWdpbk9wdGlvbnMpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICAgIHRoaXMuaGVscGVyUm9vdCA9IG9wdGlvbnM/LmhlbHBlclJvb3Q7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBnbHRmLnVzZXJEYXRhLnZybU5vZGVDb25zdHJhaW50TWFuYWdlciA9IGF3YWl0IHRoaXMuX2ltcG9ydChnbHRmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgY29uc3RyYWludHMgZnJvbSBhIEdMVEYgYW5kIHJldHVybnMgYSB7QGxpbmsgVlJNTm9kZUNvbnN0cmFpbnRNYW5hZ2VyfS5cbiAgICogSXQgbWlnaHQgcmV0dXJuIGBudWxsYCBpbnN0ZWFkIHdoZW4gaXQgZG9lcyBub3QgbmVlZCB0byBiZSBjcmVhdGVkIG9yIHNvbWV0aGluZyBnbyB3cm9uZy5cbiAgICpcbiAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgX2ltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1Ob2RlQ29uc3RyYWludE1hbmFnZXIgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIGNvbnN0cmFpbnRzXG4gICAgY29uc3QgaXNDb25zdHJhaW50c1VzZWQgPSBqc29uLmV4dGVuc2lvbnNVc2VkPy5pbmRleE9mKFZSTU5vZGVDb25zdHJhaW50TG9hZGVyUGx1Z2luLkVYVEVOU0lPTl9OQU1FKSAhPT0gLTE7XG4gICAgaWYgKCFpc0NvbnN0cmFpbnRzVXNlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbWFuYWdlciA9IG5ldyBWUk1Ob2RlQ29uc3RyYWludE1hbmFnZXIoKTtcbiAgICBjb25zdCB0aHJlZU5vZGVzOiBUSFJFRS5PYmplY3QzRFtdID0gYXdhaXQgdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCdub2RlJyk7XG5cbiAgICAvLyBpbXBvcnQgY29uc3RyYWludHMgZm9yIGVhY2ggbm9kZXNcbiAgICB0aHJlZU5vZGVzLmZvckVhY2goKG5vZGUsIG5vZGVJbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1hTm9kZSA9IGpzb24ubm9kZXMhW25vZGVJbmRleF07XG5cbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBleHRlbnNpb24gdXNlcyB0aGUgZXh0ZW5zaW9uXG4gICAgICBjb25zdCBleHRlbnNpb24gPSBzY2hlbWFOb2RlPy5leHRlbnNpb25zPy5bVlJNTm9kZUNvbnN0cmFpbnRMb2FkZXJQbHVnaW4uRVhURU5TSU9OX05BTUVdIGFzXG4gICAgICAgIHwgQ29uc3RyYWludFNjaGVtYS5WUk1DTm9kZUNvbnN0cmFpbnRcbiAgICAgICAgfCB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChleHRlbnNpb24gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNwZWNWZXJzaW9uID0gZXh0ZW5zaW9uLnNwZWNWZXJzaW9uO1xuICAgICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TLmhhcyhzcGVjVmVyc2lvbikpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBWUk1Ob2RlQ29uc3RyYWludExvYWRlclBsdWdpbjogVW5rbm93biAke1ZSTU5vZGVDb25zdHJhaW50TG9hZGVyUGx1Z2luLkVYVEVOU0lPTl9OQU1FfSBzcGVjVmVyc2lvbiBcIiR7c3BlY1ZlcnNpb259XCJgLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnN0cmFpbnREZWYgPSBleHRlbnNpb24uY29uc3RyYWludDtcblxuICAgICAgLy8gaW1wb3J0IGNvbnN0cmFpbnRzXG4gICAgICBpZiAoY29uc3RyYWludERlZi5yb2xsICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29uc3RyYWludCA9IHRoaXMuX2ltcG9ydFJvbGxDb25zdHJhaW50KG5vZGUsIHRocmVlTm9kZXMsIGNvbnN0cmFpbnREZWYucm9sbCk7XG4gICAgICAgIG1hbmFnZXIuYWRkQ29uc3RyYWludChjb25zdHJhaW50KTtcbiAgICAgIH0gZWxzZSBpZiAoY29uc3RyYWludERlZi5haW0gIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb25zdHJhaW50ID0gdGhpcy5faW1wb3J0QWltQ29uc3RyYWludChub2RlLCB0aHJlZU5vZGVzLCBjb25zdHJhaW50RGVmLmFpbSk7XG4gICAgICAgIG1hbmFnZXIuYWRkQ29uc3RyYWludChjb25zdHJhaW50KTtcbiAgICAgIH0gZWxzZSBpZiAoY29uc3RyYWludERlZi5yb3RhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbnN0cmFpbnQgPSB0aGlzLl9pbXBvcnRSb3RhdGlvbkNvbnN0cmFpbnQobm9kZSwgdGhyZWVOb2RlcywgY29uc3RyYWludERlZi5yb3RhdGlvbik7XG4gICAgICAgIG1hbmFnZXIuYWRkQ29uc3RyYWludChjb25zdHJhaW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGluaXQgY29uc3RyYWludHNcbiAgICBnbHRmLnNjZW5lLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG4gICAgbWFuYWdlci5zZXRJbml0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYW5hZ2VyO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9pbXBvcnRSb2xsQ29uc3RyYWludChcbiAgICBkZXN0aW5hdGlvbjogVEhSRUUuT2JqZWN0M0QsXG4gICAgbm9kZXM6IFRIUkVFLk9iamVjdDNEW10sXG4gICAgcm9sbENvbnN0cmFpbnREZWY6IENvbnN0cmFpbnRTY2hlbWEuUm9sbENvbnN0cmFpbnQsXG4gICk6IFZSTVJvbGxDb25zdHJhaW50IHtcbiAgICBjb25zdCB7IHNvdXJjZTogc291cmNlSW5kZXgsIHJvbGxBeGlzLCB3ZWlnaHQgfSA9IHJvbGxDb25zdHJhaW50RGVmO1xuICAgIGNvbnN0IHNvdXJjZSA9IG5vZGVzW3NvdXJjZUluZGV4XTtcbiAgICBjb25zdCBjb25zdHJhaW50ID0gbmV3IFZSTVJvbGxDb25zdHJhaW50KGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuXG4gICAgaWYgKHJvbGxBeGlzICE9IG51bGwpIHtcbiAgICAgIGNvbnN0cmFpbnQucm9sbEF4aXMgPSByb2xsQXhpcztcbiAgICB9XG4gICAgaWYgKHdlaWdodCAhPSBudWxsKSB7XG4gICAgICBjb25zdHJhaW50LndlaWdodCA9IHdlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oZWxwZXJSb290KSB7XG4gICAgICBjb25zdCBoZWxwZXIgPSBuZXcgVlJNTm9kZUNvbnN0cmFpbnRIZWxwZXIoY29uc3RyYWludCk7XG4gICAgICB0aGlzLmhlbHBlclJvb3QuYWRkKGhlbHBlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cmFpbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2ltcG9ydEFpbUNvbnN0cmFpbnQoXG4gICAgZGVzdGluYXRpb246IFRIUkVFLk9iamVjdDNELFxuICAgIG5vZGVzOiBUSFJFRS5PYmplY3QzRFtdLFxuICAgIGFpbUNvbnN0cmFpbnREZWY6IENvbnN0cmFpbnRTY2hlbWEuQWltQ29uc3RyYWludCxcbiAgKTogVlJNQWltQ29uc3RyYWludCB7XG4gICAgY29uc3QgeyBzb3VyY2U6IHNvdXJjZUluZGV4LCBhaW1BeGlzLCB3ZWlnaHQgfSA9IGFpbUNvbnN0cmFpbnREZWY7XG4gICAgY29uc3Qgc291cmNlID0gbm9kZXNbc291cmNlSW5kZXhdO1xuICAgIGNvbnN0IGNvbnN0cmFpbnQgPSBuZXcgVlJNQWltQ29uc3RyYWludChkZXN0aW5hdGlvbiwgc291cmNlKTtcblxuICAgIGlmIChhaW1BeGlzICE9IG51bGwpIHtcbiAgICAgIGNvbnN0cmFpbnQuYWltQXhpcyA9IGFpbUF4aXM7XG4gICAgfVxuICAgIGlmICh3ZWlnaHQgIT0gbnVsbCkge1xuICAgICAgY29uc3RyYWludC53ZWlnaHQgPSB3ZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGVscGVyUm9vdCkge1xuICAgICAgY29uc3QgaGVscGVyID0gbmV3IFZSTU5vZGVDb25zdHJhaW50SGVscGVyKGNvbnN0cmFpbnQpO1xuICAgICAgdGhpcy5oZWxwZXJSb290LmFkZChoZWxwZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJhaW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIF9pbXBvcnRSb3RhdGlvbkNvbnN0cmFpbnQoXG4gICAgZGVzdGluYXRpb246IFRIUkVFLk9iamVjdDNELFxuICAgIG5vZGVzOiBUSFJFRS5PYmplY3QzRFtdLFxuICAgIHJvdGF0aW9uQ29uc3RyYWludERlZjogQ29uc3RyYWludFNjaGVtYS5Sb3RhdGlvbkNvbnN0cmFpbnQsXG4gICk6IFZSTVJvdGF0aW9uQ29uc3RyYWludCB7XG4gICAgY29uc3QgeyBzb3VyY2U6IHNvdXJjZUluZGV4LCB3ZWlnaHQgfSA9IHJvdGF0aW9uQ29uc3RyYWludERlZjtcbiAgICBjb25zdCBzb3VyY2UgPSBub2Rlc1tzb3VyY2VJbmRleF07XG4gICAgY29uc3QgY29uc3RyYWludCA9IG5ldyBWUk1Sb3RhdGlvbkNvbnN0cmFpbnQoZGVzdGluYXRpb24sIHNvdXJjZSk7XG5cbiAgICBpZiAod2VpZ2h0ICE9IG51bGwpIHtcbiAgICAgIGNvbnN0cmFpbnQud2VpZ2h0ID0gd2VpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhlbHBlclJvb3QpIHtcbiAgICAgIGNvbnN0IGhlbHBlciA9IG5ldyBWUk1Ob2RlQ29uc3RyYWludEhlbHBlcihjb25zdHJhaW50KTtcbiAgICAgIHRoaXMuaGVscGVyUm9vdC5hZGQoaGVscGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RyYWludDtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFZSTVNwcmluZ0JvbmVDb2xsaWRlciB9IGZyb20gJy4uL1ZSTVNwcmluZ0JvbmVDb2xsaWRlcic7XG5pbXBvcnQgeyBWUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZUNhcHN1bGUgfSBmcm9tICcuLi9WUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZUNhcHN1bGUnO1xuaW1wb3J0IHsgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVQbGFuZSB9IGZyb20gJy4uL1ZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlUGxhbmUnO1xuaW1wb3J0IHsgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVTcGhlcmUgfSBmcm9tICcuLi9WUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZVNwaGVyZSc7XG5pbXBvcnQgeyBDb2xsaWRlclNoYXBlQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL3V0aWxzL0NvbGxpZGVyU2hhcGVCdWZmZXJHZW9tZXRyeSc7XG5pbXBvcnQgeyBDb2xsaWRlclNoYXBlQ2Fwc3VsZUJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi91dGlscy9Db2xsaWRlclNoYXBlQ2Fwc3VsZUJ1ZmZlckdlb21ldHJ5JztcbmltcG9ydCB7IENvbGxpZGVyU2hhcGVQbGFuZUJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi91dGlscy9Db2xsaWRlclNoYXBlUGxhbmVCdWZmZXJHZW9tZXRyeSc7XG5pbXBvcnQgeyBDb2xsaWRlclNoYXBlU3BoZXJlQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL3V0aWxzL0NvbGxpZGVyU2hhcGVTcGhlcmVCdWZmZXJHZW9tZXRyeSc7XG5cbmNvbnN0IF92M0EgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5leHBvcnQgY2xhc3MgVlJNU3ByaW5nQm9uZUNvbGxpZGVySGVscGVyIGV4dGVuZHMgVEhSRUUuR3JvdXAge1xuICBwdWJsaWMgcmVhZG9ubHkgY29sbGlkZXI6IFZSTVNwcmluZ0JvbmVDb2xsaWRlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfZ2VvbWV0cnk6IENvbGxpZGVyU2hhcGVCdWZmZXJHZW9tZXRyeTtcbiAgcHJpdmF0ZSByZWFkb25seSBfbGluZTogVEhSRUUuTGluZVNlZ21lbnRzO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xsaWRlcjogVlJNU3ByaW5nQm9uZUNvbGxpZGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcblxuICAgIHRoaXMuY29sbGlkZXIgPSBjb2xsaWRlcjtcblxuICAgIGlmICh0aGlzLmNvbGxpZGVyLnNoYXBlIGluc3RhbmNlb2YgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVTcGhlcmUpIHtcbiAgICAgIHRoaXMuX2dlb21ldHJ5ID0gbmV3IENvbGxpZGVyU2hhcGVTcGhlcmVCdWZmZXJHZW9tZXRyeSh0aGlzLmNvbGxpZGVyLnNoYXBlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sbGlkZXIuc2hhcGUgaW5zdGFuY2VvZiBWUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZUNhcHN1bGUpIHtcbiAgICAgIHRoaXMuX2dlb21ldHJ5ID0gbmV3IENvbGxpZGVyU2hhcGVDYXBzdWxlQnVmZmVyR2VvbWV0cnkodGhpcy5jb2xsaWRlci5zaGFwZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbGxpZGVyLnNoYXBlIGluc3RhbmNlb2YgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVQbGFuZSkge1xuICAgICAgdGhpcy5fZ2VvbWV0cnkgPSBuZXcgQ29sbGlkZXJTaGFwZVBsYW5lQnVmZmVyR2VvbWV0cnkodGhpcy5jb2xsaWRlci5zaGFwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVlJNU3ByaW5nQm9uZUNvbGxpZGVySGVscGVyOiBVbmtub3duIGNvbGxpZGVyIHNoYXBlIHR5cGUgZGV0ZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHhmZjAwZmYsXG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9saW5lID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyh0aGlzLl9nZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIHRoaXMuYWRkKHRoaXMuX2xpbmUpO1xuICB9XG5cbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZ2VvbWV0cnkuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU1hdHJpeFdvcmxkKGZvcmNlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsaWRlci51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7XG5cbiAgICB0aGlzLm1hdHJpeC5jb3B5KHRoaXMuY29sbGlkZXIubWF0cml4V29ybGQpO1xuXG4gICAgY29uc3QgbWF0cml4V29ybGRFbGVtZW50cyA9IHRoaXMubWF0cml4LmVsZW1lbnRzO1xuICAgIHRoaXMuX2dlb21ldHJ5LndvcmxkU2NhbGUgPSBfdjNBXG4gICAgICAuc2V0KG1hdHJpeFdvcmxkRWxlbWVudHNbMF0sIG1hdHJpeFdvcmxkRWxlbWVudHNbMV0sIG1hdHJpeFdvcmxkRWxlbWVudHNbMl0pXG4gICAgICAubGVuZ3RoKCk7IC8vIGNhbGN1bGF0ZSBzY2FsZSBvZiB4IGNvbXBvbmVudFxuXG4gICAgdGhpcy5fZ2VvbWV0cnkudXBkYXRlKCk7XG5cbiAgICBzdXBlci51cGRhdGVNYXRyaXhXb3JsZChmb3JjZSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZSB9IGZyb20gJy4vVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGUnO1xuXG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF92M0IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5leHBvcnQgY2xhc3MgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVDYXBzdWxlIGV4dGVuZHMgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGUge1xuICBwdWJsaWMgZ2V0IHR5cGUoKTogJ2NhcHN1bGUnIHtcbiAgICByZXR1cm4gJ2NhcHN1bGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvZmZzZXQgb2YgdGhlIGNhcHN1bGUgaGVhZCBmcm9tIHRoZSBvcmlnaW4gaW4gbG9jYWwgc3BhY2UuXG4gICAqL1xuICBwdWJsaWMgb2Zmc2V0OiBUSFJFRS5WZWN0b3IzO1xuXG4gIC8qKlxuICAgKiBUaGUgb2Zmc2V0IG9mIHRoZSBjYXBzdWxlIHRhaWwgZnJvbSB0aGUgb3JpZ2luIGluIGxvY2FsIHNwYWNlLlxuICAgKi9cbiAgcHVibGljIHRhaWw6IFRIUkVFLlZlY3RvcjM7XG5cbiAgLyoqXG4gICAqIFRoZSByYWRpdXMgb2YgdGhlIGNhcHN1bGUuXG4gICAqL1xuICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBjb2xsaWRlciBwcmV2ZW50cyBzcHJpbmcgYm9uZXMgZnJvbSBnb2luZyBvdXRzaWRlIG9mIHRoZSBjYXBzdWxlIGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgaW5zaWRlOiBib29sZWFuO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJhbXM/OiB7IHJhZGl1cz86IG51bWJlcjsgb2Zmc2V0PzogVEhSRUUuVmVjdG9yMzsgdGFpbD86IFRIUkVFLlZlY3RvcjM7IGluc2lkZT86IGJvb2xlYW4gfSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9mZnNldCA9IHBhcmFtcz8ub2Zmc2V0ID8/IG5ldyBUSFJFRS5WZWN0b3IzKDAuMCwgMC4wLCAwLjApO1xuICAgIHRoaXMudGFpbCA9IHBhcmFtcz8udGFpbCA/PyBuZXcgVEhSRUUuVmVjdG9yMygwLjAsIDAuMCwgMC4wKTtcbiAgICB0aGlzLnJhZGl1cyA9IHBhcmFtcz8ucmFkaXVzID8/IDAuMDtcbiAgICB0aGlzLmluc2lkZSA9IHBhcmFtcz8uaW5zaWRlID8/IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGNhbGN1bGF0ZUNvbGxpc2lvbihcbiAgICBjb2xsaWRlck1hdHJpeDogVEhSRUUuTWF0cml4NCxcbiAgICBvYmplY3RQb3NpdGlvbjogVEhSRUUuVmVjdG9yMyxcbiAgICBvYmplY3RSYWRpdXM6IG51bWJlcixcbiAgICB0YXJnZXQ6IFRIUkVFLlZlY3RvcjMsXG4gICk6IG51bWJlciB7XG4gICAgX3YzQS5jb3B5KHRoaXMub2Zmc2V0KS5hcHBseU1hdHJpeDQoY29sbGlkZXJNYXRyaXgpOyAvLyB0cmFuc2Zvcm1lZCBoZWFkXG4gICAgX3YzQi5jb3B5KHRoaXMudGFpbCkuYXBwbHlNYXRyaXg0KGNvbGxpZGVyTWF0cml4KTsgLy8gdHJhbnNmb3JtZWQgdGFpbFxuICAgIF92M0Iuc3ViKF92M0EpOyAvLyBmcm9tIGhlYWQgdG8gdGFpbFxuICAgIGNvbnN0IGxlbmd0aFNxQ2Fwc3VsZSA9IF92M0IubGVuZ3RoU3EoKTtcblxuICAgIHRhcmdldC5jb3B5KG9iamVjdFBvc2l0aW9uKS5zdWIoX3YzQSk7IC8vIGZyb20gaGVhZCB0byBvYmplY3RcbiAgICBjb25zdCBkb3QgPSBfdjNCLmRvdCh0YXJnZXQpOyAvLyBkb3QgcHJvZHVjdCBvZiBvZmZzZXRUb1RhaWwgYW5kIG9mZnNldFRvT2JqZWN0XG5cbiAgICBpZiAoZG90IDw9IDAuMCkge1xuICAgICAgLy8gaWYgb2JqZWN0IGlzIG5lYXIgZnJvbSB0aGUgaGVhZFxuICAgICAgLy8gZG8gbm90aGluZywgdXNlIHRoZSBjdXJyZW50IHZhbHVlIGRpcmVjdGx5XG4gICAgfSBlbHNlIGlmIChsZW5ndGhTcUNhcHN1bGUgPD0gZG90KSB7XG4gICAgICAvLyBpZiBvYmplY3QgaXMgbmVhciBmcm9tIHRoZSB0YWlsXG4gICAgICB0YXJnZXQuc3ViKF92M0IpOyAvLyBmcm9tIHRhaWwgdG8gb2JqZWN0XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG9iamVjdCBpcyBiZXR3ZWVuIHR3byBlbmRzXG4gICAgICBfdjNCLm11bHRpcGx5U2NhbGFyKGRvdCAvIGxlbmd0aFNxQ2Fwc3VsZSk7IC8vIGZyb20gaGVhZCB0byB0aGUgbmVhcmVzdCBwb2ludCBvZiB0aGUgc2hhZnRcbiAgICAgIHRhcmdldC5zdWIoX3YzQik7IC8vIGZyb20gdGhlIHNoYWZ0IHBvaW50IHRvIG9iamVjdFxuICAgIH1cblxuICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5pbnNpZGVcbiAgICAgID8gdGhpcy5yYWRpdXMgLSBvYmplY3RSYWRpdXMgLSB0YXJnZXQubGVuZ3RoKClcbiAgICAgIDogdGFyZ2V0Lmxlbmd0aCgpIC0gb2JqZWN0UmFkaXVzIC0gdGhpcy5yYWRpdXM7XG5cbiAgICB0YXJnZXQubm9ybWFsaXplKCk7IC8vIGNvbnZlcnQgdGhlIGRlbHRhIHRvIHRoZSBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5pbnNpZGUpIHtcbiAgICAgIHRhcmdldC5uZWdhdGUoKTsgLy8gaWYgaW5zaWRlLCByZXZlcnNlIHRoZSBkaXJlY3Rpb25cbiAgICB9XG5cbiAgICByZXR1cm4gZGlzdGFuY2U7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2hhcGUgb2YgYSBjb2xsaWRlci5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlIHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSBzaGFwZS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXQgdHlwZSgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhIGRpc3RhbmNlIGFuZCBhIGRpcmVjdGlvbiBmcm9tIHRoZSBjb2xsaWRlciB0byBhIHRhcmdldCBvYmplY3QuXG4gICAqIEl0J3MgaGl0IGlmIHRoZSBkaXN0YW5jZSBpcyBuZWdhdGl2ZS5cbiAgICogVGhlIGRpcmVjdGlvbiB3aWxsIGJlIGNvbnRhaW5lZCBpbiB0aGUgZ2l2ZW4gdGFyZ2V0IHZlY3Rvci5cbiAgICpcbiAgICogQHBhcmFtIGNvbGxpZGVyTWF0cml4IEEgbWF0cml4IHJlcHJlc2VudHMgdGhlIHRyYW5zZm9ybSBvZiB0aGUgY29sbGlkZXJcbiAgICogQHBhcmFtIG9iamVjdFBvc2l0aW9uIEEgdmVjdG9yIHJlcHJlc2VudHMgdGhlIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gICAqIEBwYXJhbSBvYmplY3RSYWRpdXMgVGhlIHJhZGl1cyBvZiB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSB0YXJnZXQgVGhlIHJlc3VsdCBkaXJlY3Rpb24gd2lsbCBiZSBjb250YWluZWQgaW4gdGhpcyB2ZWN0b3JcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBjYWxjdWxhdGVDb2xsaXNpb24oXG4gICAgY29sbGlkZXJNYXRyaXg6IFRIUkVFLk1hdHJpeDQsXG4gICAgb2JqZWN0UG9zaXRpb246IFRIUkVFLlZlY3RvcjMsXG4gICAgb2JqZWN0UmFkaXVzOiBudW1iZXIsXG4gICAgdGFyZ2V0OiBUSFJFRS5WZWN0b3IzLFxuICApOiBudW1iZXI7XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGUgfSBmcm9tICcuL1ZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlJztcblxuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfbWF0M0EgPSBuZXcgVEhSRUUuTWF0cml4MygpO1xuXG5leHBvcnQgY2xhc3MgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVQbGFuZSBleHRlbmRzIFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlIHtcbiAgcHVibGljIGdldCB0eXBlKCk6ICdwbGFuZScge1xuICAgIHJldHVybiAncGxhbmUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvZmZzZXQgb2YgdGhlIHBsYW5lIGZyb20gdGhlIG9yaWdpbiBpbiBsb2NhbCBzcGFjZS5cbiAgICovXG4gIHB1YmxpYyBvZmZzZXQ6IFRIUkVFLlZlY3RvcjM7XG5cbiAgLyoqXG4gICAqIFRoZSBub3JtYWwgb2YgdGhlIHBsYW5lIGluIGxvY2FsIHNwYWNlLiBNdXN0IGJlIG5vcm1hbGl6ZWQuXG4gICAqL1xuICBwdWJsaWMgbm9ybWFsOiBUSFJFRS5WZWN0b3IzO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJhbXM/OiB7IG9mZnNldD86IFRIUkVFLlZlY3RvcjM7IG5vcm1hbD86IFRIUkVFLlZlY3RvcjMgfSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9mZnNldCA9IHBhcmFtcz8ub2Zmc2V0ID8/IG5ldyBUSFJFRS5WZWN0b3IzKDAuMCwgMC4wLCAwLjApO1xuICAgIHRoaXMubm9ybWFsID0gcGFyYW1zPy5ub3JtYWwgPz8gbmV3IFRIUkVFLlZlY3RvcjMoMC4wLCAwLjAsIDEuMCk7XG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlQ29sbGlzaW9uKFxuICAgIGNvbGxpZGVyTWF0cml4OiBUSFJFRS5NYXRyaXg0LFxuICAgIG9iamVjdFBvc2l0aW9uOiBUSFJFRS5WZWN0b3IzLFxuICAgIG9iamVjdFJhZGl1czogbnVtYmVyLFxuICAgIHRhcmdldDogVEhSRUUuVmVjdG9yMyxcbiAgKTogbnVtYmVyIHtcbiAgICB0YXJnZXQuY29weSh0aGlzLm9mZnNldCkuYXBwbHlNYXRyaXg0KGNvbGxpZGVyTWF0cml4KTsgLy8gdHJhbnNmb3JtZWQgb2Zmc2V0XG4gICAgdGFyZ2V0Lm5lZ2F0ZSgpLmFkZChvYmplY3RQb3NpdGlvbik7IC8vIGEgdmVjdG9yIGZyb20gY29sbGlkZXIgY2VudGVyIHRvIG9iamVjdCBwb3NpdGlvblxuXG4gICAgX21hdDNBLmdldE5vcm1hbE1hdHJpeChjb2xsaWRlck1hdHJpeCk7IC8vIGNvbnZlcnQgdGhlIGNvbGxpZGVyIG1hdHJpeCB0byB0aGUgbm9ybWFsIG1hdHJpeFxuICAgIF92M0EuY29weSh0aGlzLm5vcm1hbCkuYXBwbHlOb3JtYWxNYXRyaXgoX21hdDNBKS5ub3JtYWxpemUoKTsgLy8gdHJhbnNmb3JtZWQgbm9ybWFsXG4gICAgY29uc3QgZGlzdGFuY2UgPSB0YXJnZXQuZG90KF92M0EpIC0gb2JqZWN0UmFkaXVzO1xuXG4gICAgdGFyZ2V0LmNvcHkoX3YzQSk7IC8vIGNvbnZlcnQgdGhlIGRlbHRhIHRvIHRoZSBkaXJlY3Rpb25cblxuICAgIHJldHVybiBkaXN0YW5jZTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlIH0gZnJvbSAnLi9WUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZSc7XG5cbmV4cG9ydCBjbGFzcyBWUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZVNwaGVyZSBleHRlbmRzIFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlIHtcbiAgcHVibGljIGdldCB0eXBlKCk6ICdzcGhlcmUnIHtcbiAgICByZXR1cm4gJ3NwaGVyZSc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG9mZnNldCBvZiB0aGUgc3BoZXJlIGZyb20gdGhlIG9yaWdpbiBpbiBsb2NhbCBzcGFjZS5cbiAgICovXG4gIHB1YmxpYyBvZmZzZXQ6IFRIUkVFLlZlY3RvcjM7XG5cbiAgLyoqXG4gICAqIFRoZSByYWRpdXMuXG4gICAqL1xuICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBjb2xsaWRlciBwcmV2ZW50cyBzcHJpbmcgYm9uZXMgZnJvbSBnb2luZyBvdXRzaWRlIG9mIHRoZSBzcGhlcmUgaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBpbnNpZGU6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmFtcz86IHsgcmFkaXVzPzogbnVtYmVyOyBvZmZzZXQ/OiBUSFJFRS5WZWN0b3IzOyBpbnNpZGU/OiBib29sZWFuIH0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vZmZzZXQgPSBwYXJhbXM/Lm9mZnNldCA/PyBuZXcgVEhSRUUuVmVjdG9yMygwLjAsIDAuMCwgMC4wKTtcbiAgICB0aGlzLnJhZGl1cyA9IHBhcmFtcz8ucmFkaXVzID8/IDAuMDtcbiAgICB0aGlzLmluc2lkZSA9IHBhcmFtcz8uaW5zaWRlID8/IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGNhbGN1bGF0ZUNvbGxpc2lvbihcbiAgICBjb2xsaWRlck1hdHJpeDogVEhSRUUuTWF0cml4NCxcbiAgICBvYmplY3RQb3NpdGlvbjogVEhSRUUuVmVjdG9yMyxcbiAgICBvYmplY3RSYWRpdXM6IG51bWJlcixcbiAgICB0YXJnZXQ6IFRIUkVFLlZlY3RvcjMsXG4gICk6IG51bWJlciB7XG4gICAgdGFyZ2V0LmNvcHkodGhpcy5vZmZzZXQpLmFwcGx5TWF0cml4NChjb2xsaWRlck1hdHJpeCk7IC8vIHRyYW5zZm9ybWVkIG9mZnNldFxuICAgIHRhcmdldC5uZWdhdGUoKS5hZGQob2JqZWN0UG9zaXRpb24pOyAvLyBhIHZlY3RvciBmcm9tIGNvbGxpZGVyIGNlbnRlciB0byBvYmplY3QgcG9zaXRpb25cblxuICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5pbnNpZGVcbiAgICAgID8gdGhpcy5yYWRpdXMgLSBvYmplY3RSYWRpdXMgLSB0YXJnZXQubGVuZ3RoKClcbiAgICAgIDogdGFyZ2V0Lmxlbmd0aCgpIC0gb2JqZWN0UmFkaXVzIC0gdGhpcy5yYWRpdXM7XG5cbiAgICB0YXJnZXQubm9ybWFsaXplKCk7IC8vIGNvbnZlcnQgdGhlIGRlbHRhIHRvIHRoZSBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5pbnNpZGUpIHtcbiAgICAgIHRhcmdldC5uZWdhdGUoKTsgLy8gaWYgaW5zaWRlLCByZXZlcnNlIHRoZSBkaXJlY3Rpb25cbiAgICB9XG5cbiAgICByZXR1cm4gZGlzdGFuY2U7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZUNhcHN1bGUgfSBmcm9tICcuLi8uLi9WUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZUNhcHN1bGUnO1xuaW1wb3J0IHsgQ29sbGlkZXJTaGFwZUJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9Db2xsaWRlclNoYXBlQnVmZmVyR2VvbWV0cnknO1xuXG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuZXhwb3J0IGNsYXNzIENvbGxpZGVyU2hhcGVDYXBzdWxlQnVmZmVyR2VvbWV0cnkgZXh0ZW5kcyBUSFJFRS5CdWZmZXJHZW9tZXRyeSBpbXBsZW1lbnRzIENvbGxpZGVyU2hhcGVCdWZmZXJHZW9tZXRyeSB7XG4gIHB1YmxpYyB3b3JsZFNjYWxlID0gMS4wO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2F0dHJQb3M6IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYXR0ckluZGV4OiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NoYXBlOiBWUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZUNhcHN1bGU7XG4gIHByaXZhdGUgX2N1cnJlbnRSYWRpdXMgPSAwO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jdXJyZW50T2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfY3VycmVudFRhaWwgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaGFwZTogVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVDYXBzdWxlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX3NoYXBlID0gc2hhcGU7XG5cbiAgICB0aGlzLl9hdHRyUG9zID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KDM5NiksIDMpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHRoaXMuX2F0dHJQb3MpO1xuXG4gICAgdGhpcy5fYXR0ckluZGV4ID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDE2QXJyYXkoMjY0KSwgMSk7XG4gICAgdGhpcy5zZXRJbmRleCh0aGlzLl9hdHRySW5kZXgpO1xuXG4gICAgdGhpcy5fYnVpbGRJbmRleCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5fc2hhcGUucmFkaXVzIC8gdGhpcy53b3JsZFNjYWxlO1xuICAgIGlmICh0aGlzLl9jdXJyZW50UmFkaXVzICE9PSByYWRpdXMpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRSYWRpdXMgPSByYWRpdXM7XG4gICAgICBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9jdXJyZW50T2Zmc2V0LmVxdWFscyh0aGlzLl9zaGFwZS5vZmZzZXQpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50T2Zmc2V0LmNvcHkodGhpcy5fc2hhcGUub2Zmc2V0KTtcbiAgICAgIHNob3VsZFVwZGF0ZUdlb21ldHJ5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0YWlsID0gX3YzQS5jb3B5KHRoaXMuX3NoYXBlLnRhaWwpLmRpdmlkZVNjYWxhcih0aGlzLndvcmxkU2NhbGUpO1xuICAgIGlmICh0aGlzLl9jdXJyZW50VGFpbC5kaXN0YW5jZVRvU3F1YXJlZCh0YWlsKSA+IDFlLTEwKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VGFpbC5jb3B5KHRhaWwpO1xuICAgICAgc2hvdWxkVXBkYXRlR2VvbWV0cnkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVHZW9tZXRyeSkge1xuICAgICAgdGhpcy5fYnVpbGRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkUG9zaXRpb24oKTogdm9pZCB7XG4gICAgX3YzQS5jb3B5KHRoaXMuX2N1cnJlbnRUYWlsKS5zdWIodGhpcy5fY3VycmVudE9mZnNldCk7XG4gICAgY29uc3QgbCA9IF92M0EubGVuZ3RoKCkgLyB0aGlzLl9jdXJyZW50UmFkaXVzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMTY7IGkrKykge1xuICAgICAgY29uc3QgdCA9IChpIC8gMTYuMCkgKiBNYXRoLlBJO1xuXG4gICAgICB0aGlzLl9hdHRyUG9zLnNldFhZWihpLCAtTWF0aC5zaW4odCksIC1NYXRoLmNvcyh0KSwgMC4wKTtcbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDE3ICsgaSwgbCArIE1hdGguc2luKHQpLCBNYXRoLmNvcyh0KSwgMC4wKTtcbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDM0ICsgaSwgLU1hdGguc2luKHQpLCAwLjAsIC1NYXRoLmNvcyh0KSk7XG4gICAgICB0aGlzLl9hdHRyUG9zLnNldFhZWig1MSArIGksIGwgKyBNYXRoLnNpbih0KSwgMC4wLCBNYXRoLmNvcyh0KSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gKGkgLyAxNi4wKSAqIE1hdGguUEk7XG4gICAgICB0aGlzLl9hdHRyUG9zLnNldFhZWig2OCArIGksIDAuMCwgTWF0aC5zaW4odCksIE1hdGguY29zKHQpKTtcbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDEwMCArIGksIGwsIE1hdGguc2luKHQpLCBNYXRoLmNvcyh0KSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGhldGEgPSBNYXRoLmF0YW4yKF92M0EueSwgTWF0aC5zcXJ0KF92M0EueCAqIF92M0EueCArIF92M0EueiAqIF92M0EueikpO1xuICAgIGNvbnN0IHBoaSA9IC1NYXRoLmF0YW4yKF92M0EueiwgX3YzQS54KTtcblxuICAgIHRoaXMucm90YXRlWih0aGV0YSk7XG4gICAgdGhpcy5yb3RhdGVZKHBoaSk7XG4gICAgdGhpcy5zY2FsZSh0aGlzLl9jdXJyZW50UmFkaXVzLCB0aGlzLl9jdXJyZW50UmFkaXVzLCB0aGlzLl9jdXJyZW50UmFkaXVzKTtcbiAgICB0aGlzLnRyYW5zbGF0ZSh0aGlzLl9jdXJyZW50T2Zmc2V0LngsIHRoaXMuX2N1cnJlbnRPZmZzZXQueSwgdGhpcy5fY3VycmVudE9mZnNldC56KTtcblxuICAgIHRoaXMuX2F0dHJQb3MubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRJbmRleCgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM0OyBpKyspIHtcbiAgICAgIGNvbnN0IGkxID0gKGkgKyAxKSAlIDM0O1xuXG4gICAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoaSAqIDIsIGksIGkxKTtcbiAgICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSg2OCArIGkgKiAyLCAzNCArIGksIDM0ICsgaTEpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkrKykge1xuICAgICAgY29uc3QgaTEgPSAoaSArIDEpICUgMzI7XG5cbiAgICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSgxMzYgKyBpICogMiwgNjggKyBpLCA2OCArIGkxKTtcbiAgICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSgyMDAgKyBpICogMiwgMTAwICsgaSwgMTAwICsgaTEpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dHJJbmRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZVBsYW5lIH0gZnJvbSAnLi4vLi4vVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVQbGFuZSc7XG5pbXBvcnQgeyBDb2xsaWRlclNoYXBlQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL0NvbGxpZGVyU2hhcGVCdWZmZXJHZW9tZXRyeSc7XG5cbmV4cG9ydCBjbGFzcyBDb2xsaWRlclNoYXBlUGxhbmVCdWZmZXJHZW9tZXRyeSBleHRlbmRzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5IGltcGxlbWVudHMgQ29sbGlkZXJTaGFwZUJ1ZmZlckdlb21ldHJ5IHtcbiAgcHVibGljIHdvcmxkU2NhbGUgPSAxLjA7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfYXR0clBvczogVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hdHRySW5kZXg6IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2hhcGU6IFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlUGxhbmU7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2N1cnJlbnRPZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jdXJyZW50Tm9ybWFsID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2hhcGU6IFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlUGxhbmUpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fc2hhcGUgPSBzaGFwZTtcblxuICAgIHRoaXMuX2F0dHJQb3MgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoNiAqIDMpLCAzKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB0aGlzLl9hdHRyUG9zKTtcblxuICAgIHRoaXMuX2F0dHJJbmRleCA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IFVpbnQxNkFycmF5KDEwKSwgMSk7XG4gICAgdGhpcy5zZXRJbmRleCh0aGlzLl9hdHRySW5kZXgpO1xuXG4gICAgdGhpcy5fYnVpbGRJbmRleCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLl9jdXJyZW50T2Zmc2V0LmVxdWFscyh0aGlzLl9zaGFwZS5vZmZzZXQpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50T2Zmc2V0LmNvcHkodGhpcy5fc2hhcGUub2Zmc2V0KTtcbiAgICAgIHNob3VsZFVwZGF0ZUdlb21ldHJ5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2N1cnJlbnROb3JtYWwuZXF1YWxzKHRoaXMuX3NoYXBlLm5vcm1hbCkpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnROb3JtYWwuY29weSh0aGlzLl9zaGFwZS5ub3JtYWwpO1xuICAgICAgc2hvdWxkVXBkYXRlR2VvbWV0cnkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVHZW9tZXRyeSkge1xuICAgICAgdGhpcy5fYnVpbGRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkUG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fYXR0clBvcy5zZXRYWVooMCwgLTAuNSwgLTAuNSwgMCk7XG4gICAgdGhpcy5fYXR0clBvcy5zZXRYWVooMSwgMC41LCAtMC41LCAwKTtcbiAgICB0aGlzLl9hdHRyUG9zLnNldFhZWigyLCAwLjUsIDAuNSwgMCk7XG4gICAgdGhpcy5fYXR0clBvcy5zZXRYWVooMywgLTAuNSwgMC41LCAwKTtcbiAgICB0aGlzLl9hdHRyUG9zLnNldFhZWig0LCAwLCAwLCAwKTtcbiAgICB0aGlzLl9hdHRyUG9zLnNldFhZWig1LCAwLCAwLCAwLjI1KTtcblxuICAgIHRoaXMudHJhbnNsYXRlKHRoaXMuX2N1cnJlbnRPZmZzZXQueCwgdGhpcy5fY3VycmVudE9mZnNldC55LCB0aGlzLl9jdXJyZW50T2Zmc2V0LnopO1xuICAgIHRoaXMubG9va0F0KHRoaXMuX2N1cnJlbnROb3JtYWwpO1xuXG4gICAgdGhpcy5fYXR0clBvcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9idWlsZEluZGV4KCk6IHZvaWQge1xuICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSgwLCAwLCAxKTtcbiAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoMiwgMSwgMik7XG4gICAgdGhpcy5fYXR0ckluZGV4LnNldFhZKDQsIDIsIDMpO1xuICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSg2LCAzLCAwKTtcbiAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoOCwgNCwgNSk7XG5cbiAgICB0aGlzLl9hdHRySW5kZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVTcGhlcmUgfSBmcm9tICcuLi8uLi9WUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZVNwaGVyZSc7XG5pbXBvcnQgeyBDb2xsaWRlclNoYXBlQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL0NvbGxpZGVyU2hhcGVCdWZmZXJHZW9tZXRyeSc7XG5cbmV4cG9ydCBjbGFzcyBDb2xsaWRlclNoYXBlU3BoZXJlQnVmZmVyR2VvbWV0cnkgZXh0ZW5kcyBUSFJFRS5CdWZmZXJHZW9tZXRyeSBpbXBsZW1lbnRzIENvbGxpZGVyU2hhcGVCdWZmZXJHZW9tZXRyeSB7XG4gIHB1YmxpYyB3b3JsZFNjYWxlID0gMS4wO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2F0dHJQb3M6IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYXR0ckluZGV4OiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NoYXBlOiBWUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZVNwaGVyZTtcbiAgcHJpdmF0ZSBfY3VycmVudFJhZGl1cyA9IDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2N1cnJlbnRPZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaGFwZTogVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVTcGhlcmUpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fc2hhcGUgPSBzaGFwZTtcblxuICAgIHRoaXMuX2F0dHJQb3MgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoMzIgKiAzICogMyksIDMpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHRoaXMuX2F0dHJQb3MpO1xuXG4gICAgdGhpcy5fYXR0ckluZGV4ID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDE2QXJyYXkoNjQgKiAzKSwgMSk7XG4gICAgdGhpcy5zZXRJbmRleCh0aGlzLl9hdHRySW5kZXgpO1xuXG4gICAgdGhpcy5fYnVpbGRJbmRleCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5fc2hhcGUucmFkaXVzIC8gdGhpcy53b3JsZFNjYWxlO1xuICAgIGlmICh0aGlzLl9jdXJyZW50UmFkaXVzICE9PSByYWRpdXMpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRSYWRpdXMgPSByYWRpdXM7XG4gICAgICBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9jdXJyZW50T2Zmc2V0LmVxdWFscyh0aGlzLl9zaGFwZS5vZmZzZXQpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50T2Zmc2V0LmNvcHkodGhpcy5fc2hhcGUub2Zmc2V0KTtcbiAgICAgIHNob3VsZFVwZGF0ZUdlb21ldHJ5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlR2VvbWV0cnkpIHtcbiAgICAgIHRoaXMuX2J1aWxkUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9idWlsZFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkrKykge1xuICAgICAgY29uc3QgdCA9IChpIC8gMTYuMCkgKiBNYXRoLlBJO1xuXG4gICAgICB0aGlzLl9hdHRyUG9zLnNldFhZWihpLCBNYXRoLmNvcyh0KSwgTWF0aC5zaW4odCksIDAuMCk7XG4gICAgICB0aGlzLl9hdHRyUG9zLnNldFhZWigzMiArIGksIDAuMCwgTWF0aC5jb3ModCksIE1hdGguc2luKHQpKTtcbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDY0ICsgaSwgTWF0aC5zaW4odCksIDAuMCwgTWF0aC5jb3ModCkpO1xuICAgIH1cblxuICAgIHRoaXMuc2NhbGUodGhpcy5fY3VycmVudFJhZGl1cywgdGhpcy5fY3VycmVudFJhZGl1cywgdGhpcy5fY3VycmVudFJhZGl1cyk7XG4gICAgdGhpcy50cmFuc2xhdGUodGhpcy5fY3VycmVudE9mZnNldC54LCB0aGlzLl9jdXJyZW50T2Zmc2V0LnksIHRoaXMuX2N1cnJlbnRPZmZzZXQueik7XG5cbiAgICB0aGlzLl9hdHRyUG9zLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkSW5kZXgoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XG4gICAgICBjb25zdCBpMSA9IChpICsgMSkgJSAzMjtcblxuICAgICAgdGhpcy5fYXR0ckluZGV4LnNldFhZKGkgKiAyLCBpLCBpMSk7XG4gICAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoNjQgKyBpICogMiwgMzIgKyBpLCAzMiArIGkxKTtcbiAgICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSgxMjggKyBpICogMiwgNjQgKyBpLCA2NCArIGkxKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdHRySW5kZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNU3ByaW5nQm9uZUpvaW50IH0gZnJvbSAnLi4vVlJNU3ByaW5nQm9uZUpvaW50JztcbmltcG9ydCB7IFNwcmluZ0JvbmVCdWZmZXJHZW9tZXRyeSB9IGZyb20gJy4vdXRpbHMvU3ByaW5nQm9uZUJ1ZmZlckdlb21ldHJ5JztcblxuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbmV4cG9ydCBjbGFzcyBWUk1TcHJpbmdCb25lSm9pbnRIZWxwZXIgZXh0ZW5kcyBUSFJFRS5Hcm91cCB7XG4gIHB1YmxpYyByZWFkb25seSBzcHJpbmdCb25lOiBWUk1TcHJpbmdCb25lSm9pbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2dlb21ldHJ5OiBTcHJpbmdCb25lQnVmZmVyR2VvbWV0cnk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2xpbmU6IFRIUkVFLkxpbmVTZWdtZW50cztcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc3ByaW5nQm9uZTogVlJNU3ByaW5nQm9uZUpvaW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcblxuICAgIHRoaXMuc3ByaW5nQm9uZSA9IHNwcmluZ0JvbmU7XG5cbiAgICB0aGlzLl9nZW9tZXRyeSA9IG5ldyBTcHJpbmdCb25lQnVmZmVyR2VvbWV0cnkodGhpcy5zcHJpbmdCb25lKTtcblxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweGZmZmYwMCxcbiAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHRoaXMuX2xpbmUgPSBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKHRoaXMuX2dlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgdGhpcy5hZGQodGhpcy5fbGluZSk7XG4gIH1cblxuICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9nZW9tZXRyeS5kaXNwb3NlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlTWF0cml4V29ybGQoZm9yY2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnNwcmluZ0JvbmUuYm9uZS51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7XG5cbiAgICB0aGlzLm1hdHJpeC5jb3B5KHRoaXMuc3ByaW5nQm9uZS5ib25lLm1hdHJpeFdvcmxkKTtcblxuICAgIGNvbnN0IG1hdHJpeFdvcmxkRWxlbWVudHMgPSB0aGlzLm1hdHJpeC5lbGVtZW50cztcbiAgICB0aGlzLl9nZW9tZXRyeS53b3JsZFNjYWxlID0gX3YzQVxuICAgICAgLnNldChtYXRyaXhXb3JsZEVsZW1lbnRzWzBdLCBtYXRyaXhXb3JsZEVsZW1lbnRzWzFdLCBtYXRyaXhXb3JsZEVsZW1lbnRzWzJdKVxuICAgICAgLmxlbmd0aCgpOyAvLyBjYWxjdWxhdGUgc2NhbGUgb2YgeCBjb21wb25lbnRcblxuICAgIHRoaXMuX2dlb21ldHJ5LnVwZGF0ZSgpO1xuXG4gICAgc3VwZXIudXBkYXRlTWF0cml4V29ybGQoZm9yY2UpO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNU3ByaW5nQm9uZUpvaW50IH0gZnJvbSAnLi4vLi4vVlJNU3ByaW5nQm9uZUpvaW50JztcblxuZXhwb3J0IGNsYXNzIFNwcmluZ0JvbmVCdWZmZXJHZW9tZXRyeSBleHRlbmRzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcHVibGljIHdvcmxkU2NhbGUgPSAxLjA7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfYXR0clBvczogVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hdHRySW5kZXg6IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfc3ByaW5nQm9uZTogVlJNU3ByaW5nQm9uZUpvaW50O1xuICBwcml2YXRlIF9jdXJyZW50UmFkaXVzID0gMDtcbiAgcHJpdmF0ZSByZWFkb25seSBfY3VycmVudFRhaWwgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzcHJpbmdCb25lOiBWUk1TcHJpbmdCb25lSm9pbnQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fc3ByaW5nQm9uZSA9IHNwcmluZ0JvbmU7XG5cbiAgICB0aGlzLl9hdHRyUG9zID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KDI5NCksIDMpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHRoaXMuX2F0dHJQb3MpO1xuXG4gICAgdGhpcy5fYXR0ckluZGV4ID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDE2QXJyYXkoMTk0KSwgMSk7XG4gICAgdGhpcy5zZXRJbmRleCh0aGlzLl9hdHRySW5kZXgpO1xuXG4gICAgdGhpcy5fYnVpbGRJbmRleCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5fc3ByaW5nQm9uZS5zZXR0aW5ncy5oaXRSYWRpdXMgLyB0aGlzLndvcmxkU2NhbGU7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRSYWRpdXMgIT09IHJhZGl1cykge1xuICAgICAgdGhpcy5fY3VycmVudFJhZGl1cyA9IHJhZGl1cztcbiAgICAgIHNob3VsZFVwZGF0ZUdlb21ldHJ5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2N1cnJlbnRUYWlsLmVxdWFscyh0aGlzLl9zcHJpbmdCb25lLmluaXRpYWxMb2NhbENoaWxkUG9zaXRpb24pKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VGFpbC5jb3B5KHRoaXMuX3NwcmluZ0JvbmUuaW5pdGlhbExvY2FsQ2hpbGRQb3NpdGlvbik7XG4gICAgICBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFVwZGF0ZUdlb21ldHJ5KSB7XG4gICAgICB0aGlzLl9idWlsZFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSAoaSAvIDE2LjApICogTWF0aC5QSTtcblxuICAgICAgdGhpcy5fYXR0clBvcy5zZXRYWVooaSwgTWF0aC5jb3ModCksIE1hdGguc2luKHQpLCAwLjApO1xuICAgICAgdGhpcy5fYXR0clBvcy5zZXRYWVooMzIgKyBpLCAwLjAsIE1hdGguY29zKHQpLCBNYXRoLnNpbih0KSk7XG4gICAgICB0aGlzLl9hdHRyUG9zLnNldFhZWig2NCArIGksIE1hdGguc2luKHQpLCAwLjAsIE1hdGguY29zKHQpKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlKHRoaXMuX2N1cnJlbnRSYWRpdXMsIHRoaXMuX2N1cnJlbnRSYWRpdXMsIHRoaXMuX2N1cnJlbnRSYWRpdXMpO1xuICAgIHRoaXMudHJhbnNsYXRlKHRoaXMuX2N1cnJlbnRUYWlsLngsIHRoaXMuX2N1cnJlbnRUYWlsLnksIHRoaXMuX2N1cnJlbnRUYWlsLnopO1xuXG4gICAgdGhpcy5fYXR0clBvcy5zZXRYWVooOTYsIDAsIDAsIDApO1xuICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDk3LCB0aGlzLl9jdXJyZW50VGFpbC54LCB0aGlzLl9jdXJyZW50VGFpbC55LCB0aGlzLl9jdXJyZW50VGFpbC56KTtcblxuICAgIHRoaXMuX2F0dHJQb3MubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRJbmRleCgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcbiAgICAgIGNvbnN0IGkxID0gKGkgKyAxKSAlIDMyO1xuXG4gICAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoaSAqIDIsIGksIGkxKTtcbiAgICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSg2NCArIGkgKiAyLCAzMiArIGksIDMyICsgaTEpO1xuICAgICAgdGhpcy5fYXR0ckluZGV4LnNldFhZKDEyOCArIGkgKiAyLCA2NCArIGksIDY0ICsgaTEpO1xuICAgIH1cbiAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoMTkyLCA5NiwgOTcpO1xuXG4gICAgdGhpcy5fYXR0ckluZGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGUgfSBmcm9tICcuL1ZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29sbGlkZXIgb2YgYSBWUk0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1TcHJpbmdCb25lQ29sbGlkZXIgZXh0ZW5kcyBUSFJFRS5PYmplY3QzRCB7XG4gIC8qKlxuICAgKiBUaGUgc2hhcGUgb2YgdGhlIGNvbGxpZGVyLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHNoYXBlOiBWUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2hhcGU6IFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IG1hdDRJbnZlcnRDb21wYXQgfSBmcm9tICcuL3V0aWxzL21hdDRJbnZlcnRDb21wYXQnO1xuaW1wb3J0IHsgTWF0cml4NEludmVyc2VDYWNoZSB9IGZyb20gJy4vdXRpbHMvTWF0cml4NEludmVyc2VDYWNoZSc7XG5pbXBvcnQgdHlwZSB7IFZSTVNwcmluZ0JvbmVDb2xsaWRlckdyb3VwIH0gZnJvbSAnLi9WUk1TcHJpbmdCb25lQ29sbGlkZXJHcm91cCc7XG5pbXBvcnQgdHlwZSB7IFZSTVNwcmluZ0JvbmVKb2ludFNldHRpbmdzIH0gZnJvbSAnLi9WUk1TcHJpbmdCb25lSm9pbnRTZXR0aW5ncyc7XG5cbi8vIGJhc2VkIG9uXG4vLyBodHRwOi8vcm9ja2V0anVtcC5za3IuanAvdW5pdHkzZC8xMDkvXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZHdhbmdvL1VuaVZSTS9ibG9iL21hc3Rlci9TY3JpcHRzL1NwcmluZ0JvbmUvVlJNU3ByaW5nQm9uZS5jc1xuXG5jb25zdCBJREVOVElUWV9NQVRSSVg0ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblxuLy8gXHU4QTA4XHU3Qjk3XHU0RTJEXHUzMDZFXHU0RTAwXHU2NjQyXHU0RkREXHU1QjU4XHU3NTI4XHU1OTA5XHU2NTcwXHVGRjA4XHU0RTAwXHU1RUE2XHUzMEE0XHUzMEYzXHUzMEI5XHUzMEJGXHUzMEYzXHUzMEI5XHUzMDkyXHU0RjVDXHUzMDYzXHUzMDVGXHUzMDg5XHUzMDQyXHUzMDY4XHUzMDZGXHU0RjdGXHUzMDQ0XHU1NkRFXHUzMDU5XHVGRjA5XG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF92M0IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3YzQyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbi8qKlxuICogQSB0ZW1wb3JhcnkgdmFyaWFibGUgd2hpY2ggaXMgdXNlZCBpbiBgdXBkYXRlYFxuICovXG5jb25zdCBfd29ybGRTcGFjZVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuLyoqXG4gKiBBIHRlbXBvcmFyeSB2YXJpYWJsZSB3aGljaCBpcyB1c2VkIGluIGB1cGRhdGVgXG4gKi9cbmNvbnN0IF9jZW50ZXJTcGFjZVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuLyoqXG4gKiBBIHRlbXBvcmFyeSB2YXJpYWJsZSB3aGljaCBpcyB1c2VkIGluIGB1cGRhdGVgXG4gKi9cbmNvbnN0IF9uZXh0VGFpbCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbmNvbnN0IF9xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfbWF0QSA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5jb25zdCBfbWF0QiA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cbi8qKlxuICogQSBjbGFzcyByZXByZXNlbnRzIGEgc2luZ2xlIGpvaW50IG9mIGEgc3ByaW5nIGJvbmUuXG4gKiBJdCBzaG91bGQgYmUgbWFuYWdlZCBieSBhIFtbVlJNU3ByaW5nQm9uZU1hbmFnZXJdXS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTVNwcmluZ0JvbmVKb2ludCB7XG4gIC8qKlxuICAgKiBTZXR0aW5ncyBvZiB0aGUgYm9uZS5cbiAgICovXG4gIHB1YmxpYyBzZXR0aW5nczogVlJNU3ByaW5nQm9uZUpvaW50U2V0dGluZ3M7XG5cbiAgLyoqXG4gICAqIENvbGxpZGVyIGdyb3VwcyBhdHRhY2hlZCB0byB0aGlzIGJvbmUuXG4gICAqL1xuICBwdWJsaWMgY29sbGlkZXJHcm91cHM6IFZSTVNwcmluZ0JvbmVDb2xsaWRlckdyb3VwW107XG5cbiAgLyoqXG4gICAqIEFuIE9iamVjdDNEIGF0dGFjaGVkIHRvIHRoaXMgYm9uZS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBib25lOiBUSFJFRS5PYmplY3QzRDtcblxuICAvKipcbiAgICogQW4gT2JqZWN0M0QgdGhhdCB3aWxsIGJlIHVzZWQgYXMgYSB0YWlsIG9mIHRoaXMgc3ByaW5nIGJvbmUuXG4gICAqIEl0IGNhbiBiZSBudWxsIHdoZW4gdGhlIHNwcmluZyBib25lIGlzIGltcG9ydGVkIGZyb20gVlJNIDAuMC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBjaGlsZDogVEhSRUUuT2JqZWN0M0QgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBDdXJyZW50IHBvc2l0aW9uIG9mIGNoaWxkIHRhaWwsIGluIGNlbnRlciB1bml0LiBXaWxsIGJlIHVzZWQgZm9yIHZlcmxldCBpbnRlZ3JhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX2N1cnJlbnRUYWlsID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAvKipcbiAgICogUHJldmlvdXMgcG9zaXRpb24gb2YgY2hpbGQgdGFpbCwgaW4gY2VudGVyIHVuaXQuIFdpbGwgYmUgdXNlZCBmb3IgdmVybGV0IGludGVncmF0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfcHJldlRhaWwgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIGF4aXMgb2YgdGhlIGJvbmUsIGluIGxvY2FsIHVuaXQuXG4gICAqL1xuICBwcml2YXRlIF9ib25lQXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgLyoqXG4gICAqIExlbmd0aCBvZiB0aGUgYm9uZSBpbiB3b3JsZCB1bml0LlxuICAgKiBXaWxsIGJlIHVzZWQgZm9yIG5vcm1hbGl6YXRpb24gaW4gdXBkYXRlIGxvb3AsIHdpbGwgYmUgdXBkYXRlZCBieSB7QGxpbmsgX2NhbGNXb3JsZFNwYWNlQm9uZUxlbmd0aH0uXG4gICAqXG4gICAqIEl0J3Mgc2FtZSBhcyBsb2NhbCB1bml0IGxlbmd0aCB1bmxlc3MgdGhlcmUgYXJlIHNjYWxlIHRyYW5zZm9ybWF0aW9ucyBpbiB0aGUgd29ybGQgc3BhY2UuXG4gICAqL1xuICBwcml2YXRlIF93b3JsZFNwYWNlQm9uZUxlbmd0aCA9IDAuMDtcblxuICAvKipcbiAgICogVGhpcyBzcHJpbmdib25lIHdpbGwgYmUgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgc3BhY2UgcmVsYXRpdmUgZnJvbSB0aGlzIG9iamVjdC5cbiAgICogSWYgdGhpcyBpcyBgbnVsbGAsIHNwcmluZ2JvbmUgd2lsbCBiZSBjYWxjdWxhdGVkIGluIHdvcmxkIHNwYWNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfY2VudGVyOiBUSFJFRS5PYmplY3QzRCB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgZ2V0IGNlbnRlcigpOiBUSFJFRS5PYmplY3QzRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9jZW50ZXI7XG4gIH1cbiAgcHVibGljIHNldCBjZW50ZXIoY2VudGVyOiBUSFJFRS5PYmplY3QzRCB8IG51bGwpIHtcbiAgICAvLyB1bmluc3RhbGwgaW52ZXJzZSBjYWNoZVxuICAgIGlmICh0aGlzLl9jZW50ZXI/LnVzZXJEYXRhLmludmVyc2VDYWNoZVByb3h5KSB7XG4gICAgICAodGhpcy5fY2VudGVyLnVzZXJEYXRhLmludmVyc2VDYWNoZVByb3h5IGFzIE1hdHJpeDRJbnZlcnNlQ2FjaGUpLnJldmVydCgpO1xuICAgICAgZGVsZXRlIHRoaXMuX2NlbnRlci51c2VyRGF0YS5pbnZlcnNlQ2FjaGVQcm94eTtcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2UgdGhlIGNlbnRlclxuICAgIHRoaXMuX2NlbnRlciA9IGNlbnRlcjtcblxuICAgIC8vIGluc3RhbGwgaW52ZXJzZSBjYWNoZVxuICAgIGlmICh0aGlzLl9jZW50ZXIpIHtcbiAgICAgIGlmICghdGhpcy5fY2VudGVyLnVzZXJEYXRhLmludmVyc2VDYWNoZVByb3h5KSB7XG4gICAgICAgIHRoaXMuX2NlbnRlci51c2VyRGF0YS5pbnZlcnNlQ2FjaGVQcm94eSA9IG5ldyBNYXRyaXg0SW52ZXJzZUNhY2hlKHRoaXMuX2NlbnRlci5tYXRyaXhXb3JsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgc3RhdGUgb2YgdGhlIGxvY2FsIG1hdHJpeCBvZiB0aGUgYm9uZS5cbiAgICovXG4gIHByaXZhdGUgX2luaXRpYWxMb2NhbE1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgc3RhdGUgb2YgdGhlIHJvdGF0aW9uIG9mIHRoZSBib25lLlxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbExvY2FsUm90YXRpb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIHN0YXRlIG9mIHRoZSBwb3NpdGlvbiBvZiBpdHMgY2hpbGQuXG4gICAqL1xuICBwcml2YXRlIF9pbml0aWFsTG9jYWxDaGlsZFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgcHVibGljIGdldCBpbml0aWFsTG9jYWxDaGlsZFBvc2l0aW9uKCk6IFRIUkVFLlZlY3RvcjMge1xuICAgIHJldHVybiB0aGlzLl9pbml0aWFsTG9jYWxDaGlsZFBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdvcmxkIG1hdHJpeCBvZiBpdHMgcGFyZW50IG9iamVjdC5cbiAgICogTm90ZSB0aGF0IGl0IHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIG1hdHJpeC4gRG9uJ3QgbXV0YXRlIHRoaXMgZGlyZWN0bHkhXG4gICAqL1xuICBwcml2YXRlIGdldCBfcGFyZW50TWF0cml4V29ybGQoKTogVEhSRUUuTWF0cml4NCB7XG4gICAgcmV0dXJuIHRoaXMuYm9uZS5wYXJlbnQgPyB0aGlzLmJvbmUucGFyZW50Lm1hdHJpeFdvcmxkIDogSURFTlRJVFlfTUFUUklYNDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgVlJNU3ByaW5nQm9uZS5cbiAgICpcbiAgICogQHBhcmFtIGJvbmUgQW4gT2JqZWN0M0QgdGhhdCB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoaXMgYm9uZVxuICAgKiBAcGFyYW0gY2hpbGQgQW4gT2JqZWN0M0QgdGhhdCB3aWxsIGJlIHVzZWQgYXMgYSB0YWlsIG9mIHRoaXMgc3ByaW5nIGJvbmUuIEl0IGNhbiBiZSBudWxsIHdoZW4gdGhlIHNwcmluZyBib25lIGlzIGltcG9ydGVkIGZyb20gVlJNIDAuMFxuICAgKiBAcGFyYW0gc2V0dGluZ3MgU2V2ZXJhbCBwYXJhbWV0ZXJzIHJlbGF0ZWQgdG8gYmVoYXZpb3Igb2YgdGhlIHNwcmluZyBib25lXG4gICAqIEBwYXJhbSBjb2xsaWRlckdyb3VwcyBDb2xsaWRlciBncm91cHMgdGhhdCB3aWxsIGJlIGNvbGxpZGVkIHdpdGggdGhpcyBzcHJpbmcgYm9uZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgYm9uZTogVEhSRUUuT2JqZWN0M0QsXG4gICAgY2hpbGQ6IFRIUkVFLk9iamVjdDNEIHwgbnVsbCxcbiAgICBzZXR0aW5nczogUGFydGlhbDxWUk1TcHJpbmdCb25lSm9pbnRTZXR0aW5ncz4gPSB7fSxcbiAgICBjb2xsaWRlckdyb3VwczogVlJNU3ByaW5nQm9uZUNvbGxpZGVyR3JvdXBbXSA9IFtdLFxuICApIHtcbiAgICB0aGlzLmJvbmUgPSBib25lOyAvLyB1bmlWUk1cdTMwNjdcdTMwNkUgcGFyZW50XG4gICAgdGhpcy5ib25lLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTsgLy8gdXBkYXRlXHUzMDZCXHUzMDg4XHUzMDhBXHU4QTA4XHU3Qjk3XHUzMDU1XHUzMDhDXHUzMDhCXHUzMDZFXHUzMDY3dGhyZWUuanNcdTUxODVcdTMwNjdcdTMwNkVcdTgxRUFcdTUyRDVcdTUxRTZcdTc0MDZcdTMwNkZcdTRFMERcdTg5ODFcblxuICAgIHRoaXMuY2hpbGQgPSBjaGlsZDtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBoaXRSYWRpdXM6IHNldHRpbmdzLmhpdFJhZGl1cyA/PyAwLjAsXG4gICAgICBzdGlmZm5lc3M6IHNldHRpbmdzLnN0aWZmbmVzcyA/PyAxLjAsXG4gICAgICBncmF2aXR5UG93ZXI6IHNldHRpbmdzLmdyYXZpdHlQb3dlciA/PyAwLjAsXG4gICAgICBncmF2aXR5RGlyOiBzZXR0aW5ncy5ncmF2aXR5RGlyPy5jbG9uZSgpID8/IG5ldyBUSFJFRS5WZWN0b3IzKDAuMCwgLTEuMCwgMC4wKSxcbiAgICAgIGRyYWdGb3JjZTogc2V0dGluZ3MuZHJhZ0ZvcmNlID8/IDAuNCxcbiAgICB9O1xuXG4gICAgdGhpcy5jb2xsaWRlckdyb3VwcyA9IGNvbGxpZGVyR3JvdXBzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGlzIHNwcmluZyBib25lLlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byBjYWxsIHtAbGluayBWUk1TcHJpbmdCb25lTWFuYWdlci5zZXRJbml0U3RhdGV9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgc2V0SW5pdFN0YXRlKCk6IHZvaWQge1xuICAgIC8vIHJlbWVtYmVyIGluaXRpYWwgcG9zaXRpb24gb2YgaXRzZWxmXG4gICAgdGhpcy5faW5pdGlhbExvY2FsTWF0cml4LmNvcHkodGhpcy5ib25lLm1hdHJpeCk7XG4gICAgdGhpcy5faW5pdGlhbExvY2FsUm90YXRpb24uY29weSh0aGlzLmJvbmUucXVhdGVybmlvbik7XG5cbiAgICAvLyBzZWUgaW5pdGlhbCBwb3NpdGlvbiBvZiBpdHMgbG9jYWwgY2hpbGRcbiAgICBpZiAodGhpcy5jaGlsZCkge1xuICAgICAgdGhpcy5faW5pdGlhbExvY2FsQ2hpbGRQb3NpdGlvbi5jb3B5KHRoaXMuY2hpbGQucG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB2cm0wIHJlcXVpcmVzIGEgN2NtIGZpeGVkIGJvbmUgbGVuZ3RoIGZvciB0aGUgZmluYWwgbm9kZSBpbiBhIGNoYWluXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92cm0tYy92cm0tc3BlY2lmaWNhdGlvbi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uL1ZSTUNfc3ByaW5nQm9uZS0xLjAjYWJvdXQtc3ByaW5nLWNvbmZpZ3VyYXRpb25cbiAgICAgIHRoaXMuX2luaXRpYWxMb2NhbENoaWxkUG9zaXRpb24uY29weSh0aGlzLmJvbmUucG9zaXRpb24pLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKDAuMDcpO1xuICAgIH1cblxuICAgIC8vIGNvcHkgdGhlIGNoaWxkIHBvc2l0aW9uIHRvIHRhaWxzXG4gICAgY29uc3QgbWF0cml4V29ybGRUb0NlbnRlciA9IHRoaXMuX2dldE1hdHJpeFdvcmxkVG9DZW50ZXIoX21hdEEpO1xuICAgIHRoaXMuYm9uZS5sb2NhbFRvV29ybGQodGhpcy5fY3VycmVudFRhaWwuY29weSh0aGlzLl9pbml0aWFsTG9jYWxDaGlsZFBvc2l0aW9uKSkuYXBwbHlNYXRyaXg0KG1hdHJpeFdvcmxkVG9DZW50ZXIpO1xuICAgIHRoaXMuX3ByZXZUYWlsLmNvcHkodGhpcy5fY3VycmVudFRhaWwpO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgc3RhdGVzIHRoYXQgYXJlIHJlbGF0ZWQgdG8gbG9jYWwgY2hpbGQgcG9zaXRpb25cbiAgICB0aGlzLl9ib25lQXhpcy5jb3B5KHRoaXMuX2luaXRpYWxMb2NhbENoaWxkUG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBzdGF0ZSBvZiB0aGlzIGJvbmUuXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIGNhbGwgW1tWUk1TcHJpbmdCb25lTWFuYWdlci5yZXNldF1dIGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5ib25lLnF1YXRlcm5pb24uY29weSh0aGlzLl9pbml0aWFsTG9jYWxSb3RhdGlvbik7XG5cbiAgICAvLyBXZSBuZWVkIHRvIHVwZGF0ZSBpdHMgbWF0cml4V29ybGQgbWFudWFsbHksIHNpbmNlIHdlIHR3ZWFrZWQgdGhlIGJvbmUgYnkgb3VyIGhhbmRcbiAgICB0aGlzLmJvbmUudXBkYXRlTWF0cml4KCk7XG4gICAgdGhpcy5ib25lLm1hdHJpeFdvcmxkLm11bHRpcGx5TWF0cmljZXModGhpcy5fcGFyZW50TWF0cml4V29ybGQsIHRoaXMuYm9uZS5tYXRyaXgpO1xuXG4gICAgLy8gQXBwbHkgdXBkYXRlZCBwb3NpdGlvbiB0byB0YWlsIHN0YXRlc1xuICAgIGNvbnN0IG1hdHJpeFdvcmxkVG9DZW50ZXIgPSB0aGlzLl9nZXRNYXRyaXhXb3JsZFRvQ2VudGVyKF9tYXRBKTtcbiAgICB0aGlzLmJvbmUubG9jYWxUb1dvcmxkKHRoaXMuX2N1cnJlbnRUYWlsLmNvcHkodGhpcy5faW5pdGlhbExvY2FsQ2hpbGRQb3NpdGlvbikpLmFwcGx5TWF0cml4NChtYXRyaXhXb3JsZFRvQ2VudGVyKTtcbiAgICB0aGlzLl9wcmV2VGFpbC5jb3B5KHRoaXMuX2N1cnJlbnRUYWlsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoaXMgYm9uZS5cbiAgICogWW91IG1pZ2h0IHdhbnQgdG8gY2FsbCBbW1ZSTVNwcmluZ0JvbmVNYW5hZ2VyLnVwZGF0ZV1dIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBkZWx0YSBkZWx0YVRpbWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChkZWx0YSA8PSAwKSByZXR1cm47XG5cbiAgICAvLyBVcGRhdGUgdGhlIF93b3JsZFNwYWNlQm9uZUxlbmd0aFxuICAgIHRoaXMuX2NhbGNXb3JsZFNwYWNlQm9uZUxlbmd0aCgpO1xuXG4gICAgLy8gR2V0IGJvbmUgcG9zaXRpb24gaW4gY2VudGVyIHNwYWNlXG4gICAgX3dvcmxkU3BhY2VQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24odGhpcy5ib25lLm1hdHJpeFdvcmxkKTtcbiAgICBsZXQgbWF0cml4V29ybGRUb0NlbnRlciA9IHRoaXMuX2dldE1hdHJpeFdvcmxkVG9DZW50ZXIoX21hdEEpO1xuICAgIF9jZW50ZXJTcGFjZVBvc2l0aW9uLmNvcHkoX3dvcmxkU3BhY2VQb3NpdGlvbikuYXBwbHlNYXRyaXg0KG1hdHJpeFdvcmxkVG9DZW50ZXIpO1xuICAgIGNvbnN0IHF1YXRXb3JsZFRvQ2VudGVyID0gX3F1YXRBLnNldEZyb21Sb3RhdGlvbk1hdHJpeChtYXRyaXhXb3JsZFRvQ2VudGVyKTtcblxuICAgIC8vIEdldCBwYXJlbnQgbWF0cml4IGluIGNlbnRlciBzcGFjZVxuICAgIGNvbnN0IGNlbnRlclNwYWNlUGFyZW50TWF0cml4ID0gX21hdEIuY29weShtYXRyaXhXb3JsZFRvQ2VudGVyKS5tdWx0aXBseSh0aGlzLl9wYXJlbnRNYXRyaXhXb3JsZCk7XG5cbiAgICAvLyBHZXQgYm9uZUF4aXMgaW4gY2VudGVyIHNwYWNlXG4gICAgY29uc3QgY2VudGVyU3BhY2VCb25lQXhpcyA9IF92M0JcbiAgICAgIC5jb3B5KHRoaXMuX2JvbmVBeGlzKVxuICAgICAgLmFwcGx5TWF0cml4NCh0aGlzLl9pbml0aWFsTG9jYWxNYXRyaXgpXG4gICAgICAuYXBwbHlNYXRyaXg0KGNlbnRlclNwYWNlUGFyZW50TWF0cml4KVxuICAgICAgLnN1YihfY2VudGVyU3BhY2VQb3NpdGlvbilcbiAgICAgIC5ub3JtYWxpemUoKTtcblxuICAgIC8vIGdyYXZpdHkgaW4gY2VudGVyIHNwYWNlXG4gICAgY29uc3QgY2VudGVyU3BhY2VHcmF2aXR5ID0gX3YzQy5jb3B5KHRoaXMuc2V0dGluZ3MuZ3Jhdml0eURpcikuYXBwbHlRdWF0ZXJuaW9uKHF1YXRXb3JsZFRvQ2VudGVyKS5ub3JtYWxpemUoKTtcblxuICAgIGNvbnN0IG1hdHJpeENlbnRlclRvV29ybGQgPSB0aGlzLl9nZXRNYXRyaXhDZW50ZXJUb1dvcmxkKF9tYXRBKTtcblxuICAgIC8vIHZlcmxldFx1N0E0RFx1NTIwNlx1MzA2N1x1NkIyMVx1MzA2RVx1NEY0RFx1N0Y2RVx1MzA5Mlx1OEEwOFx1N0I5N1xuICAgIF9uZXh0VGFpbFxuICAgICAgLmNvcHkodGhpcy5fY3VycmVudFRhaWwpXG4gICAgICAuYWRkKFxuICAgICAgICBfdjNBXG4gICAgICAgICAgLmNvcHkodGhpcy5fY3VycmVudFRhaWwpXG4gICAgICAgICAgLnN1Yih0aGlzLl9wcmV2VGFpbClcbiAgICAgICAgICAubXVsdGlwbHlTY2FsYXIoMSAtIHRoaXMuc2V0dGluZ3MuZHJhZ0ZvcmNlKSxcbiAgICAgICkgLy8gXHU1MjREXHUzMEQ1XHUzMEVDXHUzMEZDXHUzMEUwXHUzMDZFXHU3OUZCXHU1MkQ1XHUzMDkyXHU3RDk5XHU3RDlBXHUzMDU5XHUzMDhCKFx1NkUxQlx1ODg3MFx1MzA4Mlx1MzA0Mlx1MzA4Qlx1MzA4OClcbiAgICAgIC5hZGQoX3YzQS5jb3B5KGNlbnRlclNwYWNlQm9uZUF4aXMpLm11bHRpcGx5U2NhbGFyKHRoaXMuc2V0dGluZ3Muc3RpZmZuZXNzICogZGVsdGEpKSAvLyBcdTg5QUFcdTMwNkVcdTU2REVcdThFRTJcdTMwNkJcdTMwODhcdTMwOEJcdTVCNTBcdTMwRENcdTMwRkNcdTMwRjNcdTMwNkVcdTc5RkJcdTUyRDVcdTc2RUVcdTZBMTlcbiAgICAgIC5hZGQoX3YzQS5jb3B5KGNlbnRlclNwYWNlR3Jhdml0eSkubXVsdGlwbHlTY2FsYXIodGhpcy5zZXR0aW5ncy5ncmF2aXR5UG93ZXIgKiBkZWx0YSkpIC8vIFx1NTkxNlx1NTI5Qlx1MzA2Qlx1MzA4OFx1MzA4Qlx1NzlGQlx1NTJENVx1OTFDRlxuICAgICAgLmFwcGx5TWF0cml4NChtYXRyaXhDZW50ZXJUb1dvcmxkKTsgLy8gdGFpbFx1MzA5MndvcmxkIHNwYWNlXHUzMDZCXHU2MjNCXHUzMDU5XG5cbiAgICAvLyBub3JtYWxpemUgYm9uZSBsZW5ndGhcbiAgICBfbmV4dFRhaWwuc3ViKF93b3JsZFNwYWNlUG9zaXRpb24pLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKHRoaXMuX3dvcmxkU3BhY2VCb25lTGVuZ3RoKS5hZGQoX3dvcmxkU3BhY2VQb3NpdGlvbik7XG5cbiAgICAvLyBDb2xsaXNpb25cdTMwNjdcdTc5RkJcdTUyRDVcbiAgICB0aGlzLl9jb2xsaXNpb24oX25leHRUYWlsKTtcblxuICAgIC8vIHVwZGF0ZSBwcmV2VGFpbCBhbmQgY3VycmVudFRhaWxcbiAgICBtYXRyaXhXb3JsZFRvQ2VudGVyID0gdGhpcy5fZ2V0TWF0cml4V29ybGRUb0NlbnRlcihfbWF0QSk7XG5cbiAgICB0aGlzLl9wcmV2VGFpbC5jb3B5KHRoaXMuX2N1cnJlbnRUYWlsKTtcbiAgICB0aGlzLl9jdXJyZW50VGFpbC5jb3B5KF92M0EuY29weShfbmV4dFRhaWwpLmFwcGx5TWF0cml4NChtYXRyaXhXb3JsZFRvQ2VudGVyKSk7XG5cbiAgICAvLyBBcHBseSByb3RhdGlvbiwgY29udmVydCB2ZWN0b3IzIHRoaW5nIGludG8gYWN0dWFsIHF1YXRlcm5pb25cbiAgICAvLyBPcmlnaW5hbCBVbmlWUk0gaXMgZG9pbmcgY2VudGVyIHVuaXQgY2FsY3VsdXMgYXQgaGVyZSBidXQgd2UncmUgZ29ubmEgZG8gdGhpcyBvbiBsb2NhbCB1bml0XG4gICAgY29uc3Qgd29ybGRTcGFjZUluaXRpYWxNYXRyaXhJbnYgPSBtYXQ0SW52ZXJ0Q29tcGF0KFxuICAgICAgX21hdEEuY29weSh0aGlzLl9wYXJlbnRNYXRyaXhXb3JsZCkubXVsdGlwbHkodGhpcy5faW5pdGlhbExvY2FsTWF0cml4KSxcbiAgICApO1xuICAgIGNvbnN0IGFwcGx5Um90YXRpb24gPSBfcXVhdEEuc2V0RnJvbVVuaXRWZWN0b3JzKFxuICAgICAgdGhpcy5fYm9uZUF4aXMsXG4gICAgICBfdjNBLmNvcHkoX25leHRUYWlsKS5hcHBseU1hdHJpeDQod29ybGRTcGFjZUluaXRpYWxNYXRyaXhJbnYpLm5vcm1hbGl6ZSgpLFxuICAgICk7XG5cbiAgICB0aGlzLmJvbmUucXVhdGVybmlvbi5jb3B5KHRoaXMuX2luaXRpYWxMb2NhbFJvdGF0aW9uKS5tdWx0aXBseShhcHBseVJvdGF0aW9uKTtcblxuICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIGl0cyBtYXRyaXhXb3JsZCBtYW51YWxseSwgc2luY2Ugd2UgdHdlYWtlZCB0aGUgYm9uZSBieSBvdXIgaGFuZFxuICAgIHRoaXMuYm9uZS51cGRhdGVNYXRyaXgoKTtcbiAgICB0aGlzLmJvbmUubWF0cml4V29ybGQubXVsdGlwbHlNYXRyaWNlcyh0aGlzLl9wYXJlbnRNYXRyaXhXb3JsZCwgdGhpcy5ib25lLm1hdHJpeCk7XG4gIH1cblxuICAvKipcbiAgICogRG8gY29sbGlzaW9uIG1hdGggYWdhaW5zdCBldmVyeSBjb2xsaWRlcnMgYXR0YWNoZWQgdG8gdGhpcyBib25lLlxuICAgKlxuICAgKiBAcGFyYW0gdGFpbCBUaGUgdGFpbCB5b3Ugd2FudCB0byBwcm9jZXNzXG4gICAqL1xuICBwcml2YXRlIF9jb2xsaXNpb24odGFpbDogVEhSRUUuVmVjdG9yMyk6IHZvaWQge1xuICAgIHRoaXMuY29sbGlkZXJHcm91cHMuZm9yRWFjaCgoY29sbGlkZXJHcm91cCkgPT4ge1xuICAgICAgY29sbGlkZXJHcm91cC5jb2xsaWRlcnMuZm9yRWFjaCgoY29sbGlkZXIpID0+IHtcbiAgICAgICAgY29uc3QgZGlzdCA9IGNvbGxpZGVyLnNoYXBlLmNhbGN1bGF0ZUNvbGxpc2lvbihjb2xsaWRlci5tYXRyaXhXb3JsZCwgdGFpbCwgdGhpcy5zZXR0aW5ncy5oaXRSYWRpdXMsIF92M0EpO1xuXG4gICAgICAgIGlmIChkaXN0IDwgMC4wKSB7XG4gICAgICAgICAgLy8gaGl0XG4gICAgICAgICAgdGFpbC5hZGQoX3YzQS5tdWx0aXBseVNjYWxhcigtZGlzdCkpO1xuXG4gICAgICAgICAgLy8gbm9ybWFsaXplIGJvbmUgbGVuZ3RoXG4gICAgICAgICAgdGFpbC5zdWIoX3dvcmxkU3BhY2VQb3NpdGlvbikubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIodGhpcy5fd29ybGRTcGFjZUJvbmVMZW5ndGgpLmFkZChfd29ybGRTcGFjZVBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSB7QGxpbmsgX3dvcmxkU3BhY2VCb25lTGVuZ3RofS5cbiAgICogSW50ZW5kZWQgdG8gYmUgdXNlZCBpbiB7QGxpbmsgdXBkYXRlfS5cbiAgICovXG4gIHByaXZhdGUgX2NhbGNXb3JsZFNwYWNlQm9uZUxlbmd0aCgpOiB2b2lkIHtcbiAgICBfdjNBLnNldEZyb21NYXRyaXhQb3NpdGlvbih0aGlzLmJvbmUubWF0cml4V29ybGQpOyAvLyBnZXQgd29ybGQgcG9zaXRpb24gb2YgdGhpcy5ib25lXG5cbiAgICBpZiAodGhpcy5jaGlsZCkge1xuICAgICAgX3YzQi5zZXRGcm9tTWF0cml4UG9zaXRpb24odGhpcy5jaGlsZC5tYXRyaXhXb3JsZCk7IC8vIGdldCB3b3JsZCBwb3NpdGlvbiBvZiB0aGlzLmNoaWxkXG4gICAgfSBlbHNlIHtcbiAgICAgIF92M0IuY29weSh0aGlzLl9pbml0aWFsTG9jYWxDaGlsZFBvc2l0aW9uKTtcbiAgICAgIF92M0IuYXBwbHlNYXRyaXg0KHRoaXMuYm9uZS5tYXRyaXhXb3JsZCk7XG4gICAgfVxuXG4gICAgdGhpcy5fd29ybGRTcGFjZUJvbmVMZW5ndGggPSBfdjNBLnN1YihfdjNCKS5sZW5ndGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBtYXRyaXggdGhhdCBjb252ZXJ0cyBjZW50ZXIgc3BhY2UgaW50byB3b3JsZCBzcGFjZS5cbiAgICogQHBhcmFtIHRhcmdldCBUYXJnZXQgbWF0cml4XG4gICAqL1xuICBwcml2YXRlIF9nZXRNYXRyaXhDZW50ZXJUb1dvcmxkKHRhcmdldDogVEhSRUUuTWF0cml4NCk6IFRIUkVFLk1hdHJpeDQge1xuICAgIGlmICh0aGlzLl9jZW50ZXIpIHtcbiAgICAgIHRhcmdldC5jb3B5KHRoaXMuX2NlbnRlci5tYXRyaXhXb3JsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5pZGVudGl0eSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbWF0cml4IHRoYXQgY29udmVydHMgd29ybGQgc3BhY2UgaW50byBjZW50ZXIgc3BhY2UuXG4gICAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0IG1hdHJpeFxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0TWF0cml4V29ybGRUb0NlbnRlcih0YXJnZXQ6IFRIUkVFLk1hdHJpeDQpOiBUSFJFRS5NYXRyaXg0IHtcbiAgICBpZiAodGhpcy5fY2VudGVyKSB7XG4gICAgICB0YXJnZXQuY29weSgodGhpcy5fY2VudGVyLnVzZXJEYXRhLmludmVyc2VDYWNoZVByb3h5IGFzIE1hdHJpeDRJbnZlcnNlQ2FjaGUpLmludmVyc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuaWRlbnRpdHkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5jb25zdCBfbWF0QSA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cbi8qKlxuICogQSBjb21wYXQgZnVuY3Rpb24gZm9yIGBNYXRyaXg0LmludmVydCgpYCAvIGBNYXRyaXg0LmdldEludmVyc2UoKWAuXG4gKiBgTWF0cml4NC5pbnZlcnQoKWAgaXMgaW50cm9kdWNlZCBpbiByMTIzIGFuZCBgTWF0cml4NC5nZXRJbnZlcnNlKClgIGVtaXRzIGEgd2FybmluZy5cbiAqIFdlIGFyZSBnb2luZyB0byB1c2UgdGhpcyBjb21wYXQgZm9yIGEgd2hpbGUuXG4gKiBAcGFyYW0gdGFyZ2V0IEEgdGFyZ2V0IG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0NEludmVydENvbXBhdDxUIGV4dGVuZHMgVEhSRUUuTWF0cml4ND4odGFyZ2V0OiBUKTogVCB7XG4gIGlmICgodGFyZ2V0IGFzIGFueSkuaW52ZXJ0KSB7XG4gICAgdGFyZ2V0LmludmVydCgpO1xuICB9IGVsc2Uge1xuICAgICh0YXJnZXQgYXMgYW55KS5nZXRJbnZlcnNlKF9tYXRBLmNvcHkodGFyZ2V0KSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IG1hdDRJbnZlcnRDb21wYXQgfSBmcm9tICcuL21hdDRJbnZlcnRDb21wYXQnO1xuXG5leHBvcnQgY2xhc3MgTWF0cml4NEludmVyc2VDYWNoZSB7XG4gIC8qKlxuICAgKiBUaGUgdGFyZ2V0IG1hdHJpeC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBtYXRyaXg6IFRIUkVFLk1hdHJpeDQ7XG5cbiAgLyoqXG4gICAqIEEgY2FjaGUgb2YgaW52ZXJzZSBvZiBjdXJyZW50IG1hdHJpeC5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2ludmVyc2VDYWNoZSA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cbiAgLyoqXG4gICAqIEEgZmxhZyB0aGF0IG1ha2VzIGl0IHdhbnQgdG8gcmVjYWxjdWxhdGUgaXRzIHtAbGluayBfaW52ZXJzZUNhY2hlfS5cbiAgICogV2lsbCBiZSBzZXQgYHRydWVgIHdoZW4gYGVsZW1lbnRzYCBhcmUgbXV0YXRlZCBhbmQgYmUgdXNlZCBpbiBgZ2V0SW52ZXJzZWAuXG4gICAqL1xuICBwcml2YXRlIF9zaG91bGRVcGRhdGVJbnZlcnNlID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIG9yaWdpbmFsIG9mIGBtYXRyaXguZWxlbWVudHNgXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9vcmlnaW5hbEVsZW1lbnRzOiBUSFJFRS5NYXRyaXg0VHVwbGU7XG5cbiAgLyoqXG4gICAqIEludmVyc2Ugb2YgZ2l2ZW4gbWF0cml4LlxuICAgKiBOb3RlIHRoYXQgaXQgd2lsbCByZXR1cm4gaXRzIGludGVybmFsIHByaXZhdGUgaW5zdGFuY2UuXG4gICAqIE1ha2Ugc3VyZSBjb3B5aW5nIHRoaXMgYmVmb3JlIG11dGF0ZSB0aGlzLlxuICAgKi9cbiAgcHVibGljIGdldCBpbnZlcnNlKCk6IFRIUkVFLk1hdHJpeDQge1xuICAgIGlmICh0aGlzLl9zaG91bGRVcGRhdGVJbnZlcnNlKSB7XG4gICAgICBtYXQ0SW52ZXJ0Q29tcGF0KHRoaXMuX2ludmVyc2VDYWNoZS5jb3B5KHRoaXMubWF0cml4KSk7XG4gICAgICB0aGlzLl9zaG91bGRVcGRhdGVJbnZlcnNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2ludmVyc2VDYWNoZTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtYXRyaXg6IFRIUkVFLk1hdHJpeDQpIHtcbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcblxuICAgIGNvbnN0IGhhbmRsZXI6IFByb3h5SGFuZGxlcjxudW1iZXJbXT4gPSB7XG4gICAgICBzZXQ6IChvYmosIHByb3A6IGFueSwgbmV3VmFsKSA9PiB7XG4gICAgICAgIHRoaXMuX3Nob3VsZFVwZGF0ZUludmVyc2UgPSB0cnVlO1xuICAgICAgICBvYmpbcHJvcF0gPSBuZXdWYWw7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLl9vcmlnaW5hbEVsZW1lbnRzID0gbWF0cml4LmVsZW1lbnRzO1xuICAgIG1hdHJpeC5lbGVtZW50cyA9IG5ldyBQcm94eTxUSFJFRS5NYXRyaXg0VHVwbGU+KG1hdHJpeC5lbGVtZW50cywgaGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgcmV2ZXJ0KCk6IHZvaWQge1xuICAgIHRoaXMubWF0cml4LmVsZW1lbnRzID0gdGhpcy5fb3JpZ2luYWxFbGVtZW50cztcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlICogYXMgVjBWUk0gZnJvbSAnQHBpeGl2L3R5cGVzLXZybS0wLjAnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMVNwcmluZ0JvbmVTY2hlbWEgZnJvbSAnQHBpeGl2L3R5cGVzLXZybWMtc3ByaW5nYm9uZS0xLjAnO1xuaW1wb3J0IHR5cGUgKiBhcyBTcHJpbmdCb25lRXh0ZW5kZWRDb2xsaWRlclNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy1zcHJpbmdib25lLWV4dGVuZGVkLWNvbGxpZGVyLTEuMCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IEdMVEYsIEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IFZSTVNwcmluZ0JvbmVDb2xsaWRlckhlbHBlciwgVlJNU3ByaW5nQm9uZUpvaW50SGVscGVyIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IFZSTVNwcmluZ0JvbmVDb2xsaWRlciB9IGZyb20gJy4vVlJNU3ByaW5nQm9uZUNvbGxpZGVyJztcbmltcG9ydCB0eXBlIHsgVlJNU3ByaW5nQm9uZUNvbGxpZGVyR3JvdXAgfSBmcm9tICcuL1ZSTVNwcmluZ0JvbmVDb2xsaWRlckdyb3VwJztcbmltcG9ydCB7IFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlQ2Fwc3VsZSB9IGZyb20gJy4vVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVDYXBzdWxlJztcbmltcG9ydCB7IFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlU3BoZXJlIH0gZnJvbSAnLi9WUk1TcHJpbmdCb25lQ29sbGlkZXJTaGFwZVNwaGVyZSc7XG5pbXBvcnQgeyBWUk1TcHJpbmdCb25lSm9pbnQgfSBmcm9tICcuL1ZSTVNwcmluZ0JvbmVKb2ludCc7XG5pbXBvcnQgdHlwZSB7IFZSTVNwcmluZ0JvbmVMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9WUk1TcHJpbmdCb25lTG9hZGVyUGx1Z2luT3B0aW9ucyc7XG5pbXBvcnQgeyBWUk1TcHJpbmdCb25lTWFuYWdlciB9IGZyb20gJy4vVlJNU3ByaW5nQm9uZU1hbmFnZXInO1xuaW1wb3J0IHR5cGUgeyBWUk1TcHJpbmdCb25lSm9pbnRTZXR0aW5ncyB9IGZyb20gJy4vVlJNU3ByaW5nQm9uZUpvaW50U2V0dGluZ3MnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuaW1wb3J0IHsgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVQbGFuZSB9IGZyb20gJy4vVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVQbGFuZSc7XG5cbmNvbnN0IEVYVEVOU0lPTl9OQU1FX0VYVEVOREVEX0NPTExJREVSID0gJ1ZSTUNfc3ByaW5nQm9uZV9leHRlbmRlZF9jb2xsaWRlcic7XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TID0gbmV3IFNldChbJzEuMCcsICcxLjAtYmV0YSddKTtcblxuLyoqXG4gKiBQb3NzaWJsZSBzcGVjIHZlcnNpb25zIG9mIGBWUk1DX3NwcmluZ0JvbmVfZXh0ZW5kZWRfY29sbGlkZXJgIGl0IHJlY29nbml6ZXMuXG4gKi9cbmNvbnN0IFBPU1NJQkxFX1NQRUNfVkVSU0lPTlNfRVhURU5ERURfQ09MTElERVJTID0gbmV3IFNldChbJzEuMCddKTtcblxuZXhwb3J0IGNsYXNzIFZSTVNwcmluZ0JvbmVMb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBFWFRFTlNJT05fTkFNRSA9ICdWUk1DX3NwcmluZ0JvbmUnO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGFuIE9iamVjdDNEIHRvIGFkZCB7QGxpbmsgVlJNU3ByaW5nQm9uZUpvaW50SGVscGVyfSBzLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCBoZWxwZXIgd2lsbCBub3QgYmUgY3JlYXRlZC5cbiAgICogSWYgYHJlbmRlck9yZGVyYCBpcyBzZXQgdG8gdGhlIHJvb3QsIGhlbHBlcnMgd2lsbCBjb3B5IHRoZSBzYW1lIGByZW5kZXJPcmRlcmAgLlxuICAgKi9cbiAgcHVibGljIGpvaW50SGVscGVyUm9vdD86IFRIUkVFLk9iamVjdDNEO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGFuIE9iamVjdDNEIHRvIGFkZCB7QGxpbmsgVlJNU3ByaW5nQm9uZUpvaW50SGVscGVyfSBzLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCBoZWxwZXIgd2lsbCBub3QgYmUgY3JlYXRlZC5cbiAgICogSWYgYHJlbmRlck9yZGVyYCBpcyBzZXQgdG8gdGhlIHJvb3QsIGhlbHBlcnMgd2lsbCBjb3B5IHRoZSBzYW1lIGByZW5kZXJPcmRlcmAgLlxuICAgKi9cbiAgcHVibGljIGNvbGxpZGVySGVscGVyUm9vdD86IFRIUkVFLk9iamVjdDNEO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBsb2FkIGNvbGxpZGVycyBkZWZpbmVkIGluIGBWUk1DX3NwcmluZ0JvbmVfZXh0ZW5kZWRfY29sbGlkZXJgLlxuICAgKiBTZXQgdG8gYGZhbHNlYCB0byBkaXNhYmxlIGxvYWRpbmcgZXh0ZW5kZWQgY29sbGlkZXJzIGFuZCB1c2UgdGhlIGZhbGxiYWNrIGJlaGF2aW9yLlxuICAgKiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICovXG4gIHB1YmxpYyB1c2VFeHRlbmRlZENvbGxpZGVyczogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWUk1TcHJpbmdCb25lTG9hZGVyUGx1Z2luLkVYVEVOU0lPTl9OQU1FO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlciwgb3B0aW9ucz86IFZSTVNwcmluZ0JvbmVMb2FkZXJQbHVnaW5PcHRpb25zKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cbiAgICB0aGlzLmpvaW50SGVscGVyUm9vdCA9IG9wdGlvbnM/LmpvaW50SGVscGVyUm9vdDtcbiAgICB0aGlzLmNvbGxpZGVySGVscGVyUm9vdCA9IG9wdGlvbnM/LmNvbGxpZGVySGVscGVyUm9vdDtcbiAgICB0aGlzLnVzZUV4dGVuZGVkQ29sbGlkZXJzID0gb3B0aW9ucz8udXNlRXh0ZW5kZWRDb2xsaWRlcnMgPz8gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlclJvb3QoZ2x0ZjogR0xURik6IFByb21pc2U8dm9pZD4ge1xuICAgIGdsdGYudXNlckRhdGEudnJtU3ByaW5nQm9uZU1hbmFnZXIgPSBhd2FpdCB0aGlzLl9pbXBvcnQoZ2x0Zik7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IHNwcmluZyBib25lcyBmcm9tIGEgR0xURiBhbmQgcmV0dXJuIGEge0BsaW5rIFZSTVNwcmluZ0JvbmVNYW5hZ2VyfS5cbiAgICogSXQgbWlnaHQgcmV0dXJuIGBudWxsYCBpbnN0ZWFkIHdoZW4gaXQgZG9lcyBub3QgbmVlZCB0byBiZSBjcmVhdGVkIG9yIHNvbWV0aGluZyBnbyB3cm9uZy5cbiAgICpcbiAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9pbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNU3ByaW5nQm9uZU1hbmFnZXIgfCBudWxsPiB7XG4gICAgY29uc3QgdjFSZXN1bHQgPSBhd2FpdCB0aGlzLl92MUltcG9ydChnbHRmKTtcbiAgICBpZiAodjFSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHYxUmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHYwUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjBJbXBvcnQoZ2x0Zik7XG4gICAgaWYgKHYwUmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB2MFJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YxSW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTVNwcmluZ0JvbmVNYW5hZ2VyIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSBnbHRmLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSBzcHJpbmcgYm9uZXNcbiAgICBjb25zdCBpc1NwcmluZ0JvbmVVc2VkID0ganNvbi5leHRlbnNpb25zVXNlZD8uaW5kZXhPZihWUk1TcHJpbmdCb25lTG9hZGVyUGx1Z2luLkVYVEVOU0lPTl9OQU1FKSAhPT0gLTE7XG4gICAgaWYgKCFpc1NwcmluZ0JvbmVVc2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtYW5hZ2VyID0gbmV3IFZSTVNwcmluZ0JvbmVNYW5hZ2VyKCk7XG5cbiAgICBjb25zdCB0aHJlZU5vZGVzOiBUSFJFRS5PYmplY3QzRFtdID0gYXdhaXQgZ2x0Zi5wYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCdub2RlJyk7XG5cbiAgICBjb25zdCBleHRlbnNpb24gPSBqc29uLmV4dGVuc2lvbnM/LltWUk1TcHJpbmdCb25lTG9hZGVyUGx1Z2luLkVYVEVOU0lPTl9OQU1FXSBhc1xuICAgICAgfCBWMVNwcmluZ0JvbmVTY2hlbWEuVlJNQ1NwcmluZ0JvbmVcbiAgICAgIHwgdW5kZWZpbmVkO1xuICAgIGlmICghZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVjVmVyc2lvbiA9IGV4dGVuc2lvbi5zcGVjVmVyc2lvbjtcbiAgICBpZiAoIVBPU1NJQkxFX1NQRUNfVkVSU0lPTlMuaGFzKHNwZWNWZXJzaW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVlJNU3ByaW5nQm9uZUxvYWRlclBsdWdpbjogVW5rbm93biAke1ZSTVNwcmluZ0JvbmVMb2FkZXJQbHVnaW4uRVhURU5TSU9OX05BTUV9IHNwZWNWZXJzaW9uIFwiJHtzcGVjVmVyc2lvbn1cImAsXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29sbGlkZXJzID0gZXh0ZW5zaW9uLmNvbGxpZGVycz8ubWFwKChzY2hlbWFDb2xsaWRlciwgaUNvbGxpZGVyKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gdGhyZWVOb2Rlc1tzY2hlbWFDb2xsaWRlci5ub2RlIV07XG4gICAgICBjb25zdCBzY2hlbWFTaGFwZSA9IHNjaGVtYUNvbGxpZGVyLnNoYXBlITtcblxuICAgICAgLy8gVE9ETzogc2VwYXJhdGUgaW50byBzZXZlcmFsIGZ1bmN0aW9uc1xuXG4gICAgICBjb25zdCBzY2hlbWFFeENvbGxpZGVyOiBTcHJpbmdCb25lRXh0ZW5kZWRDb2xsaWRlclNjaGVtYS5WUk1DU3ByaW5nQm9uZUV4dGVuZGVkQ29sbGlkZXIgfCB1bmRlZmluZWQgPVxuICAgICAgICBzY2hlbWFDb2xsaWRlci5leHRlbnNpb25zPy5bRVhURU5TSU9OX05BTUVfRVhURU5ERURfQ09MTElERVJdO1xuXG4gICAgICBpZiAodGhpcy51c2VFeHRlbmRlZENvbGxpZGVycyAmJiBzY2hlbWFFeENvbGxpZGVyICE9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3BlY1ZlcnNpb25FeENvbGxpZGVyID0gc2NoZW1hRXhDb2xsaWRlci5zcGVjVmVyc2lvbjtcbiAgICAgICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TX0VYVEVOREVEX0NPTExJREVSUy5oYXMoc3BlY1ZlcnNpb25FeENvbGxpZGVyKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBWUk1TcHJpbmdCb25lTG9hZGVyUGx1Z2luOiBVbmtub3duICR7RVhURU5TSU9OX05BTUVfRVhURU5ERURfQ09MTElERVJ9IHNwZWNWZXJzaW9uIFwiJHtzcGVjVmVyc2lvbkV4Q29sbGlkZXJ9XCIuIEZhbGxiYWNraW5nIHRvIHRoZSAke1ZSTVNwcmluZ0JvbmVMb2FkZXJQbHVnaW4uRVhURU5TSU9OX05BTUV9IGRlZmluaXRpb25gLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hRXhTaGFwZSA9IHNjaGVtYUV4Q29sbGlkZXIuc2hhcGUhO1xuICAgICAgICAgIGlmIChzY2hlbWFFeFNoYXBlLnNwaGVyZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ltcG9ydFNwaGVyZUNvbGxpZGVyKG5vZGUsIHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBuZXcgVEhSRUUuVmVjdG9yMygpLmZyb21BcnJheShzY2hlbWFFeFNoYXBlLnNwaGVyZS5vZmZzZXQgPz8gWzAuMCwgMC4wLCAwLjBdKSxcbiAgICAgICAgICAgICAgcmFkaXVzOiBzY2hlbWFFeFNoYXBlLnNwaGVyZS5yYWRpdXMgPz8gMC4wLFxuICAgICAgICAgICAgICBpbnNpZGU6IHNjaGVtYUV4U2hhcGUuc3BoZXJlLmluc2lkZSA/PyBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2NoZW1hRXhTaGFwZS5jYXBzdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW1wb3J0Q2Fwc3VsZUNvbGxpZGVyKG5vZGUsIHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBuZXcgVEhSRUUuVmVjdG9yMygpLmZyb21BcnJheShzY2hlbWFFeFNoYXBlLmNhcHN1bGUub2Zmc2V0ID8/IFswLjAsIDAuMCwgMC4wXSksXG4gICAgICAgICAgICAgIHJhZGl1czogc2NoZW1hRXhTaGFwZS5jYXBzdWxlLnJhZGl1cyA/PyAwLjAsXG4gICAgICAgICAgICAgIHRhaWw6IG5ldyBUSFJFRS5WZWN0b3IzKCkuZnJvbUFycmF5KHNjaGVtYUV4U2hhcGUuY2Fwc3VsZS50YWlsID8/IFswLjAsIDAuMCwgMC4wXSksXG4gICAgICAgICAgICAgIGluc2lkZTogc2NoZW1hRXhTaGFwZS5jYXBzdWxlLmluc2lkZSA/PyBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2NoZW1hRXhTaGFwZS5wbGFuZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ltcG9ydFBsYW5lQ29sbGlkZXIobm9kZSwge1xuICAgICAgICAgICAgICBvZmZzZXQ6IG5ldyBUSFJFRS5WZWN0b3IzKCkuZnJvbUFycmF5KHNjaGVtYUV4U2hhcGUucGxhbmUub2Zmc2V0ID8/IFswLjAsIDAuMCwgMC4wXSksXG4gICAgICAgICAgICAgIG5vcm1hbDogbmV3IFRIUkVFLlZlY3RvcjMoKS5mcm9tQXJyYXkoc2NoZW1hRXhTaGFwZS5wbGFuZS5ub3JtYWwgPz8gWzAuMCwgMC4wLCAxLjBdKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2NoZW1hU2hhcGUuc3BoZXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbXBvcnRTcGhlcmVDb2xsaWRlcihub2RlLCB7XG4gICAgICAgICAgb2Zmc2V0OiBuZXcgVEhSRUUuVmVjdG9yMygpLmZyb21BcnJheShzY2hlbWFTaGFwZS5zcGhlcmUub2Zmc2V0ID8/IFswLjAsIDAuMCwgMC4wXSksXG4gICAgICAgICAgcmFkaXVzOiBzY2hlbWFTaGFwZS5zcGhlcmUucmFkaXVzID8/IDAuMCxcbiAgICAgICAgICBpbnNpZGU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc2NoZW1hU2hhcGUuY2Fwc3VsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW1wb3J0Q2Fwc3VsZUNvbGxpZGVyKG5vZGUsIHtcbiAgICAgICAgICBvZmZzZXQ6IG5ldyBUSFJFRS5WZWN0b3IzKCkuZnJvbUFycmF5KHNjaGVtYVNoYXBlLmNhcHN1bGUub2Zmc2V0ID8/IFswLjAsIDAuMCwgMC4wXSksXG4gICAgICAgICAgcmFkaXVzOiBzY2hlbWFTaGFwZS5jYXBzdWxlLnJhZGl1cyA/PyAwLjAsXG4gICAgICAgICAgdGFpbDogbmV3IFRIUkVFLlZlY3RvcjMoKS5mcm9tQXJyYXkoc2NoZW1hU2hhcGUuY2Fwc3VsZS50YWlsID8/IFswLjAsIDAuMCwgMC4wXSksXG4gICAgICAgICAgaW5zaWRlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVlJNU3ByaW5nQm9uZUxvYWRlclBsdWdpbjogVGhlIGNvbGxpZGVyICMke2lDb2xsaWRlcn0gaGFzIG5vIHZhbGlkIHNoYXBlYCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb2xsaWRlckdyb3VwcyA9IGV4dGVuc2lvbi5jb2xsaWRlckdyb3Vwcz8ubWFwKFxuICAgICAgKHNjaGVtYUNvbGxpZGVyR3JvdXAsIGlDb2xsaWRlckdyb3VwKTogVlJNU3ByaW5nQm9uZUNvbGxpZGVyR3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBjb2xzID0gKHNjaGVtYUNvbGxpZGVyR3JvdXAuY29sbGlkZXJzID8/IFtdKS5tYXAoKGlDb2xsaWRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbCA9IGNvbGxpZGVycz8uW2lDb2xsaWRlcl07XG5cbiAgICAgICAgICBpZiAoY29sID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFZSTVNwcmluZ0JvbmVMb2FkZXJQbHVnaW46IFRoZSBjb2xsaWRlckdyb3VwICMke2lDb2xsaWRlckdyb3VwfSBhdHRlbXB0ZWQgdG8gdXNlIGEgY29sbGlkZXIgIyR7aUNvbGxpZGVyfSBidXQgbm90IGZvdW5kYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2xsaWRlcnM6IGNvbHMsXG4gICAgICAgICAgbmFtZTogc2NoZW1hQ29sbGlkZXJHcm91cC5uYW1lLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgZXh0ZW5zaW9uLnNwcmluZ3M/LmZvckVhY2goKHNjaGVtYVNwcmluZywgaVNwcmluZykgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1hSm9pbnRzID0gc2NoZW1hU3ByaW5nLmpvaW50cztcblxuICAgICAgLy8gcHJlcGFyZSBjb2xsaWRlcnNcbiAgICAgIGNvbnN0IGNvbGxpZGVyR3JvdXBzRm9yU3ByaW5nID0gc2NoZW1hU3ByaW5nLmNvbGxpZGVyR3JvdXBzPy5tYXAoKGlDb2xsaWRlckdyb3VwKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gY29sbGlkZXJHcm91cHM/LltpQ29sbGlkZXJHcm91cF07XG5cbiAgICAgICAgaWYgKGdyb3VwID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVlJNU3ByaW5nQm9uZUxvYWRlclBsdWdpbjogVGhlIHNwcmluZyAjJHtpU3ByaW5nfSBhdHRlbXB0ZWQgdG8gdXNlIGEgY29sbGlkZXJHcm91cCAke2lDb2xsaWRlckdyb3VwfSBidXQgbm90IGZvdW5kYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNlbnRlciA9IHNjaGVtYVNwcmluZy5jZW50ZXIgIT0gbnVsbCA/IHRocmVlTm9kZXNbc2NoZW1hU3ByaW5nLmNlbnRlcl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIGxldCBwcmV2U2NoZW1hSm9pbnQ6IFYxU3ByaW5nQm9uZVNjaGVtYS5TcHJpbmdCb25lSm9pbnQgfCB1bmRlZmluZWQ7XG4gICAgICBzY2hlbWFKb2ludHMuZm9yRWFjaCgoc2NoZW1hSm9pbnQpID0+IHtcbiAgICAgICAgaWYgKHByZXZTY2hlbWFKb2ludCkge1xuICAgICAgICAgIC8vIHByZXBhcmUgbm9kZVxuICAgICAgICAgIGNvbnN0IG5vZGVJbmRleCA9IHByZXZTY2hlbWFKb2ludC5ub2RlO1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aHJlZU5vZGVzW25vZGVJbmRleF07XG4gICAgICAgICAgY29uc3QgY2hpbGRJbmRleCA9IHNjaGVtYUpvaW50Lm5vZGU7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSB0aHJlZU5vZGVzW2NoaWxkSW5kZXhdO1xuXG4gICAgICAgICAgLy8gcHJlcGFyZSBzZXR0aW5nXG4gICAgICAgICAgY29uc3Qgc2V0dGluZzogUGFydGlhbDxWUk1TcHJpbmdCb25lSm9pbnRTZXR0aW5ncz4gPSB7XG4gICAgICAgICAgICBoaXRSYWRpdXM6IHByZXZTY2hlbWFKb2ludC5oaXRSYWRpdXMsXG4gICAgICAgICAgICBkcmFnRm9yY2U6IHByZXZTY2hlbWFKb2ludC5kcmFnRm9yY2UsXG4gICAgICAgICAgICBncmF2aXR5UG93ZXI6IHByZXZTY2hlbWFKb2ludC5ncmF2aXR5UG93ZXIsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IHByZXZTY2hlbWFKb2ludC5zdGlmZm5lc3MsXG4gICAgICAgICAgICBncmF2aXR5RGlyOlxuICAgICAgICAgICAgICBwcmV2U2NoZW1hSm9pbnQuZ3Jhdml0eURpciAhPSBudWxsXG4gICAgICAgICAgICAgICAgPyBuZXcgVEhSRUUuVmVjdG9yMygpLmZyb21BcnJheShwcmV2U2NoZW1hSm9pbnQuZ3Jhdml0eURpcilcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gY3JlYXRlIHNwcmluZyBib25lc1xuICAgICAgICAgIGNvbnN0IGpvaW50ID0gdGhpcy5faW1wb3J0Sm9pbnQobm9kZSwgY2hpbGQsIHNldHRpbmcsIGNvbGxpZGVyR3JvdXBzRm9yU3ByaW5nKTtcbiAgICAgICAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgICAgICBqb2ludC5jZW50ZXIgPSBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWFuYWdlci5hZGRKb2ludChqb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2U2NoZW1hSm9pbnQgPSBzY2hlbWFKb2ludDtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gaW5pdCBzcHJpbmcgYm9uZXNcbiAgICBtYW5hZ2VyLnNldEluaXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MEltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1TcHJpbmdCb25lTWFuYWdlciB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gZ2x0Zi5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgaXNWUk1Vc2VkID0ganNvbi5leHRlbnNpb25zVXNlZD8uaW5kZXhPZignVlJNJykgIT09IC0xO1xuICAgIGlmICghaXNWUk1Vc2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IGhhdmUgYm9uZSBncm91cHNcbiAgICBjb25zdCBleHRlbnNpb24gPSBqc29uLmV4dGVuc2lvbnM/LlsnVlJNJ10gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IHNjaGVtYVNlY29uZGFyeUFuaW1hdGlvbiA9IGV4dGVuc2lvbj8uc2Vjb25kYXJ5QW5pbWF0aW9uO1xuICAgIGlmICghc2NoZW1hU2Vjb25kYXJ5QW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFCb25lR3JvdXBzID0gc2NoZW1hU2Vjb25kYXJ5QW5pbWF0aW9uPy5ib25lR3JvdXBzO1xuICAgIGlmICghc2NoZW1hQm9uZUdyb3Vwcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbWFuYWdlciA9IG5ldyBWUk1TcHJpbmdCb25lTWFuYWdlcigpO1xuXG4gICAgY29uc3QgdGhyZWVOb2RlczogVEhSRUUuT2JqZWN0M0RbXSA9IGF3YWl0IGdsdGYucGFyc2VyLmdldERlcGVuZGVuY2llcygnbm9kZScpO1xuXG4gICAgY29uc3QgY29sbGlkZXJHcm91cHMgPSBzY2hlbWFTZWNvbmRhcnlBbmltYXRpb24uY29sbGlkZXJHcm91cHM/Lm1hcChcbiAgICAgIChzY2hlbWFDb2xsaWRlckdyb3VwKTogVlJNU3ByaW5nQm9uZUNvbGxpZGVyR3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gdGhyZWVOb2Rlc1tzY2hlbWFDb2xsaWRlckdyb3VwLm5vZGUhXTtcbiAgICAgICAgY29uc3QgY29sbGlkZXJzID0gKHNjaGVtYUNvbGxpZGVyR3JvdXAuY29sbGlkZXJzID8/IFtdKS5tYXAoKHNjaGVtYUNvbGxpZGVyLCBpQ29sbGlkZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygwLjAsIDAuMCwgMC4wKTtcbiAgICAgICAgICBpZiAoc2NoZW1hQ29sbGlkZXIub2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQuc2V0KFxuICAgICAgICAgICAgICBzY2hlbWFDb2xsaWRlci5vZmZzZXQueCA/PyAwLjAsXG4gICAgICAgICAgICAgIHNjaGVtYUNvbGxpZGVyLm9mZnNldC55ID8/IDAuMCxcbiAgICAgICAgICAgICAgc2NoZW1hQ29sbGlkZXIub2Zmc2V0LnogPyAtc2NoZW1hQ29sbGlkZXIub2Zmc2V0LnogOiAwLjAsIC8vIHogaXMgb3Bwb3NpdGUgaW4gVlJNMC4wXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzLl9pbXBvcnRTcGhlcmVDb2xsaWRlcihub2RlLCB7XG4gICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICByYWRpdXM6IHNjaGVtYUNvbGxpZGVyLnJhZGl1cyA/PyAwLjAsXG4gICAgICAgICAgICBpbnNpZGU6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4geyBjb2xsaWRlcnMgfTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIC8vIGltcG9ydCBzcHJpbmcgYm9uZXMgZm9yIGVhY2ggc3ByaW5nIGJvbmUgZ3JvdXBzXG4gICAgc2NoZW1hQm9uZUdyb3Vwcz8uZm9yRWFjaCgoc2NoZW1hQm9uZUdyb3VwLCBpQm9uZUdyb3VwKSA9PiB7XG4gICAgICBjb25zdCByb290SW5kaWNlcyA9IHNjaGVtYUJvbmVHcm91cC5ib25lcztcbiAgICAgIGlmICghcm9vdEluZGljZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByb290SW5kaWNlcy5mb3JFYWNoKChyb290SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRocmVlTm9kZXNbcm9vdEluZGV4XTtcblxuICAgICAgICAvLyBwcmVwYXJlIHNldHRpbmdcbiAgICAgICAgY29uc3QgZ3Jhdml0eURpciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIGlmIChzY2hlbWFCb25lR3JvdXAuZ3Jhdml0eURpcikge1xuICAgICAgICAgIGdyYXZpdHlEaXIuc2V0KFxuICAgICAgICAgICAgc2NoZW1hQm9uZUdyb3VwLmdyYXZpdHlEaXIueCA/PyAwLjAsXG4gICAgICAgICAgICBzY2hlbWFCb25lR3JvdXAuZ3Jhdml0eURpci55ID8/IDAuMCxcbiAgICAgICAgICAgIHNjaGVtYUJvbmVHcm91cC5ncmF2aXR5RGlyLnogPz8gMC4wLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ3Jhdml0eURpci5zZXQoMC4wLCAtMS4wLCAwLjApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VudGVyID0gc2NoZW1hQm9uZUdyb3VwLmNlbnRlciAhPSBudWxsID8gdGhyZWVOb2Rlc1tzY2hlbWFCb25lR3JvdXAuY2VudGVyXSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zdCBzZXR0aW5nOiBQYXJ0aWFsPFZSTVNwcmluZ0JvbmVKb2ludFNldHRpbmdzPiA9IHtcbiAgICAgICAgICBoaXRSYWRpdXM6IHNjaGVtYUJvbmVHcm91cC5oaXRSYWRpdXMsXG4gICAgICAgICAgZHJhZ0ZvcmNlOiBzY2hlbWFCb25lR3JvdXAuZHJhZ0ZvcmNlLFxuICAgICAgICAgIGdyYXZpdHlQb3dlcjogc2NoZW1hQm9uZUdyb3VwLmdyYXZpdHlQb3dlcixcbiAgICAgICAgICBzdGlmZm5lc3M6IHNjaGVtYUJvbmVHcm91cC5zdGlmZmluZXNzLFxuICAgICAgICAgIGdyYXZpdHlEaXIsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcHJlcGFyZSBjb2xsaWRlcnNcbiAgICAgICAgY29uc3QgY29sbGlkZXJHcm91cHNGb3JTcHJpbmcgPSBzY2hlbWFCb25lR3JvdXAuY29sbGlkZXJHcm91cHM/Lm1hcCgoaUNvbGxpZGVyR3JvdXApID0+IHtcbiAgICAgICAgICBjb25zdCBncm91cCA9IGNvbGxpZGVyR3JvdXBzPy5baUNvbGxpZGVyR3JvdXBdO1xuXG4gICAgICAgICAgaWYgKGdyb3VwID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFZSTVNwcmluZ0JvbmVMb2FkZXJQbHVnaW46IFRoZSBzcHJpbmcgIyR7aUJvbmVHcm91cH0gYXR0ZW1wdGVkIHRvIHVzZSBhIGNvbGxpZGVyR3JvdXAgJHtpQ29sbGlkZXJHcm91cH0gYnV0IG5vdCBmb3VuZGAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBncm91cDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHNwcmluZyBib25lc1xuICAgICAgICByb290LnRyYXZlcnNlKChub2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGQ6IFRIUkVFLk9iamVjdDNEIHwgbnVsbCA9IG5vZGUuY2hpbGRyZW5bMF0gPz8gbnVsbDtcblxuICAgICAgICAgIGNvbnN0IGpvaW50ID0gdGhpcy5faW1wb3J0Sm9pbnQobm9kZSwgY2hpbGQsIHNldHRpbmcsIGNvbGxpZGVyR3JvdXBzRm9yU3ByaW5nKTtcbiAgICAgICAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgICAgICBqb2ludC5jZW50ZXIgPSBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWFuYWdlci5hZGRKb2ludChqb2ludCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBpbml0IHNwcmluZyBib25lc1xuICAgIGdsdGYuc2NlbmUudXBkYXRlTWF0cml4V29ybGQoKTtcbiAgICBtYW5hZ2VyLnNldEluaXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG4gIH1cblxuICBwcml2YXRlIF9pbXBvcnRKb2ludChcbiAgICBub2RlOiBUSFJFRS5PYmplY3QzRCxcbiAgICBjaGlsZDogVEhSRUUuT2JqZWN0M0QsXG4gICAgc2V0dGluZz86IFBhcnRpYWw8VlJNU3ByaW5nQm9uZUpvaW50U2V0dGluZ3M+LFxuICAgIGNvbGxpZGVyR3JvdXBzRm9yU3ByaW5nPzogVlJNU3ByaW5nQm9uZUNvbGxpZGVyR3JvdXBbXSxcbiAgKTogVlJNU3ByaW5nQm9uZUpvaW50IHtcbiAgICBjb25zdCBzcHJpbmdCb25lID0gbmV3IFZSTVNwcmluZ0JvbmVKb2ludChub2RlLCBjaGlsZCwgc2V0dGluZywgY29sbGlkZXJHcm91cHNGb3JTcHJpbmcpO1xuXG4gICAgaWYgKHRoaXMuam9pbnRIZWxwZXJSb290KSB7XG4gICAgICBjb25zdCBoZWxwZXIgPSBuZXcgVlJNU3ByaW5nQm9uZUpvaW50SGVscGVyKHNwcmluZ0JvbmUpO1xuICAgICAgdGhpcy5qb2ludEhlbHBlclJvb3QuYWRkKGhlbHBlcik7XG4gICAgICBoZWxwZXIucmVuZGVyT3JkZXIgPSB0aGlzLmpvaW50SGVscGVyUm9vdC5yZW5kZXJPcmRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ByaW5nQm9uZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ltcG9ydFNwaGVyZUNvbGxpZGVyKFxuICAgIGRlc3RpbmF0aW9uOiBUSFJFRS5PYmplY3QzRCxcbiAgICBwYXJhbXM6IHtcbiAgICAgIG9mZnNldDogVEhSRUUuVmVjdG9yMztcbiAgICAgIHJhZGl1czogbnVtYmVyO1xuICAgICAgaW5zaWRlOiBib29sZWFuO1xuICAgIH0sXG4gICk6IFZSTVNwcmluZ0JvbmVDb2xsaWRlciB7XG4gICAgY29uc3Qgc2hhcGUgPSBuZXcgVlJNU3ByaW5nQm9uZUNvbGxpZGVyU2hhcGVTcGhlcmUocGFyYW1zKTtcblxuICAgIGNvbnN0IGNvbGxpZGVyID0gbmV3IFZSTVNwcmluZ0JvbmVDb2xsaWRlcihzaGFwZSk7XG5cbiAgICBkZXN0aW5hdGlvbi5hZGQoY29sbGlkZXIpO1xuXG4gICAgaWYgKHRoaXMuY29sbGlkZXJIZWxwZXJSb290KSB7XG4gICAgICBjb25zdCBoZWxwZXIgPSBuZXcgVlJNU3ByaW5nQm9uZUNvbGxpZGVySGVscGVyKGNvbGxpZGVyKTtcbiAgICAgIHRoaXMuY29sbGlkZXJIZWxwZXJSb290LmFkZChoZWxwZXIpO1xuICAgICAgaGVscGVyLnJlbmRlck9yZGVyID0gdGhpcy5jb2xsaWRlckhlbHBlclJvb3QucmVuZGVyT3JkZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxpZGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW1wb3J0Q2Fwc3VsZUNvbGxpZGVyKFxuICAgIGRlc3RpbmF0aW9uOiBUSFJFRS5PYmplY3QzRCxcbiAgICBwYXJhbXM6IHtcbiAgICAgIG9mZnNldDogVEhSRUUuVmVjdG9yMztcbiAgICAgIHJhZGl1czogbnVtYmVyO1xuICAgICAgdGFpbDogVEhSRUUuVmVjdG9yMztcbiAgICAgIGluc2lkZTogYm9vbGVhbjtcbiAgICB9LFxuICApOiBWUk1TcHJpbmdCb25lQ29sbGlkZXIge1xuICAgIGNvbnN0IHNoYXBlID0gbmV3IFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlQ2Fwc3VsZShwYXJhbXMpO1xuXG4gICAgY29uc3QgY29sbGlkZXIgPSBuZXcgVlJNU3ByaW5nQm9uZUNvbGxpZGVyKHNoYXBlKTtcblxuICAgIGRlc3RpbmF0aW9uLmFkZChjb2xsaWRlcik7XG5cbiAgICBpZiAodGhpcy5jb2xsaWRlckhlbHBlclJvb3QpIHtcbiAgICAgIGNvbnN0IGhlbHBlciA9IG5ldyBWUk1TcHJpbmdCb25lQ29sbGlkZXJIZWxwZXIoY29sbGlkZXIpO1xuICAgICAgdGhpcy5jb2xsaWRlckhlbHBlclJvb3QuYWRkKGhlbHBlcik7XG4gICAgICBoZWxwZXIucmVuZGVyT3JkZXIgPSB0aGlzLmNvbGxpZGVySGVscGVyUm9vdC5yZW5kZXJPcmRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGlkZXI7XG4gIH1cblxuICBwcml2YXRlIF9pbXBvcnRQbGFuZUNvbGxpZGVyKFxuICAgIGRlc3RpbmF0aW9uOiBUSFJFRS5PYmplY3QzRCxcbiAgICBwYXJhbXM6IHtcbiAgICAgIG9mZnNldDogVEhSRUUuVmVjdG9yMztcbiAgICAgIG5vcm1hbDogVEhSRUUuVmVjdG9yMztcbiAgICB9LFxuICApOiBWUk1TcHJpbmdCb25lQ29sbGlkZXIge1xuICAgIGNvbnN0IHNoYXBlID0gbmV3IFZSTVNwcmluZ0JvbmVDb2xsaWRlclNoYXBlUGxhbmUocGFyYW1zKTtcblxuICAgIGNvbnN0IGNvbGxpZGVyID0gbmV3IFZSTVNwcmluZ0JvbmVDb2xsaWRlcihzaGFwZSk7XG5cbiAgICBkZXN0aW5hdGlvbi5hZGQoY29sbGlkZXIpO1xuXG4gICAgaWYgKHRoaXMuY29sbGlkZXJIZWxwZXJSb290KSB7XG4gICAgICBjb25zdCBoZWxwZXIgPSBuZXcgVlJNU3ByaW5nQm9uZUNvbGxpZGVySGVscGVyKGNvbGxpZGVyKTtcbiAgICAgIHRoaXMuY29sbGlkZXJIZWxwZXJSb290LmFkZChoZWxwZXIpO1xuICAgICAgaGVscGVyLnJlbmRlck9yZGVyID0gdGhpcy5jb2xsaWRlckhlbHBlclJvb3QucmVuZGVyT3JkZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxpZGVyO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZUFuY2VzdG9yc0Zyb21Sb290KG9iamVjdDogVEhSRUUuT2JqZWN0M0QsIGNhbGxiYWNrOiAob2JqZWN0OiBUSFJFRS5PYmplY3QzRCkgPT4gdm9pZCk6IHZvaWQge1xuICBjb25zdCBhbmNlc3RvcnM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcblxuICBsZXQgaGVhZDogVEhSRUUuT2JqZWN0M0QgfCBudWxsID0gb2JqZWN0O1xuICB3aGlsZSAoaGVhZCAhPT0gbnVsbCkge1xuICAgIGFuY2VzdG9ycy51bnNoaWZ0KGhlYWQpO1xuICAgIGhlYWQgPSBoZWFkLnBhcmVudDtcbiAgfVxuXG4gIGFuY2VzdG9ycy5mb3JFYWNoKChhbmNlc3RvcikgPT4ge1xuICAgIGNhbGxiYWNrKGFuY2VzdG9yKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVHJhdmVyc2UgY2hpbGRyZW4gb2YgZ2l2ZW4gb2JqZWN0IGFuZCBleGVjdXRlIGdpdmVuIGNhbGxiYWNrLlxuICogVGhlIGdpdmVuIG9iamVjdCBpdHNlbGYgd29udCBiZSBnaXZlbiB0byB0aGUgY2FsbGJhY2suXG4gKiBJZiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBjYWxsYmFjayBpcyBgdHJ1ZWAsIGl0IHdpbGwgaGFsdCB0aGUgdHJhdmVyc2FsIG9mIGl0cyBjaGlsZHJlbi5cbiAqIEBwYXJhbSBvYmplY3QgQSByb290IG9iamVjdFxuICogQHBhcmFtIGNhbGxiYWNrIEEgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGZvciBlYWNoIGNoaWxkcmVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZUNoaWxkcmVuVW50aWxDb25kaXRpb25NZXQoXG4gIG9iamVjdDogVEhSRUUuT2JqZWN0M0QsXG4gIGNhbGxiYWNrOiAob2JqZWN0OiBUSFJFRS5PYmplY3QzRCkgPT4gYm9vbGVhbixcbik6IHZvaWQge1xuICBvYmplY3QuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhjaGlsZCk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHRyYXZlcnNlQ2hpbGRyZW5VbnRpbENvbmRpdGlvbk1ldChjaGlsZCwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IFZSTVNwcmluZ0JvbmVKb2ludCB9IGZyb20gJy4vVlJNU3ByaW5nQm9uZUpvaW50JztcbmltcG9ydCB7IHRyYXZlcnNlQW5jZXN0b3JzRnJvbVJvb3QgfSBmcm9tICcuL3V0aWxzL3RyYXZlcnNlQW5jZXN0b3JzRnJvbVJvb3QnO1xuaW1wb3J0IHR5cGUgeyBWUk1TcHJpbmdCb25lQ29sbGlkZXIgfSBmcm9tICcuL1ZSTVNwcmluZ0JvbmVDb2xsaWRlcic7XG5pbXBvcnQgdHlwZSB7IFZSTVNwcmluZ0JvbmVDb2xsaWRlckdyb3VwIH0gZnJvbSAnLi9WUk1TcHJpbmdCb25lQ29sbGlkZXJHcm91cCc7XG5pbXBvcnQgeyB0cmF2ZXJzZUNoaWxkcmVuVW50aWxDb25kaXRpb25NZXQgfSBmcm9tICcuL3V0aWxzL3RyYXZlcnNlQ2hpbGRyZW5VbnRpbENvbmRpdGlvbk1ldCc7XG5cbmV4cG9ydCBjbGFzcyBWUk1TcHJpbmdCb25lTWFuYWdlciB7XG4gIHByaXZhdGUgX2pvaW50cyA9IG5ldyBTZXQ8VlJNU3ByaW5nQm9uZUpvaW50PigpO1xuICBwcml2YXRlIF9oYXNXYXJuZWRDaXJjdWxhckRlcGVuZGVuY3kgPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IGpvaW50cygpOiBTZXQ8VlJNU3ByaW5nQm9uZUpvaW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2pvaW50cztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIGpvaW50c30gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXQgc3ByaW5nQm9uZXMoKTogU2V0PFZSTVNwcmluZ0JvbmVKb2ludD4ge1xuICAgIGNvbnNvbGUud2FybignVlJNU3ByaW5nQm9uZU1hbmFnZXI6IHNwcmluZ0JvbmVzIGlzIGRlcHJlY2F0ZWQuIHVzZSBqb2ludHMgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiB0aGlzLl9qb2ludHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbGxpZGVyR3JvdXBzKCk6IFZSTVNwcmluZ0JvbmVDb2xsaWRlckdyb3VwW10ge1xuICAgIGNvbnN0IHNldCA9IG5ldyBTZXQ8VlJNU3ByaW5nQm9uZUNvbGxpZGVyR3JvdXA+KCk7XG4gICAgdGhpcy5fam9pbnRzLmZvckVhY2goKHNwcmluZ0JvbmUpID0+IHtcbiAgICAgIHNwcmluZ0JvbmUuY29sbGlkZXJHcm91cHMuZm9yRWFjaCgoY29sbGlkZXJHcm91cCkgPT4ge1xuICAgICAgICBzZXQuYWRkKGNvbGxpZGVyR3JvdXApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oc2V0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sbGlkZXJzKCk6IFZSTVNwcmluZ0JvbmVDb2xsaWRlcltdIHtcbiAgICBjb25zdCBzZXQgPSBuZXcgU2V0PFZSTVNwcmluZ0JvbmVDb2xsaWRlcj4oKTtcbiAgICB0aGlzLmNvbGxpZGVyR3JvdXBzLmZvckVhY2goKGNvbGxpZGVyR3JvdXApID0+IHtcbiAgICAgIGNvbGxpZGVyR3JvdXAuY29sbGlkZXJzLmZvckVhY2goKGNvbGxpZGVyKSA9PiB7XG4gICAgICAgIHNldC5hZGQoY29sbGlkZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oc2V0KTtcbiAgfVxuXG4gIHByaXZhdGUgX29iamVjdFNwcmluZ0JvbmVzTWFwID0gbmV3IE1hcDxUSFJFRS5PYmplY3QzRCwgU2V0PFZSTVNwcmluZ0JvbmVKb2ludD4+KCk7XG5cbiAgcHVibGljIGFkZEpvaW50KGpvaW50OiBWUk1TcHJpbmdCb25lSm9pbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9qb2ludHMuYWRkKGpvaW50KTtcblxuICAgIGxldCBvYmplY3RTZXQgPSB0aGlzLl9vYmplY3RTcHJpbmdCb25lc01hcC5nZXQoam9pbnQuYm9uZSk7XG4gICAgaWYgKG9iamVjdFNldCA9PSBudWxsKSB7XG4gICAgICBvYmplY3RTZXQgPSBuZXcgU2V0PFZSTVNwcmluZ0JvbmVKb2ludD4oKTtcbiAgICAgIHRoaXMuX29iamVjdFNwcmluZ0JvbmVzTWFwLnNldChqb2ludC5ib25lLCBvYmplY3RTZXQpO1xuICAgIH1cbiAgICBvYmplY3RTZXQuYWRkKGpvaW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIGFkZEpvaW50fSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGFkZFNwcmluZ0JvbmUoam9pbnQ6IFZSTVNwcmluZ0JvbmVKb2ludCk6IHZvaWQge1xuICAgIGNvbnNvbGUud2FybignVlJNU3ByaW5nQm9uZU1hbmFnZXI6IGFkZFNwcmluZ0JvbmUoKSBpcyBkZXByZWNhdGVkLiB1c2UgYWRkSm9pbnQoKSBpbnN0ZWFkLicpO1xuXG4gICAgdGhpcy5hZGRKb2ludChqb2ludCk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlSm9pbnQoam9pbnQ6IFZSTVNwcmluZ0JvbmVKb2ludCk6IHZvaWQge1xuICAgIHRoaXMuX2pvaW50cy5kZWxldGUoam9pbnQpO1xuXG4gICAgY29uc3Qgb2JqZWN0U2V0ID0gdGhpcy5fb2JqZWN0U3ByaW5nQm9uZXNNYXAuZ2V0KGpvaW50LmJvbmUpITtcbiAgICBvYmplY3RTZXQuZGVsZXRlKGpvaW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIGRlbGV0ZUpvaW50fSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGRlbGV0ZVNwcmluZ0JvbmUoam9pbnQ6IFZSTVNwcmluZ0JvbmVKb2ludCk6IHZvaWQge1xuICAgIGNvbnNvbGUud2FybignVlJNU3ByaW5nQm9uZU1hbmFnZXI6IGRlbGV0ZVNwcmluZ0JvbmUoKSBpcyBkZXByZWNhdGVkLiB1c2UgZGVsZXRlSm9pbnQoKSBpbnN0ZWFkLicpO1xuXG4gICAgdGhpcy5kZWxldGVKb2ludChqb2ludCk7XG4gIH1cblxuICBwdWJsaWMgc2V0SW5pdFN0YXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHNwcmluZ0JvbmVzVHJpZWQgPSBuZXcgU2V0PFZSTVNwcmluZ0JvbmVKb2ludD4oKTtcbiAgICBjb25zdCBzcHJpbmdCb25lc0RvbmUgPSBuZXcgU2V0PFZSTVNwcmluZ0JvbmVKb2ludD4oKTtcbiAgICBjb25zdCBvYmplY3RVcGRhdGVkID0gbmV3IFNldDxUSFJFRS5PYmplY3QzRD4oKTtcblxuICAgIGZvciAoY29uc3Qgc3ByaW5nQm9uZSBvZiB0aGlzLl9qb2ludHMpIHtcbiAgICAgIHRoaXMuX3Byb2Nlc3NTcHJpbmdCb25lKHNwcmluZ0JvbmUsIHNwcmluZ0JvbmVzVHJpZWQsIHNwcmluZ0JvbmVzRG9uZSwgb2JqZWN0VXBkYXRlZCwgKHNwcmluZ0JvbmUpID0+XG4gICAgICAgIHNwcmluZ0JvbmUuc2V0SW5pdFN0YXRlKCksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICBjb25zdCBzcHJpbmdCb25lc1RyaWVkID0gbmV3IFNldDxWUk1TcHJpbmdCb25lSm9pbnQ+KCk7XG4gICAgY29uc3Qgc3ByaW5nQm9uZXNEb25lID0gbmV3IFNldDxWUk1TcHJpbmdCb25lSm9pbnQ+KCk7XG4gICAgY29uc3Qgb2JqZWN0VXBkYXRlZCA9IG5ldyBTZXQ8VEhSRUUuT2JqZWN0M0Q+KCk7XG5cbiAgICBmb3IgKGNvbnN0IHNwcmluZ0JvbmUgb2YgdGhpcy5fam9pbnRzKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzU3ByaW5nQm9uZShzcHJpbmdCb25lLCBzcHJpbmdCb25lc1RyaWVkLCBzcHJpbmdCb25lc0RvbmUsIG9iamVjdFVwZGF0ZWQsIChzcHJpbmdCb25lKSA9PlxuICAgICAgICBzcHJpbmdCb25lLnJlc2V0KCksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHNwcmluZ0JvbmVzVHJpZWQgPSBuZXcgU2V0PFZSTVNwcmluZ0JvbmVKb2ludD4oKTtcbiAgICBjb25zdCBzcHJpbmdCb25lc0RvbmUgPSBuZXcgU2V0PFZSTVNwcmluZ0JvbmVKb2ludD4oKTtcbiAgICBjb25zdCBvYmplY3RVcGRhdGVkID0gbmV3IFNldDxUSFJFRS5PYmplY3QzRD4oKTtcblxuICAgIGZvciAoY29uc3Qgc3ByaW5nQm9uZSBvZiB0aGlzLl9qb2ludHMpIHtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3ByaW5nYm9uZVxuICAgICAgdGhpcy5fcHJvY2Vzc1NwcmluZ0JvbmUoc3ByaW5nQm9uZSwgc3ByaW5nQm9uZXNUcmllZCwgc3ByaW5nQm9uZXNEb25lLCBvYmplY3RVcGRhdGVkLCAoc3ByaW5nQm9uZSkgPT5cbiAgICAgICAgc3ByaW5nQm9uZS51cGRhdGUoZGVsdGEpLFxuICAgICAgKTtcblxuICAgICAgLy8gdXBkYXRlIGNoaWxkcmVuIHdvcmxkIG1hdHJpY2VzXG4gICAgICAvLyBpdCBpcyByZXF1aXJlZCB3aGVuIHRoZSBzcHJpbmcgYm9uZSBjaGFpbiBpcyBzcGFyc2VcbiAgICAgIHRyYXZlcnNlQ2hpbGRyZW5VbnRpbENvbmRpdGlvbk1ldChzcHJpbmdCb25lLmJvbmUsIChvYmplY3QpID0+IHtcbiAgICAgICAgLy8gaWYgdGhlIG9iamVjdCBoYXMgYXR0YWNoZWQgc3ByaW5nYm9uZSwgaGFsdCB0aGUgdHJhdmVyc2FsXG4gICAgICAgIGlmICgodGhpcy5fb2JqZWN0U3ByaW5nQm9uZXNNYXAuZ2V0KG9iamVjdCk/LnNpemUgPz8gMCkgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvdGhlcndpc2UgdXBkYXRlIGl0cyB3b3JsZCBtYXRyaXhcbiAgICAgICAgb2JqZWN0LnVwZGF0ZVdvcmxkTWF0cml4KGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYSBzcHJpbmcgYm9uZS5cbiAgICogSWYgdGhlcmUgYXJlIG90aGVyIHNwcmluZyBib25lIHRoYXQgYXJlIGRlcGVuZGFudCwgaXQgd2lsbCB0cnkgdG8gdXBkYXRlIHRoZW0gcmVjdXJzaXZlbHkuXG4gICAqIEl0IHVwZGF0ZXMgbWF0cml4V29ybGQgb2YgYWxsIGFuY2VzdG9ycyBhbmQgbXlzZWxmLlxuICAgKiBJdCBtaWdodCBsb2cgYW4gd2FybmluZyBtZXNzYWdlIGlmIHRoZXJlIGFyZSBhbnkgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuICAgKlxuICAgKiBJbnRlbmRlZCB0byBiZSB1c2VkIGluIHtAbGluayB1cGRhdGV9IGFuZCB7QGxpbmsgX3Byb2Nlc3NTcHJpbmdCb25lfSBpdHNlbGYgcmVjdXJzaXZlbHkuXG4gICAqXG4gICAqIEBwYXJhbSBzcHJpbmdCb25lIEEgc3ByaW5nQm9uZSB5b3Ugd2FudCB0byB1cGRhdGVcbiAgICogQHBhcmFtIHNwcmluZ0JvbmVzVHJpZWQgU2V0IG9mIHNwcmluZ0JvbmVzIHRoYXQgYXJlIGFscmVhZHkgdHJpZWQgdG8gYmUgdXBkYXRlZFxuICAgKiBAcGFyYW0gc3ByaW5nQm9uZXNEb25lIFNldCBvZiBzcHJpbmdCb25lcyB0aGF0IGFyZSBhbHJlYWR5IHVwIHRvIGRhdGVcbiAgICogQHBhcmFtIG9iamVjdFVwZGF0ZWQgU2V0IG9mIG9iamVjdDNEIHdob3NlIG1hdHJpeFdvcmxkIGlzIHVwZGF0ZWRcbiAgICovXG4gIHByaXZhdGUgX3Byb2Nlc3NTcHJpbmdCb25lKFxuICAgIHNwcmluZ0JvbmU6IFZSTVNwcmluZ0JvbmVKb2ludCxcbiAgICBzcHJpbmdCb25lc1RyaWVkOiBTZXQ8VlJNU3ByaW5nQm9uZUpvaW50PixcbiAgICBzcHJpbmdCb25lc0RvbmU6IFNldDxWUk1TcHJpbmdCb25lSm9pbnQ+LFxuICAgIG9iamVjdFVwZGF0ZWQ6IFNldDxUSFJFRS5PYmplY3QzRD4sXG4gICAgY2FsbGJhY2s6IChzcHJpbmdCb25lOiBWUk1TcHJpbmdCb25lSm9pbnQpID0+IHZvaWQsXG4gICk6IHZvaWQge1xuICAgIGlmIChzcHJpbmdCb25lc0RvbmUuaGFzKHNwcmluZ0JvbmUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNwcmluZ0JvbmVzVHJpZWQuaGFzKHNwcmluZ0JvbmUpKSB7XG4gICAgICBpZiAoIXRoaXMuX2hhc1dhcm5lZENpcmN1bGFyRGVwZW5kZW5jeSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1ZSTVNwcmluZ0JvbmVNYW5hZ2VyOiBDaXJjdWxhciBkZXBlbmRlbmN5IGRldGVjdGVkIHdoaWxlIHVwZGF0aW5nIHNwcmluZ2JvbmVzJyk7XG4gICAgICAgIHRoaXMuX2hhc1dhcm5lZENpcmN1bGFyRGVwZW5kZW5jeSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNwcmluZ0JvbmVzVHJpZWQuYWRkKHNwcmluZ0JvbmUpO1xuXG4gICAgY29uc3QgZGVwT2JqZWN0cyA9IHRoaXMuX2dldERlcGVuZGVuY2llcyhzcHJpbmdCb25lKTtcbiAgICBmb3IgKGNvbnN0IGRlcE9iamVjdCBvZiBkZXBPYmplY3RzKSB7XG4gICAgICB0cmF2ZXJzZUFuY2VzdG9yc0Zyb21Sb290KGRlcE9iamVjdCwgKGRlcE9iamVjdEFuY2VzdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iamVjdFNldCA9IHRoaXMuX29iamVjdFNwcmluZ0JvbmVzTWFwLmdldChkZXBPYmplY3RBbmNlc3Rvcik7XG4gICAgICAgIGlmIChvYmplY3RTZXQpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGRlcFNwcmluZ0JvbmUgb2Ygb2JqZWN0U2V0KSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzU3ByaW5nQm9uZShkZXBTcHJpbmdCb25lLCBzcHJpbmdCb25lc1RyaWVkLCBzcHJpbmdCb25lc0RvbmUsIG9iamVjdFVwZGF0ZWQsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIW9iamVjdFVwZGF0ZWQuaGFzKGRlcE9iamVjdEFuY2VzdG9yKSkge1xuICAgICAgICAgIC8vIHVwZGF0ZSBtYXRyaXggb2Ygbm9uLXNwcmluZ2JvbmVcbiAgICAgICAgICBkZXBPYmplY3RBbmNlc3Rvci51cGRhdGVXb3JsZE1hdHJpeChmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgIG9iamVjdFVwZGF0ZWQuYWRkKGRlcE9iamVjdEFuY2VzdG9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIG15IG1hdHJpeFxuICAgIHNwcmluZ0JvbmUuYm9uZS51cGRhdGVNYXRyaXgoKTtcbiAgICBzcHJpbmdCb25lLmJvbmUudXBkYXRlV29ybGRNYXRyaXgoZmFsc2UsIGZhbHNlKTtcblxuICAgIGNhbGxiYWNrKHNwcmluZ0JvbmUpO1xuXG4gICAgb2JqZWN0VXBkYXRlZC5hZGQoc3ByaW5nQm9uZS5ib25lKTtcblxuICAgIHNwcmluZ0JvbmVzRG9uZS5hZGQoc3ByaW5nQm9uZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgc2V0IG9mIG9iamVjdHMgdGhhdCBhcmUgZGVwZW5kYW50IG9mIGdpdmVuIHNwcmluZyBib25lLlxuICAgKiBAcGFyYW0gc3ByaW5nQm9uZSBBIHNwcmluZyBib25lXG4gICAqIEByZXR1cm4gQSBzZXQgb2Ygb2JqZWN0cyB0aGF0IGFyZSBkZXBlbmRhbnQgb2YgZ2l2ZW4gc3ByaW5nIGJvbmVcbiAgICovXG4gIHByaXZhdGUgX2dldERlcGVuZGVuY2llcyhzcHJpbmdCb25lOiBWUk1TcHJpbmdCb25lSm9pbnQpOiBTZXQ8VEhSRUUuT2JqZWN0M0Q+IHtcbiAgICBjb25zdCBzZXQgPSBuZXcgU2V0PFRIUkVFLk9iamVjdDNEPigpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gc3ByaW5nQm9uZS5ib25lLnBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBzZXQuYWRkKHBhcmVudCk7XG4gICAgfVxuXG4gICAgc3ByaW5nQm9uZS5jb2xsaWRlckdyb3Vwcy5mb3JFYWNoKChjb2xsaWRlckdyb3VwKSA9PiB7XG4gICAgICBjb2xsaWRlckdyb3VwLmNvbGxpZGVycy5mb3JFYWNoKChjb2xsaWRlcikgPT4ge1xuICAgICAgICBzZXQuYWRkKGNvbGxpZGVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNldDtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IEdMVEYsIEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7XG4gIFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4sXG4gIFZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luLFxuICBWUk1IdW1hbm9pZCxcbiAgVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW4sXG4gIFZSTUxvb2tBdExvYWRlclBsdWdpbixcbiAgVlJNTWV0YSxcbiAgVlJNTWV0YUxvYWRlclBsdWdpbixcbn0gZnJvbSAnQHBpeGl2L3RocmVlLXZybS1jb3JlJztcbmltcG9ydCB7IE1Ub29uTWF0ZXJpYWxMb2FkZXJQbHVnaW4gfSBmcm9tICdAcGl4aXYvdGhyZWUtdnJtLW1hdGVyaWFscy1tdG9vbic7XG5pbXBvcnQgeyBWUk1NYXRlcmlhbHNIRFJFbWlzc2l2ZU11bHRpcGxpZXJMb2FkZXJQbHVnaW4gfSBmcm9tICdAcGl4aXYvdGhyZWUtdnJtLW1hdGVyaWFscy1oZHItZW1pc3NpdmUtbXVsdGlwbGllcic7XG5pbXBvcnQgeyBWUk1NYXRlcmlhbHNWMENvbXBhdFBsdWdpbiB9IGZyb20gJ0BwaXhpdi90aHJlZS12cm0tbWF0ZXJpYWxzLXYwY29tcGF0JztcbmltcG9ydCB7IFZSTU5vZGVDb25zdHJhaW50TG9hZGVyUGx1Z2luIH0gZnJvbSAnQHBpeGl2L3RocmVlLXZybS1ub2RlLWNvbnN0cmFpbnQnO1xuaW1wb3J0IHsgVlJNU3ByaW5nQm9uZUxvYWRlclBsdWdpbiB9IGZyb20gJ0BwaXhpdi90aHJlZS12cm0tc3ByaW5nYm9uZSc7XG5pbXBvcnQgeyBWUk1Mb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9WUk1Mb2FkZXJQbHVnaW5PcHRpb25zJztcbmltcG9ydCB7IFZSTSB9IGZyb20gJy4vVlJNJztcblxuZXhwb3J0IGNsYXNzIFZSTUxvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIHB1YmxpYyByZWFkb25seSBleHByZXNzaW9uUGx1Z2luOiBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luO1xuICBwdWJsaWMgcmVhZG9ubHkgZmlyc3RQZXJzb25QbHVnaW46IFZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luO1xuICBwdWJsaWMgcmVhZG9ubHkgaHVtYW5vaWRQbHVnaW46IFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luO1xuICBwdWJsaWMgcmVhZG9ubHkgbG9va0F0UGx1Z2luOiBWUk1Mb29rQXRMb2FkZXJQbHVnaW47XG4gIHB1YmxpYyByZWFkb25seSBtZXRhUGx1Z2luOiBWUk1NZXRhTG9hZGVyUGx1Z2luO1xuICBwdWJsaWMgcmVhZG9ubHkgbXRvb25NYXRlcmlhbFBsdWdpbjogTVRvb25NYXRlcmlhbExvYWRlclBsdWdpbjtcbiAgcHVibGljIHJlYWRvbmx5IG1hdGVyaWFsc0hEUkVtaXNzaXZlTXVsdGlwbGllclBsdWdpbjogVlJNTWF0ZXJpYWxzSERSRW1pc3NpdmVNdWx0aXBsaWVyTG9hZGVyUGx1Z2luO1xuICBwdWJsaWMgcmVhZG9ubHkgbWF0ZXJpYWxzVjBDb21wYXRQbHVnaW46IFZSTU1hdGVyaWFsc1YwQ29tcGF0UGx1Z2luO1xuICBwdWJsaWMgcmVhZG9ubHkgc3ByaW5nQm9uZVBsdWdpbjogVlJNU3ByaW5nQm9uZUxvYWRlclBsdWdpbjtcbiAgcHVibGljIHJlYWRvbmx5IG5vZGVDb25zdHJhaW50UGx1Z2luOiBWUk1Ob2RlQ29uc3RyYWludExvYWRlclBsdWdpbjtcblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ1ZSTUxvYWRlclBsdWdpbic7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyc2VyOiBHTFRGUGFyc2VyLCBvcHRpb25zPzogVlJNTG9hZGVyUGx1Z2luT3B0aW9ucykge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgY29uc3QgaGVscGVyUm9vdCA9IG9wdGlvbnM/LmhlbHBlclJvb3Q7XG4gICAgY29uc3QgYXV0b1VwZGF0ZUh1bWFuQm9uZXMgPSBvcHRpb25zPy5hdXRvVXBkYXRlSHVtYW5Cb25lcztcblxuICAgIHRoaXMuZXhwcmVzc2lvblBsdWdpbiA9IG9wdGlvbnM/LmV4cHJlc3Npb25QbHVnaW4gPz8gbmV3IFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4ocGFyc2VyKTtcbiAgICB0aGlzLmZpcnN0UGVyc29uUGx1Z2luID0gb3B0aW9ucz8uZmlyc3RQZXJzb25QbHVnaW4gPz8gbmV3IFZSTUZpcnN0UGVyc29uTG9hZGVyUGx1Z2luKHBhcnNlcik7XG4gICAgdGhpcy5odW1hbm9pZFBsdWdpbiA9XG4gICAgICBvcHRpb25zPy5odW1hbm9pZFBsdWdpbiA/P1xuICAgICAgbmV3IFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luKHBhcnNlciwge1xuICAgICAgICBoZWxwZXJSb290LFxuICAgICAgICBhdXRvVXBkYXRlSHVtYW5Cb25lcyxcbiAgICAgIH0pO1xuICAgIHRoaXMubG9va0F0UGx1Z2luID0gb3B0aW9ucz8ubG9va0F0UGx1Z2luID8/IG5ldyBWUk1Mb29rQXRMb2FkZXJQbHVnaW4ocGFyc2VyLCB7IGhlbHBlclJvb3QgfSk7XG4gICAgdGhpcy5tZXRhUGx1Z2luID0gb3B0aW9ucz8ubWV0YVBsdWdpbiA/PyBuZXcgVlJNTWV0YUxvYWRlclBsdWdpbihwYXJzZXIpO1xuICAgIHRoaXMubXRvb25NYXRlcmlhbFBsdWdpbiA9IG9wdGlvbnM/Lm10b29uTWF0ZXJpYWxQbHVnaW4gPz8gbmV3IE1Ub29uTWF0ZXJpYWxMb2FkZXJQbHVnaW4ocGFyc2VyKTtcbiAgICB0aGlzLm1hdGVyaWFsc0hEUkVtaXNzaXZlTXVsdGlwbGllclBsdWdpbiA9XG4gICAgICBvcHRpb25zPy5tYXRlcmlhbHNIRFJFbWlzc2l2ZU11bHRpcGxpZXJQbHVnaW4gPz8gbmV3IFZSTU1hdGVyaWFsc0hEUkVtaXNzaXZlTXVsdGlwbGllckxvYWRlclBsdWdpbihwYXJzZXIpO1xuICAgIHRoaXMubWF0ZXJpYWxzVjBDb21wYXRQbHVnaW4gPSBvcHRpb25zPy5tYXRlcmlhbHNWMENvbXBhdFBsdWdpbiA/PyBuZXcgVlJNTWF0ZXJpYWxzVjBDb21wYXRQbHVnaW4ocGFyc2VyKTtcblxuICAgIHRoaXMuc3ByaW5nQm9uZVBsdWdpbiA9XG4gICAgICBvcHRpb25zPy5zcHJpbmdCb25lUGx1Z2luID8/XG4gICAgICBuZXcgVlJNU3ByaW5nQm9uZUxvYWRlclBsdWdpbihwYXJzZXIsIHtcbiAgICAgICAgY29sbGlkZXJIZWxwZXJSb290OiBoZWxwZXJSb290LFxuICAgICAgICBqb2ludEhlbHBlclJvb3Q6IGhlbHBlclJvb3QsXG4gICAgICB9KTtcblxuICAgIHRoaXMubm9kZUNvbnN0cmFpbnRQbHVnaW4gPVxuICAgICAgb3B0aW9ucz8ubm9kZUNvbnN0cmFpbnRQbHVnaW4gPz8gbmV3IFZSTU5vZGVDb25zdHJhaW50TG9hZGVyUGx1Z2luKHBhcnNlciwgeyBoZWxwZXJSb290IH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGJlZm9yZVJvb3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5tYXRlcmlhbHNWMENvbXBhdFBsdWdpbi5iZWZvcmVSb290KCk7XG4gICAgYXdhaXQgdGhpcy5tdG9vbk1hdGVyaWFsUGx1Z2luLmJlZm9yZVJvb3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsb2FkTWVzaChtZXNoSW5kZXg6IG51bWJlcik6IFByb21pc2U8VEhSRUUuR3JvdXAgfCBUSFJFRS5NZXNoIHwgVEhSRUUuU2tpbm5lZE1lc2g+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tdG9vbk1hdGVyaWFsUGx1Z2luLmxvYWRNZXNoKG1lc2hJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWF0ZXJpYWxUeXBlKG1hdGVyaWFsSW5kZXg6IG51bWJlcik6IHR5cGVvZiBUSFJFRS5NYXRlcmlhbCB8IG51bGwge1xuICAgIGNvbnN0IG10b29uVHlwZSA9IHRoaXMubXRvb25NYXRlcmlhbFBsdWdpbi5nZXRNYXRlcmlhbFR5cGUobWF0ZXJpYWxJbmRleCk7XG4gICAgaWYgKG10b29uVHlwZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gbXRvb25UeXBlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGV4dGVuZE1hdGVyaWFsUGFyYW1zKG1hdGVyaWFsSW5kZXg6IG51bWJlciwgbWF0ZXJpYWxQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIGF3YWl0IHRoaXMubWF0ZXJpYWxzSERSRW1pc3NpdmVNdWx0aXBsaWVyUGx1Z2luLmV4dGVuZE1hdGVyaWFsUGFyYW1zKG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zKTtcbiAgICBhd2FpdCB0aGlzLm10b29uTWF0ZXJpYWxQbHVnaW4uZXh0ZW5kTWF0ZXJpYWxQYXJhbXMobWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFmdGVyUm9vdChnbHRmOiBHTFRGKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5tZXRhUGx1Z2luLmFmdGVyUm9vdChnbHRmKTtcbiAgICBhd2FpdCB0aGlzLmh1bWFub2lkUGx1Z2luLmFmdGVyUm9vdChnbHRmKTtcbiAgICBhd2FpdCB0aGlzLmV4cHJlc3Npb25QbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuICAgIGF3YWl0IHRoaXMubG9va0F0UGx1Z2luLmFmdGVyUm9vdChnbHRmKTtcbiAgICBhd2FpdCB0aGlzLmZpcnN0UGVyc29uUGx1Z2luLmFmdGVyUm9vdChnbHRmKTtcbiAgICBhd2FpdCB0aGlzLnNwcmluZ0JvbmVQbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuICAgIGF3YWl0IHRoaXMubm9kZUNvbnN0cmFpbnRQbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuICAgIGF3YWl0IHRoaXMubXRvb25NYXRlcmlhbFBsdWdpbi5hZnRlclJvb3QoZ2x0Zik7XG5cbiAgICBjb25zdCBtZXRhID0gZ2x0Zi51c2VyRGF0YS52cm1NZXRhIGFzIFZSTU1ldGEgfCBudWxsO1xuICAgIGNvbnN0IGh1bWFub2lkID0gZ2x0Zi51c2VyRGF0YS52cm1IdW1hbm9pZCBhcyBWUk1IdW1hbm9pZCB8IG51bGw7XG5cbiAgICAvLyBtZXRhIGFuZCBodW1hbm9pZCBhcmUgcmVxdWlyZWQgdG8gYmUgYSBWUk0uXG4gICAgLy8gRG9uJ3QgY3JlYXRlIFZSTSBpZiB0aGV5IGFyZSBudWxsXG4gICAgaWYgKG1ldGEgJiYgaHVtYW5vaWQpIHtcbiAgICAgIGNvbnN0IHZybSA9IG5ldyBWUk0oe1xuICAgICAgICBzY2VuZTogZ2x0Zi5zY2VuZSxcbiAgICAgICAgZXhwcmVzc2lvbk1hbmFnZXI6IGdsdGYudXNlckRhdGEudnJtRXhwcmVzc2lvbk1hbmFnZXIsXG4gICAgICAgIGZpcnN0UGVyc29uOiBnbHRmLnVzZXJEYXRhLnZybUZpcnN0UGVyc29uLFxuICAgICAgICBodW1hbm9pZCxcbiAgICAgICAgbG9va0F0OiBnbHRmLnVzZXJEYXRhLnZybUxvb2tBdCxcbiAgICAgICAgbWV0YSxcbiAgICAgICAgbWF0ZXJpYWxzOiBnbHRmLnVzZXJEYXRhLnZybU1Ub29uTWF0ZXJpYWxzLFxuICAgICAgICBzcHJpbmdCb25lTWFuYWdlcjogZ2x0Zi51c2VyRGF0YS52cm1TcHJpbmdCb25lTWFuYWdlcixcbiAgICAgICAgbm9kZUNvbnN0cmFpbnRNYW5hZ2VyOiBnbHRmLnVzZXJEYXRhLnZybU5vZGVDb25zdHJhaW50TWFuYWdlcixcbiAgICAgIH0pO1xuXG4gICAgICBnbHRmLnVzZXJEYXRhLnZybSA9IHZybTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVHJhdmVyc2VzIHRoZSBnaXZlbiBvYmplY3QgYW5kIGNvbWJpbmVzIHRoZSBza2VsZXRvbnMgb2Ygc2tpbm5lZCBtZXNoZXMuXG4gKlxuICogRWFjaCBmcmFtZSB0aGUgYm9uZSBtYXRyaWNlcyBhcmUgY29tcHV0ZWQgZm9yIGV2ZXJ5IHNrZWxldG9uLiBDb21iaW5pbmcgc2tlbGV0b25zXG4gKiByZWR1Y2VzIHRoZSBudW1iZXIgb2YgY2FsY3VsYXRpb25zIG5lZWRlZCwgaW1wcm92aW5nIHBlcmZvcm1hbmNlLlxuICpcbiAqIEBwYXJhbSByb290IFJvb3Qgb2JqZWN0IHRoYXQgd2lsbCBiZSB0cmF2ZXJzZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVTa2VsZXRvbnMocm9vdDogVEhSRUUuT2JqZWN0M0QpOiB2b2lkIHtcbiAgY29uc3Qgc2tpbm5lZE1lc2hlcyA9IG5ldyBTZXQ8VEhSRUUuU2tpbm5lZE1lc2g+KCk7XG4gIGNvbnN0IGdlb21ldHJ5VG9Ta2lubmVkTWVzaCA9IG5ldyBNYXA8VEhSRUUuQnVmZmVyR2VvbWV0cnksIFRIUkVFLlNraW5uZWRNZXNoPigpO1xuXG4gIC8vIFRyYXZlcnNlIGVudGlyZSB0cmVlIGFuZCBjb2xsZWN0IHNraW5uZWQgbWVzaGVzXG4gIHJvb3QudHJhdmVyc2UoKG9iaikgPT4ge1xuICAgIGlmIChvYmoudHlwZSAhPT0gJ1NraW5uZWRNZXNoJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNraW5uZWRNZXNoID0gb2JqIGFzIFRIUkVFLlNraW5uZWRNZXNoO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGdlb21ldHJ5IGhhcyBhbHJlYWR5IGJlZW4gZW5jb3VudGVyZWRcbiAgICBjb25zdCBwcmV2aW91c1NraW5uZWRNZXNoID0gZ2VvbWV0cnlUb1NraW5uZWRNZXNoLmdldChza2lubmVkTWVzaC5nZW9tZXRyeSk7XG4gICAgaWYgKHByZXZpb3VzU2tpbm5lZE1lc2gpIHtcbiAgICAgIC8vIFNraW5uZWQgbWVzaGVzIHRoYXQgc2hhcmUgdGhlaXIgZ2VvbWV0cnkgd2l0aCBvdGhlciBza2lubmVkIG1lc2hlcyBjYW4ndCBiZSBwcm9jZXNzZWQuXG4gICAgICAvLyBUaGUgc2tpbm5lZE1lc2hlcyBhbHJlYWR5IGNvbnRhaW4gcHJldmlvdXNTa2lubmVkTWVzaCwgc28gcmVtb3ZlIGl0IG5vdy5cbiAgICAgIHNraW5uZWRNZXNoZXMuZGVsZXRlKHByZXZpb3VzU2tpbm5lZE1lc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW9tZXRyeVRvU2tpbm5lZE1lc2guc2V0KHNraW5uZWRNZXNoLmdlb21ldHJ5LCBza2lubmVkTWVzaCk7XG4gICAgICBza2lubmVkTWVzaGVzLmFkZChza2lubmVkTWVzaCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBQcmVwYXJlIG5ldyBza2VsZXRvbnMgZm9yIHRoZSBza2lubmVkIG1lc2hlc1xuICBjb25zdCBuZXdTa2VsZXRvbnM6IEFycmF5PHsgYm9uZXM6IFRIUkVFLkJvbmVbXTsgYm9uZUludmVyc2VzOiBUSFJFRS5NYXRyaXg0W107IG1lc2hlczogVEhSRUUuU2tpbm5lZE1lc2hbXSB9PiA9IFtdO1xuICBza2lubmVkTWVzaGVzLmZvckVhY2goKHNraW5uZWRNZXNoKSA9PiB7XG4gICAgY29uc3Qgc2tlbGV0b24gPSBza2lubmVkTWVzaC5za2VsZXRvbjtcblxuICAgIC8vIEZpbmQgc3VpdGFibGUgc2tlbGV0b25cbiAgICBsZXQgbmV3U2tlbGV0b24gPSBuZXdTa2VsZXRvbnMuZmluZCgoY2FuZGlkYXRlKSA9PiBza2VsZXRvbk1hdGNoZXMoc2tlbGV0b24sIGNhbmRpZGF0ZSkpO1xuICAgIGlmICghbmV3U2tlbGV0b24pIHtcbiAgICAgIG5ld1NrZWxldG9uID0geyBib25lczogW10sIGJvbmVJbnZlcnNlczogW10sIG1lc2hlczogW10gfTtcbiAgICAgIG5ld1NrZWxldG9ucy5wdXNoKG5ld1NrZWxldG9uKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgc2tpbm5lZCBtZXNoIHRvIHRoZSBuZXcgc2tlbGV0b25cbiAgICBuZXdTa2VsZXRvbi5tZXNoZXMucHVzaChza2lubmVkTWVzaCk7XG5cbiAgICAvLyBEZXRlcm1pbmUgYm9uZSBpbmRleCBtYXBwaW5nIGZyb20gc2tlbGV0b24gLT4gbmV3U2tlbGV0b25cbiAgICBjb25zdCBib25lSW5kZXhNYXA6IG51bWJlcltdID0gc2tlbGV0b24uYm9uZXMubWFwKChib25lKSA9PiBuZXdTa2VsZXRvbi5ib25lcy5pbmRleE9mKGJvbmUpKTtcblxuICAgIC8vIFVwZGF0ZSBza2luSW5kZXggYXR0cmlidXRlXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBza2lubmVkTWVzaC5nZW9tZXRyeTtcbiAgICBjb25zdCBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoJ3NraW5JbmRleCcpO1xuICAgIGNvbnN0IHdlaWdodEF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgnc2tpbldlaWdodCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGUuY291bnQ7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhdHRyaWJ1dGUuaXRlbVNpemU7IGorKykge1xuICAgICAgICAvLyBjaGVjayBib25lIHdlaWdodFxuICAgICAgICBjb25zdCB3ZWlnaHQgPSB3ZWlnaHRBdHRyaWJ1dGUuZ2V0Q29tcG9uZW50KGksIGopO1xuICAgICAgICBpZiAod2VpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJpYnV0ZS5nZXRDb21wb25lbnQoaSwgaik7XG5cbiAgICAgICAgLy8gbmV3IHNraW5JbmRleCBidWZmZXJcbiAgICAgICAgaWYgKGJvbmVJbmRleE1hcFtpbmRleF0gPT09IC0xKSB7XG4gICAgICAgICAgYm9uZUluZGV4TWFwW2luZGV4XSA9IG5ld1NrZWxldG9uLmJvbmVzLmxlbmd0aDtcbiAgICAgICAgICBuZXdTa2VsZXRvbi5ib25lcy5wdXNoKHNrZWxldG9uLmJvbmVzW2luZGV4XSk7XG4gICAgICAgICAgbmV3U2tlbGV0b24uYm9uZUludmVyc2VzLnB1c2goc2tlbGV0b24uYm9uZUludmVyc2VzW2luZGV4XSk7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyaWJ1dGUuc2V0Q29tcG9uZW50KGksIGosIGJvbmVJbmRleE1hcFtpbmRleF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF0dHJpYnV0ZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0pO1xuXG4gIC8vIEJpbmQgbmV3IHNrZWxldG9uIHRvIHRoZSBtZXNoZXNcbiAgZm9yIChjb25zdCB7IGJvbmVzLCBib25lSW52ZXJzZXMsIG1lc2hlcyB9IG9mIG5ld1NrZWxldG9ucykge1xuICAgIGNvbnN0IG5ld1NrZWxldG9uID0gbmV3IFRIUkVFLlNrZWxldG9uKGJvbmVzLCBib25lSW52ZXJzZXMpO1xuICAgIG1lc2hlcy5mb3JFYWNoKChtZXNoKSA9PiBtZXNoLmJpbmQobmV3U2tlbGV0b24sIG5ldyBUSFJFRS5NYXRyaXg0KCkpKTtcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGdpdmVuIHNrZWxldG9uIG1hdGNoZXMgYSBjYW5kaWRhdGUgc2tlbGV0b24uIEZvciB0aGUgc2tlbGV0b25zIHRvIG1hdGNoLFxuICogYWxsIGJvbmVzIG11c3QgZWl0aGVyIGJlIGluIHRoZSBjYW5kaWRhdGUgc2tlbGV0b24gd2l0aCB0aGUgc2FtZSBib25lSW52ZXJzZSBPUlxuICogbm90IHBhcnQgb2YgdGhlIGNhbmRpZGF0ZSBza2VsZXRvbiAoYXMgaXQgY2FuIGJlIGFkZGVkIHRvIGl0KS5cbiAqIEBwYXJhbSBza2VsZXRvbiBUaGUgc2tlbGV0b24gdG8gY2hlY2suXG4gKiBAcGFyYW0gY2FuZGlkYXRlIFRoZSBjYW5kaWRhdGUgc2tlbGV0b24gdG8gbWF0Y2ggYWdhaW5zdC5cbiAqL1xuZnVuY3Rpb24gc2tlbGV0b25NYXRjaGVzKHNrZWxldG9uOiBUSFJFRS5Ta2VsZXRvbiwgY2FuZGlkYXRlOiB7IGJvbmVzOiBUSFJFRS5Cb25lW107IGJvbmVJbnZlcnNlczogVEhSRUUuTWF0cml4NFtdIH0pIHtcbiAgcmV0dXJuIHNrZWxldG9uLmJvbmVzLmV2ZXJ5KChib25lLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNhbmRpZGF0ZUluZGV4ID0gY2FuZGlkYXRlLmJvbmVzLmluZGV4T2YoYm9uZSk7XG4gICAgaWYgKGNhbmRpZGF0ZUluZGV4ICE9PSAtMSkge1xuICAgICAgcmV0dXJuIG1hdHJpeEVxdWFscyhza2VsZXRvbi5ib25lSW52ZXJzZXNbaW5kZXhdLCBjYW5kaWRhdGUuYm9uZUludmVyc2VzW2NhbmRpZGF0ZUluZGV4XSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL3IxNzAvdGVzdC91bml0L3NyYy9tYXRoL01hdHJpeDQudGVzdHMuanMjTDEyXG5mdW5jdGlvbiBtYXRyaXhFcXVhbHMoYTogVEhSRUUuTWF0cml4NCwgYjogVEhSRUUuTWF0cml4NCwgdG9sZXJhbmNlPzogbnVtYmVyKSB7XG4gIHRvbGVyYW5jZSA9IHRvbGVyYW5jZSB8fCAwLjAwMDE7XG4gIGlmIChhLmVsZW1lbnRzLmxlbmd0aCAhPSBiLmVsZW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBpbCA9IGEuZWxlbWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuICAgIGNvbnN0IGRlbHRhID0gTWF0aC5hYnMoYS5lbGVtZW50c1tpXSAtIGIuZWxlbWVudHNbaV0pO1xuICAgIGlmIChkZWx0YSA+IHRvbGVyYW5jZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIiwgIi8vIFNlZTogaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzLyNtYW51YWwvZW4vaW50cm9kdWN0aW9uL0hvdy10by1kaXNwb3NlLW9mLW9iamVjdHNcblxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5mdW5jdGlvbiBkaXNwb3NlTWF0ZXJpYWwobWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsKTogdm9pZCB7XG4gIE9iamVjdC52YWx1ZXMobWF0ZXJpYWwpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlPy5pc1RleHR1cmUpIHtcbiAgICAgIGNvbnN0IHRleHR1cmUgPSB2YWx1ZSBhcyBUSFJFRS5UZXh0dXJlO1xuICAgICAgdGV4dHVyZS5kaXNwb3NlKCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoKG1hdGVyaWFsIGFzIGFueSkuaXNTaGFkZXJNYXRlcmlhbCkge1xuICAgIGNvbnN0IHVuaWZvcm1zOiB7IFt1bmlmb3JtOiBzdHJpbmddOiBUSFJFRS5JVW5pZm9ybTxhbnk+IH0gPSAobWF0ZXJpYWwgYXMgYW55KS51bmlmb3JtcztcbiAgICBpZiAodW5pZm9ybXMpIHtcbiAgICAgIE9iamVjdC52YWx1ZXModW5pZm9ybXMpLmZvckVhY2goKHVuaWZvcm0pID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1bmlmb3JtLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWU/LmlzVGV4dHVyZSkge1xuICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSB2YWx1ZSBhcyBUSFJFRS5UZXh0dXJlO1xuICAgICAgICAgIHRleHR1cmUuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtYXRlcmlhbC5kaXNwb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3Bvc2Uob2JqZWN0M0Q6IFRIUkVFLk9iamVjdDNEKTogdm9pZCB7XG4gIGNvbnN0IGdlb21ldHJ5OiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB8IHVuZGVmaW5lZCA9IChvYmplY3QzRCBhcyBhbnkpLmdlb21ldHJ5O1xuICBpZiAoZ2VvbWV0cnkpIHtcbiAgICBnZW9tZXRyeS5kaXNwb3NlKCk7XG4gIH1cblxuICBjb25zdCBza2VsZXRvbjogVEhSRUUuU2tlbGV0b24gfCB1bmRlZmluZWQgPSAob2JqZWN0M0QgYXMgYW55KS5za2VsZXRvbjtcbiAgaWYgKHNrZWxldG9uKSB7XG4gICAgc2tlbGV0b24uZGlzcG9zZSgpO1xuICB9XG5cbiAgY29uc3QgbWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsIHwgVEhSRUUuTWF0ZXJpYWxbXSB8IHVuZGVmaW5lZCA9IChvYmplY3QzRCBhcyBhbnkpLm1hdGVyaWFsO1xuICBpZiAobWF0ZXJpYWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRlcmlhbCkpIHtcbiAgICAgIG1hdGVyaWFsLmZvckVhY2goKG1hdGVyaWFsOiBUSFJFRS5NYXRlcmlhbCkgPT4gZGlzcG9zZU1hdGVyaWFsKG1hdGVyaWFsKSk7XG4gICAgfSBlbHNlIGlmIChtYXRlcmlhbCkge1xuICAgICAgZGlzcG9zZU1hdGVyaWFsKG1hdGVyaWFsKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBEaXNwb3NlKG9iamVjdDNEOiBUSFJFRS5PYmplY3QzRCk6IHZvaWQge1xuICBvYmplY3QzRC50cmF2ZXJzZShkaXNwb3NlKTtcbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVHJhdmVyc2UgdGhlIGdpdmVuIG9iamVjdCBhbmQgcmVtb3ZlIHVubmVjZXNzYXJpbHkgYm91bmQgam9pbnRzIGZyb20gZXZlcnkgYFRIUkVFLlNraW5uZWRNZXNoYC5cbiAqXG4gKiBTb21lIGVudmlyb25tZW50cyBsaWtlIG1vYmlsZSBkZXZpY2VzIGhhdmUgYSBsb3dlciBsaW1pdCBvZiBib25lc1xuICogYW5kIG1pZ2h0IGJlIHVuYWJsZSB0byBwZXJmb3JtIG1lc2ggc2tpbm5pbmcgd2l0aCBtYW55IGJvbmVzLlxuICogVGhpcyBmdW5jdGlvbiBtaWdodCByZXNvbHZlIHN1Y2ggYW4gaXNzdWUuXG4gKlxuICogQWxzbywgdGhpcyBmdW5jdGlvbiBtaWdodCBzaWduaWZpY2FudGx5IGltcHJvdmUgdGhlIHBlcmZvcm1hbmNlIG9mIG1lc2ggc2tpbm5pbmcuXG4gKlxuICogQHBhcmFtIHJvb3QgUm9vdCBvYmplY3QgdGhhdCB3aWxsIGJlIHRyYXZlcnNlZFxuICpcbiAqIEBkZXByZWNhdGVkIGByZW1vdmVVbm5lY2Vzc2FyeUpvaW50c2AgaXMgZGVwcmVjYXRlZC4gVXNlIGBjb21iaW5lU2tlbGV0b25zYCBpbnN0ZWFkLiBgY29tYmluZVNrZWxldG9uc2AgY29udHJpYnV0ZXMgbW9yZSB0byB0aGUgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVbm5lY2Vzc2FyeUpvaW50cyhcbiAgcm9vdDogVEhSRUUuT2JqZWN0M0QsXG4gIG9wdGlvbnM/OiB7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGlzIGZ1bmN0aW9uIHdpbGwgY29tcGVuc2F0ZSBza2VsZXRvbnMgd2l0aCBkdW1teSBib25lcyB0byBrZWVwIHRoZSBib25lIGNvdW50IHNhbWUgYmV0d2VlbiBza2VsZXRvbnMuXG4gICAgICpcbiAgICAgKiBUaGlzIG9wdGlvbiBtaWdodCBiZSBlZmZlY3RpdmUgZm9yIHRoZSBzaGFkZXIgY29tcGlsYXRpb24gcGVyZm9ybWFuY2UgdGhhdCBtYXR0ZXJzIHRvIHRoZSBpbml0aWFsIHJlbmRlcmluZyB0aW1lIGluIFdlYkdQVVJlbmRlcmVyLFxuICAgICAqIGVzcGVjaWFsbHkgd2hlbiB0aGUgbW9kZWwgbG9hZGVkIGhhcyBtYW55IG1hdGVyaWFscyBhbmQgdGhlIGRlcGVuZGVudCBib25lIGNvdW50IGlzIGRpZmZlcmVudCBiZXR3ZWVuIHRoZW0uXG4gICAgICpcbiAgICAgKiBDb25zaWRlciB0aGlzIHBhcmFtZXRlciBhcyBleHBlcmltZW50YWwuIFdlIG1pZ2h0IG1vZGlmeSBvciBkZWxldGUgdGhpcyBBUEkgd2l0aG91dCBub3RpY2UgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKlxuICAgICAqIGBmYWxzZWAgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBleHBlcmltZW50YWxTYW1lQm9uZUNvdW50cz86IGJvb2xlYW47XG4gIH0sXG4pOiB2b2lkIHtcbiAgY29uc29sZS53YXJuKFxuICAgICdWUk1VdGlscy5yZW1vdmVVbm5lY2Vzc2FyeUpvaW50czogcmVtb3ZlVW5uZWNlc3NhcnlKb2ludHMgaXMgZGVwcmVjYXRlZC4gVXNlIGNvbWJpbmVTa2VsZXRvbnMgaW5zdGVhZC4gY29tYmluZVNrZWxldG9ucyBjb250cmlidXRlcyBtb3JlIHRvIHRoZSBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC4gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi4nLFxuICApO1xuXG4gIGNvbnN0IGV4cGVyaW1lbnRhbFNhbWVCb25lQ291bnRzID0gb3B0aW9ucz8uZXhwZXJpbWVudGFsU2FtZUJvbmVDb3VudHMgPz8gZmFsc2U7XG5cbiAgLy8gVHJhdmVyc2UgYW4gZW50aXJlIHRyZWUsIGFuZCBjb2xsZWN0IGFsbCBza2lubmVkIG1lc2hlc1xuICBjb25zdCBza2lubmVkTWVzaGVzOiBUSFJFRS5Ta2lubmVkTWVzaFtdID0gW107XG5cbiAgcm9vdC50cmF2ZXJzZSgob2JqKSA9PiB7XG4gICAgaWYgKG9iai50eXBlICE9PSAnU2tpbm5lZE1lc2gnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2tpbm5lZE1lc2hlcy5wdXNoKG9iaiBhcyBUSFJFRS5Ta2lubmVkTWVzaCk7XG4gIH0pO1xuXG4gIC8vIEEgbWFwIGZyb20gbWVzaGVzIHRvIGJvbmVzIGFuZCBib25lSW52ZXJzZXNcbiAgLy8gc29tZSBtZXNoZXMgbWlnaHQgc2hhcmUgYSBzYW1lIHNraW5JbmRleCBhdHRyaWJ1dGUsIGFuZCB0aGlzIG1hcCBhbHNvIHByZXZlbnRzIHRvIGNvbnZlcnQgdGhlIGF0dHJpYnV0ZSB0d2ljZVxuICBjb25zdCBib25lc0xpc3Q6IE1hcDxcbiAgICBUSFJFRS5Ta2lubmVkTWVzaCxcbiAgICB7XG4gICAgICBib25lczogVEhSRUUuQm9uZVtdO1xuICAgICAgYm9uZUludmVyc2VzOiBUSFJFRS5NYXRyaXg0W107XG4gICAgfVxuICA+ID0gbmV3IE1hcCgpO1xuXG4gIC8vIEEgbWF4aW11bSBudW1iZXIgb2YgYm9uZXNcbiAgbGV0IG1heEJvbmVzID0gMDtcblxuICAvLyBJdGVyYXRlIG92ZXIgYWxsIHNraW5uZWQgbWVzaGVzIGFuZCBjb2xsZWN0IGJvbmVzIGFuZCBib25lSW52ZXJzZXNcbiAgZm9yIChjb25zdCBtZXNoIG9mIHNraW5uZWRNZXNoZXMpIHtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG1lc2guZ2VvbWV0cnk7XG4gICAgY29uc3QgYXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCdza2luSW5kZXgnKTtcblxuICAgIGNvbnN0IGJvbmVzOiBUSFJFRS5Cb25lW10gPSBbXTsgLy8gbmV3IGxpc3Qgb2YgYm9uZVxuICAgIGNvbnN0IGJvbmVJbnZlcnNlczogVEhSRUUuTWF0cml4NFtdID0gW107IC8vIG5ldyBsaXN0IG9mIGJvbmVJbnZlcnNlXG4gICAgY29uc3QgYm9uZUluZGV4TWFwOiB7IFtpbmRleDogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTsgLy8gbWFwIG9mIG9sZCBib25lIGluZGV4IHZzLiBuZXcgYm9uZSBpbmRleFxuXG4gICAgLy8gY3JlYXRlIGEgbmV3IGJvbmUgbWFwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGUuY291bnQ7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhdHRyaWJ1dGUuaXRlbVNpemU7IGorKykge1xuICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJpYnV0ZS5nZXRDb21wb25lbnQoaSwgaik7XG5cbiAgICAgICAgLy8gbmV3IHNraW5JbmRleCBidWZmZXJcbiAgICAgICAgaWYgKGJvbmVJbmRleE1hcFtpbmRleF0gPT0gbnVsbCkge1xuICAgICAgICAgIGJvbmVJbmRleE1hcFtpbmRleF0gPSBib25lcy5sZW5ndGg7XG4gICAgICAgICAgYm9uZXMucHVzaChtZXNoLnNrZWxldG9uLmJvbmVzW2luZGV4XSk7XG4gICAgICAgICAgYm9uZUludmVyc2VzLnB1c2gobWVzaC5za2VsZXRvbi5ib25lSW52ZXJzZXNbaW5kZXhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHJpYnV0ZS5zZXRDb21wb25lbnQoaSwgaiwgYm9uZUluZGV4TWFwW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSB3aXRoIG5ldyBpbmRpY2VzXG4gICAgYXR0cmlidXRlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIC8vIHVwZGF0ZSBib25lTGlzdFxuICAgIGJvbmVzTGlzdC5zZXQobWVzaCwgeyBib25lcywgYm9uZUludmVyc2VzIH0pO1xuXG4gICAgLy8gdXBkYXRlIG1heCBib25lcyBjb3VudFxuICAgIG1heEJvbmVzID0gTWF0aC5tYXgobWF4Qm9uZXMsIGJvbmVzLmxlbmd0aCk7XG4gIH1cblxuICAvLyBMZXQncyBhY3R1YWxseSBzZXQgdGhlIHNrZWxldG9uc1xuICBmb3IgKGNvbnN0IG1lc2ggb2Ygc2tpbm5lZE1lc2hlcykge1xuICAgIGNvbnN0IHsgYm9uZXMsIGJvbmVJbnZlcnNlcyB9ID0gYm9uZXNMaXN0LmdldChtZXNoKSE7XG5cbiAgICAvLyBpZiBgZXhwZXJpbWVudGFsU2FtZUJvbmVDb3VudHNgIGlzIGB0cnVlYCwgY29tcGVuc2F0ZSBza2VsZXRvbnMgd2l0aCBkdW1teSBib25lcyB0byBrZWVwIHRoZSBib25lIGNvdW50IHNhbWUgYmV0d2VlbiBza2VsZXRvbnNcbiAgICBpZiAoZXhwZXJpbWVudGFsU2FtZUJvbmVDb3VudHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSBib25lcy5sZW5ndGg7IGkgPCBtYXhCb25lczsgaSsrKSB7XG4gICAgICAgIGJvbmVzW2ldID0gYm9uZXNbMF07XG4gICAgICAgIGJvbmVJbnZlcnNlc1tpXSA9IGJvbmVJbnZlcnNlc1swXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBza2VsZXRvbiA9IG5ldyBUSFJFRS5Ta2VsZXRvbihib25lcywgYm9uZUludmVyc2VzKTtcbiAgICBtZXNoLmJpbmQoc2tlbGV0b24sIG5ldyBUSFJFRS5NYXRyaXg0KCkpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgXl5eXl5eXl5eXl5eXl5eXl5eXiB0cmFuc2Zvcm0gb2YgbWVzaGVzIHNob3VsZCBiZSBpZ25vcmVkXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2tpbnNcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IEJ1ZmZlckF0dHJpYnV0ZSB9IGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBUcmF2ZXJzZSBnaXZlbiBvYmplY3QgYW5kIHJlbW92ZSB1bm5lY2Vzc2FyeSB2ZXJ0aWNlcyBmcm9tIGV2ZXJ5IEJ1ZmZlckdlb21ldHJpZXMuXG4gKiBUaGlzIG9ubHkgcHJvY2Vzc2VzIGJ1ZmZlciBnZW9tZXRyaWVzIHdpdGggaW5kZXggYnVmZmVyLlxuICpcbiAqIFRocmVlLmpzIGNyZWF0ZXMgbW9ycGggdGV4dHVyZXMgZm9yIGVhY2ggZ2VvbWV0cmllcyBhbmQgaXQgc29tZXRpbWVzIGNvbnN1bWVzIHVubmVjZXNzYXJ5IGFtb3VudCBvZiBWUkFNIGZvciBjZXJ0YWluIG1vZGVscy5cbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBvcHRpbWl6ZSBnZW9tZXRyaWVzIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiBtb3JwaCB0ZXh0dXJlLlxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8yMzA5NVxuICpcbiAqIEBwYXJhbSByb290IFJvb3Qgb2JqZWN0IHRoYXQgd2lsbCBiZSB0cmF2ZXJzZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVubmVjZXNzYXJ5VmVydGljZXMocm9vdDogVEhSRUUuT2JqZWN0M0QpOiB2b2lkIHtcbiAgY29uc3QgZ2VvbWV0cnlNYXAgPSBuZXcgTWFwPFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBUSFJFRS5CdWZmZXJHZW9tZXRyeT4oKTtcblxuICAvLyBUcmF2ZXJzZSBhbiBlbnRpcmUgdHJlZVxuICByb290LnRyYXZlcnNlKChvYmopID0+IHtcbiAgICBpZiAoIShvYmogYXMgYW55KS5pc01lc2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNoID0gb2JqIGFzIFRIUkVFLk1lc2g7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBtZXNoLmdlb21ldHJ5O1xuXG4gICAgLy8gaWYgdGhlIGdlb21ldHJ5IGRvZXMgbm90IGhhdmUgYW4gaW5kZXggYnVmZmVyIGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgcHJvY2Vzc2VkXG4gICAgY29uc3Qgb3JpZ2luYWxJbmRleCA9IGdlb21ldHJ5LmluZGV4O1xuICAgIGlmIChvcmlnaW5hbEluZGV4ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBza2lwIGFscmVhZHkgcHJvY2Vzc2VkIGdlb21ldHJ5XG4gICAgY29uc3QgbmV3R2VvbWV0cnlBbHJlYWR5RXhpc3RlZCA9IGdlb21ldHJ5TWFwLmdldChnZW9tZXRyeSk7XG4gICAgaWYgKG5ld0dlb21ldHJ5QWxyZWFkeUV4aXN0ZWQgIT0gbnVsbCkge1xuICAgICAgbWVzaC5nZW9tZXRyeSA9IG5ld0dlb21ldHJ5QWxyZWFkeUV4aXN0ZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHZlcnRpY2VzIGFyZSB1c2VkIGluIHRoZSBnZW9tZXRyeVxuICAgIGNvbnN0IHZlcnRleENvdW50ID0gT2JqZWN0LnZhbHVlcyhnZW9tZXRyeS5hdHRyaWJ1dGVzKVswXS5jb3VudDtcbiAgICBjb25zdCB2ZXJ0ZXhJblVzZSA9IG5ldyBBcnJheSh2ZXJ0ZXhDb3VudCk7XG4gICAgbGV0IHZlcnRpY2VzVXNlZCA9IDA7XG5cbiAgICBjb25zdCBvcmlnaW5hbEluZGV4QXJyYXkgPSBvcmlnaW5hbEluZGV4LmFycmF5O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JpZ2luYWxJbmRleEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG9yaWdpbmFsSW5kZXhBcnJheVtpXTtcbiAgICAgIGlmICghdmVydGV4SW5Vc2VbaW5kZXhdKSB7XG4gICAgICAgIHZlcnRleEluVXNlW2luZGV4XSA9IHRydWU7XG4gICAgICAgIHZlcnRpY2VzVXNlZCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBnZW9tZXRyeSB1c2VzIGFsbCB2ZXJ0aWNlcyBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIHByb2Nlc3NlZFxuICAgIGlmICh2ZXJ0aWNlc1VzZWQgPT09IHZlcnRleENvdW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqIGZyb20gb3JpZ2luYWwgaW5kZXggdG8gbmV3IGluZGV4ICovXG4gICAgY29uc3Qgb3JpZ2luYWxJbmRleE5ld0luZGV4TWFwOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgLyoqIGZyb20gbmV3IGluZGV4IHRvIG9yaWdpbmFsIGluZGV4ICovXG4gICAgY29uc3QgbmV3SW5kZXhPcmlnaW5hbEluZGV4TWFwOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgLy8gYXNzaWduIG5ldyBpbmRpY2VzXG4gICAgbGV0IGluZGV4SGVhZCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0ZXhJblVzZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZlcnRleEluVXNlW2ldKSB7XG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXhIZWFkKys7XG4gICAgICAgIG9yaWdpbmFsSW5kZXhOZXdJbmRleE1hcFtpXSA9IG5ld0luZGV4O1xuICAgICAgICBuZXdJbmRleE9yaWdpbmFsSW5kZXhNYXBbbmV3SW5kZXhdID0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBuZXdHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXG4gICAgLy8gY29weSB2YXJpb3VzIHByb3BlcnRpZXNcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi8xYTI0MWVmMTAwNDg3NzBkNTZlMDZkNmNkNmE2NGM3NmNjNzIwZjk1L3NyYy9jb3JlL0J1ZmZlckdlb21ldHJ5LmpzI0wxMDExXG4gICAgbmV3R2VvbWV0cnkubmFtZSA9IGdlb21ldHJ5Lm5hbWU7XG5cbiAgICBuZXdHZW9tZXRyeS5tb3JwaFRhcmdldHNSZWxhdGl2ZSA9IGdlb21ldHJ5Lm1vcnBoVGFyZ2V0c1JlbGF0aXZlO1xuXG4gICAgZ2VvbWV0cnkuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBuZXdHZW9tZXRyeS5hZGRHcm91cChncm91cC5zdGFydCwgZ3JvdXAuY291bnQsIGdyb3VwLm1hdGVyaWFsSW5kZXgpO1xuICAgIH0pO1xuXG4gICAgbmV3R2VvbWV0cnkuYm91bmRpbmdCb3ggPSBnZW9tZXRyeS5ib3VuZGluZ0JveD8uY2xvbmUoKSA/PyBudWxsO1xuICAgIG5ld0dlb21ldHJ5LmJvdW5kaW5nU3BoZXJlID0gZ2VvbWV0cnkuYm91bmRpbmdTcGhlcmU/LmNsb25lKCkgPz8gbnVsbDtcblxuICAgIG5ld0dlb21ldHJ5LnNldERyYXdSYW5nZShnZW9tZXRyeS5kcmF3UmFuZ2Uuc3RhcnQsIGdlb21ldHJ5LmRyYXdSYW5nZS5jb3VudCk7XG5cbiAgICBuZXdHZW9tZXRyeS51c2VyRGF0YSA9IGdlb21ldHJ5LnVzZXJEYXRhO1xuXG4gICAgLy8gc2V0IHRvIGdlb21ldHJ5TWFwXG4gICAgZ2VvbWV0cnlNYXAuc2V0KGdlb21ldHJ5LCBuZXdHZW9tZXRyeSk7XG5cbiAgICAvLyByZW9yZ2FuaXplIGluZGljZXNcbiAgICB7XG4gICAgICBjb25zdCBvcmlnaW5hbEluZGV4QXJyYXkgPSBvcmlnaW5hbEluZGV4LmFycmF5O1xuICAgICAgY29uc3QgbmV3SW5kZXhBcnJheSA9IG5ldyAob3JpZ2luYWxJbmRleEFycmF5LmNvbnN0cnVjdG9yIGFzIGFueSkob3JpZ2luYWxJbmRleEFycmF5Lmxlbmd0aCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JpZ2luYWxJbmRleEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSW5kZXggPSBvcmlnaW5hbEluZGV4QXJyYXlbaV07XG5cbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSBvcmlnaW5hbEluZGV4TmV3SW5kZXhNYXBbb3JpZ2luYWxJbmRleF07XG4gICAgICAgIG5ld0luZGV4QXJyYXlbaV0gPSBuZXdJbmRleDtcbiAgICAgIH1cblxuICAgICAgbmV3R2VvbWV0cnkuc2V0SW5kZXgobmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXdJbmRleEFycmF5LCAxLCBmYWxzZSkpO1xuICAgIH1cblxuICAgIC8vIHJlb3JnYW5pemUgYXR0cmlidXRlc1xuICAgIE9iamVjdC5rZXlzKGdlb21ldHJ5LmF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsQXR0cmlidXRlID0gZ2VvbWV0cnkuYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG5cbiAgICAgIGlmICgob3JpZ2luYWxBdHRyaWJ1dGUgYXMgYW55KS5pc0ludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncmVtb3ZlVW5uZWNlc3NhcnlWZXJ0aWNlczogSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvcmlnaW5hbEF0dHJpYnV0ZUFycmF5ID0gb3JpZ2luYWxBdHRyaWJ1dGUuYXJyYXk7XG4gICAgICBjb25zdCB7IGl0ZW1TaXplLCBub3JtYWxpemVkIH0gPSBvcmlnaW5hbEF0dHJpYnV0ZTtcblxuICAgICAgY29uc3QgbmV3QXR0cmlidXRlQXJyYXkgPSBuZXcgKG9yaWdpbmFsQXR0cmlidXRlQXJyYXkuY29uc3RydWN0b3IgYXMgYW55KShcbiAgICAgICAgbmV3SW5kZXhPcmlnaW5hbEluZGV4TWFwLmxlbmd0aCAqIGl0ZW1TaXplLFxuICAgICAgKTtcblxuICAgICAgbmV3SW5kZXhPcmlnaW5hbEluZGV4TWFwLmZvckVhY2goKG9yaWdpbmFsSW5kZXgsIGkpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtU2l6ZTsgaisrKSB7XG4gICAgICAgICAgbmV3QXR0cmlidXRlQXJyYXlbaSAqIGl0ZW1TaXplICsgal0gPSBvcmlnaW5hbEF0dHJpYnV0ZUFycmF5W29yaWdpbmFsSW5kZXggKiBpdGVtU2l6ZSArIGpdO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbmV3R2VvbWV0cnkuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3QXR0cmlidXRlQXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkKSk7XG4gICAgfSk7XG5cbiAgICAvLyByZW9yZ2FuaXplIG1vcnBoIGF0dHJpYnV0ZXNcbiAgICAvKiogVHJ1ZSBpZiBhbGwgbW9ycGhzIGFyZSB6ZXJvLiAqL1xuICAgIGxldCBpc051bGxNb3JwaCA9IHRydWU7XG5cbiAgICBPYmplY3Qua2V5cyhnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgIG5ld0dlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9IFtdO1xuXG4gICAgICBjb25zdCBtb3JwaHMgPSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XG4gICAgICBmb3IgKGxldCBpTW9ycGggPSAwOyBpTW9ycGggPCBtb3JwaHMubGVuZ3RoOyBpTW9ycGgrKykge1xuICAgICAgICBjb25zdCBvcmlnaW5hbEF0dHJpYnV0ZSA9IG1vcnBoc1tpTW9ycGhdIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcblxuICAgICAgICBpZiAoKG9yaWdpbmFsQXR0cmlidXRlIGFzIGFueSkuaXNJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVtb3ZlVW5uZWNlc3NhcnlWZXJ0aWNlczogSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxBdHRyaWJ1dGVBcnJheSA9IG9yaWdpbmFsQXR0cmlidXRlLmFycmF5O1xuICAgICAgICBjb25zdCB7IGl0ZW1TaXplLCBub3JtYWxpemVkIH0gPSBvcmlnaW5hbEF0dHJpYnV0ZTtcblxuICAgICAgICBjb25zdCBuZXdBdHRyaWJ1dGVBcnJheSA9IG5ldyAob3JpZ2luYWxBdHRyaWJ1dGVBcnJheS5jb25zdHJ1Y3RvciBhcyBhbnkpKFxuICAgICAgICAgIG5ld0luZGV4T3JpZ2luYWxJbmRleE1hcC5sZW5ndGggKiBpdGVtU2l6ZSxcbiAgICAgICAgKTtcblxuICAgICAgICBuZXdJbmRleE9yaWdpbmFsSW5kZXhNYXAuZm9yRWFjaCgob3JpZ2luYWxJbmRleCwgaSkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbVNpemU7IGorKykge1xuICAgICAgICAgICAgbmV3QXR0cmlidXRlQXJyYXlbaSAqIGl0ZW1TaXplICsgal0gPSBvcmlnaW5hbEF0dHJpYnV0ZUFycmF5W29yaWdpbmFsSW5kZXggKiBpdGVtU2l6ZSArIGpdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXNOdWxsTW9ycGggPSBpc051bGxNb3JwaCAmJiBuZXdBdHRyaWJ1dGVBcnJheS5ldmVyeSgodjogbnVtYmVyKSA9PiB2ID09PSAwKTtcblxuICAgICAgICBuZXdHZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV1baU1vcnBoXSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoXG4gICAgICAgICAgbmV3QXR0cmlidXRlQXJyYXksXG4gICAgICAgICAgaXRlbVNpemUsXG4gICAgICAgICAgbm9ybWFsaXplZCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIGFsbCBtb3JwaHMgYXJlIHplcm8sIGp1c3QgZGlzY2FyZCB0aGUgbW9ycGggYXR0cmlidXRlcyB3ZSd2ZSBqdXN0IG1hZGVcbiAgICBpZiAoaXNOdWxsTW9ycGgpIHtcbiAgICAgIG5ld0dlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyA9IHt9O1xuICAgIH1cblxuICAgIG1lc2guZ2VvbWV0cnkgPSBuZXdHZW9tZXRyeTtcbiAgfSk7XG5cbiAgQXJyYXkuZnJvbShnZW9tZXRyeU1hcC5rZXlzKCkpLmZvckVhY2goKG9yaWdpbmFsR2VvbWV0cnkpID0+IHtcbiAgICBvcmlnaW5hbEdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgVlJNIH0gZnJvbSAnLi4vVlJNJztcblxuLyoqXG4gKiBJZiB0aGUgZ2l2ZW4gVlJNIGlzIFZSTTAuMCwgcm90YXRlIHRoZSBgdnJtLnNjZW5lYCBieSAxODAgZGVncmVlcyBhcm91bmQgdGhlIFkgYXhpcy5cbiAqXG4gKiBAcGFyYW0gdnJtIFRoZSB0YXJnZXQgVlJNXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVWUk0wKHZybTogVlJNKTogdm9pZCB7XG4gIGlmICh2cm0ubWV0YT8ubWV0YVZlcnNpb24gPT09ICcwJykge1xuICAgIHZybS5zY2VuZS5yb3RhdGlvbi55ID0gTWF0aC5QSTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNvbWJpbmVTa2VsZXRvbnMgfSBmcm9tICcuL2NvbWJpbmVTa2VsZXRvbnMnO1xuaW1wb3J0IHsgZGVlcERpc3Bvc2UgfSBmcm9tICcuL2RlZXBEaXNwb3NlJztcbmltcG9ydCB7IHJlbW92ZVVubmVjZXNzYXJ5Sm9pbnRzIH0gZnJvbSAnLi9yZW1vdmVVbm5lY2Vzc2FyeUpvaW50cyc7XG5pbXBvcnQgeyByZW1vdmVVbm5lY2Vzc2FyeVZlcnRpY2VzIH0gZnJvbSAnLi9yZW1vdmVVbm5lY2Vzc2FyeVZlcnRpY2VzJztcbmltcG9ydCB7IHJvdGF0ZVZSTTAgfSBmcm9tICcuL3JvdGF0ZVZSTTAnO1xuXG5leHBvcnQgY2xhc3MgVlJNVXRpbHMge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRoaXMgY2xhc3MgaXMgbm90IG1lYW50IHRvIGJlIGluc3RhbnRpYXRlZFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjb21iaW5lU2tlbGV0b25zID0gY29tYmluZVNrZWxldG9ucztcbiAgcHVibGljIHN0YXRpYyBkZWVwRGlzcG9zZSA9IGRlZXBEaXNwb3NlO1xuICBwdWJsaWMgc3RhdGljIHJlbW92ZVVubmVjZXNzYXJ5Sm9pbnRzID0gcmVtb3ZlVW5uZWNlc3NhcnlKb2ludHM7XG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlVW5uZWNlc3NhcnlWZXJ0aWNlcyA9IHJlbW92ZVVubmVjZXNzYXJ5VmVydGljZXM7XG4gIHB1YmxpYyBzdGF0aWMgcm90YXRlVlJNMCA9IHJvdGF0ZVZSTTA7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxZQUF1QjtBQ0V2QixhQUF1QjtBTUZ2QixhQUF1QjtBRUF2QixhQUF1QjtBRUN2QixhQUF1QjtBR0R2QixhQUF1QjtBSUF2QixhQUF1QjtBRUF2QixhQUF1QjtBSUF2QixjQUF1QjtBQ0F2QixhQUF1QjtBQ0F2QixjQUF1QjtBQ0F2QixjQUF1QjtBQ0F2QixjQUF1QjtBR0N2Qixj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QUM7QUFFRCxzQkFBYyxlQUFlLGtCQUFrQixNQUFNLENBQUMsTUFBYyxNQUFNLENBQUM7QUFFM0Usb0JBQVksZ0JBQWdCLGFBQWEsRUFBRSxNQUFNLElBQUksSUFBSTtBQUFBLFVBQ3ZEO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUdELFFBQUksYUFBYTtBQUNmLGtCQUFZLGtCQUFrQixDQUFDO0FBQUEsSUFDakM7QUFFQSxTQUFLLFdBQVc7QUFBQSxFQUNsQixDQUFDO0FBRUQsUUFBTSxLQUFLLFlBQVksS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLHFCQUFxQjtBQUMzRCxxQkFBaUIsUUFBUTtBQUFBLEVBQzNCLENBQUM7QUFDSDs7O0FDaExPLFNBQVMsV0FBVyxLQUFnQjtBQVAzQztBQVFFLFFBQUksU0FBSSxTQUFKLG1CQUFVLGlCQUFnQixLQUFLO0FBQ2pDLFFBQUksTUFBTSxTQUFTLElBQUksS0FBSztBQUFBLEVBQzlCO0FBQ0Y7OztBQ0xPLElBQU0sV0FBTixNQUFlO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFFdEI7QUFPRjtBQVZhLFNBS0csbUJBQW1CO0FBTHRCLFNBTUcsY0FBYztBQU5qQixTQU9HLDBCQUEwQjtBQVA3QixTQVFHLDRCQUE0QjtBQVIvQixTQVNHLGFBQWE7IiwKICAibmFtZXMiOiBbIl9fYXN5bmMiLCAiX1ZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCIsICJfVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kIiwgIl9hIiwgIl9WUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luIiwgIl9iIiwgIl9WUk1GaXJzdFBlcnNvbiIsICJQT1NTSUJMRV9TUEVDX1ZFUlNJT05TIiwgIl92M0EiLCAiX3F1YXRBIiwgIl92M0IiLCAiX3F1YXRCIiwgIl9WUk1Mb29rQXQiLCAiVkVDM19QT1NJVElWRV9aIiwgIl9ldWxlckEiLCAiVEhSRUU1IiwgIlRIUkVFMiIsICJUSFJFRSIsICJUSFJFRTQiLCAiVEhSRUUzIiwgIl9fYXN5bmMiLCAibXRvb25fZGVmYXVsdCIsICJQT1NTSUJMRV9TUEVDX1ZFUlNJT05TIiwgIl9NVG9vbk1hdGVyaWFsTG9hZGVyUGx1Z2luIiwgIl9WUk1NYXRlcmlhbHNIRFJFbWlzc2l2ZU11bHRpcGxpZXJMb2FkZXJQbHVnaW4iLCAiX19hc3luYyIsICJUSFJFRSIsICJfX2FzeW5jIiwgIl9hIiwgIl9fc3ByZWFkVmFsdWVzIiwgIlRIUkVFIiwgIlRIUkVFMyIsICJUSFJFRTIiLCAiVEhSRUU0IiwgIlRIUkVFNSIsICJfdjNBIiwgIl92M0IiLCAicXVhdEludmVydENvbXBhdCIsICJfdjNDIiwgIl9xdWF0QSIsICJfcXVhdEIiLCAiX3F1YXRDIiwgImNvbnN0cmFpbnQiLCAiUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyIsICJfVlJNTm9kZUNvbnN0cmFpbnRMb2FkZXJQbHVnaW4iLCAiX19hc3luYyIsICJfYSIsICJUSFJFRTciLCAiVEhSRUUiLCAiVEhSRUUyIiwgIlRIUkVFMyIsICJUSFJFRTQiLCAiVEhSRUU1IiwgIlRIUkVFNiIsICJUSFJFRTkiLCAiVEhSRUU4IiwgIlRIUkVFMTAiLCAiVEhSRUUxMyIsICJUSFJFRTExIiwgIlRIUkVFMTIiLCAiVEhSRUUxNCIsICJfdjNBIiwgIl92M0IiLCAiX3YzQyIsICJfcXVhdEEiLCAiX21hdEEiLCAidHJhdmVyc2VBbmNlc3RvcnNGcm9tUm9vdCIsICJzcHJpbmdCb25lIiwgIlBPU1NJQkxFX1NQRUNfVkVSU0lPTlMiLCAiX1ZSTVNwcmluZ0JvbmVMb2FkZXJQbHVnaW4iLCAiX19hc3luYyIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJfZSIsICJUSFJFRSIsICJtYXRlcmlhbCIsICJUSFJFRSIsICJUSFJFRSIsICJvcmlnaW5hbEluZGV4QXJyYXkiLCAib3JpZ2luYWxJbmRleCJdCn0K
