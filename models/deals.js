import mongoose from  'mongoose';

const dealsSchema = mongoose.Schema({

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

  brand: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  reviews: {
    type: Number,
    required: true,
  },

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

  countInStock: {
    type: Number,
    required: true,
    default: 0
  }

}, { timestamps  : true })

const Deal = mongoose.model('Deals', dealsSchema);

export default Deal;
