const Course = require('../../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
  //[GET] /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  //[GET] /course/create
  create(req, res, next) {
    res.render('courses/create');
  }

  //[POST] /course/store
  store(req, res, next) {
    //res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.video_id}/sddefault.jpg`;
    const course = new Course(formData);
    course.save().then(()=>
      res.redirect('/')
    ).catch(error =>{});
  }
}

module.exports = new CourseController();
