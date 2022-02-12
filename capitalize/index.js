const capitalize =(str)=>{
    let arrString = str.split(" ");
   //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    const final = arrString.map(element => {
        let firstChar = element.charAt(0).toUpperCase();
        let otherChar = element.slice(1);
        return firstChar + otherChar
    });
    return final.join(" ");
}

module.exports ={
    capitalize
}
