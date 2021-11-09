import nc from 'next-connect';
import multer from 'multer';
import fs from 'fs-extra';
//import fs from 'fs';
import connectDB from '../../../util/database';
require('../../../models/Lock');
import mongoose from 'mongoose';
const Lock = mongoose.model('Lock');

//need to receieve and process more JSON data to dynamically allocate folders to different locks, different users w/in each lock
/*
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const { slug } = req.query;
      const path = './uploads/' + slug.join('/');
      fs.mkdirsSync(path);
      cb(null, path);
    },
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
}); */
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const photoUploadApi = nc({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.array('theFiles');
photoUploadApi.use(uploadMiddleware);

// Process a POST request, api stuff goes here
photoUploadApi.post(async (req, res) => {
  try {
    console.log('upload api, req');
    //console.log(req);
    const { slug } = req.query;
    console.log('slug');
    console.log(slug);
    const lc = slug[0];
    await connectDB();
    const data = {
      lockCode: lc,
    };
    console.log('lock');
    let lock = await Lock.findOne(data);
    console.log(lock);
    const filePath = './uploads/' + slug.join('/');
    console.log(filePath);
    console.log(slug[1]);
    console.log(req.files[0]);
    //console.log(fs.readFile(filePath));
    //const imgData = fs.readFile(filePath);
    //let base64 = imgData.toString('base64');
    //console.log(base64.substr(0, 200));
    //const imgBuffer = Buffer.from(base64, 'base64');
    //const imgBuffer = fs.readFileSync(req.files[0].path);
    const imgBuffer = req.files[0].buffer;
    const cType = req.files[0].mimetype;
    const typeRegex = /image\//gm;
    const fileExt = cType.replace(typeRegex, '.');
    console.log(fileExt);
    const dateAppend = Date.now();
    console.log(imgBuffer);
    const newimg = {
      username: slug[1],
      img: { data: imgBuffer, contentType: cType },
      filename: slug[1] + dateAppend + fileExt,
    };
    console.log('newimg');
    console.log(newimg);
    lock.images.push(newimg);
    lock.save();
    res.status(200).json({ data: 'success' });
  } catch (error) {
    console.log('error here');
    res.status(400).json({
      success: false,
      message: error.message,
      statusText: 'error in add user',
    });
  }
});

export default photoUploadApi;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
