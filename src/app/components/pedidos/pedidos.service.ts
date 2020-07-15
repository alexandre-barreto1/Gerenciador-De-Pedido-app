import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PedidosDTO} from "./pedidos.dto";
import {Cliente} from "../cliente/cliente.model";
import {Pedidos} from "./pedidos.model";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  buscarPedidoPeloProduto(sku: string): Observable<PedidosDTO>{
    return this.http.get<PedidosDTO>("http://localhost:8080/pedido/produto/"+sku)
  }

  buscarClientePeloCpf(cpf: string): Observable<Cliente>{
    return this.http.get<Cliente>("http://localhost:8080/pedido/cliente/"+cpf)
  }

  read(): Observable<PedidosDTO[]>{
    return this.http.get<PedidosDTO[]>("http://localhost:8080/pedido");
  }

  save(pedido: PedidosDTO): Observable<Pedidos>{
    return this.http.post<Pedidos>("http://localhost:8080/pedido",pedido);
  }

  delete(id: number): Observable<Pedidos> {
    return this.http.delete<Pedidos>("http://localhost:8080/pedido/"+id);
  }

  update(id: number,pedido: PedidosDTO): Observable<Pedidos> {
    return this.http.put<Pedidos>("http://localhost:8080/pedido/"+id,pedido);
  }
}
