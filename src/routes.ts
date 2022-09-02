import { Router } from "express";
import { CreateUserController } from "./useCases/User/CreateUser/CreateUserController";
import { DeleteUserController } from "./useCases/User/DeleteUser/DeleteUserController";
import { GetUserByNameUseCaseController } from "./useCases/User/GetUser/GetUserByNameUseCaseController";
import { UpdateUserController } from "./useCases/User/UpdateUser/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const getUserController = new GetUserByNameUseCaseController();
const deleteUserController = new DeleteUserController();

router.post("/create-user", createUserController.handle);
router.put("/update-user", updateUserController.handle);
router.get("/get-user", getUserController.handle);
router.delete("/delete-user", deleteUserController.handle);

export { router };
