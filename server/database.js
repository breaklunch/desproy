const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/productos'

mongoose.connect(URI)
    .then(db => console.log('DB se conecto'))
    .catch(err => console.error(err));

module.exports = mongoose;

