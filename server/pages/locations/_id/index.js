exports.ids = [16];
exports.modules = {

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locations/_id/index.vue?vue&type=template&id=45f3db0c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content wrapper-content--fixed"
  }, [_c('Intro', {
    attrs: {
      "title": _vm.location.name
    }
  }), _vm._ssrNode(" "), _c('Location', {
    attrs: {
      "location": _vm.location
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/locations/_id/index.vue?vue&type=template&id=45f3db0c&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locations/_id/index.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData(context) {
    let location = await external_axios_default.a.get(`https://rickandmortyapi.com/api/location/${context.params.id}`);
    return {
      location: location.data
    };
  }
});
// CONCATENATED MODULE: ./pages/locations/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var locations_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/locations/_id/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  locations_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "48c18a76"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map