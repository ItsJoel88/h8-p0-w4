function changeMe(arr){
    var currentYear = new Date().getFullYear()
    var property = ['firstName','lastName','gender','age']
    var display = '' 
    var output = arr.map(function(x){
        var result = {}
        for(var i=0;i<property.length;i++){
            result[property[i]]=x[i]
        }
        return result
    })
    for(var j=0;j<output.length;j++){
        if(output[j].age !== undefined){
            output[j].age = currentYear - output[j].age
        }else{
            output[j].age = 'Invalid Birth Year'
        }
        display += (j+1)+'. '+output[j].firstName+' '+output[j].lastName+' : '+JSON.stringify(output[j])+'\n'
    }
    return display
}
console.log(changeMe([['Imanuel','Jodi','male',1995],['Dexter','C.G','male',2014]]))
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]))

