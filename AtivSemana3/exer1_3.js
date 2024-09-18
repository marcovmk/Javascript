let items = [];

function updateList() {
    // Ordena os itens em ordem alfabética
    items.sort();

    // Seleciona o elemento de lista
    const list = document.getElementById('itemList');
    
    // Limpa a lista antes de adicionar novos itens
    list.innerHTML = '';

    // Adiciona cada item à lista
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// Evento que é disparado ao submeter o formulário
document.getElementById('itemForm').addEventListener('submit', function(event) {
    // Impede que a página recarregue ao enviar o formulário
    event.preventDefault();

    // Captura o valor do input
    const itemInput = document.getElementById('itemInput');
    const newItem = itemInput.value.trim();

    // Se o input não estiver vazio, adiciona o novo item à lista
    if (newItem) {
        items.push(newItem);
        
        // Atualiza a lista na página
        updateList();
        
        // Limpa o campo de entrada após o item ser adicionado
        itemInput.value = '';
    }
});
