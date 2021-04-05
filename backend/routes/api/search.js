const express = require('express')
const asyncHandler = require('express-async-handler');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Venue } = require('../../db/models');

const router = express.Router();

router.get('/:location', asyncHandler(async (req, res) => {
    const search = req.params.location

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
    return res.json(venues);

}))


module.exports = router;
