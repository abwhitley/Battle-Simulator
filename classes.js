//Classes File

export class Player{
    constructor(name, race, characterClass, health, damage){
        this.name = name;
        this.race = race;
        this.characterClass = characterClass;
        this.health = health;
        this.damage = damage;
    }
    getPlayerInfo(){
        console.log(`Name: ${this.name}\nRace: ${this.race}\nCharacter Class: ${this.characterClass}\nHealth: ${this.health}\nDamage: ${this.damage}`);
    }

    get playerHealth() {
        return this.health;
    }

    set playerHealth(newHealth) {
        this.health = newHealth;
    }
}

export class Enemy{
    constructor(race, characterClass, health, damage){
        this.race = race;
        this.characterClass = characterClass;
        this.health = health;
        this.damage = damage;
    }
    getEnemyInfo(){
        console.log(`Race: ${this.race}\nCharacter Class: ${this.characterClass}\nHealth: ${this.health}\nDamage: ${this.damage}`);
    }
    get enemyHealth(){
        return this.health;
    }

    set enemyHealth(newHealth){
        this.health = newHealth;
    }
}