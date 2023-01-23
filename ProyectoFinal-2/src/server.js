import express from 'express'
import conectionMongo from "./config/mongoConecction.js";
import ProductsRouter  from './router/productRouter.js';
import CartRouter from './router/cartRouter.js';

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

//conecxion mongo
conectionMongo();

app.use('/api/productos', new ProductsRouter())
app.use('/api/carrito', new CartRouter())


const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> console.log('server escuchando en 8080'))
