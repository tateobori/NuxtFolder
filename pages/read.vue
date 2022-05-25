<template>
  <div>
    <h1>RestAPIで読み込みのチェック</h1>
    <p><input type="button" value="読み込み" @click="vuexRead"></p>
    <br>
    <pre>storeの値: {{ $store.state }} </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      suuji: 0
    }
  },
  methods: {
    vuexRead () {
      this.$store.dispatch('readAction')
    }
  }
}
</script>
