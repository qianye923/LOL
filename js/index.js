$(function(){
   
    $.ajax({
        url: "data/info/numbTwo.json",
        dataType: "json",
        success: function (data) {
            // console.log(data);
            var result = template("numTwo", { datas: data });
            $(".tempTwo").html(result);
            // console.log(result);
        }
    });

     $.ajax({
        url: "data/info/numbThree.json",
        dataType: "json",
        success: function (data) {
           
            var result = template("numThree", { datas: data });
            $(".tempThree").html(result);
          
        }
    });
    
     $.ajax({
         url: "data/info/numbFour.json",
         dataType: "json",
         success: function (data) {
           
             var result = template("tempFok", { datas: data });
             $(".tempFoks").html(result);
           
         }
     });
    
    
    
    
    
    
    
     $(".showOrhide").mouseover(function () {
        $(".hide").show();
        $(".show").hide();
    })
    $(".hide").mouseout(function () {
        $(".hide").hide();
        $(".show").show();
    });
    
    
})