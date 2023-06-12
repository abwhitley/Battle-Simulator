// Simulation File

import {requestUserInfo, enterNumberOptionPrompt, createRandomEnemy} from "./utilities.js";


export const battle = (user) => {

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