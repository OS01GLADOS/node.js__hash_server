'use strict';

var utils = require('../utils/writer.js');
var Lr1 = require('../service/Lr1Service');

module.exports.hashPOST = function hashPOST (req, res, next, body) {
  Lr1.hashPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rootGET = function rootGET (req, res, next) {
  Lr1.rootGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
