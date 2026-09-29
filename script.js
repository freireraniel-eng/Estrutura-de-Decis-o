function somaMaior() {


let a = Number(prompt("Digite um número:"));
let b = Number(prompt("Digite outro número:"));
let c = Number(prompt("Digite mais um número:"));
let soma = a + b;

if (soma < c) {
    alert("A soma de A+B é: "+ soma)
} else {
    console.log("Fim!")
}
}
