let url = "https://www.meltempolat.com/";
let kursAdi = "JavaScript çalışma"

//url kaç karakterlidir

let sonuc;

sonuc = url.length;


//Kurs adı kaç kelimeden oluşmaktadır

sonuc = kursAdi.split(" ").length;

// url https ile mi başlıyor 

sonuc = url.startsWith("https");

if(sonuc) {
    console.log("evet");
}

//url ve kursAdi değişkenlerini kullanarak şu stringi oluştur
//https://www.meltempolat.com/JavaScript-çalışma"

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-")

sonuc = '${url}/${kursAdi}';

console.log(sonuc);









console.log(sonuc);