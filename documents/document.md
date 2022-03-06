 I - So sánh reactjs và vuejs

 React                                         Vue
 State                                         Data
 Redux                                         VueX
 Router                                        Vue router
 Component                                     Component 
 Props                                         Props

1.Cài đặt Vuejs:
NPM: cài NPM và nodeJS
Vue cli: 
npm install -g @vue/cli
# OR
yarn global add @vue/cli

create project
vue create project_name

<style scoped>: chỉ áp dụng style cho nguyên component đó, không áp dụng cho các component khác.

2. two ways binding: Binding dữ liệu 2 chiều:
+ Property binding: 
  v-bind:[ten-thuoc-tinh]='bien',
  :[ten-thuoc-tinh]='bien'
+ value binding : {{}}
+ style and class binding:
  -  <h1 :class="{dachon: selected, abc: xyz}">
3. Life cycle 
4. Model: liên kết 1 element với 1 property
- v-mode
  <input type="text v-model="channelName>
  <input type="text v-model="channelName[0]>
  <input type="text v-model="channel.name>
5. Event handling: Bắt sự kiện từ các element
- v-on:[ten-su-kien]="function()"
- <button v-on:click="channel.name="ABC ">Click</button>
- viết tắt @click
- Prevent default event: HUỷ bỏ event mặc định cảu element đi.
<form action="/abc" @submit.prevent="doSomeThing()"></form>
- <button v-on:click.prevent="channel.name="ABC ">Click</button>
6. Ref: ánh xạ đến chính element
 <input ref="channelName" type="text v-model="channelName>
 this.$refs.channelName => element html
7. Conditional rendering.
- v-show: AN hiên 1 element theo điều kiện (display: none)
- v-hide: 
- v-if: Ẩn hiện element theo điều kiện (Mất ra khỏi dom)
- v-else:
- v-else-if: 
8. List rendering:
- v-for="(task, index)" in tasks
9. Methods: hàm của vue obj
là 1 obj bao gồm các hàm 
methods: {
  addTask: function(){
    this.task.push({
      this.tasks.push({
        content: newTasks,
        done: false
      })
    })
  }
}
10. watch: Theo dõi sự thay đổi của data. Dùng để debounce và call api auto complete
watch: {
  newTask: function(){
    console.log("new task change") // mỗi khi property "newTask" thay đổi thì hàn được gọi 
  }
}
11. vee validate.
12. Hook
- mounted() {
  chay đầu tiên dùng để gọi api 
}
13. Component.
component : {
  Task
}
14. Props: Là dữ liệu đẩy từ component cha sang component con
- Dùng mảng tên các props
vs: props: [
  'props1',
  'props2'
]

- Dùng mảng các object
props: {
  taskData: {
  type: Object,
  default: function(){
    return {}
  }
  }

}
<Task v-for="(task, index) in tasks" :key="index" :taskData="task"/>
component con
<span>{{ taskData.content}}<span>
15. Filter: biến đổi dữ liệu trước khi render.
filters: {
  convertComman: function(total){
    return total.toFixed(2).replace(//g)
  }
}
{{ tongTien | converComman}}