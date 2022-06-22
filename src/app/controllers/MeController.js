const Course = require("../../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class MeController {
  //[GET] /me/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()]).then(
      ([courses, deleteCount]) => {
        res.render("me/courses", {
          courses: mutipleMongooseToObject(courses),
          deleteCount,
        });
      }
    );
  }
  //[GET] /me/courses/trash
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render("me/courses_trash", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
