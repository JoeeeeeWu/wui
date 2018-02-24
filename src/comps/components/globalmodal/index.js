import Vue from 'vue';
import globalModal from './global-modal';

function open(propsData) {
  const ModalComponent = Vue.extend(globalModal);
  return new ModalComponent({
    el: document.createElement('div'),
    propsData,
  });
}

export default {
  alert(opts) {
    const defaultOpts = {
      title: '',
      content: '',
      type: 'alert',
      maskClosable: true,
      autoClose: false,
      callBack() {},
    };
    const propsData = Object.assign({}, defaultOpts, opts);
    return open(propsData);
  },
};
