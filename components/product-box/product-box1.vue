<template>
  <div>
    <div class="img-wrapper">
      <div class="lable-block">
        <span class="lable3" v-if="product.new">new</span>
        <span class="lable4" v-if="product.sale">on sale</span>
      </div>
      <div class="front">
        <nuxt-link :to="{ path: '/product/details/'+product.id}">
          <img
          src="https://firebasestorage.googleapis.com/v0/b/intellectual-property-37fae.appspot.com/o/ecommerce%2Frock-zhou--6cScQvixFY-unsplash.jpg?alt=media&token=2293a3c2-9480-4c50-bca0-3eb25abb5c70"
          
            :id="product.id"
            class="img-fluid bg-img"
            :alt="product.title"
            :key="index"
          />
        </nuxt-link>
      </div>
      <ul class="product-thumb-list">
        <li
          class="grid_thumb_img"
          :class="{active: imageSrc === image.src}"
          v-for="(image,index) in product.images"
          :key="index"
          @click="productVariantChange(image.src)"
        >
          <a href="javascript:void(0);">
            <img :src="getImgUrl(image.src)" />
          </a>
        </li>
      </ul>
      <div class="cart-info cart-wrap">
          <button
            data-toggle="modal"
            data-target="#addtocart"
            title="Add to cart"
            @click="addToCart(product)"
            v-b-modal.modal-cart
            variant="primary"
          >
            <i class="ti-shopping-cart"></i>
          </button>
        <a href="javascript:void(0)" title="Wishlist">
          <i class="ti-heart" aria-hidden="true" @click="addToWishlist(product)"></i>
        </a>
        <a href="javascript:void(0)" title="Quick View" @click="showQuickview(product)" v-b-modal.modal-lg variant="primary">
          <i class="ti-search" aria-hidden="true"></i>
        </a>
        <a href="javascript:void(0)" title="Comapre" @click="addToCompare(product)" v-b-modal.modal-compare variant="primary">
          <i class="ti-reload" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="product-detail">
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
      <nuxt-link :to="{ path: '/product/details/'+product.id}">
        <h6>{{ product.title }}</h6>
      </nuxt-link>
      <p>{{ product.description }}</p>
      <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
      <!-- <ul class="color-variant" v-if="product.variants[0].color">
        <li v-for="(variant,variantIndex) in Color(product.variants)" :key="variantIndex">
          <a
            @click="productColorchange(variant, product)"
            :class="[variant]"
            v-bind:style="{ 'background-color' : variant}"
          ></a>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { log } from 'util'
export default {
  props: ['product', 'index'],
  data() {
    return {
      imageSrc: '',
      quickviewProduct: {},
      compareProduct: {},
      cartProduct: {},
      showquickview: false,
      showCompareModal: false,
      cartval: false,
      variants: {
        productId: '',
        image: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    }),
    ...mapGetters({
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    addToCart: function (product) {
      this.cartval = true
      this.cartProduct = product
      this.$emit('opencartmodel', this.cartval, this.cartProduct)
      this.$store.dispatch('cart/addToCart', product)
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs
      this.$emit('showalert', this.dismissCountDown)
      this.$store.dispatch('products/addToWishlist', product)
    },
    showQuickview: function (productData) {
      this.showquickview = true
      this.quickviewProduct = productData
      this.$emit('openquickview', this.showquickview, this.quickviewProduct)
    },
    addToCompare: function (product) {
      this.showCompareModal = true
      this.compareProduct = product
      this.$emit('showCompareModal', this.showCompareModal, this.compareProduct)
      this.$store.dispatch('products/addToCompare', product)
    },
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    productColorchange(color, product) {
      product.variants.map((item) => {
        if (item.color === color) {
          product.images.map((img) => {
            if (img.image_id === item.image_id) {
              this.imageSrc = img.src
            }
          })
        }
      })
    },
    productVariantChange(imgsrc) {
      console.log("I am calll");      
      this.imageSrc = imgsrc
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$emit('alertseconds', this.dismissCountDown)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    }
  }
}
</script>



  :src='getImgUrl(imageSrc ? imageSrc : product.images[0].src)'