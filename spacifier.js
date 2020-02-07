const spacify = (str) => {
    let text = str.split(/[\r\n]+/g);
    let output = [];

    for (line of text){
        let textToPrettify = line.match(/(\.,.+?,\.)/g);
        for (match of textToPrettify){
            line = line.replace(match, ` ${(match.slice(2,-2).split('').join(' '))} `);
        }
        output.push(line.trim());
    }

    return output.join('\n');
}

exports.spacify = spacify;

/*console.log(spacify(`hello this text is a .,text,. and this is a second .,one,.
hello .,this,. text is a .,text,. and .,this,. is a second`));*/