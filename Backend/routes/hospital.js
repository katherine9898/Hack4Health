var express = require("express");
var router = express.Router();
const database = require("../common/database");
const utils = require("../common/utils");

// Search by Name
router.post("/hospital", async function (req, res, next) {
  try {
<<<<<<< HEAD
    params = [req.body.hospitalName.toLowerCase()];
    let SQL =
      "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM hospital WHERE hospital_name LIKE '%?%'";
=======
    params = [req.body.hospitalName.toLowerCase()]
    let SQL = "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM HOSPITAL WHERE hospital_name LIKE '%?%'"
>>>>>>> 7c7a1f6c62a1a238cfc1f5bbdf8a60f38b25bd19
    let result = await database.QueryMySQL(SQL, params);
    return utils.SendResult(res, result);
  } catch (err) {
    utils.SendError(res, err);
  }
});

// Search by id
router.post("/hospitalId", async function (req, res, next) {
  try {
<<<<<<< HEAD
    params = [req.body.hospital_id];
    let SQL =
      "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM hospital WHERE hospital_id = '%?%'";
=======
    params = [req.body.hospital_id]
    let SQL = "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM HOSPITAL WHERE hospital_id = '%?%'"
>>>>>>> 7c7a1f6c62a1a238cfc1f5bbdf8a60f38b25bd19
    let result = await database.QueryMySQL(SQL, params);
    return utils.SendResult(res, result);
  } catch (err) {
    utils.SendError(res, err);
  }
});

// get all location
router.get("/", async function (req, res, next) {
  try {
<<<<<<< HEAD
    let SQL =
      "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM HOSPITAL";
=======
    let SQL = "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM HOSPITAL"
>>>>>>> 7c7a1f6c62a1a238cfc1f5bbdf8a60f38b25bd19
    let result = await database.QueryMySQL(SQL);
    return utils.SendResult(res, result);
  } catch (err) {
    utils.SendError(res, err);
  }
});
module.exports = router;
