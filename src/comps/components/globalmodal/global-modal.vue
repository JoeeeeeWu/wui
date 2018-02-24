<template>
  <transition name="fade">
    <div class="w__dialog--wrap" v-show="isVisible" ref="modal" >
      <div class="w__mask" @click="maskClose"></div>
      <div class="w__dialog">
        <div class="w__dialog--hd">
          <strong class="w__dialog--title" v-if="title">{{title}}</strong>
        </div>
        <div class="w__dialog--bd" v-if="type=='prompt'">
          <w-input v-model="promptValue" :placeholder="placeholder" :readonly="readonly" class="w__dialog--bd-input"></w-input>
        </div>
        <div class="w__dialog--bd" v-else>
          {{content}}
        </div>
        <div class="w__dialog--ft">
          <div v-if="!type||type=='alert'">
            <w-button @click="confirm" :style="{'color':color}" long>确定</w-button>
          </div>
          <div v-else-if="type=='confirm'">
          <w-button-group class="w__btn--group" >
            <w-button @click="close">取消</w-button>
            <w-button @click="confirm" :style="{'color':color}">确定</w-button>
          </w-button-group>
          </div>
          <div v-else-if="type=='prompt'">
          <w-button-group class="w__btn--group" >
            <w-button @click="close">取消</w-button>
            <w-button @click="confirm" :style="{'color':color}">确定</w-button>
          </w-button-group>
          </div>

        </div>
      </div>

    </div>
  </transition>
</template>

<script>
import wButton from '../button';
import wButtonGroup from '../buttongroup';
import ModalMixin from './ModalMixin';
export default {
  mixins: [ModalMixin],
  components: {
    wButton,
    wButtonGroup,
  },
  props: {
    type: {
      type: String,
      default: 'alert',
    },
    value: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    readonly: Boolean,
    maskClosable: {
      type: Boolean,
      default: true,
    },
    content: String,
    autoClose: {
      type: Boolean,
      default: false,
    },
    callBack: {
      type: Function,
      default() {},
    }
  },
  data() {
    return {
      promptValue: this.value,
    };
  },
  methods: {
    close() {
      this.$emit('close');
      this.isVisible = false;
      this.destroyed();
    },
    confirm() {
      this.$emit('confirm');
      this.isVisible = false;
      if (this.type === 'prompt') {
        if (this.promptValue !== '') {
          this.callBack(this.promptValue);
        }
      } else {
        this.callBack();
      }
      this.destroyed();
    },
    maskClose() {
      if (this.maskClosable) {
        this.close();
      }
    },
    destroyed() {
      setTimeout(() => {
        this.$destroy();
      }, 200);
    },
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, 3000);
    }
  },
};
</script>
