import Vue from 'vue'

export default () => {
  Vue.filter('fullwidth', function(value) {
    if (!value) return ''
    return value.toString().replace(/[A-Za-z0-9]/g, function(s) { return String.fromCharCode(s.charCodeAt(0) + 0xFEE0) })
  })
}
