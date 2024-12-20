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

  // Conversões para obter os valores acumulados
  const segundosTotais = Math.floor(tempoDecorrido / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const horasTotais = Math.floor(minutosTotais / 60);
  const diasTotais = Math.floor(horasTotais / 24);
  const mesesTotais = Math.floor(diasTotais / 30.44); // Aproximação para todos os meses
  const anos = Math.floor(diasTotais / 365); // Total de anos acumulados

  // Atualiza os elementos HTML dinamicamente
  document.getElementById("anos").textContent = `${anos} anos`;
  document.getElementById("meses").textContent = `${mesesTotais} meses`;
  document.getElementById("dias").textContent = `${diasTotais} dias`;
  document.getElementById("minutos").textContent = `${minutosTotais} minutos`;
  document.getElementById("segundos").textContent = `${segundosTotais} segundos`;
}

// Configura o intervalo para atualizar os dados a cada segundo
const intervalo = setInterval(atualizarContador, 1000);

// Inicializa o contador imediatamente quando a página for carregada
atualizarContador();


window.onload = function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const prevButton = document.querySelector(".carousel-control-prev");
  const nextButton = document.querySelector(".carousel-control-next");

  // Adiciona eventos para tocar o áudio ao trocar slides
  function playAudio() {
    if (audioPlayer.paused) {
      audioPlayer.play().catch(function (error) {
        console.log("Erro ao tentar reproduzir o áudio:", error);
      });
    }
  }

  prevButton.addEventListener("click", playAudio);
  nextButton.addEventListener("click", playAudio);

  // Requer interação do usuário para iniciar o áudio
  document.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play().catch(function (error) {
        console.log("Erro ao iniciar áudio:", error);
      });
    }
  });
};
