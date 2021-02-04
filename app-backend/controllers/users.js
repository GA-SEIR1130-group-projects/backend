const express = require("express")
const router = express.Router()
const { authUser, authRole }  = require("../authentication/basicAuth.js");

const User = require("../models/user-model.js");

router.get("/home", (req, res) => {
    res.send("Pictures go on the home page")
})

router.get("/admin", (req, res, next) => {
    res.send("Filler text, welcome to the Admin page")
})


router.get("/users", (req, res, next) => {
    User.find({})
        .then(obj => res.json(obj))
        .then(obj => {
            res.render("user", obj)
        })
        .catch(next)
})


router.post('/users', (req, res) => {
    User.create(req.body)
        .then(() => {
            res.redirect("/users/");
        })
        .catch(err => console.log(err));
})



module.exports = router