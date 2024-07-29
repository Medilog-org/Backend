import { Request, Response } from "express";
import { storage } from "../config/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export const uploadFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const file = req.file;

  if (!file) {
    res.status(400).json({ message: "No file uploaded" });
    return;
  }

  try {
    const ext = file.originalname.split(".").slice(-1)[0];
    const newFileName = `${uuidv4()}.${ext}`;

    const storageRef = ref(storage, `uploads/${newFileName}`);
    const metadata = await uploadBytes(storageRef, file.buffer);
    const fileURL = `https://storage.googleapis.com/${storageRef.bucket}/${storageRef.fullPath}`;
    res.json({ fileURL });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
