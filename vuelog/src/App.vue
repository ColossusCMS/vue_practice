<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Vuelog</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">리스트</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view :data="datas"></router-view>

  <!-- <List v-for="(data, i) in datas" :key="i" :data="datas[i]" /> -->
</template>

<script>
// import List from './components/List.vue';
import data from './assets/data.js';

export default {
  name: 'App',
  data() {
    return {
      datas : data,
    }
  },
  components: {
  }
}
</script>

<style>

</style>
