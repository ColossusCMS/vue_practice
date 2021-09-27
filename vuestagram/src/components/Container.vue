<template>
  <div>
    <Post v-for="(data, i) in postData" :key="i" :data="postData[i]" />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: 'Container',
  components: {
    Post: Post,
  },
  props: {
    postData: Object,
  }
}
</script>

<style>

</style>