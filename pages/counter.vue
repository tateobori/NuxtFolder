<template>
  <div>
    <h1>カウンター基本形</h1>
    {{ $store.state.counter }}
    <input type="button" value="+1" @click="increase">
    <input type="button" value="-1" @click="decrease">
    <input type="button" value="リセット" @click="reset">
  </div>
</template>

<script>
export default {
  name: 'CounterPage',
  methods: {
    increase () {
      this.$store.commit('increase')
    },
    decrease () {
      this.$store.commit('decrease')
    },
    reset () {
      this.$store.commit('reset')
    }
  }
}
</script>
