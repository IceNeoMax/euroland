var config = {
        apiKey: "AIzaSyDnJ94CEmRET1pEIyUd0l0bkILFgHBxne8",
        authDomain: "todo-euroland.firebaseapp.com",
        databaseURL: "https://todo-euroland.firebaseio.com",
        storageBucket: "todo-euroland.appspot.com",
        messagingSenderId: "735027325948"
      };
firebase.initializeApp(config);
var database = firebase.database();

function writeUserData(userId, name, email,pass) {
  firebase.database().ref(userId).set({
    username: name,
    email: email,
    password:pass
  });
}
        


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
            let temp = Math.floor(Math.random()*10000000); writeUserData(temp,$('#username').val(),$('#email').val(),$('#password').val());
            
          }
            });
$.validator.methods.email = function ( value, element )  {
  return this.optional( element ) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( value );
}
$.validator.addMethod("pwcheck", function( value, element ){
//    if(element.value == /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)
//   return false;
//   else return true;
        return this.optional(element) || /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test( value );
});

var random = () =>{
    var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
    var tmp = ''
        for(let i=0;i<6;i++){
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
    if ($('form').valid())
        setTimeout(()=>{$('form').submit();},1100);
        
});

var enableBtns = () => {
    $('#submitBut').attr('disabled', false);
        $('#submitBut').text("Submit");
    
}