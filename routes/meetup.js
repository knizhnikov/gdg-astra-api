const express = require('express');
const axios = require('axios');
const router = express.Router();

const groupName = 'GDG-Astrakhan';

router.get('/events', async function (req, res, next) {
    try {
        const url = `https://api.meetup.com/${groupName}/events?photo-host=public&status=past,upcoming&fields=featured_photo&sign=true&key=${process.env.MEETUP_API_KEY}`;
        response = await axios.get(url);
        res.send(response.data);
    } catch (e) {
        res.sendStatus(500);
        console.log(e);
        return;
    }
});

router.get('/members', async function (req, res, next) {
    try {
        const url = `https://api.meetup.com/2/members?page=9&photo-host=public&group_urlname=${groupName}&sign=true&key=${process.env.MEETUP_API_KEY}`;
        response = await axios.get(url);
        res.send(response.data);
    } catch (e) {
        res.sendStatus(500);
        console.log(e);
        return;
    }
});

module.exports = router;
