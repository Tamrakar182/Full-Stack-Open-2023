const express = require('express')
const app = express()

app.use(express.json())


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res)=>{
    console.log('hello')
    res.send("<h1>Hello</h1>")
})

app.get('/api/persons', (req, res)=> {
    res.json(persons)
})

app.get('/info', (req,res)=>{
    const num = persons.length
    const date = new Date()
    res.send(`<p>
    Phone Book has info for ${num} people<br/>
    ${date}
    </p>`)
})

app.get('/api/persons/:id', (req, res)=> {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    res.json(person)
})

app.delete('/api/persons/:id', (req, res)=> {
    const id= Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }

app.post('/api/persons', (req, res)=> {
    const body = req.body
    const names = persons.map(person => person.name)
    console.log(names)

    if (!body.name) {
        return res.status(400).json({ 
          error: 'name missing' 
        })
    }

    if (!body.number) {
        return res.status(400).json({ 
            error: 'number missing' 
          })
    }

    if (names.includes(body.name)) {
        return res.status(400).json({ 
            error: 'name must be unique'  
          })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    res.json(persons)
})

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT} PORT`)
    console.log(`http://localhost:${PORT}/`)
})
