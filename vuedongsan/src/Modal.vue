<template>
  <div class="black-bg" v-if="modalState == true">
    <div class="white-bg">
      <img :src="datas[누른거].image" style="width:100%">
      <h4>{{datas[누른거].title}}</h4>
      <p>{{datas[누른거].content}}</p>
      <p>{{datas[누른거].price}}원</p>
      <button @click="close">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    datas : Array,
    누른거 : Number,
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