//Переименовываем файл и добавляем методы для обращения к контроллерам для получения данных + заполняем токен, если он есть

import axios from "axios";

export default (token) => {
  const baseUrl = "https://localhost:7226/"; //сюда ссылку с бекенда

  let headers = {
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json; charset=utf-8",
  };
//принятие токена, проверка, поиск пользователя, проверяет пароль и логин
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

  const _getCurrentUser = (userId) => {
    return axios({
      url: `${baseUrl}user/${userId}`,
      method: "GET",
      headers: headers,
      data: userId,
    });
  };

  const _getAllNotes = () => {
    return axios({
      url: `${baseUrl}note`,
      method: "GET",
      headers: headers,
    });
  };

  const _getCurrentNote = (noteId) => {
    return axios({
      url: `${baseUrl}note/${noteId}`,
      method: "GET",
      headers: headers,
      data: noteId,
    });
  };

  const _getAllLists = () => {
    return axios({
      url: `${baseUrl}list`,
      method: "GET",
      headers: headers,
    });
  };

  const _getCurrentList = (listId) => {
    return axios({
      url: `${baseUrl}list/${listId}`,
      method: "GET",
      headers: headers,
      data: listId,
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
    getAllNotes: _getAllNotes,
    getAllLists: _getAllLists,
    getCurrentUser: _getCurrentUser,
    getCurrentNote: _getCurrentNote,
    getCurrentList: _getCurrentList
  };
};
