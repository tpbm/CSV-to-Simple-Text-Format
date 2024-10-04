function textConverterWeb() {
    
    headerFileContent = document.getElementById('header').value;
    repeatableFileContent = document.getElementById('repeatable').value;
    footerFileContent = document.getElementById('footer').value;
    csvFileContent = document.getElementById('source').value;
    
    // getting all lines from the data (CSV file)
    let csvLines = csvFileContent.split('\n');
    
    // creating the variable that will got the generated content, and adding to it the header
    let generatedContent = headerFileContent;
    
    // working on each line from CSV file
    csvLines.forEach(line => {
    	let csvFields = line.split(',');
    	let tmp = repeatableFileContent;
    	for (let j = 0; j < csvFields.length; ++j) {
    		tmp = tmp.replace(`{${j}}`, csvFields[j]);
    	}
    	// adding new each line to the generated content
    	generatedContent = generatedContent + tmp;
    	
    });
    
    // adding the footer to the generated content
    generatedContent = generatedContent + footerFileContent;
    
    // returning the result
    document.getElementById('output').value = generatedContent;
    
};