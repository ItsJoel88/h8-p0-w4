function palindrome(kata){
    var kataKebalik='';
    for(var i=kata.length-1;i>=0;i--){
        kataKebalik += kata[i];
    }
    if(kata == kataKebalik){
        return true;
    }else{
        return false;
    }
}
console.log(palindrome('kenapa'));//false
console.log(palindrome('apa'));//true
console.log(palindrome('madam'));//true



