const express = require("express")
const { engine } = require("express-handlebars"); 
const session = require("express-session")
const FileStore = require("session-file-store")(session)
const flash = require("express-flash")

const app = express()

const conn = require("./database/conn")

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: true}))//é usado para analisar dados de formulários HTML e torná-los acessíveis no objeto req.body 
app.use(express.json())

//Session middleware
app.use(session({ 
    name: "session",
    secret: "nosso_secret",
    resave: false, 
    saveUninitialized: false,
    store: new FileStore({
        logFn: function () { },
        path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
        secure: false,
        maxAge: 86400000,
        expires: new Date(Date.now() + 86400000),
        httpOnly: true
    }
}))

//flash messages
app.use(flash())

//piblic path
app.use(express.static('public'))

//set session to res
app.use((req, res, next) => {
    if(req.session.userid) {
        res.locals.session = req.session
    }
    next()
})

app.listen(3000, () => {
    console.log("Conectado ao servidor")
})