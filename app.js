const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.use(express.static(__dirname + '/public'));

//Handlebars Middleware

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const port = 5000;

//Index ROute
app.get('/', (req, res) => {
  res.render('index');
});

//About Route
app.get('/about', (req, res) => {
  res.render('about');
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
