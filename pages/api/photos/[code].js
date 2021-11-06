import nc from 'next-connect';
import multer from 'multer';
import fs from 'fs-extra';

//need to receieve and process more JSON data to dynamically allocate folders to different locks, different users w/in each lock

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const code = req.query.code;
      const path = './photos/' + code;
      fs.mkdirsSync(path);
      cb(null, path);
    },
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const photoUploadApi = nc({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.array('theFiles');
photoUploadApi.use(uploadMiddleware);

// Process a POST request, api stuff goes here
photoUploadApi.post((req, res) => {
  console.log('upload api, req');
  console.log(req.query.code);
  res.status(200).json({ data: 'success' });
});

export default photoUploadApi;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
