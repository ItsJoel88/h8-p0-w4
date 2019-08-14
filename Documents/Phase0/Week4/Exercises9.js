function checkAB(str) { 
    if(str.includes('a')===false||str.includes('b')===false){
        return false
    }
    str = str.split("");
    for (var i = 0; i< str.length; i++){
      if (str[i] === "a" && (str[i-4] === "b" || str[i+4] === "b")){
        return true; 
      }
    }
    return false; 
}
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
console.log(checkAB('ABBA')) // false
console.log(checkAB('and i went and blew it')) // true