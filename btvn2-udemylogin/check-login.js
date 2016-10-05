 


 function logindf(email,pass){
 	var tmail= email;
 	var tpass = pass;
 	$.getJSON("user.json", function(json) {
 		for(var i=0; i< json.name.length;i++){
 			if(tmail==json.name[i]&&tpass==json.pass[i])
 				alert("you signed in");
 		}

	});
}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }