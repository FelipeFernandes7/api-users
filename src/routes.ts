import Router from "express";
import userController from "./controller/userController";
import serviceController from "./controller/serviceController";
const router = Router();
router.get("/user/:id", userController.getById);
router.put("/update/:id", userController.update);
router.post("/register", userController.create);
router.delete("/delete/:id", userController.remove);

router.get("/services/:id", serviceController.getServiceById);
router.post("/service", serviceController.handleAddToList);
router.put("/service/:id", serviceController.updateService);
router.put("/services/:status", serviceController.updateAllServices);
router.delete("/services/:id", serviceController.removeService);

export default router;
