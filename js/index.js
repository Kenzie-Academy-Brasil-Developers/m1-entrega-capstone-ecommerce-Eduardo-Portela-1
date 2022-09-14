//Função para separar as listas
function separarListasPorCategoria(lista){
    lista.forEach(produto => {
          produto.tag[0] == "Periféricos" ? perifericos.push(produto)
        : produto.tag[0] == "Hardware"   ? hardware.push(produto)
        : monitores.push(produto)
    });
}
separarListasPorCategoria(data)

//Menu de navegação
const container = document.querySelector(".container")
const logoMenu = document.createElement("div")
logoMenu.setAttribute("class","logo_menu")
logoMenu.innerHTML = `
<h1>TechSell</h1>
    <nav class="navegacao">
        <a href="" class="todos">Todos</a>
        <a href="" class="perifericos">Periféricos</a>
        <a href="" class="hardware">Hardware</a>
        <a href="" class="monitores">Monitores</a>
    </nav>
`
container.appendChild(logoMenu)


container.addEventListener("click",menuNav)
//Função para mostrar os itens por categoria na vitrine.
function menuNav(event){
    event.preventDefault()
    let menuTarget = event.target
      menuTarget.className == "todos"       ? listarProdutos(data,vitrine) 
    : menuTarget.className == "perifericos" ? listarProdutos(perifericos,vitrine) 
    : menuTarget.className == "hardware"    ? listarProdutos(hardware,vitrine) 
    : menuTarget.className == "monitores"   ?listarProdutos(monitores,vitrine) :""
    
    vitrine.style.justifyContent = "flex-start"
}

//Criando a ul da vitrine e atribuindo-a classe
let secaoProdutos = document.querySelector(".produtos")

let vitrine = document.createElement("ul")
vitrine.setAttribute("class", "lista_De_Produtos")

secaoProdutos.appendChild(vitrine)

//Função para listar os produtos da database na vitrine
function listarProdutos(lista,ref){
    vitrine.innerHTML = ""
    for(let i =0; i <lista.length;i++){
        let produtoAtual = lista[i]
        
        let cardPronto = criarCard(produtoAtual)

        ref.appendChild(cardPronto)
    }
}

listarProdutos(data,vitrine)

//Função que Cria o card para renderizar na vitrine
function criarCard(produto){
    let card = document.createElement("li")
    card.setAttribute("class","card")
    card.innerHTML = 
    `<img src="${produto.img}" alt="">
    <div id="descricoes">
        <p class="categoria">${produto.tag[0]}</p>
        <h3 class="nome">${produto.nameItem}</h3>
        <p class="descricao">${produto.description}</p>
        <p class="preco">${produto.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        <a href="#" id="${produto.id}">${produto.addCart}</a>
    </div>
    `
    return card
}

//Função para fazer pesquisa no site
function pequisar(){
    let resPesquisa = []
    let button = document.querySelector(".botao_pequisar")
    button.addEventListener("click",function(){
        input = document.querySelector("#pesquisar").value.toLowerCase()
        for(let i =0; i < data.length; i++){
            let produtoAtual = data[i]
            if(produtoAtual.nameItem.toLowerCase().includes(input)){
                //resPesquisa.splice(0,3)
                resPesquisa.push(produtoAtual)
                listarProdutos(resPesquisa,vitrine)
            }
        }
        resPesquisa = []   
    })
}
pequisar()

//Selecionando Ul do carrinho
let listaCarrinho = document.querySelector(".lista_carrinho")

//Função que renderiza os produtos no carrinho
function listarProdutoCarrinho(lista,ref){
    listaCarrinho.innerHTML = ""
    for(let i = 0; i < lista.length; i++){
        produtoAtual = lista[i]
        cardCarrinhoPronto = criarCardCarrinho(produtoAtual)
        ref.appendChild(cardCarrinhoPronto)
    }
    remover(lista)
} 

//Div que renderiza a quantidade de itens e preço no carrinho
const TotalCompra = document.querySelector(".Total_compra")

//Função que cria card do carrinho
function criarCardCarrinho(produto){
    let cardCarrinho = document.createElement("li")
    cardCarrinho.setAttribute("class","card_Carrinho")

    cardCarrinho.innerHTML = 
    `<img src="${produto.img}" alt="">
    <div class="descricaoCarrinho">
        <p><strong>${produto.nameItem}</strong></p>
        <p>${produto.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        <a href="#" id="${produto.id}" class="remover">Remover Produto</a>
    </div>
    `
    return cardCarrinho
}

//Função que adiciona ao carrinho
function adicionarAoCarrinho(){ 
    let carrinho = []
    vitrine.addEventListener("click", function(event){
        event.preventDefault()
        let button = event.target
        if(button.tagName == "A"){
            let buttonId = button.id
            for(let i = 0; i < data.length; i++){
                itemAtual = data[i]
                if(buttonId == itemAtual.id){
                    carrinho.push(itemAtual)
                    if(carrinho.length == 0){
                        mostrarCarrinhoVazio()
                        TotalCompra.setAttribute("id","hidden")
                        finalizar.setAttribute("id","hidden")
                    }else if (carrinho.length != 0){
                        calcularPrecoTotal(carrinho) 
                        TotalCompra.setAttribute("id","")
                        finalizar.setAttribute("id","")
                    }
                    listarProdutoCarrinho(carrinho,listaCarrinho)
                }
            }
        }
    })
}

adicionarAoCarrinho()

//Função que calcula o preço e a quantidade de itens
function calcularPrecoTotal(lista){
    TotalCompra.innerHTML = ""
    let total = 0
    let divQuantidade = document.createElement("div")
        divQuantidade.setAttribute("class","quantidade")
    
    let divTotal = document.createElement("div")
        divTotal.setAttribute("class", "total")
    for(let i = 0; i < lista.length; i++){
        produtoAtual = lista[i]
        total += produtoAtual.value
    }
    TotalCompra.append(divQuantidade,divTotal)
    divQuantidade.innerHTML = `
        <p>Quantidade</p>
        <p>${lista.length}</p>
    `
    divTotal.innerHTML = `
        <p>Total:</p>
        <p>${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
    `
}

//Função que remove itens da lista do carrinho
let removerCarrinho = document.querySelector(".carrinho")
function remover(lista){
    let links = document.querySelectorAll(".remover")
    links.forEach(botao => {
        botao.addEventListener("click", function(event){
            event.preventDefault()
            let clickTarget = event.target
            let index = lista.findIndex((produtoAtual) =>    produtoAtual.id == clickTarget.id)
            lista.splice(index,1)
            listarProdutoCarrinho(lista,listaCarrinho)

            if(lista.length != 0){
                calcularPrecoTotal(lista) 
                TotalCompra.setAttribute("id","")
                finalizar.setAttribute("id","")
            }else if(lista.length == 0){
                mostrarCarrinhoVazio()
                finalizar.setAttribute("id","hidden")
                TotalCompra.setAttribute("id","hidden")
            }
        })
    });
}

//Função para renderizar Texto de Carrinho vazio se ele estiver vazio '-'
function mostrarCarrinhoVazio(){
    const carrinhoVazio = document.createElement("li")
    carrinhoVazio.setAttribute("class", "carrinhoVazio")
    carrinhoVazio.innerHTML =`
        <h2>Carrinho Vazio</h2>
        <p>Adicione itens</p>
    `
    listaCarrinho.appendChild(carrinhoVazio)
}
mostrarCarrinhoVazio()



let finalizar = document.querySelector(".finalizar_compra")
    finalizar.addEventListener("click", function(){
        alert("Obrigado por comprar no nosso site! Compra Finalizada.")
    })

/*function pequisar(){
    let resPesquisa = []
    let button = document.querySelector(".botao_pequisar")
    button.addEventListener("click",function(){
        input = document.querySelector("#pesquisar").value.toLowerCase()
        for(let i =0; i < data.length; i++){
            let produtoAtual = data[i]
            if(input == produtoAtual.nameItem.toLowerCase()){
                resPesquisa.splice(0,1)
                resPesquisa.push(produtoAtual)
                return listarProdutos(resPesquisa,vitrine)
            }
        }
        return alert("Nenhum produto com esse nome foi encontrado!")
    })
}*/



/* // removerCarrinho.addEventListener("click", function(event){
    // //console.log(event.target.parentNode.parentNode)
    //         event.preventDefault()
    //         let clickTarget = event.target
    //         console.log(clickTarget)
    //         if(clickTarget.tagName == "A"){
    //             let index = lista.findIndex((produtoAtual) =>    produtoAtual.id == clickTarget.id)
    //             console.log(lista)
    //             lista.splice(index,1)
    //             console.log(lista)
    //             listarProdutoCarrinho(lista,listaCarrinho)
    //             for(let i = 0; i < lista.length; i++){
    //                 let produtoAtual = lista[i]
                    

    //                 if(produtoAtual.id == clickTarget.id){
                
    //                     //console.log("Aloha")
    //                 }
    //                 // if(produtoAtual.id == clickTarget.id){
    //                 //     lista.splice(i,1)
    //                 //     listarProdutoCarrinho(lista,listaCarrinho)
    //                 //     //calcularPrecoTotal(lista) 
    //                     if(lista.length != 0){
    //                         calcularPrecoTotal(lista) 
    //                         TotalCompra.setAttribute("id","")
    //                     }else if(lista.length == 0){
    //                         mostrarCarrinhoVazio()
    //                         TotalCompra.setAttribute("id","hidden")
    //                     }
    //                 }
    //             //} 
    //         }
    //     })*/