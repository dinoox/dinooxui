"use strict";
const button_vue_vue_type_script_setup_true_lang = require("./button.vue.js");
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const Button = withInstall(button_vue_vue_type_script_setup_true_lang);
module.exports = Button;
