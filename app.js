const express = require("express")
const handlebars = require("express-handlebars")

const app = express()
const porta = 8080

const path = require("path")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public/')))

app.engine('handlebars', handlebars.engine({extended:true}))
app.set('view engine', 'handlebars')

const rotasRouter = require('./routes/rotas')

app.use("/rotas", rotasRouter)

app.get("/",(req,res)=>{
    //res.send("<h1>Teste</h1>")
    res.render('home')
})





app.listen(porta, ()=>{
    console.log("Servidor executando na porta ", porta)
})