const TOKEN = "TOKEN_TOKEN";

module.exports.token = function (req, res, next) {
    var token1 = req.body.token1;

    if(token1) {
        req.decoded = decoded;
        next();
    } else{
        return res.status(403).send({
            message: 'Token not found'
        });
    }
}