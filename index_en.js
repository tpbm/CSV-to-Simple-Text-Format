/**
 * Author: Telmo Marinho (telmo_marinho@hotmail.com)
 * Built using NodeJS v16.15.0
 */

const getInput = require('./getinput');
const textConverter = require('./textconverter');

const greetings = () => {
	console.log("\nWelcome to 'CSV to Simple Text File' convertor :-D");
	console.log('For each file, always indicate the extension.');
	console.log('The location of the files is relative to the execution location.\n');
}

const execute = () => {
	
	greetings();
	
	getInput('Indicate the CSV file: ').then(
		csvFile => {
			getInput('Indicate the final file: ').then(
				resultFile => {
					getInput('Indicate the file with the header: ').then(
						headerFile => {
							getInput('Indicate the file with the footer: ').then(
								footerFile => {
									getInput('Indicate the file with the template: ').then(
										templateFile => {
											textConverter(csvFile, resultFile, headerFile, footerFile, templateFile, 'File with the output created!');
										}
									);
								}
							);
						}
					);
				}
			);
		}
	);
};

execute();