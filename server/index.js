import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 8000;


app.listen(port, ()=> console.log(`Listening to port ${port}`));

// const dbURL = "mongodb+srv://goutam0524be21:goutam@cluster0.lzejvxb.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect("mongodb://localhost:27017/beest") 