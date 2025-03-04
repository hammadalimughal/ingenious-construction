const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

const PORT = process.env.PORT || 5678

app.get('/', async (req, res) => {
    const user = req.user
    res.render('index', { user })
})

app.get('/about', async (req, res) => {
    const user = req.user
    res.render('about', { user })
})

app.listen(PORT, () => {
    console.log(`App is live on: http://localhost:${PORT}`)
})