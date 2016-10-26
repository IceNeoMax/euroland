var listOut = JSON.parse(localStorage.getItem('simpleCart_items'));
var lastPrice=0;
for(let key in listOut){

    let temp = "<ul class='cart-header2'><div class='close1'> </div><li class='ring-in'><a href='single.html' ><img src='"+listOut[key].src+"' class='img-responsive' alt="+"></a></li><li><span class='name keyproduct'>"+key+". Analog Watches</span></li><li><span class='name quantity'>"+listOut[key].quantity+"</span></li><li><span class='itemPrice'>"+listOut[key].price*listOut[key].quantity+"  $</span></li><div class='clearfix'> </div></ul>";
    $('.in-check').append(temp);
//    console.log(listOut[key].price*listOut[key].quantity);
//    console.log(listOut[key]);
    lastPrice = lastPrice + listOut[key].price*listOut[key].quantity;
}

let temp = '<ul class="cart-header2" style="border-top: 1px solid black;"><li><span>Coupon:<input type="text" style="max-width:100px;"></span></li><li><span>Total</span></li><li><span class="name"></span></li><li><span class="simpleCart_total"> $</span></li><div class="clearfix"> </div></ul>';
console.log(lastPrice);
$('.in-check').append(temp);

$( document ).ready(function() {
    $('.close1').on('click', function(c){
                            $(this).parent().fadeOut('slow', function(c){
                                let getId = parseInt($(this).find('.keyproduct').text().charAt(0));
                                let getPrice = parseInt($(this).find('.itemPrice').text());
                                lastPrice -= getPrice;
                                delete listOut[getId];
                                console.log(lastPrice);
                                localStorage.setItem('simpleCart_items', JSON.stringify(listOut));
                                $('.simpleCart_total').replaceWith("<span class='simpleCart_total'>"+lastPrice+" $</span>"); 
                                $(this).remove();                               
                            });
        
    });	                    
});