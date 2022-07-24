<template>
  <v-container class="lrng">
    <v-row class="justify-center">
      <v-card style="width: 400px">
        <v-img src="@/assets/ptt.jpg" alt="" height="200px" />
        <v-card-title style="font-family: Phetsarath ot">
          ເຂົ້າສູ່ລະບົບ
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="account.username"
              :rules="[(v) => !!v || 'ກະລຸນາໃສ່ຊື່ຜຸ້ໃຊ້']"
              label="Username"
              prepend-icon="mdi-account"
              color="primary"
            ></v-text-field>
            <v-text-field
              v-model="account.password"
              :rules="[(v) => !!v || 'ກະລຸນາໃສ່ລະຫັດຜ່ານ']"
              type="password"
              append-icon="mdi-eye"
              label="Password"
              prepend-icon="mdi-lock"
              color="primary"
            ></v-text-field>
            <v-row class="justify-space-between px-3 pt-5">
              <v-btn
                style="font-family: Phetsarath ot"
                @click.prevent="$router.push('/register')"
              >
                ລົງທະບຽນ
              </v-btn>
              <v-btn
                style="font-family: Phetsarath ot"
                color="primary"
              @click="submit"
              >
                ເຂົ້າສູ່ລະບົບ
              </v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/services/api"
export default {
  mounted (){
    if (api.isLoggedIn()){
      this.$router.push("/customer")
    }
  },
  data() {
    return {
      isShowPassword: true,
      account: {
        username: "",
        password: "",
      },
    };
  },

  
 methods: {
    async submit() {
   await this.$store.dispatch({
    type:"doLogin",
    username: this.account.username,
    password: this.account.password
   })
    
    },
  },


  
};
</script>

<style>

 
</style>
