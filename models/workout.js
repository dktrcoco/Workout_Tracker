const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
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
}, { //when user requests data from mongoDB, it will send back virtual data
    //in this case, the virtual data is adding the duration data and returning it
    toJSON: {
        virtuals: true
    }
});
// this part is the function that adds the duration of all exercises and returns the total
workoutSchema.virtual("totalDuration").get(function() {
    //reduce is what loops over the exercises that have been submitted to the db
    //and then sums up all the durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0) //the 0 is a default, returns 0 if no exercises present
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;