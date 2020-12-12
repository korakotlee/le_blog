const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))

app.get('/api', (req,res)=> {
  res.json( {time: Date().toString()})
})

port = process.env.PORT || 8000
app.listen(port, ()=> {
  console.log(`server running at ${port}`)
})
