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

function tempoCasamento() {
    let nome = String(prompt("Digite seu nome:")). toUpperCase()
    let genero = String(prompt("Qual seu gênero? 'M' ou 'F'?")). toUpperCase();
    let estadocivil = String(prompt("Qual seu estado civil? Solteiro(a) ou Casado(a)?")). toUpperCase();

    console.log(`
        =======
        Nome: ${nome},
        Genero: ${genero},
        Estado Civil: ${estadocivil}
    `);
    console.log(genero);
    console.log(estadocivil);

    if(genero === 'F' && estadocivil === 'CASADA') {
        let tempoCasada = Number(prompt("Quantos anos de casada?"));
        alert(`
            ===================
            Nome: ${nome};
            Gênero: ${genero};
            Tempo de casada: ${tempocasada}
        `);
    }

}

    function imparPar(){
        let num = Number(prompt("Digite um número:"));
        if (num % 2 === 0)  {
            alert ("Este número é par");
        } else if (num % 2 === 1) {
            alert ("Este número é ímpar")
        }
            
}
    function valoresIguais() {
        let a = parseInt(prompt("Digite um número:"));
        let b = parseInt(prompt("Digite outro número"));
        
        if (a === b) {
            let c = a + b;
            alert("A soma de A + B é:" + c);
        } else {
            let c = a * b;
            alert("O produto de A * b é:" + c);
        }
    }

    function valorPositivoNegativo() {
        let num = Number(prompt("Digite um número, positivo ou negativo"));
        if (num < 0) { 
            let resultado = num * 3;
            alert("O triplo de " + num + " é:" + resultado);
        } else {
            let resultado = num * 2;
            alert("O dobro de " + num + "é:" + resultado);
        }
    }
    function lerVariaveis() {
        let variavel = Number(prompt("Digite um número"))
        if (variavel % 2 === 0) {
            let soma = variavel + 5
            alert("Aresposta é: " + soma);
        } else {
            let soma = variavel + 8
            alert("A resposta é:" + soma);

        }



    }          

        
        



    
