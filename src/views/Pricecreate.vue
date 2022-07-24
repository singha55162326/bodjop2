<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-form @submit.prevent="submit" style="font-family: Phetsarath ot">
       <v-text-field
          v-model="customer.id"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ເລກທີຮັບອໍເດີ']"
          label="ເລກທີ່ຮັບອໍເດີ"
          required
        ></v-text-field>
         <v-text-field
          v-model="customer.name"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ປະເພດນ້ຳມັນ']"
          label="ປະເພດນ້ຳມັນ"
          required
        ></v-text-field>
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
              v-model="date"
              label="ວັນທີ"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
        <v-text-field v-model="price" label="ລາຄາ" required></v-text-field>
        <v-text-field v-model="tax" label="ພາສີ" required></v-text-field>
        <v-text-field v-model="total" label="ລາຄາລວມ" required></v-text-field>
        <br />
        <br />
        <v-row style="font-family: Phetsarath ot">
          <v-spacer></v-spacer>
          <v-btn @click="cancel" class="mr-4" color="">ຍົກເລີກ</v-btn>
          <v-btn type="submit" color="success">ບັນທຶກ</v-btn>
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
    price: null,
    tax: null,
    total: 0,
    customer: {

      id: "",
      name: "",
    
         Date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
    },
  }),
  watch: {
    tax(value){
      this.total =parseFloat( this.price || 0) + parseFloat(value || 0)
    },
    price(value){
      this.total = parseFloat(value || 0) + parseFloat(this.tax || 0)
    }
  },
  methods: {
    cancel() {
      this.$router.back();
    },
    async submit() {
     let formData = new FormData();
     const {id,name,price,tax,total} = this.customer;
     formData.append("id",id);
     formData.append("name", name);
     formData.append("address",price);
     formData.append("position",tax);
   
     formData.append("phone",total);
     
     await api.addPrice(formData)
     this.$router.back();

    },
  },
};
</script>

<style></style>
