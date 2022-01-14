<template>
  <div>
    <Instrument />
</div>
</template>

<script>
const Instrument = () => import('./shop/fashion')
export default {

  
  components: {
    Instrument
  },
  created(){
    console.log(this.$paystack, 'console')
  },
    head() {
    return {
      title: ''
    }
  },

  created(){
    console.log(this.$auth)
  }
}
</script>
