const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// Middleware?
app.use(express.static(path.join(__dirname, '../frontend')))
app.use(express.static(path.join(__dirname, '../')))


// Website endpoints
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/cart.html', (req, res) =>{
    res.sendFile(path.join(__dirname, '../frontend/html_pages/cart.html'))
})


app.listen(port, () => {
    console.log('Server is listening on port', port)
})