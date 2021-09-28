<template>
  <div>
    <div v-if="step==0">
      <Post v-for="(data, i) in postData" :key="i" :data="postData[i]" />
    </div>

    <div v-if="step==1">
      <div class="upload-image" :style="{backgroundImage:`url(${url})`}"></div>
      <div class="filters">
        <div class="filter-1" :style="`background-image:url(${url})`"></div>
        <div class="filter-1" :style="`background-image:url(${url})`"></div>
        <div class="filter-1" :style="`background-image:url(${url})`"></div>
        <div class="filter-1" :style="`background-image:url(${url})`"></div>
        <div class="filter-1" :style="`background-image:url(${url})`"></div>
      </div>
    </div>


    <div v-if="step==2">
      <div class="upload-image" :style="{backgroundImage:`url(${url})`}"></div>
      <div class="write">
        <textarea class="write-box" placeholder="여기에 글쓰기" v-model="content" @input="write"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: 'Container',
  data() {
    return {
      content: '',
    }
  },
  components: {
    Post: Post,
  },
  props: {
    postData: Object,
    step: Number,
    url: Blob,
  },
  methods: {
    write() {
      this.$emit('write', this.content)
    }
  }
}
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>