import express from "express";
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Конференции.РФ"));

app.listen(PORT, () => {
  console.log(`Сервер: http://localhost:${PORT}`);
});


app.get("/about", (req, res) => res.send(`<h1>О портале</h1>
        <p>Добро пожаловать на наш сайт!</p>`));

app.get("/contact", (req, res) => res.send("Контакты"));

app.get("/help", (req, res) => res.send("Помощь"));

app.get("/rooms", (req, res) => res.send("Список помещений"));

app.get("/register", (req, res) => {
  res.send(`
    <form method="POST" action="/register">
  <input name="login" placeholder="Логин" /><br />
  <input name="FIO" placeholder="ФИО" /><br />
  <input name="tel" placeholder="Номер Телефона" /><br />
  <input name="email" placeholder="Электронная почта" /><br />
  <input name="password" type="password" placeholder="Пароль" /><br />
  <button>Создать пользователя</button>
  `);
});

app.post("/register", (req, res) => {
  res.send(`
    Пользователь ${req.body.login} зарегистрирован<br>
    ФИО Пользователя ${req.body.FIO}<br>
    Телефон Пользователя ${req.body.tel}<br>
    Почта Пользователя ${req.body.email}
    `);
});

