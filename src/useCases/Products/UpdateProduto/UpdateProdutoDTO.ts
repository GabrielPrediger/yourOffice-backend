export interface IProduct {
  id?: number;
  nome: string;
  descricao: string;
  quantidade: number;
  tipo: string; //alugar ou vender
  foto?: string;
  preco: number;
}
