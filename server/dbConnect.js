const mongoose = require('mongoose');
const db =
  'mongodb+srv://zuk:zuk@cluster0-qvclz.mongodb.net/eventsHub?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('db connected...');
};

module.exports = connectDB;
