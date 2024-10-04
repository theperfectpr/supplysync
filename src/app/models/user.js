// create a user model with parameters like username, email, password, role, status, createdAt, updatedAt

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'company', 'supplier', 'jobseeker'],
        default: 'jobseeker'
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'blocked'],
        default: 'inactive'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    // add a field for isLoggedIn
    isLoggedIn: {
        type: Boolean,
        default: false
    }
});

// write a function to create a user
userSchema.statics.createUser = async function (username, email, password, role, status) {
    const user = new this({ username, email, password, role, status });
    await user.save();
    return user;
};

// write a function to update a user
userSchema.statics.updateUser = async function (id, username, email, password, role, status) {
    const user = await this.findByIdAndUpdate(id, { username, email, password, role, status });
    return user;
};

// write a function to delete a user
userSchema.statics.deleteUser = async function (id) {
    await this.findByIdAndDelete(id);
};

// write a function to get a user by id
userSchema.statics.getUserById = async function (id) {
    const user = await this.findById(id);
    return user;
};

// write a function to get a user by email
userSchema.statics.getUserByEmail = async function (email) {
    const user = await this.findOne({ email });
    return user;
};

// write a function to get all users
userSchema.statics.getAllUsers = async function () {
    const users = await this.find();
    return users;
};

// write a function to login a user
userSchema.statics.loginUser = async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    if (user.password !== password) {
        throw new Error('Invalid password');
    }
    user.isLoggedIn = true;
    return user;
};

// write a function to logout a user
userSchema.statics.logoutUser = async function (id) {
    const user = await this.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    user.isLoggedIn = false;
    return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;