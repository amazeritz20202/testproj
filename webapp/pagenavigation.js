sap.ui.require([
    'sap/m/Button',
    'sap/m/App',
    'sap/m/Page'
    
], function(Button,App,Page) {
    'use strict';
  

    var app = new App("FirstApp", {initialPage: "page1"});

    var page1 = new Page("FirstPage", { 

        title:"First Page",
        content : new Button({
            text : "Next Page",
            press: function(){
                app.to("SecondPage");
            }
        })

    });

   var page2 = new Page("SecondPage",{
       title: "Second Page",
       content : new Button({
        text : "Previous Page",
        press: function(){
            app.to("FirstPage");
        }
   })

});

app.addPage(page1).addPage(page2).placeAt("content");

})
