function _spacify(str){ return str.split('').join(' ');}

const spacify = (str) => {
    let splitResult = str.split('..');
    if (splitResult.length === 1) return _spacify(splitResult);
    for (let i=0; i< splitResult.length; i++)
        if(i%2 === 1) splitResult[i] = _spacify(splitResult);
    return splitResult.join(' ');
}
module.exports = spacify;
