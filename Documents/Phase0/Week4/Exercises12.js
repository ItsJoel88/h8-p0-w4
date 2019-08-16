function countProfit (shoppers){
    var display = []
    var itemList = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ]
    var pembeliSepatu = []
    var pembeliBaju = []
    var pembeliSweater = []
    var jumlahSepatu = itemList[0][2]
    var jumlahBaju = itemList[1][2]
    var jumlahSweater = itemList[2][2]
    var profitSepatu = 0
    var profitBaju = 0
    var profitSweater = 0
    var pembeli
    var jumlah
    var profit

    for(var i=0;i<shoppers.length;i++){
        if(shoppers[i].product==='Sepatu Stacattu'){
            if(itemList[0][2]>=shoppers[i].amount){
                pembeliSepatu.push(shoppers[i].name)
                jumlahSepatu -=shoppers[i].amount  
                profitSepatu = profitSepatu + (shoppers[i].amount * itemList[0][1])          
            }
        }else if(shoppers[i].product==='Baju Zoro'){
            if(itemList[1][2]>=shoppers[i].amount){
                pembeliBaju.push(shoppers[i].name)
                jumlahBaju-=shoppers[i].amount
                profitBaju = profitBaju + (shoppers[i].amount * itemList[1][1])
            }
        }else if(shoppers[i].product==='Sweater Uniklooh'){
            if(itemList[2][2]>=shoppers[i].amount){
                pembeliSweater.push(shoppers[i].name)
                jumlahSweater-=shoppers[i].amount
                profitSweater = profitSweater + (shoppers[i].amount * itemList[2][1])
            }
        }
    }    
    for(var j =0;j<itemList.length;j++){
        if(itemList[j][0]==='Sepatu Stacattu'){
            pembeli = pembeliSepatu
            jumlah = jumlahSepatu
            profit = profitSepatu
        }else if(itemList[j][0]==='Baju Zoro'){
            pembeli = pembeliBaju
            jumlah = jumlahBaju
            profit = profitBaju
        }else if(itemList[j][0]==='Sweater Uniklooh'){
            pembeli = pembeliSweater
            jumlah = jumlahSweater
            profit = profitSweater
        }
        var object = {}
        object.product = itemList[j][0]
        object.name = pembeli
        object.leftOver = jumlah
        object.totalProfit = profit

        display.push(object)
    }
    return display
}
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]))
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]))
