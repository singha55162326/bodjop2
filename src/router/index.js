import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";


import Home from "../views/Home.vue";
import Register from "@/views/Register.vue";
import Customer from "../views/Customer.vue";
import Deliveries from "../views/Deliveries.vue";
import Order from "../views/Order.vue";
import Document from "../views/Document.vue";
import Employee from "../views/Employee.vue";
import Price from "../views/Price.vue";
import Customercreate from "../views/Customercreate.vue";
import Customeredit from "../views/Customeredit.vue";
import Deliverycreate from "../views/Deliverycreate.vue";
import Deliveryedit from "../views/Deliveryedit.vue";
import Ordercreate from "../views/Ordercreate.vue";
import Orderedit from "../views/Orderedit.vue";
import Documentcreate from "../views/Documentcreate.vue";
import Documentedit from "../views/Documentedit.vue";
import Employeecreate from "../views/Employeecreate.vue";
import Empedit from "../views/Empedit.vue"
import Priceedit from "../views/Priceedit.vue";
import Pricecreate from "../views/Pricecreate.vue";
import Printcustomer from "../views/Printcustomer.vue";
import Printdelivery from "../views/Printdelivery.vue";
import Printorder from "../views/Printorder.vue";
import Printdocument from "../views/Printdocument.vue";
import Printemployee from "../views/Printemployee.vue";
import Printprice from "../views/Printprice.vue";
import report from"../views/report.vue";
import Printcustomer1 from "../views/Printcustomer1.vue";
import Printemployee1 from "../views/Printemployee1.vue";
import Car from "../views/Car.vue";
import Sale from "../views/Sale.vue";
import Salecreate from "../views/Salecreate.vue";
import Saleedit from "../views/Saleedit.vue";
import Caredit from "../views/Caredit.vue";
import Carcreate from "../views/Carcreate.vue";
import Oil from "../views/Oil.vue";
import { server } from "@/services/constants";

Vue.use(VueRouter);



const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/customer",
    name: "customer",
    component: Customer,
  },
  {
    path: "/deliveries",
    name: "deliveries",
    component: Deliveries,
  },
  {
    path: "/oil",
    name: "oil",
    component: Oil,
  },
  {
    path: "/carcreate",
    name: "carcreate",
    component: Carcreate,
  },
  {
    path: "/caredit/:id",
    name: "caredit",
    component: Caredit,
  },
  {
    path: "/saleedit/:id",
    name: "saleEdit",
    component: Saleedit,
  },
  {
    path: "/salecreate",
    name: "salecreate",
    component: Salecreate,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/order",
    name: "order",
    component: Order,
   
  },
  {
    path:"/printcustomer",
    name:"printcustomer",
    component:Printcustomer,
  },
  {
    path:"/car",
    name:"car",
    component:Car,
  },
  {
    path:"/printdelivery",
    name:"printdelivery",
    component:Printdelivery,
  },
  {
    path:"/printorder",
    name:"printorder",
    component:Printorder,
  },
  {
    path:"/sale",
    name:"sale",
    component:Sale,
  },
  {
    path:"/printdocument",
    name:"printdocument",
    component:Printdocument,
  },
  {
    path:"/printemployee",
    name:"printemployee",
    component:Printemployee,
  },
  {
    path:"/printprice",
    name:"printprice",
    component:Printprice,
  },
  {
    path:"/printcustomer1",
    name:"printcustomer1",
    component:Printcustomer1,
  },
  {
    path:"/printemployee1",
    name:"printemployee1",
    component:Printemployee1,
  },
  {
    path: "/document",
    name: "document",
    component: Document,
  },
  {
    path: "/employee",
    name: "employee",
    component: Employee,
  },
  {
    path: "/customercreate",
    name: "customercreate",
    component: Customercreate,

  },
  {
    path: "/documentedit/:id",
    name: "documentedit",
    component: Documentedit,
  },
  {
    path:"/deliverycreate",
    name:"deliverycreate",
    component:Deliverycreate,
  },

  {
    path:"/deliveriesedit/:id",
    name:"deliveriesedit",
    component:Deliveryedit,
  },
  {
    path:"/ordercreate",
    name:"ordercreate",
    component:Ordercreate,
  },
  {
    path: "/employedit/:id",
    name: "empedit",
    component: Empedit,
  },
  {
    path:"/orderedit/:id",
    name:"orderedit",
    component:Orderedit,
  },
  {
    path:"employeecreate",
    name:"employeecreate",
    component:Employeecreate,
  },
 
  {
    path:"pricecreate",
    name:"pricecreate",
    component:Pricecreate,
  },
  {
    path:"priceedit/:id",
    name:"PriceEdit",
    component:Priceedit,
  },
  {
    path:"/documentcreate",
    name:"documentcreate",
    component:Documentcreate,
   
  },
  {
    path: "/customeredit/:id",
    name: "CustomerEdit",
    component: Customeredit,
   
  },
  {
    path: "/price",
    name: "price",
    component: Price,
  },
  {
    path: "/report",
    name: "report",
    component: report,
  },
  
 
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "*",
    redirect: "/login",
  }
];
 

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  
});


//router.beforeEach((to, from, next) =>{
  // if (to.meta.requireAuth){
    // const authuser = JSON.parse(window.localStorage.getItem('authUser'))
    //(authuser && authuser.access_token){
      //()
    //} else {
      //({name:'customer'})
    //}

  //}
  //()
//})

export default router;
