<template>
    <v-container>

       <v-card   >
  
      <v-form class="mx-auto" id="print"  @submit.prevent="submit" >
        <v-text-field v-model="customer.id"  label="ລະຫັດລົດ" outlined required></v-text-field>
        <v-text-field v-model="customer.carname" :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຊື່ລົດ']" label="ຊື່ລົດ" outlined required></v-text-field>
        <v-text-field v-model="customer.dimention" :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຂະໜາດລົດ']" label="ຂະໜາດລົດ" outlined required></v-text-field>
      
       
     
     
        <br />
        <br />
        <v-row >
        
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
      carname: "",
      dimention: "",
   
 
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
     const {id,carname,dimention,contact,service,phone,employeeid,employeename} = this.customer;
    formData.append("id", id);
     formData.append("carname", carname);
     formData.append("dimention",dimention);
     
  
     await api.addCar(formData)
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
