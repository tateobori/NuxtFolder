<template>
  <div>
    <h1>ストアに値を渡す</h1>
    <p>{{ $store.state.counter }}</p>
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
      this.$store.commit('add', this.num)
    }
  }
}
</script>
