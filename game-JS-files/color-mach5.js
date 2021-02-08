let randomNum = document.getElementById('button');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let avatarColor1 = document.getElementById('avatar1');
let avatarColor2 = document.getElementById('avatar2');
let avatarColor3 = document.getElementById('avatar3');
let avatarColor4 = document.getElementById('avatar4');


let moneyamount = document.getElementById("amount");
let addAmount = document.getElementById("add");
let subAmount = document.getElementById("sub");
let addAmountBig = document.getElementById("add50");
let subAmountBig = document.getElementById("sub50");

let h1text = document.getElementById("text2");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text3");
let moneyholder = document.getElementById('holder');
let sumbank = document.getElementById("bank");

const colorsTable5 = ['#8B0000','#FF8C00','#8FBC8F','#B8860B','#FFB6C1','#FF4500','#800080','#FF0000','#4169E1','#FA8072', '#F4A460', '#EE82EE', '#FFFF00', '#F5F5F5', '#FF00FF', '#FF69B4', '#4B0082', '#F0E68C'];


let i = -1;
let a = -1;
let b = -1;
let c = -1;
let x = 0;
let takeSumNum = document.getElementById("bank").innerHTML;
let sum = parseInt(takeSumNum.replace('$', ''));



// את הכפטורי הוספה הורדה אני רוצה לעשות שהם עודים דרך אובייקט
function add(){
  if(x > sum){
  text2.innerHTML = "no money in the bank";
  x = sum;
  moneyholder.innerHTML = "$" + sum;
}else{
  x = x + 10000;
  moneyholder.innerHTML = "$" + x;
 }
}

function sub(){
    x = x - 10000;
  if(x <= 0){
    x = 0;
    moneyholder.innerHTML = "$";
  }else if(x > sum){
    x = sum;
  moneyholder.innerHTML = "$" + sum ;
  }else{
    moneyholder.innerHTML = "$" + x;
  }
}

function add50(){
  if(x > sum){
  text2.innerHTML = "no money in the bank";
  x = sum;
  return moneyholder.innerHTML = "$" + sum;
  }else{
  x = x + 500000 ;
  moneyholder.innerHTML = "$" + x;
 }
}

function sub50(){
  x = x - 500000;
  if(x <= 0){
    x = 0;
    moneyholder.innerHTML = "$";
    }else if(x > sum){
    x = sum;
    moneyholder.innerHTML = "$" + sum;
  }else{
    moneyholder.innerHTML = "$" + x;
  }
}



function goldglow(){
  text2.classList.add("moneywon");
}


function win4(){
  if(a === i && b === c){
    text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 8) ;
    sum = sum + ( x * 8);
  sumbank.innerHTML = "$" + sum;
   
}else if(a === b && c === i){
  text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 8) ;
  sum = sum + ( x * 8);
  sumbank.innerHTML = "$" + sum;
  

}else if(a === c && b === i){
   text1.innerHTML = "WOW";
 goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 8) ;
  sum = sum + ( x * 8);
  sumbank.innerHTML = "$" + sum;
 
 }
}

function win3(){
  if(a === b && b === c && c === a){
  text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 10) ;
    sum = sum + ( x * 10);
  sumbank.innerHTML = "$" + sum;
   // moneyholder.innerHTML = "$$$$";
    
  }else if(i === b && b === c && c === i){
    text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 10) ;
    sum = sum + ( x * 10);
  sumbank.innerHTML = "$" + sum;
   // moneyholder.innerHTML = "$$$$";
    
  }else if(i === a && a === c && c === i){
    text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 10) ;
    sum = sum + ( x * 10);
  sumbank.innerHTML = "$" + sum;
   // moneyholder.innerHTML = "$$$$";
    
}else if(i === a && a === b && b === i){
  text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 10) ;
  sum = sum + ( x * 10);
  sumbank.innerHTML = "$" + sum;
 // moneyholder.innerHTML = "$$$$";
}
}

function win2(){
  if(i === a && a === b && b === c && c === i){
    text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 45) ;
  sum = sum + ( x * 45);
  sumbank.innerHTML = "$" + sum;
  //moneyholder.innerHTML = "$$$$";
  }
}

function random1(){
i = Math.floor(Math.random()* colorsTable5.length);
num1.style.backgroundColor = colorsTable5[i]; 
avatarColor1.style.backgroundColor = colorsTable5[i];
};

function random2(){
a = Math.floor(Math.random()* colorsTable5.length); 
num2.style.backgroundColor = colorsTable5[a];
avatarColor2.style.backgroundColor = colorsTable5[a];
};

function random3(){
b = Math.floor(Math.random()* colorsTable5.length); 
num3.style.backgroundColor = colorsTable5[b];
avatarColor3.style.backgroundColor = colorsTable5[b];
};

function random4(){
c = Math.floor(Math.random()* colorsTable5.length); 
num4.style.backgroundColor = colorsTable5[c];
avatarColor4.style.backgroundColor = colorsTable5[c];
};

function changewin2(){
if(a === b || a === i || b === i || a === c || b === c || c === i){
   h1text.innerHTML = "YOU WIN";
  text1.innerHTML = "WOW";
  text2.innerHTML = "YOU WON " + "$" +(x * 2);
  sum = sum + ( x * 2);
  sumbank.innerHTML = "$" + sum;
  addAvatarJump()
  goldglow();
  win4();
  win3();
  win2();
  }else{
  h1text.innerHTML = "COLOR MACH";
  text1.innerHTML = "lets Play";
  text2.innerHTML ="put some money in";
  text2.classList.remove("moneywon");
  sum = sum - x;
  sumbank.innerHTML = "$" + sum;
  removeAvatarJump()
 // moneyholder.innerHTML = "$$$$";
 }
}

function give500(){ 
  if(sumbank.innerHTML === "$$$$" ){
    sumbank.innerHTML = "$" + sum;
    }
}

function play(){
  if(moneyamount.innerHTML !== "$$$$"){
    moneyholder.innerHTML = "$" + x;
    moneyamount.innerHTML = "$$$$";
    text2.classList.remove("moneywon");
    text2.innerHTML = "put some money in";
    give500()
    //num4.classList.remove("spin");
  }
}


function newTabel(){
  text2.classList.remove("moneywon");
  h1text.innerHTML = "COLOR MACH";
  text1.innerHTML = "lets Play";
  text2.innerHTML ="put some money in";
}
 function addAvatarJump(){
   avatarColor1.classList.add("avatarJump");
   avatarColor2.classList.add("avatarJump");
   avatarColor3.classList.add("avatarJump");
   avatarColor4.classList.add("avatarJump");
 }

function removeAvatarJump(){
   avatarColor1.classList.remove("avatarJump");
   avatarColor2.classList.remove("avatarJump");
   avatarColor3.classList.remove("avatarJump");
   avatarColor4.classList.remove("avatarJump");
 }
//*להוסיף "אם" כדי לנסות לגרום לinput
//*להחלט אם אפשר לשחק או לא

function all(){
  newTabel();
  if(moneyholder.innerHTML === "" || moneyholder.innerHTML === "$" ){
    text2.classList.remove("moneywon");
    return text2.innerHTML = "NO MONEY WAS FOUND";
  }else if(sum <= 0 ){
    return text2.innerHTML = "NO MORE MONEY IN THE BANK";
  }else if(sum < x){ 
    return moneyholder.innerHTML = "$" + sum
  }else{
  random1();
  random2();
  random3();
  random4();
  changewin2();
  }
}


randomNum.onclick = all;
addAmount.onclick = add;
subAmount.onclick = sub;
addAmountBig.onclick = add50;
subAmountBig.onclick = sub50;



