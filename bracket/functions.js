// Function to automate columns top and bottom margin
jQuery(function($){
    
    $(document).ready(function(){
            
        var columnOne = $("#column-1").height();
        var columnTwo = $("#column-2").height();
        var columnThree = $("#column-3").height();
        var columnFour = $("#column-4").height();
                
        var medium  = (columnOne - columnTwo)/2;
        var small = (columnOne - columnThree)/2;
        var center = (columnOne - columnFour)/2;
                
        $(".medium").css("margin-top", medium);
        $(".short").css("margin-top", small);
        $(".center").css("margin-top", center);
    
    });
            
});
