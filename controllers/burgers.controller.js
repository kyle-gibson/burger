const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(data => {
        const ob = {
            burgers: data
        };
        res.render("index", ob);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], result => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    const condition = "id = " + req.params.id;
    burger.updateOne ({devoured: req.body.devoured},
        condition, function(result){
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;
