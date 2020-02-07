const spacify = (str) => {
	let splitResult = str.split('..');
	if (splitResult.length === 1) return splitResult[0].split('').join(' ');
	for (let i=0; i< splitResult.length; i++)
		if(i%2 === 1) splitResult[i] = splitResult[i].split('').join(' ');
	return splitResult.join(' ');
}
module.exports = spacify;
