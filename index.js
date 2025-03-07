const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const requestIp = require('request-ip');
const projects = require('./data/projects.json')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(requestIp.mw());


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

const PORT = process.env.PORT || 5678

app.get('/', async (req, res) => {
    const user = req.user
    res.render('index', { user, projects })
})

app.get('/about', async (req, res) => {
    const user = req.user
    res.render('about', { user })
})

app.get('/contact-us', async (req, res) => {
    const user = req.user
    res.render('contact-us', { user })
})

app.get('/faq', async (req, res) => {
    const user = req.user
    res.render('faq', { user })
})

app.get('/projects', async (req, res) => {
    const user = req.user
    res.render('projects', { user, projects })
})

app.get('/project/:url', async (req, res) => {
    const user = req.user
    res.render('project-detail', { user })
})

app.get('/services', async (req, res) => {
    const user = req.user
    res.render('services', { user })
})

app.get('/thankyou', async (req, res) => {
    const user = req.user
    res.render('thankyou', { user })
})

app.get('/*', async (req, res) => {
    const user = req.user
    res.render('404', { user })
})

app.use('/api/email', require('./controller/email'))

app.listen(PORT, () => {
    console.log(`App is live on: http://localhost:${PORT}`)
})