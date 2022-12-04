export interface IEntrada {
  id?: any;
  tipoVenda: string;
  data: Date;
  descricao: string;
  valor: number;
  clienteId: any;
  produtos: Array<{ id: number, quantidade: number }>;
  data_fim_aluguel?: string;
  data_inicio_aluguel?: string;
}
