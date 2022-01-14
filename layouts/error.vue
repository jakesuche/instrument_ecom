<template>
  <section class="p-0" >
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="error-section">
              <h1>404</h1>
              <h2>page not found</h2>
              <nuxt-link :to="{ path: '/'}" :class="'btn btn-solid'"> back to home</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Error page'
    }
  },
}
</script>

<style>

</style>