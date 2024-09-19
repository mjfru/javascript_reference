const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

//* Ensuring the enemy hits the player after every turn, regardless of player's action.
//* Also checking win conditions after each turn.
function endRound() {
	const initialPlayerHealth = currentPlayerHealth;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerHealth;
		setPlayerHealth(initialPlayerHealth);
		alert("Bonus life to the rescue!");
	}

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert("Winner winner, chicken dinner!");

	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert("Whoops, time to grind some more. Play again?");

	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		alert("Draw!");

	}

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(attackType) {
	let maxDamage;
	if (attackType === "ATTACK") {
		maxDamage = ATTACK_VALUE;
	} else {
		maxDamage = STRONG_ATTACK_VALUE;
	}

	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;
	endRound();
}

function attackHandler() {
	attackMonster("ATTACK");
}

function strongAttackHandler() {
	attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
	let healValue;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		alert("You can't heal more than your max HP.");
		//* Heal up to max health, but not above it.
		healValue = chosenMaxLife - currentPlayerHealth;
	} else {
		healValue = HEAL_VALUE;
	}
	increasePlayerHealth(HEAL_VALUE);
	currentPlayerHealth += healValue;
	endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);