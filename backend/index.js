const express = require('express');
const mongoose = require('mongoose');
const {readdirSync} = require('fs') //apply /api
const cors = require('cors')
const app = express()

app.use(express.json()) // it is use to convert the object u are receiving frm d frontend to json(backend)
app.use(cors()) // it's used to communicate d frontend with d backend for all of them to have d same ip address


//Db connection //it's going to MongoDB i.e my details 
mongoose.connect('mongodb+srv://Chukwudi:08094013203@cluster0.1nvfkik.mongodb.net/test', {
    useUnifiedTopology: true, 
}).then(()=> console.log('DB connected'))
.catch((err) => console.log('DB Connection Error',err))

// route middleware
readdirSync('./route').map((r) => app.use('/api', require(`./route/${r}`)))
// line 18 is a cheat just use it dat way
const port = 8000
app.listen(port, () => console.log(`Server is running on port ${port}`))