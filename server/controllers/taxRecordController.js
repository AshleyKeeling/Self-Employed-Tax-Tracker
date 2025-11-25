const TaxRecord = require('../models/TaxRecordModel');

const newTaxRecord = async (data) => {
    const { userID, taxYear, totalIncome, totalExpenses, taxFreeAllowance, totalIncomeTaxDue, totalNiDue } = data;

    try {
        return await TaxRecord.create({ userID, taxYear, totalIncome, totalExpenses, taxFreeAllowance, totalIncomeTaxDue, totalNiDue })
    } catch (error) {
        console.log("tax record error - ", error.message);
        throw error;
    }
}

const getTaxRecord = async (req, res) => {
    const { userID } = req.params;

    try {
        const record = await TaxRecord.find({ userID });
        // console.log(record)
        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { newTaxRecord, getTaxRecord };