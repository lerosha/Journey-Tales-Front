//Добавляем методы для получения наших переменных из хранилища. 
import { getters as getterTypes } from "./types";

export default {
    [getterTypes.GET_USERS]: (state) => {
      return state.users;
    },
  };
  