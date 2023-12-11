const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://suhagiyadivyesh:DIvyesh%40Mongodb@cluster0.w6fsp.mongodb.net/employee_System?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}).then(() => {
    console.log("Successfully connected to the database");
}).catch((error) => {
    console.log("Database connection failed. Exiting now...");
    console.log(error);
});

app.get('/', (req,res)=>{
    return res.send('Welcome!')
  })
  
  app.listen(3500 , () => {
      console.log('Server started on http://localhost:3500/')
  })
