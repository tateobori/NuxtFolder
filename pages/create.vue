<template>
    <div>
        <h1>Nuxt.jsとrestAPIを用いてみよう</h1>
        <p>入力値: 
            <input type="text" v-model="task.name">
        </p>
        <input type="button" value="追加" @click="vuexCreate">
        <pre>storeの値: {{ $store.state }} </pre>
    </div>
</template>
<script>
export default {
    data () {
        return {
            task: {
                id: null,
                name: "名無しのタスク",
                completed: false
            }
        }
    },
    methods: {
        vuexCreate () {
            this.$store.dispatch('createAction', this.$data.task)
        }
    }
}
</script>