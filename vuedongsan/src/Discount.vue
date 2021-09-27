<template>
    <div class="discount">
    <h4>지금 결제하면 {{discount}}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: 'Discount',
  data() {
    return {
      discount: 30,
    }
  },
  mounted() {
    setInterval(()=>{
      this.discount--
    }, 1000)
  }
}
</script>

<style>
.discount {
  background : #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
