var orm = require("../config/orm.js");

var sandwich = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insertOne: function (sandwich, cb) {
        orm.insertOne(sandwich, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        orm.updateOne([id], function (res) {
            cb(res);
        });
    }
};

module.exports = sandwich;