import reviewModel from "../models/review.schema";
import purchaseModel from '../models/purchase.schema';


class UploadRepository {
  async putOne(email, id, starCount, reviewText, imageUrl, productTitle) {
    const d = new Date();
    const date =
      d.getFullYear() + "년 " + d.getMonth() + "월 " + d.getDate() + "일";
    await reviewModel.create({ email, id, starCount, reviewText, imageUrl, productTitle, date})
    await purchaseModel
  }
}

export default UploadRepository;
