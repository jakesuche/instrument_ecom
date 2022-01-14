<template>
  <div>
    <Header />
    <Breadcrumbs title="Dashboard" />
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <b-card no-body v-bind:class="'dashboardtab'">
            <b-tabs pills card vertical>
              <b-tab title="Dashboard" :active="activeTab == 'dashboard'">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>My Dashboard</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, {{ authUser.firstname }} !</p>
                        <p>
                          From your My Account Dashboard you have the ability to
                          view a snapshot of your recent account activity and
                          update your account information. Select a link below
                          to view or edit information.
                        </p>
                      </div>

                      <div class="row mt-5">
                        <div class="col-md-4 mb-4">
                          <b-card
                            @click="selectTab('orders')"
                            class="text-center card pointer"
                          >
                            <div
                              class="d-flex flex-column justify-content-content inner_card_content"
                            >
                              <i
                                class="fa fa-list-alt icon"
                                aria-hidden="true"
                              ></i>
                              <h5>ORDERS</h5>
                            </div>
                          </b-card>
                        </div>
                        <div class="col-md-4 mb-4">
                          <b-card
                            @click="selectTab('address')"
                            class="text-center card pointer"
                          >
                            <div
                              class="d-flex flex-column justify-content-content inner_card_content"
                            >
                              <i
                                class="fa fa-map-marker icon"
                                aria-hidden="true"
                              ></i>
                              <h5>ADDRESS</h5>
                            </div>
                          </b-card>
                        </div>
                        <div class="col-md-4 mb-4">
                          <b-card
                            @click="selectTab('account')"
                            class="text-center card pointer"
                          >
                            <div
                              class="d-flex flex-column justify-content-content inner_card_content"
                            >
                              <i class="fa fa-user icon" aria-hidden="true"></i>
                              <h5>ACCOUNT DETAILS</h5>
                            </div>
                          </b-card>
                        </div>

                        <div class="col-md-4">
                          <b-card class="text-center card pointer">
                            <div
                              class="d-flex flex-column justify-content-content inner_card_content"
                            >
                              <i
                                class="fa fa-list-alt icon"
                                aria-hidden="true"
                              ></i>
                              <h5>ORDERS</h5>
                            </div>
                          </b-card>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Account Info" :active="activeTab == 'account'">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Account Information</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="box">
                              <div class="box-title">
                                <h3>Contact Information</h3>
                                <a >Last updated <span style="font-weight:900">{{ userData.updatedAt | formatDate}}</span></a>
                              </div>
                              <div class="box-content row">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label for="city">Firstname</label>

                                    <input
                                      type="text"
                                      class="form-control"
                                      id="city"
                                      placeholder="Enter city name"
                                      name="city"
                                      v-model="userData.firstname"
                                    />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label for="city">Lastname</label>

                                    <input
                                      type="text"
                                      class="form-control"
                                      id="city"
                                      v-model="userData.lastname"
                                      placeholder="Enter city name"
                                      name="city"
                                    />
                                  </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label for="city">Email</label>

                                    <input
                                      type="text"
                                      class="form-control"
                                      id="city"
                                      v-model="userData.email"
                                      placeholder="Email"
                                      name="city"
                                      disabled
                                    />
                                  </div>
                                </div>
                                 <div class="col-md-12">
                                    <button @click="updateAccount()" class="btn btn-solid">
                                      Save changes
                                    </button>
                                </div>
                               
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab :active="activeTab == 'address'" title="Address Book">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Address Book</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>
                          Hello,
                          {{ `${authUser.firstname} ${authUser.lastname}!` }}
                        </p>
                        <p>
                          From your Address book you have the ability to change
                          or edit your shipping and billing address.
                        </p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Address Information</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>Address Book</h3>
                              <a @click.prevent="openModal('address')" href="#"
                                >Add Addresses</a
                              >
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>Default Billing Address</h6>
                                <address>
                                  You have not set a default billing address.
                                  <br />
                                  <a @click="openModal('addresslist')"
                                    >Edit Address</a
                                  >
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>Default Shipping Address</h6>
                                <address>
                                  You have not set a default shipping address.
                                  <br />
                                  <a @click="openModal('addresslist')"
                                    >Edit Address</a
                                  >
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab :active="activeTab == 'orders'" title="My Orders">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>My orders</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>
                          Hello,
                          {{ `${authUser.firstname}, ${authUser.lastname}` }} !
                        </p>
                        <p>
                          From your Orders you have the ability to view your all
                          orders and status of order.
                        </p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Order Information</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title mb-3">
                              <h3>orders list</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s,
                              </p>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h4>Order no: 2105</h4>
                                <h6>Slim Fit Cotton Shirt</h6>
                              </div>
                              <div class="col-sm-6">
                                <h4>Order no: 1032</h4>
                                <h6>Slim Fit Cotton Shirt</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box mt-2">
                            <div class="row">
                              <div class="col-sm-6">
                                <h4>Order no: 2105</h4>
                                <h6>Slim Fit Cotton Shirt</h6>
                              </div>
                              <div class="col-sm-6">
                                <h4>Order no: 1032</h4>
                                <h6>Slim Fit Cotton Shirt</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
                 <b-tab title="Change Password" :active="activeTab == 'password'">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Password change</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="box">
                              <div class="box-title">
                                <h3>Password change</h3>
                                <a >Last updated <span style="font-weight:900">{{ userData.updatedAt | formatDate}}</span></a>
                              </div>
                              <div class="box-content row">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label for="password">Old password</label>

                                    <input
                                      type="password"
                                      class="form-control"
                                      id="password"
                                      placeholder="**********"
                                      name="city"
                                      
                                      v-model="passwordChange.oldpassword"
                                    />
                                  </div>
                                </div>{{passwordChange}}
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label for="city">New Password</label>

                                    <input
                                      type="password"
                                      class="form-control"
                                      id="city"
                                      v-model="passwordChange.newPassword"
                                      placeholder="**********"
                                      name="city"
                                    />
                                  </div>
                                </div>
                               
                                 <div class="col-md-12">
                                    <button @click="updatePassword()" class="btn btn-solid">
                                      Update password
                                    </button>
                                </div>
                               
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
        
              <b-tab :active="activeTab == 'logout'" title="Log out">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Log Out</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>
                          Hello,
                          {{ `${authUser.firstname}, ${authUser.lastname}` }} !
                        </p>
                        <p>
                          Log out From your Account Dashboard. Click on the button below
                        </p>
                      </div>
                      <div style="padding: 44px;" class="box-account box-info d-flex justify-content-center align-items-center">
                       
                          <button  @click="logoutUser()" class="btn btn-solid"> 
                            Logout
                          </button>
                        
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
    {{ authUser }}
    <Footer />

    <b-modal content-class="dashboard_modal" id="bv-modal-example1" hide-footer>
      <template #modal-title> Using <code>$bvModal</code> Methods </template>

      <Addressform v-if="open === 'address'" />
      <div class="d-flex justify-content-center align-items-center">
        <Addresslist v-if="open === 'addresslist'" :address="address" />
      </div>
    </b-modal>
  </div>
</template>
<script>
import Header from "../../../components/header/header1";
import Footer from "../../../components/footer/footer1";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
import Addressform from "./components/addressform.vue";
import Addresslist from "./components/addresslist.vue";
import { mapState } from "vuex";
import moment from 'moment'
export default {
  middleware: "authUser",
  data() {
    return {
      open: "address",
      activeTab: "dashboard",
      userData: {
        firstname: "",
        lastname: "",
        email: "",
      },
      passwordChange:{
        oldpassword:'',
        newPassword:''
      }
      
    };
  },
  components: {
    Header,
    Footer,
    Breadcrumbs,
    Addressform,
    Addresslist,
  },

  computed: {
    authUser() {
      return this.$store.state.authuser.user;
    },
    ...mapState({
      address: (state) => state.address.address,
    }),
  },
  created() {
    this.getAddress();
    this.userData = {...this.userData, ...this.authUser}
  },
  methods: {
    updatePassword(){
      this.$store.dispatch('authuser/updatePassword', this.passwordChange)
    },

    logoutUser(){
      
      this.$store.dispatch('authuser/logout')
    },

    updateAccount(){
      this.$store.dispatch('authuser/updateUser', this.userData)
    },
    formatDate(value){
       return moment(value).fromNow()
    },
    getAddress() {
      this.$store.dispatch("address/getaddress");
    },
    selectTab(active) {
      this.activeTab = active;
    },
    openModal(open) {
      console.log(open);
      this.open = open;
      this.$bvModal.show("bv-modal-example1");
    },
  },
};
</script>

<style scoped>
.inner_card_content {
  padding: 30px;
}
.icon {
  font-size: 42px;
}

.card {
  
}

.pointer {
  cursor: pointer;
  border-radius: 12px;
  box-shadow: var(--theme-boxshadow);
  border: none;
}
</style>
