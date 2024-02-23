const siteRouter = require('./site')

function route(app){
app.use('/site',siteRouter)


app.get('/', (req, res) => {
  res.render('home')
})



}
module.exports = route