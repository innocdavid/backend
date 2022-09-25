import Properties from '../models/properties.js';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

// @desc Fetch all properties
// @desc GET /api/properties
// @acess public
router.get('/',
  asyncHandler(async (req, res) => {
    const property = await Properties.find({})
    res.json(property);
  })
);

// @desc Fetch single properties
// @desc GET /api/properties/:id
// @acess public
router.get('/:id', 
  asyncHandler(async (req, res) => { 
    const property = await Properties.findById(req.params.id);
    if (property) {
      res.json(property);
    } else {
      res.status(404);
      throw new Error('Property not found');
    }
  })
);

export default router;