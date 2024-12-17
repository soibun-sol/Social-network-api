import Thought from "../models/thought.js";
import User from "../models/user.js";

export const getAllThoughts = async (req, res) => {
    try{
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const getThoughtById = async (req, res) => {
    try{
        const thought = await Thought.findById(req.params.thoughtId);
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const createThought = async (req, res) => {
    try{
        const thought = await Thought.create(req.body);
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const updateThought = async (req, res) => {
    try{
        const updateThought = await Thought.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(updateThought);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const deleteThought = async (req, res) => {
    try{
        const thought = await Thought.findByIdAndDelete(req.params.id);
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};
