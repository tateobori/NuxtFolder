export const state = () => ({
  counter: 0
})

export const mutations = {
  add (state, payload) {
    state.counter += Number(payload)
  },
  increase (state) {
    state.counter++
  },
  decrease (state) {
    state.counter--
  },
  reset (state) {
    state.counter = 0
  }
}

export const actions = {
  addAction (data, payload) {
    data.commit('add', payload)
  }
}
