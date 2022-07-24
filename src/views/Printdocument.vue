<template>
  <v-card   id="print">
    <v-card-title  class="d-flex justify-center mb-6" >
        ເອກະສານຈັດສົ່ງ
    </v-card-title>
     <img 
      style="margin-left: 45%"
    width="200px"
      src="@/assets/logo_PTT_3.png"
    ><img>
    <v-card-text>
      <v-container>
        <v-row>
          
          <v-btn color="green accent-3" id="printPageButton2" @click="print">
            <v-icon>mdi-printer</v-icon>
            <span style="font-family: Phetsarath ot">ປິນ</span>
          </v-btn>
        </v-row>
        <v-row>
            <v-spacer>
               <v-data-table class="elevation"
              :headers="headers"
              :items="customers"
             
               disable-pagination
              hide-default-footer
            >
            </v-data-table>
            </v-spacer>
           
        
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
            text: "ເລກທີ",
            align: "left",
            sortable: false,
            value: "id",
            },
            {
            text: "ທີຢູ່",
            align: "left",
            sortable: false,
            value: "address",
            },
            {
            text: "ເລກຮັບອໍເດີ",
            align: "left",
            sortable: false,
            value: "orderid",
            },
            {
            text: "ຜູ້ຕິດຕໍ່",
         
            sortable: false,
            value: "contact",
            },
            {
            text: "ລະຫັດຂົນສົ່ງ",
          
            sortable: false,
            value: "traid",
            },
            {
            text: "ຂະໜາດລົດ",
            align: "left",
            sortable: false,
            value: "dimention",
            },
            {
            text: "ຊື່ບໍລິສັດ",
            align: "left",
            sortable: false,
            value: "companyname",
            },
             {
            text: "ເບີໂທ",
            align: "left",
            sortable: false,
            value: "phone",
            },
             {
            text: "ສະຖານທີໃຫ້ບໍລິການນ້ຳມັນ",
            align: "left",
            sortable: false,
            value: "service",
            },
             {
            text: "ລາຄາລວມ",
            align: "left",
            sortable: false,
            value: "price",
            },
           
        ],
        };
    },
    methods: {
        getCustomers() {
        axios.get("http://localhost:3000/api/v1/document").then((response) => {
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

@media print {
  #printPageButton2 {
    display: none;
  
  }
  #print{
     overflow: auto;
     height: 1500px;
  }
}
</style>