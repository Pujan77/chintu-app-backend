const mongoose = require('mongoose');

const bowelRecordSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    spot: {
        type: String,
        required: true
    },
    bowelConsistency: {
        type: String,
        required: true
    },
    bowelQuantity: {
        type: String,
        required: true
    },
    bowelColor: {
        type: String,
        default: '#FFB448',
        required: true
    },
    observedByWho: {
        type: String,
        required: true
    }
}, { timestamps: true });

const BowelRecord = mongoose.model('BowelRecord', bowelRecordSchema);

module.exports = BowelRecord;
