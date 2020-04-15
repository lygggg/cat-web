import express from 'express';

import UploadRepo from '../repositories/upload.repository';
import UploadService from '../services/upload.service';

const router = express.Router();

router.post('/', async (req, res) => {
  const file = req.files.file;

    if(req.files === null) {
      return res.status(400).json({ msg: '사진이 없습니다.'});
    }
  
    const imageUrl = `${__dirname}/../../public/uploads/${file.name}`;
    const { productId, starCount, reviewText } = req.body;
    const uploadRepo = new UploadRepo();
    const uploadService = new UploadService(uploadRepo);
    await uploadService.postUpload(req.session.email, productId, starCount, reviewText, imageUrl);
    
    file.mv(`${__dirname}/../../public/uploads/${file.name}`, err => {
      if(err) {
        console.error(err);
        return res.status(500).send(err);
      }
    
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    });
  })

export default router;