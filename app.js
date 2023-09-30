const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
});

app.get("/about", (req, res) => {
    res.redirect("/about.html");
});

app.use((req, res, next) => {
    res.status(404).send("<h1>Error! 404 Not found !</h1>");
});

app.listen(8000, () => {
    console.log("Hello World!");
});
