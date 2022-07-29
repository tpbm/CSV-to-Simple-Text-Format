/**
 * Author: Telmo Marinho (telmo_marinho@hotmail.com)
 * Built using NodeJS v16.15.0
 */
 
const fs = require('fs');
const readFile = require('./readfile');

async function textConverter(csvFile, resultFile, headerFile, footerFile, templateFile, outputMessage) {
	
	let csvFileContent = await readFile(csvFile);
	let headerFileContent = await readFile(headerFile);
	let footerFileContent = await readFile(footerFile);
	let templateFileContent = await readFile(templateFile);
	
	// if all files exist...
	
	// getting all lines from the data (CSV file)
	let csvLines = csvFileContent.split('\r\n');
	
	// creating the variable that will got the generated content, and adding to it the header
	let generatedContent = headerFileContent;
	
	// working on each line from CSV file
	csvLines.forEach(line => {
		let csvFields = line.split(',');
		let tmp = templateFileContent;
		for (let j = 0; j < csvFields.length; ++j) {
			tmp = tmp.replace(`{${j}}`, csvFields[j]);
		}
		// adding new each line to the generated content
		generatedContent = generatedContent + tmp;
		
	});
	
	// adding the footer to the generated content
	generatedContent = generatedContent + footerFileContent;
	
	// writting the result content into the file
	fs.writeFile(resultFile, generatedContent, 'utf-8', (err)=> {
		if (err === null) {
			// if the content were written successfully
			console.log(outputMessage);
		}
		else {
			console.log(error );
		}				
	});
	
};

module.exports = textConverter;