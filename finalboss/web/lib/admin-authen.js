var config = {
apiKey: "AIzaSyBFM1Vgl0Nr7btqvdboyMceh9gRuoeXU4I",
authDomain: "watch-shop-1d159.firebaseapp.com",
databaseURL: "https://watch-shop-1d159.firebaseio.com",
storageBucket: "watch-shop-1d159.appspot.com",
messagingSenderId: "210995421809"
};
firebase.initializeApp(config);

$( document ).ready(function() {
    $('#login-button').click(()=>{
        let ID = $('#id-login').val();
        let pass = $('#pass-login').val();
        if(ID=='admin'&& pass=='admin'){
            $('#login-div').text('Admin').attr('href','../dashboard/dashboard.html').attr( {"data-target": null,"data-toggle": null} );
            $('#myModal').modal('toggle');
        }  
        else{
            firebase.database().ref('/customers').once('value').then(function(snapshot) {
                var tempjson = snapshot.val();
                for(let key in tempjson){
                    if(ID==tempjson[key].username && pass==tempjson[key].pass){
                        let tempid = key;
                        $('#myModal').modal('toggle');
                        $('#login-div').text(tempjson[key].username).attr( {"data-target": null,"data-toggle": null} );
                        $('#register-div').text("Coupon").attr( {"data-toggle": "modal","data-target": "#myModal","href":"#"} );
                        $('.account-right').html('<h3>Your Point:</h3><center>'+tempjson[key].point+'</center>');
                        firebase.database().ref('/coupon').once('value').then(function(snapshot) {
                            let temp = snapshot.val();
                            $('#account-left-side').html('<h3>Your Coupon:</h3>');
                            for(let val in temp){
                                if(temp[val].id==tempid){
                                    $('#account-left-side').append('<h4><center>'+temp[val].name+'</center></h4>');
                                }
                                
                            }
                        });
                        
                    }
                }

            });
        }
    });
});

// add user authen