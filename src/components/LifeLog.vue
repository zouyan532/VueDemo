//生命周期log

<template>
  <div>
    <div>按下F12可以看到log</div>
    <wv-button type="primary" @click="key=true" >点击触发部分生命周期</wv-button>
  <div :key="key">点击浏览器返回键可以看到部分生命周期</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        key:false
      }
    },
    beforeCreate() {
      console.log("beforeCreate")
    },
    created() {
      console.log("created")
    },
    beforeMount() {
      console.log("beforeMount")
    },
    mounted() {
      console.log("mounted")
    },
    beforeUpdate() {
      console.log("beforeUpdate")
    },
    updated() {
      console.log("updated")
    },
    activated() {
      console.log("activated")
    },
    deactivated() {
      console.log("deactivated")
    },
    beforeDestroy() {
      console.log("beforeDestroy")
    },
    destroyed() {
      console.log("destroyed")
    }
  }
</script>
