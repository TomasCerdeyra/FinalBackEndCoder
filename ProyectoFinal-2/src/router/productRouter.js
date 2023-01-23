import express from 'express'
import ProductsCRUD from '../controllers/productCRUD.js';



class ProductsRouter extends express.Router{
    constructor(){
        super()

        const admin = true

        const controller = new ProductsCRUD();

        this.get("/", async (req,res, next) => {
            try {
                const products = await controller.listAll()
                
                if (products.length === 0 ) {
                    res.json(`No hay productos, agregue productos para visualizarlos aqui `)
                }else{
                    res.json(`Lista de productos:  ${products} `)
                }
            } catch (error) {
                next(error)
            }
        })

        this.get("/:id", async (req,res, next) => {
            try {
                res.json(`El producto con el id buscado es:  ${await controller.listById(req.params.id)} `)
            } catch (error) {
                next(error)
            }
        })

        this.post("/", async (req,res, next) => {
            try {
                if (admin !== true) {
                    next('error')
                }
                controller.save(req.body)
                res.json(`Un producto nuevo fuer agregado`)
            } catch (error) {
                next(error)
            }
        })

        this.put("/:id", async (req,res, next) => {
            try {
                if (admin !== true) {
                    next('error')
                }

                const id = req.params.id
                const prodUpdate = req.body
                
                controller.update(id, prodUpdate)

                res.json(`El producto ${req.params.id} fue actualizado`)
            } catch (error) {
                next(error)
            }
        })

        this.delete("/:id", async (req,res, next) => {
            try {
                if (admin !== true) {
                    next('error')
                }

                controller.delete(req.params.id)

                console.log(`El producto ${req.params.id} fue eliminado`)
            } catch (error) {
                next(error)
            }
        })
    }
}

export default ProductsRouter