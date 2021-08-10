<template>
  <div>
    <son v-bind="$attrs" v-on="$listeners"></son>
  </div>
</template>

<script>
import son from './son.vue'
export default {
  components: {
    son
  }
}
</script>

<style>

</style>