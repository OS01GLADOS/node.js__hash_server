'use strict';


/**
 *
 * body Data 
 * returns Hash
 **/
exports.hashPOST = function(body) {

  var str =body.data.toString();
  var crypto = require('crypto');
  var res = crypto.createHash('sha256').update(str).digest('hex');

  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "hash" : res
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns String
 **/
exports.rootGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['text/html'] = "hello^^";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

