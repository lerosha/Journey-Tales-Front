// Добавляем методы для изменения наших переменных в хранилище. Они будут аналогичные, только названяи переменных будут в соответствии с названием сущности
import { mutations as mutationTypes } from "./types";

export default {
    [mutationTypes.SET_USERS]: (state, data) => {
      state.users = data;
    },
  };
