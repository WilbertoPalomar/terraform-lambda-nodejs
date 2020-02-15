const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const Handler = require('../api/Handler').Handler;
const BmiCalcService = require('../service/BmiCalcService').BmiCalcService;