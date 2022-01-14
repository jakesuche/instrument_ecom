import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return moment(value).fromNow()
})