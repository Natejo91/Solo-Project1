const express = require('express')
const asyncHandler = require('express-async-handler');
const { ReservationDay } = require('../../db/models');
const { Venue, User } = require('../../db/models');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const { check, validationResult} = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const reservationValidations = [
    check('date')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please pick a date.'),
    handleValidationErrors
];


router.post('/', reservationValidations, asyncHandler(async (req, res) => {
    const { venueId, reserverId, date } = req.body;
    const reservation = await ReservationDay.create({ reserverId, venueId, concertDate: date })
    // const venue = await Venue.findByPk(reservation.venueId, {include: ReservationDay})
    return res.json(reservation);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    // const reservations = await ReservationDay.findAll({ where: { reserverId: id }, include: [{model: Venue}]})
    const reservations = await ReservationDay.findAll({ where: {reserverId: id}})
    return res.json(reservations);
    }
))


module.exports = router;
