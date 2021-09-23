<template>
  <Modal @closeModal="modalState = false" :누른거="누른거" :datas="datas" :modalState="modalState" />

  <div class="menu">
    <a v-for="작명 in menus" :key="작명">{{작명}}</a>
  </div>

  <Discount />

  <Card @openModal="modalState = true; 누른거 = $event;" v-for="(a, i) in datas" :key="i" :data="datas[i]" />
</template>

<script>
import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  data() {
    return {
      datas : data,
      modalState: false,
      누른거: 1,
      menus : ['Home', 'Shop', 'About'],
      blueText : 'color : blue',
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price : [50, 60, 70],
      신고수 : [0,0,0],
    }
  },
  methods: {
    increase(text) {
      if(text == '역삼')
        this.신고수[0] += 1;
      else if(text == '천호')
        this.신고수[1] += 1;
      else if(text == '마포')
        this.신고수[2] += 1;
    }
  },
  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  }
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

</style>