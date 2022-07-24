  <template>
    <v-container class="haa">
    
      
      <!--- table section -->

      <v-card style=" font-family: 'Noto Sans Lao', sans-serif;" >
        <v-data-table :search="search" :headers="headers" :items="customers" disable-pagination
        hide-default-footer>
          <template v-slot:top>
            <v-toolbar id="hid" flat color="white">
              <v-toolbar-title style=" font-family: 'Noto Sans Lao', sans-serif;"
                >ລາຍງານຂໍ້ມູນນຳ້ມັນ</v-toolbar-title
              >
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
           
              <v-spacer></v-spacer>
            
              
      <download-excel :data="customers">
          <v-btn  >
            ລາຍງານຂໍ້ມູນນ້ຳມັນ
          </v-btn>
  
  </download-excel>
          
            </v-toolbar>
          </template>
            <div></div>
          <template  v-slot:item="{ item }">
            <tr id="print" >
              <td >{{ item.id }}</td>
              <td>{{ item.companyname }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.contact }}</td>
              <td>{{ item.service }}</td>
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

      <v-card style="margin-top:50px">
        <v-data-table :search="search" :headers="header2" :items="order">
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title style="font-family: 'Noto Sans Lao', sans-serif;"
                >ຂໍ້ມູນການສັ່ງຊື້ຈາກລູກຄ້າ</v-toolbar-title
              >
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
            
              <v-spacer></v-spacer>
                    
      <download-excel :data="order">
          <v-btn  >
            ລາຍງານຂໍ້ມູນການສັ່ງຊື້ນ້ຳມັນ
          </v-btn>
  
  </download-excel>
            
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
      </v-card>
    </v-container>
  </template>


  <script>
  import CustomerCard from "@/components/cards/CustomerCard.vue";
  import api from "@/services/api"
    import XLSX from 'xlsx/xlsx';

  import Vue from "vue";
  import JsonExcel from "vue-json-excel";

  Vue.component("downloadExcel", JsonExcel);

  export default {
    name: "Customer",
    data() {
      return {
        search: "",
        selectedCustomerId:"",
        confirmDeleteDlg: false,
        customers: [],
        order:[],
        headers: [
          {
            text: "ລະຫັດບໍລິສັດ",
            alignItems: "left",
            sortable: false,
            value: "id",
          },
          { text: "ຊື່ບໍລິສັດ", value: "companyname" },
          { text: "ທີ່ຢູ່", value: "address" },
          { text: "ຜູ້ຕິດຕໍ່", value: "contact" },
          { text: "ສະຖານທີໃຫ້ບໍລິການນ້ຳມັນ", value: "service" },
          { text: "ເບີໂທ", value: "phone" },
    
          { text: "Action", value: "action" },
        ],
         header2: [
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
    
      this.loadCustomer(),
      this.loadOrder()
    
    },
    
    
    methods: {
      
              getNestedValue(object, string) {
                  string = string.replace(/\[(\w+)\]/g, '.$1');
                  string = string.replace(/^\./, '');
                  let a = string.split('.');
                  for (let i = 0, n = a.length; i < n; ++i) {
                    let k = a[i];
                    if (k in object) {
                      object = object[k];
                    } else {
                      return;
                    }
                  }
                  return object;
              },
      async loadCustomer(){
        let result = await api.getCustomer()
        this.customers = result.data
      },
      async loadOrder(){
        let result = await api.getOrder()
        this.order = result.data
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
    }
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
