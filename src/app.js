const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

// Initializations
const app = express();

// Importing Routes
const customerRoutes = require('./routes/customer');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(
  myConnection(
    mysql,
    {
      host: 'localhost',
      user: 'root',
      password: '123456',
      port: 3306,
      database: 'crudnodejsmysql',
    },
    'single'
  )
);
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', customerRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the Server
app.listen(3000, () => {
  console.log('Server on port 3000');
});
