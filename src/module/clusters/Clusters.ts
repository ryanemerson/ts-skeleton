import {App} from "../../App";
import {ClustersCtrl} from "./ClustersCtrl";

const module:ng.IModule = App.module("app.clusters", []);

module.controller("Clusters", ClustersCtrl);

// @ngInject
module.config(($stateProvider:ng.ui.IStateProvider) => {
  $stateProvider.state("clusters", {
    url: "/clusters",
    views: {
      application: {
        templateUrl: "src/module/clusters/view/clusters.html",
        controller: ClustersCtrl,
        controllerAs: "ctrl"
      }
    }
  });
});
