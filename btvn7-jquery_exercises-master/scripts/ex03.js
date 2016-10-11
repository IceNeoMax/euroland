$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------
// EXERCISE 3
// In the HTML file, first look at the code to see what has been hidden 
// with this jQuery.
// Then figure out how to make the appropriate character appear when we
// hover on his or her name in the main text.
//
// Hint: From Code School, do you remember this?
// var amount = $(this).closest('.vacation').data('price');
// ----------------------------------------------------------------------------


var rama = $('#rama');
var sita = $('#sita');
var hanuman = $('#hanuman');
var ravana = $('#ravana');
var lakshmana = $('#lakshmana');

$('.character').hide();
$('.right').prepend("<p>Roll over a character's name to learn more.</p>");
$('.name[data-person=#rama]').hover(function(){
    rama.toggle();
});
$('.name[data-person=#sita]').hover(function(){
    sita.toggle();
});
$('.name[data-person=#hanuman]').hover(function(){
    hanuman.toggle();
});
$('.name[data-person=#ravana]').hover(function(){
    ravana.toggle();
});
$('.name[data-person=#lakshmana]').hover(function(){
    lakshmana.toggle();
});
// ----------------------------------------------------------------------------
}); // do not delete
