function hitungJumlahKata(kalimat){
    var simpan = kalimat.split(" ")
    var simpanPanjang = simpan.length
    return simpanPanjang
}

console.log(hitungJumlahKata('what is your name ?')) // 5