import express from 'express';
import ClassesCoontroler from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionController';

const routes = express.Router();
const classesControllers = new ClassesCoontroler();
const connectionController = new ConnectionController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

export default routes;
