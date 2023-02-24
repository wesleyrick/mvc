/**
 * Abaixo eu crio as instancias dos constantes express e o consign
 * para as variáveis respectivas
 */


const Express = require('express')
const Consign = require('consign') 
const consign = require('consign')


//===========================================================

/*  Abaixo eu atribui a variável constante app todas as caracteristica do meu
mini-frameword express e configuro o meu template engine  ejs


*/
const app = Express()
app.set('view engine', 'ejs')
app.set('views' ,'./src/views')
//============================================================


/**
 * Abaixo que vou facilitar o gerenciamento das minhas rotas
 * utilizando o consign
 */

Consign()
.include('src/routes')
.then('src/models')
.then('src/controllers')
.into(app)

//=================================================================


// Rodando o servidor na porta 3000

app.listen(3000, function(req,res){
    console.log('Servidor rodando')
})