import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";
const initModels = (sequelize) => {
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);

  tbl_bbs.hasMany(tbl_files, { as: "F_FILES", foreignKey: "f_bseq" });
  tbl_files.belongsTo(tbl_bbs, { as: "F_BBS", foreignKey: "f_bseq" });

  return {
    tbl_bbs,
    tbl_files,
  };
};

export default initModels;
