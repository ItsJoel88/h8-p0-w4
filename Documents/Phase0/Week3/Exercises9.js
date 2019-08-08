function cariMean(arr){

    var tampung = 0
    for(var i=0 ; i<arr.length;i++){
        tampung+=arr[i]
    }
    return Math.round(tampung/arr.length)
}
console.log(cariMean([2,3,4,5])) // 4
console.log(cariMean([9,8,7,6])) // 8