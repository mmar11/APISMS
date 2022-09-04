import { Router } from 'express'
import * as msgController from './controllers/mensages.js'
import { inicio } from './controllers/inicio.js'

const routes = Router()

routes.get('/', inicio)

routes.post('/message', msgController.msgPost)
routes.post('/message/:id', msgController.msgPostid)


export default routes