const url = 'https://api.telegram.org/bot';
const apiToken = process.env.BOT_TOKEN;
const axios = require('axios');
const crypto = require('crypto');
const spacify = require('../spacifier');
module.exports = (req, res) => {
    if (req.body.inline_query) {
        let qid = req.body.inline_query.id;
        let q =  req.body.inline_query.query;
        let msg = spacify(q);
        axios.post(`${url}${apiToken}/answerInlineQuery`, {
            inline_query_id: qid,
            results: [{
                type: 'article',
                id: crypto.randomBytes(30).toString('hex'),
                title: "Your  s t y l i s h e d  message:",
                description: msg,
                input_message_content: {
                    message_text: msg,
                },
            }],
        })
        .then((response) => { 
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
     } else {
        res.status(200).send({});
     }
};
