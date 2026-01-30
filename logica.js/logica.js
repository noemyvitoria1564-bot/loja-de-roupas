// Aplicação de Arrays e Loops do Livro do Maujor
const estoqueSapatos = [];

// 1. Criando 15 Tênis (10 de 29.99 e 5 de 10.00)
for(let i=1; i<=15; i++) {
    estoqueSapatos.push({
        nome: `Tênis Sport ${i}`,
        preco: i <= 10 ? 29.99 : 10.00,
        img: `https://picsum.photos/200/200?random=${i+50}` 
    });
}

// 2. Criando 10 Botas (8 de 100.00 e 2 de 49.50)
for(let i=1; i<=10; i++) {
    estoqueSapatos.push({
        nome: `Bota Adventure ${i}`,
        preco: i <= 8 ? 100.00 : 49.50,
        img: `https://picsum.photos/200/200?random=${i+70}`
    });
}

// 3. Criando 10 Sandálias (Todas 99.99)
for(let i=1; i<=10; i++) {
    estoqueSapatos.push({
        nome: `Sandália Summer ${i}`,
        preco: 99.99,
        img: `https://picsum.photos/200/200?random=${i+90}`
    });
}

let totalFinal = 0;
const vitrine = document.getElementById('vitrine-sapatos');
const lista = document.getElementById('lista-compras');
const labelTotal = document.getElementById('soma-total');

// Renderização Dinâmica (Funcionamento do Código)
estoqueSapatos.forEach(sapato => {
    vitrine.innerHTML += `
        <div class="sapato-card">
            <img src="${sapato.img}" alt="Sapato">
            <h4>${sapato.nome}</h4>
            <p class="valor">R$ ${sapato.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${sapato.nome}', ${sapato.preco})">Reservar</button>
        </div>
    `;
});

function adicionarAoCarrinho(nome, preco) {
    const li = document.createElement('li');
    li.innerText = `👞 ${nome} - R$ ${preco.toFixed(2)}`;
    lista.appendChild(li);
    
    totalFinal += preco;
    labelTotal.innerText = totalFinal.toFixed(2);
}
