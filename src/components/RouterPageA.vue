<template>
  <div>
    <div>PageA</div>
    <wv-button type="primary" @click="nativateToB()">跳到B</wv-button>
    <div>{{backAData}}</div>
  </div>
</template>
<script>
  import eventBus from '../service/eventBus.js';

  export default {
    data() {
      return {
        backAData: ""
      }
    },
    methods: {
      nativateToB() {
        this.$router.push({
          name: "RouterPageB",
          params: {
            data: "A到B的数据"
          }
        })
      }
    },
    created() {
      console.log("activated")
      eventBus.$on('backA', data => {
        this.backAData = data;
        console.log(data)
      });
    }
  }
</script>
