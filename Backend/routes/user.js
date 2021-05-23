const express = require("express");
const utils = require("../common/utils");
const database = require("../common/database");
const router = express.Router();

/* GET users listing. */
router.post("/login", async function (req, res, next) {
  try {
    let params = [req.body.googleID];
    let result = await database.QueryMySQL(
      "SELECT HOPIFI_USER_ID FROM HOPIFI_USER WHERE HOPIFI_USER_GOOGLE_ID = ?",
      params
    );

    //User exists, update information
    if (result.length) {
      params = [
        req.body.googleID,
        req.body.fullName,
        req.body.givenName,
        req.body.familyName,
        req.body.profileImage,
        req.body.email,
        req.body.googleID,
      ];
      await database.QueryMySQL(
        "UPDATE HOPIFI_USER " +
          "SET `HOPIFI_USER_GOOGLE_ID` = ?, " +
          "`HOPIFI_USER_FULL_NAME` = ?, " +
          "`HOPIFI_USER_GIVEN_NAME` = ?, " +
          "`HOPIFI_USER_FAMILY_NAME` =?, " +
          "`HOPIFI_USER_IMAGE_URL` = ?, " +
          "`HOPIFI_USER_EMAIL` = ? " +
          "WHERE `HOPIFI_USER_ID` = ?",
        params
      );
      console.log(result);
      let result = await database.QueryMySQL(
        "SELECT HOPIFI_USER_ID FROM HOPIFI_USER WHERE HOPIFI_USER_GOOGLE_ID = ?",
        [req.body.googleID]
      );
      console.log(result);
      req.session.uid = result[0].HOPIFI_USER_ID;
      req.session.gid = req.body.googleID;
      return utils.SendResult(res);
    }

    //User does not exists, insert to user table
    params = [
      req.body.googleID,
      req.body.fullName,
      req.body.givenName,
      req.body.familyName,
      req.body.profileImage,
      req.body.email,
    ];
    result = await database.QueryMySQL(
      "INSERT INTO HOPIFI_USER ( `HOPIFI_USER_GOOGLE_ID`, `HOPIFI_USER_FULL_NAME`, `HOPIFI_USER_GIVEN_NAME`, " +
        "`HOPIFI_USER_FAMILY_NAME`, `HOPIFI_USER_IMAGE_URL`, `HOPIFI_USER_EMAIL`) VALUES(?, ?, ?, ?, ?, ?)",
      params
    );
    console.log(result);
    req.session.uid = result.insertId;
    req.session.gid = req.body.gid;
    return utils.SendResult(res);
  } catch (e) {
    utils.SendError(res, e);
  }
});

module.exports = router;
