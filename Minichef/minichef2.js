$(document).ready(function(){

    $("div h1").css('background-color','red');
    $( "#myselect option:selected" ).text();
    $('body').append("<div><h1>Jquery Core</h1></div>");
    $('ul li').remove();
    $('ul').append('<li><b>0: HTML Tut</b></li><li><b>1: Mongodb Tut</b></li><li><b>2: Python Tut</b></li>');
    $('#tut').attr("href", "http://www.vnexpress.net/")
    $('#tut').text("Đọc báo lá cải");
});