<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-form @submit.prevent="submit" style="font-family: Phetsarath ot">
        <v-text-field v-model="employee.id" label="ລະຫັດພະນັກງານ" required></v-text-field>
        <v-text-field v-model="employee.employeename" label="ຊື່ພະນັກງານ" required></v-text-field>
        <v-text-field v-model="employee.address" label="ທີ່ຢູ່" required></v-text-field>
        <v-text-field
          v-model="employee.position"
          label="ຕຳແຫນ່ງ"
          required
        ></v-text-field>
        <v-text-field v-model="employee.phone" label="ເບີໂທ" required></v-text-field>

        <br />
        <br />
        <v-row style="font-family: Phetsarath ot">
          <v-spacer></v-spacer>
          <v-btn @click="cancel" class="mr-4" color="">ຍົກເລີກ</v-btn>
          <v-btn type="submit" color="success">ບັນທຶກ</v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/services/api"
export default {
  name: "employee",
  data: () => ({
    employee: {
      id: "",
      employeename: "",
      address: "",
      position: "",
     
    },
  }),
   async mounted() {
      let result = await api.getEmployeeById(this.$route.params.id)
       this.employee = result.data
    },
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
     
     await api.updateEmployee(formData)
     this.$router.back();

    },
  },
};
</script>

<style></style>
