function digitPerkalianMinimum(num){
    var penyimpan =[]
    var tampung =[]
    var output = ''
    if(num<=10){
        return 2
    }else{
        for(var i = 0;i<=num;i++){
            if(num%i===0){
                penyimpan.push(i)
            }
        }
        for(var j=0;j<penyimpan.length;j++){
            for(var k=1;k<penyimpan.length;k++){
                if(penyimpan[j]*penyimpan[k]===num){
                    tampung[j] = penyimpan[j].toString() + penyimpan[k].toString() 
                }
            }
        }
        for(var i = 0;i<tampung.length-1;i++){
            if(tampung[i].length<tampung[i+1].length){
                output += tampung[i].length
            }else{
                output += tampung[i+1].length
            }
        }
        if(tampung.length>1){
            return Math.min(...output)
        }else{
            return tampung[0].length
        }
    }
}
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
console.log(digitPerkalianMinimum(25)); // 2
console.log(digitPerkalianMinimum(181)); // 4
