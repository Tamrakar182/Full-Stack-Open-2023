const express = require("express");
const morgan = require("morgan");
const app = express();
const Person = require("./models/person");

morgan.token("person", function getPerson(req) {
  return JSON.stringify(req.body);
});

app.use(morgan(":method :url :response-time :person"));
app.use(express.static("dist"));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello");
  res.send("<h1>Hello</h1>");
});

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

app.get("/info", (req, res) => {
  const num = persons.length;
  const date = new Date();
  res.send(`<p>
    Phone Book has info for ${num} people<br/>
    ${date}
    </p>`);
});

app.get("/api/persons/:id", (req, res) => {
  Person.findById(req.params.id).then((person) => {
    res.json(person);
  });
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  Person.find({}).then((persons) => {
    const names = persons.map((person) => person.name);
    console.log(names);

    if (names.includes(body.name)) {
      return res.status(400).json({
        error: "name must be unique",
      });
    }

    if (body.name === undefined) {
      return res.status(400).json({
        error: "name missing",
      });
    }

    if (body.number === undefined) {
      return res.status(400).json({
        error: "number missing",
      });
    }

    const person = new Person({
      name: body.name,
      number: body.number,
    });

    person.save().then((savedPerson) => {
      res.json(savedPerson);
    });
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT} PORT`);
  console.log(`http://localhost:${PORT}/`);
});
