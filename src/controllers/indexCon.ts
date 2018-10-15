import { Router, Response, Request } from 'express'
import { BaseRouter } from '../interfaces/baseRouter'
import { get as getConfig } from 'config'

/**
* @class IndexController used to control  route
*/
export class IndexController implements BaseRouter {
    /**
    * @property basePath used as a base for routing related to the index
    */
    basePath: string = '/'

    /**
    * @constructor
    */
    constructor() {

    }

    /**
    * Returns a configured router for the route
    * @returns Router
    */
    returnRouter() : Router {
        return Router()
            .get('/', (req: Request, res: Response) => {
                res.redirect(getConfig('frontendUrl'))
            })
    }
}