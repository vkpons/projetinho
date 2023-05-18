const { model } = require('mongoose')
const Item = require('./item')

//create REST API
Item.methods(['get', 'post', 'put', 'delete'])

//return post/put methods
Item.updateOptions({new: true, runValidators: true})

module.exports = Item