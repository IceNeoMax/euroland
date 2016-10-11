var textlength=$('#textarea').val().length;

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$('#submitBut').click(function(event){
    $('#submitBut').attr('disabled', true);
        $('#submitBut').text("Saving...");
  setTimeout(function(){enableBtns()},1000);
    
    setTimeout(function(){
        event.preventDefault();
        $('#submitBut').submit();},1300);
        
});
$('#textarea').css('border','solid red 1px');
$('#textarea').css('background','red');

if(textlength>100){
    $('#textarea').attr("disabled","disabled"); 
}
function enableBtns(){
    $('#submitBut').attr('disabled', false);
        $('#submitBut').text("Submit");
    
}