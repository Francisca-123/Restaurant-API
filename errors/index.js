const CustomAPIError = require('./customApi')
const UnauthenticatedError = require('./unauthenticated')

const NotFoundError = require('./notFound')

const badRequestError = require('./badRequest')

module.exports ={
    CustomAPIError,
    UnauthenticatedError,
    NotFoundError,
    badRequestError
}