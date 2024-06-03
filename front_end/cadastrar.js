let res_cad = document.getElementById('res_cad')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const valores = {
        nome: nome,
        email: email,
        senha: senha
    }
    fetch('http://localhost:3000/cadastrar', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(valores)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        res_cad.innerHTML = "Nome : " + dados.nome + "<br>"
        res_cad.innerHTML += "Email: " + dados.email + "<br>"
        res_cad.innerHTML += "Senha: " + dados.senha

    })
    .catch((err) => {
        console.error("Erro no cadastro",err)
    })
})
