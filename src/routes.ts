import { Router } from "express";
import { CreateProdutoController } from "./useCases/Products/CreateProduto/CreateProdutoController";
import { GetProdutoByNameController } from "./useCases/Products/GetProdutoByName/GetProdutoByNameController";
import { CreateSaidasController } from "./useCases/Saidas/CreateSaida/CreateSaidasController";
import { DeleteProdutoController } from "./useCases/Products/DeleteProduto/DeleteProdutoController";
import { GetSaidaByDateUseCaseController } from "./useCases/Saidas/GetSaidasByDate/GetSaidaByDateUseCaseController";
import { GetSaidaByValueUseCaseController } from "./useCases/Saidas/GetSaidasByValor/GetSaidaByValueUseCaseController";
import { UpdateSaidaController } from "./useCases/Saidas/UpdateSaida/UpdateSaidaController";
import { CreateUserController } from "./useCases/User/CreateUser/CreateUserController";
import { DeleteUserController } from "./useCases/User/DeleteUser/DeleteUserController";
import { GetUserByNameController } from "./useCases/User/GetUser/GetUserByNameController";
import { UpdateUserController } from "./useCases/User/UpdateUser/UpdateUserController";
import { DeleteSaidaController } from "./useCases/Saidas/DeleteSaida/DeleteSaidaController";
import { UpdateProdutoController } from "./useCases/Products/UpdateProduto/UpdateProdutoController";

const router = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const getUserController = new GetUserByNameController();
const deleteUserController = new DeleteUserController();

const createSaidasController = new CreateSaidasController();
const deleteSaidasController = new DeleteSaidaController();
const updateSaidaController = new UpdateSaidaController();
const getSaidaByValueController = new GetSaidaByValueUseCaseController();
const getSaidaByDateController = new GetSaidaByDateUseCaseController();

const createProdutoController = new CreateProdutoController();
const getProdutosByName = new GetProdutoByNameController();
const deleteProdutoController = new DeleteProdutoController();
const updateProdutoController = new UpdateProdutoController();

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

/* Produtos Routes */
router.get("/produtos", getProdutosByName.handle);
router.post("/create-produto", createProdutoController.handle);
router.delete("/delete-produto", deleteProdutoController.handle);
router.put("/update-produto", updateProdutoController.handle);

export { router };
