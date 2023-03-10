import _sfc_main from "./button.vue.js";
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const Button = withInstall(_sfc_main);
export {
  Button as default
};
