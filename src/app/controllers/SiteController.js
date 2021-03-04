const Course = require('../models/Courses');

class SiteController {
    // [GET] /
    index(req, res) {
        // res.render('home');
        Course.find({}, function(err, courses) {
            if (!err) {
                res.json(courses);
            }
            else {
                res.status(400).json({ error: 'DB Error!' });
            }
        });
    }

}

module.exports = new SiteController;