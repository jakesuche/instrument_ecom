(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1090:function(t,e,r){"use strict";r.r(e);r(10);var o=r(577),l=r(393),c=r(392),n=r(395),d=r(442),v={components:{Header:l.a,Footer:c.a,Breadcrumbs:n.a},data:function(){return{logintitle:"Login",registertitle:"New Customer",errors:[],email:"test@admin.com",password:"test@123456"}},methods:{checkForm:function(t){if(this.errors=[],this.email?this.validEmail(this.email)||this.errors.push("Valid email required."):this.errors.push("Email required."),this.password||this.errors.push("Password required."),!this.errors.length)return!0;t.preventDefault()},validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},signUp:function(){var t=this;""===this.email&&""===this.password?(this.email="test@admin.com",this.password="test@123456"):o.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){console.log("Result",e),d.default.localLogin(e),t.$router.replace("/page/account/checkout")}),(function(e){t.email="test@admin.com",t.password="test@123456",t.$toasted.show("Oops..."+e.message,{theme:"bubble",position:"bottom-right",type:"error",duration:2e3})}))},socialLogin:function(){var t=this,e=new o.a.auth.GoogleAuthProvider;o.a.auth().signInWithPopup(e).then((function(e){d.default.localLogin(e),t.$router.replace("/page/account/checkout")})).catch((function(t){alert("Oops. "+t.message)}))},socialLoginFacebook:function(){var t=this,e=new o.a.auth.FacebookAuthProvider;o.a.auth().signInWithPopup(e).then((function(e){console.log("Result",e),d.default.localLogin(e),t.$router.replace("/page/account/checkout")})).catch((function(t){alert("Oops. "+t.message)}))},socialLoginTwitter:function(){var t=this,e=new o.a.auth.TwitterAuthProvider;o.a.auth().signInWithPopup(e).then((function(e){console.log("Result",e),d.default.localLogin(e),t.$router.replace("/page/account/checkout")})).catch((function(t){alert("Oops. "+t.message)}))},socialLoginGit:function(){var t=this,e=new o.a.auth.GithubAuthProvider;o.a.auth().signInWithPopup(e).then((function(e){console.log("Result",e),d.default.localLogin(e),t.$router.replace("/page/account/checkout")})).catch((function(t){alert("Oops. "+t.message)}))}}},m=r(45),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Breadcrumbs"),t._v(" "),r("section",{staticClass:"login-page section-b-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("h3",[t._v(t._s(t.logintitle))]),t._v(" "),r("div",{staticClass:"theme-card"},[r("form",{staticClass:"theme-form",attrs:{method:"post"},on:{submit:t.checkForm}},[t.errors.length?r("div",[r("ul",{staticClass:"validation-error mb-3"},t._l(t.errors,(function(e,o){return r("li",{key:o},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email",name:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter your password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),r("a",{staticClass:"btn-solid btn",attrs:{href:"javascript:void(0)"},on:{click:t.signUp}},[t._v(" Login ")]),t._v(" "),r("div",{staticClass:"social mt-3"},[r("div",{staticClass:"form-group btn-showcase d-flex"},[r("button",{staticClass:"btn social-btn btn-fb d-inline-block",attrs:{type:"button"},on:{click:t.socialLoginFacebook}},[r("i",{staticClass:"fa fa-facebook"})]),t._v(" "),r("button",{staticClass:"btn social-btn btn-twitter d-inline-block",attrs:{type:"button"},on:{click:t.socialLogin}},[r("i",{staticClass:"fa fa-google"})]),t._v(" "),r("button",{staticClass:"btn social-btn btn-google d-inline-block",attrs:{type:"button"},on:{click:t.socialLoginTwitter}},[r("i",{staticClass:"fa fa-twitter"})]),t._v(" "),r("button",{staticClass:"btn social-btn btn-github d-inline-block",attrs:{type:"button"},on:{click:t.socialLoginGit}},[r("i",{staticClass:"fa fa-github"})])])])])])]),t._v(" "),r("div",{staticClass:"col-lg-6 right-login"},[r("h3",[t._v(t._s(t.registertitle))]),t._v(" "),t._m(0)])])])]),t._v(" "),r("Footer")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"theme-card authentication-right"},[r("h6",{staticClass:"title-font"},[t._v("Create A Account")]),t._v(" "),r("p",[t._v("Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.")]),t._v(" "),r("a",{staticClass:"btn btn-solid",attrs:{href:"/pages/account/register"}},[t._v("Create an Account")])])}],!1,null,null,null);e.default=component.exports},392:function(t,e,r){"use strict";var o={},l=r(45),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("footer",{staticClass:"footer-light"},[t._m(0),t._v(" "),o("section",{staticClass:"section-b-space light-layout"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row footer-theme partition-f"},[o("div",{staticClass:"col-lg-4 col-md-6"},[t._m(1),t._v(" "),o("div",{staticClass:"footer-contant"},[o("div",{staticClass:"footer-logo"},[o("img",{attrs:{src:r(394),alt:"logo"}})]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,")]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])]),t._v(" "),o("div",{staticClass:"sub-footer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[t._m(6),t._v(" "),o("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[o("div",{staticClass:"payment-card-bottom"},[o("ul",[o("li",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:r(400),alt:""}})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:r(398),alt:""}})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:r(399),alt:""}})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:r(396),alt:""}})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:r(397),alt:""}})])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"light-layout"},[r("div",{staticClass:"container"},[r("section",{staticClass:"small-section border-section border-top-0"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"subscribe"},[r("div",[r("h4",[t._v("KNOW IT ALL FIRST!")]),t._v(" "),r("p",[t._v("Never Miss Anything From Multikart By Signing Up To Our Newsletter.")])])])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("form",{staticClass:"form-inline subscribe-form auth-form needs-validation",attrs:{method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank"}},[r("div",{staticClass:"form-group mx-sm-3"},[r("input",{staticClass:"form-control",attrs:{type:"text",name:"EMAIL",id:"mce-EMAIL",placeholder:"Enter your email",required:"required"}})]),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit",id:"mc-submit"}},[t._v("subscribe")])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title footer-mobile-title"},[r("h4",[t._v("about")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-social"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-google-plus",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col offset-xl-1"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("my account")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("mens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("womens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("clothing")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("accessories")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("featured")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("why we choose")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("shipping & return")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("secure shopping")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("gallary")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("affiliates")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("contacts")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("store information")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",{staticClass:"contact-list"},[r("li",[r("i",{staticClass:"fa fa-map-marker"}),t._v("Multikart Demo Store, Demo store India 345-659\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-phone"}),t._v("Call Us: 123-456-7898\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-envelope-o"}),t._v("Email Us:\n                    "),r("a",{attrs:{href:"#"}},[t._v("Support@Fiot.com")])]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-fax"}),t._v("Fax: 123456\n                  ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-end"},[r("p",[r("i",{staticClass:"fa fa-copyright",attrs:{"aria-hidden":"true"}}),t._v(" 2022  ecommerce powered by niconet\n              ")])])])}],!1,null,null,null);e.a=component.exports},393:function(t,e,r){"use strict";var o=r(402),l=r(404),c=r(401),n=r(403),d={data:function(){return{leftSidebarVal:!1}},components:{TopBar:o.a,LeftSidebar:l.a,Nav:c.a,HeaderWidgets:n.a},methods:{left_sidebar:function(){this.leftSidebarVal=!0},closeBarValFromChild:function(t){this.leftSidebarVal=t}}},v=r(45),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("header",[o("div",{staticClass:"mobile-fix-option"}),t._v(" "),o("TopBar"),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("div",{staticClass:"main-menu"},[o("div",{staticClass:"menu-left"},[o("div",{staticClass:"navbar"},[o("a",{on:{click:t.left_sidebar}},[t._m(0)]),t._v(" "),o("LeftSidebar",{attrs:{leftSidebarVal:t.leftSidebarVal},on:{closeVal:t.closeBarValFromChild}})],1),t._v(" "),o("div",{staticClass:"brand-logo"},[o("nuxt-link",{attrs:{to:{path:"/shop/fashion"}}},[o("img",{staticClass:"img-fluid",attrs:{src:r(394),alt:""}})])],1)]),t._v(" "),o("div",{staticClass:"menu-right pull-right"},[o("Nav"),t._v(" "),o("HeaderWidgets")],1)])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bar-style"},[e("i",{staticClass:"fa fa-bars sidebar-bar",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.a=component.exports},395:function(t,e,r){"use strict";var o={props:["title"]},l=r(45),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"page-title"},[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports}}]);