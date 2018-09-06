<template>
  <div>
    <wv-button type="primary" @click="a++">a的值：{{a}}</wv-button>
    <div>平方a的值：{{squareA}}</div>
  </div>
</template>
<script>
  import {Dialog} from 'we-vue'
  export default {
    name: 'CarCenter',
    watch: {
      a: function (newA, oldA) {
        console.log(`newA:${newA},oldA${oldA}`)
        Dialog.alert({
          title: "",
          message: `watch触发，newA:${newA},oldA${oldA}!`
        })
      }
    },
    computed: {
      squareA: function () {
        return this.a * this.a
      }
    },
    data(){
      return{
        a: 1
      }
    }
  }
</script>,
