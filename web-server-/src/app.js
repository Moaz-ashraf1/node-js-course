const path = require('path');
const express = require('express')
const hbs = require('hbs')
const app = express();

//  Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public/')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials');
// setup handlebars engine and view location
app.set('view engine', 'hbs');
app.set('views', viewPath);
//telling Handlebars where you’d like to store partial.
hbs.registerPartials(partialPath);




// setup static directory for server
app.use(express.static(publicDirectoryPath));


// Setting up Handlebars
app.get('', (req, res) => {
  res.render('index', {
    title: "Weather",
    name: 'Moaz Ashraf'
  })
})
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: "Moaz Ashraf"
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Moaz Ashraf'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Page not found',
    name: 'Moaz ashraf',

  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Moaz Ashraf',
    errorMessage: 'Page not found.'
  })

})





// start the server.
app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})

