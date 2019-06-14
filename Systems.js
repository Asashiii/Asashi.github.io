function store(key, value) {
    localStorage.setItem(key, value);
}
var Equiped = {
     Starters: {
        //HasWeapons
        hasStick: false,
        hasWoodenSword: false,
        hasWoodenStaff: false,
        hasWoodenMace: false,
   
    //HasArmour
        hasRags: false,
        hasOldShirt: false,
        hasOldHat: false,
        hasSandals: false,
    }
    
     WeaponStats: {
        Stick: 5,
        WoodenSword: 10,
        Staff: 10, 10,
        Mace: 15,
    }

    ArmorStats: {
        Rags: 5,
        OldShirt: 5, 5,
        OldHat: 10,
        Sandals: 10, 10,
    }
};
function getName() {
    localStorage.setItem("N", prompt("What's your name?"));
    localStorage.setItem("D", 0);
    store("vitality", 50);
    store("endurance", 50);
    store("L", 1);
    store("maxhealth", parseInt(localStorage.vitality *.01) + parseInt(Math.floor(localStorage.endurance / 2)) + parseInt(Math.floor(localStorage.L / 2)));
    store("health", localStorage.maxhealth);
    store("strength", 50);
    store("mana", 10);
    store("experiencepoints", 0);
    store("statP", 5);
    store("maxmana", 10)
    store("maxki", 10)
    store("ki", 10)
    store("maxxp", 30);
    store("curxp", 0);
    store("STA", 25);
    store("MSTA", 25);
    store("attack", parseInt(Math.floor(localStorage.strength) + parseInt(localStorage.L)));
    store("defence", parseInt(parseInt(Math.floor(localStorage.endurance / 10))));
    store("Pch", 0);
    store("Flee", 0);
    store("MonsterHealth", 0);
    store("MMonsterHealth", 0);
    store("MAttack", 0);
    store("MName", 0);
    store("MAgility", 0);
    store("MDefense", 0);
    
    window.location.replace("Adventure.html");
    if (localStorage.ConMana === true) {
        //Launch Mana Storyline
}
    else {
        //Launch Ki Storyline
    }
}
    function testif() {
    if (localStorage.D === "0") {
           window.location.assign("Adventure.html");
} else {
    return;
}
}
function MorM() {
    document.getElementById("Fight").style.visibility = "hidden";
    document.getElementById("MorMs").style.visibility = "visible";
}


function load() {
    document.getElementById("N").innerHTML = "Name: " + localStorage.N;
    document.getElementById("mana").innerHTML = "Mana: " + localStorage.mana;
    document.getElementById("vitality").innerHTML = "Vitality: " + localStorage.vitality;
    document.getElementById("endurance").innerHTML = "Endurance: " + localStorage.endurance;
    document.getElementById("strength").innerHTML = "Strength: " + localStorage.strength;
    document.getElementById("sp").innerHTML = "Stat Points: " + localStorage.statP;
    document.getElementById("level").innerHTML = "Level: " + localStorage.L;
    document.getElementById("health").innerHTML = "Health: " + localStorage.health + " / " + localStorage.maxhealth;
    document.getElementById("him").innerHTML = "Health: " + localStorage.health + "/ " + localStorage.maxhealth;
    document.getElementById("STA").innerHTML = "Stamina: " + localStorage.STA + "/" + localStorage.MSTA;
}

function aload() {
    document.getElementById("him").innerHTML = "Health: " + localStorage.health + " / " + localStorage.maxhealth;
    document.getElementById("mim").innerHTML = "Mana: " + localStorage.mana + " / " + localStorage.maxmana;
    document.getElementById("kim").innerHTML = "Ki: " + localStorage.ki + " / " + localStorage.maxki;
    document.getElementById("xp").innerHTML = "XP: " + localStorage.curxp + " / " + localStorage.maxxp;

}
function rand(num){
    var ran = Math.floor(Math.random() * (num + 1));
    return ran;
}
function Puunch() {
    PunchAttack = Math.floor(localStorage.attack * .25);  //Punch Attack DMG
    PunchAfterDefence = rand(Math.floor(Math.floor(PunchAttack) - Math.floor(localStorage.MDefense))); //Sets punch pow. after defense is taken out
    if (PunchAfterDefence <= 0) {
        PunchAfterDefence = 1;
    }

    localStorage.MHealth = Math.floor(Math.floor(localStorage.MHealth) - Math.floor(PunchAfterDefence));//Uses punch and makes monster health go down
    document.getElementById("MHealth").innerHTML = "The Monster has " + localStorage.MHealth + " / " + localStorage.MMHealth + " Health";  //Updates their health
    document.getElementById("goP1").innerHTML = "You hit the " + localStorage.MName + " For " + PunchAfterDefence + " Damage!!"; // Tells you the damage you did
    MonsterAfterDefence = Math.floor(localStorage.MAttack - localStorage.defence); // Monsters attack dmg after including your defense
    localStorage.health = Math.floor(localStorage.health - MonsterAfterDefence); //Monster attacks you with MonsterAfterDefense, lowering health
    document.getElementById("YourHealth").innerHTML = "You have " + localStorage.health + " / " + localStorage.maxhealth + " Health"; //Updates your health
    document.getElementById("goP2").innerHTML = "The Slime has hit you for " + MonsterAfterDefence + " Damage!"
    
    if (localStorage.MHealth <= 0) { //If monster health is equal to or below 0, then end fight and give exp
    win();
    }
    else {
    nowin();
    }
}

function combat(monstername, monsterhealth, monsterattack, monsterdefence, monsteragility) {
    maxmonsterhealth = localStorage.MHealth; //Sets Max Monster Health
    localStorage.MMHealth = maxmonsterhealth;
    document.getElementById("Names").innerHTML = localStorage.N + " VS " + monstername; //Sets Name of you and Monster
    document.getElementById("YourHealth").innerHTML = "You have " + localStorage.health + " / " + localStorage.maxhealth + " Health" // Tells Your Health
    document.getElementById("MHealth").innerHTML ="The Monster has " + monsterhealth + " / " + maxmonsterhealth + " Health";  //Tells Monster Health

localStorage.experiencepoints = Math.floor(Math.floor(maxmonsterhealth) * .25)
    if (localStorage.experiencePoints >= 1) {
        localStorage.experiencepoints = 1;
    }//EXP for killing monster
    if (localStorage.Flee === 1) { //This makes you run away
        print("NSelection", "You Fled!");
    }

    else {
        ;
    }
}
function adventure(floor) {
    if (localStorage.health >= 1) {
        var naturalSelection = getRandomInt(floor);
            if (naturalSelection >= 1 && naturalSelection < 2) {
                localStorage.MName = "Slime";
                localStorage.MHealth = 20;
                localStorage.MAttack = 14;
                localStorage.MDefense = 5;
                localStorage.MAgility = 7;
            combat(localStorage.MName, localStorage.MHealth, localStorage.MAttack, localStorage.MDefense, localStorage.MAgility);
            } 
            if (naturalSelection >= 0 && naturalSelection < 1){
                localStorage.MName = "Slime";
                localStorage.MHealth = 31;
                localStorage.MAttack = 6;
                localStorage.MDefense = 7;
                localStorage.MAgility = 2;
            combat(localStorage.MName, localStorage.MHealth, localStorage.MAttack, localStorage.MDefense, localStorage.MAgility);
            }
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function levelUp() {
      if (localStorage.curxp <= localStorage.maxxp) {
        localStorage.L = Math.floor(Math.floor(localStorage.L) + 1); 
        localStorage.statP =  Math.floor(Math.floor(localStorage.statP) + 5) ;
        localStorage.maxxp = localStorage.maxxp * 3
        localStorage.curxp = Math.floor(Math.floor(localStorage.curxp) - Math.floor(localStorage.maxxp));
        document.getElementById("xp").InnerHTML = "XP: " + localStorage.curxp + " / " + localStorage.maxx;
    }
}
function FightScreen() {
    document.getElementById("Middle").style.visibility = "visible";
    document.getElementById("FightThing").style.visibility = "hidden";
    document.getElementById("menubody").style.backgroundColor = "Black";
    adventure(2);
    document.getElementById("Melee").style.visibility = "hidden";
    document.getElementById("Fight").style.visibility = "visible";
}

function MeleeBu() {
    document.getElementById("MorMs").style.visibility = "hidden";
    document.getElementById("Melee").style.visibility = "visible";
}

function MagicBu() {
    
}

function Fleey() {
    localStorage.Flee = 1;
    document.getElementById("Middle").style.visibility = "hidden";
    document.getElementById("FightThing").style.visibility = "visible";
    document.getElementById("menubody").style.backgroundColor = "rgb(5, 5, 5)";
    document.getElementById("MorMs").style.visibility = "hidden";
    document.getElementById("Melee").style.visibility = "hidden";
    document.getElementById("Fight").style.visibility = "hidden";
 
}

function win() {
    document.getElementById("Middle").style.visibility = "hidden";
    document.getElementById("FightThing").style.visibility = "visible";
    document.getElementById("menubody").style.backgroundColor = "rgb(5, 5, 5)";
    document.getElementById("MorMs").style.visibility = "hidden";
    document.getElementById("Melee").style.visibility = "hidden";
    document.getElementById("Fight").style.visibility = "hidden";
    localStorage.curxp = Math.floor(Math.floor(localStorage.curxp) + Math.floor(localStorage.experiencepoints));
    document.getElementById("xp").innerHTML =  "XP: " + localStorage.curxp + " / " + localStorage.maxxp;
    document.getElementById("him").innerHTML = "Health: " + localStorage.health + " / " + localStorage.maxhealth
    levelUp();
    }
function nowin() {
    if (localStorage.health <= 0) { //If monster health is equal to or below 0, then end fight and give exp
    document.getElementById("Middle").style.visibility = "hidden";
    document.getElementById("FightThing").style.visibility = "visible"
    document.getElementById("menubody").style.backgroundColor = "rgb(5, 5, 5)";
    document.getElementById("MorMs").style.visibility = "hidden";
    document.getElementById("Melee").style.visibility = "hidden";
    document.getElementById("Fight").style.visibility = "hidden";
    document.getElementById("him").innerHTML = "Health: " + localStorage.health + " / " + localStorage.maxhealth;
    document.getElementById("NSelection").innerHTML = "You Lose! Go To Sleep!"

    }
}

function GoBack() {
        document.getElementById("Middle").style.visibility = "visible";
    document.getElementById("FightThing").style.visibility = "hidden";
    document.getElementById("menubody").style.backgroundColor = "Black";
    document.getElementById("Melee").style.visibility = "hidden";
    document.getElementById("Fight").style.visibility = "visible";
    document.getElementById("MorMs").style.visibility = "hidden";
}

function Vitadd() {
    if (localStorage.vitality === 1000) {
        return;
    }
    if (localStorage.statP >= 1) {
        localStorage.vitality = parseInt(localStorage.vitality) + parseInt(5);
        localStorage.statP = parseInt(localStorage.statP) - parseInt(1);
        localStorage.maxhealth = parseInt(parseInt(localStorage.vitality * .01) + parseInt(localStorage.endurance / 2) + parseInt(localStorage.L / 2));
        localStorage.health = localStorage.maxhealth;
        document.getElementById("health").innerHTML = "Health: " + localStorage.health + " / " + localStorage.maxhealth;
        document.getElementById("vitality").innerHTML = "Vitality: " + localStorage.vitality;
        
    }
}
function Manadd() {
    if (localStorage.statP >= "1")
    if (localStorage.mana === "1000")
        return;
    else {
        localStorage.maxmana = parseInt(localStorage.maxmana) + parseInt(5);
        localStorage.statP = parseInt(localStorage.statP) - parseInt(1);
        load();
    }
        
}
function Strengthadd() {
    if (localStorage.statP >= 1) {
        localStorage.strength = parseInt(localStorage.strength) + parseInt(5);
        localStorage.statP = parseInt(parseInt(localStorage.statP) - parseInt(1));
        localStorage.attack = parseInt(Math.floor(localStorage.strength) + parseInt(localStorage.L));
        document.getElementById("strength").innerHTML = "Strength: " + localStorage.strength
    }
}
    
function sleep() {
    localStorage.health = localStorage.maxhealth
    if (localStorage.health < localStorage.maxhealth) {
        localStorage.health = localStorage.maxhealth
        location.reload()
    }
    else {
        location.reload()
    }
}

