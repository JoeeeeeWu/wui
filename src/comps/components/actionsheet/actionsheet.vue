<template>
  <transition name="fade">
    <div class="w__actionsheet--wrap" ref="actionsheet">
      <div
        class="w__mask"
        v-show="isShow"
        :class="isShow ? 'w__actionsheet--active' : ''"
        @click.stop="close"
      ></div>
      <div class="w__actionsheet" :class="isShow ? 'w__actionsheet--active' : ''">
        <header class="w__actionsheet--header" v-if="header">{{ header }}</header>
        <ul>
          <li
            class="w__actionsheet--item"
            v-for="(item, index) in itemList"
            :key="index"
            @click.stop="itemClick(item)"
          >{{ item.text }}</li>
        </ul>
        <a class="w__actionsheet--action" @click.stop="close" v-if="cancle">{{ cancle }}</a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'w-actionsheet',
  data() {
    return {
      isShow: this.value,
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    itemList: {
      type: Array,
      required: true,
    },
    header: {
      type: String,
      default: '',
    },
    cancle: {
      type: String,
      default: '',
    },
  },
  methods: {
    close() {
      this.$emit('input', false);
    },
    itemClick(item) {
      this.close();
      if (typeof item.callBack === 'function') {
        item.callBack();
      }
    },
  },
  watch: {
    value(val) {
      this.isShow = val;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
