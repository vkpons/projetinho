const mongoose = require('mongoose');

module.exports = mongoose.connect('mongobd://localhost:27017/myDataBase', {
    useNewUrlParser: true
});