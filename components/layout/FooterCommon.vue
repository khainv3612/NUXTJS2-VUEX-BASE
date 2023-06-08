<template>
  <footer class="footer">
  </footer>
</template>
<script>
export default {
  name: 'FooterCommon',
  data() {
    return {
      loggedIn: this.$auth.loggedIn
    }
  },
  methods: {
    handleRouter(route) {
      this.$router.push(route)
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
