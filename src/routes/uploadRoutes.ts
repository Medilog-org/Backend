import express from "express";
import multer from "multer";
import { uploadFile } from "../controllers/uploadContoller";

const router = express.Router();
const upload = multer();

router.post("/upload", upload.single("file"), uploadFile);

export default router;
