function somaMaior() {


    let a = Number(prompt("Digite um número:"));
    let b = Number(prompt("Digite outro número:"));
    let c = Number(prompt("Digite mais um número:"));
    let soma = a + b;

    if (soma < c) {
        alert("A soma de A+B é: " + soma)
    } else {
        console.log("Fim!")
    }
}

function tempoCasamento() {
    let nome = String(prompt("Digite seu nome:")).toUpperCase()
    let genero = String(prompt("Qual seu gênero? 'M' ou 'F'?")).toUpperCase();
    let estadocivil = String(prompt("Qual seu estado civil? Solteiro(a) ou Casado(a)?")).toUpperCase();

    console.log(`
        =======
        Nome: ${nome},
        Genero: ${genero},
        Estado Civil: ${estadocivil}
    `);
    console.log(genero);
    console.log(estadocivil);

    if (genero === 'F' && estadocivil === 'CASADA') {
        let tempoCasada = Number(prompt("Quantos anos de casada?"));
        alert(`
            ===================
            Nome: ${nome};
            Gênero: ${genero};
            Tempo de casada: ${tempocasada}
        `);
    }

}

function imparPar() {
    let num = Number(prompt("Digite um número:"));
    if (num % 2 === 0) {
        alert("Este número é par");
    } else if (num % 2 === 1) {
        alert("Este número é ímpar")
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

function pesoIdeal() {
    let altura = parseFloat(prompt("Digite sua altura: (Ex.: 1.80)"));
    let genero = prompt("Digite seu Genero: (Ex.: M ou F)").toUpperCase();  
    let pesoIdeal;

    switch (genero) {
        case "M":
            pesoIdeal = (72.7 * altura) - 58;
            break;
        case "F":
            pesoIdeal = (62.1 * altura) - 44.7;
            break;
        default:
            alert("Gênero informado é inválido!");
            return;
    }
    alert(`O peso ideal é ${pesoIdeal.toFixed(2)}kg.`);
}

function descobrirImc() {
    let peso = parseFloat(prompt("Digite seu peso: (Ex.: 72.5)"));
    let altura = parseFloat(prompt("Digite sua altura: (Ex.: 1.75)"));
    const imc = peso / (altura ** 2);
    let condicao; 

    switch (true) {
        case imc < 18.5:
            condicao = "Abaixo do peso"; 
        break;
        case imc >= 18.5 && imc < 25:
            condicao = "Peso normal";
            break;
        case imc >= 25 && imc < 30:
            condicao = "Acima do peso";
            break;
        case imc >= 30:
            condicao = "Obeso";
            break;
    }
    alert(`
        imc: ${imc.toFixed(2)}
        condicao: ${condicao}
        `);
}

function verDesconto() {
    let preco = parseFloat(prompt("Digite o preço sem desconto:"));
    let codigo = parseInt(prompt(`
        Escolha uma das opções disponíveis:
        1 - Dinheiro ou cheque (Desconto de 10%)
        2 - Crédito à vista (Desconto de 15%)
        3 - 2x sem juros
        4 - 2x com juros de 10%
        `));
    let total;

    switch (codigo) {
        case 1:
            total = preco * 0.9;
            break;
        case 2:
            total = preco * 0.85;
            break;
        case 3:
            total = preco;
            break;
        case 4:
            total = preco * 1.1;
            break;
        default:
            alert("Código informado é invalido");
    }
        (codigo >= 3)
        ? alert(`Duas parcelas de R$ ${(total / 2).toFixed(2)}`)
        : alert("Total a pagar: R$ ")
            
 
    alert("Total a pagar: R$" + total.toFixed(2));

}

function verificarMedia() {
    let id = prompt("Digite o identificador do aluno:");
    let nota01 = parseFloat(prompt("Digite a nota da primeira 1ª verificação:"));
    let nota02 = parseFloat(prompt("Digite a nota da primeira 2ª verificação:"));
    let nota03 = parseFloat(prompt("Digite a nota da primeira 3ª verificação:"));
    let mediaExercicios = parseFloat(prompt("Digite a média dos Exercícios:"));
    const mediaAproveitamento = ((nota01 + (nota02 * 2) + (nota03 * 3) +
    mediaExercicios) / 7) * 10;
    let conceito;

    switch (true) {
        case mediaAproveitamento >= 90:
            conceito = "A";
            break;
        case mediaAproveitamento >= 75 && mediaAproveitamento <90:
            conceito = "B";
            break;
        case mediaAproveitamento >= 60 && mediaAproveitamento <75:
            conceito = "C";
            break
        case mediaAproveitamento >= 40 && mediaAproveitamento <60:
            conceito = "D";
        case mediaAproveitamento < 40:
            conceito = "E";
            break;
        default:
            alert("Impossível de obter a nota de aproveiramento");
            return;
    }

    let resultado = ["A", "B", "C"].includes(conceito)? "Aprovado" : "Reprovado";
    alert(`
            Id do Aluno: ${id}
            Notas: {
                verificação 01: ${nota01.toFixed(2)},
                verificação 02: ${nota02.toFixed(2)},
                verificação 03: ${nota03.toFixed(2)}
            }
            Média dos exercícios: ${mediaExercicios.toFixed(2)}
            Média de aproveitamento: ${mediaAproveitamento.toFixed(2)}
            Conceito: ${conceito} => ${resultado}
        `);

}


