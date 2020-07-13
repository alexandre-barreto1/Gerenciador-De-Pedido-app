import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PedidosDTO} from "./pedidos.dto";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  buscarPedidoPeloProduto(sku: string): Observable<PedidosDTO>{
    return this.http.get<PedidosDTO>("http://localhost:8080/pedido/produto/"+sku)
  }

  read(): Observable<PedidosDTO[]>{
    return this.http.get<PedidosDTO[]>("http://localhost:8080/pedido");
  }
}
