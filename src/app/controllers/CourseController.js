const Course = require("../../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/store
  store(req, res, next) {
    //res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.video_id}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  //[GET] /courses/_id/edit
  edit(req, res, next) {
    Course.findOne({ _id: req.params._id })
      .then((course) => {
        res.render("courses/edit", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //[PACTH] /courses/:_id
  update(req, res, next) {
    Course.updateOne({ _id: req.params._id }, req.body).then(() =>
      res.redirect("/me/courses")
    );
  }
}

module.exports = new CourseController();
