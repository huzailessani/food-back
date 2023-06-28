const express = require('express');
const router = express.Router();
const Dishes = require('../models/dishes')


// const dishesJson = require('../../client/src/dishes.json');

router.get("/dishes", async (req, res) => {
    try {
        const dishes = await Dishes.find({});
        res.status(200).json(dishes);
        ;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/dishes', async (req, res) => {
    try {
        const dishes = await Dishes.create(req.body);
        const saveDish = await dishes.save();
        res.json(saveDish);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/dishes/:id', async (req, res) => {
    try {
        const deletedDish = await Dishes.findByIdAndRemove(req.params.id);
        if (!deletedDish) {
            return res.status(404).json({ error: 'Dish not found' });
        }
        res.json(deletedDish);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router
