import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const imageUrl = `${__dirname}/../../public/uploads/${file.name}`;
    const { productId, starCount, reviewText } = req.body;
    if(req.files === null) {
      return res.status(400).json({ msg: '사진이 없습니다.'});
    }
  
    const file = req.files.file;
    
    file.mv(`${__dirname}/../../public/uploads/${file.name}`, err => {
      if(err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    });
  })

export default router;