function graduates(graduates){
    if(graduates.length<=0){
        return {}
    }
    var result = {}
    var namaKelas = []
    var syarat = 75
    for(var i=0;i<graduates.length;i++){
        namaKelas.push(graduates[i].class)
    }
    var filter = namaKelas.filter(function(a,b){
        return namaKelas.indexOf(a)===b
    })
    for(var j = 0;j<filter.length;j++){
        var tampung = filter[j]
        result[tampung] = []
    }   
    for(key in result){
        for(var k = 0;k<graduates.length;k++){
            if(key === graduates[k].class){
                if(graduates[k].score>syarat){
                    result[key].push({name:graduates[k].name,score:graduates[k].score})
                }
            }
        }
    }
    return result
}
console.log(graduates([
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
  ]));
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
    