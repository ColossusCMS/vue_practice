<template>
  <div>
    <img :src="datas[i].image" class="room-img">
    <h4>{{datas[i].title}}</h4>
    <!-- <h4 @click="modalState = true; 누른거 = i">{{datas[i].title}}</h4> -->
    <p>{{datas[i].price}}원</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    datas: Array,
    i: Number,
  },
}
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>