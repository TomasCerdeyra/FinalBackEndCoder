import mongoose from 'mongoose'

const collName = 'products'

const productsSchema = new mongoose.Schema({
    nombre: 
    {
        type: String, 
        required: true
    },
    descripcion: 
    {
        type: String, 
        required: true
    },
    codigo: 
    {
        type: String, 
        required: true
    },
    precio: 
    {
        type: Number, 
        required: true
    },
    url: 
    {
        type: String, 
        required: true
    },
    stock: 
    {
        type: Number, 
        required: true
    }
})

export const productSchema = mongoose.model(collName, productsSchema)