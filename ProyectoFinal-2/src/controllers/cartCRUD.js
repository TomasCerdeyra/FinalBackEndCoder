import { cartSchema } from "../models/cartModel.js";

class CartsCRUD {
    constructor() {
        this.collection = cartSchema;
    }

    async createCart(prod) {
        try {
            const newProduct = await this.collection.create({})
            return newProduct
        } catch (error) {
            console.log('Error' + error);
        }
    }

    async saveProduct(id, prod) {
        try {
            const newProd = await this.collection.updateOne({ _id: id },
                { $push: { prodcuts: { $each: [prod] } } })
        } catch (error) {
            console.log('Error' + error);
        }
    }

    async listAll(id) {
        try {
            return this.collection.find({_id: id}, { "__v": 0 })
        } catch (error) {
            console.log('Error' + error);
        }
    }

    async deleteCart(id) {
        try {
            return await this.collection.deleteMany({ "_id": id })
        } catch (error) {
            console.log('Error' + error);
        }
    }

    async listById(id) {
        try {
            const cartId = await this.collection.find({ "_id": id }, { __v: 0, _id: 0, })
            return cartId
        } catch (error) {
            console.log('Error: No se encontro el producto con el id' + id + error);
        }
    }

    async deleteProductCart(id, idProd) {
        try {
            return await this.collection.updateOne({ _id: id}, {$pull: {prodcuts: {_id: idProd}} })
        } catch (error) {
            console.log('Error' + error);
        }
    }
}

export default CartsCRUD