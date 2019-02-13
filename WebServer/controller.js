const path = require('path');
const ASEdata = require('./model');

exports.index = function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
};

exports.add_entry = function (req, res, next) {
    let ASEentry = new ASEdata(
        {
            name: req.body.name,
            message: req.body.message,
            oldMessage: req.body.oldMessage
        }
    );
    ASEentry.save(function (err) {
        if (err) return next(err);
        res.send(ASEentry);
    })
};

exports.get_entry = (req, res, next) => {
    ASEdata.findOne({ name: req.params.name }, function (err, entry) {
        if (err) return next(err);
        res.send(entry);
    })
};

exports.get_data = function (req, res, next) {
    ASEdata.find(function (err, entry) {
        if (err) return next(err);
        res.send(entry);
    })
};

exports.update_entry = function (req, res, next) {
    console.log(req.params.name);
    console.log(req.body);
    ASEdata.findOneAndUpdate({name: req.params.name}, {$set: req.body}, {new: true}, (err, entry) => {
        console.log(entry);
        if (err) return next(err);
        res.send(entry);
    });
};

exports.delete_entry = function (req, res, next) {
    ASEdata.findOneAndRemove({name: req.params.name}, function (err) {
        if (err) return next(err);
        res.send({ message: 'Delete Received.'});
    })
};