import express from 'express'
import cartCRUD from '../controllers/cartCRUD.js'
import ProductsCRUD from '../controllers/productCRUD.js';

class CartRouter extends express.Router {
    constructor() {
        super()

        const controllerCart = new cartCRUD();
        const controllerProduct = new ProductsCRUD()

        this.post("/", async (req, res, next) => {
            try {
                const newCart = await controllerCart.createCart()
                console.log(newCart._id);

                res.json(`Un nuevo carrito fue craedo, su id es: ` + newCart._id)
            } catch (error) {
                next(error)
            }
        })

        this.post("/:id/productos", async (req, res, next) => {
            try {
                const id = req.params.id
                const prod = req.body

                await controllerCart.saveProduct(id, prod)

                res.json(`Un nuevo producto fue agregado a el carrito: ` + id)
            } catch (error) {
                next(error)
            }
        })

        this.get("/:id", async (req, res, next) => {
            try {
                const id = req.params.id
                const cartProd = await controllerCart.listAll(id)

                if (cartProd.length === 0) {
                    res.json(`No hay productos, agregue productos con ID para visualizarlos aqui `)
                } else {
                    res.json(`Lista de productos:  ${cartProd} `)
                }
            } catch (error) {
                next(error)
            }
        })

        this.delete('/:id', async (req, res, next) => {
            try {
                const id = req.params.id

                await controllerCart.deleteCart(id)

                console.log(`El carrrito fue eliminado`);
            } catch (error) {
                next(error)
            }
        })

        this.delete('/:id/productos/:id_prod', async (req, res, next) => {
            try {
                const { id } = req.params
                const {id_prod} = req.params
                await controllerCart.deleteProductCart(id, id_prod)

                console.log(`Los Productos del carrito fueron eliminados`);
            } catch (error) {
                next(error)
            }
        })
    }
}

export default CartRouter