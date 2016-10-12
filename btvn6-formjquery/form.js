    $('form').validate({
        rules: {
            name: {
                minlength: 6,
                maxlength: 15,
                required: true
            },
            email: {
                email:true,
                required: true
            },
            password: {
                pwcheck: true,
                required: true
            },
            repass: {
              equalTo: "#password"
            }
        },
        messages: {
            name: "Atleast 6 characters!",
            password:"Your password must have Uppercase, Lowercase, Special Character, number and atleast 8 characters!",
            email: "Your email must follow this: xxxxx@yyyy.zzz!"
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error animated bounce');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
$.validator.methods.email = function( value, element ) {
  return this.optional( element ) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( value );
}
$.validator.addMethod("pwcheck", function( value, element ) {
  return this.optional( element ) || /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,})/.test( value );
});

var random = function(){
    var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
    var tmp = ''
        for(i=0;i<6;i++){
 tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
        }
       $('#password').val(tmp+'A'+'@'+'3');
        $('#repass').attr('disabled', 'disabled');
    $('#repass').val(tmp+'A'+'@'+'3');
}


    
$('#submitBut').click(function(event){
    $('#submitBut').attr('disabled', true);
        $('#submitBut').text("Saving...");
  setTimeout(function(){enableBtns()},1000);
    
    setTimeout(function(){$('form').submit();},1300);
        
});

function enableBtns(){
    $('#submitBut').attr('disabled', false);
        $('#submitBut').text("Submit");
    
}