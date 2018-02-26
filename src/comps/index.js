import './styles/index.scss';

import {
  Button,
  ButtonGroup,
} from './components/button';

const components = [
  Button,
  ButtonGroup,
];

const install = (Vue) => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));

  // Vue.prototype.$modal = GlobalModal;
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
