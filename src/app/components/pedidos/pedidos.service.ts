import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PedidosDTO} from "./pedidos.dto";
import {Cliente} from "../cliente/cliente.model";

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

  save(pedido: PedidosDTO): Observable<PedidosDTO>{
    return this.http.post<PedidosDTO>("http://localhost:8080/pedido",pedido);
  }
}
