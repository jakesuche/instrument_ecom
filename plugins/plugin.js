import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue2Filters from 'vue2-filters'
import { VueMasonryPlugin } from 'vue-masonry'
import InfiniteLoading from 'vue-infinite-loading'
import firebase from 'firebase/app'
import PayPal from 'vue-paypal-checkout'
import VueLazyLoad from 'vue-lazyload'
import ProductZoomer from 'vue-product-zoomer'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueAwesomeSwiper)
Vue.use(Vue2Filters)
Vue.use(VueMasonryPlugin)
Vue.use(InfiniteLoading)
Vue.component('paypal-checkout', PayPal)
Vue.use(VueLazyLoad)
Vue.use(ProductZoomer)
Vue.use(VueScrollTo)

const config = {
  apiKey: "AIzaSyAsmRAhtlN3z41A-SroT4JDI-A3NwnTAr0",
  authDomain: "intellectual-property-37fae.firebaseapp.com",
  projectId: "intellectual-property-37fae",
  storageBucket: "intellectual-property-37fae.appspot.com",
  messagingSenderId: "945895331209",
  appId: "1:945895331209:web:5526ee67c2d62f9c8fbd58"
};
firebase.initializeApp(config)