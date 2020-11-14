sap.ui.require([
    'sap/m/Button',
    'sap/m/App',
    'sap/m/Page',
    'sap/ui/model/json/JSONModel',
    'sap/m/List'
], function(Button,App,Page,JSONModel,List) {
    'use strict';

  var oModel = new JSONModel("https://api.github.com/orgs/SAP");
  var oModel2 = new JSONModel("https://api.github.com/orgs/SAP/repos");

  sap.ui.getCore().setModel(oModel,"mymodel");
  sap.ui.getCore().setModel(oModel2,"repomodel");


    var app = new App("FirstApp", {initialPage: "page1"});

    var page1 = new Page("FirstPage", { 

        title:"First Page",
        content : new Button({
            text : "{mymodel>/name}",
            icon: "{mymodel>/avatar_url}",
            press: function(){
                app.to("SecondPage");
            }
        })

    });

    var list = new List();
    list.bindItems({
        path : "repomodel>/",
        template :  new sap.m.StandardListItem({
            title : "{repomodel>name}"
        })
    });
    
   var page2 = new Page("SecondPage",{
       title: "Second Page",
       content : [ new Button({
        text : "Previous Page",
        press: function(){
            // app.to("FirstPage");
            app.back();
        }
   }), list]

});

app.addPage(page1).addPage(page2).placeAt("content");

})
