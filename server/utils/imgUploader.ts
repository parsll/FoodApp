import multer from "multer";
import { Request } from "express";
import fs from "fs";
import crypto from "crypto";

export function upload(destination: string) {
  const upload = multer({
    storage: multer.diskStorage({
      destination: (req: Request, file: Express.Multer.File, callback: any) => {
        const uploadPath = `Assets/${destination}`;
        fs.mkdirSync(uploadPath, { recursive: true });
        callback(null, uploadPath);
      },
      filename: (req: Request, file: Express.Multer.File, callback: any) => {
        const photoName = crypto.randomBytes(15).toString("hex");
        const imageName =
          file.fieldname +
          photoName +
          "." +
          file.originalname.split(".")[file.originalname.split(".").length - 1];

        callback(null, imageName);
      },
    }),
  });
  return upload;
}
