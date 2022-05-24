
export const state = () => ({
  counter: 0
})

export const mutations = {
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

//   export const actions = {

//   }
