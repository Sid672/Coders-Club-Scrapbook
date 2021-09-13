import express from 'express';
import multer from 'multer';
import path from 'path';

import { uploadFile, getFileStream, deleteObject } from '../utils/s3.js';
const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(
            null,
            `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        );
    },
});

function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/;
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Upload Images Only!');
    }
}

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
});

router
    .post('/', upload.single('image'), async (req, res) => {
        const result = await uploadFile(req.file);
        // console.log(result);
        res.send({ imagePath: `/api/v1/upload/${result.Key}` });
    })
    .get('/:key', (req, res) => {
        const key = req.params.key;
        // console.log(key);
        const readStream = getFileStream(key);
        readStream.pipe(res);
    })
    .delete('/:key', (req, res) => {
        const key = req.params.key;
        // console.log(key);
        res.send('delete succussfully');
    });
export default router;
