import nc from 'next-connect';
import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/testfolder',
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
  res.status(200).json({ data: 'success' });
});

export default photoUploadApi;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
