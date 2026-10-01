import express from "express";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Конференции.РФ"));

app.listen(PORT, () => {
  console.log(`Сервер: http://localhost:${PORT}`);
});


app.get("/about", (req, res) => {
  res.render("about", {
    title: "О портале Конференции.РФ",
    description: "Площадка для поиска и организации главных научных и образовательных событий. Объединяем экспертное сообщество и автоматизируем проведение мероприятий.",
    errors: [],
  });
});
app.get("/contact", (req, res) => res.send("Контакты"));

app.get("/help", (req, res) => res.send("Помощь"));

app.get("/rooms", (req, res) => res.send("Список помещений"));

app.get("/register", (req, res) => {
  res.render("register", 
    { title: "Регистрация на портале", 
      errors: [] });
});


app.get("/login", (req, res) => {
  res.render("login", { title: "Вход на портал", 
    errors: [] });
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { title: "Личный кабинет", 
    errors: [] });
});


app.post("/register", (req, res) => {
  res.send(`
    Пользователь ${req.body.login} зарегистрирован<br>
    ФИО Пользователя ${req.body.FIO}<br>
    Телефон Пользователя ${req.body.tel}<br>
    Почта Пользователя ${req.body.email}<br>
    Город Пользователя ${req.body.city}
    `);
});
