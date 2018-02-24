<template>
  <button
    class="w__btn"
    :class="[`w__btn--${type}`]"
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
    disabled: Boolean,
  },
};
</script>

<style lang="scss">

</style>
