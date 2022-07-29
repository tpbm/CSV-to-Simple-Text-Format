/**
 * Author: Telmo Marinho (telmo_marinho@hotmail.com)
 * Built using NodeJS v16.15.0
 */

const getInput = require('./getinput');
const textConverter = require('./textconverter');

const greetings = () => {
	console.log("\nBem-vindo ao 'CSV to Simple Text File' convertor :-D");
	console.log('Para cada ficheiro, indique sempre a extensao.');
	console.log('A localizacao dos ficheiros eh relativa ao local de execucao.\n');
}

const execute = () => {
	
	greetings();
	
	getInput('Indique o ficheiro CSV: ').then(
		csvFile => {
			getInput('Indique o ficheiro final: ').then(
				resultFile => {
					getInput('Indique o ficheiro com o cabecalho: ').then(
						headerFile => {
							getInput('Indique o ficheiro com o rodape: ').then(
								footerFile => {
									getInput('Indique o ficheiro com o template: ').then(
										templateFile => {
											textConverter(csvFile, resultFile, headerFile, footerFile, templateFile, 'Ficheiro com o resultado criado!');
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