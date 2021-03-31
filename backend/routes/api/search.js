const express = require('express')
const asyncHandler = require('express-async-handler');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Venue } = require('../../db/models');

const router = express.Router();

router.get('/:location', asyncHandler(async (req, res) => {
    console.log('-==============');
    const search = req.params.location
    console.log(search);

    const venues = await Venue.findAll({
        where: {
            [Op.or]: {
                state: {
                    [Op.iLike]: `%${search}%`
                },
                city: {
                    [Op.iLike]: `%${search}%`
                }
            }
        }
    })
    console.log(venues)
    return res.json(venues);

}))


module.exports = router;
