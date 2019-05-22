var connection = require('./connections.js');



    var orm = {

    selectAll: function (cb) {
        var queryString = "SELECT * FROM sandwiches";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (sandwich, cb) {
        var queryString = "INSERT INTO sandwiches (sandwich_name) VALUES (?)";
        connection.query(queryString, [sandwich], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

   
    updateOne: function (id, cb) {
        var queryString = "UPDATE sandwich SET devoured = true WHERE id = ?";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;