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
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
}); 