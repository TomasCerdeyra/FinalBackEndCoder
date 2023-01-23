import mongoose from 'mongoose'

const collName = 'carts'

const cartsSchema = new mongoose.Schema(
    {
        prodcuts: [
            {
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
                },
            }
        ],
    }
);

export const cartSchema = mongoose.model(collName, cartsSchema)