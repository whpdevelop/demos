<template>
  <div id="app">
   <h2>北京海恩炼鑫台信息技术有限公司-面试题</h2>
   <div class="cityContainer">
     <input 
     type="text" 
     class="search" 
     placeholder="请输入选择城市" 
     @focus="isShowCityList=true"
     v-model="query"
     @keyup="showCitysSearch()"
     @click.stop
     >
     <div 
     class="citylists" 
     v-if="!query&& isShowCityList"
     @click.stop
     >
       <p>热门城市/国家(支持汉字/拼音/英文字母)</p>
       <ul>
         <li 
         v-for="(item,index) in cityCatagory" 
         :key="index" 
         @click="showCatagoryCity(index)" 
         :class='[activeIndex == index ? "active":""]'
         >
           {{item}}
         </li>
       </ul>
       <dl v-for="(item,index) in cityLists[activeIndex].tabdata"
         :key = "index">
         <dt>{{item.dt}}</dt>
         <dd>
           <span v-for="(item,index) in item.dd"  :key = "index">
             {{item.cityName}}
             </span>
         </dd>
       </dl>
     </div>
     <div class="citySearch" v-if="query">
      <p v-if="flag">正在加载数据...</p>
      <!-- <p>{{ searchCity.length==0}}</p> -->
       <p v-if="searchCity.length == 0&&!flag ">没有"{{query}}"相关的推荐</p>
       <ul>
          <li v-for="(item,index) in searchCity" :key="index">
            <span>{{item.cityName}}</span>
            <span>{{item.py}}</span>
          </li>
       </ul>
     </div>
   </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isShowCityList: false,
      flag: true,
      query: "",
      activeIndex: 0,
      // cityCatagory: ["热门城市", "ABCDE", "FGHJ", "KLMNP", "QRSTW", "XYZ"],
      cityCatagory: [],
      cityLists: [],
      searchCity: []
    };
  },
  watch: {
    searchCity(newData) {
      newData ? (this.flag = false) : (this.flag = true);
    }
  },
  created() {
    // 所有城市数据接口
    // https://tce.alicdn.com/api/data.htm?ids=267040
    // fetch("/apis?ids=267040")
    fetch(
      "http://127.0.0.1:8888/get?baseurl=https://tce.alicdn.com/api/data.htm&ids=267040",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        this.cityLists.push(...res["267040"].value.cityArray);
        res["267040"].value.cityArray.forEach(item => {
          this.cityCatagory.push(item.tabname);
        });
        // console.log(this.cityLists);
      });
  },
  methods: {
    showCitys() {},
    showCatagoryCity(index) {
      this.isShowCityList = true;
      this.activeIndex = index;
    },
    showCitysSearch() {
      // 查询接口
      // https://sjipiao.alitrip.com/city_search.do?&q=a
      if (this.query) {
        fetch(
          `http://127.0.0.1:8888/get?baseurl=https://sjipiao.alitrip.com/city_search.do&q=${
            this.query
          }`
        )
          .then(res => res.json())
          .then(res => {
            this.searchCity = res.result;
          });
      }
    }
  },
  mounted() {
    document.addEventListener("click", e => {
      this.isShowCityList = false;
    });
  }
};
</script>
<style lang="scss">
#app {
  padding: 30px 50px;
  h1 {
    color: #666;
  }
  .cityContainer {
    .search {
      width: 200px;
      height: 30px;
    }
    .citylists {
      font-size: 14px;
      width: 420px;
      // height: 260px;
      border: 1px solid #ccc;
      ul {
        height: 30px;
        margin-top: 10px;
        display: flex;
        // background-color: #ccc;
        border-bottom: 1px solid #ccc;
      }
      li {
        height: 100%;
        margin-top: 1px;
        padding: 5px;
        margin-left: 10px;
        text-align: center;
        line-height: 20px;
        border: 1px solid transparent;
        border-bottom: 1px solid transparent;
      }
      .active {
        border: 1px solid #ccc;
        border-bottom: 1px solid #fff;
      }
      dl {
        display: flex;
        dt {
          width: 30px;
          text-align: center;
        }
        dd {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          span {
            padding-left: 4px;
            width: 66px;
            text-align: left;
          }
        }
      }
    }
    .citySearch {
      font-size: 12px;
      width: 300px;
      border: 1px solid #ccc;
      padding: 10px;
      ul {
        li {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
