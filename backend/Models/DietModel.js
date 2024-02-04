const mongoose = require('mongoose');

const DietSchema = new mongoose.Schema({
    name: String,
    link: String,
});

const cut = mongoose.model('cutting_diet', DietSchema);
const bulk = mongoose.model('bulking_diet',DietSchema);


module.exports.cutdata = async (req, res) => {
    try {
        // Find documents in the YourCollection collection
        const data = await cut.find();
        // Respond with the data
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports.bulkdata = async (req, res) => {
    try {
        // Find documents in the YourCollection collection
        const data = await bulk.find();
        // Respond with the data
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}