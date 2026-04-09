//cria função para validar prenchimento de campos da tela de login
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;


    //estrutura que varifica se os campos foram preenchidos
    if(!loginEmail || !loginSenha){
        alert("Favor, preencha todos os campos")
    } else{
        window.location.href = 'cadastro.html';
    }
}

//cria array de forma global
var dadosLista = [];

//função para salvar usuario
function salvaruser(){
    let nomeuser = document.getElementById
    ('nomeuser').value;


    if(nomeuser){
        dadosLista.push(nomeuser);
        console.log(dadosLista); //mostra no console o array
        crialista();
        document.getElementById('nomeuser').value="";

    }
    else{
        alert("Usuario, favor preencher o campo nome")
    }
}
    //função para criar lista do array
    function crialista(){
        let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuario</th><th>Ações</th></tr>";
        for(let i = 0; i <=(dadosLista.length -1); i++){
            tabela += "<tr><td>"+ dadosLista[i] + "</td><td></td></tr>";
            document.getElementById('tabela').innerHTML = tabela;
        }
    }

    //função para editar nomes da lista
    function editar(i){
        document.getElementById('nomeuser').value =dadosLista[(i - 1)];
        dadosLista.splice(dadosLista[(i - 1)], 1);
    }

    //função para excluir nomes da lista
    function excluir(i){
        dadosLista.splice((i - 1), 1);
        document.getElementById('tabela').deleteRow(i);
    }