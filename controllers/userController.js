import User from "../models/user.js";
import Thought from "../models/thought.js";

export const getAllUsers = async (req, res) => {
    try{
        const users = await User.find().populate('thoughts').populate('friends');
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId).populate('thoughts').populate('friends');
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.json(newuser);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const updateUser = async (req, res) => {
    try{
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(updateUser);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

