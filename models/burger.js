const orm = require ("../config/orm.js");

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(vals, condition, cb){
        orm.updateOne("burgers", vals, coniditon, function(res){
            cb(res);
        });
    }
};

module.exports = burger;