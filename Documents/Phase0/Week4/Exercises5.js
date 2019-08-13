function ubahHuruf(kata){
    var hurufKecil = kata.toLowerCase()
    var output = ''
    for(var i=0;i<hurufKecil.length;i++){
        if(hurufKecil.charCodeAt(i)===122){
            output+='a'
        }else if(hurufKecil.charCodeAt(i)>=97 && hurufKecil.charCodeAt(i)<=121){
            output+=String.fromCharCode(hurufKecil.charCodeAt(i)+1)
        }
    }
    return output
}
console.log(ubahHuruf('wow')) // xpx
console.log(ubahHuruf('developer')) // efwfmpqfs
console.log(ubahHuruf('javascript')) // kbwbtdsjqu
console.log(ubahHuruf('keren')) // lfsfo
console.log(ubahHuruf('semangat')) // tfnbohbu
console.log(ubahHuruf('ABCDEFG')) //bcdefgh
console.log(ubahHuruf('xyz')) //yza