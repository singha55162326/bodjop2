<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-form @submit.prevent="submit" style="font-family: Phetsarath ot">
        <v-text-field v-model="customer.id" label="ເລກທີຂອງເອກະສານ" required></v-text-field>
        <v-text-field v-model="customer.address" label="ທີ່ຢູ່" required></v-text-field>
        <v-text-field v-model="customer.orderid" label="ເລກທີຮັບອໍເດີ" required></v-text-field>
        <v-text-field
          v-model="customer.contact"
          label="ຜູ້ທີສາມາດຕິດຕໍ່ໄດ້"
          required
        ></v-text-field>
        <v-text-field v-model="customer.traid" label="ລະຫັດຂົນສົ່ງ" required></v-text-field>
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="customer.date"
              label="ຂໍ້ມູນນ້ຳມັນຂອງວັນທີ"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="customer.date" @input="menu2 = false"></v-date-picker>
        </v-menu>
        <v-text-field
          v-model="customer.companyid"
          label="ລະຫັດບໍລິສັດ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.dimention"
          label="ຂະໜາດລົດ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.companyname"
          label="ຊື່ບໍລິສັດ"
          required
        ></v-text-field>
           <v-text-field
          v-model="customer.phone"
          label="ເບີໂທ"
          required
        ></v-text-field>
         <v-text-field
          v-model="customer.service"
          label="ສະຖານທີບໍລິການນ້ຳມັນ"
          required
        ></v-text-field>
         <v-text-field
          v-model="customer.price"
          label="ລາຄາລວມ"
          required
        ></v-text-field>
        <br />
        <br />
        <v-row style="font-family: Phetsarath ot">
          <v-spacer></v-spacer>
          <v-btn @click="cancel" class="mr-4" color="">ຍົກເລີກ</v-btn>
          <v-btn @click="submit"  color="success">ບັນທຶກ</v-btn>
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
      address:"",
      orderid:"",
      contact:"",
      traid:"",
      date:"",
      dimention:"",
      companyname: "",
      phone: "",
      service: "",
      price: "",
    

      Date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
    },

  }),
    async mounted() {
      let result = await api.getDocumentById(this.$route.params.id)
      this.customer = result.data
    },
  methods: {
    cancel() {
      this.$router.back();
    },
    async submit() {
     let formData = new FormData();
     const {id,address,orderid,contact,traid,date,companyid,dimention,companyname,phone,service,price,employeename3} = this.customer;
     formData.append("id",id);
     formData.append("address",address);
     formData.append("orderid",orderid);
     formData.append("contact",contact);
     formData.append("traid", traid);
     formData.append("date", date);
     formData.append("companyid", companyid);
     formData.append("dimention", dimention);
     formData.append("companyname", companyname);
     formData.append("phone", phone);
     formData.append("service",service);
     formData.append("price",price);
   
     formData.append("phone",phone);
     
     await api.updateDocument(formData)
     this.$router.back();

    },
  },
};
</script>

<style></style>
