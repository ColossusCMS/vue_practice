<template>
  <h1>상세페이지</h1>
  <h5>{{data[$route.params.id].title}}</h5>
  <p>{{data[$route.params.id].date}}</p>
  <p>{{data[$route.params.id].content}}</p>
  <router-view></router-view>
  <router-link to="/list">목록으로</router-link>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    data: Object,
  },
}
</script>

<style>

</style>