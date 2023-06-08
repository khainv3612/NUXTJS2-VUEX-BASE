<template>
  <div class="header-common">
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'HeaderCommon',
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
      totalNotification: 0,
      chat: 0
    }
  },
  watch: {
    '$auth.user': {
      handler() {
        this.user = this.$auth.user
      },
      deep: true
    }
  },
  computed: {
    ...mapState({
      showMessageSP: state => state.showMessageSP
    })
  },
  methods: {
    handleRouter(route) {
      this.$router.push(route)
    }
  }
}
</script>
