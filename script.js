console.log("Welcome tomtic tac toe")
let music = new Audio("bg.mp3");
let audioturn =new Audio("click.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X"  
let gmover=false
 
 //function to change the turn
 const changeturn =() => {
   return turn ==="X"?"0":"X"
 }
 //function to check for win
 const checkwin=() => {
  let boxtxt=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach (e=> {
       if((boxtxt[e[0]].innerText===boxtxt[e[1]].innerText) && (boxtxt[e[2]].innerText===boxtxt[e[1]].innerText) && (boxtxt[e[0]].innerText!=="")){
            document.querySelector('.info').innerText="Game Over!"+boxtxt[e[0]].innerText+" won"
            gmover=true
            gameover.play();
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="200px"
            document.querySelector(".line").style.width="20vw"
           
       }
    })
    
 }
 //Game logic
music.play()
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(Element => {
   let boxtext=Element.querySelector(".boxtext");
   Element.addEventListener("click",()=>{
    if(boxtext.innerText===''){
        boxtext.innerText=turn;
        turn = changeturn();
        audioturn.play();
        checkwin();
        if(!gmover){
           document.getElementsByClassName("info")[0].innerText="Trun for "+turn;
          
          
        }
    }
   })
 })
 //rred"
document.querySelector("#reset").addEventListener('click',() => {
  audioturn.play()
  let boxtext=document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach(e=>{
    e.innerText=""
   
  })
   turn="X"
   gmover=false
   document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="0"
   document.getElementsByClassName("info")[0].innerText="Trun for "+turn;
}
) 
 
 