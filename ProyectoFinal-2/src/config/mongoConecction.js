import mongoose from "mongoose"

function conectionMongo() {
    
    const URL = "mongodb://localhost:27017/ecommerce"

    mongoose.connect( URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export default conectionMongo