exports.ids = [13];
exports.modules = {

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/episodes/_id/index.vue?vue&type=template&id=d710fca6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content wrapper-content--fixed"
  }, [_c('Intro', {
    attrs: {
      "title": _vm.episode.name
    }
  }), _vm._ssrNode(" "), _c('Episode', {
    attrs: {
      "episode": _vm.episode
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/episodes/_id/index.vue?vue&type=template&id=d710fca6&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/episodes/_id/index.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData(context) {
    let episode = await external_axios_default.a.get(`https://rickandmortyapi.com/api/episode/${context.params.id}`);
    return {
      episode: episode.data
    };
  }
});
// CONCATENATED MODULE: ./pages/episodes/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var episodes_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/episodes/_id/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  episodes_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "15f750dd"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map