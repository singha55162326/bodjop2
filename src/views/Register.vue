=
<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width: 400px">
        <v-img src="@/assets/ptt.jpg" alt="" height="200px" />
        <v-card-title style="font-family: Phetsarath ot"> ລົງທະບຽນ </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="account.username"
              :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຊື່ຜຸ້ໃຊ້']"
              label="ຜູ້ໃຊ້"
              prepend-icon="mdi-account"
              color="primary"
            ></v-text-field>
               <v-select class="d-flex mb-6"
               prepend-icon="mdi-account"
          :items="items"
          label="Standard"
          v-model="account.role"
          dense
        ></v-select>
            <v-text-field
              v-model="account.password"
              :rules="passwordRules"
              type="password"
              append-icon="mdi-eye"
              label="Password"
              prepend-icon="mdi-lock"
              color="primary"
            ></v-text-field>
            <v-row class="justify-space-between px-3 pt-5">
              <v-btn style="font-family: Phetsarath ot" @click.prevent="$router.back()">
                ຍົກເລີກ
              </v-btn>
              <v-btn @click="submit" style="font-family: Phetsarath ot" color="primary">
                ຢືນຢັນ
              </v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import firebase from '../firebase';

import api from '../services/api';
export default {
  data() {
    return {
      isShowPassword: true,
      account: {
        email: "",
        password: "",
        role:" "
    
      },
       items: ['superadmin', 'admin', 'Employee', 'customer',],
      passwordRules: [
        (v) => !!v || "ກະລຸນາໃສ່ລະຫັດຜ່ານ",
        (v) => v.length >= 8 || "ລະຫັດຜ່ານຕ້ອງມີຄວາມຍາວສຸດ 8 ໂຕ",
      ],
    };
  },
  methods: {
       async submit() {
   await api.register(this.account)
    },
     }
};
</script>

<style lang="scss">
.sel{
  width: 20px;
  
  margin-left: 50px;
}

</style>
