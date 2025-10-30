const {Schema} = requre("mongoose");

const HoldingsSchema = new Schema({
 name: "String",
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
})

module.export = {HoldingsSchema};