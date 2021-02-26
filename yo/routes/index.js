const router = require('express').Router();
const controller = require('./controller');


router.get("/main", controller.mainView);
router.get("/movies", controller.movieView);
router.post("/login", controller.movieMake);
router.delete("/:id", controller.deleteMovie);

module.exports = router;