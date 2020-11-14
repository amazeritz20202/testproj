sap.ui.require([
    'sap/m/Button'
   
    
], function(Button) {
    'use strict';
    var mybutton = new Button("btn");
    mybutton.setText("First Button");
    mybutton.attachPress(function(){alert("Welcome to ui5")});
    mybutton.placeAt("content");  

    
});



