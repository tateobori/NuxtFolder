<template>
  <div>
    <h1>ストアに値を渡す(actionを経由)</h1>
    <p>ストアの値{{ $store.state.counter }}</p>
    <p>dataの値: {{ $data }}</p>
    <p>入力値: <input v-model="num" type="text"></p>
    <input type="button" value="追加" @click="add">
  </div>
</template>

<script>
export default {
  name: 'CounterPage',
  data () {
    return {
      num: 1
    }
  },
  methods: {
    add () {
      this.$store.dispatch('addAction', this.num)
    }
  }
}
</script>
