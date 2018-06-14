<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
// 此处用scss 需要进行配置
// 参考: https://github.com/webpack-contrib/sass-loader
#app {
  height: 100%;
}
</style>
