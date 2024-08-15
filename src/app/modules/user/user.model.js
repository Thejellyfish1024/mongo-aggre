const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    index: {
        type: Number,
        required: true,
        unique: true
      },
      name: {
        type: String,
        required: true
      },
      isActive: {
        type: Boolean,
        default: false
      },
      registered: {
        type: Date,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
      },
      eyeColor: {
        type: String,
        enum: ['blue', 'brown', 'green', 'hazel', 'gray', 'amber'],
        required: true
      },
      favoriteFruit: {
        type: String,
        required: true
      },
      company: {
        type: mongoose.Schema.Types.Mixed, // You can replace 'Mixed' with a more specific type if you have a defined structure for the company object
        required: true
      },
      tags: {
        type: [String], // An array of strings
        required: true
      }    
})

const User = mongoose.model('User', UserSchema);


module.exports = User;