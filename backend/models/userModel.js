const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	userpicture: {
		type: String,
	},
});

// static signup method
userSchema.statics.signup = async function (email, password, userpicture) {
	// validation
	if (!email || !password) {
		throw Error("All fields must be filled");
	}
	if (!validator.isEmail(email)) {
		throw Error("Email is not valid");
	}
	if (!validator.isStrongPassword(password)) {
		throw Error("Password not strong enough");
	}
	const exists = await this.findOne({ email });

	if (exists) {
		throw Error("Email already exists");
	}
	// mypassword1343534ljkjf
	// mypasswordkl;fjdl19834
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ email, password: hash, userpicture });

	return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw Error("All fields must be filled");
	}

	const user = await this.findOne({ email });

	if (!user) {
		throw Error("Incorrect email");
	}

	const match = await bcrypt.compare(password, user.password);

	if (!match) {
		throw Error("Incorrect password");
	}

	return user;
};

// change user picture
userSchema.statics.changePicture = async function (_id, userPicture) {
	const user = await this.findByIdAndUpdate(
		_id,
		{ userpicture: userPicture },
		{
			new: true,
		}
	);

	if (!user) {
		throw Error("Error changing picture, try again");
	}

	return user;
};

module.exports = mongoose.model("User", userSchema);
