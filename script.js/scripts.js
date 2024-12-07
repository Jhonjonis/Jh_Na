function atualizarContador() {
  // Data inicial: 5 de junho de 2020
  const dataInicial = new Date("2020-06-05T00:00:00Z");
  const agora = new Date();

  // Calcula o tempo decorrido desde a data inicial em milissegundos
  const tempoDecorrido = agora - dataInicial;

  // Se a data atual for antes da data inicial, não faz sentido contar
  if (tempoDecorrido <= 0) {
    clearInterval(intervalo);
    return; // Para a execução
  }

  // Conversões para obter os valores
  const segundosTotais = Math.floor(tempoDecorrido / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const diasTotais = Math.floor(minutosTotais / (60 * 24));
  const anos = Math.floor(diasTotais / 365);
  const meses = Math.floor(diasTotais / 30.44); // Aproximação
  const dias = diasTotais;
  const minutos = minutosTotais;
  const segundos = segundosTotais;

  // Atualiza os elementos HTML dinamicamente
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
   