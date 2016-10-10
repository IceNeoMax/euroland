var validate = function(inputtype){
    var regex = /[0-9]/g;
    return regex.test(inputtype);
}

var maxOfTwo = function(num1,num2){
    if(!validate(num1)||!validate(num2)){
         
        return "wrong type of input";
    }
       
    else return num1>num2?num1:num2;
    
}


var maxOfThree = function(num1,num2,num3){
    
    var max = 0;
    
    if(!validate(num1)||!validate(num2)||!validate(num3)){
//         console.log("wrong type of input");
        return "wrong type of input";
    }
       
    else{
        if((num1 >= num2) && (num1 >= num3)){
            max = num1;
        }
        else if((num2 >= num1) && (num2 >= num3)){
            max = num2;
        }
        else{
            max = num3;
        }
    return max;
    }
        
    
}

var maxArray = function(arr){
     max = arr[0];
    for(var i=0;i<arr.length;i++){
        if(!validate(arr[i])){
            return "wrong type of input";
        }
    }
    for(var i=0;i<arr.length;i++){
          if (arr[i] > max) {
            max = arr[i];
        }
        
    }
    return max;
}

var sumArray = function(arr){
     sum = arr[0];
    for(var i=0;i<arr.length;i++){
        if(!validate(arr[i])){
            return "wrong type of input";
        }
    }
    for(var i=0;i<arr.length;i++){
          
            sum += arr[i];
        
        
    }
    return sum;
}
console.log(maxOfTwo(2,4));
console.log(maxOfTwo("a",4));
console.log(maxOfThree(-10,4,999));
console.log(maxOfThree("a",4,99));
console.log(maxArray([1,2,4,500,89]));
console.log(maxArray([1,2,4,"asd",8]));
console.log(sumArray([1,2,4,500,89]));
