import pkg from 'mongoose';
const { Schema, model } = pkg;

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timeStamp) => new Date(timeStamp).toLocaleString()
    }
},
{
    toJSON: {
        getters: true
    },
    id: false
}
);

export default reactionSchema;