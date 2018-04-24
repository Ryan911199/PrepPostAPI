const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,
    date: Date,
    periods: [{
        period: String,
        startTime: Date,
        endTime: Date
    }]
})

module.exports = mongoose.model('schedule', ScheduleSchema)