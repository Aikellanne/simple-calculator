const display = document.getElementById('display');
const botoes = document.querySelectorAll('button');

let operacao = '';

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const valor = botao.innerText;

    if (valor === 'C') {
      expressao = '';
      display.textContent = '0';

    } else if (valor === '=') {
      try {
        expressao = eval(expressao);
        display.textContent = expressao;
        expressao = resultado.toString();
      } catch (erro) {
        display.textContent = 'Erro';
        expressao = '';
      }

    } else if (valor === '⌫') {
      expressao = expressao.slice(0, -1);
      display.textContent = expressao || '0';

    } else {
      expressao += valor;
      display.textContent = expressao;
    }
  });
});
