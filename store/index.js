import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import menu from './modules/menu'
import products from './modules/products'
import cart from './modules/cart'
import filter from './modules/filter'
import layout from './modules/layout'
import authuser from './modules/authuser'
import address from './modules/address'
import products2 from './modules/products2'
// import products2 from './modules/products2'
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      blog,
      menu,
      products,
      cart,
      filter,
      layout,
      authuser,
      address,
      products2 
    }
  })
}
export default createStore
