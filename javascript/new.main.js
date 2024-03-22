const form = document.getElementById('form-atividades');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Decepcionado" />';
const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    atualizarTabela();
    atualizarMediaFinal();
});

function addLinha() {

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizarTabela() {

    const corpoTabela = document.querySelector('tbody');

    corpoTabela.innerHTML = linhas;

}

function atualizarMediaFinal() {
    console.log(atividades);
    console.log(notas);
}