import {App} from "../../App";
import {LoginCtrl} from "./LoginCtrl";

const module:ng.IModule = App.module("app.auth", []);

module.controller("Login", LoginCtrl);

// @ngInject
module.config(($stateProvider:ng.ui.IStateProvider) => {
  $stateProvider.state("login", {
    url: "/login",
    views: {
      application: {
        templateUrl: "src/module/auth/view/login.html",
        controller: LoginCtrl,
        controllerAs: "ctrl"
      }
    }
  });
});
