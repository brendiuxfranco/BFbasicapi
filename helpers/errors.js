export const notFound = (req, res, next) => {
    const error = new Error('Not Found - ${req.originalUrl}')
    res.status(404)
    next(error)
}

export const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    const errorObj = {
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '💩' : error.stack,
    }
    req.log.error(errorObj)
    res.status(statusCode)
    res.json(errorObj)
}