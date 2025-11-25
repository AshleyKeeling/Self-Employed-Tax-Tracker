const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const taxRecordSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    taxYear: {
        type: Number,
        required: true,
    },
    totalIncome: {
        type: Number,
        required: true
    },
    totalExpenses: {
        type: Number,
        required: true
    },
    taxFreeAllowance: {
        type: Number,
        required: true
    },
    totalIncomeTaxDue: {
        type: Number,
        required: true
    },
    totalNiDue: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('TaxRecord', taxRecordSchema);