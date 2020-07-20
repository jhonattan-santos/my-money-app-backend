module.exports = (req, res, next) => {
    req.header('Access-Control-Allow-Origin', 'https://mm-app-front-react.herokuapp.com')
    req.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
}