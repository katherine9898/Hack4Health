var express = require("express");
var router = express.Router();
const database = require("../common/database");
const utils = require("../common/utils");


/* GET home page. */
router.post("/hospital", function (req, res, next) {
  try {
    let SQL = "SELECT hospital_id, hospital_name, hospital_latitude, hospital_longitude, hospital_is_available_for_vaccine FROM hospital"
    let result = await database.QueryMySQL(SQL);
    return utils.SendResult(res, result);
  }
  catch (err) {
    utils.SendError(res, err);
  }
});

router.post("/find", auth, async function (req, res, next) {
  let location = req.body.location;
  let distance = req.body.distance;
})

module.exports = router;
