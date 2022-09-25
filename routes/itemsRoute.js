import Items from '../models/items.js';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

// @desc Fetch all items
// @desc GET /api/items
// @acess public
router.get('/',
  asyncHandler(async (req, res) => {
    const item = await Items.find({})
    res.json(item);
  })
);

// @desc Fetch single item
// @desc GET /api/items/:id
// @acess public
router.get('/:id', 
  asyncHandler(async (req, res) => { 
    const item = await Items.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404);
      throw new Error('Items not found');
    }
  })
);

export default router;