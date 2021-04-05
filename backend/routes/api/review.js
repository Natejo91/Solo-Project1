const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router();
const Sequelize = require('sequelize');
const { Review } = require('../../db/models');
const Op = Sequelize.Op

router.get('/:id', asyncHandler(async (req, res) => {
    const id  = req.params.id;
    const reviews = await Review.findAll({where: { venueId: id }})
    return res.json(reviews);
}))

// we need to figure this out for the query
router.get("/", asyncHandler(async (req, res) => {
    const id = req.params.id
    const userReviews = await Review.findAll({ where: { userId: id } })
    return res.json(userReviews);
  }))

//need validation handler for this post route
router.post('/', asyncHandler(async (req, res) => {
    const {
        userId,
        venueId,
        title,
        body,
        rating,
        reviewImgUrl
    } = req.body;

    const review = await Review.create({
        userId,
        venueId,
        title,
        body,
        rating,
        reviewImgUrl
    })
    return res.json(review);
}))


router.patch('/:id', asyncHandler(async (req, res) => {
    const reviewId = req.params.id;

    const { title, body, rating } = req.body;
    const review = await Review.findByPk(reviewId);

    await review.update({
        title,
        body,
        rating
    })
    return res.json(review);
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const reviewId = req.params.id
    const review = await Review.findByPk(reviewId)
    review.destroy()
    return res.json(null)
}))

module.exports = router;
