const express = require('express')
const asyncHandler = require('express-async-handler');
const { ReservationDay } = require('../../db/models');
const { Venue } = require('../../db/models');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op

router.post('', asyncHandler(async (req, res) => {
    const { venueId, reserverId } = req.body;
    const reservation = await ReservationDay.create({ reserverId, venueId })

    return res.json(reservation)
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    let array = [];
    console.log(id);
    const reservations = await ReservationDay.findAll({ where: { reserverId: id }, include: [{model: Venue}]})
    console.log(reservations);
    return res.json(reservations);
    }
))


module.exports = router;
