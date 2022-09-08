import Brand from '../models/brand.js';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

// @desc Fetch all brands
// @desc GET /api/brands
// @acess public
router.get('/',
  asyncHandler(async (req, res) => {
    const brands = await Brand.find({})
    res.json(brands);
  })
);

// @desc Fetch single brand
// @desc GET /api/brands/:id
// @acess public
router.get('/:id', 
  asyncHandler(async (req, res) => { 
    const brand = await Brand.findById(req.params.id);
    if (brand) {
      res.json(brand);
    } else {
      res.status(404);
      throw new Error('Brand not found');
    }
  })
);

export default router;