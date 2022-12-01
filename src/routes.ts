import { GetUserDescController } from './useCases/User/GetUserDesc/GetUserDescController';
import { Router } from "express";
import { CreateProdutoController } from "./useCases/Products/CreateProduto/CreateProdutoController";
import { GetProdutoByNameController } from "./useCases/Products/GetProdutoByName/GetProdutoByNameController";
import { CreateSaidasController } from "./useCases/Saidas/CreateSaida/CreateSaidasController";
import { DeleteProdutoController } from "./useCases/Products/DeleteProduto/DeleteProdutoController";
import { GetSaidaByDateController } from "./useCases/Saidas/GetSaidasByDate/GetSaidaByDateUseCaseController";
import { GetSaidaByValueController } from "./useCases/Saidas/GetSaidasByValor/GetSaidaByValueUseCaseController";
import { UpdateSaidaController } from "./useCases/Saidas/UpdateSaida/UpdateSaidaController";
import { CreateUserController } from "./useCases/User/CreateUser/CreateUserController";
import { DeleteUserController } from "./useCases/User/DeleteUser/DeleteUserController";
import { GetUserByNameController } from "./useCases/User/GetUser/GetUserByNameController";
import { UpdateUserController } from "./useCases/User/UpdateUser/UpdateUserController";
import { DeleteSaidaController } from "./useCases/Saidas/DeleteSaida/DeleteSaidaController";
import { UpdateProdutoController } from "./useCases/Products/UpdateProduto/UpdateProdutoController";
import { CreateClienteController } from "./useCases/Cliente/CreateCliente/CreateClienteController";
import { GetClienteByNameAscController } from "./useCases/Cliente/GetClienteByNameAsc/GetClienteByNameAscController";
import { DeleteClienteController } from "./useCases/Cliente/DeleteCliente/DeleteClienteController";
import { UpdateClienteController } from "./useCases/Cliente/UpdateCliente/UpdateClienteController";
import { GetEntradasByDateController } from "./useCases/Entradas/GetEntradasByName/GetEntradasByDateController";
import { CreateEntradaController } from "./useCases/Entradas/CreateEntradas/CreateEntradaController";
import { DeleteEntradaController } from "./useCases/Entradas/DeleteEntradas/DeleteEntradaController";
import { UpdateEntradaController } from "./useCases/Entradas/UpdateEntradas/UpdateEntradaController";
import { GetUserIdController } from "./useCases/User/GetUserId/GetUserIdController";
import { GetClienteIdController } from "./useCases/Cliente/GetClienteId/GetClienteIdController";
import { GetProdutoController } from "./useCases/Products/GetProduto/GetProdutoController";
import { GetSaidaIdController } from "./useCases/Saidas/GetSaidaId/GetSaidaIdUseCaseController";
import { GetEntradaController } from "./useCases/Entradas/GetEntrada/GetEntradaController";
import { AuthenticateUserController } from "./useCases/User/AuthenticateUser/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { RefreshTokenUserController } from "./useCases/User/RefreshTokenUser/RefreshTokenUserController";
import { GetProdutoByTypeVendaController } from "./useCases/Products/GetProdutoByType/GetProdutoByTypeController";
import { GetProdutoByTypeController } from './useCases/Products/GetProdutoByTypeVenda/GetProdutoByTypeVendaController';
import { GetClienteByNameDescController } from './useCases/Cliente/GetClienteByNameDesc/GetClienteByNameDescController';

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const getUserController = new GetUserByNameController();
const getUserDescController = new GetUserDescController();
const getUserIdController = new GetUserIdController();
const deleteUserController = new DeleteUserController();

const createSaidasController = new CreateSaidasController();
const deleteSaidasController = new DeleteSaidaController();
const updateSaidaController = new UpdateSaidaController();
const getSaidaByValueController = new GetSaidaByValueController();
const getSaidaByDateController = new GetSaidaByDateController();
const getSaidaIdController = new GetSaidaIdController();

const createProdutoController = new CreateProdutoController();
const getProdutosByName = new GetProdutoByNameController();
const getProdutosByType = new GetProdutoByTypeController();
const getProdutosByTypeVenda = new GetProdutoByTypeVendaController();
const getProduto = new GetProdutoController();
const deleteProdutoController = new DeleteProdutoController();
const updateProdutoController = new UpdateProdutoController();

const createClienteController = new CreateClienteController();
const getClienteByNameAsc = new GetClienteByNameAscController();
const getClienteById = new GetClienteIdController();
const deleteClienteController = new DeleteClienteController();
const updateClienteController = new UpdateClienteController();
const getClienteByNameDescController = new GetClienteByNameDescController();

const createEntradaController = new CreateEntradaController();
const getEntradaByDate = new GetEntradasByDateController();
const getEntrada = new GetEntradaController();
const deleteEntradaController = new DeleteEntradaController();
const updateEntradaController = new UpdateEntradaController();


router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenUserController.handle);

router.use(ensureAuthenticated)

/* User Routes */
router.post("/create-user", createUserController.handle);
router.put("/update-user/:id", updateUserController.handle);
router.get("/get-user", getUserController.handle);
router.get("/get-user-id/:id", getUserIdController.handle);
router.get("/get-user-by-data", getSaidaByDateController.handle);
router.get("/get-user-desc", getUserDescController.handle);
router.delete("/delete-user/:id", deleteUserController.handle);

/* Saidas Routes */
router.post("/create-saida", createSaidasController.handle);
router.delete("/delete-saida/:id", deleteSaidasController.handle);
router.put("/update-saida/:id", updateSaidaController.handle);
router.get("/get-saida-id/:id", getSaidaIdController.handle);
router.get("/get-saida", getSaidaByValueController.handle);

/* Produtos Routes */
router.get("/produtos", getProdutosByName.handle);
router.get("/produto/:id", getProduto.handle);
router.get("/produtosByType", getProdutosByType.handle);
router.get("/produtosByTypeVenda", getProdutosByTypeVenda.handle);
router.post("/create-produto", createProdutoController.handle);
router.delete("/delete-produto/:id", deleteProdutoController.handle);
router.put("/update-produto/:id", updateProdutoController.handle);

/* Clientes Routes */
router.get("/clientes", getClienteByNameAsc.handle);
router.get('/cliente-desc', getClienteByNameDescController.handle)
router.get("/cliente/:id", getClienteById.handle);
router.post("/create-cliente", createClienteController.handle);
router.delete("/delete-cliente/:id", deleteClienteController.handle);
router.put("/update-cliente/:id", updateClienteController.handle);

/* Entradas Routes */
router.get("/entradas", getEntradaByDate.handle);
router.get("/entrada/:id", getEntrada.handle);
router.post("/create-entrada", createEntradaController.handle);
router.delete("/delete-entrada/:id", deleteEntradaController.handle);
router.put("/update-entrada/:id", updateEntradaController.handle);

export { router };
