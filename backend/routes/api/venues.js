const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const router = express.Router();

router.get('', asyncHandler(async (req, res) => {
    const venues = await db.Venue.findAll();
    return await res.json(venues);
}));



module.exports = router;
