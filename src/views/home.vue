<template>
  <div>
    <div class="section">
      <w-button>按钮</w-button>
      <w-button type="primary">按钮</w-button>
      <w-button type="success">按钮</w-button>
      <w-button type="warning">按钮</w-button>
      <w-button type="error">按钮</w-button>
      <w-button type="text">按钮</w-button>
    </div>
    <div class="section">
      <w-button-group>
        <w-button type="warning">警告</w-button>
        <w-button type="primary">主要</w-button>
        <w-button type="success">成功</w-button>
      </w-button-group>
    </div>
    <div class="section">
      <w-button @click="alert">alert</w-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    alert() {
      this.$modal.alert({
        title: '提示',
        content: '我是actionsheet弹出来的',
        color: '#19be6b',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .section {
    margin: 20px;
  }
</style>
