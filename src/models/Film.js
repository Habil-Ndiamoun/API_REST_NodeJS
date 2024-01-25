const mongoose = require("mongoose");

const filmSchema = mongoose.Schema(
    {
        title: {
            type: String,
            maxLength: 50,
            required: true
        },
        release_year: {
            type: String,
            maxLength: 4,
            required: true
        },
        length: {
            type: Number,
            maxLength: 3,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        rating: {
            type: String,
            maxLength: 5,
            required: true
        },
        special_features: {
            type: String,
            maxLength: 200,
            required: true
        },
        image:{
            type: String,
            maxLength: 40
        },
        language: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Language',
           required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Film', filmSchema);



       