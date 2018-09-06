<template>
  <div class="page page-with-padding">
    <div class="buttons-big">
      <wv-button type="primary" @click="nativateTo(0)" >生命周期的log</wv-button>
      <wv-button type="primary"  @click="nativateTo(1)">修改data中的数据引起界面渲染</wv-button>
      <wv-button type="primary"  @click="nativateTo(2)">页面主要操作 Normal</wv-button>
      <wv-button type="primary"  @click="nativateTo(3)">页面主要操作 Normal</wv-button>
      <wv-button type="primary"  @click="nativateTo(4)">页面主要操作 Normal</wv-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    nativateTo(index) {
      let routeName = ""
      switch(index){
        case 0:
          routeName = "LifeLog"
          break
        case 1:
          routeName = "ChangeData"
          break
      }
      this.$router.push({
        path:routeName
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page {
    width: 100%;
  }

  .page-with-padding {
    padding: .5rem .7rem;
    width: calc(100% - .7rem*2);
  }
</style>
