import NotfoundView from "../views/NotFound.vue";
import StartView from "../views/Start.vue";
import HomeView from "../views/Home.vue";
import LoginView from "../views/Login.vue";
import RegisterView from "../views/Register.vue";
import UsersView from "../views/Users.vue"; //Добавляем информацию для роутинга к нашей новой странице.
import ListsView from "../views/Lists.vue";
import NotesView from "../views/Notes.vue";
import UserView from "../views/User.vue";
import ListView from "../views/List.vue";
import NoteView from "../views/Note.vue";

export default {
  Start: {
    path: "/",
    name: "StartView",
    component: StartView,
  },
  Home: {
    path: "/home",
    name: "HomeView",
    component: HomeView,
  },
  Login: {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  Register: {
    path: "/register",
    name: "RegisterView",
    component: RegisterView,
  },
  Users: {
    path: "/users",
    name: "Users",
    component: UsersView,
  },
  User: {
    path: "/user/:id",
    name: "User",
    component: UserView,
  },
  Lists: {
    path: "/lists",
    name: "Lists",
    component: ListsView,
  },
  List: {
    path: "/list/:id",
    name: "List",
    component: ListView,
  },
  Notes: {
    path: "/notes",
    name: "Notes",
    component: NotesView,
  },
  Note: {
    path: "/note/:id",
    name: "Note",
    component: NoteView,
  },
  NotFound: {
    path: "/:catchAll(.*)",
    name: "NotFoundView",
    component: NotfoundView,
  },
};
