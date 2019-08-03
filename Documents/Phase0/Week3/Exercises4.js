function dataHandling2(input){
    input.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);
    
    var pisah = input[3].split("/");
    switch(pisah[1]){
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
    }

    var disortir=pisah.sort(function(value1,value2){return value2-value1;})
    console.log(disortir);

    var joinDenganStrip = input[3].split("/");
    console.log(joinDenganStrip.join('-'));

    if(input[1].length>15){
        console.log(input[1].slice(0,15));
    }else{
        console.log(input[1]);
    }
    

}
var inpoet=["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(inpoet);
