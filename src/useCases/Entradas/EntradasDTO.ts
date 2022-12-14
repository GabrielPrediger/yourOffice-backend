export interface IEntrada {
  id?: number;
  tipoVenda: string;
  descricao: string;
  valor: number;
  clienteId: any;
  produtos: Array<{ id: number, quantidade: number }>;
  data?: string | number | Date | undefined;
  data_fim_aluguel?: string | number | Date | undefined;
  data_inicio_aluguel?: string | number | Date | undefined;
}
