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
   
    function verificarDispositivo() {
      // Verifica se a largura da janela é menor que 768 pixels (um valor comum para dispositivos móveis)
      if (window.innerWidth < 1024) {
          document.getElementById("mensagem").innerHTML = "Essa opção é apenas para computador.";
      } else {
        window.location.href = "https://maximus-developer.itch.io/matemtica-nas-estrelas";
      }
  }
  
  // Associar a função verificarDispositivo ao clique do elemento personagem2
  document.getElementById("personagem2").addEventListener("click", function(event) {
      event.preventDefault(); // Impede o comportamento padrão do clique (não redireciona)
      verificarDispositivo(); // Executa a função verificarDispositivo
  });