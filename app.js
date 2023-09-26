const express = require('express');
const app = express();
const path = require("path");

// Подключаем статические файлы из папки "public"
app.use(express.static(path.join(__dirname, "public")));

// Главная страница
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
});

// Страница "Про нас" (перенаправление на about.html)
app.get("/about", (req, res) => {
    res.redirect("/about.html");
});

// Обработка 404 ошибки для всех остальных маршрутов
app.use((req, res, next) => {
    res.status(404).send("<h1>Error! 404 Not found !</h1>");
});

app.listen(8000, () => {
    console.log("Hello World!");
});
