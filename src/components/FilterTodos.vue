<template>
  <div>
    Filter:
    <select @change="filterTodos($event)">
      <option v-for="(value, index) in values" :key="index" :value="value">{{ value }}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FilterTodos',
  data() {
    return {
      values: [
        10, 20, 50, 100, 150, 200
      ]
    }
  },
  methods: {
    ...mapActions('todos', ['filterTodos'])
  }
}
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
