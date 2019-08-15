function shoppingTime(memberId,money){
    var changeMoney = money
    var barangTerbeli = []
    var output = {}
    if(memberId === ''||memberId===undefined || (memberId===undefined && money===undefined)){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else{
        if(money<50000 || money === undefined){
            return 'Mohon maaf, uang tidak cukup'
        }else{
            var itemList = [
                ['Sepatu Stacattu',1500000],
                ['Baju Zoro',500000],
                ['Baju H&N',250000],
                ['Sweater Uniklooh',175000],
                ['Casing Handphone',50000]
            ]
            for(var i =0;i<itemList.length;i++){
                if(money >= itemList[i][1]){
                    changeMoney = changeMoney - itemList[i][1]
                    barangTerbeli.push(itemList[i][0])
                }
            }
            output.memberId = memberId
            output.money = money
            output.listPurchased = barangTerbeli
            output.changeMoney = changeMoney
            return output
        }
    }
}
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja