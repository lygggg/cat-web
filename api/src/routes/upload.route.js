import express from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";

import UploadRepo from "../repositories/upload.repository";
import UploadService from "../services/upload.service";

const router = express.Router();

AWS.config.loadFromPath(__dirname+'/../config/awsconfig.json');
let s3 = new AWS.S3({
});

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "reviewfile",
    acl: "public-read-write",
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    },
  }),
  
});

router.post("/", upload.single('myfile'), async (req, res) => {
  const file = req.file
  console.log(file);
  const { productId, starCount, reviewText, productTitle } = req.body;
  let imageUrl = '';
  if (!req.file) {
    imageUrl = "없음";
  } else {
    imageUrl = 's3URL';
  }

  try {
    const uploadRepo = new UploadRepo();
    const uploadService = new UploadService(uploadRepo);
    await uploadService.postUpload(
      req.session.email,
      productId,
      starCount,
      reviewText,
      imageUrl,
      productTitle,
    );
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
  } catch (err) {
    res.send(500, err);
  }
});

export default router;

// let payLoad = {url: req,}

// file.mv(`${__dirname}/../../public/uploads/${file.name}`, err => {
//   if(err) {
//     console.error(err);
//     return res.status(500).send(err);
//   }

//   res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
// });
