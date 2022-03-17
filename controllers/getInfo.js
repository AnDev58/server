const ObjectId = require("mongodb").ObjectId
const dbo = require("../db/conn")

module.exports = function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("users")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  }