export default class UploadService {
    constructor(upload) {
        this.upload = upload;
    }

    async postUpload(email, productId, starCount, reviewText, imageUrl, productTitle) {
        await this.upload.putOne(email, productId, starCount, reviewText, imageUrl, productTitle);
    }
}