<template>
  <header class="w__navbar">
    <div class="w__navbar--left" @click="leftClick">
      <i class="w__navbar--icon" :class="leftIcon"></i>
      <span class="w__navbar--text">{{ leftText }}</span>
    </div>
    <div class="w__navbar--title" v-if="title">
      {{ title }}
    </div>
    <div class="w__navbar--right" @click="rightClick">
      <span class="w__navbar--text">{{ rightText }}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'w-navbar',
  props: {
    leftText: {
      type: String,
      default: '',
    },
    leftIcon: {
      type: String,
      default: '',
    },
    rightText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    leftClick(e) {
      this.$emit('leftClick', e);
    },
    rightClick(e) {
      this.$emit('rightClick', e);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
