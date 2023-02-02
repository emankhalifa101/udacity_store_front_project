import { NextFunction, Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import config from '../config';
import Error from '../interfaces/error.interface';

const authValidationHandler = (req: Request, _res: Response, next: NextFunction) => {
  try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader?.split(' ')[1];
        if(token) {
          const decoded = Jwt.verify(token, config.tokenSecret as unknown as string)
          if(decoded) {
            next()
          }
        }
    } catch (err) {
      const error: Error = new Error('Authorization Error please try again');
      error.status = 401;
      next(error);
    }
};

export const createJWTToken = (id: number, email: string): string =>
  Jwt.sign({id, email}, config.tokenSecret as string)

export default authValidationHandler;
