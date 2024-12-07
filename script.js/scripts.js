function atualizarContador() {
  // Data inicial: 5 de junho de 2020
  const dataInicial = new Date("2020-06-05T00:00:00Z");
  const agora = new Date();

  // Calcula o tempo decorrido desde a data inicial
  const tempoDecorrido = agora - dataInicial;

  // Se a data já passou, exibe os valores fixos
  if (tempoDecorrido <= 0) {
    clearInterval(intervalo);
    return; // Para a execução caso a data atual seja antes da data inicial
  }

  // Definindo os valores fixos fornecidos
  const anos = 4; // 4 anos
  const meses = 53; // 53 meses
  const dias = 1617; // 1617 dias
  const minutos = 2328480; // 2.328.480 minutos
  const segundos = 139708800; // 139.708.800 segundos

  // Atualiza os elementos HTML com os valores fixos
  document.getElementById("anos").textContent = `${anos} anos`;
  document.getElementById("meses").textContent = `${meses} meses`;
  document.getElementById("dias").textContent = `${dias} dias`;
  document.getElementById("minutos").textContent = `${minutos} minutos`;
  document.getElementById("segundos").textContent = `${segundos} segundos`;
}

// Configura o intervalo para atualizar os dados a cada segundo
const intervalo = setInterval(atualizarContador, 1000);

// Inicializa o contador imediatamente quando a página for carregada
atualizarContador();



    // Função para garantir que o áudio toque automaticamente ao carregar a página
    window.onload = function() {
      var audio = document.getElementById("audio");
      audio.play();  // Tenta reproduzir a música automaticamente
    };

    window.onload = function() {
      var audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.play();
    };

    
      // Função para tocar o áudio
      function playAudio() {
        var audioPlayer = document.getElementById('audioPlayer');
        // Reproduz o áudio se ele não estiver tocando
        if (audioPlayer.paused) {
          audioPlayer.play().catch(function(error) {
            console.log("Erro ao tentar reproduzir o áudio:", error);
          });
        }
      }
  
      var prevButton = document.querySelector('.carousel-control-prev');
      var nextButton = document.querySelector('.carousel-control-next');
  
      prevButton.addEventListener('click', playAudio);
      nextButton.addEventListener('click', playAudio);
   