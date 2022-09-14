// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "../img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "../img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "../img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "../img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "../img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "../img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
];

const acessorios = []
const camisetas = []
const calcados = []


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