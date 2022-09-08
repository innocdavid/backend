import Deal from '../models/deals.js';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

// @desc Fetch all deals
// @desc GET /api/deals
// @acess public
router.get('/',
  asyncHandler(async (req, res) => {
    const deals = await Deal.find({})
    res.json(deals);
  })
);

// @desc Fetch single deal
// @desc GET /api/deals/:id
// @acess public
router.get('/:id', 
  asyncHandler(async (req, res) => { 
    const deal = await Deal.findById(req.params.id);
    if (deal) {
      res.json(deal);
    } else {
      res.status(404);
      throw new Error('Deal not found');
    }
  })
);

export default router;