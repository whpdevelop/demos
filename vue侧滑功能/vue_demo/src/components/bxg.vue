<template>
 <div id='bxg'>
     <div class="title">
         <h1>博学谷</h1>
         <p @click="go">返回</p>
     </div>
     <img src="../assets/imgs/bxg.jpg" alt="">
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style lang="scss">
#bxg {
  width: 100%;
  padding-top: 60px;
  .title {
    width: 100%;
    display: flex;
    height: 60px;
    position: fixed;
    top: 0;
    background-color: #fff;
    h1 {
      flex: 1;
      line-height: 60px;
    }
    p {
      width: 50px;
      height: 100%;
      line-height: 60px;
    }
  }
  h1 {
    text-align: center;
  }
  img {
    width: 100%;
  }
}
</style>
