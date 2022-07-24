<template>
  <v-container class="haa">
  
    
    <!--- table section -->

    <v-card style=" font-family: 'Noto Sans Lao', sans-serif;" >
      <v-data-table :search="search" :headers="headers" :items="customers" disable-pagination
      hide-default-footer>
        <template v-slot:top>
          <v-toolbar id="hid" flat color="white">
            <v-toolbar-title style=" font-family: 'Noto Sans Lao', sans-serif;"
              >ຂໍ້ມູນນ້ຳມັນ</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field id="hid"
              v-model="search"
              append-icon="mdi-magnify"
            style=" font-family: 'Noto Sans Lao', sans-serif;"
              label="ຄົ້ນຫາ"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/customercreate')"
              color="primary"
              dark
              class="col-2 mb-2"
            >
              <v-icon left>add</v-icon>
              <span style=" font-family: 'Noto Sans Lao', sans-serif;" >ເພີ່ມລູກຄ້າ</span>
            </v-btn>&nbsp;
            <v-btn class="col-2 mb-2" @click="$router.push('/printcustomer')">
              <v-icon left>print</v-icon>
              <span style=" font-family: 'Noto Sans Lao', sans-serif;">ປິ້ນ</span>
            </v-btn>
          </v-toolbar>
        </template>
          <div></div>
        <template  v-slot:item="{ item }">
          <tr id="print" >
            <td >{{ item.id }}</td>
            <td>{{ item.oil_name }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.qty }}</td>
          
           
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
import api from "@/services/api"

export default {
  name: "Customer",
  data() {
    return {
      search: "",
      selectedCustomerId:"",
      confirmDeleteDlg: false,
      customers: [],
      headers: [
        {
          text: "ລະຫັດນ້ຳມັນ",
          alignItems: "left",
          sortable: false,
          value: "id",
        },
        { text: "ຊື່ນ້ຳມັນ", value: "oil_name" },
        { text: "ປະເພດນ້ຳມັນ", value: "category" },
        { text: "ຈຳນວນ", value: "qty" },
    
   
        { text: "Action", value: "action" },
      ],
    };
  },
  components: {
  
  },
  async mounted() {
  
    this.loadOil()
   
  },
  
  
  methods: {
    async loadOil(){
      let result = await api.getOil()
      this.customers = result.data
    },
    editItem(item) {
      this.$router.push(`/CustomerEdit/${item.id}`)
    },
    deleteItem(item) {
      this.selectedCustomerId = item.id
      this.confirmDeleteDlg  = true
    },
    async confirmDelete(){
      await api.deleteCustomer(this.selectedCustomerId)
      this.confirmDeleteDlg = false
      this.loadCustomer()
    
    },
  print(){
    window.print();
  },
     showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@200;500&display=swap');
  .haa {
   font-family: 'Noto Sans Lao', sans-serif;
  }

#haha {
   font-family: 'Noto Sans Lao', sans-serif;
}

 #print{
  font-family: 'Noto Sans Lao', sans-serif;
 }

  
</style>
