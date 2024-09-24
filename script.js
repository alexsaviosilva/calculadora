// Função de calculadora com switch
function calculadora(a, b, operacao) {
  switch (operacao) {
      case 'soma':
          return a + b;
      case 'subtracao':
          return a - b;
      case 'multiplicacao':
          return a * b;    
      case 'divisao':
          if (b === 0) {
              return "Erro: Divisão por zero!";
          }
          return a / b;
      default:
          return "Operação inválida!";
  }
}
// Solicitando entradas do usuário
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação desejada (soma, subtracao, multiplicacao ou divisao):");

// Executando a operação com base na escolha do usuário
let resultado = calculadora(numero1, numero2, operacao);