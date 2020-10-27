const Dialogs = require('dialogs');
const dialogs = Dialogs();

var damagecounter = 0;
var giftmarker = 0;
var grade = 0;
var turn = 0;
var Power = 6000;

function UpdateDamage(){
    var damage = document.getElementById("damage");
    damage.innerHTML = "Damage: " + damagecounter;
    if (damagecounter >= 6){
        dialogs.alert("You win!");

        return;
    }
    let power = document.getElementById("power");
    Power = Power + 10000;
    power.innerHTML ="Power: " + Power;
    console.log("Damage: " + damagecounter);
    return;
}

function damage() {
    
    damagecounter +=1
    console.log(damagecounter);
    UpdateDamage();
    return;
}

function heal() {
    if (damagecounter > 0){
        damagecounter -= 1;
        UpdateDamage();
    }
    return;
}

function guard(){
    let playerpow = document.getElementById("player-attack").value;
    console.log(playerpow);
    var diceRoll = Math.floor( Math.random() * 6 ) +1;
    let difference = playerpow - Power;
    console.log(difference);
    if (difference < 0){
        dialogs.alert('The attack did not hit!');
        return;
    }
    if ((difference > 24000) && !(diceRoll == 2 || diceRoll == 6)){
        damage();
        dialogs.alert('The attack hit!\n The opponent gains +10000 until the end of turn.\n\n New Power: ' + Power);
        return;
    }
    if ((difference > 5000) && (difference < 25000) && (diceRoll == 1 || diceRoll == 3|| diceRoll == 5)){
        damage();
        dialogs.alert('The attack hit!\n The opponent gains +10000 until the end of turn.\n\n New Power: ' + Power);
        return;
    }
    if ((difference < 6000) && (diceRoll == 1 || diceRoll == 3)){
        damage();
        dialogs.alert('The attack hit!\n The opponent gains +10000 until the end of turn.\n\n New Power: ' + Power);
        return;
    }
    dialogs.alert('The attack did not hit!');
    return;
}



function attack(){
    var diceRoll = Math.floor( Math.random() * 6 ) +1;
    var attack = document.getElementById("attack-effect");
    switch(diceRoll){
        case 1:
            attack.innerHTML ="Retire one of opponent's rear-guards in the right column. Attack the vanguard and [Power]+10000 until end of turn.";
            break;
        case 2:
            attack.innerHTML ="Player chooses one of their own rear-guards and retires it. Attack the vanguard and [Power]+20000 until end of turn.";
            break;
        case 3:
            attack.innerHTML = "Retire one of opponent's rear-guards in the left column. Attack the vanguard and [Power]+10000 until end of turn.";
            break;
        case 4:
            attack.innerHTML = "Attack the vanguard.";
            break;
        case 5:
            attack.innerHTML = "If Aichi's damage is more than player's damage, he heals one damage. Attack the vanguard and [Power]+10000 until end of turn.";
            break;
        case 6:
            attack.innerHTML = "If Aichi's vanguard is grade 3, for the rest of the fight, its original [Critical] becomes 2 and [Power] becomes 18000. Roll a dice once again.";
            attack();
            break;
    }
}

function UpdateTurn(){
    turn += 1;
    let turnannounce = document.getElementById("turn");
    let picture = document.getElementById("character-image");
    let gradetext = document.getElementById("grade");
    let power = document.getElementById("power");
    let markertext = document.getElementById("marker");

    // AI Turn
    if (turn % 2 == 1){
        dialogs.alert("It is the opponents turn!");
        turnannounce.innerHTML = "Turn: Flame";

        if (grade < 3){
            grade +=1;
 
            gradetext.innerHTML = "Grade: " + grade;
            
            let vanguard;
            if (grade == 1)
            {
                vanguard = "G1";
                Power = 8000;
                power.innerHTML ="Power: " + Power;
            }
            if (grade == 2)
            {
                vanguard = "G2";
                Power = 10000;
                power.innerHTML ="Power: " + Power;
            }
            if (grade == 3)
            {
                vanguard = "G3";
                Power = 13000;
                power.innerHTML ="Power: " + Power;
            }
                picture.src = "../img/Character_Fights/Fire/" + vanguard + ".png";
        }
        if (grade == 3 && giftmarker < 4){
            giftmarker +=1;
            power.innerHTML = "Power: " + (Power + giftmarker*10000);
            markertext.innerHTML = "Gift Marker Counter: " + giftmarker;
        }
    }   
    //Player's turn aka Guarding
    else{
        dialogs.alert("It is the your turn!");
        turnannounce.innerHTML = "Turn: Player";
        if (grade == 1)
        {
            Power = 8000;
            power.innerHTML ="Power: " + Power;
        }
        if (grade == 2)
        {
            Power = 10000;
            power.innerHTML ="Power: " + Power;
        }
        if (grade == 3)
        {
            Power = 13000;
            power.innerHTML ="Power: " + Power;
        }
       
    }
}