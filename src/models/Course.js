const { default: mongoose } = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
    video_id: { type: String, required: true },
    level: { type: String },
  },
  {
    timestamps: true,
  }
);
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });
module.exports = mongoose.model("Course", Course);
