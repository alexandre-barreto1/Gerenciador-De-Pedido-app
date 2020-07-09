import {Cliente} from "../cliente/cliente.model";
import {Produto} from "../produto/produto.model";

export interface Pedidos {
  id?: number,
  cliente: Cliente,
  totalDaCompra: string,
  dataDaCompra: Date,
  produtos: Produto[];
}
