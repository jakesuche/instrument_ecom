<template>
  <div>
    <!-- <h2 class="title">{{ $t('home.title') }}</h2> -->
    <!-- <h2 class="subtitle">{{ $t('home.introduction') }}</h2> -->
    <!-- Home slider -->
    <section class="p-0">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div
                class="home text-center"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <h4>{{ item.title }}</h4>
                          <h1>{{ item.subtitle }}</h1>
                          <nuxt-link :to="{ path: '/collection/leftsidebar/all'}" class="btn btn-solid">shop now</nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
    <!-- Home slider end -->
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/home-banner/57.jpg'),
          title: 'musical instrument',
          subtitle: 'Music',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/58.jpg'),
         title: 'musical instrument',
          subtitle: 'Music',
          alignclass: 'p-left'
        },
         {
          imagepath: require('@/assets/images/home-banner/59.jpg'),
          title: 'musical instrument',
          subtitle: 'Music',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/60.jpg'),
          title: 'musical instrument',
          subtitle: 'Music',
          alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>
