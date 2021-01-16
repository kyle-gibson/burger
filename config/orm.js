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

