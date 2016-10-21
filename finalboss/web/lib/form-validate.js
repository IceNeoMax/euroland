//var config = {
//        apiKey: "AIzaSyDnJ94CEmRET1pEIyUd0l0bkILFgHBxne8",
//        authDomain: "todo-euroland.firebaseapp.com",
//        databaseURL: "https://todo-euroland.firebaseio.com",
//        storageBucket: "todo-euroland.appspot.com",
//        messagingSenderId: "735027325948"
//      };
//firebase.initializeApp(config);
//var database = firebase.database();
//
//function writeUserData(userId, name, email,pass) {
//  firebase.database().ref(userId).set({
//    username: name,
//    email: email,
//    password:pass
//  });
//}
        
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
            },
            phone: {
                phonecheck: true,
                required: true
            },
            address: {
                required: true
            }
        },
        messages: {
            name: "Atleast 6 characters!",
            password:"Your password must have Uppercase, Lowercase, Special Character, number and atleast 8 characters!",
            phone: "Your phone must have 0 and atleast 5 numbers ",
            email: "Your email must follow this: xxxxx@yyyy.zzz!",
            address: "Enter Your Address"
        },
        highlight: (element) =>  {
            $(element).closest('.form-group').addClass('has-error animated bounce');
        },
        unhighlight: (element) => {
            $(element).closest('.form-group').removeClass('has-error animated bounce');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: (error, element) =>{
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function() {
//            $('input[type="submit"]').attr('disabled', true).val("Saving...");
//            setTimeout(function(){$('input[type="submit"]').attr('disabled', false).val("Submit");
//                                 
//                                 },1000);
            let temp = Math.floor(Math.random()*10000000); //writeUserData(temp,$('#username').val(),$('#email').val(),$('#password').val());
            form.submit();
                
            
          }
});


$.validator.methods.email = function ( value, element )  {
  return this.optional( element ) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( value );
};
$.validator.addMethod("pwcheck", function( value, element ){

        return this.optional(element) || /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test( value );
});
$.validator.addMethod("phonecheck", function( value, element ){

        return this.optional(element) || /0[0-9]{4,}/.test( value );
});

var random = () =>{
    var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
    var tmp = ''
        for(let i=0;i<6;i++){
 tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
        }
    $('#password').val('M'+'d'+tmp+'&'+'3');
    $('#repass').val('M'+'d'+tmp+'&'+'3');
    $('#password').attr('type', 'text').css("border","1px solid green");
    $('#repass').attr('type', 'text').css("border","1px solid green");
    $('#repass').attr('disabled', 'disabled');
    $('#password').attr('disabled', 'disabled');    
}



