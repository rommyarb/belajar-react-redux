var mongoose = require('mongoose');

var itemBelanjaSchema = new mongoose.Schema({
    title: String
});
var ItemBelanja = mongoose.model('ItemBelanja', itemBelanjaSchema);

module.exports = ItemBelanja;