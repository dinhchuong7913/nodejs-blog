const Course = require("../../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class MeController {
  //[GET] /me/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/courses", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
