var express = require('express');
const axios = require('axios');
var router = express.Router();

router.get('/events', async function (req, res, next) {

    let response = {data: {}};
    let groupName = 'GDG-Astrakhan';

    try {
        const url = `https://api.meetup.com/${groupName}/events?photo-host=public&scroll=future_or_past&fields=featured_photo&has_ended=true&sign=true&key=${process.env.MEETUP_API_KEY}`;
        response = await axios.get(url);
    } catch (e){
        res.send(e);
        return;
    }
    // const mock = require('./events-mock');

    res.send(response.data);
});

module.exports = router;
