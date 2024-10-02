// const mongoose = require("mongoose");

// const Marks = new mongoose.Schema({
//   enrollmentNo: {
//     type: Number,
//     required: true,
//   },
//   internal: {
//     type: Map,
//   },
//   external: {
//     type: Map,
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("Mark", Marks);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marksSchema = new Schema({
  enrollmentNo: {
    type: Number,
    required: true,
  },
  internal: {
    type: Map,
    of: String, // Assuming internal marks are strings
  },
  external: {
    type: Map,
    of: String, // Assuming external marks are strings
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Marks = mongoose.model("Marks", marksSchema);
module.exports = Marks;

