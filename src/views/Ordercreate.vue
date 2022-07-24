<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-form @submit.prevent="submit" style="font-family: Phetsarath ot">
        <v-text-field
          v-model="customer.id"
          :rules="[(v) => !!v || 'ກະລຸນາໃສ່ເລກທີຮັບອໍເດີ']"
          label="ເລກທີ່ຮັບອໍເດີ"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="customer.service"
          :rules="[(v) => !!v || 'ກະລຸນາໃສ່ສະຖານທີ່ບໍລິການນ້ຳມັນ']"
          label="ສະຖານທີ່ບໍລິການນ້ຳມັນ"
          required
          outlined
        ></v-text-field>
        <v-select
          :items="items"
          item-text="employeename"
          item-value="id"
          label="Outlined style"
          v-model="customer.employeeid"
          outlined
        ></v-select>
        <v-text-field
          v-model="customer.category"
          :rules="[(v) => !!v || 'ກະລຸນາໃສ່ປະເພດນ້ຳມັນ']"
          label="ປະເພດນ້ຳມັນ"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="customer.companyid"
          :rules="[(v) => !!v || 'ກະລຸນາໃສ່ລະຫັດບໍລິສັດ']"
          label="ລະຫັດບໍລິສັດ"
          required
          outlined
        ></v-text-field>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="customer.date"
              :rules="[(v) => !!v || 'ກະລຸນາໃສ່ວັນທີ']"
              label="ວັນທີ"
              prepend-icon="mdi-calendar"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="customer.date" no-title scrollable>
          </v-date-picker>
        </v-menu>
        <v-text-field
          v-model="customer.companyname"
          :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຊື່ບໍລິສັດ']"
          label="ຊື່ບໍລິສັດ"
          required
          outlined
        ></v-text-field>
        <br />
        <br />
        <v-row style="font-family: Phetsarath ot">
          <v-spacer></v-spacer>
          <v-btn @click="cancel" class="mr-4" color="">ຍົກເລີກ</v-btn>
          <v-btn @click="submit" color="success">ບັນທຶກ</v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import api from "../services/api";
import axios from "@/services/httpClient";

export default {
  name: "Customercreate",
  data: () => ({
    items: [],
    customer: {
      id: "",
      name: "",
      address: "",
      contact: "",
      service: "",
      phone: "",
      employeeid: "",
      employeename: "",
      companyname: "",
      category: "",
      date: "",
      companyid: "",
    },
    menu: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  created() {
    this.fetchEmployee();
  },
  methods: {
    cancel() {
      this.$router.back();
    },
    async fetchEmployee() {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/employee"
        );
        this.items = data;
      } catch (error) {
        console.error(error);
      }
    },
    async submit() {
      let formData = new FormData();
      const {
        id,
        service,
        employeeid,
        category,
        companyid,
        date,
        companyname,
      } = this.customer;
      formData.append("id", id);
      formData.append("service", service);
      formData.append("employeeid", employeeid);
      formData.append("category", category);
      formData.append("companyid", companyid);
      formData.append("date", date);
      formData.append("companyname", companyname);
      await api.addOrder(formData);
      // await api.addOrder(this.customer);
      this.$router.back();
    },
  },
};
</script>

<style></style>
