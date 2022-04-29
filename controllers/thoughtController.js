const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    // console.log('You are adding a thought');
    // console.log(req.body);
    Thought.create(req.body)
    //make this route so it creates a thought and adds it to the user's thoughts array
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Something went wrong' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err))
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      // .then((thought) =>
      //   !thought
      //     ? res.status(404).json({ message: 'No thought with that ID' })
      //     : Thought.deleteMany({ _id: { $in: user.thoughts } })
      // )
      .then(() => res.json({ message: 'User and thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

}

// Aggregate function to get the number of students overall
// const allReactionsCount = async () =>
//   Thought.aggregate()
//     .count('reactionCount')
//     .then((numberOfReactions) => numberOfReactions);




  // Get all students
  // getThoughts(req, res) {
  //   Thought.find()
  //     .then(async (students) => {
  //       const studentObj = {
  //         students,
  //         allReactionsCount: await allReactionsCount(),
  //       };
  //       return res.json(studentObj);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json(err);
  //     });
  // },
  // 
