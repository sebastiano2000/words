import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
});

export const User = mongoose.model('User', postSchema);