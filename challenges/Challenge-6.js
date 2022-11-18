
const express = require('express')

// can be used to set up the server
const app = express()

// showing a message when someone visits the home page
app.get('', (req, res) => {
  res.send(`hi i'm tired 😩`)
})

// showing a message when someone visits the about page
app.get('/about', (req, res) => {
  res.send(`I'm trying to learn how the server works`)
})
// showing a message when someone visits the help page
app.get('/help', (req, res) => {
  res.send('Do you need help? ')
})
// showing a message when someone visits the weather page
app.get('/weather', (req, res) => {
  res.send('Your weather')
})



//  start the server
app.listen(3000, () => {
  console.log('Server is up on port 3000.⬆️')
})