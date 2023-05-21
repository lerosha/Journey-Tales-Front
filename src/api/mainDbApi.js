//Переименовываем файл и добавляем методы для обращения к контроллерам для получения данных + заполняем токен, если он есть

import axios from "axios";

export default (token) => {
  const baseUrl = "https://localhost:7226/"; //сюда ссылку с бекенда

  let headers = {
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json; charset=utf-8",
  };

  if (!(token === null || typeof token == "undefined")) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const _auth = (auth) => {
    return axios({
      url: `${baseUrl}auth/token`,
      method: "POST",
      headers: headers,
      data: auth,
    });
  };

  const _getAllUsers = () => {
    return axios({
      url: `${baseUrl}user`,
      method: "GET",
      headers: headers,
    });
  };

//axios - библиотека для айакс(AJAX - асинхронный яваскрипт) запросов/ передаешь юрл, газвание метода что сервис понял что надо делать
  const _register = (user) => {
    return axios({
      url: `${baseUrl}user`,
      method: "POST",
      headers: headers,
      data: user,
    });
  };

  return {
    auth: _auth,
    register: _register,
    getAllUsers: _getAllUsers,
  };
};
