<template>
    <v-container>

       <v-card   >
  
      <v-form class="mx-auto" id="print"  @submit.prevent="submit" >
        <v-text-field v-model="customer.id" :rules="[(v) => !!v || 'ກະລຸນາໃສ່ລະຫັດບໍລິສັດ']" label="ເລກທີ່ບໍລິສັດ" outlined required></v-text-field>
        <v-text-field v-model="customer.companyname" :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຊື່ບໍລິສັດ']" label="ຊື່ບໍລິສັດ" outlined required></v-text-field>
        <v-text-field v-model="customer.address" :rules="[(v) => !!v || 'ກະລຸນາໃສ່ທີຢູ່']" label="ທີ່ຢູ່" outlined required></v-text-field>
        <v-text-field outlined
          v-model="customer.contact" :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຜຸ້ທີສາມາດຕິດຕໍ່ໄດ້']"
          label="ຜູ້ທີສາມາດຕິດຕໍ່ໄດ້"
          required
        ></v-text-field>
        <v-text-field v-model="customer.service" :rules="[(v) => !!v || 'ກະລຸນາໃສ່ສະຖານທີບໍລິການນ້ຳມັນ']" label="ສະຖານທີບໍລິການນ້ຳມັນ" outlined required></v-text-field>
        <v-text-field v-model="customer.phone" :rules="[(v) => !!v || 'ກະລຸນາໃສ່ເບີໂທ']" label="ເບີໂທ" outlined required></v-text-field>
     
     
        <br />
        <br />
        <v-row style="font-family: Phetsarath ot">
        
          <v-btn @click="cancel" class="mr-4" color="">ຍົກເລີກ</v-btn>
          <v-btn @click="submit" color="success">ບັນທຶກ</v-btn>&nbsp;
          <v-btn @click="$router.push('/printcustomer1')">ປິ້ນ</v-btn>
        </v-row>
      </v-form>
    </v-card>
    </v-container>
   
   

</template>

<script>
import api from '@/services/api';
export default {
  name: "Customercreate",
  data: () => ({
    customer: {
      id: "",
      companyname: "",
      address: "",
      contact: "",
      service: "",
      phone: "",
 
    },
  }),
 
  methods: {
      print() {
      window.print();
    },
    cancel() {
      this.$router.back();
    },
       showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
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
  
     await api.addCustomer(formData)
     this.$router.back();

    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@200;500&display=swap');

.der{
    font-family: 'Noto Sans Lao', sans-serif;
}



</style>
