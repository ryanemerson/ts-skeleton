/// <reference path="../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../typings/main/ambient/angular/index.d.ts" />
/// <reference path="../typings/main/ambient/angular-ui-router/index.d.ts" />
/// <reference path="../typings/main/ambient/toastr/index.d.ts" />
/// <reference path="../typings/globals/angular-local-storage/index.d.ts" />

/* tslint:disable:variable-name */

import * as angular from "angular";
import "angular-local-storage";
import "angular-ui-router";
import "bootstrap";
import "bootstrap/css/bootstrap.css!";

const App:ng.IAngularStatic = angular;
const module:ng.IModule = angular.module("app", [
  "ui.router"
]);

// @ngInject
module.config(($urlRouterProvider:ng.ui.IUrlRouterProvider) => {
  $urlRouterProvider
    .when("/", "/login")
    .when("", "/login")
    .otherwise("/error404");
});

export {App};
