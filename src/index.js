const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const route = require('./routes')
//db cnt
const db = require('./config/dbconnect/DbCnt')

db.connect();

const { engine } = require('express-handlebars')
const path = require('path')
//HTTP logges
app.use(morgan('combined'))
//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

route(app)

// app.get('/', (req, res) => {
//   res.render('home')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})