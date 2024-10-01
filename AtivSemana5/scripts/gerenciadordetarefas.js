class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = []
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa)
    }

    listarTarefas() {
        return this.tarefas
    }

    marcarComoConcluida(index) {
        if (this.tarefas[index]) {
            this.tarefas[index].concluir()
        }
    }

    removerTarefa(index) {
        if (index > -1 && index < this.tarefas.length) {
            this.tarefas.splice(index, 1)
        }
    }

    visualizarDetalhes(index) {
        if (this.tarefas[index]) {
            return this.tarefas[index].detalhes()
        }
        return 'Tarefa não encontrada'
    }
}