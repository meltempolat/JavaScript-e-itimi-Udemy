let simdi = new Date();  //şimdiki tarih ve saat 



//get methods
sonuc = simdi;
sonuc = simdi.getDate();   //gün
sonuc = simdi.getDay();   //0 pazar : 6 cumartesi
sonuc = simdi.getFullYear();  //yıl
sonuc = simdi.getHours();  //saat
sonuc = simdi.getTime();  //saat


// set methods
simdi.setFullYear(2025);
simdi.setMonth(7);  // 0 :Ocak
simdi.setDate(15); 

sonuc=simdi;


console.log(sonuc);
console.log(typeof sonuc);