const mongoose = require('mongoose')

if(process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name_get = process.argv[3]
const number_get = process.argv[4]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.jh53fsg.mongodb.net/phoneBookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if(process.argv.length === 5) {
  const person = new Person({
    name: name_get,
    number: number_get
  })

  person.save().then(() => {
    console.log(`added ${name_get} number ${number_get} to the phoneboook`)
    mongoose.connection.close()
  })
} else {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}