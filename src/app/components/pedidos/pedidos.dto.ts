import {Cliente} from "../cliente/cliente.model";
import {Produto} from "../produto/produto.model";

export interface PedidosDTO {
  id?: number,
  cliente: Cliente,
  totalCompra: string,
  dataCompra: string,
  produtos: Produto[];
}
