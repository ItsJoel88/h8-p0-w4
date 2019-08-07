function pasanganTerbesar(num){
  
    var b=num+''
    var c=b.split('').map(Number)
    var tampung=c.indexOf(Math.max(...c))
    var angkaBesar1=c.splice(tampung,1)+''
    var tampung1=c.indexOf(Math.max(...c))
    var angkaBesar2=c.splice(tampung1,1)+''
    return angkaBesar1+angkaBesar2
}

console.log(pasanganTerbesar(12345)) // 54
console.log(pasanganTerbesar(918325105)) //98
console.log(pasanganTerbesar(2876587263)) //88