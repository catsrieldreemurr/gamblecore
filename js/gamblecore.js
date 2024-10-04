const slots = document.getElementsByClassName("slot");
const start = document.getElementById("start");

const lost = document.getElementById("lost");

//snd
const bad = document.getElementById("bad");
const good = document.getElementById("good");

const possible = ["🍉", "🍌", "🍎", "🍏", "🌸", "🍋", "🍊", "🍒", "🎃", "🥝", "🍇", "🍐", "🥭", "🍈", "❌"]

let points = 0

function gen(){
    let rand = Math.floor(Math.random() * possible.length);
    let fruit = possible[rand];

    return fruit;
}

start.onclick = () => {
    for(let i = 0; i < slots.length; i++){
        slots[i].innerHTML = `${gen()}`;
    }

    if(slots[0].innerHTML === slots[1].innerHTML && slots[0].innerHTML === slots[2].innerHTML){
        if(slots[0].innerHTML !== possible[15]){
            points += 500;
            lost.innerHTML = `Points won: ${points}`;
            good.play();
        } else{
            points -= 500;
            lost.innerHTML = `Points won: ${points}`;
            bad.play();
        }
    } 
    else{
        points -= 5;
        lost.innerHTML = `Points won: ${points}`;
    }
}

