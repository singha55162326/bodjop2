<template>
  <v-card id="print">
    <v-card-title>
      <span class="headline">ຂໍ້ມູນລາຄາ</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-text-field
              v-model="search"
              label="ຄົ້ນຫາ"
              prepend-icon="mdi-magnify"
              color="primary"
            ></v-text-field>
          </v-col>
          <v-btn @click="print">
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
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn
                  text
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
            text: "ວັນທີ",
            align: "left",
            sortable: false,
            value: "id",
            },
            {
            text: "ລາຄາ",
            align: "left",
            sortable: false,
            value: "companyname",
            },
            {
            text: "ພາສີ",
            align: "left",
            sortable: false,
            value: "address",
            },
            {
            text: "action",
            align: "left",
            sortable: false,
            value: "action",
            },
        ],
        };
    },
    methods: {
        getCustomers() {
        axios.get("/api/customer").then((response) => {
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

</style>