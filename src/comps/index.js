import './styles/index.scss';

import Button from './components/button';
import GlobalModal from './components/globalmodal/index';
import ActionSheet from './components/actionsheet';
import Navbar from './components/navbar';

const components = {
  Button,
  ButtonGroup: Button.group,
  ActionSheet,
  Navbar,
};

const install = (Vue) => {
  if (install.installed) return;
  // components.map(component => Vue.component(component.name, component));
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });

  Vue.prototype.$modal = GlobalModal; // eslint-disable-line
  // Vue.prototype.$toast = Toast;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  ...components,
};

export default API;
