  <template>
  
  <v-card class="invoice"  style="margin-top:50px" id="print">
  <h1>ບັດສະມາຊິກ</h1>
    <img 
        style="margin-left: 45%"
      width="200px"
        src="@/assets/logo_PTT_3.png"
      ><img>
  <div v-for="(itemRow, i) in itemRows" :key="i">
        <v-row align="center">
          <v-col cols="12" sm="5" md="5">
            <label>ລະຫັດບໍລິສັດ</label>
            <v-text-field
              label="Item"
              
              v-model="item1"
              solo
            ></v-text-field>
              <label>ຊື່ບໍລິສັດ</label>
            <v-text-field
              label="Item"
              
              v-model="item2"
              solo
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="2">
            <label>ທີຢູ່</label>
            
            <v-text-field
              label="Price"
              placeholder="Price"
              v-model="price1"
              solo
            ></v-text-field>
            <label>ຜູ້ຕິດຕໍ່</label>
               <v-text-field
              label="Price"
              placeholder="Price"
              v-model="price2"
              solo
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="2">
            <label>ຜູ້ສະໜອງ</label>
            <v-text-field
              label="Qty"
              placeholder="Qty"
              v-model="price3"
              @blur="calcTotal(i)"
              solo
            ></v-text-field>
            <label>ເບີໂທ</label>
              <v-text-field
              label="Qty"
              placeholder="Qty"
              v-model="price4"
              @blur="calcTotal(i)"
              solo
            ></v-text-field>
            
            
          </v-col>
         
          <v-col cols="12" sm="1" md="1">
            <v-icon medium color="red darken-1" @click="removeItem(i)"
              >mdi-delete</v-icon
            >
          </v-col>
        </v-row>
      </div>
      
      <v-btn @click="addItem" class="primary">+ Items</v-btn>
          <v-btn id @click="print" class="primary">+ print</v-btn>
  </v-card>
      
    
    
    
  </template>

  <script>
  export default {
    components: {},
    created() {
      this.addItem();
    },
    data: () => ({
      itemRows: [],
      item1: [],
      item2: [],
      qty: [],
      price1: [],
       price2: [],
        price3: [],
         price4: [],
      total: [],
      gtotal: '',
    }),
    methods: {
      calcTotal(i) {
          let price = this.price[i];
          let qty = this.qty[i];
          let total = price * qty;
          this.total[i] = parseInt(total);
          this.gtotal = parseInt(total);


          console.log("Inside Calc Total: " + this.total[i]);
      },
      addItem() {
        this.itemRows.push({
          item: "",
          qty: "",
          price: "",
          total: "",
        });
      },
      removeItem(index) {
        this.itemRows.splice(index, 1);
      },
      print(){
        
      window.print();
      }
      
    },
  };
  </script>

  <style lang="scss">
  $red: #ff5f6d;
$yellow: #ffc371;
$green: #81cf71;
$white: #faebd7;
$blue:#325ca8;
$grey:  darken($white, 10%);


  @media print {
      body * {
         overflow: hidden !important;
        visibility:hidden;
        font-size: 100%;
        
      }
    
      #print{
      max-width: 100%;
    border: solid 1px #ccc;
    
      visibility: visible;
  
    padding: 1em;
    margin: 2em auto;

    
      }
    }
       #printPageButton1 {
    display: none;
  
  }
    @page {
  size: 100%
}
  </style>
