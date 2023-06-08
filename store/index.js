import _ from 'lodash'
import { handleApi } from '../utils/handleApi'
export const state = () => ({
  notifySuccess: { show: false, text: '' },
  notifyError: { show: false, text: '' },
  notifyWarning: { show: false, text: '' },
  loading: false,
  hideFooter: false,
  showModalSp: false,
  loadingAnime: false,
  openSidebar: 0,
  errorJob: '',
  titleMenu: [{ name: '', route: '/' }],
  showMessageSP: false,
  previousUrl: '/',
  backLogin: []
})

export const getters = {}

export const mutations = {
  setNotifySuccess(state, notify) {
    state.notifySuccess = _.cloneDeep(notify)
  },
  setNotifyError(state, notify) {
    state.notifyError = _.cloneDeep(notify)
  },
  setNotifyWarning(state, notify) {
    state.notifyWarning = _.cloneDeep(notify)
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setHideFooter(state, hideFooter) {
    state.hideFooter = hideFooter
  },
  setOpenSidebar(state, openSidebar) {
    state.openSidebar = openSidebar
  },
  setTitleMenu(state, titleMenu) {
    state.titleMenu = titleMenu
  },
  setShowModalSp(state, showModalSp) {
    state.showModalSp = showModalSp
  },
  setErrorJob(state, errorJob) {
    state.errorJob = errorJob
  },
  setShowMessageSP(state, showMessageSP) {
    state.showMessageSP = showMessageSP
  },
  setPreviousUrl(state, previousUrl) {
    state.previousUrl = previousUrl
  },
  setBackLogin(state, backLogin) {
    state.backLogin = backLogin
  },
  setLoadingAnime(state, loadingAnime) {
    state.loadingAnime = loadingAnime
  }
}

export const actions = {
  getMasterData(context, resource) {
    return new Promise((resolve, reject) => {
      handleApi(resolve, reject, this.$axios.get(`/master-data?${resource}`), context)
    })
  }
}
