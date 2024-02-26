const siteRouter = require('./site')
const db = require("../config/dbconnect/DbCnt")
const db1 = require("../model/DB1")

function route(app){
app.use('/site',siteRouter)

app.get('/site', (req, res) => {
  res.render('site')
})
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', async (req, res) => {

  try {
      const check = await db1.findOne({ name: req.body.name })

      if (check.password === req.body.password) {
          res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
      }

      else {
          res.send("incorrect password")
      }


  } 
  
  catch (e) {

      res.send("username exits")
      

  }


})




}
module.exports = route