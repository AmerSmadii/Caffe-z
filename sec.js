
let userAnswers =[];  
let thename =window.prompt("what is your name","");
userAnswers.push(thename);
let gender ;
function fun() {
    
    while (gender !== "male" || gender !== "female"){
        gender=prompt("what is your gender").toLowerCase();
     
     if (gender =="male"){
         window.alert(`welcome mr ${thename}!`);
        userAnswers.push(gender);
         break;
     }
     else if (gender =="female"){
         window.alert(`welcome ms ${thename}!`);
         userAnswers.push(gender);
         break;}
    }
    }
fun();
  
let drinkType =window.prompt("cold or hot","");

userAnswers.push(drinkType);
let drinkName =window.prompt("enter your name's drink","");
userAnswers.push(drinkName);
 window.alert(" Your Drink is getting prepared");


 

 for (let i = 0; i < userAnswers.length; i++) {
    console.log(userAnswers[i]);}
  //csascas