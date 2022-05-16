import Router  from "express";
import userController from "./controller/userController";

const router = Router();
router.get('/usuario/:id',userController.users);
router.put('/update/:id',userController.update);
router.post('/register',userController.create);
router.delete('/remove/:id',userController.remove);


export default router;