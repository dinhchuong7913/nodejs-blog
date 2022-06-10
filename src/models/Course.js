const { default: mongoose } = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, required:true },
  description: { type: String, maxLength: 600 },
  image: { type: String },
  slug: { type: String, slug: 'name' },
  video_id: { type: String, required:true},
  level: { type: String }
},{
  timestamps:true,
});

module.exports = mongoose.model('Course', Course);
