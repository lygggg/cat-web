import reviewModel from "../models/review.schema";


class UploadRepository {
  async putOne(email, id, starCount, reviewText, imageUrl) {
    const d = new Date();
    const date =
      d.getFullYear() + "년 " + d.getMonth() + "월 " + d.getDate() + "일";
    await reviewModel.create({ email, id, starCount, reviewText, imageUrl, date})
  }
}

export default UploadRepository;
