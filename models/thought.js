import pkg from 'mongoose';
import reactionSchema from './reaction.js';

const { Schema, model } = pkg;

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timeStamp) => new Date(timeStamp).toLocaleString()
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
}
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;   
});

const Thought = model('Thought', thoughtSchema);

export default Thought;