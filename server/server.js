const express = require('express')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;
//const buildPath = path.join(__dirname, '..', 'client', 'build');

//app.use(express.static(buildPath));
app.use(cors());

app.get("/app-works", (req, res) => {
    res.send(process.env.REACT_APP_TEXT || ".env doesn't work");
})

app.get("/", (req, res) => {
    res.send(process.env.BACKEND_APP_TEXT)
})

/*app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
  })*/

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})
