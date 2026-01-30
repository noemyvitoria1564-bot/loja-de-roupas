// APLICAÇÃO DOS REQUISITOS (Total: 35 Peças)
const catalogo = [];

// 1. Criando 15 Blusas (10 de 29.99 e 5 de 10.00)
for(let i=1; i<=15; i++) {
    catalogo.push({
        nome: `Blusa Style ${i}`,
        preco: i <= 10 ? 29.99 : 10.00,
        img: `https://picsum.photos/200/200?random=${i}` // Imagem simulada por IA
    });
}

// 2. Criando 10 Calças (8 de 100.00 e 2 de 49.50)
for(let i=1; i<=10; i++) {
    catalogo.push({
        nome: `Calça Denim ${i}`,
        preco: i <= 8 ? 100.00 : 49.50,
        img: `https://picsum.photos/200/200?random=${i+15}`
    });
}

// 3. Criando 10 Vestidos (Todos 99.99)
for(let i=1; i<=10; i++) {
    catalogo.push({
        nome: `Vestido Glamour ${i}`,
        preco: 99.99,
        img: `https://picsum.photos/200/200?random=${i+25}`
    });
}

let somaTotal = 0;
const vitrine = document.getElementById('vitrine-loja');
const listaUi = document.getElementById('itens-lista');
const totalUi = document.getElementById('valor-total');

// Renderizar Produtos (Recurso JavaScript)
catalogo.forEach(p => {
    vitrine.innerHTML += `
        <div class="produto">
            <img src="${p.img}">
            <h5>${p.nome}</h5>
            <p class="preco">R$ ${p.preco.toFixed(2)}</p>
            <button onclick="adicionar('${p.nome}', ${p.preco})">Comprar</button>
        </div>
    `;
});

function adicionar(n, v) {
    const li = document.createElement('li');
    li.innerText = `${n} - R$ ${v.toFixed(2)}`;
    listaUi.appendChild(li);
    somaTotal += v;
    totalUi.innerText = somaTotal.toFixed(2);
}
