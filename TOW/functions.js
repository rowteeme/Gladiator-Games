jQuery(function($){

    $(document).ready(function(){
        $("#Name1").insertAfter(".LBox img");
        $("#Name2").insertAfter(".RBox img");
    });
    
});

jQuery(function($){
    
    $(document).ready(function(){
        var lheight = $(".LBox img").height();
        $(".RBox img").css("height", lheight);
    });
    
});

jQuery(function($){

    $(document).ready(function(){
        $("#Count1").insertBefore(".LBox .TImage");
        $("#Count2").insertBefore(".RBox .TImage");
    });    

});