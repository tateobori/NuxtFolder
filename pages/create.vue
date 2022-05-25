<template>
  <div>
    <h1>Nuxt.jsとrestAPIを用いてみよう</h1>
    <p>入力値:</p>
    <p>name: <input v-model="person.name" type="text"></p>
    <p>note: <input v-model="person.note" type="text"></p>
    <p>age: <input v-model="person.age" type="text"></p>
    <p><input type="button" value="追加" @click="vuexCreate"></p>
    <pre>storeの値: {{ $store.state }} </pre>
  </div>
</template>
<script>
export default {
  data () {
    return {
      person: {
        name: 'test man',
        note: 'sample note',
        age: 10,
        registerDate: '2022-04-26T20:22:13'
      }
    }
  },
  methods: {
    vuexCreate () {
      this.$store.dispatch('createAction', this.$data.person)
    }
  }
}
</script>
