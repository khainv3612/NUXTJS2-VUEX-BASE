<template>
  <div class="not-found-page">
    <img src="~/assets/icons/404.svg" alt="">
    <div class="text-not-found">{{ this.$route.query.error && errorJob ? errorJob : $t('common.not_found') }}</div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'NotFoundPage',
  computed: {
    ...mapState({
      errorJob: state => state.errorJob
    })
  }
}
</script>
