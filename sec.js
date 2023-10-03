
/*
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
  //csascas3

  const currentDiv = document.getElementById("newdiv");
  
  const newContent = document.createElement("p");
  newContent.innerHTML = thename ;
  currentDiv.appendChild(newContent);

  const newul = document.createElement("ul");

  const newli =document.createElement("li");
  newli.innerHTML =gender;
  newul.appendChild(newli);

  const newli2 =document.createElement("li");
  newli2.innerHTML=drinkType;
  newul.appendChild(newli2);

  const newli3 =document.createElement("li");
  newli3.innerHTML=drinkName;
  newul.appendChild(newli3);

    currentDiv.appendChild(newContent);
    currentDiv.appendChild(newul);

 
 */

  //done
  


  const form = document.getElementById("userForm");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const age = document.getElementById("age").value;

      let drinkType = "";
      if (document.getElementById("cold").checked) {
          drinkType = document.getElementById("cold").value;
      } else if (document.getElementById("hot").checked) {
          drinkType = document.getElementById("hot").value;
      } else {
          drinkType = document.getElementById("drinkType").value;
      }

      document.getElementById("displayUsername").textContent = username;
      document.getElementById("displayAge").textContent = age;
      document.getElementById("displayDrinkType").textContent = drinkType;
  });
  