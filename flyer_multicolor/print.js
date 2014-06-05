// Choose the number of pages of the document
//var nb_page = 3;
var nb_page = $(".preview-page").length;


// Loads main content into <section id="container">
$("section#container").load("content.html");

$(window).load(function(){
    // __________________________________ DEBUG __________________________________ //
    $("button#debug").click(function(e){
        e.preventDefault();
        $(this).toggleClass("button-active");
        $("html").toggleClass("debug");
    });


    // __________________________________ HIGH RESOLUTION __________________________________ //
    $("button#hi-res").click(function(e){
        e.preventDefault();
        $(this).toggleClass("button-active");
        $("html").toggleClass("export");
        $("img").each(function(){
            var hires = $(this).attr("data-alt-src");
            var lores = $(this).attr("src");
            $(this).attr("data-alt-src", lores)
            $(this).attr("src", hires)
        });
    });


    // __________________________________ PRINT MARKS __________________________________ //
    //var doc_height = $("body").height();
    //var page_height = $("#master-page").height(); 

    //for (i = 1; i <= nb_page; i++){
        //$("#master-page").clone().addClass("preview-page").attr("id","page-"+i).insertBefore($("#master-page"));
    //}
    //$("#master-page").hide();
    var doc_height = $("body").height();
    var page_height = $("#master-page").height(); 

    $(".preview-page").each(function(){
        $(this).append("<div class='inside'>");
        $("#master-page").children().clone().appendTo($(".inside", $(this)));
        $(".moveable", $(this)).appendTo($(".inside", $(this)));
        $(".titre-courant", $(this)).appendTo($(".inside", $(this)));
        $(".images-chant", $(this)).appendTo($(".inside", $(this)));
    });
    $("#master-page").hide();


    // __________________________________ TOC __________________________________ //
    $(".preview-page").each(function(){
        page = $(this).attr("id");
        $("#toc-pages").append("<li><a href='#" + page + "'>" + page.replace("-", " ") + "</a></li>")
    });
    $("#goto").click(function(e){
        e.preventDefault();
        $(this).toggleClass("button-active");
        $("#toc-pages").toggle();
    });


    // __________________________________ MOVEABLE ELEMENTS __________________________________ //
    $("div.moveable").
        append("<div class='properties button'>Properties</div>").
        draggable({
                cursor: "move",
                stack: "div.moveable", 
        }).
        resizable();

    $('.properties').on('click', function() {
        var top = $(this).parent().css('top');
        var left = $(this).parent().css('left');
        var width = $(this).parent().width();
        var height = $(this).parent().height();
        var p = new Popelt({
            title: "Properties to copy/paste into this object's style attribute.",
            content: 'style="top: ' + top + '; left: ' + left + '; width: ' + width + 'px; height: ' + height + 'px;"',
        }).show();
    });
});
