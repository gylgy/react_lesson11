const mongoose = require("mongoose")
mongoose.connect(
    "mongodb+srv://gaohong:gyl0216gyb0216@cluster0.evogn.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
const BrandSchema = new mongoose.Schema({
    brandname: { type: String },
    brandPrice: { type: String },
    ctime: { type: String }
})
const BrandModel = mongoose.model("brands", BrandSchema)
module.exports = {
    BrandModel,
}
