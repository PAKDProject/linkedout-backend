import { Router, Response, Request } from 'express'
import { BaseRouter } from '../interfaces/baseRouter'

/**
* @class TestController is used to simply check that the server is up and running
*/
export class TestController implements BaseRouter {
    /**
    * @property basePath used as a base for routing related to the index
    */
    basePath: string = '/test'

    /**
    * @constructor
    */
    constructor() {

    }

    /**
    * Returns a configured router for the route
    * @returns Router
    */
    returnRouter(): Router {
        return Router()
            .get('/', (req: Request, res: Response) => {
                res.send("Hello World!");
            })
            .get('/:string', (req: Request, res: Response) => {
                res.send(req.params.string);
            })
    }
}