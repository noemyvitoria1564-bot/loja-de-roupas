// Recurso do Livro: Seleção de DOM e Eventos
const catalogo = [
    { nome: "Camiseta", preco: 49.90, img: "https://picsum.photos/200/200?random=1" },
    { nome: "Calça", preco: 89.90, img: "https://picsum.photos/200/200?random=2" },
    { nome: "Jaqueta", preco: 150.00, img: "https://picsum.photos/200/200?random=3" },
    { nome: "Tênis", preco: 199.00, img: "https://picsum.photos/200/200?random=4" }
];

let contaTotal = 0;
const vitrineDiv = document.getElementById('vitrine');
const listaUi = document.getElementById('lista-itens');
const totalUi = document.getElementById('total-venda');

// Criar vitrine dinâmica (Aplicação de Recursos JS)
catalogo.forEach(item => {
    vitrineDiv.innerHTML += `
        <div class="produto">
            <img src="${item.img}">
            <h4>${item.nome}</h4>
            <p>R$ ${item.preco.toFixed(2)}</p>
            <button onclick="adicionarCarrinho('${item.nome}', ${item.preco})">Comprar</button>
        </div>
    `;
});

function adicionarCarrinho(nome, preco) {
    // Adiciona o item na lista
    const li = document.createElement('li');
    li.innerText = "✔️ " + nome + " - R$ " + preco.toFixed(2);
    listaUi.appendChild(li);

    // Soma o valor (Funcionamento do Código)
    contaTotal += preco;
    totalUi.innerText = contaTotal.toFixed(2);
    
    alert(nome + " adicionado!");
}
