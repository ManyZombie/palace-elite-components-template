import { PluginFunction, PluginObject, VueConstructor } from 'vue';
import PEButton from './components/PEButton/PEButton.vue';

export { PEButton };

const install: PluginFunction<any> = (Vue: VueConstructor): void => {
  Vue.component('MyButton', PEButton as unknown as Vue);
};

export const plugin: PluginObject<any> = {
  install,
  version: '1.0.0',
};

/**
 * @public
 */

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}
