import { NextFunction, Request, Response } from 'express';
import OrderModel from '../models/order.model';

const orderModel = new OrderModel();

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderModel.createOrder(req.body);
    res.json({
      status: '200',
      data: order,
      messege: 'congratulations order added successfully ^^',
    });
  } catch (error) {
    next(error);
  }
};
const index = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await orderModel.index();
    res.json({
      status: '200',
      data: orders,
      messege: 'congratulations^^',
    });
  } catch (error) {
    next(error);
  }
};

const showOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderModel.show(parseInt(req.params.user_id));
    res.json({
      status: '200',
      data: order,
      messege: 'congratulations^^',
    });
  } catch (error) {
    next(error);
  }
};

export { createOrder, index, showOrder };
