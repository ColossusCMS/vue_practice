<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{backgroundImage:`url(${data.userImage})`}"></div>
      <span class="profile-name">{{data.name}}</span>
    </div>
    <div @click="$store.commit('likes')" :class="data.filter" class="post-body" :style="{backgroundImage:`url(${data.postImage})`}"></div>
    <div class="post-content">
      <p>{{$store.state.likes}} Likes</p>
      <p><strong>{{data.name}}</strong> {{data.content}}</p>
      <p class="date">{{data.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    data: Array,
  },
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
</style>