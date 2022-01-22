import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from 'cors';
import {createConnection} from 'typeorm'
import {Product} from './entity/Product';

createConnection().then(db => {
    const productRepository = db.getRepository(Product);
    const app = express();
    
    app.use(cors({
        origin: ['http://localhost:3000','http://localhost:8080','http://localhost:4200']
    }));
    
    app.use(express.json());

    app.get('/api/products', async (req: Request, res: Response) => {
        const products = await productRepository.find();
        return res.json(products);
    });

    app.post('/api/products', async (req: Request, res: Response) => {
        const product = await productRepository.create(req.body);
        const result = await productRepository.save(product);
        return res.send(result);
    });

    app.get('/api/product/:id', async (req: Request, res: Response) => {
        const products = await productRepository.findOne(req.params.id);
        return res.json(products);
    });

    app.put('/api/product/:id', async (req: Request, res: Response) => {
        const product = await productRepository.findOne(req.params.id);
        productRepository.merge(product, req.body);
        const result = await productRepository.save(product);
        return res.send(result);
    });

    app.delete('/api/product/:id', async (req: Request, res: Response)=>{
        const result = await productRepository.delete(req.params.id);
        return res.send(result);
    });

    app.post('/api/product/:id/like', async (req: Request, res: Response) => {
        const product = await productRepository.findOne(req.params.id);
        product.likes++;
        const result = await productRepository.save(product);
        return res.send(result);
    });

    
    console.log('Listening to port: 8000');
    
    app.listen(8000);

}).catch(err=>{
    console.log(err);
    throw err;
})
