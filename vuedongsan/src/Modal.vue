<template>
  <div class="black-bg" v-if="modalState == true">
    <div class="white-bg">
      <img :src="datas[item].image" style="width:100%">
      <h4>{{datas[item].title}}</h4>
      <p>{{datas[item].content}}</p>
      <!-- <input @input="month=$event.target.value"> -->
      <input v-model="month">
      <p>{{month}}개월 선택함 : {{datas[item].price * month}}원</p>
      <button @click="close">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      month: 0,
    }
  },
  props: {
    datas : Array,
    item : Number,
    modalState : Boolean,
  },
  methods: {
    close() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style>

</style>