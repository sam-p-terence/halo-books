const express = require('express')
const path = require('path')

const app = express()



// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'bd34daee5cfe4b1fb042362b7d0684ca',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");


const students = ['Jimmy', 'Timothy', 'Jimothy']


app.get('/api/students', (req, res) => {
    rollbar.info('Students List Requested')
    rollbar.error('stuff is going wrong')
    rollbar.critical('everything is on fire')
    rollbar.warning('jk')
    res.status(200).send(students)
})

try{blach()}
catch (catch){
    rollbar.error(error)
}


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
