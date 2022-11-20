
let music = new Audio("music.mp3");
let press = new Audio("press.mp3");
let gameOver = new Audio("gameOver.mp3");
let turn ="X";
let isGameOver = false;
let winner = "X";

let xScore=0;
let oScore=0;



//FUNCTION to change the turn
const changeTurn = ()=>{
    return turn ==="X"?"O":"X"
}


//Function to check for win 
const checkWin=()=>{
    let boxtext =document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won 🔥";
            isGameOver = true; 
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='100%';
            if(boxtext[e[0]].innerText === "X"){
            gameOver.play();
            gameOver.loop=true;
            xScore+=1;
            document.querySelector('.x').innerText = boxtext[e[0]].innerText + "-"+xScore;}
            else{
            music.play();
            music.loop=true;;    
            oScore+=1;
            document.querySelector('.o').innerText = boxtext[e[0]].innerText + "-"+oScore;
            }
        }
    })
}



//GAME LOGIC
//music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '' && !isGameOver){
            boxtext.innerText = turn;
            turn = changeTurn(turn);
            press.play();
            checkWin();
            if(!isGameOver){
            document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;}
        }
    })
})


// add on click listner to resest button 

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
        turn = "X";
        if(!isGameOver){
            document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;}
        isGameOver = false;
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='0px';
        music.pause(); 
        gameOver.pause();
       
    });
})