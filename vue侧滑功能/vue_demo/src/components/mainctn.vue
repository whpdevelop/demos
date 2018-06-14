<template>
 <div id='main'>
     <div class="title">
       <img src="../assets/imgs/1.png" alt="" class="img1" @click="toggle">
       <p>仿QQ侧滑组件</p>
     </div>
     <img src="../assets/imgs/ch.jpg" alt="" class="imgCtn">
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    /* 
    * 点击子组件中的按钮触发父组件中的元素的方法
    * 在这里用的自定义事件
    * 大家可以思考还有没有其他方法能实现??? 
    */
    toggle() {
      this.$emit("toggleSide");
    }
  }
};
</script>

<style lang="scss">
#main {
  height: 100%;
  padding-top: 70px;
  .title {
    width: 100%;
    height: 70px;
    background-color: #24292e;
    display: flex;
    padding-left: 10px;
    align-items: center;
    position: fixed;
    top: 0;
    .img1 {
      width: 40px;
      height: 40px;
    }
    p {
      flex: 1;
      font-size: 20px;
      text-align: center;
      color: #fff;
    }
  }
  .imgCtn {
    width: 100%;
  }
}
</style>
