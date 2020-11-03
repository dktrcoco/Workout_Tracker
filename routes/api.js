const router = require("express").Router();
const Workout = require("../models/workout");

// gets all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// limits workout to last 7 days
//the limit with the value of 7 will show the last 7 
//days of workouts (one per day)
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//practice route for getting only cardio workouts
// router.get("api/workouts", (req, res) => {
//     Workout.find({ type: "cardio" })
//         .then(dbWorkouts => {
//             res.json(dbWorkouts);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

//look up mongoose doc to see if this is possible
// router.get("api/workouts", (req, res) => {
//     Workout.find({ duration: >20 })
// })

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    //the id is a parameter, so we catch it with req.params.id
    Workout.findByIdAndUpdate(req.params.id,
        { $push: { exercises: req.body } }, //refers to dataset
        { new: true, runValidators: true })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;

//   Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options, callback)
