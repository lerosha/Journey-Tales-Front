<template>
    <div>
      <li v-for="(list, index) in lists" :key="list.id">
        <div>
        <router-link :to="{ name: 'List', params: { id: list.id } }"
          >Перейти</router-link
        >
        {{ index + 1 }}. Страна: {{ list.destinationCountry }} Город: {{ list.destinationCity }}
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
    name: "ListsView",
    computed: {
      lists() {
        const lists = this.$store.getters[mainGetterTypes.GET_LISTS];
        return lists;
      },
    },
    beforeCreate() {
      this.$store.dispatch(mainActionTypes.FETCH_LISTS);
    },
  };
  </script>