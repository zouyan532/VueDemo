Vue简单介绍
1界面代码的构成
<template>
<div class=”container”>{{A}}</div>
</template>
<script>
Import xxx from “xxxx”
export default {
  data() {
    return {
	A:”123”
	}
  }，
methed:{
   functionA:{}
},
components{
  xxx
}

}
</script>
<style >
.container{
   height:10px
}
</style>

每个页面都是个组件，代码的基本构成就像上面那样。<template>里放的是布局，<script>里面是data数据，methed自定义的方法，computed计算属性，watch侦听器，组件的生命周期的方法等。<style>里就是布局的样式。

2组件的生命周期
 
介绍下开发中常用的生命周期的方法
1）created：  data中数据初始化已经完成，布局未初始化完成，我们开发时可以将网络请求放在这个方法中
2）mounted：  布局渲染完成，我们可以在这方法中修改布局
3）beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。在这个方法中执行某些清理任务，比如说清楚定时器等。

3修改data中数据
修改data中的数据，就只要任意方法中 this.xxx = newXxx就可以了，修改后界面也会重新渲染。
注意：1）由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
1.	当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
2.	当你修改数组的长度时，例如：vm.items.length = newLength
这种情况一下几种解决：
（1）使用一下数组的方法代替
•	push() 
•	pop()
•	shift()
•	unshift()
•	splice()
•	sort()
•	reverse()
（2）vm.$set(vm.items, indexOfItem, newValue)
（3）实际上问题中那两个方式，data中的数据已经被修改了,但是没有vue监测到变化才没有重新渲染，因此我们调用this.$forceUpdate()，让布局强制重新渲染，也能看到我们想要的效果。

	2）由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：
（1）使用Vue.set(this.xxx, key, value)这个方法
（2）this.xxx = Object.assign({}, this.xxx, {
	key:value
})

4 Vue指令
1）v-bind：单向绑定，动态绑定数据。简写为“:” 。
其中有一种快速切换样式的方式，特别记录下
<template>
<div class=”container” >{{A}}</div>
<div class=”container” 
:class=”{'isChange' : A === 1}”>{{A}}</div>
</template>
<script>
Import xxx from “xxxx”
export default {
  data() {
    return {
	A:1
	}
  }
}
</script>
<style >
.container{
   height:10px
&. isChange{
  height:20px
}
}
</style>


2）v-on ：绑定事件监听器。简写为“@”，例：@click="xxx"；
3）v-text ：更新数据，会覆盖已有结构。类似{{ msg }} ；
4）v-show ：根据值的真假，切换元素的display属性；需要切换显示的时候可以用v-show
5）v-if ：根据值的真假，切换元素会被销毁、重建； => 在dom中已消失 v-else-if ：多条件判断，为真则渲染； 
v-else ：条件都不符合时渲染；
不需要多次切换显示的时候可以用v-if 
5）v-for ：基于源数据多次渲染元素或模块；列表的布局就是用v-for 
6）v-model ：在表单控件元素（input等）上创建双向数据绑定（数据源）； 
7）v-once ：只渲染一次，随后数据更新也不重新渲染；
5常用布局属性
class: {}, => 绑定class，和v-bind:class一样的API
style: {}, => 绑定样式，和v-bind:style一样的API
on: {}, => 绑定事件，可缩写成@，比如点击事件v-on:click=>@click
key: "key", => 给元素添加唯一标识,列表一般会给予每一项一个key
ref: "ref", => 引用信息 某个组件的应用信息，
可以用this.$refs.自定义的ref名.xxx来调用组件自身的方法






6计算属性和侦听器
计算属性
模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。
比如：
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。
所以，对于任何复杂逻辑，你都应当使用计算属性。

上面是官方的原话。我的理解计算属性，就类似一个观察者，而这个例子中的message就是被观察者，当被观察者message发生改变时，就自行通知观察者，从而使观察者发生改变。
下面是computed的例子
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
结果：
Original message: "Hello"
Computed reversed message: "olleH"
侦听器watch
虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
这个watch可能比刚刚说得观察者模式跟类似。当被观察的属性的改变时，就会触发回调。
官方例子可能太长了，我自己写了个。
<template>
  <dic @click="a++">{{a}}</dic>
</template>
<script>
  export default {
    name: 'CarCenter',
    watch:{
      a:function (newA,oldA) {
          console.log(`newA:${newA},oldA${oldA}`)
      }
    }
data:{
	return:{
         a:1
}
}
}
</script>,


7组件与工具类的引入
组件的全局引入
在main.js开头引入组件，然后注册组件，例如
import 组件A from 'components/common/组件A'
Vue。component（”组件A”，组件A）
然后就可以在任何.vue文件中使用<组件A></组件A>

组件的局部引入
<template>
  <A ></A>
</template>
<script>
import A from “xxxxx”
  export default {
components: {
  “A”:A
}
}
</script>,

工具类的全局引入
import utils from "@/utils/Utils"
Vue.prototype.Utils = utils
然后就可以在任意.vue的方法中通用this.Utils调用了
这里的@

8 Vue-router导航
 js 中配置路由
首先要定义route,  一条路由的实现。它是一个对象，由两个部分组成： path和component.  path 指路径，component 指的是组件。如：{path:’/home’, component: home}
我们这里有两条路由，组成一个routes:
 
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]
　　最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。
const router = new VueRouter({
      routes // routes: routes 的简写
})
　　配置完成后，把router 实例注入到 vue 根实例中,就可以使用路由了
const app = new Vue({
  router
}).$mount('#app')
编程式导航
router.push(location, onComplete?, onAbort?)
在 Vue 实例内部，通过 $router 访问路由实例。因此可以调用 this.$router.push
想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

router.replace(location, onComplete?, onAbort?)
跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

router.go(n)
这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
路由组件传参
比如组件A执行了跳转
   this.$router.push({
            path: 'yourPath', 
            name: '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',
            params: { 
                name: 'name',
            }
})

跳转的参数在$route.param里，可以通过侦听器watch来监测路由变化，只要变化了就调用获取路由参数方法将数据存储本组件即可。
  export default {
name: '',
    data () {
      return {
        name: ''
      }
    },
    methods: {
      getParams () {
        // 取到路由带过来的参数 
        let routerParams = this.$route.params. name
        // 将数据放在当前组件的数据内
        this. name = routerParams
     }
    },
    watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'getParams'
    }
  }

我们实际开发的时候常有从A界面跳转到B界面，B界面做了一些操作后，需要返回A界面并传递一些数据。这种情况vue-router的router.go(n)这个返回的方法并没有提供参数传递，但我们可以用以下方式来解决这个问题。

1. 声明一个空的Vue模块作为eventBus
import Vue from 'vue'
/**
 * 定义空的vue实例，作为 eventbus实现非父子组件之间的通信
*/
var eventBus = new Vue({});
export default eventBus;

2. 通过eventBus.$emit传参给上一个页面
import eventBus from '../service/eventbus.js';
methods:{
  	//点击触发的返回
    goback(hospital){
        //传递一个map，choiceHospital是key，hospital是value
        eventBus.$emit('choiceHospital', '被传回去的数据');
        //调用router回退页面
        this.$router.go(-1);
    }
}
3. 前一个页面接收参数
import eventBus from '../service/eventbus.js';

activated(){
    //根据key名获取传递回来的参数，data就是map
    eventBus.$on('choiceHospital', function(data){
        //赋值给首页的附近医院数据模型
        this.nearestOrg = data;
    }.bind(this));
}

9个人常用的文档地址
Vue中文文档：https://cn.vuejs.org/v2/guide/installation.html
Css参考手册：http://www.w3school.com.cn/cssref/index.asp
HTML参考手册：http://www.w3school.com.cn/tags/index.asp
we-vue文档：https://wevue.org/doc/v2_0/index
vux文档：https://doc.vux.li/zh-CN/
vue-router文档：https://router.vuejs.org/zh/installation.html
