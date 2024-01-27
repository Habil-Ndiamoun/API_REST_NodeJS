const mongoose = require("mongoose");

const languageSchema = mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 50,
            required: true
        },
    },
    {
        timestamps: true
    }
);

languageSchema.virtual(
    'films',
    {
        ref: 'Film', 
        localField: '_id', 
        foreignField: 'language'
    }
);

// Set Object and Json property to true. Default is set to false
languageSchema.set('toObject', { virtuals: true });
languageSchema.set('toJSON', { virtuals: true });


module.exports = mongoose.model('Language', languageSchema);