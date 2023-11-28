$(document).ready(function () {
    // An event handler is the code responsible for managing an event, for listening out for the event trigger, and responding appropriately.
    $("#stream1_btn").on("click", function () { //run that jQuery code as soon as someone clicks on the ID "stream1_btn"
        //  $("#stream1_btn").click(function () // different way to execute a code 
        //  $("#stream1_btn").mouseenter(function () // different way
        //  $("#stream1_btn").mouseleave(function () // different way 
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on('click', function () {
        // $(".stream1").removeClass('highlight_stream');
        // $(".stream2").removeClass('highlight_stream');
        // $(".stream3").removeClass('highlight_stream');
        // $(".stream2").slideDown(1000);
        // $(".stream2").slideToggle(1000);
        // $(".stream2").fadeToggle(2000);
        $(".stream2").fadeTo(1000, 0.5); //two parameters: the speed, which is in milliseconds;
        //and the opacity, which is between zero and one
        // $(".stream2").fadeOut(1000);
        // $(".stream2").toggle('slow');
        // $(".stream2").show();
        // $(".stream2").hide(1000);
        // $(".stream2").show('slow');
        // $(".stream2").show('medium');
        // $(".stream2").show('fast');
        // $(".stream2").show(1000);
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });

    $(".bottom_button").mouseenter(function () {
        $(".bottom_button").fadeTo(1000, 0.5);
    }).mouseleave(function () { $(".bottom_button").fadeTo(1000, 1); });
    // $(".bottom_button").mouseleave(function () { $(".bottom_button").fadeTo(1000, 1); });

    $("p").css("color", "blue").slideUp(2000).slideDown(1000);
    $("#a1").attr("href", "https://ireneuszcierpisz.github.io/go-business/");
}); 