const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const places = require('./data/places.json');
app.get('/', (req, res) => {
    res.send('travel guru server is running');
});

app.get('/places', (req, res) => {
    res.send(places);
});

app.get('/places/:id', (req, res) => {
    const id = req.params.id;
    const place = places.find((ht) => ht.id == id);
    res.send(place);
});

const hotels = require('./data/hotels.json');
app.get('/', (req, res) => {
    res.send('hotels api running');
});

app.get('/hotels/:id', (req, res) => {
    const id = req.params.id;
    const hotel = hotels.filter((n) => n.category_id == id);
    console.log(hotel);
    res.send(hotel);
});

app.get('/hotels', (req, res) => {
    res.send(hotels);
});

app.listen(port, () => {
    console.log(`Travel guru running on port, ${port}`);
});

module.exports = app;
