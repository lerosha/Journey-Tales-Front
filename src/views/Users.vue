<template>
    <div>
      <li v-for="(user, index) in users" :key="user.id">
        {{ index + 1 }}. Пользователь: {{ user.email }}, Дата создания
        {{ user.createdOn }}
      </li>
    </div>
  </template>
  <script>
  import {
    actions as mainActionTypes,
    getters as mainGetterTypes,
  } from "../vuex/store/types";
  export default {
    name: "UsersView",
    computed: {
      users() {
        console.log(1);
        const users = this.$store.getters[mainGetterTypes.GET_USERS];
        return users;
      },
    },
    beforeCreate() {
      this.$store.dispatch(mainActionTypes.FETCH_USERS);
    },
  };
  </script>