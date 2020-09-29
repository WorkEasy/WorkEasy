import express from 'express';
import ConnectionController from './controllers/ConnectionsController';
import ProblemsController from './controllers/ProblemsController';

const routes = express.Router(); 
const problemsControllers = new ProblemsController()
const conectionsController = new ConnectionController()

routes.post('/problems',problemsControllers.create);
routes.get('/problems',problemsControllers.index);

routes.post('/connections',conectionsController.create)
routes.get('/connections',conectionsController.index)
export default routes;