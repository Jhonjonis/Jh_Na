function atualizarContador() {
    const dataAlvo = new Date("2025-12-31T23:59:59Z"); // Data alvo para o contador
    const agora = new Date();

    const tempoRestante = dataAlvo - agora;

    if (tempoRestante <= 0) {
      clearInterval(intervalo);
      return; // Se o contador chegar ao fim, para a atualização
    }

    const anos = Math.floor(tempoRestante / (1000 * 60 * 60 * 24 * 365)); // Anos
    const dias = Math.floor((tempoRestante % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)); // Dias
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60)); // Minutos
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000); // Segundos

    document.getElementById("anos").textContent = anos;
    document.getElementById("dias").textContent = dias;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
  }

  const intervalo = setInterval(atualizarContador, 1000); // Atualiza o contador a cada segundo


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
   