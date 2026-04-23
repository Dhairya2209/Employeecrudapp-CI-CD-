sap.ui.define([
  "sap/ui/core/mvc/ControllerExtension"
], function (ControllerExtension) {
  "use strict";

  return ControllerExtension.extend("demo.empcrud.employeecrud.ext.controller.ListReportExt", {
    onOpenCustomers: function () {
      window.location.href = "https://port5000-workspaces-ws-pzea0.ap21.trial.applicationstudio.cloud.sap/customercrudapp/webapp/index.html?sap-ui-xx-viewCache=false";
    }
  });
});