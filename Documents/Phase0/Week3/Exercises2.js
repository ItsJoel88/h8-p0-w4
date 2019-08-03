function balikString(kata){
    var tampungKata='';
    for(i=kata.length-1;i>=0;i--){
        tampungKata=tampungKata + kata[i];
    }
    return tampungKata;
}
console.log(balikString('nama saya adalah'));