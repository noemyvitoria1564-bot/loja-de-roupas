// APLICAÇÃO DE RECURSOS: Arrays, Objetos e DOM (Livro Maujor)

const roupas = [
    { nome: "Camiseta Basic", preco: 45.90, img: "https://picsum.photos/200/200?random=1" },
    { nome: "Calça Jeans", preco: 89.90, img: "https://picsum.photos/200/200?random=2" },
    { nome: "Jaqueta Bomber", preco: 159.00, img: "https://picsum.photos/200/200?random=3" },
    { nome: "Tênis Casual", preco: 120.00, img: "https://picsum.photos/200/200?random=4" }
];

let valorTotal = 0;

// Selecionando os elementos da tela
const vitrineDiv = document.getElementById('vitrine');
const listaUi = document.getElementById('lista-carrinho');
const totalUi = document.getElementById('total-valor');

// 1. Criar a vitrine (Funcionalidade de Loja)
roupas.forEach(produto => {
    vitrineDiv.innerHTML += `
        <div class="produto-card">
            <img src="${produto.img}" alt="${produto.nome}">
            <h4>${produto.nome}</h4>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionar('${produto.nome}', ${produto.preco})">Adicionar</button>
        </div>
    `;
});

// 2. Lógica do Carrinho (Funcionamento do Código)
function adicionar(nome, preco) {
    // Adiciona o item na lista visual
    const itemLi = document.createElement('li');
    itemLi.innerText = `✔️ ${nome} - R$ ${preco.toFixed(2)}`;
    listaUi.appendChild(itemLi);

    // Soma o valor total
    valorTotal += preco;
    totalUi.innerText = valorTotal.toFixed(2);
    
    // Alerta de interação (Recurso JS)
    console.log("Item adicionado: " + nome);
}
