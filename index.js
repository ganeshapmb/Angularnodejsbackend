const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
const port =5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello mb')
  })

app.use('/api/degree', require('./routes/degrees'))

app.listen(port,()=>{
    console.log(`Connected succesfully at http://localhost:${port}`)
})