/*!
 * @pixiv/three-vrm-animation v3.1.6
 * The implementation of VRM Animation
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-animation is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
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

// src/createVRMAnimationClip.ts
import * as THREE18 from "three";

// ../three-vrm-core/lib/three-vrm-core.module.js
import * as THREE from "three";
import * as THREE4 from "three";
import * as THREE2 from "three";
import * as THREE3 from "three";
import * as THREE5 from "three";
import * as THREE6 from "three";
import * as THREE7 from "three";
import * as THREE8 from "three";
import * as THREE11 from "three";
import * as THREE9 from "three";
import * as THREE10 from "three";
import * as THREE13 from "three";
import * as THREE12 from "three";
import * as THREE14 from "three";
import * as THREE15 from "three";
import * as THREE16 from "three";
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
import * as THREE17 from "three";
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
import * as THREE19 from "three";
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
import * as THREE20 from "three";

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
export {
  VRMAnimation,
  VRMAnimationLoaderPlugin,
  VRMLookAtQuaternionProxy,
  createVRMAnimationClip,
  createVRMAnimationExpressionTracks,
  createVRMAnimationHumanoidTracks,
  createVRMAnimationLookAtTrack
};
/*!
 * @pixiv/three-vrm-core v3.1.6
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NyZWF0ZVZSTUFuaW1hdGlvbkNsaXAudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb24udHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4udHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL3V0aWxzL2dsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uUHJlc2V0TmFtZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvdXRpbHMvc2F0dXJhdGUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25NYW5hZ2VyLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZC50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbk1vcnBoVGFyZ2V0QmluZC50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9leHByZXNzaW9ucy9WUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9maXJzdFBlcnNvbi9WUk1GaXJzdFBlcnNvbi50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvZmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW4udHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2ZpcnN0UGVyc29uL1ZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25UeXBlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9oZWxwZXJzL1ZSTUh1bWFub2lkSGVscGVyLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9WUk1IdW1hbkJvbmVMaXN0LnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9WUk1IdW1hbkJvbmVOYW1lLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9WUk1IdW1hbkJvbmVQYXJlbnRNYXAudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2h1bWFub2lkL1ZSTVJpZy50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvdXRpbHMvcXVhdEludmVydENvbXBhdC50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvaHVtYW5vaWQvVlJNSHVtYW5vaWRSaWcudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2h1bWFub2lkL1ZSTUh1bWFub2lkLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9odW1hbm9pZC9WUk1SZXF1aXJlZEh1bWFuQm9uZU5hbWUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2h1bWFub2lkL1ZSTUh1bWFub2lkTG9hZGVyUGx1Z2luLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvaGVscGVycy9WUk1Mb29rQXRIZWxwZXIudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2xvb2tBdC9oZWxwZXJzL3V0aWxzL0ZhbkJ1ZmZlckdlb21ldHJ5LnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvaGVscGVycy91dGlscy9MaW5lQW5kU3BoZXJlQnVmZmVyR2VvbWV0cnkudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2xvb2tBdC9WUk1Mb29rQXQudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL3V0aWxzL2dldFdvcmxkUXVhdGVybmlvbkxpdGUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2xvb2tBdC91dGlscy9jYWxjQXppbXV0aEFsdGl0dWRlLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvdXRpbHMvc2FuaXRpemVBbmdsZS50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L1ZSTUxvb2tBdEJvbmVBcHBsaWVyLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9sb29rQXQvVlJNTG9va0F0RXhwcmVzc2lvbkFwcGxpZXIudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL2xvb2tBdC9WUk1Mb29rQXRSYW5nZU1hcC50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L1ZSTUxvb2tBdExvYWRlclBsdWdpbi50cyIsICIuLi8uLi90aHJlZS12cm0tY29yZS9zcmMvbG9va0F0L1ZSTUxvb2tBdFR5cGVOYW1lLnRzIiwgIi4uLy4uL3RocmVlLXZybS1jb3JlL3NyYy9tZXRhL1ZSTU1ldGFMb2FkZXJQbHVnaW4udHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL3V0aWxzL3Jlc29sdmVVUkwudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL1ZSTUNvcmUudHMiLCAiLi4vLi4vdGhyZWUtdnJtLWNvcmUvc3JjL1ZSTUNvcmVMb2FkZXJQbHVnaW4udHMiLCAiLi4vc3JjL1ZSTUxvb2tBdFF1YXRlcm5pb25Qcm94eS50cyIsICIuLi9zcmMvVlJNQW5pbWF0aW9uLnRzIiwgIi4uL3NyYy9WUk1BbmltYXRpb25Mb2FkZXJQbHVnaW4udHMiLCAiLi4vc3JjL3V0aWxzL2FycmF5Q2h1bmsudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHtcbiAgVlJNQ29yZSxcbiAgVlJNRXhwcmVzc2lvbk1hbmFnZXIsXG4gIFZSTUV4cHJlc3Npb25QcmVzZXROYW1lLFxuICBWUk1IdW1hbkJvbmVOYW1lLFxuICBWUk1IdW1hbm9pZCxcbn0gZnJvbSAnQHBpeGl2L3RocmVlLXZybS1jb3JlJztcbmltcG9ydCB0eXBlIHsgVlJNQW5pbWF0aW9uIH0gZnJvbSAnLi9WUk1BbmltYXRpb24nO1xuaW1wb3J0IHsgVlJNTG9va0F0UXVhdGVybmlvblByb3h5IH0gZnJvbSAnLi9WUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHknO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVlJNQW5pbWF0aW9uSHVtYW5vaWRUcmFja3MoXG4gIHZybUFuaW1hdGlvbjogVlJNQW5pbWF0aW9uLFxuICBodW1hbm9pZDogVlJNSHVtYW5vaWQsXG4gIG1ldGFWZXJzaW9uOiAnMCcgfCAnMScsXG4pOiB7XG4gIHRyYW5zbGF0aW9uOiBNYXA8J2hpcHMnLCBUSFJFRS5WZWN0b3JLZXlmcmFtZVRyYWNrPjtcbiAgcm90YXRpb246IE1hcDxWUk1IdW1hbkJvbmVOYW1lLCBUSFJFRS5RdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjaz47XG59IHtcbiAgY29uc3QgdHJhbnNsYXRpb24gPSBuZXcgTWFwPCdoaXBzJywgVEhSRUUuVmVjdG9yS2V5ZnJhbWVUcmFjaz4oKTtcbiAgY29uc3Qgcm90YXRpb24gPSBuZXcgTWFwPFZSTUh1bWFuQm9uZU5hbWUsIFRIUkVFLlZlY3RvcktleWZyYW1lVHJhY2s+KCk7XG5cbiAgZm9yIChjb25zdCBbbmFtZSwgb3JpZ1RyYWNrXSBvZiB2cm1BbmltYXRpb24uaHVtYW5vaWRUcmFja3Mucm90YXRpb24uZW50cmllcygpKSB7XG4gICAgY29uc3Qgbm9kZU5hbWUgPSBodW1hbm9pZC5nZXROb3JtYWxpemVkQm9uZU5vZGUobmFtZSk/Lm5hbWU7XG5cbiAgICBpZiAobm9kZU5hbWUgIT0gbnVsbCkge1xuICAgICAgY29uc3QgdHJhY2sgPSBuZXcgVEhSRUUuUXVhdGVybmlvbktleWZyYW1lVHJhY2soXG4gICAgICAgIGAke25vZGVOYW1lfS5xdWF0ZXJuaW9uYCxcbiAgICAgICAgb3JpZ1RyYWNrLnRpbWVzLFxuICAgICAgICBvcmlnVHJhY2sudmFsdWVzLm1hcCgodiwgaSkgPT4gKG1ldGFWZXJzaW9uID09PSAnMCcgJiYgaSAlIDIgPT09IDAgPyAtdiA6IHYpKSxcbiAgICAgICk7XG4gICAgICByb3RhdGlvbi5zZXQobmFtZSwgdHJhY2spO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgW25hbWUsIG9yaWdUcmFja10gb2YgdnJtQW5pbWF0aW9uLmh1bWFub2lkVHJhY2tzLnRyYW5zbGF0aW9uLmVudHJpZXMoKSkge1xuICAgIGNvbnN0IG5vZGVOYW1lID0gaHVtYW5vaWQuZ2V0Tm9ybWFsaXplZEJvbmVOb2RlKG5hbWUpPy5uYW1lO1xuXG4gICAgaWYgKG5vZGVOYW1lICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvblkgPSB2cm1BbmltYXRpb24ucmVzdEhpcHNQb3NpdGlvbi55O1xuICAgICAgY29uc3QgaHVtYW5vaWRZID0gaHVtYW5vaWQubm9ybWFsaXplZFJlc3RQb3NlLmhpcHMhLnBvc2l0aW9uIVsxXTtcbiAgICAgIGNvbnN0IHNjYWxlID0gaHVtYW5vaWRZIC8gYW5pbWF0aW9uWTtcblxuICAgICAgY29uc3QgdHJhY2sgPSBvcmlnVHJhY2suY2xvbmUoKTtcbiAgICAgIHRyYWNrLnZhbHVlcyA9IHRyYWNrLnZhbHVlcy5tYXAoKHYsIGkpID0+IChtZXRhVmVyc2lvbiA9PT0gJzAnICYmIGkgJSAzICE9PSAxID8gLXYgOiB2KSAqIHNjYWxlKTtcbiAgICAgIHRyYWNrLm5hbWUgPSBgJHtub2RlTmFtZX0ucG9zaXRpb25gO1xuICAgICAgdHJhbnNsYXRpb24uc2V0KG5hbWUsIHRyYWNrKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyB0cmFuc2xhdGlvbiwgcm90YXRpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZSTUFuaW1hdGlvbkV4cHJlc3Npb25UcmFja3MoXG4gIHZybUFuaW1hdGlvbjogVlJNQW5pbWF0aW9uLFxuICBleHByZXNzaW9uTWFuYWdlcjogVlJNRXhwcmVzc2lvbk1hbmFnZXIsXG4pOiB7XG4gIHByZXNldDogTWFwPFZSTUV4cHJlc3Npb25QcmVzZXROYW1lLCBUSFJFRS5OdW1iZXJLZXlmcmFtZVRyYWNrPjtcbiAgY3VzdG9tOiBNYXA8c3RyaW5nLCBUSFJFRS5OdW1iZXJLZXlmcmFtZVRyYWNrPjtcbn0ge1xuICBjb25zdCBwcmVzZXQgPSBuZXcgTWFwPFZSTUV4cHJlc3Npb25QcmVzZXROYW1lLCBUSFJFRS5OdW1iZXJLZXlmcmFtZVRyYWNrPigpO1xuICBjb25zdCBjdXN0b20gPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuTnVtYmVyS2V5ZnJhbWVUcmFjaz4oKTtcblxuICBmb3IgKGNvbnN0IFtuYW1lLCBvcmlnVHJhY2tdIG9mIHZybUFuaW1hdGlvbi5leHByZXNzaW9uVHJhY2tzLnByZXNldC5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCB0cmFja05hbWUgPSBleHByZXNzaW9uTWFuYWdlci5nZXRFeHByZXNzaW9uVHJhY2tOYW1lKG5hbWUpO1xuXG4gICAgaWYgKHRyYWNrTmFtZSAhPSBudWxsKSB7XG4gICAgICBjb25zdCB0cmFjayA9IG9yaWdUcmFjay5jbG9uZSgpO1xuICAgICAgdHJhY2submFtZSA9IHRyYWNrTmFtZTtcbiAgICAgIHByZXNldC5zZXQobmFtZSwgdHJhY2spO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgW25hbWUsIG9yaWdUcmFja10gb2YgdnJtQW5pbWF0aW9uLmV4cHJlc3Npb25UcmFja3MuY3VzdG9tLmVudHJpZXMoKSkge1xuICAgIGNvbnN0IHRyYWNrTmFtZSA9IGV4cHJlc3Npb25NYW5hZ2VyLmdldEV4cHJlc3Npb25UcmFja05hbWUobmFtZSk7XG5cbiAgICBpZiAodHJhY2tOYW1lICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gb3JpZ1RyYWNrLmNsb25lKCk7XG4gICAgICB0cmFjay5uYW1lID0gdHJhY2tOYW1lO1xuICAgICAgY3VzdG9tLnNldChuYW1lLCB0cmFjayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgcHJlc2V0LCBjdXN0b20gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZSTUFuaW1hdGlvbkxvb2tBdFRyYWNrKFxuICB2cm1BbmltYXRpb246IFZSTUFuaW1hdGlvbixcbiAgdHJhY2tOYW1lOiBzdHJpbmcsXG4pOiBUSFJFRS5LZXlmcmFtZVRyYWNrIHwgbnVsbCB7XG4gIGlmICh2cm1BbmltYXRpb24ubG9va0F0VHJhY2sgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgdHJhY2sgPSB2cm1BbmltYXRpb24ubG9va0F0VHJhY2suY2xvbmUoKTtcbiAgdHJhY2submFtZSA9IHRyYWNrTmFtZTtcbiAgcmV0dXJuIHRyYWNrO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBBbmltYXRpb25DbGlwIG91dCBvZiB0aGUgZ2l2ZW4gVlJNQW5pbWF0aW9uIGFuZCB0aGUgVlJNLlxuICpcbiAqIEBwYXJhbSB2cm1BbmltYXRpb24gQSB7QGxpbmsgVlJNQW5pbWF0aW9ufS5cbiAqIEBwYXJhbSB2cm0gQSB7QGxpbmsgVlJNQ29yZX0uXG4gKiBAcmV0dXJucyBBbiBBbmltYXRpb25DbGlwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWUk1BbmltYXRpb25DbGlwKHZybUFuaW1hdGlvbjogVlJNQW5pbWF0aW9uLCB2cm06IFZSTUNvcmUpOiBUSFJFRS5BbmltYXRpb25DbGlwIHtcbiAgY29uc3QgdHJhY2tzOiBUSFJFRS5LZXlmcmFtZVRyYWNrW10gPSBbXTtcblxuICBjb25zdCBodW1hbm9pZFRyYWNrcyA9IGNyZWF0ZVZSTUFuaW1hdGlvbkh1bWFub2lkVHJhY2tzKHZybUFuaW1hdGlvbiwgdnJtLmh1bWFub2lkLCB2cm0ubWV0YS5tZXRhVmVyc2lvbik7XG4gIHRyYWNrcy5wdXNoKC4uLmh1bWFub2lkVHJhY2tzLnRyYW5zbGF0aW9uLnZhbHVlcygpKTtcbiAgdHJhY2tzLnB1c2goLi4uaHVtYW5vaWRUcmFja3Mucm90YXRpb24udmFsdWVzKCkpO1xuXG4gIGlmICh2cm0uZXhwcmVzc2lvbk1hbmFnZXIgIT0gbnVsbCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25UcmFja3MgPSBjcmVhdGVWUk1BbmltYXRpb25FeHByZXNzaW9uVHJhY2tzKHZybUFuaW1hdGlvbiwgdnJtLmV4cHJlc3Npb25NYW5hZ2VyKTtcbiAgICB0cmFja3MucHVzaCguLi5leHByZXNzaW9uVHJhY2tzLnByZXNldC52YWx1ZXMoKSk7XG4gICAgdHJhY2tzLnB1c2goLi4uZXhwcmVzc2lvblRyYWNrcy5jdXN0b20udmFsdWVzKCkpO1xuICB9XG5cbiAgaWYgKHZybS5sb29rQXQgIT0gbnVsbCkge1xuICAgIC8vIHNlYXJjaCBWUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHlcbiAgICBsZXQgcHJveHkgPSB2cm0uc2NlbmUuY2hpbGRyZW4uZmluZCgob2JqKSA9PiBvYmogaW5zdGFuY2VvZiBWUk1Mb29rQXRRdWF0ZXJuaW9uUHJveHkpO1xuXG4gICAgaWYgKHByb3h5ID09IG51bGwpIHtcbiAgICAgIC8vIGlmIG5vdCBmb3VuZCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnY3JlYXRlVlJNQW5pbWF0aW9uQ2xpcDogVlJNTG9va0F0UXVhdGVybmlvblByb3h5IGlzIG5vdCBmb3VuZC4gQ3JlYXRpbmcgYSBuZXcgb25lIGF1dG9tYXRpY2FsbHkuIFRvIHN1cHByZXNzIHRoaXMgd2FybmluZywgY3JlYXRlIGEgVlJNTG9va0F0UXVhdGVybmlvblByb3h5IG1hbnVhbGx5JyxcbiAgICAgICk7XG5cbiAgICAgIHByb3h5ID0gbmV3IFZSTUxvb2tBdFF1YXRlcm5pb25Qcm94eSh2cm0ubG9va0F0KTtcbiAgICAgIHByb3h5Lm5hbWUgPSAnVlJNTG9va0F0UXVhdGVybmlvblByb3h5JztcbiAgICAgIHZybS5zY2VuZS5hZGQocHJveHkpO1xuICAgIH0gZWxzZSBpZiAocHJveHkubmFtZSA9PSBudWxsKSB7XG4gICAgICAvLyBpZiBmb3VuZCBidXQgbmFtZSBpcyBub3Qgc2V0LCBzZXQgdGhlIG5hbWUgYXV0b21hdGljYWxseVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnY3JlYXRlVlJNQW5pbWF0aW9uQ2xpcDogVlJNTG9va0F0UXVhdGVybmlvblByb3h5IGlzIGZvdW5kIGJ1dCBpdHMgbmFtZSBpcyBub3Qgc2V0LiBTZXR0aW5nIHRoZSBuYW1lIGF1dG9tYXRpY2FsbHkuIFRvIHN1cHByZXNzIHRoaXMgd2FybmluZywgc2V0IHRoZSBuYW1lIG1hbnVhbGx5JyxcbiAgICAgICk7XG5cbiAgICAgIHByb3h5Lm5hbWUgPSAnVlJNTG9va0F0UXVhdGVybmlvblByb3h5JztcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgYSB0cmFja1xuICAgIGNvbnN0IHRyYWNrID0gY3JlYXRlVlJNQW5pbWF0aW9uTG9va0F0VHJhY2sodnJtQW5pbWF0aW9uLCBgJHtwcm94eS5uYW1lfS5xdWF0ZXJuaW9uYCk7XG4gICAgaWYgKHRyYWNrICE9IG51bGwpIHtcbiAgICAgIHRyYWNrcy5wdXNoKHRyYWNrKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRIUkVFLkFuaW1hdGlvbkNsaXAoJ0NsaXAnLCB2cm1BbmltYXRpb24uZHVyYXRpb24sIHRyYWNrcyk7XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbkJpbmQgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25CaW5kJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25NYW5hZ2VyIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uTWFuYWdlcic7XG5cbi8vIGFuaW1hdGlvbk1peGVyIFx1MzA2RVx1NzZFM1x1ODk5Nlx1NUJGRVx1OEM2MVx1MzA2Rlx1MzAwMVNjZW5lIFx1MzA2RVx1NEUyRFx1MzA2Qlx1NTE2NVx1MzA2M1x1MzA2Nlx1MzA0NFx1MzA4Qlx1NUZDNVx1ODk4MVx1MzA0Q1x1MzA0Mlx1MzA4Qlx1MzAwMlxuLy8gXHUzMDVEXHUzMDZFXHUzMDVGXHUzMDgxXHUzMDAxXHU4ODY4XHU3OTNBXHUzMEFBXHUzMEQ2XHUzMEI4XHUzMEE3XHUzMEFGXHUzMEM4XHUzMDY3XHUzMDZGXHUzMDZBXHUzMDQ0XHUzMDUxXHUzMDhDXHUzMDY5XHUzMDAxT2JqZWN0M0QgXHUzMDkyXHU3RDk5XHU2MjdGXHUzMDU3XHUzMDY2IFNjZW5lIFx1MzA2Qlx1NjI5NVx1NTE2NVx1MzA2N1x1MzA0RFx1MzA4Qlx1MzA4OFx1MzA0Nlx1MzA2Qlx1MzA1OVx1MzA4Qlx1MzAwMlxuZXhwb3J0IGNsYXNzIFZSTUV4cHJlc3Npb24gZXh0ZW5kcyBUSFJFRS5PYmplY3QzRCB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoaXMgZXhwcmVzc2lvbi5cbiAgICogRGlzdGluZ3Vpc2hlZCB3aXRoIGBuYW1lYCBzaW5jZSBgbmFtZWAgd2lsbCBiZSBjb25mbGljdGVkIHdpdGggT2JqZWN0M0QuXG4gICAqL1xuICBwdWJsaWMgZXhwcmVzc2lvbk5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgd2VpZ2h0IG9mIHRoZSBleHByZXNzaW9uLlxuICAgKlxuICAgKiBZb3UgdXN1YWxseSB3YW50IHRvIHNldCB0aGUgd2VpZ2h0IHZpYSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXIuc2V0VmFsdWV9LlxuICAgKlxuICAgKiBJdCBtaWdodCBhbHNvIGJlIGNvbnRyb2xsZWQgYnkgdGhlIFRocmVlLmpzIGFuaW1hdGlvbiBzeXN0ZW0uXG4gICAqL1xuICBwdWJsaWMgd2VpZ2h0ID0gMC4wO1xuXG4gIC8qKlxuICAgKiBJbnRlcnByZXQgdmFsdWVzIGdyZWF0ZXIgdGhhbiAwLjUgYXMgMS4wLCBvcnRoZXJ3aXNlIDAuMC5cbiAgICovXG4gIHB1YmxpYyBpc0JpbmFyeSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGhvdyB0aGUgZXhwcmVzc2lvbiBvdmVycmlkZXMgYmxpbmsgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgb3ZlcnJpZGVCbGluazogVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSA9ICdub25lJztcblxuICAvKipcbiAgICogU3BlY2lmeSBob3cgdGhlIGV4cHJlc3Npb24gb3ZlcnJpZGVzIGxvb2tBdCBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBvdmVycmlkZUxvb2tBdDogVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSA9ICdub25lJztcblxuICAvKipcbiAgICogU3BlY2lmeSBob3cgdGhlIGV4cHJlc3Npb24gb3ZlcnJpZGVzIG1vdXRoIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIG92ZXJyaWRlTW91dGg6IFZSTUV4cHJlc3Npb25PdmVycmlkZVR5cGUgPSAnbm9uZSc7XG5cbiAgcHJpdmF0ZSBfYmluZHM6IFZSTUV4cHJlc3Npb25CaW5kW10gPSBbXTtcblxuICBvdmVycmlkZSByZWFkb25seSB0eXBlOiBzdHJpbmcgfCAnVlJNRXhwcmVzc2lvbic7XG5cbiAgLyoqXG4gICAqIEEgdmFsdWUgcmVwcmVzZW50cyBob3cgbXVjaCBpdCBzaG91bGQgb3ZlcnJpZGUgYmxpbmsgZXhwcmVzc2lvbnMuXG4gICAqIGAwLjBgID09IG5vIG92ZXJyaWRlIGF0IGFsbCwgYDEuMGAgPT0gY29tcGxldGVseSBibG9jayB0aGUgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG92ZXJyaWRlQmxpbmtBbW91bnQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5vdmVycmlkZUJsaW5rID09PSAnYmxvY2snKSB7XG4gICAgICByZXR1cm4gMC4wIDwgdGhpcy5vdXRwdXRXZWlnaHQgPyAxLjAgOiAwLjA7XG4gICAgfSBlbHNlIGlmICh0aGlzLm92ZXJyaWRlQmxpbmsgPT09ICdibGVuZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm91dHB1dFdlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDAuMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSB2YWx1ZSByZXByZXNlbnRzIGhvdyBtdWNoIGl0IHNob3VsZCBvdmVycmlkZSBsb29rQXQgZXhwcmVzc2lvbnMuXG4gICAqIGAwLjBgID09IG5vIG92ZXJyaWRlIGF0IGFsbCwgYDEuMGAgPT0gY29tcGxldGVseSBibG9jayB0aGUgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG92ZXJyaWRlTG9va0F0QW1vdW50KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMub3ZlcnJpZGVMb29rQXQgPT09ICdibG9jaycpIHtcbiAgICAgIHJldHVybiAwLjAgPCB0aGlzLm91dHB1dFdlaWdodCA/IDEuMCA6IDAuMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3ZlcnJpZGVMb29rQXQgPT09ICdibGVuZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm91dHB1dFdlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDAuMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSB2YWx1ZSByZXByZXNlbnRzIGhvdyBtdWNoIGl0IHNob3VsZCBvdmVycmlkZSBtb3V0aCBleHByZXNzaW9ucy5cbiAgICogYDAuMGAgPT0gbm8gb3ZlcnJpZGUgYXQgYWxsLCBgMS4wYCA9PSBjb21wbGV0ZWx5IGJsb2NrIHRoZSBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVNb3V0aEFtb3VudCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLm92ZXJyaWRlTW91dGggPT09ICdibG9jaycpIHtcbiAgICAgIHJldHVybiAwLjAgPCB0aGlzLm91dHB1dFdlaWdodCA/IDEuMCA6IDAuMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3ZlcnJpZGVNb3V0aCA9PT0gJ2JsZW5kJykge1xuICAgICAgcmV0dXJuIHRoaXMub3V0cHV0V2VpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMC4wO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBvdXRwdXQgd2VpZ2h0IG9mIHRoaXMgZXhwcmVzc2lvbiwgY29uc2lkZXJpbmcgdGhlIHtAbGluayBpc0JpbmFyeX0uXG4gICAqL1xuICBwdWJsaWMgZ2V0IG91dHB1dFdlaWdodCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmlzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gdGhpcy53ZWlnaHQgPiAwLjUgPyAxLjAgOiAwLjA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbk5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm5hbWUgPSBgVlJNRXhwcmVzc2lvbl8ke2V4cHJlc3Npb25OYW1lfWA7XG4gICAgdGhpcy5leHByZXNzaW9uTmFtZSA9IGV4cHJlc3Npb25OYW1lO1xuXG4gICAgLy8gdHJhdmVyc2UgXHU2NjQyXHUzMDZFXHU2NTUxXHU2RTA4XHU2MjRCXHU2QkI1XHUzMDY4XHUzMDU3XHUzMDY2IE9iamVjdDNEIFx1MzA2N1x1MzA2Rlx1MzA2QVx1MzA0NFx1MzA1M1x1MzA2OFx1MzA5Mlx1NjYwRVx1NzkzQVx1MzA1N1x1MzA2Nlx1MzA0QVx1MzA0RlxuICAgIHRoaXMudHlwZSA9ICdWUk1FeHByZXNzaW9uJztcblxuICAgIC8vIFx1ODg2OFx1NzkzQVx1NzZFRVx1NzY4NFx1MzA2RVx1MzBBQVx1MzBENlx1MzBCOFx1MzBBN1x1MzBBRlx1MzBDOFx1MzA2N1x1MzA2Rlx1MzA2QVx1MzA0NFx1MzA2RVx1MzA2N1x1MzAwMVx1OENBMFx1ODM3N1x1OEVGRFx1NkUxQlx1MzA2RVx1MzA1Rlx1MzA4MVx1MzA2QiB2aXNpYmxlIFx1MzA5MiBmYWxzZSBcdTMwNkJcdTMwNTdcdTMwNjZcdTMwNEFcdTMwNEZcdTMwMDJcbiAgICAvLyBcdTMwNTNcdTMwOENcdTMwNkJcdTMwODhcdTMwOEFcdTMwMDFcdTMwNTNcdTMwNkVcdTMwQTRcdTMwRjNcdTMwQjlcdTMwQkZcdTMwRjNcdTMwQjlcdTMwNkJcdTVCRkVcdTMwNTlcdTMwOEJcdTZCQ0VcdTMwRDVcdTMwRUNcdTMwRkNcdTMwRTBcdTMwNkUgbWF0cml4IFx1ODFFQVx1NTJENVx1OEEwOFx1N0I5N1x1MzA5Mlx1NzcwMVx1NzU2NVx1MzA2N1x1MzA0RFx1MzA4Qlx1MzAwMlxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGFkZEJpbmQoYmluZDogVlJNRXhwcmVzc2lvbkJpbmQpOiB2b2lkIHtcbiAgICB0aGlzLl9iaW5kcy5wdXNoKGJpbmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHdlaWdodCB0byBldmVyeSBhc3NpZ25lZCBibGVuZCBzaGFwZXMuXG4gICAqIFNob3VsZCBiZSBjYWxsZWQgZXZlcnkgZnJhbWUuXG4gICAqL1xuICBwdWJsaWMgYXBwbHlXZWlnaHQob3B0aW9ucz86IHtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmFsdWUgdG8gaXRzIHdlaWdodCB0byBhcHBseS5cbiAgICAgKiBJbnRlbmRlZCB0byBiZSB1c2VkIGZvciBvdmVycmlkaW5nIGFuIGV4cHJlc3Npb24gd2VpZ2h0IGJ5IGFub3RoZXIgZXhwcmVzc2lvbi5cbiAgICAgKiBTZWUgYWxzbzoge0BsaW5rIG92ZXJyaWRlQmxpbmt9LCB7QGxpbmsgb3ZlcnJpZGVMb29rQXR9LCB7QGxpbmsgb3ZlcnJpZGVNb3V0aH1cbiAgICAgKi9cbiAgICBtdWx0aXBsaWVyPzogbnVtYmVyO1xuICB9KTogdm9pZCB7XG4gICAgbGV0IGFjdHVhbFdlaWdodCA9IHRoaXMub3V0cHV0V2VpZ2h0O1xuICAgIGFjdHVhbFdlaWdodCAqPSBvcHRpb25zPy5tdWx0aXBsaWVyID8/IDEuMDtcblxuICAgIC8vIGlmIHRoZSBleHByZXNzaW9uIGlzIGJpbmFyeSwgdGhlIG92ZXJyaWRlIHZhbHVlIG11c3QgYmUgYWxzbyB0cmVhdGVkIGFzIGJpbmFyeVxuICAgIGlmICh0aGlzLmlzQmluYXJ5ICYmIGFjdHVhbFdlaWdodCA8IDEuMCkge1xuICAgICAgYWN0dWFsV2VpZ2h0ID0gMC4wO1xuICAgIH1cblxuICAgIHRoaXMuX2JpbmRzLmZvckVhY2goKGJpbmQpID0+IGJpbmQuYXBwbHlXZWlnaHQoYWN0dWFsV2VpZ2h0KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgcHJldmlvdXNseSBhc3NpZ25lZCBibGVuZCBzaGFwZXMuXG4gICAqL1xuICBwdWJsaWMgY2xlYXJBcHBsaWVkV2VpZ2h0KCk6IHZvaWQge1xuICAgIHRoaXMuX2JpbmRzLmZvckVhY2goKGJpbmQpID0+IGJpbmQuY2xlYXJBcHBsaWVkV2VpZ2h0KCkpO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBWMFZSTSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtLTAuMCc7XG5pbXBvcnQgdHlwZSAqIGFzIFYxVlJNU2NoZW1hIGZyb20gJ0BwaXhpdi90eXBlcy12cm1jLXZybS0xLjAnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGUgfSBmcm9tICcuLi91dGlscy9nbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZSc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uJztcbmltcG9ydCB7IFZSTUV4cHJlc3Npb25NYW5hZ2VyIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB2MEV4cHJlc3Npb25NYXRlcmlhbENvbG9yTWFwIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JCaW5kIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbk1vcnBoVGFyZ2V0QmluZCB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbk1vcnBoVGFyZ2V0QmluZCc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSB9IGZyb20gJy4vVlJNRXhwcmVzc2lvblByZXNldE5hbWUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uVGV4dHVyZVRyYW5zZm9ybUJpbmQnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIHNwZWMgdmVyc2lvbnMgaXQgcmVjb2duaXplcy5cbiAqL1xuY29uc3QgUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyA9IG5ldyBTZXQoWycxLjAnLCAnMS4wLWJldGEnXSk7XG5cbi8qKlxuICogQSBwbHVnaW4gb2YgR0xURkxvYWRlciB0aGF0IGltcG9ydHMgYSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9IGZyb20gYSBWUk0gZXh0ZW5zaW9uIG9mIGEgR0xURi5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB2MHYxUHJlc2V0TmFtZU1hcDogeyBbdjBOYW1lIGluIFYwVlJNLkJsZW5kU2hhcGVQcmVzZXROYW1lXT86IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIH0gPSB7XG4gICAgYTogJ2FhJyxcbiAgICBlOiAnZWUnLFxuICAgIGk6ICdpaCcsXG4gICAgbzogJ29oJyxcbiAgICB1OiAnb3UnLFxuICAgIGJsaW5rOiAnYmxpbmsnLFxuICAgIGpveTogJ2hhcHB5JyxcbiAgICBhbmdyeTogJ2FuZ3J5JyxcbiAgICBzb3Jyb3c6ICdzYWQnLFxuICAgIGZ1bjogJ3JlbGF4ZWQnLFxuICAgIGxvb2t1cDogJ2xvb2tVcCcsXG4gICAgbG9va2Rvd246ICdsb29rRG93bicsXG4gICAgbG9va2xlZnQ6ICdsb29rTGVmdCcsXG4gICAgbG9va3JpZ2h0OiAnbG9va1JpZ2h0JyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gICAgYmxpbmtfbDogJ2JsaW5rTGVmdCcsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICAgIGJsaW5rX3I6ICdibGlua1JpZ2h0JyxcbiAgICBuZXV0cmFsOiAnbmV1dHJhbCcsXG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IHBhcnNlcjogR0xURlBhcnNlcjtcblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAvLyBXZSBzaG91bGQgdXNlIHRoZSBleHRlbnNpb24gbmFtZSBpbnN0ZWFkIGJ1dCB3ZSBoYXZlIG11bHRpcGxlIHBsdWdpbnMgZm9yIGFuIGV4dGVuc2lvbi4uLlxuICAgIHJldHVybiAnVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbic7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyc2VyOiBHTFRGUGFyc2VyKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBnbHRmLnVzZXJEYXRhLnZybUV4cHJlc3Npb25NYW5hZ2VyID0gYXdhaXQgdGhpcy5faW1wb3J0KGdsdGYpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0gZnJvbSBhIFZSTS5cbiAgICpcbiAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9pbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNRXhwcmVzc2lvbk1hbmFnZXIgfCBudWxsPiB7XG4gICAgY29uc3QgdjFSZXN1bHQgPSBhd2FpdCB0aGlzLl92MUltcG9ydChnbHRmKTtcbiAgICBpZiAodjFSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MVJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCB2MFJlc3VsdCA9IGF3YWl0IHRoaXMuX3YwSW1wb3J0KGdsdGYpO1xuICAgIGlmICh2MFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHYwUmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjFJbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNRXhwcmVzc2lvbk1hbmFnZXIgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IGlzVlJNVXNlZCA9IGpzb24uZXh0ZW5zaW9uc1VzZWQ/LmluZGV4T2YoJ1ZSTUNfdnJtJykgIT09IC0xO1xuICAgIGlmICghaXNWUk1Vc2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbnNpb24gPSBqc29uLmV4dGVuc2lvbnM/LlsnVlJNQ192cm0nXSBhcyBWMVZSTVNjaGVtYS5WUk1DVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVjVmVyc2lvbiA9IGV4dGVuc2lvbi5zcGVjVmVyc2lvbjtcbiAgICBpZiAoIVBPU1NJQkxFX1NQRUNfVkVSU0lPTlMuaGFzKHNwZWNWZXJzaW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiBVbmtub3duIFZSTUNfdnJtIHNwZWNWZXJzaW9uIFwiJHtzcGVjVmVyc2lvbn1cImApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hRXhwcmVzc2lvbnMgPSBleHRlbnNpb24uZXhwcmVzc2lvbnM7XG4gICAgaWYgKCFzY2hlbWFFeHByZXNzaW9ucykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gbGlzdCBleHByZXNzaW9uc1xuICAgIGNvbnN0IHByZXNldE5hbWVTZXQgPSBuZXcgU2V0PHN0cmluZz4oT2JqZWN0LnZhbHVlcyhWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSkpO1xuICAgIGNvbnN0IG5hbWVTY2hlbWFFeHByZXNzaW9uTWFwID0gbmV3IE1hcDxzdHJpbmcsIFYxVlJNU2NoZW1hLkV4cHJlc3Npb24+KCk7XG5cbiAgICBpZiAoc2NoZW1hRXhwcmVzc2lvbnMucHJlc2V0ICE9IG51bGwpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYUV4cHJlc3Npb25zLnByZXNldCkuZm9yRWFjaCgoW25hbWUsIHNjaGVtYUV4cHJlc3Npb25dKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWFFeHByZXNzaW9uID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gdHlwZXNjcmlwdFxuXG4gICAgICAgIGlmICghcHJlc2V0TmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46IFVua25vd24gcHJlc2V0IG5hbWUgXCIke25hbWV9XCIgZGV0ZWN0ZWQuIElnbm9yaW5nIHRoZSBleHByZXNzaW9uYCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZVNjaGVtYUV4cHJlc3Npb25NYXAuc2V0KG5hbWUsIHNjaGVtYUV4cHJlc3Npb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUV4cHJlc3Npb25zLmN1c3RvbSAhPSBudWxsKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhzY2hlbWFFeHByZXNzaW9ucy5jdXN0b20pLmZvckVhY2goKFtuYW1lLCBzY2hlbWFFeHByZXNzaW9uXSkgPT4ge1xuICAgICAgICBpZiAocHJlc2V0TmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogQ3VzdG9tIGV4cHJlc3Npb24gY2Fubm90IGhhdmUgcHJlc2V0IG5hbWUgXCIke25hbWV9XCIuIElnbm9yaW5nIHRoZSBleHByZXNzaW9uYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWVTY2hlbWFFeHByZXNzaW9uTWFwLnNldChuYW1lLCBzY2hlbWFFeHByZXNzaW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHByZXBhcmUgbWFuYWdlclxuICAgIGNvbnN0IG1hbmFnZXIgPSBuZXcgVlJNRXhwcmVzc2lvbk1hbmFnZXIoKTtcblxuICAgIC8vIGxvYWQgZXhwcmVzc2lvbnNcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIEFycmF5LmZyb20obmFtZVNjaGVtYUV4cHJlc3Npb25NYXAuZW50cmllcygpKS5tYXAoYXN5bmMgKFtuYW1lLCBzY2hlbWFFeHByZXNzaW9uXSkgPT4ge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gbmV3IFZSTUV4cHJlc3Npb24obmFtZSk7XG4gICAgICAgIGdsdGYuc2NlbmUuYWRkKGV4cHJlc3Npb24pO1xuXG4gICAgICAgIGV4cHJlc3Npb24uaXNCaW5hcnkgPSBzY2hlbWFFeHByZXNzaW9uLmlzQmluYXJ5ID8/IGZhbHNlO1xuICAgICAgICBleHByZXNzaW9uLm92ZXJyaWRlQmxpbmsgPSBzY2hlbWFFeHByZXNzaW9uLm92ZXJyaWRlQmxpbmsgPz8gJ25vbmUnO1xuICAgICAgICBleHByZXNzaW9uLm92ZXJyaWRlTG9va0F0ID0gc2NoZW1hRXhwcmVzc2lvbi5vdmVycmlkZUxvb2tBdCA/PyAnbm9uZSc7XG4gICAgICAgIGV4cHJlc3Npb24ub3ZlcnJpZGVNb3V0aCA9IHNjaGVtYUV4cHJlc3Npb24ub3ZlcnJpZGVNb3V0aCA/PyAnbm9uZSc7XG5cbiAgICAgICAgc2NoZW1hRXhwcmVzc2lvbi5tb3JwaFRhcmdldEJpbmRzPy5mb3JFYWNoKGFzeW5jIChiaW5kKSA9PiB7XG4gICAgICAgICAgaWYgKGJpbmQubm9kZSA9PT0gdW5kZWZpbmVkIHx8IGJpbmQuaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZXMgPSAoYXdhaXQgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGUoZ2x0ZiwgYmluZC5ub2RlKSkhO1xuICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0SW5kZXggPSBiaW5kLmluZGV4O1xuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIG1lc2ggaGFzIHRoZSB0YXJnZXQgbW9ycGggdGFyZ2V0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXByaW1pdGl2ZXMuZXZlcnkoXG4gICAgICAgICAgICAgIChwcmltaXRpdmUpID0+XG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShwcmltaXRpdmUubW9ycGhUYXJnZXRJbmZsdWVuY2VzKSAmJlxuICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0SW5kZXggPCBwcmltaXRpdmUubW9ycGhUYXJnZXRJbmZsdWVuY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46ICR7c2NoZW1hRXhwcmVzc2lvbi5uYW1lfSBhdHRlbXB0cyB0byBpbmRleCBtb3JwaCAjJHttb3JwaFRhcmdldEluZGV4fSBidXQgbm90IGZvdW5kLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV4cHJlc3Npb24uYWRkQmluZChcbiAgICAgICAgICAgIG5ldyBWUk1FeHByZXNzaW9uTW9ycGhUYXJnZXRCaW5kKHtcbiAgICAgICAgICAgICAgcHJpbWl0aXZlcyxcbiAgICAgICAgICAgICAgaW5kZXg6IG1vcnBoVGFyZ2V0SW5kZXgsXG4gICAgICAgICAgICAgIHdlaWdodDogYmluZC53ZWlnaHQgPz8gMS4wLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNjaGVtYUV4cHJlc3Npb24ubWF0ZXJpYWxDb2xvckJpbmRzIHx8IHNjaGVtYUV4cHJlc3Npb24udGV4dHVyZVRyYW5zZm9ybUJpbmRzKSB7XG4gICAgICAgICAgLy8gbGlzdCB1cCBldmVyeSBtYXRlcmlhbCBpbiBgZ2x0Zi5zY2VuZWBcbiAgICAgICAgICBjb25zdCBnbHRmTWF0ZXJpYWxzOiBUSFJFRS5NYXRlcmlhbFtdID0gW107XG4gICAgICAgICAgZ2x0Zi5zY2VuZS50cmF2ZXJzZSgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IChvYmplY3QgYXMgYW55KS5tYXRlcmlhbCBhcyBUSFJFRS5NYXRlcmlhbCB8IFRIUkVFLk1hdGVyaWFsW10gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAobWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0ZXJpYWwpKSB7XG4gICAgICAgICAgICAgICAgZ2x0Zk1hdGVyaWFscy5wdXNoKC4uLm1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbHRmTWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzY2hlbWFFeHByZXNzaW9uLm1hdGVyaWFsQ29sb3JCaW5kcz8uZm9yRWFjaChhc3luYyAoYmluZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gZ2x0Zk1hdGVyaWFscy5maWx0ZXIoKG1hdGVyaWFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KG1hdGVyaWFsKT8ubWF0ZXJpYWxzO1xuICAgICAgICAgICAgICByZXR1cm4gYmluZC5tYXRlcmlhbCA9PT0gbWF0ZXJpYWxJbmRleDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IHtcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbi5hZGRCaW5kKFxuICAgICAgICAgICAgICAgIG5ldyBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQoe1xuICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBiaW5kLnR5cGUsXG4gICAgICAgICAgICAgICAgICB0YXJnZXRWYWx1ZTogbmV3IFRIUkVFLkNvbG9yKCkuZnJvbUFycmF5KGJpbmQudGFyZ2V0VmFsdWUpLFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0QWxwaGE6IGJpbmQudGFyZ2V0VmFsdWVbM10sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNjaGVtYUV4cHJlc3Npb24udGV4dHVyZVRyYW5zZm9ybUJpbmRzPy5mb3JFYWNoKGFzeW5jIChiaW5kKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBnbHRmTWF0ZXJpYWxzLmZpbHRlcigobWF0ZXJpYWwpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9IHRoaXMucGFyc2VyLmFzc29jaWF0aW9ucy5nZXQobWF0ZXJpYWwpPy5tYXRlcmlhbHM7XG4gICAgICAgICAgICAgIHJldHVybiBiaW5kLm1hdGVyaWFsID09PSBtYXRlcmlhbEluZGV4O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKChtYXRlcmlhbCkgPT4ge1xuICAgICAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQoXG4gICAgICAgICAgICAgICAgbmV3IFZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZCh7XG4gICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgIG9mZnNldDogbmV3IFRIUkVFLlZlY3RvcjIoKS5mcm9tQXJyYXkoYmluZC5vZmZzZXQgPz8gWzAuMCwgMC4wXSksXG4gICAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFRIUkVFLlZlY3RvcjIoKS5mcm9tQXJyYXkoYmluZC5zY2FsZSA/PyBbMS4wLCAxLjBdKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFuYWdlci5yZWdpc3RlckV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MEltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1FeHByZXNzaW9uTWFuYWdlciB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgdnJtRXh0ID0ganNvbi5leHRlbnNpb25zPy5WUk0gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdnJtRXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFCbGVuZFNoYXBlID0gdnJtRXh0LmJsZW5kU2hhcGVNYXN0ZXI7XG4gICAgaWYgKCFzY2hlbWFCbGVuZFNoYXBlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtYW5hZ2VyID0gbmV3IFZSTUV4cHJlc3Npb25NYW5hZ2VyKCk7XG5cbiAgICBjb25zdCBzY2hlbWFCbGVuZFNoYXBlR3JvdXBzID0gc2NoZW1hQmxlbmRTaGFwZS5ibGVuZFNoYXBlR3JvdXBzO1xuICAgIGlmICghc2NoZW1hQmxlbmRTaGFwZUdyb3Vwcykge1xuICAgICAgcmV0dXJuIG1hbmFnZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYmxlbmRTaGFwZU5hbWVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgc2NoZW1hQmxlbmRTaGFwZUdyb3Vwcy5tYXAoYXN5bmMgKHNjaGVtYUdyb3VwKSA9PiB7XG4gICAgICAgIGNvbnN0IHYwUHJlc2V0TmFtZSA9IHNjaGVtYUdyb3VwLnByZXNldE5hbWU7XG4gICAgICAgIGNvbnN0IHYxUHJlc2V0TmFtZSA9XG4gICAgICAgICAgKHYwUHJlc2V0TmFtZSAhPSBudWxsICYmIFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW4udjB2MVByZXNldE5hbWVNYXBbdjBQcmVzZXROYW1lXSkgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgbmFtZSA9IHYxUHJlc2V0TmFtZSA/PyBzY2hlbWFHcm91cC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1ZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46IE9uZSBvZiBjdXN0b20gZXhwcmVzc2lvbnMgaGFzIG5vIG5hbWUuIElnbm9yaW5nIHRoZSBleHByZXNzaW9uJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZHVwbGljYXRpb24gY2hlY2tcbiAgICAgICAgaWYgKGJsZW5kU2hhcGVOYW1lU2V0LmhhcyhuYW1lKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiBBbiBleHByZXNzaW9uIHByZXNldCAke3YwUHJlc2V0TmFtZX0gaGFzIGR1cGxpY2F0ZWQgZW50cmllcy4gSWdub3JpbmcgdGhlIGV4cHJlc3Npb25gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYmxlbmRTaGFwZU5hbWVTZXQuYWRkKG5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgVlJNRXhwcmVzc2lvbihuYW1lKTtcbiAgICAgICAgZ2x0Zi5zY2VuZS5hZGQoZXhwcmVzc2lvbik7XG5cbiAgICAgICAgZXhwcmVzc2lvbi5pc0JpbmFyeSA9IHNjaGVtYUdyb3VwLmlzQmluYXJ5ID8/IGZhbHNlO1xuICAgICAgICAvLyB2MCBkb2Vzbid0IGhhdmUgaWdub3JlIHByb3BlcnRpZXNcblxuICAgICAgICAvLyBCaW5kIG1vcnBoVGFyZ2V0XG4gICAgICAgIGlmIChzY2hlbWFHcm91cC5iaW5kcykge1xuICAgICAgICAgIHNjaGVtYUdyb3VwLmJpbmRzLmZvckVhY2goYXN5bmMgKGJpbmQpID0+IHtcbiAgICAgICAgICAgIGlmIChiaW5kLm1lc2ggPT09IHVuZGVmaW5lZCB8fCBiaW5kLmluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBub2Rlc1VzaW5nTWVzaDogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgICAgIGpzb24ubm9kZXM/LmZvckVhY2goKG5vZGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubWVzaCA9PT0gYmluZC5tZXNoKSB7XG4gICAgICAgICAgICAgICAgbm9kZXNVc2luZ01lc2gucHVzaChpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0SW5kZXggPSBiaW5kLmluZGV4O1xuXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgbm9kZXNVc2luZ01lc2gubWFwKGFzeW5jIChub2RlSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmltaXRpdmVzID0gKGF3YWl0IGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlKGdsdGYsIG5vZGVJbmRleCkpITtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBtZXNoIGhhcyB0aGUgdGFyZ2V0IG1vcnBoIHRhcmdldFxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICFwcmltaXRpdmVzLmV2ZXJ5KFxuICAgICAgICAgICAgICAgICAgICAocHJpbWl0aXZlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJpbWl0aXZlLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcykgJiZcbiAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldEluZGV4IDwgcHJpbWl0aXZlLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiAke3NjaGVtYUdyb3VwLm5hbWV9IGF0dGVtcHRzIHRvIGluZGV4ICR7bW9ycGhUYXJnZXRJbmRleH10aCBtb3JwaCBidXQgbm90IGZvdW5kLmAsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb24uYWRkQmluZChcbiAgICAgICAgICAgICAgICAgIG5ldyBWUk1FeHByZXNzaW9uTW9ycGhUYXJnZXRCaW5kKHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlcyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG1vcnBoVGFyZ2V0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogMC4wMSAqIChiaW5kLndlaWdodCA/PyAxMDApLCAvLyBuYXJyb3dpbmcgdGhlIHJhbmdlIGZyb20gWyAwLjAgLSAxMDAuMCBdIHRvIFsgMC4wIC0gMS4wIF1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJpbmQgTWF0ZXJpYWxDb2xvciBhbmQgVGV4dHVyZVRyYW5zZm9ybVxuICAgICAgICBjb25zdCBtYXRlcmlhbFZhbHVlcyA9IHNjaGVtYUdyb3VwLm1hdGVyaWFsVmFsdWVzO1xuICAgICAgICBpZiAobWF0ZXJpYWxWYWx1ZXMgJiYgbWF0ZXJpYWxWYWx1ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgbWF0ZXJpYWxWYWx1ZXMuZm9yRWFjaCgobWF0ZXJpYWxWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsTmFtZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWUucHJvcGVydHlOYW1lID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgbWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFx1MzBBMlx1MzBEMFx1MzBCRlx1MzBGQ1x1MzA2RVx1MzBBQVx1MzBENlx1MzBCOFx1MzBBN1x1MzBBRlx1MzBDOFx1MzA2Qlx1OEEyRFx1NUI5QVx1MzA1NVx1MzA4Q1x1MzA2Nlx1MzA0NFx1MzA4Qlx1MzBERVx1MzBDNlx1MzBFQVx1MzBBMlx1MzBFQlx1MzA2RVx1NTE4NVx1MzA0Qlx1MzA4OVxuICAgICAgICAgICAgICogbWF0ZXJpYWxWYWx1ZVx1MzA2N1x1NjMwN1x1NUI5QVx1MzA1NVx1MzA4Q1x1MzA2Nlx1MzA0NFx1MzA4Qlx1MzBERVx1MzBDNlx1MzBFQVx1MzBBMlx1MzBFQlx1MzA5Mlx1OTZDNlx1MzA4MVx1MzA4Qlx1MzAwMlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIFx1NzI3OVx1NUI5QVx1MzA2Qlx1MzA2Rlx1NTQwRFx1NTI0RFx1MzA5Mlx1NEY3Rlx1NzUyOFx1MzA1OVx1MzA4Qlx1MzAwMlxuICAgICAgICAgICAgICogXHUzMEEyXHUzMEE2XHUzMEM4XHUzMEU5XHUzMEE0XHUzMEYzXHU2M0NGXHU3NTNCXHU3NTI4XHUzMDZFXHUzMERFXHUzMEM2XHUzMEVBXHUzMEEyXHUzMEVCXHUzMDgyXHU1NDBDXHU2NjQyXHUzMDZCXHU5NkM2XHUzMDgxXHUzMDhCXHUzMDAyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsczogVEhSRUUuTWF0ZXJpYWxbXSA9IFtdO1xuICAgICAgICAgICAgZ2x0Zi5zY2VuZS50cmF2ZXJzZSgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGlmICgob2JqZWN0IGFzIGFueSkubWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWxbXSB8IFRIUkVFLk1hdGVyaWFsID0gKG9iamVjdCBhcyBhbnkpLm1hdGVyaWFsO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hdGVyaWFsKSkge1xuICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIC4uLm1hdGVyaWFsLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAobXRsKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgKG10bC5uYW1lID09PSBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsTmFtZSEgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXRsLm5hbWUgPT09IG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxOYW1lISArICcgKE91dGxpbmUpJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFscy5pbmRleE9mKG10bCkgPT09IC0xLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGVyaWFsLm5hbWUgPT09IG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxOYW1lICYmIG1hdGVyaWFscy5pbmRleE9mKG1hdGVyaWFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIG1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbFByb3BlcnR5TmFtZSA9IG1hdGVyaWFsVmFsdWUucHJvcGVydHlOYW1lO1xuICAgICAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XG4gICAgICAgICAgICAgIC8vIFRleHR1cmVUcmFuc2Zvcm1CaW5kXG4gICAgICAgICAgICAgIGlmIChtYXRlcmlhbFByb3BlcnR5TmFtZSA9PT0gJ19NYWluVGV4X1NUJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IFRIUkVFLlZlY3RvcjIobWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSFbMF0sIG1hdGVyaWFsVmFsdWUudGFyZ2V0VmFsdWUhWzFdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMihtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlIVsyXSwgbWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSFbM10pO1xuXG4gICAgICAgICAgICAgICAgb2Zmc2V0LnkgPSAxLjAgLSBvZmZzZXQueSAtIHNjYWxlLnk7XG5cbiAgICAgICAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQoXG4gICAgICAgICAgICAgICAgICBuZXcgVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kKHtcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gTWF0ZXJpYWxDb2xvckJpbmRcbiAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxDb2xvclR5cGUgPSB2MEV4cHJlc3Npb25NYXRlcmlhbENvbG9yTWFwW21hdGVyaWFsUHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsQ29sb3JUeXBlKSB7XG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbi5hZGRCaW5kKFxuICAgICAgICAgICAgICAgICAgbmV3IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCh7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBtYXRlcmlhbENvbG9yVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmFsdWU6IG5ldyBUSFJFRS5Db2xvcigpLmZyb21BcnJheShtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlISksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEFscGhhOiBtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlIVszXSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4obWF0ZXJpYWxQcm9wZXJ0eU5hbWUgKyAnIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFuYWdlci5yZWdpc3RlckV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgR0xURiB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuXG5mdW5jdGlvbiBleHRyYWN0UHJpbWl0aXZlc0ludGVybmFsKGdsdGY6IEdMVEYsIG5vZGVJbmRleDogbnVtYmVyLCBub2RlOiBUSFJFRS5PYmplY3QzRCk6IFRIUkVFLk1lc2hbXSB8IG51bGwge1xuICBjb25zdCBqc29uID0gZ2x0Zi5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gIC8qKlxuICAgKiBMZXQncyBsaXN0IHVwIGV2ZXJ5IHBvc3NpYmxlIHBhdHRlcm5zIHRoYXQgcGFyc2VkIGdsdGYgbm9kZXMgd2l0aCBhIG1lc2ggY2FuIGhhdmUsLCxcbiAgICpcbiAgICogXCIqXCIgaW5kaWNhdGVzIHRoYXQgdGhvc2UgbWVzaGVzIHNob3VsZCBiZSBsaXN0ZWQgdXAgdXNpbmcgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiAjIyMgQSBub2RlIHdpdGggYSAobWVzaCwgYSBzaWdubGUgcHJpbWl0aXZlKVxuICAgKlxuICAgKiAtIGBUSFJFRS5NZXNoYDogVGhlIG9ubHkgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICpcbiAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpXG4gICAqXG4gICAqIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgdGhlIG1lc2hcbiAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgKlxuICAgKiAjIyMgQSBub2RlIHdpdGggYSAobWVzaCwgbXVsdGlwbGUgcHJpbWl0aXZlcykgQU5EIChhIGNoaWxkIHdpdGggYSBtZXNoLCBhIHNpbmdsZSBwcmltaXRpdmUpXG4gICAqXG4gICAqIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgdGhlIG1lc2hcbiAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiBhIE1FU0ggT0YgVEhFIENISUxEXG4gICAqXG4gICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKSBBTkQgKGEgY2hpbGQgd2l0aCBhIG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpXG4gICAqXG4gICAqIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgdGhlIG1lc2hcbiAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgKiAgIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgYSBNRVNIIE9GIFRIRSBDSElMRFxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoIG9mIHRoZSBjaGlsZFxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoIG9mIHRoZSBjaGlsZCAoMilcbiAgICpcbiAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpIEJVVCB0aGUgbm9kZSBpcyBhIGJvbmVcbiAgICpcbiAgICogLSBgVEhSRUUuQm9uZWA6IFRoZSByb290IG9mIHRoZSBub2RlLCBhcyBhIGJvbmVcbiAgICogICAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIHRoZSBtZXNoXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICgyKSAqXG4gICAqXG4gICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKSBBTkQgKGEgY2hpbGQgd2l0aCBhIG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpIEJVVCB0aGUgbm9kZSBpcyBhIGJvbmVcbiAgICpcbiAgICogLSBgVEhSRUUuQm9uZWA6IFRoZSByb290IG9mIHRoZSBub2RlLCBhcyBhIGJvbmVcbiAgICogICAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIHRoZSBtZXNoXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICgyKSAqXG4gICAqICAgLSBgVEhSRUUuR3JvdXBgOiBUaGUgcm9vdCBvZiBhIE1FU0ggT0YgVEhFIENISUxEXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggb2YgdGhlIGNoaWxkXG4gICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggb2YgdGhlIGNoaWxkICgyKVxuICAgKlxuICAgKiAuLi5JIHdpbGwgdGFrZSBhIHN0cmF0ZWd5IHRoYXQgdHJhdmVyc2VzIHRoZSByb290IG9mIHRoZSBub2RlIGFuZCB0YWtlIGZpcnN0IChwcmltaXRpdmVDb3VudCkgbWVzaGVzLlxuICAgKi9cblxuICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgbm9kZSBoYXMgYSBtZXNoXG4gIGNvbnN0IHNjaGVtYU5vZGUgPSBqc29uLm5vZGVzPy5bbm9kZUluZGV4XTtcbiAgaWYgKHNjaGVtYU5vZGUgPT0gbnVsbCkge1xuICAgIGNvbnNvbGUud2FybihgZXh0cmFjdFByaW1pdGl2ZXNJbnRlcm5hbDogQXR0ZW1wdCB0byB1c2Ugbm9kZXNbJHtub2RlSW5kZXh9XSBvZiBnbFRGIGJ1dCB0aGUgbm9kZSBkb2Vzbid0IGV4aXN0YCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBtZXNoSW5kZXggPSBzY2hlbWFOb2RlLm1lc2g7XG4gIGlmIChtZXNoSW5kZXggPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gSG93IG1hbnkgcHJpbWl0aXZlcyB0aGUgbWVzaCBoYXM/XG4gIGNvbnN0IHNjaGVtYU1lc2ggPSBqc29uLm1lc2hlcz8uW21lc2hJbmRleF07XG4gIGlmIChzY2hlbWFNZXNoID09IG51bGwpIHtcbiAgICBjb25zb2xlLndhcm4oYGV4dHJhY3RQcmltaXRpdmVzSW50ZXJuYWw6IEF0dGVtcHQgdG8gdXNlIG1lc2hlc1ske21lc2hJbmRleH1dIG9mIGdsVEYgYnV0IHRoZSBtZXNoIGRvZXNuJ3QgZXhpc3RgKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHByaW1pdGl2ZUNvdW50ID0gc2NoZW1hTWVzaC5wcmltaXRpdmVzLmxlbmd0aDtcblxuICAvLyBUcmF2ZXJzZSB0aGUgbm9kZSBhbmQgdGFrZSBmaXJzdCAocHJpbWl0aXZlQ291bnQpIG1lc2hlc1xuICBjb25zdCBwcmltaXRpdmVzOiBUSFJFRS5NZXNoW10gPSBbXTtcbiAgbm9kZS50cmF2ZXJzZSgob2JqZWN0KSA9PiB7XG4gICAgaWYgKHByaW1pdGl2ZXMubGVuZ3RoIDwgcHJpbWl0aXZlQ291bnQpIHtcbiAgICAgIGlmICgob2JqZWN0IGFzIGFueSkuaXNNZXNoKSB7XG4gICAgICAgIHByaW1pdGl2ZXMucHVzaChvYmplY3QgYXMgVEhSRUUuTWVzaCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJpbWl0aXZlcztcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHByaW1pdGl2ZXMgKCBgVEhSRUUuTWVzaFtdYCApIG9mIGEgbm9kZSBmcm9tIGEgbG9hZGVkIEdMVEYuXG4gKiBUaGUgbWFpbiBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gZGlzdGluZ3Vpc2ggcHJpbWl0aXZlcyBhbmQgY2hpbGRyZW4gZnJvbSBhIG5vZGUgdGhhdCBoYXMgYm90aCBtZXNoZXMgYW5kIGNoaWxkcmVuLlxuICpcbiAqIEl0IHV0aWxpemVzIHRoZSBiZWhhdmlvciB0aGF0IEdMVEZMb2FkZXIgYWRkcyBtZXNoIHByaW1pdGl2ZXMgdG8gdGhlIG5vZGUgb2JqZWN0ICggYFRIUkVFLkdyb3VwYCApIGZpcnN0IHRoZW4gYWRkcyBpdHMgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIGdsdGYgQSBHTFRGIG9iamVjdCB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcbiAqIEBwYXJhbSBub2RlSW5kZXggVGhlIGluZGV4IG9mIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZShnbHRmOiBHTFRGLCBub2RlSW5kZXg6IG51bWJlcik6IFByb21pc2U8VEhSRUUuTWVzaFtdIHwgbnVsbD4ge1xuICBjb25zdCBub2RlOiBUSFJFRS5PYmplY3QzRCA9IGF3YWl0IGdsdGYucGFyc2VyLmdldERlcGVuZGVuY3koJ25vZGUnLCBub2RlSW5kZXgpO1xuICByZXR1cm4gZXh0cmFjdFByaW1pdGl2ZXNJbnRlcm5hbChnbHRmLCBub2RlSW5kZXgsIG5vZGUpO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgcHJpbWl0aXZlcyAoIGBUSFJFRS5NZXNoW11gICkgb2Ygbm9kZXMgZnJvbSBhIGxvYWRlZCBHTFRGLlxuICogU2VlIHtAbGluayBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZX0gZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBJdCByZXR1cm5zIGEgbWFwIGZyb20gbm9kZSBpbmRleCB0byBleHRyYWN0aW9uIHJlc3VsdC5cbiAqIElmIGEgbm9kZSBkb2VzIG5vdCBoYXZlIGEgbWVzaCwgdGhlIGVudHJ5IGZvciB0aGUgbm9kZSB3aWxsIG5vdCBiZSBwdXQgaW4gdGhlIHJldHVybmluZyBtYXAuXG4gKlxuICogQHBhcmFtIGdsdGYgQSBHTFRGIG9iamVjdCB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlcyhnbHRmOiBHTFRGKTogUHJvbWlzZTxNYXA8bnVtYmVyLCBUSFJFRS5NZXNoW10+PiB7XG4gIGNvbnN0IG5vZGVzOiBUSFJFRS5PYmplY3QzRFtdID0gYXdhaXQgZ2x0Zi5wYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCdub2RlJyk7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXA8bnVtYmVyLCBUSFJFRS5NZXNoW10+KCk7XG5cbiAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBleHRyYWN0UHJpbWl0aXZlc0ludGVybmFsKGdsdGYsIGluZGV4LCBub2RlKTtcbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIG1hcC5zZXQoaW5kZXgsIHJlc3VsdCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWFwO1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG5leHBvcnQgY29uc3QgVlJNRXhwcmVzc2lvblByZXNldE5hbWUgPSB7XG4gIEFhOiAnYWEnLFxuICBJaDogJ2loJyxcbiAgT3U6ICdvdScsXG4gIEVlOiAnZWUnLFxuICBPaDogJ29oJyxcbiAgQmxpbms6ICdibGluaycsXG4gIEhhcHB5OiAnaGFwcHknLFxuICBBbmdyeTogJ2FuZ3J5JyxcbiAgU2FkOiAnc2FkJyxcbiAgUmVsYXhlZDogJ3JlbGF4ZWQnLFxuICBMb29rVXA6ICdsb29rVXAnLFxuICBTdXJwcmlzZWQ6ICdzdXJwcmlzZWQnLFxuICBMb29rRG93bjogJ2xvb2tEb3duJyxcbiAgTG9va0xlZnQ6ICdsb29rTGVmdCcsXG4gIExvb2tSaWdodDogJ2xvb2tSaWdodCcsXG4gIEJsaW5rTGVmdDogJ2JsaW5rTGVmdCcsXG4gIEJsaW5rUmlnaHQ6ICdibGlua1JpZ2h0JyxcbiAgTmV1dHJhbDogJ25ldXRyYWwnLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVlJNRXhwcmVzc2lvblByZXNldE5hbWUgPSAodHlwZW9mIFZSTUV4cHJlc3Npb25QcmVzZXROYW1lKVtrZXlvZiB0eXBlb2YgVlJNRXhwcmVzc2lvblByZXNldE5hbWVdO1xuIiwgIi8qKlxuICogQ2xhbXAgdGhlIGlucHV0IHZhbHVlIHdpdGhpbiBbMC4wIC0gMS4wXS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIGlucHV0IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXR1cmF0ZSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCAxLjApLCAwLjApO1xufVxuIiwgImltcG9ydCB7IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uUHJlc2V0TmFtZSc7XG5pbXBvcnQgeyBzYXR1cmF0ZSB9IGZyb20gJy4uL3V0aWxzL3NhdHVyYXRlJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbiB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbic7XG5cbmV4cG9ydCBjbGFzcyBWUk1FeHByZXNzaW9uTWFuYWdlciB7XG4gIC8qKlxuICAgKiBBIHNldCBvZiBuYW1lIG9yIHByZXNldCBuYW1lIG9mIGV4cHJlc3Npb25zIHRoYXQgd2lsbCBiZSBvdmVycmlkZGVuIGJ5IHtAbGluayBWUk1FeHByZXNzaW9uLm92ZXJyaWRlQmxpbmt9LlxuICAgKi9cbiAgcHVibGljIGJsaW5rRXhwcmVzc2lvbk5hbWVzID0gWydibGluaycsICdibGlua0xlZnQnLCAnYmxpbmtSaWdodCddO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBuYW1lIG9yIHByZXNldCBuYW1lIG9mIGV4cHJlc3Npb25zIHRoYXQgd2lsbCBiZSBvdmVycmlkZGVuIGJ5IHtAbGluayBWUk1FeHByZXNzaW9uLm92ZXJyaWRlTG9va0F0fS5cbiAgICovXG4gIHB1YmxpYyBsb29rQXRFeHByZXNzaW9uTmFtZXMgPSBbJ2xvb2tMZWZ0JywgJ2xvb2tSaWdodCcsICdsb29rVXAnLCAnbG9va0Rvd24nXTtcblxuICAvKipcbiAgICogQSBzZXQgb2YgbmFtZSBvciBwcmVzZXQgbmFtZSBvZiBleHByZXNzaW9ucyB0aGF0IHdpbGwgYmUgb3ZlcnJpZGRlbiBieSB7QGxpbmsgVlJNRXhwcmVzc2lvbi5vdmVycmlkZU1vdXRofS5cbiAgICovXG4gIHB1YmxpYyBtb3V0aEV4cHJlc3Npb25OYW1lcyA9IFsnYWEnLCAnZWUnLCAnaWgnLCAnb2gnLCAnb3UnXTtcblxuICAvKipcbiAgICogQSBzZXQgb2Yge0BsaW5rIFZSTUV4cHJlc3Npb259LlxuICAgKiBXaGVuIHlvdSB3YW50IHRvIHJlZ2lzdGVyIGV4cHJlc3Npb25zLCB1c2Uge0BsaW5rIHJlZ2lzdGVyRXhwcmVzc2lvbn1cbiAgICovXG4gIHByaXZhdGUgX2V4cHJlc3Npb25zOiBWUk1FeHByZXNzaW9uW10gPSBbXTtcbiAgcHVibGljIGdldCBleHByZXNzaW9ucygpOiBWUk1FeHByZXNzaW9uW10ge1xuICAgIHJldHVybiB0aGlzLl9leHByZXNzaW9ucy5jb25jYXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1hcCBmcm9tIG5hbWUgdG8gZXhwcmVzc2lvbi5cbiAgICovXG4gIHByaXZhdGUgX2V4cHJlc3Npb25NYXA6IHsgW25hbWU6IHN0cmluZ106IFZSTUV4cHJlc3Npb24gfSA9IHt9O1xuICBwdWJsaWMgZ2V0IGV4cHJlc3Npb25NYXAoKTogeyBbbmFtZTogc3RyaW5nXTogVlJNRXhwcmVzc2lvbiB9IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZXhwcmVzc2lvbk1hcCk7XG4gIH1cblxuICAvKipcbiAgICogQSBtYXAgZnJvbSBuYW1lIHRvIGV4cHJlc3Npb24sIGJ1dCBleGNsdWRpbmcgY3VzdG9tIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIGdldCBwcmVzZXRFeHByZXNzaW9uTWFwKCk6IHsgW25hbWUgaW4gVlJNRXhwcmVzc2lvblByZXNldE5hbWVdPzogVlJNRXhwcmVzc2lvbiB9IHtcbiAgICBjb25zdCByZXN1bHQ6IHsgW25hbWUgaW4gVlJNRXhwcmVzc2lvblByZXNldE5hbWVdPzogVlJNRXhwcmVzc2lvbiB9ID0ge307XG5cbiAgICBjb25zdCBwcmVzZXROYW1lU2V0ID0gbmV3IFNldDxzdHJpbmc+KE9iamVjdC52YWx1ZXMoVlJNRXhwcmVzc2lvblByZXNldE5hbWUpKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuX2V4cHJlc3Npb25NYXApLmZvckVhY2goKFtuYW1lLCBleHByZXNzaW9uXSkgPT4ge1xuICAgICAgaWYgKHByZXNldE5hbWVTZXQuaGFzKG5hbWUpKSB7XG4gICAgICAgIHJlc3VsdFtuYW1lIGFzIFZSTUV4cHJlc3Npb25QcmVzZXROYW1lXSA9IGV4cHJlc3Npb247XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWFwIGZyb20gbmFtZSB0byBleHByZXNzaW9uLCBidXQgZXhjbHVkaW5nIHByZXNldCBleHByZXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBnZXQgY3VzdG9tRXhwcmVzc2lvbk1hcCgpOiB7IFtuYW1lOiBzdHJpbmddOiBWUk1FeHByZXNzaW9uIH0ge1xuICAgIGNvbnN0IHJlc3VsdDogeyBbbmFtZTogc3RyaW5nXTogVlJNRXhwcmVzc2lvbiB9ID0ge307XG5cbiAgICBjb25zdCBwcmVzZXROYW1lU2V0ID0gbmV3IFNldDxzdHJpbmc+KE9iamVjdC52YWx1ZXMoVlJNRXhwcmVzc2lvblByZXNldE5hbWUpKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuX2V4cHJlc3Npb25NYXApLmZvckVhY2goKFtuYW1lLCBleHByZXNzaW9uXSkgPT4ge1xuICAgICAgaWYgKCFwcmVzZXROYW1lU2V0LmhhcyhuYW1lKSkge1xuICAgICAgICByZXN1bHRbbmFtZV0gPSBleHByZXNzaW9uO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfS5cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cblxuICAvKipcbiAgICogQ29weSB0aGUgZ2l2ZW4ge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfSBpbnRvIHRoaXMgb25lLlxuICAgKiBAcGFyYW0gc291cmNlIFRoZSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9IHlvdSB3YW50IHRvIGNvcHlcbiAgICogQHJldHVybnMgdGhpc1xuICAgKi9cbiAgcHVibGljIGNvcHkoc291cmNlOiBWUk1FeHByZXNzaW9uTWFuYWdlcik6IHRoaXMge1xuICAgIC8vIGZpcnN0IHVucmVnaXN0ZXIgYWxsIHRoZSBleHByZXNzaW9uIGl0IGhhc1xuICAgIGNvbnN0IGV4cHJlc3Npb25zID0gdGhpcy5fZXhwcmVzc2lvbnMuY29uY2F0KCk7XG4gICAgZXhwcmVzc2lvbnMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICB9KTtcblxuICAgIC8vIHRoZW4gcmVnaXN0ZXIgYWxsIHRoZSBleHByZXNzaW9uIG9mIHRoZSBzb3VyY2VcbiAgICBzb3VyY2UuX2V4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgIHRoaXMucmVnaXN0ZXJFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgIH0pO1xuXG4gICAgLy8gY29weSByZW1haW5pbmcgbWVtYmVyc1xuICAgIHRoaXMuYmxpbmtFeHByZXNzaW9uTmFtZXMgPSBzb3VyY2UuYmxpbmtFeHByZXNzaW9uTmFtZXMuY29uY2F0KCk7XG4gICAgdGhpcy5sb29rQXRFeHByZXNzaW9uTmFtZXMgPSBzb3VyY2UubG9va0F0RXhwcmVzc2lvbk5hbWVzLmNvbmNhdCgpO1xuICAgIHRoaXMubW91dGhFeHByZXNzaW9uTmFtZXMgPSBzb3VyY2UubW91dGhFeHByZXNzaW9uTmFtZXMuY29uY2F0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY2xvbmUgb2YgdGhpcyB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9LlxuICAgKiBAcmV0dXJucyBDb3BpZWQge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfVxuICAgKi9cbiAgcHVibGljIGNsb25lKCk6IFZSTUV4cHJlc3Npb25NYW5hZ2VyIHtcbiAgICByZXR1cm4gbmV3IFZSTUV4cHJlc3Npb25NYW5hZ2VyKCkuY29weSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSByZWdpc3RlcmVkIGV4cHJlc3Npb24uXG4gICAqIElmIGl0IGNhbm5vdCBmaW5kIGFuIGV4cHJlc3Npb24sIGl0IHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9yIHByZXNldCBuYW1lIG9mIHRoZSBleHByZXNzaW9uXG4gICAqL1xuICBwdWJsaWMgZ2V0RXhwcmVzc2lvbihuYW1lOiBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSB8IHN0cmluZyk6IFZSTUV4cHJlc3Npb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwcmVzc2lvbk1hcFtuYW1lXSA/PyBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIGV4cHJlc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSBleHByZXNzaW9uIHtAbGluayBWUk1FeHByZXNzaW9ufSB0aGF0IGRlc2NyaWJlcyB0aGUgZXhwcmVzc2lvblxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uOiBWUk1FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy5fZXhwcmVzc2lvbnMucHVzaChleHByZXNzaW9uKTtcbiAgICB0aGlzLl9leHByZXNzaW9uTWFwW2V4cHJlc3Npb24uZXhwcmVzc2lvbk5hbWVdID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGFuIGV4cHJlc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSBleHByZXNzaW9uIFRoZSBleHByZXNzaW9uIHlvdSB3YW50IHRvIHVucmVnaXN0ZXJcbiAgICovXG4gIHB1YmxpYyB1bnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uOiBWUk1FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9leHByZXNzaW9ucy5pbmRleE9mKGV4cHJlc3Npb24pO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2FybignVlJNRXhwcmVzc2lvbk1hbmFnZXI6IFRoZSBzcGVjaWZpZWQgZXhwcmVzc2lvbnMgaXMgbm90IHJlZ2lzdGVyZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9leHByZXNzaW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGRlbGV0ZSB0aGlzLl9leHByZXNzaW9uTWFwW2V4cHJlc3Npb24uZXhwcmVzc2lvbk5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB3ZWlnaHQgb2YgdGhlIHNwZWNpZmllZCBleHByZXNzaW9uLlxuICAgKiBJZiBpdCBkb2Vzbid0IGhhdmUgYW4gZXhwcmVzc2lvbiBvZiBnaXZlbiBuYW1lLCBpdCB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZXhwcmVzc2lvblxuICAgKi9cbiAgcHVibGljIGdldFZhbHVlKG5hbWU6IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIHwgc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbihuYW1lKTtcbiAgICByZXR1cm4gZXhwcmVzc2lvbj8ud2VpZ2h0ID8/IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgd2VpZ2h0IHRvIHRoZSBzcGVjaWZpZWQgZXhwcmVzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZXhwcmVzc2lvblxuICAgKiBAcGFyYW0gd2VpZ2h0IFdlaWdodFxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlKG5hbWU6IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIHwgc3RyaW5nLCB3ZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24obmFtZSk7XG4gICAgaWYgKGV4cHJlc3Npb24pIHtcbiAgICAgIGV4cHJlc3Npb24ud2VpZ2h0ID0gc2F0dXJhdGUod2VpZ2h0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgd2VpZ2h0cyBvZiBhbGwgZXhwcmVzc2lvbnMgdG8gYDAuMGAuXG4gICAqL1xuICBwdWJsaWMgcmVzZXRWYWx1ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fZXhwcmVzc2lvbnMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgZXhwcmVzc2lvbi53ZWlnaHQgPSAwLjA7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgdHJhY2sgbmFtZSBvZiBzcGVjaWZpZWQgZXhwcmVzc2lvbi5cbiAgICogVGhpcyB0cmFjayBuYW1lIGlzIG5lZWRlZCB0byBtYW5pcHVsYXRlIGl0cyBleHByZXNzaW9uIHZpYSBrZXlmcmFtZSBhbmltYXRpb25zLlxuICAgKlxuICAgKiBAZXhhbXBsZSBNYW5pcHVsYXRlIGFuIGV4cHJlc3Npb24gdXNpbmcga2V5ZnJhbWUgYW5pbWF0aW9uXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IHRyYWNrTmFtZSA9IHZybS5leHByZXNzaW9uTWFuYWdlci5nZXRFeHByZXNzaW9uVHJhY2tOYW1lKCAnYmxpbmsnICk7XG4gICAqIGNvbnN0IHRyYWNrID0gbmV3IFRIUkVFLk51bWJlcktleWZyYW1lVHJhY2soXG4gICAqICAgbmFtZSxcbiAgICogICBbIDAuMCwgMC41LCAxLjAgXSwgLy8gdGltZXNcbiAgICogICBbIDAuMCwgMS4wLCAwLjAgXSAvLyB2YWx1ZXNcbiAgICogKTtcbiAgICpcbiAgICogY29uc3QgY2xpcCA9IG5ldyBUSFJFRS5BbmltYXRpb25DbGlwKFxuICAgKiAgICdibGluaycsIC8vIG5hbWVcbiAgICogICAxLjAsIC8vIGR1cmF0aW9uXG4gICAqICAgWyB0cmFjayBdIC8vIHRyYWNrc1xuICAgKiApO1xuICAgKlxuICAgKiBjb25zdCBtaXhlciA9IG5ldyBUSFJFRS5BbmltYXRpb25NaXhlciggdnJtLnNjZW5lICk7XG4gICAqIGNvbnN0IGFjdGlvbiA9IG1peGVyLmNsaXBBY3Rpb24oIGNsaXAgKTtcbiAgICogYWN0aW9uLnBsYXkoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGV4cHJlc3Npb25cbiAgICovXG4gIHB1YmxpYyBnZXRFeHByZXNzaW9uVHJhY2tOYW1lKG5hbWU6IFZSTUV4cHJlc3Npb25QcmVzZXROYW1lIHwgc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbihuYW1lKTtcbiAgICByZXR1cm4gZXhwcmVzc2lvbiA/IGAke2V4cHJlc3Npb24ubmFtZX0ud2VpZ2h0YCA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGV2ZXJ5IGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAvLyBzZWUgaG93IG11Y2ggd2Ugc2hvdWxkIG92ZXJyaWRlIGNlcnRhaW4gZXhwcmVzc2lvbnNcbiAgICBjb25zdCB3ZWlnaHRNdWx0aXBsaWVycyA9IHRoaXMuX2NhbGN1bGF0ZVdlaWdodE11bHRpcGxpZXJzKCk7XG5cbiAgICAvLyByZXNldCBleHByZXNzaW9uIGJpbmRzIGZpcnN0XG4gICAgdGhpcy5fZXhwcmVzc2lvbnMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgZXhwcmVzc2lvbi5jbGVhckFwcGxpZWRXZWlnaHQoKTtcbiAgICB9KTtcblxuICAgIC8vIHRoZW4gYXBwbHkgYmluZHNcbiAgICB0aGlzLl9leHByZXNzaW9ucy5mb3JFYWNoKChleHByZXNzaW9uKSA9PiB7XG4gICAgICBsZXQgbXVsdGlwbGllciA9IDEuMDtcbiAgICAgIGNvbnN0IG5hbWUgPSBleHByZXNzaW9uLmV4cHJlc3Npb25OYW1lO1xuXG4gICAgICBpZiAodGhpcy5ibGlua0V4cHJlc3Npb25OYW1lcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICBtdWx0aXBsaWVyICo9IHdlaWdodE11bHRpcGxpZXJzLmJsaW5rO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sb29rQXRFeHByZXNzaW9uTmFtZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgbXVsdGlwbGllciAqPSB3ZWlnaHRNdWx0aXBsaWVycy5sb29rQXQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1vdXRoRXhwcmVzc2lvbk5hbWVzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgIG11bHRpcGxpZXIgKj0gd2VpZ2h0TXVsdGlwbGllcnMubW91dGg7XG4gICAgICB9XG5cbiAgICAgIGV4cHJlc3Npb24uYXBwbHlXZWlnaHQoeyBtdWx0aXBsaWVyIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBzdW0gb2Ygb3ZlcnJpZGUgYW1vdW50cyB0byBzZWUgaG93IG11Y2ggd2Ugc2hvdWxkIG11bHRpcGx5IHdlaWdodHMgb2YgY2VydGFpbiBleHByZXNzaW9ucy5cbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdlaWdodE11bHRpcGxpZXJzKCk6IHtcbiAgICBibGluazogbnVtYmVyO1xuICAgIGxvb2tBdDogbnVtYmVyO1xuICAgIG1vdXRoOiBudW1iZXI7XG4gIH0ge1xuICAgIGxldCBibGluayA9IDEuMDtcbiAgICBsZXQgbG9va0F0ID0gMS4wO1xuICAgIGxldCBtb3V0aCA9IDEuMDtcblxuICAgIHRoaXMuX2V4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgIGJsaW5rIC09IGV4cHJlc3Npb24ub3ZlcnJpZGVCbGlua0Ftb3VudDtcbiAgICAgIGxvb2tBdCAtPSBleHByZXNzaW9uLm92ZXJyaWRlTG9va0F0QW1vdW50O1xuICAgICAgbW91dGggLT0gZXhwcmVzc2lvbi5vdmVycmlkZU1vdXRoQW1vdW50O1xuICAgIH0pO1xuXG4gICAgYmxpbmsgPSBNYXRoLm1heCgwLjAsIGJsaW5rKTtcbiAgICBsb29rQXQgPSBNYXRoLm1heCgwLjAsIGxvb2tBdCk7XG4gICAgbW91dGggPSBNYXRoLm1heCgwLjAsIG1vdXRoKTtcblxuICAgIHJldHVybiB7IGJsaW5rLCBsb29rQXQsIG1vdXRoIH07XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuZXhwb3J0IGNvbnN0IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSA9IHtcbiAgQ29sb3I6ICdjb2xvcicsXG4gIEVtaXNzaW9uQ29sb3I6ICdlbWlzc2lvbkNvbG9yJyxcbiAgU2hhZGVDb2xvcjogJ3NoYWRlQ29sb3InLFxuICBNYXRjYXBDb2xvcjogJ21hdGNhcENvbG9yJyxcbiAgUmltQ29sb3I6ICdyaW1Db2xvcicsXG4gIE91dGxpbmVDb2xvcjogJ291dGxpbmVDb2xvcicsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUgPVxuICAodHlwZW9mIFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSlba2V5b2YgdHlwZW9mIFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZV07XG5cbmV4cG9ydCBjb25zdCB2MEV4cHJlc3Npb25NYXRlcmlhbENvbG9yTWFwOiB7IFtrZXk6IHN0cmluZ106IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSB8IHVuZGVmaW5lZCB9ID0ge1xuICBfQ29sb3I6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZS5Db2xvcixcbiAgX0VtaXNzaW9uQ29sb3I6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZS5FbWlzc2lvbkNvbG9yLFxuICBfU2hhZGVDb2xvcjogVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlLlNoYWRlQ29sb3IsXG4gIF9SaW1Db2xvcjogVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlLlJpbUNvbG9yLFxuICBfT3V0bGluZUNvbG9yOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUuT3V0bGluZUNvbG9yLFxufTtcbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25CaW5kIH0gZnJvbSAnLi9WUk1FeHByZXNzaW9uQmluZCc7XG5pbXBvcnQgdHlwZSB7IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZSB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlJztcblxuY29uc3QgX2NvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCk7XG5cbmludGVyZmFjZSBDb2xvckJpbmRTdGF0ZSB7XG4gIHByb3BlcnR5TmFtZTogc3RyaW5nO1xuICBpbml0aWFsVmFsdWU6IFRIUkVFLkNvbG9yO1xuICBkZWx0YVZhbHVlOiBUSFJFRS5Db2xvcjtcbn1cblxuaW50ZXJmYWNlIEFscGhhQmluZFN0YXRlIHtcbiAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XG4gIGluaXRpYWxWYWx1ZTogbnVtYmVyO1xuICBkZWx0YVZhbHVlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBCaW5kU3RhdGUge1xuICBjb2xvcjogQ29sb3JCaW5kU3RhdGUgfCBudWxsO1xuICBhbHBoYTogQWxwaGFCaW5kU3RhdGUgfCBudWxsO1xufVxuXG4vKipcbiAqIEEgYmluZCBvZiBleHByZXNzaW9uIGluZmx1ZW5jZXMgdG8gYSBtYXRlcmlhbCBjb2xvci5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCBpbXBsZW1lbnRzIFZSTUV4cHJlc3Npb25CaW5kIHtcbiAgLyoqXG4gICAqIE1hcHBpbmcgb2YgcHJvcGVydHkgbmFtZXMgZnJvbSBWUk1DL21hdGVyaWFsQ29sb3JCaW5kcy50eXBlIHRvIHRocmVlLmpzL01hdGVyaWFsLlxuICAgKiBUaGUgZmlyc3QgZWxlbWVudCBzdGFuZHMgZm9yIGNvbG9yIGNoYW5uZWxzLCB0aGUgc2Vjb25kIGVsZW1lbnQgc3RhbmRzIGZvciB0aGUgYWxwaGEgY2hhbm5lbC5cbiAgICogVGhlIHNlY29uZCBlbGVtZW50IGNhbiBiZSBudWxsIGlmIHRoZSB0YXJnZXQgcHJvcGVydHkgZG9lc24ndCBleGlzdC5cbiAgICovXG4gIC8vIFRPRE86IFdlIG1pZ2h0IHdhbnQgdG8gdXNlIHRoZSBgc2F0aXNmaWVzYCBvcGVyYXRvciBvbmNlIHdlIGJ1bXAgVFMgdG8gNC45IG9yIGhpZ2hlclxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9waXhpdi90aHJlZS12cm0vcHVsbC8xMzIzI2Rpc2N1c3Npb25fcjEzNzQwMjAwMzVcbiAgcHJpdmF0ZSBzdGF0aWMgX3Byb3BlcnR5TmFtZU1hcE1hcDoge1xuICAgIFtkaXN0aW5ndWlzaGVyOiBzdHJpbmddOiB7IFt0eXBlIGluIFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZV0/OiByZWFkb25seSBbc3RyaW5nLCBzdHJpbmcgfCBudWxsXSB9O1xuICB9ID0ge1xuICAgIGlzTWVzaFN0YW5kYXJkTWF0ZXJpYWw6IHtcbiAgICAgIGNvbG9yOiBbJ2NvbG9yJywgJ29wYWNpdHknXSxcbiAgICAgIGVtaXNzaW9uQ29sb3I6IFsnZW1pc3NpdmUnLCBudWxsXSxcbiAgICB9LFxuICAgIGlzTWVzaEJhc2ljTWF0ZXJpYWw6IHtcbiAgICAgIGNvbG9yOiBbJ2NvbG9yJywgJ29wYWNpdHknXSxcbiAgICB9LFxuICAgIGlzTVRvb25NYXRlcmlhbDoge1xuICAgICAgY29sb3I6IFsnY29sb3InLCAnb3BhY2l0eSddLFxuICAgICAgZW1pc3Npb25Db2xvcjogWydlbWlzc2l2ZScsIG51bGxdLFxuICAgICAgb3V0bGluZUNvbG9yOiBbJ291dGxpbmVDb2xvckZhY3RvcicsIG51bGxdLFxuICAgICAgbWF0Y2FwQ29sb3I6IFsnbWF0Y2FwRmFjdG9yJywgbnVsbF0sXG4gICAgICByaW1Db2xvcjogWydwYXJhbWV0cmljUmltQ29sb3JGYWN0b3InLCBudWxsXSxcbiAgICAgIHNoYWRlQ29sb3I6IFsnc2hhZGVDb2xvckZhY3RvcicsIG51bGxdLFxuICAgIH0sXG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgbWF0ZXJpYWwuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgdGFyZ2V0IHByb3BlcnR5IG9mIHRoZSBtYXRlcmlhbC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0eXBlOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGU7XG5cbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgY29sb3IuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdGFyZ2V0VmFsdWU6IFRIUkVFLkNvbG9yO1xuXG4gIC8qKlxuICAgKiBUaGUgdGFyZ2V0IGFscGhhLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHRhcmdldEFscGhhOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEl0cyBiaW5kaW5nIHN0YXRlLlxuICAgKiBJZiBpdCBjYW5ub3QgZmluZCB0aGUgdGFyZ2V0IHByb3BlcnR5IGluIHRoZSBjb25zdHJ1Y3RvciwgZWFjaCBwcm9wZXJ0eSB3aWxsIGJlIG51bGwgaW5zdGVhZC5cbiAgICovXG4gIHByaXZhdGUgX3N0YXRlOiBCaW5kU3RhdGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHtcbiAgICBtYXRlcmlhbCxcbiAgICB0eXBlLFxuICAgIHRhcmdldFZhbHVlLFxuICAgIHRhcmdldEFscGhhLFxuICB9OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBtYXRlcmlhbC5cbiAgICAgKi9cbiAgICBtYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgdGFyZ2V0IHByb3BlcnR5IG9mIHRoZSBtYXRlcmlhbC5cbiAgICAgKi9cbiAgICB0eXBlOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IGNvbG9yLlxuICAgICAqL1xuICAgIHRhcmdldFZhbHVlOiBUSFJFRS5Db2xvcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgYWxwaGEuXG4gICAgICovXG4gICAgdGFyZ2V0QWxwaGE/OiBudW1iZXI7XG4gIH0pIHtcbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRhcmdldFZhbHVlID0gdGFyZ2V0VmFsdWU7XG4gICAgdGhpcy50YXJnZXRBbHBoYSA9IHRhcmdldEFscGhhID8/IDEuMDtcblxuICAgIC8vIGluaXQgYmluZCBzdGF0ZVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5faW5pdENvbG9yQmluZFN0YXRlKCk7XG4gICAgY29uc3QgYWxwaGEgPSB0aGlzLl9pbml0QWxwaGFCaW5kU3RhdGUoKTtcbiAgICB0aGlzLl9zdGF0ZSA9IHsgY29sb3IsIGFscGhhIH07XG4gIH1cblxuICBwdWJsaWMgYXBwbHlXZWlnaHQod2VpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbG9yLCBhbHBoYSB9ID0gdGhpcy5fc3RhdGU7XG5cbiAgICBpZiAoY29sb3IgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBwcm9wZXJ0eU5hbWUsIGRlbHRhVmFsdWUgfSA9IGNvbG9yO1xuXG4gICAgICBjb25zdCB0YXJnZXQgPSAodGhpcy5tYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgVEhSRUUuQ29sb3I7XG4gICAgICBpZiAodGFyZ2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0YXJnZXQuYWRkKF9jb2xvci5jb3B5KGRlbHRhVmFsdWUpLm11bHRpcGx5U2NhbGFyKHdlaWdodCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbHBoYSAhPSBudWxsKSB7XG4gICAgICBjb25zdCB7IHByb3BlcnR5TmFtZSwgZGVsdGFWYWx1ZSB9ID0gYWxwaGE7XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9ICh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBudW1iZXI7XG4gICAgICBpZiAodGFyZ2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAoKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIG51bWJlcikgKz0gZGVsdGFWYWx1ZSAqIHdlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXJBcHBsaWVkV2VpZ2h0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29sb3IsIGFscGhhIH0gPSB0aGlzLl9zdGF0ZTtcblxuICAgIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgICBjb25zdCB7IHByb3BlcnR5TmFtZSwgaW5pdGlhbFZhbHVlIH0gPSBjb2xvcjtcblxuICAgICAgY29uc3QgdGFyZ2V0ID0gKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIFRIUkVFLkNvbG9yO1xuICAgICAgaWYgKHRhcmdldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFyZ2V0LmNvcHkoaW5pdGlhbFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWxwaGEgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBwcm9wZXJ0eU5hbWUsIGluaXRpYWxWYWx1ZSB9ID0gYWxwaGE7XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9ICh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBudW1iZXI7XG4gICAgICBpZiAodGFyZ2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAoKHRoaXMubWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIG51bWJlcikgPSBpbml0aWFsVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdENvbG9yQmluZFN0YXRlKCk6IENvbG9yQmluZFN0YXRlIHwgbnVsbCB7XG4gICAgY29uc3QgeyBtYXRlcmlhbCwgdHlwZSwgdGFyZ2V0VmFsdWUgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXAgPSB0aGlzLl9nZXRQcm9wZXJ0eU5hbWVNYXAoKTtcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWVNYXA/Llt0eXBlXT8uWzBdID8/IG51bGw7XG5cbiAgICBpZiAocHJvcGVydHlOYW1lID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFRyaWVkIHRvIGFkZCBhIG1hdGVyaWFsIGNvbG9yIGJpbmQgdG8gdGhlIG1hdGVyaWFsICR7XG4gICAgICAgICAgbWF0ZXJpYWwubmFtZSA/PyAnKG5vIG5hbWUpJ1xuICAgICAgICB9LCB0aGUgdHlwZSAke3R5cGV9IGJ1dCB0aGUgbWF0ZXJpYWwgb3IgdGhlIHR5cGUgaXMgbm90IHN1cHBvcnRlZC5gLFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gKG1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSBhcyBUSFJFRS5Db2xvcjtcblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRhcmdldC5jbG9uZSgpO1xuXG4gICAgLy8gXHU4Q0EwXHUzMDZFXHU1MDI0XHUzMDkyXHU0RkREXHU2MzAxXHUzMDU5XHUzMDhCXHUzMDVGXHUzMDgxXHUzMDZCQ29sb3Iuc3ViXHUzMDkyXHU0RjdGXHUzMDhGXHUzMDVBXHUzMDZCXHU1REVFXHU1MjA2XHUzMDkyXHU4QTA4XHU3Qjk3XHUzMDU5XHUzMDhCXG4gICAgY29uc3QgZGVsdGFWYWx1ZSA9IG5ldyBUSFJFRS5Db2xvcihcbiAgICAgIHRhcmdldFZhbHVlLnIgLSBpbml0aWFsVmFsdWUucixcbiAgICAgIHRhcmdldFZhbHVlLmcgLSBpbml0aWFsVmFsdWUuZyxcbiAgICAgIHRhcmdldFZhbHVlLmIgLSBpbml0aWFsVmFsdWUuYixcbiAgICApO1xuXG4gICAgcmV0dXJuIHsgcHJvcGVydHlOYW1lLCBpbml0aWFsVmFsdWUsIGRlbHRhVmFsdWUgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRBbHBoYUJpbmRTdGF0ZSgpOiBBbHBoYUJpbmRTdGF0ZSB8IG51bGwge1xuICAgIGNvbnN0IHsgbWF0ZXJpYWwsIHR5cGUsIHRhcmdldEFscGhhIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lTWFwID0gdGhpcy5fZ2V0UHJvcGVydHlOYW1lTWFwKCk7XG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lTWFwPy5bdHlwZV0/LlsxXSA/PyBudWxsO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZSA9PSBudWxsICYmIHRhcmdldEFscGhhICE9PSAxLjApIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFRyaWVkIHRvIGFkZCBhIG1hdGVyaWFsIGFscGhhIGJpbmQgdG8gdGhlIG1hdGVyaWFsICR7XG4gICAgICAgICAgbWF0ZXJpYWwubmFtZSA/PyAnKG5vIG5hbWUpJ1xuICAgICAgICB9LCB0aGUgdHlwZSAke3R5cGV9IGJ1dCB0aGUgbWF0ZXJpYWwgb3IgdGhlIHR5cGUgZG9lcyBub3Qgc3VwcG9ydCBhbHBoYS5gLFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5TmFtZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSAobWF0ZXJpYWwgYXMgYW55KVtwcm9wZXJ0eU5hbWVdIGFzIG51bWJlcjtcblxuICAgIGNvbnN0IGRlbHRhVmFsdWUgPSB0YXJnZXRBbHBoYSAtIGluaXRpYWxWYWx1ZTtcblxuICAgIHJldHVybiB7IHByb3BlcnR5TmFtZSwgaW5pdGlhbFZhbHVlLCBkZWx0YVZhbHVlIH07XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9wZXJ0eU5hbWVNYXAoKTpcbiAgICB8IHsgW3R5cGUgaW4gVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JUeXBlXT86IHJlYWRvbmx5IFtzdHJpbmcsIHN0cmluZyB8IG51bGxdIH1cbiAgICB8IG51bGwge1xuICAgIHJldHVybiAoXG4gICAgICBPYmplY3QuZW50cmllcyhWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvckJpbmQuX3Byb3BlcnR5TmFtZU1hcE1hcCkuZmluZCgoW2Rpc3Rpbmd1aXNoZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiAodGhpcy5tYXRlcmlhbCBhcyBhbnkpW2Rpc3Rpbmd1aXNoZXJdID09PSB0cnVlO1xuICAgICAgfSk/LlsxXSA/PyBudWxsXG4gICAgKTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uQmluZCB9IGZyb20gJy4vVlJNRXhwcmVzc2lvbkJpbmQnO1xuXG4vKipcbiAqIEEgYmluZCBvZiB7QGxpbmsgVlJNRXhwcmVzc2lvbn0gaW5mbHVlbmNlcyB0byBtb3JwaCB0YXJnZXRzLlxuICovXG5leHBvcnQgY2xhc3MgVlJNRXhwcmVzc2lvbk1vcnBoVGFyZ2V0QmluZCBpbXBsZW1lbnRzIFZSTUV4cHJlc3Npb25CaW5kIHtcbiAgLyoqXG4gICAqIFRoZSBtZXNoIHByaW1pdGl2ZXMgdGhhdCBhdHRhY2hlZCB0byB0YXJnZXQgbWVzaC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBwcmltaXRpdmVzOiBUSFJFRS5NZXNoW107XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleCBvZiB0aGUgbW9ycGggdGFyZ2V0IGluIHRoZSBtZXNoLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWlnaHQgdmFsdWUgb2YgdGFyZ2V0IG1vcnBoIHRhcmdldC4gUmFuZ2luZyBpbiBbMC4wIC0gMS4wXS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB3ZWlnaHQ6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioe1xuICAgIHByaW1pdGl2ZXMsXG4gICAgaW5kZXgsXG4gICAgd2VpZ2h0LFxuICB9OiB7XG4gICAgLyoqXG4gICAgICogVGhlIG1lc2ggcHJpbWl0aXZlcyB0aGF0IGF0dGFjaGVkIHRvIHRhcmdldCBtZXNoLlxuICAgICAqL1xuICAgIHByaW1pdGl2ZXM6IFRIUkVFLk1lc2hbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgbW9ycGggdGFyZ2V0IGluIHRoZSBtZXNoLlxuICAgICAqL1xuICAgIGluZGV4OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2VpZ2h0IHZhbHVlIG9mIHRhcmdldCBtb3JwaCB0YXJnZXQuIFJhbmdpbmcgaW4gWzAuMCAtIDEuMF0uXG4gICAgICovXG4gICAgd2VpZ2h0OiBudW1iZXI7XG4gIH0pIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMgPSBwcmltaXRpdmVzO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVdlaWdodCh3ZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucHJpbWl0aXZlcy5mb3JFYWNoKChtZXNoKSA9PiB7XG4gICAgICBpZiAobWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXM/Llt0aGlzLmluZGV4XSAhPSBudWxsKSB7XG4gICAgICAgIG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzW3RoaXMuaW5kZXhdICs9IHRoaXMud2VpZ2h0ICogd2VpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQXBwbGllZFdlaWdodCgpOiB2b2lkIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMuZm9yRWFjaCgobWVzaCkgPT4ge1xuICAgICAgaWYgKG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzPy5bdGhpcy5pbmRleF0gIT0gbnVsbCkge1xuICAgICAgICBtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t0aGlzLmluZGV4XSA9IDAuMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNRXhwcmVzc2lvbkJpbmQgfSBmcm9tICcuL1ZSTUV4cHJlc3Npb25CaW5kJztcblxuY29uc3QgX3YyID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuLyoqXG4gKiBBIGJpbmQgb2YgZXhwcmVzc2lvbiBpbmZsdWVuY2VzIHRvIHRleHR1cmUgdHJhbnNmb3Jtcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZCBpbXBsZW1lbnRzIFZSTUV4cHJlc3Npb25CaW5kIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX3Byb3BlcnR5TmFtZXNNYXA6IHsgW2Rpc3Rpbmd1aXNoZXI6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XG4gICAgaXNNZXNoU3RhbmRhcmRNYXRlcmlhbDogW1xuICAgICAgJ21hcCcsXG4gICAgICAnZW1pc3NpdmVNYXAnLFxuICAgICAgJ2J1bXBNYXAnLFxuICAgICAgJ25vcm1hbE1hcCcsXG4gICAgICAnZGlzcGxhY2VtZW50TWFwJyxcbiAgICAgICdyb3VnaG5lc3NNYXAnLFxuICAgICAgJ21ldGFsbmVzc01hcCcsXG4gICAgICAnYWxwaGFNYXAnLFxuICAgIF0sXG4gICAgaXNNZXNoQmFzaWNNYXRlcmlhbDogWydtYXAnLCAnc3BlY3VsYXJNYXAnLCAnYWxwaGFNYXAnXSxcbiAgICBpc01Ub29uTWF0ZXJpYWw6IFtcbiAgICAgICdtYXAnLFxuICAgICAgJ25vcm1hbE1hcCcsXG4gICAgICAnZW1pc3NpdmVNYXAnLFxuICAgICAgJ3NoYWRlTXVsdGlwbHlUZXh0dXJlJyxcbiAgICAgICdyaW1NdWx0aXBseVRleHR1cmUnLFxuICAgICAgJ291dGxpbmVXaWR0aE11bHRpcGx5VGV4dHVyZScsXG4gICAgICAndXZBbmltYXRpb25NYXNrVGV4dHVyZScsXG4gICAgXSxcbiAgfTtcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBtYXRlcmlhbC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBtYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWw7XG5cbiAgLyoqXG4gICAqIFRoZSB1diBzY2FsZSBvZiB0aGUgdGV4dHVyZS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzY2FsZTogVEhSRUUuVmVjdG9yMjtcblxuICAvKipcbiAgICogVGhlIHV2IG9mZnNldCBvZiB0aGUgdGV4dHVyZS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBvZmZzZXQ6IFRIUkVFLlZlY3RvcjI7XG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHRleHR1cmUgbmFtZXMgYW5kIGl0cyBzdGF0ZSB0aGF0IHNob3VsZCBiZSB0cmFuc2Zvcm1lZCBieSB0aGlzIGJpbmQuXG4gICAqL1xuICBwcml2YXRlIF9wcm9wZXJ0aWVzOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGluaXRpYWxPZmZzZXQ6IFRIUkVFLlZlY3RvcjI7XG4gICAgaW5pdGlhbFNjYWxlOiBUSFJFRS5WZWN0b3IyO1xuICAgIGRlbHRhT2Zmc2V0OiBUSFJFRS5WZWN0b3IyO1xuICAgIGRlbHRhU2NhbGU6IFRIUkVFLlZlY3RvcjI7XG4gIH1bXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioe1xuICAgIG1hdGVyaWFsLFxuICAgIHNjYWxlLFxuICAgIG9mZnNldCxcbiAgfToge1xuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgbWF0ZXJpYWwuXG4gICAgICovXG4gICAgbWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHV2IHNjYWxlIG9mIHRoZSB0ZXh0dXJlLlxuICAgICAqL1xuICAgIHNjYWxlOiBUSFJFRS5WZWN0b3IyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHV2IG9mZnNldCBvZiB0aGUgdGV4dHVyZS5cbiAgICAgKi9cbiAgICBvZmZzZXQ6IFRIUkVFLlZlY3RvcjI7XG4gIH0pIHtcbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5lbnRyaWVzKFZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZC5fcHJvcGVydHlOYW1lc01hcCkuZmluZChcbiAgICAgIChbZGlzdGluZ3Vpc2hlcl0pID0+IHtcbiAgICAgICAgcmV0dXJuIChtYXRlcmlhbCBhcyBhbnkpW2Rpc3Rpbmd1aXNoZXJdID09PSB0cnVlO1xuICAgICAgfSxcbiAgICApPy5bMV07XG5cbiAgICBpZiAocHJvcGVydHlOYW1lcyA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUcmllZCB0byBhZGQgYSB0ZXh0dXJlIHRyYW5zZm9ybSBiaW5kIHRvIHRoZSBtYXRlcmlhbCAke1xuICAgICAgICAgIG1hdGVyaWFsLm5hbWUgPz8gJyhubyBuYW1lKSdcbiAgICAgICAgfSBidXQgdGhlIG1hdGVyaWFsIGlzIG5vdCBzdXBwb3J0ZWQuYCxcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcHJvcGVydGllcyA9IFtdO1xuXG4gICAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gKChtYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gYXMgVEhSRUUuVGV4dHVyZSB8IHVuZGVmaW5lZCk/LmNsb25lKCk7XG4gICAgICAgIGlmICghdGV4dHVyZSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgKG1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHlOYW1lXSA9IHRleHR1cmU7IC8vIGJlY2F1c2UgdGhlIHRleHR1cmUgaXMgY2xvbmVkXG5cbiAgICAgICAgY29uc3QgaW5pdGlhbE9mZnNldCA9IHRleHR1cmUub2Zmc2V0LmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGluaXRpYWxTY2FsZSA9IHRleHR1cmUucmVwZWF0LmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGRlbHRhT2Zmc2V0ID0gb2Zmc2V0LmNsb25lKCkuc3ViKGluaXRpYWxPZmZzZXQpO1xuICAgICAgICBjb25zdCBkZWx0YVNjYWxlID0gc2NhbGUuY2xvbmUoKS5zdWIoaW5pdGlhbFNjYWxlKTtcblxuICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICBpbml0aWFsT2Zmc2V0LFxuICAgICAgICAgIGRlbHRhT2Zmc2V0LFxuICAgICAgICAgIGluaXRpYWxTY2FsZSxcbiAgICAgICAgICBkZWx0YVNjYWxlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhcHBseVdlaWdodCh3ZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3Byb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9ICh0aGlzLm1hdGVyaWFsIGFzIGFueSlbcHJvcGVydHkubmFtZV0gYXMgVEhSRUUuVGV4dHVyZTtcbiAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFRPRE86IHdlIHNob3VsZCBraWNrIHRoaXMgYXQgYGFkZE1hdGVyaWFsVmFsdWVgXG5cbiAgICAgIHRhcmdldC5vZmZzZXQuYWRkKF92Mi5jb3B5KHByb3BlcnR5LmRlbHRhT2Zmc2V0KS5tdWx0aXBseVNjYWxhcih3ZWlnaHQpKTtcbiAgICAgIHRhcmdldC5yZXBlYXQuYWRkKF92Mi5jb3B5KHByb3BlcnR5LmRlbHRhU2NhbGUpLm11bHRpcGx5U2NhbGFyKHdlaWdodCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQXBwbGllZFdlaWdodCgpOiB2b2lkIHtcbiAgICB0aGlzLl9wcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSAodGhpcy5tYXRlcmlhbCBhcyBhbnkpW3Byb3BlcnR5Lm5hbWVdIGFzIFRIUkVFLlRleHR1cmU7XG4gICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBUT0RPOiB3ZSBzaG91bGQga2ljayB0aGlzIGF0IGBhZGRNYXRlcmlhbFZhbHVlYFxuXG4gICAgICB0YXJnZXQub2Zmc2V0LmNvcHkocHJvcGVydHkuaW5pdGlhbE9mZnNldCk7XG4gICAgICB0YXJnZXQucmVwZWF0LmNvcHkocHJvcGVydHkuaW5pdGlhbFNjYWxlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG5leHBvcnQgY29uc3QgVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZSA9IHtcbiAgTm9uZTogJ25vbmUnLFxuICBCbG9jazogJ2Jsb2NrJyxcbiAgQmxlbmQ6ICdibGVuZCcsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlID0gKHR5cGVvZiBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlKVtrZXlvZiB0eXBlb2YgVlJNRXhwcmVzc2lvbk92ZXJyaWRlVHlwZV07XG4iLCAiaW1wb3J0IHR5cGUgeyBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uIH0gZnJvbSAnLi9WUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuLi9odW1hbm9pZCc7XG5cbmV4cG9ydCBjbGFzcyBWUk1GaXJzdFBlcnNvbiB7XG4gIC8qKlxuICAgKiBBIGRlZmF1bHQgY2FtZXJhIGxheWVyIGZvciBgRmlyc3RQZXJzb25Pbmx5YCBsYXllci5cbiAgICpcbiAgICogQHNlZSBbW2dldEZpcnN0UGVyc29uT25seUxheWVyXV1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9GSVJTVFBFUlNPTl9PTkxZX0xBWUVSID0gOTtcblxuICAvKipcbiAgICogQSBkZWZhdWx0IGNhbWVyYSBsYXllciBmb3IgYFRoaXJkUGVyc29uT25seWAgbGF5ZXIuXG4gICAqXG4gICAqIEBzZWUgW1tnZXRUaGlyZFBlcnNvbk9ubHlMYXllcl1dXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfVEhJUkRQRVJTT05fT05MWV9MQVlFUiA9IDEwO1xuXG4gIC8qKlxuICAgKiBJdHMgYXNzb2NpYXRlZCB7QGxpbmsgVlJNSHVtYW5vaWR9LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGh1bWFub2lkOiBWUk1IdW1hbm9pZDtcbiAgcHVibGljIG1lc2hBbm5vdGF0aW9uczogVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbltdO1xuXG4gIHByaXZhdGUgX2ZpcnN0UGVyc29uT25seUxheWVyID0gVlJNRmlyc3RQZXJzb24uREVGQVVMVF9GSVJTVFBFUlNPTl9PTkxZX0xBWUVSO1xuICBwcml2YXRlIF90aGlyZFBlcnNvbk9ubHlMYXllciA9IFZSTUZpcnN0UGVyc29uLkRFRkFVTFRfVEhJUkRQRVJTT05fT05MWV9MQVlFUjtcblxuICBwcml2YXRlIF9pbml0aWFsaXplZExheWVycyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgVlJNRmlyc3RQZXJzb24gb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gaHVtYW5vaWQgQSB7QGxpbmsgVlJNSHVtYW5vaWR9XG4gICAqIEBwYXJhbSBtZXNoQW5ub3RhdGlvbnMgQSByZW5kZXJlciBzZXR0aW5ncy4gU2VlIHRoZSBkZXNjcmlwdGlvbiBvZiBbW1JlbmRlcmVyRmlyc3RQZXJzb25GbGFnc11dIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbm9pZDogVlJNSHVtYW5vaWQsIG1lc2hBbm5vdGF0aW9uczogVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbltdKSB7XG4gICAgdGhpcy5odW1hbm9pZCA9IGh1bWFub2lkO1xuICAgIHRoaXMubWVzaEFubm90YXRpb25zID0gbWVzaEFubm90YXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgdGhlIGdpdmVuIHtAbGluayBWUk1GaXJzdFBlcnNvbn0gaW50byB0aGlzIG9uZS5cbiAgICoge0BsaW5rIGh1bWFub2lkfSBtdXN0IGJlIHNhbWUgYXMgdGhlIHNvdXJjZSBvbmUuXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIHtAbGluayBWUk1GaXJzdFBlcnNvbn0geW91IHdhbnQgdG8gY29weVxuICAgKiBAcmV0dXJucyB0aGlzXG4gICAqL1xuICBwdWJsaWMgY29weShzb3VyY2U6IFZSTUZpcnN0UGVyc29uKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuaHVtYW5vaWQgIT09IHNvdXJjZS5odW1hbm9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWUk1GaXJzdFBlcnNvbjogaHVtYW5vaWQgbXVzdCBiZSBzYW1lIGluIG9yZGVyIHRvIGNvcHknKTtcbiAgICB9XG5cbiAgICB0aGlzLm1lc2hBbm5vdGF0aW9ucyA9IHNvdXJjZS5tZXNoQW5ub3RhdGlvbnMubWFwKChhbm5vdGF0aW9uKSA9PiAoe1xuICAgICAgbWVzaGVzOiBhbm5vdGF0aW9uLm1lc2hlcy5jb25jYXQoKSxcbiAgICAgIHR5cGU6IGFubm90YXRpb24udHlwZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY2xvbmUgb2YgdGhpcyB7QGxpbmsgVlJNRmlyc3RQZXJzb259LlxuICAgKiBAcmV0dXJucyBDb3BpZWQge0BsaW5rIFZSTUZpcnN0UGVyc29ufVxuICAgKi9cbiAgcHVibGljIGNsb25lKCk6IFZSTUZpcnN0UGVyc29uIHtcbiAgICByZXR1cm4gbmV3IFZSTUZpcnN0UGVyc29uKHRoaXMuaHVtYW5vaWQsIHRoaXMubWVzaEFubm90YXRpb25zKS5jb3B5KHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY2FtZXJhIGxheWVyIHJlcHJlc2VudHMgYEZpcnN0UGVyc29uT25seWAgbGF5ZXIuXG4gICAqIE5vdGUgdGhhdCAqKnlvdSBtdXN0IGNhbGwge0BsaW5rIHNldHVwfSBmaXJzdCBiZWZvcmUgeW91IHVzZSB0aGUgbGF5ZXIgZmVhdHVyZSoqIG9yIGl0IGRvZXMgbm90IHdvcmsgcHJvcGVybHkuXG4gICAqXG4gICAqIFRoZSB2YWx1ZSBpcyB7QGxpbmsgREVGQVVMVF9GSVJTVFBFUlNPTl9PTkxZX0xBWUVSfSBieSBkZWZhdWx0IGJ1dCB5b3UgY2FuIGNoYW5nZSB0aGUgbGF5ZXIgYnkgc3BlY2lmeWluZyB2aWEge0BsaW5rIHNldHVwfSBpZiB5b3UgcHJlZmVyLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vdnJtLmRldi9lbi91bml2cm0vYXBpL3VuaXZybV91c2VfZmlyc3RwZXJzb24vXG4gICAqIEBzZWUgaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzLyNhcGkvZW4vY29yZS9MYXllcnNcbiAgICovXG4gIHB1YmxpYyBnZXQgZmlyc3RQZXJzb25Pbmx5TGF5ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXI7XG4gIH1cblxuICAvKipcbiAgICogQSBjYW1lcmEgbGF5ZXIgcmVwcmVzZW50cyBgVGhpcmRQZXJzb25Pbmx5YCBsYXllci5cbiAgICogTm90ZSB0aGF0ICoqeW91IG11c3QgY2FsbCB7QGxpbmsgc2V0dXB9IGZpcnN0IGJlZm9yZSB5b3UgdXNlIHRoZSBsYXllciBmZWF0dXJlKiogb3IgaXQgZG9lcyBub3Qgd29yayBwcm9wZXJseS5cbiAgICpcbiAgICogVGhlIHZhbHVlIGlzIHtAbGluayBERUZBVUxUX1RISVJEUEVSU09OX09OTFlfTEFZRVJ9IGJ5IGRlZmF1bHQgYnV0IHlvdSBjYW4gY2hhbmdlIHRoZSBsYXllciBieSBzcGVjaWZ5aW5nIHZpYSB7QGxpbmsgc2V0dXB9IGlmIHlvdSBwcmVmZXIuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly92cm0uZGV2L2VuL3VuaXZybS9hcGkvdW5pdnJtX3VzZV9maXJzdHBlcnNvbi9cbiAgICogQHNlZSBodHRwczovL3RocmVlanMub3JnL2RvY3MvI2FwaS9lbi9jb3JlL0xheWVyc1xuICAgKi9cbiAgcHVibGljIGdldCB0aGlyZFBlcnNvbk9ubHlMYXllcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiB0aGlzIG1ldGhvZCwgaXQgYXNzaWducyBsYXllcnMgZm9yIGV2ZXJ5IG1lc2hlcyBiYXNlZCBvbiBtZXNoIGFubm90YXRpb25zLlxuICAgKiBZb3UgbXVzdCBjYWxsIHRoaXMgbWV0aG9kIGZpcnN0IGJlZm9yZSB5b3UgdXNlIHRoZSBsYXllciBmZWF0dXJlLlxuICAgKlxuICAgKiBUaGlzIGlzIGFuIGVxdWl2YWxlbnQgb2YgW1ZSTUZpcnN0UGVyc29uLlNldHVwXShodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvVW5pVlJNL2Jsb2IvNzNhNWJkOGZjZGRhYTJhN2E4NzM1MDk5YTk3ZTYzYzlkYjNlNWVhMC9Bc3NldHMvVlJNL1J1bnRpbWUvRmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb24uY3MjTDI5NS1MMjk5KSBvZiB0aGUgVW5pVlJNLlxuICAgKlxuICAgKiBUaGUgYGNhbWVyYUxheWVyYCBwYXJhbWV0ZXIgc3BlY2lmaWVzIHdoaWNoIGxheWVyIHdpbGwgYmUgYXNzaWduZWQgZm9yIGBGaXJzdFBlcnNvbk9ubHlgIC8gYFRoaXJkUGVyc29uT25seWAuXG4gICAqIEluIFVuaVZSTSwgd2Ugc3BlY2lmaWVkIHRob3NlIGJ5IG5hbWluZyBlYWNoIGRlc2lyZWQgbGF5ZXIgYXMgYEZJUlNUUEVSU09OX09OTFlfTEFZRVJgIC8gYFRISVJEUEVSU09OX09OTFlfTEFZRVJgXG4gICAqIGJ1dCB3ZSBhcmUgZ29pbmcgdG8gc3BlY2lmeSB0aGVzZSBsYXllcnMgYXQgaGVyZSBzaW5jZSB3ZSBhcmUgdW5hYmxlIHRvIG5hbWUgbGF5ZXJzIGluIFRocmVlLmpzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FtZXJhTGF5ZXIgU3BlY2lmeSB3aGljaCBsYXllciB3aWxsIGJlIGZvciBgRmlyc3RQZXJzb25Pbmx5YCAvIGBUaGlyZFBlcnNvbk9ubHlgLlxuICAgKi9cbiAgcHVibGljIHNldHVwKHtcbiAgICBmaXJzdFBlcnNvbk9ubHlMYXllciA9IFZSTUZpcnN0UGVyc29uLkRFRkFVTFRfRklSU1RQRVJTT05fT05MWV9MQVlFUixcbiAgICB0aGlyZFBlcnNvbk9ubHlMYXllciA9IFZSTUZpcnN0UGVyc29uLkRFRkFVTFRfVEhJUkRQRVJTT05fT05MWV9MQVlFUixcbiAgfSA9IHt9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkTGF5ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyID0gZmlyc3RQZXJzb25Pbmx5TGF5ZXI7XG4gICAgdGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIgPSB0aGlyZFBlcnNvbk9ubHlMYXllcjtcblxuICAgIHRoaXMubWVzaEFubm90YXRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0ubWVzaGVzLmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2ZpcnN0UGVyc29uT25seScpIHtcbiAgICAgICAgICBtZXNoLmxheWVycy5zZXQodGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXIpO1xuICAgICAgICAgIG1lc2gudHJhdmVyc2UoKGNoaWxkKSA9PiBjaGlsZC5sYXllcnMuc2V0KHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAndGhpcmRQZXJzb25Pbmx5Jykge1xuICAgICAgICAgIG1lc2gubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcik7XG4gICAgICAgICAgbWVzaC50cmF2ZXJzZSgoY2hpbGQpID0+IGNoaWxkLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdhdXRvJykge1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZUhlYWRsZXNzTW9kZWwobWVzaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5faW5pdGlhbGl6ZWRMYXllcnMgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXhjbHVkZVRyaWFuZ2xlcyh0cmlhbmdsZXM6IG51bWJlcltdLCBid3M6IG51bWJlcltdW10sIHNraW5JbmRleDogbnVtYmVyW11bXSwgZXhjbHVkZTogbnVtYmVyW10pOiBudW1iZXIge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgaWYgKGJ3cyAhPSBudWxsICYmIGJ3cy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWFuZ2xlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICBjb25zdCBhID0gdHJpYW5nbGVzW2ldO1xuICAgICAgICBjb25zdCBiID0gdHJpYW5nbGVzW2kgKyAxXTtcbiAgICAgICAgY29uc3QgYyA9IHRyaWFuZ2xlc1tpICsgMl07XG4gICAgICAgIGNvbnN0IGJ3MCA9IGJ3c1thXTtcbiAgICAgICAgY29uc3Qgc2tpbjAgPSBza2luSW5kZXhbYV07XG5cbiAgICAgICAgaWYgKGJ3MFswXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMFswXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncwWzFdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4wWzFdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzBbMl0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjBbMl0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MFszXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMFszXSkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGJ3MSA9IGJ3c1tiXTtcbiAgICAgICAgY29uc3Qgc2tpbjEgPSBza2luSW5kZXhbYl07XG4gICAgICAgIGlmIChidzFbMF0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjFbMF0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MVsxXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMVsxXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncxWzJdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4xWzJdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzFbM10gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjFbM10pKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBidzIgPSBid3NbY107XG4gICAgICAgIGNvbnN0IHNraW4yID0gc2tpbkluZGV4W2NdO1xuICAgICAgICBpZiAoYncyWzBdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4yWzBdKSkgY29udGludWU7XG4gICAgICAgIGlmIChidzJbMV0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjJbMV0pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGJ3MlsyXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMlsyXSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoYncyWzNdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4yWzNdKSkgY29udGludWU7XG5cbiAgICAgICAgdHJpYW5nbGVzW2NvdW50KytdID0gYTtcbiAgICAgICAgdHJpYW5nbGVzW2NvdW50KytdID0gYjtcbiAgICAgICAgdHJpYW5nbGVzW2NvdW50KytdID0gYztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRXJhc2VkTWVzaChzcmM6IFRIUkVFLlNraW5uZWRNZXNoLCBlcmFzaW5nQm9uZXNJbmRleDogbnVtYmVyW10pOiBUSFJFRS5Ta2lubmVkTWVzaCB7XG4gICAgY29uc3QgZHN0ID0gbmV3IFRIUkVFLlNraW5uZWRNZXNoKHNyYy5nZW9tZXRyeS5jbG9uZSgpLCBzcmMubWF0ZXJpYWwpO1xuICAgIGRzdC5uYW1lID0gYCR7c3JjLm5hbWV9KGVyYXNlKWA7XG4gICAgZHN0LmZydXN0dW1DdWxsZWQgPSBzcmMuZnJ1c3R1bUN1bGxlZDtcbiAgICBkc3QubGF5ZXJzLnNldCh0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllcik7XG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IGRzdC5nZW9tZXRyeTtcblxuICAgIGNvbnN0IHNraW5JbmRleEF0dHIgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoJ3NraW5JbmRleCcpO1xuICAgIGNvbnN0IHNraW5JbmRleEF0dHJBcnJheSA9IHNraW5JbmRleEF0dHIgaW5zdGFuY2VvZiBUSFJFRS5HTEJ1ZmZlckF0dHJpYnV0ZSA/IFtdIDogc2tpbkluZGV4QXR0ci5hcnJheTtcbiAgICBjb25zdCBza2luSW5kZXggPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraW5JbmRleEF0dHJBcnJheS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgc2tpbkluZGV4LnB1c2goW1xuICAgICAgICBza2luSW5kZXhBdHRyQXJyYXlbaV0sXG4gICAgICAgIHNraW5JbmRleEF0dHJBcnJheVtpICsgMV0sXG4gICAgICAgIHNraW5JbmRleEF0dHJBcnJheVtpICsgMl0sXG4gICAgICAgIHNraW5JbmRleEF0dHJBcnJheVtpICsgM10sXG4gICAgICBdKTtcbiAgICB9XG5cbiAgICBjb25zdCBza2luV2VpZ2h0QXR0ciA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgnc2tpbldlaWdodCcpO1xuICAgIGNvbnN0IHNraW5XZWlnaHRBdHRyQXJyYXkgPSBza2luV2VpZ2h0QXR0ciBpbnN0YW5jZW9mIFRIUkVFLkdMQnVmZmVyQXR0cmlidXRlID8gW10gOiBza2luV2VpZ2h0QXR0ci5hcnJheTtcbiAgICBjb25zdCBza2luV2VpZ2h0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2luV2VpZ2h0QXR0ckFycmF5Lmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICBza2luV2VpZ2h0LnB1c2goW1xuICAgICAgICBza2luV2VpZ2h0QXR0ckFycmF5W2ldLFxuICAgICAgICBza2luV2VpZ2h0QXR0ckFycmF5W2kgKyAxXSxcbiAgICAgICAgc2tpbldlaWdodEF0dHJBcnJheVtpICsgMl0sXG4gICAgICAgIHNraW5XZWlnaHRBdHRyQXJyYXlbaSArIDNdLFxuICAgICAgXSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xuICAgIGlmICghaW5kZXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBnZW9tZXRyeSBkb2Vzbid0IGhhdmUgYW4gaW5kZXggYnVmZmVyXCIpO1xuICAgIH1cbiAgICBjb25zdCBvbGRUcmlhbmdsZXMgPSBBcnJheS5mcm9tKGluZGV4LmFycmF5KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5fZXhjbHVkZVRyaWFuZ2xlcyhvbGRUcmlhbmdsZXMsIHNraW5XZWlnaHQsIHNraW5JbmRleCwgZXJhc2luZ0JvbmVzSW5kZXgpO1xuICAgIGNvbnN0IG5ld1RyaWFuZ2xlOiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbmV3VHJpYW5nbGVbaV0gPSBvbGRUcmlhbmdsZXNbaV07XG4gICAgfVxuICAgIGdlb21ldHJ5LnNldEluZGV4KG5ld1RyaWFuZ2xlKTtcblxuICAgIC8vIG10b29uIG1hdGVyaWFsIGluY2x1ZGVzIG9uQmVmb3JlUmVuZGVyLiB0aGlzIGlzIHVuc3VwcG9ydGVkIGF0IFNraW5uZWRNZXNoI2Nsb25lXG4gICAgaWYgKHNyYy5vbkJlZm9yZVJlbmRlcikge1xuICAgICAgZHN0Lm9uQmVmb3JlUmVuZGVyID0gc3JjLm9uQmVmb3JlUmVuZGVyO1xuICAgIH1cbiAgICBkc3QuYmluZChuZXcgVEhSRUUuU2tlbGV0b24oc3JjLnNrZWxldG9uLmJvbmVzLCBzcmMuc2tlbGV0b24uYm9uZUludmVyc2VzKSwgbmV3IFRIUkVFLk1hdHJpeDQoKSk7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUhlYWRsZXNzTW9kZWxGb3JTa2lubmVkTWVzaChwYXJlbnQ6IFRIUkVFLk9iamVjdDNELCBtZXNoOiBUSFJFRS5Ta2lubmVkTWVzaCk6IHZvaWQge1xuICAgIGNvbnN0IGVyYXNlQm9uZUluZGV4ZXM6IG51bWJlcltdID0gW107XG4gICAgbWVzaC5za2VsZXRvbi5ib25lcy5mb3JFYWNoKChib25lLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzRXJhc2VUYXJnZXQoYm9uZSkpIGVyYXNlQm9uZUluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgfSk7XG5cbiAgICAvLyBVbmxpa2UgVW5pVlJNIHdlIGRvbid0IGNvcHkgbWVzaCBpZiBubyBpbnZpc2libGUgYm9uZSB3YXMgZm91bmRcbiAgICBpZiAoIWVyYXNlQm9uZUluZGV4ZXMubGVuZ3RoKSB7XG4gICAgICBtZXNoLmxheWVycy5lbmFibGUodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpO1xuICAgICAgbWVzaC5sYXllcnMuZW5hYmxlKHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbWVzaC5sYXllcnMuc2V0KHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKTtcbiAgICBjb25zdCBuZXdNZXNoID0gdGhpcy5fY3JlYXRlRXJhc2VkTWVzaChtZXNoLCBlcmFzZUJvbmVJbmRleGVzKTtcbiAgICBwYXJlbnQuYWRkKG5ld01lc2gpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlSGVhZGxlc3NNb2RlbChub2RlOiBUSFJFRS5PYmplY3QzRCk6IHZvaWQge1xuICAgIGlmIChub2RlLnR5cGUgPT09ICdHcm91cCcpIHtcbiAgICAgIG5vZGUubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcik7XG4gICAgICBpZiAodGhpcy5faXNFcmFzZVRhcmdldChub2RlKSkge1xuICAgICAgICBub2RlLnRyYXZlcnNlKChjaGlsZCkgPT4gY2hpbGQubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIHBhcmVudC5uYW1lID0gYF9oZWFkbGVzc18ke25vZGUubmFtZX1gO1xuICAgICAgICBwYXJlbnQubGF5ZXJzLnNldCh0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllcik7XG4gICAgICAgIG5vZGUucGFyZW50IS5hZGQocGFyZW50KTtcbiAgICAgICAgbm9kZS5jaGlsZHJlblxuICAgICAgICAgIC5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZC50eXBlID09PSAnU2tpbm5lZE1lc2gnKVxuICAgICAgICAgIC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2tpbm5lZE1lc2ggPSBjaGlsZCBhcyBUSFJFRS5Ta2lubmVkTWVzaDtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUhlYWRsZXNzTW9kZWxGb3JTa2lubmVkTWVzaChwYXJlbnQsIHNraW5uZWRNZXNoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ1NraW5uZWRNZXNoJykge1xuICAgICAgY29uc3Qgc2tpbm5lZE1lc2ggPSBub2RlIGFzIFRIUkVFLlNraW5uZWRNZXNoO1xuICAgICAgdGhpcy5fY3JlYXRlSGVhZGxlc3NNb2RlbEZvclNraW5uZWRNZXNoKG5vZGUucGFyZW50ISwgc2tpbm5lZE1lc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5faXNFcmFzZVRhcmdldChub2RlKSkge1xuICAgICAgICBub2RlLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpO1xuICAgICAgICBub2RlLnRyYXZlcnNlKChjaGlsZCkgPT4gY2hpbGQubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzRXJhc2VUYXJnZXQoYm9uZTogVEhSRUUuT2JqZWN0M0QpOiBib29sZWFuIHtcbiAgICBpZiAoYm9uZSA9PT0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgnaGVhZCcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFib25lLnBhcmVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNFcmFzZVRhcmdldChib25lLnBhcmVudCk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgKiBhcyBWMFZSTSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtLTAuMCc7XG5pbXBvcnQgdHlwZSAqIGFzIFYxVlJNU2NoZW1hIGZyb20gJ0BwaXhpdi90eXBlcy12cm1jLXZybS0xLjAnO1xuaW1wb3J0IHR5cGUgeyBHTFRGLCBHTFRGTG9hZGVyUGx1Z2luLCBHTFRGUGFyc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi4vaHVtYW5vaWQvVlJNSHVtYW5vaWQnO1xuaW1wb3J0IHsgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGVzIH0gZnJvbSAnLi4vdXRpbHMvZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGUnO1xuaW1wb3J0IHsgVlJNRmlyc3RQZXJzb24gfSBmcm9tICcuL1ZSTUZpcnN0UGVyc29uJztcbmltcG9ydCB0eXBlIHsgVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbiB9IGZyb20gJy4vVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbic7XG5pbXBvcnQgdHlwZSB7IFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25UeXBlIH0gZnJvbSAnLi9WUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZSc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TID0gbmV3IFNldChbJzEuMCcsICcxLjAtYmV0YSddKTtcblxuLyoqXG4gKiBBIHBsdWdpbiBvZiBHTFRGTG9hZGVyIHRoYXQgaW1wb3J0cyBhIHtAbGluayBWUk1GaXJzdFBlcnNvbn0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxuICovXG5leHBvcnQgY2xhc3MgVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgcHVibGljIHJlYWRvbmx5IHBhcnNlcjogR0xURlBhcnNlcjtcblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAvLyBXZSBzaG91bGQgdXNlIHRoZSBleHRlbnNpb24gbmFtZSBpbnN0ZWFkIGJ1dCB3ZSBoYXZlIG11bHRpcGxlIHBsdWdpbnMgZm9yIGFuIGV4dGVuc2lvbi4uLlxuICAgIHJldHVybiAnVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW4nO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFmdGVyUm9vdChnbHRmOiBHTFRGKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdnJtSHVtYW5vaWQgPSBnbHRmLnVzZXJEYXRhLnZybUh1bWFub2lkIGFzIFZSTUh1bWFub2lkIHwgdW5kZWZpbmVkO1xuXG4gICAgLy8gZXhwbGljaXRseSBkaXN0aW5ndWlzaCBudWxsIGFuZCB1bmRlZmluZWRcbiAgICAvLyBzaW5jZSB2cm1IdW1hbm9pZCBtaWdodCBiZSBudWxsIGFzIGEgcmVzdWx0XG4gICAgaWYgKHZybUh1bWFub2lkID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh2cm1IdW1hbm9pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdWUk1GaXJzdFBlcnNvbkxvYWRlclBsdWdpbjogdnJtSHVtYW5vaWQgaXMgdW5kZWZpbmVkLiBWUk1IdW1hbm9pZExvYWRlclBsdWdpbiBoYXZlIHRvIGJlIHVzZWQgZmlyc3QnLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBnbHRmLnVzZXJEYXRhLnZybUZpcnN0UGVyc29uID0gYXdhaXQgdGhpcy5faW1wb3J0KGdsdGYsIHZybUh1bWFub2lkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgYSB7QGxpbmsgVlJNRmlyc3RQZXJzb259IGZyb20gYSBWUk0uXG4gICAqXG4gICAqIEBwYXJhbSBnbHRmIEEgcGFyc2VkIHJlc3VsdCBvZiBHTFRGIHRha2VuIGZyb20gR0xURkxvYWRlclxuICAgKiBAcGFyYW0gaHVtYW5vaWQgQSB7QGxpbmsgVlJNSHVtYW5vaWR9IGluc3RhbmNlIHRoYXQgcmVwcmVzZW50cyB0aGUgVlJNXG4gICAqL1xuXG4gIHByaXZhdGUgYXN5bmMgX2ltcG9ydChnbHRmOiBHTFRGLCBodW1hbm9pZDogVlJNSHVtYW5vaWQgfCBudWxsKTogUHJvbWlzZTxWUk1GaXJzdFBlcnNvbiB8IG51bGw+IHtcbiAgICBpZiAoaHVtYW5vaWQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdjFSZXN1bHQgPSBhd2FpdCB0aGlzLl92MUltcG9ydChnbHRmLCBodW1hbm9pZCk7XG4gICAgaWYgKHYxUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjFSZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdjBSZXN1bHQgPSBhd2FpdCB0aGlzLl92MEltcG9ydChnbHRmLCBodW1hbm9pZCk7XG4gICAgaWYgKHYwUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjBSZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MUltcG9ydChnbHRmOiBHTFRGLCBodW1hbm9pZDogVlJNSHVtYW5vaWQpOiBQcm9taXNlPFZSTUZpcnN0UGVyc29uIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSB2cm1cbiAgICBjb25zdCBpc1ZSTVVzZWQgPSBqc29uLmV4dGVuc2lvbnNVc2VkPy5pbmRleE9mKCdWUk1DX3ZybScpICE9PSAtMTtcbiAgICBpZiAoIWlzVlJNVXNlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ZW5zaW9uID0ganNvbi5leHRlbnNpb25zPy5bJ1ZSTUNfdnJtJ10gYXMgVjFWUk1TY2hlbWEuVlJNQ1ZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIWV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlY1ZlcnNpb24gPSBleHRlbnNpb24uc3BlY1ZlcnNpb247XG4gICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TLmhhcyhzcGVjVmVyc2lvbikpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW46IFVua25vd24gVlJNQ192cm0gc3BlY1ZlcnNpb24gXCIke3NwZWNWZXJzaW9ufVwiYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFGaXJzdFBlcnNvbiA9IGV4dGVuc2lvbi5maXJzdFBlcnNvbjtcblxuICAgIGNvbnN0IG1lc2hBbm5vdGF0aW9uczogVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvbltdID0gW107XG4gICAgY29uc3Qgbm9kZVByaW1pdGl2ZXNNYXAgPSBhd2FpdCBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZXMoZ2x0Zik7XG4gICAgQXJyYXkuZnJvbShub2RlUHJpbWl0aXZlc01hcC5lbnRyaWVzKCkpLmZvckVhY2goKFtub2RlSW5kZXgsIHByaW1pdGl2ZXNdKSA9PiB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uID0gc2NoZW1hRmlyc3RQZXJzb24/Lm1lc2hBbm5vdGF0aW9ucz8uZmluZCgoYSkgPT4gYS5ub2RlID09PSBub2RlSW5kZXgpO1xuXG4gICAgICBtZXNoQW5ub3RhdGlvbnMucHVzaCh7XG4gICAgICAgIG1lc2hlczogcHJpbWl0aXZlcyxcbiAgICAgICAgdHlwZTogYW5ub3RhdGlvbj8udHlwZSA/PyAnYXV0bycsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgVlJNRmlyc3RQZXJzb24oaHVtYW5vaWQsIG1lc2hBbm5vdGF0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MEltcG9ydChnbHRmOiBHTFRGLCBodW1hbm9pZDogVlJNSHVtYW5vaWQpOiBQcm9taXNlPFZSTUZpcnN0UGVyc29uIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICBjb25zdCB2cm1FeHQgPSBqc29uLmV4dGVuc2lvbnM/LlZSTSBhcyBWMFZSTS5WUk0gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCF2cm1FeHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYUZpcnN0UGVyc29uOiBWMFZSTS5GaXJzdFBlcnNvbiB8IHVuZGVmaW5lZCA9IHZybUV4dC5maXJzdFBlcnNvbjtcbiAgICBpZiAoIXNjaGVtYUZpcnN0UGVyc29uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNoQW5ub3RhdGlvbnM6IFZSTUZpcnN0UGVyc29uTWVzaEFubm90YXRpb25bXSA9IFtdO1xuICAgIGNvbnN0IG5vZGVQcmltaXRpdmVzTWFwID0gYXdhaXQgZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGVzKGdsdGYpO1xuXG4gICAgQXJyYXkuZnJvbShub2RlUHJpbWl0aXZlc01hcC5lbnRyaWVzKCkpLmZvckVhY2goKFtub2RlSW5kZXgsIHByaW1pdGl2ZXNdKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWFOb2RlID0ganNvbi5ub2RlcyFbbm9kZUluZGV4XTtcblxuICAgICAgY29uc3QgZmxhZyA9IHNjaGVtYUZpcnN0UGVyc29uLm1lc2hBbm5vdGF0aW9uc1xuICAgICAgICA/IHNjaGVtYUZpcnN0UGVyc29uLm1lc2hBbm5vdGF0aW9ucy5maW5kKChhKSA9PiBhLm1lc2ggPT09IHNjaGVtYU5vZGUubWVzaClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgIG1lc2hBbm5vdGF0aW9ucy5wdXNoKHtcbiAgICAgICAgbWVzaGVzOiBwcmltaXRpdmVzLFxuICAgICAgICB0eXBlOiB0aGlzLl9jb252ZXJ0VjBGbGFnVG9WMVR5cGUoZmxhZz8uZmlyc3RQZXJzb25GbGFnKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBWUk1GaXJzdFBlcnNvbihodW1hbm9pZCwgbWVzaEFubm90YXRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnZlcnRWMEZsYWdUb1YxVHlwZShmbGFnOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZSB7XG4gICAgaWYgKGZsYWcgPT09ICdGaXJzdFBlcnNvbk9ubHknKSB7XG4gICAgICByZXR1cm4gJ2ZpcnN0UGVyc29uT25seSc7XG4gICAgfSBlbHNlIGlmIChmbGFnID09PSAnVGhpcmRQZXJzb25Pbmx5Jykge1xuICAgICAgcmV0dXJuICd0aGlyZFBlcnNvbk9ubHknO1xuICAgIH0gZWxzZSBpZiAoZmxhZyA9PT0gJ0JvdGgnKSB7XG4gICAgICByZXR1cm4gJ2JvdGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAnQXV0bycgZXZlbiBpbiBWUk0wXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92cm0tYy9VbmlWUk0vYmxvYi8wN2Q5OGUyZjFhYmM1MjhkMzg3Zjg2MGQyMjI0ZDA4NTViMGQwYjU5L0Fzc2V0cy9WUk0vUnVudGltZS9GaXJzdFBlcnNvbi9WUk1GaXJzdFBlcnNvbi5jcyNMMTE3LUwxMTlcbiAgICAgIHJldHVybiAnYXV0byc7XG4gICAgfVxuICB9XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbmV4cG9ydCBjb25zdCBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZSA9IHtcbiAgQXV0bzogJ2F1dG8nLFxuICBCb3RoOiAnYm90aCcsXG4gIFRoaXJkUGVyc29uT25seTogJ3RoaXJkUGVyc29uT25seScsXG4gIEZpcnN0UGVyc29uT25seTogJ2ZpcnN0UGVyc29uT25seScsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZSA9XG4gICh0eXBlb2YgVlJNRmlyc3RQZXJzb25NZXNoQW5ub3RhdGlvblR5cGUpW2tleW9mIHR5cGVvZiBWUk1GaXJzdFBlcnNvbk1lc2hBbm5vdGF0aW9uVHlwZV07XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNSHVtYW5Cb25lIH0gZnJvbSAnLi4vVlJNSHVtYW5Cb25lJztcbmltcG9ydCB7IFZSTUh1bWFub2lkIH0gZnJvbSAnLi4vVlJNSHVtYW5vaWQnO1xuXG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF92M0IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3F1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuZXhwb3J0IGNsYXNzIFZSTUh1bWFub2lkSGVscGVyIGV4dGVuZHMgVEhSRUUuR3JvdXAge1xuICBwdWJsaWMgcmVhZG9ubHkgdnJtSHVtYW5vaWQ6IFZSTUh1bWFub2lkO1xuICBwcml2YXRlIF9ib25lQXhlc01hcDogTWFwPFZSTUh1bWFuQm9uZSwgVEhSRUUuQXhlc0hlbHBlcj47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGh1bWFub2lkOiBWUk1IdW1hbm9pZCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZybUh1bWFub2lkID0gaHVtYW5vaWQ7XG5cbiAgICB0aGlzLl9ib25lQXhlc01hcCA9IG5ldyBNYXAoKTtcblxuICAgIE9iamVjdC52YWx1ZXMoaHVtYW5vaWQuaHVtYW5Cb25lcykuZm9yRWFjaCgoYm9uZSkgPT4ge1xuICAgICAgY29uc3QgaGVscGVyID0gbmV3IFRIUkVFLkF4ZXNIZWxwZXIoMS4wKTtcblxuICAgICAgaGVscGVyLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcblxuICAgICAgKGhlbHBlci5tYXRlcmlhbCBhcyBUSFJFRS5NYXRlcmlhbCkuZGVwdGhUZXN0ID0gZmFsc2U7XG4gICAgICAoaGVscGVyLm1hdGVyaWFsIGFzIFRIUkVFLk1hdGVyaWFsKS5kZXB0aFdyaXRlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuYWRkKGhlbHBlcik7XG5cbiAgICAgIHRoaXMuX2JvbmVBeGVzTWFwLnNldChib25lLCBoZWxwZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLl9ib25lQXhlc01hcC52YWx1ZXMoKSkuZm9yRWFjaCgoYXhlcykgPT4ge1xuICAgICAgYXhlcy5nZW9tZXRyeS5kaXNwb3NlKCk7XG4gICAgICAoYXhlcy5tYXRlcmlhbCBhcyBUSFJFRS5NYXRlcmlhbCkuZGlzcG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU1hdHJpeFdvcmxkKGZvcmNlOiBib29sZWFuKTogdm9pZCB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLl9ib25lQXhlc01hcC5lbnRyaWVzKCkpLmZvckVhY2goKFtib25lLCBheGVzXSkgPT4ge1xuICAgICAgYm9uZS5ub2RlLnVwZGF0ZVdvcmxkTWF0cml4KHRydWUsIGZhbHNlKTtcblxuICAgICAgYm9uZS5ub2RlLm1hdHJpeFdvcmxkLmRlY29tcG9zZShfdjNBLCBfcXVhdEEsIF92M0IpO1xuXG4gICAgICBjb25zdCBzY2FsZSA9IF92M0Euc2V0KDAuMSwgMC4xLCAwLjEpLmRpdmlkZShfdjNCKTtcbiAgICAgIGF4ZXMubWF0cml4LmNvcHkoYm9uZS5ub2RlLm1hdHJpeFdvcmxkKS5zY2FsZShzY2FsZSk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51cGRhdGVNYXRyaXhXb3JsZChmb3JjZSk7XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuaW1wb3J0IHsgVlJNSHVtYW5Cb25lTmFtZSB9IGZyb20gJy4vVlJNSHVtYW5Cb25lTmFtZSc7XG5cbi8qKlxuICogVGhlIGxpc3Qgb2Yge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LiBEZXBlbmRlbmN5IGF3YXJlLlxuICovXG5leHBvcnQgY29uc3QgVlJNSHVtYW5Cb25lTGlzdDogVlJNSHVtYW5Cb25lTmFtZVtdID0gW1xuICAnaGlwcycsXG4gICdzcGluZScsXG4gICdjaGVzdCcsXG4gICd1cHBlckNoZXN0JyxcbiAgJ25lY2snLFxuXG4gICdoZWFkJyxcbiAgJ2xlZnRFeWUnLFxuICAncmlnaHRFeWUnLFxuICAnamF3JyxcblxuICAnbGVmdFVwcGVyTGVnJyxcbiAgJ2xlZnRMb3dlckxlZycsXG4gICdsZWZ0Rm9vdCcsXG4gICdsZWZ0VG9lcycsXG5cbiAgJ3JpZ2h0VXBwZXJMZWcnLFxuICAncmlnaHRMb3dlckxlZycsXG4gICdyaWdodEZvb3QnLFxuICAncmlnaHRUb2VzJyxcblxuICAnbGVmdFNob3VsZGVyJyxcbiAgJ2xlZnRVcHBlckFybScsXG4gICdsZWZ0TG93ZXJBcm0nLFxuICAnbGVmdEhhbmQnLFxuXG4gICdyaWdodFNob3VsZGVyJyxcbiAgJ3JpZ2h0VXBwZXJBcm0nLFxuICAncmlnaHRMb3dlckFybScsXG4gICdyaWdodEhhbmQnLFxuXG4gICdsZWZ0VGh1bWJNZXRhY2FycGFsJyxcbiAgJ2xlZnRUaHVtYlByb3hpbWFsJyxcbiAgJ2xlZnRUaHVtYkRpc3RhbCcsXG4gICdsZWZ0SW5kZXhQcm94aW1hbCcsXG4gICdsZWZ0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICAnbGVmdEluZGV4RGlzdGFsJyxcbiAgJ2xlZnRNaWRkbGVQcm94aW1hbCcsXG4gICdsZWZ0TWlkZGxlSW50ZXJtZWRpYXRlJyxcbiAgJ2xlZnRNaWRkbGVEaXN0YWwnLFxuICAnbGVmdFJpbmdQcm94aW1hbCcsXG4gICdsZWZ0UmluZ0ludGVybWVkaWF0ZScsXG4gICdsZWZ0UmluZ0Rpc3RhbCcsXG4gICdsZWZ0TGl0dGxlUHJveGltYWwnLFxuICAnbGVmdExpdHRsZUludGVybWVkaWF0ZScsXG4gICdsZWZ0TGl0dGxlRGlzdGFsJyxcblxuICAncmlnaHRUaHVtYk1ldGFjYXJwYWwnLFxuICAncmlnaHRUaHVtYlByb3hpbWFsJyxcbiAgJ3JpZ2h0VGh1bWJEaXN0YWwnLFxuICAncmlnaHRJbmRleFByb3hpbWFsJyxcbiAgJ3JpZ2h0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICAncmlnaHRJbmRleERpc3RhbCcsXG4gICdyaWdodE1pZGRsZVByb3hpbWFsJyxcbiAgJ3JpZ2h0TWlkZGxlSW50ZXJtZWRpYXRlJyxcbiAgJ3JpZ2h0TWlkZGxlRGlzdGFsJyxcbiAgJ3JpZ2h0UmluZ1Byb3hpbWFsJyxcbiAgJ3JpZ2h0UmluZ0ludGVybWVkaWF0ZScsXG4gICdyaWdodFJpbmdEaXN0YWwnLFxuICAncmlnaHRMaXR0bGVQcm94aW1hbCcsXG4gICdyaWdodExpdHRsZUludGVybWVkaWF0ZScsXG4gICdyaWdodExpdHRsZURpc3RhbCcsXG5dO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXG4vKipcbiAqIFRoZSBuYW1lcyBvZiB7QGxpbmsgVlJNSHVtYW5vaWR9IGJvbmUgbmFtZXMuXG4gKlxuICogUmVmOiBodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvdnJtLXNwZWNpZmljYXRpb24vYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi9WUk1DX3ZybS0xLjAvaHVtYW5vaWQubWRcbiAqL1xuZXhwb3J0IGNvbnN0IFZSTUh1bWFuQm9uZU5hbWUgPSB7XG4gIEhpcHM6ICdoaXBzJyxcbiAgU3BpbmU6ICdzcGluZScsXG4gIENoZXN0OiAnY2hlc3QnLFxuICBVcHBlckNoZXN0OiAndXBwZXJDaGVzdCcsXG4gIE5lY2s6ICduZWNrJyxcblxuICBIZWFkOiAnaGVhZCcsXG4gIExlZnRFeWU6ICdsZWZ0RXllJyxcbiAgUmlnaHRFeWU6ICdyaWdodEV5ZScsXG4gIEphdzogJ2phdycsXG5cbiAgTGVmdFVwcGVyTGVnOiAnbGVmdFVwcGVyTGVnJyxcbiAgTGVmdExvd2VyTGVnOiAnbGVmdExvd2VyTGVnJyxcbiAgTGVmdEZvb3Q6ICdsZWZ0Rm9vdCcsXG4gIExlZnRUb2VzOiAnbGVmdFRvZXMnLFxuXG4gIFJpZ2h0VXBwZXJMZWc6ICdyaWdodFVwcGVyTGVnJyxcbiAgUmlnaHRMb3dlckxlZzogJ3JpZ2h0TG93ZXJMZWcnLFxuICBSaWdodEZvb3Q6ICdyaWdodEZvb3QnLFxuICBSaWdodFRvZXM6ICdyaWdodFRvZXMnLFxuXG4gIExlZnRTaG91bGRlcjogJ2xlZnRTaG91bGRlcicsXG4gIExlZnRVcHBlckFybTogJ2xlZnRVcHBlckFybScsXG4gIExlZnRMb3dlckFybTogJ2xlZnRMb3dlckFybScsXG4gIExlZnRIYW5kOiAnbGVmdEhhbmQnLFxuXG4gIFJpZ2h0U2hvdWxkZXI6ICdyaWdodFNob3VsZGVyJyxcbiAgUmlnaHRVcHBlckFybTogJ3JpZ2h0VXBwZXJBcm0nLFxuICBSaWdodExvd2VyQXJtOiAncmlnaHRMb3dlckFybScsXG4gIFJpZ2h0SGFuZDogJ3JpZ2h0SGFuZCcsXG5cbiAgTGVmdFRodW1iTWV0YWNhcnBhbDogJ2xlZnRUaHVtYk1ldGFjYXJwYWwnLFxuICBMZWZ0VGh1bWJQcm94aW1hbDogJ2xlZnRUaHVtYlByb3hpbWFsJyxcbiAgTGVmdFRodW1iRGlzdGFsOiAnbGVmdFRodW1iRGlzdGFsJyxcbiAgTGVmdEluZGV4UHJveGltYWw6ICdsZWZ0SW5kZXhQcm94aW1hbCcsXG4gIExlZnRJbmRleEludGVybWVkaWF0ZTogJ2xlZnRJbmRleEludGVybWVkaWF0ZScsXG4gIExlZnRJbmRleERpc3RhbDogJ2xlZnRJbmRleERpc3RhbCcsXG4gIExlZnRNaWRkbGVQcm94aW1hbDogJ2xlZnRNaWRkbGVQcm94aW1hbCcsXG4gIExlZnRNaWRkbGVJbnRlcm1lZGlhdGU6ICdsZWZ0TWlkZGxlSW50ZXJtZWRpYXRlJyxcbiAgTGVmdE1pZGRsZURpc3RhbDogJ2xlZnRNaWRkbGVEaXN0YWwnLFxuICBMZWZ0UmluZ1Byb3hpbWFsOiAnbGVmdFJpbmdQcm94aW1hbCcsXG4gIExlZnRSaW5nSW50ZXJtZWRpYXRlOiAnbGVmdFJpbmdJbnRlcm1lZGlhdGUnLFxuICBMZWZ0UmluZ0Rpc3RhbDogJ2xlZnRSaW5nRGlzdGFsJyxcbiAgTGVmdExpdHRsZVByb3hpbWFsOiAnbGVmdExpdHRsZVByb3hpbWFsJyxcbiAgTGVmdExpdHRsZUludGVybWVkaWF0ZTogJ2xlZnRMaXR0bGVJbnRlcm1lZGlhdGUnLFxuICBMZWZ0TGl0dGxlRGlzdGFsOiAnbGVmdExpdHRsZURpc3RhbCcsXG5cbiAgUmlnaHRUaHVtYk1ldGFjYXJwYWw6ICdyaWdodFRodW1iTWV0YWNhcnBhbCcsXG4gIFJpZ2h0VGh1bWJQcm94aW1hbDogJ3JpZ2h0VGh1bWJQcm94aW1hbCcsXG4gIFJpZ2h0VGh1bWJEaXN0YWw6ICdyaWdodFRodW1iRGlzdGFsJyxcbiAgUmlnaHRJbmRleFByb3hpbWFsOiAncmlnaHRJbmRleFByb3hpbWFsJyxcbiAgUmlnaHRJbmRleEludGVybWVkaWF0ZTogJ3JpZ2h0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICBSaWdodEluZGV4RGlzdGFsOiAncmlnaHRJbmRleERpc3RhbCcsXG4gIFJpZ2h0TWlkZGxlUHJveGltYWw6ICdyaWdodE1pZGRsZVByb3hpbWFsJyxcbiAgUmlnaHRNaWRkbGVJbnRlcm1lZGlhdGU6ICdyaWdodE1pZGRsZUludGVybWVkaWF0ZScsXG4gIFJpZ2h0TWlkZGxlRGlzdGFsOiAncmlnaHRNaWRkbGVEaXN0YWwnLFxuICBSaWdodFJpbmdQcm94aW1hbDogJ3JpZ2h0UmluZ1Byb3hpbWFsJyxcbiAgUmlnaHRSaW5nSW50ZXJtZWRpYXRlOiAncmlnaHRSaW5nSW50ZXJtZWRpYXRlJyxcbiAgUmlnaHRSaW5nRGlzdGFsOiAncmlnaHRSaW5nRGlzdGFsJyxcbiAgUmlnaHRMaXR0bGVQcm94aW1hbDogJ3JpZ2h0TGl0dGxlUHJveGltYWwnLFxuICBSaWdodExpdHRsZUludGVybWVkaWF0ZTogJ3JpZ2h0TGl0dGxlSW50ZXJtZWRpYXRlJyxcbiAgUmlnaHRMaXR0bGVEaXN0YWw6ICdyaWdodExpdHRsZURpc3RhbCcsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBWUk1IdW1hbkJvbmVOYW1lID0gKHR5cGVvZiBWUk1IdW1hbkJvbmVOYW1lKVtrZXlvZiB0eXBlb2YgVlJNSHVtYW5Cb25lTmFtZV07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbmltcG9ydCB7IFZSTUh1bWFuQm9uZU5hbWUgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZU5hbWUnO1xuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IG1hcHMgZnJvbSB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0gdG8gaXRzIHBhcmVudCB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0uXG4gKlxuICogUmVmOiBodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvdnJtLXNwZWNpZmljYXRpb24vYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi9WUk1DX3ZybS0xLjAvaHVtYW5vaWQubWRcbiAqL1xuZXhwb3J0IGNvbnN0IFZSTUh1bWFuQm9uZVBhcmVudE1hcDogeyBbYm9uZSBpbiBWUk1IdW1hbkJvbmVOYW1lXTogVlJNSHVtYW5Cb25lTmFtZSB8IG51bGwgfSA9IHtcbiAgaGlwczogbnVsbCxcbiAgc3BpbmU6ICdoaXBzJyxcbiAgY2hlc3Q6ICdzcGluZScsXG4gIHVwcGVyQ2hlc3Q6ICdjaGVzdCcsXG4gIG5lY2s6ICd1cHBlckNoZXN0JyxcblxuICBoZWFkOiAnbmVjaycsXG4gIGxlZnRFeWU6ICdoZWFkJyxcbiAgcmlnaHRFeWU6ICdoZWFkJyxcbiAgamF3OiAnaGVhZCcsXG5cbiAgbGVmdFVwcGVyTGVnOiAnaGlwcycsXG4gIGxlZnRMb3dlckxlZzogJ2xlZnRVcHBlckxlZycsXG4gIGxlZnRGb290OiAnbGVmdExvd2VyTGVnJyxcbiAgbGVmdFRvZXM6ICdsZWZ0Rm9vdCcsXG5cbiAgcmlnaHRVcHBlckxlZzogJ2hpcHMnLFxuICByaWdodExvd2VyTGVnOiAncmlnaHRVcHBlckxlZycsXG4gIHJpZ2h0Rm9vdDogJ3JpZ2h0TG93ZXJMZWcnLFxuICByaWdodFRvZXM6ICdyaWdodEZvb3QnLFxuXG4gIGxlZnRTaG91bGRlcjogJ3VwcGVyQ2hlc3QnLFxuICBsZWZ0VXBwZXJBcm06ICdsZWZ0U2hvdWxkZXInLFxuICBsZWZ0TG93ZXJBcm06ICdsZWZ0VXBwZXJBcm0nLFxuICBsZWZ0SGFuZDogJ2xlZnRMb3dlckFybScsXG5cbiAgcmlnaHRTaG91bGRlcjogJ3VwcGVyQ2hlc3QnLFxuICByaWdodFVwcGVyQXJtOiAncmlnaHRTaG91bGRlcicsXG4gIHJpZ2h0TG93ZXJBcm06ICdyaWdodFVwcGVyQXJtJyxcbiAgcmlnaHRIYW5kOiAncmlnaHRMb3dlckFybScsXG5cbiAgbGVmdFRodW1iTWV0YWNhcnBhbDogJ2xlZnRIYW5kJyxcbiAgbGVmdFRodW1iUHJveGltYWw6ICdsZWZ0VGh1bWJNZXRhY2FycGFsJyxcbiAgbGVmdFRodW1iRGlzdGFsOiAnbGVmdFRodW1iUHJveGltYWwnLFxuICBsZWZ0SW5kZXhQcm94aW1hbDogJ2xlZnRIYW5kJyxcbiAgbGVmdEluZGV4SW50ZXJtZWRpYXRlOiAnbGVmdEluZGV4UHJveGltYWwnLFxuICBsZWZ0SW5kZXhEaXN0YWw6ICdsZWZ0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICBsZWZ0TWlkZGxlUHJveGltYWw6ICdsZWZ0SGFuZCcsXG4gIGxlZnRNaWRkbGVJbnRlcm1lZGlhdGU6ICdsZWZ0TWlkZGxlUHJveGltYWwnLFxuICBsZWZ0TWlkZGxlRGlzdGFsOiAnbGVmdE1pZGRsZUludGVybWVkaWF0ZScsXG4gIGxlZnRSaW5nUHJveGltYWw6ICdsZWZ0SGFuZCcsXG4gIGxlZnRSaW5nSW50ZXJtZWRpYXRlOiAnbGVmdFJpbmdQcm94aW1hbCcsXG4gIGxlZnRSaW5nRGlzdGFsOiAnbGVmdFJpbmdJbnRlcm1lZGlhdGUnLFxuICBsZWZ0TGl0dGxlUHJveGltYWw6ICdsZWZ0SGFuZCcsXG4gIGxlZnRMaXR0bGVJbnRlcm1lZGlhdGU6ICdsZWZ0TGl0dGxlUHJveGltYWwnLFxuICBsZWZ0TGl0dGxlRGlzdGFsOiAnbGVmdExpdHRsZUludGVybWVkaWF0ZScsXG5cbiAgcmlnaHRUaHVtYk1ldGFjYXJwYWw6ICdyaWdodEhhbmQnLFxuICByaWdodFRodW1iUHJveGltYWw6ICdyaWdodFRodW1iTWV0YWNhcnBhbCcsXG4gIHJpZ2h0VGh1bWJEaXN0YWw6ICdyaWdodFRodW1iUHJveGltYWwnLFxuICByaWdodEluZGV4UHJveGltYWw6ICdyaWdodEhhbmQnLFxuICByaWdodEluZGV4SW50ZXJtZWRpYXRlOiAncmlnaHRJbmRleFByb3hpbWFsJyxcbiAgcmlnaHRJbmRleERpc3RhbDogJ3JpZ2h0SW5kZXhJbnRlcm1lZGlhdGUnLFxuICByaWdodE1pZGRsZVByb3hpbWFsOiAncmlnaHRIYW5kJyxcbiAgcmlnaHRNaWRkbGVJbnRlcm1lZGlhdGU6ICdyaWdodE1pZGRsZVByb3hpbWFsJyxcbiAgcmlnaHRNaWRkbGVEaXN0YWw6ICdyaWdodE1pZGRsZUludGVybWVkaWF0ZScsXG4gIHJpZ2h0UmluZ1Byb3hpbWFsOiAncmlnaHRIYW5kJyxcbiAgcmlnaHRSaW5nSW50ZXJtZWRpYXRlOiAncmlnaHRSaW5nUHJveGltYWwnLFxuICByaWdodFJpbmdEaXN0YWw6ICdyaWdodFJpbmdJbnRlcm1lZGlhdGUnLFxuICByaWdodExpdHRsZVByb3hpbWFsOiAncmlnaHRIYW5kJyxcbiAgcmlnaHRMaXR0bGVJbnRlcm1lZGlhdGU6ICdyaWdodExpdHRsZVByb3hpbWFsJyxcbiAgcmlnaHRMaXR0bGVEaXN0YWw6ICdyaWdodExpdHRsZUludGVybWVkaWF0ZScsXG59O1xuIiwgImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IHF1YXRJbnZlcnRDb21wYXQgfSBmcm9tICcuLi91dGlscy9xdWF0SW52ZXJ0Q29tcGF0JztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmUnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmVzIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVzJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lTmFtZSB9IGZyb20gJy4vVlJNSHVtYW5Cb25lTmFtZSc7XG5pbXBvcnQgdHlwZSB7IFZSTVBvc2UgfSBmcm9tICcuL1ZSTVBvc2UnO1xuXG5jb25zdCBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF9xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbi8qKlxuICogQSBjbGFzcyByZXByZXNlbnRzIHRoZSBSaWcgb2YgYSBWUk0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1SaWcge1xuICAvKipcbiAgICogQSB7QGxpbmsgVlJNSHVtYW5Cb25lc30gdGhhdCBjb250YWlucyBhbGwgdGhlIGh1bWFuIGJvbmVzIG9mIHRoZSBWUk0uXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIGdldCB0aGVzZSBib25lcyB1c2luZyB7QGxpbmsgVlJNSHVtYW5vaWQuZ2V0Qm9uZX0uXG4gICAqL1xuICBwdWJsaWMgaHVtYW5Cb25lczogVlJNSHVtYW5Cb25lcztcblxuICAvKipcbiAgICogQSB7QGxpbmsgVlJNUG9zZX0gdGhhdCBpcyBpdHMgZGVmYXVsdCBzdGF0ZS5cbiAgICogTm90ZSB0aGF0IGl0J3Mgbm90IGNvbXBhdGlibGUgd2l0aCB7QGxpbmsgc2V0UG9zZX0gYW5kIHtAbGluayBnZXRQb3NlfSwgc2luY2UgaXQgY29udGFpbnMgbm9uLXJlbGF0aXZlIHZhbHVlcyBvZiBlYWNoIGxvY2FsIHRyYW5zZm9ybXMuXG4gICAqL1xuICBwdWJsaWMgcmVzdFBvc2U6IFZSTVBvc2U7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNSHVtYW5vaWR9LlxuICAgKiBAcGFyYW0gaHVtYW5Cb25lcyBBIHtAbGluayBWUk1IdW1hbkJvbmVzfSBjb250YWlucyBhbGwgdGhlIGJvbmVzIG9mIHRoZSBuZXcgaHVtYW5vaWRcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbkJvbmVzOiBWUk1IdW1hbkJvbmVzKSB7XG4gICAgdGhpcy5odW1hbkJvbmVzID0gaHVtYW5Cb25lcztcblxuICAgIHRoaXMucmVzdFBvc2UgPSB0aGlzLmdldEFic29sdXRlUG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBhYnNvbHV0ZSBwb3NlIG9mIHRoaXMgaHVtYW5vaWQgYXMgYSB7QGxpbmsgVlJNUG9zZX0uXG4gICAqIE5vdGUgdGhhdCB0aGUgb3V0cHV0IHJlc3VsdCB3aWxsIGNvbnRhaW4gaW5pdGlhbCBzdGF0ZSBvZiB0aGUgVlJNIGFuZCBub3QgY29tcGF0aWJsZSBiZXR3ZWVuIGRpZmZlcmVudCBtb2RlbHMuXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgZ2V0UG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXRBYnNvbHV0ZVBvc2UoKTogVlJNUG9zZSB7XG4gICAgY29uc3QgcG9zZSA9IHt9IGFzIFZSTVBvc2U7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmh1bWFuQm9uZXMpLmZvckVhY2goKHZybUJvbmVOYW1lU3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB2cm1Cb25lTmFtZSA9IHZybUJvbmVOYW1lU3RyaW5nIGFzIFZSTUh1bWFuQm9uZU5hbWU7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRCb25lTm9kZSh2cm1Cb25lTmFtZSk7XG5cbiAgICAgIC8vIElnbm9yZSB3aGVuIHRoZXJlIGFyZSBubyBib25lIG9uIHRoZSBWUk1IdW1hbm9pZFxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBwb3NpdGlvbiAvIHJvdGF0aW9uIGZyb20gdGhlIG5vZGVcbiAgICAgIF92M0EuY29weShub2RlLnBvc2l0aW9uKTtcbiAgICAgIF9xdWF0QS5jb3B5KG5vZGUucXVhdGVybmlvbik7XG5cbiAgICAgIC8vIENvbnZlcnQgdG8gcmF3IGFycmF5c1xuICAgICAgcG9zZVt2cm1Cb25lTmFtZV0gPSB7XG4gICAgICAgIHBvc2l0aW9uOiBfdjNBLnRvQXJyYXkoKSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXG4gICAgICAgIHJvdGF0aW9uOiBfcXVhdEEudG9BcnJheSgpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NlIG9mIHRoaXMgaHVtYW5vaWQgYXMgYSB7QGxpbmsgVlJNUG9zZX0uXG4gICAqXG4gICAqIEVhY2ggdHJhbnNmb3JtIGlzIGEgbG9jYWwgdHJhbnNmb3JtIHJlbGF0aXZlIGZyb20gcmVzdCBwb3NlIChULXBvc2UpLlxuICAgKi9cbiAgcHVibGljIGdldFBvc2UoKTogVlJNUG9zZSB7XG4gICAgY29uc3QgcG9zZSA9IHt9IGFzIFZSTVBvc2U7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmh1bWFuQm9uZXMpLmZvckVhY2goKGJvbmVOYW1lU3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBib25lTmFtZSA9IGJvbmVOYW1lU3RyaW5nIGFzIFZSTUh1bWFuQm9uZU5hbWU7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRCb25lTm9kZShib25lTmFtZSk7XG5cbiAgICAgIC8vIElnbm9yZSB3aGVuIHRoZXJlIGFyZSBubyBib25lIG9uIHRoZSBWUk1IdW1hbm9pZFxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGFrZSBhIGRpZmYgZnJvbSByZXN0UG9zZVxuICAgICAgX3YzQS5zZXQoMCwgMCwgMCk7XG4gICAgICBfcXVhdEEuaWRlbnRpdHkoKTtcblxuICAgICAgY29uc3QgcmVzdFN0YXRlID0gdGhpcy5yZXN0UG9zZVtib25lTmFtZV07XG4gICAgICBpZiAocmVzdFN0YXRlPy5wb3NpdGlvbikge1xuICAgICAgICBfdjNBLmZyb21BcnJheShyZXN0U3RhdGUucG9zaXRpb24pLm5lZ2F0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3RTdGF0ZT8ucm90YXRpb24pIHtcbiAgICAgICAgcXVhdEludmVydENvbXBhdChfcXVhdEEuZnJvbUFycmF5KHJlc3RTdGF0ZS5yb3RhdGlvbikpO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgdGhlIHBvc2l0aW9uIC8gcm90YXRpb24gZnJvbSB0aGUgbm9kZVxuICAgICAgX3YzQS5hZGQobm9kZS5wb3NpdGlvbik7XG4gICAgICBfcXVhdEEucHJlbXVsdGlwbHkobm9kZS5xdWF0ZXJuaW9uKTtcblxuICAgICAgLy8gQ29udmVydCB0byByYXcgYXJyYXlzXG4gICAgICBwb3NlW2JvbmVOYW1lXSA9IHtcbiAgICAgICAgcG9zaXRpb246IF92M0EudG9BcnJheSgpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcbiAgICAgICAgcm90YXRpb246IF9xdWF0QS50b0FycmF5KCkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBvc2U7XG4gIH1cblxuICAvKipcbiAgICogTGV0IHRoZSBodW1hbm9pZCBkbyBhIHNwZWNpZmllZCBwb3NlLlxuICAgKlxuICAgKiBFYWNoIHRyYW5zZm9ybSBoYXZlIHRvIGJlIGEgbG9jYWwgdHJhbnNmb3JtIHJlbGF0aXZlIGZyb20gcmVzdCBwb3NlIChULXBvc2UpLlxuICAgKiBZb3UgY2FuIHBhc3Mgd2hhdCB5b3UgZ290IGZyb20ge0BsaW5rIGdldFBvc2V9LlxuICAgKlxuICAgKiBAcGFyYW0gcG9zZU9iamVjdCBBIFtbVlJNUG9zZV1dIHRoYXQgcmVwcmVzZW50cyBhIHNpbmdsZSBwb3NlXG4gICAqL1xuICBwdWJsaWMgc2V0UG9zZShwb3NlT2JqZWN0OiBWUk1Qb3NlKTogdm9pZCB7XG4gICAgT2JqZWN0LmVudHJpZXMocG9zZU9iamVjdCkuZm9yRWFjaCgoW2JvbmVOYW1lU3RyaW5nLCBzdGF0ZV0pID0+IHtcbiAgICAgIGNvbnN0IGJvbmVOYW1lID0gYm9uZU5hbWVTdHJpbmcgYXMgVlJNSHVtYW5Cb25lTmFtZTtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldEJvbmVOb2RlKGJvbmVOYW1lKTtcblxuICAgICAgLy8gSWdub3JlIHdoZW4gdGhlcmUgYXJlIG5vIGJvbmUgdGhhdCBpcyBkZWZpbmVkIGluIHRoZSBwb3NlIG9uIHRoZSBWUk1IdW1hbm9pZFxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdFN0YXRlID0gdGhpcy5yZXN0UG9zZVtib25lTmFtZV07XG4gICAgICBpZiAoIXJlc3RTdGF0ZSkge1xuICAgICAgICAvLyBJdCdzIHZlcnkgdW5saWtlbHkuIFBvc3NpYmx5IGEgYnVnXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwbHkgdGhlIHN0YXRlIHRvIHRoZSBhY3R1YWwgYm9uZVxuICAgICAgaWYgKHN0YXRlPy5wb3NpdGlvbikge1xuICAgICAgICBub2RlLnBvc2l0aW9uLmZyb21BcnJheShzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKHJlc3RTdGF0ZS5wb3NpdGlvbikge1xuICAgICAgICAgIG5vZGUucG9zaXRpb24uYWRkKF92M0EuZnJvbUFycmF5KHJlc3RTdGF0ZS5wb3NpdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZT8ucm90YXRpb24pIHtcbiAgICAgICAgbm9kZS5xdWF0ZXJuaW9uLmZyb21BcnJheShzdGF0ZS5yb3RhdGlvbik7XG5cbiAgICAgICAgaWYgKHJlc3RTdGF0ZS5yb3RhdGlvbikge1xuICAgICAgICAgIG5vZGUucXVhdGVybmlvbi5tdWx0aXBseShfcXVhdEEuZnJvbUFycmF5KHJlc3RTdGF0ZS5yb3RhdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGh1bWFub2lkIHRvIGl0cyByZXN0IHBvc2UuXG4gICAqL1xuICBwdWJsaWMgcmVzZXRQb3NlKCk6IHZvaWQge1xuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucmVzdFBvc2UpLmZvckVhY2goKFtib25lTmFtZSwgcmVzdF0pID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldEJvbmVOb2RlKGJvbmVOYW1lIGFzIFZSTUh1bWFuQm9uZU5hbWUpO1xuXG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdD8ucG9zaXRpb24pIHtcbiAgICAgICAgbm9kZS5wb3NpdGlvbi5mcm9tQXJyYXkocmVzdC5wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN0Py5yb3RhdGlvbikge1xuICAgICAgICBub2RlLnF1YXRlcm5pb24uZnJvbUFycmF5KHJlc3Qucm90YXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGJvbmUgYm91bmQgdG8gYSBzcGVjaWZpZWQge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LCBhcyBhIHtAbGluayBWUk1IdW1hbkJvbmV9LlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XG4gICAqL1xuICBwdWJsaWMgZ2V0Qm9uZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVlJNSHVtYW5Cb25lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5odW1hbkJvbmVzW25hbWVdID8/IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBib25lIGJvdW5kIHRvIGEgc3BlY2lmaWVkIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfSwgYXMgYSBgVEhSRUUuT2JqZWN0M0RgLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XG4gICAqL1xuICBwdWJsaWMgZ2V0Qm9uZU5vZGUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFRIUkVFLk9iamVjdDNEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaHVtYW5Cb25lc1tuYW1lXT8ubm9kZSA/PyBudWxsO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEEgY29tcGF0IGZ1bmN0aW9uIGZvciBgUXVhdGVybmlvbi5pbnZlcnQoKWAgLyBgUXVhdGVybmlvbi5pbnZlcnNlKClgLlxuICogYFF1YXRlcm5pb24uaW52ZXJ0KClgIGlzIGludHJvZHVjZWQgaW4gcjEyMyBhbmQgYFF1YXRlcm5pb24uaW52ZXJzZSgpYCBlbWl0cyBhIHdhcm5pbmcuXG4gKiBXZSBhcmUgZ29pbmcgdG8gdXNlIHRoaXMgY29tcGF0IGZvciBhIHdoaWxlLlxuICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBxdWF0ZXJuaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWF0SW52ZXJ0Q29tcGF0PFQgZXh0ZW5kcyBUSFJFRS5RdWF0ZXJuaW9uPih0YXJnZXQ6IFQpOiBUIHtcbiAgaWYgKCh0YXJnZXQgYXMgYW55KS5pbnZlcnQpIHtcbiAgICB0YXJnZXQuaW52ZXJ0KCk7XG4gIH0gZWxzZSB7XG4gICAgKHRhcmdldCBhcyBhbnkpLmludmVyc2UoKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNSHVtYW5Cb25lTmFtZSwgVlJNSHVtYW5Cb25lcyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgVlJNSHVtYW5Cb25lTGlzdCB9IGZyb20gJy4vVlJNSHVtYW5Cb25lTGlzdCc7XG5pbXBvcnQgeyBWUk1IdW1hbkJvbmVQYXJlbnRNYXAgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZVBhcmVudE1hcCc7XG5pbXBvcnQgeyBWUk1SaWcgfSBmcm9tICcuL1ZSTVJpZyc7XG5cbmNvbnN0IF92M0EgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3F1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9ib25lV29ybGRQb3MgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4vKipcbiAqIEEgY2xhc3MgcmVwcmVzZW50cyB0aGUgbm9ybWFsaXplZCBSaWcgb2YgYSBWUk0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1IdW1hbm9pZFJpZyBleHRlbmRzIFZSTVJpZyB7XG4gIHByb3RlY3RlZCBzdGF0aWMgX3NldHVwVHJhbnNmb3Jtcyhtb2RlbFJpZzogVlJNUmlnKToge1xuICAgIHJpZ0JvbmVzOiBWUk1IdW1hbkJvbmVzO1xuICAgIHJvb3Q6IFRIUkVFLk9iamVjdDNEO1xuICAgIHBhcmVudFdvcmxkUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfTtcbiAgICBib25lUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfTtcbiAgfSB7XG4gICAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3QubmFtZSA9ICdWUk1IdW1hbm9pZFJpZyc7XG5cbiAgICAvLyBzdG9yZSBib25lV29ybGRQb3NpdGlvbnMsIGJvbmVXb3JsZFJvdGF0aW9ucywgYW5kIHBhcmVudFdvcmxkUm90YXRpb25zXG4gICAgY29uc3QgYm9uZVdvcmxkUG9zaXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlZlY3RvcjMgfSA9IHt9O1xuICAgIGNvbnN0IGJvbmVXb3JsZFJvdGF0aW9uczogeyBbYm9uZU5hbWUgaW4gVlJNSHVtYW5Cb25lTmFtZV0/OiBUSFJFRS5RdWF0ZXJuaW9uIH0gPSB7fTtcbiAgICBjb25zdCBib25lUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfSA9IHt9O1xuICAgIGNvbnN0IHBhcmVudFdvcmxkUm90YXRpb25zOiB7IFtib25lTmFtZSBpbiBWUk1IdW1hbkJvbmVOYW1lXT86IFRIUkVFLlF1YXRlcm5pb24gfSA9IHt9O1xuXG4gICAgVlJNSHVtYW5Cb25lTGlzdC5mb3JFYWNoKChib25lTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYm9uZU5vZGUgPSBtb2RlbFJpZy5nZXRCb25lTm9kZShib25lTmFtZSk7XG5cbiAgICAgIGlmIChib25lTm9kZSkge1xuICAgICAgICBjb25zdCBib25lV29ybGRQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIGNvbnN0IGJvbmVXb3JsZFJvdGF0aW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuICAgICAgICBib25lTm9kZS51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7XG4gICAgICAgIGJvbmVOb2RlLm1hdHJpeFdvcmxkLmRlY29tcG9zZShib25lV29ybGRQb3NpdGlvbiwgYm9uZVdvcmxkUm90YXRpb24sIF92M0EpO1xuXG4gICAgICAgIGJvbmVXb3JsZFBvc2l0aW9uc1tib25lTmFtZV0gPSBib25lV29ybGRQb3NpdGlvbjtcbiAgICAgICAgYm9uZVdvcmxkUm90YXRpb25zW2JvbmVOYW1lXSA9IGJvbmVXb3JsZFJvdGF0aW9uO1xuICAgICAgICBib25lUm90YXRpb25zW2JvbmVOYW1lXSA9IGJvbmVOb2RlLnF1YXRlcm5pb24uY2xvbmUoKTtcblxuICAgICAgICBjb25zdCBwYXJlbnRXb3JsZFJvdGF0aW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICAgICAgYm9uZU5vZGUucGFyZW50Py5tYXRyaXhXb3JsZC5kZWNvbXBvc2UoX3YzQSwgcGFyZW50V29ybGRSb3RhdGlvbiwgX3YzQSk7XG4gICAgICAgIHBhcmVudFdvcmxkUm90YXRpb25zW2JvbmVOYW1lXSA9IHBhcmVudFdvcmxkUm90YXRpb247XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBidWlsZCByaWcgaGllcmFyY2h5ICsgc3RvcmUgcGFyZW50V29ybGRSb3RhdGlvbnNcbiAgICBjb25zdCByaWdCb25lczogUGFydGlhbDxWUk1IdW1hbkJvbmVzPiA9IHt9O1xuICAgIFZSTUh1bWFuQm9uZUxpc3QuZm9yRWFjaCgoYm9uZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGJvbmVOb2RlID0gbW9kZWxSaWcuZ2V0Qm9uZU5vZGUoYm9uZU5hbWUpO1xuXG4gICAgICBpZiAoYm9uZU5vZGUpIHtcbiAgICAgICAgY29uc3QgYm9uZVdvcmxkUG9zaXRpb24gPSBib25lV29ybGRQb3NpdGlvbnNbYm9uZU5hbWVdIGFzIFRIUkVFLlZlY3RvcjM7XG5cbiAgICAgICAgLy8gc2VlIHRoZSBuZWFyZXN0IHBhcmVudCBwb3NpdGlvblxuICAgICAgICBsZXQgY3VycmVudEJvbmVOYW1lOiBWUk1IdW1hbkJvbmVOYW1lIHwgbnVsbCA9IGJvbmVOYW1lO1xuICAgICAgICBsZXQgcGFyZW50Qm9uZVdvcmxkUG9zaXRpb246IFRIUkVFLlZlY3RvcjMgfCB1bmRlZmluZWQ7XG4gICAgICAgIHdoaWxlIChwYXJlbnRCb25lV29ybGRQb3NpdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgY3VycmVudEJvbmVOYW1lID0gVlJNSHVtYW5Cb25lUGFyZW50TWFwW2N1cnJlbnRCb25lTmFtZV07XG4gICAgICAgICAgaWYgKGN1cnJlbnRCb25lTmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50Qm9uZVdvcmxkUG9zaXRpb24gPSBib25lV29ybGRQb3NpdGlvbnNbY3VycmVudEJvbmVOYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCB0byBoaWVyYXJjaHlcbiAgICAgICAgY29uc3QgcmlnQm9uZU5vZGUgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgICAgcmlnQm9uZU5vZGUubmFtZSA9ICdOb3JtYWxpemVkXycgKyBib25lTm9kZS5uYW1lO1xuXG4gICAgICAgIGNvbnN0IHBhcmVudFJpZ0JvbmVOb2RlID0gKGN1cnJlbnRCb25lTmFtZSA/IHJpZ0JvbmVzW2N1cnJlbnRCb25lTmFtZV0/Lm5vZGUgOiByb290KSBhcyBUSFJFRS5PYmplY3QzRDtcblxuICAgICAgICBwYXJlbnRSaWdCb25lTm9kZS5hZGQocmlnQm9uZU5vZGUpO1xuICAgICAgICByaWdCb25lTm9kZS5wb3NpdGlvbi5jb3B5KGJvbmVXb3JsZFBvc2l0aW9uKTtcbiAgICAgICAgaWYgKHBhcmVudEJvbmVXb3JsZFBvc2l0aW9uKSB7XG4gICAgICAgICAgcmlnQm9uZU5vZGUucG9zaXRpb24uc3ViKHBhcmVudEJvbmVXb3JsZFBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJpZ0JvbmVzW2JvbmVOYW1lXSA9IHsgbm9kZTogcmlnQm9uZU5vZGUgfTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICByaWdCb25lczogcmlnQm9uZXMgYXMgVlJNSHVtYW5Cb25lcyxcbiAgICAgIHJvb3QsXG4gICAgICBwYXJlbnRXb3JsZFJvdGF0aW9ucyxcbiAgICAgIGJvbmVSb3RhdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkb25seSBvcmlnaW5hbDogVlJNUmlnO1xuICBwdWJsaWMgcmVhZG9ubHkgcm9vdDogVEhSRUUuT2JqZWN0M0Q7XG4gIHByb3RlY3RlZCByZWFkb25seSBfcGFyZW50V29ybGRSb3RhdGlvbnM6IHsgW2JvbmVOYW1lIGluIFZSTUh1bWFuQm9uZU5hbWVdPzogVEhSRUUuUXVhdGVybmlvbiB9O1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2JvbmVSb3RhdGlvbnM6IHsgW2JvbmVOYW1lIGluIFZSTUh1bWFuQm9uZU5hbWVdPzogVEhSRUUuUXVhdGVybmlvbiB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbm9pZDogVlJNUmlnKSB7XG4gICAgY29uc3QgeyByaWdCb25lcywgcm9vdCwgcGFyZW50V29ybGRSb3RhdGlvbnMsIGJvbmVSb3RhdGlvbnMgfSA9IFZSTUh1bWFub2lkUmlnLl9zZXR1cFRyYW5zZm9ybXMoaHVtYW5vaWQpO1xuXG4gICAgc3VwZXIocmlnQm9uZXMpO1xuXG4gICAgdGhpcy5vcmlnaW5hbCA9IGh1bWFub2lkO1xuICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgdGhpcy5fcGFyZW50V29ybGRSb3RhdGlvbnMgPSBwYXJlbnRXb3JsZFJvdGF0aW9ucztcbiAgICB0aGlzLl9ib25lUm90YXRpb25zID0gYm9uZVJvdGF0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhpcyBodW1hbm9pZCByaWcuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIFZSTUh1bWFuQm9uZUxpc3QuZm9yRWFjaCgoYm9uZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGJvbmVOb2RlID0gdGhpcy5vcmlnaW5hbC5nZXRCb25lTm9kZShib25lTmFtZSk7XG5cbiAgICAgIGlmIChib25lTm9kZSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJpZ0JvbmVOb2RlID0gdGhpcy5nZXRCb25lTm9kZShib25lTmFtZSkhO1xuICAgICAgICBjb25zdCBwYXJlbnRXb3JsZFJvdGF0aW9uID0gdGhpcy5fcGFyZW50V29ybGRSb3RhdGlvbnNbYm9uZU5hbWVdITtcbiAgICAgICAgY29uc3QgaW52UGFyZW50V29ybGRSb3RhdGlvbiA9IF9xdWF0QS5jb3B5KHBhcmVudFdvcmxkUm90YXRpb24pLmludmVydCgpO1xuICAgICAgICBjb25zdCBib25lUm90YXRpb24gPSB0aGlzLl9ib25lUm90YXRpb25zW2JvbmVOYW1lXSE7XG5cbiAgICAgICAgYm9uZU5vZGUucXVhdGVybmlvblxuICAgICAgICAgIC5jb3B5KHJpZ0JvbmVOb2RlLnF1YXRlcm5pb24pXG4gICAgICAgICAgLm11bHRpcGx5KHBhcmVudFdvcmxkUm90YXRpb24pXG4gICAgICAgICAgLnByZW11bHRpcGx5KGludlBhcmVudFdvcmxkUm90YXRpb24pXG4gICAgICAgICAgLm11bHRpcGx5KGJvbmVSb3RhdGlvbik7XG5cbiAgICAgICAgLy8gTW92ZSB0aGUgbWFzcyBjZW50ZXIgb2YgdGhlIFZSTVxuICAgICAgICBpZiAoYm9uZU5hbWUgPT09ICdoaXBzJykge1xuICAgICAgICAgIGNvbnN0IGJvbmVXb3JsZFBvc2l0aW9uID0gcmlnQm9uZU5vZGUuZ2V0V29ybGRQb3NpdGlvbihfYm9uZVdvcmxkUG9zKTtcbiAgICAgICAgICBib25lTm9kZS5wYXJlbnQhLnVwZGF0ZVdvcmxkTWF0cml4KHRydWUsIGZhbHNlKTtcbiAgICAgICAgICBjb25zdCBwYXJlbnRXb3JsZE1hdHJpeCA9IGJvbmVOb2RlLnBhcmVudCEubWF0cml4V29ybGQ7XG4gICAgICAgICAgY29uc3QgbG9jYWxQb3NpdGlvbiA9IGJvbmVXb3JsZFBvc2l0aW9uLmFwcGx5TWF0cml4NChwYXJlbnRXb3JsZE1hdHJpeC5pbnZlcnQoKSk7XG4gICAgICAgICAgYm9uZU5vZGUucG9zaXRpb24uY29weShsb2NhbFBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmUgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZSc7XG5pbXBvcnQgdHlwZSB7IFZSTUh1bWFuQm9uZXMgfSBmcm9tICcuL1ZSTUh1bWFuQm9uZXMnO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbkJvbmVOYW1lIH0gZnJvbSAnLi9WUk1IdW1hbkJvbmVOYW1lJztcbmltcG9ydCB0eXBlIHsgVlJNUG9zZSB9IGZyb20gJy4vVlJNUG9zZSc7XG5pbXBvcnQgeyBWUk1SaWcgfSBmcm9tICcuL1ZSTVJpZyc7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZFJpZyB9IGZyb20gJy4vVlJNSHVtYW5vaWRSaWcnO1xuXG4vKipcbiAqIEEgY2xhc3MgcmVwcmVzZW50cyBhIGh1bWFub2lkIG9mIGEgVlJNLlxuICovXG5leHBvcnQgY2xhc3MgVlJNSHVtYW5vaWQge1xuICAvKipcbiAgICogV2hldGhlciBpdCBjb3BpZXMgcG9zZSBmcm9tIG5vcm1hbGl6ZWRIdW1hbkJvbmVzIHRvIHJhd0h1bWFuQm9uZXMgb24ge0BsaW5rIHVwZGF0ZX0uXG4gICAqIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBwdWJsaWMgYXV0b1VwZGF0ZUh1bWFuQm9uZXM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgcmF3IHJpZyBvZiB0aGUgVlJNLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmF3SHVtYW5Cb25lczogVlJNUmlnOyAvLyBUT0RPOiBSZW5hbWVcblxuICAvKipcbiAgICogQSBub3JtYWxpemVkIHJpZyBvZiB0aGUgVlJNLlxuICAgKi9cbiAgcHJpdmF0ZSBfbm9ybWFsaXplZEh1bWFuQm9uZXM6IFZSTUh1bWFub2lkUmlnOyAvLyBUT0RPOiBSZW5hbWVcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGVpdGhlciB7QGxpbmsgcmF3UmVzdFBvc2V9IG9yIHtAbGluayBub3JtYWxpemVkUmVzdFBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHJlc3RQb3NlKCk6IFZSTVBvc2Uge1xuICAgIGNvbnNvbGUud2FybignVlJNSHVtYW5vaWQ6IHJlc3RQb3NlIGlzIGRlcHJlY2F0ZWQuIFVzZSBlaXRoZXIgcmF3UmVzdFBvc2Ugb3Igbm9ybWFsaXplZFJlc3RQb3NlIGluc3RlYWQuJyk7XG5cbiAgICByZXR1cm4gdGhpcy5yYXdSZXN0UG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Qb3NlfSBvZiBpdHMgcmF3IGh1bWFuIGJvbmVzIHRoYXQgaXMgaXRzIGRlZmF1bHQgc3RhdGUuXG4gICAqIE5vdGUgdGhhdCBpdCdzIG5vdCBjb21wYXRpYmxlIHdpdGgge0BsaW5rIHNldFJhd1Bvc2V9IGFuZCB7QGxpbmsgZ2V0UmF3UG9zZX0sIHNpbmNlIGl0IGNvbnRhaW5zIG5vbi1yZWxhdGl2ZSB2YWx1ZXMgb2YgZWFjaCBsb2NhbCB0cmFuc2Zvcm1zLlxuICAgKi9cbiAgcHVibGljIGdldCByYXdSZXN0UG9zZSgpOiBWUk1Qb3NlIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5yZXN0UG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Qb3NlfSBvZiBpdHMgbm9ybWFsaXplZCBodW1hbiBib25lcyB0aGF0IGlzIGl0cyBkZWZhdWx0IHN0YXRlLlxuICAgKiBOb3RlIHRoYXQgaXQncyBub3QgY29tcGF0aWJsZSB3aXRoIHtAbGluayBzZXROb3JtYWxpemVkUG9zZX0gYW5kIHtAbGluayBnZXROb3JtYWxpemVkUG9zZX0sIHNpbmNlIGl0IGNvbnRhaW5zIG5vbi1yZWxhdGl2ZSB2YWx1ZXMgb2YgZWFjaCBsb2NhbCB0cmFuc2Zvcm1zLlxuICAgKi9cbiAgcHVibGljIGdldCBub3JtYWxpemVkUmVzdFBvc2UoKTogVlJNUG9zZSB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLnJlc3RQb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWFwIGZyb20ge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9IHRvIHJhdyB7QGxpbmsgVlJNSHVtYW5Cb25lfXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGh1bWFuQm9uZXMoKTogVlJNSHVtYW5Cb25lcyB7XG4gICAgLy8gYW4gYWxpYXMgb2YgYHJhd0h1bWFuQm9uZXNgXG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMuaHVtYW5Cb25lcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1hcCBmcm9tIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfSB0byByYXcge0BsaW5rIFZSTUh1bWFuQm9uZX1zLlxuICAgKi9cbiAgcHVibGljIGdldCByYXdIdW1hbkJvbmVzKCk6IFZSTUh1bWFuQm9uZXMge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLmh1bWFuQm9uZXM7XG4gIH1cblxuICAvKipcbiAgICogQSBtYXAgZnJvbSB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0gdG8gbm9ybWFsaXplZCB7QGxpbmsgVlJNSHVtYW5Cb25lfXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5vcm1hbGl6ZWRIdW1hbkJvbmVzKCk6IFZSTUh1bWFuQm9uZXMge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5odW1hbkJvbmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSByb290IG9mIG5vcm1hbGl6ZWQge0BsaW5rIFZSTUh1bWFuQm9uZX1zLlxuICAgKi9cbiAgcHVibGljIGdldCBub3JtYWxpemVkSHVtYW5Cb25lc1Jvb3QoKTogVEhSRUUuT2JqZWN0M0Qge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5yb290O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNSHVtYW5vaWR9LlxuICAgKiBAcGFyYW0gaHVtYW5Cb25lcyBBIHtAbGluayBWUk1IdW1hbkJvbmVzfSBjb250YWlucyBhbGwgdGhlIGJvbmVzIG9mIHRoZSBuZXcgaHVtYW5vaWRcbiAgICogQHBhcmFtIGF1dG9VcGRhdGVIdW1hbkJvbmVzIFdoZXRoZXIgaXQgY29waWVzIHBvc2UgZnJvbSBub3JtYWxpemVkSHVtYW5Cb25lcyB0byByYXdIdW1hbkJvbmVzIG9uIHtAbGluayB1cGRhdGV9LiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbkJvbmVzOiBWUk1IdW1hbkJvbmVzLCBvcHRpb25zPzogeyBhdXRvVXBkYXRlSHVtYW5Cb25lcz86IGJvb2xlYW4gfSkge1xuICAgIHRoaXMuYXV0b1VwZGF0ZUh1bWFuQm9uZXMgPSBvcHRpb25zPy5hdXRvVXBkYXRlSHVtYW5Cb25lcyA/PyB0cnVlO1xuICAgIHRoaXMuX3Jhd0h1bWFuQm9uZXMgPSBuZXcgVlJNUmlnKGh1bWFuQm9uZXMpO1xuICAgIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzID0gbmV3IFZSTUh1bWFub2lkUmlnKHRoaXMuX3Jhd0h1bWFuQm9uZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgdGhlIGdpdmVuIHtAbGluayBWUk1IdW1hbm9pZH0gaW50byB0aGlzIG9uZS5cbiAgICogQHBhcmFtIHNvdXJjZSBUaGUge0BsaW5rIFZSTUh1bWFub2lkfSB5b3Ugd2FudCB0byBjb3B5XG4gICAqIEByZXR1cm5zIHRoaXNcbiAgICovXG4gIHB1YmxpYyBjb3B5KHNvdXJjZTogVlJNSHVtYW5vaWQpOiB0aGlzIHtcbiAgICB0aGlzLmF1dG9VcGRhdGVIdW1hbkJvbmVzID0gc291cmNlLmF1dG9VcGRhdGVIdW1hbkJvbmVzO1xuICAgIHRoaXMuX3Jhd0h1bWFuQm9uZXMgPSBuZXcgVlJNUmlnKHNvdXJjZS5odW1hbkJvbmVzKTtcbiAgICB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcyA9IG5ldyBWUk1IdW1hbm9pZFJpZyh0aGlzLl9yYXdIdW1hbkJvbmVzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGlzIHtAbGluayBWUk1IdW1hbm9pZH0uXG4gICAqIEByZXR1cm5zIENvcGllZCB7QGxpbmsgVlJNSHVtYW5vaWR9XG4gICAqL1xuICBwdWJsaWMgY2xvbmUoKTogVlJNSHVtYW5vaWQge1xuICAgIHJldHVybiBuZXcgVlJNSHVtYW5vaWQodGhpcy5odW1hbkJvbmVzLCB7IGF1dG9VcGRhdGVIdW1hbkJvbmVzOiB0aGlzLmF1dG9VcGRhdGVIdW1hbkJvbmVzIH0pLmNvcHkodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGVpdGhlciB7QGxpbmsgZ2V0UmF3QWJzb2x1dGVQb3NlfSBvciB7QGxpbmsgZ2V0Tm9ybWFsaXplZEFic29sdXRlUG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXRBYnNvbHV0ZVBvc2UoKTogVlJNUG9zZSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1ZSTUh1bWFub2lkOiBnZXRBYnNvbHV0ZVBvc2UoKSBpcyBkZXByZWNhdGVkLiBVc2UgZWl0aGVyIGdldFJhd0Fic29sdXRlUG9zZSgpIG9yIGdldE5vcm1hbGl6ZWRBYnNvbHV0ZVBvc2UoKSBpbnN0ZWFkLicsXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmdldFJhd0Fic29sdXRlUG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBhYnNvbHV0ZSBwb3NlIG9mIHRoaXMgcmF3IGh1bWFuIGJvbmVzIGFzIGEge0BsaW5rIFZSTVBvc2V9LlxuICAgKiBOb3RlIHRoYXQgdGhlIG91dHB1dCByZXN1bHQgd2lsbCBjb250YWluIGluaXRpYWwgc3RhdGUgb2YgdGhlIFZSTSBhbmQgbm90IGNvbXBhdGlibGUgYmV0d2VlbiBkaWZmZXJlbnQgbW9kZWxzLlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byB1c2Uge0BsaW5rIGdldFJhd1Bvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0UmF3QWJzb2x1dGVQb3NlKCk6IFZSTVBvc2Uge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLmdldEFic29sdXRlUG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBhYnNvbHV0ZSBwb3NlIG9mIHRoaXMgbm9ybWFsaXplZCBodW1hbiBib25lcyBhcyBhIHtAbGluayBWUk1Qb3NlfS5cbiAgICogTm90ZSB0aGF0IHRoZSBvdXRwdXQgcmVzdWx0IHdpbGwgY29udGFpbiBpbml0aWFsIHN0YXRlIG9mIHRoZSBWUk0gYW5kIG5vdCBjb21wYXRpYmxlIGJldHdlZW4gZGlmZmVyZW50IG1vZGVscy5cbiAgICogWW91IG1pZ2h0IHdhbnQgdG8gdXNlIHtAbGluayBnZXROb3JtYWxpemVkUG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBnZXROb3JtYWxpemVkQWJzb2x1dGVQb3NlKCk6IFZSTVBvc2Uge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5nZXRBYnNvbHV0ZVBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayBnZXRSYXdQb3NlfSBvciB7QGxpbmsgZ2V0Tm9ybWFsaXplZFBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0UG9zZSgpOiBWUk1Qb3NlIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUh1bWFub2lkOiBnZXRQb3NlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIGVpdGhlciBnZXRSYXdQb3NlKCkgb3IgZ2V0Tm9ybWFsaXplZFBvc2UoKSBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3UG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NlIG9mIHJhdyBodW1hbiBib25lcyBhcyBhIHtAbGluayBWUk1Qb3NlfS5cbiAgICpcbiAgICogRWFjaCB0cmFuc2Zvcm0gaXMgYSBsb2NhbCB0cmFuc2Zvcm0gcmVsYXRpdmUgZnJvbSByZXN0IHBvc2UgKFQtcG9zZSkuXG4gICAqL1xuICBwdWJsaWMgZ2V0UmF3UG9zZSgpOiBWUk1Qb3NlIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5nZXRQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2Ugb2Ygbm9ybWFsaXplZCBodW1hbiBib25lcyBhcyBhIHtAbGluayBWUk1Qb3NlfS5cbiAgICpcbiAgICogRWFjaCB0cmFuc2Zvcm0gaXMgYSBsb2NhbCB0cmFuc2Zvcm0gcmVsYXRpdmUgZnJvbSByZXN0IHBvc2UgKFQtcG9zZSkuXG4gICAqL1xuICBwdWJsaWMgZ2V0Tm9ybWFsaXplZFBvc2UoKTogVlJNUG9zZSB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLmdldFBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayBzZXRSYXdQb3NlfSBvciB7QGxpbmsgc2V0Tm9ybWFsaXplZFBvc2V9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgc2V0UG9zZShwb3NlT2JqZWN0OiBWUk1Qb3NlKTogdm9pZCB7XG4gICAgY29uc29sZS53YXJuKCdWUk1IdW1hbm9pZDogc2V0UG9zZSgpIGlzIGRlcHJlY2F0ZWQuIFVzZSBlaXRoZXIgc2V0UmF3UG9zZSgpIG9yIHNldE5vcm1hbGl6ZWRQb3NlKCkgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiB0aGlzLnNldFJhd1Bvc2UocG9zZU9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogTGV0IHRoZSByYXcgaHVtYW4gYm9uZXMgZG8gYSBzcGVjaWZpZWQgcG9zZS5cbiAgICpcbiAgICogRWFjaCB0cmFuc2Zvcm0gaGF2ZSB0byBiZSBhIGxvY2FsIHRyYW5zZm9ybSByZWxhdGl2ZSBmcm9tIHJlc3QgcG9zZSAoVC1wb3NlKS5cbiAgICogWW91IGNhbiBwYXNzIHdoYXQgeW91IGdvdCBmcm9tIHtAbGluayBnZXRSYXdQb3NlfS5cbiAgICpcbiAgICogSWYgeW91IGFyZSB1c2luZyB7QGxpbmsgYXV0b1VwZGF0ZUh1bWFuQm9uZXN9LCB5b3UgbWlnaHQgd2FudCB0byB1c2Uge0BsaW5rIHNldE5vcm1hbGl6ZWRQb3NlfSBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gcG9zZU9iamVjdCBBIHtAbGluayBWUk1Qb3NlfSB0aGF0IHJlcHJlc2VudHMgYSBzaW5nbGUgcG9zZVxuICAgKi9cbiAgcHVibGljIHNldFJhd1Bvc2UocG9zZU9iamVjdDogVlJNUG9zZSk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9yYXdIdW1hbkJvbmVzLnNldFBvc2UocG9zZU9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogTGV0IHRoZSBub3JtYWxpemVkIGh1bWFuIGJvbmVzIGRvIGEgc3BlY2lmaWVkIHBvc2UuXG4gICAqXG4gICAqIEVhY2ggdHJhbnNmb3JtIGhhdmUgdG8gYmUgYSBsb2NhbCB0cmFuc2Zvcm0gcmVsYXRpdmUgZnJvbSByZXN0IHBvc2UgKFQtcG9zZSkuXG4gICAqIFlvdSBjYW4gcGFzcyB3aGF0IHlvdSBnb3QgZnJvbSB7QGxpbmsgZ2V0Tm9ybWFsaXplZFBvc2V9LlxuICAgKlxuICAgKiBAcGFyYW0gcG9zZU9iamVjdCBBIHtAbGluayBWUk1Qb3NlfSB0aGF0IHJlcHJlc2VudHMgYSBzaW5nbGUgcG9zZVxuICAgKi9cbiAgcHVibGljIHNldE5vcm1hbGl6ZWRQb3NlKHBvc2VPYmplY3Q6IFZSTVBvc2UpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMuc2V0UG9zZShwb3NlT2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayByZXNldFJhd1Bvc2V9IG9yIHtAbGluayByZXNldE5vcm1hbGl6ZWRQb3NlfSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIHJlc2V0UG9zZSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUh1bWFub2lkOiByZXNldFBvc2UoKSBpcyBkZXByZWNhdGVkLiBVc2UgZWl0aGVyIHJlc2V0UmF3UG9zZSgpIG9yIHJlc2V0Tm9ybWFsaXplZFBvc2UoKSBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVzZXRSYXdQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHJhdyBodW1hbm9pZCB0byBpdHMgcmVzdCBwb3NlLlxuICAgKlxuICAgKiBJZiB5b3UgYXJlIHVzaW5nIHtAbGluayBhdXRvVXBkYXRlSHVtYW5Cb25lc30sIHlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgcmVzZXROb3JtYWxpemVkUG9zZX0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyByZXNldFJhd1Bvc2UoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0h1bWFuQm9uZXMucmVzZXRQb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIG5vcm1hbGl6ZWQgaHVtYW5vaWQgdG8gaXRzIHJlc3QgcG9zZS5cbiAgICovXG4gIHB1YmxpYyByZXNldE5vcm1hbGl6ZWRQb3NlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy5yZXNldFBvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZWl0aGVyIHtAbGluayBnZXRSYXdCb25lfSBvciB7QGxpbmsgZ2V0Tm9ybWFsaXplZEJvbmV9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0Qm9uZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVlJNSHVtYW5Cb25lIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUh1bWFub2lkOiBnZXRCb25lKCkgaXMgZGVwcmVjYXRlZC4gVXNlIGVpdGhlciBnZXRSYXdCb25lKCkgb3IgZ2V0Tm9ybWFsaXplZEJvbmUoKSBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0UmF3Qm9uZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSByYXcge0BsaW5rIFZSTUh1bWFuQm9uZX0gYm91bmQgdG8gYSBzcGVjaWZpZWQge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XG4gICAqL1xuICBwdWJsaWMgZ2V0UmF3Qm9uZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVlJNSHVtYW5Cb25lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5nZXRCb25lKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5vcm1hbGl6ZWQge0BsaW5rIFZSTUh1bWFuQm9uZX0gYm91bmQgdG8gYSBzcGVjaWZpZWQge0BsaW5rIFZSTUh1bWFuQm9uZU5hbWV9LlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XG4gICAqL1xuICBwdWJsaWMgZ2V0Tm9ybWFsaXplZEJvbmUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFZSTUh1bWFuQm9uZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZWRIdW1hbkJvbmVzLmdldEJvbmUobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGVpdGhlciB7QGxpbmsgZ2V0UmF3Qm9uZU5vZGV9IG9yIHtAbGluayBnZXROb3JtYWxpemVkQm9uZU5vZGV9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0Qm9uZU5vZGUobmFtZTogVlJNSHVtYW5Cb25lTmFtZSk6IFRIUkVFLk9iamVjdDNEIHwgbnVsbCB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1ZSTUh1bWFub2lkOiBnZXRCb25lTm9kZSgpIGlzIGRlcHJlY2F0ZWQuIFVzZSBlaXRoZXIgZ2V0UmF3Qm9uZU5vZGUoKSBvciBnZXROb3JtYWxpemVkQm9uZU5vZGUoKSBpbnN0ZWFkLicsXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmdldFJhd0JvbmVOb2RlKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJhdyBib25lIGFzIGEgYFRIUkVFLk9iamVjdDNEYCBib3VuZCB0byBhIHNwZWNpZmllZCB7QGxpbmsgVlJNSHVtYW5Cb25lTmFtZX0uXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJvbmUgeW91IHdhbnRcbiAgICovXG4gIHB1YmxpYyBnZXRSYXdCb25lTm9kZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVEhSRUUuT2JqZWN0M0QgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SHVtYW5Cb25lcy5nZXRCb25lTm9kZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBub3JtYWxpemVkIGJvbmUgYXMgYSBgVEhSRUUuT2JqZWN0M0RgIGJvdW5kIHRvIGEgc3BlY2lmaWVkIHtAbGluayBWUk1IdW1hbkJvbmVOYW1lfS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgYm9uZSB5b3Ugd2FudFxuICAgKi9cbiAgcHVibGljIGdldE5vcm1hbGl6ZWRCb25lTm9kZShuYW1lOiBWUk1IdW1hbkJvbmVOYW1lKTogVEhSRUUuT2JqZWN0M0QgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplZEh1bWFuQm9uZXMuZ2V0Qm9uZU5vZGUobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBodW1hbm9pZCBjb21wb25lbnQuXG4gICAqXG4gICAqIElmIHtAbGluayBhdXRvVXBkYXRlSHVtYW5Cb25lc30gaXMgYHRydWVgLCBpdCB0cmFuc2ZlcnMgdGhlIHBvc2Ugb2Ygbm9ybWFsaXplZCBodW1hbiBib25lcyB0byByYXcgaHVtYW4gYm9uZXMuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9VcGRhdGVIdW1hbkJvbmVzKSB7XG4gICAgICB0aGlzLl9ub3JtYWxpemVkSHVtYW5Cb25lcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cblxuZXhwb3J0IGNvbnN0IFZSTVJlcXVpcmVkSHVtYW5Cb25lTmFtZSA9IHtcbiAgSGlwczogJ2hpcHMnLFxuICBTcGluZTogJ3NwaW5lJyxcbiAgSGVhZDogJ2hlYWQnLFxuICBMZWZ0VXBwZXJMZWc6ICdsZWZ0VXBwZXJMZWcnLFxuICBMZWZ0TG93ZXJMZWc6ICdsZWZ0TG93ZXJMZWcnLFxuICBMZWZ0Rm9vdDogJ2xlZnRGb290JyxcbiAgUmlnaHRVcHBlckxlZzogJ3JpZ2h0VXBwZXJMZWcnLFxuICBSaWdodExvd2VyTGVnOiAncmlnaHRMb3dlckxlZycsXG4gIFJpZ2h0Rm9vdDogJ3JpZ2h0Rm9vdCcsXG4gIExlZnRVcHBlckFybTogJ2xlZnRVcHBlckFybScsXG4gIExlZnRMb3dlckFybTogJ2xlZnRMb3dlckFybScsXG4gIExlZnRIYW5kOiAnbGVmdEhhbmQnLFxuICBSaWdodFVwcGVyQXJtOiAncmlnaHRVcHBlckFybScsXG4gIFJpZ2h0TG93ZXJBcm06ICdyaWdodExvd2VyQXJtJyxcbiAgUmlnaHRIYW5kOiAncmlnaHRIYW5kJyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFZSTVJlcXVpcmVkSHVtYW5Cb25lTmFtZSA9ICh0eXBlb2YgVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lKVtrZXlvZiB0eXBlb2YgVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lXTtcbiIsICJpbXBvcnQgdHlwZSAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlICogYXMgVjBWUk0gZnJvbSAnQHBpeGl2L3R5cGVzLXZybS0wLjAnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMVZSTVNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy12cm0tMS4wJztcbmltcG9ydCB0eXBlIHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuL1ZSTUh1bWFub2lkJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lcyB9IGZyb20gJy4vVlJNSHVtYW5Cb25lcyc7XG5pbXBvcnQgeyBWUk1SZXF1aXJlZEh1bWFuQm9uZU5hbWUgfSBmcm9tICcuL1ZSTVJlcXVpcmVkSHVtYW5Cb25lTmFtZSc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZEhlbHBlciB9IGZyb20gJy4vaGVscGVycy9WUk1IdW1hbm9pZEhlbHBlcic7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZExvYWRlclBsdWdpbk9wdGlvbnMgfSBmcm9tICcuL1ZSTUh1bWFub2lkTG9hZGVyUGx1Z2luT3B0aW9ucyc7XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TID0gbmV3IFNldChbJzEuMCcsICcxLjAtYmV0YSddKTtcblxuLyoqXG4gKiBBIG1hcCBmcm9tIG9sZCB0aHVtYiBib25lIG5hbWVzIHRvIG5ldyB0aHVtYiBib25lIG5hbWVzXG4gKi9cbmNvbnN0IHRodW1iQm9uZU5hbWVNYXA6IHsgW2tleTogc3RyaW5nXTogVjFWUk1TY2hlbWEuSHVtYW5vaWRIdW1hbkJvbmVOYW1lIHwgdW5kZWZpbmVkIH0gPSB7XG4gIGxlZnRUaHVtYlByb3hpbWFsOiAnbGVmdFRodW1iTWV0YWNhcnBhbCcsXG4gIGxlZnRUaHVtYkludGVybWVkaWF0ZTogJ2xlZnRUaHVtYlByb3hpbWFsJyxcbiAgcmlnaHRUaHVtYlByb3hpbWFsOiAncmlnaHRUaHVtYk1ldGFjYXJwYWwnLFxuICByaWdodFRodW1iSW50ZXJtZWRpYXRlOiAncmlnaHRUaHVtYlByb3hpbWFsJyxcbn07XG5cbi8qKlxuICogQSBwbHVnaW4gb2YgR0xURkxvYWRlciB0aGF0IGltcG9ydHMgYSB7QGxpbmsgVlJNSHVtYW5vaWR9IGZyb20gYSBWUk0gZXh0ZW5zaW9uIG9mIGEgR0xURi5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUh1bWFub2lkTG9hZGVyUGx1Z2luIGltcGxlbWVudHMgR0xURkxvYWRlclBsdWdpbiB7XG4gIC8qKlxuICAgKiBTcGVjaWZ5IGFuIE9iamVjdDNEIHRvIGFkZCB7QGxpbmsgVlJNSHVtYW5vaWRIZWxwZXJ9LlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCBoZWxwZXIgd2lsbCBub3QgYmUgY3JlYXRlZC5cbiAgICogSWYgYHJlbmRlck9yZGVyYCBpcyBzZXQgdG8gdGhlIHJvb3QsIHRoZSBoZWxwZXIgd2lsbCBjb3B5IHRoZSBzYW1lIGByZW5kZXJPcmRlcmAgLlxuICAgKi9cbiAgcHVibGljIGhlbHBlclJvb3Q/OiBUSFJFRS5PYmplY3QzRDtcblxuICBwdWJsaWMgYXV0b1VwZGF0ZUh1bWFuQm9uZXM/OiBib29sZWFuO1xuXG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICByZXR1cm4gJ1ZSTUh1bWFub2lkTG9hZGVyUGx1Z2luJztcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJzZXI6IEdMVEZQYXJzZXIsIG9wdGlvbnM/OiBWUk1IdW1hbm9pZExvYWRlclBsdWdpbk9wdGlvbnMpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICAgIHRoaXMuaGVscGVyUm9vdCA9IG9wdGlvbnM/LmhlbHBlclJvb3Q7XG4gICAgdGhpcy5hdXRvVXBkYXRlSHVtYW5Cb25lcyA9IG9wdGlvbnM/LmF1dG9VcGRhdGVIdW1hbkJvbmVzO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFmdGVyUm9vdChnbHRmOiBHTFRGKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZ2x0Zi51c2VyRGF0YS52cm1IdW1hbm9pZCA9IGF3YWl0IHRoaXMuX2ltcG9ydChnbHRmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgYSB7QGxpbmsgVlJNSHVtYW5vaWR9IGZyb20gYSBWUk0uXG4gICAqXG4gICAqIEBwYXJhbSBnbHRmIEEgcGFyc2VkIHJlc3VsdCBvZiBHTFRGIHRha2VuIGZyb20gR0xURkxvYWRlclxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfaW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTUh1bWFub2lkIHwgbnVsbD4ge1xuICAgIGNvbnN0IHYxUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjFJbXBvcnQoZ2x0Zik7XG4gICAgaWYgKHYxUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdjFSZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdjBSZXN1bHQgPSBhd2FpdCB0aGlzLl92MEltcG9ydChnbHRmKTtcbiAgICBpZiAodjBSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MFJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YxSW1wb3J0KGdsdGY6IEdMVEYpOiBQcm9taXNlPFZSTUh1bWFub2lkIHwgbnVsbD4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uIGFzIEdMVEZTY2hlbWEuSUdMVEY7XG5cbiAgICAvLyBlYXJseSBhYm9ydCBpZiBpdCBkb2Vzbid0IHVzZSB2cm1cbiAgICBjb25zdCBpc1ZSTVVzZWQgPSBqc29uLmV4dGVuc2lvbnNVc2VkPy5pbmRleE9mKCdWUk1DX3ZybScpICE9PSAtMTtcbiAgICBpZiAoIWlzVlJNVXNlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ZW5zaW9uID0ganNvbi5leHRlbnNpb25zPy5bJ1ZSTUNfdnJtJ10gYXMgVjFWUk1TY2hlbWEuVlJNQ1ZSTSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIWV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlY1ZlcnNpb24gPSBleHRlbnNpb24uc3BlY1ZlcnNpb247XG4gICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TLmhhcyhzcGVjVmVyc2lvbikpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW46IFVua25vd24gVlJNQ192cm0gc3BlY1ZlcnNpb24gXCIke3NwZWNWZXJzaW9ufVwiYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFIdW1hbm9pZCA9IGV4dGVuc2lvbi5odW1hbm9pZDtcbiAgICBpZiAoIXNjaGVtYUh1bWFub2lkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb21wYXQ6IDEuMC1iZXRhIHRodW1iIGJvbmUgbmFtZXNcbiAgICAgKlxuICAgICAqIGB0cnVlYCBpZiBgbGVmdFRodW1iSW50ZXJtZWRpYXRlYCBvciBgcmlnaHRUaHVtYkludGVybWVkaWF0ZWAgZXhpc3RzXG4gICAgICovXG4gICAgY29uc3QgZXhpc3RzUHJldmlvdXNUaHVtYk5hbWUgPVxuICAgICAgKHNjaGVtYUh1bWFub2lkLmh1bWFuQm9uZXMgYXMgYW55KS5sZWZ0VGh1bWJJbnRlcm1lZGlhdGUgIT0gbnVsbCB8fFxuICAgICAgKHNjaGVtYUh1bWFub2lkLmh1bWFuQm9uZXMgYXMgYW55KS5yaWdodFRodW1iSW50ZXJtZWRpYXRlICE9IG51bGw7XG5cbiAgICBjb25zdCBodW1hbkJvbmVzOiBQYXJ0aWFsPFZSTUh1bWFuQm9uZXM+ID0ge307XG4gICAgaWYgKHNjaGVtYUh1bWFub2lkLmh1bWFuQm9uZXMgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYUh1bWFub2lkLmh1bWFuQm9uZXMpLm1hcChhc3luYyAoW2JvbmVOYW1lU3RyaW5nLCBzY2hlbWFIdW1hbkJvbmVdKSA9PiB7XG4gICAgICAgICAgbGV0IGJvbmVOYW1lID0gYm9uZU5hbWVTdHJpbmcgYXMgVjFWUk1TY2hlbWEuSHVtYW5vaWRIdW1hbkJvbmVOYW1lO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2NoZW1hSHVtYW5Cb25lLm5vZGU7XG5cbiAgICAgICAgICAvLyBjb21wYXQ6IDEuMC1iZXRhIHByZXZpb3VzIHRodW1iIGJvbmUgbmFtZXNcbiAgICAgICAgICBpZiAoZXhpc3RzUHJldmlvdXNUaHVtYk5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRodW1iQm9uZU5hbWUgPSB0aHVtYkJvbmVOYW1lTWFwW2JvbmVOYW1lXTtcbiAgICAgICAgICAgIGlmICh0aHVtYkJvbmVOYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgYm9uZU5hbWUgPSB0aHVtYkJvbmVOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBhd2FpdCB0aGlzLnBhcnNlci5nZXREZXBlbmRlbmN5KCdub2RlJywgaW5kZXgpO1xuXG4gICAgICAgICAgLy8gaWYgdGhlIHNwZWNpZmllZCBub2RlIGRvZXMgbm90IGV4aXN0LCBlbWl0IGEgd2FybmluZ1xuICAgICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQSBnbFRGIG5vZGUgYm91bmQgdG8gdGhlIGh1bWFub2lkIGJvbmUgJHtib25lTmFtZX0gKGluZGV4ID0gJHtpbmRleH0pIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc2V0IHRvIHRoZSBgaHVtYW5Cb25lc2BcbiAgICAgICAgICBodW1hbkJvbmVzW2JvbmVOYW1lXSA9IHsgbm9kZSB9O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgaHVtYW5vaWQgPSBuZXcgVlJNSHVtYW5vaWQodGhpcy5fZW5zdXJlUmVxdWlyZWRCb25lc0V4aXN0KGh1bWFuQm9uZXMpLCB7XG4gICAgICBhdXRvVXBkYXRlSHVtYW5Cb25lczogdGhpcy5hdXRvVXBkYXRlSHVtYW5Cb25lcyxcbiAgICB9KTtcbiAgICBnbHRmLnNjZW5lLmFkZChodW1hbm9pZC5ub3JtYWxpemVkSHVtYW5Cb25lc1Jvb3QpO1xuXG4gICAgaWYgKHRoaXMuaGVscGVyUm9vdCkge1xuICAgICAgY29uc3QgaGVscGVyID0gbmV3IFZSTUh1bWFub2lkSGVscGVyKGh1bWFub2lkKTtcbiAgICAgIHRoaXMuaGVscGVyUm9vdC5hZGQoaGVscGVyKTtcbiAgICAgIGhlbHBlci5yZW5kZXJPcmRlciA9IHRoaXMuaGVscGVyUm9vdC5yZW5kZXJPcmRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gaHVtYW5vaWQ7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MEltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk1IdW1hbm9pZCB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgY29uc3QgdnJtRXh0ID0ganNvbi5leHRlbnNpb25zPy5WUk0gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdnJtRXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFIdW1hbm9pZDogVjBWUk0uSHVtYW5vaWQgfCB1bmRlZmluZWQgPSB2cm1FeHQuaHVtYW5vaWQ7XG4gICAgaWYgKCFzY2hlbWFIdW1hbm9pZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgaHVtYW5Cb25lczogUGFydGlhbDxWUk1IdW1hbkJvbmVzPiA9IHt9O1xuICAgIGlmIChzY2hlbWFIdW1hbm9pZC5odW1hbkJvbmVzICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBzY2hlbWFIdW1hbm9pZC5odW1hbkJvbmVzLm1hcChhc3luYyAoYm9uZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJvbmVOYW1lID0gYm9uZS5ib25lO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gYm9uZS5ub2RlO1xuXG4gICAgICAgICAgaWYgKGJvbmVOYW1lID09IG51bGwgfHwgaW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBhd2FpdCB0aGlzLnBhcnNlci5nZXREZXBlbmRlbmN5KCdub2RlJywgaW5kZXgpO1xuXG4gICAgICAgICAgLy8gaWYgdGhlIHNwZWNpZmllZCBub2RlIGRvZXMgbm90IGV4aXN0LCBlbWl0IGEgd2FybmluZ1xuICAgICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQSBnbFRGIG5vZGUgYm91bmQgdG8gdGhlIGh1bWFub2lkIGJvbmUgJHtib25lTmFtZX0gKGluZGV4ID0gJHtpbmRleH0pIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbWFwIHRvIG5ldyBib25lIG5hbWVcbiAgICAgICAgICBjb25zdCB0aHVtYkJvbmVOYW1lID0gdGh1bWJCb25lTmFtZU1hcFtib25lTmFtZV07XG4gICAgICAgICAgY29uc3QgbmV3Qm9uZU5hbWUgPSAodGh1bWJCb25lTmFtZSA/PyBib25lTmFtZSkgYXMgVjFWUk1TY2hlbWEuSHVtYW5vaWRIdW1hbkJvbmVOYW1lO1xuXG4gICAgICAgICAgLy8gdjAgVlJNcyBtaWdodCBoYXZlIGEgbXVsdGlwbGUgbm9kZXMgYXR0YWNoZWQgdG8gYSBzaW5nbGUgYm9uZS4uLlxuICAgICAgICAgIC8vIHNvIGlmIHRoZXJlIGFscmVhZHkgaXMgYW4gZW50cnkgaW4gdGhlIGBodW1hbkJvbmVzYCwgc2hvdyBhIHdhcm5pbmcgYW5kIGlnbm9yZSBpdFxuICAgICAgICAgIGlmIChodW1hbkJvbmVzW25ld0JvbmVOYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNdWx0aXBsZSBib25lIGVudHJpZXMgZm9yICR7bmV3Qm9uZU5hbWV9IGRldGVjdGVkIChpbmRleCA9ICR7aW5kZXh9KSwgaWdub3JpbmcgZHVwbGljYXRlZCBlbnRyaWVzLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHNldCB0byB0aGUgYGh1bWFuQm9uZXNgXG4gICAgICAgICAgaHVtYW5Cb25lc1tuZXdCb25lTmFtZV0gPSB7IG5vZGUgfTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGh1bWFub2lkID0gbmV3IFZSTUh1bWFub2lkKHRoaXMuX2Vuc3VyZVJlcXVpcmVkQm9uZXNFeGlzdChodW1hbkJvbmVzKSwge1xuICAgICAgYXV0b1VwZGF0ZUh1bWFuQm9uZXM6IHRoaXMuYXV0b1VwZGF0ZUh1bWFuQm9uZXMsXG4gICAgfSk7XG4gICAgZ2x0Zi5zY2VuZS5hZGQoaHVtYW5vaWQubm9ybWFsaXplZEh1bWFuQm9uZXNSb290KTtcblxuICAgIGlmICh0aGlzLmhlbHBlclJvb3QpIHtcbiAgICAgIGNvbnN0IGhlbHBlciA9IG5ldyBWUk1IdW1hbm9pZEhlbHBlcihodW1hbm9pZCk7XG4gICAgICB0aGlzLmhlbHBlclJvb3QuYWRkKGhlbHBlcik7XG4gICAgICBoZWxwZXIucmVuZGVyT3JkZXIgPSB0aGlzLmhlbHBlclJvb3QucmVuZGVyT3JkZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh1bWFub2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZSByZXF1aXJlZCBib25lcyBleGlzdCBpbiBnaXZlbiBodW1hbiBib25lcy5cbiAgICogQHBhcmFtIGh1bWFuQm9uZXMgSHVtYW4gYm9uZXNcbiAgICogQHJldHVybnMgSHVtYW4gYm9uZXMsIG5vIGxvbmdlciBwYXJ0aWFsIVxuICAgKi9cbiAgcHJpdmF0ZSBfZW5zdXJlUmVxdWlyZWRCb25lc0V4aXN0KGh1bWFuQm9uZXM6IFBhcnRpYWw8VlJNSHVtYW5Cb25lcz4pOiBWUk1IdW1hbkJvbmVzIHtcbiAgICAvLyBlbnN1cmUgcmVxdWlyZWQgYm9uZXMgZXhpc3RcbiAgICBjb25zdCBtaXNzaW5nUmVxdWlyZWRCb25lcyA9IE9iamVjdC52YWx1ZXMoVlJNUmVxdWlyZWRIdW1hbkJvbmVOYW1lKS5maWx0ZXIoXG4gICAgICAocmVxdWlyZWRCb25lTmFtZSkgPT4gaHVtYW5Cb25lc1tyZXF1aXJlZEJvbmVOYW1lXSA9PSBudWxsLFxuICAgICk7XG5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBhcmUgbWlzc2luZyBib25lc1xuICAgIGlmIChtaXNzaW5nUmVxdWlyZWRCb25lcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBWUk1IdW1hbm9pZExvYWRlclBsdWdpbjogVGhlc2UgaHVtYW5vaWQgYm9uZXMgYXJlIHJlcXVpcmVkIGJ1dCBub3QgZXhpc3Q6ICR7bWlzc2luZ1JlcXVpcmVkQm9uZXMuam9pbignLCAnKX1gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHVtYW5Cb25lcyBhcyBWUk1IdW1hbkJvbmVzO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNTG9va0F0IH0gZnJvbSAnLi4vVlJNTG9va0F0JztcbmltcG9ydCB7IEZhbkJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi91dGlscy9GYW5CdWZmZXJHZW9tZXRyeSc7XG5pbXBvcnQgeyBMaW5lQW5kU3BoZXJlQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL3V0aWxzL0xpbmVBbmRTcGhlcmVCdWZmZXJHZW9tZXRyeSc7XG5cbmNvbnN0IF9xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfcXVhdEIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfdjNCID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuY29uc3QgU1FSVF8yX09WRVJfMiA9IE1hdGguc3FydCgyLjApIC8gMi4wO1xuY29uc3QgUVVBVF9YWV9DVzkwID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oMCwgMCwgLVNRUlRfMl9PVkVSXzIsIFNRUlRfMl9PVkVSXzIpO1xuY29uc3QgVkVDM19QT1NJVElWRV9ZID0gbmV3IFRIUkVFLlZlY3RvcjMoMC4wLCAxLjAsIDAuMCk7XG5cbmV4cG9ydCBjbGFzcyBWUk1Mb29rQXRIZWxwZXIgZXh0ZW5kcyBUSFJFRS5Hcm91cCB7XG4gIHB1YmxpYyByZWFkb25seSB2cm1Mb29rQXQ6IFZSTUxvb2tBdDtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWVzaFlhdzogVEhSRUUuTWVzaDxGYW5CdWZmZXJHZW9tZXRyeSwgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWw+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9tZXNoUGl0Y2g6IFRIUkVFLk1lc2g8RmFuQnVmZmVyR2VvbWV0cnksIFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfbGluZVRhcmdldDogVEhSRUUuTGluZVNlZ21lbnRzPExpbmVBbmRTcGhlcmVCdWZmZXJHZW9tZXRyeSwgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWw+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihsb29rQXQ6IFZSTUxvb2tBdCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG5cbiAgICB0aGlzLnZybUxvb2tBdCA9IGxvb2tBdDtcblxuICAgIHtcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IEZhbkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICBnZW9tZXRyeS5yYWRpdXMgPSAwLjU7XG5cbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgICAgY29sb3I6IDB4MDBmZjAwLFxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuICAgICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9tZXNoUGl0Y2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgdGhpcy5hZGQodGhpcy5fbWVzaFBpdGNoKTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBGYW5CdWZmZXJHZW9tZXRyeSgpO1xuICAgICAgZ2VvbWV0cnkucmFkaXVzID0gMC41O1xuXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgIGNvbG9yOiAweGZmMDAwMCxcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcbiAgICAgICAgZGVwdGhUZXN0OiBmYWxzZSxcbiAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fbWVzaFlhdyA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICB0aGlzLmFkZCh0aGlzLl9tZXNoWWF3KTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBMaW5lQW5kU3BoZXJlQnVmZmVyR2VvbWV0cnkoKTtcbiAgICAgIGdlb21ldHJ5LnJhZGl1cyA9IDAuMTtcblxuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2xpbmVUYXJnZXQgPSBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICB0aGlzLl9saW5lVGFyZ2V0LmZydXN0dW1DdWxsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWRkKHRoaXMuX2xpbmVUYXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX21lc2hZYXcuZ2VvbWV0cnkuZGlzcG9zZSgpO1xuICAgIHRoaXMuX21lc2hZYXcubWF0ZXJpYWwuZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5fbWVzaFBpdGNoLmdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9tZXNoUGl0Y2gubWF0ZXJpYWwuZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5fbGluZVRhcmdldC5nZW9tZXRyeS5kaXNwb3NlKCk7XG4gICAgdGhpcy5fbGluZVRhcmdldC5tYXRlcmlhbC5kaXNwb3NlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlTWF0cml4V29ybGQoZm9yY2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyB1cGRhdGUgZ2VvbWV0cmllc1xuICAgIGNvbnN0IHlhdyA9IFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy52cm1Mb29rQXQueWF3O1xuICAgIHRoaXMuX21lc2hZYXcuZ2VvbWV0cnkudGhldGEgPSB5YXc7XG4gICAgdGhpcy5fbWVzaFlhdy5nZW9tZXRyeS51cGRhdGUoKTtcblxuICAgIGNvbnN0IHBpdGNoID0gVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnZybUxvb2tBdC5waXRjaDtcbiAgICB0aGlzLl9tZXNoUGl0Y2guZ2VvbWV0cnkudGhldGEgPSBwaXRjaDtcbiAgICB0aGlzLl9tZXNoUGl0Y2guZ2VvbWV0cnkudXBkYXRlKCk7XG5cbiAgICAvLyBnZXQgd29ybGQgcG9zaXRpb24gYW5kIHF1YXRlcm5pb25cbiAgICB0aGlzLnZybUxvb2tBdC5nZXRMb29rQXRXb3JsZFBvc2l0aW9uKF92M0EpO1xuICAgIHRoaXMudnJtTG9va0F0LmdldExvb2tBdFdvcmxkUXVhdGVybmlvbihfcXVhdEEpO1xuXG4gICAgLy8gY2FsY3VsYXRlIHJvdGF0aW9uIHVzaW5nIGZhY2VGcm9udFxuICAgIF9xdWF0QS5tdWx0aXBseSh0aGlzLnZybUxvb2tBdC5nZXRGYWNlRnJvbnRRdWF0ZXJuaW9uKF9xdWF0QikpO1xuXG4gICAgLy8gc2V0IHRyYW5zZm9ybSB0byBtZXNoZXNcbiAgICB0aGlzLl9tZXNoWWF3LnBvc2l0aW9uLmNvcHkoX3YzQSk7XG4gICAgdGhpcy5fbWVzaFlhdy5xdWF0ZXJuaW9uLmNvcHkoX3F1YXRBKTtcblxuICAgIHRoaXMuX21lc2hQaXRjaC5wb3NpdGlvbi5jb3B5KF92M0EpO1xuICAgIHRoaXMuX21lc2hQaXRjaC5xdWF0ZXJuaW9uLmNvcHkoX3F1YXRBKTtcbiAgICB0aGlzLl9tZXNoUGl0Y2gucXVhdGVybmlvbi5tdWx0aXBseShfcXVhdEIuc2V0RnJvbUF4aXNBbmdsZShWRUMzX1BPU0lUSVZFX1ksIHlhdykpO1xuICAgIHRoaXMuX21lc2hQaXRjaC5xdWF0ZXJuaW9uLm11bHRpcGx5KFFVQVRfWFlfQ1c5MCk7XG5cbiAgICAvLyB1cGRhdGUgdGFyZ2V0IGxpbmUgYW5kIHNwaGVyZVxuICAgIGNvbnN0IHsgdGFyZ2V0LCBhdXRvVXBkYXRlIH0gPSB0aGlzLnZybUxvb2tBdDtcbiAgICBpZiAodGFyZ2V0ICE9IG51bGwgJiYgYXV0b1VwZGF0ZSkge1xuICAgICAgdGFyZ2V0LmdldFdvcmxkUG9zaXRpb24oX3YzQikuc3ViKF92M0EpO1xuICAgICAgdGhpcy5fbGluZVRhcmdldC5nZW9tZXRyeS50YWlsLmNvcHkoX3YzQik7XG4gICAgICB0aGlzLl9saW5lVGFyZ2V0Lmdlb21ldHJ5LnVwZGF0ZSgpO1xuICAgICAgdGhpcy5fbGluZVRhcmdldC5wb3NpdGlvbi5jb3B5KF92M0EpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHRyYW5zZm9ybSB0byBtZXNoZXNcbiAgICBzdXBlci51cGRhdGVNYXRyaXhXb3JsZChmb3JjZSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBjbGFzcyBGYW5CdWZmZXJHZW9tZXRyeSBleHRlbmRzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcHVibGljIHRoZXRhOiBudW1iZXI7XG4gIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY3VycmVudFRoZXRhID0gMDtcbiAgcHJpdmF0ZSBfY3VycmVudFJhZGl1cyA9IDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2F0dHJQb3M6IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYXR0ckluZGV4OiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRoZXRhID0gMC4wO1xuICAgIHRoaXMucmFkaXVzID0gMC4wO1xuICAgIHRoaXMuX2N1cnJlbnRUaGV0YSA9IDAuMDtcbiAgICB0aGlzLl9jdXJyZW50UmFkaXVzID0gMC4wO1xuXG4gICAgdGhpcy5fYXR0clBvcyA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSg2NSAqIDMpLCAzKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB0aGlzLl9hdHRyUG9zKTtcblxuICAgIHRoaXMuX2F0dHJJbmRleCA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IFVpbnQxNkFycmF5KDMgKiA2MyksIDEpO1xuICAgIHRoaXMuc2V0SW5kZXgodGhpcy5fYXR0ckluZGV4KTtcblxuICAgIHRoaXMuX2J1aWxkSW5kZXgoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBsZXQgc2hvdWxkVXBkYXRlR2VvbWV0cnkgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9jdXJyZW50VGhldGEgIT09IHRoaXMudGhldGEpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUaGV0YSA9IHRoaXMudGhldGE7XG4gICAgICBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRSYWRpdXMgIT09IHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UmFkaXVzID0gdGhpcy5yYWRpdXM7XG4gICAgICBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFVwZGF0ZUdlb21ldHJ5KSB7XG4gICAgICB0aGlzLl9idWlsZFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRQb3NpdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9hdHRyUG9zLnNldFhZWigwLCAwLjAsIDAuMCwgMC4wKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuICAgICAgY29uc3QgdCA9IChpIC8gNjMuMCkgKiB0aGlzLl9jdXJyZW50VGhldGE7XG5cbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKGkgKyAxLCB0aGlzLl9jdXJyZW50UmFkaXVzICogTWF0aC5zaW4odCksIDAuMCwgdGhpcy5fY3VycmVudFJhZGl1cyAqIE1hdGguY29zKHQpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdHRyUG9zLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkSW5kZXgoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MzsgaSsrKSB7XG4gICAgICB0aGlzLl9hdHRySW5kZXguc2V0WFlaKGkgKiAzLCAwLCBpICsgMSwgaSArIDIpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dHJJbmRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBjbGFzcyBMaW5lQW5kU3BoZXJlQnVmZmVyR2VvbWV0cnkgZXh0ZW5kcyBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcbiAgcHVibGljIHRhaWw6IFRIUkVFLlZlY3RvcjM7XG4gIHByaXZhdGUgX2N1cnJlbnRSYWRpdXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY3VycmVudFRhaWw6IFRIUkVFLlZlY3RvcjM7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2F0dHJQb3M6IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYXR0ckluZGV4OiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJhZGl1cyA9IDAuMDtcbiAgICB0aGlzLl9jdXJyZW50UmFkaXVzID0gMC4wO1xuXG4gICAgdGhpcy50YWlsID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICB0aGlzLl9jdXJyZW50VGFpbCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICB0aGlzLl9hdHRyUG9zID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KDI5NCksIDMpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHRoaXMuX2F0dHJQb3MpO1xuXG4gICAgdGhpcy5fYXR0ckluZGV4ID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDE2QXJyYXkoMTk0KSwgMSk7XG4gICAgdGhpcy5zZXRJbmRleCh0aGlzLl9hdHRySW5kZXgpO1xuXG4gICAgdGhpcy5fYnVpbGRJbmRleCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRSYWRpdXMgIT09IHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UmFkaXVzID0gdGhpcy5yYWRpdXM7XG4gICAgICBzaG91bGRVcGRhdGVHZW9tZXRyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9jdXJyZW50VGFpbC5lcXVhbHModGhpcy50YWlsKSkge1xuICAgICAgdGhpcy5fY3VycmVudFRhaWwuY29weSh0aGlzLnRhaWwpO1xuICAgICAgc2hvdWxkVXBkYXRlR2VvbWV0cnkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVHZW9tZXRyeSkge1xuICAgICAgdGhpcy5fYnVpbGRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkUG9zaXRpb24oKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gKGkgLyAxNi4wKSAqIE1hdGguUEk7XG5cbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKGksIE1hdGguY29zKHQpLCBNYXRoLnNpbih0KSwgMC4wKTtcbiAgICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDMyICsgaSwgMC4wLCBNYXRoLmNvcyh0KSwgTWF0aC5zaW4odCkpO1xuICAgICAgdGhpcy5fYXR0clBvcy5zZXRYWVooNjQgKyBpLCBNYXRoLnNpbih0KSwgMC4wLCBNYXRoLmNvcyh0KSk7XG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZSh0aGlzLl9jdXJyZW50UmFkaXVzLCB0aGlzLl9jdXJyZW50UmFkaXVzLCB0aGlzLl9jdXJyZW50UmFkaXVzKTtcbiAgICB0aGlzLnRyYW5zbGF0ZSh0aGlzLl9jdXJyZW50VGFpbC54LCB0aGlzLl9jdXJyZW50VGFpbC55LCB0aGlzLl9jdXJyZW50VGFpbC56KTtcblxuICAgIHRoaXMuX2F0dHJQb3Muc2V0WFlaKDk2LCAwLCAwLCAwKTtcbiAgICB0aGlzLl9hdHRyUG9zLnNldFhZWig5NywgdGhpcy5fY3VycmVudFRhaWwueCwgdGhpcy5fY3VycmVudFRhaWwueSwgdGhpcy5fY3VycmVudFRhaWwueik7XG5cbiAgICB0aGlzLl9hdHRyUG9zLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkSW5kZXgoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XG4gICAgICBjb25zdCBpMSA9IChpICsgMSkgJSAzMjtcblxuICAgICAgdGhpcy5fYXR0ckluZGV4LnNldFhZKGkgKiAyLCBpLCBpMSk7XG4gICAgICB0aGlzLl9hdHRySW5kZXguc2V0WFkoNjQgKyBpICogMiwgMzIgKyBpLCAzMiArIGkxKTtcbiAgICAgIHRoaXMuX2F0dHJJbmRleC5zZXRYWSgxMjggKyBpICogMiwgNjQgKyBpLCA2NCArIGkxKTtcbiAgICB9XG4gICAgdGhpcy5fYXR0ckluZGV4LnNldFhZKDE5MiwgOTYsIDk3KTtcblxuICAgIHRoaXMuX2F0dHJJbmRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4uL2h1bWFub2lkJztcbmltcG9ydCB7IGdldFdvcmxkUXVhdGVybmlvbkxpdGUgfSBmcm9tICcuLi91dGlscy9nZXRXb3JsZFF1YXRlcm5pb25MaXRlJztcbmltcG9ydCB7IHF1YXRJbnZlcnRDb21wYXQgfSBmcm9tICcuLi91dGlscy9xdWF0SW52ZXJ0Q29tcGF0JztcbmltcG9ydCB7IGNhbGNBemltdXRoQWx0aXR1ZGUgfSBmcm9tICcuL3V0aWxzL2NhbGNBemltdXRoQWx0aXR1ZGUnO1xuaW1wb3J0IHR5cGUgeyBWUk1Mb29rQXRBcHBsaWVyIH0gZnJvbSAnLi9WUk1Mb29rQXRBcHBsaWVyJztcbmltcG9ydCB7IHNhbml0aXplQW5nbGUgfSBmcm9tICcuL3V0aWxzL3Nhbml0aXplQW5nbGUnO1xuXG5jb25zdCBWRUMzX1BPU0lUSVZFX1ogPSBuZXcgVEhSRUUuVmVjdG9yMygwLjAsIDAuMCwgMS4wKTtcblxuY29uc3QgX3YzQSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5jb25zdCBfdjNCID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbmNvbnN0IF92M0MgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3F1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9xdWF0QiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5jb25zdCBfcXVhdEMgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXREID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9ldWxlckEgPSBuZXcgVEhSRUUuRXVsZXIoKTtcblxuLyoqXG4gKiBBIGNsYXNzIGNvbnRyb2xzIGV5ZSBnYXplIG1vdmVtZW50cyBvZiBhIFZSTS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUxvb2tBdCB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVVMRVJfT1JERVIgPSAnWVhaJzsgLy8geWF3LXBpdGNoLXJvbGxcblxuICAvKipcbiAgICogVGhlIG9yaWdpbiBvZiBMb29rQXQuIFBvc2l0aW9uIG9mZnNldCBmcm9tIHRoZSBoZWFkIGJvbmUuXG4gICAqL1xuICBwdWJsaWMgb2Zmc2V0RnJvbUhlYWRCb25lID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAvKipcbiAgICogSXRzIGFzc29jaWF0ZWQge0BsaW5rIFZSTUh1bWFub2lkfS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBodW1hbm9pZDogVlJNSHVtYW5vaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgVlJNTG9va0F0QXBwbGllcn0gb2YgdGhlIExvb2tBdC5cbiAgICovXG4gIHB1YmxpYyBhcHBsaWVyOiBWUk1Mb29rQXRBcHBsaWVyO1xuXG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIHRydWUsIHRoZSBMb29rQXQgd2lsbCBiZSB1cGRhdGVkIGF1dG9tYXRpY2FsbHkgYnkgY2FsbGluZyB7QGxpbmsgdXBkYXRlfSwgdG93YXJkaW5nIHRoZSBkaXJlY3Rpb24gdG8gdGhlIHtAbGluayB0YXJnZXR9LlxuICAgKiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICpcbiAgICogU2VlIGFsc286IHtAbGluayB0YXJnZXR9XG4gICAqL1xuICBwdWJsaWMgYXV0b1VwZGF0ZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgb2JqZWN0IG9mIHRoZSBMb29rQXQuXG4gICAqIE5vdGUgdGhhdCBpdCBkb2VzIG5vdCBtYWtlIGFueSBzZW5zZSBpZiB7QGxpbmsgYXV0b1VwZGF0ZX0gaXMgZGlzYWJsZWQuXG4gICAqXG4gICAqIFNlZSBhbHNvOiB7QGxpbmsgYXV0b1VwZGF0ZX1cbiAgICovXG4gIHB1YmxpYyB0YXJnZXQ/OiBUSFJFRS5PYmplY3QzRCB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBmcm9udCBkaXJlY3Rpb24gb2YgdGhlIGZhY2UuXG4gICAqIEludGVuZGVkIHRvIGJlIHVzZWQgZm9yIFZSTSAwLjAgY29tcGF0IChWUk0gMC4wIG1vZGVscyBhcmUgZmFjaW5nIFotIGluc3RlYWQgb2YgWispLlxuICAgKiBZb3UgdXN1YWxseSBkb24ndCB3YW50IHRvIHRvdWNoIHRoaXMuXG4gICAqL1xuICBwdWJsaWMgZmFjZUZyb250ID0gbmV3IFRIUkVFLlZlY3RvcjMoMC4wLCAwLjAsIDEuMCk7XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IGFuZ2xlIGFyb3VuZCBZIGF4aXMsIGluIGRlZ3JlZS5cbiAgICovXG4gIHByb3RlY3RlZCBfeWF3OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IGFuZ2xlIGFyb3VuZCBZIGF4aXMsIGluIGRlZ3JlZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgeWF3KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3lhdztcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBhbmdsZSBhcm91bmQgWSBheGlzLCBpbiBkZWdyZWUuXG4gICAqL1xuICBwdWJsaWMgc2V0IHlhdyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5feWF3ID0gdmFsdWU7XG4gICAgdGhpcy5fbmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IGFuZ2xlIGFyb3VuZCBYIGF4aXMsIGluIGRlZ3JlZS5cbiAgICovXG4gIHByb3RlY3RlZCBfcGl0Y2g6IG51bWJlcjtcblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgYW5nbGUgYXJvdW5kIFggYXhpcywgaW4gZGVncmVlLlxuICAgKi9cbiAgcHVibGljIGdldCBwaXRjaCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9waXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBhbmdsZSBhcm91bmQgWCBheGlzLCBpbiBkZWdyZWUuXG4gICAqL1xuICBwdWJsaWMgc2V0IHBpdGNoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9waXRjaCA9IHZhbHVlO1xuICAgIHRoaXMuX25lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhhdCBhbmdsZXMgbmVlZCB0byBiZSBhcHBsaWVkIHRvIGl0cyBbQGxpbmsgYXBwbGllcl0uXG4gICAqL1xuICBwcm90ZWN0ZWQgX25lZWRzVXBkYXRlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXb3JsZCByb3RhdGlvbiBvZiB0aGUgaGVhZCBpbiBpdHMgcmVzdCBwb3NlLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzdEhlYWRXb3JsZFF1YXRlcm5pb246IFRIUkVFLlF1YXRlcm5pb247XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgZ2V0RXVsZXJ9IGluc3RlYWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGV1bGVyKCk6IFRIUkVFLkV1bGVyIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUxvb2tBdDogZXVsZXIgaXMgZGVwcmVjYXRlZC4gdXNlIGdldEV1bGVyKCkgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiB0aGlzLmdldEV1bGVyKG5ldyBUSFJFRS5FdWxlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIFZSTUxvb2tBdH0uXG4gICAqXG4gICAqIEBwYXJhbSBodW1hbm9pZCBBIHtAbGluayBWUk1IdW1hbm9pZH1cbiAgICogQHBhcmFtIGFwcGxpZXIgQSB7QGxpbmsgVlJNTG9va0F0QXBwbGllcn1cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihodW1hbm9pZDogVlJNSHVtYW5vaWQsIGFwcGxpZXI6IFZSTUxvb2tBdEFwcGxpZXIpIHtcbiAgICB0aGlzLmh1bWFub2lkID0gaHVtYW5vaWQ7XG4gICAgdGhpcy5hcHBsaWVyID0gYXBwbGllcjtcblxuICAgIHRoaXMuX3lhdyA9IDAuMDtcbiAgICB0aGlzLl9waXRjaCA9IDAuMDtcbiAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICB0aGlzLl9yZXN0SGVhZFdvcmxkUXVhdGVybmlvbiA9IHRoaXMuZ2V0TG9va0F0V29ybGRRdWF0ZXJuaW9uKG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpdHMgeWF3LXBpdGNoIGFuZ2xlcyBhcyBhbiBgRXVsZXJgLlxuICAgKiBEb2VzIE5PVCBjb25zaWRlciB7QGxpbmsgZmFjZUZyb250fTsgaXQgcmV0dXJucyBgRXVsZXIoMCwgMCwgMDsgXCJZWFpcIilgIGJ5IGRlZmF1bHQgcmVnYXJkbGVzcyBvZiB0aGUgZmFjZUZyb250IHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgZXVsZXJcbiAgICovXG4gIHB1YmxpYyBnZXRFdWxlcih0YXJnZXQ6IFRIUkVFLkV1bGVyKTogVEhSRUUuRXVsZXIge1xuICAgIHJldHVybiB0YXJnZXQuc2V0KFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5fcGl0Y2gsIFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5feWF3LCAwLjAsICdZWFonKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IHRoZSBnaXZlbiB7QGxpbmsgVlJNTG9va0F0fSBpbnRvIHRoaXMgb25lLlxuICAgKiB7QGxpbmsgaHVtYW5vaWR9IG11c3QgYmUgc2FtZSBhcyB0aGUgc291cmNlIG9uZS5cbiAgICoge0BsaW5rIGFwcGxpZXJ9IHdpbGwgcmVmZXJlbmNlIHRoZSBzYW1lIGluc3RhbmNlIGFzIHRoZSBzb3VyY2Ugb25lLlxuICAgKiBAcGFyYW0gc291cmNlIFRoZSB7QGxpbmsgVlJNTG9va0F0fSB5b3Ugd2FudCB0byBjb3B5XG4gICAqIEByZXR1cm5zIHRoaXNcbiAgICovXG4gIHB1YmxpYyBjb3B5KHNvdXJjZTogVlJNTG9va0F0KTogdGhpcyB7XG4gICAgaWYgKHRoaXMuaHVtYW5vaWQgIT09IHNvdXJjZS5odW1hbm9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWUk1Mb29rQXQ6IGh1bWFub2lkIG11c3QgYmUgc2FtZSBpbiBvcmRlciB0byBjb3B5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5vZmZzZXRGcm9tSGVhZEJvbmUuY29weShzb3VyY2Uub2Zmc2V0RnJvbUhlYWRCb25lKTtcbiAgICB0aGlzLmFwcGxpZXIgPSBzb3VyY2UuYXBwbGllcjtcbiAgICB0aGlzLmF1dG9VcGRhdGUgPSBzb3VyY2UuYXV0b1VwZGF0ZTtcbiAgICB0aGlzLnRhcmdldCA9IHNvdXJjZS50YXJnZXQ7XG4gICAgdGhpcy5mYWNlRnJvbnQuY29weShzb3VyY2UuZmFjZUZyb250KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGlzIHtAbGluayBWUk1Mb29rQXR9LlxuICAgKiBOb3RlIHRoYXQge0BsaW5rIGh1bWFub2lkfSBhbmQge0BsaW5rIGFwcGxpZXJ9IHdpbGwgcmVmZXJlbmNlIHRoZSBzYW1lIGluc3RhbmNlIGFzIHRoaXMgb25lLlxuICAgKiBAcmV0dXJucyBDb3BpZWQge0BsaW5rIFZSTUxvb2tBdH1cbiAgICovXG4gIHB1YmxpYyBjbG9uZSgpOiBWUk1Mb29rQXQge1xuICAgIHJldHVybiBuZXcgVlJNTG9va0F0KHRoaXMuaHVtYW5vaWQsIHRoaXMuYXBwbGllcikuY29weSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgbG9va0F0IGRpcmVjdGlvbiAoeWF3IGFuZCBwaXRjaCkgdG8gdGhlIGluaXRpYWwgZGlyZWN0aW9uLlxuICAgKi9cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuX3lhdyA9IDAuMDtcbiAgICB0aGlzLl9waXRjaCA9IDAuMDtcbiAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGl0cyBsb29rQXQgcG9zaXRpb24gaW4gd29ybGQgY29vcmRpbmF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBgVEhSRUUuVmVjdG9yM2BcbiAgICovXG4gIHB1YmxpYyBnZXRMb29rQXRXb3JsZFBvc2l0aW9uKHRhcmdldDogVEhSRUUuVmVjdG9yMyk6IFRIUkVFLlZlY3RvcjMge1xuICAgIGNvbnN0IGhlYWQgPSB0aGlzLmh1bWFub2lkLmdldFJhd0JvbmVOb2RlKCdoZWFkJykhO1xuXG4gICAgcmV0dXJuIHRhcmdldC5jb3B5KHRoaXMub2Zmc2V0RnJvbUhlYWRCb25lKS5hcHBseU1hdHJpeDQoaGVhZC5tYXRyaXhXb3JsZCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGl0cyBsb29rQXQgcm90YXRpb24gaW4gd29ybGQgY29vcmRpbmF0ZS5cbiAgICogRG9lcyBOT1QgY29uc2lkZXIge0BsaW5rIGZhY2VGcm9udH0uXG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXQgQSB0YXJnZXQgYFRIUkVFLlF1YXRlcm5pb25gXG4gICAqL1xuICBwdWJsaWMgZ2V0TG9va0F0V29ybGRRdWF0ZXJuaW9uKHRhcmdldDogVEhSRUUuUXVhdGVybmlvbik6IFRIUkVFLlF1YXRlcm5pb24ge1xuICAgIGNvbnN0IGhlYWQgPSB0aGlzLmh1bWFub2lkLmdldFJhd0JvbmVOb2RlKCdoZWFkJykhO1xuXG4gICAgcmV0dXJuIGdldFdvcmxkUXVhdGVybmlvbkxpdGUoaGVhZCwgdGFyZ2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBxdWF0ZXJuaW9uIHRoYXQgcm90YXRlcyB0aGUgK1ogdW5pdCB2ZWN0b3Igb2YgdGhlIGh1bWFub2lkIEhlYWQgdG8gdGhlIHtAbGluayBmYWNlRnJvbnR9IGRpcmVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBgVEhSRUUuUXVhdGVybmlvbmBcbiAgICovXG4gIHB1YmxpYyBnZXRGYWNlRnJvbnRRdWF0ZXJuaW9uKHRhcmdldDogVEhSRUUuUXVhdGVybmlvbik6IFRIUkVFLlF1YXRlcm5pb24ge1xuICAgIGlmICh0aGlzLmZhY2VGcm9udC5kaXN0YW5jZVRvU3F1YXJlZChWRUMzX1BPU0lUSVZFX1opIDwgMC4wMSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5jb3B5KHRoaXMuX3Jlc3RIZWFkV29ybGRRdWF0ZXJuaW9uKS5pbnZlcnQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBbZmFjZUZyb250QXppbXV0aCwgZmFjZUZyb250QWx0aXR1ZGVdID0gY2FsY0F6aW11dGhBbHRpdHVkZSh0aGlzLmZhY2VGcm9udCk7XG4gICAgX2V1bGVyQS5zZXQoMC4wLCAwLjUgKiBNYXRoLlBJICsgZmFjZUZyb250QXppbXV0aCwgZmFjZUZyb250QWx0aXR1ZGUsICdZWlgnKTtcblxuICAgIHJldHVybiB0YXJnZXQuc2V0RnJvbUV1bGVyKF9ldWxlckEpLnByZW11bHRpcGx5KF9xdWF0RC5jb3B5KHRoaXMuX3Jlc3RIZWFkV29ybGRRdWF0ZXJuaW9uKS5pbnZlcnQoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGl0cyBMb29rQXQgZGlyZWN0aW9uIGluIHdvcmxkIGNvb3JkaW5hdGUuXG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXQgQSB0YXJnZXQgYFRIUkVFLlZlY3RvcjNgXG4gICAqL1xuICBwdWJsaWMgZ2V0TG9va0F0V29ybGREaXJlY3Rpb24odGFyZ2V0OiBUSFJFRS5WZWN0b3IzKTogVEhSRUUuVmVjdG9yMyB7XG4gICAgdGhpcy5nZXRMb29rQXRXb3JsZFF1YXRlcm5pb24oX3F1YXRCKTtcbiAgICB0aGlzLmdldEZhY2VGcm9udFF1YXRlcm5pb24oX3F1YXRDKTtcblxuICAgIHJldHVybiB0YXJnZXRcbiAgICAgIC5jb3B5KFZFQzNfUE9TSVRJVkVfWilcbiAgICAgIC5hcHBseVF1YXRlcm5pb24oX3F1YXRCKVxuICAgICAgLmFwcGx5UXVhdGVybmlvbihfcXVhdEMpXG4gICAgICAuYXBwbHlFdWxlcih0aGlzLmdldEV1bGVyKF9ldWxlckEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgaXRzIGxvb2tBdCB0YXJnZXQgcG9zaXRpb24uXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpdHMgcmVzdWx0IHdpbGwgYmUgaW5zdGFudGx5IG92ZXJ3cml0dGVuIGlmIHtAbGluayBWUk1Mb29rQXRIZWFkLmF1dG9VcGRhdGV9IGlzIGVuYWJsZWQuXG4gICAqXG4gICAqIElmIHlvdSB3YW50IHRvIHRyYWNrIGFuIG9iamVjdCBjb250aW51b3VzbHksIHlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgdGFyZ2V0fSBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gcG9zaXRpb24gQSB0YXJnZXQgcG9zaXRpb24sIGluIHdvcmxkIHNwYWNlXG4gICAqL1xuICBwdWJsaWMgbG9va0F0KHBvc2l0aW9uOiBUSFJFRS5WZWN0b3IzKTogdm9pZCB7XG4gICAgLy8gTG9vayBhdCBkaXJlY3Rpb24gaW4gbG9jYWwgY29vcmRpbmF0ZVxuICAgIGNvbnN0IGhlYWRSb3REaWZmSW52ID0gX3F1YXRBXG4gICAgICAuY29weSh0aGlzLl9yZXN0SGVhZFdvcmxkUXVhdGVybmlvbilcbiAgICAgIC5tdWx0aXBseShxdWF0SW52ZXJ0Q29tcGF0KHRoaXMuZ2V0TG9va0F0V29ybGRRdWF0ZXJuaW9uKF9xdWF0QikpKTtcbiAgICBjb25zdCBoZWFkUG9zID0gdGhpcy5nZXRMb29rQXRXb3JsZFBvc2l0aW9uKF92M0IpO1xuICAgIGNvbnN0IGxvb2tBdERpciA9IF92M0MuY29weShwb3NpdGlvbikuc3ViKGhlYWRQb3MpLmFwcGx5UXVhdGVybmlvbihoZWFkUm90RGlmZkludikubm9ybWFsaXplKCk7XG5cbiAgICAvLyBjYWxjdWxhdGUgYW5nbGVzXG4gICAgY29uc3QgW2F6aW11dGhGcm9tLCBhbHRpdHVkZUZyb21dID0gY2FsY0F6aW11dGhBbHRpdHVkZSh0aGlzLmZhY2VGcm9udCk7XG4gICAgY29uc3QgW2F6aW11dGhUbywgYWx0aXR1ZGVUb10gPSBjYWxjQXppbXV0aEFsdGl0dWRlKGxvb2tBdERpcik7XG4gICAgY29uc3QgeWF3ID0gc2FuaXRpemVBbmdsZShhemltdXRoVG8gLSBhemltdXRoRnJvbSk7XG4gICAgY29uc3QgcGl0Y2ggPSBzYW5pdGl6ZUFuZ2xlKGFsdGl0dWRlRnJvbSAtIGFsdGl0dWRlVG8pOyAvLyBzcGlubmluZyAoMSwgMCwgMCkgQ0NXIGFyb3VuZCBaIGF4aXMgbWFrZXMgdGhlIHZlY3RvciBsb29rIHVwLCB3aGlsZSBzcGlubmluZyAoMCwgMCwgMSkgQ0NXIGFyb3VuZCBYIGF4aXMgbWFrZXMgdGhlIHZlY3RvciBsb29rIGRvd25cblxuICAgIC8vIGFwcGx5IGFuZ2xlc1xuICAgIHRoaXMuX3lhdyA9IFRIUkVFLk1hdGhVdGlscy5SQUQyREVHICogeWF3O1xuICAgIHRoaXMuX3BpdGNoID0gVEhSRUUuTWF0aFV0aWxzLlJBRDJERUcgKiBwaXRjaDtcblxuICAgIHRoaXMuX25lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIFZSTUxvb2tBdEhlYWQuXG4gICAqIElmIHtAbGluayBhdXRvVXBkYXRlfSBpcyBlbmFibGVkLCB0aGlzIHdpbGwgbWFrZSBpdCBsb29rIGF0IHRoZSB7QGxpbmsgdGFyZ2V0fS5cbiAgICpcbiAgICogQHBhcmFtIGRlbHRhIGRlbHRhVGltZSwgaXQgaXNuJ3QgdXNlZCB0aG91Z2guIFlvdSBjYW4gdXNlIHRoZSBwYXJhbWV0ZXIgaWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgaW4geW91ciBvd24gZXh0ZW5kZWQge0BsaW5rIFZSTUxvb2tBdH0uXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YXJnZXQgIT0gbnVsbCAmJiB0aGlzLmF1dG9VcGRhdGUpIHtcbiAgICAgIHRoaXMubG9va0F0KHRoaXMudGFyZ2V0LmdldFdvcmxkUG9zaXRpb24oX3YzQSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9uZWVkc1VwZGF0ZSkge1xuICAgICAgdGhpcy5fbmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5hcHBsaWVyLmFwcGx5WWF3UGl0Y2godGhpcy5feWF3LCB0aGlzLl9waXRjaCk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5jb25zdCBfcG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3NjYWxlID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuLyoqXG4gKiBBIHJlcGxhY2VtZW50IG9mIGBPYmplY3QzRC5nZXRXb3JsZFF1YXRlcm5pb25gLlxuICogRXh0cmFjdCB0aGUgd29ybGQgcXVhdGVybmlvbiBvZiBhbiBvYmplY3QgZnJvbSBpdHMgd29ybGQgc3BhY2UgbWF0cml4LCB3aXRob3V0IGNhbGxpbmcgYE9iamVjdDNELnVwZGF0ZVdvcmxkTWF0cml4YC5cbiAqIFVzZSB0aGlzIHdoZW4geW91J3JlIHN1cmUgdGhhdCB0aGUgd29ybGQgbWF0cml4IGlzIHVwLXRvLWRhdGUuXG4gKlxuICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0XG4gKiBAcGFyYW0gb3V0IEEgdGFyZ2V0IHF1YXRlcm5pb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcmxkUXVhdGVybmlvbkxpdGUob2JqZWN0OiBUSFJFRS5PYmplY3QzRCwgb3V0OiBUSFJFRS5RdWF0ZXJuaW9uKTogVEhSRUUuUXVhdGVybmlvbiB7XG4gIG9iamVjdC5tYXRyaXhXb3JsZC5kZWNvbXBvc2UoX3Bvc2l0aW9uLCBvdXQsIF9zY2FsZSk7XG4gIHJldHVybiBvdXQ7XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBhemltdXRoIC8gYWx0aXR1ZGUgYW5nbGVzIGZyb20gYSB2ZWN0b3IuXG4gKlxuICogVGhpcyByZXR1cm5zIGEgZGlmZmVyZW5jZSBvZiBhbmdsZXMgZnJvbSAoMSwgMCwgMCkuXG4gKiBBemltdXRoIHJlcHJlc2VudHMgYW4gYW5nbGUgYXJvdW5kIFkgYXhpcy5cbiAqIEFsdGl0dWRlIHJlcHJlc2VudHMgYW4gYW5nbGUgYXJvdW5kIFogYXhpcy5cbiAqIEl0IGlzIHJvdGF0ZWQgaW4gaW50cmluc2ljIFktWiBvcmRlci5cbiAqXG4gKiBAcGFyYW0gdmVjdG9yIFRoZSB2ZWN0b3JcbiAqIEByZXR1cm5zIEEgdHVwbGUgY29udGFpbnMgdHdvIGFuZ2xlcywgYFsgYXppbXV0aCwgYWx0aXR1ZGUgXWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNBemltdXRoQWx0aXR1ZGUodmVjdG9yOiBUSFJFRS5WZWN0b3IzKTogW2F6aW11dGg6IG51bWJlciwgYWx0aXR1ZGU6IG51bWJlcl0ge1xuICByZXR1cm4gW01hdGguYXRhbjIoLXZlY3Rvci56LCB2ZWN0b3IueCksIE1hdGguYXRhbjIodmVjdG9yLnksIE1hdGguc3FydCh2ZWN0b3IueCAqIHZlY3Rvci54ICsgdmVjdG9yLnogKiB2ZWN0b3IueikpXTtcbn1cbiIsICIvKipcbiAqIE1ha2Ugc3VyZSB0aGUgYW5nbGUgaXMgd2l0aGluIC1QSSB0byBQSS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIHNhbml0aXplQW5nbGUoMS41ICogTWF0aC5QSSkgLy8gLTAuNSAqIFBJXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gYW5nbGUgQW4gaW5wdXQgYW5nbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplQW5nbGUoYW5nbGU6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHJvdW5kVHVybiA9IE1hdGgucm91bmQoYW5nbGUgLyAyLjAgLyBNYXRoLlBJKTtcbiAgcmV0dXJuIGFuZ2xlIC0gMi4wICogTWF0aC5QSSAqIHJvdW5kVHVybjtcbn1cbiIsICJpbXBvcnQgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4uL2h1bWFub2lkJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNTG9va0F0QXBwbGllciB9IGZyb20gJy4vVlJNTG9va0F0QXBwbGllcic7XG5pbXBvcnQgeyBWUk1Mb29rQXRSYW5nZU1hcCB9IGZyb20gJy4vVlJNTG9va0F0UmFuZ2VNYXAnO1xuaW1wb3J0IHsgY2FsY0F6aW11dGhBbHRpdHVkZSB9IGZyb20gJy4vdXRpbHMvY2FsY0F6aW11dGhBbHRpdHVkZSc7XG5pbXBvcnQgeyBnZXRXb3JsZFF1YXRlcm5pb25MaXRlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZSc7XG5cbmNvbnN0IFZFQzNfUE9TSVRJVkVfWiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAuMCwgMC4wLCAxLjApO1xuXG5jb25zdCBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXRCID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbmNvbnN0IF9ldWxlckEgPSBuZXcgVEhSRUUuRXVsZXIoMC4wLCAwLjAsIDAuMCwgJ1lYWicpO1xuXG4vKipcbiAqIEEgY2xhc3MgdGhhdCBhcHBsaWVzIGV5ZSBnYXplIGRpcmVjdGlvbnMgdG8gYSBWUk0uXG4gKiBJdCB3aWxsIGJlIHVzZWQgYnkge0BsaW5rIFZSTUxvb2tBdH0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1Mb29rQXRCb25lQXBwbGllciBpbXBsZW1lbnRzIFZSTUxvb2tBdEFwcGxpZXIge1xuICAvKipcbiAgICogUmVwcmVzZW50IGl0cyB0eXBlIG9mIGFwcGxpZXIuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnYm9uZSc7XG5cbiAgLyoqXG4gICAqIEl0cyBhc3NvY2lhdGVkIHtAbGluayBWUk1IdW1hbm9pZH0uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaHVtYW5vaWQ6IFZSTUh1bWFub2lkO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gZm9yIGhvcml6b250YWwgaW53YXJkIG1vdmVtZW50LiBUaGUgbGVmdCBleWUgbW92ZXMgcmlnaHQuIFRoZSByaWdodCBleWUgbW92ZXMgbGVmdC5cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcEhvcml6b250YWxJbm5lcjogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgaG9yaXpvbnRhbCBvdXR3YXJkIG1vdmVtZW50LiBUaGUgbGVmdCBleWUgbW92ZXMgbGVmdC4gVGhlIHJpZ2h0IGV5ZSBtb3ZlcyByaWdodC5cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcEhvcml6b250YWxPdXRlcjogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgdmVydGljYWwgZG93bndhcmQgbW92ZW1lbnQuIEJvdGggZXllcyBtb3ZlIHVwd2FyZHMuXG4gICAqL1xuICBwdWJsaWMgcmFuZ2VNYXBWZXJ0aWNhbERvd246IFZSTUxvb2tBdFJhbmdlTWFwO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gZm9yIHZlcnRpY2FsIHVwd2FyZCBtb3ZlbWVudC4gQm90aCBleWVzIG1vdmUgZG93bndhcmRzLlxuICAgKi9cbiAgcHVibGljIHJhbmdlTWFwVmVydGljYWxVcDogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIFRoZSBmcm9udCBkaXJlY3Rpb24gb2YgdGhlIGZhY2UuXG4gICAqIEludGVuZGVkIHRvIGJlIHVzZWQgZm9yIFZSTSAwLjAgY29tcGF0IChWUk0gMC4wIG1vZGVscyBhcmUgZmFjaW5nIFotIGluc3RlYWQgb2YgWispLlxuICAgKiBZb3UgdXN1YWxseSBkb24ndCB3YW50IHRvIHRvdWNoIHRoaXMuXG4gICAqL1xuICBwdWJsaWMgZmFjZUZyb250OiBUSFJFRS5WZWN0b3IzO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzdCBxdWF0ZXJuaW9uIG9mIExlZnRFeWUgYm9uZS5cbiAgICovXG4gIHByaXZhdGUgX3Jlc3RRdWF0TGVmdEV5ZTogVEhSRUUuUXVhdGVybmlvbjtcblxuICAvKipcbiAgICogVGhlIHJlc3QgcXVhdGVybmlvbiBvZiBSaWdodEV5ZSBib25lLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzdFF1YXRSaWdodEV5ZTogVEhSRUUuUXVhdGVybmlvbjtcblxuICAvKipcbiAgICogVGhlIHdvcmxkLXNwYWNlIHJlc3QgcXVhdGVybmlvbiBvZiB0aGUgcGFyZW50IG9mIHRoZSBodW1hbm9pZCBMZWZ0RXllLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzdExlZnRFeWVQYXJlbnRXb3JsZFF1YXQ6IFRIUkVFLlF1YXRlcm5pb247XG5cbiAgLyoqXG4gICAqIFRoZSB3b3JsZC1zcGFjZSByZXN0IHF1YXRlcm5pb24gb2YgdGhlIHBhcmVudCBvZiB0aGUgaHVtYW5vaWQgUmlnaHRFeWUuXG4gICAqL1xuICBwcml2YXRlIF9yZXN0UmlnaHRFeWVQYXJlbnRXb3JsZFF1YXQ6IFRIUkVFLlF1YXRlcm5pb247XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNTG9va0F0Qm9uZUFwcGxpZXJ9LlxuICAgKlxuICAgKiBAcGFyYW0gaHVtYW5vaWQgQSB7QGxpbmsgVlJNSHVtYW5vaWR9XG4gICAqIEBwYXJhbSByYW5nZU1hcEhvcml6b250YWxJbm5lciBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gdXNlZCBmb3IgaW5uZXIgdHJhbnN2ZXJzZSBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSB1c2VkIGZvciBvdXRlciB0cmFuc3ZlcnNlIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gcmFuZ2VNYXBWZXJ0aWNhbERvd24gQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIGRvd24gZGlyZWN0aW9uXG4gICAqIEBwYXJhbSByYW5nZU1hcFZlcnRpY2FsVXAgQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIHVwIGRpcmVjdGlvblxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGh1bWFub2lkOiBWUk1IdW1hbm9pZCxcbiAgICByYW5nZU1hcEhvcml6b250YWxJbm5lcjogVlJNTG9va0F0UmFuZ2VNYXAsXG4gICAgcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXI6IFZSTUxvb2tBdFJhbmdlTWFwLFxuICAgIHJhbmdlTWFwVmVydGljYWxEb3duOiBWUk1Mb29rQXRSYW5nZU1hcCxcbiAgICByYW5nZU1hcFZlcnRpY2FsVXA6IFZSTUxvb2tBdFJhbmdlTWFwLFxuICApIHtcbiAgICB0aGlzLmh1bWFub2lkID0gaHVtYW5vaWQ7XG5cbiAgICB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbElubmVyID0gcmFuZ2VNYXBIb3Jpem9udGFsSW5uZXI7XG4gICAgdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlciA9IHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyO1xuICAgIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbERvd24gPSByYW5nZU1hcFZlcnRpY2FsRG93bjtcbiAgICB0aGlzLnJhbmdlTWFwVmVydGljYWxVcCA9IHJhbmdlTWFwVmVydGljYWxVcDtcblxuICAgIHRoaXMuZmFjZUZyb250ID0gbmV3IFRIUkVFLlZlY3RvcjMoMC4wLCAwLjAsIDEuMCk7XG5cbiAgICAvLyBzZXQgcmVzdCBxdWF0ZXJuaW9uc1xuICAgIHRoaXMuX3Jlc3RRdWF0TGVmdEV5ZSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgdGhpcy5fcmVzdFF1YXRSaWdodEV5ZSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgdGhpcy5fcmVzdExlZnRFeWVQYXJlbnRXb3JsZFF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgIHRoaXMuX3Jlc3RSaWdodEV5ZVBhcmVudFdvcmxkUXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICBjb25zdCBsZWZ0RXllID0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgnbGVmdEV5ZScpO1xuICAgIGNvbnN0IHJpZ2h0RXllID0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgncmlnaHRFeWUnKTtcblxuICAgIGlmIChsZWZ0RXllKSB7XG4gICAgICB0aGlzLl9yZXN0UXVhdExlZnRFeWUuY29weShsZWZ0RXllLnF1YXRlcm5pb24pO1xuICAgICAgZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZShsZWZ0RXllLnBhcmVudCEsIHRoaXMuX3Jlc3RMZWZ0RXllUGFyZW50V29ybGRRdWF0KTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRFeWUpIHtcbiAgICAgIHRoaXMuX3Jlc3RRdWF0UmlnaHRFeWUuY29weShyaWdodEV5ZS5xdWF0ZXJuaW9uKTtcbiAgICAgIGdldFdvcmxkUXVhdGVybmlvbkxpdGUocmlnaHRFeWUucGFyZW50ISwgdGhpcy5fcmVzdFJpZ2h0RXllUGFyZW50V29ybGRRdWF0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGlucHV0IGFuZ2xlIHRvIGl0cyBhc3NvY2lhdGVkIFZSTSBtb2RlbC5cbiAgICpcbiAgICogQHBhcmFtIHlhdyBSb3RhdGlvbiBhcm91bmQgWSBheGlzLCBpbiBkZWdyZWVcbiAgICogQHBhcmFtIHBpdGNoIFJvdGF0aW9uIGFyb3VuZCBYIGF4aXMsIGluIGRlZ3JlZVxuICAgKi9cbiAgcHVibGljIGFwcGx5WWF3UGl0Y2goeWF3OiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBsZWZ0RXllID0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgnbGVmdEV5ZScpO1xuICAgIGNvbnN0IHJpZ2h0RXllID0gdGhpcy5odW1hbm9pZC5nZXRSYXdCb25lTm9kZSgncmlnaHRFeWUnKTtcbiAgICBjb25zdCBsZWZ0RXllTm9ybWFsaXplZCA9IHRoaXMuaHVtYW5vaWQuZ2V0Tm9ybWFsaXplZEJvbmVOb2RlKCdsZWZ0RXllJyk7XG4gICAgY29uc3QgcmlnaHRFeWVOb3JtYWxpemVkID0gdGhpcy5odW1hbm9pZC5nZXROb3JtYWxpemVkQm9uZU5vZGUoJ3JpZ2h0RXllJyk7XG4gICAgLy8gbGVmdFxuICAgIGlmIChsZWZ0RXllKSB7XG4gICAgICBpZiAocGl0Y2ggPCAwLjApIHtcbiAgICAgICAgX2V1bGVyQS54ID0gLVRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcFZlcnRpY2FsRG93bi5tYXAoLXBpdGNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9ldWxlckEueCA9IFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcFZlcnRpY2FsVXAubWFwKHBpdGNoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHlhdyA8IDAuMCkge1xuICAgICAgICBfZXVsZXJBLnkgPSAtVEhSRUUuTWF0aFV0aWxzLkRFRzJSQUQgKiB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbElubmVyLm1hcCgteWF3KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9ldWxlckEueSA9IFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlci5tYXAoeWF3KTtcbiAgICAgIH1cblxuICAgICAgX3F1YXRBLnNldEZyb21FdWxlcihfZXVsZXJBKTtcbiAgICAgIHRoaXMuX2dldFdvcmxkRmFjZUZyb250UXVhdChfcXVhdEIpO1xuXG4gICAgICAvLyBfcXVhdEIgKiBfcXVhdEEgKiBfcXVhdEJeLTFcbiAgICAgIC8vIHdoZXJlIF9xdWF0QSBpcyBMb29rQXQgcm90YXRpb25cbiAgICAgIC8vIGFuZCBfcXVhdEIgaXMgd29ybGRGYWNlRnJvbnRRdWF0XG4gICAgICBsZWZ0RXllTm9ybWFsaXplZCEucXVhdGVybmlvbi5jb3B5KF9xdWF0QikubXVsdGlwbHkoX3F1YXRBKS5tdWx0aXBseShfcXVhdEIuaW52ZXJ0KCkpO1xuXG4gICAgICBfcXVhdEEuY29weSh0aGlzLl9yZXN0TGVmdEV5ZVBhcmVudFdvcmxkUXVhdCk7XG5cbiAgICAgIC8vIF9xdWF0QV4tMSAqIGxlZnRFeWVOb3JtYWxpemVkLnF1YXRlcm5pb24gKiBfcXVhdEEgKiByZXN0UXVhdExlZnRFeWVcbiAgICAgIC8vIHdoZXJlIF9xdWF0QSBpcyByZXN0TGVmdEV5ZVBhcmVudFdvcmxkUXVhdFxuICAgICAgbGVmdEV5ZS5xdWF0ZXJuaW9uXG4gICAgICAgIC5jb3B5KGxlZnRFeWVOb3JtYWxpemVkIS5xdWF0ZXJuaW9uKVxuICAgICAgICAubXVsdGlwbHkoX3F1YXRBKVxuICAgICAgICAucHJlbXVsdGlwbHkoX3F1YXRBLmludmVydCgpKVxuICAgICAgICAubXVsdGlwbHkodGhpcy5fcmVzdFF1YXRMZWZ0RXllKTtcbiAgICB9XG5cbiAgICAvLyByaWdodFxuICAgIGlmIChyaWdodEV5ZSkge1xuICAgICAgaWYgKHBpdGNoIDwgMC4wKSB7XG4gICAgICAgIF9ldWxlckEueCA9IC1USFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbERvd24ubWFwKC1waXRjaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZXVsZXJBLnggPSBUSFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbFVwLm1hcChwaXRjaCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh5YXcgPCAwLjApIHtcbiAgICAgICAgX2V1bGVyQS55ID0gLVRIUkVFLk1hdGhVdGlscy5ERUcyUkFEICogdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlci5tYXAoLXlhdyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZXVsZXJBLnkgPSBUSFJFRS5NYXRoVXRpbHMuREVHMlJBRCAqIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsSW5uZXIubWFwKHlhdyk7XG4gICAgICB9XG5cbiAgICAgIF9xdWF0QS5zZXRGcm9tRXVsZXIoX2V1bGVyQSk7XG4gICAgICB0aGlzLl9nZXRXb3JsZEZhY2VGcm9udFF1YXQoX3F1YXRCKTtcblxuICAgICAgLy8gX3F1YXRCICogX3F1YXRBICogX3F1YXRCXi0xXG4gICAgICAvLyB3aGVyZSBfcXVhdEEgaXMgTG9va0F0IHJvdGF0aW9uXG4gICAgICAvLyBhbmQgX3F1YXRCIGlzIHdvcmxkRmFjZUZyb250UXVhdFxuICAgICAgcmlnaHRFeWVOb3JtYWxpemVkIS5xdWF0ZXJuaW9uLmNvcHkoX3F1YXRCKS5tdWx0aXBseShfcXVhdEEpLm11bHRpcGx5KF9xdWF0Qi5pbnZlcnQoKSk7XG5cbiAgICAgIF9xdWF0QS5jb3B5KHRoaXMuX3Jlc3RSaWdodEV5ZVBhcmVudFdvcmxkUXVhdCk7XG5cbiAgICAgIC8vIF9xdWF0QV4tMSAqIHJpZ2h0RXllTm9ybWFsaXplZC5xdWF0ZXJuaW9uICogX3F1YXRBICogcmVzdFF1YXRSaWdodEV5ZVxuICAgICAgLy8gd2hlcmUgX3F1YXRBIGlzIHJlc3RSaWdodEV5ZVBhcmVudFdvcmxkUXVhdFxuICAgICAgcmlnaHRFeWUucXVhdGVybmlvblxuICAgICAgICAuY29weShyaWdodEV5ZU5vcm1hbGl6ZWQhLnF1YXRlcm5pb24pXG4gICAgICAgIC5tdWx0aXBseShfcXVhdEEpXG4gICAgICAgIC5wcmVtdWx0aXBseShfcXVhdEEuaW52ZXJ0KCkpXG4gICAgICAgIC5tdWx0aXBseSh0aGlzLl9yZXN0UXVhdFJpZ2h0RXllKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBhcHBseVlhd1BpdGNofSBpbnN0ZWFkLlxuICAgKi9cbiAgcHVibGljIGxvb2tBdChldWxlcjogVEhSRUUuRXVsZXIpOiB2b2lkIHtcbiAgICBjb25zb2xlLndhcm4oJ1ZSTUxvb2tBdEJvbmVBcHBsaWVyOiBsb29rQXQoKSBpcyBkZXByZWNhdGVkLiB1c2UgYXBwbHkoKSBpbnN0ZWFkLicpO1xuXG4gICAgY29uc3QgeWF3ID0gVEhSRUUuTWF0aFV0aWxzLlJBRDJERUcgKiBldWxlci55O1xuICAgIGNvbnN0IHBpdGNoID0gVEhSRUUuTWF0aFV0aWxzLlJBRDJERUcgKiBldWxlci54O1xuXG4gICAgdGhpcy5hcHBseVlhd1BpdGNoKHlhdywgcGl0Y2gpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHF1YXRlcm5pb24gdGhhdCByb3RhdGVzIHRoZSB3b3JsZC1zcGFjZSArWiB1bml0IHZlY3RvciB0byB0aGUge0BsaW5rIGZhY2VGcm9udH0gZGlyZWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0IEEgdGFyZ2V0IGBUSFJFRS5RdWF0ZXJuaW9uYFxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0V29ybGRGYWNlRnJvbnRRdWF0KHRhcmdldDogVEhSRUUuUXVhdGVybmlvbik6IFRIUkVFLlF1YXRlcm5pb24ge1xuICAgIGlmICh0aGlzLmZhY2VGcm9udC5kaXN0YW5jZVRvU3F1YXJlZChWRUMzX1BPU0lUSVZFX1opIDwgMC4wMSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5pZGVudGl0eSgpO1xuICAgIH1cblxuICAgIGNvbnN0IFtmYWNlRnJvbnRBemltdXRoLCBmYWNlRnJvbnRBbHRpdHVkZV0gPSBjYWxjQXppbXV0aEFsdGl0dWRlKHRoaXMuZmFjZUZyb250KTtcbiAgICBfZXVsZXJBLnNldCgwLjAsIDAuNSAqIE1hdGguUEkgKyBmYWNlRnJvbnRBemltdXRoLCBmYWNlRnJvbnRBbHRpdHVkZSwgJ1laWCcpO1xuXG4gICAgcmV0dXJuIHRhcmdldC5zZXRGcm9tRXVsZXIoX2V1bGVyQSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBWUk1FeHByZXNzaW9uTWFuYWdlciB9IGZyb20gJy4uL2V4cHJlc3Npb25zJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlIHsgVlJNTG9va0F0QXBwbGllciB9IGZyb20gJy4vVlJNTG9va0F0QXBwbGllcic7XG5pbXBvcnQgeyBWUk1Mb29rQXRSYW5nZU1hcCB9IGZyb20gJy4vVlJNTG9va0F0UmFuZ2VNYXAnO1xuXG4vKipcbiAqIEEgY2xhc3MgdGhhdCBhcHBsaWVzIGV5ZSBnYXplIGRpcmVjdGlvbnMgdG8gYSBWUk0uXG4gKiBJdCB3aWxsIGJlIHVzZWQgYnkge0BsaW5rIFZSTUxvb2tBdH0uXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1Mb29rQXRFeHByZXNzaW9uQXBwbGllciBpbXBsZW1lbnRzIFZSTUxvb2tBdEFwcGxpZXIge1xuICAvKipcbiAgICogUmVwcmVzZW50IGl0cyB0eXBlIG9mIGFwcGxpZXIuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnZXhwcmVzc2lvbic7XG5cbiAgLyoqXG4gICAqIEl0cyBhc3NvY2lhdGVkIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgZXhwcmVzc2lvbnM6IFZSTUV4cHJlc3Npb25NYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBJdCB3b24ndCBiZSB1c2VkIGluIGV4cHJlc3Npb24gYXBwbGllci5cbiAgICogU2VlIGFsc286IHtAbGluayByYW5nZU1hcEhvcml6b250YWxPdXRlcn1cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcEhvcml6b250YWxJbm5lcjogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgaG9yaXpvbnRhbCBtb3ZlbWVudC4gQm90aCBleWVzIG1vdmUgbGVmdCBvciByaWdodC5cbiAgICovXG4gIHB1YmxpYyByYW5nZU1hcEhvcml6b250YWxPdXRlcjogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSBmb3IgdmVydGljYWwgZG93bndhcmQgbW92ZW1lbnQuIEJvdGggZXllcyBtb3ZlIHVwd2FyZHMuXG4gICAqL1xuICBwdWJsaWMgcmFuZ2VNYXBWZXJ0aWNhbERvd246IFZSTUxvb2tBdFJhbmdlTWFwO1xuXG4gIC8qKlxuICAgKiBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gZm9yIHZlcnRpY2FsIHVwd2FyZCBtb3ZlbWVudC4gQm90aCBleWVzIG1vdmUgZG93bndhcmRzLlxuICAgKi9cbiAgcHVibGljIHJhbmdlTWFwVmVydGljYWxVcDogVlJNTG9va0F0UmFuZ2VNYXA7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNTG9va0F0RXhwcmVzc2lvbkFwcGxpZXJ9LlxuICAgKlxuICAgKiBAcGFyYW0gZXhwcmVzc2lvbnMgQSB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9XG4gICAqIEBwYXJhbSByYW5nZU1hcEhvcml6b250YWxJbm5lciBBIHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0gdXNlZCBmb3IgaW5uZXIgdHJhbnN2ZXJzZSBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyIEEge0BsaW5rIFZSTUxvb2tBdFJhbmdlTWFwfSB1c2VkIGZvciBvdXRlciB0cmFuc3ZlcnNlIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gcmFuZ2VNYXBWZXJ0aWNhbERvd24gQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIGRvd24gZGlyZWN0aW9uXG4gICAqIEBwYXJhbSByYW5nZU1hcFZlcnRpY2FsVXAgQSB7QGxpbmsgVlJNTG9va0F0UmFuZ2VNYXB9IHVzZWQgZm9yIHVwIGRpcmVjdGlvblxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGV4cHJlc3Npb25zOiBWUk1FeHByZXNzaW9uTWFuYWdlcixcbiAgICByYW5nZU1hcEhvcml6b250YWxJbm5lcjogVlJNTG9va0F0UmFuZ2VNYXAsXG4gICAgcmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXI6IFZSTUxvb2tBdFJhbmdlTWFwLFxuICAgIHJhbmdlTWFwVmVydGljYWxEb3duOiBWUk1Mb29rQXRSYW5nZU1hcCxcbiAgICByYW5nZU1hcFZlcnRpY2FsVXA6IFZSTUxvb2tBdFJhbmdlTWFwLFxuICApIHtcbiAgICB0aGlzLmV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnM7XG5cbiAgICB0aGlzLnJhbmdlTWFwSG9yaXpvbnRhbElubmVyID0gcmFuZ2VNYXBIb3Jpem9udGFsSW5uZXI7XG4gICAgdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlciA9IHJhbmdlTWFwSG9yaXpvbnRhbE91dGVyO1xuICAgIHRoaXMucmFuZ2VNYXBWZXJ0aWNhbERvd24gPSByYW5nZU1hcFZlcnRpY2FsRG93bjtcbiAgICB0aGlzLnJhbmdlTWFwVmVydGljYWxVcCA9IHJhbmdlTWFwVmVydGljYWxVcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgaW5wdXQgYW5nbGUgdG8gaXRzIGFzc29jaWF0ZWQgVlJNIG1vZGVsLlxuICAgKlxuICAgKiBAcGFyYW0geWF3IFJvdGF0aW9uIGFyb3VuZCBZIGF4aXMsIGluIGRlZ3JlZVxuICAgKiBAcGFyYW0gcGl0Y2ggUm90YXRpb24gYXJvdW5kIFggYXhpcywgaW4gZGVncmVlXG4gICAqL1xuICBwdWJsaWMgYXBwbHlZYXdQaXRjaCh5YXc6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChwaXRjaCA8IDAuMCkge1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va0Rvd24nLCAwLjApO1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va1VwJywgdGhpcy5yYW5nZU1hcFZlcnRpY2FsVXAubWFwKC1waXRjaCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cHJlc3Npb25zLnNldFZhbHVlKCdsb29rVXAnLCAwLjApO1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va0Rvd24nLCB0aGlzLnJhbmdlTWFwVmVydGljYWxEb3duLm1hcChwaXRjaCkpO1xuICAgIH1cblxuICAgIGlmICh5YXcgPCAwLjApIHtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tMZWZ0JywgMC4wKTtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tSaWdodCcsIHRoaXMucmFuZ2VNYXBIb3Jpem9udGFsT3V0ZXIubWFwKC15YXcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHByZXNzaW9ucy5zZXRWYWx1ZSgnbG9va1JpZ2h0JywgMC4wKTtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbnMuc2V0VmFsdWUoJ2xvb2tMZWZ0JywgdGhpcy5yYW5nZU1hcEhvcml6b250YWxPdXRlci5tYXAoeWF3KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgYXBwbHlZYXdQaXRjaH0gaW5zdGVhZC5cbiAgICovXG4gIHB1YmxpYyBsb29rQXQoZXVsZXI6IFRIUkVFLkV1bGVyKTogdm9pZCB7XG4gICAgY29uc29sZS53YXJuKCdWUk1Mb29rQXRCb25lQXBwbGllcjogbG9va0F0KCkgaXMgZGVwcmVjYXRlZC4gdXNlIGFwcGx5KCkgaW5zdGVhZC4nKTtcblxuICAgIGNvbnN0IHlhdyA9IFRIUkVFLk1hdGhVdGlscy5SQUQyREVHICogZXVsZXIueTtcbiAgICBjb25zdCBwaXRjaCA9IFRIUkVFLk1hdGhVdGlscy5SQUQyREVHICogZXVsZXIueDtcblxuICAgIHRoaXMuYXBwbHlZYXdQaXRjaCh5YXcsIHBpdGNoKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IHNhdHVyYXRlIH0gZnJvbSAnLi4vdXRpbHMvc2F0dXJhdGUnO1xuXG5leHBvcnQgY2xhc3MgVlJNTG9va0F0UmFuZ2VNYXAge1xuICAvKipcbiAgICogTGltaXRzIHRoZSBtYXhpbXVtIGFuZ2xlIG9mIHRoZSBpbnB1dCBhbmdsZSBvZiB0aGUgTG9va0F0IHZlY3RvciBmcm9tIHRoZSBmcm9udCBvZiB0aGUgaGVhZCAodGhlIHBvc2l0aXZlIHogYXhpcykuXG4gICAqL1xuICBwdWJsaWMgaW5wdXRNYXhWYWx1ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGFuIGFuZ2xlIChpbiBkZWdyZWVzKSBmb3IgYm9uZSB0eXBlIG9mIExvb2tBdCBhcHBsaWVycywgb3IgYSB3ZWlnaHQgZm9yIGV4cHJlc3Npb24gdHlwZSBvZiBMb29rQXQgYXBwbGllcnMuXG4gICAqIFRoZSBpbnB1dCB2YWx1ZSB3aWxsIHRha2UgYDEuMGAgd2hlbiB0aGUgaW5wdXQgYW5nbGUgZXF1YWxzIChvciBncmVhdGVyKSB0byB7QGxpbmsgaW5wdXRNYXhWYWx1ZX0uXG4gICAqL1xuICBwdWJsaWMgb3V0cHV0U2NhbGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHtAbGluayBWUk1Mb29rQXRSYW5nZU1hcH0uXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dE1heFZhbHVlIFRoZSB7QGxpbmsgaW5wdXRNYXhWYWx1ZX0gb2YgdGhlIG1hcFxuICAgKiBAcGFyYW0gb3V0cHV0U2NhbGUgVGhlIHtAbGluayBvdXRwdXRTY2FsZX0gb2YgdGhlIG1hcFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKGlucHV0TWF4VmFsdWU6IG51bWJlciwgb3V0cHV0U2NhbGU6IG51bWJlcikge1xuICAgIHRoaXMuaW5wdXRNYXhWYWx1ZSA9IGlucHV0TWF4VmFsdWU7XG4gICAgdGhpcy5vdXRwdXRTY2FsZSA9IG91dHB1dFNjYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIGFuIGlucHV0IHZhbHVlIGFuZCBvdXRwdXQgYSBtYXBwZWQgdmFsdWUuXG4gICAqIEBwYXJhbSBzcmMgVGhlIGlucHV0IHZhbHVlXG4gICAqL1xuICBwdWJsaWMgbWFwKHNyYzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXRTY2FsZSAqIHNhdHVyYXRlKHNyYyAvIHRoaXMuaW5wdXRNYXhWYWx1ZSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB0eXBlICogYXMgVjBWUk0gZnJvbSAnQHBpeGl2L3R5cGVzLXZybS0wLjAnO1xuaW1wb3J0IHR5cGUgKiBhcyBWMVZSTVNjaGVtYSBmcm9tICdAcGl4aXYvdHlwZXMtdnJtYy12cm0tMS4wJztcbmltcG9ydCB0eXBlIHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uTWFuYWdlciB9IGZyb20gJy4uL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5vaWQgfSBmcm9tICcuLi9odW1hbm9pZC9WUk1IdW1hbm9pZCc7XG5pbXBvcnQgeyBWUk1Mb29rQXRIZWxwZXIgfSBmcm9tICcuL2hlbHBlcnMvVlJNTG9va0F0SGVscGVyJztcbmltcG9ydCB7IFZSTUxvb2tBdCB9IGZyb20gJy4vVlJNTG9va0F0JztcbmltcG9ydCB0eXBlIHsgVlJNTG9va0F0QXBwbGllciB9IGZyb20gJy4vVlJNTG9va0F0QXBwbGllcic7XG5pbXBvcnQgeyBWUk1Mb29rQXRCb25lQXBwbGllciB9IGZyb20gJy4vVlJNTG9va0F0Qm9uZUFwcGxpZXInO1xuaW1wb3J0IHsgVlJNTG9va0F0RXhwcmVzc2lvbkFwcGxpZXIgfSBmcm9tICcuL1ZSTUxvb2tBdEV4cHJlc3Npb25BcHBsaWVyJztcbmltcG9ydCB0eXBlIHsgVlJNTG9va0F0TG9hZGVyUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vVlJNTG9va0F0TG9hZGVyUGx1Z2luT3B0aW9ucyc7XG5pbXBvcnQgeyBWUk1Mb29rQXRSYW5nZU1hcCB9IGZyb20gJy4vVlJNTG9va0F0UmFuZ2VNYXAnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIHNwZWMgdmVyc2lvbnMgaXQgcmVjb2duaXplcy5cbiAqL1xuY29uc3QgUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyA9IG5ldyBTZXQoWycxLjAnLCAnMS4wLWJldGEnXSk7XG5cbi8qKlxuICogVGhlIG1pbmltdW0gcGVybWl0dGVkIHZhbHVlIGZvciB7QGxpbmsgVjFWUk1TY2hlbWEuTG9va0F0UmFuZ2VNYXAuaW5wdXRNYXhWYWx1ZX0uXG4gKiBJZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgc21hbGxlciB0aGFuIHRoaXMsIHRoZSBsb2FkZXIgc2hvd3MgYSB3YXJuaW5nIGFuZCBjbGFtcHMgdXAgdGhlIHZhbHVlLlxuICovXG5jb25zdCBJTlBVVF9NQVhfVkFMVUVfTUlOSU1VTSA9IDAuMDE7XG5cbi8qKlxuICogQSBwbHVnaW4gb2YgR0xURkxvYWRlciB0aGF0IGltcG9ydHMgYSB7QGxpbmsgVlJNTG9va0F0fSBmcm9tIGEgVlJNIGV4dGVuc2lvbiBvZiBhIEdMVEYuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1Mb29rQXRMb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgYW4gT2JqZWN0M0QgdG8gYWRkIHtAbGluayBWUk1Mb29rQXRIZWxwZXJ9IHMuXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIGhlbHBlciB3aWxsIG5vdCBiZSBjcmVhdGVkLlxuICAgKiBJZiBgcmVuZGVyT3JkZXJgIGlzIHNldCB0byB0aGUgcm9vdCwgaGVscGVycyB3aWxsIGNvcHkgdGhlIHNhbWUgYHJlbmRlck9yZGVyYCAuXG4gICAqL1xuICBwdWJsaWMgaGVscGVyUm9vdD86IFRIUkVFLk9iamVjdDNEO1xuXG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICByZXR1cm4gJ1ZSTUxvb2tBdExvYWRlclBsdWdpbic7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyc2VyOiBHTFRGUGFyc2VyLCBvcHRpb25zPzogVlJNTG9va0F0TG9hZGVyUGx1Z2luT3B0aW9ucykge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgdGhpcy5oZWxwZXJSb290ID0gb3B0aW9ucz8uaGVscGVyUm9vdDtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlclJvb3QoZ2x0ZjogR0xURik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHZybUh1bWFub2lkID0gZ2x0Zi51c2VyRGF0YS52cm1IdW1hbm9pZCBhcyBWUk1IdW1hbm9pZCB8IHVuZGVmaW5lZDtcblxuICAgIC8vIGV4cGxpY2l0bHkgZGlzdGluZ3Vpc2ggbnVsbCBhbmQgdW5kZWZpbmVkXG4gICAgLy8gc2luY2UgdnJtSHVtYW5vaWQgbWlnaHQgYmUgbnVsbCBhcyBhIHJlc3VsdFxuICAgIGlmICh2cm1IdW1hbm9pZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodnJtSHVtYW5vaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWUk1Mb29rQXRMb2FkZXJQbHVnaW46IHZybUh1bWFub2lkIGlzIHVuZGVmaW5lZC4gVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW4gaGF2ZSB0byBiZSB1c2VkIGZpcnN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgdnJtRXhwcmVzc2lvbk1hbmFnZXIgPSBnbHRmLnVzZXJEYXRhLnZybUV4cHJlc3Npb25NYW5hZ2VyIGFzIFZSTUV4cHJlc3Npb25NYW5hZ2VyIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKHZybUV4cHJlc3Npb25NYW5hZ2VyID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh2cm1FeHByZXNzaW9uTWFuYWdlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdWUk1Mb29rQXRMb2FkZXJQbHVnaW46IHZybUV4cHJlc3Npb25NYW5hZ2VyIGlzIHVuZGVmaW5lZC4gVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbiBoYXZlIHRvIGJlIHVzZWQgZmlyc3QnLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBnbHRmLnVzZXJEYXRhLnZybUxvb2tBdCA9IGF3YWl0IHRoaXMuX2ltcG9ydChnbHRmLCB2cm1IdW1hbm9pZCwgdnJtRXhwcmVzc2lvbk1hbmFnZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhIHtAbGluayBWUk1Mb29rQXR9IGZyb20gYSBWUk0uXG4gICAqXG4gICAqIEBwYXJhbSBnbHRmIEEgcGFyc2VkIHJlc3VsdCBvZiBHTFRGIHRha2VuIGZyb20gR0xURkxvYWRlclxuICAgKiBAcGFyYW0gaHVtYW5vaWQgQSB7QGxpbmsgVlJNSHVtYW5vaWR9IGluc3RhbmNlIHRoYXQgcmVwcmVzZW50cyB0aGUgVlJNXG4gICAqIEBwYXJhbSBleHByZXNzaW9ucyBBIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0gaW5zdGFuY2UgdGhhdCByZXByZXNlbnRzIHRoZSBWUk1cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2ltcG9ydChcbiAgICBnbHRmOiBHTFRGLFxuICAgIGh1bWFub2lkOiBWUk1IdW1hbm9pZCB8IG51bGwsXG4gICAgZXhwcmVzc2lvbnM6IFZSTUV4cHJlc3Npb25NYW5hZ2VyIHwgbnVsbCxcbiAgKTogUHJvbWlzZTxWUk1Mb29rQXQgfCBudWxsPiB7XG4gICAgaWYgKGh1bWFub2lkID09IG51bGwgfHwgZXhwcmVzc2lvbnMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdjFSZXN1bHQgPSBhd2FpdCB0aGlzLl92MUltcG9ydChnbHRmLCBodW1hbm9pZCwgZXhwcmVzc2lvbnMpO1xuICAgIGlmICh2MVJlc3VsdCkge1xuICAgICAgcmV0dXJuIHYxUmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHYwUmVzdWx0ID0gYXdhaXQgdGhpcy5fdjBJbXBvcnQoZ2x0ZiwgaHVtYW5vaWQsIGV4cHJlc3Npb25zKTtcbiAgICBpZiAodjBSZXN1bHQpIHtcbiAgICAgIHJldHVybiB2MFJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3YxSW1wb3J0KFxuICAgIGdsdGY6IEdMVEYsXG4gICAgaHVtYW5vaWQ6IFZSTUh1bWFub2lkLFxuICAgIGV4cHJlc3Npb25zOiBWUk1FeHByZXNzaW9uTWFuYWdlcixcbiAgKTogUHJvbWlzZTxWUk1Mb29rQXQgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IGlzVlJNVXNlZCA9IGpzb24uZXh0ZW5zaW9uc1VzZWQ/LmluZGV4T2YoJ1ZSTUNfdnJtJykgIT09IC0xO1xuICAgIGlmICghaXNWUk1Vc2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbnNpb24gPSBqc29uLmV4dGVuc2lvbnM/LlsnVlJNQ192cm0nXSBhcyBWMVZSTVNjaGVtYS5WUk1DVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVjVmVyc2lvbiA9IGV4dGVuc2lvbi5zcGVjVmVyc2lvbjtcbiAgICBpZiAoIVBPU1NJQkxFX1NQRUNfVkVSU0lPTlMuaGFzKHNwZWNWZXJzaW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKGBWUk1Mb29rQXRMb2FkZXJQbHVnaW46IFVua25vd24gVlJNQ192cm0gc3BlY1ZlcnNpb24gXCIke3NwZWNWZXJzaW9ufVwiYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFMb29rQXQgPSBleHRlbnNpb24ubG9va0F0O1xuICAgIGlmICghc2NoZW1hTG9va0F0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0T3V0cHV0U2NhbGUgPSBzY2hlbWFMb29rQXQudHlwZSA9PT0gJ2V4cHJlc3Npb24nID8gMS4wIDogMTAuMDtcblxuICAgIGNvbnN0IG1hcEhJID0gdGhpcy5fdjFJbXBvcnRSYW5nZU1hcChzY2hlbWFMb29rQXQucmFuZ2VNYXBIb3Jpem9udGFsSW5uZXIsIGRlZmF1bHRPdXRwdXRTY2FsZSk7XG4gICAgY29uc3QgbWFwSE8gPSB0aGlzLl92MUltcG9ydFJhbmdlTWFwKHNjaGVtYUxvb2tBdC5yYW5nZU1hcEhvcml6b250YWxPdXRlciwgZGVmYXVsdE91dHB1dFNjYWxlKTtcbiAgICBjb25zdCBtYXBWRCA9IHRoaXMuX3YxSW1wb3J0UmFuZ2VNYXAoc2NoZW1hTG9va0F0LnJhbmdlTWFwVmVydGljYWxEb3duLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuICAgIGNvbnN0IG1hcFZVID0gdGhpcy5fdjFJbXBvcnRSYW5nZU1hcChzY2hlbWFMb29rQXQucmFuZ2VNYXBWZXJ0aWNhbFVwLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuXG4gICAgbGV0IGFwcGxpZXI7XG5cbiAgICBpZiAoc2NoZW1hTG9va0F0LnR5cGUgPT09ICdleHByZXNzaW9uJykge1xuICAgICAgYXBwbGllciA9IG5ldyBWUk1Mb29rQXRFeHByZXNzaW9uQXBwbGllcihleHByZXNzaW9ucywgbWFwSEksIG1hcEhPLCBtYXBWRCwgbWFwVlUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBsaWVyID0gbmV3IFZSTUxvb2tBdEJvbmVBcHBsaWVyKGh1bWFub2lkLCBtYXBISSwgbWFwSE8sIG1hcFZELCBtYXBWVSk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9va0F0ID0gdGhpcy5faW1wb3J0TG9va0F0KGh1bWFub2lkLCBhcHBsaWVyKTtcblxuICAgIGxvb2tBdC5vZmZzZXRGcm9tSGVhZEJvbmUuZnJvbUFycmF5KHNjaGVtYUxvb2tBdC5vZmZzZXRGcm9tSGVhZEJvbmUgPz8gWzAuMCwgMC4wNiwgMC4wXSk7XG5cbiAgICByZXR1cm4gbG9va0F0O1xuICB9XG5cbiAgcHJpdmF0ZSBfdjFJbXBvcnRSYW5nZU1hcChcbiAgICBzY2hlbWFSYW5nZU1hcDogVjFWUk1TY2hlbWEuTG9va0F0UmFuZ2VNYXAgfCB1bmRlZmluZWQsXG4gICAgZGVmYXVsdE91dHB1dFNjYWxlOiBudW1iZXIsXG4gICk6IFZSTUxvb2tBdFJhbmdlTWFwIHtcbiAgICBsZXQgaW5wdXRNYXhWYWx1ZSA9IHNjaGVtYVJhbmdlTWFwPy5pbnB1dE1heFZhbHVlID8/IDkwLjA7XG4gICAgY29uc3Qgb3V0cHV0U2NhbGUgPSBzY2hlbWFSYW5nZU1hcD8ub3V0cHV0U2NhbGUgPz8gZGVmYXVsdE91dHB1dFNjYWxlO1xuXG4gICAgLy8gSXQgbWlnaHQgY2F1c2UgTmFOIHdoZW4gYGlucHV0TWF4VmFsdWVgIGlzIHRvbyBzbWFsbFxuICAgIC8vIHdoaWNoIG1ha2VzIHRoZSBtZXNoIG9mIHRoZSBoZWFkIGRpc2FwcGVhclxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3BpeGl2L3RocmVlLXZybS9pc3N1ZXMvMTIwMVxuICAgIGlmIChpbnB1dE1heFZhbHVlIDwgSU5QVVRfTUFYX1ZBTFVFX01JTklNVU0pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1ZSTUxvb2tBdExvYWRlclBsdWdpbjogaW5wdXRNYXhWYWx1ZSBvZiBhIHJhbmdlIG1hcCBpcyB0b28gc21hbGwuIENvbnNpZGVyIHJldmlld2luZyB0aGUgcmFuZ2UgbWFwIScsXG4gICAgICApO1xuICAgICAgaW5wdXRNYXhWYWx1ZSA9IElOUFVUX01BWF9WQUxVRV9NSU5JTVVNO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVlJNTG9va0F0UmFuZ2VNYXAoaW5wdXRNYXhWYWx1ZSwgb3V0cHV0U2NhbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjBJbXBvcnQoXG4gICAgZ2x0ZjogR0xURixcbiAgICBodW1hbm9pZDogVlJNSHVtYW5vaWQsXG4gICAgZXhwcmVzc2lvbnM6IFZSTUV4cHJlc3Npb25NYW5hZ2VyLFxuICApOiBQcm9taXNlPFZSTUxvb2tBdCB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgdnJtRXh0ID0ganNvbi5leHRlbnNpb25zPy5WUk0gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdnJtRXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFGaXJzdFBlcnNvbiA9IHZybUV4dC5maXJzdFBlcnNvbjtcbiAgICBpZiAoIXNjaGVtYUZpcnN0UGVyc29uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0T3V0cHV0U2NhbGUgPSBzY2hlbWFGaXJzdFBlcnNvbi5sb29rQXRUeXBlTmFtZSA9PT0gJ0JsZW5kU2hhcGUnID8gMS4wIDogMTAuMDtcblxuICAgIGNvbnN0IG1hcEhJID0gdGhpcy5fdjBJbXBvcnREZWdyZWVNYXAoc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0SG9yaXpvbnRhbElubmVyLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuICAgIGNvbnN0IG1hcEhPID0gdGhpcy5fdjBJbXBvcnREZWdyZWVNYXAoc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0SG9yaXpvbnRhbE91dGVyLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuICAgIGNvbnN0IG1hcFZEID0gdGhpcy5fdjBJbXBvcnREZWdyZWVNYXAoc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0VmVydGljYWxEb3duLCBkZWZhdWx0T3V0cHV0U2NhbGUpO1xuICAgIGNvbnN0IG1hcFZVID0gdGhpcy5fdjBJbXBvcnREZWdyZWVNYXAoc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0VmVydGljYWxVcCwgZGVmYXVsdE91dHB1dFNjYWxlKTtcblxuICAgIGxldCBhcHBsaWVyO1xuXG4gICAgaWYgKHNjaGVtYUZpcnN0UGVyc29uLmxvb2tBdFR5cGVOYW1lID09PSAnQmxlbmRTaGFwZScpIHtcbiAgICAgIGFwcGxpZXIgPSBuZXcgVlJNTG9va0F0RXhwcmVzc2lvbkFwcGxpZXIoZXhwcmVzc2lvbnMsIG1hcEhJLCBtYXBITywgbWFwVkQsIG1hcFZVKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwbGllciA9IG5ldyBWUk1Mb29rQXRCb25lQXBwbGllcihodW1hbm9pZCwgbWFwSEksIG1hcEhPLCBtYXBWRCwgbWFwVlUpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvb2tBdCA9IHRoaXMuX2ltcG9ydExvb2tBdChodW1hbm9pZCwgYXBwbGllcik7XG5cbiAgICBpZiAoc2NoZW1hRmlyc3RQZXJzb24uZmlyc3RQZXJzb25Cb25lT2Zmc2V0KSB7XG4gICAgICBsb29rQXQub2Zmc2V0RnJvbUhlYWRCb25lLnNldChcbiAgICAgICAgc2NoZW1hRmlyc3RQZXJzb24uZmlyc3RQZXJzb25Cb25lT2Zmc2V0LnggPz8gMC4wLFxuICAgICAgICBzY2hlbWFGaXJzdFBlcnNvbi5maXJzdFBlcnNvbkJvbmVPZmZzZXQueSA/PyAwLjA2LFxuICAgICAgICAtKHNjaGVtYUZpcnN0UGVyc29uLmZpcnN0UGVyc29uQm9uZU9mZnNldC56ID8/IDAuMCksXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb29rQXQub2Zmc2V0RnJvbUhlYWRCb25lLnNldCgwLjAsIDAuMDYsIDAuMCk7XG4gICAgfVxuXG4gICAgLy8gVlJNIDAuMCBhcmUgZmFjaW5nIFotIGluc3RlYWQgb2YgWitcbiAgICBsb29rQXQuZmFjZUZyb250LnNldCgwLjAsIDAuMCwgLTEuMCk7XG5cbiAgICBpZiAoYXBwbGllciBpbnN0YW5jZW9mIFZSTUxvb2tBdEJvbmVBcHBsaWVyKSB7XG4gICAgICBhcHBsaWVyLmZhY2VGcm9udC5zZXQoMC4wLCAwLjAsIC0xLjApO1xuICAgIH1cblxuICAgIHJldHVybiBsb29rQXQ7XG4gIH1cblxuICBwcml2YXRlIF92MEltcG9ydERlZ3JlZU1hcChcbiAgICBzY2hlbWFEZWdyZWVNYXA6IFYwVlJNLkZpcnN0UGVyc29uRGVncmVlTWFwIHwgdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRPdXRwdXRTY2FsZTogbnVtYmVyLFxuICApOiBWUk1Mb29rQXRSYW5nZU1hcCB7XG4gICAgY29uc3QgY3VydmUgPSBzY2hlbWFEZWdyZWVNYXA/LmN1cnZlO1xuICAgIGlmIChKU09OLnN0cmluZ2lmeShjdXJ2ZSkgIT09ICdbMCwwLDAsMSwxLDEsMSwwXScpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ3VydmVzIG9mIExvb2tBdERlZ3JlZU1hcCBkZWZpbmVkIGluIFZSTSAwLjAgYXJlIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG5cbiAgICBsZXQgeFJhbmdlID0gc2NoZW1hRGVncmVlTWFwPy54UmFuZ2UgPz8gOTAuMDtcbiAgICBjb25zdCB5UmFuZ2UgPSBzY2hlbWFEZWdyZWVNYXA/LnlSYW5nZSA/PyBkZWZhdWx0T3V0cHV0U2NhbGU7XG5cbiAgICAvLyBJdCBtaWdodCBjYXVzZSBOYU4gd2hlbiBgeFJhbmdlYCBpcyB0b28gc21hbGxcbiAgICAvLyB3aGljaCBtYWtlcyB0aGUgbWVzaCBvZiB0aGUgaGVhZCBkaXNhcHBlYXJcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9waXhpdi90aHJlZS12cm0vaXNzdWVzLzEyMDFcbiAgICBpZiAoeFJhbmdlIDwgSU5QVVRfTUFYX1ZBTFVFX01JTklNVU0pIHtcbiAgICAgIGNvbnNvbGUud2FybignVlJNTG9va0F0TG9hZGVyUGx1Z2luOiB4UmFuZ2Ugb2YgYSBkZWdyZWUgbWFwIGlzIHRvbyBzbWFsbC4gQ29uc2lkZXIgcmV2aWV3aW5nIHRoZSBkZWdyZWUgbWFwIScpO1xuICAgICAgeFJhbmdlID0gSU5QVVRfTUFYX1ZBTFVFX01JTklNVU07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBWUk1Mb29rQXRSYW5nZU1hcCh4UmFuZ2UsIHlSYW5nZSk7XG4gIH1cblxuICBwcml2YXRlIF9pbXBvcnRMb29rQXQoaHVtYW5vaWQ6IFZSTUh1bWFub2lkLCBhcHBsaWVyOiBWUk1Mb29rQXRBcHBsaWVyKTogVlJNTG9va0F0IHtcbiAgICBjb25zdCBsb29rQXQgPSBuZXcgVlJNTG9va0F0KGh1bWFub2lkLCBhcHBsaWVyKTtcblxuICAgIGlmICh0aGlzLmhlbHBlclJvb3QpIHtcbiAgICAgIGNvbnN0IGhlbHBlciA9IG5ldyBWUk1Mb29rQXRIZWxwZXIobG9va0F0KTtcbiAgICAgIHRoaXMuaGVscGVyUm9vdC5hZGQoaGVscGVyKTtcbiAgICAgIGhlbHBlci5yZW5kZXJPcmRlciA9IHRoaXMuaGVscGVyUm9vdC5yZW5kZXJPcmRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9va0F0O1xuICB9XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHR5cGUgb2YgYXBwbGllci5cbiAqL1xuZXhwb3J0IGNvbnN0IFZSTUxvb2tBdFR5cGVOYW1lID0ge1xuICBCb25lOiAnYm9uZScsXG4gIEV4cHJlc3Npb246ICdleHByZXNzaW9uJyxcbn07XG5cbmV4cG9ydCB0eXBlIFZSTUxvb2tBdFR5cGVOYW1lID0gKHR5cGVvZiBWUk1Mb29rQXRUeXBlTmFtZSlba2V5b2YgdHlwZW9mIFZSTUxvb2tBdFR5cGVOYW1lXTtcbiIsICJpbXBvcnQgdHlwZSB7IEdMVEYsIEdMVEZMb2FkZXJQbHVnaW4sIEdMVEZQYXJzZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB0eXBlIHsgVlJNME1ldGEgfSBmcm9tICcuL1ZSTTBNZXRhJztcbmltcG9ydCB0eXBlIHsgVlJNMU1ldGEgfSBmcm9tICcuL1ZSTTFNZXRhJztcbmltcG9ydCB0eXBlIHsgVlJNTWV0YSB9IGZyb20gJy4vVlJNTWV0YSc7XG5pbXBvcnQgdHlwZSB7IFZSTU1ldGFMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9WUk1NZXRhTG9hZGVyUGx1Z2luT3B0aW9ucyc7XG5pbXBvcnQgdHlwZSAqIGFzIFYwVlJNIGZyb20gJ0BwaXhpdi90eXBlcy12cm0tMC4wJztcbmltcG9ydCB0eXBlICogYXMgVjFWUk1TY2hlbWEgZnJvbSAnQHBpeGl2L3R5cGVzLXZybWMtdnJtLTEuMCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyByZXNvbHZlVVJMIH0gZnJvbSAnLi4vdXRpbHMvcmVzb2x2ZVVSTCc7XG5pbXBvcnQgeyBHTFRGIGFzIEdMVEZTY2hlbWEgfSBmcm9tICdAZ2x0Zi10cmFuc2Zvcm0vY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TID0gbmV3IFNldChbJzEuMCcsICcxLjAtYmV0YSddKTtcblxuLyoqXG4gKiBBIHBsdWdpbiBvZiBHTFRGTG9hZGVyIHRoYXQgaW1wb3J0cyBhIHtAbGluayBWUk0xTWV0YX0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxuICovXG5leHBvcnQgY2xhc3MgVlJNTWV0YUxvYWRlclBsdWdpbiBpbXBsZW1lbnRzIEdMVEZMb2FkZXJQbHVnaW4ge1xuICBwdWJsaWMgcmVhZG9ubHkgcGFyc2VyOiBHTFRGUGFyc2VyO1xuXG4gIC8qKlxuICAgKiBJZiBgZmFsc2VgLCBpdCB3b24ndCBsb2FkIGl0cyB0aHVtYm5haWwgaW1hZ2UgKHtAbGluayBWUk0xTWV0YS50aHVtYm5haWxJbWFnZX0pLlxuICAgKiBgZmFsc2VgIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBwdWJsaWMgbmVlZFRodW1ibmFpbEltYWdlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgbGljZW5zZSB1cmxzLlxuICAgKiBUaGlzIG1ldGEgbG9hZGVyIHdpbGwgYWNjZXB0IHRoZXNlIGBsaWNlbnNlVXJsYHMuXG4gICAqIE90aGVyd2lzZSBpdCB3b24ndCBiZSBsb2FkZWQuXG4gICAqL1xuICBwdWJsaWMgYWNjZXB0TGljZW5zZVVybHM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGl0IHNob3VsZCBhY2NlcHQgVlJNMC4wIG1ldGEgb3Igbm90LlxuICAgKiBOb3RlIHRoYXQgaXQgbWlnaHQgbG9hZCB7QGxpbmsgVlJNME1ldGF9IGluc3RlYWQgb2Yge0BsaW5rIFZSTTFNZXRhfSB3aGVuIHRoaXMgaXMgYHRydWVgLlxuICAgKiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICovXG4gIHB1YmxpYyBhY2NlcHRWME1ldGE6IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICByZXR1cm4gJ1ZSTU1ldGFMb2FkZXJQbHVnaW4nO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlciwgb3B0aW9ucz86IFZSTU1ldGFMb2FkZXJQbHVnaW5PcHRpb25zKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cbiAgICB0aGlzLm5lZWRUaHVtYm5haWxJbWFnZSA9IG9wdGlvbnM/Lm5lZWRUaHVtYm5haWxJbWFnZSA/PyBmYWxzZTtcbiAgICB0aGlzLmFjY2VwdExpY2Vuc2VVcmxzID0gb3B0aW9ucz8uYWNjZXB0TGljZW5zZVVybHMgPz8gWydodHRwczovL3ZybS5kZXYvbGljZW5zZXMvMS4wLyddO1xuICAgIHRoaXMuYWNjZXB0VjBNZXRhID0gb3B0aW9ucz8uYWNjZXB0VjBNZXRhID8/IHRydWU7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBnbHRmLnVzZXJEYXRhLnZybU1ldGEgPSBhd2FpdCB0aGlzLl9pbXBvcnQoZ2x0Zik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9pbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNTWV0YSB8IG51bGw+IHtcbiAgICBjb25zdCB2MVJlc3VsdCA9IGF3YWl0IHRoaXMuX3YxSW1wb3J0KGdsdGYpO1xuICAgIGlmICh2MVJlc3VsdCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdjFSZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdjBSZXN1bHQgPSBhd2FpdCB0aGlzLl92MEltcG9ydChnbHRmKTtcbiAgICBpZiAodjBSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHYwUmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdjFJbXBvcnQoZ2x0ZjogR0xURik6IFByb21pc2U8VlJNMU1ldGEgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgIGNvbnN0IGlzVlJNVXNlZCA9IGpzb24uZXh0ZW5zaW9uc1VzZWQ/LmluZGV4T2YoJ1ZSTUNfdnJtJykgIT09IC0xO1xuICAgIGlmICghaXNWUk1Vc2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbnNpb24gPSBqc29uLmV4dGVuc2lvbnM/LlsnVlJNQ192cm0nXSBhcyBWMVZSTVNjaGVtYS5WUk1DVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmIChleHRlbnNpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlY1ZlcnNpb24gPSBleHRlbnNpb24uc3BlY1ZlcnNpb247XG4gICAgaWYgKCFQT1NTSUJMRV9TUEVDX1ZFUlNJT05TLmhhcyhzcGVjVmVyc2lvbikpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVlJNTWV0YUxvYWRlclBsdWdpbjogVW5rbm93biBWUk1DX3ZybSBzcGVjVmVyc2lvbiBcIiR7c3BlY1ZlcnNpb259XCJgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYU1ldGEgPSBleHRlbnNpb24ubWV0YTtcbiAgICBpZiAoIXNjaGVtYU1ldGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHRocm93IGFuIGVycm9yIGlmIGFjY2VwdFYwTWV0YSBpcyBmYWxzZVxuICAgIGNvbnN0IGxpY2Vuc2VVcmwgPSBzY2hlbWFNZXRhLmxpY2Vuc2VVcmw7XG4gICAgY29uc3QgYWNjZXB0TGljZW5zZVVybHNTZXQgPSBuZXcgU2V0KHRoaXMuYWNjZXB0TGljZW5zZVVybHMpO1xuICAgIGlmICghYWNjZXB0TGljZW5zZVVybHNTZXQuaGFzKGxpY2Vuc2VVcmwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFZSTU1ldGFMb2FkZXJQbHVnaW46IFRoZSBsaWNlbnNlIHVybCBcIiR7bGljZW5zZVVybH1cIiBpcyBub3QgYWNjZXB0ZWRgKTtcbiAgICB9XG5cbiAgICBsZXQgdGh1bWJuYWlsSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMubmVlZFRodW1ibmFpbEltYWdlICYmIHNjaGVtYU1ldGEudGh1bWJuYWlsSW1hZ2UgIT0gbnVsbCkge1xuICAgICAgdGh1bWJuYWlsSW1hZ2UgPSAoYXdhaXQgdGhpcy5fZXh0cmFjdEdMVEZJbWFnZShzY2hlbWFNZXRhLnRodW1ibmFpbEltYWdlKSkgPz8gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXRhVmVyc2lvbjogJzEnLFxuICAgICAgbmFtZTogc2NoZW1hTWV0YS5uYW1lLFxuICAgICAgdmVyc2lvbjogc2NoZW1hTWV0YS52ZXJzaW9uLFxuICAgICAgYXV0aG9yczogc2NoZW1hTWV0YS5hdXRob3JzLFxuICAgICAgY29weXJpZ2h0SW5mb3JtYXRpb246IHNjaGVtYU1ldGEuY29weXJpZ2h0SW5mb3JtYXRpb24sXG4gICAgICBjb250YWN0SW5mb3JtYXRpb246IHNjaGVtYU1ldGEuY29udGFjdEluZm9ybWF0aW9uLFxuICAgICAgcmVmZXJlbmNlczogc2NoZW1hTWV0YS5yZWZlcmVuY2VzLFxuICAgICAgdGhpcmRQYXJ0eUxpY2Vuc2VzOiBzY2hlbWFNZXRhLnRoaXJkUGFydHlMaWNlbnNlcyxcbiAgICAgIHRodW1ibmFpbEltYWdlLFxuICAgICAgbGljZW5zZVVybDogc2NoZW1hTWV0YS5saWNlbnNlVXJsLFxuICAgICAgYXZhdGFyUGVybWlzc2lvbjogc2NoZW1hTWV0YS5hdmF0YXJQZXJtaXNzaW9uLFxuICAgICAgYWxsb3dFeGNlc3NpdmVseVZpb2xlbnRVc2FnZTogc2NoZW1hTWV0YS5hbGxvd0V4Y2Vzc2l2ZWx5VmlvbGVudFVzYWdlLFxuICAgICAgYWxsb3dFeGNlc3NpdmVseVNleHVhbFVzYWdlOiBzY2hlbWFNZXRhLmFsbG93RXhjZXNzaXZlbHlTZXh1YWxVc2FnZSxcbiAgICAgIGNvbW1lcmNpYWxVc2FnZTogc2NoZW1hTWV0YS5jb21tZXJjaWFsVXNhZ2UsXG4gICAgICBhbGxvd1BvbGl0aWNhbE9yUmVsaWdpb3VzVXNhZ2U6IHNjaGVtYU1ldGEuYWxsb3dQb2xpdGljYWxPclJlbGlnaW91c1VzYWdlLFxuICAgICAgYWxsb3dBbnRpc29jaWFsT3JIYXRlVXNhZ2U6IHNjaGVtYU1ldGEuYWxsb3dBbnRpc29jaWFsT3JIYXRlVXNhZ2UsXG4gICAgICBjcmVkaXROb3RhdGlvbjogc2NoZW1hTWV0YS5jcmVkaXROb3RhdGlvbixcbiAgICAgIGFsbG93UmVkaXN0cmlidXRpb246IHNjaGVtYU1ldGEuYWxsb3dSZWRpc3RyaWJ1dGlvbixcbiAgICAgIG1vZGlmaWNhdGlvbjogc2NoZW1hTWV0YS5tb2RpZmljYXRpb24sXG4gICAgICBvdGhlckxpY2Vuc2VVcmw6IHNjaGVtYU1ldGEub3RoZXJMaWNlbnNlVXJsLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF92MEltcG9ydChnbHRmOiBHTFRGKTogUHJvbWlzZTxWUk0wTWV0YSB8IG51bGw+IHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuXG4gICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgY29uc3QgdnJtRXh0ID0ganNvbi5leHRlbnNpb25zPy5WUk0gYXMgVjBWUk0uVlJNIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdnJtRXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFNZXRhID0gdnJtRXh0Lm1ldGE7XG4gICAgaWYgKCFzY2hlbWFNZXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBpZiBhY2NlcHRWME1ldGEgaXMgZmFsc2VcbiAgICBpZiAoIXRoaXMuYWNjZXB0VjBNZXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZSTU1ldGFMb2FkZXJQbHVnaW46IEF0dGVtcHRlZCB0byBsb2FkIFZSTTAuMCBtZXRhIGJ1dCBhY2NlcHRWME1ldGEgaXMgZmFsc2UnKTtcbiAgICB9XG5cbiAgICAvLyBsb2FkIHRodW1ibmFpbCB0ZXh0dXJlXG4gICAgbGV0IHRleHR1cmU6IFRIUkVFLlRleHR1cmUgfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLm5lZWRUaHVtYm5haWxJbWFnZSAmJiBzY2hlbWFNZXRhLnRleHR1cmUgIT0gbnVsbCAmJiBzY2hlbWFNZXRhLnRleHR1cmUgIT09IC0xKSB7XG4gICAgICB0ZXh0dXJlID0gYXdhaXQgdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgndGV4dHVyZScsIHNjaGVtYU1ldGEudGV4dHVyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1ldGFWZXJzaW9uOiAnMCcsXG4gICAgICBhbGxvd2VkVXNlck5hbWU6IHNjaGVtYU1ldGEuYWxsb3dlZFVzZXJOYW1lLFxuICAgICAgYXV0aG9yOiBzY2hlbWFNZXRhLmF1dGhvcixcbiAgICAgIGNvbW1lcmNpYWxVc3NhZ2VOYW1lOiBzY2hlbWFNZXRhLmNvbW1lcmNpYWxVc3NhZ2VOYW1lLFxuICAgICAgY29udGFjdEluZm9ybWF0aW9uOiBzY2hlbWFNZXRhLmNvbnRhY3RJbmZvcm1hdGlvbixcbiAgICAgIGxpY2Vuc2VOYW1lOiBzY2hlbWFNZXRhLmxpY2Vuc2VOYW1lLFxuICAgICAgb3RoZXJMaWNlbnNlVXJsOiBzY2hlbWFNZXRhLm90aGVyTGljZW5zZVVybCxcbiAgICAgIG90aGVyUGVybWlzc2lvblVybDogc2NoZW1hTWV0YS5vdGhlclBlcm1pc3Npb25VcmwsXG4gICAgICByZWZlcmVuY2U6IHNjaGVtYU1ldGEucmVmZXJlbmNlLFxuICAgICAgc2V4dWFsVXNzYWdlTmFtZTogc2NoZW1hTWV0YS5zZXh1YWxVc3NhZ2VOYW1lLFxuICAgICAgdGV4dHVyZTogdGV4dHVyZSA/PyB1bmRlZmluZWQsXG4gICAgICB0aXRsZTogc2NoZW1hTWV0YS50aXRsZSxcbiAgICAgIHZlcnNpb246IHNjaGVtYU1ldGEudmVyc2lvbixcbiAgICAgIHZpb2xlbnRVc3NhZ2VOYW1lOiBzY2hlbWFNZXRhLnZpb2xlbnRVc3NhZ2VOYW1lLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9leHRyYWN0R0xURkltYWdlKGluZGV4OiBudW1iZXIpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsPiB7XG4gICAgY29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb24gYXMgR0xURlNjaGVtYS5JR0xURjtcblxuICAgIGNvbnN0IHNvdXJjZSA9IGpzb24uaW1hZ2VzPy5baW5kZXhdO1xuXG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBWUk1NZXRhTG9hZGVyUGx1Z2luOiBBdHRlbXB0IHRvIHVzZSBpbWFnZXNbJHtpbmRleH1dIG9mIGdsVEYgYXMgYSB0aHVtYm5haWwgYnV0IHRoZSBpbWFnZSBkb2Vzbid0IGV4aXN0YCxcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9yMTI0L2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMjTDI0NjdcblxuICAgIC8vIGBzb3VyY2UudXJpYCBtaWdodCBiZSBhIHJlZmVyZW5jZSB0byBhIGZpbGVcbiAgICBsZXQgc291cmNlVVJJOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBzb3VyY2UudXJpO1xuXG4gICAgLy8gTG9hZCB0aGUgYmluYXJ5IGFzIGEgYmxvYlxuICAgIGlmIChzb3VyY2UuYnVmZmVyVmlldyAhPSBudWxsKSB7XG4gICAgICBjb25zdCBidWZmZXJWaWV3ID0gYXdhaXQgdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgnYnVmZmVyVmlldycsIHNvdXJjZS5idWZmZXJWaWV3KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyVmlld10sIHsgdHlwZTogc291cmNlLm1pbWVUeXBlIH0pO1xuICAgICAgc291cmNlVVJJID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlVVJJID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFZSTU1ldGFMb2FkZXJQbHVnaW46IEF0dGVtcHQgdG8gdXNlIGltYWdlc1ske2luZGV4fV0gb2YgZ2xURiBhcyBhIHRodW1ibmFpbCBidXQgdGhlIGltYWdlIGNvdWxkbid0IGxvYWQgcHJvcGVybHlgLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5JbWFnZUxvYWRlcigpO1xuICAgIHJldHVybiBhd2FpdCBsb2FkZXIubG9hZEFzeW5jKHJlc29sdmVVUkwoc291cmNlVVJJLCAodGhpcy5wYXJzZXIgYXMgYW55KS5vcHRpb25zLnBhdGgpKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgY29uc29sZS53YXJuKCdWUk1NZXRhTG9hZGVyUGx1Z2luOiBGYWlsZWQgdG8gbG9hZCBhIHRodW1ibmFpbCBpbWFnZScpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH1cbn1cbiIsICIvKipcbiAqIFlvaW5rZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsOiBzdHJpbmcsIHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIEludmFsaWQgVVJMXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyB8fCB1cmwgPT09ICcnKSByZXR1cm4gJyc7XG5cbiAgLy8gSG9zdCBSZWxhdGl2ZSBVUkxcbiAgaWYgKC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QocGF0aCkgJiYgL15cXC8vLnRlc3QodXJsKSkge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoLyheaHR0cHM/OlxcL1xcL1teL10rKS4qL2ksICckMScpO1xuICB9XG5cbiAgLy8gQWJzb2x1dGUgVVJMIGh0dHA6Ly8saHR0cHM6Ly8sLy9cbiAgaWYgKC9eKGh0dHBzPzopP1xcL1xcLy9pLnRlc3QodXJsKSkgcmV0dXJuIHVybDtcblxuICAvLyBEYXRhIFVSSVxuICBpZiAoL15kYXRhOi4qLC4qJC9pLnRlc3QodXJsKSkgcmV0dXJuIHVybDtcblxuICAvLyBCbG9iIFVSTFxuICBpZiAoL15ibG9iOi4qJC9pLnRlc3QodXJsKSkgcmV0dXJuIHVybDtcblxuICAvLyBSZWxhdGl2ZSBVUkxcbiAgcmV0dXJuIHBhdGggKyB1cmw7XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbk1hbmFnZXIgfSBmcm9tICcuL2V4cHJlc3Npb25zL1ZSTUV4cHJlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB7IFZSTUZpcnN0UGVyc29uIH0gZnJvbSAnLi9maXJzdFBlcnNvbi9WUk1GaXJzdFBlcnNvbic7XG5pbXBvcnQgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4vaHVtYW5vaWQvVlJNSHVtYW5vaWQnO1xuaW1wb3J0IHsgVlJNTG9va0F0IH0gZnJvbSAnLi9sb29rQXQvVlJNTG9va0F0JztcbmltcG9ydCB7IFZSTU1ldGEgfSBmcm9tICcuL21ldGEvVlJNTWV0YSc7XG5pbXBvcnQgeyBWUk1Db3JlUGFyYW1ldGVycyB9IGZyb20gJy4vVlJNQ29yZVBhcmFtZXRlcnMnO1xuXG4vKipcbiAqIEEgY2xhc3MgdGhhdCByZXByZXNlbnRzIGEgc2luZ2xlIFZSTSBtb2RlbC5cbiAqIFRoaXMgY2xhc3Mgb25seSBpbmNsdWRlcyBjb3JlIHNwZWMgb2YgdGhlIFZSTSAoYFZSTUNfdnJtYCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1Db3JlIHtcbiAgLyoqXG4gICAqIGBUSFJFRS5Hcm91cGAgdGhhdCBjb250YWlucyB0aGUgZW50aXJlIFZSTS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzY2VuZTogVEhSRUUuR3JvdXA7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIG1ldGEgZmllbGRzIG9mIHRoZSBWUk0uXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIHJlZmVyIHRoZXNlIGxpY2Vuc2UgZmllbGRzIGJlZm9yZSB1c2UgeW91ciBWUk1zLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG1ldGE6IFZSTU1ldGE7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIHtAbGluayBWUk1IdW1hbm9pZH0gb2YgdGhlIFZSTS5cbiAgICogWW91IGNhbiBjb250cm9sIGVhY2ggYm9uZXMgdXNpbmcge0BsaW5rIFZSTUh1bWFub2lkLmdldE5vcm1hbGl6ZWRCb25lTm9kZX0gb3Ige0BsaW5rIFZSTUh1bWFub2lkLmdldFJhd0JvbmVOb2RlfS5cbiAgICpcbiAgICogQFRPRE8gQWRkIGEgbGluayB0byBWUk0gc3BlY1xuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGh1bWFub2lkOiBWUk1IdW1hbm9pZDtcblxuICAvKipcbiAgICogQ29udGFpbnMge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfSBvZiB0aGUgVlJNLlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byBjb250cm9sIHRoZXNlIGZhY2lhbCBleHByZXNzaW9ucyB2aWEge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyLnNldFZhbHVlfS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBleHByZXNzaW9uTWFuYWdlcj86IFZSTUV4cHJlc3Npb25NYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyB7QGxpbmsgVlJNRmlyc3RQZXJzb259IG9mIHRoZSBWUk0uXG4gICAqIFZSTUZpcnN0UGVyc29uIGlzIG1vc3RseSB1c2VkIGZvciBtZXNoIGN1bGxpbmcgZm9yIGZpcnN0IHBlcnNvbiB2aWV3LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGZpcnN0UGVyc29uPzogVlJNRmlyc3RQZXJzb247XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIHtAbGluayBWUk1Mb29rQXR9IG9mIHRoZSBWUk0uXG4gICAqIFlvdSBtaWdodCB3YW50IHRvIHVzZSB7QGxpbmsgVlJNTG9va0F0LnRhcmdldH0gdG8gY29udHJvbCB0aGUgZXllIGRpcmVjdGlvbiBvZiB5b3VyIFZSTXMuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbG9va0F0PzogVlJNTG9va0F0O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgVlJNIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIFtbVlJNUGFyYW1ldGVyc11dIHRoYXQgcmVwcmVzZW50cyBjb21wb25lbnRzIG9mIHRoZSBWUk1cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJhbXM6IFZSTUNvcmVQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zY2VuZSA9IHBhcmFtcy5zY2VuZTtcbiAgICB0aGlzLm1ldGEgPSBwYXJhbXMubWV0YTtcbiAgICB0aGlzLmh1bWFub2lkID0gcGFyYW1zLmh1bWFub2lkO1xuICAgIHRoaXMuZXhwcmVzc2lvbk1hbmFnZXIgPSBwYXJhbXMuZXhwcmVzc2lvbk1hbmFnZXI7XG4gICAgdGhpcy5maXJzdFBlcnNvbiA9IHBhcmFtcy5maXJzdFBlcnNvbjtcbiAgICB0aGlzLmxvb2tBdCA9IHBhcmFtcy5sb29rQXQ7XG4gIH1cblxuICAvKipcbiAgICogKipZb3UgbmVlZCB0byBjYWxsIHRoaXMgb24geW91ciB1cGRhdGUgbG9vcC4qKlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgZXZlcnkgVlJNIGNvbXBvbmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBkZWx0YSBkZWx0YVRpbWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaHVtYW5vaWQudXBkYXRlKCk7XG5cbiAgICBpZiAodGhpcy5sb29rQXQpIHtcbiAgICAgIHRoaXMubG9va0F0LnVwZGF0ZShkZWx0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXhwcmVzc2lvbk1hbmFnZXIpIHtcbiAgICAgIHRoaXMuZXhwcmVzc2lvbk1hbmFnZXIudXBkYXRlKCk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgVlJNQ29yZUxvYWRlclBsdWdpbk9wdGlvbnMgfSBmcm9tICcuL1ZSTUNvcmVMb2FkZXJQbHVnaW5PcHRpb25zJztcbmltcG9ydCB7IFZSTUNvcmUgfSBmcm9tICcuL1ZSTUNvcmUnO1xuaW1wb3J0IHsgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbiB9IGZyb20gJy4vZXhwcmVzc2lvbnMvVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbic7XG5pbXBvcnQgeyBWUk1GaXJzdFBlcnNvbkxvYWRlclBsdWdpbiB9IGZyb20gJy4vZmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW4nO1xuaW1wb3J0IHsgVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW4gfSBmcm9tICcuL2h1bWFub2lkL1ZSTUh1bWFub2lkTG9hZGVyUGx1Z2luJztcbmltcG9ydCB7IFZSTU1ldGFMb2FkZXJQbHVnaW4gfSBmcm9tICcuL21ldGEvVlJNTWV0YUxvYWRlclBsdWdpbic7XG5pbXBvcnQgeyBWUk1Mb29rQXRMb2FkZXJQbHVnaW4gfSBmcm9tICcuL2xvb2tBdC9WUk1Mb29rQXRMb2FkZXJQbHVnaW4nO1xuaW1wb3J0IHR5cGUgeyBWUk1IdW1hbm9pZCB9IGZyb20gJy4vaHVtYW5vaWQnO1xuaW1wb3J0IHR5cGUgeyBWUk1NZXRhIH0gZnJvbSAnLi9tZXRhJztcblxuZXhwb3J0IGNsYXNzIFZSTUNvcmVMb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICByZXR1cm4gJ1ZSTUNfdnJtJztcbiAgfVxuXG4gIHB1YmxpYyByZWFkb25seSBwYXJzZXI6IEdMVEZQYXJzZXI7XG5cbiAgcHVibGljIHJlYWRvbmx5IGV4cHJlc3Npb25QbHVnaW46IFZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW47XG4gIHB1YmxpYyByZWFkb25seSBmaXJzdFBlcnNvblBsdWdpbjogVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW47XG4gIHB1YmxpYyByZWFkb25seSBodW1hbm9pZFBsdWdpbjogVlJNSHVtYW5vaWRMb2FkZXJQbHVnaW47XG4gIHB1YmxpYyByZWFkb25seSBsb29rQXRQbHVnaW46IFZSTUxvb2tBdExvYWRlclBsdWdpbjtcbiAgcHVibGljIHJlYWRvbmx5IG1ldGFQbHVnaW46IFZSTU1ldGFMb2FkZXJQbHVnaW47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcnNlcjogR0xURlBhcnNlciwgb3B0aW9ucz86IFZSTUNvcmVMb2FkZXJQbHVnaW5PcHRpb25zKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cbiAgICBjb25zdCBoZWxwZXJSb290ID0gb3B0aW9ucz8uaGVscGVyUm9vdDtcbiAgICBjb25zdCBhdXRvVXBkYXRlSHVtYW5Cb25lcyA9IG9wdGlvbnM/LmF1dG9VcGRhdGVIdW1hbkJvbmVzO1xuXG4gICAgdGhpcy5leHByZXNzaW9uUGx1Z2luID0gb3B0aW9ucz8uZXhwcmVzc2lvblBsdWdpbiA/PyBuZXcgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbihwYXJzZXIpO1xuICAgIHRoaXMuZmlyc3RQZXJzb25QbHVnaW4gPSBvcHRpb25zPy5maXJzdFBlcnNvblBsdWdpbiA/PyBuZXcgVlJNRmlyc3RQZXJzb25Mb2FkZXJQbHVnaW4ocGFyc2VyKTtcbiAgICB0aGlzLmh1bWFub2lkUGx1Z2luID1cbiAgICAgIG9wdGlvbnM/Lmh1bWFub2lkUGx1Z2luID8/IG5ldyBWUk1IdW1hbm9pZExvYWRlclBsdWdpbihwYXJzZXIsIHsgaGVscGVyUm9vdCwgYXV0b1VwZGF0ZUh1bWFuQm9uZXMgfSk7XG4gICAgdGhpcy5sb29rQXRQbHVnaW4gPSBvcHRpb25zPy5sb29rQXRQbHVnaW4gPz8gbmV3IFZSTUxvb2tBdExvYWRlclBsdWdpbihwYXJzZXIsIHsgaGVscGVyUm9vdCB9KTtcbiAgICB0aGlzLm1ldGFQbHVnaW4gPSBvcHRpb25zPy5tZXRhUGx1Z2luID8/IG5ldyBWUk1NZXRhTG9hZGVyUGx1Z2luKHBhcnNlcik7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLm1ldGFQbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuICAgIGF3YWl0IHRoaXMuaHVtYW5vaWRQbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuICAgIGF3YWl0IHRoaXMuZXhwcmVzc2lvblBsdWdpbi5hZnRlclJvb3QoZ2x0Zik7XG4gICAgYXdhaXQgdGhpcy5sb29rQXRQbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuICAgIGF3YWl0IHRoaXMuZmlyc3RQZXJzb25QbHVnaW4uYWZ0ZXJSb290KGdsdGYpO1xuXG4gICAgY29uc3QgbWV0YSA9IGdsdGYudXNlckRhdGEudnJtTWV0YSBhcyBWUk1NZXRhIHwgbnVsbDtcbiAgICBjb25zdCBodW1hbm9pZCA9IGdsdGYudXNlckRhdGEudnJtSHVtYW5vaWQgYXMgVlJNSHVtYW5vaWQgfCBudWxsO1xuXG4gICAgLy8gbWV0YSBhbmQgaHVtYW5vaWQgYXJlIHJlcXVpcmVkIHRvIGJlIGEgVlJNLlxuICAgIC8vIERvbid0IGNyZWF0ZSBWUk0gaWYgdGhleSBhcmUgbnVsbFxuICAgIGlmIChtZXRhICYmIGh1bWFub2lkKSB7XG4gICAgICBjb25zdCB2cm1Db3JlID0gbmV3IFZSTUNvcmUoe1xuICAgICAgICBzY2VuZTogZ2x0Zi5zY2VuZSxcbiAgICAgICAgZXhwcmVzc2lvbk1hbmFnZXI6IGdsdGYudXNlckRhdGEudnJtRXhwcmVzc2lvbk1hbmFnZXIsXG4gICAgICAgIGZpcnN0UGVyc29uOiBnbHRmLnVzZXJEYXRhLnZybUZpcnN0UGVyc29uLFxuICAgICAgICBodW1hbm9pZCxcbiAgICAgICAgbG9va0F0OiBnbHRmLnVzZXJEYXRhLnZybUxvb2tBdCxcbiAgICAgICAgbWV0YSxcbiAgICAgIH0pO1xuXG4gICAgICBnbHRmLnVzZXJEYXRhLnZybUNvcmUgPSB2cm1Db3JlO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IFZSTUxvb2tBdCB9IGZyb20gJ0BwaXhpdi90aHJlZS12cm0tY29yZSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IFJBRDJERUcgPSAxODAgLyBNYXRoLlBJO1xuXG5jb25zdCBfZXVsZXJBID0gLypAX19QVVJFX18qLyBuZXcgVEhSRUUuRXVsZXIoKTtcblxuZXhwb3J0IGNsYXNzIFZSTUxvb2tBdFF1YXRlcm5pb25Qcm94eSBleHRlbmRzIFRIUkVFLk9iamVjdDNEIHtcbiAgcHVibGljIHJlYWRvbmx5IHZybUxvb2tBdDogVlJNTG9va0F0O1xuICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgdHlwZTogc3RyaW5nIHwgJ1ZSTUxvb2tBdFF1YXRlcm5pb25Qcm94eSc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxvb2tBdDogVlJNTG9va0F0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudnJtTG9va0F0ID0gbG9va0F0O1xuXG4gICAgdGhpcy50eXBlID0gJ1ZSTUxvb2tBdFF1YXRlcm5pb25Qcm94eSc7XG5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9yMTU4L3NyYy9jb3JlL09iamVjdDNELmpzI0w2NVxuICAgIGNvbnN0IHByZXZSb3RhdGlvbk9uQ2hhbmdlQ2FsbGJhY2sgPSB0aGlzLnJvdGF0aW9uLl9vbkNoYW5nZUNhbGxiYWNrO1xuICAgIHRoaXMucm90YXRpb24uX29uQ2hhbmdlKCgpID0+IHtcbiAgICAgIHByZXZSb3RhdGlvbk9uQ2hhbmdlQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX2FwcGx5VG9Mb29rQXQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByZXZRdWF0ZXJuaW9uT25DaGFuZ2VDYWxsYmFjayA9IHRoaXMucXVhdGVybmlvbi5fb25DaGFuZ2VDYWxsYmFjaztcbiAgICB0aGlzLnF1YXRlcm5pb24uX29uQ2hhbmdlKCgpID0+IHtcbiAgICAgIHByZXZRdWF0ZXJuaW9uT25DaGFuZ2VDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fYXBwbHlUb0xvb2tBdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwbHlUb0xvb2tBdCgpOiB2b2lkIHtcbiAgICBfZXVsZXJBLnNldEZyb21RdWF0ZXJuaW9uKHRoaXMucXVhdGVybmlvbiwgVlJNTG9va0F0LkVVTEVSX09SREVSKTtcblxuICAgIHRoaXMudnJtTG9va0F0LnlhdyA9IFJBRDJERUcgKiBfZXVsZXJBLnk7XG4gICAgdGhpcy52cm1Mb29rQXQucGl0Y2ggPSBSQUQyREVHICogX2V1bGVyQS54O1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHR5cGUgeyBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSwgVlJNSHVtYW5Cb25lTmFtZSB9IGZyb20gJ0BwaXhpdi90aHJlZS12cm0tY29yZSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgdHlwZSB7IGNyZWF0ZVZSTUFuaW1hdGlvbkNsaXAgfSBmcm9tICcuL2NyZWF0ZVZSTUFuaW1hdGlvbkNsaXAnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgVlJNIEFuaW1hdGlvbi5cbiAqIFlvdSBwcm9iYWJseSB3YW50IHRvIGNyZWF0ZSBhbiBBbmltYXRpb25DbGlwIHVzaW5nIHtAbGluayBjcmVhdGVWUk1BbmltYXRpb25DbGlwfS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZSTUFuaW1hdGlvbiB7XG4gIHB1YmxpYyBkdXJhdGlvbjogbnVtYmVyO1xuICBwdWJsaWMgcmVzdEhpcHNQb3NpdGlvbjogVEhSRUUuVmVjdG9yMztcblxuICBwdWJsaWMgaHVtYW5vaWRUcmFja3M6IHtcbiAgICB0cmFuc2xhdGlvbjogTWFwPCdoaXBzJywgVEhSRUUuVmVjdG9yS2V5ZnJhbWVUcmFjaz47XG4gICAgcm90YXRpb246IE1hcDxWUk1IdW1hbkJvbmVOYW1lLCBUSFJFRS5RdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjaz47XG4gIH07XG4gIHB1YmxpYyBleHByZXNzaW9uVHJhY2tzOiB7XG4gICAgcHJlc2V0OiBNYXA8VlJNRXhwcmVzc2lvblByZXNldE5hbWUsIFRIUkVFLk51bWJlcktleWZyYW1lVHJhY2s+O1xuICAgIGN1c3RvbTogTWFwPHN0cmluZywgVEhSRUUuTnVtYmVyS2V5ZnJhbWVUcmFjaz47XG4gIH07XG4gIHB1YmxpYyBsb29rQXRUcmFjazogVEhSRUUuUXVhdGVybmlvbktleWZyYW1lVHJhY2sgfCBudWxsO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmR1cmF0aW9uID0gMC4wO1xuICAgIHRoaXMucmVzdEhpcHNQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICB0aGlzLmh1bWFub2lkVHJhY2tzID0ge1xuICAgICAgdHJhbnNsYXRpb246IG5ldyBNYXAoKSxcbiAgICAgIHJvdGF0aW9uOiBuZXcgTWFwKCksXG4gICAgfTtcblxuICAgIHRoaXMuZXhwcmVzc2lvblRyYWNrcyA9IHtcbiAgICAgIHByZXNldDogbmV3IE1hcCgpLFxuICAgICAgY3VzdG9tOiBuZXcgTWFwKCksXG4gICAgfTtcblxuICAgIHRoaXMubG9va0F0VHJhY2sgPSBudWxsO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgR0xURiwgR0xURkxvYWRlclBsdWdpbiwgR0xURlBhcnNlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgR0xURiBhcyBHTFRGU2NoZW1hIH0gZnJvbSAnQGdsdGYtdHJhbnNmb3JtL2NvcmUnO1xuaW1wb3J0IHsgVlJNQ1ZSTUFuaW1hdGlvbiB9IGZyb20gJ0BwaXhpdi90eXBlcy12cm1jLXZybS1hbmltYXRpb24tMS4wJztcbmltcG9ydCB0eXBlIHsgVlJNSHVtYW5Cb25lTmFtZSB9IGZyb20gJ0BwaXhpdi90aHJlZS12cm0tY29yZSc7XG5pbXBvcnQgeyBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSwgVlJNSHVtYW5Cb25lUGFyZW50TWFwIH0gZnJvbSAnQHBpeGl2L3RocmVlLXZybS1jb3JlJztcbmltcG9ydCB7IFZSTUFuaW1hdGlvbiB9IGZyb20gJy4vVlJNQW5pbWF0aW9uJztcbmltcG9ydCB7IGFycmF5Q2h1bmsgfSBmcm9tICcuL3V0aWxzL2FycmF5Q2h1bmsnO1xuXG5jb25zdCBNQVQ0X0lERU5USVRZID0gLypAX19QVVJFX18qLyBuZXcgVEhSRUUuTWF0cml4NCgpO1xuXG5jb25zdCBfdjNBID0gLypAX19QVVJFX18qLyBuZXcgVEhSRUUuVmVjdG9yMygpO1xuY29uc3QgX3F1YXRBID0gLypAX19QVVJFX18qLyBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXRCID0gLypAX19QVVJFX18qLyBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuY29uc3QgX3F1YXRDID0gLypAX19QVVJFX18qLyBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG4vKipcbiAqIFBvc3NpYmxlIHNwZWMgdmVyc2lvbnMgaXQgcmVjb2duaXplcy5cbiAqL1xuY29uc3QgUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyA9IC8qQF9fUFVSRV9fKi8gbmV3IFNldChbJzEuMCcsICcxLjAtZHJhZnQnXSk7XG5cbmNvbnN0IHZybUV4cHJlc3Npb25QcmVzZXROYW1lU2V0OiBTZXQ8c3RyaW5nPiA9IC8qQF9fUFVSRV9fKi8gbmV3IFNldChPYmplY3QudmFsdWVzKFZSTUV4cHJlc3Npb25QcmVzZXROYW1lKSk7XG5cbmludGVyZmFjZSBWUk1BbmltYXRpb25Mb2FkZXJQbHVnaW5Ob2RlTWFwIHtcbiAgaHVtYW5vaWRJbmRleFRvTmFtZTogTWFwPG51bWJlciwgVlJNSHVtYW5Cb25lTmFtZT47XG4gIGV4cHJlc3Npb25zSW5kZXhUb05hbWU6IE1hcDxudW1iZXIsIHN0cmluZz47XG4gIGxvb2tBdEluZGV4OiBudW1iZXIgfCBudWxsO1xufVxuXG50eXBlIFZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbldvcmxkTWF0cml4TWFwID0gTWFwPFZSTUh1bWFuQm9uZU5hbWUgfCAnaGlwc1BhcmVudCcsIFRIUkVFLk1hdHJpeDQ+O1xuXG4vKipcbiAqIEEgcGx1Z2luIG9mIEdMVEZMb2FkZXIgdGhhdCBpbXBvcnRzIHtAbGluayBWUk1BbmltYXRpb259cyBmcm9tIGEgYFZSTUNfdnJtX2FuaW1hdGlvbmAgZXh0ZW5zaW9uIGFuZCBnbHRmIGFuaW1hdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWUk1BbmltYXRpb25Mb2FkZXJQbHVnaW4gaW1wbGVtZW50cyBHTFRGTG9hZGVyUGx1Z2luIHtcbiAgcHVibGljIHJlYWRvbmx5IHBhcnNlcjogR0xURlBhcnNlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyc2VyOiBHTFRGUGFyc2VyKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ1ZSTUNfdnJtX2FuaW1hdGlvbic7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWZ0ZXJSb290KGdsdGY6IEdMVEYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkZWZHbHRmID0gZ2x0Zi5wYXJzZXIuanNvbiBhcyBHTFRGU2NoZW1hLklHTFRGO1xuICAgIGNvbnN0IGRlZkV4dGVuc2lvbnNVc2VkID0gZGVmR2x0Zi5leHRlbnNpb25zVXNlZDtcblxuICAgIGlmIChkZWZFeHRlbnNpb25zVXNlZCA9PSBudWxsIHx8IGRlZkV4dGVuc2lvbnNVc2VkLmluZGV4T2YodGhpcy5uYW1lKSA9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZkV4dGVuc2lvbiA9IGRlZkdsdGYuZXh0ZW5zaW9ucz8uW3RoaXMubmFtZV0gYXMgVlJNQ1ZSTUFuaW1hdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgIGlmIChkZWZFeHRlbnNpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNwZWNWZXJzaW9uID0gZGVmRXh0ZW5zaW9uLnNwZWNWZXJzaW9uO1xuICAgIGlmICghUE9TU0lCTEVfU1BFQ19WRVJTSU9OUy5oYXMoc3BlY1ZlcnNpb24pKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbjogVW5rbm93biBWUk1DX3ZybV9hbmltYXRpb24gc3BlYyB2ZXJzaW9uOiAke3NwZWNWZXJzaW9ufWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc3BlY1ZlcnNpb24gPT09ICcxLjAtZHJhZnQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdWUk1BbmltYXRpb25Mb2FkZXJQbHVnaW46IFVzaW5nIGEgZHJhZnQgc3BlYyB2ZXJzaW9uOiAxLjAtZHJhZnQuIFNvbWUgYmVoYXZpb3JzIG1heSBiZSBkaWZmZXJlbnQuIENvbnNpZGVyIHVwZGF0aW5nIHRoZSBhbmltYXRpb24gZmlsZS4nLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlTWFwID0gdGhpcy5fY3JlYXRlTm9kZU1hcChkZWZFeHRlbnNpb24pO1xuICAgIGNvbnN0IHdvcmxkTWF0cml4TWFwID0gYXdhaXQgdGhpcy5fY3JlYXRlQm9uZVdvcmxkTWF0cml4TWFwKGdsdGYsIGRlZkV4dGVuc2lvbik7XG5cbiAgICBjb25zdCBoaXBzTm9kZSA9IGRlZkV4dGVuc2lvbi5odW1hbm9pZD8uaHVtYW5Cb25lc1snaGlwcyddPy5ub2RlO1xuICAgIGNvbnN0IGhpcHMgPSBoaXBzTm9kZSAhPSBudWxsID8gKChhd2FpdCBnbHRmLnBhcnNlci5nZXREZXBlbmRlbmN5KCdub2RlJywgaGlwc05vZGUpKSBhcyBUSFJFRS5PYmplY3QzRCkgOiBudWxsO1xuXG4gICAgY29uc3QgcmVzdEhpcHNQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgaGlwcz8uZ2V0V29ybGRQb3NpdGlvbihyZXN0SGlwc1Bvc2l0aW9uKTtcblxuICAgIC8vIElmIHRoZSB5IGNvbXBvbmVudCBvZiB0aGUgcmVzdCBoaXBzIHBvc2l0aW9uIGlzIGFwcHJveGltYXRlbHkgemVybyBvciBiZWxvdyxcbiAgICAvLyBpdCBpcyBjb25zaWRlcmVkIHRoYXQgdGhlIGFuaW1hdGlvbiB2aW9sYXRlcyB0aGUgVlJNIFQtcG9zZVxuICAgIGlmIChyZXN0SGlwc1Bvc2l0aW9uLnkgPCAxZS0zKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdWUk1BbmltYXRpb25Mb2FkZXJQbHVnaW46IFRoZSBsb2FkZWQgVlJNIEFuaW1hdGlvbiBtaWdodCB2aW9sYXRlIHRoZSBWUk0gVC1wb3NlIChUaGUgeSBjb21wb25lbnQgb2YgdGhlIHJlc3QgaGlwcyBwb3NpdGlvbiBpcyBhcHByb3hpbWF0ZWx5IHplcm8gb3IgYmVsb3cuKScsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaXBzID0gZ2x0Zi5hbmltYXRpb25zO1xuICAgIGNvbnN0IGFuaW1hdGlvbnM6IFZSTUFuaW1hdGlvbltdID0gY2xpcHMubWFwKChjbGlwLCBpQW5pbWF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZBbmltYXRpb24gPSBkZWZHbHRmLmFuaW1hdGlvbnMhW2lBbmltYXRpb25dO1xuXG4gICAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLl9wYXJzZUFuaW1hdGlvbihjbGlwLCBkZWZBbmltYXRpb24sIG5vZGVNYXAsIHdvcmxkTWF0cml4TWFwKTtcbiAgICAgIGFuaW1hdGlvbi5yZXN0SGlwc1Bvc2l0aW9uID0gcmVzdEhpcHNQb3NpdGlvbjtcblxuICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgICB9KTtcblxuICAgIGdsdGYudXNlckRhdGEudnJtQW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVOb2RlTWFwKGRlZkV4dGVuc2lvbjogVlJNQ1ZSTUFuaW1hdGlvbik6IFZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbk5vZGVNYXAge1xuICAgIGNvbnN0IGh1bWFub2lkSW5kZXhUb05hbWU6IE1hcDxudW1iZXIsIFZSTUh1bWFuQm9uZU5hbWU+ID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGV4cHJlc3Npb25zSW5kZXhUb05hbWU6IE1hcDxudW1iZXIsIHN0cmluZz4gPSBuZXcgTWFwKCk7XG5cbiAgICAvLyBodW1hbm9pZFxuICAgIGNvbnN0IGh1bWFuQm9uZXMgPSBkZWZFeHRlbnNpb24uaHVtYW5vaWQ/Lmh1bWFuQm9uZXM7XG5cbiAgICBpZiAoaHVtYW5Cb25lcykge1xuICAgICAgT2JqZWN0LmVudHJpZXMoaHVtYW5Cb25lcykuZm9yRWFjaCgoW25hbWUsIGJvbmVdKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBib25lPy5ub2RlO1xuICAgICAgICBpZiAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgaHVtYW5vaWRJbmRleFRvTmFtZS5zZXQobm9kZSwgbmFtZSBhcyBWUk1IdW1hbkJvbmVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZXhwcmVzc2lvbnNcbiAgICBjb25zdCBwcmVzZXQgPSBkZWZFeHRlbnNpb24uZXhwcmVzc2lvbnM/LnByZXNldDtcblxuICAgIGlmIChwcmVzZXQpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByZXNldCkuZm9yRWFjaCgoW25hbWUsIGV4cHJlc3Npb25dKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uPy5ub2RlO1xuICAgICAgICBpZiAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgZXhwcmVzc2lvbnNJbmRleFRvTmFtZS5zZXQobm9kZSwgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbSA9IGRlZkV4dGVuc2lvbi5leHByZXNzaW9ucz8uY3VzdG9tO1xuXG4gICAgaWYgKGN1c3RvbSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMoY3VzdG9tKS5mb3JFYWNoKChbbmFtZSwgZXhwcmVzc2lvbl0pID0+IHtcbiAgICAgICAgY29uc3QgeyBub2RlIH0gPSBleHByZXNzaW9uO1xuICAgICAgICBleHByZXNzaW9uc0luZGV4VG9OYW1lLnNldChub2RlLCBuYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGxvb2tBdFxuICAgIGNvbnN0IGxvb2tBdEluZGV4ID0gZGVmRXh0ZW5zaW9uLmxvb2tBdD8ubm9kZSA/PyBudWxsO1xuXG4gICAgcmV0dXJuIHsgaHVtYW5vaWRJbmRleFRvTmFtZSwgZXhwcmVzc2lvbnNJbmRleFRvTmFtZSwgbG9va0F0SW5kZXggfTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2NyZWF0ZUJvbmVXb3JsZE1hdHJpeE1hcChcbiAgICBnbHRmOiBHTFRGLFxuICAgIGRlZkV4dGVuc2lvbjogVlJNQ1ZSTUFuaW1hdGlvbixcbiAgKTogUHJvbWlzZTxWUk1BbmltYXRpb25Mb2FkZXJQbHVnaW5Xb3JsZE1hdHJpeE1hcD4ge1xuICAgIC8vIHVwZGF0ZSB0aGUgZW50aXJlIGhpZXJhcmNoeSBmaXJzdFxuICAgIGdsdGYuc2NlbmUudXBkYXRlV29ybGRNYXRyaXgoZmFsc2UsIHRydWUpO1xuXG4gICAgY29uc3QgdGhyZWVOb2RlcyA9IChhd2FpdCBnbHRmLnBhcnNlci5nZXREZXBlbmRlbmNpZXMoJ25vZGUnKSkgYXMgVEhSRUUuT2JqZWN0M0RbXTtcblxuICAgIGNvbnN0IHdvcmxkTWF0cml4TWFwOiBWUk1BbmltYXRpb25Mb2FkZXJQbHVnaW5Xb3JsZE1hdHJpeE1hcCA9IG5ldyBNYXAoKTtcblxuICAgIGlmIChkZWZFeHRlbnNpb24uaHVtYW5vaWQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHdvcmxkTWF0cml4TWFwO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgW2JvbmVOYW1lLCBodW1hbkJvbmVdIG9mIE9iamVjdC5lbnRyaWVzKGRlZkV4dGVuc2lvbi5odW1hbm9pZC5odW1hbkJvbmVzKSkge1xuICAgICAgY29uc3Qgbm9kZSA9IGh1bWFuQm9uZT8ubm9kZTtcbiAgICAgIGlmIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGhyZWVOb2RlID0gdGhyZWVOb2Rlc1tub2RlXTtcbiAgICAgICAgd29ybGRNYXRyaXhNYXAuc2V0KGJvbmVOYW1lIGFzIFZSTUh1bWFuQm9uZU5hbWUsIHRocmVlTm9kZS5tYXRyaXhXb3JsZCk7XG5cbiAgICAgICAgaWYgKGJvbmVOYW1lID09PSAnaGlwcycpIHtcbiAgICAgICAgICB3b3JsZE1hdHJpeE1hcC5zZXQoJ2hpcHNQYXJlbnQnLCB0aHJlZU5vZGUucGFyZW50Py5tYXRyaXhXb3JsZCA/PyBNQVQ0X0lERU5USVRZKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3b3JsZE1hdHJpeE1hcDtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlQW5pbWF0aW9uKFxuICAgIGFuaW1hdGlvbkNsaXA6IFRIUkVFLkFuaW1hdGlvbkNsaXAsXG4gICAgZGVmQW5pbWF0aW9uOiBHTFRGU2NoZW1hLklBbmltYXRpb24sXG4gICAgbm9kZU1hcDogVlJNQW5pbWF0aW9uTG9hZGVyUGx1Z2luTm9kZU1hcCxcbiAgICB3b3JsZE1hdHJpeE1hcDogVlJNQW5pbWF0aW9uTG9hZGVyUGx1Z2luV29ybGRNYXRyaXhNYXAsXG4gICk6IFZSTUFuaW1hdGlvbiB7XG4gICAgY29uc3QgdHJhY2tzID0gYW5pbWF0aW9uQ2xpcC50cmFja3M7XG4gICAgY29uc3QgZGVmQ2hhbm5lbHMgPSBkZWZBbmltYXRpb24uY2hhbm5lbHM7XG5cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVlJNQW5pbWF0aW9uKCk7XG5cbiAgICByZXN1bHQuZHVyYXRpb24gPSBhbmltYXRpb25DbGlwLmR1cmF0aW9uO1xuXG4gICAgZGVmQ2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCwgaUNoYW5uZWwpID0+IHtcbiAgICAgIGNvbnN0IHsgbm9kZSwgcGF0aCB9ID0gY2hhbm5lbC50YXJnZXQ7XG4gICAgICBjb25zdCBvcmlnVHJhY2sgPSB0cmFja3NbaUNoYW5uZWxdO1xuXG4gICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gaHVtYW5vaWRcbiAgICAgIGNvbnN0IGJvbmVOYW1lID0gbm9kZU1hcC5odW1hbm9pZEluZGV4VG9OYW1lLmdldChub2RlKTtcbiAgICAgIGlmIChib25lTmFtZSAhPSBudWxsKSB7XG4gICAgICAgIGxldCBwYXJlbnRCb25lTmFtZTogVlJNSHVtYW5Cb25lTmFtZSB8ICdoaXBzUGFyZW50JyB8IG51bGwgPSBWUk1IdW1hbkJvbmVQYXJlbnRNYXBbYm9uZU5hbWVdO1xuICAgICAgICB3aGlsZSAocGFyZW50Qm9uZU5hbWUgIT0gbnVsbCAmJiB3b3JsZE1hdHJpeE1hcC5nZXQocGFyZW50Qm9uZU5hbWUpID09IG51bGwpIHtcbiAgICAgICAgICBwYXJlbnRCb25lTmFtZSA9IFZSTUh1bWFuQm9uZVBhcmVudE1hcFtwYXJlbnRCb25lTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50Qm9uZU5hbWUgPz8gKHBhcmVudEJvbmVOYW1lID0gJ2hpcHNQYXJlbnQnKTtcblxuICAgICAgICBpZiAocGF0aCA9PT0gJ3RyYW5zbGF0aW9uJykge1xuICAgICAgICAgIGlmIChib25lTmFtZSAhPT0gJ2hpcHMnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBUaGUgbG9hZGluZyBhbmltYXRpb24gY29udGFpbnMgYSB0cmFuc2xhdGlvbiB0cmFjayBmb3IgJHtib25lTmFtZX0sIHdoaWNoIGlzIG5vdCBwZXJtaXR0ZWQgaW4gdGhlIFZSTUNfdnJtX2FuaW1hdGlvbiBzcGVjLiBpZ25vcmluZyB0aGUgdHJhY2tgLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaGlwc1BhcmVudFdvcmxkTWF0cml4ID0gd29ybGRNYXRyaXhNYXAuZ2V0KCdoaXBzUGFyZW50JykhO1xuXG4gICAgICAgICAgICBjb25zdCB0cmFja1ZhbHVlcyA9IGFycmF5Q2h1bmsob3JpZ1RyYWNrLnZhbHVlcywgMykuZmxhdE1hcCgodikgPT5cbiAgICAgICAgICAgICAgX3YzQS5mcm9tQXJyYXkodikuYXBwbHlNYXRyaXg0KGhpcHNQYXJlbnRXb3JsZE1hdHJpeCkudG9BcnJheSgpLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBvcmlnVHJhY2suY2xvbmUoKTtcbiAgICAgICAgICAgIHRyYWNrLnZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkodHJhY2tWYWx1ZXMpO1xuXG4gICAgICAgICAgICByZXN1bHQuaHVtYW5vaWRUcmFja3MudHJhbnNsYXRpb24uc2V0KGJvbmVOYW1lLCB0cmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhdGggPT09ICdyb3RhdGlvbicpIHtcbiAgICAgICAgICAvLyBhICA9IHBeLTEgKiBhJyAqIHAgKiBjXG4gICAgICAgICAgLy8gYScgPSBwICogcF4tMSAqIGEnICogcCAqIGMgKiBjXi0xICogcF4tMVxuICAgICAgICAgIC8vICAgID0gcCAqIGEgKiBjXi0xICogcF4tMVxuXG4gICAgICAgICAgY29uc3Qgd29ybGRNYXRyaXggPSB3b3JsZE1hdHJpeE1hcC5nZXQoYm9uZU5hbWUpITtcbiAgICAgICAgICBjb25zdCBwYXJlbnRXb3JsZE1hdHJpeCA9IHdvcmxkTWF0cml4TWFwLmdldChwYXJlbnRCb25lTmFtZSkhO1xuXG4gICAgICAgICAgd29ybGRNYXRyaXguZGVjb21wb3NlKF92M0EsIF9xdWF0QSwgX3YzQSk7XG4gICAgICAgICAgX3F1YXRBLmludmVydCgpO1xuXG4gICAgICAgICAgcGFyZW50V29ybGRNYXRyaXguZGVjb21wb3NlKF92M0EsIF9xdWF0QiwgX3YzQSk7XG5cbiAgICAgICAgICBjb25zdCB0cmFja1ZhbHVlcyA9IGFycmF5Q2h1bmsob3JpZ1RyYWNrLnZhbHVlcywgNCkuZmxhdE1hcCgocSkgPT5cbiAgICAgICAgICAgIF9xdWF0Q1xuICAgICAgICAgICAgICAuZnJvbUFycmF5KHEgYXMgVEhSRUUuUXVhdGVybmlvblR1cGxlKVxuICAgICAgICAgICAgICAucHJlbXVsdGlwbHkoX3F1YXRCKVxuICAgICAgICAgICAgICAubXVsdGlwbHkoX3F1YXRBKVxuICAgICAgICAgICAgICAudG9BcnJheSgpLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCB0cmFjayA9IG9yaWdUcmFjay5jbG9uZSgpO1xuICAgICAgICAgIHRyYWNrLnZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkodHJhY2tWYWx1ZXMpO1xuXG4gICAgICAgICAgcmVzdWx0Lmh1bWFub2lkVHJhY2tzLnJvdGF0aW9uLnNldChib25lTmFtZSwgdHJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXRoIFwiJHtwYXRofVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBleHByZXNzaW9uc1xuICAgICAgY29uc3QgZXhwcmVzc2lvbk5hbWUgPSBub2RlTWFwLmV4cHJlc3Npb25zSW5kZXhUb05hbWUuZ2V0KG5vZGUpO1xuICAgICAgaWYgKGV4cHJlc3Npb25OYW1lICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHBhdGggPT09ICd0cmFuc2xhdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB0aW1lcyA9IG9yaWdUcmFjay50aW1lcztcbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KG9yaWdUcmFjay52YWx1ZXMubGVuZ3RoIC8gMyk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IG9yaWdUcmFjay52YWx1ZXNbMyAqIGldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG5ld1RyYWNrID0gbmV3IFRIUkVFLk51bWJlcktleWZyYW1lVHJhY2soYCR7ZXhwcmVzc2lvbk5hbWV9LndlaWdodGAsIHRpbWVzIGFzIGFueSwgdmFsdWVzIGFzIGFueSk7XG5cbiAgICAgICAgICBpZiAodnJtRXhwcmVzc2lvblByZXNldE5hbWVTZXQuaGFzKGV4cHJlc3Npb25OYW1lKSkge1xuICAgICAgICAgICAgcmVzdWx0LmV4cHJlc3Npb25UcmFja3MucHJlc2V0LnNldChleHByZXNzaW9uTmFtZSBhcyBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSwgbmV3VHJhY2spO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQuZXhwcmVzc2lvblRyYWNrcy5jdXN0b20uc2V0KGV4cHJlc3Npb25OYW1lLCBuZXdUcmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXRoIFwiJHtwYXRofVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBsb29rQXRcbiAgICAgIGlmIChub2RlID09PSBub2RlTWFwLmxvb2tBdEluZGV4KSB7XG4gICAgICAgIGlmIChwYXRoID09PSAncm90YXRpb24nKSB7XG4gICAgICAgICAgcmVzdWx0Lmxvb2tBdFRyYWNrID0gb3JpZ1RyYWNrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXRoIFwiJHtwYXRofVwiYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsICIvKipcbiAqIGBgYGpzXG4gKiBhcnJheUNodW5rKCBbIDEsIDIsIDMsIDQsIDUsIDYgXSwgMiApXG4gKiAvLyB3aWxsIGJlXG4gKiBbIFsgMSwgMiBdLCBbIDMsIDQgXSwgWyA1LCA2IF0gXVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUNodW5rPFQ+KGFycmF5OiBBcnJheUxpa2U8VD4sIGV2ZXJ5OiBudW1iZXIpOiBUW11bXSB7XG4gIGNvbnN0IE4gPSBhcnJheS5sZW5ndGg7XG5cbiAgY29uc3QgcmV0OiBUW11bXSA9IFtdO1xuXG4gIGxldCBjdXJyZW50OiBUW10gPSBbXTtcbiAgbGV0IHJlbWFpbmluZyA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICBjb25zdCBlbCA9IGFycmF5W2ldO1xuXG4gICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICByZW1haW5pbmcgPSBldmVyeTtcbiAgICAgIGN1cnJlbnQgPSBbXTtcbiAgICAgIHJldC5wdXNoKGN1cnJlbnQpO1xuICAgIH1cblxuICAgIGN1cnJlbnQucHVzaChlbCk7XG4gICAgcmVtYWluaW5nLS07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWUEsYUFBVzs7O0FDQXZCLFlBQVksV0FBVztBQ0V2QixZQUFZQyxZQUFXO0FNRnZCLFlBQVlBLFlBQVc7QUVBdkIsWUFBWUEsWUFBVztBRUN2QixZQUFZQSxZQUFXO0FHRHZCLFlBQVlBLFlBQVc7QUlBdkIsWUFBWUEsWUFBVztBRUF2QixZQUFZQSxZQUFXO0FJQXZCLFlBQVlBLGFBQVc7QUNBdkIsWUFBWUEsWUFBVztBQ0F2QixZQUFZQSxhQUFXO0FDQXZCLFlBQVlBLGFBQVc7QUNBdkIsWUFBWUEsYUFBVztBR0N2QixZQUFZQSxhQUFXO0FDQXZCLFlBQVlBLGFBQVc7QUlNdkIsWUFBWUEsYUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FwQ0FoQixJQUFNLGdCQUFOLGNBQWtDLGVBQVM7RUE2RmhELFlBQVksZ0JBQXdCO0FBQ2xDLFVBQU07QUFoRlIsU0FBTyxTQUFTO0FBS2hCLFNBQU8sV0FBVztBQUtsQixTQUFP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LEVBQ2YsUUFBUTtBQUFBLFVBQ2I7QUFFQSxnQkFBTSxRQUFRLFVBQVUsTUFBTTtBQUM5QixnQkFBTSxTQUFTLElBQUksYUFBYSxXQUFXO0FBRTNDLGlCQUFPLGVBQWUsU0FBUyxJQUFJLFVBQVUsS0FBSztBQUFBLFFBQ3BELE9BQU87QUFDTCxnQkFBTSxJQUFJLE1BQU0saUJBQWlCLElBQUksR0FBRztBQUFBLFFBQzFDO0FBQ0E7QUFBQSxNQUNGO0FBR0EsWUFBTSxpQkFBaUIsUUFBUSx1QkFBdUIsSUFBSSxJQUFJO0FBQzlELFVBQUksa0JBQWtCLE1BQU07QUFDMUIsWUFBSSxTQUFTLGVBQWU7QUFDMUIsZ0JBQU0sUUFBUSxVQUFVO0FBQ3hCLGdCQUFNLFNBQVMsSUFBSSxhQUFhLFVBQVUsT0FBTyxTQUFTLENBQUM7QUFDM0QsbUJBQVMsSUFBSSxHQUFHLElBQUksT0FBTyxRQUFRLEtBQUs7QUFDdEMsbUJBQU8sQ0FBQyxJQUFJLFVBQVUsT0FBTyxJQUFJLENBQUM7QUFBQSxVQUNwQztBQUVBLGdCQUFNLFdBQVcsSUFBVSw0QkFBb0IsR0FBRyxjQUFjLFdBQVcsT0FBYyxNQUFhO0FBRXRHLGNBQUksMkJBQTJCLElBQUksY0FBYyxHQUFHO0FBQ2xELG1CQUFPLGlCQUFpQixPQUFPLElBQUksZ0JBQTJDLFFBQVE7QUFBQSxVQUN4RixPQUFPO0FBQ0wsbUJBQU8saUJBQWlCLE9BQU8sSUFBSSxnQkFBZ0IsUUFBUTtBQUFBLFVBQzdEO0FBQUEsUUFDRixPQUFPO0FBQ0wsZ0JBQU0sSUFBSSxNQUFNLGlCQUFpQixJQUFJLEdBQUc7QUFBQSxRQUMxQztBQUNBO0FBQUEsTUFDRjtBQUdBLFVBQUksU0FBUyxRQUFRLGFBQWE7QUFDaEMsWUFBSSxTQUFTLFlBQVk7QUFDdkIsaUJBQU8sY0FBYztBQUFBLFFBQ3ZCLE9BQU87QUFDTCxnQkFBTSxJQUFJLE1BQU0saUJBQWlCLElBQUksR0FBRztBQUFBLFFBQzFDO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUVELFdBQU87QUFBQSxFQUNUO0FBQ0Y7IiwKICAibmFtZXMiOiBbIlRIUkVFIiwgIlRIUkVFIiwgIl9fYXN5bmMiLCAiX1ZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCIsICJfVlJNRXhwcmVzc2lvblRleHR1cmVUcmFuc2Zvcm1CaW5kIiwgIl9hIiwgIl9WUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luIiwgIl9fYXN5bmMiLCAiX2IiLCAiX1ZSTUZpcnN0UGVyc29uIiwgIl92M0EiLCAiX3F1YXRBIiwgIl92M0EiLCAiX3F1YXRBIiwgIl9xdWF0QSIsICJfdjNBIiwgIl92M0IiLCAiX3YzQSIsICJfdjNCIiwgIl9xdWF0QSIsICJfcXVhdEIiLCAiX1ZSTUxvb2tBdCIsICJWRUMzX1BPU0lUSVZFX1oiLCAiX2V1bGVyQSIsICJUSFJFRSIsICJfZXVsZXJBIiwgIlRIUkVFIiwgIlRIUkVFIiwgIl92M0EiLCAiX3F1YXRBIiwgIl9xdWF0QiIsICJfcXVhdEMiLCAiUE9TU0lCTEVfU1BFQ19WRVJTSU9OUyJdCn0K
