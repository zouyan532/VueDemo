//生命周期log

<template>
  <div>
    <div>{{`点击按钮会改变后面的数字 : ${number}`}}</div>
    <wv-button type="primary" @click="addNumber()" >点击</wv-button>

    <div>{{`现在list两项有是${list[0]+list[1]}`}}</div>
    <wv-button type="primary" @click="changeName()" >点击修改第二项的name</wv-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        number:1,
        list:[
         "AAAA",
          "BBB",
        ]
      }
    },
    methods:{
      addNumber(){
        this.number++  //numerical被修改会，会引起界面的重新渲染
      },
      changeName(){
        // this.list[1] = "CCCC"  // 不是响应性的,data中的list会被修改，但界面不会重新渲染
        //解决上面问题方式一
        //this.list.splice(1, 1, "CCCC")
        //解决上面问题方式二
        this.list[1] = "CCCC"
        this.$forceUpdate()
      }
    }
  }
</script>
