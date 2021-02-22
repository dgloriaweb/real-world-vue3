<template>
  <div class="">
    <h1>Create Event, {{ user.name }}</h1>
    <ul>
      <li v-for="cat in categories" :key="cat.id">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['categories', 'user'])
}
</script>

<style></style>
