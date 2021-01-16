const connection = require("../config/connection.js");

const objToSql = ob => {
    let arr = [];

    for (let key in ob){
        let value = ob [key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value == "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            } 
            arr.push(key + "=" + value);
        };
    };
    return arr.toString();
};

const orm = {
    selectAll: function(table, cb){
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb){
        let queryString = "INSERT INTO " + table;
        connection.query(queryString, vals, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },
    updateONE: function(table, vals, condition, cb){
        let queryString = "UPDATE " + table;
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },
}



