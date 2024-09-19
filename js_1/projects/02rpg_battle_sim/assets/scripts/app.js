const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

//* These constants are optional but reduce the risk of creating typos / errors when passing in strings to functions that accept them.
const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let battleLog = [];
let lastLoggedEntry;

//* Allowing the user to choose the max life
function getMaxLifeValues() {
	const enteredValue = prompt(
		"What should be maximum life for you and the monster be?",
		"100"
	);

	const parsedValue = parseInt(enteredValue);
	if (isNaN(parsedValue) || parsedValue <= 0) {
		throw { message: "Invalid user input; not a number." };
	}
	return parsedValue;
}

let chosenMaxLife;

try {
	chosenMaxLife = getMaxLifeValues();
} catch (error) {
	console.log(error);
	chosenMaxLife = 100;
  alert("Invalid max HP, default value of 100 will be used.")
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
	let logEntry;
	//* This can be reduced by populating the logEntry above and only changing things like 'target' in the conditional check. e.g. logEntry.target = "PLAYER"

	switch (event) {
		case LOG_EVENT_PLAYER_ATTACK:
			logEntry = {
				event: event,
				value: value,
				target: "MONSTER",
				finalMonsterHealth: monsterHealth,
				finalPlayerHealth: playerHealth,
			};
			break;
		case LOG_EVENT_STRONG_ATTACK:
			logEntry = {
				event: event,
				value: value,
				target: "MONSTER",
				finalMonsterHealth: monsterHealth,
				finalPlayerHealth: playerHealth,
			};
			break;
		case LOG_EVENT_MONSTER_ATTACK:
			logEntry = {
				event: event,
				value: value,
				target: "PLAYER",
				finalMonsterHealth: monsterHealth,
				finalPlayerHealth: playerHealth,
			};
			break;
		case LOG_EVENT_PLAYER_HEAL:
			logEntry = {
				event: event,
				value: value,
				target: "PLAYER",
				finalMonsterHealth: monsterHealth,
				finalPlayerHealth: playerHealth,
			};
			break;
		case LOG_EVENT_GAME_OVER:
			logEntry = {
				event: event,
				value: value,
				finalMonsterHealth: monsterHealth,
				finalPlayerHealth: playerHealth,
			};
			break;
		default:
			logEntry = {};
	}
	battleLog.push(logEntry);
}

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

	writeToLog(
		LOG_EVENT_MONSTER_ATTACK,
		playerDamage,
		currentMonsterHealth,
		currentPlayerHealth
	);

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerHealth;
		setPlayerHealth(initialPlayerHealth);
		alert("Bonus life to the rescue!");
	}

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert("Winner winner, chicken dinner!");
		writeToLog(
			LOG_EVENT_GAME_OVER,
			"PLAYER VICTORIOUS",
			currentMonsterHealth,
			currentPlayerHealth
		);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert("Whoops, time to grind some more. Play again?");
		writeToLog(
			LOG_EVENT_MONSTER_ATTACK,
			"MONSTER VICTORIOUS",
			currentMonsterHealth,
			currentPlayerHealth
		);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		alert("Draw!");
		writeToLog(
			LOG_EVENT_MONSTER_ATTACK,
			"YOU BOTH FAINTED.",
			currentMonsterHealth,
			currentPlayerHealth
		);
	}

	if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
		reset();
	}
}

function attackMonster(attackType) {
	const maxDamage =
		attackType === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
	const logEvent =
		attackType === MODE_ATTACK
			? LOG_EVENT_PLAYER_ATTACK
			: LOG_EVENT_STRONG_ATTACK;
	// if (attackType === MODE_ATTACK) {
	// 	maxDamage = ATTACK_VALUE;
	//   logEvent = LOG_EVENT_PLAYER_ATTACK;
	// } else if ((attackType = MODE_STRONG_ATTACK)) {
	// 	maxDamage = STRONG_ATTACK_VALUE;
	//   logEvent = LOG_EVENT_STRONG_ATTACK;
	// }

	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;
	writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
	endRound();
}

function attackHandler() {
	attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
	attackMonster(MODE_STRONG_ATTACK);
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
	writeToLog(
		LOG_EVENT_PLAYER_HEAL,
		healValue,
		currentMonsterHealth,
		currentPlayerHealth
	);
	endRound();
}

function printLogHandler() {
	// let j = 0;
	// while (j < 3) {
	//   console.log('---------')
	//   j++;
	// }

	let i = 0;
	//? For Arrays:
	for (const logEntry of battleLog) {
		if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
			console.log(`#${i}`);
			for (const key in logEntry) {
				console.log(`${key} ==> ${logEntry[key]}`);
			}
			lastLoggedEntry = i;
			break;
		}
		i++;
	}
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
