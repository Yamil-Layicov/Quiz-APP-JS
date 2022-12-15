function Question(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Question.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Question("What is the capital of Canada", { a: "Amsterdam", b: "Ottawa", c: "Baku" , d: "Ankara" }, "b"),
    new Question("What is the capital of Turkey", { a: "Amsterdam", b: "Ottawa", c: "Baku" , d: "Ankara" }, "d"),
    new Question("What is the capital of Netherlands", { a: "Amsterdam", b: "Ottawa", c: "Baku" , d: "Ankara" }, "a"),
    new Question("What is the capital of Spain", { a: "Amsterdam", b: "Ottawa", c: "Baku" , d: "Madrid" }, "d"),
    new Question("What is the capital of Italy", { a: "Rome", b: "Ottawa", c: "Baku" , d: "Ankara" }, "a"),
];