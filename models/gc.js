var mongoose = require("mongoose"), // Adds mongoose dependency
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;

var gcSchema = Schema({
  _id: { type: objectId, auto: true },
  speaker: { type: String, required: true },
  title: { type: String, required: true },
  session: { type: String, required: true },
  upvotes: { type: Number, required: true },
  imageUrl: { type: String, required: true }
}, {
  versionKey: false
});

var gc = mongoose.model('gc', gcSchema); // Makes an object from that schema as a model

module.exports = gc;