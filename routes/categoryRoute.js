import Category from '../models/category.js';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

// @desc Fetch all catergories
// @desc GET /api/categories
// @acess public
router.get('/',
  asyncHandler(async (req, res) => {
    const categories = await Category.find({})
    res.json(categories);
  })
);

// @desc Fetch single category
// @desc GET /api/categories/:id
// @acess public
router.get('/:id', 
  asyncHandler(async (req, res) => { 
    const category = await Category.findById(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404);
      throw new Error('Category not found');
    }
  })
);

export default router;