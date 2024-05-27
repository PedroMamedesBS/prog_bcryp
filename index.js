const express = require('express')
const app = express()
const cors = require('cors')
const bcrypt = require('bcrypt')
const conn = require('./db/conn')
const Usuario = require('./modules/Usuario')

const PORT = 3000
const hostname = 'localhost'

/*--------------------config---------------------- */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
/*------------------------------------------------ */

app.post('/cadastrar', (req, res) => {
    const cad = req.body
    console.log(cad)

    bcrypt.hash(cad.senha, 10, async (err, hash) => {
        if (err) {
            console.log("Erro ao gerar o hash!")
            res.status(500).json({ message: "Erro ao criptografar a senha!" })
        }
        try {
            const grav = await Usuario.create(
                {nome: cad.nome, email: cad.email, senha: hash })
            
            console.log(grav)
            res.status(200).json(grav)
            
        } catch (err) {
            console.error("Erro ao gravaros dados!", err)
            res.status(500).json({ message: "Erro ao gravar os dados!" })
        }
    })
})

app.get('/', (req, res) => {
    res.status(200).json({ message: "Apicação rodando!" })
})

/*------------------------------------------------ */
conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor Rodando em ${hostname}:${PORT}`)
    })
}).catch(() => {
    console.error(' Erro de conexão com o Banco de dados!', err)
})