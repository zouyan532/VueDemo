//vue指令

<template xmlns:v-once="http://www.w3.org/1999/xhtml">
  <div>
    <!--v-bind-->
    <input type="text" v-bind:readonly="readonly"/>
    <wv-button type="primary" @click="addReadonly()">点击切换readonly</wv-button>

    <!--v-on-->
    <wv-button type="primary" v-on:click="onClick">v-on绑定事件</wv-button>

    <!--v-text-->
    <div v-text="text"></div>

    <!--v-show-->
    <span v-show="isShow">看看是否显示</span>
    <wv-button type="primary" @click="isShow=!isShow">点击切换显示</wv-button>

    <!--v-if-->
    <div v-if="tab==0">tab0显示</div>
    <div v-else-if="tab==1">tab1显示</div>
    <div v-else>tab2显示</div>

    <!--v-for-->
    <div v-for="index in 5">{{index}}</div>
    <div v-for="index in list">{{index}}</div>

    <!--v-model-->
    <input type="text" v-model="inputText"/>
    <span>{{inputText}}</span>

    <!--v-once-->
    <div>
      <input type="text" v-once:readonly="readonly"/>
    </div>
    <wv-button type="primary" @click="addReadonly()">点击也不会切换readonly</wv-button>
  </div>
</template>
<script>
  import {Dialog} from 'we-vue'

  export default {
    data() {
      return {
        readonly: false,
        text: "v-text",
        isShow: true,
        tab: 2,
        list: [1, 2, 3, 4, 5],
        inputText: ""
      }
    },
    methods: {
      addReadonly() {
        this.readonly = !this.readonly

      },
      onClick() {
        Dialog.alert({
          title: "触发点击",
          message: '欢迎使用 we-vue!'
        })
      }
    }
  }
</script>
