// RECURSOS DO LIVRO: Objetos, Arrays e Manipulação de DOM

const produtos = [
    { nome: "Camiseta Preta", preco: 59.90, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200" },
    { nome: "Calça Jeans", preco: 120.00, img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200" },
    { nome: "Jaqueta Couro", preco: 250.00, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200" }
];

let total = 0;
const vitrine = document.getElementById('vitrine-produtos');
const listaCarrinho = document.getElementById('lista-carrinho');
const displayTotal = document.getElementById('total-valor');

// Criar as roupas na tela automaticamente
produtos.forEach(item => {
    vitrine.innerHTML += `
        <div class="cartao">
            <img src="${item.img}" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <p class="preco">R$ ${item.preco.toFixed(2)}</p>
            <button onclick="adicionar('${item.nome}', ${item.preco})">Adicionar</button>
        </div>
    `;
});

// Função que faz o site "rodar" (carrinho funcional)
function adicionar(nome, preco) {
    // Adiciona na lista visual
    const li = document.createElement('li');
    li.innerText = nome;
    listaCarrinho.appendChild(li);

    // Soma o valor total
    total += preco;
    displayTotal.innerText = total.toFixed(2);
    
    alert(`${nome} adicionado!`);
}
