import Router  from "express";
import userController from "./controller/userController";

const router = Router();
router.get('/usuario/:id',userController.users);
router.put('/update/:id',userController.update);
router.post('/register',userController.create);
router.delete('/remove/:id',userController.remove);

    // Lista de Usuários que tem os Serviços Mazza
router.get('/listusers',userController.AllUsers);
router.post('/addlist',userController.addList);

export default router;