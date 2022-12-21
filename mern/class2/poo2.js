class SuperHero {
    constructor(heroName, gender, skills, secretId, attack, powerLevel) {
        this.heroName = heroName;
        this.gender = gender;
        this.skills = skills;
        this.secretId = secretId;
        this.powerLevel = powerLevel ? powerLevel : 1000;
        this.attack = attack;
    };

    fight(destination) {
        destination.powerLevel -= this.attack;
        console.log(`Ups! ${destination.heroName} ahora tu nivel de poder es ${destination.powerLevel}`);
    }

    fly(distance) {
        if(this.skills.includes('fly')) {
            this.powerLevel -= distance;
            console.log(`${this.heroName} estás volando`);
        } else {
            console.log(`${this.heroName} no tienes alas ni capa para volar buuuuuu!`);
        }
    }

    rechargePower(foodQty) {
        this.powerLevel += foodQty;
        console.log(`${this.heroName} has recuperado ${foodQty} de poder`);
    }
}

class Sidekicks extends SuperHero {
    constructor(heroName, gender, skills, secretId) {
        super(heroName, gender, skills, secretId);
        this.powerLevel = 500;
        this.attack = 10;
    }
}

const aquaMan = new SuperHero('aquaMan', 'masculino', 
    ['swim', 'mindControl', 'superStrong', 'breatheUnderwater'], 'Arthur', 250);

const thor = new SuperHero('thor', 'masculino', 
    ['superStrong', 'fly', 'highInmunity'], 'Thor', 350, 2000);

aquaMan.fight(thor);

aquaMan.fight(thor);

thor.fight(aquaMan);
// console.log("🚀 ~ file: poo2.js:44 ~ thor", thor)

// console.log("🚀 ~ file: poo2.js:40 ~ aquaMan", aquaMan)

const robin = new Sidekicks('robin', 'masculino', ['agility', 'superSmart'], 'robin');
console.log("🚀 ~ file: poo2.js:55 ~ robin", robin)

robin.fly(100);
