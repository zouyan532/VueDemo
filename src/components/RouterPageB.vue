<template>
  <div>
    <div>PageB</div>
    <div>{{`A传过来的参数：${fromA}`}}</div>
    <wv-button type="primary" @click="BackToA()">返回A</wv-button>
  </div>
</template>
<script>
  import eventBus from '../service/eventBus.js';
  export default {
    data() {
      return {
        fromA: ""
      }
    },
    created(){
      this.fromA= this.$route.params.data
    },
    methods: {
      BackToA() {
        this.$router.go(-1)
      }
    },
    destroyed(){
      eventBus.$emit("backA","B传到A的数据")
    }
  }
</script>
