var express = require("express");
var router = express.Router();
const database = require("../common/database");
const utils = require("../common/utils");


// Search by Name
router.post("/hospital", async function (req, res, next) {
  try {
    params = [req.body.hospitalName.toLowerCase()]
    let SQL = "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM hospital WHERE hospital_name LIKE '%?%'"
    let result = await database.QueryMySQL(SQL, params);
    return utils.SendResult(res, result);
  }
  catch (err) {
    utils.SendError(res, err);
  }
});


module.exports = router;
