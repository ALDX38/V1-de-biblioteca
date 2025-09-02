document.getElementById('btnCadastrar').addEventListener('click', function () {
    let nome = document.getElementById('cadastroNome').value;
    const senha = document.getElementById('cadastroSenha').value;

    if (nome && senha) {
        // Salvar nome em minúsculas
        localStorage.setItem('usuario', nome.toLowerCase());
        localStorage.setItem('senha', senha);
        alert('Usuário cadastrado com sucesso!');
    } else {
        alert('Preencha todos os campos.');
    }
});

document.getElementById('btnEntrar').addEventListener('click', function () {
    let nome = document.getElementById('cadastroNome').value;
    const senha = document.getElementById('cadastroSenha').value;

    // Normalizar para minúsculas na comparação
    const usuarioSalvo = localStorage.getItem('usuario');
    const senhaSalva = localStorage.getItem('senha');

    if (nome.toLowerCase() === usuarioSalvo && senha === senhaSalva) {
        alert('Login bem-sucedido!');
        window.location.href = 'beta.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});
