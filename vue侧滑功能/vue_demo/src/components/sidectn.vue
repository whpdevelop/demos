<template>
 <div id='sideCtn'>
     <ul>
         <li>
             <img src="../assets/imgs/logo.png" alt="">
         </li>
         <li>
             <router-link to="/itcast" >传智播客</router-link>
         </li>
         <li>
             <router-link to="/bxg" >博学谷</router-link>
         </li>
     </ul>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss">
#sideCtn {
  ul {
    li {
      padding: 5px 10px;
    }
    li:nth-child(2) {
      margin-top: 50px;
    }
    li:nth-child(2),
    li:nth-child(3) {
      margin-bottom: 10px;
      background-color: #ccc;
    }
  }
}
</style>
