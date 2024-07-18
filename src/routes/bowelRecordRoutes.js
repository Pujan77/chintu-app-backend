const express = require('express');
const {
    createBowelRecord,
    getAllBowelRecords,
    updateBowelRecord,
    deleteBowelRecord
} = require('../controllers/bowelRecordController');

const router = express.Router();

router.post('/bowelRecords', createBowelRecord);
router.get('/bowelRecords', getAllBowelRecords);
router.put('/bowelRecords/:id', updateBowelRecord);
router.delete('/bowelRecords/:id', deleteBowelRecord);

module.exports = router;
