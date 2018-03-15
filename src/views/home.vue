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
      <w-button @click="confirm">confirm</w-button>
    </div>
    <div class="section">
      <w-button type="success" @click="actionSheetVisible1=true">有取消</w-button>
      <w-button type="primary" @click="actionSheetVisible2=true">无取消</w-button>
      <w-actionsheet
        :item-list="itemList"
        cancle="取消"
        v-model="actionSheetVisible1"
        header="这里是个标题"
      ></w-actionsheet>
      <w-actionsheet
        :item-list="itemList"
        v-model="actionSheetVisible2"
      ></w-actionsheet>
    </div>
    <div class="section">
      <w-navbar
        title="首页文字很长很长很长啊啊啊啊啊"
        left-text="返回"
        left-icon="w__icon--left"
        right-text="设置"
        @leftClick="leftClick"
        @rightClick="rightClick"
      ></w-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actionSheetVisible1: false,
      actionSheetVisible2: false,
      itemList: [
        { text: '顺风车',
          callBack: () => {
            this.$modal.alert({
              title: '提示',
              content: '我是actionsheet弹出来的',
            });
          },
        },
        { text: '巴士', callBack: () => {} },
        { text: '快车', callBack: () => {} },
        { text: '专车', callBack: () => {} },
      ],
    };
  },
  methods: {
    alert() {
      this.$modal.alert({
        title: '提示',
        content: '我是actionsheet弹出来的',
        color: '#19be6b',
      });
    },
    confirm() {
      this.$modal.confirm({
        title: '提示',
        content: '你想怎么样呢？',
        color: '#19be6b',
      });
    },
    leftClick() {
      this.$modal.alert({
        title: '提示',
        content: '点击了navbar左边',
        color: '#19be6b',
      });
    },
    rightClick() {
      this.$modal.alert({
        title: '提示',
        content: '点击navbar了右边',
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
