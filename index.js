const express = require('express')
const app = express();


app.get('/', (req,res)=>{
    return res.send('Welcome!')
  })
  
  app.listen(3500 , () => {
      console.log('Server started on http://localhost:3500/')
  })