const mongoose = require("mongoose");
const Pitch = require('./models/pitch');


// mongoose.connect('mongodb://localhost:27017/xharktank')
//     .then(() => {
//         console.log("Connection Open")
//     })
//     .catch(err => {
//         console.log("Error in Connection")
//         console.log(err)
//     })
// const seedProducts = [
//     {
//         entrepreneur: 'Ashok kumar',

//         pitchTitle: 'Crio.Do - Work-experience based learning programs for developers',

//         pitchIdea: 'Build professional projects like the top 1% developers. Master the latest full stack and backend tech with real work-ex. Crack developer jobs at the best tech companies.',

//         askAmount: 10000000.25,

//         equity: 12.5
//     },
//     {
//         entrepreneur: 'Reetika',

//         pitchTitle: 'Mango',

//         pitchIdea: 'latest full stack and backend tech with real work-ex. Crack developer jobs at the best tech companies.',

//         askAmount: 222.25,

//         equity: 1.99
//     },
//     {
//         entrepreneur: 'Anjali',

//         pitchTitle: 'Apple',

//         pitchIdea: 'latest full stack and backend tech with real work-ex. Crack developer jobs at the best tech companies.',

//         askAmount: 23123.25,

//         equity: 2.99
//     },
//     {
//         entrepreneur: 'Nav',

//         pitchTitle: 'orange',

//         pitchIdea: 'juice real work-ex. Crack developer jobs at the best tech companies.',

//         askAmount: 1234.25,

//         equity: 99.99
//     },
//     {

//         entrepreneur: 'Sanjay kumar',

//         pitchTitle: 'Lenskart - Sabko Chashma Pehnao',

//         pitchIdea: "Lenskart's aim is to help drop this number marginally in the coming years, which can be achieved by providing high quality eyewear to millions of Indians at affordable prices, giving free eye check ups at home and by extending our services to the remote corners of India.",

//         askAmount: 20000000.23,

//         equity: 15.23,
//     }
// ]


Pitch.insertMany(seedProducts)
    .then(p => {
        console.log(p)
    })
    .catch(err => {
        console.log(err)
    })

// Pitch.deleteMany().then(function () {
//     console.log("Data deleted"); // Success
// }).catch(function (error) {
//     console.log(error); // Failure
// });