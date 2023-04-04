const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// SCHEME SETUP
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);
// var userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     isInvestor: {
//         type: Boolean,
//         required: true,
//     },
//     phoneNumber: {
//         type: Number,
//         required: true,
//     },
//     pitches: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Pitch"
//         }
//     ],
//     offers: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Offer"
//         }
//     ]
// });

