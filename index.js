require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
    //res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT || 3005)

