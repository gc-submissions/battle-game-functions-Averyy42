"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor(Math.random()*(10-1)+1);
}
let chooseOption = (opt1, opt2) => {
    let randNum = Math.random() > 0.5 ? 1 : 0;
    if (randNum === 1) {
        return opt1;
    } else if (randNum === 0){
        return opt2;
    }
}
function attackPlayer(health) {
    return health - randomDamage();
}
const logHealth = (player,health) => {
    console.log (`${player} health: ${health}` );
}
function logDeath(winner,loser) {
    console.log(`${winner} defeated ${loser}`)
}
const isdead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
    }
}
function fight(player1, player2, player1Health, player2Health) {
    while (player1Health > 0 && player2Health > 0) {
        let attacker = chooseOption(player1,player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2,player2Health);
            if (isdead(player2Health) === true) {
                console.log(logDeath(player1,player2));
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1,player1Health);
            if (isdead(player1Health) === true) {
                console.log(logDeath(player2,player1));
                break;
            }
        }
    }
}
console.log(fight("Peppino", "Gustavo", 100, 100));