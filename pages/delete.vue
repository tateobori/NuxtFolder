<template>
  <div>
    <h1>RestAPIで削除の確認</h1>
    <p><input type="button" value="読み込み" @click="vuexRead"></p>
    <p>{{ $store.state.message }}</p>
    <br>
    <pre>storeの値: {{ $store.state.apiData }} </pre>
    <tr>
      <th>name</th>
      <th>note</th>
      <th>age</th>
      <th>registerDate</th>
      <th>-</th>
    </tr>
    <tr v-for="data in $store.state.apiData.data" :key="data.name">
      <td>{{ data.name }}</td>
      <td>{{ data.note }}</td>
      <td>{{ data.age }}</td>
      <td>{{ data.registerDate }}</td>
      <td><input type="button" value="削除" @click="vuexDelete(data.name)"></td>
    </tr>
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
    },
    vuexDelete (name) {
      this.$store.dispatch('deleteAction', name)
    }
  }
}
</script>

<style>
table{
    border-collapse: collapse
}
table th{
    background-color: #379ce8;
    border:solid 1px #ccc;
    color:#fff;
    padding: 10px;
}
table td{
    border: solid 1px #ccc;
    padding: 10px;
}
</style>
