import mongoose from "mongoose";
import { productSchema } from "../models/productsModel.js";

class ProductsCRUD {
    constructor() {
        this.collection = productSchema
    }

    async save(prod) {
        try {
            const newProduct = await this.collection.create(prod)
            return newProduct 
        } catch (error) {
            console.log('Error' + error);
        }
    }

    async listById(id) {
        try {
            const productId = await this.collection.find({ _id: id })
            return productId
        } catch (error) {
            console.log('Error: No se encontro el producto con el id' + id + error);
        }
    }

    async listAll() {
        try {
            return this.collection.find({}, { "__v": 0 })
        } catch (error) {
            console.log('Error' + error);
        }
    }

    async update(id, prod) {
        try {
            const productUpdate = await this.collection.findByIdAndUpdate(id, prod)
            return productUpdate
        } catch (error) {
            console.log('Error' + error);
        }
    }

    async delete(id) {
        try {
            const ProdDelete = await this.collection.deleteOne({ "_id": id })
            return ProdDelete
        } catch (error) {
            console.log('Error' + error);
        }
    }

    async deleteAll() {
        try {
            return await this.collection.deleteMany({})
        } catch (error) {
            console.log('Error' + error);
        }
    }
}

export default ProductsCRUD 