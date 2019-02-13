const ASEdata = require('./model');

exports.test = function (req, res) {
    res.send('Test controller Entry.');
};
/*
exports.index = function (req, res) {
    res.send(fs.)
};

exports.get_data = function (req, res) {

};
*/
//Update this to handle JSON
exports.add_entry = function (req, res) {
    let ASEentry = new ASEdata(
        {
            name: req.body.name,
            message: req.body.message
        }
    );
    console.log(ASEentry)
    ASEentry.save(function (err) {
        if (err) {
            //Update this return the error in a JSON object
            return next(err);
        }
        res.send(ASEentry)
    })
};

exports.get_data = function (req, res) {
    ASEdata.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};