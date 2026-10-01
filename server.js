import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("Конференции.РФ"));

app.listen(PORT, () => {
  console.log(`Сервер: http://localhost:${PORT}`);
});


app.get("/about", (req, res) => res.send("О портале"));

app.get("/contact", (req, res) => res.send("Контакты"));