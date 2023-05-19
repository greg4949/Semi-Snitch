const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/weather', async (req, res) => {
    const apiKey = process.env.WEATHER_API_KEY;
    const location = req.query.location;
    const lat = req.query.lat;
    const lon = req.query.lon;
    const date = req.query.date; // In real app, this would be used to get historical weather data
    const time = req.query.time;
  
    try {
        let weatherUrl;
        if (location) {
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&appid=${apiKey}`;
            const response = await fetch(url);
            const cities = await response.json();
            weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cities[0].lat}&lon=${cities[0].lon}&units=imperial&appid=${apiKey}`;
        } else if (lat && lon) {
            weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
        } else {
            res.status(400).json({ error: "Request must contain a location or latitude and longitude" });
            return;
        }

        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        res.json(weatherData);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
});

module.exports = router;