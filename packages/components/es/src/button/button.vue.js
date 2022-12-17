import { defineComponent, openBlock, createElementBlock } from "vue";
import "./style/index.css";
const _hoisted_1 = { class: ".di-button" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", _hoisted_1, "Test button");
    };
  }
});
export {
  _sfc_main as default
};
