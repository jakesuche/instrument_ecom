

const state = {
  
  user:null
  
};

// getters
const getters = {};

// mutations
const mutations = {
  storeUser:(state, payload) => {
    // console.log(payload), 
    console.log('uchechukuw')
    state.user = payload
  }
};

// actions
const actions = {
  async updatePassword({context}, payload){
    try{
      const res = await this.$api.$post('/api/niconkart/user/updatepassword', payload)
      
    }catch(err){
      console.log(err.response)
    }
  },
  async loginUser({ commit }, payload) {
    try {
      const res = await this.$axios.$post("/api/niconkart/user/login", payload);
      console.log(res);
      commit('storeUser',res.userdata )
      localStorage.setItem('user_token',res.token)
    } catch (err) {
      console.log(err.response);
    }
  },
  async registerUser({ commit }, payload) {
    
  
    
    
    try {
      const res = await this.$axios.$post("/api/niconkart/user/register", payload);
      this.$toast.success('Your registration was successfull', {
        duration:4000,
        position:'top-center'
      })

      this.$router.push('/page/account/login')
      // console.log(res);
    } catch (err) {

      console.log(err.response);
      if(err.response){
        if(err.response.status === 500){
          this.$toast.error('Internal server error', {
            duration:5000
          })
        }else{
          this.$toast.error(err.response.message,{
            duration:4000
          })
        }
      }
    }
  },

  logout({commit}){

    setTimeout(()=>{
      console.log(this.$toast.info('kksk'))
      commit('storeUser',null)
      this.$router.push('/')
    }, 1000)
  },

  async updateUser({commit}, payload){
      try{
       const res = await this.$api.$post('/api/niconkart/user/updateAccount', payload)
       this.$toast.info('Account Details updated successfully', {
         duration:4000
       })
         
       commit('storeUser',res.userdata )
      }catch(err){
        console.log(err)
      }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
