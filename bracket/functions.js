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

//Function to resize the padding between each column
jQuery(function($){
    
    function padding() {

        var columnWidth = ($(".column").width())*7;
        var bracketWidth = $("#bracket").width();
        var margin = (((bracketWidth - columnWidth)/8)/2)-1;
        
        $(".column").css({
                "padding-left" : margin + "px",
                "padding-right" : margin + "px"
            });
    
    }
    
    $(document).ready(function(){
    
        padding();    
    
    });
    $(window).resize(function(){
        
        padding();
    
    });

});
// Function to make all <li> in a column active or inactive. There is a class in the bracket css for active li and inactive li that will give
// the elements their color, background and border.
// "round" is the column round. Each column match has a "round-x" class, so "round-1" "round-2"
// State is active or inactive
jQuery(function($){
    
    function state(round, state) {
        $(round).addClass(state);
    }
    
    $(document).ready(function(){
    
        state(".round-1", "active");
    
    });

});

// JS FOR BRACKET END