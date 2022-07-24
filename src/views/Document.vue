<template >
  <v-container >
    <!--- table section -->

    <v-card style="font-family: 'Noto Sans Lao', sans-serif;">
      <v-data-table :search="search" :headers="headers" :items="customers">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title style="font-family: Phetsarath ot"
              >ເອກະສານຈັດການຂົນສົ່ງ</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              style="font-family: Phetsarath ot"
              label="ຄົ້ນຫາ"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/documentcreate')"
              color="primary"
              dark
              class="col-2 mb-2"
            >
              <v-icon left>add</v-icon>
              <span style="  font-family: 'Noto Sans Lao', sans-serif;">ເພີ່ມເອກະສານ</span>
            </v-btn>&nbsp;
            <v-btn class="col-2 mb-2" @click="$router.push('/printdocument')">
              <v-icon left>print</v-icon>
              <span style="   font-family: 'Noto Sans Lao', sans-serif">ປິ້ນ</span>
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.orderid }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.traid }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.companyid }}</td>
            <td>{{ item.dimention }}</td>
            <td>{{ item.companyname }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.service }}</td>
            <td>{{ item.price }}</td>
            <td>
              <v-icon class="mr-2" @click="editItem(item)">edit</v-icon>
              <span class="ma-1"></span>
              <v-icon @click="deleteItem(item)">delete</v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
       <v-dialog v-model="confirmDeleteDlg" max-width="290">
       <v-card>
        <v-card-title id="haha" >
           ຢືນຢັນການລົບ
        </v-card-title>
        <v-card-text id="haha">
          ທ່ານຕ້ອງການລົບແທ້ບໍ?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn id="haha" @click="confirmDeleteDlg = false">
            ຍົກເລີກ
          </v-btn>
          <v-btn id="haha" color="error" text @click="confirmDelete">
              ຢືນຢັນ
          </v-btn>
        </v-card-actions>
       </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script>
import CustomerCard from "@/components/cards/CustomerCard.vue";
import axios from "axios";
import api from "../services/api";
export default {
  name: "Customer",
  data() {
    return {
      search: "",
      customers: [],
        selectedCustomerId:"",
      confirmDeleteDlg: false,
      headers: [
       
        {text: "ເລກທີ", value: "id", align: "left"},
        { text: "ທີຢູ່", value: "address" },
        { text: "ເລກທີຮັບອໍເດີ", value: "orderid" },
        { text: "ຜູ້ຕິດຕໍ່", value: "contact" },
        { text: "ລະຫັດຂົນສົ່ງ", value: "traid" },
        { text: "ຂໍ້ມູນນ້ຳມັນຂອງວັນທີ", value: "date" },
        { text: "ລະຫັດບໍລິສັດ", value: "companyid" },
        { text: "ຂະຫນາດລົດ", value: "dimention" },
        { text: "ຊື່ບໍລິສັດ", value: "companyname" },
        { text: "ເບີໂທ", value: "phone" },
        { text: "ຜູ້ສະໜອງ", value: "service" },
         { text: "ລາຄາລວມ", value: "price" },
        { text: "Action", value: "action" },
      ],
    };
  },

 async mounted() {
  
    this.loadDocument()
   
  },
  methods: {
     async loadDocument(){
      let result = await api.getDocument()
      this.customers = result.data
    },
    editItem(item) {
      this.$router.push({
        name: "documentedit",
        params: {
          id: item.id,
        },
      });
    },
    print() {
      window.print();
    },
    deleteItem(item) {
      this.selectedCustomerId = item.id
      this.confirmDeleteDlg  = true
    },
    async confirmDelete(){
      await api.deleteDocument(this.selectedCustomerId)
      this.confirmDeleteDlg = false
      this.loadDocument()
    
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@200;500&display=swap');
.mamai{
      font-family: 'Noto Sans Lao', sans-serif;
}
</style>
