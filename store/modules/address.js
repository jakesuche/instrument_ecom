import axiosInstance  from "../../utils/axios";

const state = {
  
    address:[]
    
  };
  
  // getters
  const getters = {};
  
  // mutations
  const mutations = {
    storeAddress:(state, payload) => {
        console.log(payload)
      state.address = payload
    }
  };
  
  // actions
  const actions = {
   addAddress({commit}, payload){
       console.log(this.$api)
        this.$api.$post('/api/niconkart/address', payload)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
   },
   getaddress({commit}){
      
       this.$api.$get('/api/niconkart/address')
       .then(res=>{
           console.log(res)
           commit('storeAddress', res.address)
       })
       .catch((err)=>{
           console.log(err)
       })
   }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };
  