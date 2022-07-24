<template>
  <v-container class="mamai">
    <!--- table section -->

    <v-card>
      <v-data-table :search="search" :headers="headers" :items="customers">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title style="font-family: Phetsarath ot"
              >ຂໍ້ມູນລາຄານ້ຳມັນ</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              style="font-family: Phetsarath ot"
              label="ຄົ້ນຫາ"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="
                $router
                  .push({ name: 'pricecreate' })
                  .catch((err) => console.log(err))
              "
              color="primary"
              dark
              class="col-2 mb-2"
            >
              <v-icon left>add</v-icon>
              <span style="font-family: Phetsarath ot"
                >ເພີ່ມລາຄານຳມັນ</span
              > </v-btn
            >&nbsp;


             <!--- table section <v-btn class="col-2 mb-2" @click="$router.push('/printprice')">
              <v-icon left>print</v-icon>
              <span style="font-family: Phetsarath ot">ປິ້ນ</span>
            </v-btn>-->
          </v-toolbar>
        </template>

        <template v-slot:item="{ item }">
          <tr>
             <td>{{ item.id }}</td> 
             <td>{{ item.category}}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.vat }}</td>

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
import CustomerCard from "@/components/cards/CustomerCard.vue";
import axios from "axios";
export default {
  name: "Customer",
  data() {
    return {
      search: "",
      customers: [],
      headers: [
        {
          text: "ລະຫັດ",
          alignItems: "left",
          sortable: false,
          value: "id",
        },
        { text: "ປະເພດນ້ຳມັນ", value: "category" },
        { text: "ລາຄາ", value: "price" },
        { text: "ພາສີ", value: "vat" },
        { text: "Action", value: "action" },
      ],
    };
  },
  components: {},
  mounted() {
   
    axios.get("http://localhost:3000/api/v1/price").then((result) => {
      console.log(JSON.stringify(result.data));
      this.customers = result.data;
    });
  },
  methods: {
    editItem(item) {
      this.$router.push({
        name: "priceEdit",
        params: {
          id: item.id,
        },
      });
    },
    deleteItem(item) {
      axios
        .delete("http://localhost:3000/api/v2/customer/" + item.id)
        .then((result) => {
          console.log(result);
          this.customers = this.customers.filter((i) => i.id !== item.id);
        });
    },
  },
};
</script>

<style>
.mamai {
  font-family: phetsarath ot;
}
</style>
