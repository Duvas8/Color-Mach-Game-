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

const colorsTable3 = ['#006400','#BDB76B','#556B2F','#483D8B','#2F4F4F','#696969','#8FBC8F','#808000','#8B4513','#F4A460', '#D2B48C', '#DEB887', '#8c6026', '#6f2700', '#A9A9A9'];


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
  x = x + 100;
  moneyholder.innerHTML = "$" + x;
 }
}

function sub(){
 x = x - 100;
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
  x = x + 5000 ;
  moneyholder.innerHTML = "$" + x;
 }
}

function sub50(){
  x = x - 5000;
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
  text2.innerHTML = "YOU WON " + "$" +(x * 4) ;
    sum = sum + ( x * 4);
  sumbank.innerHTML = "$" + sum;
   
}else if(a === b && c === i){
  text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 4) ;
  sum = sum + ( x * 4);
  sumbank.innerHTML = "$" + sum;
  

}else if(a === c && b === i){
   text1.innerHTML = "WOW";
 goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 4) ;
  sum = sum + ( x * 4);
  sumbank.innerHTML = "$" + sum;
 
 }
}

function win3(){
  if(a === b && b === c && c === a){
  text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 6) ;
    sum = sum + ( x * 6);
  sumbank.innerHTML = "$" + sum;
   // moneyholder.innerHTML = "$$$$";
    
  }else if(i === b && b === c && c === i){
    text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 6) ;
    sum = sum + ( x * 6);
  sumbank.innerHTML = "$" + sum;
   // moneyholder.innerHTML = "$$$$";
    
  }else if(i === a && a === c && c === i){
    text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 6) ;
    sum = sum + ( x * 6);
  sumbank.innerHTML = "$" + sum;
   // moneyholder.innerHTML = "$$$$";
    
}else if(i === a && a === b && b === i){
  text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 6) ;
  sum = sum + ( x * 6);
  sumbank.innerHTML = "$" + sum;
 // moneyholder.innerHTML = "$$$$";
}
}

function win2(){
  if(i === a && a === b && b === c && c === i){
    text1.innerHTML = "WOW";
  goldglow();
  text2.innerHTML = "YOU WON " + "$" +(x * 20) ;
  sum = sum + ( x * 20);
  sumbank.innerHTML = "$" + sum;
  //moneyholder.innerHTML = "$$$$";
  }
}

function random1(){
i = Math.floor(Math.random()* colorsTable3.length);
num1.style.backgroundColor = colorsTable3[i]; 
avatarColor1.style.backgroundColor = colorsTable3[i];
};

function random2(){
a = Math.floor(Math.random()* colorsTable3.length); 
num2.style.backgroundColor = colorsTable3[a];
avatarColor2.style.backgroundColor = colorsTable3[a];
};

function random3(){
b = Math.floor(Math.random()* colorsTable3.length); 
num3.style.backgroundColor = colorsTable3[b];
avatarColor3.style.backgroundColor = colorsTable3[b];
};

function random4(){
c = Math.floor(Math.random()* colorsTable3.length); 
num4.style.backgroundColor = colorsTable3[c];
avatarColor4.style.backgroundColor = colorsTable3[c];
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



