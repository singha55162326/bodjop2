  <template>
    <v-navigation-drawer app permanent>
      <router-link to="/" exact>
        <v-img src="@/assets/ptt.jpg" alt="" width="100%" height="100px" />
      </router-link>
      <v-list id="hello" shaped>
        <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <div  v-for="([icon, title,route, roles], index) in menus" :key="index" > 
          <v-list-item  v-if="roles.access.includes(role)"  @click="onClickMenu(route)">
          <div class="d-flex">
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ title }}</v-list-item-title>
            </v-list-item-content>
            </div>
          </v-list-item>
          
          </div>
          
        </v-list-item-group>
       
      </v-list>
    </v-navigation-drawer>
  </template>
  <script>


  export default {
    created(){
      this.role = localStorage.getItem("role");
    },
    mounted (){
      this.selectedMenu = this.menus.findIndex(menu=> menu[2] == this.$route.path)
      
    },
    data() {
      return {
        selectedMenu: 0,
        role: null,
        menus: [
          ["mdi-human-male-male", "ຈັດການຂໍ້ມູນລູກຄ້າ", "/customer", {access: ['superadmin', '']}],
            ["mdi-gas-station", "ຈັດການຂໍ້ມູນນ້ຳມັນ", "/oil", {access: ['superadmin', '']}],
          ["mdi-truck-delivery", "ຈັດການຂໍ້ມູນການຂົນສົ່ງ", "/deliveries", {access: ['superadmin', '']}],
          ["mdi-human-male-male", "ຈັດການຂໍ້ມູນພະນັກງານ", "/employee", {access: ['superadmin', 'employee']}],
          ["mdi-file-document-outline", "ຈັດການເອກະສານຈັດການຂົນສົ່ງ", "/document", {access: ['superadmin', 'employee']}],
             ["mdi-truck-delivery", "ຈັດການຂໍ້ມູນລົດ", "/car", {access: ['superadmin', 'employee']}],
          ["mdi-cart", "ການສັ່ງຊື້", "/order", {access: ['superadmin', 'customer']}],
        
          ["mdi-point-of-sale", "ການຂາຍ", "/sale", {access: ['superadmin', '']}],
          ["mdi-chart-box-outline","ລາຍງານ","/report", {access: ['superadmin', '']}],
        
        ],
          mobAdminItems: [
             { icon: 'fas fa-home', text: 'Dashboard', route: '/home' },
      { icon: 'fas fa-money-check-alt', text: 'Invoices', route: '/invoices' },
      { icon: 'fas fa-dolly', text: 'Partners', route: '/partners' },
      { icon: 'fas fa-exchange-alt', text: 'Items', route: '/items' },
        { icon:'mdi-human-male-male',title: 'ຈັດການຂໍ້ມູນລູກຄ້າ',  linkTo: '/customer'},
        { title: 'Item 2', linkTo: '/#'},
      ],
        
      };
    },
    methods: {
      onClickMenu(link) {
        this.$router.push(link).catch(err=>{
          console.log(err);
        });
      },
    },
    watch: {
      $route(to,) {
        this.selectedMenu = this.menus.findIndex(menu => menu[2] === to.path);
      },
    },
  };
  </script>

  <style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@200;400;500&display=swap');
  #hello{
  font-family: 'Noto Sans Lao', sans-serif;


    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0px 0px 5px #fff;
    display: block;
  }
  </style>
