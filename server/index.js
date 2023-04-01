import express from 'express'


const app = express()

const port = 3001


app.get('/registration', (req, res) => {
  res.json({
    phone : "",
    birthdate : "",
    document : "",
    name : "",
    email : "",
    type : "",
    password : "",
   })
})

app.post('/registration', (req, res) => {
  const data = req.body
  //send data to database
  res.json({success : true})
})

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
