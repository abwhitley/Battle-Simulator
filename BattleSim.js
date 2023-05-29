//Sprint 4 Battle Sim

class Player{
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

class Enemy{
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

/**
 * Creates a enemy object that uses a random number generator to
 * receive a enemyName and a className
 * 
 * @returns Enemy Object
 */
const createRandomEnemy = () => {
    var enemyArray = ["Goblin", "Dark Elf", "Skeleton", "Necromancer", "Troll"];
    var enemyClassArray = ["Warrior", "Ranger", "Mage"];

    //Created to store classes that apply to each type name
    //Some enemies can only have certain classes
    var randomEnemyClassArray = [];

    //Used to get a random enemy type from enemyArray
    var enemyNumber = Math.floor(Math.random() * (enemyArray.length - 1));
    var enemyName = enemyArray[enemyNumber];

    //Used to make an array of class types for certain enemy types
    //Adds Warrior to Goblin, Dark Elf, Skeleton, Troll
    if(enemyNumber == 0 || enemyNumber == 1 || enemyNumber == 2 || enemyNumber == 4){
        randomEnemyClassArray.push(enemyClassArray[0]);
    }
    //Adds Ranger to Goblin, Dark Elf
    if(enemyNumber == 0 || enemyNumber == 1){
        randomEnemyClassArray.push(enemyClassArray[1]);
    }
    //Adds Mage only to Necromancer. Array should only contain Mage if Necromancer is selected
    if(enemyNumber == 3){
        randomEnemyClassArray.push(enemyClassArray[2]);
    }

    //Random number generator is used to randomly select from the class array
    var randomClassNumber = Math.floor(Math.random() * (randomEnemyClassArray.length - 1));
    var enemyClass = randomEnemyClassArray[randomClassNumber];

    // Generate random health
    // Max of 75 to min of 25
    var health = Math.floor(Math.random() * (75 - 25 +1) + 25);

    var damage = Math.floor(Math.random() * (20 - 5 +1) + 5);

    return new Enemy(enemyName, enemyClass, health, damage);

}

/**
 * Created to use when a user has a certain number of option to pick from 
 * It will check and see if the right number was selected.
 * 
 * @param {*} numberOptions 
 * @param {*} repeatFunction
 *  
 * @returns The users choice or recalls the function that it was passed from.
 */
const enterNumberOptionPrompt = (numberOptions, repeatFunction) => {
    //Creates array with the number of options the user has to pick from
    var arr = Array.from({length: numberOptions}, (_, i) => i +1);
    userChoice = prompt("Enter number for option:");
    //Checks to see if the user input is in the "number of options"
    //Parse is needed because prompt only returns a string
    var choiceFound = arr.includes(parseInt(userChoice));
    if(choiceFound){
        return parseInt(userChoice);
    }else{
        repeatFunction();
    }
}

/**
 * Request User Input to create a Player Type
 * 
 * @returns Player object
 */
const requestUserInfo = () => {
    console.log("Enter your Characters name");
    const name = prompt("Enter Character Name");
    console.log("Choose Character Class:\n1:Warrior\n2:Ranger\n3:Mage")
    var charaenterChoice = enterNumberOptionPrompt(3, requestUserInfo);
    if(charaenterChoice == 1){
        var character = "Warrior"
        var damage = 15;
    } else if(charaenterChoice == 2){
        var character = "Ranger"
        var damage = 20;
    }else if(charaenterChoice == 3){
        var character = "Mage";
        var damage = 25;
    }else{
        console.log("This should not display");
    }

    console.log("Choose your race:\n1: Human\n2: Elf\n3: Ogre");
    var raceChoice = enterNumberOptionPrompt(3, requestUserInfo);
    if(raceChoice == 1){
        var race = "Human"
        var health = 100;
    }else if(raceChoice == 2){
        var race = "Elf";
        var health = 130;
    }else if(raceChoice == 3){
        var race = "Ogre";
        var health = 110;
    }else{
        console.log("This should not display");
    }
    console.log(name, character, race);
    return new Player(name, character, race, health, damage);
}

const battle = (user) => {

    var enemy = createRandomEnemy();

    var userAttack = user.damage;
    var enemyAttack = enemy.damage;

    // Used to check if enemy/user is alive
    var userAlive = true;
    var enemyAlive = true;

    // conditional loop until user/enemy is alive
    while(userAlive && enemyAlive) {
        enemy.getEnemyInfo();
        user.getPlayerInfo()

        // update health  after user attack 
        enemy.enemyHealth  = enemy.enemyHealth - userAttack;

        // Repeat as above for user health
        user.playerHealth = user.playerHealth - enemyAttack;

        enemy.getEnemyInfo();
        user.getPlayerInfo()



        // Conditional to checl if user/enemy is above 0
        // If health is <= 0 sets conditional to false and ends loop
        if(user.health <= 0){
            userAlive = false;
            console.log("You died")
        }
        if(enemy.enemyHealth <= 0){
            enemyAlive = false;
            console.log("Enemy died")
        }

    } 

}

var user = requestUserInfo();

battle(user);
