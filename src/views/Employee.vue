<template>
  <v-container class="mamai">
    

    <!--- table section -->

    <v-card style="font-family: 'Noto Sans Lao', sans-serif;">
      <v-data-table :search="search" :headers="headers" :items="employee">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title style=" font-family: 'Noto Sans Lao', sans-serif;"
              >ຂໍ້ມູນພະນັກງານ</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              style="  font-family: 'Noto Sans Lao', sans-serif;"
              label="ຄົ້ນຫາ"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="
              $router
                .push({ name: 'employeecreate' })
                .catch(err => console.log(err))
              "
              color="primary"
              dark
              class="col-2 mb-2"
            >
              <v-icon left>add</v-icon>
              <span style="  font-family: 'Noto Sans Lao', sans-serif;">ເພີ່ມພະນັກງານ</span>
            </v-btn>&nbsp;
            <v-btn class="col-2 mb-2" @click="$router.push('/printemployee')">
              <v-icon left>print</v-icon>
              <span style="  font-family: 'Noto Sans Lao', sans-serif;">ປິ້ນ</span>
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.employeename }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.position }}</td>
            <td>{{ item.phone }}</td>
          
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
      selectedEmployeeId:"",
      confirmDeleteDlg: false,
      employee: [],
      headers: [
        {
          text: "ລະຫັດພະນັກງານ",
          alignItems: "left",
          sortable: false,
          value: "id",
        },
        { text: "ຊື່ພະນັກງານ", value: "employeename" },
        { text: "ທີ່ຢຸ່", value: "address" },
        { text: "ຕຳແຫນ່ງ", value: "position" },
        { text: "ເບີໂທ", value: "phone" },
        { text: "Action", value: "action" },
      ],
    };
  },
  components: {
   
  },
  async mounted() {
  
    this.loadEmployee()
   
  },
  methods: {
      async loadEmployee(){
      let result = await api.getEmployee()
      this.employee = result.data
    },
    editItem(item) {
      this.$router.push({
        name: "empedit",
        params: {
          id: item.id,
        },
      });
    },
     deleteItem(item) {
      this.selectedEmployeeId = item.id
      this.confirmDeleteDlg  = true
    },
    async confirmDelete(){
      await api.deleteEmployee(this.selectedEmployeeId)
      this.confirmDeleteDlg = false
      this.loadEmployee()
    
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
