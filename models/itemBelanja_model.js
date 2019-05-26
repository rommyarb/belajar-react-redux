var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemBelanjaSchema = new mongoose.Schema({
    title: String
});
var ItemBelanja = mongoose.model('ItemBelanja', itemBelanjaSchema);

module.exports = ItemBelanja;