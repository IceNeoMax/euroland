window.onload = function () {
  var buttons = document.getElementsByTagName('span'),
      result = document.querySelectorAll('.result p')[0],
      clear = document.getElementsByClassName('clear')[0];
  
  for (var i = 0; i < buttons.length; i += 1) {
    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else {
      buttons[i].addEventListener("click", addValue(i));
    }
  }
  
  clear.onclick = function () {
    result.innerHTML = '';
  };  
  
  function addValue(i) {
    return function () {
      if (buttons[i].innerHTML === '÷') {
         result.innerHTML  += '/';
      } else if (buttons[i].innerHTML === 'x') {
         result.innerHTML  += '*';
      } else {
					result.innerHTML += buttons[i].innerHTML;
			}
    };
  }
  
  function calculate(i) {
    return function () {
			var final_res = result.innerHTML;

			var bugFix = final_res.replace(/\d+/g, function(numb){ 
				return parseInt(numb, 10);
			});
			
			  
      result.innerHTML = eval(bugFix);
    };
  }
};

$( "#theme-select" ).on("change",function(){
    if($("#theme-select").val()=="default"){
        $( "#calculator").css('background-color', 'white');
        $( ".clear").css('background-color', 'white');
        $( ".result").css('background-color', 'white');
        $( "span").css({'background-color': 'white','color':'black'});
    }
    else if($("#theme-select").val()=="dark"){
        $( "#calculator").css('background-color', 'black');
        $( ".clear").css('background-color', 'blue');
        $( ".result").css('background-color', 'blue');
        $( "span").css('background-color', 'grey');
    }
    else if($("#theme-select").val()=="colorful"){
        $( "#calculator").css('background-color', 'blue');
        $( ".clear").css('background-color', 'green');
        $( ".result").css('background-color', 'green');
        $( "span").css('background-color', 'aqua');
        $( "#num1,#num7,#num3,#num9").css({'background-color': 'yellow','color':'red'});
        $( "#num2,#num8,#numplus,#numdivide").css({'background-color': 'yellow','color':'blue'});
    }
});