const empresario = document.getElementById('empresario');
const menino = document.getElementById('menino');
const worker = document.getElementById('worker');
const worker2 = document.getElementById('worker2');
const loja = document.getElementById('loja');
const iphone = document.getElementById('iphone');
const fone = document.getElementById('Fone_JBL');
const batedeira = document.getElementById('batedeira');
const bicicleta = document.getElementById('bicicleta');
const boneco = document.getElementById('boneco');
const cadeira = document.getElementById('cadeira');
const cadeirinha = document.getElementById('cadeirinha');
const camera = document.getElementById('camera');
const escultura = document.getElementById('escultura');
const laptop = document.getElementById('laptop');
const racao = document.getElementById('racao');
const relogio = document.getElementById('relogio');
const suplemento = document.getElementById('suplemento');
const bola = document.getElementById('bola');
const xbox = document.getElementById('xbox');
const caixa_som = document.getElementById('caixa_som');
const energia = document.getElementById('energia');
const contas = document.getElementById('contas');
const filhasContas = contas.children;
var item = document.getElementById('item');
const saldo = document.getElementById('saldo');
const totalItens = document.getElementById('totalItens');
var saldoReal = 155500;
var precoIphone = 4000;
var qtdIphone = 0;
var precoFone = 700.90;
var qtdFone = 0; // You can replace 0 with the desired quantity
var precoBatedeira = 50.23;
var qtdBatedeira = 0; // You can replace 0 with the desired quantity
var precoBicicleta = 560.10;
var qtdBicicleta = 0; // You can replace 0 with the desired quantity
var precoBoneco = 70.50;
var qtdBoneco = 0; // You can replace 0 with the desired quantity
var precoCadeira = 600;
var qtdCadeira = 0; // You can replace 0 with the desired quantity
var precoCadeirinha = 180.24;
var qtdCadeirinha = 0; // You can replace 0 with the desired quantity
var precoCamera = 2400.70;
var qtdCamera = 0; // You can replace 0 with the desired quantity
var precoEscultura = 38;
var qtdEscultura = 0; // You can replace 0 with the desired quantity
var precoLaptop = 2199;
var qtdLaptop = 0; // You can replace 0 with the desired quantity
var precoRacao = 37.90;
var qtdRacao = 0; // You can replace 0 with the desired quantity
var precoRelogio = 850.90;
var qtdRelogio = 0; // You can replace 0 with the desired quantity
var precoSuplemento = 34.99;
var qtdSuplemento = 0; // You can replace 0 with the desired quantity
var precobola = 250;
var qtdbola = 0; // You can replace 0 with the desired quantity
var precoXbox = 1800;
var qtdXbox = 0; // You can replace 0 with the desired quantity
var precocaixa_som = 200;
var qtdcaixa_som = 0; // You can replace 0 with the desired quantity

var precoWorker2 = 1320;
var qtdWorker = 0;
var precoEnergia = 435;
let currentProduct = '';
let currentProductPrice = 0;
var totalItensReal = 0;
var valorInput = document.getElementById('valorInput');
const comprar = document.getElementById('comprar');
let isempresarioMoving = false;
let ismenino2Moving = false;
var itemselecionado = false;
var comprou_produtos = false;
var vendeu_produtos = false;
var pagou_conta = false;
var contratou = false;
tarefa1 = false;
let angle = 0.1;
let positionX = 50; // Coordenada X inicial do menino
let direction = 1; // Direção inicial (1 para a direita, -1 para a esquerda)
const changeDirectionAtX = 400; // Posição em que a direção deve mudar
const radius = 100; // O raio do movimento em pixels
const speed = 2; // A velocidade da animação
const startX = 0; // Coordenada X inicial do menino
const startY = 0; // Coordenada Y inicial do menino
const storeX = parseInt(loja.style.left); // Coordenada X da loja
const storeY = parseInt(loja.style.top); // Coordenada Y da loja
let movingToStore = true; // Variável para rastrear o movimento do menino
const botaoMute = document.getElementById('mute');
botaoMute.addEventListener('click',playAudio);
const musica = document.getElementById('myAudio');
const caixa = document.getElementById('caixa');

//O menino começa sem sacolas até a loja ter produtos e vendedores
menino.style.backgroundImage = "url('boysemsacolas.png')";
//Saldo inicial que será alterado durante as transações
saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
item.style.opacity = 0;
valorInput.style.opacity = 0;
comprar.style.opacity = 0;
totalItens.style.opacity = 0;
let press_mute = false;
//Implementação do tempo----------------------------------------------------
const tempoAtual = Math.floor(Date.now() / 1000);
// Função para exibir o tempo atual em segundos, minutos e horas
// Variáveis para armazenar os segundos, minutos e horas
let segundos = 0;
let minutos = 0;
let horas = 0;

function exibirTempoAtual() {
  // Incrementa os segundos
  segundos++;

  // Atualiza os minutos e horas conforme necessário
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  // Formata os valores para ter dois dígitos (por exemplo, 01 em vez de 1)
  const segundosFormatados = segundos.toString().padStart(2, '0');
  const minutosFormatados = minutos.toString().padStart(2, '0');
  const horasFormatadas = horas.toString().padStart(2, '0');

  console.log(`Tempo atual: ${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`);
}

// Chama a função para exibir o tempo atual a cada segundo
setInterval(exibirTempoAtual, 1000); // 1000 milissegundos = 1 segundo

function playAudio(){
  press_mute = !press_mute
  if (press_mute){
    musica.play();
    musica.volume = 0.3;
  }
  else
  {
    musica.pause();
  }
}
//Função Efeito será chamada ao dar enter
function efeito(){
  caixa.volume = 0.06;
  caixa.play();
  const valorDigitado = parseInt(valorInput.value);
  if (currentProduct === 'iphone:') {
    qtdIphone += valorDigitado; // Atualiza a quantidade
    comprou_produtos = true;
  } else if (currentProduct === 'Fone_JBL:') {
    qtdFone += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'batedeira:') {
    qtdBatedeira += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'bicicleta:') {
    qtdBicicleta += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'boneco:') {
    qtdBoneco += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'cadeira:') {
    qtdCadeira += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'cadeirinha:') {
    qtdCadeirinha += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'camera:') {
    qtdCamera += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'escultura:') {
    qtdEscultura += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'laptop:') {
    qtdLaptop += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'racao:') {
    qtdRacao += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'relogio:') {
    qtdRelogio += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'suplemento:') {
    qtdSuplemento += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'bola:') {
    qtdbola += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'xbox:') {
    qtdXbox += valorDigitado;
    comprou_produtos = true;
  } else if (currentProduct === 'caixa_som:') {
    qtdcaixa_som += valorDigitado;
    comprou_produtos = true;
  }
  else if (currentProduct === 'energia:') {
    pagou_conta = true;
  }
  else if (currentProduct = 'worker2:'){
    if (valorDigitado>0){
      qtdWorker += 1;
      contratou = true
      worker.style.opacity = 1;
    }
  }
{    
    totalItensReal = currentProductPrice * valorDigitado;
    //Correção de trecho importante, agora não ocorre o erro de valor nulo-------------------------
    if (!isNaN(valorDigitado)){
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    if (isNaN(valorDigitado)){
      saldo.innerHTML = 'Digite um valor';
    }
   
  }
  item.style.opacity = 0;
  valorInput.style.opacity = 0;
  comprar.style.opacity = 0;
  totalItens.style.opacity = 0;
  valorInput.value = 0;
    if (comprou_produtos && contratou && !tarefa1){
      tarefa1 = true;
      maquinaEscrever(textoParaMaquinaEscrever02, elementoMaquinaEscrever, 50);
    } 
}

function moveMenino() {
  if (positionX === changeDirectionAtX) {
    direction *= -1; // Inverte a direção
    menino.style.transform = 'scaleX(-1)';
    if (minutos >=1){
      comprasCliente();
      if (minutos >=2){
        if (!pagou_conta){
          for (var i = 0; i < filhasContas.length; i++) {
            filhasContas[i].style.opacity = "1";
          if (minutos > 3){
            saldoReal = saldoReal - 35; //Ta cobrando juros dobrado corrigir depois!!!
            saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
          }
        }
        }
        else if (pagou_conta){
          for (var i = 0; i < filhasContas.length; i++) {
            filhasContas[i].style.opacity = "0"; // Define a opacidade como 0.5 (50% de opacidade) para cada filho
        }
        }
        setTimeout(function() {
          maquinaEscrever2(textoParaMaquinaEscrever03, elementoMaquinaEscrever2, 50); 
        }, 3000)
      }
    }
    //Alterar para voltar com sacolas apenas quando já tiver produtos e funcionário ou só produtos
    if (vendeu_produtos){
      console.log('vendeu? '+vendeu_produtos);
      menino.style.backgroundImage = "url('boy.png')";
      vendeu_produtos = false;
    }
  }

  if (positionX < -60) {
    direction *= -1; // Inverte a direção
    menino.style.transform = 'scaleX(1)';
    menino.style.backgroundImage = "url('boysemsacolas.png')";
  }

  positionX += direction;
  menino.style.left = positionX + 'px';
  requestAnimationFrame(moveMenino); 
}
moveMenino(); 

//Mover as vendedoras
function moveWorkerAroundLoja() {
  const centerX = 200;
  const centerY = 0;
  
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  worker.style.left = x + 'px';
  worker.style.top = y + 'px';

  angle += speed * 0.003; // Aumenta o ângulo para fazer o movimento
  requestAnimationFrame(moveWorkerAroundLoja); // Continua a animação
}
moveWorkerAroundLoja();

// Função para mover um dos empresarios para um ponto específico de forma lenta
function moverempresarioParaPonto(element, x, y) {
  element.style.transition = 'left 1s linear, top 1s linear'; // Adiciona uma transição suave de 1 segundo
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function movermenino2ParaPosicaoDoempresario() {
  const empresarioX = empresario.style.left;
  const empresarioY = empresario.style.top;

  // Verifica se o "empresario" já foi movido para uma posição
  if (empresarioX && empresarioY) {
    moverempresarioParaPonto(menino2, parseInt(empresarioX), parseInt(empresarioY));
  }
}

// Função para alternar entre os empresarios e mover um deles para o ponto clicado de forma lenta
function moverempresarioParaNovoPonto(x, y) {
  if (!isempresarioMoving && event.target !== valorInput) {
    moverempresarioParaPonto(empresario, x, y);
    isempresarioMoving = true;
  }
}

// Lógica para o clique em qualquer lugar da página Movimentar o empresário na tela
document.addEventListener('click', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  moverempresarioParaNovoPonto(x, y);
  // Se um dos empresarios estava se movendo, interrompa o movimento dele
  if (isempresarioMoving) {
    setTimeout(() => {
      empresario.style.transition = 'none'; // Remove a transição após a animação
      isempresarioMoving = false;
    }, 1000); // Tempo de espera de 1 segundo para que a animação termine
  }
  if (ismenino2Moving) {
    setTimeout(() => {
      menino2.style.transition = 'none'; // Remove a transição após a animação
      ismenino2Moving = false;
    }, 1000); // Tempo de espera de 1 segundo para que a animação termine
  }
});

function print(){
  const valorDigitado = parseInt(valorInput.value);
  if (!isNaN(valorDigitado) && valorDigitado>0 ) {
      totalItensReal = currentProductPrice*valorDigitado;
    totalItens.innerHTML = `R$ &nbsp${totalItensReal.toFixed(2)}`;
  }
}

valorInput.addEventListener('keydown', function (event) {
  // Check if the key pressed is Enter (key code 13)
  if (event.keyCode === 13) {
    efeito(); 
  }
});

// Lógica para o clique no iPhone
iphone.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if (saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'iphone:';
  currentProductPrice = precoIphone;

  item.textContent = 'Smartphone:';

  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (currentProduct === 'iphone:') {
      qtdIphone += valorDigitado; // Atualiza a quantidade
      comprou_produtos = true;
    } else if (currentProduct === 'Fone_JBL:') {
      qtdFone += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'batedeira:') {
      qtdBatedeira += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'bicicleta:') {
      qtdBicicleta += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'boneco:') {
      qtdBoneco += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'cadeira:') {
      qtdCadeira += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'cadeirinha:') {
      qtdCadeirinha += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'camera:') {
      qtdCamera += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'escultura:') {
      qtdEscultura += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'laptop:') {
      qtdLaptop += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'racao:') {
      qtdRacao += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'relogio:') {
      qtdRelogio += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'suplemento:') {
      qtdSuplemento += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'bola:') {
      qtdbola += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'xbox:') {
      qtdXbox += valorDigitado;
      comprou_produtos = true;
    } else if (currentProduct === 'caixa_som:') {
      qtdcaixa_som += valorDigitado;
      comprou_produtos = true;
    }
    else if(currentProduct = 'worker2:'){
      qtdWorker += valorDigitado;
      comprou_produtos = false;
    }
 
    {    
      totalItensReal = currentProductPrice * valorDigitado;
      if (!isNaN(valorDigitado)){
        saldoReal = saldoReal - totalItensReal;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
      }
      if (isNaN(valorDigitado)){
        saldo.innerHTML = 'Digite um valor';
      }
    
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
  });
  
  document.addEventListener('click', desabilitarItem);
});

fone.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'Fone_JBL:';
  currentProductPrice = precoFone;

  item.textContent = 'Fone:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
  {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

batedeira.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'batedeira:';
  currentProductPrice = precoBatedeira;

  item.textContent = 'Batedeira:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

bicicleta.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'bicicleta:';
  currentProductPrice = precoBicicleta;

  item.textContent = 'Bicicleta:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

boneco.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'boneco:';
  currentProductPrice = precoBoneco;

  item.textContent = 'Boneco:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

cadeira.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'cadeira:';
  currentProductPrice = precoCadeira;

  item.textContent = 'Cadeira:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

cadeirinha.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'cadeirinha:';
  currentProductPrice = precoCadeirinha;

  item.textContent = 'Cadeirinha:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

camera.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'camera:';
  currentProductPrice = precoCamera;

  item.textContent = 'Camera:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

escultura.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'escultura:';
  currentProductPrice = precoEscultura;

  item.textContent = 'Escultura:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

laptop.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'laptop:';
  currentProductPrice = precoLaptop;

  item.textContent = 'Laptop:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

racao.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'racao:';
  currentProductPrice = precoRacao;

  item.textContent = 'Ração:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

relogio.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'relogio:';
  currentProductPrice = precoRelogio;

  item.textContent = 'Relogio:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

suplemento.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'suplemento:';
  currentProductPrice = precoSuplemento;

  item.textContent = 'Suplemento:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

bola.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'bola:';
  currentProductPrice = precobola;

  item.textContent = 'bola:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

xbox.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'xbox:';
  currentProductPrice = precoXbox;

  item.textContent = 'Xbox:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

caixa_som.addEventListener('click', () => {
  comprar.innerHTML = 'Comprar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'caixa_som:';
  currentProductPrice = precocaixa_som;

  item.textContent = 'caixa_som:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    comprou_produtos = true;
  });
  document.addEventListener('click', desabilitarItem);
});

energia.addEventListener('click', () => {
  comprar.innerHTML = 'Pagar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity =1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity =0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'energia:';
  currentProductPrice = precoEnergia;

  item.textContent = 'Conta de Energia:';
  print();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      totalItensReal = 1258.90*valorDigitado;
      saldoReal = saldoReal - totalItensReal;
      saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
  });
  document.addEventListener('click', desabilitarItem);
});

worker2.addEventListener('click', () => {
  comprar.innerHTML = 'Contratar';
  valorInput.value = 1;
  if (isempresarioMoving || ismenino2Moving) return;
  if(saldoReal<0){
    menino2.style.opacity=1;
    movermenino2ParaPosicaoDoempresario();
    setTimeout(movermenino2ParaPosicaoDoempresario, 1000);
  }
  if(saldoReal>0){
    menino2.style.opacity=0;
  }
  itemselecionado = true;
  valorInput.focus();
  currentProduct = 'worker2:';
  currentProductPrice = precoWorker2;

  item.textContent = 'Equipe de Vendas:';
  print();
  playAudio();
  comprar.addEventListener('click', () => {
    const valorDigitado = parseInt(valorInput.value);
    if (!isNaN(valorDigitado) && valorDigitado>0) {
      qtdWorker +=1;
      totalItensReal = currentProductPrice * valorDigitado;
      if (!isNaN(valorDigitado)){
        saldoReal = saldoReal - totalItensReal;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
      }
      if (isNaN(valorDigitado)){
        saldo.innerHTML = 'Digite um valor';
      }
    }
    item.style.opacity = 0;
    valorInput.style.opacity = 0;
    comprar.style.opacity = 0;
    totalItens.style.opacity = 0;
    valorInput.value = 0;
    contratou = true;
    worker.style.opacity = 1;
  });
  document.addEventListener('click', desabilitarItem);
});

//Função para venda de produtos 
function comprasCliente() {
  const numeroAleatorio = Math.floor(Math.random() * 16)+1;
  //Posso aumentar a quantidade de itens comprados pra aumentar o nível de dificuldade do jogo------
  const qtdAleatoria = Math.floor(Math.random() * 3)+1;

  const produtos = {
    1: { nome: 'iPhone', preco: 5000, quantidade: qtdIphone },
    2: { nome: 'Fone_JBL', preco: 1258.90, quantidade: qtdFone },
    3: { nome: 'Batedeira', preco: 89.23, quantidade: qtdBatedeira },
    4: { nome: 'Bicicleta', preco: 882.10, quantidade: qtdBicicleta },
    5: { nome: 'Boneco', preco: 110.50, quantidade: qtdBoneco },
    6: { nome: 'Cadeira', preco: 780, quantidade: qtdCadeira },
    7: { nome: 'Cadeirinha', preco: 279.24, quantidade: qtdCadeirinha },
    8: { nome: 'Camera', preco: 3431.70, quantidade: qtdCamera },
    9: { nome: 'Escultura', preco: 68, quantidade: qtdEscultura },
    10: { nome: 'Laptop', preco: 3499, quantidade: qtdLaptop },
    11: { nome: 'Racao', preco: 64.90, quantidade: qtdRacao },
    12: { nome: 'Relogio', preco: 1258.90, quantidade: qtdRelogio },
    13: { nome: 'Suplemento', preco: 69.99, quantidade: qtdSuplemento },
    14: { nome: 'bola', preco: 318, quantidade: qtdbola },
    15: { nome: 'Xbox', preco: 2169, quantidade: qtdXbox },
    16: { nome: 'caixa_som', preco: 299, quantidade: qtdcaixa_som },
  };
  const texto1 = 'O cliente está tentando comprar '+qtdAleatoria+' unidade(s) de '+produtos[numeroAleatorio].nome+'...';
    maquinaEscrever(texto1, elementoMaquinaEscrever, 50);
  const texto2 = 'venda realizada com sucesso! O cliente comprou '+qtdAleatoria+' unidade(s) de '+produtos[numeroAleatorio].nome;
  //A quantidade de produtos tem que ser maior que zero e maior ou igual a quantidade pedida
  
  if (produtos[numeroAleatorio].quantidade > 0 && produtos[numeroAleatorio].quantidade >= qtdAleatoria){
      
      setTimeout(() => {
        setTimeout(function() {
          maquinaEscrever(texto2, elementoMaquinaEscrever, 50); 
        }, 3000)
    
      if (produtos[numeroAleatorio].quantidade === qtdIphone){
        qtdIphone -= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdFone){
        qtdFone -= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdBatedeira){
        qtdBatedeira -= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdBicicleta){
        qtdBicicleta -= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdBoneco){
        qtdBoneco-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdCadeira){
        qtdCadeira-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdCadeirinha){
        qtdCadeirinha-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdCamera){
        qtdCamera-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdEscultura){
        qtdEscultura-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdLaptop){
        qtdLaptop-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdRacao){
        qtdRacao-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdRelogio){
        qtdRelogio-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdSuplemento){
        qtdSuplemento-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdbola){
        qtdbola-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdXbox){
        qtdXbox-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
      if (produtos[numeroAleatorio].quantidade ===qtdcaixa_som){
        qtdcaixa_som-= qtdAleatoria;
        saldoReal +=produtos[numeroAleatorio].preco* qtdAleatoria;
        saldo.innerHTML = `Saldo:&nbsp&nbsp&nbsp&nbsp;R$ ${saldoReal.toFixed(2)}`;
        vendeu_produtos = true;
      }
    }, 5000);
    }
    else
    {
      texto3 = 'Que pena, você não possui estoque suficiente, '+produtos[numeroAleatorio].quantidade+' unidade(s) de '+produtos[numeroAleatorio].nome+' no estoque';
      setTimeout(function() {
        maquinaEscrever(texto3, elementoMaquinaEscrever, 50);
      }, 4000)
    }
}


function desabilitarItem(event) {
  // Verificar se o clique ocorreu fora do iPhone e do item
  if (event.target !== valorInput && event.target !== iphone && event.target !== fone && event.target !== batedeira && event.target !== bicicleta && event.target !== boneco && event.target !== cadeira && event.target !== cadeirinha && event.target !== camera && event.target !== escultura && event.target !== laptop && event.target !== racao && event.target !== relogio && event.target !== suplemento && event.target !== bola && event.target !== xbox && event.target !== caixa_som && event.target !== energia && event.target !== worker2 && event.target !== item) {
    // Desabilitar o item
    itemselecionado = false;

    // Esconder os elementos relacionados ao item
    item.style.opacity = 1;
    valorInput.style.opacity = 1;
    comprar.style.opacity = 1;
    totalItens.style.opacity = 1;
    valorInput.value = 0;
    // Remover o ouvinte de clique do documento, pois o item foi desativado
    document.removeEventListener('click', desabilitarItem);
  }
}

setInterval(function() {
 
if (itemselecionado === true){
  comprar.style.opacity = 1;
  valorInput.style.opacity = 1;
  item.style.opacity = 1;
  totalItens.style.opacity =1;
}
else{
  comprar.style.opacity = 0;
  valorInput.style.opacity = 0;
  item.style.opacity = 0;
  totalItens.style.opacity =0;
}
}, 500);
// Função para fazer o logout
function logout() {
  window.location.href = "index.html";
}

// Função para obter o valor do personagem da URL.
function obterPersonagemDaURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('personagem');
}

const imagensDeFundo = {
  "1": "empresaria2.png",
  "2": "empresario.png",
  "3": "empresario2.png",
  "4": "empresaria.png",
  "5": "cadeirante.png"
};

function alterarImagemDeFundo(personagem) {
  const imagemDeFundo = imagensDeFundo[personagem];
  if (imagemDeFundo) {
    empresario.style.backgroundImage = `url(${imagemDeFundo})`;
  }
}

// Chame a função para obter o valor do personagem.
const personagemEscolhido = obterPersonagemDaURL();

alterarImagemDeFundo(personagemEscolhido);

//Código para o efeito máquina de escrever --Função para o efeito de máquina de escrever
 
  function maquinaEscrever(texto, elemento, velocidade) {
    let i = 0;
    elemento.innerHTML = ""; // Limpa o conteúdo do elemento
    const intervalo = setInterval(function () {
      if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
      }
    }, velocidade);
  }

  function maquinaEscrever2(texto, elemento, velocidade) {
    let i = 0;
    elemento.innerHTML = ""; // Limpa o conteúdo do elemento
    const intervalo = setInterval(function () {
      if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
      }
    }, velocidade);
  }

  // Chame a função com o texto desejado
  const textoParaMaquinaEscrever01 = "Compre produtos para sua loja (os produtos estão no lado esquerdo da tela).";
  const textoParaMaquinaEscrever02 = "Parabéns, a sua loja agora possui produtos e funcionários e já há clientes comprando.";
  const textoParaMaquinaEscrever03 = "Clique na figura ao lado para pagar a conta de energia. (Pague logo e evite o acúmulo de juros)";
  var elementoMaquinaEscrever = document.getElementById("maquinaEscrever");
  var elementoMaquinaEscrever2 = document.getElementById("maquinaEscrever2");
  maquinaEscrever(textoParaMaquinaEscrever01, elementoMaquinaEscrever, 50);
  
  
  function exibirNome(imagem) {
    const nomeProduto = imagem.getAttribute('data-nome');
    const id = imagem.getAttribute('id'); // Obtém o ID do elemento
    const mensagem = document.getElementById('mensagem');
    let quantidade = 0; // Inicializa a quantidade como 0
    
    // Utiliza uma instrução switch para verificar o ID e atualizar a quantidade com base no ID
    switch (id) {
      case 'iphone':
        quantidade = qtdIphone;
        break;
      case 'Fone_JBL':
        quantidade = qtdFone;
        break;
      case 'batedeira':
        quantidade = qtdBatedeira;      
        break;
      case 'bicicleta':
        quantidade = qtdBicicleta;
        break;
      case 'boneco':
        quantidade = qtdBoneco;
        break;
      case 'cadeira':
        quantidade = qtdCadeira;
        break;
      case 'cadeirinha':
        quantidade = qtdCadeirinha;
        break;
      case 'camera':
        quantidade = qtdCamera;
        break;
      case 'escultura':
        quantidade = qtdEscultura;
        break;
      case 'laptop':
        quantidade = qtdLaptop;
        break;
      case 'racao':
        quantidade = qtdRacao;
        break;
      case 'relogio':
        quantidade = qtdRelogio;
        break;
      case 'suplemento':
        quantidade = qtdSuplemento;
        break;
      case 'bola':
        quantidade = qtdbola;
        break;
      case 'xbox':
        quantidade = qtdXbox;
        break;
      case 'caixa_som':
        quantidade = qtdcaixa_som;
        break;
      case 'energia':
        mensagem.innerHTML = `${nomeProduto}`;
        break;
      default:
        quantidade = 0; // Valor padrão se o ID não corresponder a nenhum caso
    }

    if (id !== 'energia'){
      mensagem.innerHTML = `${nomeProduto}&nbsp;&nbsp;&nbsp;&nbsp;${quantidade}&nbsp;&nbsp;Unidades no estoque`;
    }
    
    mensagem.style.opacity = 1;
  }
  
  
  function esconderNome() {
    const mensagem = document.getElementById('mensagem');
    mensagem.style.opacity = 0;
  }

