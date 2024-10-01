class Tarefa {
    constructor(nome, descricao) {
        this.nome = nome
        this.descricao = descricao
        this.concluida = false
    }

    concluir() {
        this.concluida = true
    }

    detalhes() {
        return `${this.nome} - ${this.descricao} [${this.concluida ? 'Concluída' : 'Pendente'}]`
    }
}