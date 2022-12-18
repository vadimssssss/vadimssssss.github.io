exports.ids = [6,7];
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

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4c330647", content, true, context)
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/locations/LocationsListItem.vue?vue&type=template&id=93c08526&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "locations-item"
  }, [_vm._ssrNode("<h2 class=\"title\">" + _vm._ssrEscape(" " + _vm._s(_vm.location.name) + " ") + "</h2> "), _vm._ssrNode("<div class=\"locations-content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.items.filter((i, index) => index < 5), function (character) {
    return _c('LocationOneCharacter', {
      key: character,
      attrs: {
        "character": character
      }
    });
  }), 1)]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "btn btnWhite",
    attrs: {
      "to": _vm.getLink
    }
  }, [_vm._v("more")])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/locations/LocationsListItem.vue?vue&type=template&id=93c08526&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: ./components/locations/LocationOneCharacter.vue + 4 modules
var LocationOneCharacter = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/locations/LocationsListItem.vue?vue&type=script&lang=js&


/* harmony default export */ var LocationsListItemvue_type_script_lang_js_ = ({
  props: {
    location: {
      type: Object,
      required: true
    },
    locationID: {
      type: Number
    },
    resultsArray: {
      type: Array,
      default: null
    }
  },
  components: {
    LocationOneCharacter: LocationOneCharacter["default"]
  },
  setup(props) {
    const items = Object(external_vue_["ref"])([...props.location.residents]);
    function onDrop(e) {
      let itemUrl = e.dataTransfer.getData('itemUrl');
      let itemLocationNameFrom = e.dataTransfer.getData('itemLocName');
      this.$emit('remove', itemLocationNameFrom, itemUrl);
      items.value.push(itemUrl);
    }
    return {
      items,
      onDrop
    };
  },
  watch: {
    items() {
      if (this.resultsArray !== null) {
        this.items = resultsArray;
      }
    }
  },
  computed: {
    // residents() {
    //   let residentsRes = this.location.residents.filter((i, index) => index < 5)
    //   return residentsRes
    // },
    getLink() {
      return `/locations/${this.location.id}`;
    }
  }
});
// CONCATENATED MODULE: ./components/locations/LocationsListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var locations_LocationsListItemvue_type_script_lang_js_ = (LocationsListItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/locations/LocationsListItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  locations_LocationsListItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c1184d9e"
  
)

/* harmony default export */ var LocationsListItem = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationsListItem_vue_vue_type_style_index_0_id_93c08526_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationsListItem_vue_vue_type_style_index_0_id_93c08526_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationsListItem_vue_vue_type_style_index_0_id_93c08526_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationsListItem_vue_vue_type_style_index_0_id_93c08526_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationsListItem_vue_vue_type_style_index_0_id_93c08526_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".locations-content{width:100%;height:70%}.locations-item{display:flex;align-items:center;flex-direction:column;background-color:#5c297c;padding:30px 25px;border-radius:50px;box-shadow:0 30px 30px rgba(0,0,0,.02);width:100%;min-height:400px}.locations-item .title{text-align:center;color:#fff}.locations-item ul{height:100%;display:flex;justify-content:space-around;flex-direction:column}.locations .btnWhite{color:#5c297c;margin-top:25px;font-weight:500}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=locations-list-item.js.map