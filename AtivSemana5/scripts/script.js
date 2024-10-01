const gerenciador = new GerenciadorDeTarefas()

function atualizarListaTarefas() {
    const listaTarefas = document.getElementById('lista-tarefas')
    listaTarefas.innerHTML = ''

    gerenciador.listarTarefas().forEach((tarefa, index) => {
        const tarefaElement = document.createElement('div')
        tarefaElement.className = 'tarefa'

        const nomeTarefa = document.createElement('span')
        nomeTarefa.innerText = tarefa.nome
        if (tarefa.concluida) {
            nomeTarefa.style.textDecoration = 'line-through'
        }
        tarefaElement.appendChild(nomeTarefa)

        const btnDetalhes = document.createElement('button')
        btnDetalhes.innerText = 'Detalhes'
        btnDetalhes.onclick = () => alert(gerenciador.visualizarDetalhes(index))
        tarefaElement.appendChild(btnDetalhes)

        const btnConcluir = document.createElement('button')
        btnConcluir.innerText = 'Concluir'
        btnConcluir.disabled = tarefa.concluida
        btnConcluir.onclick = () => {
            gerenciador.marcarComoConcluida(index)
            atualizarListaTarefas()
        }
        tarefaElement.appendChild(btnConcluir)

        const btnRemover = document.createElement('button')
        btnRemover.innerText = 'Remover'
        btnRemover.onclick = () => {
            gerenciador.removerTarefa(index)
            atualizarListaTarefas()
        }
        tarefaElement.appendChild(btnRemover)

        listaTarefas.appendChild(tarefaElement)
    })
}

document.getElementById('btn-adicionar').onclick = () => {
    const nome = document.getElementById('nome-tarefa').value
    const descricao = document.getElementById('descricao-tarefa').value

    if (nome && descricao) {
        const novaTarefa = new Tarefa(nome, descricao)
        gerenciador.adicionarTarefa(novaTarefa)
        document.getElementById('nome-tarefa').value = ''
        document.getElementById('descricao-tarefa').value = ''
        atualizarListaTarefas()
    } else {
        alert('Por favor, preencha todos os campos.')
    }
}