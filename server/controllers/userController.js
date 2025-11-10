const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');

// create JWT token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

// Register
const createUser = async (req, res) => {
    const { firstName, email, password, confirmPassword } = req.body;

    try {
        //  validation checks
        if (!firstName || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: "All fields must be filled" });
        }
        if (!validator.isAlphanumeric(firstName)) {
            return res.status(400).json({ error: "Invalid first name format" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ error: "Weak password" });
        }
        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password and confirm password do not match" });
        }


        // Check if user exists
        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ error: "Email already in use" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({ firstName, email, password: hashedPassword });

        // create JWT token
        const token = createToken(user._id);

        res.status(200).json({ firstName, email, token });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// sign in
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: "All fields must be filled" });
        }

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Incorrect Email or Password" });
        }

        // Compare password
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ error: "Incorrect Password" });
        }

        // create JWT token
        const token = createToken(user._id);

        res.status(200).json({ firstName: user.firstName, email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { createUser, login };