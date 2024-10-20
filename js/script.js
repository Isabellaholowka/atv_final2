document.getElementById('form').onsubmit = function(event) {
    event.preventDefault(); // Não deixar a página recarregar

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    var tabela = document.getElementById('tabelaCadastros');
    var linha = tabela.insertRow();

    var cellNome = linha.insertCell(0);
    var cellEmail = linha.insertCell(1);

    cellNome.innerHTML = nome;
    cellEmail.innerHTML = email;

    document.getElementById('form').reset();
};