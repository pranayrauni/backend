require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/twitter', (req, res) => {
    res.send('pranayrauni')
})

// app.listen(port, () => {
//     console.log(`App is listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${port}`)
})