function naikAngkot (arrPenumpang){
    if(arrPenumpang.length<=0){
        return []
    }
    var rute = ['A', 'B', 'C', 'D', 'E', 'F']
    var start
    var end 
    var namaPenumpang
    var result = []
    for(var i=0;i<arrPenumpang.length;i++){
        var tarif = 0
        namaPenumpang = arrPenumpang[i][0]
        start = arrPenumpang[i][1]
        end = arrPenumpang[i][2]
        for(var j=rute.indexOf(start)+1;j<rute.length;j++){
            tarif+=2000
            if(rute[j]===arrPenumpang[i][2]){
                break
            }
        }
        var object = {}
        object.penumpang = namaPenumpang
        object.naikDari = start
        object.tujuan = end
        object.bayar = tarif
        result.push(object)
    }
    return result
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]))
console.log(naikAngkot([])) //[]

