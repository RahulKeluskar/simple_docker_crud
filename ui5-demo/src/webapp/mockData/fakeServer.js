sap.ui.define([], function() {
    "use strict";
    var result= null;

    var getColors = function() {
              console.log("HERE")

        return new Promise((resolve,reject)=>{
          console.log("HERE")

        
          jQuery.ajax({async: false, type:"GET", url: "http://localhost:80/colours",
          success : function(data, textStatus, jqXHR)
          {
            console.log(data);
            result = data;
            console.log(textStatus);
            resolve(result);
          },
          error : function(jqXHR, exception)
          {
          console.log(jqXHR)
          reject("No data found!");

          }
         })
        })
    };
    var getColorByName = function(aColor,result){
        var colorDetails;
        result.colors.find((el)=>{
            if(el.color === aColor){
                colorDetails=el;
            }
        })
        return new Promise((resolve, reject)=>{
          if(colorDetails){
            resolve(colorDetails);
          } else {
            reject("No Data found for " +  aColor + " color.");
          }
        })
    }

    return {
        getColors: getColors,
        getColorByName: getColorByName
    };
});
