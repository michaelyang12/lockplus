import connectDB from '../../util/database';
require('../../models/Lock');
import mongoose from 'mongoose';
const Lock = mongoose.model('Lock');

export default async (req, res) => {
  const { method } = req;
  await connectDB(); //async connect to the database
  console.log('in validate');
  if (method === 'POST') {
    try {
      const LC = req.body.lockCode;
      const PE = req.body.email;
      const data = {
        lockCode: LC,
        parent_email: PE,
      };
      console.log(data);
      const newlock = new Lock(data);
      newlock.save();
      console.log('newlock');
      console.log(newlock);
      res.status(201).json({
        success: true,
        message: 'lock created',
        statusText: 'not validated',
      });
    } catch (error) {
      console.log('error here');
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
