//input value
var number = "";

//saving value
var number1= "";

//saving operators
var sum ="";

//reinitialization
function restart(){
  number = document.getElementById("display").innerHTML = "" ;
  number1="";
  sum="";
}

//function +/-
function inversion(){
  //need to be a number to work with -1 multiplication
  number=Number(number);
  number = document.getElementById("display").innerHTML = number*(-1);
}

//function suppr
function suppr(){
  //need to be a string to permit user deleting last character
  number=number.toString();
  number = number.substring(0, number.length - 1);
  document.getElementById("display").innerHTML = number;
}

//display number
function click_button(n){
  number = document.getElementById("display").innerHTML = number + n ;
}

//main operator system
function operation(n){

  //saving first value
  if (number1===""){
    number1 = Number(number);
  }

  //comparing previous operator to make the operation correctly
  else {
    number = Number(number);
    if (sum==="+"){
      number=document.getElementById("display").innerHTML = number1 + number;
    }
    else if (sum==="-"){
      number=document.getElementById("display").innerHTML = number1 - number ;
    }
    else if (sum==="x"){
      number=document.getElementById("display").innerHTML = number1 * number ;
    }
    else if (sum==="/"){
      number=document.getElementById("display").innerHTML = number1 / number ;
    }
    //saving new value
    number1=number;
  }

  //reinitializing input value
  number="";

  //saving operator for the next operation
  sum = n ;
  return sum;
}

//only "=" button
function result(){

  number = Number(number);
  if (sum==="+"){
    number=document.getElementById("display").innerHTML = number1 + number;
  }
  else if (sum==="-"){
    number=document.getElementById("display").innerHTML = number1 - number ;
  }
  else if (sum==="x"){
    number=document.getElementById("display").innerHTML = number1 * number ;
  }
  else if (sum==="/"){
    number=document.getElementById("display").innerHTML = number1 / number ;
  }

  number1="";
  sum="";
}

//function percentage
function perc(){
  number1=Number(number);
  number=document.getElementById("display").innerHTML = number1 /100 ;
}




//garder l'opérateur et si la valeur du premier nombre est "" juste garder
// l'opérateur en mémoire sinon faire l'opération directement
//utiliser une variable de substitution qui est vide au depart et qui prend
//la valeur du premier chiffre si et seulement si on a gardé l'opérateur en
//mémoire sinon il prend la valeur de l'opération
