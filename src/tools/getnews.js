const request = require('request')
const getNews = (callback) =>{
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-12-15&sortBy=publishedAt&apiKey=06cb781de20345e28affd2218f776584";
    
    
    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect news service!',undefined)
        }
        else if(response.body.error){
            callback('Unable to find',undefined)
        }
        else {
            callback(undefined, response.body.articles)
        }
    }) 
}


module.exports = getNews