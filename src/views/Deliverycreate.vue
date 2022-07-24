  <template>
    <v-container>
      <v-card  class="der"  outlined>
        <v-form class="mx-auto" @submit.prevent="submit" >
          <v-text-field
            v-model="delivery.id"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ລະຫັດການສົ່ງ']"
            label="ລະຫັດການສົ່ງ"
            required
          ></v-text-field>
            <v-menu
          v-model="date"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="delivery.date"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ວິນທີສົ່ງ']"
              label="ວັນທີສົ່ງ"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="delivery.date"
           @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
          
            <v-text-field
            v-model="delivery.dimention"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຂະໜາດລົດ']"
            label="ຂະໜາດລົດ"
            required
          ></v-text-field>
          <v-text-field
            v-model="delivery.orderid"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ເລກທີຮັບອໍເດີ']"
            label="ເລກທີຮັບອໍເດີ"
            required
          ></v-text-field>
          <v-text-field
            v-model="delivery.category"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ປະເພດນຳ້ມັນ']"
            label="ປະເພດນ້ຳມັນ"
            required
          ></v-text-field>
          <v-text-field
            v-model="delivery.companyname"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຊື່ບໍລິສັດ']"
            label="ຊື່ບໍລິສັດ"
            required
          ></v-text-field>
          <v-text-field
            v-model="delivery.service"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ສະຖານທີໃຫ້ບໍລິການນ້ຳມັນ']"
            label="ສະຖານທີໃຫ້ບໍລິການນ້ຳມັນ" 
            required
          ></v-text-field>
          <br />
          <br />
          <v-row style="font-family: Phetsarath ot">
            <v-spacer></v-spacer>
            <v-btn @click="cancel" class="mr-4" color="">ຍົກເລີກ</v-btn>
            <v-btn @click="submit" type="submit" color="success">ບັນທຶກ</v-btn>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </template>

  <script>

  import api from '@/services/api';
  export default {
    name: "Customercreate",
    data: () => ({
      delivery: {
        id: "",
        
        Date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu2: false,
        
        date:"",
        dimention:"",
        orderid:"",
        category: "",
        companyname: "",
        
        service: "",
        
      
      
      
      },
      
    }),
  
    methods: {
      cancel() {
        this.$router.back();
      },
      async submit() {
      let formData = new FormData();
      const {id,date,dimention,orderid,category,companyname,service} = this.delivery;
      formData.append("id",id);
      formData.append("date", date);
      formData.append("dimention", dimention);
      formData.append("orderid",orderid);
      formData.append("category",category);
      formData.append("companyname",companyname);
      formData.append("service",service);
    

      await api.addTransport(formData)
   
      this.$router.back();

      },
    },
  };
  </script>

  <style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@200;500&display=swap');
  .der{
      font-family: 'Noto Sans Lao', sans-serif;
  }
  </style>
