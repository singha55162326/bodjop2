<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-form @submit.prevent="submit" style="font-family: Phetsarath ot">
        <v-text-field v-model="customer.id" label="ເລກທີ່ບໍລິສັດ" required></v-text-field>
        <v-text-field v-model="customer.companyname" label="ຊື່ບໍລິສັດ" required></v-text-field>
        <v-text-field v-model="customer.address" label="ທີ່ຢູ່" required></v-text-field>
        <v-text-field
          v-model="customer.contact"
          label="ຜູ້ຕິດຕໍ່"
          required
        ></v-text-field>
        <v-text-field v-model="customer.service" label="ບໍລິການ" required></v-text-field>
        <v-text-field v-model="customer.phone" label="ເບີໂທ" required></v-text-field>
       
        <br />
        <br />
        <v-row style="font-family: Phetsarath ot">
          <v-spacer></v-spacer>
          <v-btn @click="cancel" class="mr-4" color="">ຍົກເລີກ</v-btn>
          <v-btn @click="submit" color="success">ບັນທຶກ</v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import api from '@/services/api';
export default {
  name: "CustomerEdit",
  data: () => ({
    customer: {
      id: "",
      companyname: "",
      address: "",
      contact: "",
      service: "",
      phone: "",
      employeeid: "",
      employeename: "",
    },
  }),

    async mounted() {
      let result = await api.getCustomerById(this.$route.params.id)
      this.customer = result.data
    },
 
  methods: {
    cancel() {
      this.$router.back();
    },
    async submit() {
     let formData = new FormData();
     const {id,companyname,address,contact,service,phone,employeeid,employeename} = this.customer;
     formData.append("id",id);
     formData.append("companyname", companyname);
     formData.append("address",address);
     formData.append("contact",contact);
     formData.append("service",service);
     formData.append("phone",phone);
   
     await api.updateCustomer(formData)
     this.$router.back();

    },
  },
};
</script>

<style></style>
