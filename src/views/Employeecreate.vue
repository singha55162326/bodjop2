<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-form @submit.prevent="submit" style="font-family: Phetsarath ot">
        <v-text-field v-model="employee.id"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ລະຫັດພະນັກງານ']" label="ລະຫັດພະນັກງານ" required></v-text-field>
        <v-text-field v-model="employee.employeename"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຊື່ພະນັກງານ']" label="ຊື່ພະນັກງານ" required></v-text-field>
        <v-text-field v-model="employee.address"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ທີຢູ່']" label="ທີ່ຢູ່" required></v-text-field>
        <v-text-field
          v-model="employee.position"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຕຳແໜ່ງ']"
          label="ຕຳແຫນ່ງ"
          required
        ></v-text-field>
        <v-text-field v-model="employee.phone"  :rules="[(v) => !!v || 'ກະລຸນາໃສ່ເບີໂທ']" label="ເບີໂທ" required></v-text-field>

        <br />
        <br />
        <v-row style="font-family: Phetsarath ot">
         
          <v-btn @click="cancel" class="mr-4" color="">ຍົກເລີກ</v-btn>
          <v-btn type="submit" color="success">ບັນທຶກ</v-btn>&nbsp;&nbsp;
          <v-btn @click="$router.push('/printemployee1')">ປິ້ນ</v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/services/api"
export default {
  name: "Customercreate",
  data: () => ({
    employee: {
      id: "",
      employeename: "",
      address: "",
      position: "",
     
    },
  }),
  methods: {
    cancel() {
      this.$router.back();
    },
   async submit() {
     let formData = new FormData();
     const {id,employeename,address,position,phone} = this.employee;
     formData.append("id",id);
     formData.append("employeename", employeename);
     formData.append("address",address);
     formData.append("position",position);
   
     formData.append("phone",phone);
     
     await api.addEmployee(formData)
     this.$router.back();

    },
  },
};
</script>

<style></style>
