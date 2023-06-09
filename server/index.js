const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 8080);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/productos',require('./routes/productos.routes'));
//Inicio de servidumbre
app.listen(app.get('port'), () =>{
  console.log('Server on port', app.get('port'));
});


