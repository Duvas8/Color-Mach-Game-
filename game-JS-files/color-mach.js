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

let gameTableIndex; 






const color = [
['#87CEFA','#A52A2A','#FF7F50','#00008B','#DDA0DD','#FF8C00','#9932CC','#FFD700','#32CD32','#DB7093'],

['#FFE4C4', '#DEB887', '#D2691E', '#FF7F50', '#A52A2A', '#DC143C', '#8B0000', '#E9967A', '#CD5C5C', '#FFB6C1', '#DB7093'],

['#006400','#BDB76B','#556B2F','#483D8B','#2F4F4F','#696969','#8FBC8F','#808000','#8B4513','#F4A460', '#D2B48C', '#DEB887', '#8c6026', '#6f2700', '#A9A9A9'],

['#2E8B57','#87CEEB','#6A5ACD','#4682B4','#008080','#40E0D0','#FFC0CB','#663399','#98FB98','#AFEEEE', '#90EE90', '#E0FFFF', '#1E90FF', '#BA55D3', '#191970'],

['#8B0000','#FF8C00','#8FBC8F','#B8860B','#FFB6C1','#FF4500','#800080','#FF0000','#4169E1','#FA8072', '#F4A460', '#EE82EE', '#FFFF00', '#F5F5F5', '#FF00FF', '#FF69B4', '#4B0082', '#F0E68C'],

['#00FFFF','#7FFF00','#FF7F50','#FF1493','#00BFFF','#1E90FF','#FF00FF','#F8F8FF','#FFD700','#ADFF2F', '#FF69B4', '#00FF00', '#FF00FF', '#0000CD', '#00FA9A', '#FFFF00', '#EE82EE', '#D8BFD8', '#DA70D6', '#0000CD', '#000080', '#FFDEAD', '#FFE4E1']

];





let numMultiplayer;
let i = -1;
let a = -1;
let b = -1;
let c = -1;
let x = 0;
let takeSumNum = document.querySelector("#bank").innerHTML;
let sum = parseInt(takeSumNum.replace('$', ''));

const onTableClick = async (e) => {
  
  const gameTableDataIndex = e.currentTarget.dataset.index;
  
  gameTableIndex = gameTableDataIndex;

  function getNumMultiplayer(gameTableDataIndex){
  numMultiplayer = Math.pow(10 , gameTableDataIndex)
  return numMultiplayer;
}
console.log(gameTableDataIndex);
getNumMultiplayer()
}


// את הכפטורי הוספה הורדה אני רוצה לעשות שהם עודים דרך אובייקט
function add(){
  if(x > sum){
  text2.innerHTML = "no money in the bank";
  x = sum;
  moneyholder.innerHTML = "$" + sum;
}else{
  x = x  + (1 * numMultiplayer)
  moneyholder.innerHTML = "$" + x;
 }
}

function sub(){
  x = x - (1 * numMultiplayer)
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
  x = x + (50 * numMultiplayer);
  moneyholder.innerHTML = "$" + x;
 }
}

function sub50(){
  x = x - (50 * numMultiplayer);
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
i = Math.floor(Math.random()* color[gameTableIndex].length);
num1.style.backgroundColor = color[gameTableIndex][i]; 
avatarColor1.style.backgroundColor = color[gameTableIndex][i];
};

function random2(){
a = Math.floor(Math.random()* color[gameTableIndex].length); 
num2.style.backgroundColor = color[gameTableIndex][a];
avatarColor2.style.backgroundColor = color[gameTableIndex][a];
};

function random3(){
b = Math.floor(Math.random()* color[gameTableIndex].length); 
num3.style.backgroundColor = color[gameTableIndex][b];
avatarColor3.style.backgroundColor = color[gameTableIndex][b];
};

function random4(){
c = Math.floor(Math.random()* color[gameTableIndex].length); 
//spin();
num4.style.backgroundColor = color[gameTableIndex][c];
avatarColor4.style.backgroundColor = color[gameTableIndex][c];
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









