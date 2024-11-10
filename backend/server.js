import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import orderRoutes from './routes/order.route.js';

dotenv.config()

const app = express();

app.use(express.json());

app.use('/api/orders',orderRoutes);

console.log(process.env.MONGO_URI)

app.get('/',(req,res)=>{
    res.send('Fuct it');
})


app.listen(5000,()=>{
    connectDB()
    console.log('server running at 5000 lets do it');
})

//kishorebabu200409
//kishore26

//mongodb+srv://kishorebabu200409:<db_password>@cluster0.hf4t5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

