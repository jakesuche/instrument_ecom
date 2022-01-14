<template>
  <div class="theme-card">
    <ValidationObserver v-slot="{ invalid }">
      <form class="theme-form" @submit.prevent="onSubmit">
        <div class="form-group">
           
          <label for="city">City</label>
          <ValidationProvider rules="required" v-slot="{ errors }" name="city">
            <input
              type="text"
              class="form-control"
              id="city"
              placeholder="Enter city name"
              name="city"
              v-model="form.city"
            />
            <span class="validate-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="password">State</label>
          <ValidationProvider rules="required" v-slot="{ errors }" name="state">
            <input
              type="text"
              class="form-control"
              id="password"
              name="state"
              placeholder="Enter state"
              v-model="form.state"
            />
            <span class="validate-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="address1">Address 1</label>
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="address1"
          >
            <input
              type="text"
              class="form-control"
              id="address1"
              placeholder="Enter  address1"
              name="address1"
              v-model="form.address1"
            />
            <span class="validate-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="address2">Address 2</label>
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="address2"
          >
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Enter address 2"
              name="address2"
               v-model="form.address2"
            />
            <span class="validate-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="address2">Post code</label>
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="postalcode"
          >
            <input
              type="text"
              class="form-control"
              id="postalcode"
              placeholder="Enter postal code"
              name="postalcode"
               v-model="form.postalcode"
            />
            <span class="validate-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <ValidationProvider rules="required" v-slot="{ errors }" name="country">
            <input
              type="text"
              class="form-control"
              id="country"
              placeholder="Enter country name"
              name="country"
              v-model="form.country"
            />
            <span class="validate-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <button type="submit" class="btn btn-solid" :disabled="invalid">
          Add address
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
export default {
  data() {
    return {
        form:{
            city:'',
            state:'',
            address1:'',
            address2:'',
            postalcode:'',
            country:''

        }
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    onSubmit() {
      console.log("lls");
      this.$store.dispatch('address/addAddress', this.form)
    },
    
  },
};
</script>

<style></style>
