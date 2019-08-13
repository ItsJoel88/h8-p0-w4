function angkaPrima(angka){
    if(angka<3){
        if(angka === 1){
            return false
        }else{
            return true
        }
    }else{
        for(var i =3;i<angka;i++){
            if(angka % i === 0 ){
                return false
            }
        }
        return true
    }
}
console.log(angkaPrima(11)) // true
console.log(angkaPrima(12)) // false