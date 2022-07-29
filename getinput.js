/**
 * Author: Telmo Marinho (telmo_marinho@hotmail.com)
 * Built using NodeJS v16.15.0
 */
 
const readline = require('readline');
const util = require('util');

async function getInput(prompt) {
	try {
		const rl = readline.createInterface({input: process.stdin, output: process.stdout});
		const question = util.promisify(rl.question).bind(rl);
		const input = await question(prompt);
		rl.close();
		return input;
	} catch(err) {
		throw new Error(err);
	}
}

module.exports = getInput;