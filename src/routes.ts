import { Router } from "express";
import { CreateSaidasController } from "./useCases/Saidas/CreateSaida/CreateSaidasController";
import { DeleteSaidaController } from "./useCases/Saidas/DeleteSaida/DeleteSaidaController";
import { GetSaidaByDateUseCaseController } from "./useCases/Saidas/GetSaidasByDate/GetSaidaByDateUseCaseController";
import { GetSaidaByValueUseCaseController } from "./useCases/Saidas/GetSaidasByValor/GetSaidaByValueUseCaseController";
import { UpdateSaidaController } from "./useCases/Saidas/UpdateSaida/UpdateSaidaController";
import { CreateUserController } from "./useCases/User/CreateUser/CreateUserController";
import { DeleteUserController } from "./useCases/User/DeleteUser/DeleteUserController";
import { GetUserByNameUseCaseController } from "./useCases/User/GetUser/GetUserByNameUseCaseController";
import { UpdateUserController } from "./useCases/User/UpdateUser/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const getUserController = new GetUserByNameUseCaseController();
const deleteUserController = new DeleteUserController();

const createSaidasController = new CreateSaidasController();
const deleteSaidasController = new DeleteSaidaController();
const updateSaidaController = new UpdateSaidaController();
const getSaidaByValueController = new GetSaidaByValueUseCaseController();
const getSaidaByDateController = new GetSaidaByDateUseCaseController();

/* User Routes */
router.post("/create-user", createUserController.handle);
router.put("/update-user", updateUserController.handle);
router.get("/get-user", getUserController.handle);
router.delete("/delete-user", deleteUserController.handle);

/* Saidas Routes */
router.post("/create-saida", createSaidasController.handle);
router.delete("/delete-saida", deleteSaidasController.handle);
router.put("/update-saida", updateSaidaController.handle);
router.get("/get-saida", getSaidaByValueController.handle);

export { router };
