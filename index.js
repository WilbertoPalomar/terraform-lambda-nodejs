const Handler = require('./api/Handler').Handler;
const BmiCalcService = require('./service/BmiCalcService').BmiCalcService;
const Handler = new Handler(new BmiCalcService());

exports.performBmiCalculation = handler.handleCalculation