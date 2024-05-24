//OOP: NESNE TABANLI pROGRAMLAMA

let soru ={
    soruMetni: "Hangisi JavaScript uygulamasidir?",

    cevapSeçenekleri: {
        a: "Node.js",
        b: "TypeScript",
        c: "Npm"
    },

    dogruCevap:"c",
    cevabiKontrolEt: function(cevap) {
return cevap === this.dogruCevap
    }
}

// let soru1 ={
//     soruMetni: "Hangisi .net uygulamasidir?",

//     cevapSeçenekleri: {
//         a: "Node.js",
//         b: "nuget",
//         c: "Npm"
//     },

//     dogruCevap:"b",
//     cevabiKontrolEt: function(cevap) {
// return cevap === this.dogruCevap
//     }
// }


function Soru(soruMetni, cevapSeçenekleri,dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSeçenekleri = cevapSeçenekleri;
    this.dogruCevap = dogruCevap;

}

let soru1 = new Soru("Hangisi JavaScript uygulamasidir?", {a: "Node.js",b: "TypeScript",c: "Npm"}, "c");
let soru2 = new Soru("Hangisi .net uygulamasidir?", {a: "Node.js",b: "nuget",c: "Npm"}, "b");



let sorular =[

new Soru("Hangisi JavaScript uygulamasidir?", {a: "Node.js",b: "TypeScript",c: "Npm"}, "c"),
new Soru("Hangisi JavaScript uygulamasidir?", {a: "Node.js",b: "TypeScript",c: "Npm"}, "c"),
new Soru("Hangisi JavaScript uygulamasidir?", {a: "Node.js",b: "TypeScript",c: "Npm"}, "c"),
new Soru("Hangisi JavaScript uygulamasidir?", {a: "Node.js",b: "TypeScript",c: "Npm"}, "c"),

]
console.log(sorular[0].soruMetni);


console.log(soru1.soruMetni);
console.log(soru1.dogruCevap);


