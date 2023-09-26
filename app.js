const express = require('express');
const app = express();
const path = require("path");

app.get("/about", (req, res) => {
    res.status(200).send("HELLO WORLD!");
});
app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./page1.html"))
});
app.get("/page2.html", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./page2.html"))
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>Error! 404 Not found !</h1>");
});

app.listen(8000, () => {
    console.log("Hello World!");
}); 
