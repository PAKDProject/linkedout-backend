import { Router, Response, Request } from 'express'
import { BaseRouter } from '../lib/baseRouter'

/**
* @class ByeController used to control bye route
*/
export class ByeController implements BaseRouter {
    /**
    * @property basePath used as a base for routing related to the index
    */
    basePath: string = '/bye'

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
                res.send('Bye')
            })
            .get('/:name', (req: Request, res: Response) => {
                let name = req.params.name
                res.send(`Hello ${name}`)
            })
    }
}