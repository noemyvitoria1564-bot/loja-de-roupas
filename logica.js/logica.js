// Aplicação de Recursos: Arrays e Manipulação de DOM
const sapatos = [];

// 1. Criando 15 Tênis (10 de 29.99 e 5 de 10.00)
for(let i=1; i<=15; i++) {
    sapatos.push({
        nome: `Tênis Modelo ${i}`,
        preco: i <= 10 ? 29.99 : 10.00,
        img: `https://picsum.photos/200/200?random=${i}` 
    });
}

// 2. Criando 10 Botas (8 de 100.00 e 2 de 49.50)
for(let i=1; i<=10; i++) {
    sapatos.push({
        nome: `Bota Adventure ${i}`,
        preco: i <= 8 ? 100.00 : 49.50,
        img: `https://picsum.photos/200/200?random=${i+15}`
    });
}

// 3. Criando 10 Sandálias (Todas 99.99)
for(let i=1; i<=10; i++) {
    sapatos.push({
        nome: `Sandália Summer ${i}`,
        preco: 99.99,
        img: `https://picsum.photos/200/200?random=${i+25}`
    });
}

let total = 0;
const vitrine = document.getElementById('vitrine-sapatos');
const listaUi = document.getElementById('lista-carrinho');
const totalUi = document.getElementById('valor-total');

// Renderizar sapatos (Funcionamento do Código)
sapatos.forEach(item => {
    vitrine.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="Sapato">
            <h4>${item.nome}</h4>
            <p class="preco">R$ ${item.preco.toFixed(2)}</p>
            <button onclick="adicionar('${item.nome}', ${item.preco})">Comprar</button>
        </div>
    `;
});

// Função do Carrinho (Interatividade)
function adicionar(nome, preco) {
    const li = document.createElement('li');
    li.innerText = `👟 ${nome} - R$ ${preco.toFixed(2)}`;
    listaUi.appendChild(li);
    
    total += preco;
    totalUi.innerText = total.toFixed(2);
    alert(nome + " adicionado!");
}
