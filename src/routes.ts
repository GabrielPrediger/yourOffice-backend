import { GetUserDescController } from './useCases/User/GetUserDesc/GetUserDescController';
import { Router } from "express";
import { CreateProdutoController } from "./useCases/Products/CreateProduto/CreateProdutoController";
import { GetProdutoByNameAscController } from "./useCases/Products/GetProdutoByName/GetProdutoByNameController";
import { CreateSaidasController } from "./useCases/Saidas/CreateSaida/CreateSaidasController";
import { DeleteProdutoController } from "./useCases/Products/DeleteProduto/DeleteProdutoController";
import { GetSaidaByDateAscController } from "./useCases/Saidas/GetSaidasByDateAsc/GetSaidaByDateAscController";
import { GetSaidaByValueAscController } from "./useCases/Saidas/GetSaidasByValorAsc/GetSaidaByValueAscController";
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
import { GetEntradasByDateAscController } from "./useCases/Entradas/GetEntradasByDateAsc/GetEntradasByDateAscController";
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
import { GetClienteByDateAscController } from './useCases/Cliente/GetClienteByDateAsc/GetClienteByDateAscController';
import { GetClienteByDateDescController } from './useCases/Cliente/GetClienteByDateDesc/GetClienteByDateDescController';
import { GetProdutoByNameDescController } from './useCases/Products/GetProdutoByNameDesc/GetProdutoByNameController';
import { GetProdutoByValueAscController } from './useCases/Products/GetProdutoByValueAsc/GetProdutoByValueAscController';
import { GetProdutoByValueDescController } from './useCases/Products/GetProdutoByValueDesc/GetProdutoByValueDescController';
import { GetProdutoByQuantidadeAscController } from './useCases/Products/GetProdutoByQuantidadeAsc/GetProdutoByQuantidadeAscController';
import { GetProdutoByQuantidadeDescController } from './useCases/Products/GetProdutoByQuantidadeDesc/GetProdutoByQuantidadeDescController';
import { GetSaidasByDateDescController } from './useCases/Saidas/GetSaidasByDateDesc/GetSaidasByDateDescController';
import { GetSaidasByValorDescController } from './useCases/Saidas/GetSaidasByValorDesc/GetSaidasByValorDescController';
import { GetEntradasByDateDescController } from './useCases/Entradas/GetEntradasByDateDesc/GetEntradasByDateDescController';
import { GetEntradasByValorAscController } from './useCases/Entradas/GetEntradasByValorAsc/GetEntradasByValorAscController';
import { GetEntradasByValorDescController } from './useCases/Entradas/GetEntradasByValorDesc/GetEntradasByValorDescController';
import { GetEntradasByTipoAscController } from './useCases/Entradas/GetEntradasByTipoAsc/GetEntradasByTipoAscController';
import { GetEntradasByTipoDescController } from './useCases/Entradas/GetEntradasByTipoDesc/GetEntradasByTipoDescController';
import { GetEntradasByDateAluguelAscController } from './useCases/Entradas/GetEntradasByDateAluguelAsc/GetEntradasByDateAluguelAscController';
import { GetEntradasByDateAluguelDescController } from './useCases/Entradas/GetEntradasByDateAluguelDesc/GetEntradasByDateAluguelDescController';
import { CancelarEntradaController } from './useCases/Entradas/CancelarEntrada/CancelarEntradaController';
import { UpdateIsAtrasadoController } from './useCases/Entradas/UpdateIsAtrasado/UpdateIsAtrasadoController';

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
const getSaidaByValueAscController = new GetSaidaByValueAscController();
const getSaidaByValueDescController = new GetSaidasByValorDescController();
const getSaidaByDateAscController = new GetSaidaByDateAscController();
const getSaidaByDateDescController = new GetSaidasByDateDescController();
const getSaidaIdController = new GetSaidaIdController();

const createProdutoController = new CreateProdutoController();
const getProdutosByName = new GetProdutoByNameAscController();
const getProdutosByNameDesc = new GetProdutoByNameDescController();
const getProdutosByType = new GetProdutoByTypeController();
const getProdutosByTypeVenda = new GetProdutoByTypeVendaController();
const getProdutosByValueAsc = new GetProdutoByValueAscController();
const getProdutosByValueDesc = new GetProdutoByValueDescController();
const getProdutosByQuantidadeAsc = new GetProdutoByQuantidadeAscController()
const getProdutosByQuantidadeDesc = new GetProdutoByQuantidadeDescController()
const getProduto = new GetProdutoController();
const deleteProdutoController = new DeleteProdutoController();
const updateProdutoController = new UpdateProdutoController();

const createClienteController = new CreateClienteController();
const getClienteByNameAsc = new GetClienteByNameAscController();
const getClienteById = new GetClienteIdController();
const deleteClienteController = new DeleteClienteController();
const updateClienteController = new UpdateClienteController();
const getClienteByNameDescController = new GetClienteByNameDescController();
const getClientesByDateAsc = new GetClienteByDateAscController()
const getClientesByDateDesc = new GetClienteByDateDescController()

const createEntradaController = new CreateEntradaController();
const getEntradaId = new GetEntradaController();
const deleteEntradaController = new CancelarEntradaController();
const updateEntradaController = new UpdateEntradaController();

const getEntradaByDateAsc = new GetEntradasByDateAscController();
const getEntradaByDateDesc = new GetEntradasByDateDescController();
const getEntradaByDateAluguelAsc = new GetEntradasByDateAluguelAscController();
const getEntradaByDateAluguelDesc = new GetEntradasByDateAluguelDescController();
const getEntradaByValorAsc = new GetEntradasByValorAscController();
const getEntradaByValorDesc = new GetEntradasByValorDescController();
const getEntradaByTipoAsc = new GetEntradasByTipoAscController();
const getEntradaByTipoDesc = new GetEntradasByTipoDescController();
const updateIsAtrasado = new UpdateIsAtrasadoController();


router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenUserController.handle);

router.use(ensureAuthenticated)

/* User Routes */
router.post("/create-user", createUserController.handle);
router.put("/update-user/:id", updateUserController.handle);
router.delete("/delete-user/:id", deleteUserController.handle);
router.get("/get-user-id/:id", getUserIdController.handle);
router.get("/get-user-asc", getUserController.handle);
router.get("/get-user-desc", getUserDescController.handle);

/* Saidas Routes */
router.post("/create-saida", createSaidasController.handle);
router.delete("/delete-saida/:id", deleteSaidasController.handle);
router.put("/update-saida/:id", updateSaidaController.handle);
router.get("/get-saida-id/:id", getSaidaIdController.handle);
router.get("/get-saida-by-valueAsc", getSaidaByValueAscController.handle);
router.get("/get-saida-by-valueDesc", getSaidaByValueDescController.handle);
router.get("/get-saida-by-dataAsc", getSaidaByDateAscController.handle);
router.get("/get-saida-by-dataDesc", getSaidaByDateDescController.handle);

/* Produtos Routes */
router.post("/create-produto", createProdutoController.handle);
router.delete("/delete-produto/:id", deleteProdutoController.handle);
router.put("/update-produto/:id", updateProdutoController.handle);
router.get("/produto/:id", getProduto.handle);
router.get("/produtos-name-asc", getProdutosByName.handle);
router.get("/produtos-name-desc", getProdutosByNameDesc.handle);
router.get("/produtos-type-asc", getProdutosByType.handle);
router.get("/produtos-type-desc", getProdutosByTypeVenda.handle);
router.get("/produtos-value-asc", getProdutosByValueAsc.handle);
router.get("/produtos-value-desc", getProdutosByValueDesc.handle);
router.get("/produtos-quantidade-asc", getProdutosByQuantidadeAsc.handle);
router.get("/produtos-quantidade-desc", getProdutosByQuantidadeDesc.handle);

/* Clientes Routes */
router.post("/create-cliente", createClienteController.handle);
router.delete("/delete-cliente/:id", deleteClienteController.handle);
router.put("/update-cliente/:id", updateClienteController.handle);
router.get("/cliente/:id", getClienteById.handle);
router.get("/clientes-nome-asc", getClienteByNameAsc.handle);
router.get('/clientes-nome-desc', getClienteByNameDescController.handle)
router.get('/clientes-data-asc', getClientesByDateAsc.handle)
router.get('/clientes-data-desc', getClientesByDateDesc.handle)


/* Entradas Routes */
router.get("/entrada/:id", getEntradaId.handle);
router.post("/create-entrada", createEntradaController.handle);
router.delete("/delete-entrada/:id", deleteEntradaController.handle);
router.put("/update-entrada/:id", updateEntradaController.handle);
router.put("/update-is-atrasado/:id", updateIsAtrasado.handle);
router.get("/entradas-by-date-aluguelAsc", getEntradaByDateAluguelAsc.handle);
router.get("/entradas-by-date-aluguelDesc", getEntradaByDateAluguelDesc.handle);
router.get("/entradas-by-dateDesc", getEntradaByDateDesc.handle);
router.get("/entradas-by-dateAsc", getEntradaByDateAsc.handle);
router.get("/entradas-by-dateDesc", getEntradaByDateDesc.handle);
router.get("/entradas-by-valorAsc", getEntradaByValorAsc.handle);
router.get("/entradas-by-valorDesc", getEntradaByValorDesc.handle);
router.get("/entradas-by-tipoAsc", getEntradaByTipoAsc.handle);
router.get("/entradas-by-tipoDesc", getEntradaByTipoDesc.handle);


export { router };
