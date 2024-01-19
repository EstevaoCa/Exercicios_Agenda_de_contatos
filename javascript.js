const inputNome = document.getElementById('nome');
const inputTelefone = document.getElementById('telefone');
const form = document.getElementById('form-cadastrar');
linhas = '';
const nome = [];
const telefone = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionarLinha();
  atualizarTabela();
})

function adicionarLinha() {

  if (nome.includes(inputNome.value) || telefone.includes(parseInt(inputTelefone.value  ))) {
    alert(`O nome:  ${inputNome.value} ou  ${inputTelefone.value}  ja foi inserida`);
  } else {
    nome.push(inputNome.value);
    telefone.push(parseInt(inputTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha
  }
  inputTelefone.value = '';
  inputNome.value = '';
}

function atualizarTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}