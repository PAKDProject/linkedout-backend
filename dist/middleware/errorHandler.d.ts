import { Request, Response, NextFunction } from "express";
/**
 * Error handler which spits out error to the console. If environment is in development, the whole stack trace is shown.
 * @param err
 * @param req
 * @param res
 * @param next
 */
export declare let errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => void;
