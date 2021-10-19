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
      const NU = req.body.newUser;
      const data = {
        parent_email: PE,
      };
      let lockToModify = await Lock.findOne(data);
      console.log('modify found');
      console.log(lockToModify);
      lockToModify.children_emails.push(NU);
      lockToModify.save();
      console.log('newlock');
      console.log(lockToModify);
      res.status(201).json({
        success: true,
        message: 'lock updated',
        statusText: 'user added',
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
