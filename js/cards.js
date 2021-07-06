
const produtos = [
    {
        "id": 1001,
        "descricao":"Porta vinhos ",
        "imagem": "./img/Porta-Vinho/Porta Vinho 1.jpeg"
    },
    {
        "id": 1002,
        "descricao":"Porta vinhos",
        "imagem": "./img/Porta-Vinho/Porta Vinho 2.jpg"
    },
    {
        "id": 1003,
        "descricao":"Porta vinhos",
        "imagem": "./img/Porta-Vinho/Porta Vinho 3.jpg"
    },
    {
        "id": 1004,
        "descricao":"Porta vinhos",
        "imagem": "./img/Porta-Vinho/Porta Vinho 4.jpg"
    },


]

const DOM = {

    produtosContianer: document.querySelector(".row"),

    criarNovoCard(produto, index){
        
        const card = document.createElement("div")
        card.className = "cards"
        card.innerHTML = DOM.innerHTMLcard(produto)
    
        DOM.produtosContianer.appendChild(card)

        console.log(DOM.produtosContianer.appendChild(card))
    },

    innerHTMLcard(produto, index){

        
        const html = `
        <img src="${produto.imagem}" class="card-img-top" alt="porta vinhos">
        <div class="card-body">
            <h4>${produto.descricao}</h4>
        </div>
        <p class="card-text">Codigo: ${produto.id}</p>
    `

    return html
    }
        
}

const APP = {
    init(){
        produtos.forEach(element => {
            DOM.criarNovoCard(element)
        });
    }
} 

APP.init()
