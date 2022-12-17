"use strict";
const vue = require("vue");
require("./style/index.css");
const _hoisted_1 = { class: ".di-button" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "button",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", _hoisted_1, "Test button");
    };
  }
});
module.exports = _sfc_main;
