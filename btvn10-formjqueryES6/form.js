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
                pwcheck: true
            },
            repass: {
                equalTo: "#password",
                required: true
            }
        },
        messages: {
            name: "Atleast 6 characters!",
            password:"Your password must have Uppercase, Lowercase, Special Character, number and atleast 8 characters!",
            email: "Your email must follow this: xxxxx@yyyy.zzz!"
        },
        highlight: (element) =>  {
            $(element).closest('.form-group').addClass('has-error animated bounce');
        },
        unhighlight: (element) => {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: (error, element) =>{
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
$.validator.methods.email =  ( value, element )  => {
  return this.optional( element ) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( value );
}
$.validator.addMethod("pwcheck", ( value, element ) =>{
        return this.optional(element) || /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,})/.test( value );
});

var random = () =>{
    var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
    var tmp = ''
        for(i=0;i<6;i++){
 tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
        }
       $('#password').val('M'+tmp+'*'+'3');
        $('#repass').attr('disabled', 'disabled');
        $('#repass').val('M'+tmp+'*'+'3');
}

$('#password').on("change",()=>{
    $('#repass').attr('disabled', false);
  $('form').validate();
});

$('#submitBut').click((event)=>{
    $('#submitBut').attr('disabled', true);
        $('#submitBut').text("Saving...");
  setTimeout(function(){enableBtns()},1000);
    
    setTimeout(()=>{$('form').submit();},1300);
        
});

var enableBtns = () => {
    $('#submitBut').attr('disabled', false);
        $('#submitBut').text("Submit");
    
}