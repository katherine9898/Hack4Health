var express = require("express");
var router = express.Router();
const database = require("../common/database");
const utils = require("../common/utils");


// Search by Name
router.post("/hospital", async function (req, res, next) {
  try {
    params = [req.body.hospitalName.toLowerCase()]
    let SQL = "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM HOSPITAL WHERE hospital_name LIKE '%?%'"
    let result = await database.QueryMySQL(SQL, params);
    return utils.SendResult(res, result);
  }
  catch (err) {
    utils.SendError(res, err);
  }
});

// Search by id
router.post("/hospitalId", async function (req, res, next) {
  try {
    params = [req.body.hospital_id]
    let SQL = "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM HOSPITAL WHERE hospital_id = '%?%'"
    let result = await database.QueryMySQL(SQL, params);
    return utils.SendResult(res, result);
  }
  catch (err) {
    utils.SendError(res, err);
  }
});

// get all location
router.get("/", async function (req, res, next) {
  try {
    let SQL = "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM HOSPITAL"
    let result = await database.QueryMySQL(SQL);
    return utils.SendResult(res, result);
  }
  catch (err) {
    utils.SendError(res, err);
  }
});
module.exports = router;
