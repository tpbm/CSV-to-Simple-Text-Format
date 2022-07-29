/**
 * Author: Telmo Marinho (telmo_marinho@hotmail.com)
 * Built using NodeJS v16.15.0
 */

const fs = require('fs/promises');

async function readFile(fileName) {
	try {
		let content = fs.readFile(fileName, { encoding: 'utf-8' });
		return await content;
	}
	catch(err) {
		throw new Error(err);
	}
}

module.exports = readFile;