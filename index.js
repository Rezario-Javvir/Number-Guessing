const label=document.getElementById("myLabel");
const input=document.getElementById("myInput");
const button=document.getElementById("confirm");
const boiled=document.getElementById("boiled");
const reset=document.getElementById("reset");


input.value=0;
let attempts=0;
let ranNum=Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let answer;

button.onclick=function(){
    attempts++;
    answer=input.value;

    if(answer==ranNum){
        label.innerText=`Congratulation you've guessed the right number with ${attempts} attempts :3`;
        if(attempts>5){
            label.innerText="Try to guess under 5 attempts next time";
            label.style.zIndex=9999;
            boiled.style.display="flex";
            const jumpscare=document.getElementById("jumpscare");
            jumpscare.play()
            label.style.color="white";
        }
    }
    
    else if(answer>ranNum){
        label.innerText=`Your number is too high`;
        const wrong=document.getElementById("wrong");
        wrong.play()
    }
    
    else if(answer<ranNum){
        label.innerText="Your number is too low";
        const wrong=document.getElementById("wrong");
        wrong.play()
    }
}

reset.onclick=function(){
    Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    attempts=0;
    input.value=0;
    label.innerText="Game successfully resetted"
}
