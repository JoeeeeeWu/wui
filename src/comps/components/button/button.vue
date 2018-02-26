<template>
  <button
    class="w__btn"
    @click="handleClick"
    :class="[`w__btn--${type}`, {'is-long': long}]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'w-button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    long: Boolean,
    disabled: Boolean,
  },
  methods: {
    handleClick(event) {
      if (this.disabled) return;
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="scss">

</style>
