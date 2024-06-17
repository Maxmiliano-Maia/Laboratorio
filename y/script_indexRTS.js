

function exibirNome(imagem) {
  const nomePersonagem = imagem.getAttribute('data-nome');
  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = `${nomePersonagem}`;
  mensagem.style.opacity = 1;
}

function esconderNome() {
  const mensagem = document.getElementById('mensagem');
  mensagem.style.opacity = 0;
}

function escolherPersonagem(personagem) {
    // Redireciona para a próxima página do jogo e passa a escolha do personagem como parâmetro na URL.
    window.location.href = `RTS_Ecomerce.html?personagem=${personagem}`;
  }


