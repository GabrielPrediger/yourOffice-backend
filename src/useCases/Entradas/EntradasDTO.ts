import { Produto } from "../../types/IProduto";
export interface IEntrada {
  id?: any;
  tipoVenda: string;
  data: Date;
  descricao: string;
  valor: number;
  clienteId: any;
  produtoIds: number;
}
