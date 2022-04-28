const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Assignment');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
    getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('dateFormat').get(function () {
  return `Created at ${this.createdAt}`;
})

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
