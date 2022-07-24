<template>
  
   

    <!--- table section -->

    <v-card id="print-card" class="mama5" >
       <v-card-title class="d-flex justify-center mb-6">
      ຂໍ້ມູນການຂົນສົ່ງ
    </v-card-title>
     <img 
      style="margin-left: 45%"
    width="200px"
      src="@/assets/logo_PTT_3.png"
    ><img>
      <v-data-table  :headers="headers"  :disable-pagination="true" :items="customers">
        <template v-slot:top>
          <v-toolbar  flat color="white">
           
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
        
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/deliverycreate')"
              color="primary"
              dark
              class="col-2 mb-2"
            >
              <v-icon left>add</v-icon>
              <span style=" font-family: 'Noto Sans Lao', sans-serif;">ເພີ່ມຂໍ້ມູນການສົ່ງ</span>
            </v-btn>&nbsp;
            <v-btn class="col-2 mb-2" @click="print">
              <v-icon left>print</v-icon>
              <span style=" font-family: 'Noto Sans Lao', sans-serif;">ປິ້ນ</span>
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            
            <td>{{ item.id }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.dimention }}</td>
            <td>{{ item.orderid }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.companyname }}</td>
            <td>{{ item.service }}</td>
        
            <td>
              <v-icon class="mr-2" @click="editItem(item)">edit</v-icon>
              <span class="ma-1"></span>
              <v-icon @click="deleteItem(item)">delete</v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>

</template>

<script>

import api from '@/services/api';
import axios from 'axios';
export default {
  name: "Customer",
  data() {
    return {
      search: "",
      customers: [],
      headers: [
        {
          text: "ລະຫັດການຂົນສົ່ງ",
          alignItems: "left",
          sortable: false,
          value: "id",
        },
        { text: "ວັນທີສົ່ງ", value: "date" },
        { text: "ຂະຫນາດລົດ", value: "dimention" },
        { text: "ເລກທີຮັບອໍເດີ", value: "orderid" },
        { text: "ປະເພດນ້ຳມັນ", value: "category" },
        { text: "ຊື່ບໍລິສັດ", value: "companyname" },
        { text: "ສະຖານທີໃຫ້ບໍລິການນ້ຳມັນ", value: "service" },
    
        { text: "Action", value: "action" },
      ],
    };
  },
  
  mounted() {
    console.log("delivery is running");
    axios.get("http://localhost:3000/api/v1/transport").then((result) => {
      console.log(JSON.stringify(result.data));
      this.customers = result.data;
    });
   
  },
  methods: {
    editItem(item) {
      this.$router.push({
        name: "deliveryedit",
        params: {
          id: item.id,
        },
      });
    },
    
   
    
    print(){
    window.print();
  }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@200;500&display=swap');
.mamai{
   font-family: 'Noto Sans Lao', sans-serif;
}
.mama5{
  font-family:'Noto Sans Lao', sans-serif; ;
}
 @media print {
    body * {
        overflow: hidden;
        font-size: smaller;
        visibility: hidden;
    }
    #hid{
      display: none;
    }
    #print, #print * {
        visibility: visible;
        border-bottom: none;
    }

    #title {
        visibility: hidden;
    }

    #print {
       
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
    }
}

</style>
