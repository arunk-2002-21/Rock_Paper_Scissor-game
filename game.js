let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score")

const gencompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const draw = () =>{
    msg.innerText="Game Was Draw, Play Again!";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userwin, userChoice, compChoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame = (userChoice) =>{
    // console.log("User choice =",userChoice);
    //gen comp choice
    const compChoice=gencompChoice();
    // console.log("Comp choice =",compChoice);

    if(userChoice === compChoice)
    {
        //draw game
        draw();
    }

    else{
        let userwin=true;
    
        if(userChoice === 'rock')
        {
            //comp choices paper,scissor
            userwin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper')
        {
            //comp choices rock,scissor
            userwin = compChoice === 'scissor' ? false : true;
        }
        else{
            //comp choices rock,paper
            userwin =compChoice === 'rock' ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
       playgame(userChoice);
    });
});