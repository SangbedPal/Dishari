import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        required: true
    },

    street: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    pin: {
        type: Number,
        required: true
    },

    landmark: {
        type: String,
        required: true
    },

    contactNumber: {
        type: Number,
        required: true
    },

    alternateContactNumber: {
        type: Number,
        required: true
    }
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;