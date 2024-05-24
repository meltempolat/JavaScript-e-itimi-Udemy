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

let soru1 ={
    soruMetni: "Hangisi .net uygulamasidir?",

    cevapSeçenekleri: {
        a: "Node.js",
        b: "nuget",
        c: "Npm"
    },

    dogruCevap:"b",
    cevabiKontrolEt: function(cevap) {
return cevap === this.dogruCevap
    }
}


console.log(soru.soruMetni);
console.log(soru.cevabiKontrolEt("c"));
console.log(soru.cevabiKontrolEt("c"));