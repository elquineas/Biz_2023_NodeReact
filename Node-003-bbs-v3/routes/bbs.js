// import express from "export";
// const router = express.router;
import { Router } from "express";
const router = Router();

import multer from "multer";
import fs from "fs";

import DB from "../models/index.js";
// const tbl_bbs = DB.models.tbl_bbs;
// const tbl_files = DB.models.tbl_files;

// 구조분해하여 객체로부터 변수를 독립하고, 다른이름으로 사용하기
const { tbl_bbs: BBS, tbl_files: FILES } = DB.models;

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

const encKor = (str) => {
  console.log(str);
  return Buffer.from(str, "latin1").toString("UTF-8");
};

// 파일을 전송하기 위한 설정값 만들기
const storageOption = {
  filename: (req, file, cb) => {
    console.log(file);
    file.originalname = encKor(file.originalname);
    const originName = file.originalname;
    const filePrix = `${Date.now()} - ${Math.round(Math.random() * 100000)}`;
    const fileName = `${filePrix}-${originName}`;
    cb(null, fileName);
  },
  destination: (req, file, cb) => {
    // 파일을 저장할 폴더가 없으면 새로 생성하라
    // 업로드 폴더는 app.js 에서 선언한 uploadPath 값을 참조한다
    if (!fs.existsSync(req.uploadPath)) {
      fs.mkdirSync(req.uploadPath);
    }
    cb(null, req.uploadPath);
  },
};
const storage = multer.diskStorage(storageOption);
const uploadMiddleWare = multer({ storage });

router.get("/", async (req, res, next) => {
  res.json(Hello);
});
router.post("/insert", uploadMiddleWare.array("b_images"), async (req, res) => {
  const body = req.body;
  // multer MiddleWare 가 파일 관련 데이터를 필터링 하고, 처리한 후
  // 관련 정보를 req.file 객체에 담아준다.
  const files = req.files;
  const bbsDto = JSON.parse(body.bbs);
  // console.log("body : ", files, bbsDto);

  // files 이미지들 중에서 [0]번째는 대표이미지이다
  bbsDto.b_image = files[0]?.filename;
  bbsDto.b_origin_image = files[0]?.originalname;

  const result = await BBS.create(bbsDto);
  // 이미지 정보 생성
  for (let i = 1; i < files.length; i++) {
    const fileDto = {};
    fileDto.f_image = files[i].filename;
    fileDto.f_origin_image = files[i].originalname;
    fileDto.f_bseq = result.b_seq;
    await FILES.create(fileDto);
  }

  res.send("OK");
});

router.get("/list", async (req, res) => {
  // 1:N 관계에서 자동 JOIN 하는 코드
  const bbsList = await BBS.findAll({
    include: { model: FILES, as: "F_FILES" },
  });
  return res.json(bbsList);
});

// ?seq=값 => queryString 방식
//          req.query.seq 로 받기
// /:seq => PathVarriable 방식
//          req.params.seq 로 받기
// form 으로 전송한 데이터
//          req.body 로 받기
router.get("/detail/:seq", async (req, res) => {
  const seq = req.params.seq;
  const bbsList = await BBS.findOne({
    where: { b_seq: seq },
    include: { model: FILES, as: "F_FILES" },
  });
  return res.json(bbsList);
});

export default router;
