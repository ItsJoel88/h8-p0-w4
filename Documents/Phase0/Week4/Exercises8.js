function tukarBesarKecil(kalimat){
    var output = []
    for(var i=0;i<kalimat.length;i++){
        if(kalimat.charCodeAt(i)>=65 && kalimat.charCodeAt(i)<=90){
            output.push(kalimat[i].toLowerCase())
        }else{
            output.push(kalimat[i].toUpperCase())
        }
    }
    return output.join('')
}
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"