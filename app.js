const express = require('express')
const app = express()
const hbs = require('hbs');
require('./helpers/helpers')



const port = process.env.PORT  || 3000;
app.use( express.static( __dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    
    res.render('home', {
        titulo : "Principal"
       
    })
  })

   app.get('/about/', (req, res) =>{
    
    res.render('about',{
        titulo : "Sobre Nosotros",
        history:"Gokū es el protagonista de Dragon Ball, creado por Akira Toriyama. Al comienzo de la historia, Gokū aparece como un niño artista marcial con cola de mono y fuerza sobrehumana, ​ pero más adelante se revela que es un extraterrestre de la raza ficticia saiyajin, y que su nombre original es Kakaro"

    })
  })
   
  app.listen(port , ()=>
  {  console.log('funcionado el servicio ' , port);})