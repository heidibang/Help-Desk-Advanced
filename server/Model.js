const mongoose = require('mongoose');


const MONGO_URI = 'mongodb+srv://C_J_S:cEXzKdZwci44JkTU@cluster0.xxyaq.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'HelpDesk'
}).then(response => {
  console.log('Successfully connected to Mongo DB')
}).catch(error => console.log(error));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  authorized: {
    type: Boolean,
    required: true,
  }
});
const User = mongoose.model('users', userSchema);

const ticketSchema = new Schema({
  status: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
  student: {
    type: String,
    required: false,
  },
  problem: {
    type: String,
    required: true,
  },
  fellow: {
    type: String,
    required: false,
  },
  expectations: {
    type: String,
    required: true,
  },
  tried: {
    type: String,
    required: true,
  },
  notWorking: {
    type: String,
    required: true,
  },
  zoom: {
    type: String,
    required: true,
  },
  resolvedNotes: {
    type: String,
    required: false,
  },
});
const TicketForm = mongoose.model('ticket', ticketSchema);
module.exports = { TicketForm, User }