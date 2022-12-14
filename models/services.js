import mongoose from  'mongoose';

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: String, required: true },
  comment: { type: String, required: true },
}, { timestamps  : true })

const servicesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  reviews: [reviewSchema],

  rating: {
    type: Number,
    required: true,
    default: 0
  },

  numReviews: {
    type: Number,
    required: true,
    default: 0
  },

  price: {
    type: Number,
    required: true,
    default: 0
  },


}, { timestamps  : true })

const Services = mongoose.model('Services', servicesSchema);

export default Services;