var number = "";
var number1= 0;
var number2= 0;
var sum ="";

//reinitialization
function restart(){
  number = document.getElementById("display").innerHTML = "" ;
  number1=0;
  number2=0;
  sum="";
}

//function +/-
function inversion(){
  number = document.getElementById("display").innerHTML = "-"+number ;
}

//function suppr
function suppr(){
  number = number.substring(0, number.length - 1);
  number = document.getElementById("display").innerHTML = number;
}

//display number
function click_button(n){
  number = document.getElementById("display").innerHTML = number + n ;
}

function operation(n){
  number1 = Number(number);
  number = "" ;

  sum = n ;
  return sum;
}

function result(){
  
  number2 = Number(number);
  if (sum==="+"){
    number=document.getElementById("display").innerHTML = number1 + number2;
  }
  else if (sum==="-"){
    number=document.getElementById("display").innerHTML = number1 - number2 ;
  }
  else if (sum==="x"){
    number=document.getElementById("display").innerHTML = number1 * number2 ;
  }
  else if (sum==="/"){
    number=document.getElementById("display").innerHTML = number1 / number2 ;
  }
  else if (sum==="%"){
    number=document.getElementById("display").innerHTML = number1 % number2 ;
  }
}
