import axios from 'axios'
import { createStore } from 'vuex'
import data from './assets/post'

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      likes: 0,
      liked: false,
      more: {},
      posts: data,
    }
  },
  mutations: {
    setMore(state, data) {
      state.more = {data}
    },
    changeName(state) {
      state.name = 'park'
    },
    addAge(state, payload) {
      state.age += payload
    },
    likes(state) {
      if(state.liked) {
        state.likes--
        state.liked = false
      } else {
        state.likes++
        state.liked = true
      }    
    },
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`)
      .then( (result) => {
        console.log(result.data)
        context.commit('setMore', result.data)
      })
    }
  }
})

export default store;