const display = document.getElementById('display');
const botoes = document.querySelectorAll('.btn');

let expressao = '';

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const valor = botao.innerText;

    if (valor === 'C') {
      expressao = '';
      display.textContent = '0';

    } else if (valor === '=') {
      try {
        const resultado = eval(
          expressao.replace(/x/g, '*').replace(/÷/g, '/')
        );
        display.textContent = resultado;
        expressao = resultado.toString(); 

      } catch {
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

document.addEventListener('keydown', (evento) => {
  const tecla = evento.key;

  if (tecla >= '0' && tecla <= '9') {
    expressao += tecla;
    display.textContent = expressao;

  } else if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
    expressao += tecla;
    display.textContent = expressao;

  } else if (tecla === 'Enter') {
    try {
      const resultado = eval(expressao);
      display.textContent = resultado;
      expressao = resultado.toString();
    } catch {
      display.textContent = 'Erro';
      expressao = '';
    }

  } else if (tecla === 'Backspace') {
    expressao = expressao.slice(0, -1);
    display.textContent = expressao || '0';

  } else if (tecla === 'Escape') {
    expressao = '';
    display.textContent = '0';

  } else if (tecla === '.') {
    expressao += '.';
    display.textContent = expressao;
  }
});
