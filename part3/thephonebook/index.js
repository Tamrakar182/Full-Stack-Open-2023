const express = require("express");
const morgan = require("morgan");
const app = express();
const Person = require("./models/person");

morgan.token("person", function getPerson(req) {
  return JSON.stringify(req.body);
});

app.use(express.static("dist"));
app.use(express.json());
app.use(morgan(":method :url :response-time :person"));

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
  const date = new Date();
  Person.find({}).then((persons) => {
    const names = persons.map((person) => person.name);
    res.send(`<p>
    Phone Book has info for ${names.length} people<br/>
    ${date}
    </p>`);
  });
});

app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.send(204).end();
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (req, res, next) => {
  const body = req.body;
  const person = {
    name: body.name,
    number: body.number,
  };
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then((updatedPerson) => {
      res.json(updatedPerson);
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (req, res, next) => {
  const body = req.body;

  Person.find({}).then((persons) => {
    const names = persons.map((person) => person.name);

    // checks if person already exists in db
    if (names.includes(body.name)) {
      const person = {
        name: body.name,
        number: body.number,
      };
      Person.findOneAndUpdate({ name: body.name }, person, { new: true })
        .then((updatedPerson) => {
          res.json(updatedPerson);
        })
        .catch((error) => next(error));
    } 
      const person = new Person({
        name: body.name,
        number: body.number,
      });

      person
        .save()
        .then((savedPerson) => {
        res.json(savedPerson);
        })
        .catch((error) => next(error))
  });
});

const errorHandler = (error, request, response, next) => {
  console.log(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT} PORT`);
  console.log(`http://localhost:${PORT}/`);
});
