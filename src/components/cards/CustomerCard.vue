<template>
  <v-card hover id="customer_card">
    <v-list-item two-line>
      <v-list-item-content id="hd">
        <v-list-item-title class="headline mb-1">{{ title }}</v-list-item-title>
        <v-list-item-subtitle class="title">{{ subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80" :color="avatar_bg">
      
      
        
        <v-icon color="white"> {{ avatar_ic }} </v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "CustomerCard",
  props: ["title", "subtitle", "avatar_ic", "avatar_bg"],



};
</script>

<style>
@font-face {
  font-family: "phetsarath ot";
  src: local("phetthai-regular"),
    url("/fonts/phetsarathot.ttf") format("truetype");
}
#hd {
  font-family: phetsarath ot;
}
</style>
