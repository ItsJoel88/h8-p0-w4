/*Proxytia*/
var nama = 'nuel';
var peran = 'Penyihir';
if(nama === ''){
    console.log('Nama harus diisi!');
}else if (nama !== ''){
    if(peran === ''){
        console.log('Halo ' + nama.toUpperCase() +','+ 'Pilih peranmu untuk memulai game!');
        console.log('Peran : Ksatria , Tabib , Penyihir');
    }else if(peran === 'Ksatria'){
        console.log('Selamat datang di Dunia Proxytia, ' + nama.toUpperCase());
        console.log('Halo ' + peran + ' ' + nama.toUpperCase() + ',' + 'kamu dapat menyerang dengan senjatamu!');
    }else if(peran === 'Tabib'){
        console.log('Selamat datang di Dunia Proxytia, ' + nama.toUpperCase());
        console.log('Halo ' + peran + ' ' + nama.toUpperCase() + ',' + 'kamu akan membantu temanmu yang terluka.');
    }else if(peran === 'Penyihir'){
        console.log('Selamat datang di Dunia Proxytia, ' + nama.toUpperCase());
        console.log('Halo ' + peran + ' ' + nama.toUpperCase() + ',' + 'ciptakan keajaiban yang membantu kemenanganmu!');
    }
}