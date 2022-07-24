<template>
  <v-container class="mamai">
 

    <!--- table section -->

    <v-card style="font-family: 'Noto Sans Lao', sans-serif;">
      <v-data-table :search="search" :headers="headers"     disable-pagination
      hide-default-footer :items="customers">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title style="font-family: 'Noto Sans Lao', sans-serif;"
              >ຂໍ້ມູນການສັ່ງຊື້ຈາກລູກຄ້າ</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              style="font-family: 'Noto Sans Lao', sans-serif;"
              label="ຄົ້ນຫາ"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/ordercreate')"
              color="primary"
              dark
              class="col-2 mb-2"
            >
              <v-icon left>add</v-icon>
              <span style="font-family: 'Noto Sans Lao', sans-serif;">ເພີ່ມການສັ່ງຊື້</span>
            </v-btn>&nbsp;
            <v-btn class="col-2 mb-2" @click="$router.push('/printorder')">
              <v-icon left>print</v-icon>
              <span style="font-family: 'Noto Sans Lao', sans-serif;">ປິ້ນ</span>
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.service }}</td>
            <td>{{ item.employeeid }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.companyid }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.companyname }}</td>
   
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
        {
          text: "ເລກທີຮັບອໍເດີ",
          alignItems: "left",
          sortable: false,
          value: "id",
        },
        { text: "ສະຖານທີບໍລິການນ້ຳມັນ", value: "service" },
        { text: "ລະຫັດພະນັກງານ", value: "employeeid" },
        { text: "ປະເພດນ້ຳມັນ", value: "category" },
        { text: "ລະຫັດບໍລິສັດ", value: "companyid" },
        { text: "ວັນທີ", value: "date" },
        { text: "ຊື່ບໍລິສັດ", value: "companyname" },
        
        { text: "Action", value: "action" },
      ],
    };
  },
  components: {
   
  },
 async mounted() {
  
    this.loadOrder()
   
  },
  
  methods: {
    async loadOrder(){
      let result = await api.getOrder()
      this.customers = result.data
    },
    editItem(item) {
      this.$router.push({
        name: "orderedit",
        params: {
          id: item.id,
        },
      });
    },
   deleteItem(item) {
      this.selectedCustomerId = item.id
      this.confirmDeleteDlg  = true
    },
    async confirmDelete(){
      await api.deleteOrder(this.selectedCustomerId)
      this.confirmDeleteDlg = false
      this.loadOrder()
    
    },
   
  },
};
</script>

<style>
.mamai{
   font-family: phetsarath ot;
}
</style>
