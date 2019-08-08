function tentukanDeretGeometri(arr) {
    var tampungSelisih = arr[1]/arr[0]
    for (var i =0; i < arr.length-1 ; i++) {
      if (arr[i+1] / arr[i] === tampungSelisih) {
        continue
      }else{
        return false;
      }
    }
    return true
  }
  console.log(tentukanDeretGeometri([1,3,9,27])) //true
  console.log(tentukanDeretGeometri([1,2,3])) //false
  console.log(tentukanDeretGeometri([3,9,27,81])) //true