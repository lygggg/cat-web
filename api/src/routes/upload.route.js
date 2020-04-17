import express from 'express';

import UploadRepo from '../repositories/upload.repository';
import UploadService from '../services/upload.service';

const router = express.Router();

router.post('/', async (req, res) => {
  const { productId, starCount, reviewText, productTitle } = req.body;
  const uploadRepo = new UploadRepo();
    const uploadService = new UploadService(uploadRepo);

    if(!req.files) {
      const imageUrl = '없음'
      console.log(req.body);
    console.log( productId, starCount, reviewText, imageUrl, productTitle)
    await uploadService.postUpload(req.session.email, productId, starCount, reviewText, imageUrl, productTitle);
    res.send('리뷰등록');
    }

    if(req.files) {
      const file = req.files.file;
      console.log(req.body);
      const imageUrl = `${__dirname}/../../public/uploads/${file.name}`;
    console.log( productId, starCount, reviewText, imageUrl, productTitle)
    await uploadService.postUpload(req.session.email, productId, starCount, reviewText, imageUrl, productTitle);
    
    file.mv(`${__dirname}/../../public/uploads/${file.name}`, err => {
      if(err) {
        console.error(err);
        return res.status(500).send(err);
      }
    
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    });
    }
  
    
  })

export default router;