const fs = require("fs/promises");
const fileName = "myfile.txt";
// const fileContent = "An online learning platform";
const updateFile = async (fileName, fileContent) => {
	// write code here
	// dont change function name
	try {
		const existingContent = await fs.readFile(filename, "utf-8");
		const updatedContent = existingContent + "," + fileContent;
		await fs.appendFile(fileName, updatedContent);
		console.log(`FILE ${fileName} CREATED SUCCESFULLY`);
	} catch (error) {
		console.error("ERROR WHILE UPDATING THE FILE");
		return null;
	}
};
// console.log(newFile);
module.exports = updateFile;
