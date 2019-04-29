// require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use('/', router)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})