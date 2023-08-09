// import express from "export";
// const router = express.router;
import { Router } from "express";
const router = Router();

import multer from "multer";
import path from "path";
import fs, { mkdirSync } from "fs";
/**
 * bbs API Router 설정
 * 보통 API 서버는 view 가 없이 JSON (또는 XML)데이터를
 * client 로 return 하는 서버를 말한다 (Spring Rest Server)
 *
 * res.send() 또는 res.json() 함수로 마감한다
 *
 */
const Hello = {
  title: "NodeJS BBS 2023",
  message: "Hello NodeJS BBS World",
};

// 파일을 저장할 폴더
const uploadPath = path.join("public/uploads");
// 파일을 전송하기 위한 설정값 만들기
const storageOption = {
  filename: (req, file, cb) => {
    const originName = file.originName;
    const filePrix = `${Date.now()} - ${Math.round(Math.random() * 100000)}`;
    const fileName = `${filePrix}-${originName}`;
    cb(null, fileName);
  },
  destination: (req, file, db) => {
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
  },
};
const storage = multer.diskStorage(storageOption);
const uploadMiddleWare = multer({ storage: storage });

router.get("/", async (req, res, next) => {
  res.json(Hello);
});
router.post("/insert", uploadMiddleWare.single("b_image"), async (req, res) => {
  const body = req.body;
  // multer MiddleWare 가 파일 관련 데이터를 필터링 하고, 처리한 후
  // 관련 정보를 req.file 객체에 담아준다.
  const file = req.file;

  console.log("body : ", body, file.filename);
  res.send("OK");
});

export default router;
