import angular from "angular";
import AjaxModel from "./Ajax.model";

const AjaxModuleName = "livrosbaratinhos.ajax";

angular.module(AjaxModuleName, []);
angular.module(AjaxModuleName).factory("AjaxModel", AjaxModel);

export default AjaxModuleName;