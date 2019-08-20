function countProfit (shoppers){
    var display = []
    var itemList = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ]
    for(var i=0;i<itemList.length;i++){
        var obj ={}
        var pembeli = []
        var sisaBarang = 0
        for(var j=0;j<shoppers.length;j++){
            if(shoppers[j].product===itemList[i][0] && sisaBarang+shoppers[j].amount<=itemList[i][2]){
                sisaBarang += shoppers[j].amount
                pembeli.push(shoppers[j].name)
            }
        }
        obj.product = itemList[i][0]
        obj.shoppers = pembeli
        obj.leftOver = itemList[i][2]-sisaBarang
        obj.totalProfit = itemList[i][1]*sisaBarang
        display.push(obj)
    }
    return display
}
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]))
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 5}])
