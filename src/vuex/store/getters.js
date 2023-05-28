//Добавляем методы для получения наших переменных из хранилища. 
import { getters as getterTypes } from "./types";

export default {
    [getterTypes.GET_USERS]: (state) => {
      return state.users;
    },
    [getterTypes.GET_CURRENT_USER]: (state) => {
      return state.currentUser;
    },
    [getterTypes.GET_LISTS]: (state) => {
      return state.lists;
    },
    [getterTypes.GET_CURRENT_LIST]: (state) => {
      return state.currentList;
    },
    [getterTypes.GET_NOTES]: (state) => {
      return state.notes;
    },
    [getterTypes.GET_CURRENT_NOTE]: (state) => {
      return state.currentNote;
    }
  };
  