// Recurso do livro: Manipulação de Eventos (addEventListener)
document.getElementById('comprar').addEventListener('click', function() {
    alert("Produto adicionado com sucesso!");
    document.getElementById('status').innerText = "Carrinho: 1 item";
});
