//Добавляем action для получения нужных переменных и сохранения их в хранилище. Для каждого типа данных свой метод.

import mainDbApi from "../../api/mainDbApi.js";
import { actions as actionTypes, mutations as mutationTypes } from "./types.js";

export default {
    [actionTypes.FETCH_USERS]({ commit, state }) {
      mainDbApi(state.auth.token)
        .getAllUsers()
        .then((result) => {
          commit(mutationTypes.SET_USERS, result.data);
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
