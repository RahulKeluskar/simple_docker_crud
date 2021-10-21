sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/scholar/demo/mockData/fakeServer",
    "sap/m/MessageBox",
    "sap/scholar/demo/model/formatter"
], function (Controller, JSONModel, myServer, MessageBox, formatter) {
    'use strict';

    return Controller.extend("sap.scholar.demo.controller.Detail", {
        formatter: formatter,
        onInit: function () {
            this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this._oRouter.getRoute("detail").attachPatternMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function(oEvent){
            console.log(oEvent.getParameters())

            var color =oEvent.getParameters().arguments.color;
            var oData;
          var oModel;
          //fetching data
            jQuery.ajax({async: false, type:"GET", url: "http://localhost:80/colour/"+color,
            success : function(data, textStatus, jqXHR)
            {
              console.log(data);
              oData = data;
              console.log(oData);
              oModel = new JSONModel(oData);
              console.log(oModel);
            },
            error : function(jqXHR, exception)
            {
            console.log(jqXHR)  
            }
           })
           this.getView().setModel(oModel);
            
        },

        onNavBack: function(){
            this._oRouter.navTo("home");
        }

    });
});