<template>
  <v-card class="orientation" id="print">
    <v-card-title  class="d-flex justify-center mb-6">
    ຂໍ້ມູນພະນັກງານ
    </v-card-title>
     <img 
      style="margin-left: 45%"
    width="200px"
      src="@/assets/logo_PTT_3.png"
    ><img>
    <v-card-text>
      <v-container>
        <v-row>
          <v-btn id="printPageButton3" color="green accent-3" @click="print">
            <v-icon>mdi-printer</v-icon>
            <span style="font-family: Phetsarath ot">ປິນ</span>
          </v-btn>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-data-table
              :headers="headers"
              :items="customers"
              :search="search"
                disable-pagination
                hide-default-footer
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn
                
                  @click="editItem(item)"
                  class="mx-1"
                  color="primary"
                >
                  ແກ້ໄຂ
                </v-btn>
                <v-btn
                  text
                  @click="deleteItem(item)"
                  class="mx-1"
                  color="error"
                >
                  ລົບ
                </v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
    name: "Customer",
    data() {
        return {
        search: "",
        customers: [],
        headers: [
            {
            text: "ລະຫັດພະນັກງານ",
            align: "left",
            sortable: false,
            value: "id",
            },
            {
            text: "ຊື່ພະນັກງານ",
            align: "left",
            sortable: false,
            value: "employeename",
            },
            {
            text: "ທີ່ຢູ່",
            align: "left",
            sortable: false,
            value: "address",
            },
            {
            text: "ຕຳແຫນ່ງ",
         
            sortable: false,
            value: "position",
            },
           
            {
            text: "ເບີໂທ",
            align: "left",
            sortable: false,
            value: "phone",
            },
           
           
        ],
        };
    },
    methods: {
        getCustomers() {
        axios.get("http://localhost:3000/api/v1/employee").then((response) => {
            this.customers = response.data;
        });
        },
        print() {
        window.print();
        },
        editItem(item) {
        this.$router.push({ name: "EditCustomer", params: { id: item.id } });
        },
        deleteItem(item) {
        const dialog = this.$dialog.confirm("ທ່ານຕ້ອງການລົບຂໍ້ມູນນີ້ບໍ່?");
        dialog.then((dialog) => {
            if (dialog) {
            axios.delete("/api/customer/" + item.id).then((response) => {
                this.getCustomers();
            });
            }
        });
        },
    },
    created() {
        this.getCustomers();
    },
};
</script>



<style>
@font-face {
  font-family: "phetsarath ot";
  src: local("phetthai-regular"),
    url("/fonts/phetsarathot.ttf") format("truetype");
 
}
#print{
  font-family: phetsarath ot;
}

@media print {
  #printPageButton3 {
    display: none;
  
  }
   .ortientation {
    width: 100% /* print width */
  }
}
</style>