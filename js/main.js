//input value
var number = "";

//saving value
var number1= "";

//saving operators
var sum ="";

//counting coma
var dot=0;

var display = document.getElementById("display");

//reinitialization
function restart(){
  number = display.innerHTML = "" ;
  number1="";
  sum="";
}

//function +/-
function inversion(){
  //need to be a number to work with -1 multiplication
  number=Number(number);
  number = display.innerHTML = number*(-1);
  number=number.toString();
}

//function suppr
function suppr(){
  //need to be a string to permit user deleting last character
  number=number.toString();
  number = number.substring(0, number.length - 1);
  display.innerHTML = number;
}

//display number
function click_button(n){
  number = display.innerHTML = number + n ;
}

//display dot
function click_dot(n){
  if (dot===0){
    number = display.innerHTML = number + n ;
    dot++;
  }
}

//main operator system
function operation(n){

  //saving first value
  if (number1===""){
    number1 = Number(number);
    //reinitializing dot for each number
    dot=0;
  }

  //comparing previous operator to make the operation correctly
  else {
    calcul();
    //saving new value
    number1=number;
    dot=0;
  }

  //reinitializing input value
  number="";

  //saving operator for the next operation
  sum = n ;
  return sum;
}

//only "=" button
function result(){

  calcul();
  dot=0;
  //we want to go back to the first operation() condition
  number1="";
  sum="";
}

//function percentage
function perc(){
  calcul();
  number=display.innerHTML = number /100 ;
  //reinitializing sum value avoid miscalculation with the previous sum
  sum="";
}

//we use this one to compare our operator and do the correspondant operation
function calcul(){
  number=Number(number);
  if (sum==="+"){
    number=display.innerHTML = number1 + number;
  }
  else if (sum==="-"){
    number=display.innerHTML = number1 - number ;
  }
  else if (sum==="x"){
    number=display.innerHTML = number1 * number ;
  }
  else if (sum==="/"){
    number=display.innerHTML = number1 / number ;
  }
}
