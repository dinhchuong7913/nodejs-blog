const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP Logger
var morgan = require('morgan');
app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
const routes = require('./routes');
routes(app);

// Connect db
const db = require('./config/db');
db.connect();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
