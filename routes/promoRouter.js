const bodyParser = require('body-parser');
const express = require('express');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Types', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promotions to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promotion: ' 
        + req.body.name 
        + ' with detail: ' 
        + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation is not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the promotions!');
    });

promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Types', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the promotion of ' + req.params.promoId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation is not supported on /promotions/' + req.params.promoId);
    })
    .put((req, res, next) => {
        res.end('Updating the promotion: ' + req.params.promoId 
        + '\n will update the promotion: ' + req.body.name 
        + ' with detail: ' 
        + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting promotion: ' + req.params.promoId);
    });

module.exports = promoRouter;