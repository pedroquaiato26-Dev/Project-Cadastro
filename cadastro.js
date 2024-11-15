function sendData(){
    try {
        let nome = modeloExtracao('fname');
        let sobreNome = modeloExtracao('lname');
        let idade = modeloExtracao('Aage')

        verificacaoIdade(idade, nome, sobreNome)
    } catch (error) {
        console.error('Erro ao extrair dados do formulario: ', error);
    }
}

function modeloExtracao(id){
    try {
        return document.getElementById(id).value;
    } catch (error) {
        console.error('Erro ao criar modelo de extracao "document"', error);
    }
}

function modeloMensagem(id, texto){
    try {
        const elemento = document.getElementById(id)
        elemento.innerHTML = texto

    } catch (error) {
        console.error('Erro ao criar modelo de mensagem "document"', error)
    }
}

function modeloExcluirMensagem(id){
    try {
        const elemento = document.getElementById(id)
        elemento.innerHTML = ''

    } catch (error) {
        console.error('Erro ao excluir mensagem no DOM', error)
    }
}

function verificacaoIdade(idade, nome, sobreNome){
    try {
        modeloExcluirMensagem('titulo')
        return idade >= 18 ? modeloMensagem('titulo', `Bem-Vindo ${nome} ${sobreNome}`) : modeloMensagem('titulo', 'Idade invalida para cadastro')
    } catch (error) {
        console.error('Erro ao verificar idade: ', error)
    }
}
