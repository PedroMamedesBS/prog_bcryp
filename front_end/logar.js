let res_login = document.getElementById('res_login')
let login = document.getElementById('login')

login.addEventListener('click', ()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const valores = {
        nome: nome,
        email: email,
        senha: senha
    }
    fetch('http://localhost:3000/logar', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(valores)
    })
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
            res_login.innerHTML = "Nome : " + dados.nome + "<br>"
            res_login.innerHTML += "Email: " + dados.email + "<br>"
            res_login.innerHTML += "Senha: " + dados.senha

        })
        .catch((err) => {
            console.error("Erro no login",err)
        })
})
