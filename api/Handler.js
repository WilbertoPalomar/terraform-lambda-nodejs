const Result = require('./Result');

class Handler {
    constructor(bmiCalcService){
        this.handleCalculation = async (event, context, callback) => {
            try {
                let weight = event.queryStringParameters.weight;
                let height = event.queryStringParameters.height;
                if ((isNaN(weight)) || (isNaN(height))) {
                    //http 400
                    return new Result.BadRequest_400('Weight or Height is not a number');
                }
                let bmiResult = await this.bmiCalcService.performBmiCalculation(weight, height);
                    //return http 200
                    return new Result.OK_200(bmiResult);

            }catch(e){
                //return 500 http
                return new Result.InternalServerError_500(e);
            }
            
        };
        this.bmiCalcService = bmiCalcService;
    }

}
exports.Handler = Handler;