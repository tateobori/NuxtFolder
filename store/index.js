export const state = () => ({
  message: '',
  apiData: {
    success: false,
    data: null
  },
  pickData: null
})

export const mutations = {
  createMutation (state) {
    state.message = '登録完了!'
  },
  readMutation (state, payload) {
    state.apiData = payload
    state.message = '読み込み完了'
  },
  deleteMutation (state) {
    state.message = '削除完了'
  }
}

const axios1 = require('axios')
export const actions = {
  createAction (data, payload) {
    const url = 'https://umayadia-apisample.azurewebsites.net/api/persons'
    axios1.post(url, payload)
      .then((res) => {
        data.commit('createMutation')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  readAction (data) {
    const url = 'https://umayadia-apisample.azurewebsites.net/api/persons'
    let payload = null
    axios1.get(url)
      .then((res) => {
        payload = res.data
        data.commit('readMutation', payload)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteAction (muData, payload) {
    const url = 'https://umayadia-apisample.azurewebsites.net/api/persons/' + payload
    axios1.delete(url, { data: payload })
      .then((res) => {
        muData.commit('deleteMutation')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
