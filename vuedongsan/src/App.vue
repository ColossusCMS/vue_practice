<template>
  <div ckass="black-bg">
    <div class="white-bg">
      <h4>상세페이지 제목</h4>
      <p>상세페이지 내용</p>
    </div>
  </div>
  <div class="menu">
    <a v-for="작명 in menus" :key="작명">{{작명}}</a>
  </div>
  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 :style="blueText">역삼동원룸</h4>
    <p>50만원</p>
    <button @click="increase('역삼')">허위매물신고</button>
    <span>신고 수 : {{ 신고수[0] }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4 :style="blueText">천호동원룸</h4>
    <p>60만원</p>
    <button @click="increase('천호')">허위매물신고</button>
    <span>신고 수 : {{ 신고수[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4 :style="blueText">마포구원룸</h4>
    <p>70만원</p>
    <button @click="increase('마포')">허위매물신고</button>
    <span>신고 수 : {{ 신고수[2] }}</span>
  </div>

  <!-- <div v-for="(a, i) in 3" :key="i">
    <h4 :style="blueText">{{products[i]}}</h4>
    <p>{{price[i]}}만원</p>
    <button @click="신고수[i]++">허위매물신고</button>
    <span>신고 수 : {{신고수[i]}}</span>
  </div> -->
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
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

.room-img {
  width: 100%;
  margin-top: 40px;
}


</style>
