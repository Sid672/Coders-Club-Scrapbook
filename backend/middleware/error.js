import ErrorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;
      //Log to console for dev
    console.log(err.stack);

    //Mongoose bad Object Id
    if (err.name === 'CastError') {
        const message = `Post not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);

    }

    //Mongoose duplicate key
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400)
    }

    //Validation error mongoose
    if(err.name === 'ValidationError') {
        console.log(err.errors)
        const message = Object.values(err.errors).map( val => val.message)
        error = new ErrorResponse(message, 400)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}


export default errorHandler