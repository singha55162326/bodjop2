<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-form @submit.prevent="submit" style="font-family: Phetsarath ot">
        <v-text-field
          v-model="customer.id"
          label="ເລກທີ່ຮັບອໍເດີ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.service"
          label="ສະຖານທີ່ບໍລິການນ້ຳມັນ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.employeeid"
          label="ລະຫັດພະນັກງານ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.category"
          label="ປະເພດນ້ຳມັນ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.companyid"
          label="ລະຫັດບໍລິສັດ"
          required
        ></v-text-field>
        <v-menu
         
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="customer.date"
              label="ວັນທີ"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="customer.date" no-title scrollable>
          
          </v-date-picker>
        </v-menu>
        <v-text-field
          v-model="customer.companyname"
          label="ຊື່ບໍລິສັດ"
          required
        ></v-text-field>
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
import api from '../services/api';
export default {
  name: "Customercreate",
  data: () => ({
    customer: {
      id: "",
      name: "",
      address: "",
      contact: "",
      service: "",
      phone: "",
      employeeid: "",
      employeename: "",
      companyname:"",
      category:"",
      date:"",
      companyid:"",
  
      Date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
    },
  }),
   async mounted() {
      let result = await api.getOrderById(this.$route.params.id)
       this.customer = result.data
    },
  methods: {
    cancel() {
      this.$router.back();
    },
    async submit() {
     let formData = new FormData();
     const {id,service,employeeid,category,companyid,date,companyname} = this.customer;
     formData.append("id",id);
      formData.append("service",service);
     formData.append("employeeid", employeeid);
     formData.append("category",category);
     formData.append("companyid",companyid);
   
     formData.append("date",date);
        formData.append("companyname",companyname);
     await api.addOrder(formData)
     this.$router.back();

    },
  },
};
</script>

<style></style>
