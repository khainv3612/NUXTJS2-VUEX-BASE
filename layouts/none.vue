<template>
  <div>
    <client-only>
    <NotificationBlock />
    <div class="home">
      <nuxt />
    </div>
    <LoadingBar></LoadingBar>
    </client-only>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import {
  SET_BACK_LOGIN
} from '../store/store.const'
import LoadingBar from '../components/LoadingBar'
import NotificationBlock from '../components/NotificationBlock'

export default {
  name: 'NoneLayout',
  components: {
    LoadingBar,
    NotificationBlock
  },
  data() {
    return {
      categories: [
        {
          name: '',
          link: '',
          active: true,
          children: []
        }
      ],
      windowWidth: 0,
      showPhoneAni: true
    }
  },
  computed: {
    ...mapState({
      backLogin: state => state.backLogin
    })
  },
  created() {
    const data = _.cloneDeep(this.backLogin)
    let prev = this.$route.name
    if (data.length) {
      prev = data[data.length - 1]
      if (this.$route.name !== prev) {
        data.push(prev)
        this.$store.commit(SET_BACK_LOGIN, data)
      }
    } else {
      data.push(prev)
      this.$store.commit(SET_BACK_LOGIN, data)
    }
  }
}
</script>
