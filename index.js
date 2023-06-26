// conf inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express ()


//forma de ler JSON / middlerwares
app.use(
    express.urlencoded({
            extended: true,
        }),
)
app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)




//rota inicial/ endpoint
app.get('/',(req,res) => {
    //mostrar req

    res.json({ message: 'Oi Express!' })
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

// mongoose.connect('mongodb+srv://AmandaMartins:B0QtUMHia8MffSJM@cluster0.jjxxglh.mongodb.net/')
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jjxxglh.mongodb.net/`)
.then(() => {
    console.log('Conectamos ao MongoDB')
    app.listen(3000)
})
.catch((err) => console.log(err))
