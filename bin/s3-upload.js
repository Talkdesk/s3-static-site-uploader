#!/usr/bin/env node
var ConfigRunner = require('../src/ConfigRunner.js');
var path = require('path');
var custom_bucket = null;
var runner = new ConfigRunner();

if (process.argv.length > 2){
  custom_bucket = process.argv[2];
}

var configPath = path.resolve('./aws-upload.conf.js');
var config = require(configPath);

var bucketName = custom_bucket || config.bucketName;
config.bucketName = bucketName

runner.setConfig(config);

runner.run();