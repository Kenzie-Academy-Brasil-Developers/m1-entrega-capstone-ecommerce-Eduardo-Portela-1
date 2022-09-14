// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "img/mouse.jpg",
    nameItem: "Mouse Gamer Logitech G403",
    description:
      "O G403 entra no ringue com a nova geração do sensor HERO 25K,IPS de 400",
    value: 200,
    addCart: "Adicionar ao carrinho",
    tag: ["Periféricos"],
  },
  {
    id: 2,
    img: "img/teclado.jpg",
    nameItem: "Teclado Gamer Redragon",
    description:
      "Teclado Gamer Redragon Membrana Dyaus 2, ABNT2, RGB, 11 Teclas Multimídia, Preto ",
    value: 150,
    addCart: "Adicionar ao carrinho",
    tag: ["Periféricos"],
  },
  {
    id: 3,
    img: "img/fone.jpg",
    nameItem: "Headset Gamer HyperX",
    description:
      "OHeadset Gamer HyperX CloudX Stingeré ideal para jogadores que procuram leveza e conforto",
    value: 269,
    addCart: "Adicionar ao carrinho",
    tag: ["Periféricos"],
  },
  {
    id: 4,
    img: "img/placa_video.jpg",
    nameItem: "Placa de Vídeo Asus NVIDIA GeForce GTX 1050 Ti",
    description:
      "Tenha um desenhempenho com ótimo custo benefício",
    value: 1099,
    addCart: "Adicionar ao carrinho",
    tag: ["Hardware"],
  },
  {
    id: 5,
    img: "img/memoria.jpg",
    nameItem: "Memória Kingston, Hyperx Fury",
    description:
      "Memória Kingston Hyperx Fury Black 8gb Ddr4 2400mhz Ddr4",
    value: 489,
    addCart: "Adicionar ao carrinho",
    tag: ["Hardware"],
  },
  {
    id: 6,
    img: "img/fonte.jpg",
    nameItem: "Fonte 450W Corsair, CX450 Preta",
    description:
      "Fonte 450W Corsair, CX450, 80 Plus Bronze - CP-9020120-BR",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Hardware"],
  }, {
    id: 7,
    img: "img/monitor_samsung.jpg",
    nameItem: "Monitor Gamer Samsung Odyssey",
    description:
      "Monitor Gamer Samsung Odyssey G3 24”, FHD, 144 Hz, 1ms, com ajuste de altura, HDMI, DP, VGA, Freesync",
    value: 1300,
    addCart: "Adicionar ao carrinho",
    tag: ["Monitores"],
  }, {
    id: 8,
    img: "img/monitor_concordia.jpg",
    nameItem: "Monitor Gamer Concórdia PCFort",
    description:
      "O novo Monitor Gamer PCFort H238F, com taxa de atualização de 165Hz e tempo de resposta de 1ms.",
    value: 999,
    addCart: "Adicionar ao carrinho",
    tag: ["Monitores"],
  }, {
    id: 9,
    img: "img/monitor_acer.jpg",
    nameItem: "Monitor Gamer Acer Nitro 165Hz",
    description:
      "Monitor Gamer Acer Nitro QG241Y S 23.8 LED Full HD, 165Hz, 1ms, HDMI/DisplayPort, FreeSync Premium",
    value: 1159,
    addCart: "Adicionar ao carrinho",
    tag: ["Monitores"],
  },
];

const perifericos = []
const hardware = []
const monitores = []


/*<div class="quantidade">
                        <p>quantidade</p>
                        <p>0</p>
                    </div>
                    <div class="total">
                        <p>Total:</p>
                        <p>200</p>
                    </div>*/

/*     <li class="cardCarrinho">
                            <img src="img/camiseta_branca.svg" alt="">
                            <div class="descricaoCarrinho">
                                <p>Short-Sleeve T-Shirt</p>
                                <p>R$ 100,00</p>
                                <a href="">Remover Produto</a>
                            </div>
                        </li>
                        */

/*<ul class="listaDeProdutos">
                <li class="card">
                    <img src="../img/jaqueta.svg" alt="">
                    <div id="descricoes">
                        <p class="categoria">categoria</p>
                        <h3 class="nome">Lightweight Jacket</h3>
                        <p class="descricao">Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...</p>
                        <p class="preco">R$ 100.00</p>
                        <a href="#">Adicionar ao Carrinho</a>
                    </div>
                </li>
                <li class="card">
                    <img src="../img/jaqueta.svg" alt="">
                    <div id="descricoes">
                        <p class="categoria">categoria</p>
                        <h3 class="nome">Lightweight Jacket</h3>
                        <p class="descricao">Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...</p>
                        <p class="preco">R$ 100</p>
                        <a href="#">Adicionar ao Carrinho</a>
                    </div>
                </li>
                <li class="card">
                    <img src="../img/jaqueta.svg" alt="">
                    <div id="descricoes">
                        <p class="categoria">categoria</p>
                        <h3 class="nome">Lightweight Jacket</h3>
                        <p class="descricao">Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...</p>
                        <p class="preco">R$ 100</p>
                        <a href="#">Adicionar ao Carrinho</a>
                    </div>
                </li>
           
        */