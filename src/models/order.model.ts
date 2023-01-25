import db from '../db';
import Order from '../interfaces/orders.interface';

class OrderModel {
  async createOrder(order: Order): Promise<Order> {
    try {
      const connection = db.connect();
      const sql = `INSERT INTO orders (user_id, status) VALUES ($1,$2) returning *`;
      const result = (await connection).query(sql, [order.user_id, order.status]);
      (await connection).release
      return (await result).rows[0];
    } catch (error) {
      throw new Error(`sorry unable to create new order, Error : ${error}`);
    }
  }

  async index(): Promise<Order[]> {
    try {
      const connection = db.connect();
      const sql = `SELECT * FROM orders`;
      const orders = (await connection).query(sql);
      (await connection).release();
      return (await orders).rows;
    } catch (error) {
      throw new Error(`sorry unable to get all orders, Error : ${error}`);
    }
  }

  async show(user_id: number): Promise<Order> {
    try {
      const connection = db.connect();
      const sql = `SELECT * FROM orders WHERE user_id=($1)`;
      const order = (await connection).query(sql, [user_id]);
      (await connection).release();
      return (await order).rows[0];
    } catch (error) {
      throw new Error(`sorry unable to get this order, Error : ${error}`);
    }
  }
}

export default OrderModel;
