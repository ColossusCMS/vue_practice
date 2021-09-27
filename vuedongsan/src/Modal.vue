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
      month: 3,
    }
  },
  watch: {
    month(a) {
      if(a >= 13) {
        alert('13이상은 입력할 수 없습니다.')
        this.month = 3
      }
      if(isNaN(a)) {
        alert('숫자만 입력할 수 있습니다.')
        this.month = 3
      }
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
  },
  updated() {
    if(this.month == 2) {
      alert('계약은 3개월부터 가능합니다.')
      this.month = 3
    }
  }
}
</script>

<style>

</style>