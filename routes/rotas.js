const express = require('express')
const router = express.Router()

const pratos = require('../models/pratos')
const categorias = require('../models/categorias')
const { Router } = require('express')


//1º Rota: Cadastrar dados do banco de Dados
router.post('/store', async(req, res)=>{
    const resultado = await pratos.create({
        nome:req.body.nome,
        preco:req.body.preco,
        descricao:req.body.descricao,
        id:req.body.id
    })

    if(resultado){
        res.redirect('/')
    }
    else{
        res.json({erro:"Os dados não foram cadastradados no banco"})
    }
})

//2º Rota: Exibir dados do Banco de Dados
router.get('/create', async(req,res)=>{
    let resultado = await categorias.findAll()

    if(resultado){
        res.render('', {dados:resultado})
    }
    else{
        console.log("Não foi possível exibir os dados")
        res.redirect("/")
    }
})

//3º Rota: Deletar dados do Banco de Dados
router.get('/destroy/:id', async(req,res)=>{
    const resultado = pratos.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect
})





module.exports = router