<template>

  <v-card id="print" >
    <v-card-title  class="d-flex justify-center mb-6">
      ຂໍ້ມູນລູກຄ້າ
    </v-card-title>
    <img 
      style="margin-left: 45%"
    width="200px"
      src="@/assets/logo_PTT_3.png"
    ><img>
    <div class="d-flex justify-start mb-6">
      <v-btn
        class="de"
        id="printPageButton"
        color="green accent-3"
        @click="print"
      >
        <v-icon>mdi-printer</v-icon>
        <span style="font-family: Phetsarath ot">ປິ້ນ</span>

      </v-btn>
    </div>
    <v-card-text>
      <v-row>
        <v-spacer>
          <v-data-table   
      disable-pagination
      hide-default-footer :headers="headers" :items="customers" >
          </v-data-table>
        </v-spacer>
      </v-row>
    </v-card-text>
  </v-card>
  
</template>

<script>
import axios from "axios";
export default {
  name: "Customer",
  data() {
    return {
      imgUrl: require("@/assets/logo_PTT_3.png"),
      search: "",
      customers: [],
      headers: [
        {
          text: "ລະຫັດ",
          align: "left",
          sortable: false,
          value: "id",
        },
        {
          text: "ຊື່ບໍລິສັດ",
          align: "left",
          sortable: false,
          value: "companyname",
        },
        {
          text: "ທີ່ຢູ່",
          align: "left",
          sortable: false,
          value: "address",
        },
        {
          text: "ຜູ້ຕິດຕໍ່",

          sortable: false,
          value: "contact",
        },
        {
          text: "ສະຖານທີບໍລິການນ້ຳມັນ",

          sortable: false,
          value: "service",
        },
        {
          text: "ເບີໂທ",
          align: "left",
          sortable: false,
          value: "phone",
        },
        {
          text: "ລະຫັດພະນັກງານ",
          align: "left",
          sortable: false,
          value: "employeeid",
        },
        {
          text: "ຊື່ພະນັກງານ",
          align: "left",
          sortable: false,
          value: "employeename",
        },
      ],
    };
  },
  methods: {
    getCustomers() {
      axios.get("http://localhost:3000/api/v1/customer").then((response) => {
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


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@200;500&display=swap');
  $red: #ff5f6d;
$yellow: #ffc371;
$green: #81cf71;
$white: #faebd7;
$grey:  darken($white, 10%);
.invoice{
  background: linear-gradient(to right, $red, $yellow);
}

  @media print {
      body * {
         overflow: hidden !important;
        visibility:hidden;
        font-size: 100%;
        
      }
    
      #print{
      max-width: 100%;
    border: solid 1px #ccc;
      background: linear-gradient(to right, $red, $yellow);
      visibility: visible;
  
    padding: 1em;
    margin: 2em auto;

    
      }
       #printPageButton {
    display: none;
  
  }
    }
    @page {
  size: 100%
}
  </style>

