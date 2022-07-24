<template>
  <v-container class="mamai">
   

    <!--- table section -->

    <v-card class="mama5" >
      <v-data-table :search="search" :headers="headers" :items="customers">
        <template v-slot:top>
          <v-toolbar  flat color="white">
            <v-toolbar-title style=" font-family: 'Noto Sans Lao', sans-serif;"
              >ຂໍ້ມູນການສົ່ງ</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              style=" font-family: 'Noto Sans Lao', sans-serif;"
              label="ຄົ້ນຫາ"
              single-line
              hide-details
            ></v-text-field>
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
            <v-btn class="col-2 mb-2" @click="$router.push('/printdelivery')">
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
  </v-container>
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
        { text: "ຜູ້ສະໜອງ", value: "service" },
    
        { text: "Action", value: "action" },
      ],
    };
  },
  
  async mounted() {
  
    this.loadDeliveries()
   
  },
  methods: {
    async loadDeliveries(){
      let result = await api.getTransport()
      this.customers = result.data
    },
     editItem(item) {
      this.$router.push(`/deliveriesedit/${item.id}`)
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
