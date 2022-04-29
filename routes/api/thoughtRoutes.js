const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/students/:studentId/assignments
router.route('/:thought/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:thoughtId/reactions').delete(removeAssignment);

module.exports = router;
