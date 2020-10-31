const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    //basic model
    exercises: [
        {
            type: {
                type: String,
                required: "enter exercise type"
            },
            name: {
                type: String,
                required: "enter exercise name"
            },
            duration: {
                type: Number,
                required: "enter duration"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;