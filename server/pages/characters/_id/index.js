exports.ids = [11];
exports.modules = {

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/characters/_id/index.vue?vue&type=template&id=21ca6b7d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content wrapper-content--fixed"
  }, [_c('Intro', {
    attrs: {
      "title": _vm.character.name,
      "origin": _vm.character.origin.name
    }
  }), _vm._ssrNode(" "), _c('Character', {
    attrs: {
      "character": _vm.character
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/characters/_id/index.vue?vue&type=template&id=21ca6b7d&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/characters/_id/index.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData(context) {
    let character = await external_axios_default.a.get(`https://rickandmortyapi.com/api/character/${context.params.id}`);
    return {
      character: character.data
    };
  }
});
// CONCATENATED MODULE: ./pages/characters/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var characters_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/characters/_id/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  characters_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "47206e2f"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map