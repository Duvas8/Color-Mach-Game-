
let avatarColor1 = document.querySelector('.avatar1');
let avatarColor2 = document.querySelector('.avatar2');
let avatarColor3 = document.querySelector('.avatar3');
let avatarColor4 = document.querySelector('.avatar4');

const tableGameContainer = document.querySelector(".tabel-game-continer")
const tableContainer = document.querySelector(".table-continer")

    let accountBank = document.querySelector('.account-bank').innerHTML;
    let moneyInBank = accountBank.replace('$', '');

    let moneyToProgres = this.document.querySelector('.money-needed').innerHTML;
    let moneyToNextTable = moneyToProgres.replace('Money To Unlock $', '');

const tableIndex = tableContainer.dataset.index;
  
    
    function moneyNeeded() {
        if( moneyInBank < moneyToNextTable){
            this.document.querySelector('.tabel-continer').style.opacity = '0.5';
            return
        }
    }


    const onTableClick = async (e) => {
  
        const gameTableDataIndex = e.currentTarget.dataset.index;
        
        gameTableIndex = gameTableDataIndex;
       console.log(gameTableDataIndex);
     
      }


const color = [
 ['#87CEFA','#A52A2A','#FF7F50','#00008B','#DDA0DD','#FF8C00','#9932CC','#FFD700','#32CD32','#DB7093'],

 ['#FFE4C4', '#DEB887', '#D2691E', '#FF7F50', '#A52A2A', '#DC143C', '#8B0000', '#E9967A', '#CD5C5C', '#FFB6C1', '#DB7093'],

 ['#006400','#BDB76B','#556B2F','#483D8B','#2F4F4F','#696969','#8FBC8F','#808000','#8B4513','#F4A460', '#D2B48C', '#DEB887', '#8c6026', '#6f2700', '#A9A9A9'],

 ['#2E8B57','#87CEEB','#6A5ACD','#4682B4','#008080','#40E0D0','#FFC0CB','#663399','#98FB98','#AFEEEE', '#90EE90', '#E0FFFF', '#1E90FF', '#BA55D3', '#191970'],

 ['#8B0000','#FF8C00','#8FBC8F','#B8860B','#FFB6C1','#FF4500','#800080','#FF0000','#4169E1','#FA8072', '#F4A460', '#EE82EE', '#FFFF00', '#F5F5F5', '#FF00FF', '#FF69B4', '#4B0082', '#F0E68C'],

 ['#00FFFF','#7FFF00','#FF7F50','#FF1493','#00BFFF','#1E90FF','#FF00FF','#F8F8FF','#FFD700','#ADFF2F', '#FF69B4', '#00FF00', '#FF00FF', '#0000CD', '#00FA9A', '#FFFF00', '#EE82EE', '#D8BFD8', '#DA70D6', '#0000CD', '#000080', '#FFDEAD', '#FFE4E1']

];






function random1(){
    let i;
    i = Math.floor(Math.random()* color[tableIndex].length);
    avatarColor1.style.backgroundColor = color[tableIndex][i];
    };
    
    function random2(){
    let a;
    a = Math.floor(Math.random()* color[tableIndex].length); 
    avatarColor2.style.backgroundColor = color[tableIndex][a];
    };
    
    function random3(){
    let  b;
    b = Math.floor(Math.random()* color[tableIndex].length); 
    avatarColor3.style.backgroundColor = color[tableIndex][b];
    };
    
    function random4(){
    let c;
    c = Math.floor(Math.random()* color[tableIndex].length); 
    avatarColor4.style.backgroundColor = color[tableIndex][c];
    };
    avatarColor1.forEach(() => {
        random1()
});
    random1()
  /*for(let i = 0; i < tableContainer.length ; ++i){
      avatarColor1.forEach(random1());
      avatarColor2.forEach(random2());
      avatarColor3.forEach(random3());
      avatarColor4.forEach(random4());
  }*/
    
    

  