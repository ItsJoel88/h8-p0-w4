function dataHandling(abc){
    for(var i=0;i<abc.length;i++){
        console.log('Nomor ID : '+abc[i][0]);
        console.log('Nama Lengkap : '+abc[i][1]);
        console.log('TTL : '+abc[i][2]+' '+abc[i][3]);
        console.log('Hobi : '+abc[i][4]);
        console.log(' ');
    }
}
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
dataHandling(input);

