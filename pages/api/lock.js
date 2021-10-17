import connectDB from '../../../util/database';
require('../../../models/Lock');
import mongoose from 'mongoose';
const Lock = mongoose.model('Lock');

export default async (req, res) => {
  const { method } = req;
  await connectDB(); //async connect to the database
  console.log('in validate');
  if (method === 'POST') {
    try {
      const data = {
        lockCode: req.body.lockCode,
        parent_email: req.body.email,
      };
      await Lock.create(data);
      res.status(201).json({
        success: true,
        message: 'lock created',
        statusText: 'not validated',
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        statusText: 'error in validation',
      });
    }
  } else {
    res.status(400).json({ success: false, statusText: 'wrong axios method' });
  }
};
