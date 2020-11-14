sap.ui.require([
    'sap/m/Button',
    'sap/m/App',
    'sap/m/Page',
    'sap/ui/model/json/JSONModel',
    'sap/m/DateTimeInput'
], function(Button,App,Page,JSONModel,DateTimeInput) {
    'use strict';

  var oData = { somedate : new Date() };

  var dtcntrl = new DateTimeInput({
      type : sap.m.DateTimeInputType.Date,
    //   change : function() {
    //    alert( oData.somedate);
    //   }
  }).setModel(new JSONModel(oData))
  .bindProperty("dateValue", "/somedate")
  .placeAt("content");
})
