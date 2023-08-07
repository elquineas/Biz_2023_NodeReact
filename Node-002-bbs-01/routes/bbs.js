// import express from "express";
// const router = express.Router();
import { Router } from "express";
const router = Router();
import DB from "../models/index.js";
const BBS = DB.models.tbl_bbs;

router.get("/", async (req, res) => {
  BBS.findAll().then((result) => {
    console.log(result);
    res.render("bbs/list", { BBS: result });
  });
  // res.render("bbs/list");
});

export default router;
