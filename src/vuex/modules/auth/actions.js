//Правим в другом классе action переименнованный метод обращения к апи.
import mainDbApi from "../../../api/mainDbApi"; //мутации меняются через экшены то есть методы то есть коммиты, а представление то есть вью меняется после этого круга приколдесного
import routeInfo from "../../../router/routeInfo";
import { mutations as mutationTypes, actions as actionTypes } from "./types";
import router from "../../../router";

export default {
  [actionTypes.AUTH_REQUEST]({ commit }, data) {
    mainDbApi()
      .auth(data)
      .then((result) => {
        commit(mutationTypes.SET_AUTH_TOKEN, result.data);
        router.push({ path: routeInfo.Home.path, name: routeInfo.Home.name });
      })
      .catch((error) => {
        console.log(error);
        throw error;
      })
      .finally(() => {
        console.log("finally");
      });
  },
  [actionTypes.REGISTER]({ commit }, data) {
    mainDbApi()
      .register(data)
      .then((result) => {
        commit(mutationTypes.FIRST, result);
        router.push({ path: routeInfo.Start.path, name: routeInfo.Start.name });
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
