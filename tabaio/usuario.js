const formValues = document.getElementById('formValues')
let contador = 0

function objetoJson(){

    const objeto = {
        nome: formValues.nome.value,
        sobrenome : Number(formValues.sobrenome.value),
        email: email(formValues.email.value)
    }

    console.log(objeto)
    const objetoJson = JSON.stringify(objeto)
    contador++
    localStorage.setItem('pessoa' + contador, objetoJson)

    function realizarLogin() {
       
        const pessoaArmazenada = JSON.parse(localStorage.getItem('pessoa'));
    
        
        const inputUsuario = document.getElementById('usuario').value;
        const inputSenha = document.getElementById('senha').value;
    
       
        if (pessoaArmazenada && inputUsuario === pessoaArmazenada.usuario && inputSenha === pessoaArmazenada.senha) {
            // Autorizando o login
            alert('Login autorizado!');
           
        } else {
           
            alert('Credenciais incorretas. Tente novamente.');
        }
    }
    
}
