let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let timeStamps = require('mongoose-timestamp')


let Order = new Schema({
    delivered: { type: Boolean, default: false },
    orderId: { type: String, unique: true, index: true },
    isPaid: { type: Boolean, default: false },
    product: { type: Schema.Types.ObjectId },
    customer: { type: Schema.Types.ObjectId },
    seller: { type: Schema.Types.ObjectId },
    quantity: { type: Number, default: 1 },
    size: { type: String },
    maxPrice: { type: Number, required: true},
})

Order.plugin(timeStamps);


module.exports = mongoose.model("Order", Order)