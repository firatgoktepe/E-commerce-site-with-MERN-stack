const Item = require('../models/item');


// get all items and sort them in decreasing order by date added
module.exports.get_items = (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => {
            res.json(items);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

// add a new item to the cart
module.exports.post_item = (req, res) => {
    const newItem = new Item(req.body)
    newItem.save()
        .then(item => {
            res.json(item);
        })
}

// Updating items
module.exports.update_item = (req, res) => {
    Item.findByIdAndUpdate({
        _id: req.params.id}, req.body)
        .then(item => {
            Item.findOne({
                _id: req.params.id})
                .then(item => {
                    res.json(item);
                })
        })
}

// Deletion of items from the database
module.exports.delete_item = (req, res) => {
    Item.findByIdAndDelete({
        _id: req.params.id})
        .then((item) => {
            res.json({
                success: true
            });
        })
}