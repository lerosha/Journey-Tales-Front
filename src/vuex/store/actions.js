//Добавляем action для получения нужных переменных и сохранения их в хранилище. Для каждого типа данных свой метод.

import mainDbApi from "../../api/mainDbApi.js";
import { actions as actionTypes, mutations as mutationTypes } from "./types.js";

export default {
    [actionTypes.FETCH_USERS]({ commit, state }) { //фетч лезет в мэиндб с помощью токена 
      mainDbApi(state.auth.token)
        .getAllUsers()
        .then((result) => {
          commit(mutationTypes.SET_USERS, result.data);
        })
        .catch((error) => {
          console.log(error); //выкидывается ошибка
          throw error;
        })
        .finally(() => {
          console.log("finally");
        });
    },

    [actionTypes.FETCH_CURRENT_USER]({ commit, state }, data) {
      mainDbApi(state.auth.token)
        .getCurrentUser(data)
        .then((result) => {
          commit(mutationTypes.SET_CURRENT_USER, result.data);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
        .finally(() => {
          console.log("finally");
        });
    },
    
    [actionTypes.FETCH_NOTES]({ commit, state }) {
      mainDbApi(state.auth.token)
        .getAllNotes()
        .then((result) => {
          commit(mutationTypes.SET_NOTES, result.data);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
        .finally(() => {
          console.log("finally");
        });
    },

    [actionTypes.FETCH_CURRENT_NOTE]({ commit, state }, data) {
      mainDbApi(state.auth.token)
        .getCurrentNote(data)
        .then((result) => {
          commit(mutationTypes.SET_CURRENT_NOTE, result.data);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
        .finally(() => {
          console.log("finally");
        });
    },

    [actionTypes.FETCH_LISTS]({ commit, state }) {
      mainDbApi(state.auth.token)
        .getAllLists()
        .then((result) => {
          commit(mutationTypes.SET_LISTS, result.data);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
        .finally(() => {
          console.log("finally");
        });
    },

    [actionTypes.FETCH_CURRENT_LIST]({ commit, state }, data) {
      mainDbApi(state.auth.token)
        .getCurrentList(data)
        .then((result) => {
          commit(mutationTypes.SET_CURRENT_LIST, result.data);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
        .finally(() => {
          console.log("finally");
        });
    },
  };
