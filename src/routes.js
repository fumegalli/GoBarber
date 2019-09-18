import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

const routes = new Router()

routes.post('/users', UserController.create)
routes.post('/session', SessionController.create)

routes.put('/users', UserController.update)

export default routes
