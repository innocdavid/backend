import Services from '../models/services.js';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

// @desc Fetch all services
// @desc GET /api/services
// @acess public
router.get('/',
  asyncHandler(async (req, res) => {
    const service = await Services.find({})
    res.json(service);
  })
);

// @desc Fetch single service
// @desc GET /api/services/:id
// @acess public
router.get('/:id', 
  asyncHandler(async (req, res) => { 
    const service = await Services.findById(req.params.id);
    if (service) {
      res.json(service);
    } else {
      res.status(404);
      throw new Error('Service not found');
    }
  })
);

export default router;