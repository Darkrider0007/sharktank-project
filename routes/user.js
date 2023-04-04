const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch");
const Offer = require('../models/offer');
const User = require('../models/user');
const AppError = require('../AppError');

router.get('/register', (req, res) => {
    res.render('users/register');
})

// router.get('/:id', async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const user  = await User.findById(id);
//         if (!user) {
//             return next(new AppError('User not found', 404));
//         }
//         console.log(user)
//         res.status(200).json(user)
//     } catch (e) {
//         return next(new AppError('User not found', 404));
//     }
// })

// router.post('/', async (req, res, next) => {
//     try {
//         const newUser = new User(req.body);
//         await newUser.save()
//         console.log(newUser)
//         res.status(201).json(newUser);
//     } catch (e) {
//         console.log(e);
//         return next(new AppError('Invalid Request Body', 400));
//     }
// })


module.exports = router