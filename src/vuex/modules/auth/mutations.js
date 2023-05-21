import { mutations as mutationTypes } from "./types"; //состоятние менятеся только через мутации 

export default {
  [mutationTypes.SET_AUTH_TOKEN](state, token) {
    state.token = token;
  },
  [mutationTypes.FIRST](state, data) {
    console.log(data);
  },
};
