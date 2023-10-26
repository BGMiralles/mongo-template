const mongoose = require('mongoose');

const startConnection = async () => {
    try {
      await mongoose.connect(`mongodb+srv://root:borjitA90@cluster0.wsddkv1.mongodb.net/muscleshop?retryWrites=true&w=majority`);
      console.log("MongoDB connected 🍃");
    } catch (err) {
      console.error(err);
    }
  };

module.exports = startConnection;
