<template>
  <div class="index">
    <!-- 
      使用 侧滑组件
      参数详情见 组件官网
     -->
   <vue-drawer-layout
      ref="drawer"
      :drawer-width="200"
      :enable="true"
      :animatable="true"
      :z-index="0"
      :drawable-distance="200"
      :content-drawable="true"
      :backdrop="true"
      :backdrop-opacity-range="[0,0.4]"
      @mask-click="handleMaskClick"
     >
          <div class="drawer-content" slot="drawer">
            <!-- drawer-content -->
            <side-ctn></side-ctn>
          </div>
          <div slot="content" class="content">
            <main-ctn @toggleSide="handleMaskClick"></main-ctn>
          </div>
</vue-drawer-layout>
  </div>
</template>

<script>
import mainCtn from "@/components/mainctn.vue";
import sideCtn from "@/components/sidectn.vue";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: {
    mainCtn,
    sideCtn
  },
  methods: {
    // 点击遮罩层触发的方法
    handleMaskClick() {
      // 调用侧边栏显示与隐藏的切换方法
      this.$refs.drawer.toggle();
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.index {
  .content {
    overflow-y: scroll;
    height: 100%;
  }
}
</style>
