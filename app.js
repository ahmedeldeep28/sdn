const express = require("express");
const bodyparser = require("body-parser");
const compression = require("compression")
const path = require("path");
const session = require("express-session")
const SessionStore = require("connect-mongodb-session")(session);
const auth_router = require("./router/auth.router");
const dashbord_router = require("./router/dashbord.router");
const client_router = require("./router/client.router");
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "images")));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(compression());
app.use(bodyparser.urlencoded({ extended: true }));

const STORE = new SessionStore({
    uri: process.env.DB_URL,
    collection: "sessions"
})

app.use(session({
    secret: "lo jiohs jifdj joigfi h iuhurf hrpuhg",
    saveUninitialized: false,
    cookie: {
        maxAge: 1 * 60 * 60 * 10000
    },
    store: STORE
}))


app.use(client_router);
app.use(dashbord_router);
app.use(auth_router);
app.get("/error", (rea, res) => {
    res.render("error", {
        pageName: "error"
    })
});

app.use((rea, res) => {
    res.render("not-found", {
        pageName: "not-found"
    })
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server start on port" + PORT));