// Добавляем методы для изменения наших переменных в хранилище. Они будут аналогичные, только названяи переменных будут в соответствии с названием сущности; мутации меняются только через экшены
import { mutations as mutationTypes } from "./types";

export default {
    [mutationTypes.SET_USERS]: (state, data) => {
      state.users = data;
    },
    [mutationTypes.SET_CURRENT_USER]: (state, data) => {
      state.currentUser = data;
    },
    [mutationTypes.SET_NOTES]: (state, data) => {
      state.notes = data;
    },
    [mutationTypes.SET_CURRENT_NOTE]: (state, data) => {
      state.currentNote = data;
    },
    [mutationTypes.SET_LISTS]: (state, data) => {
      state.lists = data;
    },
    [mutationTypes.SET_CURRENT_LIST]: (state, data) => {
      state.currentList = data;
    },
  };
