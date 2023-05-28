<template>
    <div>
      <li v-for="(note, index) in notes" :key="note.id">
        <div>
        <router-link :to="{ name: 'Note', params: { id: note.id } }"
          >Перейти</router-link
        >
        {{ index + 1 }}. Название: {{ note.title }}
      </div>
      </li>
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
      notes() {
        const notes = this.$store.getters[mainGetterTypes.GET_NOTES];
        return notes;
      },
    },
    beforeCreate() {
      this.$store.dispatch(mainActionTypes.FETCH_NOTES);
    },
  };
  </script>