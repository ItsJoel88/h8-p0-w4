function perkalianUnik(arr){
    var tampungArray = []
    var dasarPerkalian 
    for(var i=0;i<arr.length;i++){
        dasarPerkalian = 1
        for(var j=0;j<arr.length;j++){
            if(i !== j){
                dasarPerkalian *= arr[j]
            }
        }
        tampungArray.push(dasarPerkalian)
    }
    return tampungArray
}
console.log(perkalianUnik([6,5,4,3,2])) // [120,144,180,240,360]