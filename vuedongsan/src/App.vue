<template>

  <transition name="fade">
    <Modal @closeModal="modalState = false" :item="item" :datas="datas" :modalState="modalState" />
  </transition>

  <div class="menu">
    <a v-for="i in menus" :key="i">{{i}}</a>
  </div>

  <Discount v-if="showDiscount"/>

  <button @click="lowPriceSort">낮은 가격 순</button>
  <button @click="highPriceSort">높은 가격 순</button>
  <button @click="Ascending">상품명 순(오름차순)</button>
  <button @click="Descending">상품명 순(내림차순)</button>
  <button @click="sortBack">되돌리기</button>

  <Card @openModal="modalState = true; item = $event" v-for="(a, i) in datas" :key="i" :data="datas[i]" />
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
      showDiscount: true,
      originDatas : [...data],
      datas : data,
      modalState : false,
      item: 1,
      menus : ['Home', 'Shop', 'About'],
      blueText : 'color : blue',
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price : [50, 60, 70],
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
    },

    lowPriceSort() {
      this.datas.sort(function(a, b) {
        return a.price - b.price;
      })
    },
    highPriceSort() {
      this.datas.sort(function(a, b) {
        return b.price - a.price;
      })
    },
    Ascending() {
      this.datas.sort(function(a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      })
    },
    Descending() {
      this.datas.sort(function(a, b) {
        return a.title > b.title ? -1 : a.title < b.title ? 1 : 0;
      })
    },

    sortBack() {
      this.datas = [...this.originDatas];
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    // setTimeout(()=>{
    //   this.showDiscount = false;
    // }, 2000);
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},

  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  }
}
</script>

<style>
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateY(-1000px);
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

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