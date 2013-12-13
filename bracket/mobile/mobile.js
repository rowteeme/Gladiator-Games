// Function to automate columns top and bottom margin
jQuery(function($){
    
    function columnMargin() {
    
            
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
    
    }
    
    $(document).ready(columnMargin);
    $(window).resize(columnMargin);
            
});

//Function to resize the padding between each column
jQuery(function($){
    
    function padding() {

        var columnWidth = ($(".column").width())*7;
        var bracketWidth = $("#bracket").width();
        var margin = ((bracketWidth - columnWidth)/8)/2;
        
        $(".column").css({
                "padding-left" : margin + "px",
                "padding-right" : margin + "px"
            });
    
    }
    
    $(document).ready(padding);
    $(window).resize(padding);

});

// JS FOR BRACKET END