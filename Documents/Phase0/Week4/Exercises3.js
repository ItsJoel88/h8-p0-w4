function median(arr){
    var tengah = arr.length/2
  
    if (arr.length % 2 === 1){
        tengah = Math.floor(tengah)
        return arr[tengah];
    }else{
        return (arr[tengah - 1] + arr[tengah]) / 2;
    }
  }
  console.log(median([1, 2, 3, 4, 5])) // 3
  console.log(median([1, 3, 4, 10, 12, 13])) // 7
  console.log(median([3, 4, 7, 6, 10])) // 7
  console.log(median([1, 3, 3])) // 3
  console.log(median([7, 7, 8, 8])) // 7.5
