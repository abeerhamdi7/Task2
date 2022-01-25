const express = require('express')
const path = require('path')
const getNews = require('./tools/getNews');
const app = express()

const port = process.env.PORT || 5000

app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

const hbs = require('hbs')
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)



app.get('/', (req, res) => {
    getNews((error,news)=>{
        if(error){
            res.render("404page")
        }if(news){
            res.render('index', {
                news
            })
        }
    })

})

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404 Not found',
        name: 'Default page'
    })
})


app.listen(port, () => {
    console.log('Listening on port 5000')
})