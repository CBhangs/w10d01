function capitalize(str) {
    const capitalizes = str => {
        let arrString = str.split(" ");
        const returnString = [];
        
        arrString.forEach (item => {
            let firstChar = item[0].toUpperCase();
            let otherLetters = item.slice(1);
            returnString.push(firstChar.concat(otherLetters));
        });

        return returnString.join(" ");
        }
}
module.exports ={
    capitalize
}