function cariModus(arr1){
    var f = 1 
    var countUp = 0;  
    var cekAngka = arr1.filter(function(item1,index){
        return arr1.indexOf(item1)===index
    })
    if(cekAngka.length===1){
        var item = -1
    }else{
        var item
        for (var i=0; i<arr1.length; i++){  

            for (var j=i; j<arr1.length; j++)   
            {
                if (arr1[i] == arr1[j]){ 
                    countUp++;  
                }
                if (f<countUp){
                    f=countUp;      
                    item = arr1[i];  
                }
            }
            countUp=0;    
        }
    }
    if(item===undefined){
        item = -1
    }
    return item
}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); //-1