$( document ).ready(function() {
    $('#login-button').click(()=>{
        if($('#email-login').val()=='admin'&&$('#pass-login').val()=='admin'){
            $('#login-div').text('Admin').attr('href','../dashboard/dashboard.html').attr( {"data-target": null,"data-toggle": null} );
            $('#myModal').modal('toggle');
        }  
    });
});

// add user authen