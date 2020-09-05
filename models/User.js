const mongoose = require("mongoose");
const { Schema } = mongoose;

//this is the content of User data that is being collected when logging in with google
const UserSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
});

mongoose.model("users", UserSchema);
