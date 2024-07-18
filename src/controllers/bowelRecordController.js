const BowelRecord = require('../models/BowelRecord');

const createBowelRecord = async (req, res) => {
    try {
        const { location, bowelConsistency, bowelQuantity, bowelColor, observedByWho } = req.body;
        const date = req.body.date || new Date().toISOString().split('T')[0];
        const time = req.body.time || new Date().toISOString().split('T')[1].slice(0, 5);
        
        const newRecord = new BowelRecord({
            date,
            time,
            location,
            bowelConsistency,
            bowelQuantity,
            bowelColor,
            observedByWho
        });

        await newRecord.save();
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllBowelRecords = async (req, res) => {
    try {
        const { sort, search, limit = 20 } = req.query;
        const query = search ? { $text: { $search: search } } : {};

        let records = BowelRecord.find(query).limit(Number(limit));
        
        if (sort) {
            records = records.sort(sort);
        }

        records = await records;
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBowelRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRecord = await BowelRecord.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }

        res.status(200).json(updatedRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteBowelRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecord = await BowelRecord.findByIdAndDelete(id);

        if (!deletedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }

        res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createBowelRecord,
    getAllBowelRecords,
    updateBowelRecord,
    deleteBowelRecord
};
