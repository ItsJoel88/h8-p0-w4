function highestScore (arr){
    var tampungClass = []
    var output = {}
    if(arr.length<=0){
        return {}
    }
    for(var i = 0;i<arr.length;i++){
        tampungClass.push(arr[i].class)
    }
    var tampungFilter = tampungClass.filter(function(item,index){
        return tampungClass.indexOf(item)===index
    })
    for(var j=0;j<tampungFilter.length;j++){
        var object = {}
        var nilai = 0
        for(var k=0;k<arr.length;k++){
            if(tampungFilter[j]===arr[k].class && arr[k].score > nilai){
                nilai = arr[k].score
                object.name = arr[k].name
                object.score = arr[k].score
            }
        }
        output[tampungFilter[j]] = object
    }
    return output
}
console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
]))

console.log(highestScore([])); //{}
