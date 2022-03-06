Vuex là 1 thư viện quản lý global state như redux

1. Store:
- state: Nơi lưu trữ các trạng thái của ứng dụng.
- getters: 
   + là những hàm để lấy ra các state tương ứng.
   +  mapGetters: chuyển giá trị của state về component hiện tại
- Reducer tương đương với Mutations.
- mutations: 
  + Là những hàm để thay đổi state.
  + chuyển những hàm mutations về những component hiện tại.
- actions: 
  + mapActions

2. Chia tách thành module
----------------------------  
import Vuex from "vuex'

const store = new Vuex.Store({
  state: {
    name: "hieu,
    getters: {
      getName: state => state.name
    },
    mutations: {
      setName(state, name){
        state.name = name;
      } 
    },
    actions: {
      updateProfile(context){
        context.commit('setName', "nguyen van tung")
      }
       updateProfile({commit, getters}){
         let name = getters.name;

        commit('setName', "nguyen van tung")
      }
    }
  }
})

new Vue({
  render: h = h(App),
  store
})
// component con
import {mapGetters} from Vuex;
<template>'
{{$store.state.name}}
</template>
<script>
  computed: {
    ...mapGetters(['getName']) // truyền vào 1 mảng các getter cần lấy => chuyển $store.state.name => this.name 
  }
  // <!-- => {{$store.state.name}} ==> {{name}} -->
  method: {
    ...mapMutations(['setName']) // truyền vào 1 mảng các setter cần lấy
    // lấy hàm setName của store từ mutations của store về this
    // sử Dụng setName("trần minh hiếu"),
    // updateProfile(){
    //   //code xử lý
    //   this.setName(')
    // }
    ...mapAction(['updateProfile'])
  }
</script>

-------------
Các phân tách và tổ chức thư mục VueX
 - store folder
  |_ state.js
  |_ getters.js
  |_ mutations.js
  |_ index.js

1. index.js
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const storeConfigs = {
  state,
  getters,
  mutations,
  actions,
}

export default storeConfigs;

2. main
import storeConfig from './store';

3. state 
export default {
  name: "tran minh hieu",
  age: 38
}

4. getters
export default {
  name: state => state.name
}

5. mutations
 {
  setName(state, name){
    state.name = name;
  },
  setAge(state, age){
    state.age = age
  }
},

6. actions
 {
  updateProfile(context){
    context.commit('setName', "nguyen van tung")
  }
  <!-- updateProfile({commit, getters}){
    let name = getters.name;
    commit('setName', "nguyen van tung")
  } -->
},