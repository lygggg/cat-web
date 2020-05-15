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
    bucket: "reviewfiles",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read-write",
    key: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  
});

router.post("/", upload.single('myfile'), async (req, res) => {
  
  const file = req.file
  const { productId, starCount, reviewText, productTitle } = req.body;
  let imageUrl = '';
  if (!req.file) {
    imageUrl = "https://reviewfiles.s3.ap-northeast-2.amazonaws.com/notimage.png";
  } else {
    imageUrl = `https://reviewfiles.s3.ap-northeast-2.amazonaws.com/${file.originalname}`;
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
    res.send('실패');
  }
});

export default router;
