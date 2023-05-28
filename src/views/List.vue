<template>
    <div>
      <div><router-link to="/lists">Lists</router-link></div>
      <div>Страна: {{ list.destinationCountry }}</div>
      <div>Город: {{ list.destinationCity }}</div>
    </div>
  </template>
  <script>
  import {
    actions as mainActionTypes,
    getters as mainGetterTypes,
  } from "../vuex/store/types";
  export default {
    name: "ListsView",
    computed: {
      list() {
        const list = this.$store.getters[mainGetterTypes.GET_CURRENT_LIST];
        return list;
      },
    },
    watch: {
      "$route.params.id": function () {
        this.$store.dispatch(
          mainActionTypes.FETCH_CURRENT_LIST,
          this.$route.params.id
        );
      },
    },
    beforeCreate() {
      this.$store.dispatch(
        mainActionTypes.FETCH_CURRENT_LIST,
        this.$route.params.id
      );
    },
  };
  </script>