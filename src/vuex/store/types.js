// Добавляем типизированные значения для названия наших методов. Для каждой сущности, потенцильно возвращаемой, нужен аналогичный пакет.
export const actions = {
    FETCH_USERS: "FETCH_USERS",
    FETCH_NOTES: "FETCH_NOTES",
    FETCH_LISTS: "FETCH_LISTS",
    FETCH_CURRENT_USER: "FETCH_CURRENT_USER",
    FETCH_CURRENT_NOTE: "FETCH_CURRENT_NOTE",
    FETCH_CURRENT_LIST: "FETCH_CURRENT_LIST",
  };

  export const mutations = {
    SET_USERS: "SET_USERS",
    SET_NOTES: "SET_NOTES",
    SET_LISTS: "SET_LISTS",
    SET_CURRENT_USER: "SET_CURRENT_USER",
    SET_CURRENT_NOTE: "SET_CURRENT_NOTE",
    SET_CURRENT_LIST: "SET_CURRENT_LIST",
  };

  export const getters = {
    GET_USERS: "GET_USERS",
    GET_NOTES: "GET_NOTES",
    GET_LISTS: "GET_LISTS",
    GET_CURRENT_USER: "GET_CURRENT_USER",
    GET_CURRENT_NOTE: "GET_CURRENT_NOTE",
    GET_CURRENT_LIST: "GET_CURRENT_LIST",
  };
