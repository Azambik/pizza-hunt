//importing only schema and model from mongoose
const { Schema, model } = require('mongoose');
//shaping the structure of pizza object
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

//create the Pizza model using the pizzaSchema
const Pizza = model("Pizza", PizzaSchema);

//export the Pizza model
module.exports = Pizza;