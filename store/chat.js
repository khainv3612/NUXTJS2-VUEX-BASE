import { handleApi } from '../utils/handleApi'
export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  getListMessages(context, resource) {
    return new Promise((resolve, reject) => {
      handleApi(resolve, reject, this.$axios.get(`/messages?${resource}`), context)
    })
  },
  sendMessage(context, resource) {
    return new Promise((resolve, reject) => {
      handleApi(resolve, reject, this.$axios.post(`/messages`, resource), context)
    })
  }
}
