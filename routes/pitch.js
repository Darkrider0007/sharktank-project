const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch");
const Offer = require('../models/offer');
const AppError = require('../AppError');


router.get('/', async (req, res, next) => {
    try {
        const pitches = await Pitch.find({})
            .populate('offers')
            .sort({ _id: -1 })
        console.log(pitches)
        res.json(pitches)
    } catch (e) {
        return next(new AppError('Internal Error', 500));
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const pitch = await Pitch.findById(id)
            .populate('offers')
        if (!pitch) {
            return next(new AppError('Pitch not found', 404));
        }
        console.log(pitch)
        res.status(200).json(pitch)
    } catch (e) {
        return next(new AppError('Pitch not found', 404));
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newPitch = new Pitch(req.body);
        await newPitch.save()
        console.log(newPitch)
        res.status(201).json({ id: newPitch._id });
    } catch (e) {
        console.log(e);
        return next(new AppError('Invalid Request Body', 400));
    }
})

router.post('/:id/makeoffer', async (req, res, next) => {
    try {
        const pitch = await Pitch.findById(req.params.id)
        if (!pitch) {
            return next(new AppError('Pitch not found', 404));
        }
        const newOffer = new Offer(req.body)
        pitch.offers.push(newOffer)
        console.log(newOffer)
        await newOffer.save()
        await pitch.save()
        res.status(201).json({ id: newOffer._id });
    } catch (e) {
        return next(new AppError('Invalid Request Body', 400));
    }
})

module.exports = router;
