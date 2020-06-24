import vuetify from "./plugins/vuetify";
// gather all components
const requireComponent = require.context("./components", true, /[\w-]+\.vue$/);

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  // For each matching file name...
  requireComponent.keys().forEach(fileName => {
    // Get the component config
    const componentConfig = requireComponent(fileName);
    // Get the PascalCase version of the component name
    const componentName = fileName
      .split("/")
      .pop()
      .replace(/\.\w+$/, "");
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}

// Create module definition for Vue.use()
const plugin = {
  install
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
  // this is needed since npm `npm link` somehow cannot handle vuetify in nested components/molecules
  GlobalVue.use(vuetify);
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;
