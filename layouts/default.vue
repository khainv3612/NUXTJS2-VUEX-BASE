<template>
  <div :class="{ 'show-modal-sp': showModal }">
    <client-only>
      <HeaderCommon />
      <NotificationBlock />
      <div class="home">
        <nuxt />
      </div>
      <div v-if="!showMessageSP">
        <FooterCommon />
      </div>
      <LoadingBar />
    </client-only>
    <div v-if="showModal" class="nav_mobile">
      <label class="icon-close">
        <img id="close_btn" src="/assets/icon/union-white.svg" alt="" @click="closeModal">
      </label>
    </div>
    <div v-if="loadingAnime" class="anime-loading">
      <div class="form-loading">
        <div>
          <img src="/assets/images/anime_notification.png" alt="">
        </div>
        <span>{{ $t('my_page.system_process') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {
  SET_SHOW_MODAL_SP,
  SET_SHOW_MESSAGE_SP,
  SET_PREVIOUS_URL,
  SET_BACK_LOGIN
} from '../store/store.const'
import LoadingBar from '../components/LoadingBar'
import HeaderCommon from '../components/layout/HeaderCommon'
import FooterCommon from '../components/layout/FooterCommon'
import NotificationBlock from '@/components/NotificationBlock'

export default {
  name: 'DefaultLayout',
  components: { FooterCommon, HeaderCommon, LoadingBar, NotificationBlock },
  computed: {
    ...mapState({
      showMessageSP: state => state.showMessageSP,
      showModal: state => state.showModalSp,
      loadingAnime: state => state.loadingAnime
    })
  },
  created() {
    this.setLocale()
    this.setToken()
    this.$store.commit(SET_SHOW_MODAL_SP, false)
    if (this.$route.path !== '/logout') {
      this.$store.commit(SET_PREVIOUS_URL, this.$route.path)
    }
    this.$store.commit(SET_BACK_LOGIN, [])
  },
  watch: {
    '$route.path'(value) {
      this.setLocale()
      this.setToken()
      if (value !== '/logout') {
        this.$store.commit(SET_PREVIOUS_URL, value)
      }
      this.$store.commit(SET_SHOW_MESSAGE_SP, false)
    }
  },
  methods: {
    closeModal() {
      this.$store.commit(SET_SHOW_MODAL_SP, false)
    },
    setLocale() {
      if (this.$route.query.lang) {
        this.$i18n.locale = this.$route.query.lang
        this.$cookies.set('lang', this.$route.query.lang)
      }
    },
    setToken() {
      if (this.$route.query.token) {
        this.$cookies.set('auth._token.local', 'Bearer ' + this.$route.query.token)
      }
    }
  }
}
</script>
