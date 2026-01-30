// Recurso: Manipulação de DOM via ID (Livro do Maujor)
const produtos = [
    { nome: "T-Shirt", preco: 50.00 },
    { nome: "Jeans", preco: 100.00 },
    { nome: "Casaco", preco: 200.00 }
];

let soma = 0;
const vitrine = document.getElementById('vitrine');
const totalTela = document.getElementById('total');
const listaTela = document.getElementById('lista');

// Cria a vitrine automaticamente (Funcionamento do Código)
produtos.forEach(p => {
    vitrine.innerHTML += `
        <div class="card">
            <h4>${p.nome}</h4>
            <p>R$ ${p.preco}</p>
            <button onclick="comprar('${p.nome}', ${p.preco})">Adicionar</button>
        </div>
    `;
});

function comprar(nome, preco) {
    const item = document.createElement('li');
    item.innerText = nome;
    listaTela.appendChild(item);
    
    soma += preco;
    totalTela.innerText = soma.toFixed(2);
    alert(nome + " adicionado!");
}
