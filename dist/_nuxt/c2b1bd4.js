(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{695:function(t,e,r){"use strict";r.r(e);var n=r(70),l=r.n(n),c={data:function(){return{swiperOption:{loop:!0,slideSpeed:300,slidesPerView:7,slidesToScroll:7,breakpoints:{1367:{slidesPerView:6},1024:{slidesPerView:5},600:{slidesPerView:4},480:{slidesPerView:3}}},instagram:[]}},mounted:function(){var t=this;l.a.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=8295761913.aa0cb6f.2914e9f04dd343b8a57d9dc9baca91cc&count=15").then((function(e){t.instagram=e.data.data}))}},d=r(45),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"instagram"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 p-0"},[r("h2",{staticClass:"title-borderless"},[t._v("# instagram")]),t._v(" "),r("div",{staticClass:"slide-7 no-arrow"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.instagram.slice(0,15),(function(e,n){return r("div",{key:n,staticClass:"swiper-slide"},[r("div",[r("a",{attrs:{href:e.link,target:"_blank"}},[r("div",{staticClass:"instagram-box"},[r("img",{attrs:{alt:"",src:e.images.standard_resolution.url}}),t._v(" "),t._m(0,!0)])])])])})),0)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay"},[e("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.default=component.exports}}]);