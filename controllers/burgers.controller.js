const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(data =>
        const ob = {
            burgers: data
        };
    });
});

