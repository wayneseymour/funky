/* jshint node:true */
'use strict';

function existy(x) { return x != null };

function truthy(x) { return (x !== false) && existy(x) };

global.existy = existy;

global.truthy = truthy;
