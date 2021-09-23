<template>
  <div>
    <img :src="data.image" class="room-img">
    <h4 @click="send">{{data.title}}</h4>
    <p>{{data.price}}원</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: Array,
  },
  methods: {
    send() {
      this.$emit('openModal', this.data.id)
    }
  }
}
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>