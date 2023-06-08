<template>
  <transition name="fade">
    <div v-if="notification && notification.show" id="toast">
      <div :class="'toast toast--' + notification.type">
        <div class="toast__icon">
          <img v-show="notification.type === 'success'" src="~/static/assets/icon/notification/success.svg" alt="" />
          <img v-show="notification.type === 'error'" alt="" :src="imageError" />
          <img v-show="notification.type === 'warning'" src="~/static/assets/icon/notification/warning.svg" alt="" />
        </div>
        <div class="toast__body">
          <h3 class="toast__title">{{ notification.text }}</h3>
          <p class="toast__msg">{{ notification.message }}</p>
        </div>
        <div class="toast__close" @click="close">
          <img src="~/static/assets/icon/close-dark.svg" alt="" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import { INDEX_SET_ERROR, INDEX_SET_SUCCESS, INDEX_SET_WARNING } from '@/store/store.const'

export default {
  name: 'NotificationBlock',
  data() {
    return {
      notification: {},
      icons: [],
      timeout: null,
      timeHide: 4000,
      imageError: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNDQzXzI1NDI5KSI+CiAgICAgICAgPHBhdGggZD0iTTguNTc0NjUgMy4yMTY3MkwxLjUxNjMyIDE1QzEuMzcwNzkgMTUuMjUyMSAxLjI5Mzc5IDE1LjUzNzggMS4yOTI5OCAxNS44Mjg4QzEuMjkyMTYgMTYuMTE5OCAxLjM2NzU2IDE2LjQwNiAxLjUxMTY3IDE2LjY1ODhDMS42NTU3OSAxNi45MTE2IDEuODYzNTkgMTcuMTIyMyAyLjExNDQxIDE3LjI2OTlDMi4zNjUyMyAxNy40MTc1IDIuNjUwMzIgMTcuNDk2OCAyLjk0MTMyIDE3LjVIMTcuMDU4QzE3LjM0OSAxNy40OTY4IDE3LjYzNDEgMTcuNDE3NSAxNy44ODQ5IDE3LjI2OTlDMTguMTM1NyAxNy4xMjIzIDE4LjM0MzUgMTYuOTExNiAxOC40ODc2IDE2LjY1ODhDMTguNjMxNyAxNi40MDYgMTguNzA3MSAxNi4xMTk4IDE4LjcwNjMgMTUuODI4OEMxOC43MDU1IDE1LjUzNzggMTguNjI4NSAxNS4yNTIxIDE4LjQ4MyAxNUwxMS40MjQ3IDMuMjE2NzJDMTEuMjc2MSAyLjk3MTggMTEuMDY2OSAyLjc2OTMxIDEwLjgxNzMgMi42Mjg3OUMxMC41Njc3IDIuNDg4MjYgMTAuMjg2MSAyLjQxNDQzIDkuOTk5NjUgMi40MTQ0M0M5LjcxMzIxIDIuNDE0NDMgOS40MzE1OSAyLjQ4ODI2IDkuMTgxOTkgMi42Mjg3OUM4LjkzMjM4IDIuNzY5MzEgOC43MjMyMSAyLjk3MTggOC41NzQ2NSAzLjIxNjcyVjMuMjE2NzJaIiBzdHJva2U9IiNGNzIxMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICAgICAgPHBhdGggZD0iTTEwIDcuNVYxMC44MzMzIiBzdHJva2U9IiNGNzIxMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICAgICAgPHBhdGggZD0iTTEwIDE0LjE2NjZIMTAuMDA4MyIgc3Ryb2tlPSIjRjcyMTIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMF8xNDQzXzI1NDI5Ij4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo='
    }
  },

  computed: {
    ...mapState(['notifySuccess', 'notifyError', 'notifyWarning'])
  },

  watch: {
    notifySuccess() {
      if (this.notifySuccess.text) {
        this.close()
        this.notification = {
          ...this.notifySuccess,
          type: 'success',
          image: require('~/static/assets/icon/notification/success.svg')
        }
        this.$store.commit(INDEX_SET_SUCCESS, { show: false, text: '' })
        // eslint-disable-next-line no-return-assign
        this.timeout = setTimeout(() => this.notification.show = false, this.timeHide)
      }
    },
    notifyError() {
      if (this.notifyError.text) {
        this.close()
        clearTimeout(this.timeout)
        this.notification = {
          ...this.notifyError,
          type: 'error',
          image: require('~/static/assets/icon/notification/error.svg')
        }
        this.$store.commit(INDEX_SET_ERROR, { show: false, text: '' })
        // eslint-disable-next-line no-return-assign
        this.timeout = setTimeout(() => this.notification.show = false, this.timeHide)
      }
    },
    notifyWarning() {
      if (this.notifyWarning.text) {
        this.close()
        clearTimeout(this.timeout)
        this.notification = {
          ...this.notifyWarning,
          type: 'warning',
          image: require('~/static/assets/icon/notification/warning.svg')
        }
        this.$store.commit(INDEX_SET_WARNING, { show: false, text: '' })
        // eslint-disable-next-line no-return-assign
        this.timeout = setTimeout(() => this.notification.show = false, this.timeHide)
      }
    }
  },

  beforeDestroy() {
    clearTimeout(this.timeout)
  },

  methods: {
    close() {
      clearTimeout(this.timeout)
      this.notification.show = false
    }
  }
}
</script>
