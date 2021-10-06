<template>
  <div @click="filterApply" class="filter-item" :class="filter" :style="`background-image:url(${image})`">
    <slot name="filterName"></slot>
  </div>
</template>

<script>
export default {
  name: 'FilterBox',
  props: {
    image: String,
    filter: String,
  },
  methods: {
    filterApply() {
      this.emitter.emit('selectFilter', this.filter)
    }
  },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>