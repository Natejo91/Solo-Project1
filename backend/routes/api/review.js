const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router();
const Sequelize = require('sequelize');
const { Review } = require('../../db/models');
const Op = Sequelize.Op

router.get('/:id', asyncHandler(async (req, res) => {
    const id  = req.params.id;
    const reviews = await Review.findAll({where: { venueId: id }})
    console.log(reviews);
    return res.json(reviews);
}))


router.post('/', asyncHandler(async (req, res) => {
    const {
        userId,
        venueId,
        title,
        body,
        rating,
        reviewImgUrl
    } = req.body;

    const reservation = await review.create({
        userId,
        venueId,
        title,
        body,
        rating,
        reviewImgUrl
    })
    return res.json(reservation);
}))

router.get('/:id', asyncHandler(async (req, res) => {

}))

router.patch('/:id', asyncHandler(async (req, res) => {
    const userId = req.params.id;
}))

module.exports = router;
