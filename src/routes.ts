import Router  from "express";
import userController from "./controller/userController";
import serviceController from "./controller/serviceController";
const router = Router();
router.get('/usuario/:id',userController.users);
router.put('/update/:id',userController.update);
router.post('/register',userController.create);
router.delete('/remove/:id',userController.remove);

    // Lista de Usuários que tem os Serviços Mazza
router.get('/listusers',serviceController.AllUsers);
router.post('/addlist',serviceController.addList);
router.put('/userupdate/:id',serviceController.updateUser);
router.put('/updateall/:status',serviceController.updateAllUsers);
router.delete('/removeuser',serviceController.removeUser);

export default router;