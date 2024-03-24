const mongoose = require('mongoose')
const URL = process.env.DBURL
const connDB = async () =>{
    try {
        await mongoose.connect(URL)
        console.log('connected..')
    } catch (error) {
        console.log('error')
    }
}
module.exports=connDB