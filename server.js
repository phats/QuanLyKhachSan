const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000;
const app = express();
var session = require("cookie-session");
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/public", express.static("public"));

app.engine('hbs', exphbs.engine({
    layoutsDir: './views/_layouts',
    defaultLayout: 'main.hbs',
    partialsDir: './views/_partials',
    extname: 'hbs'
}))
app.use(
    session({
        secret: "best secret key",
        resave: true,
        cookie: { secure: false },
        saveUninitialized: true,
    })
);


app.set('view engine', 'hbs')

app.get('/', function (req, res) {

    res.render('home')
})
// app.use('/', require('./routes/login.r'));
// function requireLogin(req, res, next) {
//     if (req.session.user) {
//         next();
//     } else {
//         res.redirect("/login/signin");
//     }
// }

// // Apply the middleware to all routes that require authentication
// app.use(requireLogin);
// app.use((err, req, res, next) => {
//     const status = err.status | 500;
//     res.status(status).send(err.message);
// });

//app.use("/",require("./"))


app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
})