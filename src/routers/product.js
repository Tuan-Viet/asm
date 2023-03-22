import express from 'express';
import { create, get, getAll, remove, update } from '../controllers/product';
const Router = express.Router();

Router.post('/products', create)
Router.get('/products', getAll)
Router.get('/products/:id', get)
Router.put('/products/:id', update)
Router.delete('/products/:id', remove)

export default Router;