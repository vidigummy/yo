const router = require('express').Router();
const controller = require('./controller');


router.get("/main", controller.mainView);
router.get("/movies", controller.movieView);
router.post("/login", controller.movieMake);
router.get("/delete", controller.deleteMovie);
router.post("/delete/:id", controller.deleteWhat);

module.exports = router;