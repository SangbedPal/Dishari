import { v2 as cloudinary } from 'cloudinary';

async function imageUploader(photo) {
    if (!photo) {
        return res.status(400).send({ error: "Photo is required" });
    }
    
    const allowedFormats = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedFormats.includes(photo.mimetype)) { // checking if uploaded image type matches with 'allowedFormats'
        return res.status(400).json({ message: "Invalid photo format. Only jpeg, png and webp are allowed." });
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(photo.tempFilePath) // uploading image and getting corresponding string
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.log(cloudinaryResponse.error);
        return;
    }

    const image = {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.url,
    };

    return image;
}

export default imageUploader;