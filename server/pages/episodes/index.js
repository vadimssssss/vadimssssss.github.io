exports.ids = [14,3,4];
exports.modules = {

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("80114088", content, true, context)
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/episodes/EpisodesPreview.vue?vue&type=template&id=72c0661c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('tr', [_vm._ssrNode("<td data-v-72c0661c>", "</td>", [_c('nuxt-link', {
    staticClass: "link",
    attrs: {
      "to": _vm.getLink
    }
  }, [_vm._v(" " + _vm._s(_vm.episode.name) + " ")])], 1), _vm._ssrNode(" <td data-v-72c0661c><span data-v-72c0661c>" + _vm._ssrEscape(" " + _vm._s(_vm.episode.air_date) + " ") + "</span></td> <td data-v-72c0661c><span data-v-72c0661c>" + _vm._ssrEscape(" " + _vm._s(_vm.episode.episode) + " ") + "</span></td>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/episodes/EpisodesPreview.vue?vue&type=template&id=72c0661c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/episodes/EpisodesPreview.vue?vue&type=script&lang=js&
/* harmony default export */ var EpisodesPreviewvue_type_script_lang_js_ = ({
  props: {
    episode: {
      type: Object,
      required: true
    }
  },
  computed: {
    getLink() {
      return `/episodes/${this.episode.id}`;
    }
  }
});
// CONCATENATED MODULE: ./components/episodes/EpisodesPreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var episodes_EpisodesPreviewvue_type_script_lang_js_ = (EpisodesPreviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/episodes/EpisodesPreview.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  episodes_EpisodesPreviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "72c0661c",
  "5aee0ed4"
  
)

/* harmony default export */ var EpisodesPreview = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpisodesPreview_vue_vue_type_style_index_0_id_72c0661c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpisodesPreview_vue_vue_type_style_index_0_id_72c0661c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpisodesPreview_vue_vue_type_style_index_0_id_72c0661c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpisodesPreview_vue_vue_type_style_index_0_id_72c0661c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpisodesPreview_vue_vue_type_style_index_0_id_72c0661c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".img[data-v-72c0661c]{padding:10px 0 10px 10px}.img div[data-v-72c0661c]{height:50px;width:50px;border-radius:100%;overflow:hidden}.img div img[data-v-72c0661c]{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.link[data-v-72c0661c]{color:#5c297c;font-size:20px;font-weight:500}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6faed35a", content, true, context)
};

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpisodesList_vue_vue_type_style_index_0_id_2dbf848d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpisodesList_vue_vue_type_style_index_0_id_2dbf848d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpisodesList_vue_vue_type_style_index_0_id_2dbf848d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpisodesList_vue_vue_type_style_index_0_id_2dbf848d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpisodesList_vue_vue_type_style_index_0_id_2dbf848d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "section[data-v-2dbf848d]{padding-top:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/episodes/EpisodesList.vue?vue&type=template&id=2dbf848d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"container\" data-v-2dbf848d>", "</div>", [_vm._ssrNode("<table data-v-2dbf848d>", "</table>", [_vm._ssrNode("<thead data-v-2dbf848d><tr data-v-2dbf848d>" + _vm._ssrList(_vm.thead, function (th, index) {
    return "<th data-v-2dbf848d>" + _vm._ssrEscape(_vm._s(th)) + "</th>";
  }) + "</tr></thead> "), _vm._ssrNode("<tbody data-v-2dbf848d>", "</tbody>", _vm._l(_vm.episodes, function (episode) {
    return _c('EpisodesPreview', {
      key: episode.id,
      attrs: {
        "episode": episode
      }
    });
  }), 1)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/episodes/EpisodesList.vue?vue&type=template&id=2dbf848d&scoped=true&

// EXTERNAL MODULE: ./components/episodes/EpisodesPreview.vue + 4 modules
var EpisodesPreview = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/episodes/EpisodesList.vue?vue&type=script&lang=js&

/* harmony default export */ var EpisodesListvue_type_script_lang_js_ = ({
  components: {
    EpisodesPreview: EpisodesPreview["default"]
  },
  props: {
    thead: {
      type: Array,
      required: true
    }
  },
  computed: {
    episodes() {
      return this.$store.getters.getEpisodes;
    }
  }
});
// CONCATENATED MODULE: ./components/episodes/EpisodesList.vue?vue&type=script&lang=js&
 /* harmony default export */ var episodes_EpisodesListvue_type_script_lang_js_ = (EpisodesListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/episodes/EpisodesList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  episodes_EpisodesListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2dbf848d",
  "ffc40c80"
  
)

/* harmony default export */ var EpisodesList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {EpisodesPreview: __webpack_require__(60).default})


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/episodes/index.vue?vue&type=template&id=4db506ec&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content wrapper-content--fixed"
  }, [_c('Intro', {
    attrs: {
      "title": "Episodes from The Rick and Morty"
    }
  }), _vm._ssrNode(" "), _c('EpisodesList', {
    attrs: {
      "thead": ['Name', 'Date', 'Episode']
    }
  }), _vm._ssrNode(" "), _c('Buttons', {
    attrs: {
      "implication": "episode"
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/episodes/index.vue?vue&type=template&id=4db506ec&

// EXTERNAL MODULE: ./components/episodes/EpisodesList.vue + 4 modules
var EpisodesList = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/episodes/index.vue?vue&type=script&lang=js&

/* harmony default export */ var episodesvue_type_script_lang_js_ = ({
  components: {
    EpisodesList: EpisodesList["default"]
  }
});
// CONCATENATED MODULE: ./pages/episodes/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_episodesvue_type_script_lang_js_ = (episodesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/episodes/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_episodesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "390a021c"
  
)

/* harmony default export */ var episodes = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {EpisodesList: __webpack_require__(80).default})


/***/ })

};;
//# sourceMappingURL=index.js.map