function nextPalindrome(num) {
    // fungsi untuk pembalik angka untuk cek apakah palindrome atau bukan
    function isPalindrome(num) {
      var angkaString = num+'';
      var dibalik = [];
      for (var i = angkaString.length - 1; i >= 0; i--) {
        dibalik.push(angkaString[i]);
      }
      dibalik = dibalik.join('');
      return angkaString === dibalik;
    }
    //tambahkan angka hingga mencapai angka palindrome selanjutnya
    var hitung = num + 1;

    while (true) {
      if (isPalindrome(hitung)) {
        return hitung;
      } else {
        hitung += 1;
      }
    }
  }
console.log(nextPalindrome(22))