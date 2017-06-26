const express = require('express');
const router = express.Router();
const Actors = require('../models/actors');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')

router.get("/:name", (req, res, next) => {
    const name = req.params.name;
    Actors.getActorByName(name,(err, actors) => {
        res.json(actors);
    });
});

//Register
router.post('/add', (req, res, next) => {
    let newActor = new Actors({
        birthname: req.body.birthname,
        givenname: req.body.givenname,
        gender: req.body.gender,
        dob: req.body.dob,
        birthcity: req.body.birthcity,
        birthstate: req.body.birthstate,
        birthcountry: req.body.birthcountry,
        bio: req.body.bio,
        picture: req.body.picture
    });
    console.log(req.body);

    Actors.addactor(newActor, (err, actor) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to create actor.' });
        }
        else {
            res.json({ success: true, msg: 'Successfully created Actor.' });
        }
    });
});

module.exports = router;