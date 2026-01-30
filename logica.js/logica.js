// Recursos do Livro: Seleção de Elementos e Eventos
const itens = [
    { nome: "Camiseta", preco: 49.90, img: "https://picsum.photos/200/120?random=1" },
    { nome: "Calça Jeans", preco: 99.00, img: "https://picsum.photos/200/120?random=2" },
    { nome: "Jaqueta", preco: 150.00, img: "https://picsum.photos/200/120?random=3" }
];

let totalGeral = 0;
const vitrine = document.getElementById('vitrine');
const listaUi = document.getElementById('lista');
const totalUi = document.getElementById('total');

// Desenha as roupas na tela
itens.forEach(roupa => {
    vitrine.innerHTML += `
        <div class="produto">
            <img src="${roupa.img}">
            <h4>${roupa.nome}</h4>
            <p>R$ ${roupa.preco.toFixed(2)}</p>
            <button onclick="comprar('${roupa.nome}', ${roupa.preco})">Adicionar</button>
        </div>
    `;
});

// Faz o carrinho funcionar (Ação do JavaScript)
function comprar(nome, valor) {
    // 1. Adiciona o nome na lista do carrinho
    const li = document.createElement('li');
    li.innerText = nome;
    listaUi.appendChild(li);

    // 2. Soma o valor total (Recurso de cálculo)
    totalGeral += valor;
    totalUi.innerText = totalGeral.toFixed(2);
    
    console.log("Adicionado: " + nome);
}
