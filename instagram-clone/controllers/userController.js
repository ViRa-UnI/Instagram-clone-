const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: 'signup-success', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'signup-failed', error });
    }
};

exports.signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: 'user-not-found' });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: 'invalid-credentials' });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'signin-success', user: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'signin-failed', error });
    }
};

exports.getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: 'user-not-found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'get-user-failed', error });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'update-user-failed', error });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndRemove(id);
        res.status(200).json({ message: 'delete-user-success' });
    } catch (error) {
        res.status(500).json({ message: 'delete-user-failed', error });
    }
};