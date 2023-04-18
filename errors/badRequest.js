const {statusCodes, StatusCodes} = require('http-status-codes');

const CustomAPIError = require('../errors/customApi')

class badRequestError extends CustomAPIError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = badRequestError