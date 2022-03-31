const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
const { get } = require('express/lib/response')

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
;
const pokemons = 'https://pokeapi.co/api/v2/pokemon/'

function getPokemon(id){axios.get(pokemons+`${id}`)
.then(function (res){
    console.log(res)
}
)}

console.log(getPokemon(1))