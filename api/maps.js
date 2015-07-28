/**
 * @module maps
 */

var request = require('request-promise');

var keys = require('../config.js');

/**
 * Returns a walking route between two points
 * @param  {String} start Address or latitude,longitude
 * @param  {String} end   Address or latitude,longitude
 * @return {Promise.<Object>}
 */
var get_map_route = function(start, end) {
  return request({
    'uri': 'https://maps.googleapis.com/maps/api/directions/json',
    'qs': {
      'key': keys.MAPS_KEY,
      'origin': start,
      'destination': end,
      'mode': 'walking',
      'units': 'metric'
    },
    'json': true
  });
};

/**
 * Takes an array of steps and picks points along the route
 * @param  {Array} steps      Array of steps from Google Directions route
 * @param  {Integer} num_points The number of points to pick
 * @return {Array}            Array of selected points
 */
var choose_points = function(steps, num_points) {
  var result = [];
  num_points = (num_points === undefined) ? 4 : Math.min(num_points, steps.length);

  var interval = Math.floor(steps.length / num_points);

  for(var i = 0; i < steps.length; i += interval) {
    result.push(steps[i]);
  }

  return result;
};

module.exports = {
  get_map_route: get_map_route,
  choose_points: choose_points
};
