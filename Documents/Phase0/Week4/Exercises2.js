function fpb(angka1,angka2){
    var tampung
    for(var i=0;i<angka1;i++){
        if(angka1%i===0 && angka2%i===0){
            tampung=i
        }
    }
    return tampung
}
console.log(fpb(12, 16));  
console.log(fpb(50, 40));  
console.log(fpb(22, 99));  
console.log(fpb(24, 36)); 
console.log(fpb(17, 23));