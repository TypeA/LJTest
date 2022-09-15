'use strict';

let { I } = inject();
let assert = require('assert');
module.exports = {
    _init() {
        I = require('../steps_file.js')();
    },

    url:  '/',
}
