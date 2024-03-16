const formulario = document.getElementById('form-atividades');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando"';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Decepcionado"';

let linhas = '';

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linha += linhas;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;

    inputNomeAtividade = '';
    inputNotaAtividade = '';
});
