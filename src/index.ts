import {App} from "./App";
import "./services/authentication/AuthenticationService";
import "./services/dmr/DmrService";
import "./services/launchtype/LaunchTypeService";
import "./module/auth/Auth";
import "./module/clusters/Clusters";
import "./style/style.css!";

App.element(document).ready(() => {
  App.bootstrap(document, [
    "app",
    "app.auth",
    "app.clusters",
    "app.services.authentication",
    "app.services.dmr",
    "app.services.launchtype"
  ]);
});
