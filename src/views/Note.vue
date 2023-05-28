<template>
    <div>
      <div><router-link to="/notes">Notes</router-link></div>
      <div>Название: {{ note.title }}</div>
    </div>
  </template>
  <script>
  import {
    actions as mainActionTypes,
    getters as mainGetterTypes,
  } from "../vuex/store/types";
  export default {
    name: "NotesView",
    computed: {
      note() {
        const note = this.$store.getters[mainGetterTypes.GET_CURRENT_NOTE];
        return note;
      },
    },
    watch: {
      "$route.params.id": function () {
        this.$store.dispatch(
          mainActionTypes.FETCH_CURRENT_NOTE,
          this.$route.params.id
        );
      },
    },
    beforeCreate() {
      this.$store.dispatch(
        mainActionTypes.FETCH_CURRENT_NOTE,
        this.$route.params.id
      );
    },
  };
  </script>