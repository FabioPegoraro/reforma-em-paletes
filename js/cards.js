
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
    {
        "id": 1005,
        "descricao":"Prateleira para vão de paredes, com corda de sisal",
        "imagem": "./img/Estante de Madeira.jpeg"
    },
    {
        "id": 1006,
        "descricao":"prateleira com corda de sisal",
        "imagem": "./img/Prateleira com corda de sisal.jpg"
    },
    {
        "id": 1007,
        "descricao":"gabinete para botijão de gás",
        "imagem": "./img/gabinte para botijão de gás.jfif"
    },
    {
        "id": 1008,
        "descricao":"Gabinete triangular",
        "imagem": "./img/Mesa de Canto/mesa de canto triangular 1.jpg"
    },
    {
        "id": 1009,
        "descricao":"Gabinete triangular com portas",
        "imagem": "./img/Mesa de Canto/mesa de canto triangular 2.jpg"
    },
    {
        "id": 1010,
        "descricao":"Gabinete triangular com gaveta",
        "imagem": "./img/Mesa de Canto/mesa de canto triangular com gaveta.jpg"
    },
    {
        "id": 1011,
        "descricao": "Mesa de escritório",
        "imagem":"./img/Escritorio/Mesa de Escritório 2.jfif"
    },
    {
        "id": 1012,
        "descricao":"Mesa de escritório",
        "imagem": "./img/Escritorio/Mesa de Escritório 3.jpg"
    },
    {
        "id": 1003,
        "descricao":"Mesa de escritório",
        "imagem": "./img/Escritorio/Mesa de Escritório 4.jpg"
    },
    {
        "id": 1014,
        "descricao":"Jardineira",
        "imagem": "./img/Jardim/144076206_780762039190946_4840727645172091312_n.jpg"
    },
    {
        "id": 1015,
        "descricao":"Jardineira",
        "imagem": "./img/Jardim/IMG-20210203-WA0094.jpg"
    },
    {
        "id": 1016,
        "descricao":"Jardim para parede",
        "imagem": "./img/Jardim/IMG-20210128-WA0062.jpg"
    },
    {
        "id": 1017,
        "descricao":"Jardim suspenso",
        "imagem": "./img/Jardim/IMG-20210203-WA0031.jpg"
    },
    {
        "id": 1018,
        "descricao":"Jardim para parede",
        "imagem": "./img/Jardim/Paletes para Suculentas 4.jpeg"
    },
    {
        "id": 1019,
        "descricao":"Jardim suspenso",
        "imagem": "./img/Jardim/Parede de Paletes para suculenta 1.jpeg"
    },
    {
        "id": 1020,
        "descricao":"Vaso para plantas",
        "imagem": "./img/Jardim/Vaso para planta.jpg"
    },
    {
        "id": 1021,
        "descricao":"Banco",
        "imagem": "./img/Banco/Banco de Madeira 1.jpeg"
    },
    {
        "id": 1022,
        "descricao":"Banco para 2 lugares",
        "imagem": "./img/Banco/Banco de Madeira 4.jpeg"
    },
    {
        "id": 1023,
        "descricao":"Banco-Escada",
        "imagem": "./img/Banco/banco-escada 2.jpg"
    },
    {
        "id": 1024,
        "descricao":"Banco-Escada",
        "imagem": "./img/Banco/banco-escada 1.jpg"
    },
    {
        "id": 1025,
        "descricao":"Conjunto de bancos com mesa de centro",
        "imagem": "./img/Banco/conjunto-de-bancos 1.jpg"
    },
    {
        "id": 1026,
        "descricao":"Conjunto de bancos com mesa de centro",
        "imagem": "./img/Banco/conjunto-de-bancos 2.jpg"
    },
    {
        "id": 1027,
        "descricao":"Conjunto de bancos com mesa de centro",
        "imagem": "./img/Banco/conjunto-de-bancos 5.jpg"
    },
    {
        "id": 1028,
        "descricao":"Conjunto de bancos com mesa de centro",
        "imagem": "./img/Banco/conjunto-de-bancos 3.jpg"
    },
    {
        "id": 1029,
        "descricao":"Conjunto de bancos com mesa de centro",
        "imagem": "./img/Banco/conjunto-de-bancos 4.jpg"
    },
    {
        "id": 1030,
        "descricao":"Tampa para barril",
        "imagem": "./img/Tampa para Barril.jpg"
    },
    {
        "id": 1031,
        "descricao":"Prateleira para garrafas",
        "imagem": "./img/Bar/146443651_464842208227935_2713496553011082318_n.jpg"
    },
    {
        "id": 1032,
        "descricao":"Bar em paletes com luz de led",
        "imagem": "./img/Bar/Bar - Cilene 2.jpeg"
    },
    {
        "id": 1033,
        "descricao":"Bar em paletes",
        "imagem": "./img/Bar/Bar 1.jpeg"
    }

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
