const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        firstname: {
            type: String,
            required: [true, "first name is required"]
        },
        lastname: {
            type: String,
            required: [true, "last name is required"]
        },
        phone: {
            type: String,
            required: [true, "phone no is required"]
        },
        email: {
            type: String,
            required: [true, "email is required"]
        },
        website: {
            type: String,
        },
        address: {
            type: String,
            required: [true, "address is required"]
        },
        specialization: {
            type: String,
            required: [true, "specialization is require"]
        },
        experience: {
            type: String,
            required: [true, "experience is required"]
        },
        feesPerCunsaltation: {
            type: String,
            required: [true, "fee is required"]
        },
        status: {
            type: String,
            default: "pending",
        },
        timings: {
            type: String,
            required: [true, "work timing is required"]
        },
    }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;