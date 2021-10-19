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
      //const LC = req.body.lockCode;
      const PE = req.body.email;
      const data = {
        parent_email: PE,
      };
      const lock = await Lock.findOne(data);
      console.log(lock);
      res.status(201).json({
        success: true,
        message: 'lock updated',
        statusText: 'user added',
        root_user: lock.parent_email,
        children_users: lock.children_emails,
      });
    } catch (error) {
      console.log('error here');
      res.status(400).json({
        success: false,
        message: error.message,
        statusText: 'error in add user',
      });
    }
  } else {
    res.status(400).json({ success: false, statusText: 'wrong axios method' });
  }
};
