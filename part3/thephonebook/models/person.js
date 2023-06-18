const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('Connected to DB.')
    })
    .catch((error)=> {
        console.log('error connecting to DB: ', error.message)
    })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

personSchema.set('toJSON', {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__v
    }
})

module.exports = mongoose.model('Person', personSchema)