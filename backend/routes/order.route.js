import express from 'express';

import { createOrder, deleteOrder, getOrder, updateOrder } from '../controller/order.controller.js';

const router = express.Router();

router.get('/',getOrder)

router.put('/:id',updateOrder)

router.post('/',createOrder)

router.delete('/:id',deleteOrder)

export default router