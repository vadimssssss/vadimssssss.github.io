exports.ids = [7];
exports.modules = {

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("aa86cb66", content, true, context)
};

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationOneCharacter_vue_vue_type_style_index_0_id_43835516_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationOneCharacter_vue_vue_type_style_index_0_id_43835516_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationOneCharacter_vue_vue_type_style_index_0_id_43835516_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationOneCharacter_vue_vue_type_style_index_0_id_43835516_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationOneCharacter_vue_vue_type_style_index_0_id_43835516_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "li[data-v-43835516]{background-color:#fff;padding:8px 30px;border-radius:16px;display:flex;justify-content:space-between;margin-bottom:8px;font-size:22px;font-weight:500}li span[data-v-43835516]{font-weight:400;color:#5c297c}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/locations/LocationOneCharacter.vue?vue&type=template&id=43835516&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('li', {
    attrs: {
      "draggable": "true"
    },
    on: {
      "dragstart": function ($event) {
        return _vm.startDrag($event, _vm.characterData);
      }
    }
  }, [_vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.characterData.name) + " ") + "<span data-v-43835516>" + _vm._ssrEscape(" " + _vm._s(_vm.characterData.species)) + "</span>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/locations/LocationOneCharacter.vue?vue&type=template&id=43835516&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/locations/LocationOneCharacter.vue?vue&type=script&lang=js&

/* harmony default export */ var LocationOneCharactervue_type_script_lang_js_ = ({
  props: {
    character: {
      type: String
    }
  },
  setup() {
    function startDrag(e, item) {
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('itemUrl', item.url);
      e.dataTransfer.setData('itemLocName', item.location.name);
    }
    return {
      startDrag
    };
  },
  data() {
    return {
      characterData: {}
    };
  },
  created() {
    external_axios_default.a.get(this.character).then(res => {
      this.characterData = res.data;
    });
  }
});
// CONCATENATED MODULE: ./components/locations/LocationOneCharacter.vue?vue&type=script&lang=js&
 /* harmony default export */ var locations_LocationOneCharactervue_type_script_lang_js_ = (LocationOneCharactervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/locations/LocationOneCharacter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  locations_LocationOneCharactervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "43835516",
  "4b5d4e46"
  
)

/* harmony default export */ var LocationOneCharacter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=locations-location-one-character.js.map